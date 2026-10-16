# MP3 Tag Editor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ship a new tool page `/mp3-tag-editor` that edits MP3 ID3 tags (title, artist, album, album artist, year, genre, track, disc, composer, comment) and embedded cover art, entirely client-side, in all 11 locales.

**Architecture:** New pure tag engine in `src/editor/` (hand-rolled ID3v2.3/2.4 *reader*, `browser-id3-writer` for *writing*), a new editor island `TagEditor.astro` following the TranscribeEditor pattern, one new `EditorConfig` flag (`tagEditor`) with a dispatch branch in `ToolPage.astro`. Copy lives in a new `ToolDef` (en) + `ToolCopy` in the 10 locale catalogs, enforced by the existing `assertCatalogs()` build gate. Audio bytes are copied untouched — only the tag block is rewritten, so "no quality change" is literally true.

**Tech Stack:** Astro + Tailwind (existing), `browser-id3-writer@^6` (new npm dep, ~10 KB, ESM, isomorphic), no worker needed (ID3 ops are millisecond-fast), esbuild-bundled Node check script per repo convention.

---

## Locked decisions

1. **MP3 only, single file, in v1.** FLAC/M4A/WAV tags and batch editing are follow-up tools with their own landing pages — not extensions here. Honest limitation goes in the FAQ (spec §3, mandatory FAQ type 3).
2. **Write ID3v2.3 with UTF-16 text.** That is the max-compatibility combo (car stereos, old players) and it is what keeps CJK/Arabic/Cyrillic titles from mojibake — a top query cluster in ja/zh/ko markets. `browser-id3-writer` writes v2.3 by default; the check script asserts the version bytes, so we never assume.
3. **"Remove all metadata" is a mode of this tool** (strip ID3v2 + ID3v1, save bare audio), targeting the `remove metadata from mp3` long-tail — not a separate tool yet.
4. **No mojibake auto-repair in v1.** The fix we ship: retype the text, save as UTF-16. (Auto-repair needs raw bytes of the old tag — our reader can expose that later.)
5. **Reader is hand-rolled, writer is a library.** Reading is pure, sync, Node-testable, and later unlocks mojibake repair; `jsmediatags` is a stale UMD package that fights Vite and Node checks. Writing correct padding/syncsafe/UTF-16 is exactly where a battle-tested lib earns its 10 KB.
6. **English copy lives in `tools.ts`** (repo convention — `en.ts` has no `tools` section); the 10 locale catalogs get full `ToolCopy`. Every new `EditorText` key goes into all 11 files or `assertCatalogs()` fails the build. Do not bypass it.
7. **Category `merge`** (the bucket that already holds mp4-to-mp3 / extract-audio / audio-joiner — file-level ops). No new nav category (spec §4 forbids it for this).

## Research → page mapping (why the copy is what it is)

Verified SERP evidence, 2026-10-16 (Ecosia/Google US + Exa cross-check; no volume data available, ranked by SERP evidence):

| Query cluster | SERP evidence | Our play |
|---|---|---|
| `mp3 tag editor online`, `music tag editor online`, `mp3 metadata editor`, `edit audio metadata online` | Strong, 8/10 web tools; #1 (banger.show) is a thin page: no FAQ, no how-to, no schema | Primary keywords. Full ToolDef copy + JSON-LD (WebApplication + HowTo + FAQPage + Breadcrumb, all automatic via `ToolPage.astro`) beats the thin #1 on content alone |
| `mp3 tag editor without uploading` | Client-side tools rank #1 for this exact phrase | Privacy copy is our existing brand claim; FAQ answers name the mechanism (FileReader, in-tab) |
| `add album art to mp3`, `change album art mp3` | Mixed SERP, weak dedicated tools | Cover art is a first-class UI block, coverHint carries size guidance |
| `remove metadata from mp3` | Dedicated removers rank, all upload-based | "Remove all metadata" mode + FAQ #4/uses #3 |
| `fix mp3 tags garbled` (CJK) | Almost entirely forum threads — unowned | FAQ #6 + UTF-16 write; near-mandatory feature for ja/zh/ko locales |
| `batch edit mp3 tags online` | Desktop mp3tag.de #1; online batch is gated/paid | Explicitly out of scope v1 (FAQ honest limitation); future sibling tool |
| DE/JA localization | Local-language competitors nearly absent; translated thin pages rank | Free win — all 11 locales ship in the same PR per repo policy |

Competitor FAQ themes to cover (verified on jukeblocks / mp3tagpro / editmp3tags / soundtools.io): is my file uploaded, does quality change, why different file size, ID3v2.3 vs 2.4, car stereo "Track 01", Apple Music album splitting, mobile support, cover image size.

---

## Task 0 — Preflight: clear the WIP baseline

The working tree currently carries **uncommitted WIP** (hub tasks grid + retitled metas touching `astro.config.mjs`, `ToolsHub.astro`, `tools.ts`, `types.ts`, 9 locale files). Start from a committed, green baseline so failures in later tasks are attributable.

**Step 0.1:** `git status` — confirm the WIP set above (plus untracked `docs/plans/2026-10-16-seo-adversarial-audit.md`, commit that separately if wanted).

**Step 0.2:** Land or stash the hub WIP. If it builds, commit it as its own commit (it is unrelated to this feature). If it is half-done, `git stash`.

**Step 0.3:** `npm run build` → must succeed. Record the tool count shown in nav/footer for later diff sanity.

## Task 1 — Tag engine (pure modules + Node check)

**Files:**
- Create: `src/editor/id3-read.ts`
- Create: `src/editor/tags.ts`
- Create: `scripts/tags-check.mjs`
- Modify: `package.json` (dep + script)

