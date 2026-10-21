# 内容缺口分析 — 文章结构类型 × 工具覆盖

日期：2026-10-21。依据 [内容类型](../content-types.md)、[内容路线图](2026-10-21-content-tool-page-roadmap.md)。盘点当天完成指南修复（首段链、§8、persona 回填）后的存量。Semrush 数据到位后按 §5 更新优先级。

## 0. Semrush 关键词差距头部发现（2026-10-21 实测）

US 库、桌面端，我方 `freeaudioeditor.online` vs 123apps.com / mp3cut.net / online-audio-converter.com / vocalremover.org：

| 域名 | 排名关键词数 |
|---|---|
| **freeaudioeditor.online** | **2** |
| 123apps.com | 90 |
| online-audio-converter.com | 3K |
| mp3cut.net | 3.9K |
| vocalremover.org | 6K |

与竞品的关键词重叠：共同 0、缺失 0、弱 0、强 0；对方 10.8K 关键词全部落入我方「尚未开发」。

结论：**站点处于全新域名冷启动期**（Semrush 对 10 月中旬内容的收录也滞后）。「缺失=0」使 Keyword Gap 的常规用法（挖我方 11–100 位的关键词）暂时失效；现在的正确打法就是工具页+长尾指南在做的：精确意图、低 KD、等索引。§4 安全队列不受影响，不需要按搜索量重排。两个执行含义：

1. best-list 类（"best free X"）在新站权重下短期不可行，维持 P2 并继续后置。
2. 行级数据（尚未开发列表里挑 KD<30 的长尾）待手动筛选补充；更可信的需求信号是上线 4 周后的 GSC 真实查询（playbook §7）。

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

## 4. 补全规划（批次追踪）

> 每篇的完成定义：[内容类型](../content-types.md) 对应结构骨架 + 机械审计全过
> （首段链主工具、破折号 ≤1、sources 覆盖外链、persona 回填、guides.ts 卡片）+
> `npm run build` 通过。字数低于结构带要在发布时记录原因，第 4 周 GSC 复查决定
> 是否加深。蚕食红线见 §4 末尾，动笔前逐条核对。

### 批次 1 — 已发布（2026-10-21）

- [x] `convert-wav-to-mp3` | how-to | engineer | wav-to-mp3 | 917 词
- [x] `wav-vs-mp3` | vs | skeptic | wav-to-mp3 | 898 词（低于 1200+ 带，已记录）
- [x] `make-slowed-and-reverb` | how-to | bedroom-musician | slowed-reverb | 815 词（低于 900 带，已记录）

### 批次 2 — 已发布（2026-10-21）

- [x] `garageband-alternative` | vs | skeptic | mp3-editor / multi-track | 770 词（低于 1200+ 带，已记录；与 audacity-alternative 分工清晰）
- [x] `find-bpm-and-key` | how-to | bedroom-musician | key-bpm-finder | 872 词（低于 900 带一点，已记录；record 集群开张）
- [x] `transcribe-audio-to-text` | how-to | podcast-producer | audio-to-text | 790 词（低于 900 带，已记录；模型下载与离线语义已如实写）

批次 2 三篇均在 594–649 词初稿上做过一轮实质扩充（场景、相对调性、SRT 结构、校对工作流），但仍低于词数带：上线后按 GSC 真实查询决定加深方向，不预设。

### 批次 3 — 已发布（2026-10-21）

- [x] `audition-alternative` | vs | skeptic | mp3-editor | 668 词（低于 1200+ 带，已记录）
- [x] `123apps-alternative` | vs | skeptic | — | 623 词（低于带，已记录；对 123apps 的服务端处理措辞保守，落地页未明说）
- [x] `convert-flac-to-mp3` | how-to | engineer | flac-to-mp3 | 733 词（低于 900 带，已记录；转换集群补位完成）
- [x] `why-is-my-voice-memo-so-quiet` | troubleshooting | phone-first | increase-volume | 649 词（troubleshooting 结构开张）
- [x] `audio-clicks-at-the-start` | troubleshooting | engineer | fade-audio | 663 词
- [x] `car-stereo-wont-play` | troubleshooting | engineer | m4a-to-mp3 | 584 词（蚕食查过：症状先行，与 m4a how-to 分工清晰）

批次 3 六篇均从 471–550 词初稿扩充一轮至 584–733，仍普遍低于词数带：troubleshooting 天然偏短，上线后按 GSC 查询决定加深。

### 批次 4 — 结构补位

#### 4a. 术语篇（Definition 结构开张）— 已发布（2026-10-21）

- [x] `what-is-audio-bitrate` | engineer | 613 词
- [x] `what-is-sample-rate` | engineer | 626 词
- [x] `what-is-lossless-audio` | engineer | 611 词（来源引 xiph.org）
- [x] `what-is-crossfade` | engineer | 643 词

四篇各含一轮真内容扩充（VBR/CBR、上采样无益、无损≠高解析、播放器内 vs 烧进文件的交叉淡化）。Definition 篇集中在 610–640 词，普遍低于 800–1,200 带：术语篇以覆盖完整为准，不再为词数注水；GSC 第 4 周按真实查询加深。

#### 4b. 术语篇第二批 — 已发布（2026-10-21）

- [x] `what-is-dbfs` | engineer | 579 词（0 是墙、−6 半幅、dBFS≠LUFS、削波机制）
- [x] `gain-vs-volume` | engineer | 567 词（旋钮 vs 文件、400%=+12 dB、流媒体响度归一的影响）
- [x] `what-is-pcm-audio` | engineer | 633 词（数字怎么读、解码单向门、MP4 内轨常非 PCM）
- [ ] `what-is-432-hz` | **暂缓**：并行会话正在写 `432-hz-vs-440-hz`（尚未过首段链检查），等它落地后再定拆分或合并，避免撞车

