import { HZ432_SEMITONES, shiftTo432 } from '../src/editor/hz432.ts';

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

assert(HZ432_SEMITONES < -0.31 && HZ432_SEMITONES > -0.33, `semitones ${HZ432_SEMITONES}`);
const n = 4096;
const src = new Float32Array(n);
for (let i = 0; i < n; i++) src[i] = Math.sin((2 * Math.PI * 440 * i) / 44100);
const out = shiftTo432(src, 44100);
assert(out.length === n, 'length stays');
let diff = 0;
for (let i = 0; i < n; i++) diff += Math.abs(out[i] - src[i]);
assert(diff > 1, `shift should move samples ${diff}`);
console.log('hz432-check ok', HZ432_SEMITONES.toFixed(4));
