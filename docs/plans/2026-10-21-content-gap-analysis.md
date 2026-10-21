# 内容缺口分析 — 文章结构类型 × 工具覆盖

日期：2026-10-21。依据 [内容类型](../content-types.md)、[内容路线图](2026-10-21-content-tool-page-roadmap.md)。盘点当天完成指南修复（首段链、§8、persona 回填）后的存量。Semrush 数据到位后按 §5 更新优先级。

## 1. 结构类型缺口

| 结构 | 现有 | 路线图目标 | 缺口判定 |
|---|---|---|---|
| How-to | 16（+1 混形） | 31–90 天再发 20 篇 | 总量够但**集中**：转换 5 篇 + 剪辑 8 篇；effects/record 两类近乎空白 |
| Alternatives / VS | 2（audacity、normalize-vs） | 再发 5 篇 | 缺 GarageBand、Audition、123apps、Online Audio Converter、Kapwing（路线图已点名）|
| Troubleshooting | **0** | 6 篇 | 完全空白，P1 结构 |
| Definition / 术语 | 1（lufs，偏 how-to 混形） | 8 篇 | 完全空白，P1 结构 |
| Best 清单 | 1（m4a 偏 best 形） | 4 篇 | 近乎空白，P2 |
| Pillar | **0** | 3 篇（91–180 天） | 未启动，需 Keyword Magic 先量集群 |
| Device / format | 2（ringtone、trim-iphone） | 10 篇（需唯一性门槛） | 低优先，过 40% 差异门槛再发 |

## 2. 工具覆盖缺口（51 个工具，18 个有指南，35%）

31–90 天目标 60%（≈31 个工具），还差约 13 篇有工具锚点的指南。按分类：

- **convert（缺 6）**：`wav-to-mp3`（旗舰 10 页，居然无指南，最高优先）、`flac-to-mp3`、`mp3-to-wav`、`bitrate-converter`、`extract-audio`（与 mp4-to-mp3 指南有蚕食风险，需数据）、`stereo-to-mono`。
- **edit（缺 9）**：`increase-volume`、`volume-booster`、`compressor`（注意与 normalize-vs 的蚕食线：动态 vs 峰值已划清，可写 how-to）、`fade-audio`、`equalizer`、`bass-booster`、`treble-booster`、`low-pass-filter`（high-pass 已有指南，对称写法但查蚕食）、`mp3-tag-editor`。
- **effects（缺 12）**：只有 `slowed-reverb`、`tempo-changer`、`reverse-audio` 值得先做；`432-hz-converter` 有独特搜索需求；其余（distorter、bitcrush、auto-panner、3d、waveform、spectrogram、image-to-audio）靠 FAQ 和规格页承接，不单独写文。
- **record（缺 3）**：`key-bpm-finder`、`audio-to-text` 值得写，`metronome` 待数据。
- **join（缺 2）**：`audio-looper`（可挂在 ringtone/tiktok 集群里写）、`multi-track-audio-editor`（等产品成熟再写，现在写会过度承诺）。
- **cut：已满覆盖**（4/4）。

## 3. 集群视角（路线图 §6 对照）

| 集群 | 现状 | 该补 |
|---|---|---|
| Cut & Trim | 5 篇 | 基本饱和；剩余意图走 FAQ |
| Convert & Compress | 7 篇 | WAV vs MP3（路线图点名）、flac/mp3-to-wav 各一篇；设备类走 device 门槛 |
| Join & Mix | 1 篇 | audio-looper 循环伴奏、multi-track 暂缓 |
| Edit & Repair | 3 篇 | voice-memo 太安静（troubleshoot→increase-volume）、fade 去咔哒声、tag editor |
| Creative Effects | 0 篇直接支撑 | slowed+reverb（指到 slowed-reverb）、变速不变调已有 pitch 指南、432Hz、reverse |
| Record & Analyze | 1 篇（voice-memo） | BPM 查找、转文字 |

## 4. 候选队列（Semrush 数据回来前排的安全序）

安全下注（roadmap 已点名或旗舰缺口，数据大概率只微调顺序）：

