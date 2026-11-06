# 关键词簇 × TDK 四层框架：工具页内容逐页重写方案（2026-11-07）

> 用户指令：结合 ①竞品调研（`/Users/luogangming/WorkBuddy/57rfy/seo-analysis/audio-serp-2026-11`，含 TDK-01…12 playbook 与 C1–C5 聚类）②关键词主题聚类表（41 簇 / 4978 词 / Planner 2026-11-06）③四层框架（Title=搜索承诺 → H1=主题确认 → H2=主题维度 → 正文=逐维证明），制定详细方案，**一个工具页一个工具页地重写页面内容**。
> 本文件是唯一执行清单：逐页规格（§五）+ 执行流程（§六）+ 状态标记随做随更。
> 上游关联：`docs/plans/2026-11-06-zh-copy-style.md`（文案粒度风格线）与本方案**合并为一次逐页执行**——SEO 结构（簇词/TDK/H2）+ 文案风格（场景卡/控件点名）同页同次落地。

## 一、四层框架 → 本站的落点映射

| 框架层 | 职责（图示） | 本站数据落点 | 规则 |
|---|---|---|---|
| **Title 承诺** | 核心词 + 工具能力 + 差异化价值 | `tools.ts` / `zh.ts` 的 `title`（11 语种） | TDK-09：词根+一个差异机制+一个限定，≤60 字符；TDK-04 红海词只作词根 |
| **H1 确认** | 让用户确认进对了工具 | `h1` | 含簇主词的直接表达，不堆卖点 |
| **H2 维度** | 页面主题的不同维度 | `sections[].heading` + HowTo 标题 + uses 场景卡 + FAQ 问题 | 每个近义词组=一个维度；固定四维：怎么用/机制说明/格式与限制/FAQ |
| **正文证明** | 证明每个主题 | howTo 步骤（点名控件+数字）、sections 段落（机制）、tool-facts 格式表、FAQ 答案 | TDK-01：TDK 里每个数字同页正文必须有原句；TDK-05 写机制不写 privacy 空词；TDK-06 失败/兼容写进正文 |

## 二、数据源与映射方法

1. **聚类表**（`关键词主题聚类-建站.xlsx`）：41 簇 / 4978 词 / 月搜合计 1.07 亿。方法=TF-IDF+KMeans(k=55)按词义聚类，"一主题一落地页"。
2. **调研目录**：`tdk_diff.json`（29 卖点饱和度）、`tdk-playbook.md`（TDK-01…12）、C1–C5 竞品聚类、`gap-vs-freeaudioeditor-2026-11.md`（P0/P1 清单）。
3. **映射规则**：簇的意图动词+对象 ↔ 我们的工具页语义（如 "ringtone cutter"→ringtone-maker、"crop a mp3"→mp3-cutter）；一词簇可并页（近义簇合并到同一承接页），跨意图不并（trimmer≠cutter，审计 004 已裁定边界）。

## 三、簇 → 页 映射总表（41 簇全部处置）

### 3.1 九个承接页（按合并月搜排序）

| # | 工具页 | 簇数 | 词数 | 合并月搜 | 承接的主词（月搜/竞争） |
|---|---|---|---|---|---|
| 1 | **mp4-to-mp3** | 2 | 383 | **32,428,550** | mp4 to mp3 (29.6M/竞争3)、mpeg mp3 (2.8M/7.5) |
| 2 | **mp3-cutter** | 3 | 481 | **10,830,600** | online mp3 cutter (9.7M/4)、cut mp3 music online (1.0M/11)、crop a mp3 (109k/4) |
| 3 | **voice-recorder** | 1 | 438 | **5,666,250** | voice recorder (5.7M/竞争32) |
| 4 | **wav-to-mp3** | 1 | 61 | **3,353,300** | mp3 for wav (3.4M/10) |
| 5 | **noise-remover** | 9 | 1,100 | **2,038,000** | take out background noise (850k/22)、remove noise from sound (345k/21.5)、noise remover (334k/18.5)、background noise removal (156k)、clean background noise (130k)、audio noise reduction online free (127k)、voice cleaner (68k)、audio denoiser (15k)、denoise audio (12k) |
| 6 | **audio-joiner** | 3 | 410 | **639,600** | audio file joiner (428k/7)、audio merger online (145k/14)、merge mp3 file online (67k/6) |
| 7 | **audio-trimmer** | 2 | 110 | **254,800** | mp3 audio trimmer (128k/5)、trim mp3 (127k/3) |
| 8 | **ringtone-maker** | 1 | 106 | **203,250** | ringtone cutter (203k/4) |
| 9 | **split-mp3** | 1 | 35 | **15,250** | mp3 splitter (15k/11) |

