# freeaudioeditor.online 路线图

版本：2026-10-23 · [架构](architecture.md) · [SEO 规则](seo.md) · [内容计划](plans/2026-10-23-content-plan.md) · [竞品调研](competitor-research.md) · [UI-UE 规范](ui-ue-spec.md)
原则：先用低竞争词拿索引和首批排名 → 数据验证后加码 → 流量过门槛再变现。

## 现在（2026-10-23）

- 52 个工具页上线（music-visualizer 第 53 个在并行会话进行），11 种语言。英语无前缀，其余 `/{locale}/...`。
- 47 篇英语指南，锚定 29/52 个工具（56%）；10 个互译市场各 6–8 篇。配图由 `scripts/generate-guide-media.mjs` 生成，指南↔工具内链经 `GUIDE_TOOL` 闭环，全部指南有 `sources` 和 persona。
- **内容生产已跑到验证前面**：Semrush 仅收录 2 个关键词（10-21 实测），GSC 数据循环一次都没跑过。广度生产冻结，见下面的内容计划。
- 单任务页的控件在页面上，播放按钮有文字，下载按钮是动词。`mp3-editor` 仍是多步编辑。
- 编辑器按动作加载：波形在选文件时，渲染在预览或导出时，编码器在下载时。视频音轨用浏览器解码，不用 ffmpeg.wasm。
- 生产由推 `main` 触发。CI 是类型检查加构建，Vercel 发 `dist/`。
- 变现没开始。AdSense 和 Pro 仍看下面的流量门槛。

## 接下来

一次一件，顺序即优先级。**文章队列的唯一来源是 [内容计划](plans/2026-10-23-content-plan.md)**——四个阶段：阶段 0 前置（GSC/Bing 提交线上确认 + 五页 smoke/手机 Safari）→ 阶段 1 收尾批 4 篇（reverse-audio、tempo-changer、mp3-tag-editor、audio-looper）→ 阶段 2 冻结 + GSC 数据循环（约 11-11 起每 4 周一轮：查询回填 FAQ、加深赢家、修剪零展示）→ 阶段 3 按数据解冻（翻译转换集群优先于新英语文；Best/Pillar/device 维持数据门槛）。

1. **内容。** 按内容计划四阶段执行；蚕食红线和写作完成定义都在那份计划里。
2. **蚕食。** 双周看 `volume-booster` 和 `increase-volume` 是否抢同一条查询。抢了就收紧定位，或把弱的 301 到强的。`speed` 和 `tempo` 同样看。
3. **新工具。** 只加搜索意图还没有页、而且浏览器里做得诚实的。定义见 [new-tool-spec.md](new-tool-spec.md)。六页缺口（循环、声像、3D、节拍器、调性/BPM、变速保调）已在 10-20 交完，不续极性反转和排列页。
4. **变现。** 日 UV 稳定 ≥ 300 再谈 AdSense，广告不进工具区 600px。日 UV ≥ 1000 再调研 Pro。在那之前 Hobby 计划就够。

---

## 历史（2026-10-14 → 10-22）

细节看 git log 和 `docs/plans/` 对应文档，这里只留结论：

