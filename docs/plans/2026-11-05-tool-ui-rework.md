# 核心工具交互 UI 重做：清单、流程与记录（2026-11-05 起）

> 目标：把审计 §4 / 90 天计划 §5.1 的 10 个核心工具的**工作区交互层**逐个重做，一个一个来，每个工具走完整流程。
> 本文件是唯一进度源：状态表随做随更，每个工具完成后在「完成日志」追加一节总结；全部做完后据此提炼 skill。
> 配套背景：`audit/runtime-verification-2026-11.md`（每个工具的真跑结论与已知缺陷）、`docs/architecture.md`（共享编辑器结构）。

---

## 一、边界：什么改、什么绝对不动

**改**（这就是"重做交互 UI"）：
- 工作区交互：波形/画布交互、控件布局与层级、反馈与状态提示、空态/加载态/错误态、移动端触达性（按钮可达、拖拽可用）
- 交互层的组件结构与代码组织（`src/components/editor/*.astro`、`src/editor/*-ui.ts`）

**绝对不动**（SEO 资产，90 天计划保护范围）：
- 页面 H1 / title / description / 正文文案语义（`src/i18n/*` 的 SEO 内容键、`src/data/tools.ts` 的文案字段）
- URL、路由、canonical、hreflang、结构化数据
- how-to 插图、FAQ、内链结构

**要注意的**：
- 新增界面文字 = 新增 i18n 键，需覆盖 11 种语言，写法守 `docs/i18n-translation-guide.md` §8；能复用现有键就不新增。
- `src/data/tools.ts` 是并行会话高冲突文件，编辑前必须重读，改动保持最小。
- 每个工具独立提交；push=部署，一律等用户明确指示。

## 二、清单与顺序（按杠杆率排序，可调整）

> 排序理由：audio-trimmer 的外壳（波形 + 选区 + 导出条）被剪辑簇、转换簇、铃声页等**十几个页面共享**，先做它等于把模式立起来；后面共享外壳的工具就只剩增量。

| # | 工具 | 交互重头戏 | 共享影响面 | 状态 |
|---|---|---|---|---|
| 1 | audio-trimmer | 波形选区交互、时间输入、导出条、移动端拖拽 | **共享外壳**（AudioEditor.astro + index.ts 内核，十几个页面继承） | ◐ 实现完成·待验收（cutter/ringtone 已随外壳继承） |
| 2 | mp3-editor | 多步编辑流（在共享外壳上验证新模式） | 共享外壳 | ☐ 未开始 |
| 3 | ringtone-maker | 40s 钳制反馈、M4R 格式选择（共享外壳增量） | 共享外壳 | ☐ 未开始 |
| 4 | audio-joiner | 多文件队列、排序、crossfade、合并进度 | 独立 UI（joiner.ts） | ☐ 未开始 |
| 5 | voice-recorder | 录音状态机（权限→计时→停止→进编辑器）、调整抽屉 | 独立 UI | ☐ 未开始 |
| 6 | multi-track-audio-editor | 8 轨布局、静音/独奏、轨道头控件、混音导出 | 独立 UI（mixer-ui.ts） | ☐ 未开始 |
| 7 | pitch-changer + voice-changer | 预设交互、滑杆、即时预览（一簇两页） | 共享外壳增量 | ☐ 未开始 |
| 8 | audio-to-text | 长任务进度反馈（模型下载→转录）、批量队列、TXT/SRT 切换 | 独立 UI（transcribe.ts + worker） | ☐ 未开始 |
| 9 | audio-to-midi | 转换进度（慢任务）、音符列表、MIDI 下载 | 独立 UI（midi-ui.ts） | ☐ 未开始 |
| 10 | music-visualizer | 可视化参数、实时录制流程、取消路径 | 独立 UI（music-visualizer-ui.ts） | ☐ 未开始 |

状态取值：☐ 未开始 / ◐ 进行中 / ✓ 已完成（含验收）。

## 三、每个工具的流程（六步，缺一不可）

1. **现状盘点**：桌面 + 375px 移动端截图；列出当前交互步骤与痛点（结合 runtime-verification 的结论）。
2. **方案定义**：这个工具的用户任务是什么、交互痛点排序、重做什么、影响哪些共享组件；**涉及设计取向的选择先问用户**。方案经用户确认后才动手。
3. **实现**：小步提交；新增文案走 i18n 键；不动「边界」清单里的东西。
4. **验证**：`astro check` 0 错误；该工具相关 check 脚本通过；浏览器真跑全流程（上传→操作→导出→下载）；375px 移动端抽查；对照 runtime-verification 的已知缺陷逐条确认。
5. **总结**：按下面模板在「完成日志」追加一节；更新状态表。
6. **用户验收**：明确"通过"后才能勾 ✓ 进入下一个。

## 四、完成定义（DoD）

- [ ] 工作区交互重做完成，移动端（375px）可用
- [ ] 桌面浏览器全流程真跑通过，产物用 ffprobe 抽验
- [ ] astro check 0 错误 + 相关 check 脚本通过
- [ ] SEO 层零改动（H1/title/文案语义/how-to/FAQ/内链不变）
- [ ] 已知缺陷清单（runtime-verification）逐条核对
- [ ] 完成日志写入本文件
- [ ] 用户验收通过

## 五、完成日志（每工具一节，倒序追加）

## audio-trimmer（2026-11-05，含共享外壳改造——实际影响 trimmer/cutter/ringtone 三页）

