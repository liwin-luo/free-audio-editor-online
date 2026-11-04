# 关键词重叠审计（keyword-overlap audit）

审计对象：FreeAudioEditor.online 工具页之间的搜索意图重叠。
方法：纯定性分析，来源为 `src/data/tools.ts`（下称 tools.ts，每个条目的 title/description/howTo/faq/related/editor 配置）、`src/pages/<slug>.astro` 的实际接线、以及 `src/editor/*.ts` 引擎模块源码。另对 4 个争议页面 curl 了线上 title 做核对（见 §3、§2）。
本审计不访问 GSC / 关键词量数据；所有搜索量为 UNVERIFIED，所有 MERGE / REPOSITION / REDIRECT 结论仅为 CANDIDATE，需人工 + GSC 数据确认。

## 0. 架构事实（所有组的公共背景）

- 全部 57 个工具页都是薄壳：`src/pages/<slug>.astro` 里 `getTool('<slug>')` 后渲染 `<ToolPage tool={tool} />`（例：src/pages/audio-trimmer.astro:1-7）。
- meta title/description 直接取自 tools.ts 的 `title`/`description` 字段（src/components/ToolPage.astro:70）。
- ToolPage 按 `tool.editor` 配置分发编辑器组件（src/components/ToolPage.astro:103-128）：`mixer` → MixerEditor、`multiple` → JoinerEditor、`loudness` → LoudnessEditor、`keyBpm` → KeyBpmEditor、`tapTempo` → TapTempoEditor、`metronome` → MetronomeEditor、`visualizer` → VisualizerEditor / MusicVisualizerEditor，其余全部落到同一个 AudioEditor（由 src/editor/index.ts，1790 行驱动）。
- 单文件处理页共享同一条渲染管线 src/editor/processor.ts：speed（:48、:173 playbackRate）、keepPitch 变速（:239-240）、pitch 半音移调（:219-222）、normalize 增益（:52）、手动 gain、bass lowshelf 150 Hz（:96）、treble highshelf 3 kHz（:101）、eq10 十段（:102-107）、hpf/lpf（:111-112）、compress（:113-118 + :196 matchPeak）、fade（:180-187）、reverb wet（:162）。
- `pitchShiftChannel`（相位声码器，src/editor/pitch.ts:55）同时服务 pitch-changer、tempo-changer（keepPitch 路径）、432-hz-converter（src/editor/hz432.ts:6 直接包装，偏移量 −0.32 半音）和 voice-changer 的 High/Deep/Ghost 预设（src/editor/index.ts:868-890）。

含义：**同引擎不代表同意图**；本审计按"意图重叠 + 引擎重合 + 副本重复"三个维度分开评级。

---

## 1. 逐组分析

### 组 1：audio-trimmer vs mp3-cutter vs mp3-editor vs ringtone-maker vs split-mp3（5 方剪切家族）

| 页面 | en title（tools.ts 行号） | 引擎接线 |
|---|---|---|
| audio-trimmer | "Audio Trimmer — Trim a Podcast or Voice Memo"（tools.ts:173） | AudioEditor + `trimLayout`（tools.ts:294-300；index.ts:696、:1050） |
| mp3-cutter | "MP3 Cutter — Keep or Delete a Section, No Upload"（tools.ts:309） | 同上 + `trimFades` + 视频 accept（tools.ts:431-439） |
| mp3-editor | "MP3 Editor — Cut, Fade, and Change Speed Online"（tools.ts:448） | AudioEditor + `showAdjust: true`（tools.ts:555-559），即完整 Adjust 面板 |
| ringtone-maker | "Ringtone Maker — Make Ringtones from Songs (iPhone M4R)"（tools.ts:568） | AudioEditor + `ringtone: true`（40 s 截断在 index.ts:1008-1010）+ formats 含 m4r（tools.ts:689） |
| split-mp3 | "Split MP3 into Multiple Files — 2 to 16 Parts"（tools.ts:6127） | AudioEditor + `split: true`（tools.ts:6233；src/editor/split.ts:3-11 等分 + zip） |

