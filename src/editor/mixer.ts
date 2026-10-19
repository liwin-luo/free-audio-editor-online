/**
 * Sum already-decoded tracks onto one stereo timeline.
 * Linear resample and a linear pan balance — unity at center, so a mono
 * file played alone does not drop 3 dB. ponytail: linear interpolation
 * aliases steep content; upgrade path is OfflineAudioContext resampling
 * if a real file sounds harsh after a rate change.
 */

export interface MixChannelTrack {
  channels: Float32Array[];
  sampleRate: number;
  /** Timeline start, seconds, ≥ 0 */
  offset: number;
  /** Source window, seconds */
  trimStart: number;
  trimEnd: number;
  /** Linear gain, 0…1.5 */
  gain: number;
  /** -1 left … 1 right */
  pan: number;
  mute: boolean;
  solo: boolean;
}

export interface MixedPcm {
  left: Float32Array;
  right: Float32Array;
  sampleRate: number;
  /** 0 when the sum already fit under the ceiling */
  pulledDownDb: number;
}

const PEAK = 0.98;

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

/** Linear balance. pan 0 is unity on both sides. */
export function balanceGains(pan: number): { l: number; r: number } {
  const p = clamp(pan, -1, 1);
  return { l: p <= 0 ? 1 : 1 - p, r: p >= 0 ? 1 : 1 + p };
}

function resampleLinear(src: Float32Array, srcRate: number, dstRate: number): Float32Array {
  if (srcRate === dstRate || src.length === 0) return src;
  const dstLen = Math.max(1, Math.round((src.length * dstRate) / srcRate));
  const dst = new Float32Array(dstLen);
  const scale = srcRate / dstRate;
  const last = src.length - 1;
  for (let i = 0; i < dstLen; i++) {
    const x = i * scale;
    const i0 = Math.min(last, Math.floor(x));
    const i1 = Math.min(last, i0 + 1);
    const f = x - i0;
    dst[i] = src[i0] + (src[i1] - src[i0]) * f;
  }
  return dst;
}

export function mixChannels(tracks: MixChannelTrack[], master: number): MixedPcm {
  const rate = Math.max(44100, ...tracks.map((t) => t.sampleRate || 0));
  const masterGain = clamp(master, 0, 1);
  const anySolo = tracks.some((t) => t.solo);
  const left = new Float32Array(1);
  const right = new Float32Array(1);
  let total = 1;

  const placed: { l: Float32Array; r: Float32Array; start: number; gL: number; gR: number }[] = [];

  for (const t of tracks) {
    const srcRate = t.sampleRate || rate;
    const srcLen = t.channels[0]?.length ?? 0;
    const dur = srcLen / srcRate;
    const trimStart = clamp(t.trimStart, 0, dur);
    const trimEnd = clamp(Math.max(t.trimEnd, trimStart), 0, dur);
    const span = Math.max(0, t.offset) + Math.max(0, trimEnd - trimStart);
    total = Math.max(total, Math.ceil(span * rate) + 1);
    const audible = !t.mute && (!anySolo || t.solo);
    if (!audible || trimEnd - trimStart < 1 / rate) continue;

    const up = t.channels.map((c) => resampleLinear(c, srcRate, rate));
    const from = Math.min(up[0].length, Math.max(0, Math.floor(trimStart * rate)));
    const to = Math.min(up[0].length, Math.max(from, Math.ceil(trimEnd * rate)));
    const sliceL = up[0].subarray(from, to);
    const sliceR = (up[1] ?? up[0]).subarray(from, to);
    const bal = balanceGains(t.pan);
    const g = clamp(t.gain, 0, 1.5) * masterGain;
    placed.push({
      l: sliceL,
      r: sliceR,
      start: Math.round(Math.max(0, t.offset) * rate),
      gL: g * bal.l,
      gR: g * bal.r,
    });
  }

  const outL = total === 1 ? left : new Float32Array(total);
  const outR = total === 1 ? right : new Float32Array(total);
  for (const p of placed) {
    const n = Math.min(p.l.length, p.r.length);
    for (let i = 0; i < n; i++) {
      const o = p.start + i;
      if (o >= outL.length) break;
      outL[o] += p.l[i] * p.gL;
      outR[o] += p.r[i] * p.gR;
    }
  }

  let peak = 0;
  for (let i = 0; i < outL.length; i++) {
    peak = Math.max(peak, Math.abs(outL[i]), Math.abs(outR[i]));
  }
  let pulledDownDb = 0;
  if (peak > PEAK) {
    const scale = PEAK / peak;
    for (let i = 0; i < outL.length; i++) {
      outL[i] *= scale;
      outR[i] *= scale;
    }
    pulledDownDb = 20 * Math.log10(peak / PEAK);
  }
  return { left: outL, right: outR, sampleRate: rate, pulledDownDb };
}

export interface MixBufferTrack {
  buffer: AudioBuffer;
  offset: number;
  trimStart: number;
  trimEnd: number;
  gain: number;
  pan: number;
  mute: boolean;
  solo: boolean;
}

export interface MixRender {
  buffer: AudioBuffer;
  pulledDownDb: number;
}

/** Browser wrapper. Preview and export both call this, so they match. */
export function renderMix(tracks: MixBufferTrack[], master: number): MixRender {
  const mixed = mixChannels(
    tracks.map((t) => ({
      channels: Array.from({ length: t.buffer.numberOfChannels }, (_, c) => t.buffer.getChannelData(c)),
      sampleRate: t.buffer.sampleRate,
      offset: t.offset,
      trimStart: t.trimStart,
      trimEnd: t.trimEnd,
      gain: t.gain,
      pan: t.pan,
      mute: t.mute,
      solo: t.solo,
    })),
    master,
  );
  const length = Math.max(1, mixed.left.length);
  const ctx = new OfflineAudioContext(2, length, mixed.sampleRate);
  const buffer = ctx.createBuffer(2, length, mixed.sampleRate);
  buffer.getChannelData(0).set(mixed.left);
  buffer.getChannelData(1).set(mixed.right);
  return { buffer, pulledDownDb: mixed.pulledDownDb };
}