**改了什么**：
- **双出口取代模式开关**（trimLayout 且非 loop/split 页）：导出条不再有 Keep/Delete 切换；两个出口按钮直接并列并内嵌实时结果时长「Save selected · 00:10.00」/「Save without selection · 00:13.54」。ringtone 页只保留 Save selected。mp3-editor（非 trimLayout）保留旧模式流程。
- **完成态 sheet**：出口点击 → 编码 → 弹出完成卡（文件预览名 `-clip`/`-trimmed` 可改、时长/体积/格式、Download + Share(Web Share API，降级提示)、继续操作 chips（再剪一段/接 fade/接音量/转格式）、返回编辑）。下载改名生效；`download_completed` 埋点移至 sheet 下载时刻。
- **找点三件套**：波形下 Fine-tune 行（Start/End 激活边界 chip + ±0.1/±0.01 微调 + Play from cut 边界试听：边界前 2s→后 0.5s 自动停止）；把手鼠标热区 16→24px（触屏维持 44px）+ 激活边界视觉。
- **选区外降暗**：选区外两侧 15% 压暗——"保留段"语义常显，不依赖模式。
- **循环播放**：导出条 Loop 开关；开启后选区内循环，**循环中任何参数变化（拖拽/输入/微调/淡入淡出）立即从选区起点重播**。
- **Fades 行**：trimmer 页开启 `trimFades`（配置级，UI/键复用 cutter 现有组件）。
- **结果预告行**：导出条首行「Output {时长} · ≈{体积} · fades…」实时刷新；格式选项内嵌精确体积估算（MP3 CBR=时长×码率÷8；WAV=96KB/s@48k 单声道）。
- **内联错误卡**：解码失败三段式卡片（标题/原因 decodeFail/怎么办 + Change file 按钮）替代纯 toast。
- **移动端**：导出条 375px 吸底（sticky bottom）。
- **鼠标**：把手热区加宽 + hover 光标（ew-resize）；波形区 cursor-crosshair。
- i18n：19 新键 ×11 语言（含 11 处 `· {time}` 占位符修正）；mp3-editor 旧键未动。

**决策与理由**：
- 双出口取消模式开关：VM 范式 + 隐藏需求"轻"；用户确认。
- mp3-editor 本轮不动：非 trimLayout，多步语义属它自己的重做轮次。
- overview 缩略导航**延后**：控制爆炸半径（zoom 已存在），列入遗留。
- M4A 导出延后：产品能力变化牵动 SEO 格式表格文案，独立小任务紧随其后。
- smoke 断言更新为 sheet 流程（completion sheet opens + `-clip` 命名）——行为契约变更随设计走。

**可复用模式**（供后续工具提炼 skill）：
- kernel `dualExits` 门控 = `trimLayout && !loop && !split`；ringtone 隐藏 del 出口。
- 复用 `data-export` 按钮作主出口（保留 requireEl/ busy 机制），仅新增可选元素——爆炸半径最小化。
- sheet 流程：`pendingExport` 暂存 blob → 改名 → `downloadBlob()` 统一出口（埋点集中一处）。
- 循环重播挂点：`commit()` / `commitSelection()` / `applyPrecise()` 尾部统一调 `restartLoopIfPlaying()`。
- 坑：Tailwind `.hidden` 是 class 不是属性——sheet/卡显隐必须走 classList；`fill()` 只替换占位符，键文案必须自带 `· {time}`。

**验证**：astro check 0 错误（237 文件）；check:smoke ALL PASS（completion sheet opens + Exported test-tone-clip.wav + speed×2 回归）；check:hero PASS；check:analytics PASS。真跑：del 出口导出 ffprobe 13.58s ✓；keep 出口改名 my-custom-clip 导出 10.03s ✓；循环播放（0.5s 选区播放头持续循环、+0.1 微调立即从起点重播）✓；边界试听 2.5s 窗口自动停 ✓；错误卡显示/换好文件隐藏 ✓；四页继承回归（cutter 双出口/ringtone 单出口/mp3-editor 旧流程/split 不变，零 console 错误）✓；375px 吸底与堆叠 ✓。

**遗留**：overview 缩略导航（延后）；M4A 导出（独立任务）；preview 路径下 loop 起点为渲染缓冲头部（带效果循环体验未精调）；改动未提交待用户验收；SEO 三议题探讨（大词小词/意图链路/竞品优势）排在验收后。

### 模板

```markdown
## <工具名>（<日期>）
**改了什么**：<交互层面的变更清单，面向用户的描述>
**决策与理由**：<关键取舍，含被否掉的方案>
**可复用模式**：<这次沉淀出的、后续工具能直接搬的模式>
**验证**：<check 结果 + 真跑结论>
**遗留**：<没做/没修的，为什么>
```

（日志条目在工具完成后逐个追加到这里。）

## 六、进行中：audio-trimmer

### 方案输入 · 搜索意图分析（2026-11-05）

**证据源**：`docs/competitor-analysis/004-audio-trimmer.md`（2026-10-28 SERP 实抓：audio trimmer 14.8k/月、trim audio online 1k/月，Top9 两次采样一致）+ `003-mp3-cutter.md`（18.1k/月对照簇）+ `audit/keyword-overlap.md`。GSC 查询级数据尚未接入，以下意图假设标注了验证方式；搜索量不编造。

**主任务意图（一句话）**：*手里有一个音频文件，把某一段留下来或去掉，马上拿到文件。* 这是纯任务型查询——SERP 全部是工具页、无 AI Overview/应用商店/视频包，决策极快。

**五层子意图（按证据强度）**：

| 子意图 | 证据 | 对 UI 的直接要求 |
|---|---|---|
| ① **"简单"是显性诉求** | Reddit r/audioengineering 帖 "Simple audio trimmer" 排 #7；程序化薄页 190 词在场 | 单一主交互=拖出选区即完成 80%；zoom/精确时间/格式菜单收进次级层；首屏即工作区，零配置可导出 |
| ② **保留 vs 删除是镜像双意图** | keep span（播客答案/讲座片段）与 delete span（去口误/空白）都是主任务；页面已双模式 | 模式状态必须一眼可见：选区色块语义、模式按钮态、导出按钮文案随模式变化 |
| ③ **导出前要听** | 同簇竞品 ST 2195 词全压 preview 轴（preview×37 词频） | 选区播放是核心交互非附属：播放范围标注、播放头可见、空格键可达 |
| ④ **精确时间** | 0.01s 步进输入已存在=真实需求沉淀 | 时间输入显性化、与波形双向同步、键盘可编辑 |
| ⑤ **长录音 + 手机** | 定位词 podcast/voice memo/lecture；FAQ "trim on my phone"；trimmer 簇**无** App 商店在场（cutter 簇有 ×2）——用户明确在找 web 工具，手机浏览器体验直接决定成败 | zoom/长文件导航；触控拖选、选区把手放大、导出按钮拇指可达 |

**信任前提**：voice memo/会议=敏感内容，"本地处理、不上传"须在工作区**常驻**可见（不是只在 dropzone 上）。

**与姊妹页的意图边界**（重做时不得吞并）：
- 歌曲/chorus/开场 → mp3-cutter（文案定位已刻意区隔，004 报告判定"维持"）
- 铃声（40s+M4R）→ ringtone-maker
- 多段删静音 → silence-remover
- 剪完再加工（fade/变速/音量）→ mp3-editor 等，related 导流

