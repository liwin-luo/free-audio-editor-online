# 轮次 001b · SERP Top 10 报告 A–E(按 seo_serp_data_mining_tool 规范)

规范来源:`/Users/luogangming/projects-b/seo_serp_data_mining_tool.md`(repo 外文档)§6/§8/§9/§10。
原则:证据优先 · 相关性≠因果 · 记录来源与采集时间 · 允许「未采集/未验证」· 不把单次采样当固定排名。

## 采集上下文(全部快照共用)

| 字段 | 值 |
|---|---|
| 数据源 | Google live(浏览器实抓,无第三方 API) |
| 参数 | gl=us&hl=en&pws=0,桌面 1440×900 |
| 采集时间 | 2026-10-28,两次:c1≈16:05、c2≈16:25(本地时间) |
| 地区 | 美国(IP:华盛顿州,Google footer 自报) |
| 样本 | 3 查询 × 2 次采样,唯一结果 ≈45;解析 16 页 + 可达验证 3 页 |
| 未采集 | URL 不完整 7(screenapp blog、cnet、savefrom、reddit 帖、capcut blog、canva、techcommunity);反爬 3(adobe 403、happyscribe 403、ezgif 超时) |
| **采样漂移实证** | 同一查询 `mp4 to mp3`,c1 有 AI Overview + Chopcast/UniFab/ScreenApp/Reddit/视频包,c2(20 分钟后)全部消失,换成 9 条纯工具页 → 单次快照不可当固定结构,后续轮次每词固定记两次 |

原始数据:`raw/serp-crawl-2026-10-28.json`(逐页字段)、`raw/` 内各 HTML。

---

## 报告 A · SERP 竞争画像

| 查询 | 主意图(推断) | 本次采样类型分布 | 备注 |
|---|---|---|---|
| mp4 to mp3 | 任务型:把手上这个视频文件转成 MP3 | **16/18 可解析页 = 上传式在线工具页**;c1 另出现 roundup×2、Reddit、视频包、桌面软件页、盗链站、AIO | 页面原型高度集中=工具页,我们原型匹配;AIO 是否出现本身在漂移 |
| video to mp3 | 分裂:工具 + **装 App**(商店 4/12) | Play×3、MS Store×1、Clideo/VEED/transcribe 等 | 装 App 意图不是 Web 页能承接的 |
| extract audio from video | 工具+信息混合 | 品牌内容资源页(CapCut/Riverside/Kapwing/Descript)+ 工具页 + Reddit r/audioengineering | 内容营销是该词的入场券 |

四家直接竞品(audioeditor/snipsound/soundtools/我们)在两个采样、三个词的全部首页中**均未出现**。

## 报告 B · 竞争页面分析表(已解析,Q1 为主)

| # | URL | 类型 | 字数 | Schema | 要点(证据=本次抓取) | 需验证 |
|---|---|---|---|---|---|---|
| 1 | cloudconvert.com/mp4-to-mp3 | 上传式工具 | **165** | 无 | 极简,域名权威强 | 权威贡献度未知 |
| 2 | freeconvert.com/mp4-to-mp3 | 上传式工具 | 1684 | WebApp+Breadcrumb | How-to + 格式科普(What is MP4/MP3) | 实际功能未测 |
| 3 | convertio.co/mp4-mp3 | 上传式工具 | 1587 | **Product+AggregateRating** | 评论星级富摘要 | 星级真实性 |
| 4 | play.google(tapuniverse) | 商店 | — | SoftwareApplication+Rating | 装 App 意图 | — |
| 5 | zamzar.com/convert/mp4-to-mp3 | 上传式工具 | 1093 | **FAQPage** | 信任段「You're in good company」 | — |
| 6 | soundandgo.com/en/mp4-to-mp3 | 上传式工具 | 1635 | FAQPage+BlogPosting | 技术细节段 | — |
| 7 | rendley.com/tools/convert/mp4-to-mp3 | 工具 | 635 | FAQPage+**HowTo**+Offer | H2「Running this on a batch of files」 | 批量实现方式 |
| c1 | chopcast.io/tools/… | SaaS 工具 | 1508 | VideoObject | 注册漏斗 | — |
| c1 | unifab.ai/resource/… | **对比 roundup 文** | 3159 | BlogPosting+FAQPage×2 | 覆盖 bitrate/批量/stream-copy vs re-encode/跨平台 | — |
| c1 | wondershare(桌面软件) | 软件页 | — | — | 可达已验证,细节未提取 | — |
| 未采集 | adobe(403)、happyscribe(403)、ezgif(超时)、screenapp/cnet/savefrom/reddit/youtube/canva/capcut/techcommunity(URL 不完整) | | | | 按「未知」记录,不猜测补齐 | |

