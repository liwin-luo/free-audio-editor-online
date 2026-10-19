# 压缩器 / 回声 / 去静音 / 文件响度计 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 补上四个和现有页面不抢意图的本地音频工具：宽带压缩、离散回声、按音量删静音、文件综合响度（LUFS）。

**Architecture:** 压缩器和回声是 `renderEdit` 图上的两个新状态，各用一个快捷滑杆。去静音和响度计是纯函数（`Float32Array` 进、结果出），分别用节点脚本断言；去静音复用现有波形编辑器导出，响度计是一块新的测量岛，因为用户要的是数字和「对齐到目标响度」，不是再拖一次选区。

**Tech Stack:** Astro 工具页、`src/data/tools.ts` 的 `ToolDef`、Web Audio `OfflineAudioContext`、11 语词典、`scripts/*-check.mjs`。

日期：2026-10-19
状态：方案已定，按任务实现。一次只做一个工具，做完再开下一个。`src/i18n/*.ts` 有并行会话，改之前重读。

---

## 1. 为什么是这四个

现有约 33 个工具已经盖住裁剪、拼接、转码、增益、峰值归一化、搁架均衡、变速、音高、混响、录音、转写、标签。还缺的是四种不同的任务：

| slug | 主查询 | 用户干完的事 | 现有页为什么盖不住 |
|---|---|---|---|
| `compressor` | audio compressor | 人声忽大忽小被压平，峰值还在 | `volume-booster` 是整段乘增益 |
| `echo` | add echo to audio | 听到隔开的重复，延迟可调 | `slowed-reverb` 是混响尾音，没有一拍一拍的重复 |
| `silence-remover` | remove silence from audio | 口播里的长停顿被删掉，短气口留着 | 裁剪器要手拖选区 |
| `loudness-meter` | lufs loudness meter | 读出综合 LUFS，并可对齐到 −16 / −14 / −23 | `normalize-audio` 把峰值拉到 −0.2 dBFS，不测量听感响度 |

四个都在浏览器里做完，音频不上传。分类都放 `effects`。不开新导航分类。

## 2. 明确不做

- 多段压缩、侧链、lookahead、压缩预设包
- 回声场景预设（slapback、峡谷）
- 静音检测画在波形上的遮罩；第一版只报「将去掉约 N 秒」
- 真峰值（dBTP）、响度范围 LRA、瞬时 / 短时响度条
- A 计权、dBA、环境声压、房间分贝计
- 把交叉淡化拆成独立页（`audio-joiner` 已有滑杆）
- 极性反转、去直流、转单声道

## 3. 共同发版标准

每个工具单独一次提交，提交前这一页自己满足 `docs/new-tool-spec.md`：

1. `src/data/tools.ts` 一条 `ToolDef`。FAQ 五类都要有：隐私、音质/算法、做不到什么、和最近的兄弟页差在哪、手机和浏览器。
2. `src/pages/{slug}.astro` 三行包装，照 `src/pages/bass-booster.astro`。
3. 10 个译语词典各一份 `ToolCopy`（`es pt id de ko ja zh fr ru ar`）。`PENDING_I18N` 不要留到提交里。`assertCatalogs()` 必须过。
4. 新的编辑器文案键同时写进 `EditorText` 和 11 份 `editor` 段。
5. `related` 三个 slug，并且至少两个兄弟页的 `related` 指回来。
6. `public/llms.txt` 加一行事实描述。
7. `scripts/pages-check.mjs` 的 `pages` 数组加英文路径；响度计还要加选择器（见任务 4）。
8. 有可观察的失败检查：压缩 / 回声进 `scripts/feature-check.mjs`；去静音、响度进各自的 `scripts/*-check.mjs`，并在 `package.json` 加 `check:*` 脚本，模式照 `check:pitch`。

文案禁区：不写 dBA，不写「认证」，不写「真峰值」，不把 LUFS 叫成分贝计。压缩页写明宽带、单段。去静音页写明安静的音乐段落会被当成静音切掉。响度页写明读数是文件综合响度，样本峰值不是真峰值。

## 4. 任务 1 — 压缩器

**Files:**
- Modify: `src/editor/processor.ts`
- Modify: `src/data/tools.ts`（`quickControls` 联合类型 + `ToolDef`）
- Modify: `src/components/editor/AudioEditor.astro`
- Modify: `src/editor/index.ts`（滑杆 → `commit`）
- Modify: `src/i18n/types.ts` 与 `src/i18n/{en,es,pt,id,de,ko,ja,zh,fr,ru,ar}.ts`
- Create: `src/pages/compressor.astro`
- Modify: `scripts/feature-check.mjs`、`scripts/pages-check.mjs`、`public/llms.txt`
- Modify related：`volume-booster`、`increase-volume`、`normalize-audio` 各加一条「和压缩器的差别」FAQ，并把 `compressor` 放进其中至少两个的 `related`

**行为**

`EditState` 增加 `compress: number`，0…1，默认 0。0 表示图里不插入压缩节点，导出与现在一致。

