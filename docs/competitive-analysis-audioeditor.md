# Competitive analysis: audioeditor.org — and how we outrank it

> Research date: 2026-10-15. Sources: live site crawl, sitemap, robots.txt, ads.txt,
> page source (JSON-LD), whois, Wayback Machine CDX, SiteData.dev traffic panel
> (screenshot provided by the owner). Third-party crawlers (Ahrefs/Semrush) are
> blocked by their robots.txt, so backlink/keyword counts below are underestimates.
> Second pass same day: i18n crawl of all 10 locales plus blog/pricing/tool pages (§7).

## 1. What they are

audioeditor.org is a browser-based audio tool suite: **58 single-purpose tool pages ×
10 languages ≈ 580 landing pages**, all processing locally in the browser, monetized
only with AdSense. No accounts, no paid tier, no server-side processing.

Verified facts:

| Fact | Value | Source |
|---|---|---|
| Monthly visits | **387.6K** (Jul 210K → Sep 390K, +48%/3mo) | SiteData.dev |
| Bounce / pages per visit / duration | 44.5% / 2.6 / 1:33 | SiteData.dev |
| SERP keywords / DR / Google Ads | 724 / **9** / 0 | SiteData.dev |
| Domain created | 2025-09-19 (re-registered; an older audio editor lived on this domain 2011–2018) | whois, Wayback |
| Languages | en, zh-Hans, zh-Hant, ja, ko, ru, de, fr, es, pt-BR | sitemap hreflang |
| Stack | Nuxt SSR/SSG, static sitemap with hreflang alternates | Wayback, sitemap |
| Monetization | AdSense only (`ads.txt` pub-8443907573529681) | ads.txt |
| Structured data per tool page | WebApplication (Offer $0) + FAQPage (7–8 Q) + HowTo (5 steps) + BreadcrumbList | page source |
| Tool page content | ~1,100–1,300 words: intro, how-to, technical section (e.g. MP3 frames, CBR/VBR, ID3), why-use, FAQ, related tools | page source |
| Blog | 1 post. Content marketing is irrelevant to their model | /blog |
| Social footprint | ~none found. Growth is pure search | Bing/Mojeek/Reddit sweeps |
| Crawler policy | **Blocks AhrefsBot, SemrushBot, DotBot** — hides footprint from competitors | robots.txt |
| AI discovery | `.well-known/ai-plugin.json` seen in Wayback, now 404s | curl |

## 2. Their growth model

**DR 9 + 724 keywords + 387K visits** is the tell. A backlink-driven site at that
traffic level carries DR 40+. They built essentially **zero off-page SEO** and win
entirely on:

1. **Low-competition arbitrage.** Head terms like "mp3 cutter" in English are locked
   by 123apps (DR 70+). They don't fight for those. They win mid/long-tail queries —
   above all in **non-English SERPs** (ja/ko/ru/de/fr), where the DR threshold to rank
   is low and incumbents are thin template pages.
2. **Yield per page, not page count.** ~724 tracked keywords across ~580 pages ≈ one
   primary intent per page, ranked near the top, yielding ~535 visits/keyword. Their
   tool count *is* their keyword pool — each tool shipped opens a new query.
3. **Zero-marginal-cost free.** Local processing means "free, unlimited, no signup,
   no watermark" costs nothing to honor. That maximizes conversion, sharing, and the
   engagement metrics (2.6 pages/visit says the internal linking hub-and-spoke works).
4. **An aged, exact-match domain.** "audioeditor" is brandable + previously used by a
   real product (2011–2018) — residual directory listings, forum links, brand memory.
   This saved them most of a typical sandbox period.
5. **AI-era production.** 58 tools share one processing core; page copy is generated
   and localized at near-zero marginal cost. The whole site is a replicated template
   with per-page data.

Where they are **weak** (our openings):

- **Template-flat content.** ~1,100 words of generated copy per page, 1:33 visits,
  users bounce after the job. No genuine expertise depth, no guides, no updates.
- **English head terms are undefended** at DR 9.
- **Engagement is unworked.** No offline/PWA story beyond "works after load", no
  keyboard/UX polish as a ranking moat.
- **They hide from SEO crawlers** — so nobody is watching them. We can watch them.
- **Schema worship is outdated.** Google removed HowTo rich results (Sep 2023) and
  limited FAQ rich results to gov/health sites (Aug 2023). Their four-schema play no
  longer buys rich snippets; its real residual value is machine comprehension (AI
  answer engines). Keeping our schema is right — expecting rich results from it is not.

## 3. Gap matrix — them vs us (freeaudioeditor.online)