Q2:freeconvert/convert/video-to-mp3(847 词,WebApp)、audiotranscriber.io/video-to-mp3(1118 词,无 schema)。Q3:biteable(1793 词,FAQPage)、audiocut(761 词,无 FAQ schema)、audio-extractor.net(587 词,无 H2,裸工具页)、restream/onlineconverter(可达已验证)。

## 报告 C · 目标页面差距矩阵(vs freeaudioeditor.online/mp4-to-mp3)

状态:已具备 / 缺失 / 部分具备 / 未验证 / 不适用。竞品覆盖分母 = Q1+Q2+Q3 已解析 16 页。

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 | 成本 |
|---|---|---|---|---|---|---|
| 页面原型=工具页 | 16/16 工具/商店页 | 已具备(原型匹配) | 报告A 分布 | — | 高 | — |
| 隐私:上传 vs 本地 | 13/16 明确「上传到服务器」 | 已具备(**本地**,差异点) | 各页文案 vs 我们页面事实 | 维持表达 | 高 | — |
| 输出多格式 | 12/16 提供 ≥5 种输出 | **缺失**(仅 MP3) | 本页实测 + 竞品页 | WAV 浏览器原生可编码;待 #7 轮核对 extract-audio 后决策 | 高(缺口)/中(动作) | 中 |
| 方法对比内容 | 2 个 roundup 型页在 c1 出现 | **缺失** | unifab 3159 词对比文;AIO 推荐含 VLC | 见任务 T1 | 中 | 中 |
| FAQPage schema | 5/16 | 已具备 | 抓取字段 | — | 高 | — |
| HowTo schema | 1/16(rendley) | 已具备(**领先**) | 抓取字段 | — | 高 | — |
| 评分富摘要 AggregateRating | 2/16(convertio、商店) | 不适用 | 我们无真实评分数据,不伪造 | 不做 | 高 | — |
| 正文字数 | 165–1793,中位≈1350 | 已具备(1153,中段) | 抓取字段 | 无证据表明字数是约束(相关性观察) | 低 | — |
| 批量 | ≥2/16 明确(rendley、freeconvert) | 已具备(ZIP,少数派) | rendley H2;本页 FAQ | desc 补一句(任务 T5) | 高 | 低 |
| 装 App 意图 | 商店 4/12(Q2) | 不适用(纯 Web 定位) | 报告A | FAQ 一句「无需安装」(T4) | 高 | 低 |
| AIO 品牌引用 | 品牌集全为大站 | 不适用(非页面级可解) | c1 AIO 文本 | 长期品牌/外链,不进本页任务 | 中 | — |

## 报告 D · 实施任务清单(§9.3 固定格式)

**T1 · 对比表 + decision block(P1)**
问题:页面没有任何「与替代方法(桌面 VLC/上传式服务)对比」的模块。
证据:c1 快照出现 2 个 roundup 型结果;AIO 推荐含 VLC 离线方案;unifab 对比文 3159 词。(来源:2026-10-28 Google US 快照)
用户需求:选型——装软件还是用网页、上传还是本地。
差距:16 页竞品样本中该模块也稀少(rendley 批量段除外),是共性缺口。
动作:码率段后新增 H2 对比表(本地网页/VLC/上传式服务 × 安装/上传/上限/批量/费用/隐私)+ 2 句诚实 decision block(什么情况 VLC 更合适),标注 Last verified 2026-10。
预期影响(假设):承接比较型长尾查询,提供 AIO 可摘录事实;**不承诺排名**。
成本:中(0.5–1 天)。置信度:中。替代解释:roundup 页排名可能靠域名权威而非内容形态。
验证:GSC 该页比较型查询曝光 4 周趋势 + 收录确认。

