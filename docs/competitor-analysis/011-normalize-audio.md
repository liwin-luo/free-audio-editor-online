# 轮次 011 · normalize-audio(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/normalize-audio` · 关键词:normalize audio(1k/月,竞争 0.05)
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/a2e-norm.html`、`raw/nv-norm.html`、`raw/ae-norm2.html`。

## 报告 A · SERP 竞争画像

- **本簇是目前信息意图最重的一个**:Wikipedia 词条、iZotope/BorisFX/LANDR 博客、Audacity 手册、Reddit ×2、YouTube ×2——约一半结果在回答「什么是归一化」而非提供工具。
- **两次采样结果大不相同**(c1 工具+维基+AE,c2 换了 Reddit 帖/aijinglemaker/speechgen/GNU 工具/LANDR)——低量词意图混杂、SERP 不稳定的典型案例。记录两次,后续轮次维持。
- 工具切片:audio2edit(#1,c1)、notevibes(c1)、**AE /tools/audio-normalizer(#6,c1)——AE 全审计首次露面**。
- 无应用商店、无 EMD。

## 报告 B · 竞争页面分析表(已解析 3 页)

| 页面 | 字数 | Schema | 要点(证据=本次抓取) | 需验证 |
|---|---|---|---|---|
| audio2edit.com/normalize-audio(#1) | 1224 | 全套(AggregateRating+FAQ+HowTo) | **LUFS/loudness ×36**;Peak/RMS/EBU R128 选型段 + 目标响度段——工具页里嵌了响度课程 | — |
| notevibes.com/audio-normalizer(#4) | 1648 | AggregateRating+FAQ+HowTo | 与其 mp3-editor 页同模板 | — |
| AE /tools/audio-normalizer(#6) | 493 | 4 种,FAQ 4 | **LUFS ×34**;FAQ「What LUFS target should I choose?」→ 其归一化支持 LUFS 目标;另有与 volume-changer 区分的 FAQ | — |
| 信息型结果(Wikipedia/博客/手册/Reddit/YouTube) | — | — | 未抓(参考型);占约半数席位 | — |
| OURS | 1238 | 4 种,FAQ 8 | 峰值归一诚实定位;FAQ 明答 LUFS 目标问题(路由 loudness-meter);批量三层表达 ✓ | — |

## 报告 C · 差距矩阵(vs freeaudioeditor.online/normalize-audio)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 |
|---|---|---|---|---|---|
| LUFS 目标归一化 | AE(FAQ)/audio2edit(选型段)提供 | **拆分承接**:normalize=峰值,loudness-meter=LUFS 目标导出(能力在站内) | AE FAQ;本页 FAQ 路由;loudness-meter 步骤「Pick a target and export」 | 无缺口;维持诚实切分,确认两页互链 | 高 |
| 信息型内容(Wikipedia/博客占半) | ~5/8 席 | 部分具备:`/guides/normalize-vs-compress-audio` 已锚定本页 | guides.ts:987 | 信息向增量走内容计划(蚕食红线:normalize/compressor/loudness 三角已划清,新文必须换查询场景;先核对 vs-compress 篇是否已覆盖 what-is,勿重复) | 中 |
| 字数 | 工具页 493–1648 | 已具备(1238,上游) | 抓取字段 | — | 高 |
| AggregateRating | 2/3 | 不适用 | 无评分数据 | — | 高 |
| 内链 loudness-meter | — | 未验证 | 本轮未核 related 区 | 下轮数据循环时确认 normalize ↔ loudness-meter 互链 | 中 |

## 报告 D · 实施任务清单

**无页面任务。** 一条内容计划候选(交队列裁定):「what is audio normalization: peak vs LUFS」类信息向指南——但须先核对既有 normalize-vs-compress 指南的覆盖面,三角红线内不得开重复文;若 vs-compress 篇已答,改为在该篇回填 FAQ。

## 报告 E · 实验与跟踪

- 基线:GSC `normalize audio` 曝光、点击、排名;SERP 不稳定(两采样不同),后续每轮维持双采样。
- normalize ↔ loudness-meter 互链确认后记录;信息向指南若立项,观察本页经内链的长尾变化。
