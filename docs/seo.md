# SEO 规则

日期：2026-10-22。这是站内规则。一次审查的证据在 [2026-10-16 对抗审查](plans/2026-10-16-seo-adversarial-audit.md)。新页面怎么写完，看 [new-tool-spec](new-tool-spec.md)。各语言的字数和用词，看 [i18n 翻译规范](i18n-translation-guide.md)。页面类型和文章结构的分工，看 [内容类型](content-types.md)；文章由哪个声音执笔，看 [作家角色](writer-personas.md)。

## 一条意图一个 URL

slug 就是主搜索词，短横线，不缩写。已经有页能接住的意图，写进那页的 FAQ，不另开近页。

已经分开的几对不要写回同一页：

- `audio-trimmer` 裁一段，`mp3-cutter` 保留或删掉选区，`ringtone-maker` 做铃声。cutter 的标题不承诺铃声。
- `increase-volume` 是安静的音频文件，`volume-booster` 是整段偏小、含视频音轨和手机场景。标题保留文件限定，不抢浏览器插件那种「音量增强」。
- `change-audio-speed` 变速时音高跟着变。`tempo-changer` 变速且音高保持，范围 0.75–1.25。
- `slowed-reverb` 是慢放加混响，音高跟着降。不要写成保调。

## 不追的词

本站只处理用户设备上的文件。标题、H1、FAQ 不接这些意图：

- 从链接抓音频：`youtube to mp3`，以及各语言里「从链接 / YouTube / 电报机器人」的同族说法。`mp4-to-mp3` 写明是设备上的文件。
- 铃声下载站。创作意图才进 `ringtone-maker`（例如「在线做一首」）。
- 裸的系统音量、浏览器插件。

做不到的事写在 FAQ 里，并指向做得到的兄弟页。中置消除不是分轨。变调不是保调。MP3 导出会重编码一次，不要写「逐帧无损剪切」。

## 标题和摘要

英语 `title` ≤ 60 字符，`description` ≤ 155。CJK 的预算在翻译规范 §3，不要用英语字符数去卡汉字。

标题前半是主词，后半是这一页独有的操作、上限或数字。不要每页都用 `Online Free`。`No upload` 是全站说法，放描述，除非这一页没有更硬的事实。品牌名会把事实挤出 60 字符时就不加。指南标题同构：`What Is dBFS? Why Every Digital Level Is Negative`——后半必须是正文里坐实的事实（能在页内指出原句），不是口号。

H1 用和标题相同的主词。不要在 H1 里换成第二个主词。H2 写这段已经在讲的事，不加「为什么选我们」、对比表或词汇表。

描述一句好处，再一句证据（320 kbps、可设为 0 的交叉淡化、保留或删除、40 秒）。不堆「免费、隐私、免注册、无水印」。

离线：标题不写 `Works offline`。信任行写 `Offline after load`。转写页还要下模型，这行省略。冷启动离线打不开页面，因为没有 Service Worker。

## 页面上必须有的

每个工具页：独立 intro、3 条用途、3–5 步 HowTo、5–8 条 FAQ。FAQ 五类都要有：隐私（点名 Web Audio 或本地解码）、音质（数字和编码）、做不到什么、和最近的兄弟页差在哪、手机和浏览器。正文大约 900–1,400 词。相关工具 3 个，按下一步任务选，同一改动里至少两个兄弟页指回来。

英文、西语、德语文末有 `sections`，三段的段落数和要点数一致。

结构化数据：工具页 `WebApplication` + `HowTo` + `FAQPage` + `BreadcrumbList`。HowTo 富结果 Google 已停用，留给其他引擎和 AI 搜索。指南用 `Article`。`/tools` 用 `CollectionPage` + `ItemList`。

## 证据资产和页面独有的知识表

2026-10-29 起。来源是 bulkpictools gif-compressor 页的审计（[competitor-analysis/039](competitor-analysis/039-bulkpictools-gif-compressor.md)），分通用层和条件层。

通用层，每个工具页都要有：

