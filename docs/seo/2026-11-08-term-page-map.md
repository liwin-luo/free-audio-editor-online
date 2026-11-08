# 词条→页面映射 + 西语 SERP 补充（2026-11-08）

[全量检查](2026-11-08-full-check.md)的延伸：17 个簇的 top 词条（每簇 ≤45，共约 600 词）映射到 877 个现有 URL，产出缺口清单；es 簇 5 个 head 词补了 SERP 快照。完整数据在 `~/WorkBuddy/57rfy/seo-analysis/audio-editor-full-check-2026-11-08/term_page_map.json`（映射脚本 `scripts/term_page_map.py`）。

纪律：规则式映射（正则优先匹配，一词一页），**内容使用前需人工复核**；所有词条仍是候选 ≠ 已验证（无搜索量数据）。

## 一、需求集中度：词条命中最多的页

这些页承接的需求词最多，是 FAQ/正文扩充的直接方向：

| 页 | 命中词条数 | 说明 |
|---|---|---|
| /audio-joiner | 48 | 合并簇几乎全部命中 |
| /ringtone-maker | 45 | "make ringtone from song itunes/garageband/iphone" 全族 |
| /key-bpm-finder | 41 | "change key of a song" 大族也落在这（映射到 pitch-changer 的判据优先于 key-bpm，需复核） |
| /voice-changer | 36 | "voice changer online girl/game/free no sign up" |
| /noise-remover | 32 | |
| /audio-to-text | 29 | |
| /audio-trimmer | 26 | |
| /change-audio-speed | 25 | nightcore/sped-up 修饰词也落这 |
| /increase-volume | 21 | "increase mp3 volume free/reddit/mac/app" |
| /compress-audio | 15 | |

## 二、缺口主题（按建议动作归类）

head-editor 簇 33 个缺口 + misc 27 + question 29 是主要缺口来源，归成六类：

1. **no sign up / for pc / app 修饰词**（audio editor online free no sign up、free online audio editor for pc、online audio editing app free）→ 现有页可接：放进对应页 title 后半或 FAQ，不用新页。
2. **"best software" 对比意图**（best free online audio editing software、what audio editor software）→ 指南题：在线工具 vs 桌面软件怎么选（对比 Audacity/WavePad/GoldWave 的诚实口径）。
3. **学习意图**（online audio editing classes/course）→ 指南题库（如何用浏览器完成一次完整剪辑，类课程结构）。
4. **AI 修饰词**（edit audio online ai、ai audio editing free、voice editor free ai）→ **明确不接**：我们不做 AI 处理；在 FAQ 里诚实声明"真实 DSP，非 AI 生成"，把词形差异讲清楚。
5. **视频编辑交叉意图**（free online video editor add audio、edit audio online mp4、audio to video editor）→ 不接视频编辑，在 mp4-to-mp3 / extract-audio / music-visualizer 的 FAQ 指清边界（音频从视频里出来 vs 视频编辑）。
6. **竞品品牌词**（edit audio online canva/adobe、how to use wavepad、download mp3splt）→ guide backlog 的对比文章素材，不进工具页。

question 簇缺口多为 FAQ 题（"why does slowing down audio make it deeper" → change-audio-speed / slowed-reverb 的 FAQ 候选）。

## 三、es SERP 补充（5 词，hl=es gl=mx，2026-11-08）

| 查询 | top5 |
|---|---|
| editor de audio online | myedit.online, flixier.com, elevenlabs.io, veed.io, pitchchanger.io |
| cortar mp3 online | poindeo.com, [YouTube 视频结果], capcut.com, [YouTube 视频结果], vmeg.ai |
| convertir wav a mp3 | online.visual-paradigm.com, kapwing.com, freeconvert.com, wav-to-mp3.softonic.com, convertio.co |
| subir volumen a un audio | clipchamp.com, videolouder.com, kapwing.com, video2edit.com, [reddit] |
| tono de llamada online | zedge.net, capcut.com, [YouTube 视频结果], elements.envato.com, pantallazo.es |

判断（与 en 同构，但有三点 es 特色）：

- 竞争者同样是**视频平台溢出（kapwing/capcut/clipchamp）+ 泛转换站（freeconvert/convertio）**，没有 es 本土专用音频工具站垄断——11 语言镜像页有机会，成本低（页面已存在，缺的是权威度积累）。
- es 有**下载站和内容库占位**：softonic（wav-to-mp3）、zedge（tono de llamada #1）。铃声词的意图更偏"下载现成铃声"，与 seo.md「不追铃声下载站」一致——ringtone 页守创作意图（"hacer un tono"），不抢 zedge 的词。
- **cortar mp3 / tono de llamada 各有 2 帧视频教程结果**——这两个词 Google 认为教学需求重，对应 es 指南（现有 es guides 6 篇）可补"cortar mp3"教学帖。
- 我们 0 出现（预期内）。

## 四、遗留

- 映射的 `/key-bpm-finder` 命中 41 里混入了 "change key of a song" 族（应属 pitch-changer 意图），复核时按"检测 vs 改变"拆开。
- 簇词条只取了每簇 top45（autocomplete 按来源数排序的头词），长尾 6,000+ 词未映射；如需全量映射改脚本参数即可。
