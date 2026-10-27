# 产品事实底稿：freeaudioeditor.online

- 核对日期：2026-10-27
- 核对对象：仓库当前源码。不是线上页面的另一次抓取。
- 输入：用户设备上的文件，或本页麦克风。网页不从链接抓音频或视频。
- 输出：浏览器下载。没有账号，导出文件不写水印。
- 不做：见文末。规划、搜索量、竞品流量不在本稿。

句子若要留在页面上，必须能指回下面某一编号，或能力表的某一行。

## 全站

1. 音频在本机用 `AudioContext.decodeAudioData` 解码，用 `OfflineAudioContext` 或同类本地路径处理。没有上传接口。来源：`docs/architecture.md`，`src/editor/index.ts`。
2. 没有 Service Worker。第一次打开页面要有网。该页脚本到达之后，解码、编辑和 WAV 导出不再要网。MP3 编码器、M4R 编码器和转写模型要各自下过一次。来源：`docs/architecture.md`。
3. 默认文件选择器：`audio/*,video/mp4,.m4a,.opus`。某页收窄或加宽时，写在该能力行。来源：`src/components/editor/AudioEditor.astro`。
4. 单文件超过 300 MB 被拒绝。提示：`That file is over 300 MB — try a shorter or compressed file.` 来源：`src/editor/index.ts`，`src/i18n/en.ts` 的 `tooBig`。
5. 超过 1 小时仍会加载，并提示内存可能不够。这不是硬上限。来源：`src/editor/index.ts`，`hourWarning`。
6. 解码失败的提示是：`This file could not be decoded — it may be corrupted, or its codec is not supported by your browser.` 这句话不点名 AC3、DTS 或 ALAC。来源：`decodeFail`。
7. 未单独列出格式时，菜单是 MP3 64 / 96 / 128 / 192 / 320 kbps，以及 WAV。M4R 不在这份默认菜单里。来源：`src/editor/encoders.ts` 的 `EXPORT_FORMATS`，`AudioEditor.astro`。
8. WAV 是 16-bit PCM，保留声道数，样本夹到 −1…1。来源：`encodeWav`。
9. MP3 用页内 lamejs，只编码前两个声道，不把更多声道混成立体声。来源：`encodeMp3`。
10. 重编码的 MP3 或 WAV 不携带原标题、艺人、封面。标签页是例外，见能力表。来源：`src/editor/tags.ts` 与编码路径分离。
11. 批量：1 个文件单独下载；2 个及以上打成 zip，zip 内不再压缩。解不开的计入 `{n} skipped`。来源：`src/editor/index.ts`，`src/editor/split.ts`。
12. 音量滑条最低 10%。要静音或低于 10%，本站没有这一档。来源：`AudioEditor.astro` 的 `data-gain`。
13. 增益超过 100%，或低音 / 中频 / 高音向上抬时，另挂一个压缩器：threshold −2 dB，knee 3，ratio 20，attack 0.002 秒，release 0.15 秒。来源：`src/editor/processor.ts`。
14. 峰值归一化是整段一个增益，峰值乘到 0.98（约 −0.18 dB），增益不超过 4 倍（+12 dB）。峰值低于 1e-6 时不放大。它不改动态，也不以 LUFS 为目标。来源：`computeNormalizeGain`。
15. 变速 0.50×–2.00×，步进 0.05，用 `playbackRate`，音高跟着变。来源：`data-speed`，`processor.ts`。
16. 保调变速 0.75×–1.25×，步进 0.01。1.00× 不拉伸。来源：`src/editor/tempo-snap.ts`。
17. 变调 −12 到 +12 半音，整数，时长不变。相位声码器。源码注明：密集和声，以及大约超过 ±7 半音，会发金属声。这是算法上限，不是听感测试结论。来源：`src/editor/pitch.ts`。
18. 淡入、淡出各 0–5 秒，步进 0.1。长于成片时，按成片长度截断。来源：`data-fade-in`，`processor.ts`。
19. `/mcp` 是另一套本机 ffmpeg 工具，限制见文末。不要把那里的码率、时长、响度写进网页工具。

## 能力

