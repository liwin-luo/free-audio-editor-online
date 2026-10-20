import { clamp } from '../lib/format';

/** Pan at time t: depth × sin(2π · rate · t). Depth 0 is center, and the graph skips the node. */
export function panAt(t: number, depth: number, rateHz: number): number {
  const d = clamp(depth, 0, 1);
  if (d === 0) return 0;
  const f = clamp(rateHz, 0.05, 2);
  return d * Math.sin(2 * Math.PI * f * t);
}
