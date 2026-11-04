# 90 天计划 vs 仓库现有文档·冲突检查（audit/plan-conflicts.md）

> 日期：2026-11-04 · 对象：`freeaudioeditor-90-day-plan.md`（11-04）
> 对照文档：`docs/roadmap.md`（10-23）、`docs/seo.md`（10-22/10-29 增补）、`docs/new-tool-spec.md`、`docs/plans/2026-10-23-content-plan.md`、`docs/plans/2026-11-01-trend-radar.md`、`docs/product-facts.md`（10-27）、`docs/content-types.md`、`schedule-2026-11.md`、`2026-11-02-voice-memo-louder.md`、`docs/plans/*` 全部、`docs/competitor-*`。
> 结论先行：**大方向高度一致，无原则性冲突；有 2 个执行级冲突、4 个事实性过时、2 个需要人工拍板的决策点。**

---

## 一、一致的部分（计划可以放心执行）

| 90 天计划的主张 | 仓库现状 | 判定 |
|---|---|---|
| 先审计、不改代码、等待人工确认（§14.1） | 本轮审计已按此执行，生产代码零改动 | ✅ 完全一致 |
| 一条意图一个 URL、页面必须有独立价值（§4.3/§6.2） | `new-tool-spec.md` §1、`seo.md`、`content-plan.md` 蚕食红线早已是铁律 | ✅ 一致 |
| Local-First 是核心资产、必须可验证（§十六.2） | `product-facts.md` 就是这套体系；本轮代码审计证实声明成立 | ✅ 一致，且已基本做完 |
| 不编造搜索量/流量/性能数据（§14.1 规则） | `content-plan.md`、`schedule-2026-11.md` 同款红线 | ✅ 一致 |
| 相似页对需要裁定（§4.4） | roadmap 双周蚕食裁定已运行，volume/increase 对已有 10-28 SERP 实证 | ✅ 一致，计划补了新对子 |
| 多语言先稳定不扩张（§八.1） | content-plan 阶段 3"翻译优先于新英语文" | ✅ 一致 |
| CWV 目标 LCP≤2.5s / CLS≤0.1（§9.6） | 现行预算更严（`seo.md` §性能：LCP<2.0s、CLS<0.05、首屏 JS<90KB；new-tool-spec 每页 LCP<1.5s） | ✅ 无冲突，**不要按计划放松现有更严标准** |

---

## 二、执行级冲突（需要先解决再排期）

### C1. 阶段三 Week 7–8"发布 10–15 篇 How-to/格式指南" vs 英语新文冻结 ⚠️ 最大冲突

- 计划原文（§十二 阶段三）：「建议初期选择 10–15 个高质量内容主题进行验证」。
- 仓库现行规则（`content-plan.md`，10-23）：**广度生产冻结，冻结期间新英语文 0 篇**；理由是"47 篇指南全部停在等 GSC 第 4 周数据，Semrush 仅收录 2 词，再铺新文是赌没验证过的词"。解冻条件是数据循环跑完一轮并出现集群证据。`trend-radar.md` 也明确"C 选题全部入候选池，不破冻结"。
- 90 天计划写这份清单时**不知道冻结决策的存在**（它把"内容体系有基础，需要建立关联"当成现状，把新文章当成增长手段）。
- **建议**：执行时以 content-plan 为准——阶段三改为"跑数据循环 + 按数据解冻"，不批量生产。若用户想推翻冻结另说，但那是改 content-plan 的决策，不是 90 天计划能自带执行的。

### C2. 90 天计划阶段一/二的节奏 vs `schedule-2026-11.md` 每周快赢排期

- schedule-2026-11 排了 11 月每周 2 项的内容刷新（#2 M4A→MP3 本周简报到期 11-05；#3/#4 下周……），且每周一 10:00 有定时任务在跑。
- 90 天计划阶段一（Day 1–15 ≈ 11-04~11-18）要求"第一周不要开发新功能，先审计"。
- **判定：可以并行，不算硬冲突**——排期项全部是"刷新现有页"的文案/内链工作，不是新功能，与审计互不干扰（本轮审计就是在排期任务运行的同时完成的）。但**阶段二 Week 3 的"首页改造"（≈11-18 起）会和排期 Week 3（11-16~22）同时动文件**，两个会话并行改 `tools.ts`/i18n 时必须遵守 AGENTS.md 的并行规则；建议首页改造单独找窗口或排到 Week 4。

---

## 三、事实性过时（计划基于过时认知，按现状修正即可）

### C3. 计划 §5.2/阶段三 Week 9–10 把 8 个工具当成"第二优先级待评估功能"