**功能级差距（不属于本次 UI 重做，留观项照抄 004/003 报告）**：fade 边缘淡化（cutter 簇 4/6 在场；trimmer 页 GSC 出现 fade 长尾再开）、视频直剪、lossless 切割。UI 重做只要求**预留入口设计**，不擅自开功能。

**待 GSC 验证**：title 无 "online free" 的 CTR 表现；fade 长尾出现时机；trimmer/cutter 蚕食双周检查。

### 现状盘点（2026-11-05，截图 audit/runtime-evidence-2026-11 同批于 /tmp/fae-test/shots-trimmer/）

**桌面（1440×900，t01–t03）**
- 首屏：面包屑 → 图标+H1 → 副题 → dropzone 卡（虚线井 + "Processed locally" 行 + MP3/WAV chips）→ trust 行 → 正文。干净，任务入口零滚动 ✓
- 工作区原地替换 dropzone，**无需滚动** ✓（scrollY 保持 0）：文件条（名+元数据 | Change file / Zoom out / Zoom in）→ 提示行 → 波形（200/220px，选区 accent 填充）→ Start/This span/End 三栏读数 → precise 输入两栏 → Keep/Delete + Select all → 导出条（Play | Format select | Trim and download）
- dropzone 的 MP3/WAV chips 与工作区 `select[data-format]` **已联动**（delivery.ts:124，index.ts:186 绑定）——不是缺陷，仅可发现性弱
- **痛点 D1（最重）**：Delete 模式下，待删除段仍渲染 accent teal（=保留的视觉语义），导出按钮文案不变——镜像意图（意图②）完全不可见（t03 截图钉死）
- 把手热区 16px 宽（桌面尚可、触控不行）
- trust 行（本地处理信号）在工作区下方，不在视线焦点

**移动端（375×812，t04–t06）**
- 首屏工作区：文件条（3 按钮挤行）→ 提示 → 波形 → Play → Format → 导出按钮——**Start/End 读数、precise 输入、Keep/Delete 全部在折叠线下方**，首屏看不到自己选了什么
- 加载即全选（trimLayout 语义：不选=整段保留），把手位于波形两端边缘，移动端几乎不可见
- **把手 16×185px，远低于 44px 触控标准**（HIG）——移动拖选核心痛点
- 导出按钮与 Feedback 悬浮球在右下角重叠
- Format select 与导出按钮分离在两行，导出前最后一步要跳视区

**通用**
- 错误态：toast + status 行（功能对、呈现弱，audit §10.4 三段式未落地）
- undo 仅按钮 + Escape；无 visible 历史
- 埋点/内核行为（真跑已验证 PASS）不在本次范围

### 全链路与隐藏需求分析（2026-11-05，方案 v2 的设计基础；吸收并取代 v1 修补清单）

**用戶声音（2026-11-05 Exa 检索，样本小、方向性证据）**：
- r/audio：*"I sometimes just need to cut a small part of an audio file and **most tools feel overkill**."* → 轻，不是功能多
- r/audio 评论：*"lossless mp3 editor if you want to avoid **generation loss**"* → 有声用户能感知重编码损失，会为此换工具
- r/software（12+ 赞 OP）：*"cut parts out… **01:20-01:22, 01:34-01:36 etc and remove them all** and keep the rest"* → 多段删除是真实表达过的需求（时间戳语言！）
- r/podcasts（Audacity 新手）：*"I cannot fine cut clips… it would include part of the audio I **DO NOT want** trimmed"*，回答全靠 zoom → **找剪点（试听→微调→确认）是核心循环**，新手在里面失败
- r/podcasts：*"Constantly wanting to **share a few mins** of a podcast with friends"* → 分享是真实下游；headliner 的核心交互=输时间戳收文件
- r/iphone：开发者专门做了 "Voice Memos like UI" 的 trim app；Apple 官方修剪流程=**拖黄把手圈范围 → 捏合缩放 → 试听确认 → Trim(留)/Delete(删) 二选一 → 保存**——亿万 iOS 用户被这套语言训练过，这就是 trim 的心智模型

**用户目的（JTBD）**：不是"修剪音频"，是**"从这个录音里拿走我要的那一段/去掉我不要的那一段，马上拿去用"**——下游用途（分享、交作业、teaser、存档、继续加工）才是 hiring reason。

**全链路八站**（★=现产品断裂点）：
1. 素材在哪：iPhone 备忘录/微信/网盘 → Files → Safari（guide 已记录此苦路）
2. 进门期望：0 注册/0 上传/0 弹窗，打开即用
3. 载入：等解码 → 工作区（已原地替换 ✓）
4. ★ **找剪点**：在长录音里找到"那句话从哪开始"——试听游走、放大、微调、反复确认的循环（用户在此失败）
5. ★ **圈范围**：拖把手（16px 热区远低于触控标准；VM 用户期待粗把手+捏合缩放）
6. 确认：听选区（有 labeled play ✓）
7. ★ **拿走**：keep/delete 语义不可见（Delete 模式选区仍 teal）、导出按钮在移动端折叠线下、输出文件名无意义（`-edited` 后缀）
8. ★ **下游**：导出即终点；分享/继续剪/接其他工具全部断裂（related tools 在页尾，完成态无出口）

**隐藏需求清单**（按证据强度排序）：
1. **轻**（每个额外步骤都在违背 hiring reason）——强
2. **双出口**：VM 范式证明 keep/delete 应该是**导出时刻的两个动作按钮**，而不是选区阶段的模式开关——强（心智模型）
3. **找点循环一体化**：放大 + 边界试听 + 微调（±步进）是"剪对"的三件套，不是三个孤立功能——强
4. **完成态是起点**：分享（Web Share API）、可辨文件名、同文件继续剪第二段（多段删除的最小满足）、接 fade/音量/格式——中强
5. **无损路径显性化**：WAV 标注"无损保存"、MP3 标注码率（诚实呈现 generation loss）——中
6. **时间戳主路径**：部分用户第一反应就是输时间（headliner 模式）——中
7. **多段剪辑引擎**：真实需求但大工程——先以"完成态里继续剪同文件"过渡，GSC/埋点数据后再定——弱→观察

