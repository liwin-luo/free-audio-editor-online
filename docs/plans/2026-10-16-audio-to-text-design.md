# Audio-to-Text（音频转文字）需求分析与设计决策

日期：2026-10-16
状态：需求与方案已拍板，待出实现计划

## 1. 背景与目标

新增"音频转文字"（speech-to-text）工具页：用户上传音频文件，浏览器本地完成识别并输出文字。要求：

1. 支持多语言识别（含自动检测）；
2. 使用浏览器本身的能力——音频不上传服务器，与站点 "never uploaded" 核心卖点一致；
3. 走现有配置驱动的工具页管线（ToolDef + 三行页面 + 11 locale i18n）。

这是站点的第一个 AI/ML 工具，也是潜在搜索量最大的工具之一
（transcribe audio to text / mp3 to text / speech to text free）。
竞品普遍要注册、限时长或付费，"free + private + no signup" 是差异化角度。

## 2. 技术调研结论（2026-10 核实）

1. **Web Speech API 不能转写音频文件。** 标准 `SpeechRecognition` 只从麦克风取音，
   没有标准化方式喂入文件/MediaStream。
2. **Chrome 的 Web Speech API 默认把音频发到 Google 服务器识别**，与本项目隐私定位冲突；
   Firefox 不支持，Safari 支持但语言有限。标准新增的 on-device 接口（`available()`/`install()`）
   跨浏览器尚不可依赖。→ Web Speech API 不满足"转文件 + 本地 + 多语言"。
3. **浏览器内文件转写的标准做法是 Whisper 跑在 WASM/WebGPU 上**（transformers.js，
   同 Mozilla whisper-web）：
   - 完全客户端运行；约 99 种识别语言 + 自动检测 + 内置 translate-to-English；
   - 量化模型体积：tiny ≈ 40MB / base ≈ 80MB / small ≈ 250MB（q8 级别），首次下载后经
     Cache API 缓存，二次使用免下载；
   - WebGPU 在 Chrome/Edge 已稳定，Safari/Firefox 新版本开始支持，需运行时检测并回退
     WASM（慢约 3–10 倍）；
   - 原生支持长音频分段转写（30s 窗口 + stride）和时间戳输出（SRT 所需）。
4. **本项目尚无 Worker/WASM/ML 代码**（`src/` 现状），本工具是首个 ML 集成；
   `docs/new-tool-spec.md` 的"必须本地可行否则出局"规则满足。

## 3. 已拍板的决策（2026-10-16）

| 决策点 | 结论 |
|---|---|
| 技术路线 | **A：Whisper via transformers.js（WASM/WebGPU）**，纯文件转写 |
| MVP 输入 | **仅文件上传**（复用 drop → decodeAudioData 管线）；麦克风实时听写留作后续 |
| 输出物 | **页面文本框 + 复制 + TXT 下载 + SRT 下载**（时间戳来自 `return_timestamps`） |
| 模型托管 | **HuggingFace CDN**（transformers.js 默认路径），上线最快；自托管留作后续选项 |

## 4. MVP 范围

### 输入
- 文件上传/拖拽，格式 = `decodeAudioData` 支持集（mp3/wav/m4a/ogg/flac）。
- 时长上限 **10 分钟**：超限提示（提示可先用站点剪辑工具裁剪，形成工具互链）。
- 解码后经 OfflineAudioContext 混为单声道并重采样到 16kHz Float32（Whisper 输入要求）。

### 识别
- 引擎：`@huggingface/transformers` 的 `automatic-speech-recognition` pipeline，
  模型默认 `whisper-base`（q8；WebGPU 可用时用对应 dtype），允许用户切换 `whisper-tiny`
  换速度（移动端默认 tiny，检测 WebGPU/WASM 后决定默认值）。
- 语言：默认"自动检测"；UI 预设常用语言列表（约 30 种，出自 Whisper 支持的 ~99 种）。
  语言名用 `Intl.DisplayNames` 按 UI locale 本地化，不手翻。
- 运行在 **Web Worker** 中（本项目第一个 worker），避免推理阻塞主线程；
  Vite `new Worker(new URL(...), { type: 'module' })` 模式。

### 输出
- 文本框（可编辑）+ 复制按钮；TXT 下载；SRT 下载（分段 + 时间戳）。

### UI / 管线接入
- 新 ToolDef（slug `audio-to-text`，暂定分类归属与 nav 位置在设计阶段确认）。
- 新编辑器组件类型 `TranscribeEditor.astro`（类似 `VisualizerEditor` 的分支）：
  文件选择 → 模型/下载进度 → 识别进度 → 文本输出。与波形编辑类 UI 明显不同。
- ToolDef 完整字段：title/h1/intro/uses/howTo/faqs（按 new-tool-spec 的 5 类 FAQ，含
  准确率诚实说明）/related（互链 mp3 转文字、剪辑等工具）。
- i18n：11 locale 页面自动生成，工具文案按 `tools` override map 翻译。
- `public/llms.txt` 手动补一行（new-tool-spec §6）。
- SEO/JSON-LD：照常走 `src/lib/jsonld.ts`（WebApp + FAQ + HowTo + Breadcrumb）。

## 5. 非目标（MVP 明确不做）

- 麦克风实时听写（后续增强，Web Speech API 或 Whisper 流式均可再评估）；
- translate-to-English 任务开关（实现成本极低，列为 V1.1）；
- 说话人分离（diarization）、逐词时间戳；
- 超长音频（>10 分钟）、视频容器直接转写；
- 模型自托管。

## 6. 风险与对策

| 风险 | 对策 |
|---|---|
| 首次模型下载 40MB+ 的转化损耗 | 显式下载进度 + Cache API 缓存 + "仅首次"文案说明 |
| 移动端/低端机内存与速度 | 时长上限、默认 tiny（弱环境）、Worker + 分段、进度反馈 |
| WebGPU 兼容性差异 | 运行时检测，逐级回退 WebGPU → WASM(q8) |
| 准确率期望 | FAQ 诚实说明影响因素（背景噪音、口音、多说话人），引导用 tiny/base 对比 |
| HuggingFace CDN 可达性 | 记录为已知依赖；自托管为预案（放入 public/ 或对象存储） |
| 长 decode 阻塞/内存峰值 | 上限 10 分钟；必要时分块 decode（后续优化） |

## 7. 待设计阶段确认的细节

- 分类归属：挂现有 category（cut/merge/record/effects）还是新增（如 text/ai）——影响 nav 与 hub 页；
- 常用语言列表的最终集合与排序；
- 移动端默认模型（tiny）与桌面默认（base）的判定条件；
- 错误文案全集（解码失败/超限/模型下载失败/Worker 崩溃）与 i18n key 规划。

## 8. 后续迭代方向（按优先级）

1. translate-to-English 开关（SEO：translate audio to english）；
2. 麦克风实时听写模式；
3. VTT/带时间戳纯文本导出；
4. 模型自托管选项（配置开关）；
5. more: subtitles 系列工具（SRT 翻译、字幕编辑）——与本工具形成集群。
