# 第一轮审计·优先级汇总（audit/priority-issues.md）

> 日期：2026-11-04 · 依据：本目录下 7 份审计产出 + 仓库现有文档交叉核对。
> 本审计**未修改任何生产代码**；全部结论标注证据出处，无法验证的标 UNVERIFIED。
> 详细证据见：`architecture.md`、`tools-inventory.csv`、`seo-page-audit.csv`、`technical-seo.md`、`keyword-overlap.md`、`competitor-analysis.md`、`analytics-audit.md`，冲突分析见 `plan-conflicts.md`。

---

## 1. 当前网站真实情况

**规模与架构**（`architecture.md`）：Astro 5 + Tailwind 4 + TypeScript，Vercel 部署，约 890 条静态路由——57 个英文工具页 + 10 语言 × 57 的 `[locale]` 工具页（约 600）+ 52 篇英文指南 + 10 语言 64 篇翻译指南 + 8 个根级 hub/静态页。所有工具共用一个编辑器内核（`src/editor/index.ts` → `processor.ts` → `encoders.ts`），页面只是配置 + 文案。

**本地处理声明：代码层面成立**。全站 grep 无任何音频数据外传（fetch/XHR/sendBeacon/WebSocket 零命中）。两个明示例外：① audio-to-text 的 Whisper 权重运行时从 HuggingFace CDN 下载（音频本身不出浏览器）；② audio-to-midi 的 Basic Pitch 模型同源自托管 `/models/basic-pitch/`（约 912 KB）。编码器（lamejs、mp4-muxer、RNNoise wasm）全部打包内懒加载。

**功能真实性**（`tools-inventory.csv`，57 行）：文案与代码高度一致，**未发现任何虚假承诺**——`docs/product-facts.md`（10-27 核对）的全部数字与当前代码吻合（限制器参数、300 MB 拒绝、1 小时内存警告、错误文案等）。约 20 个工具跑通了仓库自带 check 脚本（全部 PASS 或仅 headless 环境问题）；其余标注 runtime UNVERIFIED（仅代码审读）。7 个转换器、剪辑四兄弟、音量两页等共享引擎的分化方式与页面自述一致。

**技术 SEO**（`technical-seo.md`、`seo-page-audit.csv`）：核心面**没有发现缺陷**。57 个英文工具 URL 全部 200、零重定向；canonical 全部自引用；每页 12 条 hreflang（11 语言 + x-default→en）成簇；sitemap 877 条 URL 覆盖全部工具×11 语言；零 noindex；57 页无重复 title/description；JSON-LD 四件套齐全（WebApplication/HowTo/FAQPage/BreadcrumbList）。

**数据能力**（`analytics-audit.md`）：**接近零**。仅 Vercel Analytics（cookieless page_view）+ 同意后的 Microsoft Clarity 与 Userback。无 GA4、无任何自定义事件。file_selected → export → download 漏斗完全不可观测。GSC 验证文件在仓库（`public/google824e0769c16d7fbd.html`），但后台访问 UNVERIFIED。

**竞品位置**（`competitor-analysis.md`）：upload 型竞品（123apps/VEED/Clideo/Kapwing）无一宣称本地处理；Kapwing 免费墙条款最透明（水印/4 分钟/每月 30 分钟）；AudioMass 证明"零 SEO 内容"路线存在；全行业信任分 4.4–4.9 而本站为空白。

---

## 2. 最严重的 10 个问题（按优先级排序）

