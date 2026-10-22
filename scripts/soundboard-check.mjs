/**
 * Soundboard board-file checks. Node only — board-file.ts is pure on purpose.
 * Run: npm run check:soundboard
 */
import {
  nearestColor,
  isPaletteColor,
  encodeWavBase64,
  base64ToBytes,
  decodeWavBytes,
  buildBoardJson,
  parseBoardJson,
  PALETTE,
} from '/tmp/sb-fn.mjs';

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

/* --- nearestColor: SoundTools gradient strings map to the palette --- */
assert(nearestColor('linear-gradient(135deg, #ec4899, #be185d)') === 'rose', 'pink gradient → rose');
assert(nearestColor('linear-gradient(135deg, #64748b, #334155)') === 'slate', 'slate gradient → slate');
assert(nearestColor('no color here') === 'teal', 'no hex → first palette entry');

/* --- isPaletteColor guards the own-format branch --- */
assert(isPaletteColor('rose') === true, 'rose is a palette color');
assert(isPaletteColor('#ec4899') === false, 'raw hex is not a palette id');

/* --- WAV encode → decode roundtrip --- */
const RATE = 44100;
const FRAMES = 2205; // 50 ms
function mockBuffer() {
  const left = new Float32Array(FRAMES);
  const right = new Float32Array(FRAMES);
  for (let i = 0; i < FRAMES; i++) {
    left[i] = Math.sin((2 * Math.PI * 440 * i) / RATE) * 0.5;
    right[i] = Math.sin((2 * Math.PI * 880 * i) / RATE) * 0.25;
  }
  return {
    numberOfChannels: 2,
    length: FRAMES,
    sampleRate: RATE,
    getChannelData: (c) => (c === 0 ? left : right),
  };
}

const b64 = encodeWavBase64(mockBuffer());
const bytes = base64ToBytes(b64);
assert(bytes[0] === 0x52 && bytes[1] === 0x49, 'WAV starts with RIFF');
const decoded = decodeWavBytes(bytes);
assert(decoded.channels.length === 2, 'roundtrip keeps 2 channels');
assert(decoded.sampleRate === RATE, 'roundtrip keeps sample rate');
assert(decoded.channels[0].length === FRAMES, 'roundtrip keeps frame count');
let maxErr = 0;
for (let i = 0; i < FRAMES; i++) {
  maxErr = Math.max(maxErr, Math.abs(decoded.channels[0][i] - Math.sin((2 * Math.PI * 440 * i) / RATE) * 0.5));
}
assert(maxErr < 0.0001, `16-bit roundtrip error ${maxErr} within tolerance`);

/* --- own format: build → parse --- */
const own = buildBoardJson([
  { id: 'b_1', name: 'Air Horn', color: 'teal', duration: 0.9, sampleRate: RATE, audioB64: b64 },
  { id: 'b_2', name: 'Buzz', color: 'amber', duration: 0.1, sampleRate: RATE, audioB64: b64 },
]);
const parsedOwn = parseBoardJson(own);
assert(parsedOwn.length === 2, 'own format parses both buttons');
assert(parsedOwn[0].color === 'teal', 'own format keeps palette colors');
assert(parsedOwn[0].name === 'Air Horn', 'own format keeps names');

/* --- SoundTools format: gradient color mapping + same audioB64 field --- */
const st = JSON.stringify({
  version: 1,
  buttons: [
    { id: 'def_airhorn', name: 'Air Horn', color: 'linear-gradient(135deg, #ec4899, #be185d)', audioB64: b64 },
    { id: 'def_x', name: 'No Audio', color: 'linear-gradient(135deg, #000, #111)' },
  ],
});
const parsedSt = parseBoardJson(st);
assert(parsedSt.length === 1, 'buttons without audio are skipped');
assert(parsedSt[0].color === 'rose', 'gradient maps to nearest palette color');
assert(parsedSt[0].name === 'Air Horn', 'names survive the import');

/* --- broken input throws (the page turns that into an honest toast) --- */
let threw = false;
try {
  parseBoardJson('{"nope": true}');
} catch {
  threw = true;
}
assert(threw, 'missing buttons array throws');

/* --- palette sanity: every color distinct, 8 entries --- */
assert(PALETTE.length === 8, 'palette has 8 colors');
assert(new Set(PALETTE.map((p) => p.id)).size === 8, 'palette ids are unique');

console.log('soundboard-check: all assertions passed');
