/**
 * Spectrogram math and the inverse: paint a bitmap into a WAV.
 * FFT is radix-2, in place, no dependency. Canvas painting stays in paintSpec.
 */

export type SpecAxis = 'log' | 'linear';
export type ColormapName = 'viridis' | 'inferno' | 'gray';

const HANN = new Map<number, Float32Array>();

export function hannWindow(n: number): Float32Array {
  let w = HANN.get(n);
  if (w) return w;
  w = new Float32Array(n);
  for (let i = 0; i < n; i++) w[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / n));
  HANN.set(n, w);
  return w;
}

/** In-place radix-2 FFT. `re` and `im` length must be a power of two. */
export function fft(re: Float32Array, im: Float32Array): void {
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
        const uRe = re[i + k];
        const uIm = im[i + k];
        re[i + k] = uRe + vRe;
        im[i + k] = uIm + vIm;
        re[j] = uRe - vRe;
        im[j] = uIm - vIm;
        const nextRe = wRe * wlenRe - wIm * wlenIm;
        wIm = wRe * wlenIm + wIm * wlenRe;
        wRe = nextRe;
      }
    }
  }
}

export function ifft(re: Float32Array, im: Float32Array): void {
  const n = re.length;
  for (let i = 0; i < n; i++) im[i] = -im[i];
  fft(re, im);
  const inv = 1 / n;
  for (let i = 0; i < n; i++) {
    re[i] *= inv;
    im[i] = -im[i] * inv;
  }
}

/** dB per bin for one Hann-windowed frame centered on `center`. Length fftSize/2. */
export function specColumnDb(channel: Float32Array, center: number, fftSize: number): Float32Array {
  const re = new Float32Array(fftSize);
  const im = new Float32Array(fftSize);
  const hann = hannWindow(fftSize);
  const start = Math.floor(center - fftSize / 2);
  for (let i = 0; i < fftSize; i++) {
    const s = start + i;
    const v = s >= 0 && s < channel.length ? channel[s] : 0;
    re[i] = v * hann[i];
  }
  fft(re, im);
  const bins = fftSize >> 1;
  const out = new Float32Array(bins);
  const norm = fftSize / 2;
  for (let k = 0; k < bins; k++) {
    const mag = Math.hypot(re[k], im[k]) / norm;
    out[k] = 20 * Math.log10(mag + 1e-12);
  }
  return out;
}

export function mixMono(buffer: {
  numberOfChannels: number;
  length: number;
  getChannelData: (channel: number) => Float32Array;
}): Float32Array {
  const chs = Math.min(buffer.numberOfChannels, 2);
  const out = new Float32Array(buffer.length);
  for (let c = 0; c < chs; c++) {
    const data = buffer.getChannelData(c);
    for (let i = 0; i < out.length; i++) out[i] += data[i];
  }
  if (chs > 1) {
    const inv = 1 / chs;
    for (let i = 0; i < out.length; i++) out[i] *= inv;
  }
  return out;
}

/** Row 0 is the top of the picture and the highest frequency. */
export function rowToHz(
  row: number,
  rows: number,
  minHz: number,
  maxHz: number,
  axis: SpecAxis,
): number {
  const u = rows <= 1 ? 1 : 1 - row / (rows - 1);
  const loHz = Math.max(1, minHz);
  const hiHz = Math.max(loHz + 1, maxHz);
  if (axis === 'linear') return loHz + u * (hiHz - loHz);
  const lo = Math.log(loHz);
  const hi = Math.log(hiHz);
  return Math.exp(lo + u * (hi - lo));
}

const VIRIDIS: ReadonlyArray<readonly [number, number, number]> = [
  [68, 1, 84],
  [72, 40, 120],
  [62, 73, 137],
  [49, 104, 142],
  [38, 130, 142],
  [31, 158, 137],
  [53, 183, 121],
  [110, 206, 88],
  [253, 231, 37],
];

const INFERNO: ReadonlyArray<readonly [number, number, number]> = [
  [0, 0, 4],
  [40, 11, 84],
  [101, 21, 110],
  [159, 42, 99],
  [212, 72, 66],
  [245, 125, 21],
  [250, 193, 39],
  [252, 255, 164],
];

function colorAt(name: ColormapName, t: number): [number, number, number] {
  const x = Math.min(1, Math.max(0, t));
  if (name === 'gray') {
    const v = Math.round(x * 255);
    return [v, v, v];
  }
  const stops = name === 'inferno' ? INFERNO : VIRIDIS;
  const scaled = x * (stops.length - 1);
  const i = Math.floor(scaled);
  const f = scaled - i;
  const a = stops[i];
  const b = stops[Math.min(stops.length - 1, i + 1)];
  return [
    Math.round(a[0] + (b[0] - a[0]) * f),
    Math.round(a[1] + (b[1] - a[1]) * f),
    Math.round(a[2] + (b[2] - a[2]) * f),
  ];
}

