# 技术 SEO 审计报告（第一轮，只读）

- 审计对象：https://freeaudioeditor.online（生产环境）
- 审计日期：2026-11-04
- 审计方式：只读 —— 生产站仅发 GET/HEAD 请求；代码结论引用本地仓库 file:line。未运行 build，未修改任何生产代码/配置。
- 配套明细：`audit/seo-page-audit.csv`（57 个英文工具页逐页字段）。

---

## 1. Sitemap

**实际地址是 `/sitemap.xml`，不是 `/sitemap-index.xml`。**

| 检查项 | 结果 | 证据 |
|---|---|---|
| sitemap-index.xml | **404** | `GET https://freeaudioeditor.online/sitemap-index.xml` → 404 |
| sitemap.xml | 200 | `GET https://freeaudioeditor.online/sitemap.xml` → 200 |
| URL 总数 | **877** | sitemap.xml 内 `<loc>` 计 877 条 |

这是 `astro.config.mjs` 中 `flattenSitemap()` 插件（astro.config.mjs:118-135）的预期行为：单 chunk 时把 `@astrojs/sitemap` 输出的 index 对摊平成单个 `sitemap.xml` 并删除 index。robots.txt 与 HTML head（Base.astro:131 `<link rel="sitemap" href="/sitemap.xml">`）都指向正确地址，无 404 风险。

**语言覆盖：** 877 条 = 英文 123 条 + 10 个语言各 74–77 条（es 77 / ru 76 / ja 76 / zh 75 / pt 75 / ko 75 / id 75 / fr 75 / de 75 / ar 75，按 URL 首段统计）。英文 123 条 = 57 工具页 + `/` + `/tools` 及 6 个分类页 + 53 篇 guides + about/contact/privacy/editorial/mcp。语言差距（74 vs 123）完全来自 guides 只在部分语言发布，属有意设计（astro.config.mjs:159-165 的 filter）。

**工具页覆盖：全量。** 57 个英文工具 slug 全部在 sitemap 中（`comm -23 slugs.txt sitemap-urls.txt` 为空）；10 个非英文语言各自的 sitemap 中也各含全部 57 条工具 URL（逐语言 grep 计数均为 57）。

**lastmod 来源与真实性：** 机制是真实 git 日期，不是编译日期：
- guides 用 frontmatter `updated:`/`date:`（astro.config.mjs:14-33）；
- 其余路由用 `scripts/git-dates.mjs` 的 `git log --format=%cI`（逐文件最后提交时间），CI 无 .git 时回退到提交在仓库里的快照 `src/data/git-dates.json`（由 `scripts/write-git-dates.mjs` 刷新，astro.config.mjs:42-51）。两条路径都不编造日期。

**发现（缺陷）：生产 sitemap lastmod 落后于真实内容变更。** 生产 sitemap 中最大 lastmod 为 `2026-10-28T16:36:07.000Z`（663 条 URL 都是它），而仓库在 2026-11-03 有多次工具页内容提交（`git log`：2026-11-03T10:13/10:16/10:34+08:00，"Illustrate every how-to step" 等），且**生产页面已呈现 11-03 的新内容**（live `/audio-trimmer` 已含 3 张 `/screenshots/audio-trimmer-*.webp` how-to 配图，与 11-03 的 dist 构建一致）。即：生产已部署 11-03 内容，但 lastmod 仍停在 10-28。这与 astro.config.mjs:38-41 描述的"Vercel 构建无 .git → 回退到提交的 git-dates.json 快照"路径吻合（本地快照最大日期 2026-10-29T01:08+08:00）；确切部署机制 UNVERIFIED，但"lastmod 落后约 5 天"是可验证事实。**建议：部署含内容变更的版本前重跑 `node scripts/write-git-dates.mjs`，或确认 Vercel 构建环境带完整 .git。**

**sitemap 内 hreflang：** 每个 `<url>` 带 `xhtml:link rel="alternate"` 集群，且每条都追加了 `x-default`（astro.config.mjs:205-210）。各语言计数（en 834 / zh-Hans 817 / pt-BR 812 …）不等的差异同样来自 guides 覆盖面，工具页集群应为满配（抽样 `/audio-trimmer`、`/es/audio-trimmer` 条目均含 12 个 alternate，与页面 head 一致）。

