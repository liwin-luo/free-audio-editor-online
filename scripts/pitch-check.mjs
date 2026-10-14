/**
 * Sine at 440 Hz, +12 semitones should halve the period and keep the length.
 * Run: node_modules/.bin/esbuild scripts/pitch-check.mjs --bundle --platform=node --format=esm --outfile=/tmp/pitch-check.mjs && node /tmp/pitch-check.mjs
 */
import { pitchShiftChannel } from '../src/editor/pitch.ts';

const rate = 44100;

function sine(freq) {
  const n = rate;
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = Math.sin((2 * Math.PI * freq * i) / rate);
  return out;
}

function medianPeriod(samples) {
  const crosses = [];
  for (let i = 8000; i < 30000 && crosses.length < 12; i++) {
    if (samples[i] <= 0 && samples[i + 1] > 0) crosses.push(i);
  }
  if (crosses.length < 4) throw new Error(`only ${crosses.length} zero crossings`);
  const gaps = [];
  for (let i = 1; i < crosses.length; i++) gaps.push(crosses[i] - crosses[i - 1]);
  gaps.sort((a, b) => a - b);
  return gaps[Math.floor(gaps.length / 2)];
}

function assert(ok, msg) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!ok) process.exitCode = 1;
}

const input = sine(440);
const same = pitchShiftChannel(input, 0, rate);
let identical = same.length === input.length;
for (let i = 0; identical && i < input.length; i++) identical = same[i] === input[i];
assert(identical, 'zero semitones is a copy of the same length');

const up = pitchShiftChannel(input, 12, rate);
const upPeriod = medianPeriod(up);
assert(up.length === input.length && Math.abs(upPeriod - 50) <= 8, `+12 period ${upPeriod} near 50, length ${up.length}`);

const down = pitchShiftChannel(input, -12, rate);
const downPeriod = medianPeriod(down);
assert(down.length === input.length && Math.abs(downPeriod - 200) <= 15, `−12 period ${downPeriod} near 200, length ${down.length}`);

if (process.exitCode) process.exit(process.exitCode);
