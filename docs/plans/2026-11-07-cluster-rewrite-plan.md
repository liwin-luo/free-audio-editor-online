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

### 3.5 词根归属与蚕食防护（用户裁定：不得相互蚕食；每页执行前必查）

原则：**一个主词根全站只有一个承接页**。执行动作：改写前 `grep` 全站 title/h1/description 查该词根的现有持有者；改写后复核全站没有第二页新持有同一词根。

| 词根 | 归属页 | 边界规则（互链不互吞） |
|---|---|---|
| cut / crop / online mp3 cutter | mp3-cutter | audio-trimmer 不写 cut/crop 词根 |
| trim / trimmer / 0.01 s 精度找点 | audio-trimmer | mp3-cutter 不写 trim 词根；两页 FAQ 互链分工 |
| mp4 / mpeg → mp3 | mp4-to-mp3 | extract-audio 拥有"任意视频抽任意音频格式"；两页 FAQ 互链 |
| wav → mp3（该方向） | wav-to-mp3 | 反向词归 mp3-to-wav；簇内反向词在词表分桶时剔给对页 |
| 背景噪音 / 降噪 / denoise / voice cleaner | noise-remover | silence-remover 拥有"静音段/死气"；两页 FAQ 已互链（先降噪再剪空白） |
| join / merge / merger / crossfade | audio-joiner | multi-track 拥有"同时混音"；FAQ 互链 |
| ringtone cutter / maker / M4R / 40 s | ringtone-maker | mp3-cutter 不接铃声意图 |
| splitter / 等分 N 段 / ZIP | split-mp3 | trimmer/cutter 不写"分成多个文件" |
| record / 录音 / 麦克风 | voice-recorder | — |
| 泛转换 hub（未来） | /mp3-converter/（待拍板） | hub 只做泛意图导航与分发内链，title 不得含 wav to mp3 等具体格式词根 |

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
> - **语言顺序（用户裁定 2026-11-07）：先写中文全套，用户确认后走翻译流程**。每页交付物 = zh 的 title/h1/description/usesHeading/uses/howTo/sections/faqs/why 全套；确认后翻译 en + 其余 9 语种（EN 侧按 §五 各页的词根目标落地），翻译完成后从 PENDING_I18N 移除该页。§五 的 EN title/H1 候选句 = 翻译阶段的词根目标，不先行。
> - **改的字段**：`title` / `h1` / `description` / `sections`（含 headings）/ `uses` / `faqs` / `howToIntro` / `why`。**不改**：slug、URL、`cardLine`、dropHint、exportLabel、subtitle、intro、页面结构模板。
> - **TDK-01 同页核对**：新 title/description 里每个数字（kbps/秒/MB/Hz/dB）必须能在改写后的同页正文找到原句。
> - **字符预算**：title ≤60（en，zh 按 i18n-audit 的 han 字 budget）；description 138–155（TDK-10 三段式：机制数字→限制/兼容→承诺）。
> - **文案风格**：同步满足 `2026-11-06-zh-copy-style.md`（zh 的 uses 场景卡、why 卡、步骤点名控件）。
> - **蚕食防护**：每页执行前过一遍 §3.5 词根归属表；改写前后各做一次全站词根查重。
> - **门禁**：astro check 0 错误、check:i18n OK、/zh 页浏览器抽查、tracker 记日志。

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
| noise-remover | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ 用户已确认 zh，en+9 语种已随批翻译（fa35be6） |
| mp3-cutter | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |
| mp4-to-mp3 | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |
| audio-trimmer | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |
| ringtone-maker | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |
| audio-joiner | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |
| wav-to-mp3 | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |
| voice-recorder | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |
| split-mp3 | ✓ zh | ☐ | ☐ | ☐ | ☐ | ☐ |

（audio-trimmer 的 trimmer 重做轮已完成大部分内容工作——该页只需 trim mp3 词根补齐，工作量最小，可作流程试运行第一页。）

## 九、执行日志

