# 轮次 010 · increase-volume / volume-booster(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/increase-volume` + `/volume-booster`(双页) · 关键词:increase mp3 volume(2.9k/月,竞争 0.01,CPC $3.73)+ volume booster(18.1k/月)
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/serp-crawl-volume-2026-10-28.json`、`raw/ae-vol.html`、`raw/ss-vol.html`、`raw/st-vol.html`。

## 报告 A · SERP 竞争画像

- `increase mp3 volume` 两次采样 Top9 完全一致:**Web 工具簇**——EMD(mp3louder.com #1,501 词无 schema,两步选择 UI)+ mp3cut + onlineconverter + Reddit(50+ 评论)+ freebeat + **SS #6(SS 第三次进簇)** + audiotrimmer + fileconverto + Play ×1。
- `volume booster`(18.1k)是**另一个世界:应用/扩展簇**——Chrome Web Store ×2、Play ×2、Microsoft Store 共 5 席;Web 工具仅 **ST #3(第四次在场)** + freebeat。无 AIO、无 Reddit。
- **两个词、两条不同的 SERP**——这是双页分工的最终裁决证据。
- AE volume-changer(505 词通用页)不在场。

## 报告 B · 竞争页面分析表

| 页面 | 字数 | Schema | 要点(证据=本次抓取) | 需验证 |
|---|---|---|---|---|
| mp3louder.com(#1,EMD) | 501 | 无 | 单功能站(选倍率→两击→下载),极简在场 | — |
| mp3cut.net/change-volume(#2) | 929 | SoftwareApp+Rating | 格式对路径 | — |
| onlineconverter(#3) | (薄,#6 轮已入册) | — | — | — |
| freebeat(#5/#4) | 429 限流未采 | — | **第五个簇出现同一品牌**(reverse/volume/speed/extract),跨簇铺页打法 | — |
| SS /tools/volume-booster(不在场主词、在场长尾) | 749 | 3 种,FAQ 7 | title 跨打 "Make MP3 Louder"(又见跨意图定位);clip protection 卖点 | — |
| **ST /volume-booster(volume booster #3)** | **3211(全审计新纪录)** | 5 种,FAQ 22 | Peak vs LUFS 专段、Booster vs Normalizer 段 | — |
| AE volume-changer(不在场) | 505 | 4 种,FAQ 4 | boost/reduce 通用 | — |
| OURS ×2 | 896 / 1011 | 各 4 种,FAQ 7+7 | MP3 安静文件轴(4× limiter)/ 全范围增益+视频输入轴(peak≠LUFS 诚实段) | — |

## 报告 C · 差距矩阵(vs 我们的 increase-volume + volume-booster 双页)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 |
|---|---|---|---|---|---|
| **蚕食裁定** | increase mp3 volume 与 volume booster 是两条 SERP(应用簇 vs 工具簇) | 双页分工与两条 SERP 一一对应 | 本轮快照对照 | **watch 项凭此降级**:双页定位无需收紧;保留 GSC 双周确认到首批数据进来即可 | 高 |
| increase mp3 volume 在位质量 | #1 = 501 词无 schema 两步站 | 已具备(896 词、4 schema、limiter 卖点、normalize 区分 FAQ) | 抓取对照 | 竞争力足够;等 GSC | 高 |
| volume booster 头部 | 5/7 是商店条目 | Web 页打应用簇是结构性逆风 | SERP 类型分布 | 不追头部;页面已有 Web-first 定位,实际争夺的是「volume booster online」类长尾;无动作 | 高 |
| Peak vs LUFS 认知内容 | ST 专段 | 已具备(volume-booster H2「A higher peak is not a louder file」+ Boost/normalize/compress 路由段) | H2 对照 | — | 高 |
| 批量表达 | 竞品无 | 本双页不在 batch: true 名单(单文件工具),无动作 | tools.ts | — | 高 |
| AggregateRating | mp3cut/mp3cut 系 | 不适用 | 无评分数据 | — | 高 |

## 报告 D · 实施任务清单

**无页面任务。** 一条流程建议:

- roadmap 的「volume-booster 与 increase-volume 互相蚕食」watch 项(关键风险 #5 + 双周清单):本轮 SERP 证据表明两词分属应用簇与工具簇、双页定位一一对应,**建议降级为「已确认分工」**——双周例会看一眼 GSC 双排名即可,预期不再需要动作。是否改 roadmap 文字由你定(一句话改动)。

观察:freebeat.ai 已在本审计 5 个簇出现(reverse/volume/speed/extract 系列),跨簇铺页的程序化同行,与 rendley 同类,持续留观。

## 报告 E · 实验与跟踪

- 基线:GSC 双页 × 双词的曝光矩阵——确认 increase-volume 吃 `increase mp3 volume`、volume-booster 吃 Web 切片长尾,无双排名。
- volume-booster 的现实天花板:头部被应用簇占据,页面价值在长尾;KPI 看 `volume booster online` 类查询而非头部。
- 触发重跑:freebeat 类跨簇站点在本簇新增条目,或 ST 再加深内容。
