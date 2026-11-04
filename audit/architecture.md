# 架构审计（第一轮，只读）

审计日期：2026-11-04。范围：`/Users/luogangming/projects-b/free-audio-editor-online`（FreeAudioEditor.online）。本文件只读代码得出结论，不重复 `docs/architecture.md` 的全部内容；重点在核实 + 标注文档漂移。所有结论附 file:line 证据；无法核实的标注 UNVERIFIED。

---

## 1. 技术栈与构建

**框架与版本**
- Astro `^5.1.0`（package.json:58），纯静态输出（无 adapter、无 SSR 路由）。
- Tailwind CSS v4，经 `@tailwindcss/vite` 插件接入（astro.config.mjs:5、221-222；package.json:63-64、69）。
- TypeScript `^5.6.0`（package.json:70），`tsconfig.json` extends `astro/tsconfigs/strict`（tsconfig.json:2），排除 `dist`、`node_modules`、`src-tauri`、`mcp`（tsconfig.json:4）。
- 站点配置：`site: 'https://freeaudioeditor.online'`、`trailingSlash: 'never'`（astro.config.mjs:139-140）；`build.format: 'file'` 产出 `/page.html` 以配合 Vercel `cleanUrls`（astro.config.mjs:240-245）。
- Vite 特殊处理：`@tensorflow/tfjs` alias 到 `src/editor/tfjs-browser.js`、`node-fetch` stub（astro.config.mjs:224-229）；`worker.format: 'es'` 以支持 worker 内动态 import 代码分割（astro.config.mjs:234-238）。

**Vercel 部署**
- vercel.json：`cleanUrls: true`、`trailingSlash: false`（vercel.json:3-4）；`/es/guias` → `/es/guides` 永久重定向（vercel.json:5-8，astro.config.mjs:149-153 有同款 redirects）；`/_astro/` 一年 immutable 缓存（vercel.json:10-15）；全站安全头 nosniff / X-Frame-Options DENY / Referrer-Policy / HSTS（vercel.json:35-45）。
- vercel.json 中没有显式 `buildCommand`/`outputDirectory`，依赖 Vercel 的 Astro framework preset 自动检测 — UNVERIFIED（无 Vercel 项目配置可查）。
- `.vercelignore` 排除 node_modules、dist、media、`src-tauri/target` 等（.vercelignore:1-13）。

**CI**
- `.github/workflows/ci.yml`：push main + 所有 PR，ubuntu + Node 20，依次 `npm ci` → `npm run check`（astro check）→ `npm run build`（ci.yml:14-22）。浏览器类 `check:*` 脚本需要本机 Chrome，不进 CI（ci.yml:1-3 注释；package.json:14-45 有约 30 个手动检查脚本）。

**lastmod 管线（scripts/git-dates.mjs + write-git-dates）**
- `scripts/git-dates.mjs:8-32`：一次 `git log --name-only --format=%cI` 得到「文件 → 最后提交时间」Map；无 .git 时返回空 Map。
- astro.config.mjs:42-51：构建时优先用 live git；拿不到则回退到提交在库里的快照 `src/data/git-dates.json`（Vercel 构建无 .git）；两者皆无则 lastmod 只保留 guides 的。
- `scripts/write-git-dates.mjs:1-23`：本地跑 `node scripts/write-git-dates.mjs` 刷新快照。
- guides 另有 frontmatter `updated:`/`date:` 日期管线（astro.config.mjs:14-34）；`routeLastmod()` 把路由映射到源文件集合取最新（astro.config.mjs:59-80）。
- sitemap 经 `flattenSitemap` 插件把 index 摊平成单个 `sitemap.xml`（astro.config.mjs:118-135、215）。

**src-tauri 桌面应用**
- Tauri 2 桌面壳：productName "Free Audio Editor"、identifier `online.freeaudioeditor.desktop`（src-tauri/tauri.conf.json:3-5）；dev 跑 `DESKTOP=1 npm run dev` 固定 127.0.0.1:4321，`frontendDist: "../dist"`（tauri.conf.json:6-11）——即桌面端直接复用 web 构建产物。
- **不属于 web 部署**：Vercel 只发 `dist/`；`.vercelignore` 排除 `src-tauri/target`（.vercelignore:9），src-tauri 源码虽未排除但 web 构建从不引用它，且被 tsconfig 排除类型检查（tsconfig.json:4）。web 侧唯一胶水是 `src/desktop/save.ts`：只在存在 `__TAURI_INTERNALS__` 时拦截 `<a download>` 走原生保存对话框，网页环境立即返回（src/desktop/save.ts:7-10）。npm scripts `desktop`/`desktop:build`（package.json:43-44）。