- 真实 UI 截图 2–3 张，webp，第一张 eager 其余 lazy，alt 带数字。截图用脚本对着 preview build 生成（复用 check 脚本的 puppeteer 设施），UI 改版后重跑。过期的截图是假证据，比没有更糟。
- 至少一张真实数字的表。条件层不适用时，这张表就是「用这页之前最常被问的 3 个问题」：metronome 是常用 BPM，key-bpm-finder 是调性对曲速。数字必须能在页内坐实，不许编。
- 截图进 Schema，补 `ImageObject`。

条件层，意图匹配的页面才有，硬抄是模板噪声：

- 平台大小限制表：只给「装进某个限制」意图的页（compress-audio、ringtone-maker、split-mp3、bitrate-converter、voice-recorder、mp4-to-mp3、music-visualizer）。每格数值上线前逐行核实，加建议目标列并留 buffer——竞品表里的 Discord 8MB 就疑似过时，别照抄。
- 场景 how-to 小节：只给意图带场景的页（slowed-reverb 对 TikTok，volume-booster 对配视频，audio-to-text 对会议和播客）。每节 2–3 段。

红线：

- 新增小节只能写这一页独有的事实，句子不跨页复用。字数预算不变（900–1,400），加的是密度不是长度。
- 不学竞品的友链区、徽章墙、size 卫星工具页（和「一条意图一个 URL」冲突）、URL 改嵌套。
- zh 只给中文需求存在的头部页按场景重写（微信文件太大、QQ 邮箱附件上限），不是翻英语 FAQ；其余页保持合格翻译。各语言平台名不同（ja 对 LINE，ko 对 KakaoTalk，de 对 WhatsApp），逐语言另议。

推行：先改 3 页试点——compress-audio（限制表形态）、ringtone-maker（限制表形态）、slowed-reverb（泛化知识表形态），GSC 看 2–4 周，数据成立再排批量计划。新工具从第一天就带通用层（见 [new-tool-spec §3.2](new-tool-spec.md)）。

## 抓取和语言

- canonical 自引用。英语无前缀，翻译页 `/{locale}/...`。`x-default` 指向英语。
- hreflang 在 head 和 sitemap 里都要成簇，含 `x-default`。没有这篇指南的语言不进这篇文章的簇，也不进语言切换器。
- 404 `noindex`。`robots.txt` 放行，提交 `sitemap-index.xml`。
- 干净 URL，无尾斜杠。`/zh/` 这种带斜杠的请求会跳到无斜杠，不要把它当成坏页。
- 新工具加一行 `public/llms.txt`，一句事实。
- 导航和页脚从 `TOOLS` 输出全部工具，不要只在客户端插入链接。

翻译是按该语言的真实搜索词重写，不是逐字译英语标题。语域：zh 你，ja ですます，ko 해요체，de du，es tú，pt você，id Anda，fr vous，ru вы，ar أنت。品牌名、格式名、单位、数字不译、不改。

## 性能

首屏 HTML 由 Astro 输出。编辑器脚本不挡第一次绘制。重模块按架构文档里的时机加载。

预算在 [UI 规范 §13](ui-ue-spec.md)：LCP < 2.0s（4G 中端）、CLS < 0.05、首屏 JS < 90KB gzip。新 URL 的 Lighthouse 移动端性能、无障碍、SEO 都要 ≥ 95。

2026-10-20 从本机量过生产：工具页压缩后大约 HTML 18KB、CSS 10KB、编辑器入口 12KB、拉丁字体 29KB，边缘缓存 HIT。到波特兰节点的建连会占掉秒级，那是距离，不是包太大。

## 上线前

```bash
node scripts/seo-audit.mjs <preview-url>   # HIGH 必须是 0
node scripts/serp-check.mjs                 # 标题和描述长度
node scripts/pages-check.mjs
```

上线后：第 0 周在 Search Console 请求编入索引。第 4 周把真实查询写进 FAQ。第 8 周若有展示但点击率低于 3%，按赢的那条查询改标题和描述。