**重做设计原则（从旅程推导，取代 v1 的修补思路）**：
1. **把手是主角**：波形+把手占首屏 C 位（借鉴 VM 的视觉权重，不抄黄色）
2. **两个出口，不是一个模式**：拖好选区后两个动作并列——「保存选中段」/「保存删除选中段后的部分」，按钮文案即语义（承载输出时长），取消模式开关的心智负担；波形预览在触碰出口时切换演示
3. **找点循环三件套一体化**：缩放（桌面按钮+移动捏合/双击）→ 边界试听（从边界前 2s 播放）→ 微调（±0.1s / ±0.01s 步进按钮，贴把手）
4. **完成态卡片**：文件信息+重命名+分享（Web Share API，移动端）+继续操作（同文件再剪/接 fade/转格式）
5. **轻的语言**：0 弹窗 0 注册、本地处理徽标常驻文件条、默认全选（不选=整段保留）语义不变
6. **移动端：导出条吸底**、把手热区 ≥44px、时间戳输入保持首屏可达（部分用户主路径，不折叠——推翻 v1 的折叠方案）
7. **诚实呈现**：错误三段式内联卡片；WAV/MP3 的质量语义标注

**范围与边界（不变）**：只动工作区交互层；SEO 文案/URL/how-to/FAQ 红线不动；多段引擎与 lossless 不做（观察项）。

**继承影响**：外壳改动由 cutter/ringtone/mp3-editor/split 继承，四页回归截图。

**v1→v2 处置**：v1 的语义可视化/吸底/把手热区/错误卡片被 v2 吸收；v1 的"模式开关+高亮反转"被"双出口"取代；v1 的"移动端时间输入折叠"被推翻（时间戳是主路径）。

### 交互稿 v2.1（组件级，2026-11-05，配 HTML demo）

组件与状态（demo 同时渲染桌面 1440 / 移动 375 两画框，全部可交互）：

| 组件 | 构成与状态 | 行为规则 |
|---|---|---|
| FileBar 文件条 | 文件名+元数据 · **信任徽标（shield + "Processed locally"，常驻）** · Change file · Zoom −/+ | 徽标复用本地处理语义；Zoom 改变 px/s 并以选区中心重定位 |
| Stage 波形台 | SVG 波形；**选区外两侧降暗 20%**（"这是被保留的段"语义常显）；把手视觉 4px + 透明热区 44px；激活把手有 accent 环；播放头 | 空白处拖拽=新建选区（锚点扩展，最小 0.05s）；拖把手=改边界；移动端捏合缩放（demo 用按钮模拟） |
| FindLoop 找点行 | [Play from cut ▶] · 激活边界 chip（Start/End）· [−0.1][−0.01][+0.01][+0.1] | 试听=从激活边界前 2s 扫到后 0.5s（demo 用播放头动画）；微调作用于最后触碰的边界 |
| Readouts 读数 | Start / Span / End 三栏（等宽数字）+ Start(s)/End(s) 时间输入（`inputmode=decimal`） | 四者与波形双向同步；输入 change 即钳制 [0, duration] |
| **Exits 双出口** | **主钮 "Save selected · 00:10.00"**（accent 实心）+ **次钮 "Save without selection · 00:13.54"**（描边）；文案内嵌实时结果时长 | 点击即导出（keep/delete 语义由按钮承载，**模式开关取消**）；全选时次钮禁用（无可删）、零选区时主钮禁用 |
| ExportBar 导出条 | 桌面：Play + Format select（WAV · lossless / MP3 · 320…64，质量语义标注）+ 双出口同一行；移动：**双出口吸底（sticky + 安全区）** | 移动端选完即导出，无需滚动 |
| CompletionSheet 完成态 | ✅ 卡片：文件名（可编辑，keep→`-clip` / delete→`-trimmed`）+ 时长/体积 · Download 主钮 + **Share**（Web Share API）· 继续操作 chips：Trim another span（同文件清选区）/ Fade the ends→ / Boost volume→ / Convert→ · 返回编辑 | 完成态是下一站起点；chips 对应 related 工具 |
| ErrorCard 错误卡 | 内联替换 dropzone：icon + "This file can't be decoded" + 为什么（浏览器不支持的编码）+ 怎么办（试 MP3/WAV/M4A 或先转换）+ [Choose another file] | 三段式（audit §10.4）；300MB/1h 警告同构 |

**i18n 新键清单（en 文案，×11 语言）**：`saveSelected`、`saveWithoutSelection`、`playFromCut`、`fineTuneBoundary`、`boundaryStart`、`boundaryEnd`、`resultReadyTitle`、`renameFile`、`share`、`trimAnotherSpan`、`continueFade`、`continueVolume`、`continueConvert`、`errorDecodeTitle`、`errorDecodeWhy`、`errorDecodeHow`（约 16 个；现有 keep/deleteSel/selectAll 键在双出口方案下**退役**，另计 −3）。

### 用户追加三项改造（2026-11-05，已并入 v2.1 设计与 demo）

1. **淡入淡出**：✅ 采纳。管线现成——cutter 页已暴露 `trimFades` 滑杆（AudioEditor.astro 淡入/淡出 range 组件与 i18n 键均已存在），trimmer 开启是**配置级改动，零新键**。UI 位置：Fine-tune 行下方 Fades 行（In/Out 双滑杆 0–5s，步进 0.5s）。后果知悉：cutter 页剩视频 accept 一个差异点，两页进一步趋同（审计本裁定两页为关键词替换双胞胎，定位靠文案）；004 报告的"GSC fade 长尾再开启"条件被用户决策提前满足。
2. **trimmer / cutter 双页保留**：✅ 确认，两页一直是 KEEP（审计裁定）。澄清：双出口**没有删除** keep/delete 选项——只是把选择从"导出前的模式开关"移到"导出时刻的两个按钮"（Save selected=原 keep；Save without selection=原 delete）。两个语义、两个页面、cutter 的 fade 滑杆与视频接受全部保留。
3. **格式下拉 + 体积**：✅ 体积估算**要做，且是精确值**（MP3 CBR=时长×码率÷8；WAV=采样率×声道×2B/s，前端零成本算出）。落点：格式选项内嵌「≈240 KB」+ 导出条 Output 预告行（时长/体积/淡入淡出实时刷新）。理由：选码率本质是选大小（聊天软件有附件上限），竞品 clideo/VEED 均显示，顺手替用户回答"选哪个码率"的高频困惑。**新增格式 M4A/AAC 分析**：引擎可复用 ringtone 的 AudioEncoder 路径、可行性高、iPhone 下游有价值；但产品能力变化 → 页面格式表格/product-facts/FAQ 等 SEO 文案必须一次性同步，**建议不混入本次 UI 重做**，作为 v2 落地后紧随的独立小任务。FLAC/OGG：AudioEncoder 不支持，诚实不做。demo 已更新三处（Fades 行/选项内嵌体积/Output 行）。