`amount = clamp(state.compress, 0, 1)` 映射到总线上、现有限幅器之前的 `DynamicsCompressorNode`：

```
threshold = -18 - amount * 18   // −18 … −36 dB
ratio     = 1 + amount * 7      // 1 … 8
knee      = 6
attack    = 0.005
release   = 0.12
```

`DynamicsCompressorNode` 没有补偿增益，压完会变小声。渲染结束后，若 `amount > 0`，把输出峰值拉回**源文件峰值**和 0.98 里较小的那个。听感是「动态变小，峰值还在」，不是「文件变安静」。

快捷控件一个滑杆：`data-quick-compress`，0…100，步进 1，标签 `0%`。`quickControls: ['compress']`。`showAdjust: false`。默认格式 `mp3-192`。

**检查**

`feature-check` 用一段前半 0.1、后半 0.8 的 WAV。`compress = 0` 导出后，后半 RMS / 前半 RMS 仍约 8。滑杆拉到 100 再导出，该比值下降（后半被压、前半被补偿抬上来）。断言比值小于干声比值的一半。干声导出必须先过，避免限幅器本身改变断言。

**文案要点（英文源，译语按本地查询改写 title）**

- H1：`Audio Compressor`
- 三件具体的事：口播音量忽大忽小、把峰值压回去同时保留刚压完的响度、和单纯拉音量不是一回事
- 兄弟页：`volume-booster`（整段增益）、`normalize-audio`（只看峰值）、`voice-recorder`

## 5. 任务 2 — 回声

**Files:** 同一组编辑器文件，外加 `src/pages/echo.astro`。兄弟页：`slowed-reverb`、`fade-audio`、`pitch-changer`。

**行为**

`EditState` 增加：

```
echoDelay: number   // 秒，0…0.8，默认 0。0 = 干声，反馈被忽略
echoFeedback: number // 0…0.55，默认 0.35
```

图（仅 `echoDelay > 0`）：

```
干声：各段 → master →（已有的搁架 / 限幅）→ destination
湿声：master → DelayNode(echoDelay) → wetGain(0.45) → destination
反馈：DelayNode → feedbackGain(echoFeedback) → DelayNode
```

离线上下文要加尾音，否则重复被截掉。尾音长度：

```
tail = min(4, echoDelay * (1 + echoFeedback * 12))
```

和混响尾音取较大值，不要两套尾巴相加两次。本页 `quickControls` 只有 `echoDelay` 和 `echoFeedback`，不打开混响。

两个滑杆：

- 延迟 `data-quick-echo-delay`：0…0.8 s，步进 0.01，标签 `0.00 s`
- 重复 `data-quick-echo-feedback`：0…0.55，步进 0.01，标签用百分比

**检查**

`feature-check` 用一个短点击（1 个采样为 1，其余为 0）。延迟设 0.20 s、反馈 0.4，导出 WAV。在 0.20 s ±10 ms 处有第二处能量，且大于点击峰值的 0.2。延迟为 0 时，0.20 s 处能量低于点击峰值的 0.01。

**文案要点**

写明这是隔开的重复，不是 `slowed-reverb` 的房间尾音。反馈上限 0.55，避免自激变成噪音。不承诺混响器或磁带饱和。

## 6. 任务 3 — 去静音

**Files:**
- Create: `src/editor/silence.ts`
- Create: `scripts/silence-check.mjs`、`package.json` 的 `check:silence`
- Modify: `src/editor/index.ts`（导出前用保留区间拼新 buffer，再走现有编码）
- Modify: `AudioEditor.astro`、`tools.ts`、i18n、`src/pages/silence-remover.astro`
- 兄弟页：`audio-trimmer`、`mp3-cutter`、`voice-recorder`

**纯函数**

```ts
export interface SilenceOpts {
  thresholdDb: number;   // 默认 −40，滑杆 −60…−20
  minSilenceSec: number; // 默认 0.35，滑杆 0.1…2，步进 0.05
  padSec: number;        // 固定 0.08，不暴露
}

export function silenceKeepRanges(
  channels: Float32Array[],
  sampleRate: number,
  opts: SilenceOpts,
): { from: number; to: number }[]
```

算法：

1. 帧长 20 ms，跳 10 ms。一帧的电平取各声道 RMS 的最大值，再换成 dBFS。RMS 为 0 视为低于任何阈值。
2. 连续低于阈值、并且时长 ≥ `minSilenceSec` 的区段是要删的静音。更短的气口留下。
3. 每个被删区段的两端各留 `padSec`，避免把词头词尾切掉。
4. 留下的区间重叠就合并。
5. 整段都低于阈值时，返回整文件一个区间。调用方提示「没有高于阈值的声音」，导出原文件。

`editor.silence: true` 时显示两个滑杆，隐藏 Keep / Delete（和 `converter` 隐藏裁剪同一理由：这一页的任务不是手选）。波形仍可播放预览。滑杆一变就重算，状态行写「将去掉约 N 秒」。导出时按区间把样本抄进新的 `AudioBuffer`（不经过压缩/混响图），再进现有编码器。

