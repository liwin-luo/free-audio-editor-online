# 内容计划 — SEO 文章队列(唯一来源)

日期:2026-10-23。取代 [内容差距分析](2026-10-21-content-gap-analysis.md) 的队列职能(原文保留作历史证据,不再更新)。规则出处不变:[SEO 规则](../seo.md)、[内容类型](../content-types.md)、[作家角色](../writer-personas.md)、[i18n 翻译规范](../i18n-translation-guide.md)。

每篇的完成定义(不重复写在批次里):content-types 对应结构骨架 + 首段链主工具 + `GUIDE_TOOL` 登记 + `sources` 外链 + persona 回填 + 配图 2–4 张 + `npm run build` 通过。写前跑 `node scripts/pick-persona.mjs --type how-to` 抽角色,第 4 周改 FAQ、第 8 周改标题时沿用同一角色。

## 核心判断(为什么切换节奏)

站点 10-14 上线,47 篇英语指南已铺完(工具锚定 29/52 ≈ 56%),但 Semrush 仅收录 2 个关键词,GSC 数据循环一次都没跑过。**瓶颈不是内容量,是零验证**:47 篇全部停在"等 GSC 第 4 周真实查询"那一步,普遍低于词数带、等着按数据加深。再铺新文是赌没验证过的词;加深/修剪/翻译是有数据或零押注的确定性动作。因此:广度生产冻结,按下面四个阶段走。

## 阶段 0 — 前置(先于一切文章工作)

- [ ] GSC / Bing 提交 sitemap 的线上确认、对新 URL 请求编入索引(roadmap Phase 0 遗留)
- [ ] 五页 smoke 流程 + 手机 Safari 真机(roadmap Phase 0 遗留)

这两件是数据循环的开关,不做则阶段 2 全是空转。

## 阶段 1 — 收尾批(一次性 4 篇,之后冻结)✅ 已发布(2026-10-23)

目标:工具锚定 29/52 → 33/52 ≈ 63%,超过 60% 目标,指南广度到此为止。四个词都出自旧候选词表(已人工预审、无蚕食),第五篇起离开预审范围,不做。

| # | 文章 | 结构 | 锚定工具 | 目标词 | 状态 |
|---|---|---|---|---|---|
| 1 | [how-to-reverse-a-song](../../src/pages/guides/how-to-reverse-a-song.md) | how-to · podcast-producer · 968 词 | `reverse-audio` | reverse audio online | ✅ |
| 2 | [slow-down-audio-without-changing-pitch](../../src/pages/guides/slow-down-audio-without-changing-pitch.md) | how-to · podcast-producer · 992 词 | `tempo-changer` | slow down audio without changing pitch | ✅ |
| 3 | [how-to-edit-mp3-tags](../../src/pages/guides/how-to-edit-mp3-tags.md) | how-to · bedroom-musician · 959 词 | `mp3-tag-editor` | mp3 tag editor online | ✅ |
| 4 | [loop-a-section-of-a-song](../../src/pages/guides/loop-a-section-of-a-song.md) | how-to · bedroom-musician · 1024 词 | `audio-looper` | loop a section of a song | ✅ |

四篇均过完成定义:首段链主工具、GUIDE_TOOL 登记、sources 2–3 个验证外链、persona 抽签(pick-persona seed 7/11/13/17)、配图各 2 张(管线截图目检通过)、全部在 900–1,400 词带内。`what-is-432-hz` 悬案同日了结(定义折进 VS 篇,不另开 URL)。门禁:build 832 页、pages-check 全过、serp-check 0 issue、smoke/feature ALL PASS、seo-audit HIGH 0 / MED 0。

**补记(2026-10-23,批次后例外 1 篇)**:[make-a-music-visualizer-video](../../src/pages/guides/make-a-music-visualizer-video.md) — how-to · podcast-producer(seed 7)· 1,092 词,锚定新工具 `music-visualizer`(同日上线)。偏离冻结的理由:新工具零锚定指南会断「工具↔指南」内链(声波板有 how-to-make-a-soundboard 先例);关键词为场景变体「make a music visualizer video for YouTube/Shorts」,与工具页主词「music visualizer」及其页内 HowTo 错开,非新赌词。过完成定义:首段链主工具、GUIDE_TOOL 登记、sources 2 个(YouTube 上传格式/Shorts)、配图 3 张、门禁同批。此例外不重开冻结;后续新工具是否必配指南,留待阶段 2 数据循环裁定。