### 简易版 / 专业版（多段）可行性分析（2026-11-05，用户提议，待决策）

**需求证据盘点**：
- 简易版（单选区，v2 已确认的设计）：强。Reddit "Simple audio trimmer" 在 SERP #7；"most tools feel overkill"；VM 心智模型本身就是简易范式。**当前所有证据都支持简易版优先。**
- 专业版（多段选区）：中弱，方向真实、样本不足。r/software 高赞 OP（"01:20-01:22, 01:34-01:36 remove them all and keep the rest"）+ SS 竞品有多段 FAQ + LosslessCut/mp3DirectCut 桌面生态证明该任务存在；**但站内零数据**（埋点刚上线），90 天计划纪律：功能要用真实需求验证，不预先铺页。

**三种落地方式对比**：

| 方案 | 形态 | 优点 | 风险/成本 | 判定 |
|---|---|---|---|---|
| A. 两个 URL | /audio-trimmer（简易）+ 新页（多段剪辑） | 意图隔离最干净；新查询族（"cut multiple parts from mp3"）可独立承接 | **蚕食风险**：与 audio-trimmer/mp3-cutter/silence-remover/split-mp3 四页intent 相邻，正是审计挂着的蚕食簇；new-tool-spec 全流程成本（×11 语言、截图、SEO 内容、launch checklist）；**需求尚未验证** | ❌ 现在不做。数据验证后再启动 |
| B. 同页双模式 | Simple/Pro 切换开关 | 一页承载 | 模式开关出现在简易版首屏 = 违背"轻"（隐藏需求 #1）；双套 UI 维护 | △ 不推荐 |
| C. 同页渐进披露 | 简易版=v2；多段作为**能力**而非模式：文件条溢出菜单/完成态里放 "Multi-cut" 入口，进入后 N 段管理（段列表 chip + 点选激活段 + 全局双出口泛化） | 简易版零污染；一个 URL；埋点可观测（multi_span_used / multi_export）；数据说话后再决定是否升格独立页 | 引擎改造：sel 单数→数组（renderEdit 循环切片，机械）；UI 成本真实（段列表、跨段交互、375px 适配） | ✅ **推荐路径** |

**双出口范式与多段天然兼容**：N 段全部定义为"保留段"，出口泛化为「Save N spans · 00:10.00」/「Save without these spans · 00:13.54」——r/software OP 的"删多段留其余"正是第二个出口；不需要发明新交互语言。

**工程量级（引擎现实）**：renderEdit 单切片→循环切片+拼接（小）；波形叠加 N 段高亮（小）；**真正的成本在 UI**：段列表管理、激活段与把手/微调的归属、移动端 375px 的段 chips、undo 与段操作、i18n 新键约 +6（×11）。预估为简易版工作量的 60–70%。

**时机与门控建议**：
1. **第一阶段（现在）**：只做简易版 v2（双出口），上线并接好埋点。
2. **第二阶段**：多段能力以方案 C 落地（同页渐进披露），带 `multi_span_used`/`multi_export` 事件。
3. **第三阶段（数据门控）**：GSC 出现 "trim multiple parts" 类查询增长 或 埋点多段使用率达标（建议阈值：≥8% 的 trimmer 导出来自多段）→ 走 new-tool-spec 拆独立页（方案 A），否则维持同页。
4. **命名纪律**："简易/专业"只是 UI 内的分组概念，SEO 页面永远以意图命名，不做 "Pro" 营销页（与站内"免费无注册"定位冲突）。

**边界重申**：多段≠split-mp3（split 是等分成 N 个文件输出 zip）；多段≠silence-remover（只删静音）。三者在完成态/related 里互相导流，不互相吞并。

## 七、Skill 提炼（收尾阶段）

全部完成（或模式在第 3~4 个工具后明显稳定）时，把重复出现的流程、验证手法（探针注入、blob 捕获、ffprobe 验证）、i18n 约束、SEO 红线提炼成可复用的 SKILL.md，供后续新工具或改版直接引用。提炼时以「完成日志」里的**可复用模式**段为原料。

### 实现期补充需求与后续议程（2026-11-05）

**新增交互需求（并入 v2.1 实现）**：
- **鼠标操作一等公民**：桌面端拖把手/框选/把手 hover 光标（ew-resize）必须顺滑；现有 pointer 事件天然支持鼠标，重点在 hover 光标与命中区。
- **循环播放**：Play 增加 Loop 开关——开启后只在选区内循环；**循环播放中调整任何参数（把手/时间/淡入淡出）→ 立即从头（选区起点）重播一次**，让"边听边调"闭环。

**实现完成后的探讨议程（用户排定，届时逐项展开）**：
1. SEO 内容排布：改写哪些内容、大词/小词怎么选。
2. 完整承接用户意图的链路：为什么剪 → 文件从哪来（能否帮用户过滤格式）→ 源格式（我们支持哪些）→ 输出格式要求（目标平台支持的格式与大小）→ 存到哪 → 叫什么名字。
3. 对比头部产品的优势：操作 / 能力 / 差异化。

**验收反馈修正（2026-11-05 第二轮，已实现并验证）**：
1. Play from cut 移除（用户判定无用）：按钮/els/方法/i18n 键（×11）全部清理。
2. Fades 由双滑杆改为**单开关固定 2s**（简易版定位）：`fadeSwitch` 新配置（cutter 保留 5s 滑杆），开关点击 commit({fadeIn:2/0, fadeOut:2/0})，aria-pressed 随 applyState 绘制；结果预告行追加「Fade in 2s / Fade out 2s」。验证：开→2/2、关→0/0。
3. 导出条换行修复：出口按钮 btn-lg→btn、双出口页 md:flex-nowrap；1100px 视口实测单行（rows=1）。
4. 鼠标操作确认支持（pointer 事件统一，smoke 拖选即鼠标路径）；循环播放已实现（调参从头重播已验证）。

