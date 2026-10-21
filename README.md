# freeaudioeditor.online

Free online audio tools that run entirely in the browser. Files are never uploaded —
decoding, editing and exporting all happen locally with the Web Audio API.

**Live:** 50 tool pages, 11 languages, hub at `/` and `/tools`. Layout and loading are in
[docs/architecture.md](docs/architecture.md).

## Stack

- [Astro](https://astro.build) 5 — static HTML, editor islands only where a tool needs them
- Tailwind CSS 4 (tokens in `src/styles/global.css`, spec in `docs/ui-ue-spec.md`)
- Editor: plain TypeScript (`src/editor/`) — Web Audio decode and offline render.
  Waveform, the renderer, and encoders load when used. MP3 is bundled lamejs, not a CDN
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

## SEO

Rules: [docs/seo.md](docs/seo.md). Unique title, description, and canonical per page.
JSON-LD is WebApplication, HowTo, FAQPage, and BreadcrumbList. The sitemap is generated;
`robots.txt` and `llms.txt` live in `public/`. Clean URLs, no trailing slash.

## Editing tool content

All tool copy (titles, intros, how-to steps, FAQs, related links, editor config) lives
in `src/data/tools.ts`. Adding a new tool page = add a `ToolDef` there + create a
3-line page file in `src/pages/`. Sitemap, header/footer links and related-tool grids
update automatically.

## Roadmap

[docs/roadmap.md](docs/roadmap.md). Ads and a paid tier wait on traffic thresholds.
Do not add a YouTube ripper or a format-permutation matrix.

## Privacy posture

No accounts. No ad code yet. Theme preference is in localStorage. Vercel Web Analytics
is cookieless and only injected on the production host. Microsoft Clarity loads on
that host only after optional cookies are accepted. See `/privacy`. MP3 encoding
(lamejs) is bundled with this site and is not a third-party request.