### 3.2 新页决策（不阻塞本轮）：`/mp3-converter/` 泛转换 hub

承接 `mp3 converter`（26.2M/竞争5）+ `convert and download mp3`（1.7M/11）≈ **27.9M/月**。我们现有 10 个 `-to-` 独立转换页承接的是具体格式意图，hub 承接泛转换意图，可内链分发不蚕食（竞品 clideo 即此打法）。**建议走 `docs/new-tool-spec.md` 全流程另立一轮**（新页 = 新 slug + 11 语种 + 截图 + 内链调整），不在本轮逐页重写范围内。待用户拍板。

### 3.3 防御性排除（7 簇，不建页不硬凑）

| 簇 | 月搜 | 排除理由 |
|---|---|---|
| youtube convert mp3 | 23.1M | YouTube 抽取违反平台 ToS；站内 FAQ 已明示"不接受链接"。立场页不是我们的意图 |
| audio recording studio near me | 115k | 本地服务意图，非工具 |
| noise reducing microphone | 64k | 硬件购买意图 |
| noise cancelling app / active noise cancellation software | 54k | App/软件品类意图，与网页工具页意图不符 |
| audio cutter software free download / mp3 converter for windows | 23k | 桌面软件下载意图 |

### 3.4 指南候选（9 簇，归 guides 线另行排期）

audacity audio recording (202k)、record chrome audio (153k)、audacity audio recorder (119k)、noise reduction in premiere pro (35k)、adobe audition noise removal (26k)、davinci resolve noise reduction (16k)、audacity how to get rid of background noise (7k)、denoise final cut pro (3k)、audacity batch convert (2k)。其中 Audacity 系列（4 簇 33 万/月）可聚合成一篇"Audacity 降噪/录音替代"长文 + 工具页内链。

## 四、九页现状 TDK 实测与差距判断

（title 实测字符数；H2 词根覆盖=该页 title/H1/sections 是否含簇主词或近义词）

| 页 | 现 title（字符） | 现有词根 | 缺失词根/问题 |
|---|---|---|---|
| mp4-to-mp3 | MP4 to MP3 — Convert Video to MP3 Online Free（45） | mp4 to mp3 ✓ | mpeg 词根缺；TDK-01 规格缺（kbps 区间/批量） |
| mp3-cutter | MP3 Cutter — Keep or Delete a Section, No Upload（48） | mp3 cutter ✓ | **online 词根缺**（9.7M 主词=online mp3 cutter）；cut music/crop 未覆盖 |
| voice-recorder | Voice Recorder Online — Record, Trim & Save Audio Free（54） | voice recorder ✓ online ✓ | 基本达标；438 词长尾靠 H2/正文铺 |
| wav-to-mp3 | Convert WAV to MP3 Online Free — 320 kbps（41） | wav to mp3 ✓ | 320 kbps 是单点——TDK-08 应写 64–320 区间；batch/ZIP 可补 |
| noise-remover | Noise Remover — Strip Background Hiss from Voice Online（55） | noise remover ✓ | **9 簇近义词全缺**（background noise/denoise/voice cleaner/noise reduction）；**RNNoise 具名引擎缺**（TDK-02 点名，竞品 0 命中） |
| audio-joiner | Audio Joiner — Merge Songs in Order, with Crossfade（51） | joiner ✓ merge ✓ | **merger 词根缺**（145k）；audio files 泛词根弱 |
| audio-trimmer | Audio Trimmer — Trim a Podcast or Voice Memo（44） | trimmer ✓ | **trim mp3 词根缺**（127k/竞争3）；注意与 mp3-cutter 的意图边界（004 报告：trimmer=任意音频+精度，cutter=MP3+keep/delete） |
| ringtone-maker | Ringtone Maker — Make Ringtones from Songs (iPhone M4R)（55） | ringtone maker ✓ | **cutter 词根缺**（203k 主词=ringtone cutter）；40 s 规格（TDK-01 已核实）未进 TDK |
| split-mp3 | Split MP3 into Multiple Files — 2 to 16 Parts（45） | split ✓ | splitter 名词词根缺；2–16 区间已是 TDK-08 范本（保持） |