| 能力 | 适用用户 | 任务 | 限制 | URL | 来源 |
|---|---|---|---|---|---|
| 裁一段 | 手里有一段只要其中一块的人 | 拖选区或填写起止时间（步进 0.01 秒），保留或删掉这一段 | 与 MP3 Cutter 同一套编辑器。选择器不限 MP3。默认导出 MP3 192 kbps。没有调节抽屉 | `/audio-trimmer` | `tools.ts` 该条 `editor` |
| 保留或删掉选区 | 要留下副歌，或挖掉开头、广告的人 | 同上：保留选区，或删除选区并接上 | 处理函数与 Audio Trimmer 相同。按钮文案是 Cut and download。选择器仍是默认音频，不是只收 MP3 | `/mp3-cutter` | 同上 |
| 一次做几项小改 | 要在同一页里裁、淡化、倒放、变速的人 | 保留或删除选区；淡入淡出；音量 10–200%；变速 0.50×–2.00× 且音高跟着变；混响 0–100%；倒放 | 抽屉里没有变调、均衡、压缩、回声。默认 MP3 320 kbps。Ctrl+Z / Cmd+Z 撤销。关掉标签页，这次编辑就没了 | `/mp3-editor` | `showAdjust`，`AudioEditor.astro` 抽屉 |
| 做成铃声长度 | 要一段能当铃声的短音频的人 | 选区最长 40 秒，可加淡入淡出，下载 M4R 或 MP3 / WAV | 超过 40 秒会被夹住，并提示 classic ringtone length。M4R 是 AAC-LC，最多 2 声道，192 kbps，仅当 `AudioEncoder` 支持 `mp4a.40.2`；不支持时菜单里没有 M4R。页面只下载，不把铃声装进手机。格式只有 m4r、mp3 320/192/128、wav | `/ringtone-maker` | `index.ts` 40 秒夹取，`encodeM4r` |
| 按顺序接成一条 | 要把几段排成一条的人 | 排序、删除某一段；相邻段交叉淡化 0–5 秒，步进 0.5，0 是直切；首段淡入、末段淡出各 0–5 秒 | 没有条数上限，上限是标签页内存。混格式先各自解码再接。这是先后播放，不是同时叠 | `/audio-joiner` | `JoinerEditor.astro`，`processor.ts` |
| 叠多条同时听 | 要人声和音乐同时响、各自音量和声像的人 | 最多 8 条。每条电平 0–150%，声像，静音，独奏，时间线上的起点、切入、切出 | 第 9 条被拒绝：`8 tracks is the limit on this page.` 解不开的那条提示 `{name} could not be decoded.`，其余留下。峰值超过 0.98 时整段被拉低，并提示拉低了多少 dB。声像居中时两侧都是 1，单声道不会因此掉 3 dB。重采样是线性插值 | `/multi-track-audio-editor` | `mixer-ui.ts` 的 `MAX_TRACKS`，`mixer.ts` |
| 换成 MP3 | 手里是 WAV，要一个 MP3 的人 | 批量按同一码率导出 | 选择器没有收成只接受 WAV。默认 320 kbps。菜单含 WAV 和全部 MP3 码率。元数据不带走 | `/wav-to-mp3` | 该条 `editor` |
| FLAC 换成 MP3 | 手里是 FLAC，要一个较小 MP3 的人 | 批量导出 | 选择器没有收成只接受 FLAC。菜单只有 MP3 320 / 192 / 128，默认 320。没有 WAV，没有 96 和 64 | `/flac-to-mp3` | `formats` |
| 解成 WAV | 下一步要无损编辑或要 WAV 的人 | 批量解成 WAV | 菜单只有 WAV。不能把 MP3 丢掉的样本找回来。选择器不限 MP3 | `/mp3-to-wav` | `formats: ['wav']` |
| 把文件变小 | 文件太大、要降码率的人 | 选一个更低的 MP3 码率 | 菜单只有 MP3 五档，默认 128。没有 WAV。已经是 MP3 再导出，是再损失一次。这页不改动态 | `/compress-audio` | `formats`，`encodeMp3` |
| 指定 MP3 码率 | 要 64、96、128、192 或 320 其中一档的人 | 批量重编码到所选档 | 与压缩页同一组码率，默认 192。提高数字不会把已经丢掉的细节找回来 | `/bitrate-converter` | `formats` |
| 倒放 | 要整段倒过来的人 | 倒放后导出 | 只有倒放。时长不变 | `/reverse-audio` | `quickControls: ['reverse']` |
| 变速且音高跟着变 | 要明显加快或放慢的人 | 0.50×–2.00×，步进 0.05 | 音高跟着 `playbackRate` 走。要音高不动，去 Tempo Changer，那边到不了 0.50× 和 2.00× | `/change-audio-speed` | `data-speed` |
| 把安静文件抬高 | 整段偏小、要一个更大增益的人 | 音量 10–400% | 10% 一档起，步进 5。超过 100% 会碰上 §13 的限制器。不能造出录音里没有的能量。选择器是默认音频 | `/increase-volume` | `maxGainPercent: 400` |
| 含视频音轨的增益 | 要连视频文件一起拉响的人 | 同样 10–400% | 与上一行同一套增益。选择器多了 webm、quicktime、mkv。画面不保留，只处理解得出的音轨 | `/volume-booster` | 该条 `accept` |
| 视频换成 MP3 | 手里是视频、只要声音的人 | 批量抽出音轨再编码 | 默认 MP3 320。选择器含视频容器。解不开就走 §6，不单独命名编码。分辨率不参与，因为视频帧不解码成画面 | `/mp4-to-mp3` | 该条 `editor` |
| 抽出音轨 | 要 MP3 或 WAV 音轨、默认不要 320 的人 | 同上 | 处理路径与 MP4 to MP3 相同，默认码率是 192，菜单仍是默认的 MP3 五档加 WAV | `/extract-audio` | 该条 `defaultFormat` |
| 录麦克风 | 要在浏览器里录一段话的人 | 录音，然后用下面的编辑器裁、再导出 | 只录麦克风，不录系统输出，不录通话。浏览器决定采集容器。权限被拒：`Microphone access was blocked.` 不支持：`Recording is not available in this browser.` 不导出就关页，录音丢 | `/voice-recorder` | `recUnavailable`，`micBlocked` |
| 转写成字 | 要文字或字幕、文件已在设备上的人 | 选语言或自动，选 Tiny 或 Base，下载 TXT 或 SRT | 单文件最长约 10 分钟，超过则拒绝并让用户先去裁。一次一个模型。两个及以上结果打成 zip。无 WebGPU 时默认 Tiny。模型是 `onnx-community/whisper-tiny` 与 `whisper-base`，从本页首次下载后由浏览器缓存。界面写 Tiny ≈ 40 MB、Base ≈ 80 MB；这次没有量下载字节。语言是页面上的 30 个代码，不是准确率承诺。失败：`Transcription failed. Try the Tiny model, a clearer file, or a recent browser.` | `/audio-to-text` | `transcribe.ts`，`transcribe-worker.ts`，`transcribe-langs.ts` |
| 峰值拉齐 | 要整段峰值靠近满幅、而不是改动态的人 | 打开归一化后导出。也可同时动手动音量，但归一化优先 | 见 §14。可批量，每个文件按自己的峰值算。默认 MP3 192 | `/normalize-audio` | `computeNormalizeGain` |
| 压动态 | 要让响和轻靠近一点的人 | 强度 0–100%。0 不经过压缩器 | 100% 时 threshold −36 dB，ratio 8:1，knee 6，attack 0.005 秒，release 0.12 秒。之后把峰值拉回源峰值，且不超过 0.98。不是 LUFS 响度匹配 | `/compressor` | `processor.ts` |
| 加回声 | 要听到隔一段时间回来的复制的人 | 延迟 0–0.8 秒，步进 0.01；反馈 0–0.55，起步 0.35 | 湿声固定 45%。延迟为 0 时文件不动。尾巴最长 4 秒，公式 `min(4, delay × (1 + feedback × 12))`。不会自激 | `/echo` | `processor.ts` |
| 波形削波 | 要故意削、听起来破的人 | 强度 0–100%，起步 40% | 0 不经过波形器。`k = 10^(强度 × 1.6) − 1`，样本变成 `tanh(k·x) / tanh(k)`。没有箱体、偏置或降位。时长不变 | `/audio-distorter` | `distort.ts` |
| 去掉长静音 | 讲话里有很长空隙的人 | 低于阈值且长于最短空隙的段落被切掉 | 阈值 −60 到 −20 dBFS，默认 −40。最短空隙 0.1–2 秒，步进 0.05，默认 0.35。每刀两端留 0.08 秒。整段都低于阈值，或切掉不足 0.02 秒时，导出原文件，并提示整段保留。安静的音乐也会被切。可批量 | `/silence-remover` | `silence.ts`，`index.ts` |
| 量 LUFS 并对到三档 | 要知道文件有多响，或要对到一档目标的人 | 读综合响度，可选 −16、−14、−23 LUFS | 非 48 kHz 先线性重采样到 48 kHz 再按 BS.1770-4 的 48 kHz 系数加权。数字静音显示 −∞，不当成错误。对目标时若采样峰值会超过 −1 dBFS，增益停在那里，结果可以到不了目标。不是房间表，也不是真峰值。默认导出 WAV | `/loudness-meter` | `loudness.ts`，`LoudnessEditor.astro` |
| 放慢并加房间 | 要慢放、音高跟着降、再加短房间的人 | 变速（音高跟着变）加混响 | 混响冲激响应 2.2 秒。湿声 0 时不加房间。滑到 100% 以上是加快，不是保调 | `/slowed-reverb` | `REVERB_SECONDS`，`quickControls: ['speed','reverb']` |
| 只抬高音 | 要高音更亮、不能衰减的人 | 3 kHz 高架，0 到 +15 dB，步进 1 | 不能往下切。0 不插滤波器 | `/treble-booster` | `data-quick-treble`，`processor.ts` |
| 三段均衡 | 要分别动低音、中频、高音的人 | 低架 150 Hz、峰形 1 kHz（Q 1）、高架 3 kHz，各 −15 到 +15 dB | 向上抬时会碰上 §13 的限制器。没有更多频段 | `/equalizer` | `quickControls: ['bass','mid','treble']` |
| 切掉高频 | 要闷一点、去掉高频的人 | 低通 300–20000 Hz，步进 100，起步 20000 | 高于或等于 19000 Hz 时不插入滤波器。不改音高，不改时长 | `/low-pass-filter` | `data-quick-lpf` |
| 切掉低频 | 要去掉隆隆声的人 | 高通 20–5000 Hz，步进 10，起步 20 | 低于或等于 25 Hz 时不插入滤波器 | `/high-pass-filter` | `data-quick-hpf` |
| 波形图 | 要一张振幅图、不要改音频的人 | 选样式、颜色、时间范围，下载 PNG | 预设尺寸按 2 倍像素导出。自定义边长在 100–8000，像素超过约 200 万时按 1 倍。画不出来：`Could not create the PNG. Try a smaller size.` PNG 不能播回成歌 | `/waveform-generator` | `visualizer.ts` 的 `PRESET_EXPORT_SCALE` |
| 频谱图 | 要看频率、不要改音频的人 | 选 FFT、线性或对数轴、上下 dB，下载 PNG | 预览最多 480 列，导出最多 3000 列。PNG 不能播回成歌 | `/spectrogram-generator` | `visualizer-ui.ts` |
| 把图或字写进 WAV | 要一个频谱里能看出形状的 WAV 的人 | 最多 32 个字符，或一张 PNG / JPG / WebP | 图先缩到不超过 360×140。输出是 44.1 kHz、16-bit、单声道 WAV，不是 MP3。读图失败：`Could not read that image. Try a PNG or JPG.` | `/image-to-audio` | `spectrogram-paint-ui.ts` |
| 只抬低音 | 要低音更重、不能衰减的人 | 150 Hz 低架，0 到 +15 dB | 只能放大文件里已经有的低频。不能往下切 | `/bass-booster` | `data-quick-bass` |
| 只做淡入淡出 | 要边缘不突然切断的人 | 两端各 0–5 秒 | 见 §18。不做交叉淡化多首歌，那是 Joiner | `/fade-audio` | `quickControls: ['fade']` |
| 只改变调 | 要音高变、时长不变的人 | −12 到 +12 半音 | 见 §17。不是保调变速 | `/pitch-changer` | `data-quick-pitch` |
| 变速且音高保持 | 要稍快或稍慢、调不动的人 | 0.75×–1.25×，步进 0.01 | 见 §16。更慢或更快只在变速页，那边音高会跟着走 | `/tempo-changer` | `tempo-snap.ts` |
| M4A 换成 MP3 | 手里是 M4A 或 AAC 的人 | 批量转 MP3 | 选择器是 `audio/mp4,audio/x-m4a,audio/aac,.m4a,.aac,.mp4`，所以也能选到 MP4。默认 320。浏览器解不开的 M4A（常见是 ALAC）走 §6，提示不点名 ALAC | `/m4a-to-mp3` | 该条 `accept` |
| OGG 换成 MP3 | 手里是 OGG 的人 | 批量转 MP3 | 选择器是 `audio/ogg,audio/vorbis,.ogg,.oga`。默认 320。某浏览器的标签页本身播不出这个文件时，这页也解不开 | `/ogg-to-mp3` | 该条 `accept` |
| Opus 换成 MP3 | 手里是 Opus 的人 | 批量转 MP3 | 选择器是 `audio/ogg,audio/opus,.opus,.ogg,.webm`。默认 192。同样：浏览器播不出就解不开 | `/opus-to-mp3` | 该条 `accept` |
| 改 MP3 标签 | 只要改歌名、艺人、封面，不想再编码的人 | 读现有标签，改完写回，或去掉全部元数据 | 只收 `audio/mpeg,.mp3`。音频帧原样复制，不解码。写入 ID3v2.3：标题、艺人、专辑、专辑艺人、年份、流派、音轨号、碟号、作曲、注释、封面。封面必须是 JPG 或 PNG。年份会解析成整数。读失败：`Could not read that file — please use an MP3.` 写失败：`Something went wrong while saving.` 无标签：`This file has no tags yet` | `/mp3-tag-editor` | `tags.ts`，`tgReadFail` |
| 重复几遍 | 要把同一段重复成更长文件的人 | 2–16 次，默认 4。接缝交叉淡化 0–0.1 秒，默认 0.01。可选只重复选区 | 导出最长 10 分钟，超过则不导出，提示 `That loop is longer than 10 minutes.` 音高和速度不动 | `/audio-looper` | `loop.ts` 的 `LOOP_MAX_SECONDS` |
| 左右来回 | 要声音在左右之间移动的人 | 深度 0–100%，起步 70%；速率 0.05–2 Hz，起步 0.2 Hz | 深度 0 时不插入声像，文件不动。不跟节拍。不是头外定位 | `/auto-panner` | `data-quick-pan-depth` |
| 固定绕一圈 | 要一个固定的环绕加短混响的人 | 一个开关 | 深度固定 100%，速率固定 0.1 Hz（约 10 秒一圈），混响发送固定 25%，房间与慢放页相同。关着时文件不动。不能改速率、深度或房间 | `/3d-audio` | `circle.ts` |
| 节拍器 | 要嘀嗒声、不一定有音频文件的人 | 40–240 BPM，起步 100。拍号 2/4、3/4、4/4、6/8。可导出 4、8 或 16 小节 | 6/8 是每小节 6 下，不是附点四分。不接收歌曲，也不把嘀嗒垫在歌下面。导出是 WAV 或 MP3 | `/metronome` | `metronome.ts` |
| 读 BPM 和调 | 想知道速度和大调或小调、不改文件的人 | 读完显示，没有导出 | 只读前 60 秒。BPM 在 60–180 里取整数；短于 2 秒没有 BPM。静音或稳态音显示 `Can't read`，不是 0 BPM，也不是 C 大调。调是固定的大调 / 小调轮廓，各 12 个权重，不是和弦谱 | `/key-bpm-finder` | `key-bpm.ts` |
| 切成等份 | 一个文件太长、要拆开传的人 | 2–16 等份，默认 2，打成 zip | 可先选区，只切选区。每份时长是选区除以份数。不是按静音或歌曲边界切 | `/split-mp3` | `split.ts` |
| 收成单声道 | 要一条声道的人 | 导出一个声道 | 每个样本是各声道的平均。本来就是单声道则原样复制 | `/stereo-to-mono` | `mono.ts` |
| 降位并采样保持 | 要粗糙、步进感的人 | 位深 1–16，起步 8；保持 1–32 个样本，起步 2 | 只做量化加采样保持。时长不变 | `/bitcrusher` | `bitcrush.ts` |
| 移到 432 Hz | 要把 A 从 440 附近移向 432、时长不变的人 | 固定移调后导出 | 移调量是 `12·log2(432/440)`，约 −0.32 半音。状态行写 0.32 semitones。用的是同一套相位声码器 | `/432-hz-converter` | `hz432.ts` |
| 收成 MIDI | 要音符、不要音频的人 | 下载 MIDI | 单文件最长约 3 分钟，模型来自本站 `/models/basic-pitch/model.json`，首次下载后浏览器保留，小于界面所说的 1 MB 这一档（这次没有量字节）。鼓、噪声、全曲经常得到空结果：`No notes.` 失败：`Could not read notes.` | `/audio-to-midi` | `midi-ui.ts`，`midi-infer.ts` |
| 按键放短音 | 直播、课、演示里要点一下就响的人 | 多个方块可重叠。键是 1–9、0，然后 Q W E R T Y U I O P。Esc 全停 | 内置 11 个合成音，44.1 kHz，峰值归一到 −1 dBFS：Air Horn、Boom、Sad Trombone、Rimshot、Buzzer、Fart、Applause、Crickets、Ding、Boing、Coin。自有文件超过 60 秒跳过：`Clips over 60 seconds are skipped`。单格可裁、改名、换色、导出 16-bit WAV。板文件是 JSON，WAV 在里面；没有音频的按钮跳过；导入的名字截到 24 字。也读带 `buttons` 和 `audioB64` 的 SoundTools 板。关页不保留，除非先导出。不向 Discord、Zoom、游戏的麦克风送声 | `/soundboard` | `synth-defaults.ts`，`soundboard-ui.ts`，`board-file.ts` |
| 跟着歌画并录成视频 | 要一条和歌曲等长的动画视频的人 | 播放时画 64 个频段；可录 | 边长 200–2160。预设含 16:9 与 9:16。实时录制：歌有多长就录多久。封装由浏览器在 WebM 或 MP4 里选。不能录画布时按钮让开，提示用屏幕录制，播放仍可用。失败：`Recording failed. Try a smaller video size.` | `/music-visualizer` | `music-visualizer.ts` |