写作注意:

- **#2 的分工线**:与 `change-pitch-without-changing-speed`(锚 pitch-changer,变调)错开——本篇是变速保调;与 `change-audio-speed` 工具页(音高跟着变)的 FAQ 也划清。场景写慢放学习/听写,不重复变调篇的换调角度。
- 工具页已有 HowTo 的关键词,指南必须换场景或换问题(content-types 铁律)。
- 收尾批同时了结两件悬案:
  - **`what-is-432-hz` 判合并**:定义折进 `432-hz-vs-440-hz` 的一个 H2/FAQ,不单独开 URL(一条意图一个 URL;VS 篇已锚定工具)。若日后 GSC 显示独立的 "what is 432 hz" 展示模式再拆。
  - **图批 4 已完成**:10-23 核实,normalize-vs、remove-hum、remove-silence、split、opus 五篇配图已生成且被 markdown 引用,无需再跑。

## 阶段 2 — 冻结 + 数据循环(11 月中起,替代"每月 +2 篇")

GSC 满 4 周(约 11-11)跑第一轮,此后每 4 周一次:

1. **查询回填**:取展示量 Top 10–15 页,把真实查询写进 FAQ(工具页改 ToolDef + 各语言 catalogs;指南改 FAQ 段,沿用原角色)。
2. **加深赢家**:有展示但低于词数带的批次文章(旧批次 1–4b 多数如此),按真实查询方向加深,不为词数注水。
3. **修剪零展示**:上线 6 周仍零展示的,并入更强的兄弟页或按赢的查询重写,不直接删 URL。
4. **蚕食裁定**(双周例行,红线见下):同一查询双排名或展示被拆开 → 收紧定位,或 301 到赢家。

**解冻条件**:1–3 跑完一轮、且出现数据支持的集群证据,才进阶段 3 的新文生产。

## 阶段 3 — 解冻后的杠杆(按数据排队,不预设)

1. **翻译优先于新英语文**:每个市场从 6–8 篇补到 ~15 篇,第一批只译转换集群——convert-wav-to-mp3、convert-flac-to-mp3、convert-m4a-to-mp3、convert-video-to-mp3、compress-audio-for-email。按 i18n 翻译规范以各市场真实搜索词重写(不机翻),hreflang 自动成簇。理由:零新关键词押注,同样一小时期望值高于赌一篇新英语文。
2. **Best 清单 4 篇 / Pillar 3 篇 / device 类**:维持原门槛不松动——行级数据 KD<30 / Keyword Magic 集群证据 / 与母篇 40% 差异,数据到了才立项。

## 蚕食红线(唯一出处,每篇动笔前逐条核对)

- 不追:vocal remover / 分轨;youtube to mp3(含各语言「从链接 / YouTube / 电报机器人」同族);铃声下载站;裸系统音量、浏览器插件。
- 已划清的近义对,新文不得越线:audio-trimmer(裁一段)/ mp3-cutter(保留或删选区)/ ringtone-maker(创作铃声);increase-volume(安静文件)vs volume-booster(整段偏小、视频音轨、手机);change-audio-speed(音高跟着变)vs tempo-changer(保调,0.75–1.25);slowed-reverb 是降调,不写成保调。
- normalize / compressor / loudness 三角已被 normalize-vs-compress + lufs 篇划清,新文必须换查询场景。
- 「car won't play」类若 m4a / ogg 指南已接住,并进 FAQ,不开新文。
- extract-audio 与 mp4-to-mp3 指南有蚕食风险:GSC 数据查清前不写。
- 工具页已有 HowTo 的关键词,指南换场景或换问题。

## 节奏

| 频率 | 动作 |
|---|---|
| 双周 | GSC 蚕食裁定(volume-booster/increase-volume、speed/tempo) |
| 每 4 周 | 数据循环一轮(阶段 2 SOP);真实查询入 FAQ |
| 冻结期间 | 新英语文 0 篇;翻译只走阶段 3 队列 |