| # | 问题 | 证据 | 影响 |
|---|---|---|---|
| 1 | **数据反馈闭环缺失**：无 GA4、无自定义事件，工具使用漏斗不可观测；GSC 后台权限 UNVERIFIED | `analytics-audit.md` | 一切"数据驱动优化"（重叠裁定、Popular Tools 排序、90 天计划第三阶段）目前空转 |
| 2 | **GSC 数据循环从未跑过**：内容计划阶段 0 两件事仍挂起（GSC/Bing 提交线上确认、手机 Safari 真机 smoke） | `docs/plans/2026-10-23-content-plan.md` 阶段 0 | Semrush 仅收录 2 词（10-21 实测）的局面没有新证据改变 |
| 3 | **sitemap lastmod 机制性滞后**：线上 max lastmod 10-28，但 11-03 的插图内容已上线；根因是 Vercel 构建用提交的 `src/data/git-dates.json` 快照（10-29 后未再刷新） | `technical-seo.md` §2 | 每次内容部署都会复发；重新收录变慢 |
| 4 | **三组同引擎近同副本页无数据裁定**：increase-volume↔volume-booster、mp4-to-mp3↔extract-audio、compress-audio↔bitrate-converter——唯一差异是 accept 或默认码率 | `keyword-overlap.md` §汇总表 | 蚕食风险；roadmap 的双周裁定只排了其中一对 |
| 5 | **首页定位是 "Free Online Audio Editor"**，90 天计划判断该定位过宽、建议转向 "Free Online Audio Tools"（任务导向） | 线上首页 H1/Title（本审计实抓）vs 计划 §1.2/§3.3 | 战略级决策，仓库现有文档（roadmap/new-tool-spec）均按旧定位运行，**需要人工拍板** |
| 6 | **`docs/architecture.md` 漂移**：写 51 个工具（实际 57）、编辑器分发表缺 4 个岛、TRANSLATED_GUIDES 位置错、缺 analytics/sitemap/mcp 章节 | `architecture.md` §7 | 后续所有会话按过时文档干活 |
| 7 | **11-03 新增 how-to 截图后 CWV 未复测**：Lighthouse 基线是 10-14 的（全 100），新页面带 3 张 webp 未重测 | `technical-seo.md` §7；`docs/lighthouse-baseline.md` | 图片策略（eager/lazy/尺寸）若有回归直接影响排名面 |
| 8 | **4 个工具页缺证据资产**：audio-to-midi、audio-to-text、music-visualizer、soundboard 无截图/ImageObject，违反 seo.md 10-29 起的通用层要求 | `seo-page-audit.csv` notes | 这 4 页恰好是最新/最重功能的页面 |
| 9 | **零第三方信任信号**：竞品全部有 4.4–4.9 评分/上万投票，本站无任何目录、评分、开源 star 背书 | `competitor-analysis.md` §3/§4 | E-E-A-T 短板；roadmap Phase 3 的开源换外链计划一直未启动 |
| 10 | **测试基建与产品漂移**：`check:key-bpm` 断言过期（页面新增 Camelot 码后必失败）；check:tempo/pan/3d 的浏览器步骤在 headless 下超时（已人工探针证实功能正常） | `tools-inventory.csv` runtime_check 列 | "没有 check script 不许上"的规矩被削弱 |

---

## 3. 最值得优先优化的 10 个页面

排序依据：流量潜力 × 重叠风险 × 与现有排期（`schedule-2026-11.md`）的协同。

1. **/increase-volume** —— 重叠裁定对 + 11 月排期 #1 已把流量导向此页；先把两页分工在页面上写死。
2. **/volume-booster** —— 同上；GSC 数据到位后做双排名观察。
3. **/audio-trimmer** —— 剪辑簇流量核心；runtime 体验（波形拖动、选区播放、移动端）UNVERIFIED，需真机测试。
4. **/wav-to-mp3** —— 转换簇锚点；description 156 字符截断风险。
5. **/m4a-to-mp3** —— 11 月排期 #2（本周简报）目标页；iPhone Voice Memo 场景强化。
6. **/compress-audio** —— 与 bitrate-converter 重叠 + seo.md 指定的证据资产试点页（平台限制表形态）。
7. **/ringtone-maker** —— 证据资产试点页；40 秒夹取/M4R 支持矩阵值得一张真数字表。
8. **/slowed-reverb** —— 试点页（泛化知识表形态）+ 唯一有趋势流量的效果页。
9. **/audio-to-text** —— 唯一运行时第三方 CDN 依赖的页面，隐私说明最需要精确；无截图。
10. **/mp4-to-mp3 + /extract-audio**（一对）—— 同解码路径双页，差异化只有默认码率；GSC 到位后优先裁定。

---

## 4. 最值得优先优化的 10 个工具（功能层）

