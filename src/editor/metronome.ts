import { clamp } from '../lib/format';

/**
 * Click rate for every meter, including 6/8.
 * ponytail: 6/8 is six clicks at the BPM, not a dotted-quarter pulse.
 * Upgrade path is a subdivision control if two clicks a bar is the count you want.
 */
export const METRONOME_BPM_MIN = 40;
export const METRONOME_BPM_MAX = 240;

const CLICK_HZ = 1000;
const ACCENT = 0.8;
const TICK = 0.28;
const CLICK_SEC = 0.02;
const TAU = 0.004;

export function beatsPerBar(meter: string): number {
  if (meter === '2/4') return 2;
  if (meter === '3/4') return 3;
  if (meter === '6/8') return 6;
  return 4;
}

export function clickInterval(bpm: number): number {
  return 60 / clamp(bpm, METRONOME_BPM_MIN, METRONOME_BPM_MAX);
}

export function barCount(bars: number): 4 | 8 | 16 {
  if (bars === 8 || bars === 16) return bars;
  return 4;
}

/** Mono clicks. Beat 1 of each bar is louder. Same pitch on every beat. */
export function clickTrack(bpm: number, meter: string, bars: number, sampleRate: number): Float32Array {
  const interval = clickInterval(bpm);
  const perBar = beatsPerBar(meter);
  const n = perBar * barCount(bars);
  const rate = Math.max(1, sampleRate);
  const total = interval * (n - 1) + CLICK_SEC;
  const out = new Float32Array(Math.ceil(total * rate));
  const clickN = Math.max(1, Math.round(CLICK_SEC * rate));
  for (let i = 0; i < n; i++) {
    const amp = i % perBar === 0 ? ACCENT : TICK;
    const start = Math.round(i * interval * rate);
    for (let k = 0; k < clickN && start + k < out.length; k++) {
      const t = k / rate;
      out[start + k] = Math.sin(2 * Math.PI * CLICK_HZ * t) * amp * Math.exp(-t / TAU);
    }
  }
  return out;
}