**抽样可用性：** 抽 5 条（`/`、`/audio-trimmer`、`/es/guides`、`/ja/audio-to-text`、`/tools`）全部 200。

## 2. Robots.txt

`GET https://freeaudioeditor.online/robots.txt`（200）：

```
User-agent: *
Allow: /

Sitemap: https://freeaudioeditor.online/sitemap.xml
```

- 引用了正确的 `/sitemap.xml` ✅
- 没有任何 `Disallow`，工具页和 `/_astro/*`、`/screenshots/*`、`/guides-media/*` 等资源均不受阻 ✅
- 无需 crawl-delay；未见任何误封。无问题。

## 3. 状态码与重定向

**57 个英文工具 URL 全部 200，零重定向、零 404/5xx**（逐条 `curl -s -o /dev/null -w "%{http_code} %{redirect_url}"`，汇总：57×200）。

URL 模式确认（代码 + 实测一致）：英文不带前缀、**无尾斜杠**（`/audio-trimmer`），其他语言为 `/<lang>/<slug>`（`src/i18n/locales.ts:28-32` `localePath`；astro.config.mjs:140 `trailingSlash: 'never'`；vercel.json `cleanUrls:true, trailingSlash:false`）。

| 变体测试 | 结果 |
|---|---|
| `/audio-trimmer/`（带尾斜杠） | **308 → `https://freeaudioeditor.online/audio-trimmer`** ✅ 规范化重定向 |
| `/es/audio-trimmer/` | 308 → `/es/audio-trimmer` ✅ |
| `http://freeaudioeditor.online/audio-trimmer` | 308 → `https://...` ✅ HTTP→HTTPS |
| sitemap 内 URL 格式 | 全部无尾斜杠，与 canonical 完全一致 ✅ |

Redirects 配置（astro.config.mjs:149-153 与 vercel.json:5-8 重复声明）：仅 `/es/guias*` → `/es/guides*` 3 条 308，属西班牙语旧路径迁移，合理。

## 4. Canonical 与 hreflang

生成逻辑（src/layouts/Base.astro）：

- canonical：`new URL(localePath(locale, path), SITE.url)`（Base.astro:50, 90）—— 即每语言自指。
- hreflang：工具页走 `alternateList = LOCALES`（Base.astro:76-78），**每个语言变体对全部 11 个语言 + x-default 输出完整集群**；x-default 固定指向英文版（Base.astro:97）。`pt` 输出 `hreflang="pt-BR"`、`zh` 输出 `zh-Hans`（locales.ts:5,10），URL 前缀仍是 `/pt`、`/zh`。

线上实测（3 个代表页）：

| 页面 | canonical | hreflang |
|---|---|---|
| `/audio-trimmer`（en） | `https://freeaudioeditor.online/audio-trimmer`（自指） | 12 条：en, es, pt-BR, id, de, ko, ja, zh-Hans, fr, ru, ar + x-default→en ✅ |
| `/es/audio-trimmer` | `https://freeaudioeditor.online/es/audio-trimmer`（自指） | 同一 12 条集群，双向互认 ✅ |
| `/`（首页） | `https://freeaudioeditor.online/`（自指） | 12 条（11 语言首页 + x-default→`/`）✅ |

**57 个英文工具页逐页统计：每页恰好 12 条 hreflang link，无一缺失**（`audit/seo-page-audit.csv` hreflang 计数列/抽取脚本）。非英文页抽样（es）同样 12 条。**结论：canonical/hreflang 无缺陷**——自指正确、集群双向、x-default 齐全、与 sitemap 集群一致。

## 5. Noindex 检查

- 57 个英文工具页全部下载 head 后 grep `noindex`：**0 命中** ✅
- robots meta 全部统一为 `<meta name="robots" content="max-image-preview:large">`（Base.astro:98，可索引路径）。
- 404 页正确携带 noindex（见 §6）。Base.astro 支持 `noindex` prop 且与 hreflang 输出互斥（Base.astro:80），逻辑安全。

## 6. 404 页面

`GET https://freeaudioeditor.online/this-page-does-not-exist-xyz123`：

- 状态码 **404** ✅
- 自定义页面：`<title>Page not found — Free Audio Editor</title>`，且带 noindex ✅

## 7. 性能

**按任务要求未运行 Lighthouse。线上真实 CWV：UNVERIFIED。**

