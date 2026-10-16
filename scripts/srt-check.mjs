/**
 * SRT formatter check: known transcript in, exact SRT bytes out.
 * Usage: see "check:srt" in package.json (esbuild bundle, then node).
 */
import { toSrtTime, chunksToSrt } from '../src/editor/srt';

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  ' + detail}`);
  if (!ok) failures++;
};

// --- toSrtTime ---
check('zero', toSrtTime(0) === '00:00:00,000');
check('hour+minutes+ms', toSrtTime(3661.5) === '01:01:01,500');
check('rounds sub-ms', toSrtTime(1.23456) === '00:00:01,235');
check('negative clamps', toSrtTime(-2) === '00:00:00,000');
check('pads hours', toSrtTime(59.25) === '00:00:59,250');

// --- chunksToSrt ---
const srt = chunksToSrt([
  { start: 0, end: 2.5, text: '  Hello world.  ' },
  { start: 2.5, end: null, text: 'Second line' },
  { start: 4, end: null, text: '   ' },
]);
const expected =
  '1\r\n00:00:00,000 --> 00:00:02,500\r\nHello world.\r\n\r\n' +
  '2\r\n00:00:02,500 --> 00:00:04,000\r\nSecond line\r\n\r\n';
check('exact bytes, open end borrows next start', srt === expected, JSON.stringify(srt));

const last = chunksToSrt([{ start: 4, end: null, text: 'tail' }]);
check('last open end = start+2', last === '1\r\n00:00:04,000 --> 00:00:06,000\r\ntail\r\n\r\n', JSON.stringify(last));

check('closed end respected', chunksToSrt([{ start: 1, end: 1.75, text: 'a' }]) === '1\r\n00:00:01,000 --> 00:00:01,750\r\na\r\n\r\n');
check('empty input → empty string', chunksToSrt([]) === '');
check('whitespace-only input → empty string', chunksToSrt([{ start: 0, end: 1, text: ' \n ' }]) === '');

const multi = chunksToSrt(
  Array.from({ length: 12 }, (_, i) => ({ start: i * 2, end: i * 2 + 2, text: `cue ${i + 1}` })),
);
check('numbering stays sequential after gaps', /11\r\n00:00:20,000 --> 00:00:22,000\r\ncue 11/.test(multi));

if (failures) {
  console.error(`\n${failures} srt check(s) failed`);
  process.exit(1);
}
console.log('\nAll srt checks passed.');
