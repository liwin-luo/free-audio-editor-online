/** Remove long quiet stretches. Short gaps (breaths) stay. */

export interface SilenceOpts {
  thresholdDb: number;
  minSilenceSec: number;
  padSec: number;
}

export interface TimeRange {
  from: number;
  to: number;
}

export interface SilenceAnalysis {
  ranges: TimeRange[];
  allBelow: boolean;
}

/** Frame levels in dBFS. RMS 0 is −∞. Cached so the sliders do not rescan the file. */
export interface SilenceFrames {
  db: Float32Array;
  hop: number;
  frame: number;
  samples: number;
  sampleRate: number;
}

const FRAME_SEC = 0.02;
const HOP_SEC = 0.01;

export const SILENCE_PAD_SEC = 0.08;

function rmsDb(channels: Float32Array[], start: number, count: number): number {
  let maxRms = 0;
  for (const ch of channels) {
    const end = Math.min(ch.length, start + count);
    const n = end - start;
    if (n <= 0) continue;
    let sum = 0;
    for (let i = start; i < end; i++) sum += ch[i] * ch[i];
    const rms = Math.sqrt(sum / n);
    if (rms > maxRms) maxRms = rms;
  }
  return maxRms === 0 ? Number.NEGATIVE_INFINITY : 20 * Math.log10(maxRms);
}

export function measureSilenceFrames(channels: Float32Array[], sampleRate: number): SilenceFrames {
  const samples = channels[0]?.length ?? 0;
  const frame = Math.max(1, Math.round(FRAME_SEC * sampleRate));
  const hop = Math.max(1, Math.round(HOP_SEC * sampleRate));
  if (sampleRate <= 0 || samples === 0) {
    return { db: new Float32Array(), hop, frame, samples, sampleRate };
  }
  if (samples < frame) {
    const db = new Float32Array(1);
    db[0] = rmsDb(channels, 0, samples);
    return { db, hop, frame, samples, sampleRate };
  }
  const starts = Math.floor((samples - frame) / hop) + 1;
  const db = new Float32Array(starts);
  for (let i = 0; i < starts; i++) db[i] = rmsDb(channels, i * hop, frame);
  return { db, hop, frame, samples, sampleRate };
}

export function analyzeSilence(frames: SilenceFrames, opts: SilenceOpts): SilenceAnalysis {
  const duration = frames.sampleRate > 0 ? frames.samples / frames.sampleRate : 0;
  const full = duration > 0 ? [{ from: 0, to: duration }] : [];
  if (frames.db.length === 0 || frames.samples < frames.frame) {
    const allBelow = frames.db.length === 0 || frames.db[0] < opts.thresholdDb;
    return { ranges: full, allBelow };
  }

  let loud = false;
  for (let i = 0; i < frames.db.length; i++) {
    if (frames.db[i] >= opts.thresholdDb) {
      loud = true;
      break;
    }
  }
  if (!loud) return { ranges: full, allBelow: true };

  const cuts: TimeRange[] = [];
  let runStart = -1;
  const flush = (endSample: number) => {
    if (runStart < 0) return;
    const from = runStart / frames.sampleRate;
    const to = endSample / frames.sampleRate;
    if (to - from >= opts.minSilenceSec) {
      const cutFrom = from + opts.padSec;
      const cutTo = to - opts.padSec;
      if (cutTo > cutFrom) cuts.push({ from: cutFrom, to: cutTo });
    }
    runStart = -1;
  };

  for (let i = 0; i < frames.db.length; i++) {
    const silent = frames.db[i] < opts.thresholdDb;
    if (silent && runStart < 0) runStart = i * frames.hop;
    if (!silent && runStart >= 0) flush((i - 1) * frames.hop + frames.frame);
  }
  if (runStart >= 0) flush(frames.samples);

  const ranges: TimeRange[] = [];
  let cursor = 0;
  for (const cut of cuts) {
    if (cut.from > cursor) ranges.push({ from: cursor, to: cut.from });
    cursor = Math.max(cursor, cut.to);
  }
  if (cursor < duration - 1e-6) ranges.push({ from: cursor, to: duration });
  return { ranges: ranges.length > 0 ? ranges : full, allBelow: false };
}

export function silenceKeepRanges(
  channels: Float32Array[],
  sampleRate: number,
  opts: SilenceOpts,
): TimeRange[] {
  return analyzeSilence(measureSilenceFrames(channels, sampleRate), opts).ranges;
}
