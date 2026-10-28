# 竞品逐页分析(全局累计)

流程(按 `/Users/luogangming/projects-b/seo_serp_data_mining_tool.md` 规范,repo 外):每个核对项产出五件套——① 竞品页面原文抓到 `raw/`,parse.py 解析结构/关键词/意图,逐 URL 分析表;② Google US live SERP 快照(**每词记两次**,实证漂移)+ 前 10 自然结果逐页抓取;③ 按规范输出报告 A-E(竞争画像/页面分析表/差距矩阵/任务清单/验证计划);④ 只分析英语页;⑤ 每项等用户确认再进下一项。原则:证据优先,相关性≠因果,每条建议带置信度与验证方式,允许「未采集/未验证」。

对照清单与功能矩阵见 [../competitor-feature-matrix.md](../competitor-feature-matrix.md)。

## 全局 URL 分析累计表

| 轮次 | URL | 定位主词 | 承接意图 | 字数 | FAQ | Schema | hreflang | 值得抄 | 弱点 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | audioeditor.org/tools/video-to-mp3 | video to mp3 converter | 泛「视频转MP3」+「提取音频」双意图,一页通吃 | 514 | 4 | WebApp+HowTo+FAQ | 10 语 | lossless packet-copy 差异点;YouTube 合法性 FAQ(信任信号) | 内容薄 |
| 1 | snipsound.com/tools/video-to-audio/ | (已并入 hub) | canonical → /tools/audio-converter/,此页自愿放弃排名 | 829 | 5 | WebApp+FAQ | 6 语 | — 顶部横幅导流新工具 | 意图上不自立 |
| 1 | snipsound.com/tools/audio-converter/ | audio converter(泛) | 一个 hub 吃下音频转换+视频提取+GIF,Popular conversions 挂每格式对卫星页 | 835 | 5 | WebApp+FAQ | 6 语 | hub+卫星页结构 | 单页意图过杂 |
| 1 | soundtools.io/video-to-audio | extract audio from video | 意图③主词 + Clideo/VEED/VLC 替代品词;人物化 use cases | 2445 | 20 | Org+WebSite+WebApp+HowTo+FAQ | 0(纯英) | 竞品替代词 FAQ;Which Format Should I Choose 选型段 | 关键词密度过高(extract×38),工具单文件 |
| 1 | freeaudioeditor.online/mp4-to-mp3(我们) | mp4 to mp3(165k/月,竞争 0) | 精准格式对;「video to mp3」泛词暂无人认领 | 1153 | 6 | WebApp+HowTo+FAQ+Breadcrumb | 11+1 语 | 四家 schema 最全、内链最多;批量→ZIP 独有 | 输入仅 MP4/MOV/WebM;输出仅 MP3;无版权合法性 FAQ |

## 意图簇地图(video→mp3 簇)

| 意图 | 代表词(月搜) | AE | SS | ST | 我们 |
|---|---|---|---|---|---|
| ① 精准格式对 | mp4 to mp3(165k,竞争 0) | 部分 | 卫星页 | 部分 | ✅ mp4-to-mp3 专页 |
| ② 泛视频转MP3 | video to mp3 / video to mp3 converter | ✅ 主打 | hub 吸收 | 部分 | ❌ 无人认领 |
| ③ 提取音频 | extract audio from video(14.8k) | ✅ 副词 | hub 吸收 | ✅ 主打 | ✅ extract-audio 专页 |
| ④ 替代品词 | clideo alternative 等 | ❌ | ❌ | ✅ FAQ | ❌ |

## SERP 快照累计(Google US,记录可观察结果类型)

| 日期 | 关键词 | AI Overview | 主导结果类型 | 对我们的启示 |
|---|---|---|---|---|
| 2026-10-28 | mp4 to mp3 | ✅(FreeConvert/CloudConvert/VLC/Adobe) | SaaS 工具页 + 对比 roundup ×2 + Reddit + VLC 视频包 + CNET/Wondershare + 盗链站 | 缺对比表、decision block、quick-answer、版权 FAQ;AIO 追问码率(我们已有码率段可被摘录) |
| 2026-10-28 | video to mp3 | ❌(有 AI Mode 模块) | **应用商店(Play×3 + MS Store)+ Clideo/VEED** | 装 App 意图分流;FAQ 补 "no app needed" 即可,不追 |
| 2026-10-28 | extract audio from video | ❌(有 AI Mode 模块) | 品牌内容资源页(CapCut/Riverside/Kapwing/Descript)+ Reddit | 内容营销是该词的入场券,走指南管线 |