**检查（`scripts/silence-check.mjs`）**

44100 Hz、单声道：

- 1 s 正弦、2 s 零、1 s 正弦。阈值 −40 dB，最短静音 0.35 s，垫 0.08 s。保留总长在 2.10…2.24 s，且有两段。
- 中间只有 0.2 s 零（短于 0.35 s）时，保留整段 2.2 s。
- 全零返回一个 `[0, duration]` 区间。
- 双声道只有右声道有声时，不把该段当成静音删掉。

**文案要点**

默认 −40 dBFS 适合口播和语音备忘。安静的配乐、尾音会一起被切。要手选一段用 `audio-trimmer`。处理在本地，原文件不改。

## 7. 任务 4 — 文件响度计

**Files:**
- Create: `src/editor/loudness.ts`
- Create: `src/components/editor/LoudnessEditor.astro`
- Create: `src/editor/loudness-ui.ts`（解码、显示、按目标增益、调用现有编码器）
- Create: `scripts/loudness-check.mjs`、`package.json` 的 `check:loudness`
- Modify: `src/components/ToolPage.astro` 增加 `tool.editor.loudness` 分支
- Modify: `scripts/pages-check.mjs` 的岛选择器加上 `[data-loudness]`
- Create: `src/pages/loudness-meter.astro`
- 兄弟页：`normalize-audio`、`volume-booster`、`increase-volume`。这三页的 FAQ 补上「峰值归一化 / 增益 / LUFS」的差别，`related` 至少两处指回 `loudness-meter`

**测量**

`integratedLufs(channels, sampleRate): number`，静音返回 `-Infinity`。

1. 用现有重采样思路把每个声道变到 48 kHz，再用 ITU-R BS.1770-4 在 48 kHz 上公布的两级 K 计权系数（搁架 + 高通）。不要先混成单声道再测：左右声道各自求均方，权重都是 1，再相加。
   `ponytail:` 系数写死在 48 kHz，靠重采样对齐。升级路径是标准附录里的双线性公式，省掉重采样。
2. 块长 400 ms，重叠 75%（跳 100 ms）。
3. 绝对门 −70 LUFS，相对门是绝对门之后均值再 −10 LU。两道门都过的块求均方，换成 LUFS。
4. `samplePeakDb`：全声道最大绝对值，`20*log10`。界面写成 sample peak。真峰值要 4 倍过采样，这一版不做。

**界面**

独立岛 `data-loudness`，不复用波形编辑器。流程：丢文件 → 解码 → 大字显示综合 LUFS 和样本峰值 → 三个按钮：

| 按钮 | 目标 |
|---|---|
| Podcast | −16 LUFS |
| Streaming | −14 LUFS |
| Broadcast | −23 LUFS |

增益：

```
linear = 10 ** ((target - measured) / 20)
```

若 `peak * linear` 会超过 −1 dBFS，把 `linear` 收到刚好 −1 dBFS，并显示实际达到的 LUFS（「峰值限制在 −1 dBFS，结果是 −18.4 LUFS」这类句子，数字用算出来的）。然后走现有 MP3/WAV 导出。没有「自由输入一个 LUFS」的输入框。

**检查**

- 48 kHz、−20 dBFS 的 1 kHz 正弦、长度 2 s：综合 LUFS 落在一个记录下来的窄区间（实现时先跑一次，把区间写进断言，容差 ±0.5 LU）。改系数会让这个断言失败。
- 全零返回 `-Infinity`，不抛。
- 立体声、两侧相同，比只拿左声道高约 3 LU（容差 ±0.3）。
- 峰值已是 −1 dBFS、响度远低于 −16 时，对齐 −16 的线性增益不得使样本峰值超过 −1 dBFS。

**文案要点**

这是文件有多响，不是房间有多响。和 `normalize-audio` 的差别写进两边 FAQ：归一化只看峰值，这一页看 K 计权后的综合响度。−16 / −14 / −23 是常见交付目标，不是法律限值。

## 8. 顺序和提交

按 1 → 2 → 3 → 4。前两个共用 `EditState`，先做完压缩再加回声字段，避免两处同时改 `processor.ts`。去静音和响度计互不依赖，但词典文件不要并行改。

每次提交只包含该工具的文件。提交说明用仓库现有风格，一句说明为什么要这个页。

每个工具提交前：

```bash
npm run build
npm run check:silence    # 仅任务 3
npm run check:loudness   # 仅任务 4
npm run check:pages      # 需要本地 preview :4321
npm run check:features   # 任务 1 和 2 必须；3 和 4 回归即可
```

`seo-audit` 本地跑，HIGH 必须是 0。手机上看英文页：滑杆能拖、导出按钮在屏幕下半、丢文件不依赖拖拽。

## 9. 做完之后

不要接着做极性反转、环境分贝计、格式排列页。下一轮选题看 Search Console 里已经有展示、但没有独立 URL 的查询。