**T2 · quick-answer 引言(P1)**
问题:How-to 段前无 40–60 词直接答案段。证据:c1 AIO 输出步骤型答案并追问码率,说明该意图存在摘要化答案需求。动作:How-to 开头加一段直接答案(怎么转+隐私+批量)。预期影响(假设):成为 AIO/精选摘要可摘录源;不可直接观测。置信度:中低。验证:GSC 查询覆盖与 CTR 变化。

**T3 · 版权合法性 FAQ(P2)** — 证据:savefrom 盗链站在场。动作:一条 "Can I convert a YouTube video?" FAQ(仅限自有/授权文件)。验证:长尾问句曝光。

**T4 · "Do I need to install an app?" FAQ(P3)** — 证据:Q2 商店 4/12。动作:一条 FAQ 说明浏览器即用、iPhone/Android 可用。

**T5 · meta desc 提批量卖点(P2)** — 证据:本页 FAQ 已有批量→ZIP 事实,desc(128c)未提;rendley 以批量作 H2。动作:desc 补批量短语,≤160c。

## 报告 E · 实验与跟踪计划

- **基线**:GSC 三查询(mp4 to mp3 / video to mp3 / extract audio from video)在该页的曝光、点击、平均排名。⚠️ roadmap 2026-10-23:GSC 数据循环从未跑过——基线自本周期开始积累,先确认页面收录。
- **改动记录**:任务卡实施日期回写本文件(implementation log)。
- **主指标**:三查询曝光/点击;**辅助**:比较型长尾(如 "mp4 to mp3 without uploading")是否出现、CTR。
- **观察周期**:4 周,对齐 roadmap 阶段 2 数据循环。<20% 变化视为噪声;>50% 且持续 2 周视为信号。
- **归因注意**:期间有并行改动(其他页/内链);SERP 本身漂移(本日两次采样已实证);无对照页面,不做单因归因。

## 实施日志(implementation log)

| 日期 | 任务 | 改动 | 验证 |
|---|---|---|---|
| 2026-10-28 | T5 desc 批量卖点 | `tools.ts` mp4-to-mp3 description 改为 4 句直答式(158 字符宽,≤162 上限),批量→ZIP 入 desc | check:serp PASS |
| 2026-10-28 | T2 quick-answer | intro 重写为 6 句直答段(怎么转/本地/不上传/批量 ZIP/300MB 上限/不编码画面) | 构建产物确认 |
| 2026-10-28 | T3+T4 两条 FAQ | "Can I convert a video from YouTube…?"(不接受链接+条款提示)与 "Do I need to install an app?"(浏览器即用/无账号),追加至 faqs 尾部 | FAQPage schema 8 问确认 |
| 2026-10-28 | T1 对比表 + decision block | `ToolSection` 类型新增 `table`/`outro`;`ToolPage.astro` 渲染(复用站内表格样式,含表格时容器加宽 max-w-3xl);新 section「This page, VLC, or an upload site」:安装/文件是否离机/上限/批量/费用 ×5 行,标注 checked 2026-10-28,收尾两行 decision block | 构建产物确认 |
| 2026-10-28 | i18n 级联 | 10 语言目录各 +2 条本地化 FAQ(构建强制);es/de 同步新 section(含表格翻译,shape 校验通过);其余 8 语言维持短页面先例,表格翻译进翻译队列 | assertCatalogs 通过,834 页构建成功 |

基线备注:GSC 基线自本周期开始积累;4 周后(对齐 roadmap 阶段 2 数据循环)评估三查询曝光/点击变化。