**mcp/ 目录**
- 独立的本地 stdio MCP 服务器 `free-audio-editor-mcp` v0.1.0："Local stdio MCP server. Eight ffmpeg audio tools. Not published to npm."（mcp/package.json:1-5），包装本机 ffmpeg/ffprobe CLI（mcp/tools.js:14-15），单次调用 15 分钟超时（mcp/tools.js:18）。
- 构建时 `packMcpZip()`（astro.config.mjs:11 调用）把 mcp/ 的 6 个源文件打成 `public/free-audio-editor-mcp.zip`，含 zip 回读校验（scripts/pack-mcp.mjs:5-28）；该 zip 随站点公开分发，`src/pages/mcp.astro` 是介绍页。

**dist/ 佐证（未重新构建，仅查看 2026-11-03 10:30 的产物）**
- 67 个根级 .html = 65 个根级页面 + `guides.html`（guides/index.astro 的产物）+ `google824e0769c16d7fbd.html`（Google Search Console 验证文件，源文件 public/google824e0769c16d7fbd.html）。
- 含 `ar/de/es/fr/id/ja/ko/pt/ru/zh` 各语言目录与 `ar.html` 等语言首页、`dist/models/basic-pitch/`（自托管模型）、`dist/free-audio-editor-mcp.zip`、`dist/sitemap.xml`、`dist/_astro/transcribe-worker-*.js`（worker 分块）。

---

## 2. 路由与页面清单

全部为构建期静态路由（唯一动态段是 `[locale]` 与 `[slug]`/`[category]`）。

**工具页（一工具一 .astro）**：根级 **57 个**（`src/pages/*.astro` 共 65 个，减去 8 个非工具页）。与 `TOOLS` 数组 57 个 slug 一一对应（grep `^    slug: '` 计 57；如 src/pages/audio-trimmer.astro）。

**Hub 页**
- 英文根级非工具页 **8 个**：`index.astro`（首页）、`tools.astro`（全部工具）、`tools/[category].astro`（6 个分类，getStaticPaths 按 CATEGORY_IDS 生成，src/pages/tools/[category].astro:5-8）、`guides/index.astro`（指南 hub → `/guides`）、`404.astro`、`about.astro`、`contact.astro`、`privacy.astro`。
- 语言 hub（`src/pages/[locale]/` 共 5 个模板）：`index.astro`、`tools.astro`、`tools/[category].astro`、`guides.astro`、`[slug].astro`。`[locale]/[slug].astro` 的 getStaticPaths 为 10 个翻译语言 × (about/contact/privacy + 57 工具) = **600 页**（src/pages/[locale]/[slug].astro:11-14）；另有 10 × (首页 + tools hub + guides hub + 6 分类) = 90 页。

