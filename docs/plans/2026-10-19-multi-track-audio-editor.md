# Multi-Track Audio Editor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 做一个浏览器里的多轨混音器：把已有音频叠在同一条时间线上，分别调音量、声像、静音、独奏、入点和裁切，导出一个文件，音频不上传。

**Architecture:** 新的编辑岛，模式照 `JoinerEditor.astro` + `joiner.ts`。混音是纯函数 `mixChannels`：线性重采样、线性声像（居中为原音量），峰值超过 0.98 时整段缩小。预览和导出都走 `renderMix`，所以听到的和下载的是同一次运算。导出走现有 `encoders.ts`。

**Tech Stack:** Astro 工具页、`ToolDef`、Web Audio、11 语词典、`scripts/mixer-check.mjs`。

日期：2026-10-19
状态：已实现。混音断言 `npm run check:mixer` 通过；页面已构建。

---

## 1. 市面上在做什么

搜 “multi track audio editor online free” 的人要的是：**几条音轨叠着放，而不是首尾相接**。结果页里实际是两类产品。

### A. 浏览器 DAW（占住「做一首歌」）

| 产品 | 免费档实际给什么 | 做不到 / 代价 |
|---|---|---|
| BandLab | 16 轨、370+ 乐器、16 万采样、无限工程、实时协作。个人使用不订阅 | 要账号和云工程。16 轨封顶。发行到流媒体要付费会员 |
| Soundtrap | 播客向：多轨录音、循环素材、效果、协作、文字稿剪辑 | 免费约 5 个工程、2 个协作者、只导出 MP3。WAV 和完整协作从 $9.99/月 |
| Amped Studio | 录音 + MIDI，免费档就有 VST3 / WAM | 5 个工程、16 轨。WAV 和无限云存储从约 $5.99/月 |
| Audiotool | 不限轨、不限时长，模块化合成，可桥接本地 VST3 | 学习曲线是接线路，不是普通音轨视图。偏电子音色设计 |

这四家的共同点：工程在云上、要登录、卖的是乐器、采样、插件和协作。断网就不能做。它们不是「把我已经有的两个文件叠起来」。

### B. 本地混音器（占住「我已经有文件」）

| 产品 | 实际能力 | 和本站的差别 |
|---|---|---|
| AudioMass | 开源、无后端、无账号。波形剪辑加上多轨混音、每轨音量、录音、压缩/均衡/混响/延迟、导出 MP3 | 是一个 Audacity 式大编辑器，不是单意图落地页。效果和剪辑全堆在一页 |
| Tooljams Audio Mixer | 时间线摆片段、增益 0–150%、声像、静音/独奏、主音量、拖动入点、拖边裁切、本地导出 16-bit WAV | 能力边界就是本计划的 v1。只出 WAV，没有本站已有的 MP3 等编码 |
| Notevibes | 多轨时间线、音量/声像/静音/独奏、自动闪避、音量包络、效果标签、浏览器内保存工程、WAV/MP3 | 自动闪避和包络是下一档。浏览器解不了的视频会上传他们的服务器 |

桌面端 Audacity / Reaper 仍是多轨工程、插件和长会话的正确答案。TwistedWave 是 Mac 应用，不是这个查询的在线对手。

## 2. 我们做什么

做 **B，不做 A**。

本站的差别是：不注册、不上传、关掉标签就结束、一页只做一件事。用 DAW 去跟 BandLab 比乐器库和协作，会输，也违反 `docs/new-tool-spec.md` 的诚实范围。

这一页的主查询是 multi-track audio editor。slug：`multi-track-audio-editor`。分类：`merge`（和 `audio-joiner` 相邻，文案必须写清差别）。

用户做完的事：人声叠在伴奏上、旁白压在背景乐上、把分轨粗混成一个文件。然后下载。

`audio-joiner` 继续只做首尾拼接。混音器上线后，改 `src/pages/guides/audacity-alternative.md` 里「浏览器不能叠轨」那句，改成：叠几条已有文件用这一页；MIDI、插件、包络、第二天还要打开的工程仍用 Audacity。

## 3. 明确不做