- 引擎是否相同：trimmer 与 cutter **完全同一编辑器**，站点自己两次承认——audio-trimmer 正文 "This page and the MP3 cutter are the same editor"（tools.ts:269），mp3-cutter 正文 "The audio trimmer is the same editor"（tools.ts:408）。mp3-editor FAQ 也称两者是 "that same editor"（tools.ts:541-542）。功能差异仅：cutter 多 trimFades 滑杆与视频文件 accept（tools.ts:435-436）。
- 意图重叠度：
  - trimmer vs cutter：**高**。搜 "trim audio" 与 "cut mp3" 的用户任务（保留/删除一段）相同，任一页都能满足。差异化是纯文案定位（podcast/voice memo vs 歌曲/chorus）。
  - cutter vs ringtone-maker：**中**。40 s 上限 + M4R/AAC 输出是可感知的真差异（tools.ts:601、:629），且 "ringtone maker" 是独立强查询词。
  - cutter vs split-mp3：**低-中**。输出 1 个文件 vs 2-16 个文件的 zip（tools.ts:6159），FAQ 明确互指区分（tools.ts:6194-6196）。
  - mp3-editor vs 其余：**中**。伞页意图（"一个标签页里做多件小事"），与单任务页互为上下游，正文互相导流（tools.ts:540-544）。
- 差异化是否真实：trimmer/cutter 之间**只是关键词替换**（承认同引擎）；ringtone（cap+M4R）与 split（多文件 zip）有真实参数/输出差异。
- 建议（CANDIDATE）：audio-trimmer / mp3-cutter **KEEP**（关键词空间不同，文案已互相声明同引擎，合并风险大于收益）；ringtone-maker / split-mp3 **KEEP**；mp3-editor **OPTIMIZE**（伞页，注意与 cutter 的 title 都含 cut 语义）。

### 组 2：increase-volume vs volume-booster vs loudness-meter vs normalize-audio

| 页面 | en title | 引擎接线 |
|---|---|---|
| increase-volume | "Increase MP3 Volume — Quiet MP3 Files Online Free"（tools.ts:1833） | AudioEditor + `quickControls: ['gain']` maxGain 400（tools.ts:1944-1952） |
| volume-booster | "Audio Volume Booster — Make Audio Louder Online Free"（tools.ts:2467） | 同一 gain 路径 + 视频 accept（tools.ts:2591-2600） |
| loudness-meter | "Loudness Meter — Check Audio LUFS Online Free"（tools.ts:3359） | LoudnessEditor（ToolPage.astro:123-124）→ src/editor/loudness.ts（integratedLufs :119、matchLufsGain :152） |
| normalize-audio | "Audio Normalizer — Normalize MP3 Volume Online Free"（tools.ts:2609） | AudioEditor + `batch` + normalize（tools.ts:2720-2727）→ computeNormalizeGain（src/editor/edit-state.ts:105-123，0.98 峰值、增益上限 4×） |

- 引擎是否相同：increase-volume 与 volume-booster 走**同一条 gain 渲染路径与相同 limiter**（两页 FAQ 重复同一组参数 threshold −2 dB / knee 3 / ratio 20：tools.ts:1893 与 :2527），editor 配置唯一差异是 `accept` 是否含视频（tools.ts:1944-1952 vs :2591-2600）。loudness-meter 与 normalize 是不同机制（LUFS 测量匹配 vs 单次峰值增益），但都输出"更响的文件"。
- 意图重叠度：
  - increase-volume vs volume-booster：**高**。"make audio louder" / "increase volume" / "volume booster" 查询者任务完全一致，两页可互相完全替代。正文各自承认对方存在（tools.ts:1921 "The same kind of gain … is the volume booster"）。
  - normalize vs booster：**中**。机制差异真实（measured vs guessed，tools.ts:2669-2671），FAQ/sections 互指区分做得很细（tools.ts:1931、:2560、:2578）。
  - loudness-meter vs normalize：**中**。LUFS 目标 vs 峰值 0.98，页面互指区分明确（tools.ts:2677-2678、:3416-3417）。
- 差异化是否真实：booster 对内部**只是关键词替换**（MP3 vs audio/video，前者实际上也能吃视频，见 tools.ts:1905）；meter/normalize 与 booster 之间差异化真实。
- 建议（CANDIDATE）：increase-volume + volume-booster **MERGE-candidate**（需 GSC 确认哪页持有关键词）；loudness-meter、normalize-audio **KEEP**。