记录在案的基线：`docs/lighthouse-baseline.md`（**测试日期 2026-10-14**，本机 Chrome headless + Astro preview，非线上环境，文档自身注明"生产部署后需复测线上"）：

| 页面 | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| / | 100 | 100 | 100 | 100 | 1.2s | 0 | 0ms |
| /audio-trimmer | 100 | 100 | 100 | 100 | 1.4s | 0.008 | 0ms |
| /wav-to-mp3 | 100 | 100 | 100 | 100 | — | — | — |
| /guides/how-to-cut-a-song | 100 | 100 | 100 | 100 | — | — | — |

预算：LCP<2.0s、CLS<0.05、INP<200ms，全部达标。文档规定的复测节奏（上线后 + 每月）是否执行 UNVERIFIED。**11-03 上线的 how-to 配图（每工具页 3 张 webp）对 LCP/CLS 的影响尚未复测** —— 建议尽快按文档节奏做一次线上复测。

**代码侧证据（本地 dist/ 构建，2026-11-03 10:30，仅作参考证据，非线上实测）：**

- `dist/audio-trimmer.html` 共 118,765 字节；其中 inline JS 仅 ~9.3KB（16 个块，含主题预置、JSON-LD）；外部 script 仅 3 个：`AudioEditor...index_0_lang.js`（45,673B）+ 2 个 Base 小 chunk。CSS 2 个文件 + 1 个字体 preload。
- 重依赖**不在工具页首屏**：`transformers.web.js`（894,813B）、`ort-wasm-simd-threaded.jsep.wasm`（21,596,019B）、`graph_model.js`（1,555,993B）、`lamejs.js`（168,954B）、`rnnoise.wasm`（112,141B）等均未被页面 HTML 引用，属编辑器交互时动态 import（astro.config.mjs:222-238 的 worker/alias 配置印证）。首屏 JS 面很小，与基线 LCP 1.4s 相符。

## 8. 结构化数据（JSON-LD）

来源（src/components/ToolPage.astro:48-63）：每页输出 5 类 schema——

1. `WebApplication`（含 `Offer`，price 0）
2. `HowTo`（含 `HowToStep`，与页面可见 how-to 对应）
3. `FAQPage`（含 Question/Answer，4–8 条不等）
4. `BreadcrumbList`（Home → Tools → 分类 → 工具，4 级）
5. `ImageObject`（有截图的工具页，每图一条）

线上实测（live `/audio-trimmer`）：`WebApplication, HowTo, FAQPage, BreadcrumbList, ImageObject` 全部在 DOM ✅，与代码一致；JSON 内 `<` 已转义为 `\u003c`（Base.astro:152-158），无脚本截断风险。

**小缺口：4 个工具页无截图 → 无 ImageObject**：`audio-to-midi`、`audio-to-text`、`music-visualizer`、`soundboard`。不影响索引，属富结果完备度问题。

---

## 语言覆盖小结（替代 CSV 汇总行）

- 11 种语言全部以 `/<lang>/<slug>`（en 免前缀）暴露工具页。
- 实测 2 个样本 slug × 11 语言 = 22/22 全部 200（`audio-trimmer`、`key-bpm-finder`，遍历 en/es/pt/id/de/ko/ja/zh/fr/ru/ar）。
- sitemap 层面：10 个非英文语言的 sitemap 各含全部 57 条工具 URL（逐语言计数 57/57）。
- 各语言工具页 head 均输出 12 条 hreflang 集群（es 样本实测）。

## 结论与建议（按优先级）

1. **【中】sitemap lastmod 滞后**：生产已部署 11-03 内容但 lastmod 停在 10-28。修复：内容变更后重跑 `write-git-dates.mjs` 再部署，或核实 Vercel 构建带完整 git 历史。
2. **【低】4 个工具页缺截图/ImageObject**（audio-to-midi、audio-to-text、music-visualizer、soundboard）。
3. **【低】3 条 meta description 超 155 字符**（mp3-to-wav 158、mp4-to-mp3 157、wav-to-mp3 156），有 SERP 截断风险；2 条 title ≥59 字符（ogg-to-mp3 59、reverse-audio 60）贴着上限。
4. 核心面（状态码、canonical、hreflang、robots、noindex、404、结构化数据、首屏性能）**未发现缺陷**；线上 CWV 待按 `docs/lighthouse-baseline.md` 的节奏复测（UNVERIFIED）。