**Step 1.1: Install the writer**

```bash
npm i browser-id3-writer
```

**Step 1.2: Write `src/editor/id3-read.ts`** — pure, sync, no DOM (Node check runs it):

```ts
/**
 * Minimal ID3v2 reader for the common text frames + APIC cover art.
 * Supports v2.3 and v2.4; v2.2 files (pre-2000) are treated as untagged.
 * Pure functions, no DOM — scripts/tags-check.mjs runs this in Node.
 */

export interface PictureData {
  data: Uint8Array; // fresh copy, own buffer — safe to hand to APIs
  mime: string;
}

export interface AudioTags {
  title?: string;
  artist?: string;
  album?: string;
  albumArtist?: string;
  year?: string;
  genre?: string;
  track?: string; // "3" or "3/12"
  disc?: string;
  composer?: string;
  comment?: string;
  picture?: PictureData;
  version?: [number, number]; // ID3 major.minor, when a v2 tag was present
}

// ID3v1 genre table (0–79, the standard set). v2 genres often arrive as "(13)".
const GENRES = [
  'Blues', 'Classic Rock', 'Country', 'Dance', 'Disco', 'Funk', 'Grunge',
  'Hip-Hop', 'Jazz', 'Metal', 'New Age', 'Oldies', 'Other', 'Pop', 'R&B',
  'Rap', 'Reggae', 'Rock', 'Techno', 'Industrial', 'Alternative', 'Ska',
  'Death Metal', 'Pranks', 'Soundtrack', 'Euro-Techno', 'Ambient',
  'Trip-Hop', 'Vocal', 'Jazz+Funk', 'Fusion', 'Trance', 'Classical',
  'Instrumental', 'Acid', 'House', 'Game', 'Sound Clip', 'Gospel', 'Noise',
  'Alt. Rock', 'Bass', 'Soul', 'Punk', 'Space', 'Meditative',
  'Instrumental Pop', 'Instrumental Rock', 'Ethnic', 'Gothic', 'Darkwave',
  'Techno-Industrial', 'Electronic', 'Pop-Folk', 'Eurodance', 'Dream',
  'Southern Rock', 'Comedy', 'Cult', 'Gangsta Rap', 'Top 40',
  'Christian Rap', 'Pop/Funk', 'Jungle', 'Native American', 'Cabaret',
  'New Wave', 'Psychedelic', 'Rave', 'Showtunes', 'Trailer', 'Lo-Fi',
  'Tribal', 'Acid Punk', 'Acid Jazz', 'Polka', 'Retro', 'Musical',
  'Rock & Roll', 'Hard Rock',
];

function syncsafe(b: Uint8Array, o: number): number {
  return ((b[o] & 0x7f) << 21) | ((b[o + 1] & 0x7f) << 14) | ((b[o + 2] & 0x7f) << 7) | (b[o + 3] & 0x7f);
}

function be32(b: Uint8Array, o: number): number {
  return (b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3];
}

function latin1(b: Uint8Array): string {
  let s = '';
  for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
  return s;
}

/** Length of the encoding-aware terminator at p (00, or 00 00 for UTF-16). */
function termLen(b: Uint8Array, p: number, enc: number): number {
  if (enc === 1 || enc === 2) {
    let i = p;
    while (i + 1 < b.length && (b[i] !== 0 || b[i + 1] !== 0)) i += 2;
    return i - p + 2;
  }
  let i = p;
  while (i < b.length && b[i] !== 0) i++;
  return i - p + 1;
}

function decodeText(b: Uint8Array, enc: number): string {
  let payload = b;
  let label: string;
  if (enc === 0) label = 'windows-1252';
  else if (enc === 3) label = 'utf-8';
  else if (enc === 2) label = 'utf-16be';
  else {
    const bom = b[0] === 0xfe && b[1] === 0xff ? 'utf-16be' : 'utf-16le';
    payload = b.subarray(2);
    label = bom;
  }
  try {
    return new TextDecoder(label).decode(payload).replace(/\u0000+/g, '').trim();
  } catch {
    return '';
  }
}

function cleanGenre(v: string): string {
  const m = /^\((\d+)\)\s*(.*)$/.exec(v);
  if (!m) return v;
  return m[2] || GENRES[Number(m[1])] || v;
}

function deUnsync(b: Uint8Array): Uint8Array {
  const out = new Uint8Array(b.length);
  let j = 0;
  for (let i = 0; i < b.length; i++) {
    out[j++] = b[i];
    if (b[i] === 0xff && b[i + 1] === 0x00) i++;
  }
  return out.subarray(0, j);
}

const TEXT_FRAMES: Record<string, 'title' | 'artist' | 'album' | 'albumArtist' | 'year' | 'genre' | 'track' | 'disc' | 'composer'> = {
  TIT2: 'title', TPE1: 'artist', TALB: 'album', TPE2: 'albumArtist',
  TYER: 'year', TDRC: 'year', TCON: 'genre', TRCK: 'track',
  TPOS: 'disc', TCOM: 'composer',
};

/** Read ID3v2 tags from a complete file buffer (tag lives at the head). */
export function parseId3(file: Uint8Array): AudioTags {
  if (file[0] !== 0x49 || file[1] !== 0x44 || file[2] !== 0x33) return {};
  const major = file[3];
  if (major < 3 || major > 4) return {};
  const out: AudioTags = { version: [major, file[4]] };
  let tag = file.subarray(10, 10 + syncsafe(file, 6));
  if (file[5] & 0x40) tag = tag.subarray(major === 4 ? syncsafe(tag, 0) : be32(tag, 0) + 4); // extended header
  if (file[5] & 0x80) tag = deUnsync(tag);

  let pos = 0;
  while (pos + 10 <= tag.length) {
    const id = latin1(tag.subarray(pos, pos + 4));
    if (!/^[A-Z0-9]{4}$/.test(id)) break; // padding or garbage
    const fsize = major === 4 ? syncsafe(tag, pos + 4) : be32(tag, pos + 4);
    if (fsize <= 0 || pos + 10 + fsize > tag.length) break;
    const body = tag.subarray(pos + 10, pos + 10 + fsize);
    const field = TEXT_FRAMES[id];
    if (field) {
      const v = decodeText(body.subarray(1), body[0]);
      if (v && !out[field]) out[field] = field === 'genre' ? cleanGenre(v) : v;
    } else if (id === 'COMM' && !out.comment) {
      const text = decodeText(body.subarray(4 + termLen(body, 4, body[0])), body[0]);
      if (text) out.comment = text;
    } else if (id === 'APIC' && !out.picture) {
      const enc = body[0];
      let p = 1;
      let m = p;
      while (m < body.length && body[m] !== 0) m++;
      const mime = latin1(body.subarray(p, m)) || 'image/jpeg';
      p = m + 1 + 1; // mime NUL + picture-type byte
      p += termLen(body, p, enc); // description
      out.picture = { mime, data: body.slice(p) }; // slice = fresh buffer
    }
    pos += 10 + fsize;
  }
  return out;
}
```

