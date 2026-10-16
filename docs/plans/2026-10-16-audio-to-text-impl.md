# Audio-to-Text Implementation Plan

> **For Claude:** Implement task-by-task, commit per task. Design decisions are locked in
> `docs/plans/2026-10-16-audio-to-text-design.md`; the tool-page content bar is
> `docs/new-tool-spec.md`.

**Goal:** Ship `/audio-to-text` — an 11-locale tool page that transcribes uploaded audio/video
files to text entirely in the browser (Whisper via transformers.js on WASM/WebGPU), with TXT + SRT
export and auto language detection.

**Architecture:** Same shape as every tool page — one `ToolDef` in `src/data/tools.ts`, a 3-line
page file, and a new editor island (`TranscribeEditor.astro`) branched in `ToolPage.astro`. The
inference runs in a dedicated Web Worker (`src/editor/transcribe-worker.ts`) so the model never
blocks the main thread; the main-thread controller (`src/editor/transcribe.ts`) handles decode,
16 kHz mono resample, progress and export. SRT formatting is a pure module (`src/editor/srt.ts`)
with its own check script, per the new-tool-spec rule.

**Tech Stack:** Astro 5 static output, vanilla TS progressive enhancement, Tailwind 4,
`@huggingface/transformers` (Whisper ONNX, HF CDN for weights), Web Workers, Web Audio
(`decodeAudioData` + `OfflineAudioContext` resample).

---

## Locked decisions

| Decision | Value |
|---|---|
| Engine | transformers.js `automatic-speech-recognition`, models `onnx-community/whisper-base` / `whisper-tiny` |
| Device | `webgpu` when `navigator.gpu` present, else `wasm`; dtype: webgpu `{ encoder_model: 'fp32', decoder_model_merged: 'q4' }`, wasm `'q8'` |
| Input | File upload/drop only; `decodeAudioData` format set incl. video containers; **10 min cap** (refuse with pointer to the trimmer) |
| Output | Editable textarea + Copy + TXT download + SRT download (from `return_timestamps: true` chunks) |
| Model hosting | HuggingFace CDN (`env.allowLocalModels = false`), cached by the browser Cache API |
| Category | `record` (voice tools group; no new nav category — spec §4 forbids unless nothing fits) |
| Slug / icon | `audio-to-text`, icon `voice` |

## Task 1 — Engine foundation (pure modules + worker + dependency)

**Files:**
- Create: `src/editor/srt.ts` — `toSrtTime(sec)`, `chunksToSrt(chunks: {start,end,text}[])`
  (`HH:MM:SS,mmm`, last chunk with null/undefined end borrows the next start or start+2,
  sequential numbering, CRLF line endings, blank line between cues).
- Create: `scripts/srt-check.mjs` — generates chunks (incl. null end, unsorted-by-rounding edge),
  asserts exact SRT text + monotonic timestamps. Register `"check:srt"` in `package.json` using
  the same esbuild bundle pattern as `check:pitch`. Run it: must PASS.
- Create: `src/editor/transcribe-langs.ts` — `TRANSCRIBE_LANGUAGES: string[]` of ISO-639-1 codes
  Whisper supports: en, zh, ja, ko, es, pt, fr, de, ru, ar, hi, it, id, nl, pl, tr, vi, th, uk,
  sv, da, fi, no, cs, el, he, ro, hu, fa, ms. Display names resolved at runtime via
  `Intl.DisplayNames(uiLocale)` with English fallback.
- Create: `src/editor/transcribe-worker.ts` — message protocol:
  - in: `{ type: 'transcribe', audio: Float32Array, model: 'base' | 'tiny', language: string | null }`
  - out: `{ type: 'device', device }` · `{ type: 'model-progress', percent }` ·
    `{ type: 'run-progress', done, total }` · `{ type: 'result', text, chunks }` · `{ type: 'error', message }`
  - Lazy `await import('@huggingface/transformers')`; pipeline cached per `model|device` key;
    `chunk_length_s: 30`, `stride_length_s: 5`, `return_timestamps: true`, `task: 'transcribe'`.
- Modify: `package.json` — add `@huggingface/transformers` dependency (npm install; verify a
  version with WebGPU/wasm dtype support, v3+).
- Create: `scripts/transcribe-engine-check.mjs` — **real end-to-end proof** in Node: fetch the
  public JFK sample (`https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/jfk.wav`),
  run whisper-tiny with the exact pipeline options above, assert the transcript contains
  "my fellow americans" (case-insensitive) and timestamps are present. Run once to validate; kept
  as an optional script (downloads ~40 MB model, not part of the default check suite).

**Verify:** `npm run check:srt` passes; `node scripts/transcribe-engine-check.mjs` prints the
transcript with timestamps; `npx astro check` (or `npm run build`) clean.

