/**
 * Offline rendering of edit states. The original AudioBuffer is never mutated —
 * every export is rendered into a fresh buffer via OfflineAudioContext.
 */
import { clamp } from '../lib/format';
import { pitchShiftChannel } from './pitch';

export interface EditState {
  /** keep = export only the selection; delete = remove the selection */
  mode: 'keep' | 'delete';
  sel: { start: number; end: number } | null;
  /** linear gain, 1 = unchanged (ignored when normalize is on) */
  gain: number;
  /** playback rate, 1 = unchanged */
  speed: number;
  /** semitones, 0 = unchanged. Applied after the edit so length follows speed, not pitch. */
  pitch: number;
  /** fade-in seconds (applied at output start) */
  fadeIn: number;
  /** fade-out seconds (applied at output end) */
  fadeOut: number;
  reverse: boolean;
  /** raise the surviving audio so its peak hits −0.2 dBFS (capped at +12 dB) */
  normalize: boolean;
  /** reverb wet mix, 0 = dry, 1 = full synthesized-room send */
  reverb: number;
  /** low-shelf gain in dB (150 Hz corner, −15…+15); booster page exposes 0…+15 */
  bass: number;
  /** high-shelf gain in dB (3 kHz corner, −15…+15) */
  treble: number;
  /** peaking gain in dB (1 kHz, Q 1, −15…+15) */
  mid: number;
  /** high-pass cutoff in Hz; 20 ≈ transparent */
  hpf: number;
  /** low-pass cutoff in Hz; 20000 ≈ transparent */
  lpf: number;
}

export function defaultEditState(): EditState {
  return {
    mode: 'keep',
    sel: null,
    gain: 1,
    speed: 1,
    pitch: 0,
    fadeIn: 0,
    fadeOut: 0,
    reverse: false,
    normalize: false,
    reverb: 0,
    bass: 0,
    treble: 0,
    mid: 0,
    hpf: 20,
    lpf: 20000,
  };
}

function resampleBuffer(buffer: AudioBuffer, targetRate: number): Promise<AudioBuffer> {
  if (buffer.sampleRate === targetRate) return Promise.resolve(buffer);
  const ctx = new OfflineAudioContext(
    Math.min(buffer.numberOfChannels, 2),
    Math.ceil((buffer.duration * targetRate) | 0) || 1,
    targetRate,
  );
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.connect(ctx.destination);
  src.start();
  return ctx.startRendering();
}

interface RenderRange {
  /** source-time start */
  from: number;
  /** source-time end */
  to: number;
}

/** Compute the source ranges that survive the cut. */
export function survivingRanges(duration: number, state: EditState): RenderRange[] {
  if (!state.sel) return [{ from: 0, to: duration }];
  const { start, end } = state.sel;
  if (state.mode === 'keep') return [{ from: start, to: end }];
  const ranges: RenderRange[] = [];
  if (start > 0.001) ranges.push({ from: 0, to: start });
  if (end < duration - 0.001) ranges.push({ from: end, to: duration });
  if (ranges.length === 0) return [{ from: 0, to: duration }];
  return ranges;
}

/**
 * Linear gain that brings the surviving audio's peak to −0.2 dBFS, capped at
 * +12 dB so near-silence is not amplified into noise. Normalize takes
 * precedence over the manual volume slider.
 */
export function computeNormalizeGain(buffer: AudioBuffer, state: EditState): number {
  const ranges = survivingRanges(buffer.duration, state);
  const rate = buffer.sampleRate;
  let peak = 0;
  for (const r of ranges) {
    const from = Math.max(0, Math.floor(r.from * rate));
    const to = Math.min(buffer.length, Math.ceil(r.to * rate));
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      const d = buffer.getChannelData(c);
      for (let i = from; i < to; i++) {
        const a = Math.abs(d[i]);
        if (a > peak) peak = a;
      }
    }
  }
  if (peak < 1e-6) return 1;
  return Math.min(0.98 / peak, 4);
}

/** Synthesized room length. The offline render must include this tail. */
const REVERB_SECONDS = 2.2;

/** Synthesized room impulse response — exponentially decaying stereo noise. */
function createReverbIR(ctx: BaseAudioContext, seconds = REVERB_SECONDS): AudioBuffer {
  const rate = ctx.sampleRate;
  const len = Math.max(1, Math.floor(seconds * rate));
  const ir = ctx.createBuffer(2, len, rate);
  for (let c = 0; c < 2; c++) {
    const d = ir.getChannelData(c);
    for (let i = 0; i < len; i++) {
      const t = i / len;
      d[i] = (Math.random() * 2 - 1) * Math.exp(-3.2 * t) * (1 - t) * (1 - t);
    }
  }
  return ir;
}

