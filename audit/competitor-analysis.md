# 竞品第一轮审计：浏览器端音频编辑工具（2026-11-04）

> 审计方式：只读。对竞品站点做 WebFetch/curl 只读抓取（GET），结合仓库内部既有研究交叉核对。
> 事实标签约定：**【官网宣称】**= 竞品自己页面写明的文案；**【页面观察】**= 我们从页面 HTML/结构中直接观察到的事实；**【UNVERIFIED】**= 无法核实（页面是 JS 壳、帮助中心 403、价格表未渲染等）。
> 所有抓取时间：2026-11-04。竞品页面随时可能改版，引用时以当日观察为准。

---

## 1. 现有内部研究盘点

| 文件 | 日期 | 内容 | 新鲜度/ usefulness 评估 |
|---|---|---|---|
| `docs/competitive-analysis-audioeditor.md` | 研究日期 2026-10-15（文件头声明；mtime 10-15） | 对 audioeditor.org 的深挖：58 工具×10 语、DR 9、387.6K 月访（SiteData.dev 第三方估计）、i18n 逐语言审计、超越路线图 | **最新且最深入**。对象不是本次 6 竞品之一，但其 i18n 审计方法可直接复用。流量数字是第三方面板估计，不是实测 |
| `docs/competitor-research.md` | 2026-10-14 | 美区 26 关键词全景 + 十大竞品分四组（纯前端派 / 123apps 矩阵 / 视频工具延伸派 / 转换器大厂），含 cut.audio、soundtools.io、flixier、freeconvert 等 | 关键词数据已 3 周旧，SERP 排名会漂移；**本次抽查与其一致**：mp3cut 评分 4.4/5（当时写"2.7 万票"，本次实见 28,325 票，量级一致）、clideo 44+ 工具/17 语（本次实见 18 语列表，微漂移）。该文档称 clideo "freemium 去水印"——**本次未能在其公开页面核实水印条款（帮助中心 403）**，此条应视为待复核 |
| `docs/competitor-feature-matrix.md` | 2026-10-28 | 78 项功能 × audioeditor.org / snipsound.com / soundtools.io / 我们 的逐项矩阵 | **新鲜**，是我方功能查缺的直接依据。三个对象全部是"本地处理"同路线玩家，不含本次的 SaaS 上传制四家 |
| `docs/competitor-analysis/`（目录） | 2026-10-28（README + 39 份编号报告 + parse.py + `raw/` 71 个抓取文件含 SERP JSON 快照） | 按关键词逐项的 SERP 前十审计（mp4-to-mp3、mp3-cutter、equalizer 等 38 簇），五件套规范，证据型"无行动"结论居多 | **新鲜且方法论最完整**。对象是 AE/snipsound/soundtools + SERP 本身。VEED 仅作为 SERP 在场者被顺带提及（001b、README 的 mp3 editor / extract audio 行）；**Kapwing、Tapecut 在全部内部文档中零提及** |

**盘点结论：** 内部研究对"本地处理同路线"三家（audioeditor.org / snipsound / soundtools）覆盖充分且较新（10-28）；但对**上传制 SaaS 大厂（VEED、Kapwing）没有独立档案**，对 **123apps/mp3cut 只有 2026-10-14 的一段速写**，对 **Clideo 只有关键词侧写**。本次审计补的正是这一层。

---

## 2. 逐个竞品观察

### 2.1 AudioMass — https://audiomass.co

- **定位**：单一在线音频编辑器（full editor，非工具集）。meta description："AudioMass is a free full-featured web-based audio & waveform editing tool"【页面观察，audiomass.co 首页 HTML】。
- **本地处理宣称**：站点首页是纯 JS 壳，**没有任何可索引文案**；HTML 中只有一个 `<div id="app">` + `all.build.js`，无上传接口、无账号体系【页面观察】。GitHub README 称 "Free full-featured web-based audio & waveform editing tool"，支持多轨（"layer multiple tracks, drag clips around, crossfade overlaps, record onto armed channels"），可自托管（`go run audiomass-server.go`）【官网宣称，github.com/pkalogiros/audiomass】。"文件不上传"没有作为营销文案明说——**【UNVERIFIED】**（但全客户端 SPA 架构与本地处理一致）。
- **注册要求**：页面无任何登录/注册入口【页面观察】。
- **免费限制**：无付费层、无水印/时长条款可见【页面观察 + UNVERIFIED：无价格页可抓】。
- **工具数量**：一个编辑器，功能内嵌（cut/fade/EQ/录音/多轨/ID3），不是多工具矩阵【页面观察，GitHub README】。GitHub 约 3k stars / 348 forks【页面观察，repo 页】。
- **移动端宣称**：HTML 带 `manifest.json`（PWA）+ `apple-mobile-web-app-capable`、`mobile-web-app-capable` meta【页面观察】——可安装的 Web App，但无专门移动营销页。
- **SEO 页面形态**：**零 SEO 页面**——无博客、无 FAQ、无 how-to、无工具子页，全站只有一个 SPA 路由【页面观察】。内部研究（`docs/competitor-research.md`）称其仍能靠开源外链排进 "free audio editor" 前列——本次未重验 SERP 排名，**【UNVERIFIED】**。
- **国际化**：仅英语，无语言切换【页面观察】。
- **小结**：开源 fame + 纯产品，无内容营销。是"零内容也能活"的极端样本，也是我们 PWA/离线故事的对标。