**Step 1.3: Write `src/editor/tags.ts`** — strip + rebuild, the only module the UI imports:

```ts
/**
 * MP3 tag pipeline: strip old tags, write new ones (or save bare audio).
 * Audio MPEG frames are never decoded or re-encoded — copied byte for byte.
 */
import ID3Writer from 'browser-id3-writer';

export { parseId3, type AudioTags, type PictureData } from './id3-read';
import { syncsafe } from './id3-read';

function hasId3v2(b: Uint8Array): boolean {
  return b[0] === 0x49 && b[1] === 0x44 && b[2] === 0x33;
}

function hasId3v1(b: Uint8Array): boolean {
  const t = b.subarray(b.length - 128);
  return t[0] === 0x54 && t[1] === 0x41 && t[2] === 0x47; // 'TAG'
}

/** Remove ID3v2 (head) and ID3v1 (tail); return the bare MPEG audio. */
export function stripAllTags(buf: ArrayBuffer): ArrayBuffer {
  const b = new Uint8Array(buf);
  let start = 0;
  if (hasId3v2(b)) {
    let end = 10 + syncsafe(b, 6);
    if (b[5] & 0x10) end += 10; // footer
    start = end;
  }
  let stop = b.length;
  if (stop - start > 128 && hasId3v1(b)) stop -= 128;
  return b.slice(start, stop).buffer;
}

export function buildTaggedMp3(
  audio: ArrayBuffer,
  tags: AudioTags,
  opts: { removeAll?: boolean } = {},
): ArrayBuffer {
  const bare = stripAllTags(audio);
  if (opts.removeAll) return bare;
  const w = new ID3Writer(bare);
  const s = (v?: string) => (v && v.trim() ? v.trim() : undefined);
  const frame = (id: Parameters<ID3Writer['setFrame']>[0], v: unknown) => {
    if (v !== undefined) w.setFrame(id, v as never);
  };
  frame('TIT2', s(tags.title));
  frame('TPE1', s(tags.artist));
  frame('TALB', s(tags.album));
  frame('TPE2', s(tags.albumArtist));
  frame('TYER', s(tags.year));
  frame('TCON', s(tags.genre));
  frame('TRCK', s(tags.track));
  frame('TPOS', s(tags.disc));
  frame('TCOM', s(tags.composer));
  const comment = s(tags.comment);
  if (comment) frame('COMM', { language: 'eng', text: comment });
  if (tags.picture?.data.length) {
    frame('APIC', { type: 3, data: tags.picture.data, description: '' });
  }
  w.addTag();
  return w.arrayBuffer;
}
```

> Note: `syncsafe` is private in `id3-read.ts` — export it (add `export` to the function) or duplicate the 3-line helper here; prefer exporting.
> At execution, open `node_modules/browser-id3-writer/README.md` and verify the `setFrame` value shapes (TPE1 array vs string, APIC `data` type, `addTag()` return) — the check script below asserts the output bytes, so any mismatch fails loudly, not silently.

**Step 1.4: Write `scripts/tags-check.mjs`** (mirror the esbuild scaffolding of `scripts/srt-check.mjs`):