- MIDI、虚拟乐器、循环素材库、采样
- 插件、每轨均衡/压缩/混响（那些是已有的单文件页）
- 音量包络、自动闪避（`new-tool-spec.md` 里的 Tier 3，单独立项）
- 一条音轨上放多个片段
- 录进某一轨（旁边有 `/voice-recorder`，录完再拖进来）
- 撤销栈、节拍网格、吸附
- 账号、云工程、把工程存进 localStorage
- 分轨导出、视频
- 把混音器做成 `audio-joiner` 的一个开关（两个查询，两个页面）

上限写进文案：最多 **8** 条轨。再多就提示拆开或换 DAW。天花板是手机内存，不是功能清单。

## 4. 行为

一条轨：

```ts
interface MixTrack {
  buffer: AudioBuffer;
  /** 时间线上的起点，秒，≥ 0 */
  offset: number;
  /** 源文件里保留的区间，秒 */
  trimStart: number;
  trimEnd: number;
  /** 线性增益，0…1.5，默认 1 */
  gain: number;
  /** 声像，-1 左 … 1 右，默认 0 */
  pan: number;
  mute: boolean;
  solo: boolean;
}
```

`renderMix(tracks, { master: number }): Promise<AudioBuffer>`

- 采样率取各轨最大值，至少 44100。其余轨用现有 `resampleBuffer` 对齐。
- 输出长度 = 各轨 `offset + (trimEnd - trimStart)` 的最大值。至少 1 个采样。
- 有任一 `solo` 时，没被独奏的轨不发声。`mute` 的轨不发声。独奏优先于静音：被独奏且被静音的轨不发声。
- 每轨：`BufferSource`（`start` 的 offset 为 `trimStart`，时长为裁切长度）→ `GainNode` → `StereoPannerNode` → 主 `GainNode` → destination。
- 主增益默认 1，范围 0…1。
- 渲染后若峰值 > 0.98，整段乘一个常数，把峰值拉到 0.98。这是防削波的缩放，不是压缩器。返回值附带 `pulledDownDb`，UI 在大于 0 时 toast「为避免削波，混音已降低 N dB」。
- 预览用同样的图，在用户点的播放头位置 `start()`。停止时 `stop()` 全部 source。导出不录预览，重新离线渲染。

界面：

- 顶部：添加文件、播放/停止、主音量、导出格式（沿用 `EXPORT_FORMATS`，默认 mp3，不含 m4r）、导出。
- 每轨一行：文件名、删除、波形、增益、声像、静音、独奏、入点（秒，可输入）、裁切起止（秒，可输入）。
- 波形上拖动片段改 `offset`，拖两端改 `trimStart` / `trimEnd`。手机上时间线横向滚动，点中一轨后在该行展开滑杆。不另做一套手机编辑器。
- 播放头点击标尺定位。空格播放/停止（焦点在输入框里时不拦截）。
- 解码失败的文件跳过并 toast，不中断已加入的轨。

## 5. 文案合同

英文标题：`Multi-Track Audio Editor — Mix Files Free`（43 字符）。

描述要包含：叠轨、每轨音量和声像、不上传、免费。≤ 155 字符。

FAQ 必须有这五类，并写明数字：

1. 隐私：`decodeAudioData` + 本地 `OfflineAudioContext`，文件不离开这台设备。
2. 音质：各轨重采样到最高采样率；导出编码与站点其他页相同（MP3 走现有 lame，WAV 为 PCM）；峰值超过 0.98 时整段拉回，只缩放、不再编码一次之外的处理。
3. 做不到：没有 MIDI、乐器、包络、自动闪避、插件。这些用 Audacity / BandLab。
4. 和 `audio-joiner` 的差别：joiner 是首尾相接；这一页是同时播放。链接到 `/audio-joiner`。
5. 设备：手机可用，横向滚动时间线；需要能解码的浏览器（Chrome、Firefox、Safari 17+）。解不了的编码跳过。

`related`：`audio-joiner`、`voice-recorder`、`fade-audio`。这三页至少两页的 `related` 指回来，joiner 的 FAQ 加一句「要叠放而不是接起来，用 multi-track editor」。

11 个译语的 `title` / `description` 按各语区真实搜法写，不逐字翻译英文标题。改 `src/i18n/*.ts` 前先重读。

## 6. 任务 1 — 混音纯函数和检查