| 2026-10-28 | wav to mp3 | ❌(两次采样均无) | 上传式转换器格式对专页 ×6 + 商店;两次采样 Top9 完全一致 | 头部词由大厂格式对专页服务;我们专页原型匹配、schema 领先,无新增行动(002) |
| 2026-10-28 | convert wav to mp3 | ❌ | 与主词 9/10 重合 | 同一意图簇,同页承接,不开新页 |

| 2026-10-28 | mp3 cutter | ❌(两次采样全同) | 垂直剪辑专站(mp3cut.net/audiotrimmer.com EMD)+ **Play 商店 ×2 进 Top4** + CapCut 内容页;页面质量参差(276–476 词薄页在场)= 机会簇 | 剪贴 fade 4/6 在场工具有而我们隐藏(T1 候选);视频直剪 5/6(T2 候选);AE 的 lossless 技术轴留观 |
| 2026-10-28 | audio trimmer | ❌(两次采样全同) | EMD 专站 + 大厂工具页 + **Reddit 帖 #7** + 程序化小站(rendley 190 词排 #6);无应用商店 | 在场页极薄=宽容簇;我们定位(podcast/voice memo)与 mp3-cutter 区隔清晰,无新增行动(004);trimmer/cutter 对加入双周蚕食清单 |
| 2026-10-28 | trim audio online | ❌ | 与主词 7/9 重合 | 同页承接 |