```js
// Bundles src/editor/tags.ts with esbuild, then round-trips tags in Node.
import * as esbuild from 'esbuild';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

let failed = 0;
function ok(name, cond) {
  console.log(`${cond ? 'PASS' : 'FAIL'} ${name}`);
  if (!cond) failed++;
}

const dir = mkdtempSync(join(tmpdir(), 'tags-check-'));
const out = join(dir, 'tags.mjs');
await esbuild.build({
  entryPoints: ['src/editor/tags.ts'],
  bundle: true,
  format: 'esm',
  platform: 'neutral',
  outfile: out,
  logLevel: 'silent',
});
const { parseId3, stripAllTags, buildTaggedMp3 } = await import(pathToFileURL(out).href);

// Minimal "MPEG audio": 3 dummy 417-byte frames. The tag code never decodes these.
const mpeg = new Uint8Array(3 * 417).map((_, i) => (i % 417 === 0 ? 0xff : i % 417 === 1 ? 0xfb : i % 97));
const fakeV2 = new Uint8Array([0x49, 0x44, 0x33, 3, 0, 0, 0, 0, 0, 10, ...new Array(10).fill(0)]); // ID3v2.3, empty
const fakeV1 = (() => { const t = new Uint8Array(128); t.set([0x54, 0x41, 0x47]); return t; })();
const src = new Uint8Array(fakeV2.length + mpeg.length + 128);
src.set(fakeV2, 0); src.set(mpeg, fakeV2.length); src.set(fakeV1, fakeV2.length + mpeg.length);

// 1. strip removes both tags, audio survives
const bare = new Uint8Array(stripAllTags(src.buffer));
ok('strip: length', bare.length === mpeg.length);
ok('strip: bytes', bare.every((v, i) => v === mpeg[i]));

// 2. write: header is ID3v2.3, all frames present, audio copied after the tag
const pic = new Uint8Array(64).map((_, i) => i);
const tagged = new Uint8Array(buildTaggedMp3(src.buffer, {
  title: '测试 Title', artist: 'A'.repeat(300), album: 'Album', albumArtist: 'Alb. Artist',
  year: '2024', genre: '(13)', track: '3/12', disc: '1', composer: 'Comp', comment: 'note',
  picture: { data: pic, mime: 'image/jpeg' },
}));
ok('write: magic', tagged[0] === 0x49 && tagged[1] === 0x44 && tagged[2] === 0x33);
ok('write: version 2.3', tagged[3] === 3 && tagged[4] === 0);

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
  ok(`write: ${id} present`, !!fr[id]);
}
ok('write: TPE1 is UTF-16', fr.TPE1 && fr.TPE1[0] === 1);
const audioAt = 10 + (((tagged[6] & 0x7f) << 21) | ((tagged[7] & 0x7f) << 14) | ((tagged[8] & 0x7f) << 7) | (tagged[9] & 0x7f));
ok('write: audio copied verbatim', tagged.length - audioAt === mpeg.length && tagged.subarray(audioAt).every((v, i) => v === mpeg[i]));

// 3. read back: full round-trip
const back = parseId3(tagged);
ok('read: title', back.title === '测试 Title');
ok('read: genre mapped', back.genre === 'Pop');
ok('read: track', back.track === '3/12');
ok('read: comment', back.comment === 'note');
ok('read: picture mime+size', back.picture?.mime === 'image/jpeg' && back.picture.data.length === 64);
ok('read: version', back.version?.[0] === 3);

// 4. removeAll saves bare audio
const clean = new Uint8Array(buildTaggedMp3(src.buffer, { title: 'x' }, { removeAll: true }));
ok('removeAll: no ID3v2', !(clean[0] === 0x49 && clean[1] === 0x44 && clean[2] === 0x33));
ok('removeAll: no ID3v1', clean.length === mpeg.length);

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
ok('read: v2.4 TDRC', parseId3(tdrc).year === '2020-03-01');

// 6. untagged file reads as empty
ok('read: untagged empty', Object.keys(parseId3(mpeg)).length === 0);

process.exit(failed ? 1 : 0);
```

**Step 1.5: Wire the script** — in `package.json` scripts, next to `check:srt`:

```json
"check:tags": "node scripts/tags-check.mjs"
```

**Step 1.6: Run it**

Run: `npm run check:tags`
Expected: every line `PASS`, exit 0. If `write: version 2.3` fails, `browser-id3-writer` changed its default — pin to the installed major and re-check; if frames are missing, fix `setFrame` signatures per its README before moving on.

**Step 1.7: Commit**

```bash
git add src/editor/id3-read.ts src/editor/tags.ts scripts/tags-check.mjs package.json package-lock.json
git commit -m "Add ID3 tag engine (read v2.3/v2.4, write v2.3, strip) with Node check"
```

## Task 2 — Tool registration + editor island

**Files:**
- Modify: `src/data/tools.ts` (ToolIcon union + ToolDef + 3 sibling `related`)
- Modify: `src/components/Icon.astro` (tag glyph)
- Modify: `src/i18n/types.ts` (EditorConfig flag + EditorText keys)
- Modify: `src/i18n/en.ts` (tg* keys)
- Create: `src/components/editor/TagEditor.astro`
- Modify: `src/components/ToolPage.astro` (import + dispatch branch)
- Create: `src/pages/mp3-tag-editor.astro`

**Step 2.1: Icon.** Add `'tag'` to the `ToolIcon` union in `tools.ts` (L15–35) and to the `icons` record in `Icon.astro`, using the Material `local_offer` glyph (24×24 viewBox, same format as existing entries):

```
M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z
```

**Step 2.2: Types.** In `src/i18n/types.ts`:

- `EditorConfig`: add `tagEditor?: boolean;`
- `EditorText`: append (alphabetical placement per file convention):

```ts
tgAlbum: string;
tgAlbumArtist: string;
tgArtist: string;
tgComment: string;
tgComposer: string;
tgCover: string;
tgCoverHint: string;
tgDisc: string;
tgGenre: string;
tgNoTags: string;
tgReadFail: string;
tgRemoveAll: string;
tgRemoveCover: string;
tgReplaceCover: string;
tgReset: string;
tgSaved: string;
tgSaving: string;
tgSaveCover: string;
tgTitle: string;
tgTrack: string;
tgWriteFail: string;
tgYear: string;
```

**Step 2.3: en.ts values:**

