# 轮次 001 · mp4-to-mp3(vs 三竞品)

日期:2026-10-28 · 我们页面:`/mp4-to-mp3`(英语) · 原始页面存档在 `raw/`

竞品 URL:
1. https://audioeditor.org/tools/video-to-mp3
2. https://snipsound.com/tools/video-to-audio/
3. https://snipsound.com/tools/audio-converter/(上者的 canonical 目标,补抓)
4. https://soundtools.io/video-to-audio

---

## 逐 URL 分析

### URL 1 · audioeditor.org/tools/video-to-mp3

| 字段 | 内容 |
|---|---|
| Title(58c) | Video to MP3 Converter - Extract Audio from Any Video File |
| Meta desc(171c) | Free online video to MP3 converter. Extract audio from MP4, MOV, MKV, WEBM to MP3, M4A, WAV, OGG, or FLAC in your browser. Lossless packet-copy when possible - no uploads. |
| H1 | Free Online Video to MP3 Converter - Extract Audio from Any Video |
| 结构(H2) | How to Extract Audio from a Video → Why use → Common Use Cases → FAQ → Related Audio Tools |
| Schema | WebApplication + HowTo + FAQPage(4 问) |
| hreflang | 20 条(10 语言) |
| 体量 | 正文约 514 词 · 89 个链接 |
| 高频词 | flac(6) extract(5) mov/mkv/webm/ogg(4) lossless(4) |
| 功能 | 输入 MP4/MOV/MKV/WEBM;输出 5 种:MP3/M4A/WAV/OGG/FLAC;**lossless packet-copy**(可直拷音轨不重编码);流式处理快 |

**意图**:一页同时承接「video to mp3 converter」(意图②)和「extract audio from video」(意图③),标题/H1/desc 三处双词覆盖。轻内容重工具(514 词)。
**值得抄**:① lossless packet-copy 是独有技术卖点,直击「会不会损音质」这一 FAQ 高频疑虑;② FAQ 明确回答「Can I download audio from YouTube?」并给版权警示——既是信任信号也吃长尾问句。

### URL 2 · snipsound.com/tools/video-to-audio/

| 字段 | 内容 |
|---|---|
| Title(75c) | Free Video to Audio Converter — Extract MP3, WAV, FLAC from MP4 \| SnipSound |
| Canonical | **→ /tools/audio-converter/(本页自愿并入聚合页)** |
| H1 | Free Video to Audio Converter |
| 结构(H2) | 工具区 → Extract Audio from Any Video → Free Online Video to Audio Converter → FAQ |
| Schema | WebApplication + FAQPage(5 问),无 HowTo |
| hreflang | 12 条(6 语言) |
| 体量 | 正文约 829 词 · 76 链接 |
| 功能 | ffmpeg.wasm(约 25MB,首跑慢);输入 8 种容器(MP4/MOV/WebM/MKV/AVI/FLV/3GP/MPEG);输出 6 种 |

**意图**:页面仍存活但把排名让给 converter hub,顶部横幅把用户导流去「Audio & Video Converter」。属于站点架构调整的过渡形态。
**启示**:竞品在做减法——与其两个近义页互抢,不如合成一个 hub。这对我们「mp4-to-mp3 vs extract-audio」的蚕食观察是反向参照。

### URL 3 · snipsound.com/tools/audio-converter/(canonical 目标)

| 字段 | 内容 |
|---|---|
| Title(61c) | Free Audio & Video Converter — MP3, WAV, MP4, MOV \| SnipSound |
| Meta desc(188c) | 覆盖音频转换 + 视频提取双意图,浏览器内、隐私 |
| H1 | Free Audio & Video Converter |
| 结构(H3) | Popular conversions(卫星页入口:每格式对一页)/ Convert video to MP4 / Make a GIF / Why use / How It Works |
| Schema | WebApplication + FAQPage(5 问) |
| hreflang | 12 条(6 语言) |
| 体量 | 正文约 835 词 |