| 2026-10-28 | mp3 editor | ❌(两次采样全同) | 意图分裂:快速编辑(cutter 系)+ 真编辑器(**AudioMass 零静态词排 #3**、Audacity 官网 #9)+ SaaS(veed/notevibes 全套 schema) | AudioMass = roadmap Phase 3 开源换外链的 SERP 实证;无新增页面任务(005) |
| 2026-10-28 | edit mp3 | ❌ | 与主词 8/10 重合 | 同页承接 |
| 2026-10-28 | audio joiner | ❌(**ST 排 #6——首个在场的直接竞品**) | EMD(audio-joiner.com)+ vocalremover 系 + 大厂 + ST(2258 词/18 FAQ 全审计最重)+ roundup ×1 | 条件行动(GSC 门控):进前 20 再加深 crossfade 内容;AE 的 Roadmap 占位页打法记录不采用(006) |
| 2026-10-28 | merge songs | ❌ | 独立小簇:弱在位者 + 139K 播放视频 + clideo 格式对页 | 我们 title 已含 "Merge Songs";留观 GSC |
| 2026-10-28 | reverse audio | ❌(**ST #6,第二次在场**) | **趋势簇**:倒放挑战 EMD×2 + Play/App Store + 社交视频进主 SERP(21.1M 播放)+ ST 挑战内容轴 | 指南候选入内容计划(reverse singing challenge / backmasking),工具页保持诚实定位(008) |
| 2026-10-28 | reverse song | ❌ | 同簇 + App Store + backmasking 视频(602K) | 同上 |
| 2026-10-28 | change audio speed / speed up audio | ❌(两次采样全同;三家的 speed 页都不在场,含 ST 3137 词页) | 品牌双 Entry(musicspeedchanger)+ EMD + Reddit/YouTube 双双打「保调变速」| 簇核心=保调;我们双页切分成立,保调范围 ±25% 为产品级留观(009) |
| 2026-10-28 | increase mp3 volume | ❌(**SS #6,第三次进簇**) | Web 工具簇:EMD(mp3louder,501 词无 schema #1)+ Reddit(50+ 评论)+ freebeat | 在位页弱,我们 896 词/4 schema 竞争力足够;等 GSC(010) |
| 2026-10-28 | volume booster | ❌(**ST #3,第四次在场**) | **应用/扩展簇**:Chrome Store ×2 + Play ×2 + MS Store,Web 工具仅 2 席 | 头部是结构性逆风,页面价值在 online 长尾;双页蚕食裁定:两词两条 SERP,分工确认(010) |
| 2026-10-28 | normalize audio | 部分(**AE #6,首次露面**) | **信息意图过半**:Wikipedia/行业博客/Audacity 手册/Reddit/YouTube;两次采样大不同(不稳定) | LUFS 目标归一能力站内已拆分承接(normalize=峰值、loudness-meter=LUFS);信息向指南候选交内容计划,先核对 vs-compress 篇(011) |
| 2026-10-28 | audio equalizer / online equalizer | ❌(**ST 双席 #7/#2,SS #9**) | 主词被系统 EQ 污染(Chrome Store/FxSound/Play);online 簇全部以段数为标题规格(10-band ×3) | **产品升级候选 P2:3-band→10-band+流派预设**(012);主攻 online 切片,不追系统 EQ 头部 |
| 2026-10-28 | pitch changer / change key of song | ❌ | EMD×2 + 应用×2;change key 为歌手向独立簇 | 无任务;transpose 长尾留观(013) |
| 2026-10-28 | bpm finder / song key finder | ❌ | DJ 生态(tunebat 数据库 #1);合并页形态是市场标准(SS 拆页不在场) | **产品候选 P3:Camelot 记号展示**(014) |
| 2026-10-28 | ringtone maker | ❌(**SS #6,第四次进簇**) | **应用商店污染最重**(Play×2+App Store 占 #1/#2/#8) | M4R 能力已主打;Android title 表达数据门控(015) |
| 2026-10-28 | transcribe audio to text | ❌ | 大品牌战场(EMD+happyscribe+Canva/Microsoft/Adobe);SS/ST 的 Whisper 重页也不在场(第四例) | 定位=本地隐私长尾服务页(016) |
| 2026-10-28 | voice recorder online | ❌ | 老牌占位(EMD+vocaroo+speakpipe)+ Google 自家 #8 | **产品候选 P3:mic-test 页**(017);录后编辑是我们的差异轴 |
| 2026-10-28 | music visualizer | ❌ | 视频模板 SaaS 市场(vizz/Renderforest/Specterr);三家均不在场 | 品类不同不追;风格扩展为产品决策留观(018) |
| 2026-10-28 | slowed and reverb | ❌ | 趋势簇:EMD×3 + Spotify 歌单 #5;SS/ST 重页均不在场 | 与 nightcore 候选合并;趋势热度前置核(019) |
| 2026-10-28 | remove silence from audio | ❌(单采样,竞争 0.42 全簇最高) | AI 清理品牌(audo/cleanvoice)+ HuggingFace Space #1 + rendley 第八簇 | 诚实规则式定位,长尾服务页(020) |
| 2026-10-28 | mp3 tag editor | ❌ | Mp3tag 桌面软件统治 + 商店 ×2 + Reddit(c2) | Web 切片(cover art/批量)满配;无任务(021) |
| 2026-10-28 | soundboard / online soundboard maker | ❌ | 裸词=声音库站(不同品);maker 簇 **ST #1(第五次在场、首次登顶)**;Limewire 的 Discord 角度留观 | 无任务;ST #1 页为内容标杆(022) |
| 2026-10-28 | audio compressor online | ❌ | **全部是文件体积压缩器**——动力学压缩无独立 Web 词场 | 体积意图由 compress-audio 承接;/compressor=长尾服务页(023) |
| 2026-10-28 | add echo to audio | ❌(**AE #5,第二次露面**) | 薄工具簇 | 无任务(024) |
| 2026-10-28 | fade out audio | 部分(**AE #3 + SS #4 双双在册**) | 薄工具簇 + Audacity 手册 + Adobe | 无任务;与 cutter 边缘淡化互链(025) |
| 2026-10-28 | convert stereo to mono | ❌ | 薄工具簇 + DIY 信息页 | 无任务;单声道/混缩双模式表达留观(026) |
| 2026-10-28 | 8d audio | ❌ | **听歌意图**:Spotify/Apple 歌单占 3 席 + 信息博客;SS/ST 8D 页均不在场 | 制作意图在长尾;无任务(027) |
| 2026-10-28 | bitrate converter | ❌(未单独采样,待补) | 转换簇长尾(002 证据) | 唯一专用 bitrate 页,长尾定位(028) |
| 2026-10-28 | loudness meter online | ❌(未单独采样,待补) | — | 站内唯一 LUFS 测+导页;与 normalize 切分成立(029) |
| 2026-10-28 | metronome online | ❌ | EMD×2 + 专站林立(独立小品类) | 编辑器配套工具定位(030) |
| 2026-10-28 | treble booster | ❌ | **全簇是吉他效果器踏板**(guitarpedalx/Reddit/Wikipedia/Sweetwater/eBay)——关键词语义错配 | 候选:title 加 "for audio files" 限定,数据循环后定(031) |
| 2026-10-28 | low pass filter audio online | 部分(**AE #1,全审计首次登顶**) | 薄工具簇、意图干净(去嘶声) | 可竞争切片;high-pass 同构待采样(032) |
| 2026-10-28 | flac to mp3 | ❌ | 纯大厂格式对簇(cloudconvert/freeconvert/convertio/zamzar)+ freebeat 第八簇 | 五个成对转换页原型正确、共享对手集(033) |
| 2026-10-28 | 432 hz converter | ❌ | EMD×2 + Chrome 扩展 + freebeat 第九簇 | 无任务(034) |
| 2026-10-28 | audio looper online / bitcrusher online / spectrogram generator online | ❌ | 均为薄工具簇;bitcrusher 带复古游戏色彩;AudioCipher 的隐藏信息角度与 008 同族 | 无任务(035–037) |
| 2026-10-28 | (独有工具五页) | — | 无成熟关键词簇,不做 SERP 采样 | 服务页/长尾页,GSC 反哺(038) |

三个词第一页均无我们与三家直接竞品——head 簇当前是「大品牌 + 内容站 + 商店」的局,印证低竞争词先行。

## 轮次文档

- [001-mp4-to-mp3.md](001-mp4-to-mp3.md) — 2026-10-28(竞品页 + 初版 SERP gap)
- [001b-serp-top10-reports.md](001b-serp-top10-reports.md) — 2026-10-28(规范报告 A-E,取代 001 的 SERP 节作为模板;含实施日志)
- [002-wav-to-mp3.md](002-wav-to-mp3.md) — 2026-10-28(结论:无新增任务,证据型「无行动」)
- [003-mp3-cutter.md](003-mp3-cutter.md) — 2026-10-28(两张候选任务卡:T1 剪贴边缘淡化 P2、T2 视频直剪 P3,均为产品决策,未动手)
- [004-audio-trimmer.md](004-audio-trimmer.md) — 2026-10-28(结论:无新增任务;trimmer/cutter 蚕食对入双周清单)
- [005-mp3-editor.md](005-mp3-editor.md) — 2026-10-28(结论:无新增任务;AudioMass 零静态词排 #3 = Phase 3 开源策略实证)
- [006-audio-joiner.md](006-audio-joiner.md) — 2026-10-28(ST #6 首个在场竞品;crossfade 加深为 GSC 门控的条件行动;AE 占位页打法记录不采用)
- [007-extract-audio.md](007-extract-audio.md) — 2026-10-28(WAV 缺口闭环:原生已支持;含全站批量表达审计,12 页 desc 补批量句,语言目录 desc 入遗留队列)
- [008-reverse-audio.md](008-reverse-audio.md) — 2026-10-28(趋势簇:挑战内容统治头部;两篇指南候选交内容计划;含 extract-audio 版权 FAQ 级联实施日志)
- [009-change-audio-speed.md](009-change-audio-speed.md) — 2026-10-28(无页面任务;簇核心=保调变速,双页切分确认成立,保调范围为产品级留观)
- [010-increase-volume.md](010-increase-volume.md) — 2026-10-28(第一轮 10 项收官;双页蚕食裁定=两词两条 SERP 分工确认;volume booster 头部为应用簇结构性逆风)
- [011-normalize-audio.md](011-normalize-audio.md) — 2026-10-28(无页面任务;信息意图过半的簇;LUFS 能力已由 loudness-meter 承接)
- [012-equalizer.md](012-equalizer.md) — 2026-10-28(产品升级候选 P2:3-band→10-band+预设,规格轴证据;系统 EQ 头部不追)
- [013–038](.) — 2026-10-28(第二、三批:pitch/key-bpm/ringtone/transcribe/recorder/visualizer/slowed/silence/tag-editor/soundboard/compressor/echo/fade/stereo/3d/bitrate/loudness/metronome/treble/lowpass/成对转换/432/looper/bitcrusher/spectrogram/独有工具,每项一份精简 A–E 报告;产品候选 P3:Camelot 展示、mic-test 页;treble-booster 关键词语义错配发现)