**验收反馈第三轮（2026-11-05，已实现并验证）**：
1. Fine-tune 行整个移除：Start/End 激活边界 chip（"选中才能用方向控制"的困惑源）+ activeBoundary 概念 + applyNudge 隐式边界全部删除。
2. 微调按钮移入输入框行（用户画的红框位置）：Start(s) 输入右侧 4 颗（控制 start）、End(s) 输入左侧 4 颗（控制 end），中间会合；`data-nudge="start,±δ"` 显式边界，applyNudge(boundary, delta)。
3. Fade 开关移到 Select all 行右端（ms-auto），导出条恢复单行。
4. 验证：分边界微调各自生效（start 0→0.10、end 23.54→23.44 实测）、导出条单行、fade 开关 2/2↔0/0、375px 布局正常；astro check 0 错误、smoke ALL PASS。
5. i18n：playFromCut、fineTune 两键随行移除（×11 清理完毕）；boundaryStart/boundaryEnd 保留用作微调组标签。

**验收反馈第四轮（2026-11-05，已实现并验证）**：
微调按钮合并为**贴输入框边缘的 3 列上下箭头组**（用户指定）：每列 ▲/步进值/▼（0.01 / 0.1 / 1 三列，左→右精度递增），Start 控件贴输入框右缘、End 控件贴输入框左缘，中间正好汇合；原生 number spinner 以 `fae-nospin` 全局样式隐藏（仅 trimLayout 输入加类）；外挂 4 按钮组移除。内核零改动（data-nudge="boundary,±δ" 格式复用，±1 由 applyNudge 原生支持）。验证：start ▲0.1 → 0.10、end ▼1 → 22.54 实测；astro check 0 错误、smoke ALL PASS。

**验收反馈第五轮（2026-11-05，已实现并验证）**：
1. Fade 拆成两个独立按钮：「Fade in · 2s」「Fade out · 2s」（modes-row 右端），各自独立切换 2/0，aria-pressed 激活态。
2. **波形渐变可视化（效果图）**：开启时选区边缘绘制 2s 包络楔形（accent 30% 三角，clip-path），位置/宽度随选区与缩放实时更新，updateSelectionOverlay 统一驱动（显隐走 classList——属性坑二刷已规避）。
3. 播放带所选效果：内核播放特效管线本就含 fadeIn/fadeOut（renderEdit 预览），Play 即听到渐变；实测播放/停止正常。
4. 门禁：astro check 0 错误（237 文件）、smoke ALL PASS。零新增 i18n 键（复用 fadeIn/fadeOut）。

**验收反馈第六轮（2026-11-05，已实现并验证）**：
1. 输入框与箭头组合并为一体：去间隙、输入框只圆外侧、箭头组圆内侧、共享边线（border-l/r-0 消重边）。
2. 格式下拉自定义（双出口页）：原生 select 转 sr-only 保留内核逻辑（m4r 过滤/chips 联动/change 事件全不变），新增站点风格弹层（上行展开、选中行 accent+勾、触发器文案=选中项）+ toggle/close/outside-click/Escape；`syncFormatDropdown()` 从 select options 重建（m4r 过滤自动反映）；`download_completed`/体积估算链路不变。mp3-editor 等非双出口页仍用原生 select（各自轮次再改）。
3. 验证：弹层样式/选 128kbps → 触发器+结果行 377KB 联动 ✓；smoke ALL PASS（sr-only select 上 page.select 正常）；astro check 0 错误。

**验收反馈第七轮（2026-11-05，已实现并验证）**：
读数条（起点/这一段/终点）改为 demo 式轻量行：去上下重边框（只留 border-b 与下方输入区分隔）、内边距 py-3→py-1.5、数值 text-lg/xl→text-sm——紧贴声轨底部，与 waveform 视觉连为一体。data-span-* 元素与内核 updateSpanReadout 逻辑零改动。

**验收反馈第八轮（2026-11-05，已实现并验证）**：
微调三列箭头组**嵌入输入框内部右缘**（用户要求"放到 input 框内"）：absolute 定位覆盖原生 spinner 位置，输入框 pr-[82px] 预留空间、圆角恢复完整（箭头组容器 rounded-r-lg 内嵌）、`.fae-nospin` 隐藏原生 spinner；Start/End 各自独立箭头组（0.01/0.1/1 三列 ▲/值/▼）。内核零改动（data-nudge 通道复用，±1 已支持）。实施注意：astro 块内联 python 批量替换会因模板字面量/花括号转义失败——改用整块重写+行定位。验证：start +0.1 → 1.10、end −1 → 3.00 实测；astro check 0 错误、smoke ALL PASS。

**验收反馈第六~十轮合并记录（2026-11-05 下午，全部已实现并验证）**：
- R6 输入框+箭头组合并一体；格式下拉自定义（sr-only select 保留内核逻辑 + 站点风格弹层）。
- R7 读数条改 demo 式轻量行。
- R8 微调箭头组嵌入输入框内部右缘（fae-nospin 隐藏原生 spinner）。
- R9 Play from cut 移除；Start/End chip 删除（activeBoundary 概念移除，applyNudge 显式边界）；微调移入输入框行；Fade 拆双按钮。
- R10 读数条整体删除（时间移到刻度尺）；声轨下加**自适应时间刻度尺**（刻度间隔 0.1s–30min 随缩放自适应、细刻度加密、拖动平移、原生滚动条隐藏 fae-noscroll）；**选区边界时间标签**（accent 小胶囊贴边界线底部，随选区/缩放实时更新）；Select all 与 Fade 按钮**常显不消失**（移除 auto-hide）；质感对齐 demo（声轨 rounded-xl 圆角容器、刻度尺内嵌药丸样式 mx-1 mb-1 rounded-lg border）。
- 全程门禁：astro check 0 错误、smoke ALL PASS（流程断言已随设计演进更新）、hero/analytics PASS。改动未提交，待用户最终验收。

**验收反馈第十一轮（2026-11-05，已实现）**：Zoom out/in 改为图标按钮（size-9 方形，新增 zoom-in/zoom-out 图标，aria-label/title 保留文案），与 demo 文件栏一致。
边界时间胶囊加位置下限/上限（±24px），贴边选区时不再被舞台边缘裁切。