| Dimension | audioeditor.org | Us (2026-10) | Verdict |
|---|---|---|---|
| Tools | 58 | 19 | **Their lead.** But ~12 of their 58 are one-liner Web Audio graphs; see backlog in `new-tool-spec.md` |
| Languages | 10 | 8 (we have `id`, they don't; we lack zh-Hant, ru, fr) | **Their lead**, cheap to close — their i18n execution is sloppy, see §7 |
| /tools hub page | Yes (58-link hub) | No (nav dropdown only) | **Gap — build it** |
| Schema per tool page | 4 types | Same 4 (`src/lib/jsonld.ts`) | Parity |
| hreflang | sitemap + head, 10 locales | sitemap i18n + head + x-default, 8 locales | Parity |
| Canonical/URL hygiene | fixed 2026-06 | cleanUrls, canonical, trailingSlash policy | Parity |
| llms.txt / AI answer engines | had ai-plugin.json, now 404 | **live llms.txt + facts section** | **We lead** |
| Guides/content | 1 blog post | localized guides system | **We lead** |
| Content depth per page | ~1,100 template words | honest, technically specific FAQs (VBR/ALAC/codec limits) | **We lead on quality, trail on volume** |
| Performance | Nuxt SPA hydration | Astro static, near-zero JS | **We lead** — must keep LCP < 1.5s mobile |
| Domain age/history | registered 2025-09 on a used domain | fresh domain | **Their lead** — unwinnable directly, offset by content + links |
| Engagement measured | 2.6 pp/v, 44.5% bounce | not benchmarked yet | **Start measuring** (§6) |

## 4. Strategy: how we outrank a DR 9 site

Not by copying their template — by beating them on the axes they don't defend:

1. **Match their coverage mechanically, beat it editorially.** Ship the Tier-1 tool
   backlog (trivial Web Audio pages: bass booster, echo, filters, compressor, fades…)
   at our content bar. Every page must answer its query better than a generated
   template: real limits, real codec facts, honest trade-offs. That depth is why a
   DR-equal page wins the click and the dwell time.
2. **Out-localize them where they're thin.** Add zh-Hant, ru, fr (their set), keep
   `id` (ours). Non-English SERPs are where a DR 9 site got to 390K — same arbitrage,
   better content.
3. **Build the /tools hub and tighten hub-and-spoke.** They route equity through a
   58-link hub + related-tools. We have related tools but no hub. A `/tools` page
   (grouped by category, one line per tool, localized) is a half-day job and closes
   the biggest structural gap.
4. **Win engagement, which they ignore.** Offline-capable tool pages (service worker
   precache), keyboard shortcuts, instant preview, no layout shift on file load.
   2.6 pages/visit is beatable when related tools are one click from the result state
   ("Trimmed → now make it a ringtone").
5. **Own AI answer engines.** They abandoned ai-plugin.json. Keep `llms.txt` factual
   and auto-fresh, keep JSON-LD truthful, keep the privacy claim verifiable
   (client-only network requests). "Best free online audio editor" answers are
   increasingly generated, not searched.
6. **A few real links beat their zero.** They have DR 9 with no link building — we
   don't need a campaign either. A handful of honest mentions (show HN, r/webdev,
   indie directories, GitHub) puts us above their authority floor.

## 5. Prioritized roadmap

**P0 — structural parity (do first)**
- Build `/tools` hub page, localized, linked from nav; footer already lists all tools.
- Benchmark engagement now (Vercel Analytics is already wired): pages/visit, bounce,
  top landing→next-tool flows. Decide the 2027 target: pages/visit ≥ 2.5, bounce ≤ 50%.
- Extend `scripts/seo-audit.mjs`: fail builds when a tool page has < 5 FAQs, missing
  related tools, or title not front-loading the slug keyword.

**P1 — coverage close (1–2/week cadence via `docs/new-tool-spec.md`)**
- Ship Tier-1 backlog (12 tools, see spec §8): fade in/out, bass booster, treble
  booster, echo, low-pass, high-pass, 3-band EQ, compressor, mono converter, silence
  trimmer, crossfade joiner page, polarity/DC cleanup.
- Add locales zh-Hant, ru, fr (spec §9).

**P2 — technical moat (monthly)**
- Service worker: precache tool shells, make every tool work offline (they only
  half-claim this; we can prove it).
- Tier-2 tools: LUFS loudness meter, silence splitter, karaoke/center-cancel,
  RNNoise-based noise reducer, tempo/key detector.
- Guides interlink: every tool page links its guide (and vice versa) — they have
  nothing comparable.
- Watch them quarterly (they unblocked nothing for us: their robots.txt blocks
  Ahrefs/Semrush — but we can re-crawl their sitemap + pages directly like this doc did).

## 6. Measurement loop

