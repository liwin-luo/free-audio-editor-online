# 轮次 004 · audio-trimmer(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/audio-trimmer` · 关键词:audio trimmer(14.8k/月,竞争 0.02)+ trim audio online(1k/月)
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/serp-crawl-trimmer-2026-10-28.json`、`raw/ss-trim.html`、`raw/st-trim.html`、`raw/ae-trim.html`(404 空页)。

## 报告 A · SERP 竞争画像

- `audio trimmer` 两次采样 Top9 完全一致;`trim audio online` 与主词 7/9 重合(同簇换序)。
- 无 AI Overview、无应用商店(与 mp3 cutter 簇不同)、无视频包。
- 类型分布:EMD 专站(audiotrimmer.com #1)+ 大厂工具/内容页(clideo、rev、mp3cut、veed)+ **Reddit r/audioengineering 帖(#7,"Simple audio trimmer",10+ 评论,5 个月前,本系列审计首次出现 Reddit)+ 程序化小站 ×2**(rendley /Tools/Trim、jukeblocks)。
- **在场页极薄**:rendley 仅 **190 词**排 #6(带 FAQPage schema);jukeblocks 588 词;audiotrimmer 476 词。本簇对内容深度极其宽容,排名靠域名相关性与工具本身。
- 竞品对照:SS(/tools/audio-trimmer/,title 跨打 "Free MP3 Cutter")、ST(/audio-trimmer/,2195 词 loop preview 轴)、**AE 无此页(404)**。三家均不在场。

## 报告 B · 竞争页面分析表

| # | 页面 | 字数 | Schema | 要点 | 需验证 |
|---|---|---|---|---|---|
| 1 | audiotrimmer.com(EMD) | 476 | 无 | 薄页,靠域名 | — |
| 2 | clideo.com/cut-audio | 1088 | 无 | 与 mp3 cutter 簇同页 | — |
| 3 | rev.com(转写品牌工具页) | — | — | **URL 不完整,未采集**(不猜路径) | 内容形态未知 |
| 4 | mp3cut.net(此处 title 为 "Audio Cutter") | 962 | SoftwareApp+Rating | 同站多标题打同簇 | — |
| 5 | vocalremover.org/cutter | 403 未采集 | | | |
| 6 | rendley.com/tools/trim | **190** | FAQPage+Offer 等 | 极薄 + schema 齐全 + 批量段(与 wav-to-mp3 同模板) | — |
| 7 | Reddit r/audioengineering | — | — | "Simple audio trimmer" 讨论 → 用户在找「简单」 | 帖内高频诉求未抓 |
| 8 | jukeblocks.io/free-tools/audio-trimmer | 588 | FAQPage | — | |
| 9 | happyscribe 403 未采集 | | | | |
| — | ST /audio-trimmer/(不在场但同簇竞品) | 2195 | 5 种 schema,FAQ 14 | loop preview 轴(preview×37) | — |
| — | SS /tools/audio-trimmer/ | 868 | WebApp+FAQ 5 | title 跨打 "Free MP3 Cutter"(他们自己的蚕食) | — |

## 报告 C · 差距矩阵(vs freeaudioeditor.online/audio-trimmer,1360 词,4 种 schema,FAQ 7)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 |
|---|---|---|---|---|---|
| 页面原型=工具页 | 8/9 为工具/内容工具页 | 已具备 | 报告A | — | 高 |
| 「简单」诉求(Reddit 帖 #7) | 帖子本身排名 | 已具备(单 span keep 定位 + honest 章节结构) | 帖标题;本页 H2 群 | 不需要 decision block(本页无「在线 vs 桌面」级抉择) | 中 |
| 定位区隔:podcast/voice memo | 在场页无 podcast 专定位(rev 品牌语义最近) | 已具备(title "Trim a Podcast or Voice Memo",与 mp3-cutter 的歌曲切割刻意区隔) | title 对照 | 维持;title 无 "online free" 字样,CTR 进 GSC 观察 | 中 |
| 字数 | 在场 190–2195 | 已具备(1360,上游) | 抓取字段 | — | 中 |
| Schema | 在场小站普遍带 FAQPage | 已具备(4 种,领先) | 抓取字段 | — | 高 |
| 边缘淡化 fade | clideo/mp3cut/audiotrimmer 提供 | 未开(trimFades 只给了 mp3-cutter) | #3 轮实现 | 留观:裁播客做素材的 fade 需求弱于剪歌;GSC 出现 fade 长尾则一行配置开启 | 中 |
| loop/选区预览 | ST 主打轴 | 已具备(trimLayout labeled play) | ST 词频 vs 本页编辑器 | — | 高 |
| AggregateRating | 少数 | 不适用 | 无评分数据不伪造 | — | 高 |
| 蚕食:audio-trimmer vs mp3-cutter | SS 用一个页跨打两词(反例) | 已具备(两页定位明确区隔) | 两页 title/H1/FAQ 对照 | 纳入双周 GSC 蚕食清单,确认无双排名 | 高 |

## 报告 D · 实施任务清单

**无新增任务**(第二次证据型「无行动」)。原型匹配、字数上游、schema 领先、定位区隔清晰。两条留观:

1. title 的 CTR(无 "online free" 修饰词,podcast 定位优先)——GSC 数据循环里看。
2. fade 长尾:GSC 出现 "trim audio fade" 类查询时,给本页开 `trimFades`(一行配置,管线已就绪)。

## 报告 E · 实验与跟踪

- 基线:GSC `audio trimmer` / `trim audio online` 曝光、点击、排名。
- 蚕食检查:双周确认 audio-trimmer 与 mp3-cutter 无同查询双排名(建议加入 roadmap 双周清单,与 volume-booster/increase-volume、speed/tempo 并列)。
- 触发重跑:SERP 出现 AIO/Reddit 席位变化,或 rendley 型小站继续挤进其他头部词(其 190 词模板值得我们持续关注为「程序化同行」)。