### 2.2 123apps / mp3cut.net — https://123apps.com、https://mp3cut.net

- **定位**：**工具集（tool collection）**，跨视频/音频/PDF/转换器四类："Online Tools for Video, Audio, PDF, and File Conversion"【官网宣称，123apps.com 首页】。音频子工具用独立精确匹配域名（mp3cut.net、audio-joiner.com 等）【页面观察，首页链接结构；与内部研究一致】。
- **本地处理宣称**：**无任何本地处理宣称**。mp3cut 上传入口为 "Choose File / Google Drive / Dropbox / From URL"，属上传制【页面观察】。
- **注册要求**：可选。免费可用无需登录；登录支持 Google/Apple/Microsoft/Yandex/VK/邮箱一次性码【页面观察】。
- **免费限制**：mp3cut 页宣称 "absolutely free"；Premium $6/月解锁 "Open files up to 10 GB"、"Unlimited files"、"No ads"、"Ai audio processing"、"Save videos without length limits"（51 个 App 打通）【官网宣称，123apps.com】。免费层具体体积/时长上限**未在任何抓到的页面量化**【UNVERIFIED】。免费层含广告【页面观察，页面存在广告位/No ads 卖点反推；"含广告"为官网 Premium 卖点的反面表述】。
- **工具数量与分类**：首页清点 **51 个 App**（官网 "Premium access to 51 apps" 佐证）：视频 18、**音频 8**（trim/volume/speed/pitch/EQ/reverse/录音/joiner）、PDF 17、转换器 8【页面观察 + 官网宣称】。
- **移动端宣称**：无 App 宣称【页面观察】。
- **SEO 页面形态**：每工具独立落地页 + "How to Trim Audio?" 3 步 how-to + Help/博客 how-to 文章（切歌、格式清单、iPhone 铃声等）+ FAQ/contact 流【页面观察】。
- **国际化**：mp3cut 17 语、123apps 16 语（en/es/pt/it/de/fr/ru/pl/tr/id/ja/ko/zh-Hans/zh-Hant/vi/th…），并有"发现翻译错误？告诉我们"众包校对入口【页面观察】。
- **社证**：mp3cut "4.4/5 — 28325 votes"【官网宣称】。

### 2.3 VEED — https://www.veed.io/tools/audio-editor、/tools/audio-cutter

- **定位**：AI 视频创作平台，音频工具是其子矩阵。"Studio-quality audio at your fingertips"；"an AI video creation platform where you can generate, refine, and export videos worth posting"；明确对标桌面软件："The best alternative to Audacity"【官网宣称】。
- **本地处理宣称**：**无**。how-to 第一步即 "Upload audio"；云端处理（"in the cloud" 见其 pricing 页 meta 描述 "Record, edit and stream your videos in the cloud"）【页面观察】。移动端定位 "No need to download an app"，即浏览器上传制，非本地处理。
- **注册要求**：工具页 CTA "No credit card required"；FAQ "Yep! VEED is free to use"——免费可用，但导出/保存需走其账号体系【页面观察；是否强制注册后才能导出 UNVERIFIED】。
- **免费限制**：免费层可 "trim clips, adjust volume, and make basic edits"；降噪（Dolby 技术加持）与语音翻译为付费【官网宣称，audio-editor 页 FAQ】。**免费层水印、导出时长/文件上限：本次抓取 pricing 页时价格表未渲染，未能核实——【UNVERIFIED】**。
- **工具数量与分类**：音频子页可观察约 15+：Audio Cutter、Joiner、Looper、Speed Changer、Split、Extract Audio、Add Audio to Video、Silence Remover、Ringtone Maker、Podcast Editor、格式专页（MP3/M4A/AAC/FLAC/OGG Editor）、Normalization、Converter【页面观察，audio-editor 页 "Discover more" 链接群】。AI 卖点：降噪（Dolby）、去填充词、去静音、语音翻译；Epidemic Sound 55,000+ 免版税曲目【官网宣称】。
- **移动端宣称**：无原生 App；Android/iPhone 经浏览器操作（audio-cutter FAQ）【官网宣称】。
- **SEO 页面形态**：标准 SaaS 矩阵——工具落地页 + 3 步 HowTo + FAQPage schema（5 问）+ 博客（"11 Best Audio Recording Software to Try in 2025"）+ 格式变体子页【页面观察】。社证："Trusted by 1M+ creators"、4.6 分 2,139 条评论（cutter 页）【官网宣称】。
- **国际化**：抓取到的页面均 `locale=en`，无语言切换可见【页面观察；是否有其他 locale UNVERIFIED】。