- Weekly: `node scripts/seo-audit.mjs https://freeaudioeditor.online` — zero HIGH issues.
- GSC: track queries per tool page; 4 weeks after each launch, feed real queries back
  into that tool's FAQ (spec §7).
- Vercel Analytics: pages/visit and bounce per landing page; investigate any tool
  page whose bounce > 65% — usually a tool that fails on mobile or a false-promise intro.
- Never block SEO crawlers (their move hides them from us too — symmetric cost, and
  we want our data in tools we use).

## 7. i18n audit (2026-10-15 crawl): what to copy, what to beat

Deep pass over their multilingual setup: all 10 locale homepages, blog + pricing per
locale, per-locale tool pages, head tags, sitemap hreflang annotations.

### 7.1 What they get right (copy — mostly parity for us already)

- **Subdirectory locales, root = en.** The structure Google recommends. We already match.
- **Complete hreflang cluster in every page head**: self-reference + all alternates +
  x-default, generic (ja) and regional (ja-JP) codes both. Verified on `/` and
  `/ja/tools/trimmer`. We already match.
- **Per-locale canonical + og:locale** (`ja_JP` on /ja, `zh_CN` on /zh-hans). Every
  locale is a first-class page, never a redirect.
- **Real localization, not literal MT.** Their zh-Hans home copy is an idiomatic rewrite
  (“给偏薄的人声补一点低频重量感”), not translated English — and they clearly invested in
  it, which is market signal for non-English SERPs. zh-Hans/zh-Hant differ in terminology,
  not just characters (音频/音訊, 在线/線上, 文件/檔案). German stays in Sie-form, Spanish
  in tú-form throughout. Japanese titles follow local SERP convention: keyword
  front-loaded, full-width ｜ separator, benefit keywords appended.
- **Localized metadata everywhere**: title, meta description, H1 translated per locale.

### 7.2 Where they fail (our openings — and our own checklist)

1. **Translation keys leak into production.** 6 of 9 non-EN blog pages (ja, ko, de, ru,
   zh-Hans, zh-Hant) render raw keys — the page title is literally `seo.blog.title`,
   body shows `blog.cta.title` / `blog.description`. Canonical self-references, so this
   can index as-is. Only fr/es/pt-BR blog is translated.
2. **Untranslated content inside localized pages.** Blog article bodies are English in
   every locale; the “AI Noise Reducer — Clean speech with DeepFilterNet3…” tool card is
   English on their zh/ja/de homepages amid otherwise translated cards.
3. **Sitemap is stale against reality.** 310 URLs, only 22 tools listed while ~45 exist
   (`/tools/equalizer`, `/tools/aac-editor`, `/tools/karaoke-maker`…). Some missing pages
   are translated well (e.g. `/de/tools/equalizer`), so they're hiding good pages from
   discovery. Blog, pricing and most guides are absent too.
4. **Sitemap hreflang annotations lack self-references** — every `<url>` lists the other
   9 locales but not itself. The complete set lives only in page head; the two sources
   disagree.
5. **Minor tells a native would catch**: zh-Hant uses mainland-flavored 剪切 (TW usage:
   剪輯/裁切); ru “Без загрузки” is ambiguous (meant "no download" → скачивания); de title
   “Online Audio-Editor” drops the hyphen their own description gets right; the brand
   suffix is missing from some locale tool titles but present in others; placeholder
   "Roadmap" tool pages ship translated in all 10 languages.

### 7.3 Actions for our repo

- **Extend `scripts/seo-audit.mjs` with four i18n checks** (build should fail on any):
  (a) rendered text matching an i18n-key pattern like `^[a-z]+\.[a-z][A-Za-z0-9._]+$`
  catches key leakage; (b) per-locale English-remnant scan on non-en pages (their card
  #2 above); (c) sitemap ↔ route-manifest parity — every built route must appear in the
  sitemap, and vice versa; (d) every sitemap `<url>` carries self-referencing +
  x-default xhtml:link alternates.
- **Locale-addition checklist** (zh-Hant, ru, fr — spec §9): per-locale glossary review
  before ship — full sheets, glossaries and traps now live in
  `docs/i18n-translation-guide.md` (zh-Hant: 音訊/檔案/線上/剪輯; ja: full-width ｜ in
  titles), brand suffix consistent across all locale titles, and no placeholder page
  ships localized — a half-built page stays EN-only or unlinked.
- **Localized content pages**: the article body must be localized, not just nav chrome —
  their English-only blog bodies inside a ja page are the cautionary example. Our guides
  system already does this; keep it a rule.
- **Out-localize, don't just out-cover.** Adding zh-Hant/ru/fr matches their set; writing
  native-quality copy (glossary + native review of titles/H1s) beats their 6-of-9 broken
  blog and mixed-language pages at zero additional page count.