```ts
tgAlbum: 'Album',
tgAlbumArtist: 'Album artist',
tgArtist: 'Artist',
tgComment: 'Comment',
tgComposer: 'Composer',
tgCover: 'Cover art',
tgCoverHint: 'Square JPG or PNG between 500 and 1400 px displays best in most players.',
tgDisc: 'Disc',
tgGenre: 'Genre',
tgNoTags: 'This file has no tags yet — fill in what you know.',
tgReadFail: 'Could not read that file — please use an MP3.',
tgRemoveAll: 'Remove all metadata (save a clean file)',
tgRemoveCover: 'Remove cover',
tgReplaceCover: 'Replace cover',
tgReset: 'Reset',
tgSaved: 'Saved — check your downloads.',
tgSaving: 'Writing tags…',
tgSaveCover: 'Save cover',
tgTitle: 'Title',
tgTrack: 'Track',
tgWriteFail: 'Something went wrong while saving. Try again, or use another MP3 file.',
tgYear: 'Year',
```

**Step 2.4: ToolDef** — append to `TOOLS` in `src/data/tools.ts` (content bar: spec §3 — all five mandatory FAQ types are present):

```ts
{
  slug: 'mp3-tag-editor',
  name: 'MP3 Tag Editor',
  shortName: 'Tag Editor',
  icon: 'tag',
  category: 'merge',
  title: 'MP3 Tag Editor — Edit ID3 Tags & Cover Art Online Free',
  description:
    'Edit MP3 tags online: title, artist, album, year, track and cover art. The file is edited in your browser and never uploaded. Free, no signup.',
  h1: 'MP3 Tag Editor',
  subtitle: 'Fix the title, artist, album and cover art of an MP3 in under a minute — right in your browser, nothing uploaded.',
  intro:
    'An MP3 carries two things: the music, and the card of information players show next to it — title, artist, album, year, cover art. When that card is wrong or missing, everything from your phone to the car stereo falls back to Unknown Artist or Track 01. Drop a file here, fix the fields and save: the audio is copied over byte for byte, untouched, and never leaves your device.',
  usesHeading: 'Tags people actually need to fix',
  uses: [
    'Clean up downloads that show "Unknown Artist" or no cover in your music player.',
    'Give a podcast episode or demo track a proper title, cover and credits before publishing.',
    'Strip leftover device and location metadata from a recording before you share it.',
  ],
  howTo: [
    {
      name: 'Drop your MP3',
      text: 'Drop the file in or click to browse. The current tags and cover art are read on your device and shown in the form.',
    },
    {
      name: 'Edit the fields',
      text: 'Type the correct title, artist, album, year and track number, and add or replace the cover art with a JPG or PNG.',
    },
    {
      name: 'Save the MP3',
      text: 'Hit Save MP3 to download the tagged file. The audio is copied unchanged — only the information card around it is rewritten.',
    },
  ],
  faqs: [
    {
      q: 'Is my MP3 uploaded to a server?',
      a: 'No. The file is opened with the browser\u2019s own FileReader API and rewritten right in your tab. You can load this page, switch off Wi-Fi, and the editor still works. There is no upload step at all.',
    },
    {
      q: 'Will editing the tags change the audio quality?',
      a: 'No. Tag data lives in a separate block at the front of the file, and the MPEG audio frames are copied byte for byte, so the sound is bit-identical. The saved file can even be slightly smaller, because the old tag block and its padding are not carried over.',
    },
    {
      q: 'How is this different from the MP3 editor?',
      a: 'The MP3 editor cuts, trims and joins the audio itself, which means decoding and re-encoding the sound. This page never touches the sound — it rewrites the information card around it. Use that one to edit music, this one to label it.',
    },
    {
      q: 'What can\u2019t it do?',
      a: 'It edits MP3 files only — FLAC, M4A and WAV use different tag formats this page does not write yet. It works on one file at a time rather than a whole album in batch. And saving rewrites the whole tag block, so podcast chapters or unusual custom fields stored in the original tag are not carried over — the common fields are.',
    },
    {
      q: 'Why does my car stereo still show "Track 01"?',
      a: 'Many head units ignore tags and fall back to the file name, and most cache the old information until you re-import the USB stick or rescan. Save here (the file is written as ID3v2.3, the version car stereos read most reliably), rename the file to something like "01 - Song Title.mp3", then rescan.',
    },
    {
      q: 'My Chinese, Japanese, Korean or Arabic tags show as garbage. Can this fix it?',
      a: 'Yes — that usually means the old tag was saved in a single-byte encoding instead of Unicode. Retype the correct text here and save: the file is rewritten as ID3v2.3 with UTF-16 text, which modern players display correctly, including Chinese, Japanese, Korean, Arabic, Cyrillic and Hindi titles.',
    },
    {
      q: 'Does it work on my phone?',
      a: 'Yes — recent Chrome, Safari, Firefox and Edge, desktop or mobile. Saving hands the file to the browser like any download; on iPhone, Safari saves it to the Files app. Everything runs locally, so it also works on a slow connection once the page is open.',
    },
  ],
  related: ['mp3-editor', 'voice-recorder', 'mp4-to-mp3'],
  editor: {
    tagEditor: true,
    accept: 'audio/mpeg,.mp3',
    dropHint: 'Drop an MP3 file here, or click to browse',
    exportLabel: 'Save MP3',
  },
},
```

**Step 2.5: Reciprocal links (spec §3).** `related` arrays hold exactly 3 slugs, so swap the least-adjacent entry for `'mp3-tag-editor'` on exactly these siblings: `mp3-editor`, `voice-recorder`, `mp4-to-mp3`.

**Step 2.6: The island `src/components/editor/TagEditor.astro`.** Copy the config/i18n plumbing pattern from `TranscribeEditor.astro` (props in, `getShell`, server-rendered strings, client script reads `data-config`/`data-i18n`); align utility classes with `AudioEditor.astro`'s drop zone/buttons rather than trusting the sketch below:

```astro
---
/**
 * MP3 tag editor island: form over ID3 tags + cover art. All strings are
 * server-rendered; the client script only moves file bytes. Config + runtime
 * strings ride in as JSON on data attributes (TranscribeEditor pattern).
 */
import { getShell } from '../../i18n';
import type { Locale } from '../../i18n/locales';
import type { EditorConfig } from '../../data/tools';

interface Props {
  config: EditorConfig;
  locale?: Locale;
}
const { config, locale = 'en' } = Astro.props;
const { editor } = getShell(locale);
const runtime = {
  readFail: editor.tgReadFail,
  saving: editor.tgSaving,
  saved: editor.tgSaved,
  writeFail: editor.tgWriteFail,
};
---

<div id="tag-editor" class="mx-auto max-w-2xl" data-config={JSON.stringify(config)} data-i18n={JSON.stringify(runtime)}>
  <div class="rounded-2xl border bg-surface p-4 md:p-6">
    <label
      id="te-drop"
      class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-10 text-center transition-colors hover:border-accent"
      tabindex="0"
    >
      <span class="text-[15px] font-medium">{config.dropHint}</span>
      <input id="te-input" type="file" accept={config.accept} class="sr-only" />
    </label>

    <form id="te-form" hidden>
      <p id="te-file" class="mb-4 text-xs text-ink3"></p>
      <p id="te-notags" class="mb-4 text-sm text-ink2" hidden></p>

      <fieldset id="te-fields" class="grid gap-4 sm:grid-cols-2">
        <!-- label + input pairs for: title (full width), artist, album,
             albumArtist, year, genre, track, disc, composer, comment (full
             width, textarea rows=2). Mirror AudioEditor's input classes. -->
      </fieldset>

      <section class="mt-6">
        <h3 class="text-sm font-semibold">{editor.tgCover}</h3>
        <div class="mt-2 flex items-start gap-4">
          <img id="te-cover-img" alt="" class="size-24 rounded-lg border object-cover" hidden />
          <div class="flex flex-col gap-2 text-sm">
            <div class="flex flex-wrap gap-2">
              <label class="cursor-pointer rounded-lg border px-3 py-1.5 hover:border-accent">
                {editor.tgReplaceCover}
                <input id="te-cover-input" type="file" accept="image/jpeg,image/png" class="sr-only" />
              </label>
              <button type="button" id="te-cover-remove" class="rounded-lg border px-3 py-1.5 hover:border-accent">{editor.tgRemoveCover}</button>
              <button type="button" id="te-cover-save" class="rounded-lg border px-3 py-1.5 hover:border-accent" hidden>{editor.tgSaveCover}</button>
            </div>
            <p class="text-xs text-ink3">{editor.tgCoverHint}</p>
          </div>
        </div>
      </section>

      <label class="mt-6 flex items-center gap-2 text-sm">
        <input id="te-remove-all" type="checkbox" class="accent-[var(--accent)]" />
        {editor.tgRemoveAll}
      </label>

      <div class="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" id="te-save" class="rounded-lg bg-accent px-4 py-2 font-medium text-white">{config.exportLabel}</button>
        <button type="button" id="te-reset" class="rounded-lg border px-4 py-2">{editor.tgReset}</button>
        <p id="te-status" class="text-sm text-ink2" aria-live="polite"></p>
      </div>
    </form>
  </div>
</div>

<script>
  import { buildTaggedMp3, parseId3, stripAllTags, type AudioTags } from '../../editor/tags';

  // ~150 lines of controller:
  // 1. read data-config/data-i18n off #tag-editor; grab elements.
  // 2. load(file): reject non-MP3 (name/type) with i18n.readFail;
  //    audioBuf = await file.arrayBuffer(); tags = parseId3(new Uint8Array(audioBuf));
  //    fill inputs, file line "name · X.X MB", tgNoTags visibility,
  //    picture = tags.picture ? {data: tags.picture.data, mime} : null; refreshCover().
  // 3. refreshCover(): revoke old URL; picture ? show img from
  //    URL.createObjectURL(new Blob([picture.data], {type: picture.mime}))
  //    + show te-cover-save : hide both.
  // 4. coverInput change: accept image/jpeg|png only (else readFail-style status),
  //    picture = {data: new Uint8Array(await f.arrayBuffer()), mime: f.type}; refreshCover().
  // 5. te-cover-remove: picture = null; refreshCover().
  // 6. te-cover-save: download blob named `${basename}.${mime === 'image/png' ? 'png' : 'jpg'}`.
  // 7. te-remove-all change: te-fields.disabled = checked (cover section keeps working —
  //    removeAll ignores it at build time).
  // 8. collect(): AudioTags from inputs (trim; year 4 digits enforced by maxlength+inputmode).
  // 9. te-save click: status(i18n.saving); try out = buildTaggedMp3(audioBuf, collect(),
  //    {removeAll: checked}); download as `${title||'audio'}` with [\\/:*?"<>|] → '_',
  //    + '.mp3'; status(i18n.saved) catch status(i18n.writeFail).
  // 10. te-reset: refill from the parsed tags + original picture, clear status.
  // 11. drop zone: click → input.click(); keydown Enter/Space same; dragover class;
  //     drop handler takes dataTransfer.files[0] → load().
</script>
```

Write the controller out in full during execution — the numbered contract above is the spec; every numbered behavior gets code, no skips. `stripAllTags` is imported only to keep the bundle honest if needed by step 9's removeAll path — if the linter flags it unused, drop it from the import (buildTaggedMp3 handles removeAll internally).

**Step 2.7: Dispatch** — in `src/components/ToolPage.astro` add the import and insert between the `transcribe` and `multiple` branches:

```astro
) : tool.editor.tagEditor ? (
  <TagEditor config={tool.editor} locale={locale} />
) : tool.editor.multiple ? (
```

