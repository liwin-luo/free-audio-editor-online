# Pitch changer and M4A to MP3

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ship two new tool pages: `/pitch-changer` (pitch changes, duration stays the same) and `/m4a-to-mp3` (AAC/M4A decoded in the browser, exported as MP3).

**Architecture:** Pitch is a new overlap-add step in the existing offline render, exposed as one quick slider on a new tool page. M4A reuses converter mode from `/wav-to-mp3`. English pages are thin wrappers; the seven locales come from the existing catalogs. No new dependency, no vocal removal, no pitch-preserving speed change.

**Tech Stack:** Astro 5, Web Audio API, existing lamejs export, `assertCatalogs()` at build time.

---

## Out of scope

- Speed page still changes pitch and duration together. Do not add `preservesPitch` there.
- No FLAC/OGG converter, no vocal remover, no EQ farm, no new guide.
- Do not deploy or commit unless the user asks.

## Task 1: Pitch shift that keeps length

**Files:**
- Create: `src/editor/pitch.ts`
- Create: `scripts/pitch-check.mjs`
- Modify: `src/editor/processor.ts`

**Step 1: Write the check**

`scripts/pitch-check.mjs` builds a 440 Hz sine, one channel, 1 second at 44100 Hz, using the same `AudioBuffer` shape the editor uses (a minimal stub is fine: `{ sampleRate, numberOfChannels, duration, getChannelData }`). It imports the pitch function via the built file only after Task 1 exists. Until then, run it with `node --experimental-strip-types` if the runtime supports it, otherwise a 15-line duplicate of the algorithm is the wrong check — compile by importing from a tiny tsx-free JS copy is also wrong.

Practical check, matching this repo (no test framework):

```js
// scripts/pitch-check.mjs
// Run: node scripts/pitch-check.mjs
// Generates a 440 Hz sine, pitch-shifts +12 semitones, asserts length
// stays 1s and the new period is about half (880 Hz).
import { pitchShiftChannel } from '../src/editor/pitch.ts';
```

If `node` cannot import `.ts`, put the pure function in `src/editor/pitch.mjs` is extra surface. Prefer `pitch.ts` and run the check with:

```bash
npx --yes tsx scripts/pitch-check.mjs
```

Do not add `tsx` to package.json. `npx tsx` once is enough.

Assertions:

- output length === input length (44100 samples)
- zero semitones returns the same samples (identity, no grain smear)
- +12 semitones: zero-crossing period near 50 samples (44100/880), tolerance ±8 samples
- -12 semitones: period near 200 samples (44100/220), tolerance ±15 samples

**Step 2: Run it and see it fail**

```bash
npx --yes tsx scripts/pitch-check.mjs
```

Expected: fail because `pitchShiftChannel` does not exist.

**Step 3: Implement**

`pitchShiftChannel(input: Float32Array, semitones: number, sampleRate: number): Float32Array`

- `semitones === 0` copies the input and returns.
- Otherwise overlap-add. Grain 2048, hop 512, Hann window. Each grain is read at rate `2 ** (semitones / 12)` and written at hop 512, so the output length equals the input length.
- Clamp the read cursor to the buffer. Mix overlapping grains and divide by the window sum so the level stays near the original.
- Comment, exactly this ceiling:

```ts
// ponytail: overlap-add granular pitch shift. Dense harmony and shifts past ±7
// semitones sound metallic. Upgrade path: SoundTouch WASM if this page ranks
// and listeners bounce.
```

In `processor.ts`:

- Add `pitch: number` to `EditState` (semitones, 0 = unchanged). `defaultEditState()` sets `pitch: 0`.
- In `renderEdit`, after the existing speed/gain/reverse render, if `state.pitch !== 0`, run `pitchShiftChannel` on each channel of the rendered buffer. Pitch runs on the already-cut audio, so a selection keeps its length and only its pitch moves.
- Speed and pitch compose: this page will leave speed at 1. Do not special-case that in the renderer.

**Step 4: Run the check**

```bash
npx --yes tsx scripts/pitch-check.mjs
```

Expected: all three assertions pass.

## Task 2: Slider, preview, export

**Files:**
- Modify: `src/i18n/types.ts` (`EditorText`: add `pitch: string`)
- Modify: `src/i18n/en.ts` and `src/i18n/{es,pt,id,de,ko,ja,zh}.ts` — one label each: `Pitch` / `Tono` / `Tom` / `Nada` / `Tonhöhe` / `음정` / `音程` / `音高`
- Modify: `src/components/editor/AudioEditor.astro` — `quickControls` union gains `'pitch'`
- Modify: `src/editor/index.ts`

Slider: integer semitones, min −12, max 12, step 1, default 0. Label shows `0 st`, `+3 st`, `−2 st`. Same markup pattern as `[data-quick-speed]` around line 119 of `AudioEditor.astro`.

`EditorConfig.quickControls` in `src/data/tools.ts` gains `'pitch'`.