计划列的：Audio Equalizer、Audio Normalizer、Remove Background Noise、Audio Looper、Audio Waveform Generator、Spectrogram Generator、Pitch Changer、Key and BPM Finder——**8 个全部已上线**（本次审计逐一验证，其中 6 个 check 脚本 PASS）。阶段三"选择 5–8 个有价值的工具进行优化或增强"应改读为"从已上线的这批里按数据挑加深对象"。同理 §5.3 实验性功能里 Audio to MIDI、432 Hz、Auto Panner、Soundboard、3D Audio、Image to Audio 也都已上线。计划 §一 的工具数（57）与分类表是对的，说明作者看到了首页但没盘点到工具级。

### C4. 计划 §2.1 竞品名单里的 Tapecut 已是死站

本轮实测：tapecut.com JS 跳转到 GoDaddy 出售页，2025-07 的 Wayback 快照也是空的。竞品研究应从名单中移除，换成仍活跃的浏览器编辑器（AudioMass、cut.audio——仓库竞品文档的主对象）。

### C5. trend-radar（11-01）自身的候选也已落地——双向过时

`trend-radar.md` A 表 5 个新工具候选里 4 个已经上线：noise-remover、voice-changer、add-reverb、tap-tempo、music-visualizer 视频导出（全在 57 个审计过的工具里）。只有 stem-splitter（A3）还停留在"先做 spike"。仓库策略文档里只有这份最"新"（11-01）却已部分过时——后续会话引用时注意。

### C6. `docs/architecture.md`（10-22）漂移清单

- 「51 个工具」→ 实际 57；
- 编辑器分发表缺 `midi`、`tapTempo`、`soundboard`、`visualizer:'live'` 四个岛，优先级顺序已变；
- 指互译清单在 `src/i18n/locales.ts` 的 `TRANSLATED_GUIDES`——该符号不存在，实际在 `src/data/guides.ts`；
- 未覆盖 analytics/consent 层、sitemap lastmod 管线、`mcp/`、`/es/guias` 重定向。
（90 天计划本身不引用这些细节，属于"审计顺带发现"，修复动作属阶段二地基。）

---

## 四、需要人工拍板的决策点（不是文档冲突，是计划内部的战略选择）

### D1. 首页定位转向："Free Online Audio Editor" → "Free Online Audio Tools"

- 现状（本轮实抓）：首页 Title=`Free Online Audio Editor — Cut, Convert & Edit, No Upload`，H1=`Free online audio editor`。
- 计划 §1.2 明确说"不建议只把网站定位成 Free Online Audio Editor……过于宽泛"，§3.3 建议 Hero H1 改 `Free Online Audio Tools`。
- **但仓库所有现行文档都按旧定位运行**：new-tool-spec 的标题范式、"编辑器引擎开源到 GitHub"的外链计划、竞品对比都以 audio editor 词系为核心资产。这是改品牌主词的决策，影响首页+全站信任行+外链锚文本，**必须人工拍板后一次改到位**（90 天计划自己的规则也要求 Title/Description 不得批量动）。审计立场：`Free Online Audio Tools` 与 57 工具×11 语言的事实更匹配，编辑器词系可下放给 mp3-editor/多轨页承接；但这属于 D 级决策，本轮不动。

### D2. 计划 §11 的 GA4/事件体系是全新增项

仓库 roadmap 从未排过埋点（现仅 Vercel Analytics + Clarity + Userback；new-tool-spec §7 只用 Vercel 的 bounce）。90 天计划把它当数据层前提（处理成功率、导出成功率、Tool Start Rate），这个判断本轮审计**支持**——没有漏斗数据，重叠裁定和 Popular Tools 排序都无法执行。但它是新增开发项（约一周工作量），会挤占阶段二 Week 3–4 的首页/工具改造窗口，优先级需要用户确认。

---

## 五、文案红线的小抵触（提请注意，非冲突）

- 计划 §3.3 Hero 建议堆 `Free / No Signup / No Watermark / Local Processing` 四个徽标式辅助信息。`seo.md` 对**描述**有明文"不堆「免费、隐私、免注册、无水印」"，new-tool-spec §3.1 同款精神。首页 Hero 不在该条管辖范围内，堆信任徽标是行业常规做法，但与站内克制文风相抵——执行时建议用"一句事实 + 信任行（TrustBadge）"的现有模式，而不是四个并列口号。
- 计划 §9.6 建议按 LCP≤2.5s 验收，注意仓库现行预算更严（见 §一 最后一行），验收应沿用严标准。

---

## 六、给下一轮的三个动作建议

1. **先拍板 D1、D2**，再排阶段二——两者决定 Week 3 做什么。
2. **把本文件 §二/§三 的修正回写进 90 天计划**（或在计划文件头部加一段"2026-11-04 审计后修正"批注），避免后续会话按过时阶段三执行。
3. **内容线继续走 schedule-2026-11**，与 90 天计划并行，唯一协调点是 Week 3 撞期（见 C2）。
