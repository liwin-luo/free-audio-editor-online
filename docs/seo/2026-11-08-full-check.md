# 全站全量检查 — 上线终检 + 竞品分析（2026-11-08）

参考 fancyfont 新项目的两套方法论（`seo/site-health-2026-11-08.md` 终检 + `fancyfont-competitive-2026-11-08` 竞品分析）对本市做的同构检查。原始数据与可复用脚本在 `~/WorkBuddy/57rfy/seo-analysis/audio-editor-full-check-2026-11-08/`（`sitemap_urls.txt`、`url_status.json`、`deep_sample.json`、`serp/` 21 个快照、`autocomplete/raw_en.json`、`content/competitors_content.json`、`clusters.json`、`serp_matrix.csv`）。

纪律：全部数字来自本轮真实工具输出（curl 巡检、Google suggest API、浏览器直采 Google SERP、逐域名 curl/jina 抓取），无估算；拿不到的数据如实标注（GSC、PSI、搜索量）。

---

## 一、上线终检：全部通过

对象：`https://freeaudioeditor.online` 线上生产站（push=部署，本轮即线上实测）。

| 检查项 | 结果 |
|---|---|
| sitemap.xml | 877 URL（en 122 + 10 语言各 75–77），结构正常，含 xhtml:link alternate |
| 全量 URL 巡检 | **877/877 全部 200，零重定向、零失败、零软 404**（`url_status.json`） |
| robots.txt | 允许全部 + 声明 sitemap |
| llms.txt | 存在（18.9KB，工具逐条说明，质量高） |
| 抽样深检 ×33 | en 核心 15 页（首页/tools hub ×3/工具页 ×6/指南 ×2/信任页/mcp）+ 多语言 16 页（zh/de/es/pt/ja/ru/fr/id/ko/ar），全部 PASS |
| canonical | 抽样页全部自指生产域 |
| html lang | zh-Hans / pt-BR / ja / ru / ko / ar 等逐一正确 |
| hreflang 体系 | 自洽：多语言页 head 内 12 条（11 语言 + x-default）；en-only 指南（如 find-bpm-and-key、what-is-dbfs）head 与 sitemap 均不声明 alternate——正确行为，无死链 |
| 语言切换器 | en-only 指南的切换项正确回退到各语言 `/xx/guides` 索引（不是 404 死链） |
| title/desc 本地化 | zh 首页 title 20 汉字（预算 ≤20 ✓）；zh 工具页 title 28 字符、指南 title 16 汉字 + desc 31 汉字（预算 ≤20/≤75 ✓）；de/es/pt/ru/fr/ja/ko 全长度合格 |
| JSON-LD | 工具页 `WebApplication`+`FAQPage`+`HowTo`+`BreadcrumbList` ✓；指南 `Article`+`BreadcrumbList` ✓；/tools `CollectionPage`+`ItemList` ✓；FAQ 问数 4–11 条 |
| 404 行为 | en/zh 假 URL 返回真 404（无软 404） |
| trailing slash | 带斜杠 308 归一到无斜杠 canonical |
| OG / analytics | og:image + og:image:alt 在位；Clarity 带 hostname 门控（既有配置） |
| 旧 URL 重定向 | 站点无 URL 迁移历史，N/A |

### 终检遗留（非阻塞）

1. ~~robots.txt 无显式 AI 爬虫条目~~ → **同日已改**：public/robots.txt 显式放行 GPTBot/OAI-SearchBot/ChatGPT-User/ClaudeBot/PerplexityBot/Google-Extended/Applebot-Extended（待 push 部署生效）。
2. PSI API 匿名配额 429（与 fancyfont 那轮相同）→ 用户侧 pagespeed.web.dev 手测首页移动端；仓库 `docs/lighthouse-baseline.md` 的 10-14 本地基线全 100 分，线上复测待做。
3. ~~GSC 表现数据未取~~ → **用户已于 2026-11-08 处理 GSC**。补充记录：当日 `site:` 匿名探针（浏览器直采）裸域仅返回首页 1 条、工具页/zh/指南路径探针 0 条——`site:` 计数本身不可靠，仅作异常信号留档；以 GSC 页面索引报告为准。

---

## 二、竞品分析（2026-11-08 实测）

### 2.1 数据规模

- autocomplete：Google suggest API，48 个 en 种子 × 9 变体 + 60 条问题式 + 8 个 es 种子 → **6,977 个唯一 en 词** + 359 个 es 词
- SERP：25 个核心查询浏览器直采 Google（hl=en, gl=us，含同日补采的 es 5 词与 effects 簇 4 词），约 200 条 organic、130+ 个唯一域名
- 竞品画像：105 个域名抓取成功（TDK + H1/H2 + 词数 + 信号位）

