# Tier-1 tool pipeline — 11 tools, batched by shared DSP infrastructure

> Source: `new-tool-spec.md` §8 Tier 1. fade-audio shipped 2026-10-15 (ec0adcf).
> Key architectural fact that shapes the order: `renderEdit` builds an
> OfflineAudioContext graph with **native Web Audio nodes** (convolver = reverb,
> DynamicsCompressor = limiter), so filter-family tools are node wiring, not
> hand-written DSP. Verification for native-node effects is browser E2E in
> `scripts/feature-check.mjs` (the "no check script, no ship" rule maps to
> "no feature-check assertion, no ship" here).

## Batches (order = infrastructure reuse)

**Batch A — biquad filter family** (first tool builds chain-insertion + slider pattern; rest are +1 state field + 1 label + copy):
1. `bass-booster` — lowshelf @150 Hz, 0…+15 dB, quick slider
2. `treble-booster` — highshelf @3 kHz, 0…+15 dB, quick slider
3. `equalizer` — 3-band (lowshelf / peaking @1 kHz / highshelf), Adjust-drawer sliders
4. `low-pass-filter` — lowpass, cutoff slider (Adjust drawer)
5. `high-pass-filter` — highpass, cutoff slider (Adjust drawer)

**Batch B — trivial sample ops** (post-render buffer ops, same pattern as `reverse`):
6. `mono-converter` — average channels to 1
7. `polarity-inverter` — negate samples
8. `dc-offset-remover` — subtract per-channel mean

**Batch C — dynamics / time**:
9. `compressor` — DynamicsCompressor on the bus (threshold/ratio presets + amount slider)
10. `echo` — DelayNode + feedback gain (Adjust drawer: time + feedback)

**Batch D — intent page, zero new DSP**:
11. `crossfade-joiner` — joiner already crossfades; new page targets the
    "crossfade songs" query. Config + copy only.

## Per-tool definition of done (uniform, all in ONE commit)

1. ToolDef per `new-tool-spec.md` §3 — five mandatory FAQ types, honest limits
   (real dB ranges, real frequency corners, what it can't do + sibling pointer).
2. EditState field + UI control (quick slider or Adjust drawer) + `EditorText`
   label in **all 11 catalogs**. `assertCatalogs()` now fails on any missing
   editor label key (key-parity guard added with bass-booster).
3. feature-check E2E assertion with a signal-level property (e.g. bass boost
   raises an 80 Hz tone to the limiter ceiling; polarity flips a saw).
4. Thin EN wrapper `src/pages/{slug}.astro` + pages-check entry.
5. Related reciprocals on ≥2 siblings in the same commit.
6. llms.txt tool line.
7. `npm run build` + pages-check + feature-check (+ smoke-test untouched-green)
   + local seo-audit HIGH 0. Then push (Vercel deploys automatically).

## Status

| # | Tool | Batch | Status |
|---|---|---|---|
| 0 | fade-audio | — | ✅ ec0adcf |
| 1 | bass-booster | A | 🚧 this commit |
| 2 | treble-booster | A | ⏳ |
| 3 | equalizer | A | ⏳ |
| 4 | low-pass-filter | A | ⏳ |
| 5 | high-pass-filter | A | ⏳ |
| 6 | mono-converter | B | ⏳ |
| 7 | polarity-inverter | B | ⏳ |
| 8 | dc-offset-remover | B | ⏳ |
| 9 | compressor | C | ⏳ |
| 10 | echo | C | ⏳ |
| 11 | crossfade-joiner | D | ⏳ |

Cadence: 1 tool per working session until Batch A is done, then re-evaluate
(GSC data may promote/demote Batch C/D). Cannibalization watch per roadmap:
bass-booster must stay "shape the low end" vs volume-booster/increase-volume
"make the whole file louder" — disambiguation FAQ is mandatory in all three.
