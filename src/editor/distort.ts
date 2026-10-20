import { clamp } from '../lib/format';

/**
 * Symmetric tanh clip. Drive 0 is identity and the graph skips the node.
 * k = 10^(drive × 1.6) − 1. At 40%, k ≈ 3.4 and a 0.25 sample becomes ≈ 0.69.
 * At 100%, k ≈ 39 and that sample is pushed to about 1.
 * ponytail: one symmetric curve, no cabinet, bias, or bitcrush.
 * Upgrade path is an asymmetric curve or a low-pass on this page.
 */
export function distortAt(x: number, drive: number): number {
  const d = clamp(drive, 0, 1);
  if (d === 0) return x;
  const k = 10 ** (d * 1.6) - 1;
  return Math.tanh(k * x) / Math.tanh(k);
}

export function distortionCurve(drive: number, n = 2048): Float32Array {
  const curve = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    curve[i] = distortAt(x, drive);
  }
  return curve;
}
