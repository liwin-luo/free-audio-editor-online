/**
 * Silence ranges: long zeros go, short breaths stay, a live channel keeps the frame.
 * Run via npm run check:silence.
 */
import { silenceKeepRanges } from '../src/editor/silence.ts';

const rate = 44100;
const opts = { thresholdDb: -40, minSilenceSec: 0.35, padSec: 0.08 };

function tone(seconds, amp = 0.5) {
  const n = Math.round(seconds * rate);
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = amp * Math.sin((2 * Math.PI * 1000 * i) / rate);
  return out;
}

function zeros(seconds) {
  return new Float32Array(Math.round(seconds * rate));
}

function join(parts) {
  const n = parts.reduce((s, p) => s + p.length, 0);
  const out = new Float32Array(n);
  let pos = 0;
  for (const p of parts) {
    out.set(p, pos);
    pos += p.length;
  }
  return out;
}

function kept(ranges) {
  return ranges.reduce((s, r) => s + (r.to - r.from), 0);
}

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

const longGap = silenceKeepRanges([join([tone(1), zeros(2), tone(1)])], rate, opts);
assert(longGap.length === 2, `long gap ranges ${longGap.length}`);
const longKept = kept(longGap);
assert(longKept >= 2.1 && longKept <= 2.24, `long gap kept ${longKept}`);

const breath = silenceKeepRanges([join([tone(1), zeros(0.2), tone(1)])], rate, opts);
assert(breath.length === 1, `breath ranges ${breath.length}`);
assert(Math.abs(kept(breath) - 2.2) < 0.01, `breath kept ${kept(breath)}`);

const silent = silenceKeepRanges([zeros(3)], rate, opts);
assert(silent.length === 1 && silent[0].from === 0 && Math.abs(silent[0].to - 3) < 1e-6, `all zero ${JSON.stringify(silent)}`);

const rightOnly = silenceKeepRanges([zeros(1), tone(1)], rate, opts);
assert(rightOnly.length === 1 && Math.abs(kept(rightOnly) - 1) < 0.01, `right channel kept ${kept(rightOnly)}`);

console.log('silence-check ok', { longKept: longKept.toFixed(3) });
