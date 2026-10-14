/**
 * Offline rendering of edit states. The original AudioBuffer is never mutated —
 * every export is rendered into a fresh buffer via OfflineAudioContext.
 */
import { clamp } from '../lib/format';

export interface EditState {
  /** keep = export only the selection; delete = remove the selection */
  mode: 'keep' | 'delete';
  sel: { start: number; end: number } | null;
  /** linear gain, 1 = unchanged */
  gain: number;
  /** playback rate, 1 = unchanged */
  speed: number;
  /** fade-in seconds (applied at output start) */
  fadeIn: number;
  /** fade-out seconds (applied at output end) */
  fadeOut: number;
  reverse: boolean;
}

export function defaultEditState(): EditState {
  return {
    mode: 'keep',
    sel: null,
    gain: 1,
    speed: 1,
    fadeIn: 0,
    fadeOut: 0,
    reverse: false,
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

export async function renderEdit(buffer: AudioBuffer, state: EditState): Promise<AudioBuffer> {
  const rate = buffer.sampleRate;
  const speed = clamp(state.speed, 0.25, 4);
  const ranges = survivingRanges(buffer.duration, state);
  const outDuration =
    ranges.reduce((acc, r) => acc + (r.to - r.from) / speed, 0) || 0.001;

  const ctx = new OfflineAudioContext(
    Math.min(buffer.numberOfChannels, 2),
    Math.max(1, Math.ceil(outDuration * rate) + 1),
    rate,
  );

  let t = 0;
  ranges.forEach((range, i) => {
    const segDur = (range.to - range.from) / speed;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = speed;
    const gain = ctx.createGain();
    src.connect(gain);
    gain.connect(ctx.destination);

    const isLast = i === ranges.length - 1;
    gain.gain.setValueAtTime(state.gain, t);
    if (state.fadeIn > 0 && i === 0) {
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(state.gain, t + Math.min(state.fadeIn, segDur));
    }
    if (state.fadeOut > 0 && isLast) {
      const fs = Math.min(state.fadeOut, segDur);
      gain.gain.setValueAtTime(state.gain, t + segDur - fs);
      gain.gain.linearRampToValueAtTime(0.0001, t + segDur);
    }

    // offset/duration are buffer-time units — playbackRate must not scale them
    src.start(t, range.from, range.to - range.from);
    t += segDur;
  });

  const rendered = await ctx.startRendering();
  if (state.reverse) {
    for (let c = 0; c < rendered.numberOfChannels; c++) {
      rendered.getChannelData(c).reverse();
    }
  }
  return rendered;
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
