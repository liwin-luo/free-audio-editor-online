/**
 * The measurable claims behind the noise-remover page, run against the same
 * wasm the browser loads: steady noise around voice drops by a real margin,
 * the voice keeps its level, a transient lands at the sample it started at,
 * and the strength slider orders the results.
 * Run: npm run check:denoise
 */
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { denoiseChannels48k, DENOISE_FRAME, DENOISE_RATE } from '../src/editor/denoise.ts';

const rate = DENOISE_RATE;
const seconds = 12;
const n = rate * seconds;

// Voice-like signal: 220 Hz + 550 Hz bursts, 0.5 s on / 0.5 s off, with a
// speech-ish envelope. Windows where t % 1 sits in [0.6, 0.9] are noise-only.
const dry = new Float32Array(n);
for (let i = 0; i < n; i++) {
  const t = i / rate;
  const burst = t % 1 < 0.5 ? 1 : 0;
  const env = burst * (0.6 + 0.4 * Math.sin(2 * Math.PI * 3 * t));
  dry[i] = env * (0.25 * Math.sin(2 * Math.PI * 220 * t) + 0.08 * Math.sin(2 * Math.PI * 550 * t));
}

// Steady white noise at about −26 dBFS across the whole file.
const noiseAmp = 0.05;
let seed = 12345;
const rand = () => {
  seed = (seed * 1103515245 + 12345) & 0x7fffffff;
  return seed / 0x3fffffff - 1;
};
const noisy = new Float32Array(n);
for (let i = 0; i < n; i++) noisy[i] = dry[i] + noiseAmp * rand();
// A single full-scale click at 1.560 s — inside a noise-only window. Alignment probe.
const clickAt = Math.floor(1.56 * rate);
noisy[clickAt] = 0.9;

const wasmBinary = await readFile(resolve(process.cwd(), 'node_modules/@jitsi/rnnoise-wasm/dist/rnnoise.wasm'));
const { createRNNWasmModule: factory } = await import('@jitsi/rnnoise-wasm');
const mod = await factory({ wasmBinary });

let pass = 0, fail = 0;
const check = (name, ok, detail) => {
  if (ok) { pass++; console.log(`PASS  ${name}  (${detail})`); }
  else { fail++; console.log(`FAIL  ${name}  (${detail})`); }
};

const rmsDb = (arr, a, b) => {
  let s = 0;
  for (let i = a; i < b; i++) s += arr[i] * arr[i];
  return 20 * Math.log10(Math.sqrt(s / (b - a)) + 1e-12);
};
const medianOver = (arr, from, to) => {
  const vals = [];
  for (let s = 0; s < seconds; s++) vals.push(rmsDb(arr, Math.floor((s + from) * rate), Math.floor((s + to) * rate)));
  vals.sort((a, b) => a - b);
  return vals[vals.length >> 1];
};
const noiseFloor = (arr) => medianOver(arr, 0.62, 0.9);
const voiceLevel = (arr) => medianOver(arr, 0.12, 0.42);

const full = (await denoiseChannels48k([noisy], mod, 1))[0];
const half = (await denoiseChannels48k([noisy], mod, 0.5))[0];
const bypass = await denoiseChannels48k([noisy], mod, 0);

const inNoise = noiseFloor(noisy);
const dropFull = inNoise - noiseFloor(full);
const dropHalf = inNoise - noiseFloor(half);
const voiceShift = voiceLevel(full) - voiceLevel(noisy);

check('length unchanged', full.length === n, `${full.length} vs ${n}`);
check('strength 0 bypasses', bypass[0] === noisy, 'same array reference');
check('noise floor drops ≥ 20 dB around voice', dropFull >= 20, `${dropFull.toFixed(1)} dB (${inNoise.toFixed(1)} → ${(inNoise - dropFull).toFixed(1)} dBFS)`);
check('voice level keeps within ±3 dB', Math.abs(voiceShift) <= 3, `${voiceShift.toFixed(1)} dB shift`);
check('voice sits ≥ 25 dB above the new floor', voiceLevel(full) - noiseFloor(full) >= 25, `${(voiceLevel(full) - noiseFloor(full)).toFixed(1)} dB margin`);
check('strength 0.5 sits between bypass and full', dropHalf > 1 && dropHalf < dropFull, `${dropHalf.toFixed(1)} dB of ${dropFull.toFixed(1)} dB`);

// The click must land where it started — the one-frame wasm lag is compensated.
// Even gated hard it stays far above the −60 dBFS residual floor.
let peakIdx = 0, peakVal = 0;
for (let i = clickAt - 2000; i < clickAt + 2000; i++) {
  if (Math.abs(full[i]) > peakVal) { peakVal = Math.abs(full[i]); peakIdx = i; }
}
check('transient stays at its sample', Math.abs(peakIdx - clickAt) <= DENOISE_FRAME && peakVal > 0.05, `offset ${peakIdx - clickAt} samples, peak ${peakVal.toFixed(3)}`);

console.log(`\nnoise drop @100%: ${dropFull.toFixed(1)} dB · @50%: ${dropHalf.toFixed(1)} dB · voice shift: ${voiceShift.toFixed(1)} dB · click offset: ${peakIdx - clickAt}`);
console.log(fail === 0 ? `\nALL PASS (${pass})` : `\n${fail} FAILED, ${pass} passed`);
process.exit(fail ? 1 : 0);