### 组 3：extract-audio vs mp4-to-mp3

- en title：mp4-to-mp3 "MP4 to MP3 — Convert Video to MP3 Online Free"（tools.ts:1961）；extract-audio "Audio Extractor — Extract Audio from Video Online Free"（tools.ts:2116）。
- 引擎接线：两者都是 `converter: true + batch: true` + 相同视频 accept（tools.ts:2100-2107 vs :2231-2238），走同一条 decode→encode 路径。
- 站内自证：extract-audio FAQ 原文 "Same decode path as MP4 to MP3. This page starts at 192 kbps. That page starts at 320 kbps. Both menus include WAV."（tools.ts:2172-2174）。
- 线上 title 已 curl 核对，与 tools.ts 一致（2026-11-04）。
- 意图重叠度：**高**。"mp4 to mp3" 与 "extract audio from video" 是同一任务的两种措辞，输出同为 MP3/WAV 音轨文件。唯一产品差异是默认导出档位 mp3-320 vs mp3-192（tools.ts:2101 vs :2232）。
- 差异化是否真实：**基本只是关键词替换**（默认 bitrate 一档之差 + 文案框架）。
- 建议（CANDIDATE）：**MERGE-candidate**——由 GSC 判定保留哪个 slug，另一页 301；或在保留页上把两套关键词合并进一个 title/H1。（最终动作需人工确认。）

### 组 4：normalize-audio vs compressor

- en title：normalize "Audio Normalizer — Normalize MP3 Volume Online Free"（tools.ts:2609）；compressor "Level Compressor — Even Out Volume Online Free"（tools.ts:2736）。
- 引擎接线：normalize → computeNormalizeGain（edit-state.ts:105，单次增益到 0.98，cap 4×）；compressor → `quickControls: ['compress']`（tools.ts:2843-2849）→ DynamicsCompressor + matchPeak（processor.ts:113-118、:196）。
- 意图重叠度：**中**。外行查询 "compress audio" 可能指文件大小（站内由 compress-audio 承接，compressor 页 description 明写 "Not a file-size shrink"，tools.ts:2738），也可能指动态压平；normalize 查询者想要"一键到标准响度"。两者输出都可"变响"，但机制与结果可感知不同。
- 差异化是否真实：**真实**。压缩改变响/静间距（tools.ts:2803-2804、:2837），normalize 明确声明不做（tools.ts:2673-2674、:2714）。
- 建议（CANDIDATE）：两者 **KEEP**。

### 组 5：转换器家族（wav/flac/m4a/ogg/opus→mp3、mp3→wav、bitrate-converter、compress-audio）

| 页面 | en title（tools.ts） | editor 关键配置 |
|---|---|---|
| wav-to-mp3 | "Convert WAV to MP3 Online Free — 320 kbps"（:943） | converter+batch，默认 mp3-320，全档菜单（:1065-1071） |
| flac-to-mp3 | "FLAC to MP3 Converter — Convert FLAC Files Online Free"（:1080） | converter+batch，formats 仅 320/192/128（:1188-1195） |
| mp3-to-wav | "MP3 to WAV Converter — Convert MP3 to WAV Online Free"（:1204） | converter+batch，formats 仅 wav（:1312-1319） |
| compress-audio | "Compress Audio — Reduce MP3 & WAV File Size Online"（:1328） | converter+batch，默认 mp3-128，5 档（:1452-1459） |
| bitrate-converter | "Bitrate Converter — MP3 at 64 to 320 kbps"（:1468） | converter+batch，默认 mp3-192，同 5 档（:1576-1583） |
| m4a-to-mp3 | "M4A to MP3 Converter — Convert M4A & AAC Online Free"（:4959） | converter+batch，accept 限 m4a/aac/mp4（:5063-5070） |
| ogg-to-mp3 | "OGG to MP3 Converter — Vorbis & Opus in OGG Online Free"（:5079） | converter+batch，accept 限 ogg（:5183-5190） |
| opus-to-mp3 | "Opus to MP3 Converter — WhatsApp Voice Notes to MP3"（:5199） | converter+batch，accept opus/ogg/webm（:5303-5310） |