## 输出边界

下游播放器、车机、手机铃声槽认不认这个文件，本站不检查，也不在导出前探测。

| 结果 | 长度或格式 | 失败时用户看到什么 |
|---|---|---|
| WAV | 16-bit PCM，声道数与处理结果一致 | 编码器加载失败时，提示改用 WAV：`Export failed — the encoder could not load (are you offline?). Try the WAV format instead.` |
| MP3 | 64 / 96 / 128 / 192 / 320 kbps 中的一档；最多两个声道 | 同上。页若拿掉某些档，以该能力行为准 |
| M4R | AAC-LC，最多两声道，192 kbps，扩展名 `.m4r` | 浏览器不支持时，菜单里没有这一项，而不是导出一个坏文件 |
| ZIP | 两份及以上的音频，或两份及以上的转写；内部不压缩 | 解不开的文件不进包，状态里有跳过个数 |
| PNG | 波形或频谱，不是音频 | `Could not create the PNG. Try a smaller size.` |
| TXT / SRT | 转写文本 | 超过约 10 分钟：`This file runs past 10 minutes...` 失败见转写行 |
| MIDI | 音符事件 | 超过约 3 分钟不转。空结果或失败见 MIDI 行 |
| 视频 | 可视化页，浏览器选 WebM 或 MP4 | 不能录画布，或录制失败，见可视化行 |
| 标签后的 MP3 | 音频字节与打开时相同，外加 ID3v2.3 | 读、写、封面类型的三句提示见标签行 |