**Step 2.8: EN page wrapper** — `src/pages/mp3-tag-editor.astro`, copying any existing wrapper:

```astro
---
import ToolPage from '../components/ToolPage.astro';
import { getTool } from '../data/tools';
const tool = getTool('mp3-tag-editor')!;
---

<ToolPage tool={tool} />
```

**Step 2.9: Verify + commit**

Run: `npm run build` → succeeds (catalogs unchanged so far; `assertCatalogs` still passes since no locale references the new slug yet — the dynamic `[locale]/[slug]` route only builds slugs each catalog actually has).

Then `npm run dev`, and manually on `http://localhost:4321/mp3-tag-editor`:
- drop a real MP3 → existing tags + cover (if any) render;
- edit + save → download opens in a player with correct tags (check in VLC > Tools > Media Information);
- "Remove all metadata" save → file shows no tags anywhere;
- a CJK title round-trips without mojibake;
- cover Save/Replace/Remove each work.

```bash
git add -A && git commit -m "Add mp3-tag-editor tool page (EN) with tag editor island"
```

## Task 3 — i18n, all 10 locales (same PR, non-negotiable)

**Files:**
- Modify: `src/i18n/zh.ts, ja.ts, ko.ts, de.ts, fr.ts, es.ts, pt.ts, ru.ts, ar.ts, id.ts` — each gets:
  - the 22 `tg*` keys in `editor`,
  - a full `tools['mp3-tag-editor']` ToolCopy (~60 lines).

**Rules** (from `docs/i18n-translation-guide.md` + spec §5):
- Translations are written, not machine-dumped. Keep each locale's existing terminology for shared UI. Localize `title`/`description` around the **localized query** — check a real search suggestion in that language before settling wording (de: "mp3 tags bearbeiten online"; ja: "mp3 タグ編集"; ko: "mp3 태그 편집"; ru: "редактировать mp3 теги онлайн"; es: "editar etiquetas mp3 online"; pt: "editor de tags mp3 online"; fr: "éditeur de tags mp3 en ligne"; ar: "محرر وسوم mp3"; id: "editor tag mp3 online"; zh: "mp3标签编辑器").
- `assertCatalogs()` enforces per-locale parity: uses=3, howTo/faq counts equal to en (7 FAQs), `exportLabel`/`dropHint` present, every editor key present. `npm run build` is the test.

**Reference translation (zh, complete):**

```ts
'mp3-tag-editor': {
  name: 'MP3 标签编辑器',
  shortName: '标签编辑器',
  title: 'MP3 标签编辑器 — 在线修改 ID3 标签与封面，免费',
  description: '在浏览器里直接修改 MP3 标签：标题、艺术家、专辑、年份、音轨号和封面图。文件全程留在本地，绝不上传。免费，无需注册。',
  h1: 'MP3 标签编辑器',
  subtitle: '一分钟修好 MP3 的标题、艺术家、专辑和封面 —— 全程在浏览器完成，文件不上传。',
  intro:
    '一首 MP3 里装着两样东西：音乐本身，和播放器显示的那张"信息卡"——标题、艺术家、专辑、年份、封面。信息卡错了或缺失，从手机到车载音响都只会显示"未知艺术家"或 Track 01。把文件拖进来，改好字段再保存：音频数据逐字节原样复制，不会离开你的设备。',
  usesHeading: '大家最常修的标签',
  uses: [
    '修好下载音乐里"未知艺术家"、封面丢失的问题，让播放器正常显示。',
    '发布前给播客单集或小样填上规范的标题、封面和署名。',
    '分享录音前，清掉残留的设备和位置信息。',
  ],
  howTo: [
    { name: '拖入 MP3', text: '把文件拖进来或点击选择。现有标签和封面会在你的设备上读取并显示在表单里。' },
    { name: '修改字段', text: '填写正确的标题、艺术家、专辑、年份和音轨号，并可用 JPG 或 PNG 图片添加或替换封面。' },
    { name: '保存 MP3', text: '点击"保存 MP3"下载打好标签的文件。音频数据原样保留，被重写的只有周围的信息卡。' },
  ],
  faqs: [
    { q: '我的 MP3 会被上传到服务器吗？', a: '不会。文件通过浏览器自带的 FileReader API 打开，就在当前标签页里完成改写。加载页面后断开 Wi-Fi，编辑器照样能用。整个过程不存在上传这一步。' },
    { q: '修改标签会影响音质吗？', a: '不会。标签数据存放在文件头部的独立区块里，MPEG 音频帧逐字节原样复制，声音完全一致。保存后的文件甚至可能略小一点，因为旧标签区块及其填充空间没有保留。' },
    { q: '它和 MP3 编辑器有什么区别？', a: 'MP3 编辑器是对声音本身做剪切、拼接，需要解码再编码。这个页面完全不碰声音，只重写围绕它的信息卡。要改音乐用那个，要给音乐贴标签用这个。' },
    { q: '它做不到什么？', a: '目前只支持 MP3——FLAC、M4A 和 WAV 使用不同的标签格式，本页暂不支持。它一次处理一个文件，还不能整张专辑批量处理。另外保存会重写整个标签区块，原标签里的播客章节或特殊自定义字段不会保留，保留的是常见字段。' },
    { q: '为什么车载音响还显示"Track 01"？', a: '很多车机忽略标签、直接用文件名，而且大多会缓存旧信息，需要重新插入 U 盘或重新扫描。在这里保存（文件会写成车机兼容性最好的 ID3v2.3），再把文件重命名为"01 - 歌名.mp3"这类格式，然后重新扫描。' },
    { q: '中文（日文/韩文/阿拉伯文）标签显示乱码，能修吗？', a: '可以。乱码通常是旧标签用了单字节编码而不是 Unicode。在这里重新输入正确文字并保存：文件会改写为 UTF-16 编码的 ID3v2.3，中日韩、阿拉伯、西里尔、印地文字都能在现代播放器里正常显示。' },
    { q: '手机上能用吗？', a: '可以。最新版 Chrome、Safari、Firefox 和 Edge 都支持，桌面和手机均可。保存时会像普通下载一样交给浏览器；iPhone 上 Safari 会存到"文件"App。全部处理都在本地进行，页面打开后慢网也能用。' },
  ],
  dropHint: '把 MP3 拖到这里，或点击选择文件',
  exportLabel: '保存 MP3',
},
```

