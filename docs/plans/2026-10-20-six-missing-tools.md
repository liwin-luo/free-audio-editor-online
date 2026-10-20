# 六个缺口工具排期

> **For Claude:** 一次只做一个。做完、提交、再打开下一个。不要并行改 `src/i18n/*.ts`。

**Goal:** 补上竞品 Audio Tools 菜单里本站没有的六页：循环、自动声像、3D、节拍器、调性/BPM、变速且音高不变。

**Architecture:** 循环、自动声像、变速保调进现有 `renderEdit`。3D 是自动声像加已有混响的预设页，不另写空间算法。节拍器和调性/BPM 是新岛，模式照 `LoudnessEditor`：丢文件或按播放，不经过波形裁剪。

**Tech Stack:** Astro 工具页、`ToolDef`、Web Audio、11 语词典、`scripts/*-check.mjs`。零新 npm 依赖。

日期：2026-10-20
状态：10-20 循环导出已做。下一项是自动声像。一次只做一个。

每个工具一天，周五收工，周末不动。某天没提交，后面的整表后移，不并行补。

| 日期 | 工具 | slug | 一天能做完的原因 |
|---|---|---|---|
| 10-20 二 | 循环导出 | `audio-looper` | 样本拷贝，接缝用已有淡化 |
| 10-21 三 | 自动声像 | `auto-panner` | 一个 `StereoPannerNode` 加周期扫动 |
| 10-22 四 | 3D / 环绕 | `3d-audio` | 复用昨天的扫动，加上已有混响 |
| 10-23 五 | 节拍器 | `metronome` | 振荡器打点，不读用户文件 |
| 10-26 一至 10-27 二 | 调性与 BPM | `key-bpm-finder` | 两天：算法一天，黄金断言和文案一天 |
| 10-28 三至 10-29 四 | 变速保调 | `tempo-changer` | 两天：复用相位声码器，并改速度页的「做不到」 |

10-29 做完即停。不接极性反转、环境分贝计、格式排列页。

---

## 每个工具提交前都要满足

照 `docs/new-tool-spec.md`，并且：

1. `src/data/tools.ts` 一条 `ToolDef`。FAQ 五类都有：隐私、音质、做不到什么、和兄弟页的差别、手机。
2. `src/pages/{slug}.astro` 三行包装。
3. `es pt id de ko ja zh fr ru ar` 各一份 `ToolCopy`。新编辑器文案键同时写进 `EditorText` 和 11 份 `editor` 段。`assertCatalogs()` 通过。改词典前重读。
4. `related` 三个 slug，至少两个兄弟页指回来。
5. `public/llms.txt` 加一行事实。
6. `scripts/pages-check.mjs` 加上英文路径。
7. 有一个会失败的检查。缓冲运算进 `scripts/{slug}-check.mjs` 并在 `package.json` 加 `check:*`。声像和变速进 `scripts/feature-check.mjs`。
8. 提交只含这一工具的文件。说明写为什么要这一页。

```bash
npm run build
npm run check:pages
npm run check:features
```

`seo-audit` 本地跑，HIGH 必须是 0。手机宽度上看英文页：控件能点、导出在屏幕下半。

## 明确不做

- 现场叠录、多轨循环站
- 声像跟着鼓点走、中侧处理
- HRTF 把头转到任意方位、Ambisonics
- 节拍器跟用户的歌曲对齐
- 把估计出的调性改写成另一个调
- 变速超过 0.75×–1.25×
- 新依赖（SoundTouch、Essentia）

---

## 1. 10-20 · `audio-looper`

用户把一段已有音频重复几遍，下载一个文件。裁一段出来用 `audio-trimmer`。接两条不同的歌用 `audio-joiner`。

重复次数 2…16，默认 4。接缝交叉淡化 0…0.1 秒，默认 0.01 秒。选区生效时只循环选区，否则循环整文件。导出时长 = 一遍时长 × 次数 − 重叠。超过 10 分钟就停并说明，不在浏览器里拼更长的文件。

`audio-trimmer`、`fade-audio`、`ringtone-maker` 的 FAQ 各补一句差别，其中至少两处 `related` 指回本页。

检查：1 秒正弦重复 4 次、淡化 0，时长 4 秒，第 3 秒处仍是正弦。淡化 0.05 秒时时长为 3.85 秒，接缝处样本连续、无满幅阶跃。