**验收反馈第十二轮（2026-11-05，已实现）**：投放区视觉重设计（纯展示层，文案/逻辑零改动）：左右装饰性静态波形柱（accent/20，7 柱对称序列）、图标升级 size-14 + ring 光环 + hover 放大、标题 text-lg、data-open 变为全宽 hover 目标（group-hover 联动柱透明度与图标缩放）。桌面/375px 均验证。Astro check 0 错误。

**验收反馈第十三轮（2026-11-05，已实现并验证）**：Change file 改为一步直达——点击直接打开文件选择器（不再先清空工作区回到投放区再二次点击）；选中新文件即替换、取消则保留原文件；播放中先停止再弹选择器。验证：间谍确认 picker 直接触发、工作区保持打开。所有 trimLayout 页生效。

**SEO 三议题探讨已启动（2026-11-05）**：分析文档 `docs/plans/2026-11-05-seo-content-topics.md`（议题一：大词不动改 H2 层小词簇，三过滤器选词；议题二：六环链路盘点，唯一高价值内容缺口=输出平台规格对照表；议题三：三件套主张——零上传隐私/0.01s 精度/移动端专业手感，"鼠标操作"不构成差异化；trimmer 评分基线 80/100，提分点=独特性与 H2 覆盖）。决定提案：内容三动作（H2 改写/平台规格表/FAQ）+ 功能两动作（M4A/移动端全屏），待用户拍板。

**验收反馈第十四轮（2026-11-05，已实现并验证）**：页面内容顺序按用户指定重排（**模板级，全站 57 工具页生效**）：
- 新顺序：编辑器 → TrustBadge → **①如何使用（HowTo 卡片+正文 sections）→ ②为什么用我们（新增 why-us 区块：隐私/0.01s 精度/移动端三卡片）→ ③使用场景（uses）+放哪（fits）+规格表（specs）→ ④FAQ → ⑤Guides+相关工具**。
- 新增 ui 键 4 个 ×11 语言（whyUs/whyPrivacy/whyPrecision/whyMobile，fill({name}) 模式）。
- 实施事故记录：python 行手术第一次插错位置破坏模板（编辑器岛跑到页底）→ git checkout 回滚 ToolPage.astro 后用唯一锚点（TrustBadge locale / HowTo / sections.length）重做成功。教训：大块行手术锚点必须唯一（TrustBadge 有 import 行同名词）。
- 验证：astro check 0 错误、smoke ALL PASS（拖选 437px 恢复正常）、trimmer H2 顺序逐项确认、wav-to-mp3/mp3-cutter 抽查零报错。

**验收反馈第十五轮（2026-11-05，已实现并验证）**：页面内容顺序按用户指定重排——模板级（ToolPage.astro，全站工具页生效）：①如何使用（HowTo 卡片+正文 sections）→②为什么用我们（新增 why-us 三卡片区块：隐私/0.01s 精度/移动端，ui 键 4 个×11）→③使用场景（uses）+放哪（fits）+规格表（specs）→④FAQ→⑤Guides+相关工具。Faq 之前的全部区块重排完成。实施事故：python 锚点撞 TrustBadge import 行破坏模板一次，git checkout 回滚后唯一锚点重做成功。验证：H2 顺序逐项确认、wav-to-mp3/mp3-cutter 抽查零报错、astro check 0 错误、smoke ALL PASS。

**功能两动作（2026-11-05，已实现并验证）**：
- **M4A 导出**：encoders 注册表加 m4a（复用 m4r 的 AAC-LC/MP4 管线，ext 区分）；AAC 支持检测扩展到 m4a（不支持自动隐藏选项+回退 mp3-192+syncFormatDropdown）；trimmer config.formats 显式列出（wav/m4a/mp3×5，其他工具不受影响）；ui.formats m4a 标签 ×11（'M4A · AAC' 通用无需翻译）；结果行 RATES 加 m4a:24。EN 文案同步：tool-facts Output 行 + trimmer FAQ 答案（M4A AAC when supported；非 EN 的 FAQ/表格为 EN-only 渲染或后续翻译批次，无可见不一致）。验证：下拉选 M4A → 导出 blob audio/mp4 → ffprobe aac/48kHz/5.08s ✓；astro check 0 错误。
- **移动端全屏（沉浸模式）**：文件栏 maximize 图标按钮（md:hidden 移动端专属）→ 编辑器 root 切 fae-fullscreen（fixed inset-0 z-60、声轨 38vh 撑高、export-bar 沉底、Esc/再点退出、body 滚动锁）。验证：1440×900 下 root 铺满、aria-pressed 同步、退出恢复 ✓。CSS 方案（非 Fullscreen API）= iOS Safari 全兼容。
- 期间 Vite 依赖缓存二次发作（mp4-muxer 动态导入失败）→ dev server 重启解决（运维已知项）。

**验收反馈第十五轮（2026-11-05，已实现并验证）**：HowTo 三卡片截图重拍——用户指出"这部分的表现方式+虚线框太大"。根因：howTo 截图为重做前旧 UI（旧投放区大空虚线框/旧工作区无刻度尺双出口）。重拍三张新 UI 截图（976×462 投放区 / 976×586 选区工作区 / 976×586 导出后状态），cwebp q88 替换 public/screenshots/audio-trimmer-{1,2,3}.webp，tools.ts 尺寸同步（1464/606/885→976/462/586）。表现方式结论：保留三卡片布局（HowTo schema+ImageObject 是 SEO 资产），以真实新截图解决观感。**遗留：其余 56 个工具的 howTo 截图同为旧 UI，随各自重做轮次重拍**（shot 脚本可复用：滚动定位+文档绝对坐标裁剪+隐藏站点头）。

**内容三动作 + 工具内容重排事故修复（2026-11-05 晚，全部完成）**：
- EN 源（tools.ts trimmer 条目）：①Mark the part 精度工作流重写 ②新增 Nudge 精度 section（0.01/0.1/1 箭头组+循环试听）③sound section 加 M4A AAC 句 ④新增 Pick an output 平台规格 section（WhatsApp 文档 2GB/Gmail 25MB 均官方验证，含日期戳）⑤FAQ 增补 4 条（精度/全屏/输出格式/命名后缀）。
- zh 同步（zh.ts trimmer 条目全量翻译，多语言规则=先 zh 后翻译流程）。
- 事故与恢复：tools.ts 多轮增量修补后出现重复 getTool/FAQ 块错位（cutter 条目混入 4 条新 FAQ + getTool 双定义）→ git checkout tools.ts 回 HEAD 后用综合重放脚本（/tmp/replay-tools-ts-v3.py 模式，trimmer 范围锚定 + 6sp 缩进锚点）一次性重放全部修改，E4/E5 以 Edit 工具精确锚点补齐。astro check 0 错误、smoke ALL PASS。
- 教训（skill 素材）：tools.ts 这类巨型文件的批量修改禁止多轮增量修补——恢复基线+单一综合重放脚本更可靠；FAQ/section 块移动必须验证落点条目（slug 边界 check）。
- 遗留：其余 9 语言（es/pt/id/de/ko/ja/fr/ru/ar）的 trimmer 内容改写待翻译流程（用户确认后）；其余 56 工具 howTo 截图重拍。

