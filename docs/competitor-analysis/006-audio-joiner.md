# 轮次 006 · audio-joiner(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/audio-joiner` · 关键词:audio joiner(4.4k/月,竞争 0.03,CPC $3.71 全簇最高)+ merge songs(480/月)
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/serp-crawl-joiner-2026-10-28.json`、`raw/ae-merger2.html`、`raw/ae-cf.html`、`raw/ss-merger.html`、`raw/st-joiner.html`。

## 报告 A · SERP 竞争画像

- `audio joiner` 两次采样 Top9 完全一致;**`merge songs` 是独立簇**(重合仅 2/8,在位者全是小站 + 一个 139K 播放的视频 + clideo 的 merge-ac3 格式对页)。
- 无 AI Overview、无 Reddit。商店 ×1、roundup ×1(miksmusic「Best Audio Joiner App」#9)。
- 类型:EMD(audio-joiner.com #1)+ vocalremover 系(#3,疑同运营)+ 大厂(clideo/veed)+ happyscribe + cleanvoice(AI 播客清洗品牌)+ **ST(soundtools.io)#6**。
- **里程碑:ST 是全系列审计至今第一个进入头部 SERP 的直接竞品**——也是第一个「竞品在场而我们不在」的簇。

## 报告 B · 竞争页面分析表

| # | 页面 | 字数 | Schema | 要点(证据=本次抓取) | 需验证 |
|---|---|---|---|---|---|
| 1 | **audio-joiner.com(EMD)** | 768 | 仅 ImageObject+Organization | 近乎无内容基建,EMD+工具质量取胜 | 外链未采 |
| 2 | clideo.com/merge-audio | 1143 | 无 | 标准 How-to+FAQ;iPhone app 导流 | — |
| 3 | vocalremover.org/joiner | 403 未采集 | | | |
| 4 | happyscribe | 403 未采集 | | | |
| 5 | Play 商店 | — | — | — | |
| 6 | **ST /audio-joiner/** | **2258** | 5 种 schema,**FAQ 18** | 全审计最重竞品页:crossfade×37、Understanding Crossfade Transitions 专段、对比段 | 内容→排名因果未验证 |
| 7 | veed.io | — | — | 未采集(URL 不完整) | |
| 8 | cleanvoice.ai/merge-audio | 946 | WebSite 等 | AI 播客品牌跨做通用 joiner;audiobook/podcast 场景段 | — |
| 9 | miksmusic.com roundup | — | — | URL 不完整未采集 | |
| — | SS /tools/audio-merger/(不在场) | 835 | WebApp+FAQ 7 | title 跨打 "Song Merger/Merge Songs" | — |
| — | AE /tools/merger(不在场) | 463 | 仅 WebApplication | 薄;**AE 另有 /tools/crossfade-joiner =「Roadmap 占位页」**(工具未建先发页,FAQ 直答 "Is this tool fully available today?")——占位打法入册 | — |

## 报告 C · 差距矩阵(vs freeaudioeditor.online/audio-joiner,1087 词,4 种 schema,FAQ 7)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 |
|---|---|---|---|---|---|
| crossfade 能力 | 5/5 已解析页标配 | 已具备(引擎 + 页面 zero=hard join 可选) | 抓取 feats;本页 FAQ | — | 高 |
| EMD 优势 | audio-joiner.com #1 | 不适用(域名不可改) | 抓取字段 | 记录 | 高 |
| **ST 在场(#6)vs 我们不在** | ST 2258 词/18 FAQ/5 schema | 内容深度低于 ST; causality 未验证 | 报告A/B;外链数据超 MVP 范围 | **条件行动**(见报告D):GSC 先看位置再决定是否加深内容 | 中 |
| merge songs 独立簇 | 弱在位者(小站+视频) | 部分(title 已含 "Merge Songs in Order") | SERP 对照 | 留观 GSC;该簇 480/月但 CPC $2.12 显示商业意图 | 中 |
| 质量焦虑 FAQ(ST: "combine MP3 without losing quality") | 常见问 | 已具备("Is the merged file quality good?") | 双方 FAQ 对照 | — | 高 |
| AggregateRating | 0/3 已解析页 | 不适用 | 抓取字段 | — | 高 |
| 字数 | 463–2258 | 已具备(1087,中游) | 抓取字段 | EMD 以 768 词排 #1 → 字数非充分变量 | 中 |

## 报告 D · 实施任务清单

**无立即任务;一条条件行动(GSC 门控):**

- **条件行动 · crossfade 内容加深**:若 GSC 显示本页在 `audio joiner` 进入前 20 且展示增长,则参照 ST 的「Understanding Crossfade Transitions」段,用我们自己的诚实写法加一段 crossfade 选取指南(多长过渡适合什么风格),并把 FAQ 从 7 扩到覆盖 ST 18 问中我们缺的真实问法(多文件数上限、格式混合已有、补「顺序如何影响结果」类)。若排名在 50 开外,内容不是杠杆,不动。
- **AE 的 Roadmap 占位页打法**(crossfade-joiner 工具未建先发页)记录在册;我们不采用——违反诚实原则,new-tool-spec 的完成定义也不允许。

## 报告 E · 实验与跟踪

- 基线:GSC `audio joiner` / `merge songs` 曝光、点击、排名;ST #6 是最近的在位标杆,其形态(2258 词/18 FAQ)作为条件行动触发后的参照。
- `merge songs` 若 GSC 展示增长,评估是否为该独立簇补内容(标题已含关键词,优先零成本观察)。
- 蚕食:无(单页承接,无近义对)。
