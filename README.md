# freeaudioeditor.online

Free online audio tools that run entirely in the browser. Files are never uploaded —
decoding, editing and exporting all happen locally with the Web Audio API.

**Live tool pages (v0.1):** `/audio-trimmer` · `/mp3-cutter` · `/mp3-editor` ·
`/ringtone-maker` · `/audio-joiner` + hub at `/`.

## Stack

- [Astro](https://astro.build) 5 — static output, zero-JS pages except the editor island
- Tailwind CSS 4 (CSS-first tokens in `src/styles/global.css`, design spec in `docs/ui-ue-spec.md`)
- Editor engine: plain TypeScript (`src/editor/`) — Web Audio API, OfflineAudioContext
  rendering, canvas waveform; MP3 encoding via lamejs loaded on demand from a CDN
- Fonts self-hosted via Fontsource (Geist + Geist Mono)

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:4321
npm run build      # build to dist/
npm run preview    # serve dist/ at localhost:4321
node scripts/smoke-test.mjs   # E2E smoke test (auto-generates its test tone; needs preview running + Chrome)
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project → Import** the repo. Astro is auto-detected — no build
   settings needed (`npm run build`, output `dist/`).
3. Add the domain `freeaudioeditor.online` (Project → Settings → Domains) and point
   the DNS records Vercel shows you. Choose **www or apex as the single canonical
   host** and 301 the other.
4. `vercel.json` already configures `cleanUrls`, `trailingSlash: false`, immutable
   asset caching and security headers — zero redirects between dev and prod.

Note: Vercel Hobby is non-commercial per ToS; move to Pro (or Cloudflare Pages) before
enabling ads/paid tiers.

## SEO checklist (already implemented)

- Unique `<title>` / meta description / canonical per page
- JSON-LD: WebApplication, HowTo, FAQPage, BreadcrumbList
- `sitemap-index.xml` (via @astrojs/sitemap), `robots.txt`, `llms.txt`
- Semantic HTML: one H1 per page, breadcrumb nav, descriptive link anchors
- Performance budget: no framework runtime, fonts subset+preloaded, editor code
  lazy-split per page (~7 KB gzip shared), CLS-safe fixed-height waveform
- Clean URLs with no trailing slash, consistent with canonicals (`astro.config.mjs`
  `format: 'file'` + `vercel.json`)

## Editing tool content

All tool copy (titles, intros, how-to steps, FAQs, related links, editor config) lives
in `src/data/tools.ts`. Adding a new tool page = add a `ToolDef` there + create a
3-line page file in `src/pages/`. Sitemap, header/footer links and related-tool grids
update automatically.

## Roadmap

- P1: `/wav-to-mp3`, `/reverse-audio`, `/change-audio-speed`, `/increase-volume` pages
  (all supported by the existing engine — mostly content work)
- P2: `/mp4-to-mp3` + `/extract-audio` via ffmpeg.wasm (lazy, CDN; needs
  COOP/COEP headers for the multithread build), `/voice-recorder` (MediaRecorder)
- Multilingual (subdirectory + hreflang), AdSense after traffic, Pro tier (export
  limits / batch / larger files)

## Privacy posture

No accounts, no analytics, no ad code yet; theme preference in localStorage only.
See `/privacy`. MP3 encoding (lamejs) is bundled with this site and is not a
third-party request.