## 五、逐页重写规格（执行主体；每页一节，做完勾一个）

> 通用约束（每页适用，不再重复）：
> - **改的字段**：`title` / `h1` / `description` / `sections`（含 headings）/ `uses` / `faqs` / `howToIntro`。**不改**：slug、URL、`cardLine`、dropHint、exportLabel、页面结构模板。
> - **语言纪律**：EN + zh 同批改写；其余 9 语种在该页 PENDING_I18N 期间暂持旧文案，翻译批次统一补齐（对 TDK-12 的本土化折中——用户已拍板的 zh-first 流程）。
> - **TDK-01 同页核对**：新 title/description 里每个数字（kbps/秒/MB/Hz）必须能在改写后的同页正文找到原句。
> - **字符预算**：title ≤60（en）；description 138–155（TDK-10 三段式：机制数字→限制/兼容→承诺）。zh 按 i18n-audit 现有 budget 硬校验。
> - **文案风格**：同步满足 `2026-11-06-zh-copy-style.md`（zh 的 uses 场景卡、why 卡、步骤点名控件）。
> - **门禁**：astro check 0 错误、check:i18n OK、/en 与 /zh 双页浏览器抽查、tracker 记日志。

### ☐ 5.1 noise-remover —— P1（9 簇 204 万/月 + playbook 点名 + 蓝海空白度 +53.8）
- **Title 候选**：`Noise Remover — RNNoise Removes Background Noise Locally`（56）
- **H1 候选**：`Noise Remover — Remove Background Noise from Any Recording`
- **H2 维度集**：① How to remove background noise（howTo：拖入→强度滑杆→导出）② What RNNoise removes（机制 section：语音底噪/嘶声/嗡声/风扇声——覆盖 denoise/denoiser 词族）③ What it cannot remove（TDK-06：类人声噪音/音乐，诚实边界——竞品 TDK 0% 覆盖的失败说明）④ Voice cleaner for recordings（voice cleaner 词根落地：语音备忘/采访场景 uses 卡）⑤ Formats & limits（48 kHz、300 MB）⑥ FAQ（现 7 条保持，增"background noise vs silence"边界题内链 silence-remover）
- **正文证明**（TDK-01 已核实）：RNNoise 150 KB ONNX 模型、约 20 dB 抑制、10 ms 帧、48 kHz 重采样、强度 0–100%（50% 混回房间底噪）、MP3/WAV 导出
- **description 候选**（三段式）：`RNNoise removes background noise from voice recordings right in your browser — hiss, hum and fan noise down about 20 dB. Files over 300 MB are rejected. No upload, no signup.`（实现时复核 ≤155）

### ☐ 5.2 mp3-cutter —— P2（3 簇 1083 万/月，含 9.7M 主词）
- **Title 候选**：`MP3 Cutter — Cut MP3 Music Online, Keep or Delete, No Upload`（60，压线；备选 `MP3 Cutter — Cut MP3 Music Online Free, No Upload` 49）
- **H1 候选**：`MP3 Cutter — Cut an MP3 Online, Free`（保持，已含主词）
- **H2 维度集**：① Cut MP3 music online（howTo）② Keep or delete the selection（keep/delete 双语义=站点独有双出口）③ Crop exactly（crop a mp3 词根：0.01 s 步进+微调箭头）④ Formats & quality（MP3 64–320/WAV 无损）⑤ FAQ（crop vs cut vs trim 边界题，内链 trimmer/splitter）
- **正文证明**：0.01 s 精度、双出口实时时长、WAV 比特级一致、300 MB、批量 ZIP