- 引擎是否相同：**全部同一条 converter 引擎路径**（decode → MP3/WAV encode，同一 batch zip 机制）。bitrate-converter FAQ 自证 "Same encoder, different job … compress audio … starts at 128 kbps. WAV to MP3 … starts at 320 kbps"（tools.ts:1533）。
- 意图重叠度：
  - X-to-mp3 各格式页之间：**中**（任务同构，但每个查询词被唯一页面精确命中；用户带着自己的格式来，一般不会中途换页）。
  - compress-audio vs bitrate-converter：**高**。同 encoder、同 5 档菜单（tools.ts:1458 vs :1582），唯一差异是默认档 128 vs 192 与文案框架（shrink vs set-a-rate）。搜 "compress audio" 与 "change bitrate" 的用户任务高度重叠（都是"重编码到某个 MP3 档位"）。
  - mp3-to-wav 与其余：**低**（方向相反，意图是编辑/交接 PCM，tools.ts:1260-1266）。
- 差异化是否真实：格式页之间是**真实差异化**（accept 限制 + 针对格式的 FAQ：iPhone 语音备忘 :4994、WhatsApp 语音条 :5234、游戏 ripping :5114）；compress-audio vs bitrate-converter **接近关键词替换**。
- 建议（CANDIDATE）：compress-audio + bitrate-converter **MERGE-candidate**（GSC 决定谁保留）；五个 X-to-mp3 与 mp3-to-wav **KEEP**。

### 组 6：change-audio-speed vs tempo-changer vs slowed-reverb

| 页面 | en title（tools.ts） | 引擎接线 |
|---|---|---|
| change-audio-speed | "Change Audio Speed Online — Speed Up or Slow Down Audio"（:1710） | `quickControls: ['speed']` 0.5×-2×，pitch 跟随（:1817-1824；processor.ts:48、:173） |
| tempo-changer | "Tempo Changer — Keep the Pitch Online Free"（:4840） | `quickControls: ['tempo']` 0.75×-1.25× → index.ts:471-474（snapTempo + keepPitch）→ processor.ts:239-240（先 resample 再 pitch 回移） |
| slowed-reverb | "Slowed Reverb Maker — Make Slowed + Reverb Songs Online"（:3474） | `quickControls: ['speed','reverb']`（:3591-3597），speed 0.50-2.00 + 2.2 s 合成房间 |

- 引擎是否相同：同一条 speed 渲染路径；tempo 多一步 pitch-shift 回移；slowed-reverb = speed 控制 + reverb wet（processor.ts:162）。change-audio-speed 正文承认 "The slowed reverb page is this same speed control plus a 2.2 second reverb"（tools.ts:1811）。
- 意图重叠度：
  - speed vs slowed-reverb：**中-高**。把 reverb 设为 0 时 slowed 页是 speed 页在 0.5-2× 区间的**超集**（slowed FAQ 甚至写明 nightcore 也在这页做，tools.ts:3534-3536）。但 "slowed reverb" 是一个独立的趋势查询词（TikTok 风格），搜索者想要的是成品效果而非参数。
  - speed vs tempo-changer：**中**。keep-pitch 是用户可感知的真差异，参数范围不重叠（0.75-1.25 vs 0.5-2），FAQ 互指清晰（tools.ts:4903-4908）。
- 差异化是否真实：tempo（pitch 保持 + 细步进 0.01）真实；slowed-reverb 的"效果包"定位真实但机制是 speed 页子集+reverb。
- 建议（CANDIDATE）：三者 **KEEP**；slowed-reverb **OPTIMIZE**（确保其 FAQ/H1 不蚕食 "slow down audio" 通用词——目前正文已在互相导流）。

### 组 7：pitch-changer vs voice-changer vs 432-hz-converter