## 2. 10-21 · `auto-panner`

单声道或立体声按固定速度左右扫。深度 0…100%，默认 70%。速度 0.05…2 Hz，默认 0.2 Hz。0% 深度时图里不插入声像节点，导出与现在一致。

离线渲染用 `StereoPannerNode`，声像 = 深度 × sin(2π · 速度 · t)。立体声先按现有方式进总线，再扫主声像，不把两个声道拆开做不同的轨迹。

兄弟页：`echo`、`slowed-reverb`、`equalizer`。文案写明扫动不跟拍子。

检查：深度 100%、速度 0.25 Hz 的单声道导出，0.0 秒附近能量偏左，1.0 秒附近偏右。深度 0 时左右能量差低于峰值的 1%。

## 3. 10-22 · `3d-audio`

这一页是预设，不是第二套声像。固定：深度 100%，速度 0.1 Hz（约 10 秒转一圈），混响湿声用 `slowed-reverb` 已有的那条卷积尾音，湿声比例固定约 0.25。一个开关，没有第二组滑杆。

和 `auto-panner` 的差别写进两边 FAQ：要自己定速度和深度走自动声像；要「绕头一圈」的成品走这一页。和 `slowed-reverb` 的差别：那一页改速度和音高，这一页不改。

兄弟页：`auto-panner`、`slowed-reverb`、`echo`。

检查：打开效果导出后，左右能量随时间交换，且文件尾部比干声长（混响尾音还在）。效果关闭时尾部不长出、左右平衡保持。

## 4. 10-23 · `metronome`

新岛 `data-metronome`。BPM 40…240，默认 100。拍号 2/4、3/4、4/4、6/8，默认 4/4。第一拍加重。播放用 `AudioContext` 振荡器短促点击，不解码用户文件。

导出是可选的：生成 4、8 或 16 小节的点击 WAV/MP3，走现有编码器。页面写明这是节拍器，不是把点击叠进一首歌。叠进伴奏用 `multi-track-audio-editor`。

兄弟页：`voice-recorder`、`change-audio-speed`、`multi-track-audio-editor`。

检查：100 BPM、4/4、4 小节，点击数等于 16，相邻点击间隔 0.60 秒 ±10 ms，第 1、5、9、13 下比其余响。

## 5. 10-26 … 10-27 · `key-bpm-finder`

新岛 `data-key-bpm`。丢文件后显示两个数：BPM、主音加上大小调。旁边用一句话写置信度低的情况（自由节奏、说话、环境声、关系大小调会互换）。没有「改到这个调」的按钮。改音高走 `pitch-changer`。

BPM：起始强度的自相关，搜索 60…180，折半或折倍到这个区间。调性：色度能量对大调/小调轮廓取最大相关。静音文件显示「读不出」，不显示 0 BPM 或 C 大调。

`ponytail:` 轮廓系数写死。升级路径是换成更大的调性剖面或 Essentia，等这页有排名再做。

兄弟页：`pitch-changer`、`change-audio-speed`、`tempo-changer`（变速页 10-29 提交时把第三条 related 补上；10-27 先链 `audio-trimmer`）。

检查放 `scripts/key-bpm-check.mjs`：

- 120 BPM 的点击轨，读数 120 ±2。
- 全零返回读不出，不抛。
- A440 正弦：主音落在 A，或与 A 差五度的那一档；断言写成实现当天测到的窄集合，改了剖面就会失败。

## 6. 10-28 … 10-29 · `tempo-changer`

音高保持，时长改变。范围 0.75×…1.25×，步进 0.01，默认 1。做法：先按倍率重采样（时长和音高一起变），再用 `src/editor/pitch.ts` 把音高移回原调。1× 不跑声码器。

超出这个范围的请求不提供滑杆。密的和声仍会发金属声，文案沿用 `pitch.ts` 头上那句天花板。速度页 `change-audio-speed` 里「做不到变速保调」的 FAQ 改成指向本页，并写明本页的范围。`pitch-changer` 的 FAQ 写明：它改音高、时长不变；本页改时长、音高不动。

兄弟页：`change-audio-speed`、`pitch-changer`、`key-bpm-finder`。

检查：440 Hz、1 秒正弦，0.8× 导出后时长 1.25 秒 ±20 ms，过零率仍对应约 440 Hz（±3%）。1× 导出时长与输入一致，且样本与干声接近（不经过声码器）。