### 2.4 Clideo — https://clideo.com、https://clideo.com/cut-audio

- **定位**：在线视频工具箱为主、音频为辅（观察到音频工具 5 个：cut audio、merge audio、audio converter、audio translator、text-to-speech）【页面观察，首页导航（地理分流返回印尼语版）】。
- **本地处理宣称**：**无**。工具页流程为上传（设备/拖拽/云盘）；安全段原文："Anda tidak perlu khawatir tentang seseorang mendengarkan audio Anda, karena tidak ada yang memiliki akses ke file yang Anda unggah"（没人能访问你上传的文件）——是"上传但私密"的宣称，不是本地处理【官网宣称，cut-audio 页】。
- **注册要求**：可选。Bing 摘其帮助中心原文："Visitor — free access without registration; Registered user — free access with a Clideo account"【官网宣称，help.clideo.com 文章（经搜索摘要转引；直接抓取被 403，原文页面 UNVERIFIED）】。
- **免费限制**：价格页 FAQ 仅称 "gratis dengan beberapa batasan fitur"（免费但有功能限制），**无水印/体积/时长具体数字——【UNVERIFIED】**（帮助中心 403、价格卡片未渲染）。内部文档 `docs/competitor-research.md` 记载其 freemium 去水印模式，本次未能独立核实。
- **工具数量与分类**：首页清点视频类约 30+、转换器类、录制类、音频类 5 个【页面观察】；内部研究称 44+ 工具（2026-10-14）。
- **移动端宣称**：**有 iPhone App**——cut-audio 页有 App Store 二维码下载流程【页面观察】；FAQ 称移动浏览器可用。
- **SEO 页面形态**：每工具独立页 + 3 步 how-to + FAQ + `/resources` 文章枢纽（"Artikel" 导航项）【页面观察】。社证：首页宣称 "5M 月用户 / 401M videos created"；cut-audio 页 Trustpilot 4.8 分 5,300 评论【官网宣称】。
- **国际化**：观察到 17–18 语（含 id/de/en/es/fr/it/pl/pt/vi/tr/ru/uk/th/ja/zh-Hans/zh-Hant/ko），按地理自动分流语言【页面观察】。

### 2.5 Kapwing — https://www.kapwing.com、https://www.kapwing.com/pricing

- **定位**：面向团队/营销的 AI 视频创作平台，音频是配套（"Record, edit, and clean audio"）。宣称 "30 million+ creators globally"【官网宣称，首页】。
- **本地处理宣称**：无；用户证言角度宣称 "No need for downloads or installations - it just works"——浏览器云端，非本地【官网宣称】。
- **注册要求**：**要求账号**——"Attach Media" 与 "Get started" 均链向 `/signin`【页面观察】。六家中唯一明确注册墙的。
- **免费限制**：**价格页本次抓取成功，是六家中免费条款最透明的**：Free $0（10 credits）、"Unlimited exports **with a watermark**"、**导出 ≤4 分钟**、**每月导出 ≤30 分钟**、**720p**、上传 ≤2 GB、存储 5 GB（工作区文件 3 天）、Clean Audio 仅 5 分钟、自动翻译 5 分钟；Pro $16/月（1,000 credits/月）、Business $50/月（4,000 credits/月）；无付费试用【官网宣称，kapwing.com/pricing】。
- **工具数量与分类**：音频工具 6 个（Audio Editor、Clean Audio 降噪、Smart Cut 去静音、TTS、Dubbing 40+ 语、Transcribe）+ 视频侧十余个（Editor、Subtitler、Resize、Clip Maker、B-Roll/Script Generator、Meme、Screen Recorder 等）【页面观察】。
- **移动端宣称**：无原生 App【页面观察】。
- **SEO 页面形态**：模板库（Instagram/meme/EDU）+ Resources/博客 + Help Center + 客户故事 + YouTube 教程；评分徽章 Google 4.9/5,024+、Capterra 4.4/207+【页面观察】。另有 MCP 集成宣称（"Run Kapwing within a chatbot"，提供 Claude/ChatGPT 连接）【官网宣称】。
- **国际化**：站点界面英语；"40+ languages" 是其配音**功能**宣称，不是站点 i18n【页面观察 + 官网宣称】。

