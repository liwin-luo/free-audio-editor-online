/**
 * 1 kHz sine peaks on its bin; white noise is flat; a bright bitmap row
 * comes back as that frequency in the encoded WAV.
 * Run: npm run check:spectrogram
 */
import { encodeBitmap, rowToHz, specColumnDb } from '../src/editor/spectrogram.ts';

function assert(ok, msg) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!ok) process.exitCode = 1;
}

function peakBin(db) {
  let peak = 1;
  for (let i = 2; i < db.length; i++) if (db[i] > db[peak]) peak = i;
  return peak;
}

const sr = 44100;
const n = 2048;
const sine = new Float32Array(n);
for (let i = 0; i < n; i++) sine[i] = Math.sin((2 * Math.PI * 1000 * i) / sr);
const sineDb = specColumnDb(sine, n / 2, n);
const sinePeak = peakBin(sineDb);
const expectBin = Math.round((1000 * n) / sr);
assert(Math.abs(sinePeak - expectBin) <= 1, `1 kHz peak bin ${sinePeak}, expected ${expectBin}`);
assert(sineDb[sinePeak] > sineDb[Math.max(1, sinePeak - 8)] + 8, '1 kHz stands above a neighbor');

let seed = 1;
const rnd = () => {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
};
const windows = 24;
const noise = new Float32Array(windows * n);
for (let i = 0; i < noise.length; i++) noise[i] = rnd() * 2 - 1;
const acc = new Float64Array(n / 2);
for (let w = 0; w < windows; w++) {
  const db = specColumnDb(noise, w * n + n / 2, n);
  for (let k = 0; k < db.length; k++) acc[k] += 10 ** (db[k] / 10);
}
const mean = (a, b) => {
  let s = 0;
  for (let i = a; i < b; i++) s += acc[i];
  return s / (b - a);
};
const low = mean(40, 300);
const high = mean(500, 900);
const ratio = low / high;
assert(ratio > 0.45 && ratio < 2.2, `noise band ratio ${ratio.toFixed(2)}`);

const height = 48;
const width = 12;
const row = 12;
const brightness = new Float32Array(width * height);
for (let x = 0; x < width; x++) brightness[row * width + x] = 1;
const hz = rowToHz(row, height, 500, 8000, 'linear');
const encoded = encodeBitmap(
  { width, height, brightness },
  { sampleRate: sr, fftSize: n, minHz: 500, maxHz: 8000, axis: 'linear' },
);
const mid = Math.floor(encoded.length / 2);
const back = specColumnDb(encoded, mid, n);
const backPeak = peakBin(back);
const hzBin = Math.round((hz * n) / sr);
assert(Math.abs(backPeak - hzBin) <= 2, `hidden row ${hz.toFixed(0)} Hz bin ${backPeak}, expected ${hzBin}`);
