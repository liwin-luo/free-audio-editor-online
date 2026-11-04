# 产品改进方案（第二轮交付物）

> 日期：2026-11-04 · 依据：`audit/` 第一轮审计 + `freeaudioeditor-90-day-plan.md`
> 决策规则（用户裁定）：与仓库现有文档冲突处，**以 90 天计划为准**。
> 本阶段按计划 §14.2 产出方案，不批量改代码；开发按 §14.3 分模块单独提交、单独测试、单独验收。

## 0. 决策记录（冲突裁定结果）

| # | 冲突点 | 裁定 |
|---|---|---|
| D1 | 首页定位 "Free Online Audio Editor" vs 计划的 "Free Online Audio Tools" | **采用计划**：全语言首页 title/H1/描述从「编辑器」词系转向「工具/任务」词系；品牌名（Free Audio Editor / 域名）不变 |
| D2 | 埋点体系是新增项，仓库路线图从未排过 | **采用计划**：数据层按计划 §11 建设；GA4 需用户提供 Measurement ID，先用 `@vercel/analytics.track()` 落事件层（零新依赖），GA4 loader 留 env 开关 |
| D3 | 计划阶段三「发布 10–15 篇指南」vs content-plan 冻结 | **采用计划**：Week 7–8 起按计划选 10–15 个高质量主题，但每个主题仍走 content-plan 的完成定义与蚕食红线，先做转换集群与计划 §6.4 的核心词 |
| D4 | 计划 §5.2/5.3 的"待评估工具"实际已上线 | 事实修正：改为"已上线工具按数据挑加深对象"（见 §5） |
| D5 | Tapecut 已死（GoDaddy 出售页） | 竞品名单移除，聚焦 AudioMass / cut.audio / 123apps / VEED / Clideo / Kapwing |

## 1. 明确保留（审计证据支持，不动）

- **全部 57 个工具页 URL、canonical、hreflang、sitemap 结构**：技术 SEO 核心面零缺陷（`audit/technical-seo.md`），不做任何 URL 动作。
- **编辑器共享内核**（`src/editor/*`）：57 工具一套引擎是资产不是债务；文案与代码一致（`audit/tools-inventory.csv`）。
- **首页现有信息架构**：任务用例区（=计划的 Workflows）、分类入口（=Browse by Task）、Why Local、FAQ、信任徽标（=计划的 Free/No Signup/No Watermark/Local Processing 辅助信息，已以更克制的 TrustBadge/价格卡形式存在）全部保留。
- **指南体系与内容计划**：GUIDE_TOOL 内链闭环、persona、冻结机制继续有效（D3 只解冻队列来源，不改完成定义）。

## 2. 首页改造方案（模块 1，本次执行）

按计划 §三。审计确认现有首页骨架良好，**只做定位转向 + 入口重排，不重做**：

1. **定位**：11 语言 `home.title/description/appBlurb/h1` 从 "audio editor/编辑器" 改为 "audio tools/音频工具" 词系；`lede` 英文换成计划 §3.3 副标题；各语言 lede 已是质量本地化且不含"编辑器"字样，保持不动。`SITE.description`（仅进 JSON-LD）同步。
2. **Popular Tools 排序**（计划 §3.4 第一阶段人工清单）：featured = audio-trimmer、mp3-cutter；popular = mp4-to-mp3、wav-to-mp3、audio-joiner、increase-volume（原 voice-recorder 换出，wav-to-mp3 换入）。
3. **不做**（留待后续模块，需产品决策）：统一 "Upload Audio" 入口（需要一个承接拖放的目标页，候选是强化 mp3-editor 为通用编辑器入口）；Hero 拖放区同属此项。
4. 验收：`npm run build` + `check:serp`（长度/重复）+ `audit:preview`（HIGH=0）+ `check:pages`（渲染无 console 错误）。

## 3. 页面重叠处理方案

`audit/keyword-overlap.md` 结论：三组 MERGE-candidate（increase-volume↔volume-booster、mp4-to-mp3↔extract-audio、compress-audio↔bitrate-converter）按计划 §4.4 **先 OPTIMIZE 不 MERGE**——本轮先在页面上把分工写死（各自 intro/FAQ 已有基础），301/合并等 URL 动作一律等 GSC 数据 + 人工确认（计划规则，不变）。

## 4. 工具页模板方案

模板（`ToolPage.astro`）骨架已满足计划 §4.2，需要的是**按类型配置的证据资产**，不是结构改造：

- 补 4 个缺截图页：audio-to-midi、audio-to-text、music-visualizer、soundboard（`seo.md` 证据资产通用层；截图管线 `scripts/capture-screenshots.mjs` 现成）。
- 三个试点页按 `seo.md` 推行：compress-audio / ringtone-maker（平台限制表）、slowed-reverb（泛化知识表），GSC 观察 2–4 周再批量。

## 5. 核心工具优化方案（模块 2 预告）

优先级 = 计划 §5.1 十个核心工具 ∩ 审计 runtime UNVERIFIED 项：audio-trimmer、audio-joiner、voice-recorder（真机路径）＋ audio-to-text（弱网/失败路径）。每工具按计划 §五 的验收清单执行；先建浏览器兼容矩阵（`audit/priority-issues.md` §4）。

## 6. 技术 SEO 与数据层（模块 3 预告）

- lastmod 管线：部署前挂 `node scripts/write-git-dates.mjs`（修复 `audit/technical-seo.md` §2 的机制性滞后）。
- `check:key-bpm` 断言更新（Camelot 码）。
- 埋点：`src/lib/analytics.ts` 封装计划 §11.2 的 11 个基础事件 → `@vercel/analytics.track()`；`PUBLIC_GA4_ID` env 开关接 gtag；隐私红线按计划 §11.4（不记录文件名/音频内容）。

## 7. 模块顺序与节奏（90 天计划 §14.3 顺序）

| 模块 | 内容 | 窗口 |
|---|---|---|
| 1 | 首页定位转向 + Popular Tools（本文件 §2） | 即刻 |
| 2 | 核心工具验证与修复（§5） | Week 3–4 |
| 3 | 工具页证据资产（§4）+ 试点三页 | Week 4–5 |
| 4 | 内链补强（计划 §三 Workflows 与指南关联，基于现有 useCases/GUIDE_TOOL） | Week 5 |
| 5 | 技术 SEO 修复（§6） | Week 5–6 |
| 6 | 国际化巡检（hreflang 已验证无缺陷，只做翻译质量抽查） | Week 6 |
| 7 | 内容管理：D3 选题清单（10–15 主题） | Week 7–8 |
| 8 | 数据统计事件（§6 埋点） | Week 3 先行落地事件层，GA4 等 ID |

每模块完成后按计划 §14.4 输出 Implementation Report。