### ☐ 5.3 mp4-to-mp3 —— P3（2 簇 3243 万/月，最大词量；转换页改写成本低）
- **Title 候选**：`MP4 to MP3 — Extract Audio from MP4 & MPEG Video, No Upload`（59）
- **H1 候选**：`MP4 to MP3 — Convert a Video to MP3, Online Free`（保持）
- **H2 维度集**：① Convert MP4 to MP3（howTo：拖视频→格式→导出）② Supported video formats（**MP4/MPEG/MPG/MOV/WebM**——mpeg 词根落地；诚实写浏览器解码边界：AC3/DTS 不支持，TDK-06）③ Bitrate & quality（64–320 kbps 区间 + 48 kHz 采样保持）④ Batch & ZIP（多文件一次转换）⑤ FAQ（"只想要音频部分"→内链 extract-audio）
- **正文证明**：64–320 kbps、48 kHz、300 MB、批量 ZIP、MPEG-1/2/4 容器可解（按产品事实核对）

### ☐ 5.4 audio-trimmer —— P4（2 簇 254,800；trim mp3 竞争 3 的快补词根）
- **Title 候选**：`Audio Trimmer — Trim MP3 Online with 0.01 s Precision`（~54）
- **H1 候选**：保持 `Audio Trimmer — Trim a Recording, Online Free` 或补 MP3 词根
- **H2 维度集**：① Trim MP3 or any audio（howTo——重做后的真实流程）② Find the exact cut（刻度尺/边界试听/0.01–1 s 微调）③ Keep or delete（双出口）④ Formats（WAV 无损/MP3/M4A）⑤ FAQ（trim vs cut vs split 边界，内链 cutter/splitter）
- **边界纪律**：所有新增文案不得吞并 cutter 意图（cutter=歌曲 keep/delete；trimmer=任意录音+找点精度）
- **正文证明**：0.01 s 步进、双出口实时时长、循环试听、40 s（铃声页专用，不写这页）

### ☐ 5.5 ringtone-maker —— P5（1 簇 203,250；cutter 词根缺失补齐）
- **Title 候选**：`Ringtone Cutter & Maker — iPhone M4R from Any Song, 40 s Cap`（60 压线）
- **H1 候选**：`Ringtone Maker — Cut an iPhone Ringtone from Any Song`
- **H2 维度集**：① Cut a ringtone from any song（cutter 词根落地 howTo）② iPhone M4R export（M4R 仅在浏览器支持 AAC 编码时出现——TDK-06 兼容条件）③ Android MP3 ringtone ④ 40-second limit（iOS 硬限制=TDK-01/06 双料证明）⑤ FAQ
- **正文证明**：40 s 自动钳制（每个路径都钳）、M4R=AAC in MP4、MP3 备选、淡入淡出

### ☐ 5.6 audio-joiner —— P6（3 簇 639,600）
- **Title 候选**：`Audio Joiner — Join & Merge Audio Files, Crossfade, No Upload`（60 压线）
- **H1 候选**：`Audio Joiner — Put Audio Files One After Another`
- **H2 维度集**：① Join audio files in order（howTo：拖入排序→crossfade→合并）② Crossfade between tracks（0–5 s）③ Merge MP3 files（merge mp3 file online 词根；混合格式解码说明）④ Formats & limits ⑤ FAQ（joiner vs multi-track 边界：不同时播放，内链 multi-track）
- **正文证明**：crossfade 0–5 s、fade in/out、多格式解码、≥2 文件打 ZIP

### ☐ 5.7 wav-to-mp3 —— P7（1 簇 3,353,300；61 词小簇，低成本）
- **Title 候选**：`Convert WAV to MP3 — 64–320 kbps, Batch & ZIP, No Upload`（~56）
- **H1 候选**：保持 `Convert WAV to MP3 — Online, Free`
- **H2 维度集**：① Convert WAV to MP3（howTo）② Pick your bitrate（64/96/128/192/320 五档+体积估算）③ Batch WAV files（ZIP）④ Lossless source notes（16-bit PCM 44.1/48 kHz 诚实说明）⑤ FAQ
- **正文证明**：五档码率、批量、WAV 16-bit PCM、"mp3 for wav" 反向语义句（"已有 MP3 要 WAV 用 mp3-to-wav"内链）