### 2.6 Tapecut — https://tapecut.com — 【UNVERIFIED / 已死站】

- **页面观察（2026-11-04，curl 直接验证）**：首页 HTML 仅一行 JS：`window.location.href="/lander"`；`/lander` 返回 Access Denied，重定向目标为 `forsale.godaddy.com/forsale/tapecut.com`——**域名已在 GoDaddy 挂牌出售（parked/for sale）**。
- Wayback Machine 最近快照 2025-07-14（archive.org availability API 返回），该快照抓取内容同样为空【页面观察】。
- 结论：Tapecut 作为竞品**已不存在**。任务方提到的该名字在仓库全部文档中零提及（grep 验证），无法追溯其历史定位。**全项 UNVERIFIED。**

### 2.7 补充：TwistedWave Online — https://twistedwave.com（第七个，易核实的传统玩家）

- **定位**：桌面音频编辑器老牌（Mac/Windows/iPhone/iPad/Online 五端），Online 版为浏览器版。"Run it straight from your browser, with nothing to download or install"【官网宣称，twistedwave.com 首页】。
- **本地处理宣称**：无明确宣称【UNVERIFIED——online.html 页面是 "Loading..." JS 壳，免费时长限制、是否上传服务器处理、注册要求均无法从抓取内容核实】。
- **SEO 页面形态**：产品官网形态（功能页 + 平台页），非工具矩阵【页面观察】。
- **国际化**：英语【页面观察】；多语言 UNVERIFIED。
- **小结**：单工具在线版，无免费规模打法；对我们参考价值低，仅作坐标系。

---

## 3. 对比矩阵

抓取日期 2026-11-04。"?"= 该项未能核实（详见 §5）。

| 竞品 | 定位 | 本地处理 | 注册 | 免费限制（页面可见） | 工具数 | SEO 页面形态 | 站点多语言 |
|---|---|---|---|---|---|---|---|
| **AudioMass** | 单一在线编辑器（开源） | 全客户端 SPA，但无明示文案（?） | 无 | 无付费层可见 | 1 个编辑器 | **零 SEO 页面** | 仅英语 |
| **123apps / mp3cut** | 跨域工具集矩阵 | ✗ 上传制 | 可选 | "absolutely free" + 广告；上限未量化（?）；$6/月 Premium 解锁 10GB | **51**（音频 8） | 工具页 + EMD 域名 + how-to 博客 | **16–17 语** |
| **VEED** | AI 视频平台 + 音频子矩阵 | ✗ 上传/云端 | 免费用（导出需账号，?） | 免费限基础编辑；水印/上限未渲染（?） | 音频 ~15 子页 | 工具页 + HowTo/FAQ schema + 博客 | 仅英语可见 |
| **Clideo** | 视频工具箱 + 音频 5 工具 | ✗ 上传制（宣称文件私密） | 可选（Visitor 免费） | "有功能限制"，数字未公开（?） | 44+（音频 5） | 工具页 + FAQ + /resources | **17–18 语**，地理分流 |
| **Kapwing** | 团队向 AI 视频平台 | ✗ 上传/云端 | **必须注册** | **最透明**：水印 + ≤4min/条 + 30min/月 + 720p + 2GB | 音频 6 + 视频 10+ | 模板 + 博客 + Help Center | 站点英语（配音功能 40+ 语） |
| **Tapecut** | — | — | — | — | — | — | 域名已停售（GoDaddy for sale） |
| **TwistedWave Online** | 桌面老牌的浏览器版 | ?（页面是 JS 壳） | ? | ? | 1 个在线编辑器 | 产品官网 | 英语 |

---

## 4. 对 FreeAudioEditor.online 的启示

依据本次页面观察（不含无法核实的部分）：

