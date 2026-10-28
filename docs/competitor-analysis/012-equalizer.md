# 轮次 012 · equalizer(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/equalizer` · 关键词:audio equalizer / online equalizer
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/serp-crawl-eq-2026-10-28.json`、`raw/ae-eq.html`、`raw/ss-eq.html`、`raw/st-eq.html`。

## 报告 A · SERP 竞争画像

- `audio equalizer` 两次采样 Top8 完全一致;`online equalizer` 是文件 EQ 的真实战场(与主词 5/8 重合)。
- **头部再被系统级产品污染**(`audio equalizer`):Chrome Web Store #2、FxSound 桌面应用 #6、Play 应用 #5——搜这个词的一部分人要的是系统全局 EQ,不是文件 EQ。同 volume booster 的结构性逆风逻辑。
- **`online equalizer` 的在场页全部把段数写进标题**:10-band ×3(theaudiostuff、speaksay、SS)+ 5-band ×1(notevibes)——段数就是这个簇的规格展示轴。
- **ST 双席在场(#7 主词 / #2 online)**——第五、六次;SS #9。信息型:Wikipedia、Sonos 博客。
- freebeat 第六个簇(rate-limit 前已入册 5 个)。

## 报告 B · 竞争页面分析表

| 页面 | 字数 | Schema | 产品规格(证据=本次抓取) | 需验证 |
|---|---|---|---|---|
| mp3cut.net/equalizer(#1/#3) | 906 | SoftwareApp+**AggregateRating** | 任意频点;presets ×5 | — |
| ST /eq(#7/#2) | 2499 | 5 种,FAQ 14 | **图形+参数化、复古调音台仿真(1081/1073/550b/EQP-1A)、实时频谱、EQ vocals/mix 指南段**;band×229 | — |
| SS /tools/audio-equalizer(#9) | 1270 | 2 种,FAQ 7 | **10-band + 流派预设**(rock/pop/hip-hop/classical/vocal/podcast);preset×72 | — |
| theaudiostuff / speaksay / notevibes | 未采(URL 不完整/限流) | — | 标题自报 10-band / 10-band / 5-band | — |
| AE /tools/equalizer(不在场) | 557 | 4 种,FAQ 4 | 3-band,与我们同级 | — |
| OURS | 799 | 4 种,FAQ 6 | **3-band shelf-peak-shelf ±15dB**;诚实路由 bass/treble booster | — |

## 报告 C · 差距矩阵(vs freeaudioeditor.online/equalizer)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 |
|---|---|---|---|---|---|
| **段数规格** | online 簇标配 10-band(3/4 标题自报) | **3-band(诚实但规格落后)** | SERP 标题对照 | **产品升级候选 P2(见报告 D)** | 高 |
| 流派预设 | SS 6 组 | 无(preset×2 仅文案) | SS 抓取 | 随 10-band 一并评估 | 中 |
| 专业内容轴(vintage 仿真/EQ vocals) | ST 独占 | 无 | ST H2 群 | 不跟——音乐人向是 ST 的定位,我们的轴是「够用+诚实」 | 中 |
| 系统 EQ 意图污染 | Chrome/FxSound/Play 占主词 3 席 | Web 文件 EQ,结构性逆风 | SERP 类型 | 不追 `audio equalizer` 头部;主攻 `online equalizer` 切片 | 高 |
| 与 booster 页路由 | — | 已具备(FAQ 区分 EQ vs bass/treble booster) | 本页 FAQ | — | 高 |
| AggregateRating | mp3cut | 不适用 | 无评分数据 | — | 高 |
| 字数 | 906–2499 | 中下(799) | 抓取字段 | 若升级 10-band,页面随规格重写;单独加字数无证据支持 | 中 |

## 报告 D · 实施任务清单

**产品升级候选卡(待拍板,未动手):**

**T-EQ · 3-band → 10-band 图形 EQ + 流派预设(P2,产品决策)**
问题:`online equalizer` 在场页全部以段数为标题规格(10-band ×3),我们 3-band 在规格轴上不可见。
证据:本轮 `online equalizer` SERP 标题对照;SS preset×72 / ST band×229 的内容形态。
用户需求:逐频段修人声/乐器,3 段太粗;预设是消费级用户的主要入口。
动作:Web Audio BiquadFilter(peaking ×10,标准 31.5Hz–16kHz octave 隔)重做 EQ 岛 + 6 组流派预设;title/H1/desc 同步规格;诚实保留「图形 EQ,非参数化」的边界说明。成本:中(引擎+UI+i18n 级联)。
预期影响(假设):规格可见性对齐在场页;不承诺排名。置信度:中高。
验证:GSC `online equalizer`/`10 band equalizer` 类查询曝光 + 工具完成率。

**留观**:freebeat 第六簇;ST 的专业内容轴不跟。

## 报告 E · 实验与跟踪

- 基线:GSC `online equalizer` / `audio equalizer` / `eq music` 曝光、点击、排名。
- 若升级:实施日期记入本文件;观察规格轴查询与完成率 4 周。
- 触发重跑:在场页段数规格变化,或我们完成升级时重测。
