/** Tap tempo: BPM from tap timestamps (ms). The readout uses a trimmed mean
 *  of the intervals — the top and bottom quartile of gaps drop out — so one
 *  stray or missed tap does not drag it and ordinary tapping jitter averages
 *  away. Taps older than the timeout drop out, so a pause starts fresh. */

export const TAP_TIMEOUT_MS = 2500;

export function bpmFromTaps(stamps: number[], now: number): number | null {
  const recent = stamps.filter((t) => now - t <= TAP_TIMEOUT_MS);
  if (recent.length < 2) return null;
  const gaps: number[] = [];
  for (let i = 1; i < recent.length; i++) gaps.push(recent[i]! - recent[i - 1]!);
  gaps.sort((a, b) => a - b);
  const drop = Math.floor(gaps.length / 4);
  const kept = gaps.slice(drop, gaps.length - drop);
  const sum = kept.reduce((acc, g) => acc + g, 0);
  const mean = sum / kept.length;
  if (!mean || mean <= 0) return null;
  return Math.round((60000 / mean) * 10) / 10;
}
