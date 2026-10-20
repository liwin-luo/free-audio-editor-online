/**
 * Loop copy: four plain repeats stay a sine; a crossfade shortens the file and does not click.
 * Run via npm run check:loop.
 */
import { loopChannels, loopedDuration } from '../src/editor/loop.ts';

const rate = 44100;

function tone(seconds, amp = 0.5) {
  const n = Math.round(seconds * rate);
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = amp * Math.sin((2 * Math.PI * 1000 * i) / rate);
  return out;
}

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

const src = tone(1);
const plain = loopChannels([src], rate, { times: 4, crossfadeSec: 0 });
assert(plain[0].length === rate * 4, `plain length ${plain[0].length}`);
assert(Math.abs(loopedDuration(1, 4, 0) - 4) < 1e-9, 'plain duration');
const at3 = plain[0][3 * rate];
assert(Math.abs(at3 - src[0]) < 1e-6, `second 3 ${at3} vs ${src[0]}`);

const faded = loopChannels([src], rate, { times: 4, crossfadeSec: 0.05 });
const fadedSec = faded[0].length / rate;
assert(Math.abs(fadedSec - 3.85) < 1 / rate, `faded duration ${fadedSec}`);
let maxStep = 0;
for (let i = 1; i < faded[0].length; i++) {
  maxStep = Math.max(maxStep, Math.abs(faded[0][i] - faded[0][i - 1]));
}
assert(maxStep < 0.25, `seam step ${maxStep}`);

assert(loopedDuration(200, 4, 0) > 600, 'ten minute cap');

console.log('loop-check ok', { fadedSec: fadedSec.toFixed(4), maxStep: maxStep.toFixed(4) });
