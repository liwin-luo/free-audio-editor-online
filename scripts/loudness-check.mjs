/**
 * K-weighted integrated loudness. The sine anchor is recorded from this
 * implementation; a coefficient change should fail it.
 * Run via npm run check:loudness.
 */
import { integratedLufs, matchLufsGain, PEAK_CEILING_DB } from '../src/editor/loudness.ts';

const rate = 48000;

function sine(seconds, db, channels) {
  const amp = 10 ** (db / 20);
  const n = Math.round(seconds * rate);
  const out = [];
  for (let c = 0; c < channels; c++) {
    const ch = new Float32Array(n);
    for (let i = 0; i < n; i++) ch[i] = amp * Math.sin((2 * Math.PI * 1000 * i) / rate);
    out.push(ch);
  }
  return out;
}

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

const mono = integratedLufs(sine(2, -20, 1), rate);
const ANCHOR = -23.0;
assert(Math.abs(mono - ANCHOR) <= 0.5, `mono -20 dBFS 1 kHz is ${mono}, expected ${ANCHOR} ± 0.5`);

const zeros = integratedLufs([new Float32Array(rate)], rate);
assert(zeros === Number.NEGATIVE_INFINITY, `zeros ${zeros}`);

const left = integratedLufs(sine(2, -20, 1), rate);
const stereo = integratedLufs(sine(2, -20, 2), rate);
const delta = stereo - left;
assert(Math.abs(delta - 3.01) <= 0.3, `stereo delta ${delta}`);

const peak = 10 ** (-1 / 20);
const match = matchLufsGain(-40, -16, peak);
const outPeak = peak * match.linear;
assert(outPeak <= 10 ** (PEAK_CEILING_DB / 20) + 1e-12, `peak after match ${outPeak}`);
assert(match.limited, 'expected the ceiling to bind');

console.log('loudness-check ok', { mono: mono.toFixed(3), delta: delta.toFixed(3), outPeakDb: (20 * Math.log10(outPeak)).toFixed(3) });