- en title：pitch-changer "Pitch Changer — Change Audio Pitch without Changing Speed"（tools.ts:4713）；voice-changer "Voice Changer — Deep, High, Robot and Radio Presets"（tools.ts:6490）；432-hz-converter "432 Hz Converter — Same Length, 0.32 Down"（tools.ts:6737）。
- 引擎是否相同：**三者最终都调用 pitch.ts:55 pitchShiftChannel**。432 页是它的硬编码包装（hz432.ts:4-7，−0.3177 半音）；voice-changer 的 High/Deep/Ghost 预设是 pitch ±4/−2 + 滤波/crush/reverb 的组合（index.ts:868-890），Robot/Radio 再走 hpf/lpf/distort/crush。
- 意图重叠度：**低-中**。搜 "voice changer" 的是娱乐/变声用户（页面明确定位 preset 一键、不可微调，tools.ts:6570-6572）；搜 "pitch changer" 的是移调/伴奏升降 key 的音乐用户；"432 hz" 是独立小众信仰/DJ 查询空间。三页 FAQ 均互相区分（tools.ts:6558-6560、:6830-6833）。
- 差异化是否真实：**真实**（自由滑杆 vs 固定预设组合 vs 固定 −0.32；输出用例不同）。
- 建议（CANDIDATE）：三者 **KEEP**（432 页是典型长尾精确匹配页）。

### 组 8：silence-remover vs noise-remover

- en title：silence "Remove Silence from Audio — Cut Dead Air Online Free"（tools.ts:3100）；noise "Noise Remover — Strip Background Hiss from Voice Online"（tools.ts:3224）。
- 引擎是否相同：**完全不同**。silence → measureSilenceFrames/analyzeSilence（src/editor/silence.ts:47、:65，按阈值剪时间轴）；noise → RNNoise wasm 降噪（src/editor/denoise-browser.ts:39，150 KB 模型，频段增益）。
- 意图重叠度：**低**。查询词不同（cut silence/dead air vs remove background noise/hiss），任务不同（剪掉停顿 vs 压低底噪）。两页 FAQ 给出明确区分与先后顺序（"remove the noise first, then cut the dead air"，tools.ts:3292-3294、:3336-3340）。
- 差异化是否真实：**真实**（机制、参数、输出都不同）。
- 建议（CANDIDATE）：两者 **KEEP**。

### 组 9：audio-joiner vs multi-track-audio-editor

- en title：joiner "Audio Joiner — Merge Songs in Order, with Crossfade"（tools.ts:699）；multi-track "Multi-Track Audio Editor — Mix Files Online Free"（tools.ts:823）。
- 引擎是否相同：**不同**。joiner → JoinerEditor（ToolPage.astro:127-128）→ 顺序 merge + equal-power crossfade（processor.ts:327-339、src/editor/joiner.ts:291）；multi-track → MixerEditor → 8 轨并行 sum，level/pan/mute/solo（src/editor/mixer.ts:61、:143）。
- 意图重叠度：**低-中**。"merge/join audio files"（串成一条）vs "mix tracks"（同时叠放）语义可分，但中文/口语查询 "合并音频" 可能两头猜。两页 FAQ 互指区分（tools.ts:890-892、:925）。
- 差异化是否真实：**真实**（串行 vs 并行，crossfade vs 每轨增益/声像）。
- 建议（CANDIDATE）：两者 **KEEP**。

### 组 10：key-bpm-finder vs tap-tempo vs metronome

- en title：key-bpm "Key and BPM Finder — Read a File Online Free"（tools.ts:6016）；tap-tempo "Tap Tempo — Find a Song BPM by Tapping"（tools.ts:5908）；metronome "Metronome — Click Track Online Free"（tools.ts:5791）。
- 引擎是否相同：**不同**。key-bpm → readKeyBpm（src/editor/key-bpm.ts:212，读文件 onset+调性 profile）；tap-tempo → bpmFromTaps（src/editor/tap-tempo.ts:8，无文件）；metronome → clickTrack（src/editor/metronome.ts:34，生成点击轨 40-240 BPM）。
- 意图重叠度：**低**。读 BPM（要文件）vs 打拍测速（现场/无文件）vs 练习节拍器（要声音）。tap-tempo FAQ 明确区分两者（tools.ts:5966-5968）。
- 差异化是否真实：**真实**（输入、输出、用例都不同）。
- 建议（CANDIDATE）：三者 **KEEP**。

### 组 11：EQ 家族（equalizer、bass-booster、treble-booster、low-pass-filter、high-pass-filter、fade-audio）

