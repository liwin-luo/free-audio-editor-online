# 趋势雷达：近半年音频工具动态与可做清单

日期：2026-11-01 · 窗口：2026-05-01 → 11-01 · [路线图](../roadmap.md) · [新工具完成定义](../new-tool-spec.md)
方法：四路并行抓取——①行业 RSS（Podnews 131 条、Transistor、Riverside/Descript/Auphonic/ElevenLabs 博客）②社区需求（HN Algolia、Reddit RSS、YouTube 搜索播放量）③竞品与开源（cut.audio/123apps、GitHub 半年新建仓、wavesurfer/Audacity releases）④中文平台（微信文章、V2EX；微博/小红书渠道未配置，未获取到数据）。
关键证据已二次核验（HN 分数/日期、GitHub releases、cut.audio 页面原文）。Reddit JSON 被 403，Reddit 证据经 RSS 与 Exa 转手，置信度略低。

## 最重要的三个跨渠道收敛信号

1. **人声分离/分轨是用户侧最强需求，且愤怒集中在收费墙**。YouTube 本月「How To Remove Vocals… No Longer Free」15.6 万播放；HN StemDeck（免费本地分轨）247 分/65 评（08-29）；微信侧 5-6 月连出「实测 20 款人声分离」类测评。我们 52 个工具恰好缺这一页。
2. **"免登录、不上传、轻量 Audacity 替代"情绪高涨**。HN 浏览器编辑器半年三帖：Audiomass 多轨版 553 分（05-24）、StemDeck 247 分、Audionaut 155 分（10-02）；Audacity 4.0（09-03 发布）在 r/audacity 连续翻车（崩溃删项目、强制注册，半年 10+ 帖）。「文件永不上传」定位正踩在风口上。
3. **播客视频化是行业 RSS 第一强趋势**。Podnews 窗口内 131 条里反复出现：托管商集体上视频分发（05 月）、Amazon Music/Apple/YouTube 加码（05-08 月）、「2026 播客已 beyond audio」（09-02）。

## A. 新工具候选（按 new-tool-spec 过滤：搜索意图存在 + 浏览器端诚实可行）

| 优先 | 工具 | 依据 | 可行性与量级 |
|---|---|---|---|
| 1 | **noise-remover**（去噪） | 四路全收敛：cut.audio 已上 Noise Remover；Adobe Enhance Speech、Descript Studio Sound、Auphonic Studio Voice（07-21）全在做；中文"配音后期"需求指向它；roadmap 本就列 AI 降噪为 Pro 候选 | 谱减法/RNNoise WASM（模型 ~百 KB 级）纯本地可行，中等工作量 |
| 2 | **voice-changer**（变声预设：女声/大叔/机器人/电台） | cut.audio 已验证类目；V2EX 06-24「AI 克隆+变声方案」求荐；微信侧老需求仍在 | 用现有 pitch + formant + bitcrusher + EQ 组预设即可，半天级快赢 |
| 3 | **stem-splitter / vocal-remover**（人声分离） | 见收敛信号 1，需求最大；竞品全上（cut.audio、Adobe 三轨、Moises/LALAL 收费） | 最重：demucs ONNX/WebGPU 浏览器可跑但模型下载大，与"轻量不吓跑移动用户"风险冲突。**先做 spike**（量化体积、加载时长、移动端内存），过线再立项 |
| 4 | **add-reverb + tap-tempo**（补缺两个小页） | cut.audio 同类目验证存在搜索意图；我们已有 echo/metronome/BPM 检测的 DSP 底子 | ConvolverNode 与计数器，各半天级 |
| 5 | **music-visualizer 增强：导出视频** | 播客视频化趋势（收敛信号 3）：播客主需要波形/封面视频投 YouTube | canvas + MediaRecorder 出 webm，无需 ffmpeg，中等工作量；顺势承接「播客上 YouTube」场景 |

**不跟进**：TTS/AI 配音本体（123apps 已上但服务端实现；本地 TTS 模型体积与轻量定位冲突，GitHub MisoTTS 3246★ 是端侧大模型路线）、AI 音乐/配乐生成（大厂红海）、桌面应用（cut.audio Studio 走的路，逆我们定位）、播客短视频切片（视频赛道）。

## B. 已有工具增强

- **audio-to-text**：加 SRT/带时间戳导出（Auphonic 07-29 上烧录字幕佐证需求；YouTube 3.5 万播放的「用 ChatGPT 转写」是绕道不满信号）。
- **multi-track-editor**：借鉴 Audacity 4 的 clip 多选/编组交互（09-03 release notes），对冲"桌面 DAW 翻车"流量。
- **wavesurfer.js 升 8.0**（09-23 发布：修内存泄漏、频谱改进）——维护项，排进技术栈小版本升级。
- **全场信任文案**：把"文件永不上传、纯浏览器处理"前置到首屏与工具页（HN 评论区的账号/上传愤怒点 + V2EX 2026 年密集发布纯本地工具佐证 + r/ScamChecker 对在线编辑器的安全担忧帖）。
- **ringtone-maker**：m4r 直出已有（10 月已落地），不动功能；需求常青（YouTube 本月「任意歌设 iPhone 铃声免电脑」10 万+ 播放），收益走文章。

## C. 文章选题（全部入内容计划候选池；英语新文冻结中，走阶段 2/3 数据循环）

1. **Audacity 替代/翻车**："Online Audacity alternative / Audacity 4 keeps crashing"——HN 三帖 + r/audacity 10+ 帖的实时流量，**时效窗口就在未来几个月**。是否值得给冻结开一次口子，留给内容计划裁定。
2. **播客上 YouTube / 播客视频化**（visualizer 视频导出的配套支撑文，趋势持续半年+）。
3. **stem separation 怎么选 / 人声分离免费方案横评**（配合 A3 上线时发，中文侧同题测评已被证明有量）。
4. **中文市场两篇**：播客剪辑指南（微信"播客 剪辑"半年 14 条 2026 年文）、有声书录制入门（AI 配音供给端活跃的下游需求）——11 语互译优势的主场。
5. **播客响度标准（-16 LUFS）**（loudness-meter 配套）。
6. **在线音频编辑器安全吗/文件去哪了**（信任文，承接 r/ScamChecker 类搜索意图）。

## 负面发现（不用加码的方向）

行业 RSS 与中文渠道半年内**未见** slowed-reverb、卡拉OK/伴奏、432Hz、铃声的新趋势条目——这些既有页维持现状即可，不要为它们扩产内容。播客行业报道集中在变现与平台动态，纯编辑工具话题少，说明"工具页"赛道内容竞争仍集中在 how-to 层，我们的内容护城河方向没变。

## 与路线图的衔接

- A1/A2/A4/A5 属"搜索意图还没有页、浏览器里做得诚实"，符合新工具准入；建议排在内容计划阶段 0 收尾之后、阶段 2 数据循环的空档里，一次一件。
- A3（stem-splitter）与 B 中 audio-to-text SRT 导出需要 spike，先出可行性结论再排期。
- C 全部进 [内容计划](./2026-10-23-content-plan.md) 候选池，不破冻结；唯一例外候选是 Audacity 时效文，待裁定。
