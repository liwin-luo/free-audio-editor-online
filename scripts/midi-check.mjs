/**
 * MIDI bytes for a known note: header, piano, C4 for one second, velocity 100.
 * Run: see check:midi in package.json.
 */
import { notesToMidi } from '../src/editor/midi-file.ts';

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
};

const ascii = (bytes, start, n) => String.fromCharCode(...bytes.slice(start, start + n));

const one = notesToMidi([{ pitch: 60, startSec: 0, durationSec: 1, velocity: 100 / 127 }]);
check('header is a type 0 file', ascii(one, 0, 4) === 'MThd' && one[9] === 0 && one[11] === 1);
check('division is 480', one[12] === 0x01 && one[13] === 0xe0);
check('track chunk follows', ascii(one, 14, 4) === 'MTrk');
check('C4 note-on at velocity 100', indexOf(one, [0x90, 60, 100]) >= 0);
check('note-off for C4', indexOf(one, [0x80, 60, 0]) >= 0);
check('one second is 960 ticks', indexOf(one, [0x87, 0x40, 0x80, 60, 0]) >= 0);
check('piano program', indexOf(one, [0xc0, 0]) >= 0);

const stacked = notesToMidi([
  { pitch: 60, startSec: 0, durationSec: 1, velocity: 1 },
  { pitch: 60, startSec: 0.5, durationSec: 0.5, velocity: 1 },
]);
check('same pitch does not overlap', indexOf(stacked, [0x83, 0x60, 0x80, 60, 0]) >= 0);
check('the later note is still there', indexOf(stacked, [0x90, 60, 127]) >= 0);

const empty = notesToMidi([]);
check('empty file is still MIDI', ascii(empty, 0, 4) === 'MThd' && indexOf(empty, [0x90]) < 0);
check('end of track is present', indexOf(empty, [0xff, 0x2f, 0x00]) >= 0);

const junk = notesToMidi([
  { pitch: 200, startSec: 0, durationSec: 0.5, velocity: 1 },
  { pitch: 60, startSec: 0, durationSec: 0, velocity: 1 },
  { pitch: 60, startSec: 0, durationSec: 1, velocity: 0 },
]);
check('pitch clamps and empty notes drop', indexOf(junk, [0x90, 127]) >= 0 && indexOf(junk, [0x90, 60]) < 0);

if (failures) {
  console.error(`\n${failures} midi check(s) failed`);
  process.exit(1);
}
console.log('\nAll midi checks passed.');

function indexOf(bytes, needle) {
  outer: for (let i = 0; i + needle.length <= bytes.length; i++) {
    for (let j = 0; j < needle.length; j++) if (bytes[i + j] !== needle[j]) continue outer;
    return i;
  }
  return -1;
}
