# 轮次 007 · extract-audio(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/extract-audio` · 关键词:extract audio from video(14.8k/月,竞争 0.12)
本轮 SERP 数据复用 #1 轮(`extract audio from video` 两次快照 + 7 页抓取,见 [001b](001b-serp-top10-reports.md) 与 [001](001-mp4-to-mp3.md)),不重复抓取。另含全站批量表达审计(见 [batch-expression-audit.md](batch-expression-audit.md))。

## #1 轮遗留问题闭环

**WAV 无损输出:extract-audio 原生支持,无需引擎工作。** 证据:desc 与正文 52 处 WAV 提及、导出格式含 lossless WAV(16-bit PCM)。#1 轮差距矩阵里「输出多格式」缺口的可行补法确认——转换簇页面的 WAV 直出能力已经存在,mp4-to-mp3 等页如需对齐属页面决策而非引擎缺口。

## 报告 A · SERP 竞争画像(复用 #1,2026-10-28)

- 意图③主词;品牌内容资源页统治(CapCut resource、Riverside「9 Best Methods」、Kapwing、Descript)+ 工具页(restream/biteable/metadata2go/onlineconverter/audiocut)+ Reddit r/audioengineering。
- 我们与三家直接竞品均不在场。

## 报告 B · 我们页面现状(本次构建产物)

- 809 词(全站工具页里偏轻)、FAQ 8、4 种 schema、11+1 hreflang。
- **批量表达完整**:howTo「两个以上打成一个 ZIP」+ FAQ 第一问「Can I pull the audio out of more than one video?」+ desc(#1 轮 T5 模式,本轮补齐)。
- 与 mp4-to-mp3 的蚕食防线在页面上:「What is the difference between this and an MP4 to MP3 converter?」FAQ + WAV-first 定位(quality angle)。
- 诚实区块:「It does not mute the video」(与「移除音频」意图明确切分,并有 FAQ 路由)。

## 报告 C · 差距矩阵(vs freeaudioeditor.online/extract-audio)

| 维度 | 竞品覆盖(#1 数据) | 我们状态 | 建议 | 置信度 |
|---|---|---|---|---|
| 输出格式 | SS/ST 5-6 种 | 已具备(MP3 + lossless WAV;本簇的差异化是质量轴) | — | 高 |
| 批量 | 竞品页无一批量宣称(ST 明示单文件) | **已具备且已表达**(howTo/FAQ/desc 三层) | 全站批量审计见 batch 文档 | 高 |
| 字数 | veed 1727 / biteable 1793 vs 我们 809 | 偏轻;但簇内 AudiMass/EMD 证据表明字数非充分变量 | 留观:GSC 有展示后按数据决定是否加深(use-case 段) | 中 |
| 版权合法性 FAQ | AE/ST 有 | 无(#1 轮 T3 已给 mp4-to-mp3 加;本页同样面向「下载的视频」场景) | 候选:同款 FAQ 一条(待确认) | 中 |
| 无 | — | — | — | — |

## 报告 D · 实施任务清单

1. **已实施(本轮)**:desc 批量表达(全站 12 页批量审计的一部分)。
2. **候选(待确认)**:版权合法性 FAQ(与 mp4-to-mp3 的 T3 同款,本页场景同样命中)。
3. **留观**:字数加深走 GSC 门控(同 #6 规则)。

## 报告 E · 实验与跟踪

- 基线:GSC `extract audio from video` 曝光、点击、排名;WAV 长尾(「extract audio from video to wav」类)单列观察——这是本页对 SS/ST 的差异轴。
- 12 页 desc 批量改动的效果与 #1 轮 T5 合并观察:批量相关查询(「batch」「multiple files」)的印象是否出现。

---

# 附:全站批量表达审计(2026-10-28)

用户指令:支持批量的页面必须在文案中表达,构成差异化。审计 `batch: true` 的全部 13 个工具页 vs meta description:

| 页面 | 改前 desc 提批量 | 改后宽度 |
|---|---|---|
| mp4-to-mp3 | ✅(#1 轮 T5) | 157 |
| wav-to-mp3 | ❌ → ✅ | 156 |
| flac-to-mp3 | ❌ → ✅ | 133 |
| mp3-to-wav | ❌ → ✅ | 158 |
| compress-audio | ❌ → ✅ | 148 |
| bitrate-converter | ❌ → ✅ | 148 |
| extract-audio | ❌ → ✅ | 144 |
| audio-to-text | ❌ → ✅(措辞 run one after another) | 153 |
| normalize-audio | ❌ → ✅ | 152 |
| silence-remover | ❌ → ✅ | 151 |
| m4a-to-mp3 | ❌ → ✅ | 125 |
| ogg-to-mp3 | ❌ → ✅ | 150 |
| opus-to-mp3 | ❌ → ✅ | 153 |

- 全部 12 条新 desc 宽度 ≤158(上限 162),`check:serp` PASS。
- 竞品对照:被抓的 20+ 竞品页中**无一在 desc 表达批量**;ST 甚至明示单文件。「批量→ZIP」保持为我们的独占差异信号。
- **遗留队列**:10 个语言目录的对应 description 尚未同步批量句(desc 非构建强制项,语言页维持现文案直到翻译队列处理;清单即上表 12 页)。
- 正文层(howTo/FAQ)的批量表达各页覆盖不一,后续数据循环里对齐到 mp4-to-mp3 / extract-audio 的三层标准(desc + howTo + FAQ)。
