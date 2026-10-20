/** Tempo slider range. Kept out of tempo.ts so the page does not load the vocoder. */
export const TEMPO_MIN = 0.75;
export const TEMPO_MAX = 1.25;

export function snapTempo(rate: number): number {
  const clamped = Math.min(TEMPO_MAX, Math.max(TEMPO_MIN, rate));
  return Math.round(clamped * 100) / 100;
}