| # | 候选文章 | 结构 | 角色 | 工具锚点 | 备注 |
|---|---|---|---|---|---|
| 1 | wav to mp3 转换 how-to | how-to | engineer | wav-to-mp3 | 旗舰页无指南，最大单点缺口 |
| 2 | WAV vs MP3 | vs | skeptic | wav-to-mp3/mp3-to-wav | 路线图集群点名；与 #1 互链不同意图 |
| 3 | Slowed + reverb 怎么做 | how-to | bedroom-musician | slowed-reverb | effects 集群第一篇，文化需求稳定 |
| 4 | GarageBand 替代（在线/浏览器） | vs | skeptic | multi-track? mp3-editor | 路线图点名；诚实写「不保项目」 |
| 5 | 查歌的 BPM 和调 | how-to | bedroom-musician | key-bpm-finder | record 集群第一篇 |
| 6 | 浏览器转写音频到文字 | how-to | podcast-producer | audio-to-text | 模型下载的离线说明要写 |
| 7 | 声音文件太大发不了邮件 → 压缩 | troubleshooting | phone-first | bitrate-converter/compress | 与现有 email 压缩 how-to 差在「症状开头」；查蚕食，可能合并 |
| 8 | Adobe Audition 替代 | vs | skeptic | mp3-editor | 路线图点名 |
| 9 | 123apps 替代 | vs | skeptic | — | 路线图点名；竞品词 |
| 10 | flac to mp3 | how-to | engineer | flac-to-mp3 | 转换集群补位 |

结构补位（数据回来再定顺序）：术语 8 篇（bitrate、sample rate、lossless、crossfade、dBFS、gain vs volume、PCM、432Hz 是什么）；troubleshooting 再补「车机放不了 m4a/wav」「录音开头咔哒声」（fade-audio）；best 清单 4 篇（在线转换器、铃声工具、metronome、bpm finder——全部等数据，避免拍脑袋选品）；device/format 过 40% 门槛再排。

**蚕食红线**（写前必查）：vocal remover / 分轨（做不了，不追）；youtube to mp3（不追）；「car won't play」类若 ogg/m4a 指南已接住就并进 FAQ；normalize/compressor/loudness 三角已在 normalize-vs + lufs 划清，新文必须换查询场景。

## 5. Semrush 数据需求（三份导出）

1. **Bulk Analysis（批量分析）**，市场 US：把下面的候选词表整列贴进去，要列：Volume、KD%、CPC、Intent、SERP Features。CSV 回来即可。
2. **Keyword Gap（关键词差距）**：我方域 `freeaudioeditor.online` vs `123apps.com`、`mp3cut.net`、`online-audio-converter.com`、`vocalremover.org`、`kapwing.com`；条件：对手 top 10、我方未进 top 100；词根过滤 audio/mp3/song/music/ringtone/convert/cut/trim/compress；按 Volume 降序导出前 200。
3. **Keyword Magic（可选，Pillar 预研）**：种子词 `audio file formats`、`edit audio online`、`podcast audio`，各取前 50（Volume + KD%）。

### 候选词表（Bulk Analysis 用，直接贴）

```
convert wav to mp3
wav to mp3 converter free
flac to mp3 converter
mp3 to wav converter
extract audio from video
reverse audio online
slow down audio without changing pitch
speed up audio
loop a section of a song
mp3 tag editor online
fade in fade out audio online
bass booster online
treble booster online
online equalizer
convert stereo to mono
reduce mp3 bitrate
find bpm of a song
find key of a song
transcribe audio to text free
metronome online
slowed and reverb
432 hz converter
volume booster online
increase mp3 volume
wav vs mp3
flac vs mp3
garageband alternative online
garageband for pc
adobe audition alternative
123apps alternative
kapwing alternative
why is my voice memo so quiet
car stereo won't play m4a
why is my wav file so big
audio click at start of track
what is audio bitrate
what is sample rate
what is lossless audio
what is crossfade
what is dbfs
volume vs gain
best free online audio converter
best ringtone maker for iphone
best online metronome
convert m4a to mp3 on iphone
cut music on android
voice memo to mp3
```
