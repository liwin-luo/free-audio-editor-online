import { averageToMono } from '../src/editor/mono.ts';

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

const left = new Float32Array([1, 0, 0.5]);
const right = new Float32Array([0, 1, 0.5]);
const mono = averageToMono([left, right]);
assert(mono.length === 3, 'length');
assert(mono[0] === 0.5 && mono[1] === 0.5 && mono[2] === 0.5, `avg ${mono}`);
const copy = averageToMono([left]);
assert(copy[0] === 1 && copy !== left, 'mono copy');
console.log('mono-check ok');