export async function renderEdit(buffer: AudioBuffer, state: EditState): Promise<AudioBuffer> {
  const rate = buffer.sampleRate;
  const speed = clamp(state.speed, 0.25, 4);
  const ranges = survivingRanges(buffer.duration, state);
  const outDuration =
    ranges.reduce((acc, r) => acc + (r.to - r.from) / speed, 0) || 0.001;
  const gain = state.normalize ? computeNormalizeGain(buffer, state) : state.gain;
  const wet = clamp(state.reverb, 0, 1);

  // Convolution past the dry end is discarded unless the context is long enough.
  const tail = wet > 0 ? REVERB_SECONDS : 0;
  const ctx = new OfflineAudioContext(
    Math.min(buffer.numberOfChannels, 2),
    Math.max(1, Math.ceil((outDuration + tail) * rate) + 1),
    rate,
  );

  // Master bus: a manual boost can exceed 0 dBFS, so a limiter catches peaks.
  // Peak-normalize already targets 0.98 and must not be pulled down by that limiter.
  const bassDb = clamp(state.bass, -15, 15);
  const trebleDb = clamp(state.treble, -15, 15);
  const midDb = clamp(state.mid, -15, 15);
  const hpfHz = clamp(state.hpf, 20, 5000);
  const lpfHz = clamp(state.lpf, 300, 20000);
  // only gain-adding stages can push samples past full scale
  const boosts = bassDb > 0 || trebleDb > 0 || midDb > 0;
  const master = ctx.createGain();
  let bus: AudioNode = master;
  const shelf = (type: BiquadFilterType, freq: number, gainDb: number) => {
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.gain.value = gainDb;
    bus.connect(f);
    bus = f;
  };
  if (bassDb !== 0) shelf('lowshelf', 150, bassDb);
  if (midDb !== 0) {
    shelf('peaking', 1000, midDb);
    bus && ((bus as BiquadFilterNode).Q.value = 1);
  }
  if (trebleDb !== 0) shelf('highshelf', 3000, trebleDb);
  if (hpfHz > 25) shelf('highpass', hpfHz, 0);
  if (lpfHz < 19000) shelf('lowpass', lpfHz, 0);
  if ((!state.normalize && gain > 1) || boosts) {
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -2;
    limiter.knee.value = 3;
    limiter.ratio.value = 20;
    limiter.attack.value = 0.002;
    limiter.release.value = 0.15;
    bus.connect(limiter);
    bus = limiter;
  }
  bus.connect(ctx.destination);
  if (wet > 0) {
    const convolver = ctx.createConvolver();
    convolver.buffer = createReverbIR(ctx);
    const wetGain = ctx.createGain();
    wetGain.gain.value = wet;
    bus.connect(convolver);
    convolver.connect(wetGain);
    wetGain.connect(ctx.destination);
  }

  let t = 0;
  ranges.forEach((range, i) => {
    const segDur = (range.to - range.from) / speed;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = speed;
    const seg = ctx.createGain();
    src.connect(seg);
    seg.connect(master);

    const isLast = i === ranges.length - 1;
    seg.gain.setValueAtTime(gain, t);
    if (state.fadeIn > 0 && i === 0) {
      seg.gain.setValueAtTime(0.0001, t);
      seg.gain.linearRampToValueAtTime(gain, t + Math.min(state.fadeIn, segDur));
    }
    if (state.fadeOut > 0 && isLast) {
      const fs = Math.min(state.fadeOut, segDur);
      seg.gain.setValueAtTime(gain, t + segDur - fs);
      seg.gain.linearRampToValueAtTime(0.0001, t + segDur);
    }

    // offset/duration are buffer-time units — playbackRate must not scale them
    src.start(t, range.from, range.to - range.from);
    t += segDur;
  });

  const rendered = await ctx.startRendering();
  if (!state.normalize && (gain > 1 || boosts)) softClipGuard(rendered);
  if (state.normalize && boosts) {
    // the shelf raises lows after peak-normalize measured the source — pull
    // the render back to the normalize target instead of letting it clip
    let peak = 0;
    for (let c = 0; c < rendered.numberOfChannels; c++) {
      const d = rendered.getChannelData(c);
      for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i]!));
    }
    if (peak > 0.98) {
      const g = 0.98 / peak;
      for (let c = 0; c < rendered.numberOfChannels; c++) {
        const d = rendered.getChannelData(c);
        for (let i = 0; i < d.length; i++) d[i] = d[i]! * g;
      }
    }
  }
  if (state.reverse) {
    for (let c = 0; c < rendered.numberOfChannels; c++) {
      rendered.getChannelData(c).reverse();
    }
  }
  const semis = Math.round(clamp(state.pitch, -12, 12));
  if (semis !== 0) {
    for (let c = 0; c < rendered.numberOfChannels; c++) {
      const shifted = pitchShiftChannel(rendered.getChannelData(c), semis, rendered.sampleRate);
      rendered.getChannelData(c).set(shifted);
    }
    // The phase vocoder gain wobbles a little with the shift. Pull only the overs down.
    let peak = 0;
    for (let c = 0; c < rendered.numberOfChannels; c++) {
      const d = rendered.getChannelData(c);
      for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i]!));
    }
    if (peak > 0.98) {
      const g = 0.98 / peak;
      for (let c = 0; c < rendered.numberOfChannels; c++) {
        const d = rendered.getChannelData(c);
        for (let i = 0; i < d.length; i++) d[i] = d[i]! * g;
      }
    }
  }
  return rendered;
}