**指南（guides）**
- 英文 **52 篇** .md（src/pages/guides/*.md）+ 1 个 hub。
- 10 个语言共 **64 篇**翻译：ar 6、de 6、es 8、fr 6、id 6、ja 7、ko 6、pt 6、ru 7、zh 6（ls 统计）。
- 指南互译关系/映射在 `src/data/guides.ts`（`localesWithGuides` guides.ts:932、`GUIDE_TOOL` guides.ts:953、`guideAlternates` guides.ts:1039）。

**静态/公司页**：about、contact、privacy（根级 + 经 `[locale]/[slug].astro` 出 10 语言版）、editorial（仅英文，hreflang 只指向 en，src/layouts/Base.astro:72-73）、mcp（仅英文，同 :72-73）、404。

**重定向**：`/es/guias` 与 `/es/guias/:slug`（astro.config.mjs:149-153 与 vercel.json:5-8 双保险）。

计数汇总（源路由，非最终 URL 数）：57 工具页(EN) + 570 工具页(翻译) + 30 about/contact/privacy(翻译) + 66 分类 hub(6+60) + 52+64 指南 + 11 指南 hub + 8 根级静态页 + 1 个 404 ≈ 890 条路由。dist 佐证：67 根 html + dist/guides/ 52 篇 + 各语言目录。

---

## 3. 工具配置体系（src/data/tools.ts）

**ToolDef 字段**（src/data/tools.ts:124-163）：
- `slug`、`name`、`shortName`（导航/相关工具短标签 :128）、`icon`（21 个 ToolIcon 枚举值 :26-47）、`category`（6 个 CATEGORY_IDS：cut/convert/join/edit/effects/record，:23）、
- SEO：`title`（≤60 字符 :132）、`description`（≤155 :134）、`h1`，
- 内容：`hero`（svg 插图 :137）、`howToIntro`、`screenshots`（scripts/capture-screenshots.mjs 产出的真实 UI 截图，:140-144）、`subtitle`、`cardLine`、`intro`、`usesHeading`、`uses`（固定 3 项 :153）、`howTo: HowToStep[]`（:17-20）、`faqs: FaqItem[]`（:1-4）、`sections?: ToolSection[]`（长文块：heading/paragraphs/bullets/table/outro，:7-15）、`related: string[]`（相关工具 slug :159）、`editor: EditorConfig`（:160）、`recorder?`（:162）。

**EditorConfig**（tools.ts:49-122）约 30 个开关决定共享编辑器的形态：`multiple`、`batch`、`mixer`、`defaultFormat`、`visualizer`（'waveform'|'spectrogram'|'live'）、`paint`、`transcribe`、`midi`、`tagEditor`、`showAdjust`、`trimLayout`、`trimFades`、`gainPresets`、`speedPresets`、`pitchPresets`、`ringtone`、`dropHint`（必填 :83）、`converter`、`silence`、`noise`、`voice`、`tapTempo`、`loop`、`split`、`mono`、`bitcrush`、`hz432`、`loudness`、`metronome`、`soundboard`、`keyBpm`、`exportLabel`、`maxGainPercent`、`quickControls`（19 种外置控件 :117）、`accept`、`formats`。

**每分类工具数**（grep 统计）：cut 4、convert 11、join 3、edit 15、effects 17、record 7 = **57**。

**ToolPage.astro 如何消费**：
- 接收 `ToolDef` + 可选 `locale`，产出面包屑、JSON-LD（WebApp + HowTo + FAQ + Breadcrumb + 每张截图的 ImageObject，src/components/ToolPage.astro:48-67）、H1/正文区块、HowTo/Faq/RelatedTools。
- 编辑器岛按 `editor` 标志分派（ToolPage.astro:102-131），优先级从上到下：`recorder`→顶部加 VoiceRecorder；`paint`→SpecPaintEditor；`visualizer==='live'`→MusicVisualizerEditor；`visualizer`→VisualizerEditor；`transcribe`→TranscribeEditor；`midi`→MidiEditor；`tagEditor`→TagEditor；`keyBpm`→KeyBpmEditor；`metronome`→MetronomeEditor；`tapTempo`→TapTempoEditor；`soundboard`→SoundboardEditor；`loudness`→LoudnessEditor；`mixer`→MixerEditor；`multiple`→JoinerEditor；兜底→AudioEditor。
- TrustBadge 的 offline 徽章对 transcribe/midi 页关闭（ToolPage.astro:135：`offline={!tool.editor.transcribe && !tool.editor.midi}`；徽章渲染 TrustBadge.astro:31-40）。

**薄页面接法**：每个根级工具页是 9 行包装（src/pages/audio-trimmer.astro:1-9）：`import ToolPage` + `getTool('slug')!` + `<ToolPage tool={tool} />`。英文页直接传 EN ToolDef；翻译页统一走 `[locale]/[slug].astro` 的 `localizeTool(slug, locale)`（src/pages/[locale]/[slug].astro:18、src/i18n/index.ts:37-63）。

---

## 4. 编辑器共享层（src/editor/ + src/components/editor/）

**src/editor/ 共 54 个模块**（约 9,485 行）。共享核心：
- `index.ts`（1,790 行）：单文件编辑器总控制器，「Heavy modules stay out of the first script」— waveform/processor/encoders/silence/denoise-browser/loop/split/batch 全部懒加载且 Promise 共享（src/editor/index.ts:20-58）。
- `processor.ts`：OfflineAudioContext 离线渲染，原 AudioBuffer 永不改（processor.ts:1-7）；变调走 pitch.ts vocoder、变速走 tempo.ts。
- `edit-state.ts`：无音频图的纯编辑状态（edit-state.ts:1-6），页面脚本可先持有它而不拉渲染器。
- `encoders.ts`：WAV 手写编码（encoders.ts:12-51）；MP3 懒加载 lamejs（:52、64-67）；M4R 走 WebCodecs AAC + mp4-muxer（:157）；文件头注释明确「bundled locally as lazy dynamic-import chunks … exports keep working offline」（encoders.ts:1-9）。
- `waveform.ts`（峰值计算 + canvas 渲染）、`messages.ts`（toast/元素工具）、`batch.ts`（批量下载命名）、`delivery.ts`（文件打开/拖放）。
- 功能模块：silence/loop/split/mono/bitcrush/hz432/pan/distort/circle/joiner/mixer/tags+id3-read/key-bpm/loudness/metronome/tap-tempo/spectrogram(+paint-ui)/visualizer/music-visualizer（视频导出走 MediaRecorder，music-visualizer.ts:222-235）/denoise(+denoise-browser)/transcribe(+worker)/midi-infer+midi-file/voice-recorder/srt。
- `src/components/editor/` 共 **17 个岛组件**：AudioEditor、JoinerEditor、MixerEditor、VisualizerEditor、MusicVisualizerEditor、SpecPaintEditor、TranscribeEditor、MidiEditor、TagEditor、KeyBpmEditor、LoudnessEditor、MetronomeEditor、TapTempoEditor、SoundboardEditor、VoiceRecorder、LocalBadge（"本地处理"徽章）、DropPromise。AudioEditor 的 `<script>` 只 `import { initEditors } from '../../editor/index'`（src/components/editor/AudioEditor.astro:721-724）。

**重依赖与加载方式（local-first 核心证据）**

| 依赖 | 加载方式 | 证据 |
|---|---|---|
| `@huggingface/transformers` | **动态 import，在专用 module Web Worker 内**；worker 由 `new Worker(new URL('./transcribe-worker.ts', import.meta.url), { type: 'module' })` 创建（transcribe.ts:359），`tf = await import('@huggingface/transformers')`（transcribe-worker.ts:84） | **模型权重运行时从 HuggingFace CDN 下载**：`tf.env.allowLocalModels = false`（transcribe-worker.ts:85），模型仓 `onnx-community/whisper-base` / `whisper-tiny`（:24-27）；首下载后浏览器缓存（:3-7 注释）；WebGPU 用 fp32 encoder + q4 decoder，wasm 用 q8（:91-104） |
| `@spotify/basic-pitch` + `@tensorflow/tfjs` | **主线程动态 import**（midi-infer.ts:28-29）；tfjs 经 vite alias 用浏览器构建（astro.config.mjs:226-229） | 模型**自托管在本站**：`const MODEL = '/models/basic-pitch/model.json'`（midi-infer.ts:11），文件在 public/models/basic-pitch/（model.json + group1-shard1of1.bin）；为控内存拒绝 3 分钟以上音频（midi-infer.ts:4-7） |
| `@jitsi/rnnoise-wasm` | wasm 以 `?url` 静态引入资产路径（denoise-browser.ts:4），JS 胶水动态 import 并 `locateFile` 指向打包内 wasm（:17-19）；**主线程** OfflineAudioContext 48 kHz 处理，不在 worker | 无运行时外部下载，wasm 随站点分发 |
| `@breezystack/lamejs` | 导出 MP3 时才动态 import（encoders.ts:64） | 打包进站点分块，离线可用 |
| `mp4-muxer` | 导出 M4R 时才动态 import（encoders.ts:157） | 同上；music-visualizer 不用它（MediaRecorder，music-visualizer.ts:232-235） |

**音频文件是否外传（全站 grep）**：对 `fetch(`、`XMLHttpRequest`、`sendBeacon`、`WebSocket`、`FormData`、`upload` 全 src/ 检索，唯一命中：
- `src/desktop/save.ts:17` — 桌面壳内 `fetch(href)` 读的是本地 blob 下载链接，再写原生文件；
- `src/editor/node-fetch-stub.js:4` — 构建期 stub。
**没有任何代码把音频/文件数据发往网络。** 转写音频以 Float32Array 经 `postMessage` 传给同页 worker（transcribe.ts:215；协议定义 transcribe-worker.ts:17-18、165-206）。

**local-first 结论**：成立，但有一个明示的例外 —— **audio-to-text 首次使用需从 hf.co（HuggingFace CDN）下载 Whisper 权重**；音频本身仍不上传。这一点代码用 TrustBadge 如实区分（transcribe/midi 页不显示「离线可用」徽章，ToolPage.astro:135），页面文案（transcribe.ts:3-7 注释、隐私页文案）也写明「转写要先下模型，音频不上传」，与 docs/architecture.md:65 一致。audio-to-midi 的模型从本站 `/models/` 下载，不依赖第三方 CDN。Whisper 权重具体体积 UNVERIFIED（未实测下载）。

---

## 5. 多语言实现（src/i18n/）

- **11 个 locale**（locales.ts:4-16）：en、es、pt、id、de、ko、ja、zh、fr、ru、ar。URL 前缀 = locale id，英文无前缀（`localePath`，locales.ts:27-32；astro.config.mjs:141-148 `prefixDefaultLocale: false`、`redirectToDefaultLocale: false`）。hreflang 可比前缀更细：pt → `pt-BR`（:10）、zh → `zh-Hans`（:13）；ar `dir: 'rtl'`（:14）。`<html lang/dir>` 来自 `localeMeta`（Base.astro:49、84）。
- **catalogs 机制**：`en.ts`（564 行）是基准 shell；`index.ts` 声明 `catalogs: Partial<Record<Locale, Catalog>>`（index.ts:11）；`catalogs.ts` 是 side-effect 注册模块，import 10 个语言词典逐一赋值（catalogs.ts:12-21）；页面用 `import '../../i18n/catalogs'` 触发注册（如 [locale]/[slug].astro:2）。`assertCatalogs()` 构建期做键位对齐/数组长度/exportLabel/heroAlt 等强校验（index.ts:66-125）；`PENDING_I18N` 临时放行集当前为空（index.ts:20-25）。各语词典体量 3,130–4,725 行（wc -l）。
- **`inline.ts`**：`{slot}` 模板的 `fill()` 与 `splitSlots()`（inline.ts:1-19），供 DOM 内插值文案（编辑器提示等）使用，编辑器岛运行时经 `fill(ui.*, {name})` 取词。
- **页面 locale 解析**：全静态生成——翻译页由 `[locale]/[slug].astro` getStaticPaths 产出（:11-14）；组件拿 `locale` prop 后经 `getShell(locale)` 取词典（index.ts:27-33），工具文案经 `localizeTool()` 把 EN ToolDef 与 locale copy 合并（index.ts:37-63）。
- **hreflang/canonical 生成点**（细节由另一份审计负责，此处只指路）：canonical 在 Base.astro:50（`localePath(locale, path)`）；hreflang 链接与 x-default 在 Base.astro:90-97，集群按 guides 互译关系收窄（Base.astro:66-80）；sitemap 侧的 i18n hreflang 映射、优先级与 x-default 注入在 astro.config.mjs:166-213。

---

## 6. 数据统计实现

- **@vercel/analytics `^2.0.1`**（package.json:57）：唯一引入点在 `src/layouts/Base.astro:172-178` — 动态 `import('@vercel/analytics').then(({ inject }) => inject())`，且仅当 `location.hostname.endsWith('freeaudioeditor.online')` 时注入（本地预览/staging 干净）。**没有配置 `beforeSend`，没有自定义事件** — 即只统计默认的（cookieless）页面浏览。
- **同意层**：`src/consent.ts` — localStorage key `fae-consent-2`（consent.ts:6），CookieNotice 的 accept/reject 按钮写入（consent.ts:31-43；CookieNotice.astro:24-26，横幅 hidden + inline reveal 脚本 CookieNotice.astro:13-36）。
- **接受（accepted）后加载两样东西**：
  1. Microsoft Clarity（ID `z15k2kvoqo`，consent.ts:14；脚本 `https://www.clarity.ms/tag/...` consent.ts:61），且额外要求生产域名（`shouldLoadClarity`，src/feedback-consent.mjs:12-15；lookalike 域名不匹配）。已接受的老用户在页面装载时立即加载（consent.ts:96 在 install 末尾调用 loadClarity）。
  2. Userback 反馈 widget（token 在 consent.ts:13，脚本 static.userback.io，consent.ts:73-76），延迟到首次 pointerdown/keydown 或 8 秒 idle（consent.ts:80-90）。
- 拒绝（rejected）或未选择：两者都不加载。gating 函数有单元检查 `scripts/consent-check.mjs:1-15`。
- **其他 tracker：无**。grep `gtag|googletagmanager|google-analytics|plausible|posthog|umami|fathom|matomo` 在 src/ 与 public/ 均无命中。
- **自定义事件：无**。全站没有任何 `trackEvent`/analytics 调用；Clarity 未配置自定义 tag/identify；grep 命中的 `data-track-*` 是 MP3 标签编辑器的 DOM 选择器（tag-ui.ts:123-124），与埋点无关。11 语言的隐私页文案与实现一致：Vercel 汇总、无 Cookie；Clarity 仅 accept 后加载（如 zh.ts:549）。

---

## 7. 与 docs/architecture.md 的一致性

文档日期 2026-10-22（docs/architecture.md:3）。

**(a) 已文档化且与代码相符（写得好的部分）**
- 请求流与路由生成（无前缀英文 + `[locale]/[slug].astro` 静态生成，docs:7-9）与代码一致（astro.config.mjs:141-148、[slug].astro:11-14）。
- Base.astro 负责 head（canonical、hreflang、OG、字体预加载、主题脚本，docs:11）✓（Base.astro:50-97、133-150）。
- 懒加载层级：波形随文件加载、离线渲染随预览/导出、编码器随下载、lamejs/mp4-muxer 再晚一层（docs:35）与 index.ts:20-58、encoders.ts:1-9 一致。
- 浏览器处理管线：decodeAudioData、不装 ffmpeg.wasm、renderEdit 不改原缓冲（docs:59-63）与 processor.ts:1-7 一致。
- 「无 Service Worker、转写要先下 Whisper 模型、音频不上传」（docs:65）与代码一致（transcribe-worker.ts:85、§4 grep 结果）。
- CI 只跑 check+build、`check:*` 手动（docs:75）✓（ci.yml:1-3、20-22）。桌面端保存走 src/desktop/save.ts（docs:77）✓。
- tsconfig 排除 src-tauri 类型检查（docs:55）✓（tsconfig.json:4）。

**(b) 文档与代码的漂移 / 过期点**
1. **工具数过期**：文档写「51 个工具」（docs:43），实际 `TOOLS` 已有 **57** 个（tools.ts grep）。
2. **编辑器分发表不全**（docs:21-33）：缺 `midi`→MidiEditor、`tapTempo`→TapTempoEditor、`soundboard`→SoundboardEditor、`visualizer: 'live'`→MusicVisualizerEditor 四个岛；且实际分派优先级顺序与文档表格不同（loudness/mixer/multiple 在实际代码里排在 tapTempo/soundboard 之后，ToolPage.astro:103-131）。
3. **符号指错位置**：文档说「互译清单在 `src/i18n/locales.ts` 的 `TRANSLATED_GUIDES`」（docs:57）—— `locales.ts`（32 行）里没有该符号；实际在 `src/data/guides.ts`（`localesWithGuides` :932、`GUIDE_TOOL` :953、`guideAlternates` :1039）。
4. **未覆盖的新层**（文档未提，属缺口而非错误）：analytics/consent 层（Vercel Analytics + Clarity + Userback，§6）、sitemap lastmod 管线与 flatten（§1）、mcp/ 服务器与 zip 打包（§1）、`/es/guias` 重定向（§2）、`editorial`/`mcp` 页（§2）。

---

## 证据与限制

**已核实（直接读代码/文件）**：技术栈版本与构建配置；CI 工作流；git-dates/write-git-dates 管线；vercel.json/.vercelignore/tauri.conf.json；mcp/ 用途与打包；57 个工具页与 8 个根级非工具页、[locale] 模板、52+64 篇指南；tools.ts 类型定义与分类计数；ToolPage 分派顺序；src/editor 54 模块与 17 个岛；五个重依赖的加载方式（含 transcribe-worker 的 HF CDN 下载、midi-infer 的本站模型路径）；全站无音频外传的网络调用；i18n 11 locale/URL 结构/catalogs 机制/inline.ts；Vercel Analytics 注入条件、consent 门控、Clarity/Userback、无 GA4 与自定义事件；docs/architecture.md 的逐条比对；dist/（2026-11-03 构建）的产物清单佐证。src/data/tools.ts 处于并行会话修改中，本审计按当前盘面（57 工具）计数，若该文件继续变化计数可能漂移。

**UNVERIFIED**：
- Vercel 项目侧配置（framework preset、build 命令、部署历史）。
- 生产域名上的实际页面行为、模型下载耗时/体积、Whisper 权重字节数。
- GSC/GA4 等第三方后台（发现 GSC 验证文件 public/google824e0769c16d7fbd.html，但无凭据，无法登录核实）。
- 生产流量、性能、Core Web Vitals 等一切数字。
