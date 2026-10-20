import { pitchShiftChannel } from './pitch';
import { snapTempo } from './tempo-snap';

export { TEMPO_MAX, TEMPO_MIN, snapTempo } from './tempo-snap';

/** playbackRate r: output is longer when r < 1, and the pitch moves with it. */
function resample(input: Float32Array, rate: number): Float32Array {
  const outLen = Math.max(1, Math.round(input.length / rate));
  const out = new Float32Array(outLen);
  const last = input.length - 1;
  for (let i = 0; i < outLen; i++) {
    const x = i * rate;
    const i0 = Math.min(last, Math.floor(x));
    const i1 = Math.min(last, i0 + 1);
    const frac = x - i0;
    const a = input[i0] ?? 0;
    const b = input[i1] ?? 0;
    out[i] = a + (b - a) * frac;
  }
  return out;
}

/**
 * Change duration by 1/rate, then shift pitch back so the key stays.
 * 1× returns a copy and does not run the vocoder.
 */
export function tempoKeepPitch(input: Float32Array, rate: number, sampleRate: number): Float32Array {
  const r = snapTempo(rate);
  if (r === 1 || input.length === 0) return new Float32Array(input);
  const stretched = resample(input, r);
  return pitchShiftChannel(stretched, -12 * Math.log2(r), sampleRate);
}
