# 轮次 009 · change-audio-speed(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/change-audio-speed` + `/tempo-changer`(双页) · 关键词:change audio speed(2.4k/月,竞争 0.01)+ speed up audio
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/serp-crawl-speed-2026-10-28.json`、`raw/ae-speed.html`、`raw/ss-speed.html`、`raw/st-speed.html`。

## 报告 A · SERP 竞争画像

- `change audio speed` 两次采样 Top9 完全一致;`speed up audio` 与主词 7/8 重合。
- 无 AI Overview;**Reddit(#7,"speed up/slow down audio without changing pitch")与 YouTube 教程(#9,同题,92.5K 播放)双双在场**——本簇的核心焦虑就是「保调变速」。
- 类型:品牌双Entry(musicspeedchanger 的 Web 应用 #1 + 同品牌 Play 应用 #6)+ **EMD(audiospeedchanger.com #3)**+ mp3cut 格式对路径(#2)+ audiotrimmer/vocalremover/29a.ch(独立开发者的极简 TimeStretch,#8)。
- **三家的 speed 页都不在场**——包括 ST 那个 3137 词/FAQ 20 的最重页面。#1 又是 240 词的纯应用页:内容深度第三次被证明不是本类目的充分变量。
- 变体意图(nightcore/sped-up)由 SS 专页与 FAQ 承接,未在本 SERP 出现头部条目。

## 报告 B · 竞争页面分析表

| # | 页面 | 字数 | Schema | 要点(证据=本次抓取) | 需验证 |
|---|---|---|---|---|---|
| 1 | app.musicspeedchanger.com | **240** | WebApp+Offer | 纯应用页;同品牌 Play 应用占 #6(品牌双 Entry) | — |
| 2 | mp3cut.net/change-speed | 1024 | SoftwareApp+**AggregateRating** | 格式对路径 | — |
| 3 | audiospeedchanger.com(EMD) | 683 | FAQPage | H2「Pitch vs. tempo — what's the difference?」——与我们双页切分同一轴 | — |
| 4 | audiotrimmer.com/audio-speed-changer | (476,#3 轮已入册) | — | — | — |
| 5 | vocalremover.org/pitch | 403 未采集 | | | |
| 7 | Reddit 保调提问 | — | — | 3 年前的帖仍排在工具页之中 → 需求长存 | — |
| 8 | 29a.ch/timestretch | 1174 | 无 | 独立开发者;键盘快捷键 + Changelog 段 | — |
| 9 | YouTube Audacity 保调教程 | — | — | 92.5K 播放 | — |
| — | AE speed-changer(不在场) | 506 | 4 种,FAQ 4 | 「optional pitch preservation」开关 | — |
| — | SS tempo-changer(不在场) | 652 | 2 种,FAQ 8 | 0.25×–4× 宣称全程可保调;FAQ 承接 nightcore/slowed 变体 | — |
| — | ST tempo-changer(不在场) | **3137** | 5 种,FAQ 20 | BPM 自动检测;乐手练习轴;**最重页面也不在场** | — |
| — | OURS ×2 | 758/784 | 各 4 种,FAQ 6+6 | pitch-moves vs pitch-stays 切分 | — |

## 报告 C · 差距矩阵(vs 我们的 change-audio-speed + tempo-changer 双页)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 |
|---|---|---|---|---|---|
| 簇核心意图=保调变速 | Reddit+YouTube+ST 全页+EMD 的 Pitch vs tempo 段 | 已承接(tempo-changer 整页即此意图,±0.01 步进) | SERP 模块;双页 FAQ 互答 | — | 高 |
| 保调范围 | SS 宣称 0.25×–4× 全程保调;AE 有开关 | **±0.75–1.25(诚实质量边界)**;本页 FAQ 首问即此并路由 | SS desc;本页 FAQ | **产品级留观**:GSC 若出现被范围卡住的查询(如 0.5× 保调),再评估放宽或加超界提示路由到 pitch-changer;不为营销数字牺牲音质诚实 | 中 |
| 双页蚕食 | SS 单页跨打 speed+nightcore+slowed(反例);ST 单页通吃 | 已具备(speed=pitch 跟着走 / tempo=pitch 不动,互链互答) | 两页 H2/FAQ 对照 | 双周清单已含;本轮确认切分成立 | 高 |
| Reddit 型决策块 | Reddit 帖在场 | 已具备(speed 页 FAQ 首问即保调路由) | 本页 FAQ | 不需要额外 decision block | 中 |
| 字数 | 240–3137 全谱,240 词排 #1 | 已具备(中游) | 抓取字段 | 第三次证明字数非充分变量 | 高 |
| AggregateRating | mp3cut | 不适用 | 无评分数据 | — | 高 |
| BPM 联动(ST 轴) | ST 自动检测 BPM | 未联动(key-bpm-finder 独立页) | ST desc/H2 | 留观,产品范围克制 | 低 |

## 报告 D · 实施任务清单

**无页面任务。** 两条产品级留观:

1. **保调范围**:±25% 是质量诚实边界,SS 的 0.25×–4× 是营销数字,二者是产品哲学差异。GSC 数据若显示 tempo-changer 有稳定展示且查询带极端倍率,再评估。
2. **nightcore / sped-up 变体页**:SS 有专页,意图与 speed 簇重叠,维持 #1 轮缺口清单里的位置(内容计划候选),本轮 SERP 未新增证据。

## 报告 E · 实验与跟踪

- 基线:GSC `change audio speed` / `speed up audio` 在双页的曝光分布——**重点看同查询是否双页都出现**(蚕食裁定输入)。
- `tempo changer` 单词的 SERP 本轮未采样(我们的 tempo-changer 页主词),留到下一轮补。
- 触发重跑:保调类查询在 GSC 出现量级,或竞品调整保调能力。
