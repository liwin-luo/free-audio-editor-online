# 轮次 005 · mp3-editor(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/mp3-editor` · 关键词:mp3 editor(12.1k/月,竞争 0.05)+ edit mp3
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/serp-crawl-editor-2026-10-28.json`、`raw/ss-editor.html`。

## 报告 A · SERP 竞争画像

- `mp3 editor` 两次采样 Top9 完全一致;`edit mp3` 与主词 8/10 重合。
- 无 AI Overview、无 Reddit、无视频包。Play 商店 ×1。
- 意图分裂为两层:快速编辑(cut/fade/speed,clideo/mp3cut 承接)与「真编辑器」(AudioMass、Audacity、veed 承接)。
- **关键证据:AudioMass(纯 Web 应用,静态文本 0 词)排 #3;Audacity 官网排 #9。** 这簇的排名变量是工具能力与外链/品牌信号,不是页面内容——直接支撑 roadmap Phase 3「编辑器引擎开源到 GitHub(audiomass 模式换 star 和外链)」的优先级论证。
- 竞品对照:仅 SS 有 /tools/audio-editor/(253 词,零 schema 零 FAQ 的工具壳);AE/ST 404。三家均不在场。

## 报告 B · 竞争页面分析表(已解析 4 页 + SS 竞品页)

| # | 页面 | 字数 | Schema | 要点(证据=本次抓取) | 需验证 |
|---|---|---|---|---|---|
| 1-2 | clideo/mp3cut | — | — | 与 cutter 簇同页(003 已入册) | — |
| 3 | **audiomass.co** | **0(纯 JS 应用)** | 无 | 零静态内容排 #3;开源 GitHub 品牌外链驱动 | 外链量级未采(超 MVP 范围) |
| 4 | flixier | — | — | URL 不完整未采集 | |
| 5 | Play 商店 | — | — | 商店意图 ×1 | |
| 6 | notevibes.com/mp3-editor(TTS 品牌) | 1521 | **AggregateRating+FAQPage+HowTo 全套** | 键盘快捷键段、多轨宣称、录音 | Rating 真实性 |
| 7 | veed.io/tools/audio-editor | 1727 | AggregateRating+FAQ+HowTo | 「studio-quality」定位,视频内嵌 | — |
| 8 | capcut blog | — | — | URL 不完整未采集 | |
| 9 | audacityteam.org | 518 | 无 | 桌面开源编辑器官网 | — |
| — | SS /tools/audio-editor/(不在场) | **253** | 无 | 工具壳:编辑器 + 1 问 FAQ,零内容 | — |

## 报告 C · 差距矩阵(vs freeaudioeditor.online/mp3-editor,1072 词,4 种 schema,FAQ 6)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 |
|---|---|---|---|---|---|
| 快速编辑意图(cut/fade/speed) | clideo/mp3cut 承接 | 已具备(title 即此三动作;非破坏式 + undo FAQ) | 本页 H2/FAQ | — | 高 |
| 「真编辑器」意图 | AudioMass/veed/audacity 承接 | 已具备定位(单页多步编辑 + "When to open a specialist page instead" 决策段路由到专页) | 本页 H2;roadmap 已知欠账「mp3-editor 仍是多步编辑」 | **产品级留观**:编辑器重做属 roadmap 范围,非本页任务;SERP 证明编辑器体验是该簇竞争面 | 中 |
| 字数 | **0–1727(0 = AudioMass)** | 已具备(1072) | 抓取字段 | 「字数不是本簇变量」的最强证据轮 | 高 |
| Schema | notevibes/veed 有 Rating+FAQ+HowTo | 已具备(4 种;Rating 无数据不伪造) | 抓取字段 | — | 高 |
| 键盘快捷键 | notevibes 有专段 | 未验证 | notevibes H2 | 留观:先查我们编辑器是否已有快捷键,有则页面未提;属小改进候选 | 低 |
| 开源外链(Audiomass 模式) | AudioMass 靠它排 #3 | roadmap Phase 3 已规划,未启动 | 本轮 SERP 证据 | **强化 Phase 3 优先级的论据**,不产生页面任务 | 高 |
| AggregateRating | 2/4 已解析页 | 不适用 | 无评分数据不伪造 | — | 高 |

## 报告 D · 实施任务清单

**无新增页面任务**(第三次证据型「无行动」)。两条策略级证据入册:

1. **AudioMass 零静态词排 #3** = roadmap Phase 3「引擎开源换外链」的 SERP 实证,建议在该计划启动评估时引用本节。
2. **notevibes/veed 的 AggregateRating+FAQPage+HowTo 套装**是头部编辑器工具页的标配形态;我们 schema 种类已领先,Rating 维持不伪造立场。

小改进候选(未验证,暂不动):确认编辑器是否已有键盘快捷键——有则页面补一句,无则产品决策。

## 报告 E · 实验与跟踪

- 基线:GSC `mp3 editor` / `edit mp3` 曝光、点击、排名。
- 蚕食:确认 mp3-editor 与 multi-track-audio-editor 无同查询双排名(候选加入双周清单,待 GSC 有数据后裁定)。
- 触发重跑:AudioMass/Audacity 席位变化(开源生态动作),或我们的引擎开源计划启动时重测该簇。
