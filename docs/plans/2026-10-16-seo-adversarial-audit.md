# SEO 对抗审查 — 方法论、证据与排查清单（2026-10-16）

从三个博弈方出发做对抗式审查：**用户**（真实搜索词与意图）、**Google**（如何解读查询并挑选结果）、**爬虫**（页面上有什么、起什么作用）。每一方的审查都以前两方的证据为输入，最后落到可验证的修改上。

## 一、方法论

### 维度 1：用户（搜索词 → 真实意图）
- 每个优先工具 × 每个语言，用真实检索行为验证「用户到底输入什么」：Google Autocomplete（suggestqueries，分 locale）、Bing/Mojeek/Brave SERP 抓取、竞品页面 title 直接抓取。
- 输出三样东西：主搜索词、意图类型（文件工具 / URL 下载 ripper / App 下载 / 资讯）、意图陷阱。
- 关键发现（示例）：
  - 中文用户搜「剪辑」不搜「裁剪/剪切」（音频剪辑、mp3剪辑 的下拉词族完整）；录音转文字 > 音频转文字。
  - 西语用户输入动词短语「recortar audio / unir canciones」，不输入名词「recortador」；「en línea」几乎没人打，都打「online」。
  - 葡语（巴西）介词是「converter vídeo **em** MP3」，不是「para」；「transcrever áudio **em** texto」。
  - 德语没搜「Klingelton-Maker」的，都是「klingelton erstellen」；「tonbearbeitung online」是死词，用户借用英语「audio editor online」。
  - 法语「rogner」几乎没人用，都是「couper」；录音的真实头部词是「dictaphone en ligne」。
  - 俄语「обрезать музыку」>「обрезать аудио」；「усилить басы」而不是「низы аудио」。
  - 日语「音声トリマー」没人搜，是「音声トリミング / mp3 カット」；「ボイスレコーダー」偏硬件购物意图，网页工具意图是「オンライン録音」。
  - 韩语「영상 MP3 변환」而不是「MP4 MP3 변환」；变速的真实词是「노래 배속」；转文字是「녹음 파일 문자 변환」。
  - 印尼语「potong lagu > potong mp3 > pangkas」；「penguat volume」没人搜，是「perbesar volume audio」。
  - 阿语词序是「تحويل MP4 الى MP3」（MP4 在前）+ 口语「الى/اون لاين」。
- **意图陷阱清单**（坚决不追的关键词）：
  - 一切 URL 下载意图：`youtube to mp3`（英/日/中/韩/阿 全部存在同族词）、西语「convertidor de youtube a mp3」、葡语「converter vídeo em mp3 **do youtube / pelo link**」、俄语「по ссылке / ютуб / тг бот」。本站是基于文件的工具，服务不了，吸引来只会弹走并伤质量信号。mp4-to-mp3 各语言文案必须明确「处理你设备上的文件」。
  - 「volume booster」裸词被浏览器插件/系统音量意图统治 → 标题必须保留文件限定词（audio/video file）。
  - 法语「sonnerie iphone」头部是铃声下载站；创作意图在「créer une sonnerie iphone **en ligne**」。阿语「نغمة رنين mp3」同理是下载意图。
  - 「mp3 cutter」的领先竞品都捆绑「Make Ringtones」→ 本站把铃声独立成页，cutter 标题不要承诺 ringtone，避免自相蚕食。

### 维度 2：Google（查询 → 挑选结果）
- SERP 片段质量：title ≤60 字符（CJK 约 30 字宽）、description ≤155 字符（CJK 约 80）；主词前置；品牌后置。
- title/H1/首段与查询意图一致；同一意图只允许一个页面竞争（trimmer/cutter/ringtone 分工明确）。
- 结构化数据与页面类型匹配：WebSite/WebApplication/FAQPage/HowTo/BreadcrumbList 均已实现；HowTo 富结果虽已被 Google 弃用，但保留对其他引擎与 AI 搜索无害。
- 首页 title 以头部查询词开头（「free online audio editor」类），隐私钩子保留在后半句。

### 维度 3：爬虫（内容 → 作用）
- 可抓取：robots.txt + sitemap-index ✓；导航下拉/页脚把 29 个工具全量静态输出 ✓；related tools 互链 ✓。
- 可收录：每页自引用 canonical ✓；hreflang 全量互惠 + x-default（HTML head）✓；404 noindex ✓；HSTS/cleanUrls ✓。
- 发现缺口：**sitemap 的 `<url>` 缺 `x-default`**（HTML 里有、sitemap 里没有）→ 补齐，保持两种声明方式一致。
- 内容作用：29 个工具页每个都有独立 intro/uses/howTo/FAQ，无薄页；指南图片全部有描述性 alt ✓；llms.txt ✓。

## 二、排查清单（逐项状态）

| # | 检查项 | 维度 | 状态 |
|---|---|---|---|
| 1 | robots/sitemap 可抓取 | 爬虫 | ✅ |
| 2 | canonical 自引用 + hreflang 互惠 + x-default（HTML） | 爬虫 | ✅ |
| 3 | sitemap 含 x-default | 爬虫 | ❌→修复 |
| 4 | 404 noindex、HSTS、cleanUrls | 爬虫 | ✅ |
| 5 | JSON-LD 类型齐全且随语言本地化 | Google | ✅ |
| 6 | title/description 长度上限（11 语言全量扫描） | Google | ❌→修复（id/fr home、de voice-recorder 超长；12 条描述超 155） |
| 7 | title 与各语言真实搜索词对齐（约 60 处） | 用户/Google | ❌→修复 |
| 8 | H1/导航名与查询词表一致（剪辑/トリミング/басы 等词表错位） | 用户 | ❌→修复（仅改词表错位的语言） |
| 9 | 意图陷阱防护（不追 YouTube/下载/裸 volume booster） | 用户/Google | ✅（保持，不引入） |
| 10 | 页面间分工无蚕食（cutter≠ringtone 等） | Google | ✅ |
| 11 | 指南图片 alt、内链全量 | 爬虫 | ✅ |
| 12 | 新页面机会（flac-to-mp3 / mp3-to-wav / 压缩 mp3 / nightcore / 去噪） | 用户 | 📋 建议立项（本次不做） |

## 三、机会缺口（建议后续立项，本次不改）
1. **flac-to-mp3**：转换词族成熟、代码能力现成（首页已宣传 FLAC 支持）——最高优先新页。
2. **mp3-to-wav**、**压缩 mp3（reduce audio file size）**：同一转换管线，低成本新页。
3. **nightcore converter**：slowed-reverb 引擎直接支持（speed>100%），可做独立落地页。
4. 长尾补强：es「recortar audio de whatsapp」、pt「tirar audio do video」（extract-audio 的 pt 标题应领这个词）、id「potong mp3 jadi ringtone」、ru「обрезать музыку на рингтон」→ 各自工具页 FAQ/H2 补一节。

## 四、执行记录
- 提交 1：各语言 SERP 标题/描述对齐真实搜索词（tools.ts + 10 个 i18n 文件）。
- 提交 2：sitemap 补 x-default。
- 验证：`scripts/serp-check.mjs` 扫描 dist 产物（title/description 长度、重复），`npm run build`。
