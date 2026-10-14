// ponytail: phase-vocoder pitch shift (Bernsee). Dense harmony and shifts past
// ±7 semitones sound metallic. Upgrade path: SoundTouch WASM if this page
// ranks and listeners bounce.

const FFT = 2048;
const OSAMP = 4;

function fft(re: Float32Array, im: Float32Array, inverse: boolean): void {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      const tr = re[i]!;
      const ti = im[i]!;
      re[i] = re[j]!;
      im[i] = im[j]!;
      re[j] = tr;
      im[j] = ti;
    }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = ((2 * Math.PI) / len) * (inverse ? 1 : -1);
    const wlenRe = Math.cos(ang);
    const wlenIm = Math.sin(ang);
    const half = len >> 1;
    for (let i = 0; i < n; i += len) {
      let wRe = 1;
      let wIm = 0;
      for (let j = 0; j < half; j++) {
        const uRe = re[i + j]!;
        const uIm = im[i + j]!;
        const vRe = re[i + j + half]! * wRe - im[i + j + half]! * wIm;
        const vIm = re[i + j + half]! * wIm + im[i + j + half]! * wRe;
        re[i + j] = uRe + vRe;
        im[i + j] = uIm + vIm;
        re[i + j + half] = uRe - vRe;
        im[i + j + half] = uIm - vIm;
        const nextRe = wRe * wlenRe - wIm * wlenIm;
        wIm = wRe * wlenIm + wIm * wlenRe;
        wRe = nextRe;
      }
    }
  }
  if (inverse) {
    for (let i = 0; i < n; i++) {
      re[i] = re[i]! / n;
      im[i] = im[i]! / n;
    }
  }
}

/** Shift pitch by `semitones` and return a buffer of the same length. */
export function pitchShiftChannel(
  input: Float32Array,
  semitones: number,
  sampleRate: number,
): Float32Array {
  if (semitones === 0 || input.length === 0) return new Float32Array(input);
  if (input.length < 32) return new Float32Array(input);

  const shift = 2 ** (semitones / 12);
  const fftSize = FFT;
  const half = fftSize >> 1;
  const hop = fftSize / OSAMP;
  const freqPerBin = sampleRate / fftSize;
  const expect = (2 * Math.PI * hop) / fftSize;
  const window = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (fftSize - 1)));
  }

  const re = new Float32Array(fftSize);
  const im = new Float32Array(fftSize);
  const lastPhase = new Float32Array(half + 1);
  const sumPhase = new Float32Array(half + 1);
  const out = new Float32Array(input.length);
  const acc = new Float32Array(input.length + fftSize);
  const wsum = new Float32Array(input.length + fftSize);

  for (let pos = 0; pos + fftSize <= input.length; pos += hop) {
    for (let i = 0; i < fftSize; i++) {
      re[i] = input[pos + i]! * window[i]!;
      im[i] = 0;
    }
    fft(re, im, false);

    const synMagn = new Float32Array(half + 1);
    const synFreq = new Float32Array(half + 1);
    for (let k = 0; k <= half; k++) {
      const magn = Math.hypot(re[k]!, im[k]!);
      const phase = Math.atan2(im[k]!, re[k]!);
      let delta = phase - lastPhase[k]!;
      lastPhase[k] = phase;
      delta -= k * expect;
      let qpd = Math.trunc(delta / Math.PI);
      if (qpd >= 0) qpd += qpd & 1;
      else qpd -= qpd & 1;
      delta -= Math.PI * qpd;
      const freq = k * freqPerBin + ((OSAMP * delta) / (2 * Math.PI)) * freqPerBin;
      const index = Math.floor((freq * shift) / freqPerBin);
      if (index >= 0 && index <= half) {
        synMagn[index] += magn;
        synFreq[index] = freq * shift;
      }
    }

    for (let k = 0; k <= half; k++) {
      let tmp = synFreq[k]! - k * freqPerBin;
      tmp /= freqPerBin;
      tmp = (2 * Math.PI * tmp) / OSAMP;
      tmp += k * expect;
      sumPhase[k] = (sumPhase[k] ?? 0) + tmp;
      const phase = sumPhase[k]!;
      re[k] = synMagn[k]! * Math.cos(phase);
      im[k] = synMagn[k]! * Math.sin(phase);
    }
    for (let k = 1; k < half; k++) {
      re[fftSize - k] = re[k]!;
      im[fftSize - k] = -im[k]!;
    }
    fft(re, im, true);

    for (let i = 0; i < fftSize; i++) {
      const w = window[i]!;
      acc[pos + i] += re[i]! * w;
      wsum[pos + i] += w * w;
    }
  }

  for (let i = 0; i < out.length; i++) {
    const w = wsum[i]!;
    out[i] = w > 1e-6 ? acc[i]! / w : 0;
  }
  return out;
}
