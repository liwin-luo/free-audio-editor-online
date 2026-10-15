/**
 * A loud burst in the second half must disappear when the range is the first half.
 * Run: npm run check:waveform
 */
import { computePeaks } from '../src/editor/waveform.ts';

function fakeBuffer(samples, rate = 1000) {
  const data = Float32Array.from(samples);
  return {
    numberOfChannels: 1,
    length: data.length,
    sampleRate: rate,
    getChannelData: () => data,
  };
}

function assert(ok, msg) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!ok) process.exitCode = 1;
}

const silent = Array.from({ length: 500 }, () => 0);
const loud = Array.from({ length: 500 }, () => 0.8);
const buf = fakeBuffer([...silent, ...loud]);

const early = computePeaks(buf, 8, { start: 0, end: 0.5 });
const late = computePeaks(buf, 8, { start: 0.5, end: 1 });
const all = computePeaks(buf, 8);

assert(early.max.every((v) => v < 0.01), 'first half is silent');
assert(late.min.every((v) => v > 0.7), 'second half is the burst');
assert(all.max[0] < 0.01 && all.max[7] > 0.7, 'full file still spans both halves');
