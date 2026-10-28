# New tool spec — definition of done for every tool page

> Companion to `docs/competitive-analysis-audioeditor.md`. Every new tool ships as a
> landing page that must win its query outright, not as a feature. If a item below is
> skipped, the page competes with audioeditor.org's template output at a disadvantage —
> that is the one thing we never do.

## 1. Principle

One page = one search intent. The tool is the product; the copy is what ranks it.
Both ship together, in all languages, in one PR.

## 2. Keyword selection (before writing any code)

A tool candidate qualifies when **all** are true:

1. **Distinct primary query.** The slug names a query people actually type
   (`fade-in-out`, `bass-booster`, `vocal-remover`). Check it doesn't cannibalize an
   existing page: if the intent is already served by a sibling (e.g. "audio cutter" ≈
   `mp3-cutter` + `audio-trimmer`), extend that page's FAQ instead of creating a
   near-duplicate that splits equity.
2. **Feasible locally.** It must run fully client-side (Web Audio, Canvas, or a wasm
   model small enough to load on 4G). If it needs a server, it's out of scope.
3. **Honest scope.** If the browser can only do an approximation (center-cancel vs
   true stem separation), the copy must say exactly what it does and does not do.
   Under-promise in copy, over-deliver in the tool — never the reverse.

## 3. ToolDef content bar (`src/data/tools.ts`)

Field-by-field requirements. The existing entries are the reference standard — e.g.
`normalize-audio`'s FAQ ("be skeptical of any tool claiming one click does that") is
the voice we ship in.

| Field | Bar |
|---|---|
| `slug` | kebab-case, equals the primary keyword. No abbreviations. |
| `title` | ≤ 60 chars. `{Head query} — {fact only this page can say}`. See §3.1. |
| `description` | ≤ 155 chars. One benefit sentence, then one proof. See §3.1. |
| `h1` / `subtitle` | H1 uses the same head term as `title`. Subtitle = the outcome in one line with a number or a time promise where honest ("up to 40 seconds", "in under a minute"). |
| `intro` | 2–3 sentences: what it does, one concrete scenario, one privacy fact. No feature lists. |
| `usesHeading` + `uses` | 3 jobs stated as outcomes ("Lift a chorus out of a full song without a desktop editor"), not features ("supports MP3"). |
| `howTo` | 3–5 steps, each name ≤ 5 words, text names actual UI elements. Feeds HowTo schema (machine comprehension even though rich results are deprecated). |
| `faqs` | 5–8 questions, **must cover all five mandatory types below**. Written from the user's words, not ours. |
| `related` | 3 slugs, chosen by task adjacency ("what does this person do next"), not category proximity. Add the reciprocal link on at least 2 siblings in the same PR. |

Mandatory FAQ types — every tool ships all five:

1. **Privacy:** "Does my file get uploaded?" — answer names the actual mechanism
   (Web Audio API / local decode), never a generic "we value privacy".
2. **Quality/technical:** what happens to the audio (one re-encode? bit-perfect?
   which bitrate when). Real numbers, real codec names.
3. **Honest limitation:** what this tool cannot do, and which sibling (or honest
   external answer, e.g. "a DAW") handles it instead. Disambiguation builds trust and
   captures the long-tail "can it also…" queries.
4. **Sibling disambiguation:** "How is this different from {closest tool}?" — one
   paragraph, framed as "same engine, different job" where true, with a text link to
   the sibling inside the answer (this is also an internal link).
5. **Device/browser:** works on phone? which browsers? what fails on old Safari.

Volume guidance: 900–1,400 words of body copy per page. Below 800 the page is thinner
than our competitor's; above ~1,600 it pads. Depth goes into FAQ answers and the
`uses` items, not a bolted-on glossary.

### 3.1 SERP wording

Recorded 2026-10-20. Locale titles follow the same shape; see `docs/i18n-translation-guide.md` §4.

**Title.** The second half is the operation, the limit, or the number on this page. It is not `Online Free` on every page, and it is not `No Upload` unless this page has no sharper fact. `No upload` is the category claim; it lives in the description. Do not add the brand when that would push the fact past 60 characters. Do not claim frame-accurate lossless MP3 cutting: an MP3 export re-encodes once, and WAV keeps the samples.

Shape to copy (`wav-to-mp3` already does this; the bitrate is the fact):

