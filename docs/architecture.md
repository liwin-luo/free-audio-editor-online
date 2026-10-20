# 架构

日期：2026-10-20。站点是静态页加浏览器里的音频处理。文件不上传。没有账号，没有服务端转码。

线上：`https://freeaudioeditor.online`。推到 `main` 后 GitHub Actions 跑 `npm run check` 和 `npm run build`，Vercel 用 `dist/` 发生产。`vercel.json` 开 `cleanUrls`、关尾斜杠，`/_astro/` 长期缓存。

## 一次请求怎么走

英语页没有语言前缀：`/bass-booster`。其余 10 个语言在前面加前缀：`/zh/bass-booster`。`src/pages/{slug}.astro` 是一行包装，取出 `ToolDef` 交给 `ToolPage`。翻译页全部由 `src/pages/[locale]/[slug].astro` 在构建时生成。

`ToolPage` 决定用哪一块编辑器，下面再排介绍、步骤、FAQ、相关工具。`Base.astro` 负责 head：canonical、hreflang、OG、字体预加载、主题脚本。JSON-LD 在 `src/lib/jsonld.ts`。

```
页面（Astro，构建时 HTML）
  └─ ToolPage
       ├─ 编辑器岛（见下表）
       ├─ TrustBadge / HowTo / sections / Faq / RelatedTools
       └─ Base（head、Header、Footer）
```

| 条件（`EditorConfig`） | 组件 |
|---|---|
| `paint` | `SpecPaintEditor` |
| `visualizer` | `VisualizerEditor` |
| `transcribe` | `TranscribeEditor` |
| `tagEditor` | `TagEditor` |
| `keyBpm` | `KeyBpmEditor` |
| `metronome` | `MetronomeEditor` |
| `loudness` | `LoudnessEditor` |
| `mixer` | `MixerEditor` |
| `multiple` | `JoinerEditor` |
| `recorder` | 上面再加 `VoiceRecorder`，下面仍是单文件编辑器 |
| 其余 | `AudioEditor` |

单文件编辑器的入口是 `src/editor/index.ts`。打开页面只拉界面绑定、编辑状态和文案。波形在选中文件时加载。离线渲染（含变调）在预览效果或导出时加载。编码器在点下载时加载；MP3 的 lamejs、M4R 的 mp4-muxer 还要再晚一层，导出那种格式才拉。静音、循环、分割、单声道、bitcrush、432 Hz 各自在用到时加载。

`mp3-editor` 仍是多步编辑，调节抽屉留着。其余单任务页把控件放在页面上，不进抽屉。

## 目录

| 路径 | 职责 |
|---|---|
| `src/data/tools.ts` | 50 个工具的英文文案和 `EditorConfig`。导航、页脚、相关工具、sitemap 都从这里来 |
| `src/data/guides.ts` | 指南索引和互译关系 |
| `src/data/site.ts` | 站点名和 canonical 主机 |
| `src/i18n/` | 11 份词典。`assertCatalogs()` 要求键和英文对齐；英文有 `exportLabel` 时各语也必须有 |
| `src/editor/` | 处理函数。新 DSP 是纯函数，配 `scripts/*-check.mjs` |
| `src/components/` | 页面骨架和各编辑器岛 |
| `src/layouts/Base.astro` | 全站 head 和外壳 |
| `src/layouts/Guide.astro` | 指南页 |
| `src/pages/` | 英语路由。`[locale]/` 生成翻译路由 |
| `public/` | `robots.txt`、`llms.txt`、OG 图、图标 |
| `scripts/` | 页面、SEO、功能检查。浏览器类检查不进 CI |
| `src/desktop/`、`src-tauri/` | 可选桌面壳。网页构建不类型检查 `src-tauri` |

语言：`en` `es` `pt`（hreflang `pt-BR`）`id` `de` `ko` `ja` `zh`（`zh-Hans`）`fr` `ru` `ar`。阿拉伯语 `dir=rtl`。指南按市场写，不是把英语文章机翻过去；互译清单在 `src/i18n/locales.ts` 的 `TRANSLATED_GUIDES`。

## 音频在浏览器里怎么处理

解码用 `AudioContext.decodeAudioData`。视频页也走这条，能解浏览器认得的 MP4/AAC、WebM/Opus。不装 ffmpeg.wasm。AC3、DTS 解不了，文案里照实写。

剪辑、音量、均衡、混响、变调等进 `renderEdit`（`OfflineAudioContext`）。原缓冲区不改。导出 WAV 在编码器模块里手写；MP3 用包内的 lamejs；铃声 M4R 用 WebCodecs AAC 加 mp4-muxer，不支持的浏览器拿掉这个选项。

没有 Service Worker。第一次打开页面要有网。这一页的脚本到了之后，解码、编辑和 WAV 导出不再要网。MP3 / M4R 要等对应分块下过一次。转写要先下 Whisper 模型，音频本身仍不上传。

## 发布

```bash
npm run dev       # http://localhost:4321
npm run check     # astro check
npm run build     # dist/
```

CI 只跑 check 和 build。`check:*` 要本机 Chrome 和预览站，合并前手动跑和这次改动相关的那几个。

桌面端是 Tauri，保存文件走 `src/desktop/save.ts`。网页下载仍是临时链接触发的浏览器下载。