选区终点至少要比起点晚 0.05 秒，否则：`End time must be at least 0.05s after the start time.`

## 不承诺

- 不承诺某个浏览器一定能解 MP3、AAC、FLAC、Vorbis、Opus、ALAC、AC3 或 DTS。门是 `decodeAudioData`。失败句不点名这些编码。
- 不承诺 320 kbps 和 WAV 听不出差别，也不承诺「大约几秒做完」。
- 不承诺排名、用户数、文件一定小于某个邮箱限制。码率只决定编码档，不保证对方接受。
- 不承诺下载的 M4R 会被手机设成铃声。页面只下载。
- 不承诺「大约一小时」是可以导出的上限。硬拒绝只有 300 MB，以及各能力行里写明的时长。
- 不承诺转写、调号、BPM、MIDI 的正确率。算法和空结果已写在对应行。
- 不承诺把有损压缩丢掉的样本恢复回来。
- 不承诺逐帧无损剪切 MP3。导出 MP3 会再编码一次。WAV 保留的是解码后的样本。
- 网页工具里没有人声分离，没有从链接抓取，没有 ffmpeg.wasm。

## 网页以外：`/mcp`

这是本机进程，不是上面任一页的同一套滑条。需要 Node.js 18 或更新、ffmpeg，以及能讲 MCP 的桌面客户端。手机浏览器开不了这个进程。它不从链接抓视频。聊天应用看得到文件路径。

已在页面上写明、且与网页不同的数字：变速 0.5×–2× 且音高保持；淡化每端 0–30 秒；响度是一次 loudnorm（−16 LUFS，−1.5 dBTP，LRA 11）；MP3、M4A、OGG 还有 256 kbps，默认 192；拼接 2–20 个文件，输出 44100 Hz 立体声。来源：`src/pages/mcp.astro`。这些数字不要写进网页工具的句子。