/** Soft-clip any overs so boosts never produce harsh digital clipping. */
function softClipGuard(buffer: AudioBuffer): void {
  let overs = false;
  for (let c = 0; c < buffer.numberOfChannels && !overs; c++) {
    const d = buffer.getChannelData(c);
    for (let i = 0; i < d.length; i++) {
      if (d[i] > 1 || d[i] < -1) {
        overs = true;
        break;
      }
    }
  }
  if (!overs) return;
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const d = buffer.getChannelData(c);
    for (let i = 0; i < d.length; i++) d[i] = Math.tanh(d[i]);
  }
}

export interface MergeOptions {
  crossfadeSec: number;
  gain: number;
  fadeIn: number;
  fadeOut: number;
}

/** Sequentially merge clips into one buffer, with optional equal-power crossfade. */
export async function renderMerge(
  clips: AudioBuffer[],
  opts: MergeOptions,
): Promise<AudioBuffer> {
  const rate = clips[0]?.sampleRate ?? 44100;
  const normalized = await Promise.all(clips.map((c) => resampleBuffer(c, rate)));

  const xfade = Math.max(0, opts.crossfadeSec);
  const starts: number[] = [];
  let acc = 0;
  for (let i = 0; i < normalized.length; i++) {
    const start = i === 0 ? 0 : Math.max(0, acc - xfade);
    starts.push(start);
    acc = start + normalized[i].duration;
  }
  const total = acc || 0.001;

  const ctx = new OfflineAudioContext(
    Math.max(...normalized.map((c) => Math.min(c.numberOfChannels, 2))),
    Math.max(1, Math.ceil(total * rate) + 1),
    rate,
  );

  normalized.forEach((clip, i) => {
    const src = ctx.createBufferSource();
    src.buffer = clip;
    const g = ctx.createGain();
    src.connect(g);
    g.connect(ctx.destination);

    const start = starts[i];
    g.gain.setValueAtTime(opts.gain, start);

    if (xfade > 0 && i > 0) {
      // fade this clip in across the overlap with the previous one
      g.gain.setValueAtTime(0.0001, start);
      g.gain.linearRampToValueAtTime(opts.gain, start + xfade);
    }
    if (xfade > 0 && i < normalized.length - 1) {
      const nextStart = starts[i + 1];
      const overlapEnd = start + clip.duration;
      const fadeStart = Math.max(start, nextStart);
      if (fadeStart < overlapEnd) {
        g.gain.setValueAtTime(opts.gain, fadeStart);
        g.gain.linearRampToValueAtTime(0.0001, overlapEnd);
      }
    }

    src.start(start);
  });

  const rendered = await ctx.startRendering();

  if (opts.fadeIn > 0) {
    applyLinearFade(rendered, 0, Math.min(opts.fadeIn, rendered.duration), true);
  }
  if (opts.fadeOut > 0) {
    applyLinearFade(rendered, rendered.duration - Math.min(opts.fadeOut, rendered.duration), rendered.duration, false);
  }
  return rendered;
}

function applyLinearFade(buffer: AudioBuffer, fromSec: number, toSec: number, fadeIn: boolean): void {
  const rate = buffer.sampleRate;
  const from = Math.max(0, Math.floor(fromSec * rate));
  const to = Math.min(buffer.length, Math.ceil(toSec * rate));
  if (to <= from) return;
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const d = buffer.getChannelData(c);
    for (let i = from; i < to; i++) {
      const factor = fadeIn ? (i - from) / (to - from) : 1 - (i - from) / (to - from);
      d[i] *= factor;
    }
  }
}