过程改进：审计脚本新增「frontmatter 值含冒号未加引号」静态检查——本轮第三次踩 YAML 冒号坑后，把它变成构建前的机械拦截。

#### 数据门槛批（未排期）

- [ ] Best 清单 4 篇（skeptic）：等行级数据（KD<30）再立项，新站权重下维持后置
- [ ] Pillar 3 篇（91–180 天）：等 Keyword Magic 集群数据
- [ ] Device/format：过 40% 唯一性门槛再排

### 配图状态（2026-10-21，按 Ahrefs 基准重梳理）

**Ahrefs 博客实测基准**（无头 Chrome 渲染统计，2026-10-21）：keyword-research 5,400 词 41 图、
on-page-seo 4,576 词 45 图，≈**每千词 4–8 张**（含作者头像，正文视觉约 4–6/千词）。
类型：产品真实截图 + 数据图表 + 自制示意图 + 品牌头图。

**站内标准（对标后）**：每篇 2–4 张 ≈ 3–5/千词，构成 = 工具真实截图（how-to/troubleshooting）
+ 品牌示意图（Definition/VS）+ 表格；hero 图后置（OG 卡合并考虑）。

**执行批次**：
- 图批 3（✅ 已完成，30/45 篇有图）：cut-a-song-for-tiktok（cutter 三连）、
  record-a-voice-memo（recorderLoaded）、trim-audio-on-iphone 与 trim-opentracks-bgm
  （audio-trimmer 已入 EDITOR_PAGES）。
- 图批 4（一行成本，待跑）：normalize-audio、compressor、high-pass-filter、
  silence-remover、split-mp3、opus-to-mp3 加进 EDITOR_PAGES → 覆盖 normalize-vs、
  remove-hum、remove-silence、split、opus 转换，共 6 篇。
- 图批 5（专用钩子）：convert-audio-to-midi（模型下载 + 音符列表）、loudness-meter
  （读数，同 BPM 模式）、convert-m4a-to-mp3（m4a 截图已捕获，建篇目录即可）。
- 图批 6（示意图）：gain-vs-volume、what-is-sample-rate、what-is-lossless、
  what-is-pcm-audio 各 1 张概念图。
- 红线：不为 432-hz-vs-440-hz / mpeg-audio / radio-filter 配图（并行会话篇目）。

### 配图状态（2026-10-21，第一批）

- 45 篇指南中 16 篇有正文配图（老 10 篇 + 本轮 6 篇）。本轮给
  `generate-guide-media.mjs` 加了编辑壳页面的通用截图流程（EDITOR_PAGES）、
  `ONLY=` 过滤和 sharp WebP 转换（本机 ffmpeg 无 webp 编码器）。
- 已配图：convert-wav-to-mp3、convert-flac-to-mp3、make-slowed-and-reverb（3 图）、
  compress-audio-for-email、why-is-my-voice-memo-so-quiet、audio-clicks-at-the-start。
- 未配图及原因：VS/术语/troubleshooting 其余篇按站内先例可不配；
  find-bpm-and-key 与 transcribe-audio-to-text 需要逐页写截图钩子（读数/转写界面），
  排队；并行会话的新篇不在本任务范围。
- 全站 OG 分享图仍是通用 `/og.jpg`，逐篇文章卡是独立待办。

- **26 / 45 篇有正文配图**（老 10 + 第一批 6 + 第二批 10）。管线升级：
  EDITOR_PAGES 通用截图流程、`ONLY=` 过滤、sharp WebP（本机 ffmpeg 无 webp 编码器）、
  BPM 专用 120 BPM 节拍音、术语/VS 篇品牌示意图（bitrateLadder / sizeBars /
  dbfsScale / crossfade 复用）。
- 第二批配图：三篇 VS（编辑器截图）、car-stereo（m4a 转换截图）、find-bpm（真实读数
  119 BPM——节拍音 120，检测差 1 恰好展示整数读数的诚实行为）、transcribe（装载态：
  语言/模型选择器 + 模型大小提示；转写完成态因需下载 80 MB 模型未捕获，图说按
  装载态措辞）、四篇术语/VS 示意图。
- 引用扩容：19 篇新指南每篇 2–4 个权威源（Wikipedia/Apple/Adobe/Spotify/EBU/
  xiph/MDN/GitHub/McGill），全部 URL 验证。新增表格：transcribe Tiny/Base 对比、
  voice-memo 原因表。
- 未配图：纯术语篇 dBFS/gain/PCM 外的 4b 篇有示意图；完全无图的仅剩
  what-is-lossless-audio、what-is-sample-rate、gain-vs-volume、what-is-pcm-audio
  四篇纯定义（按先例可不配，需要时补示意图即可，管线已就绪）。
- 全站 OG 分享图仍是通用 `/og.jpg`，逐篇文章卡是独立待办。

### 工具覆盖进度

批次 1–3 完成后，有指南支撑的工具 18 → 25（目标 60% ≈ 31，还差约 6 篇）。剩余未覆盖且值得写的：mp3-tag-editor、equalizer、bass/treble-booster、low-pass-filter、audio-looper、bitrate-converter、extract-audio（查蚕食）、stereo-to-mono、tempo-changer、reverse-audio、metronome（待数据）、432-hz-converter（术语篇顺带）。

### 蚕食红线（每篇动笔前核对）

vocal remover / 分轨不追；youtube to mp3 不追；「car won't play」类若 m4a/ogg 指南已接住则并入 FAQ；normalize/compressor/loudness 三角已被 normalize-vs + lufs 划清，新文必须换查询场景；工具页已有 HowTo 的关键词，指南必须换场景或换问题。

## ~~4. 旧版候选表（已被上面的批次清单取代）~~

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