| 页面 | en title（tools.ts） | 引擎接线（processor.ts） |
|---|---|---|
| equalizer | "Audio Equalizer — 10-Band EQ Online Free"（:3728） | eq10 十段 peaking ±15 dB（:102-107） |
| bass-booster | "Bass Booster — Add Deep Bass to Music Online Free"（:4454） | lowshelf 150 Hz，0 到 +15 dB，不能减（:96；tools.ts:4486） |
| treble-booster | "Treble Booster — Make Audio Clearer Online Free"（:3606） | highshelf 3 kHz，0 到 +15 dB，不能减（:101；tools.ts:3638） |
| low-pass-filter | "Low Pass Filter — Cut High Frequencies Online Free"（:3850） | lowpass 300 Hz-20 kHz 扫截止（:111-112） |
| high-pass-filter | "High Pass Filter — Remove Wind, Rumble & Hum Online"（:3972） | highpass 20 Hz-5 kHz 扫截止（:111-112） |
| fade-audio | "Fade Out Music — Audio Fade In / Fade Out Online Free"（:4588） | fadeIn/fadeOut 线性 ramp 0-5 s（:180-187） |

- 引擎是否相同：**同一 AudioEditor、同一条渲染链**，每页只暴露一个 quickControl。equalizer 是 bass/treble booster 的**功能超集**（equalizer 正文自认 booster 是 "the shorter pages"，tools.ts:3828-3830）。
- 意图重叠度：
  - equalizer vs bass/treble-booster：**中**。"bass booster" 是高频独立查询词，搜索者要一键低频增强， booster 页参数更简单（boost-only）；任务重叠但满足路径不同。
  - bass vs treble：**低**（频谱两端，相反问题，互指 FAQ：tools.ts:3673-3675）。
  - LPF vs HPF：**低**（方向相反；两页 FAQ 互指，tools.ts:3917-3919、:4039-4041）。LPF 正文与 noise-remover 的边界也做了声明（tools.ts:3909-3911）。
  - fade-audio vs 其余：**低**（时间维度 envelope，与频谱/音量完全不同轴）。
- 差异化是否真实：**真实**（各页参数轴不同：增益 shelf、截止扫描、时间 envelope），但 bass/treble booster 与 equalizer 在能力上是包含关系。
- 建议（CANDIDATE）：全部 **KEEP**；equalizer **OPTIMIZE**（title/H1 可再强调"能做 booster 做不到的 cut"，承接 "eq cut mud" 类意图）。

### 组 12：waveform-generator vs spectrogram-generator vs music-visualizer

- en title：waveform "Audio Waveform Generator — Waveform Image Online Free"（tools.ts:4094）；spectrogram "Spectrogram Generator — Turn Audio into a Spectrogram PNG"（tools.ts:4214）；music-visualizer "Music Visualizer — Animated Spectrum Video from Any Song"（tools.ts:7055）。
- 引擎是否相同：waveform 与 spectrogram 共用同一个 VisualizerEditor 壳（`visualizer: 'waveform' | 'spectrogram'`，ToolPage.astro:107-108；分支在 VisualizerEditor.astro:20 `isSpec`），但绘制路径不同：renderWaveformImage（src/editor/visualizer.ts:40，振幅峰值）vs FFT 频谱（src/editor/spectrogram.ts:186 paintSpec）。music-visualizer 是独立 MusicVisualizerEditor → drawLiveFrame + canvas 录制（src/editor/music-visualizer.ts:88、:231，`visualizer: 'live'`，tools.ts:7142）。
- 意图重叠度：**低-中**。输出介质完全不同（静态振幅 PNG / 静态频谱 PNG / 动态频谱视频），三页 FAQ 互指区分（tools.ts:4161-4163、:4281-4283、:7100-7102）。"waveform generator"（做封面图）与 "spectrogram"（分析/彩蛋图）人群不同，但外行可能混用两词。
- 差异化是否真实：**真实**（时域 vs 频域 vs 动态视频）。
- 建议（CANDIDATE）：三者 **KEEP**。

### 组 13：stereo-to-mono（及其他 mono 相关）

- en title："Stereo to Mono Converter — One Averaged Channel"（tools.ts:6243）。
- 引擎接线：AudioEditor + `mono: true`（tools.ts:6344-6351）→ monoAudioBuffer → averageToMono（src/editor/mono.ts:2，(L+R)/2 逐样本平均；index.ts:901）。
- 意图重叠度：**低**。站内没有第二个 mono 输出页（auto-panner/3d-audio 是声像运动，不改变声道数；joiner/mixer 也不输出单声道）。与 converter 家族共享外壳但意图轴不同（声道数 vs 编码格式）。
- 差异化是否真实：**真实**（站内唯一的"输出单声道文件"页）。
- 建议（CANDIDATE）：**KEEP**。