## Task 2 — UI island + tool registration

**Files:**
- Modify: `src/data/tools.ts` — `EditorConfig.transcribe?: boolean`; new `ToolDef` (English copy
  written to new-tool-spec bar: 6 FAQs covering the 5 mandatory types + accuracy honesty;
  `related: ['voice-recorder', 'extract-audio', 'audio-trimmer']`; `editor: { transcribe: true,
  exportLabel: 'Transcribe', dropHint: 'Drop an audio or video file, or click to browse',
  accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus' }`).
- Modify: `src/components/ToolPage.astro` — branch `tool.editor.transcribe` →
  `TranscribeEditor` (between the visualizer and joiner branches).
- Create: `src/components/editor/TranscribeEditor.astro` — static markup mirroring
  `VisualizerEditor.astro`: dropzone (icon `voice`, `data-dropzone`/`data-file-input`), workspace
  (file bar + reset), controls (language select with SSR-only auto option, model select
  Base/Tiny), action button (label = `config.exportLabel`), progress line, output card
  (`data-transcript` textarea + Copy + TXT + SRT buttons, disabled until result), sr-only status,
  toast root, `data-config`/`data-i18n` attributes. `<script>` imports `initTranscribers()`.
- Create: `src/editor/transcribe.ts` — controller class: drop/paste/browse →
  `decodeAudioData` → `OfflineAudioContext` mono 16 kHz resample; 10-min and 300 MB guards;
  worker lifecycle (create on first run, terminate on reset), progress → status text, result →
  textarea + export buttons; TXT/SRT download via object URLs (`{name}.txt` / `{name}.srt`);
  language options filled from `Intl.DisplayNames`; default model = `base` when `navigator.gpu`
  exists else `tiny`.

**Verify:** `npm run build` clean; page `dist/audio-to-text/index.html` renders the island;
`npm run check:pages` passes.

## Task 3 — i18n (same PR, non-negotiable)

**Files:**
- Modify: `src/i18n/types.ts` — extend `EditorText` with: `trLang`, `trLangAuto`, `trModel`,
  `trModelBase`, `trModelTiny`, `trFirstRun`, `trDownloading` (`{percent}`), `trWorking`
  (`{percent}`), `trDone` (`{count}`), `trResultPlaceholder`, `trCopy`, `trCopied`, `trTxt`,
  `trSrt`, `trTooLong`, `trFail`.
- Modify: `src/i18n/en.ts` + all 10 catalogs (`es, pt, id, de, ko, ja, zh, fr, ru, ar`) — the 16
  new editor keys, and a full `ToolCopy` for `audio-to-text` (localize around the localized
  query, keep shared terminology; `assertCatalogs()` enforces field parity: 3 uses, 3 howTo
  steps, 6 FAQs, `exportLabel` present).
- Modify: `src/data/tools.ts` — add `'audio-to-text'` to `voice-recorder.related` (replace
  `increase-volume`) and `extract-audio.related` (replace `volume-booster`) — reciprocal links,
  spec §6.

**Verify:** `npm run build` — `assertCatalogs()` passes = key parity across 11 locales.

## Task 4 — Ship checklist

- `public/llms.txt` — add the tool line under `## Tools`; extend "Facts" with the Whisper
  local-inference engine note.
- `npm run check:pages`, `npm run check:features`, `npm run check:smoke`,
  `npm run check:srt`, `npm run audit:preview` (zero HIGH).
- Browser pass on `npm run preview` (puppeteer via `scripts/feature-check.mjs` pattern or
  browser automation): page renders in EN + ZH, file picker accepts audio, dropping an
  over-10-min file raises `trTooLong`, model download progress shows, a real short speech file
  transcribes and exports TXT/SRT.
- Commits: (1) plan doc, (2) engine + check script, (3) UI + tool def, (4) i18n, (5) llms.txt +
  reciprocal links + final check tweaks.

## Implementation notes (deviations found while building)

- **transformers.js version:** shipped v3.8.1. The planned `chunk_callback` was verified
  missing from both v4.x and v3.8 dist (removed upstream); per-chunk progress is now derived
  from a custom generation streamer reading Whisper timestamp tokens (see
  `makeProgressStreamer` in the worker).
- **Auto-detect:** transformers.js has no language detection ("TODO: Implement language
  detection" in its source — unspecified language silently forces English). "Auto-detect" is
  therefore a real detection pass in the worker: one decoder step on the first 30 s, reading
  the emitted language token after `<|startoftranscript|>` (validated in the engine check).
- **Worker format:** `worker.format: 'es'` added to the Astro/Vite config — the worker's
  dynamic `import()` of transformers.js code-splits, which IIFE worker output forbids.