### noise-remover zh（2026-11-07，待用户确认；确认后进翻译流程）
- **词根归属核对**：全站查重通过——"去除背景噪音/降噪/RNNoise"归本页，"静音段"归 silence-remover（FAQ 已互链），无第二页持有。
- **zh 改写落地**：title `去除背景噪音 — RNNoise 本地降噪，免费`（主词根前置 + TDK-02 具名引擎 + 本地机制）；h1 `去除背景噪音 — 在线音频降噪，免费`；description 三段式（机制 20 dB → 限制 300 MB/音乐边界 → 承诺免费导出）；usesHeading 关键词式；uses 3→6 场景卡（语音备忘/播客/讲座/采访=voice cleaner 意图/视频旁白/会议）；howTo 3→4 步（点名「降噪强度」「去背景噪音」「播放」，带 30 dB/6 dB/10 毫秒/150 KB 页内已核实数字）；why 卡 ×2（RNNoise 本地跑 + 诚实的边界=TDK-06 失败说明）；sections 标题两个改带词根（RNNoise 怎么去除背景噪音 / 人声净化，不是音乐降噪），段落内容保持（原数字表/边界清单已达标）。FAQ 7 条不动。
- **蚕食防护**：§3.5 表已入方案；9 簇近义意图全部归本页，未侵占 silence-remover/trimmer 词根。
- 门禁：astro check 0、check:i18n OK、smoke ALL PASS、/zh/noise-remover 渲染验收全项通过。PENDING_I18N += noise-remover。
- **等确认后**：翻译 en + 9 语种（EN 侧词根目标：Noise Remover — RNNoise Removes Background Noise Locally / background noise / denoise / voice cleaner），然后清 PENDING。

### noise-remover 翻译流程完成（2026-11-07，fa35be6）
- 竞品对比（用户要求）：28 站档案内**无独立背景噪音工具页**——kapwing 仅编辑器页一行 "one click" 卖点（无引擎无数字）、notevibes/editor.audio 仅菜单项、audacity 系仅博客；唯一具名引擎竞品是 audioeditor.org（C3 站群）的 AI Noise Reducer 用 **DeepFilterNet3**，与我们 RNNoise 不撞车且该站 canonical/hreflang 卫生差。对比通过。
- EN 按 §5.1 词根目标落地（title 56 字符/description 150 三段式/h1/uses×6/why×2/howTo×4/两个 section 标题带词根）；9 语种（es/de/fr/pt/ru/ja/ko/id/ar）同批翻译全部字段 + 两个 section 标题 + FAQ 补 300 MB 句（TDK-01/12：en+zh+9 全量同批，无半翻译）。
- 机制变更：`assertCatalogs` 的 uses 检查放宽为 ≥3（簇重写把场景卡扩到 6）；**noise-remover 移出 PENDING_I18N**——parity 门禁已恢复对该页强制（uses 6/6、howTo 4/4、faqs 7/7 全语种对齐）。
- 教训（skill 素材）：批量翻译脚本按"第 1/2 个 heading"替换时发生了**槽位偏移**（替换了第 2/3 个，第 1 个残留旧文案、第 3 个被覆盖）——用 git HEAD 原文恢复第 3 标题后按槽位 0/1/2 重设。批量脚本替换"第 N 个出现"必须先断言总数再用 0 基索引。
- 验证：astro check 0、check:i18n OK（含 ja/ko/de/es 的 budget 与禁词表）、smoke ALL PASS、ja/de/ar 三语种页面 H2 链与 why/场景卡渲染抽查通过。

## 十、标准流程与易错清单（剩余页面照此执行，2026-11-07 固化）

用户指令：不再逐页询问，按本清单一口气做完 §五 全部页面。

### 每页六步（顺序固定）
1. **蚕食查重**：§3.5 表 + 全站 `grep` 词根（改写前后各一次）。
2. **zh 全套**：title（主词根前置 + 机制 + 限定；han ≤20）/ h1（确认式）/ description（三段式：机制数字→限制兼容→承诺；han ≤75）/ usesHeading（关键词式）/ uses 场景卡 ×6（场景名：收益）/ howTo ×4（先 grep zh.ts 核对控件 label，一字不差）/ why 卡 ×2（第二张常为"诚实的边界"）/ sections 标题带词根（内容段落只在证据不足时改）；禁"您"、禁 emoji；TDK-01：TDK 里每个数字同页正文有原句。
3. **EN 全套**：title ≤60（词根+机制+限定）/ description 138–155 三段式 / 其余同构 zh；新数字若正文缺失 → 同批补 FAQ。
4. **9 语种翻译批**：可复用脚本 `python3 /tmp/cluster_translate.py <spec.json>`；控件 label 用占位符从各语种文件插值（strength/export/play/keep/delete 等，先在 spec 里声明 key）；语种禁词（de 无 Sie、es 无 usted、ru 无 Вы、ko 无 합니다）与预算（ja 35/80、ko 30/75、zh 20/75、默认 60/155）过 i18n-audit。
5. **记账**：slug 加 PENDING_I18N（zh 落地时）→ 翻译完成移除（parity 门禁恢复强制）；方案 §八 状态行 + §九 日志。
6. **门禁 + 提交**：astro check 0、check:i18n OK、smoke ALL PASS、`/zh` + 一个非英语种页面抽查；每页独立 commit。