export interface PaintSpecOptions {
  sampleRate: number;
  fftSize: number;
  minHz: number;
  maxHz: number;
  dbFloor: number;
  dbCeil: number;
  axis: SpecAxis;
  colormap: ColormapName;
  width: number;
  height: number;
}

/** `columns[x]` is dB per bin (length fftSize/2). High frequencies are drawn at the top. */
export function paintSpec(
  canvas: HTMLCanvasElement,
  columns: Float32Array[],
  opts: PaintSpecOptions,
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx || columns.length === 0) return;
  const w = Math.max(1, Math.round(opts.width));
  const h = Math.max(1, Math.round(opts.height));
  canvas.width = w;
  canvas.height = h;
  const img = ctx.createImageData(w, h);
  const data = img.data;
  const span = Math.max(1, opts.dbCeil - opts.dbFloor);
  const bins = columns[0].length;
  for (let y = 0; y < h; y++) {
    const hz = rowToHz(y, h, opts.minHz, opts.maxHz, opts.axis);
    const xBin = (hz * opts.fftSize) / opts.sampleRate;
    const i0 = Math.max(0, Math.min(bins - 1, Math.floor(xBin)));
    const i1 = Math.max(0, Math.min(bins - 1, i0 + 1));
    const frac = Math.min(1, Math.max(0, xBin - i0));
    for (let x = 0; x < w; x++) {
      const col = columns[Math.min(columns.length - 1, Math.floor((x * columns.length) / w))];
      const db = col[i0] * (1 - frac) + col[i1] * frac;
      const t = Math.min(1, Math.max(0, (db - opts.dbFloor) / span));
      const [r, g, b] = colorAt(opts.colormap, t);
      const p = (y * w + x) * 4;
      data[p] = r;
      data[p + 1] = g;
      data[p + 2] = b;
      data[p + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

export interface Bitmap {
  width: number;
  height: number;
  /** 0..1, row-major. Row 0 is the top (highest frequency). */
  brightness: Float32Array;
}

export interface EncodeOptions {
  sampleRate?: number;
  fftSize?: number;
  minHz?: number;
  maxHz?: number;
  axis?: SpecAxis;
}

/**
 * Inverse STFT: each bright pixel becomes a sine in that column.
 * ponytail: caller keeps the bitmap ≤ ~400×160. A larger picture just
 * costs more overlap-add; shrink it before calling.
 */
export function encodeBitmap(bitmap: Bitmap, opts: EncodeOptions = {}): Float32Array {
  const sampleRate = opts.sampleRate ?? 44100;
  const fftSize = opts.fftSize ?? 2048;
  const minHz = opts.minHz ?? 400;
  const maxHz = opts.maxHz ?? 12000;
  const axis = opts.axis ?? 'log';
  const hop = fftSize >> 2;
  const { width, height, brightness } = bitmap;
  const out = new Float32Array(Math.max(fftSize, (width - 1) * hop + fftSize));
  const hann = hannWindow(fftSize);
  const re = new Float32Array(fftSize);
  const im = new Float32Array(fftSize);

  for (let x = 0; x < width; x++) {
    re.fill(0);
    im.fill(0);
    for (let y = 0; y < height; y++) {
      const amp = brightness[y * width + x];
      if (amp < 0.08) continue;
      const hz = rowToHz(y, height, minHz, maxHz, axis);
      const bin = Math.round((hz * fftSize) / sampleRate);
      if (bin < 1 || bin >= fftSize / 2) continue;
      const gain = (amp * fftSize) / 2;
      if (gain > re[bin]) {
        re[bin] = gain;
        re[fftSize - bin] = gain;
      }
    }
    ifft(re, im);
    const at = x * hop;
    for (let i = 0; i < fftSize; i++) out[at + i] += re[i] * hann[i];
  }

  let peak = 0;
  for (let i = 0; i < out.length; i++) peak = Math.max(peak, Math.abs(out[i]));
  if (peak > 0) {
    const g = 0.85 / peak;
    for (let i = 0; i < out.length; i++) out[i] *= g;
  }
  return out;
}

export function wavBytes(samples: Float32Array, sampleRate: number): Uint8Array {
  const n = samples.length;
  const buf = new ArrayBuffer(44 + n * 2);
  const view = new DataView(buf);
  const str = (offset: number, value: string) => {
    for (let i = 0; i < value.length; i++) view.setUint8(offset + i, value.charCodeAt(i));
  };
  str(0, 'RIFF');
  view.setUint32(4, 36 + n * 2, true);
  str(8, 'WAVE');
  str(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  str(36, 'data');
  view.setUint32(40, n * 2, true);
  let offset = 44;
  for (let i = 0; i < n; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }
  return new Uint8Array(buf);
}