### 组 14：add-reverb vs slowed-reverb

- en title：add-reverb "Add Reverb to Audio — Room Sound Online, Free"（tools.ts:6360）；slowed-reverb 见组 6。
- 引擎是否相同：同一 reverb wet 实现（processor.ts:162；2.2 s 合成房间，tools.ts:6421）。add-reverb 只暴露 wet（tools.ts:6476-6481）；slowed-reverb 暴露 speed + 同一 wet（tools.ts:3596）。add-reverb FAQ 明说 slowed 页是 "the third stop when you want the slowdown bundled in"（tools.ts:6428-6430）。
- 意图重叠度：**中**。reverb 维度相同；slowed 页多速度维度且绑定趋势查询词。搜 "add reverb" 的制作类用户不会被 slowed 页满足（多了一个必须忽略的速度控制），反向亦然。
- 差异化是否真实：**基本真实**（单效果 vs 组合效果），但 slowed-reverb 在 wet=1、speed=1 时退化为 add-reverb。
- 建议（CANDIDATE）：两者 **KEEP**（查询词空间不同：通用制作 vs 趋势音效）。

### 附：审计中发现的其他候选组（未在任务清单中）

- **echo vs add-reverb**：离散回声 vs 密集反射，机制不同（tools.ts:6428-6430 区分明确），重叠低，KEEP。
- **mp3-editor 作为伞页**：title 含 "Cut"（tools.ts:448），与 mp3-cutter 在 "mp3 editor/cutter" 词面上有中等碰撞；它是唯一 `showAdjust: true` 的完整编辑页（tools.ts:557），差异化真实，OPTIMIZE。
- **audio-looper**：与 trimmer 共用 waveform 选择 UI，但输出是重复拼接（tools.ts:5441 "Audio Looper — Free Online MP3 Extender"），与 "extend audio" 意图匹配，重叠低，KEEP。

---

## 2. 总结表：全部配对重叠度

| # | 配对（组） | 引擎重合 | 意图重叠 | 副本重复 | 建议（CANDIDATE） |
|---|---|---|---|---|---|
| 1 | increase-volume vs volume-booster（组2） | 相同（gain 路径 + 同 limiter） | 高 | 高 | MERGE-candidate |
| 2 | mp4-to-mp3 vs extract-audio（组3） | 相同（converter 路径） | 高 | 高 | MERGE-candidate |
| 3 | compress-audio vs bitrate-converter（组5） | 相同（同 encoder 同 5 档） | 高 | 高 | MERGE-candidate |
| 4 | audio-trimmer vs mp3-cutter（组1） | 相同（同编辑器，自认） | 高 | 中 | KEEP（文案差异化已做） |
| 5 | change-audio-speed vs slowed-reverb（组6） | 相同 speed 路径，slowed 为超集 | 中-高 | 中 | KEEP / slowed OPTIMIZE |
| 6 | equalizer vs bass-booster / treble-booster（组11） | 同链，booster 是子集 | 中 | 中 | KEEP / equalizer OPTIMIZE |
| 7 | normalize-audio vs volume-booster（组2/4） | 不同机制（measured gain vs 滑杆 gain） | 中 | 低 | KEEP |
| 8 | normalize-audio vs compressor（组4） | 不同（单次增益 vs 压缩+峰值还原） | 中 | 低 | KEEP |
| 9 | loudness-meter vs normalize-audio（组2） | 不同（LUFS 匹配 vs 峰值归一） | 中 | 低 | KEEP |
| 10 | add-reverb vs slowed-reverb（组14） | 同 reverb 实现，多速度轴 | 中 | 低 | KEEP |
| 11 | mp3-cutter vs ringtone-maker（组1） | 同编辑器 + 40 s cap + M4R | 中 | 中 | KEEP |
| 12 | mp3-editor vs cutter/trimmer（组1） | 同编辑器 + 完整 Adjust | 中 | 中 | OPTIMIZE |
| 13 | change-audio-speed vs tempo-changer（组6） | 同链 + keepPitch 分支 | 中 | 低 | KEEP |
| 14 | pitch-changer vs voice-changer（组7） | 同 pitchShiftChannel，预设组合 | 低-中 | 低 | KEEP |
| 15 | wav/flac/m4a/ogg/opus→mp3 两两之间（组5） | 相同 converter 路径 | 中（任务同构、词不同） | 中（模板化） | KEEP |
| 16 | audio-joiner vs multi-track（组9） | 不同（串行 vs 并行） | 低-中 | 低 | KEEP |
| 17 | waveform vs spectrogram vs music-visualizer（组12） | 共壳不同绘制路径 | 低-中 | 低 | KEEP |
| 18 | cutter vs split-mp3（组1） | 同编辑器 + split 分支 | 低-中 | 低 | KEEP |
| 19 | silence-remover vs noise-remover（组8） | 完全不同 | 低 | 低 | KEEP |
| 20 | pitch-changer vs 432-hz-converter（组7） | 同 pitchShiftChannel（固定 −0.32） | 低 | 低 | KEEP |
| 21 | bass-booster vs treble-booster（组11） | 同链镜像 | 低 | 低 | KEEP |
| 22 | low-pass vs high-pass（组11） | 同链镜像 | 低 | 低 | KEEP |
| 23 | key-bpm vs tap-tempo vs metronome（组10） | 完全不同 | 低 | 低 | KEEP |
| 24 | stereo-to-mono vs 其他 mono（组13） | 唯一 mono 输出页 | 低 | 低 | KEEP |
| 25 | mp3-to-wav vs X-to-mp3（组5） | 同 converter 路径，方向相反 | 低 | 中 | KEEP |