### 易错清单（已发生过的坑，写码前过一遍）
1. **批量脚本"第 N 个出现"替换必槽位偏移**（noise-remover 轮实锤：替换了第 2/3 个 heading、第 1 个残留）——先断言 heading 总数，再用 0 基槽位数组明确指定改哪几个。
2. **脚本生成的多行数组项漏尾逗号**（9 语种全炸）——生成器里带逗号，astro check 兜底。
3. **TDK 新数字必须同批补正文**（300 MB 首轮漏了 FAQ，TDK-01 违例）——EN/zh/9 语种四处一起补。
4. **assertCatalogs 的 uses 检查已放宽为 ≥3**；场景卡 6 个是合规形状。PENDING_I18N 期间豁免、翻译完成必须移出恢复强制。
5. **i18n 同名键**（title/h1 等在 ui 与 tools 两区都有）——行替换只在 entry slice 内做，禁止全文件 replace。
6. **控件点名**先 grep zh.ts 对应 label；不要凭记忆写。
7. **tools.ts 大改禁止多轮增量修补**——一次综合替换；出错回 git 基线重放。
8. **description 三段式顺序**：机制数字 → 限制/兼容 → 承诺；红海词 online/free 只作词根不当卖点。
9. **语种禁词/预算**由 i18n-audit 硬校验：de 无 Sie/Ihnen、es 无 usted、ru 无 Вы/Вас、ko 无 합니다、zh 无 您。
10. **zh.ts 与 tools.ts 成对核对**——单查 en 侧会漏 zh（11-05 事故教训）。

### 八页 zh 全套完成（2026-11-07，等用户检查；检查通过后另起全量翻译批次）
- 用户中途裁定调整流程：**先做完所有工具页的中文内容，用户统一检查后再做全量翻译**（推翻逐页"zh 确认→翻译"节奏）。
- 已完成 zh 全套（title/h1/description/usesHeading/uses×6/why×2/howTo×4，TDK-01 数字同页核对，蚕食防护逐页查重）：
  - **mp3-cutter**（3 簇）：title 补「在线剪切歌曲」（9.7M 主词的 online+cut music 词根）；FAQ 补 300 MB；步骤点名「保留选区」「删除选区」「剪切并下载」。
  - **mp4-to-mp3**（2 簇 3243 万）：title/description/section 标题补 MPEG 词根；desc 带 64–320 kbps 区间+AC3/DTS 边界；FAQ 补 300 MB。
  - **audio-trimmer**：title 补「在线裁剪 MP3，0.01 秒精度」（trim mp3 词根）；步骤重写为找点四步（循环试听/双出口点名）。
  - **ringtone-maker**：title `铃声裁剪与制作 — 从歌曲剪出 iPhone 铃声，40 秒`（cutter+maker 双词根+40 s 规格）；why 卡「40 秒自动封顶」+「M4R 与 MP3 双出口」。
  - **audio-joiner**（3 簇）：title 补「拼接/音频文件」（merger 意图）；desc 带交叉淡化 0–5 s+320 kbps；步骤拆出交叉淡化独立步。
  - **wav-to-mp3**：title `64–320 kbps 五档任选，批量打包 ZIP`（TDK-08 区间，五档=实际档位数）；新增标签边界内链 tag-editor。
  - **voice-recorder**：title 补「用麦克风录成 MP3，免费裁剪」；description 带 HTTPS-free 事实（权限手动允许/未导出即消失，均页内有据）。
  - **split-mp3**：title `MP3 分段工具 — 在线把 MP3 分割成 2–16 段，打包 ZIP`（splitter/分割 词根 + TDK-08 区间）。
- 门禁：astro check 0、check:i18n OK（zh budget 全过）、smoke ALL PASS、八页 200 + 程序化验收（title/h1/4 卡 why/6 场景卡/无"您"全过）。
- PENDING_I18N 现有 9 个 slug（含 audio-trimmer/silence-remover 既有项）。**用户检查通过后：按 §六 启动全量翻译（en+9 语种），逐 slug 翻完清 PENDING。**

