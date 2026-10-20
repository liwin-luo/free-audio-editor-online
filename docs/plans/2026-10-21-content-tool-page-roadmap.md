# 内容与工具落地页 SEO 路线图

日期：2026-10-21。竞品实测基于 2026-10-21 的公开页面。站内规则仍以 [SEO 规则](../seo.md) 为准；这份文档解决“接下来写什么、工具页怎么排、先做哪一批”。

## 1. 竞品实测

### Ahrefs：工具页极简，内容交给博客

- Hub `/free-seo-tools`：5 个页内分区（AI Visibility、Keyword Research、Link Building、SERP & Ranking、Other Tools），18 张工具卡，没有分类子页。
- Traffic Checker：首屏即输入框，约 616 词，6 个功能 H2，0 个 FAQ，只有 `BreadcrumbList`。
- Backlink Checker：约 1,200 词，功能块 H2，0 FAQ，只有 `BreadcrumbList`。
- Keyword Generator：约 650 词，工具在简介下方，0 FAQ。
- 博客 Pillar（Keyword Research）：5,376 词，TOC，表格，0 FAQ，只有 `BreadcrumbList`。

### Semrush：工具页本身就是品类落地页

- 总 Hub `/free-tools/`：约 710 词，SEO 与 Local SEO 两个分类，每个分类链接到独立子 Hub；16 个 SEO 工具 + 3 个本地 SEO 工具；卡片含一句价值描述和 CTA。
- SEO 子 Hub `/free-tools/seo/`：约 841 词，3 步使用说明 + 工具卡。
- Keyword Tool：约 2,421 词，首屏工具，How-to、定义、功能、选型、免费 vs 付费、5 题 FAQ；Schema 为 `WebApplication`。
- Backlink Checker：约 1,511 词，5 题 FAQ，`@graph` 为 `WebApplication + FAQPage + Organization`。

### 结论

1. 两家都把工具放在首屏。
2. Ahrefs 的工具页能极简，是因为域名权重足够高；我们不能照搬“不写 FAQ”。
3. Semrush 的 2,400 词不值得对 50 个工具全量复制，会制造同质页面。
4. 我们的结构应是：**交易型查询由工具页承接，深度信息型查询由文章承接**。工具页只放事实、步骤、限制和决策信息；对比、替代品、术语放文章。
5. 这与 [SEO 规则](../seo.md) 一致：工具页不写“为什么选我们”、不塞对比表或词汇表。

## 2. 站内基线

- 50 个工具，旧分类为 `cut 4 / merge 14 / record 3 / effects 29`。`merge` 混了 11 个转换器、2 个合并工具和 1 个标签编辑器；`effects` 混了修复、创意效果和分析工具。
- 14 篇英语指南，67 个指南页面（含 10 个语种）。
- 11 个工具有指南支撑，39 个没有。
- 只有 1 篇替代品文章（`audacity-alternative`），没有术语、清单、故障排查页。
- 工具页已有 intro、3 条用途、HowTo、3–4 个长文块、5–8 条 FAQ、相关指南、相关工具，以及 `WebApplication + HowTo + FAQPage + BreadcrumbList`。基础已经接近 Semrush。
- 缺的是：分类 Hub、事实型规格表、适用/不适用决策块、旗舰页独立 OG、E-E-A-T 页面，以及 39 个工具的内容覆盖。

## 3. 新分类

改成 6 个语义准确的分类，工具 URL 不变，只新增分类 Hub。

| ID | 名称 | 工具数 | 包含 |
|---|---|---|---|
| `cut` | Cut & Trim | 4 | audio-trimmer、mp3-cutter、ringtone-maker、split-mp3 |
| `convert` | Convert & Compress | 11 | wav/flac/mp3-to-wav、compress、bitrate、mp4、extract、m4a、ogg、opus、stereo-to-mono |
| `join` | Join & Mix | 3 | audio-joiner、multi-track-audio-editor、audio-looper |
| `edit` | Edit & Repair | 14 | mp3-editor、fade、volume、normalize、compressor、silence、loudness、EQ、filters、bass、tag editor |
| `effects` | Creative Effects | 14 | reverse、speed、echo、distortion、slowed-reverb、pitch、tempo、pan、3D、bitcrush、432Hz、visualizers |
| `record` | Record & Analyze | 4 | voice-recorder、audio-to-text、metronome、key-bpm-finder |

分类 Hub 路由：`/tools/{category}`，本地化为 `/{locale}/tools/{category}`。每个 Hub 有 CollectionPage + ItemList + BreadcrumbList，列出本类工具、相关指南和相邻分类。

## 4. 工具页 v2

在现有结构上只加三块，不重写已有正文。

1. **适用 / 不适用**：放在 intro 之后。每页 3 条适合、3 条不适合，不适合的指向兄弟工具。
2. **事实规格表**：输入格式、输出格式、最长时长、批量、是否上传、浏览器要求。只写可以验证的事实。
3. **分类面包屑**：Home → Tools → 分类 → 工具，并同步 BreadcrumbList。