Preview: live `playbackRate` cannot change pitch without changing duration. When `state.pitch !== 0`, `togglePlay` renders the current selection through `renderEdit` first, then plays that buffer at rate 1. Cache the rendered buffer until pitch, selection, or the source buffer changes. Speed-only pages stay on the current live path.

Export already calls `renderEdit`, so the pitch field is enough.

## Task 3: `/pitch-changer`

**Files:**
- Modify: `src/data/tools.ts`
- Create: `src/pages/pitch-changer.astro` (same 4 lines as `src/pages/change-audio-speed.astro`)
- Modify: `scripts/pages-check.mjs` — add `{ path: '/pitch-changer', island: true }`

Tool def, category `effects`, icon reuse `clock-counter-clockwise` (no new icon). `quickControls: ['pitch']`. `defaultFormat: 'mp3-192'`. `showAdjust: true` so cut/fade still work. Related: `change-audio-speed`, `slowed-reverb`, `mp3-editor`.

English copy must say the length does not change and that this is not the speed page. Speed page FAQ (`Does changing speed change the pitch?`) gets one extra sentence pointing at `/pitch-changer`. That sentence is also translated in every catalog, because FAQ bodies are per-locale.

howTo: 3 steps. faqs: 5. Match that count in every locale or `assertCatalogs()` fails the build.

Title target: `Pitch Changer — Change Audio Pitch without Changing Speed`.

Honest FAQ points:

- Range is −12 to +12 semitones, one octave either way.
- Duration stays the same. Tempo change lives on `/change-audio-speed`, and there the pitch moves with the speed.
- Wide shifts sound thinner. Speech and a single instrument are the useful range.
- Processing stays in the browser.

On the speed-page catalog FAQ, append the pointer. Do not rewrite the answer that speed and pitch still move together.

## Task 4: `/m4a-to-mp3`

**Files:**
- Modify: `src/data/tools.ts`
- Create: `src/pages/m4a-to-mp3.astro`
- Modify: `scripts/pages-check.mjs` — add `{ path: '/m4a-to-mp3', island: true }`

Clone the `wav-to-mp3` editor block:

```ts
editor: {
  defaultFormat: 'mp3-320',
  dropHint: 'Drop an M4A or AAC file, or click to browse',
  converter: true,
  exportLabel: 'Convert to MP3',
  accept: 'audio/mp4,audio/x-m4a,audio/aac,.m4a,.aac,.mp4',
}
```

Category `merge`, icon `convert`. Related: `wav-to-mp3`, `mp4-to-mp3`, `extract-audio`. Add `m4a-to-mp3` to the related list of `wav-to-mp3`.

howTo: 3. faqs: 5. `exportLabel` is required in every catalog (`assertCatalogs` throws if the English tool has one and a locale does not).

Honest limits in the FAQ:

- The browser decodes AAC inside M4A. ALAC (Apple Lossless in an M4A) often fails; say so and point at converting that file to AAC or WAV first.
- Video MP4 belongs on `/mp4-to-mp3`. This page is audio files.
- Tags and artwork are not copied, same as WAV to MP3.

No new decoder. `decodeAudioData` is already the path in `src/editor/index.ts`.

## Task 5: Seven locales

**Files:**
- Modify: `src/i18n/es.ts`, `pt.ts`, `id.ts`, `de.ts`, `ko.ts`, `ja.ts`, `zh.ts`

For each new slug, copy the English field shape (`name`, `shortName`, `title`, `description`, `h1`, `subtitle`, `intro`, `howTo`, `faqs`, `editor.dropHint`, and `exportLabel` on m4a only).

Voice, same as the rest of the site: es tú; pt-BR você; id Anda; de du; ko 해요체; ja です/ます; zh 你. Keep MP3, M4A, AAC, WAV, ALAC, semitone names as the English technical words where that language normally does (zh can say 半音).

`npm run build` is the check. `assertCatalogs()` runs from the locale home `getStaticPaths` and fails if a locale is missing, or if howTo/faq counts or `exportLabel` differ from English.

## Task 6: Verify

```bash
npx --yes tsx scripts/pitch-check.mjs
npm run build
```

Expected: pitch check passes, build exits 0, page count goes from 151 to 167 (2 new English pages × 8 locales).

Then, with `npm run preview` on port 4321:

```bash
node scripts/pages-check.mjs
```

Expected: `/pitch-changer` and `/m4a-to-mp3` PASS.

Browser, after preview is up: open `/pitch-changer`, confirm the slider reads semitones and the speed slider is not the headline control. Open `/m4a-to-mp3`, confirm the button says Convert to MP3 and the drop hint mentions M4A. Open `/zh/pitch-changer` and `/de/m4a-to-mp3` and confirm the H1 is not English.

## Done when

- `+12` semitones halves the period of a sine and does not change its length.
- Both URLs exist in English and all seven locales, with hreflang, because they are normal tool routes.
- Speed page still documents that its own slider moves pitch and speed together, and points to the new page.
