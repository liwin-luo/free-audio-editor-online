import { crushChannel } from '../src/editor/bitcrush.ts';

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

const src = new Float32Array([0.6, -0.6, 0.2, 0]);
const one = crushChannel(src, 1, 1);
assert(one[0] === 1 && one[1] === -1 && one[2] === 0 && one[3] === 0, `1-bit ${one}`);

const held = crushChannel(new Float32Array([0.5, 0, 0, 0, -1]), 16, 4);
assert(held[0] === held[1] && held[1] === held[2] && held[2] === held[3], 'hold');
assert(held[4] === -1, `next step ${held[4]}`);
const full = crushChannel(new Float32Array([1, -1]), 16, 1);
assert(full[0] === 1 && full[1] === -1, '16-bit full scale');
console.log('bitcrush-check ok');