- **Phase 0–2 完成**：上线 + OG 分享图 + Vercel Analytics + Lighthouse 基线（4 页全 100）；P1 四页（wav-to-mp3 / reverse-audio / change-audio-speed / increase-volume）；技术重活全部用浏览器原生方案落地（mp4-to-mp3、extract-audio、voice-recorder、volume-booster、normalize-audio、slowed-reverb、M4R 直出）；国际化 11 语补齐（RTL、hreflang 全簇，audit HIGH 0 / MED 0）。
- **结构补齐（10-15）**：`/tools` hub、seo-audit 增 4 项 i18n 检查、规范文档入库（竞品分析、i18n 规范、new-tool-spec）。
- **内容批次（10-21）**：19 篇指南（what-is / alternatives-vs / troubleshooting / definition 结构开张）+ 配图管线覆盖旧文（26 组插图）+ `GUIDE_TOOL` 内链闭环 + sources 补齐；批次 1–4b 全部发布，批次内普遍低于词数带——加深等 GSC 数据，不预设。六页缺口工具同日交完。
- **soundboard（10-22）**：工具 + 两篇支撑指南（how-to-make-a-soundboard、are-meme-sounds-copyrighted）。
- **遗留 bug 已修（10-23）**：feature-check 的 `[data-reverse]` 断言与 smoke-test 的 speed ×2 步骤在 9ca0c48 后失败——根因是 ①快捷控件页不再渲染 Adjust 抽屉，断言改测按钮自身双向状态；②固定 cookie 同意条盖住底部导出栏，page.click 落在覆盖层上，测试现在预置 localStorage 同意值；③快捷控件触发的预览渲染期间 busy 守卫会吞掉导出点击，waitExported 改为轮询补点。调速后导出本身无 bug（时长 1.00s、渲染区间正确）。
- **Phase 0 剩余两件**（GSC/Bing 提交线上确认、五页 smoke + 手机 Safari）并入内容计划阶段 0。
- 选题依据的历史文档：[内容差距分析](plans/2026-10-21-content-gap-analysis.md)（已被内容计划取代，保留作历史证据）、[内容路线图](plans/2026-10-21-content-tool-page-roadmap.md)。

## Phase 3 · 增长与变现（第 4 个月起，流量触发制）

- [ ] **AdSense（触发：稳定日 UV ≥ 300）**：广告位只放 how-to 与 FAQ 之间、related 之后；工具区 600px 内永不放广告（规范铁律）；ads.txt
- [ ] **外链建设**：编辑器引擎开源到 GitHub（audiomass 模式——开源换 star 和外链，反哺域名权重）；Product Hunt 发布；Reddit（r/podcasting、r/androidapps、r/iphone 场景帖）
- [ ] **Pro 订阅调研（触发：日 UV ≥ 1000）**：候选增值点——批量处理、超大文件、AI 降噪（评估 WASM 模型可行性）、云端项目保存。竞品定价参照：123apps $6/月、cut.audio Pro 制
- [ ] 每月关键词扩展（seodata.dev 50 次/天额度）：从 GSC 真实查询词反哺新页面选题

## 持续运营节奏

| 频率 | 动作 |
|---|---|
| 每周 | GSC 看查询词与排名变化；E2E smoke test 回归（依赖升级后必跑） |
| 每 4 周 | 内容计划阶段 2 数据循环一轮：查询回填 FAQ、加深赢家、修剪零展示 |
| 双周 | GSC 蚕食裁定：volume-booster vs increase-volume、speed vs tempo，出现双排名或展示拆开就收紧定位或 301 合并 |
| 每月 | 关键词扩展 20–30 个新词入候选池；CWV 复测。新英语文冻结期间为 0，翻译只走内容计划阶段 3 队列 |
| 每季 | 竞品复盘（cut.audio / soundtools 上了什么新功能）；技术栈小版本升级 |

## 关键风险与对策

1. **Google 收录慢于预期** → Bing 先行验证内容质量；用 llms.txt 押注 AI 搜索入口
2. **大依赖吓跑移动用户** → 视频音轨用浏览器解码，不装 ffmpeg.wasm。MP3 / M4R 编码器在点下载时才加载
3. **竞品 cut.audio 先做内容营销** → 我们的护城河是内容深度 + 多语言速度；每月复盘一次它的 /blog 和新落地页
4. **变现过早伤信任** → 所有变现严格走触发条件；工具区永远零广告
5. **volume-booster 与 increase-volume 互相蚕食** → 双周看 GSC。同一查询出现双排名或展示被拆开时，强化差异（视频/手机 vs 安静音频文件），或 301 合并到排名更好的那一页

## 里程碑目标（仅供参考，以数据为准）

- 第 1 个月：全部收录，长尾词开始有展示
- 第 3 个月：≥3 个词 TOP 10，日 UV 100+
- 第 6 个月：剪辑类头部词（mp3 cutter / audio trimmer）进 TOP 5，日 UV 500–1000，AdSense 上线
- 第 12 个月：美区词簇全覆盖（30+ 落地页），日 UV 3000+，Pro 订阅上线