## 3. Top 重叠风险（按风险排序）

1. **increase-volume ↔ volume-booster**：同引擎（同 gain 渲染路径与相同 limiter 参数，tools.ts:1893 vs :2527），editor 配置唯一差异是 accept 一行（tools.ts:1944-1952 vs :2591-2600）；两页 FAQ/sections 大面积同义（"boost、limiter、400%"）。这是全站最接近"同引擎 + 近同副本"的对。线上 title 已核对不同（"Increase MP3 Volume…" vs "Audio Volume Booster…"）。
2. **mp4-to-mp3 ↔ extract-audio**：converter 同路径，站点自证 "Same decode path"（tools.ts:2173），唯一功能差异 defaultFormat mp3-320 vs mp3-192（tools.ts:2101 vs :2232）。线上 title 已核对。
3. **compress-audio ↔ bitrate-converter**：同 encoder、同 5 档 formats（tools.ts:1458 vs :1582），只差默认档 128 vs 192；bitrate 页 FAQ 自证 "Same encoder, different job"（tools.ts:1533）。
4. **audio-trimmer ↔ mp3-cutter**：同一编辑器（tools.ts:269、:408 双向承认），但文案差异化（podcast vs 歌曲）是全站做得最自觉的一对；风险在 title 词面（trim vs cut）本身高度同义。
5. **change-audio-speed ↔ slowed-reverb**：后者是前者的功能超集（reverb=0 时），仅靠"趋势效果 vs 参数工具"定位区分。
6. **equalizer ↔ bass/treble-booster**：能力包含关系，靠"一键单端 vs 十段可 cut"区分。

## 4. 数据缺口声明（UNVERIFIED）

- 本审计**没有** GSC（Google Search Console）查询/展示/点击数据，**没有**任何关键词搜索量、点击率或排名数据；全部搜索意图判断为定性推断，搜索量数字一律未引用（UNVERIFIED）。
- 因此上表所有 **MERGE-candidate / REPOSITION / REDIRECT 判断仅是候选**：哪一页应保留、哪一页应 301，必须以 GSC 中各 slug 的 query-impression-CTR 数据 + 人工确认为准。外部反向链接、非 Google 渠道流量、i18n（/de、/ja 等多语言页）的对应表现同样未在本审计范围内验证。
- 线上 title 核对仅覆盖 4 个页面（mp4-to-mp3、extract-audio、increase-volume、volume-booster、mp3-cutter、audio-trimmer，curl 于 2026-11-04），其余页面的生产 title/description 假定与 tools.ts 一致（ToolPage.astro:70 的映射关系已在源码中验证）。