**Files:**

- Create: `src/editor/mixer.ts`
- Create: `scripts/mixer-check.mjs`
- Modify: `package.json`（加 `check:mixer`，照 `check:loudness` 用 esbuild 打成单文件再跑）

**Step 1:** 写 `scripts/mixer-check.mjs`。用 `OfflineAudioContext` 造两段已知缓冲区，不依赖浏览器页面：

- 轨 A：1 秒、440 Hz、增益 1、入点 0。
- 轨 B：1 秒、增益 0.5、入点 0.5 秒。
- 断言输出时长约 1.5 秒。
- 0.25 秒处只有 A 的幅度；0.75 秒处幅度约为 A+B。
- B `mute` 后，0.75 秒处回到只有 A。
- 只独奏 B 时，0.25 秒处接近 0。
- B 声像 −1 时，右声道在 B 单独发声的区间接近 0。
- `trimStart = 0.5` 时，B 的可听长度变短，总长约 1 秒。
- 两轨全满幅、增益 1.5 时，输出峰值 ≤ 0.98，且 `pulledDownDb > 0`。

**Step 2:** 跑 `npm run check:mixer`，预期失败（模块不存在）。

**Step 3:** 实现 `renderMix`。重采样直接复用 `processor.ts` 里的逻辑：把 `resampleBuffer` 导出，不要复制一份。峰值缩放写在渲染之后，对全部声道同一个系数。

**Step 4:** `npm run check:mixer` 通过。

## 7. 任务 2 — 编辑岛

**Files:**

- Create: `src/components/editor/MixerEditor.astro`（markup 照 `JoinerEditor.astro`：`data-config`、`data-i18n`、dropzone、导出条）
- Create: `src/editor/mixer-ui.ts`
- Modify: `src/data/tools.ts`（`EditorConfig` 加 `mixer?: boolean`）
- Modify: `src/components/ToolPage.astro`（在 `loudness` 分支之后、`multiple` 分支之前渲染 `MixerEditor`）
- Modify: `src/i18n/types.ts` 和 11 份词典的 `editor` 段：添加、删除轨、静音、独奏、声像、入点、主音量、削波提示。先重读这些文件。

行为以第 4 节为准。解码和峰值绘制复用 `waveform.ts` 的 `computePeaks` / `drawWaveform`。导出复用 `encodeFor`。忙时禁用导出按钮，失败 toast，不吞掉异常到空白页。

拖动命中：片段主体改 `offset`；左右 8px 改裁切。裁切后剩余时长不少于 0.05 秒。`offset` 不小于 0。

## 8. 任务 3 — 工具页

**Files:**

- Modify: `src/data/tools.ts`（一条 `ToolDef`，`editor: { mixer: true, dropHint, defaultFormat: 'mp3' }`，分类 `merge`）
- Create: `src/pages/multi-track-audio-editor.astro`（照 `src/pages/audio-joiner.astro` 三行）
- Modify: `src/i18n/{en,es,pt,id,de,ko,ja,zh,fr,ru,ar}.ts` 各一份 `ToolCopy`
- Modify: `audio-joiner`、`voice-recorder`、`fade-audio` 的 `related` / joiner FAQ
- Modify: `src/pages/guides/audacity-alternative.md`（更正「不能叠轨」）
- Modify: `public/llms.txt`、`scripts/pages-check.mjs`

文案体量按 `docs/new-tool-spec.md`：900–1400 词，五类 FAQ 全有。不写「DAW」「专业混音台」「无限音轨」。

## 9. 完成线

```bash
npm run check:mixer
npm run check:pages
npm run check:features
```

浏览器里手测，桌面和约 390px 宽各一次：

1. 两条长度不同的音频叠上，拖入点，听见先后进入。
2. 独奏、静音、声像硬左，和导出文件一致（导出不是预览的录音）。
3. 把两条都很响的文件叠上，确认出现削波降低提示，导出文件没有持续满幅削波。
4. 手机宽度能加文件、改音量、导出，不需要悬停。

Lighthouse 这一页移动端四项 ≥ 95。JS 不比现有最重的工具页更大一个数量级；不要为波形引入新依赖。

提交时只暂存这一工具碰到的文件，不要 `git add -A`。