**意图**:一个 hub 吃下 audio converter(泛词)+ video to audio + GIF 转换,再以 Popular conversions 卫星链接分发到每格式对落地页(hub-and-spoke)。
**值得抄**:hub+卫星结构可作为我们「是否补通用 audio-converter 页」的参考形态(见功能矩阵缺口 #12)。

### URL 4 · soundtools.io/video-to-audio

| 字段 | 内容 |
|---|---|
| Title(64c) | Extract Audio from Video — Free MP3 Download Online \| SoundTools |
| Meta desc(159c) | Extract audio from video free — MP4/MOV/MKV → MP3/WAV/FLAC, browser, no watermark |
| H1 | Extract Audio from Video — Free Online Audio Extractor |
| 结构(H2) | About → Key Features → How to(HowTo) → Which Format Should I Choose? → Use Cases(按人物分 5 类) → How SoundTools Compares(对比表 vs Clideo/VEED/VLC) → FAQ×2 区共 20 问 → Related Tools |
| Schema | Organization + WebSite + WebApplication + HowTo + FAQPage |
| hreflang | 0(纯英语站) |
| 体量 | 正文约 2445 词 · 103 链接 |
| 高频词 | extract(38) upload(30) quality(21) videos(21) browser(18) flac(17) watermark(15) |
| 功能 | wasm;输入 7 容器;输出 5 种(MP3 320/FLAC/WAV/AAC/OGG);**一次只能一个文件**;无硬性大小上限 |

**意图**:主打意图③(extract audio from video),再用 FAQ 承接替代品词(Clideo/VEED alternative)和平台长尾(iPhone/Instagram/YouTube 提取)。2445 词是四家中最重的内容页。
**值得抄**:① 「Is this a Clideo alternative?」式 FAQ 吃替代品搜索;② Which Format Should I Choose? 选型段(对应我们的 Which MP3 bitrate to use,可扩成格式选型);③ 对比表结构。
**警惕**:关键词密度偏高(extract×38/2445 词),AI 感和堆砌感明显;工具本身单文件,与我们批量能力对比是软肋。

### URL 5 · freeaudioeditor.online/mp4-to-mp3(我们)

| 字段 | 内容 |
|---|---|
| Title(45c) | MP4 to MP3 — Convert Video to MP3 Online Free |
| Meta desc(128c) | Convert MP4 to MP3 in your browser. The soundtrack is extracted on your device and the video is never uploaded. Free, no signup. |
| H1 | MP4 to MP3 — Convert a Video to MP3, Online Free |
| 结构(H2) | 工具区 → Videos people convert for the sound → Where this page fits → Formats, limits and privacy → How to → Only the soundtrack is converted → Which MP3 bitrate to use → MP4 to MP3, or extract the audio → Files the browser cannot read → FAQ(6) → Guides → Related tools |
| Schema | WebApplication + HowTo + FAQPage(6 问)+ **BreadcrumbList(四家唯一)** |
| hreflang | 12 条(11 语言 + x-default,最全) |
| 体量 | 正文约 1153 词 · **161 链接(最多)** |
| 功能 | 浏览器原生解码(无 25MB wasm);输入 MP4/MOV/WebM;输出 MP3(128/192/320kbps);**多文件批量→ZIP(四家独有)**;300MB 上限、超 1h 内存警告;诚实区块「Files the browser cannot read」 |

---

## 四家横评

| 维度 | 我们 | AE | SS | ST |
|---|---|---|---|---|
| 主打意图 | ① mp4 to mp3 | ②+③ | ②+③(hub) | ③+替代词 |
| 输入容器 | 3 种 | 4 种 | 8 种 | 7 种 |
| 输出格式 | 1 种(MP3) | 5 种 | 6 种 | 5 种 |
| 批量 | ✅ →ZIP | ❌ | ❌ | ❌ 单文件 |
| 引擎体积 | 0(原生) | ? | ~25MB wasm | wasm |
| 硬上限 | 300MB | ? | 内存上限(约2-4GB) | 内存上限 |
| 字数 | 1153 | 514 | 829 | 2445 |
| FAQ 数 | 6 | 4 | 5 | 20 |
| Schema 种类 | 4(最全) | 3 | 2 | 5 |
| 语言 | 11+1 | 10 | 6 | 1 |
| 版权合法性 FAQ | ❌ | ✅ | ❌ | ✅ |

## 结论

**产品功能**:我们的硬缺口是输入容器(无 MKV/AVI/FLV/WMV)和输出格式(仅 MP3)。输入要补就得装 ffmpeg.wasm,违反 roadmap 技术决策,维持诚实边界即可(页面已有解释区块)。输出格式里 **WAV 是浏览器原生可编码的**(PCM 打包,无需新依赖),extract-audio 页需要核对是否已含 WAV——留到 #7 核对。

**页面 SEO**:基建(结构化数据、hreflang、内链)四家最全,字数适中。三个候选动作,待确认后处理:

1. **加一条版权合法性 FAQ**(对齐 AE/ST):如 "Can I convert a video I found on YouTube?" → 回答仅限自有/已授权文件。信任信号 + 吃长尾问句。
2. **desc 提批量卖点**:128c 还有约 27c 余量,可加 "Batch converts several files to a ZIP."(批量是四家独有,当前任何文案都没提)。
3. **「video to mp3」泛词归属**(意图②,四家承认的最大空白):暂不动页。先看 GSC 是否已把该词展示给 mp4-to-mp3;若长期没有,再权衡 title 微调(有与 extract-audio 蚕食的风险)——建议列入双周蚕食观察清单。

原始 HTML:`raw/ae-vtmp3.html`、`raw/ss-vta.html`、`raw/ss-ac.html`、`raw/st-vta.html`;解析器:`parse.py`(下轮复用)。

---

## SERP Top 10 Gap Analysis(Google US live 快照,2026-10-28,桌面 1440px,pws=0,IP:华盛顿州)

三个词各抓一次首页。**三个词的第一页都没有 audioeditor.org、snipsound、soundtools,也没有我们**——head 词上在场的全部是大品牌(CloudConvert/FreeConvert/Clideo/VEED/CapCut)、内容站和商店。我们与三家直接竞品在这一簇上都处于「不在场」状态,印证 roadmap 的低竞争词先行策略。

### 实测结果类型

| 查询词 | AI Overview | 主要观察 |
|---|---|---|
| mp4 to mp3 | ✅ 有 | AIO 点名 FreeConvert / CloudConvert / VLC / Adobe Express,给分步骤答案,结尾追问「需要 192 还是 320 kbps」;首条 organic 是 Chopcast(SaaS 工具页);两个对比 roundup(UniFab「4 Free Methods Compared」、ScreenApp「7 Tools Compared (2026)」);Reddit r/videoconvert;视频包 4 条(全是 VLC 教程);Wondershare 桌面软件页;CNET 下载页;savefrom 盗链站(法语被翻译结果) |
| video to mp3 | ❌ 无 | **应用商店最重:Google Play ×3 + Microsoft Store ×1**;Clideo、VEED、transcribe.com;老视频教程;顶部有「AI Mode replied」模块 |
| extract audio from video | ❌ 无 | 内容营销资源页最重:CapCut resource、Riverside blog「9 Best Methods & Tools」、Kapwing、Descript、metadata2go、ScreenApp;Reddit r/audioengineering;Play 应用 ×1;「AI Mode replied」模块 |

### Gap 分析(按截图框架)

| SERP 结果类型 | 覆盖什么 | 我们页面的缺口 | 页面原型 / 模式 | 加在哪 / 怎么加 | 优先级 |
|---|---|---|---|---|---|
| AI Overview(仅 mp4 to mp3 触发) | 分步骤直接答案 + 品牌推荐;结尾追问码率(192/320) | 页面有 HowTo schema 和码率段,但缺可摘录的短直接答案;AIO 品牌集里没有我们 | quick-answer / evidence layer:首屏工具下方给 40–60 词一段直接答案(怎么转 + 隐私 + 批量三个事实) | 「How to use」段开头加一段简短答案式引言;llms.txt 已有,AI 入口已押注 | P1 |
| 对比 roundup(UniFab 4 法、ScreenApp 7 工具) | 桌面/在线/VLC/FFmpeg 多方法横评:文件上限、批量、码率、lossless | 页面没有任何「与替代方法对比」模块;四家竞品页里只有 ST 有对比表 | refreshed roundup / comparison table:每行标注 Last verified | 码率段后加 H2 对比表(browser vs VLC vs 上传式服务:要装吗/要不要上传/上限/批量/费用/隐私),注 Last verified 2026-10;长文版走内容计划 | P1 |
| Reddit(r/videoconvert、r/audioengineering) | 真实用户的跨平台做法与取舍 | 缺「你是否真的需要在线工具」的判断块;对桌面方案零提及 | decision block:先判断需不需要,再谈工具;不把 Reddit 帖当事实引用 | 对比表旁加 "Do you need to install anything?" 短块:高频转换/超大文件 → VLC 更合适;一次性/隐私/零安装 → 本页 | P2 |
| 盗链下载器站(savefrom) | URL 直接提取(版权灰产) | 我们不做 URL 下载(正确),但立场没有明说 | 版权合法性 FAQ | FAQ 加 "Can I convert a video from YouTube?" → 仅支持本地文件,请使用自有/授权内容(与上轮候选动作 #1 合并) | P2 |
| 应用商店(Play ×3、Microsoft Store,「video to mp3」最重) | 安卓/Windows 装App 意图 | 纯 Web 无 App——这是意图分流,装 App 的人本就不是我们的用户;但页面没接住「不用装 App 吗」 | evidence layer | FAQ 确认是否已有 "Do I need to install an app?" 问句,没有则补 | P3 |
| 视频包(YouTube,VLC 教程为主) | 看视频学操作 | 无视频资产 | visual walkthrough | 长期:30s 产品演示 GIF/视频(配图管线可扩展);暂不动 | P3 |
| 品牌生态内容(CapCut resource、Riverside blog) | 工具 + 内容双引擎 | 该簇的指南覆盖待核对 | 支撑文内链回工具页 | 查 47 篇指南中 mp4-to-mp3 相关文章;缺口走内容计划队列 | P2(内容计划) |
| 桌面软件页(Wondershare、CNET) | 软件下载意图、iTunes 方法 | 与 Reddit 行同源 | —(并入 decision block) | 不单独动作 | — |

### 与上轮「候选动作」合并后的本页行动清单(待确认)

1. **对比表 + decision block**(P1/P2 合并实现):新增 H2「Browser converter vs VLC vs upload services」,对比表 + 两句诚实判断块。这是对 roundup 型结果和 Reddit 型结果的直接承接,也是四家竞品页里只有 ST 做了的。
2. **版权合法性 FAQ**(P2):承接盗链站与 AIO 的合规语境。
3. **quick-answer 引言**(P1):How-to 前加 40–60 词直接答案。
4. **"Do I need to install an app?" FAQ**(P3):承接商店分流。
5. desc 提批量卖点(上轮候选 #2,不变)。

注:Google 结果有时区/地区/动态模块差异,本快照记录的是 2026-10-28 可观察类型,不当固定排名公式。