- `Audio Trimmer — Trim a Podcast or Voice Memo`
- `MP3 Cutter — Keep or Delete a Section, No Upload`
- `Audio Joiner — Merge Songs in Order, with Crossfade`
- `MP3 Editor — Cut, Fade, and Change Speed Online`
- `MP4 to MP3 — Soundtrack Only, up to 320 kbps`

**Description.** One benefit sentence, then one proof: a number, a mode, or a limit (320 kbps, crossfade including zero, keep versus delete, 40 seconds). Not a keyword list, and not "free, private, no signup, no watermark" stacked.

**H1.** Same head term as the title. The sentence can differ. Do not swap in a second head term (a joiner page whose H1 says "Audio Merger" fails this).

**H2.** Name the job the paragraph already describes. Do not add "why choose us", comparison, or glossary headings.

**Offline.** There is no service worker, so a cold visit while offline does not open the tool. After this page's scripts have loaded, decode, the edit, and WAV export need no connection. MP3 (`lamejs`) and M4R (`mp4-muxer`) are same-origin lazy chunks: they export offline only after that chunk has loaded once; until then the UI tells the user to try WAV. Audio to text needs the Whisper model downloaded once; after that, transcription can run offline, and the audio is still never uploaded.

Do not write `Works offline` in the title. The on-page mark is the trust row under the tool (`TrustBadge`): `Offline after load`, next to free and no watermark. Omit it when the tool still needs a download after the page opens (the transcription model). The description or the privacy FAQ can add the rest: WAV exports immediately; MP3 exports after the encoder has loaded once.

### 3.2 Evidence assets (every tool page, from 2026-10-29)

Spec lives in `docs/seo.md` (证据资产 section); audit trail: `docs/competitor-analysis/039-bulkpictools-gif-compressor.md`.

- **Screenshots:** 2–3 real UI captures (webp; first eager, rest lazy; alt text carries a number). Generate them with a script against the preview build and re-run whenever the UI changes — a stale screenshot is fake evidence, worse than none.
- **One table of real numbers.** On "fit under a limit" pages that is the platform-limits table: verify every cell against the platform's current value before shipping, and add a recommended-target column with a buffer (bulkpictools' Discord 8 MB row looks outdated — don't copy it). On every other page it is the three questions users ask before using this tool (metronome: common BPM; key-bpm-finder: key against tempo). Every cell must be provable on the page.
- **Schema:** add `ImageObject` nodes for the screenshots.
- **Density, not length.** The 900–1,400 word budget stands. New sections carry facts unique to this page; sentences never repeat across pages (scaled-content rule).

## 4. Technical implementation

- **Thin EN wrapper:** create `src/pages/{slug}.astro` re-exporting `ToolPage` with
  the new `ToolDef` (copy an existing 5-line wrapper). Locales come free via
  `src/pages/[locale]/[slug].astro`.
- **Reuse editor modes before writing DSP.** `EditorConfig` already covers: converter
  (`converter: true`), multi-file joiner (`multiple: true`), ringtone clamp
  (`ringtone: true`), quick controls (`reverse|speed|gain|normalize|reverb|pitch`),
  recorder, custom `accept`/`formats`/`exportLabel`. A new landing page for an
  existing capability is config + copy only.
- **New DSP goes in `src/editor/*.ts` as a pure function + a check script.** Pattern:
  `src/editor/pitch.ts` + `scripts/pitch-check.mjs` (generate a known signal, assert
  the measurable property — duration, period, peak). Wire into
  `src/editor/processor.ts` and surface via `quickControls`. No check script, no ship.
- **Performance budget (per tool page, mobile 4G):** LCP < 1.5s, CLS < 0.1, no
  regression in total JS vs the heaviest existing page. The editor must not block
  first paint; content is server-rendered (Astro gives this — keep it).
- **Mobile is the default test device.** Waveform touch, export reachable one-handed,
  drop zone works with the file picker (no drag needed).
- **No new top-level nav category** unless the tool fits none of
  `CATEGORY_IDS` (cut/merge/record/effects). Category growth is a separate decision.

## 5. i18n (same PR, non-negotiable)

- Add `ToolCopy` for the new slug to **all** catalogs (`src/i18n/{es,pt,id,de,ko,ja,zh}.ts`).
  `assertCatalogs()` fails the build on a missing key — don't bypass it.