### 其余 39 页 zh 全套完成（2026-11-07，aeb14f2 后续批次）
- 转换簇 8 页（mp3-to-wav/m4a/flac/ogg/opus→mp3、extract-audio、bitrate-converter、compress-audio）、响度簇 5 页（normalize/increase-volume/volume-booster/loudness-meter/compressor）、EQ 簇 5 页（equalizer/bass/treble/hpf/lpf）、效果簇 12 页（fade/echo/reverb×2/slowed/distorter/bitcrusher/panner/mono/reverse/432hz/3d/looper）、变速调 4 页（speed/tempo/pitch/voice-changer）、分析工具 11 页（keybpm/metronome/taptempo/waveform/spectrogram/music-visualizer/image-to-audio/tag-editor/audio-to-midi/audio-to-text/soundboard）、multi-track + mp3-editor。**至此全部 57 个工具页 zh 全套完成。**
- echo 事故与修复：compressor 批量应用时条目结束检测被无引号键（echo: {）破坏，替换范围越界把压缩内容写进 echo——全目录键↔标题完整性扫描定位后，从 git HEAD 恢复 echo 原条目再应用 echo 自己的簇重写。脚本已修（结束检测兼容无引号键 + 最后条目兜底 len(lines)）。
- loudness-meter（双引号条目）、compressor（无引号键）手改/脚本各一处；wav-to-mp3 档位数修正为五档。
- PENDING_I18N 扩为全部 57 个 slug（zh 全套完成、en+9 待翻译的忠实记账）。
- 门禁：astro check 0、check:i18n OK（audit 跳过 PENDING slug）、smoke ALL PASS（注意：本机 4321 端口存在并行会话服务，smoke 必须用 `BASE_URL=http://127.0.0.1:4321`）、八页+多语种程序化验收全过（57 页 title/why/场景卡完整性扫描 NONE 异常）。
- **等用户检查全部 zh；通过后启动全量翻译批次（en+9，逐 slug 清 PENDING）。**

### 监控会话接手（2026-11-07 02:52）
- 02:42 与 02:47 两次检查：无新 commit（HEAD 6d8355b）、无 i18n 新改动（最后 02:32:41）、PENDING_I18N 55 项不变 → 判定 GLM 停摆，监控会话接手翻译。工作区已有 audio-trimmer 的 EN（tools.ts）+ es/de/fr/pt/ru/ja/ko/id 半成品，先补完该页（ar 未翻、各语种缺 ad36314 的 4 条 FAQ 与 2 个 section、zh 缺 4 条 FAQ），再按 PENDING 顺序继续。

### audio-trimmer 翻译轮完成（2026-11-07 03:15，监控会话接手）
- 接手时工作区已有 EN（tools.ts）+ es/de/fr/pt/ru/ja/ko/id 主字段半成品（GLM 02:32 停摆前写入）；本轮补完：ar 全套主字段（title/desc/usesHeading/uses×6/why×2/howTo×4）。
- **parity 缺口**：该页 EN 基线（ad36314 重做轮）有 11 条 FAQ + 6 个 section（含输出格式表），zh/9 语种只有 7 条 + 4 个。本轮全 10 语种补齐 4 条 FAQ（精度/全屏/WhatsApp 格式/-edited 后缀）+ 2 个 section（百分之一秒微调/按用途选输出表），section 顺序与形状对齐 EN；zh 两条旧 FAQ 答案同步 300 MB 与五档码率事实。
- **预算修复**：GLM 半成品 de/es/fr/pt/ru description 超 155、fr title 超 60，重写为达标版本（机制→限制→承诺三段式保持）。
- **顺带修复（HEAD 既有缺陷）**：zh.ts 16 个条目有重复 why: 块（批量脚本残留，其中 4 个第二块为两卡同标题的坏块），astro check 报 ts1117×16——删除第二块保留风格正确的第一块；另修 ko uses 里 ASCII 引号断句、zh faqs 尾部 `}],` 闭合。
- audio-trimmer 移出 PENDING_I18N（剩 54）。门禁：astro check 0、check:i18n 全 10 语种 OK、smoke ALL PASS（BASE_URL=http://127.0.0.1:4321）、zh/ja/de/ar/ko 渲染抽查（新 H2/表格/新 FAQ/why 卡）全过。
