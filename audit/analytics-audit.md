# 数据统计（Analytics）审计

审计日期：2026-11-04。对象：FreeAudioEditor.online 代码内实际存在的统计实现，以及与计划的期望事件清单的差距。本文只描述代码事实，不包含任何生产数据。

---

## 1. 代码里现有哪些统计

**Vercel Web Analytics（唯一的流量统计）**
- 依赖 `@vercel/analytics ^2.0.1`（package.json:57）。
- 唯一注入点：`src/layouts/Base.astro:172-178` — 仅当 `location.hostname.endsWith('freeaudioeditor.online')` 时动态 `import('@vercel/analytics').then(({ inject }) => inject())`。本地预览与其他域名不注入。
- 无 `beforeSend`、无路由过滤、无自定义配置 — 即只记录 Vercel 默认的 cookieless 页面浏览（page view）。
- 11 语言隐私文案对此的描述与实现一致（如 src/i18n/zh.ts:549：「Vercel Web Analytics，不用 Cookie，只记录汇总页面浏览」）。

**Microsoft Clarity（会话回放，需同意）**
- 由 `src/consent.ts` 门控：ID `z15k2kvoqo`（consent.ts:14），脚本 clarity.ms（consent.ts:61）。
- 加载条件 = 用户显式接受（localStorage `fae-consent-2 === 'accepted'`，consent.ts:6、37）**且** 生产域名（src/feedback-consent.mjs:6-15，lookalike 域名如 notfreeaudioeditor.online 不匹配）。
- 已接受用户：页面装载即加载（consent.ts:96）；未接受/拒绝：永不加载。
- **未配置任何自定义 tag、identify、事件** — 只有默认的点击/滚动/会话回放录制。

**Userback 反馈 widget（需同意，非统计）**
- token 硬编码 consent.ts:13，脚本 static.userback.io（consent.ts:73-76）；条件 = accepted（feedback-consent.mjs:1-3）；延迟到首次交互或 8s idle（consent.ts:80-90）。属反馈收集，不算流量统计，但与 Clarity 共用同一同意键。

**CookieNotice**
- `src/components/CookieNotice.astro`：底部横幅，hidden 起步，inline 脚本在无 `fae-consent-2` 时显示（CookieNotice.astro:13-36）；accept/reject 写 localStorage（consent.ts:31-43）。
- gating 逻辑有独立检查脚本 `scripts/consent-check.mjs:1-15`。

**明确不存在的 tracker**：grep `gtag|googletagmanager|google-analytics|plausible|posthog|umami|fathom|matomo` 于 src/ 与 public/ 全部无命中 — **没有 GA4，没有其他第三方统计**。

**自定义事件：一个都没有。** 全站没有任何 `track(...)`/`trackEvent`/dataLayer 调用；grep 命中的 `data-track-*` 是 MP3 标签编辑器的 DOM 选择器（src/editor/tag-ui.ts:123-124），与埋点无关。

---

## 2. 现有事件 vs 计划期望事件清单

计划期望：page_view、tool_view、file_selected、tool_started、processing_started/completed/failed、export_started/completed、download_completed、language_switch、related_tool_click、guide_click。

| 期望事件 | 现状 | 说明 |
|---|---|---|
| page_view | **已有**（隐式） | Vercel Analytics 默认记录每个页面浏览（Base.astro:176），无法区分访问者行为，只有 URL 维度 |
| tool_view | **部分可推导** | 工具页 URL 即 `/[locale/]<slug>`，可从 page_view 按 URL 过滤得出，但无独立事件 |
| file_selected | **缺失** | 编辑器打开文件处（src/editor/delivery.ts 的 bindFileOpen）无任何埋点调用 |
| tool_started | **缺失** | 同上 |
| processing_started / completed / failed | **缺失** | OfflineAudioContext 渲染（src/editor/processor.ts）与各 worker 无埋点；转写 worker 协议里有 progress/error 消息（transcribe-worker.ts:37-42）但只用于 UI |
| export_started / completed | **缺失** | encoders.ts 各 encode* 函数无埋点 |
| download_completed | **缺失** | 下载是临时 `<a download>` 触发（docs/architecture.md:77；src/desktop/save.ts:10），浏览器不回调完成事件，只能埋点击 |
| language_switch | **缺失** | Header 的语言切换是普通 `<a>` 链接跳转，只体现为另一 URL 的 page_view |
| related_tool_click | **缺失** | RelatedTools.astro 为普通链接，无埋点 |
| guide_click | **缺失** | 工具页/首页的指南卡片链接无埋点 |

**结论：11 个期望事件中只有 page_view 以默认形式存在（tool_view 可由 URL 维度近似），其余 9 个完全缺失；工具内漏斗（file → process → export → download）目前完全不可观测。**

**可用的落地路径（事实陈述，非实施）**：
- `@vercel/analytics` v2 自带 `track()` 事件 API，但当前版本用法只用了 `inject()`（Base.astro:176）；加自定义事件无需引入新依赖。
- Clarity 支持 custom tags/事件，但需在 accept 后才有 consent 基础；工具内漏斗事件若放 Clarity，则拒绝同意的用户不可见 — 与「汇总统计无需同意即可跑」的当前分层（Vercel 层无需同意、Clarity 层需同意，consent.ts 注释与隐私文案 zh.ts:549）存在设计取舍。
- 注意 privacy 页承诺「音频绝不发给 Clarity/统计」，任何埋点只能带 slug/格式等枚举字符串，不能带文件名或音频内容。

---

## 3. 后台数据可访问性

- **GSC/GA4 后台访问：UNVERIFIED。** 本次审计无任何凭据。仓库内有 Google Search Console 的 HTML 验证文件（public/google824e0769c16d7fbd.html，dist 同名产物），证明 GSC 所有权验证已配置，但验证 ≠ 可读数据；sitemaps/覆盖率/查询数据本审计无法核实。
- **GA4：不存在。** 代码中无 GA4/gtag（§1 grep），因此也不存在 GA4 后台可访问性问题 — 是「没有」而非「看不了」。
- **生产流量、性能、转化、Core Web Vitals 等一切数字：UNVERIFIED。** 本次为纯代码审计，未读取 Vercel Analytics 后台、Clarity 后台或任何生产数据。不做任何数字推断。

---

## 证据与限制

**已核实（代码级）**：@vercel/analytics 的唯一注入点与生产域门控（Base.astro:172-178）；consent 键 `fae-consent-2` 与 accept/reject 流（consent.ts:6、31-43；CookieNotice.astro:24-26）；Clarity ID 与双条件门控（consent.ts:14、61；feedback-consent.mjs:6-15）；Userback token 与延迟加载（consent.ts:13、73-90）；consent gating 的检查脚本（scripts/consent-check.mjs）；无 GA4/gtag/plausible/posthog 等（grep 无命中）；无任何自定义事件调用（grep 无命中）；期望事件清单逐项对照的缺失结论；隐私文案与实现一致（zh.ts:549 等）。详细技术侧上下文见 audit/architecture.md §6。

**UNVERIFIED**：
- GSC 后台数据（发现验证文件但无凭据）；Vercel Analytics / Clarity 后台数据与配置面板；生产流量、性能、漏斗、任何数字。
- Vercel/Clarity 服务端实际是否按页面承诺只做汇总统计（只能核实客户端加载代码，无法核实服务端行为）。
- src/data/tools.ts 正被并行会话修改；本审计的结论不依赖该文件，但若工具数变化，URL 维度的 page_view 分组会随之变化。