旗舰 10 页：audio-trimmer、mp3-cutter、wav-to-mp3、mp4-to-mp3、m4a-to-mp3、compress-audio、voice-recorder、audio-joiner、normalize-audio、ringtone-maker。

对比表放在 `alternatives / vs` 文章里，不放在工具页；工具页的 FAQ 继续承担“和兄弟页差在哪”。

## 5. 文章结构类型

| 类型 | 目标查询 | 结构 | 优先级 |
|---|---|---|---|
| How-to | how to X / X online | 结果 → 准备 → 3–5 步 → 错误 → 工具 CTA | P0 |
| Alternatives / VS | X alternative / X vs Y | 结论 → 对比表 → 各自适合谁 → 迁移 | P0 |
| Troubleshooting | why is X / X not working | 症状 → 快修 → 原因 → 步骤 → 预防 | P1 |
| Definition | what is X | 两句话定义 → 为什么重要 → 示例 → 工具 | P1 |
| Best 清单 | best free X | 方法 → 对比表 → 短评 → 结论 | P2 |
| Pillar | X guide | TOC → 3,000+ 词 → 集群内链 | P2 |
| Device/format | convert X on iPhone/Mac | 平台差异 → 步骤 → FAQ | P3，需唯一性门槛 |

一个 URL 只服务一个主关键词。工具页已有 HowTo 的，不再发同关键词文章；文章换场景或换问题。

## 6. 内容集群

| 集群 | 现有 | 接下来 |
|---|---|---|
| Cut & Trim | 4 篇 | TikTok/Reels 剪歌、iPhone 不装 App 修剪、长录音拆轨 |
| Convert & Compress | 4 篇 | 邮件/WhatsApp 压缩、Opus 语音转 MP3、WAV vs MP3 |
| Join & Mix | 1 篇 | 播客分段合并、交叉淡化、循环伴奏 |
| Edit & Repair | 2 篇 | 去嗡嗡声、Normalize vs Compress、播客 LUFS 工作流 |
| Creative Effects | 1 篇 | Slowed + reverb、432Hz、加速/夜核 |
| Record & Analyze | 0 篇 | 浏览器录语音备忘、BPM 查找、频谱图 |

## 7. 路线图

### 0–30 天

- [x] 路线图入库（本文档）。
- [x] 6 个分类 + 分类 Hub + 多语言标签。
- [x] 10 个旗舰工具页加适用性、规格表、分类面包屑、独立 OG。
- [x] 8 篇 P0 指南：
  - TikTok/Reels 剪歌
  - iPhone 不装 App 修剪音频
  - 邮件/WhatsApp 压缩音频
  - 浏览器录语音备忘
  - 高通滤波去嗡嗡声
  - Normalize vs Compress
  - 长录音拆成多轨
  - Opus 语音转 MP3
- [x] `/editorial` 测试方法页，并从 About 链入。
- [x] 内链规则：指南首段链主工具；工具页自动挂指南；分类 Hub 链本类工具与指南。
- [x] 构建、SEO 审计、回归验证。

验收：6 个 Hub 上线；10 个旗舰页有三块新模块；8 篇指南发布；审计 0 HIGH。

2026-10-21 验证结果：`npm run build` 748 页；`npm run audit:preview` 0 HIGH / 0 MED（289 条 LOW 均为中文标题或描述偏短）；`astro check` 0 错误；`check:pages` 全通过；`check:smoke` 全通过。

### 31–90 天

- 再发 20 篇 How-to，覆盖仍无指南的工具，目标 60% 工具至少 1 篇。
- 5 篇 Alternatives / VS：GarageBand、Adobe Audition、123apps、Online Audio Converter、Kapwing。
- 4 篇 Best 清单、8 篇术语、6 篇故障排查。
- Top 20 页面本地化到 es / pt / id 三个语种。
- 建立关键词地图，处理 cannibalization。

### 91–180 天

- 3 篇 Pillar：浏览器音频编辑、音频格式、播客音频。
- 10 个 Device/Format 页面，需通过唯一性门槛（正文 40% 不同、独立截图、独立 FAQ）。
- 原始数据研究（如 200 期播客 LUFS 分布）用于自然外链。
- 90 天刷新周期：优先 GSC 排名 8–20、CTR 偏低页面。
- CRO：首屏工具可见性、文件打开率、导出完成率。

## 8. 指标

| 阶段 | 指标 |
|---|---|
| 0–30 | Hub 数、旗舰页升级数、新指南数、审计 HIGH 数 |
| 31–90 | 工具有指南覆盖率、新文章数、3 语种本地化页数、指南→工具 CTR |
| 91–180 | Pillar 数、程序化页数、referring domains、刷新页数、工具导出率 |

不以收录量作为唯一 KPI；核心是工具页完成率和文章→工具转化。

## 9. 竞品参考

- https://ahrefs.com/free-seo-tools
- https://ahrefs.com/traffic-checker
- https://ahrefs.com/blog/keyword-research/
- https://www.semrush.com/free-tools/
- https://www.semrush.com/free-tools/seo/
- https://www.semrush.com/analytics/keywordmagic/
- https://www.semrush.com/analytics/backlinks/
- https://www.semrush.com/blog/what-is-seo/