zh editor keys:

```ts
tgAlbum: '专辑',
tgAlbumArtist: '专辑艺术家',
tgArtist: '艺术家',
tgComment: '注释',
tgComposer: '作曲',
tgCover: '封面图',
tgCoverHint: '500–1400 像素的正方形 JPG 或 PNG 在大多数播放器里显示效果最好。',
tgDisc: '碟号',
tgGenre: '流派',
tgNoTags: '这个文件还没有标签——把你知道的填进去。',
tgReadFail: '无法读取该文件——请使用 MP3。',
tgRemoveAll: '移除全部元数据（保存为干净文件）',
tgRemoveCover: '移除封面',
tgReplaceCover: '替换封面',
tgReset: '重置',
tgSaved: '已保存——请查看下载文件夹。',
tgSaving: '正在写入标签…',
tgSaveCover: '保存封面',
tgTitle: '标题',
tgTrack: '音轨',
tgWriteFail: '保存时出了点问题。请重试，或换一个 MP3 文件。',
tgYear: '年份',
```

The remaining 9 locales: same shape, translated to the same bar (write, then have the executor re-read each for naturalness; spot-check terminology against existing keys like bitrates/format names in that file).

**Verify:** `npm run build` → passes (this is the parity gate). Spot-load `/{locale}/mp3-tag-editor` for zh, ja, de in `npm run dev`; check RTL layout on `ar`.

**Commit:** `git commit -m "Add mp3-tag-editor copy in all 10 locales"`

## Task 4 — Ship checklist

**Files:**
- Modify: `public/llms.txt`
- Modify: `scripts/pages-check.mjs`

**Step 4.1:** `scripts/pages-check.mjs` — add `/mp3-tag-editor` plus one locale spot-check (e.g. `/zh/mp3-tag-editor`) to the page array, mirroring existing entries.

**Step 4.2:** `public/llms.txt` — under `## Tools`:

```
- [MP3 Tag Editor](https://freeaudioeditor.online/mp3-tag-editor): Edit ID3 tags and cover art on MP3 files in the browser; audio bytes untouched, nothing uploaded.
```

No "Facts" section change — no new engine or upload claim.

**Step 4.3: Full verification suite** (spec §6):

```bash
npm run build
npm run check:tags
npm run check:pages
npm run check:features
npm run check:smoke
npm run audit:preview   # zero HIGH issues; verify the new URL × 11 locales have title/desc/canonical/hreflang + 4 JSON-LD blocks
```

Expected: all green. The seo-audit must show 11 new URLs in the sitemap ↔ page parity check.

**Step 4.4: Manual phone pass (spec):** EN + zh on a real phone — drop zone opens the file picker, form is reachable one-handed, save lands in Downloads/Files. One 10 MB+ MP3 (save should stay instant — no decode) and one untagged recording.

**Step 4.5:** Lighthouse mobile ≥ 95 perf/accessibility/SEO on the new URL.

**Step 4.6: Commit**

```bash
git add public/llms.txt scripts/pages-check.mjs
git commit -m "List mp3-tag-editor in llms.txt and page checks"
```

Nothing else needs touching: sitemap/robots are automatic; nav dropdown, footer columns, homepage grid, hub listing, and JSON-LD all derive from `TOOLS`/`ToolPage`.

## Implementation notes (risks & fallbacks)

- **`browser-id3-writer` API drift** — the riskiest unknown. Mitigation lives in `check:tags` (asserts version bytes `03 00`, all 11 frames, verbatim audio tail). If the lib fights back, the fallback is a ~120-line v2.3 writer in `id3-write.ts` — the check script is already the acceptance test for it.
- **Real-world dirty files** (huge album-art PNGs, 2.2 tags, unsynchronised tags, junk after padding): the reader deunsynchronises, skips v2.2, breaks at padding. If a field looks wrong on a real library file, add a fixture to `tags-check.mjs` reproducing it before touching the parser.
- **`platform: 'neutral'` in the esbuild check** may complain if `browser-id3-writer` pulls a browser global; switch to `platform: 'browser'` (still runs in Node for pure JS).
- **Performance budget (spec §4):** the island adds `browser-id3-writer` (~10 KB gzip) to one page only — no shared-bundle regression. No audio decode anywhere on this page, so mobile stays fast by construction.
- **Do not** pre-screen the copy: title/description/FAQ bar is `docs/new-tool-spec.md` §3; the seven FAQs cover all five mandatory types (privacy #1, quality #2, sibling #3, limitation #4, device #7) plus the two highest-intent long-tails (#5 car stereo, #6 CJK mojibake).

## Post-launch (per spec §7)

Week 0: GSC URL Inspection → request indexing for the EN URL. Week 4: pull real queries; fold top phrasings into FAQs. Week 8: CTR < 3% → rewrite title/description. Backlog candidates surfaced by this research, in order: `remove-metadata-from-mp3` (own page, privacy intent), `batch` tag editor (album workflow + ZIP), `flac-m4a-tag-editor` (multi-format), cover-art extractor micro-tool.