- English, Spanish, and German each get `sections`: three blocks, and each block's
  paragraph count and bullet count must match the English shape. The other catalogs
  omit `sections`. `assertCatalogs()` checks Spanish and German against English.
- Translations are written, not machine-dumped: keep each locale's existing
  terminology for shared UI ("Keep selection", bitrates, format names), localize the
  `title`/`description` around the **localized query**, not a word-for-word translate
  of the English title. Check a real search suggestion in that language before
  settling the wording.
- Head pages with real demand in a locale get scenario-based rewrites in that
  locale (zh: WeChat / QQ-mail file limits), not translated EN FAQ wording — see
  `docs/seo.md` 证据资产 section. Other locales stay as quality translations.
- hreflang, canonical, sitemap alternates are automatic via `Base.astro` + the
  sitemap integration. Nothing to do — verify in the audit output.

## 6. Pre-launch checklist

```bash
node scripts/pages-check.mjs      # every route renders, all locales
node scripts/feature-check.mjs    # editor features wired
node scripts/smoke-test.mjs       # end-to-end
node scripts/seo-audit.mjs <preview-url>   # zero HIGH issues
```

- [ ] `llms.txt` — add the tool line under `## Tools` (one sentence, factual).
- [ ] Evidence assets shipped (§3.2): screenshots + the numbers table; screenshot
      script still green against the current UI.
- [ ] Nav dropdown + footer pick the tool up from `TOOLS` automatically — confirm both.
- [ ] ≥ 2 sibling tools now link to the new page via their `related` array.
- [ ] Manual pass on a real phone: EN + one locale, plus one 10-minute file and (if
      `accept` includes video) one video file.
- [ ] Lighthouse mobile ≥ 95 across perf/accessibility/SEO on the new URL.

## 7. Post-launch loop (the part that compounds)

- **Week 0:** URL Inspection in GSC → request indexing.
- **Week 4:** GSC — pull the queries the page actually shows for. Fold the top 2–3
  real phrasings into the FAQ (edit `ToolDef` + catalogs). This is how a page goes
  from "indexed" to "best answer"; template sites never do this step.
- **Week 8:** if impressions grow but CTR < 3%, rewrite `title`/`description` around
  the winning query. If bounce > 65% (Vercel Analytics), the tool is failing on
  mobile or the intro over-promised — fix the tool first, then the copy.

## 8. Tool backlog (feasibility-tiered)

**Tier 1 — config + copy on existing DSP (each ≈ 1 PR):**
fade-in-out, bass-booster, treble-booster, echo, low-pass-filter, high-pass-filter,
equalizer (3-band), compressor, mono-converter, polarity-inverter, dc-offset-remover,
crossfade-joiner (joiner already crossfades — new intent page).

**Tier 2 — small custom DSP / wasm (check script mandatory):**
silence-trimmer (RMS scan), silence-splitter, loudness-meter (BS.1770 LUFS,
K-weighting + gating), karaoke-maker (center-channel cancellation — copy must say
"removes centered vocals, output is mono-ish"), tempo-detector, key-detector,
noise-reducer (RNNoise wasm, few hundred KB — the only credible "AI" we can ship
fully local).

**Tier 3 — research before committing:**
vocal-remover (true stem separation does not fit a browser honestly; karaoke-maker is
the honest v1), speech-enhancer (DeepFilterNet-class models are heavy — prototype
before promising), audio-ducking, podcast-chapter-splitter.

Tier 1 exists because audioeditor.org's 58 tools include ~12 that are one Web Audio
node behind a full landing page. That's their whole coverage lead, and it's closeable
at ~1 tool/week.

## 9. Adding a locale (spec)

1. `astro.config.mjs`: add to `locales` + the sitemap `i18n` map (correct hreflang:
   `zh-Hant`, `pt-BR` style codes, not bare `zh`).
2. `src/i18n/locales.ts`: `LOCALES`, `localeMeta` (html lang, og locale, hreflang),
   `TRANSLATED_LOCALES`.
3. `src/i18n/{lc}.ts`: full catalog — every `ToolCopy` for every shipped tool, plus
   shell strings. Partial catalogs break `[locale]/[slug]` at build; that's intended.
4. Guides are optional per locale (`localesWithGuides()` gates the sitemap) — a locale
   can launch tool-only and grow guides later.
5. Verify: `seo-audit.mjs` shows the new locale's URLs with correct
   canonical + hreflang cluster; spot-check one tool page in the language.
