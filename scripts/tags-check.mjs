/**
 * ID3 tag engine check: strips and rewrites tags on a synthetic MP3, then
 * asserts exact header bytes, all frames, and round-trip fields.
 * Usage: see "check:tags" in package.json (esbuild bundle, then node).
 */
import { parseId3, stripAllTags, buildTaggedMp3 } from '../src/editor/tags';

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  ' + detail}`);
  if (!ok) failures++;
};

// Minimal "MPEG audio": 3 dummy 417-byte frames. The tag code never decodes these.
const mpeg = new Uint8Array(3 * 417).map((_, i) => (i % 417 === 0 ? 0xff : i % 417 === 1 ? 0xfb : i % 97));
const fakeV2 = new Uint8Array([0x49, 0x44, 0x33, 3, 0, 0, 0, 0, 0, 10, ...new Array(10).fill(0)]); // ID3v2.3, empty
const fakeV1 = (() => { const t = new Uint8Array(128); t.set([0x54, 0x41, 0x47]); return t; })();
const src = new Uint8Array(fakeV2.length + mpeg.length + 128);
src.set(fakeV2, 0); src.set(mpeg, fakeV2.length); src.set(fakeV1, fakeV2.length + mpeg.length);

// 1. strip removes both tags, audio survives
const bare = new Uint8Array(stripAllTags(src.buffer));
check('strip: length', bare.length === mpeg.length);
check('strip: bytes', bare.every((v, i) => v === mpeg[i]));

// 2. write: header is ID3v2.3, all frames present, audio copied after the tag
//    Cover bytes carry JPEG magic — browser-id3-writer sniffs and rejects
//    picture data it cannot identify, so plain synthetic bytes won't do.
const pic = new Uint8Array(64).map((_, i) => (i === 0 ? 0xff : i === 1 ? 0xd8 : i === 2 ? 0xff : i));
const tagged = new Uint8Array(buildTaggedMp3(src.buffer, {
  title: '测试 Title', artist: 'A'.repeat(300), album: 'Album', albumArtist: 'Alb. Artist',
  year: '2024', genre: '(13)', track: '3/12', disc: '1', composer: 'Comp', comment: 'note',
  picture: { data: pic, mime: 'image/jpeg' },
}));
check('write: magic', tagged[0] === 0x49 && tagged[1] === 0x44 && tagged[2] === 0x33);
check('write: version 2.3', tagged[3] === 3 && tagged[4] === 0);

// walk frames of the written tag
function frames(b) {
  const size = ((b[6] & 0x7f) << 21) | ((b[7] & 0x7f) << 14) | ((b[8] & 0x7f) << 7) | (b[9] & 0x7f);
  const tag = b.subarray(10, 10 + size);
  const map = {};
  let p = 0;
  while (p + 10 <= tag.length) {
    const id = String.fromCharCode(...tag.subarray(p, p + 4));
    if (!/^[A-Z0-9]{4}$/.test(id)) break;
    const fs = (tag[p + 4] << 24) | (tag[p + 5] << 16) | (tag[p + 6] << 8) | tag[p + 7];
    map[id] = tag.slice(p + 10, p + 10 + fs);
    p += 10 + fs;
  }
  return map;
}
const fr = frames(tagged);
for (const id of ['TIT2', 'TPE1', 'TALB', 'TPE2', 'TYER', 'TCON', 'TRCK', 'TPOS', 'TCOM', 'COMM', 'APIC']) {
  check(`write: ${id} present`, !!fr[id]);
}
check('write: TPE1 is UTF-16', fr.TPE1 && fr.TPE1[0] === 1);
const audioAt = 10 + (((tagged[6] & 0x7f) << 21) | ((tagged[7] & 0x7f) << 14) | ((tagged[8] & 0x7f) << 7) | (tagged[9] & 0x7f));
check('write: audio copied verbatim', tagged.length - audioAt === mpeg.length && tagged.subarray(audioAt).every((v, i) => v === mpeg[i]));

// 3. read back: full round-trip
const back = parseId3(tagged);
check('read: title', back.title === '测试 Title');
check('read: genre mapped', back.genre === 'Pop');
check('read: track', back.track === '3/12');
check('read: comment', back.comment === 'note');
check('read: picture mime+size', back.picture?.mime === 'image/jpeg' && back.picture.data.length === 64);
check('read: version', back.version?.[0] === 3);

// 4. removeAll saves bare audio
const clean = new Uint8Array(buildTaggedMp3(src.buffer, { title: 'x' }, { removeAll: true }));
check('removeAll: no ID3v2', !(clean[0] === 0x49 && clean[1] === 0x44 && clean[2] === 0x33));
check('removeAll: no ID3v1', clean.length === mpeg.length);

// 5. v2.4 syncsafe frame sizes read correctly (TDRC, utf-8)
const tdrc = (() => {
  const body = new Uint8Array([3, ...new TextEncoder().encode('2020-03-01')]);
  const head = new Uint8Array([0x49, 0x44, 0x33, 4, 0, 0, 0, 0, 0x10, 0]); // size patched below
  const frame = new Uint8Array(10 + body.length);
  frame.set([0x54, 0x44, 0x52, 0x43, 0, 0, 0, body.length, 0, 0]);
  frame.set(body, 10);
  const size = frame.length;
  const ss = [(size >> 21) & 0x7f, (size >> 14) & 0x7f, (size >> 7) & 0x7f, size & 0x7f];
  head.set(ss, 6);
  const all = new Uint8Array(head.length + frame.length);
  all.set(head, 0); all.set(frame, head.length);
  return all;
})();
check('read: v2.4 TDRC', parseId3(tdrc).year === '2020-03-01');

// 6. untagged file reads as empty
check('read: untagged empty', Object.keys(parseId3(mpeg)).length === 0);

if (failures) {
  console.error(`\n${failures} tag check(s) failed`);
  process.exit(1);
}
console.log('\nAll tag checks passed.');
