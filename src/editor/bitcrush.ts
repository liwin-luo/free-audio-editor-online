export const CRUSH_MIN_BITS = 1;
export const CRUSH_MAX_BITS = 16;
export const CRUSH_MIN_HOLD = 1;
export const CRUSH_MAX_HOLD = 32;

export function clampBits(bits: number): number {
  return Math.min(CRUSH_MAX_BITS, Math.max(CRUSH_MIN_BITS, Math.round(bits) || 8));
}

export function clampHold(hold: number): number {
  return Math.min(CRUSH_MAX_HOLD, Math.max(CRUSH_MIN_HOLD, Math.round(hold) || 1));
}

/** Quantize to `bits` and hold that value for `hold` samples. 16 bits and hold 1 leaves a full-scale sample put. */
export function crushChannel(input: Float32Array, bits: number, hold: number): Float32Array {
  const depth = clampBits(bits);
  const step = clampHold(hold);
  const max = 2 ** (depth - 1);
  const out = new Float32Array(input.length);
  let held = 0;
  for (let i = 0; i < input.length; i++) {
    if (i % step === 0) {
      const x = Math.max(-1, Math.min(1, input[i] ?? 0));
      held = Math.round(x * max) / max;
    }
    out[i] = held;
  }
  return out;
}
