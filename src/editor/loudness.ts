/**
 * Integrated loudness, ITU-R BS.1770-4, for a file.
 * ponytail: shelf + high-pass coefficients are the 48 kHz pair from the standard.
 * Other rates are linearly resampled onto 48 kHz. Upgrade path is the annex
 * bilinear formula, which drops the resample.
 */

const RATE = 48000;
const BLOCK = Math.round(0.4 * RATE);
const HOP = Math.round(0.1 * RATE);

/** Sample-peak ceiling used when matching a LUFS target. Not a true peak. */
export const PEAK_CEILING_DB = -1;
const PEAK_CEILING = 10 ** (PEAK_CEILING_DB / 20);

const SHELF = {
  b0: 1.53512485958697,
  b1: -2.69169618940638,
  b2: 1.19839281085285,
  a1: -1.69065929318241,
  a2: 0.73248077421585,
};
const HIGHPASS = {
  b0: 1,
  b1: -2,
  b2: 1,
  a1: -1.99004745483398,
  a2: 0.99007225036621,
};

export interface LufsMatch {
  linear: number;
  limited: boolean;
  resultLufs: number;
}

function resampleLinear(input: Float32Array, fromRate: number): Float32Array {
  if (fromRate === RATE) return input;
  const outLen = Math.max(1, Math.round((input.length * RATE) / fromRate));
  const out = new Float32Array(outLen);
  const scale = fromRate / RATE;
  const last = input.length - 1;
  for (let i = 0; i < outLen; i++) {
    const pos = i * scale;
    const i0 = Math.min(last, Math.floor(pos));
    const i1 = Math.min(last, i0 + 1);
    const frac = pos - i0;
    out[i] = input[i0] * (1 - frac) + input[i1] * frac;
  }
  return out;
}

function biquad(input: Float32Array, b0: number, b1: number, b2: number, a1: number, a2: number): Float32Array {
  const out = new Float32Array(input.length);
  let x1 = 0;
  let x2 = 0;
  let y1 = 0;
  let y2 = 0;
  for (let i = 0; i < input.length; i++) {
    const x0 = input[i];
    const y0 = b0 * x0 + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2;
    out[i] = y0;
    x2 = x1;
    x1 = x0;
    y2 = y1;
    y1 = y0;
  }
  return out;
}

function kWeight(channel: Float32Array): Float32Array {
  const shelved = biquad(channel, SHELF.b0, SHELF.b1, SHELF.b2, SHELF.a1, SHELF.a2);
  return biquad(shelved, HIGHPASS.b0, HIGHPASS.b1, HIGHPASS.b2, HIGHPASS.a1, HIGHPASS.a2);
}

function blockPowers(weighted: Float32Array[]): number[] {
  const length = weighted[0]?.length ?? 0;
  if (length === 0) return [];
  const powers: number[] = [];
  const push = (from: number, to: number) => {
    const n = to - from;
    if (n <= 0) return;
    let sum = 0;
    for (const ch of weighted) {
      let acc = 0;
      for (let i = from; i < to; i++) acc += ch[i] * ch[i];
      sum += acc / n;
    }
    powers.push(sum);
  };
  if (length < BLOCK) {
    push(0, length);
    return powers;
  }
  for (let start = 0; start + BLOCK <= length; start += HOP) push(start, start + BLOCK);
  return powers;
}

function gatedLufs(powers: number[]): number {
  if (powers.length === 0) return Number.NEGATIVE_INFINITY;
  const loud = powers.map((z) => (z > 0 ? -0.691 + 10 * Math.log10(z) : Number.NEGATIVE_INFINITY));
  const absolute: number[] = [];
  for (let i = 0; i < powers.length; i++) {
    if (loud[i] > -70) absolute.push(powers[i]);
  }
  if (absolute.length === 0) return Number.NEGATIVE_INFINITY;
  const absMean = absolute.reduce((sum, z) => sum + z, 0) / absolute.length;
  const relative = -0.691 + 10 * Math.log10(absMean) - 10;
  const kept: number[] = [];
  for (let i = 0; i < powers.length; i++) {
    if (loud[i] > relative) kept.push(powers[i]);
  }
  if (kept.length === 0) return Number.NEGATIVE_INFINITY;
  const mean = kept.reduce((sum, z) => sum + z, 0) / kept.length;
  return mean > 0 ? -0.691 + 10 * Math.log10(mean) : Number.NEGATIVE_INFINITY;
}

/** Integrated LUFS. Digital silence is −∞, not an error. */
export function integratedLufs(channels: Float32Array[], sampleRate: number): number {
  if (sampleRate <= 0 || channels.length === 0 || (channels[0]?.length ?? 0) === 0) return Number.NEGATIVE_INFINITY;
  const weighted = channels.map((ch) => kWeight(resampleLinear(ch, sampleRate)));
  return gatedLufs(blockPowers(weighted));
}

/** Largest |sample| across channels, in dBFS. Not a true peak. */
export function samplePeakDb(channels: Float32Array[]): number {
  let peak = 0;
  for (const ch of channels) {
    for (let i = 0; i < ch.length; i++) {
      const abs = Math.abs(ch[i]);
      if (abs > peak) peak = abs;
    }
  }
  return peak === 0 ? Number.NEGATIVE_INFINITY : 20 * Math.log10(peak);
}

export function samplePeakLinear(channels: Float32Array[]): number {
  let peak = 0;
  for (const ch of channels) {
    for (let i = 0; i < ch.length; i++) {
      const abs = Math.abs(ch[i]);
      if (abs > peak) peak = abs;
    }
  }
  return peak;
}

/**
 * Gain that moves integrated loudness to `targetLufs`.
 * If that would push the sample peak past −1 dBFS, the gain stops there.
 */
export function matchLufsGain(measuredLufs: number, targetLufs: number, peakLinear: number): LufsMatch {
  if (!Number.isFinite(measuredLufs)) return { linear: 1, limited: false, resultLufs: measuredLufs };
  let linear = 10 ** ((targetLufs - measuredLufs) / 20);
  let limited = false;
  if (peakLinear > 0 && peakLinear * linear > PEAK_CEILING) {
    linear = PEAK_CEILING / peakLinear;
    limited = true;
  }
  return { linear, limited, resultLufs: measuredLufs + 20 * Math.log10(linear) };
}