### ☐ 5.8 voice-recorder —— P8（1 簇 5,666,250，竞争 32；438 词长尾靠正文）
- **Title 候选**：保持现 title（词根已全）；或 `Voice Recorder — Record to MP3 & Trim Online, No Upload`（~57）
- **H2 维度集**：① Record your microphone（权限流程 howTo）② Record and trim in one place（录完接编辑器链路）③ Export formats（MP3/WAV）④ Browser support（Chrome/Edge/Safari；HTTPS 要求=TDK-06）⑤ FAQ（录系统声音？→诚实：仅麦克风；Chrome tab audio 内链指南）
- **正文证明**：MP3 直接导出、录音→trimmer→导出链路、无上传

### ☐ 5.9 split-mp3 —— P9（1 簇 15,250；小改）
- **Title 候选**：`Split MP3 — Splitter into 2–16 Parts, Download as ZIP`（~54）
- **H2**：补一节 "Splitter by size or by parts"？——现页按等分；诚实：仅等分，不做按大小分割（TDK-06）。其余保持。
- **正文证明**：2–16 段、每段独立命名、ZIP

## 六、执行流程（每页六步，缺一不可）

1. **词表落地**：从聚类表 `关键词明细` sheet 拉该页承接簇的全部词 → 分桶（主词→Title/H1；近义词→H2 维度；长尾→正文/FAQ 问法）。
2. **TDK 改写**：EN + zh 同批（title ≤60、description 三段式 138–155、zh 按 budget 硬校验）；每个数字回正文核对（TDK-01）。
3. **H2 维度集**：按 §五 每页清单增改 `sections`/`uses`/`faqs`；zh 同步（zh-copy-style 风格：场景卡、控件点名）。
4. **门禁**：astro check 0 错误、check:i18n OK、`/en/<slug>` + `/zh/<slug>` 浏览器抽查、i18n-audit 的 title/desc budget 通过。
5. **记账**：slug 进 PENDING_I18N；tracker 日志（改了什么/词根覆盖前后/遗留）。
6. **验收**：用户明确"通过"后勾 ✓ 进入下一页。

**与既有线的合并**：zh-copy-style 清单（`2026-11-06-zh-copy-style.md` §六）与本方案 §五 是**同一份逐页队列的两面**——每页执行时同时完成"文案风格（zh）"和"SEO 结构（EN+zh）"。两清单的交集页（noise-remover、voice-recorder、audio-to-text、audio-trimmer…）一次过；仅存在于单侧清单的页面按各自要求执行。silence-remover 已完成 zh 文案样板，其 SEO 词根（"remove silence / silent cutter"）不在 41 簇内（Planner 词表未覆盖该语义），**不追加**，维持现状。

**执行顺序**：§五 编号即建议顺序（簇数×月搜×改写成本综合）。P1 noise-remover 恰好是 zh-copy-style 清单的下一页，无缝衔接。

## 七、并行前置项（强关联，非本方案 scope 但影响成败）

1. **P0-1 非英文模板段缺失**（gap 文档）：10 语种固定缺 `Where this page fits` / `Formats, limits and privacy` / `Guides` 三段（模板分支未渲染，一次修复影响 620 页）——**建议在第一页重写前或并行修掉**，否则 9 语种的 H2 维度永远少于英文，TDK-12 验收无法通过。
2. **P0-2 接 GSC**：所有重写效果需 4–6 周 GSC 展示/点击验证（playbook §5 复核链）。
3. **分类页头部词**（gap P1）：`/tools/cut` 等 6 页 title 换头部词根——本方案之后的第二批。

## 八、状态跟踪

| 页 | 簇词落地 | TDK | H2 维度 | 正文证明 | 门禁 | 验收 |
|---|---|---|---|---|---|---|
| noise-remover | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| mp3-cutter | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| mp4-to-mp3 | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| audio-trimmer | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| ringtone-maker | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| audio-joiner | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| wav-to-mp3 | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| voice-recorder | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| split-mp3 | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

（audio-trimmer 的 trimmer 重做轮已完成大部分内容工作——该页只需 trim mp3 词根补齐，工作量最小，可作流程试运行第一页。）