1. **"本地处理/不上传"在头部四家（123apps、VEED、Clideo、Kapwing）的页面上完全缺位，且四家全部是上传制**。我们的无上传、无注册、无水印是可验证的硬差异——应把"文件不离开你的设备"做成每个工具页首屏的明示宣称（AudioMass 有实无文，正好留出"说得清"的位置）。
2. **Kapwing 的免费墙是最好的对照文案素材**（官网原文：水印、单条 ≤4 分钟、每月 ≤30 分钟、720p）。对我们服务的"被付费墙挡住的用户"（播客片段、长录音 >4min）是直接转化入口，可在长音频场景页面对比表述（注明来源与日期，避免不实贬损）。
3. **123apps 用 $6/月卖"10GB 上限解除 + 去广告"**——说明上传制的边际成本迫使其必须收费；我们的本地处理让"免费、无限制"零边际成本，这是 `docs/competitive-analysis-audioeditor.md` 已论证的模型，本次在 123apps 身上再次得到印证。
4. **注册墙分层清晰**：Kapwing 必须注册 > VEED/Clideo/123apps 可选注册 > AudioMass/我们无账号。可选注册的四家仍把高级功能锁在账号后——我们的"零账号"宣言对中间层同样成立。
5. **AudioMass 再次证明零 SEO 页面也能靠开源外链活**（GitHub 3k stars、无 FAQ 无博客）；内部 005 报告的"Phase 3 开源换外链"策略由此获得旁证。反之，其 meta keywords/OG 信息齐备 + PWA manifest 是低成本可抄项。
6. **格式变体页是 VEED/Clideo 共同的页面形态**（MP3 Cutter / WAV Cutter / FLAC Cutter…）。我们目前的"成对转换页"策略同构；可补的是 VEED 那种"格式专编辑页"（如 FLAC Editor）——`competitor-feature-matrix.md` §B18 记录的缺口与本次观察互证。
7. **社证差距是真实存在的品牌层差距**：123apps 2.8 万票、Clideo Trustpilot 4.8/5,300、VEED 4.6/2,139、Kapwing Google 4.9/5,024——我们无任何评分体系。短期不可复制，但 Product Hunt/GitHub 星标/r.Directory 列表是可操作的替代社证。
8. **站点多语言分层**：工具矩阵站 16–18 语（123apps/Clideo）是标配天花板；SaaS 内容站（VEED/Kapwing）反而不做站点 i18n。我们 11 语介于两者之间——工具站路线上仍低于标配，zh-Hant/ru/fr 增补（内部 P1）方向正确；同时注意 Clideo 的地理分流语言自动切换是可借鉴的 UX。
9. **竞品死亡率**：Tapecut 从任务清单里的"竞品"到域名挂牌出售，说明这个赛道小站存活期短——我们的竞品监控应每季度先验域名存活（内部研究均未含此项）。

---

## 5. 限制说明

以下内容本次**未能核实**，引用时请注明：

- **真实流量与使用数据**：六家均未抓取（无 SimilarWeb/第三方面板数据，本次也没有内部资料佐证；`competitive-analysis-audioeditor.md` 里的 387.6K 是 10-15 的第三方估计且对象不同）。首页"5M 月用户"（Clideo）、"30M+ creators"（Kapwing）、"1M+ creators"（VEED）均为**官网宣称**，非实测。
- **付费墙后的实际限制**：VEED 免费层水印与导出上限（pricing 价格表未被 WebFetch 渲染）、Clideo 免费层具体数字（help.clideo.com 返回 403，仅经 Bing 摘要转引其分层描述）、123apps 免费层体积/时长上限（页面未量化）。**"Clideo 去水印 freemium" 在本次公开页面观察中未获证实**，内部文档该条待复核。
- **JS 壳页面**：AudioMass 站点无正文文案（已用 curl 原始 HTML 补验 meta，但页面内文案如"隐私"段落无法排除存在于 JS bundle 内）；TwistedWave online.html 是 Loading 壳；Tapecut 已死站。
- **SERP 现状**：内部文档中的排名（如 AudioMass 排 "free audio editor" 第 2、mp3cut 排第 1 等）为 2026-10-14/28 采样，本次未重采样，存在漂移风险。
- **地理分流干扰**：Clideo WebFetch 返回印尼语首页（IP 分流），英语版首页未直接抓取；其语言列表以页面页脚枚举为准。
- **AudioMass "本地处理"**：架构上全客户端，但**站点无明示宣称文案**，本审计不将其计为"官网宣称"。
