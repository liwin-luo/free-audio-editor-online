/**
 * BPM from onset autocorrelation, key from chroma against a fixed profile.
 * ponytail: Krumhansl major/minor weights are hardcoded, and only the first 60 s are read.
 * Upgrade path is a larger key profile or Essentia, and a full-file pass, once this page ranks.
 */

export const PITCHES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;

export type KeyMode = 'major' | 'minor';

export interface KeyBpmRead {
  bpm: number | null;
  tonic: number | null;
  mode: KeyMode | null;
}

const MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const MINOR = [6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];
const FFT_N = 8192;
const HOP = 512;
const CAP_SECONDS = 60;
const SILENT_RMS = 1e-4;

const unread = (): KeyBpmRead => ({ bpm: null, tonic: null, mode: null });

function mix(channels: Float32Array[]): Float32Array {
  const n = channels[0]?.length ?? 0;
  if (channels.length === 1) return channels[0];
  const out = new Float32Array(n);
  for (let c = 0; c < channels.length; c++) {
    const ch = channels[c];
    for (let i = 0; i < n; i++) out[i] += ch[i];
  }
  const scale = 1 / channels.length;
  for (let i = 0; i < n; i++) out[i] *= scale;
  return out;
}

function fft(re: Float32Array, im: Float32Array): void {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      const tr = re[i];
      re[i] = re[j];
      re[j] = tr;
      const ti = im[i];
      im[i] = im[j];
      im[j] = ti;
    }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = (-2 * Math.PI) / len;
    const wlenRe = Math.cos(ang);
    const wlenIm = Math.sin(ang);
    for (let i = 0; i < n; i += len) {
      let wRe = 1;
      let wIm = 0;
      const half = len >> 1;
      for (let k = 0; k < half; k++) {
        const j = i + k + half;
        const vRe = re[j] * wRe - im[j] * wIm;
        const vIm = re[j] * wIm + im[j] * wRe;
        re[j] = re[i + k] - vRe;
        im[j] = im[i + k] - vIm;
        re[i + k] += vRe;
        im[i + k] += vIm;
        const nextRe = wRe * wlenRe - wIm * wlenIm;
        wIm = wRe * wlenIm + wIm * wlenRe;
        wRe = nextRe;
      }
    }
  }
}

function chromaOf(samples: Float32Array, sampleRate: number): Float64Array | null {
  const chroma = new Float64Array(12);
  const re = new Float32Array(FFT_N);
  const im = new Float32Array(FFT_N);
  const hop = FFT_N;
  let saw = false;
  const limit = Math.min(samples.length, Math.floor(sampleRate * CAP_SECONDS));
  for (let start = 0; start < limit; start += hop) {
    re.fill(0);
    im.fill(0);
    const n = Math.min(FFT_N, limit - start);
    for (let i = 0; i < n; i++) {
      const w = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (FFT_N - 1)));
      re[i] = samples[start + i] * w;
    }
    fft(re, im);
    for (let bin = 1; bin < FFT_N / 2; bin++) {
      const freq = (bin * sampleRate) / FFT_N;
      if (freq < 50 || freq > 5000) continue;
      const midi = 69 + 12 * Math.log2(freq / 440);
      const pc = ((Math.round(midi) % 12) + 12) % 12;
      chroma[pc] += re[bin] * re[bin] + im[bin] * im[bin];
    }
    saw = true;
    if (start + hop >= limit) break;
  }
  if (!saw) return null;
  let sum = 0;
  for (let i = 0; i < 12; i++) sum += chroma[i];
  return sum > 0 ? chroma : null;
}

function pearson(chroma: Float64Array, profile: number[], tonic: number): number {
  let ma = 0;
  let mb = 0;
  for (let i = 0; i < 12; i++) {
    ma += chroma[i];
    mb += profile[i];
  }
  ma /= 12;
  mb /= 12;
  let num = 0;
  let da = 0;
  let db = 0;
  for (let i = 0; i < 12; i++) {
    const xa = chroma[(i + tonic) % 12] - ma;
    const xb = profile[i] - mb;
    num += xa * xb;
    da += xa * xa;
    db += xb * xb;
  }
  if (da === 0 || db === 0) return 0;
  return num / Math.sqrt(da * db);
}

function readKey(samples: Float32Array, sampleRate: number): { tonic: number; mode: KeyMode } | null {
  const chroma = chromaOf(samples, sampleRate);
  if (!chroma) return null;
  let best = -Infinity;
  let tonic = 0;
  let mode: KeyMode = 'major';
  for (let t = 0; t < 12; t++) {
    const major = pearson(chroma, MAJOR, t);
    const minor = pearson(chroma, MINOR, t);
    if (major > best) {
      best = major;
      tonic = t;
      mode = 'major';
    }
    if (minor > best) {
      best = minor;
      tonic = t;
      mode = 'minor';
    }
  }
  return best > 0 ? { tonic, mode } : null;
}

function corr(onset: Float64Array, lag: number): number {
  let s = 0;
  for (let i = 0; i + lag < onset.length; i++) s += onset[i] * onset[i + lag];
  return s;
}

function readBpm(samples: Float32Array, sampleRate: number): number | null {
  if (samples.length < sampleRate * 2) return null;
  const limit = Math.min(samples.length, Math.floor(sampleRate * CAP_SECONDS));
  const frames = Math.floor(limit / HOP);
  if (frames < 8) return null;
  const onset = new Float64Array(frames);
  let prev = 0;
  let energy = 0;
  for (let i = 0; i < frames; i++) {
    let e = 0;
    const o = i * HOP;
    for (let k = 0; k < HOP; k++) {
      const s = samples[o + k];
      e += s * s;
    }
    const d = e - prev;
    prev = e;
    onset[i] = d > 0 ? d : 0;
    energy += onset[i];
  }
  let env = 0;
  for (let i = 0; i < frames; i++) {
    const o = i * HOP;
    for (let k = 0; k < HOP; k++) env += samples[o + k] * samples[o + k];
  }
  // A steady tone still wiggles frame to frame. At 48 kHz that wiggle is about 0.02 of the energy.
  // Clicks sit near 0.9. ponytail: 0.05 is the split. Upgrade path is a spectral-flux onset if a drum loop falls under it.
  if (energy < 1e-6 || energy < env * 0.05) return null;
  const envRate = sampleRate / HOP;
  let best = 0;
  let bestBpm = 0;
  for (let bpm = 60; bpm <= 180; bpm++) {
    const lag = Math.round((envRate * 60) / bpm);
    if (lag < 2 || lag >= frames - 2) continue;
    const score = corr(onset, lag);
    if (score > best) {
      best = score;
      bestBpm = bpm;
    }
  }
  if (!bestBpm) return null;
  // A lag and its double both sit in 60–180. Prefer the faster one when it is a real peak.
  const fast = bestBpm * 2;
  if (fast <= 180) {
    const fastLag = Math.round((envRate * 60) / fast);
    if (fastLag >= 2 && corr(onset, fastLag) > best * 0.45) return fast;
  }
  return bestBpm;
}

export function readKeyBpm(channels: Float32Array[], sampleRate: number): KeyBpmRead {
  if (!channels.length || !channels[0].length || sampleRate < 1000) return unread();
  const samples = mix(channels);
  let sum = 0;
  for (let i = 0; i < samples.length; i++) sum += samples[i] * samples[i];
  if (Math.sqrt(sum / samples.length) < SILENT_RMS) return unread();
  const key = readKey(samples, sampleRate);
  return {
    bpm: readBpm(samples, sampleRate),
    tonic: key?.tonic ?? null,
    mode: key?.mode ?? null,
  };
}
