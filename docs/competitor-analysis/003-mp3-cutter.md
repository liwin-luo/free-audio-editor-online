# 轮次 003 · mp3-cutter(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/mp3-cutter` · 关键词:mp3 cutter(18.1k/月,竞争 0.01)+ cut mp3(18.1k/月)
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/serp-crawl-cutter-2026-10-28.json`、`raw/ae-cutter.html`、`raw/ss-trim.html`、`raw/st-trim.html`。

## 报告 A · SERP 竞争画像

- `mp3 cutter` 两次采样 Top9 完全一致;`cut mp3` 与主词 8/10 重合,同簇同页承接。
- 无 AI Overview、无 Reddit、无视频包、无 roundup。
- 类型分布:**垂直剪辑专站统治**——mp3cut.net(123apps 系,#1)、audiotrimmer.com(精准匹配域名)、vocalremover.org、clideo、ezgif、onlineconverter;**Play 商店 ×2**(mp3.cutter.ringtone.maker.trimmer、ringtone.maker.mp3.cutter.audio,均进 Top4);CapCut 内容页 ×1。
- 与转换簇不同:在场页多为**老牌专站**(非大厂格式对路径),页面质量参差(476/408/276 词的薄页在场),说明这个簇有机会。
- 我们与 AE(/tools/mp3-cutter)/SS·ST(audio-trimmer)均不在场。AE 有直接对应页但未进前 10。

## 报告 B · 竞争页面分析表(已解析 6 页 + 三家竞品页)

| 页面 | 字数 | Schema | 关键特征(证据=本次抓取) | 需验证 |
|---|---|---|---|---|
| mp3cut.net(#1) | 962 | SoftwareApp+**AggregateRating** | fade ✓ ringtone ✓ lossless 宣称 ✓ **收视频文件** ✓ | 403 未采:vocalremover、happyscribe、audio.com |
| clideo.com/cut-audio(#2) | 1088 | 无 | fade ✓ ringtone ✓ crossfade ✓ 收视频 ✓;iPhone app 导流 | |
| audiotrimmer.com(#7,EMD) | 476 | 无 | fade ✓ ringtone ✓;薄页在场 | |
| onlineconverter/cut-mp3(#9) | 408 | 无 | 薄页在场 | |
| ezgif.com/cut-audio | 276 | WebApp+Offer | fade ✓;极薄 | |
| **AE /tools/mp3-cutter** | 1072 | WebApp+HowTo+FAQ(8)+Breadcrumb | **技术轴:frame-accurate lossless splicing、不重编码、ID3 保留、Lossless vs Precise 双模式、VBR 时长问题 FAQ** | 未实测其切割精度 |
| **SS /tools/audio-trimmer/** | 868 | WebApp+FAQ(5) | title 直接叫 "Free MP3 Cutter";多段切割 FAQ | |
| **ST /tools/audio-trimmer/** | 2195 | 5 种 schema,FAQ(14) | **loop preview 轴**(preview×37/loop×22);TikTok/Reels/铃声 FAQ | |

## 报告 C · 差距矩阵(vs freeaudioeditor.online/mp3-cutter,1160 词,4 种 schema,FAQ 6)

| 维度 | 竞品覆盖 | 我们状态 | 证据 | 建议 | 置信度 | 成本 |
|---|---|---|---|---|---|---|
| 剪贴边缘淡化 fade | 4/6 在场工具提供 | **缺失**(引擎有 fade 能力,trim 布局 `showAdjust: false` 显式隐藏) | tools.ts 编辑器配置;mp3cut/clideo/audiotrimmer/ezgif 特征抓取 | 任务 T1(产品决策):trim 布局加「边缘淡化」或放开 Adjust | 中 | 低-中 |
| 视频文件直接剪音频 | 5/6 收视频 | 缺失(dropHint 仅 MP3);现有路径 = extract-audio 两步 | 各页 video-input 特征;我们 extract-audio 已有浏览器解码管线 | 任务 T2(P3):mp3-cutter 接受视频输入(复用解码管线) | 中 | 中 |
| 铃声场景 | mp3cut/clideo/audiotrimmer 全部主打 | 已具备(独立 /ringtone-maker 页 + related 互链 + TikTok/Reels 指南) | 站内结构 | — | 高 | — |
| 无损切割(lossless) | AE 技术轴 + mp3cut 宣称 | 差异化缺失(我们重编码,页面已诚实回答音质 FAQ) | AE 页 Lossless vs Precise 段 | **暂不做引擎**;GSC 若出现 "mp3 cutter without quality loss" 长尾增长再评估 | 中 | 高(引擎) |
| 多段切割 | SS 有此 FAQ | 未验证(我们单 span keep/delete) | SS FAQ;本页 H2「keep or delete」 | 核对真实需求再定;暂不动 | 低 | — |
| AggregateRating | mp3cut | 不适用 | 无评分数据不伪造 | — | 高 | — |
| 装 App 意图 | 商店 2/9 | 已具备(FAQ "Do I need to install anything?") | 本页 FAQ | — | 高 | — |
| 字数 | 在场页 276–1088 | 已具备(1160 = 上游) | 抓取字段 | 本簇不拼长度 | 中 | — |
| Schema | mp3cut 2 种 + Rating | 已具备(4 种,领先) | 抓取字段 | — | 高 | — |

## 报告 D · 实施任务清单(待确认,未动手)

**T1 · 剪贴边缘淡化(P2,产品决策)**
问题:cut 点无淡入淡出,剪出的片段首尾可能有爆音;在场工具 4/6 提供。
证据:mp3cut/clideo/audiotrimmer/ezgif 特征抓取(2026-10-28);我们引擎有 fade(Adjust 抽屉)但 trim 布局隐藏(showAdjust: false)。
用户需求:剪 chorus 做 TikTok/铃声素材时边缘自然。
动作(二选一,需产品决策):a) trim 布局加一对「边缘淡化 ms」控件;b) 放开 showAdjust 让 Adjust 抽屉可用。
预期影响(假设):承接 fade 相关长尾 + 提升工具完成率;不承诺排名。置信度:中。
验证:GSC 该页 fade 类查询曝光;工具完成事件(如有)。

**T2 · 视频输入直接剪音频(P3,产品决策)**
问题:在场工具 5/6 可直接丢视频剪音频;我们要两步(extract-audio → mp3-cutter)。
证据:抓取特征;我们已有视频音轨浏览器解码管线(mp4-to-mp3/extract-audio 在用)。
动作:mp3-cutter accept 加视频 MIME,dropHint 文案更新(与 mp4-to-mp3 同管线)。
预期影响(假设):减少一步流失;置信度:中。成本:中。
验证:工具完成率 + GSC "cut audio from video" 类长尾。

**留观项**:AE 的 lossless 内容轴与 "mp3 cutter without quality loss" 长尾——GSC 出现增长再评估引擎投入(MP3 帧级拼接是真实工程量)。

## 报告 E · 实验与跟踪

- 基线:GSC `mp3 cutter` / `cut mp3` / `audio cutter online`(2.4k)在本页的曝光、点击、排名。
- T1/T2 若实施,记入本文件实施日志;4 周评估窗口,对齐 roadmap 数据循环。
- 本簇 SERP 极稳(两次采样全同),触发重跑条件:出现 AIO/新模块,或本页进入前 20 后的竞争动作。

## 实施日志(implementation log)

| 日期 | 任务 | 改动 | 验证 |
|---|---|---|---|
| 2026-10-28 | T1 剪贴边缘淡化 | `EditorConfig` 新增 `trimFades?: boolean`;`AudioEditor.astro` trim 布局内渲染一对边缘淡化滑杆(复用 `data-fade-in/out` 选择器与现有 i18n key `fadeIn/fadeOut`,引擎状态/导出/预览守卫零改动);仅 mp3-cutter 开启,split-mp3/audio-trimmer 不受影响 | astro check 0 错;834 页构建;dist 确认滑杆只在 mp3-cutter 出现 |
| 2026-10-28 | T2 视频输入直剪 | mp3-cutter `accept` 扩为 `audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus`(与 mp4-to-mp3 同管线,引擎无 MIME 门槛,decodeAudioData 直接解容器);EN + 10 语言 dropHint 更新为「MP3 或视频」 | dist 确认 en/zh/de dropHint 与 accept 生效 |

备注:fade 滑杆走与 Adjust 抽屉完全相同的共享管线(fade-audio 页已覆盖该路径的运行时验证);mp3-cutter 专属的 smoke 断言尚不存在,进入每周 E2E 时可补。并行会话曾同时编辑 fr.ts(撇号风格变化),本任务改动前重读确认,双方改动无冲突。