### 2.2 竞争格局：经典工具缺席，AI 视频平台与新兴小站盘踞

25 个查询的 #1 里**没有 mp3cut.net、audiotrimmer.com、online-audio-converter.com 这些上一代头部工具**——它们甚至没进前 10。当前 Google 在这些词上给的是三类玩家：

| 类型 | 代表 | 特征 |
|---|---|---|
| AI 视频平台溢出 | freebeat.ai(4 次)、kapwing、flexclip、flixier、media.io、cutfa.st、async.com | 音频只是其视频工具的附属，意图错配明显 |
| 新兴音频小站 | chunkaudio.com、audiomuse.ai、diamondaudiocity.com、audiomulticut.com、somio.ai、neuralanalog.com、soundboost.ai、musci.io、vibemv.app | 单页工具站，多为 AI 包装，内容薄 |
| 社区内容 | reddit.com(15 次) | 讨论帖占据 head 词前段（audio editor、mp4 to mp3、change audio speed 的 #1 或前 3） |

各簇概览（详见 `clusters.json` / `serp_matrix.csv`）：

| 簇 | 词条数 | SERP 里的对手 | 我们的页 |
|---|---|---|---|
| convert | 1,089 | reddit、movavi、apps.apple | 6 个成对转换页 + mp4-to-mp3 + extract-audio + bitrate-converter |
| loudness | 892 | webm.to、cutfa.st、freebeat.ai（全是视频工具） | increase-volume、volume-booster、normalize-audio、compress-audio、loudness-meter |
| speed-pitch | 745 | reddit、somio.ai、neuralanalog.com、snipsound.com | change-audio-speed、tempo-changer、pitch-changer、slowed-reverb |
| cut-trim | 718 | speechtext.ai(#1)、chunkaudio.com、audacityteam.org | audio-trimmer、mp3-cutter、split-mp3、silence-remover |
| effects | 531 | descript.com、clipchamp.com、artplayer.org、audio-to-waveform.com、avid.com(Pro Tools)、aijinglemaker.com、songpeel.com（同日补采 4 词） | 17 页（reverb/echo/fade/reverse/EQ/filters/3d/432/looper…） |
| head-editor | 293 | audionodes.com、sodaphonic.com、reddit | /、mp3-editor、multi-track-audio-editor |
| record-transcribe | 315 | otter.ai（巨头）、proactor.ai、podcast.adobe.com | audio-to-text、voice-recorder |
| detect | 297 | soundplate、tunebat、keypitch.app（数据库型） | key-bpm-finder、tap-tempo、metronome |
| cleanup | 248 | soundboost.ai、audioeditor.org、noisereducerai.com | noise-remover、silence-remover |
| ringtone | 281 | musci.io、media.io、capcut | ringtone-maker |
| join-merge | 286 | audiomuse.ai、media.io、audio-joiner.com | audio-joiner |
| visual | 245 | vibemv.app、genmusic.im、clipchamp | music-visualizer、waveform-generator、spectrogram-generator |
| es | 359 | kapwing、capcut、freeconvert、zedge、softonic（同日补采 5 词，见 [term-page-map](2026-11-08-term-page-map.md) §三） | es 镜像 77 页 |

**我们自己 0 出现**：25 个查询的前 10 里都没有 freeaudioeditor.online。域名 10 月中上线，属预期（同阶段 fancyfont 首月也只有 2,196 展示）。

### 2.3 竞品定位信号（105 域名）

| 信号 | 数量 | 含义 |
|---|---|---|
| 有付费墙/定价 | 66/105 | 免费受限是常态；我们全免 + 无水印是硬差异 |
| 标榜 AI | 57/105 | AI 是当前 SERP 的入场券话术，但多数是 AI 包装 |
| **宣称本地/不上传** | 35/105 | 我们的核心差异点有 1/3 对手也在讲，**但 2/3 没有讲**；且多数只是口号，没有 Web Audio 本地解码的技术事实（我们的 FAQ 点名 Web Audio + 数字事实是可验证的） |
| 4+ hreflang 多语言 | 32/105 | 多语言竞争中等；我们 11 语言全站镜像领先绝大多数单语言小站 |
| 挂 guides/blog | 多数 | 内容型竞争普遍，深度参差 |

### 2.4 机会判断（按证据强度排序）

1. **loudness 簇（892 词）意图错配最重**：#1 们是 webm.to/cutfa.st/freebeat.ai 这些视频工具。我们有 5 个专页 + 页内真实数字表（dBFS、320kbps、目标响度），是全站与 SERP 现状落差最大的簇。
2. **cut-trim（718 词）头名是录音转写站**（speechtext.ai 排 audio trimmer online 第一）和 4 天前还能算新的 chunkaudio；经典工具缺席，窗口开着。
3. **speed-pitch（745 词）reddit 占了 audio 头部**，somio.ai/neuralanalog.com 这类新站排得进前 3；slowed-reverb/nightcore/sped-up 子簇词条量大，我们有 slowed-reverb + tempo-changer 的诚实区分（不承诺保调）。
4. **detect 簇对手是数据库型**（tunebat/soundplate 靠曲库），我们的"从你拖进来的文件读"是不同意图，长尾（tap tempo、bpm of a file）可进。
5. **record-transcribe 头部有 otter.ai，不抢 head**；audio-to-text 页按既有策略守长尾（会议记录、播客转写场景词）。
6. **es 簇（359 词，5 个 head 词 SERP 已采，见 [term-page-map](2026-11-08-term-page-map.md) §三）**：竞争与 en 同构（视频平台 + 泛转换站），无本土音频工具站垄断；es 镜像页已存在，缺的是权威度积累。注意 tono de llamada #1 是 zedge 内容库——ringtone 页守创作意图，不抢下载词。

### 2.5 本轮缺口（诚实记录，不得当结论用）

- ~~effects 簇未覆盖~~ → 同日补采 4 词（add reverb / fade in fade out / reverse audio / equalizer online）：对手仍是视频 AI 平台（descript、clipchamp）+ 小工具站（audio-to-waveform、aijinglemaker、songpeel），avid.com(Pro Tools) 排进 fade 词——经典效果工具站同样缺席，格局判断不变。
- related searches 每查询 7 条、PAA 几乎为 0（Google 用 AI Mode 替代了大部分 PAA 展位）——问题式需求证据主要来自 autocomplete 的 93 条问题词，SERP 级 PAA 证据缺失。
- 词条→页面映射已完成（[term-page-map](2026-11-08-term-page-map.md)），但只覆盖每簇 top45 词；长尾 6,000+ 词未映射，规则式映射需人工复核后再进内容规划。
- 搜索量/难度：无关键词工具数据，全部词条**候选 ≠ 已验证**（沿用 keyword-intent-map 的证据纪律）。
- ~~GSC 未取~~ → 用户 2026-11-08 已处理（见终检遗留 #3 的 site: 探针留档）。
- ~~旧功能矩阵过期~~ → 已在该文件头部加 2026-11-08 注记（降噪/变声/页数三处，全量刷新留冻结期后）。

---

## 三、修复清单（2026-11-08 收尾更新：3/4/5 已完成，随后进入冻结期）

| # | 事项 | 优先级 | 谁 |
|---|---|---|---|
| 1 | PSI 手测首页/工具页移动端（lighthouse-baseline 的线上复测欠账） | P2 | 用户 |
| 2 | GSC 导出 28 天表现（按页面/查询），回填 2.4 的机会判断 | P2 | 用户 |
| 3 | ~~robots.txt 显式放行 AI 爬虫~~ → ✅ 同日完成（public/robots.txt，7 个 AI 爬虫显式条目，待 push 部署） | P3 | 会话 ✅ |
| 4 | ~~功能矩阵过期注记~~ → ✅ 同日完成（头部注记降噪/变声/页数三处；全量刷新留冻结期后） | P3 | 会话 ✅ |
| 5 | ~~SERP 补采 effects 4 词 + es 5 词~~ → ✅ 同日完成，矩阵重跑为 25 查询 | P3 | 会话 ✅ |

**冻结期起（2026-11-08）**：不再改线上与文档；解冻后第一件事是按 GSC 收录状态决定批量请求索引还是直接进内容节奏（schedule-2026-11.md 的 #2/#3/#4 简报欠账）。

## 四、方法与工具（可复用）

脚本在 `~/WorkBuddy/57rfy/seo-analysis/audio-editor-full-check-2026-11-08/scripts/`：
- `full_url_sweep.py`：sitemap 全量状态/重定向巡检（喂 URL 列表）
- `deep_sample_check.py`：抽样页 title/desc/canonical/hreflang/JSON-LD/H1 深检
- `autocomplete_recursion.py`：Google suggest 递归词表（换种子词即用）
- `serp_snapshots.py`：DDG 版（本网络被拦，仅存档）；SERP 实际采集走 ZCode 浏览器直采 Google（cite+goto 解析，脚本内嵌在本轮会话）
- `fetch_competitors.py`：竞品 TDK+内容+信号收割（curl + r.jina.ai 回退）
- `cluster_analysis.py`：词簇 × 竞品 × 覆盖矩阵（换 our_map 即移植）
