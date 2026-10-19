/**
 * Timeline mix: offset, trim, mute, solo, pan, and the clip ceiling.
 * Run via npm run check:mixer.
 */
import { mixChannels } from '../src/editor/mixer.ts';

const rate = 8000;

function constant(seconds, value) {
  const ch = new Float32Array(Math.round(seconds * rate));
  ch.fill(value);
  return ch;
}

function track(over = {}) {
  return {
    channels: [constant(1, 0.4)],
    sampleRate: rate,
    offset: 0,
    trimStart: 0,
    trimEnd: 1,
    gain: 1,
    pan: 0,
    mute: false,
    solo: false,
    ...over,
  };
}

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

function at(mix, sec, channel) {
  const i = Math.round(sec * mix.sampleRate);
  return channel === 'r' ? mix.right[i] : mix.left[i];
}

const a = track();
const b = track({ offset: 0.5, gain: 0.5 });
const mix = mixChannels([a, b], 1);
assert(Math.abs(mix.left.length / mix.sampleRate - 1.5) < 0.01, `duration ${mix.left.length / mix.sampleRate}`);
assert(Math.abs(at(mix, 0.25, 'l') - 0.4) < 1e-4, `early ${at(mix, 0.25, 'l')}`);
assert(Math.abs(at(mix, 0.75, 'l') - 0.6) < 1e-4, `overlap ${at(mix, 0.75, 'l')}`);
assert(Math.abs(at(mix, 1.25, 'l') - 0.2) < 1e-4, `late B ${at(mix, 1.25, 'l')}`);

const muted = mixChannels([a, track({ offset: 0.5, gain: 0.5, mute: true })], 1);
assert(Math.abs(at(muted, 0.75, 'l') - 0.4) < 1e-4, `muted overlap ${at(muted, 0.75, 'l')}`);
assert(muted.left.length / muted.sampleRate > 1.4, 'muted track still defines the end');

const solo = mixChannels([a, track({ offset: 0.5, gain: 0.5, solo: true })], 1);
assert(Math.abs(at(solo, 0.25, 'l')) < 1e-4, `solo early ${at(solo, 0.25, 'l')}`);
assert(Math.abs(at(solo, 1.25, 'l') - 0.2) < 1e-4, `solo late ${at(solo, 1.25, 'l')}`);

const soloMute = mixChannels([track({ solo: true, mute: true })], 1);
assert(Math.abs(at(soloMute, 0.25, 'l')) < 1e-4, 'mute wins over solo');

const panned = mixChannels([track({ offset: 0.5, pan: -1 })], 1);
assert(Math.abs(at(panned, 0.75, 'r')) < 1e-4, `hard left right ${at(panned, 0.75, 'r')}`);
assert(Math.abs(at(panned, 0.75, 'l') - 0.4) < 1e-4, `hard left left ${at(panned, 0.75, 'l')}`);

const trimmed = mixChannels([a, track({ offset: 0.5, trimStart: 0.5, trimEnd: 1 })], 1);
assert(Math.abs(trimmed.left.length / trimmed.sampleRate - 1) < 0.02, `trimmed duration ${trimmed.left.length / trimmed.sampleRate}`);

const hot = mixChannels(
  [track({ channels: [constant(1, 1)], gain: 1.5 }), track({ channels: [constant(1, 1)], gain: 1.5 })],
  1,
);
let peak = 0;
for (let i = 0; i < hot.left.length; i++) peak = Math.max(peak, Math.abs(hot.left[i]), Math.abs(hot.right[i]));
assert(peak <= 0.98 + 1e-6, `peak ${peak}`);
assert(hot.pulledDownDb > 0, `pulled ${hot.pulledDownDb}`);

console.log('mixer-check ok', { pulled: hot.pulledDownDb.toFixed(2) });