1. **audio-to-text** —— Whisper 权重 HF CDN 下载的失败路径/弱网体验；10 分钟上限的引导；转写质量完全 UNVERIFIED。
2. **audio-trimmer** —— 核心体验真机验证（起止边界 0.01s 步进、选区播放、iOS 拖动）。
3. **audio-joiner** —— 多文件/大文件路径 runtime UNVERIFIED；crossfade 0 值行为。
4. **voice-recorder** —— 麦克风权限拒绝/不支持两条错误路径 + iOS Safari 真机。
5. **mp3-editor** —— roadmap 已注明"仍是多步编辑"，是唯一多步交互工具，移动端可用性未知。
6. **multi-track-audio-editor** —— 最复杂工具；8 轨上限/自动拉低提示的逻辑已验证，端到端体验 UNVERIFIED。
7. **pitch-changer / voice-changer** —— ±7 半音以上金属声是算法注释，无听感测试记录；预设组合需要真人评估。
8. **music-visualizer** —— iOS Safari 不支持画布录制，降级提示路径需真机验证；录制时长=歌曲时长的前台保活要求。
9. **audio-to-midi** —— "No notes." 空结果的出现率未知（鼓/噪声必然空，实际歌曲未测）。
10. **ringtone-maker** —— M4R 依赖 `AudioEncoder` mp4a.40.2 支持，支持矩阵未建立（seo.md §10.3 要求的浏览器兼容表缺口）。

---

## 5. 未来 90 天建议排期（与仓库现有计划对齐后的版本）

> 原则修正：90 天计划的阶段三（Week 7–8 发布 10–15 篇新指南）与仓库内容计划的**英语新文冻结**冲突，已按现有冻结规则调整；工具优化清单中 6 个"待评估"工具实际已上线，改为"已审计，按数据决定是否加深"。详见 `plan-conflicts.md`。

**阶段一（Day 1–15，本周）：审计收尾**
- ✅ 本审计 7 份产出已完成（57 工具盘点、技术 SEO、重叠、竞品、架构、统计）。
- 剩余：① 人工确认 GSC/GA4 后台权限（UNVERIFIED 项的解锁钥匙）；② 手机 Safari + 桌面 Safari/Firefox 真机过一遍第 4 节的 10 个工具（浏览器兼容矩阵从零建起）；③ CWV 复测带新截图的 3 个代表页。
- 期间允许与 `schedule-2026-11.md` 的周任务并行（内容刷新不是新功能）。

**阶段二（Day 16–45）：先修地基，再动页面**
1. **埋点先行（Week 3）**：GA4 或 `@vercel/analytics.track()` 补齐 11 个基础事件（计划 §11.2 清单），零/低成本，是后面一切裁定的前提。
2. **机制修复（Week 3）**：部署管线挂 `write-git-dates`（解决 lastmod 滞后复发）；`check:key-bpm` 断言更新。
3. **首页定位决策（Week 3–4）**：先人工拍板 §2 问题 5（Editor → Tools 转向是否执行）；若执行，标题/H1/描述一次改到位，并同步 `docs/seo.md` 的定位段落——不拆成多批。
4. **证据资产补齐（Week 4–5）**：4 个缺截图页 + seo.md 三个试点页（compress-audio/ringtone-maker/slowed-reverb），试点页 GSC 观察 2–4 周（与 seo.md 推行计划一致）。
5. **首页与模板（Week 5–6）**：仅做审计确认过的小改（任务入口、移动端布局），不重做信息架构。

**阶段三（Day 46–90）：数据循环，不新增赌注**
- 按内容计划阶段 2 SOP 跑 GSC 数据循环（11-11 起每 4 周）：查询回填 FAQ → 加深赢家 → 修剪零展示。
- 重叠裁定用真实 GSC 数据执行（双周节奏已在 roadmap）：increase/volume 对已有 SERP 证据，其余三对等数据。
- 新内容**维持冻结**；如确需开口子（如趋势雷达的 Audacity 时效文），走内容计划的例外裁定流程，不按 90 天计划的"10–15 篇"批量执行。
- 工具加深候选看埋点数据（处理成功率、导出完成率），而不是计划 §5.2 的静态清单。

---

## 6. 审计限制（UNVERIFIED 汇总）

- GSC / GA4 / Vercel Analytics 后台数据：无权限，全部未验证。
- 真实用户行为、处理/导出成功率：无埋点，不存在数据。
- 生产环境 Core Web Vitals（INP 尤其）：未实测；仅有 10-14 本地 Lighthouse 基线。
- 跨浏览器/真机兼容矩阵：本轮为代码审读 + headless 脚本，未做 Safari iOS / Firefox 真机测试。
- 转写、MIDI、调号/BPM 的**准确率**：只能验证机制存在，无法验证结果质量。
- 关键词搜索量/难度/CPC：未引入任何外部数据源，全部留空（遵守计划"不许编造"规则）。
