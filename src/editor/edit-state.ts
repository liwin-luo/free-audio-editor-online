/**
 * Edit settings with no audio graph. The page script can hold these without
 * pulling the offline renderer (and the pitch vocoder behind it).
 */

export interface EditState {
  /** keep = export only the selection; delete = remove the selection */
  mode: 'keep' | 'delete';
  sel: { start: number; end: number } | null;
  /** linear gain, 1 = unchanged (ignored when normalize is on) */
  gain: number;
  /** playback rate, 1 = unchanged */
  speed: number;
  /** When set, speed changes duration and the pitch is shifted back. 1× skips that shift. */
  keepPitch: boolean;
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
  /** dynamics compress amount, 0 = bypass, 1 = full. Makeup restores the source peak. */
  compress: number;
  /** echo delay in seconds. 0 = dry; feedback is ignored. */
  echoDelay: number;
  /** echo feedback gain, 0…0.55 */
  echoFeedback: number;
  /** waveshaper drive, 0 = bypass, 1 = hard tanh clip */
  distort: number;
  /** auto-pan depth, 0 = bypass (no StereoPanner in the graph), 1 = full left/right */
  panDepth: number;
  /** auto-pan rate in Hz, 0.05…2. Ignored when panDepth is 0. */
  panRate: number;
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
    keepPitch: false,
    pitch: 0,
    fadeIn: 0,
    fadeOut: 0,
    reverse: false,
    normalize: false,
    reverb: 0,
    compress: 0,
    echoDelay: 0,
    echoFeedback: 0.35,
    distort: 0,
    panDepth: 0,
    panRate: 0.2,
    bass: 0,
    treble: 0,
    mid: 0,
    hpf: 20,
    lpf: 20000,
  };
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