**HowTo 呈现方式改版（2026-11-05，用户选 A 纯文字步骤）**：ToolPage 的 HowTo 调用移除 shots 传参——全站工具页 howTo 三卡片改纯文字编号步骤（数字+标题+一句话），与竞品主流一致（audiotrimmer #1/mp3cut/vocalremover 均纯文字或零 how-to）。HowTo 组件 shots 参数本就可选（零组件改动）；screenshots 数组保留供 ImageObject schema 与 blog 复用。验证：astro check 0 错误、smoke ALL PASS、渲染确认。**三张 webp 截图资产保留在 public/screenshots/（blog/指南可复用），页面不再展示。**

**终检（2026-11-05 晚）**：1440/375 双端全页检查通过——编辑器区（filebar/声轨+选区+胶囊+刻度尺/内嵌箭头输入/双出口/Loop/Fade 按钮/结果行）、投放区（装饰柱/内嵌 chips+隐私）、内容区（纯文字 HowTo→Why us→场景+规格→FAQ→Guides+Related）全部正常，无裁切无重叠，禁用态正确（全选时 Save without · 00:00.00 正确禁用）。对照竞品（003/004 SERP 报告）逐项复核：精度主张/零上传/双出口/循环/纯文字 HowTo 均已落地且为在场页独有或主流形态。**trimmer 重做闭环完成，待用户最终验收。**

## 全站风格与结构统一（2026-11-06，用户指令"继续把所有的页面都统一风格和结构"）

用户在 trimmer 闭环后下达全站统一指令。本轮把 trimmer 立起来的外壳风格泛化到全部 AudioEditor 页面（约 40 页），并把 10 个独立岛的门面统一到同一组件；每工具的**交互层重做**仍按 tracker #2–#10 逐个进行，不受本轮影响。

**三个提交**：
1. `ad36314` trimmer 十七轮重做本体（未提交状态保护入库）。
2. `1b78afc` 外壳泛化：AudioEditor.astro + index.ts 把 trimLayout/dualExits 门控的纯视觉元素改为全站生效——自适应刻度尺（移到声轨正下方）、选区边界胶囊、把手圆粒、选区外降暗、结果预告行（Output · ≈体积）、站点风格格式下拉（原生 select 转 sr-only，内核联动零改动）、精确输入微调箭头组、移动端导出条吸底强化、内联错误卡、全屏模式；新增 `selectable` 常量（= 内核 onPointerDown 的选择门控：非 converter/silence/noise/voice），选择类视觉只在可选择的页面渲染。**顺带修复三个真 bug**：①doExport 里 downloadBlob 连调两次（每次导出双下载）②toggleImmersive 对非 dualExits 直接 return（按钮可点无反应）③dim-l/dim-r 用 Tailwind `hidden` class + 内核用 `el.hidden` 属性切换——降暗层从未真正显示过（trimmer 轮已知坑的二刷，class/属性混淆）④`.fae-page-lock` CSS 从未定义（全屏滚动锁是空操作）。
3. `9ae2ce2` i18n 目录修复 + `0969874` 门面统一（见下）。

**门面统一**：新增 `DropWell.astro`（装饰波形柱 + size-14 ring 图标 + 标题，即 R12 投放区视觉）替换 AudioEditor 内联块；Joiner/Loudness/Midi/Mixer/Visualizer/Tag/MusicVisualizer/Transcribe 八个 DropPromise 岛 + KeyBpm（自有 dashed 井，刻意不接 DropPromise 避免格式 chips 误导）全部接入；LocalBadge 统一移入井内。SpecPaint 是绘画范式（自带画布井）不适用，跳过。Soundboard/VoiceRecorder/Metronome/TapTempo 范式不同，留给各自轮次。

**trimmer 内容提交引爆的 i18n 事故与修复（重要）**：2026-11-05 的内容三动作只做了 en+zh，`assertCatalogs` 硬校验对 9 语言全红（trimmer faqs 7≠11 等 74 错）——**9 个语言的 trimmer 页和 fr/ru/ar/es 首页在 dev/生产直接 500**，已随 ad36314 带上 main。修复：①audio-trimmer 加入 `PENDING_I18N` 豁免集合（i18n/index.ts 为过渡状态设计的现成机制，旧译本继续正常渲染；注释注明翻译落地后必须清空）并导出；②zh.ts mp3-cutter 里残留的 4 条 trimmer FAQ（11-05 tools.ts 事故"混入"的另一半——en 侧重放清掉了、zh 侧漏了）删除，顺带修复 YouTube FAQ 被事故弄乱的缩进；③check:i18n 审计脚本同步跳过 PENDING_I18N slug，过渡期保持绿。**check:i18n 现在真正反映剩余工作：9 语言 trimmer 内容翻译（tracker 遗留项）。**

**验证**：astro check 0 错误、smoke ALL PASS、check:pages ALL PASS、check:i18n OK、hero/analytics PASS。浏览器真跑：bass-booster（quickControls 类）拖选→胶囊/降暗/结果行/精确输入全联动、格式下拉选 128→内核值+触发器+结果行三联动；wav-to-mp3（converter 类）无选择交互但刻度尺/下拉/结果行齐全；mp3-editor 旧流程保留+新元素齐全；375px 导出条吸底（bottom=812）、全屏铺满 375×812、page-lock 生效、退出恢复。joiner 新门面截图比对一致。

**遗留**：①9 语言 trimmer 内容翻译（check:i18n 的工作清单，落地后清空 PENDING_I18N）②各岛导出条仍是原生 select + 各自的 workspace 风格——属 tracker #4–#10 各自轮次 ③其余 56 工具 howTo 截图重拍 ④product-facts.md M4A 补记。
