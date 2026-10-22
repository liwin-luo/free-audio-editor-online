# Soundboard（音效板）工具设计

日期：2026-10-22 · 状态：待确认（demo 在同目录 `soundboard-demo.html`，确认后按本文件开工）

## 1. 背景与依据

- 竞品 soundtools.io/soundboard 已验证需求：上传/录音 → 裁剪 → 绑定彩色按钮 → 点击即时播放、多音叠放。导出格式已实测（`{version, buttons:[{id,name,color,audioB64,sampleRate}]}`，11 个内置梗音，2.74 MB）。
- 通过 `new-tool-spec.md` §2 三门槛：独立查询（现有 51 页无一覆盖）；纯浏览器可行（decodeAudioData + MediaRecorder + AudioBufferSourceNode，全部已有积木）；诚实范围可做到（见 §6 限制）。
- 竞品弱点即机会：仅英语、无 Pro；"11 语 soundboard" 没有对手。且这是全站第一个带"回访属性"的工具（板子可复用），并给 voice-recorder / audio-trimmer / pitch-changer 导流。
- 前置条件（开工前完成）：seodata.dev 验证 `online soundboard` / `soundboard maker` / `custom soundboard` 量级与竞争度。目标长尾合计 US ≥ 10k/月、KD 不高则按本设计执行。

## 2. 范围

**v1（本次实现）**

- 按钮网格，点击播放，多音叠放，主音量，全部停止
- 内置 11 个合成默认音（Web Audio 合成，零素材文件、零版权风险）。清单对照 SoundTools 默认板的非人声原型逐个覆盖：汽笛(airhorn)、低音爆(vine boom 类)、悲伤长号(sad trombone)、敲棍(rimshot)、错误蜂鸣、屁声、掌声、蟋蟀、叮、弹簧、金币。**刻意不做**：人声梗（Bruh/Oof）与特定表演（Wilhelm Scream）的模仿——版权不可行；热门梗录音一概不内置（版权 + 趋势轮换维护成本 + AdSense 审核风险），"找梗音"需求由导入 SoundTools 板子、用户录音和后续指南承接
- 上传音频 → 新按钮（MP3/WAV/OGG/M4A/FLAC/AAC，浏览器能解的都收）
- 麦克风录音 → 新按钮（MediaRecorder，模式同 voice-recorder）
- 每按钮：改名、8 色选盘、波形裁剪（起止把手 + 循环试听 + 应用）、单条导出 WAV、替换、删除
- 热键：按顺序占用 `1-9 0 Q W E R T Y U I O P`，Esc 全停；按钮上显示键位徽标
- **场景模板（5 个）；布局切换功能已整体移除（用户反馈迭代）**：
  - 迭代轨迹：最初 4 种布局可切换 → 模板绑定布局致整屏跳变，改为模板与布局解耦 → 用户仍觉得布局芯片格格不入，最终**移除布局切换功能**，板子固定为大彩块形态
  - **固定外观（SoundTools 风，用户点名）+ 日/夜跟随全站主题**：面板主题与右上角全站主题开关统一（MutationObserver 监听 `<html data-theme>` 实时跟随，页面切暗面板即暗、切亮即亮）。两套外观均为显式字面量（亮 = 白底浅色 token 值，暗 = #1A1D29 海军面板），不借道页面 token，保证无论页面处于何种主题面板都正确渲染。内容形态两种主题一致：方形渐变磁贴（aspect-ratio 1:1、135° 双色渐变、按磁贴颜色映射渐变、约 176px 小号）、居中大写标签、末尾虚线加号块。模板只切换音效集
  - **规范豁免（第二处，用户明确要求）**：深色面板与渐变磁贴（含一组紫色渐变）是对全站"禁渐变/禁紫/单一强调色"的定向豁免——严格封闭在岛内不回渗站点。**豁免边界已收敛（用户反馈"格格不入"后）**：UI 强调色（选中芯片/主按钮/滑杆）从照抄 SoundTools 的 indigo 收敛回品牌 teal 暗色值（#2DD4BF 系）——indigo 违反全站禁紫令；面板恒为深色，故强调色固定用暗色值
  - **加号块（+ 添加音效）在网格末尾恒在**，空板状态同样保留——对齐 SoundTools 的恒常添加落点；Reset/Clear 不设独立按钮，由「通用」「空白」预设芯片承担（避免语义重复入口）
  - 工具条下方芯片排（仅预设）一键切换，遵守 5 秒法则：加载即出通用板，模板是可选入口不是前置选择器。板子被修改过（上传/录音/导入/改名/裁剪/删除/替换）时切模板走二次确认（芯片文字变"确认替换？"2.5 秒）；空白模板配空态提示（禁无空态，ui-ue-spec §15）
- **全屏演出模式（沉浸式）**：工具条"全屏"按钮对工具区整体 requestFullscreen，页面框架自动隐藏；**工具条与预设芯片叠加在顶部且自动隐藏**——进全屏短暂显示后收回，指针移到屏幕顶部边缘（触屏点顶部）滑出，悬停时保持，移离约 1.2 秒后收回（视频播放器模式）；Esc 同时是全停热键；打开裁剪抽屉时自动滑出控件（退出按钮可达）；不支持 Fullscreen API 的环境（iPhone Safari 网页）特性检测隐藏按钮
- 导出板 / 导入板（自有 JSON 格式）；导入兼容 SoundTools 板子文件（`audioB64` 直接解码，gradient 色映射到最近纯色）
- 不做自动保存：会话态 + 手动导出（用户已决策）。空态给一句"刷新会丢，保存请导出"

**v2 候选（不做进 v1）**

- IndexedDB 自动保存（Blob 存储，约百行封装）
- 键位自定义映射 UI、每按钮独立音量
- "如何接进 OBS/直播" 指南簇（声音走桌面音频被 OBS 捕获，是诚实可行的场景）

## 3. UI / 交互（遵循 ui-ue-spec v1.1）

- 页面 anatomy 不变：hero → 工具（工具条 + 网格 + 编辑抽屉）→ trust → how-to → FAQ → related。工具首屏完整可见。
- 按钮 tile：纯色底（8 色盘：teal/sky/blue/emerald/amber/orange/rose/slate，全部 700 系、白字对比 ≥4.5:1）、名称 + 时长 + 键位徽标；播放中：accent 描边 + 顶部进度细条（transform scaleX，时长 = 音频时长）。`:active` scale(0.98)。
- **对规范的一处有意豁免，请确认**：全站"单一强调色"原则对 soundboard 的 per-button 颜色不适用——颜色在这里是功能（辨识按键），不是装饰。选盘刻意避开紫/渐变/霓虹，保持"安静的音频工作台"基调。SoundTools 的渐变 tile 是它"活泼但杂"的一部分，我们不抄。
- 裁剪抽屉：复用现有单文件编辑器的波形选区模式（canvas 波形、双把手、mm:ss.ms 等宽时间码、循环试听、应用裁剪）。生产实现从现有编辑器抽组件，不重写。
- 图标 inline SVG（生产用 Phosphor），禁 emoji。暗色模式跟随全站 token。移动端网格 `auto-fill minmax(140px, 1fr)`，触控目标 ≥44px。
- 文案按 §十一：动词开头；错误文案分类照搬 §十（格式不支持/解码失败/录音失败）。

## 4. 数据模型与兼容

自有导出格式：

```json
{
  "version": 1,
  "app": "freeaudioeditor-online",
  "buttons": [
    { "id": "b_xxx", "name": "Air Horn", "color": "teal",
      "duration": 1.2, "sampleRate": 44100, "audioB64": "<16-bit PCM WAV>" }
  ]
}
```

SoundTools 导入：检测 `buttons[].audioB64` + `color` 含 `gradient` → 名称、音频直接采用；gradient 里取首个 hex，按 RGB 最近距离映射到 8 色盘。实现约 30 行，是竞品用户的迁移钩子。

## 5. 技术落地（确认后一次 PR，按 new-tool-spec）

| 项 | 内容 |
|---|---|
| 路由 | `src/pages/soundboard.astro` 5 行包装；翻译路由自动生成 |
| ToolDef | `tools.ts` 加 `soundboard`（见 §6 文案草案） |
| 编辑器岛 | `EditorConfig` 加 `soundboard?: boolean` → `ToolPage` 分支 → `SoundboardEditor.astro`（壳）+ `src/editor/soundboard/`：`board-state.ts`（板子状态/播放调度）、`synth-defaults.ts`（合成默认音）、`board-file.ts`（导出/导入/兼容映射）、`record.ts`（MediaRecorder） |
| DSP 检查 | `scripts/soundboard-check.mjs`：合成 buffer 断言（时长、采样率、RMS 上限）；WAV 编解码 roundtrip 断言（复用 encoders） |
| 分类 | **已定：`record`**。先例：metronome（同为不载文件、纯合成工具）现役就挂 record 下；不为单个工具扩张分类（spec §4），将来"演出"类工具多起来再重审分类法 |
| i18n | 11 语 ToolCopy；en/es/de 各 3 个 sections（900–1400 词）；热键/录音等界面词进各词典，术语沿用（录音=Aufnahme 等） |
| 互链 | `related: ['voice-recorder', 'audio-trimmer', 'pitch-changer']`；voice-recorder 与 audio-trimmer 的 `related` 反向加 soundboard；`llms.txt` 补一行 |
| 发布前 | `pages-check` / `feature-check` / `smoke-test` / `seo-audit` 0 HIGH；Lighthouse 移动 ≥95；真机 EN + 一语种过一遍录音与导出；**真机验证全屏进/出**（内嵌自动化浏览器中进入正常、程序化退出会挂起——疑似环境特有，真机 Chrome/Safari 需各验一次，Esc 系统级退出是兜底） |

性能预算：默认音合成在首次交互后进行（不阻塞 LCP）；页面零音频资产下载；编辑器岛懒加载同现有模式。

## 6. SEO 与文案草案（英语基准，11 语围绕本地化查询重写）

- slug：`soundboard`；H1：`Soundboard`
- title：`Soundboard Maker — Record or Upload Your Own Sounds`（52 chars）
- description：`Build a soundboard in your browser: record mic clips or upload audio, trim them, assign hotkeys, and trigger several at once. Nothing is uploaded.`（147 chars）
- intro 场景：主播的梗音、播客 stinger、课堂抢答。
- FAQ 五类强制项：
  1. 隐私：音频在本页用 Web Audio 解码与播放，不上传任何服务器。
  2. 质量：导出 WAV 16-bit / 44.1 kHz；板子文件内嵌原质量音频。
  3. 诚实限制：**声音从扬声器/桌面音频播出，不会进入 Discord 等通话的麦克风输入**——那需要虚拟声卡桌面应用（Voicemod/RESANANCE 的领域）；也没有内置梗音库搜索（内置 11 个合成音效供起步）。
  4. 兄弟区分：vs voice-recorder（录一条并编辑导出 vs 多键实时触发演出）；内链。
  5. 设备：手机可录可放；iOS 需注意静音拨片；录音需授权麦克风。

## 7. SEO 文章簇与执行顺序（2026-10-22 整合分析合并）

**词簇验证（开工前置，未完成）**：seodata.dev 验证 `soundboard maker` / `online soundboard` / `custom soundboard` / `make a soundboard online` 及各语言真实说法；结果回填本节。验证是排期依据，不阻塞开发。

**落地页埋词**（按 seo.md）：slug=主词；H1 同主词带本页事实（学 metronome H1 结构）；title 后半=本页独有操作，不用 Online Free 垫；FAQ 五类硬性；**不追的词**：`discord soundboard` 注入意图、音效下载站意图——FAQ 诚实指路（桌面应用/不做音库）。

**指南簇**（按 content-types.md 七种结构，persona 走 pick-persona，sources 必填，`guides.ts` 卡片 + `GUIDE_TOOL` 同批登记）：

| 篇 | 结构 | 目标查询 | 时机 |
|---|---|---|---|
| `how-to-make-a-soundboard` | How-to 900–1,400 词 | how to make a soundboard / soundboard online | 随工具页同批，首段链主工具 |
| `101soundboards-alternative` | Alternatives 1,200–1,800 词 | 101soundboards alternative | 下一内容批次，承接音库站用户搬家意图（卖点：板子导入兼容） |
| `soundboard-for-streaming` | How-to/Device 900–1,400 词 | soundboard for streaming / obs soundboard | 再下一批，诚实路线：音效走桌面音频被 OBS 捕获 |

**实现要点（demo → 生产已定案）**：裁剪抽屉直接移植 demo 已验证的实现进 soundboard 模块，**不抽现役编辑器的选区组件**（避免并行会话下重构共享文件）；分类挂 `record`；样式换算 = demo token→站点 `--color-*`/组件类（数值本就同源），图标换 Phosphor，toast 用 `.toast-root`，信任徽标用 `LocalBadge`，芯片样式新增 `.chip` 组件类。

## 8. Demo 范围（本次交付）

`docs/plans/soundboard-demo.html` 单文件，双击打开即用：默认合成音、上传、录音、叠放播放、热键、改名/选色、裁剪抽屉（波形+把手+循环试听）、导出 WAV、主音量、全停、导出/导入板（含 SoundTools 兼容）、**5 个场景模板 + 固定大彩块外观（布局切换已移除）+ 全屏演出模式**、暗色、移动适配。UI 为中文（正式版按 11 语交付）。不含：构建集成、i18n、SEO 文案。数据仅存内存，刷新即失——这是 v1 的既定行为，不是 demo 偷懒。

demo 阶段已修的两个实现要点（生产沿用）：合成默认音渲染后统一归一化到 -1 dBFS（防削波，可进 check 脚本断言）；所有 decodeAudioData 入口（上传/导入/替换）必须先确保 AudioContext 已创建——刷新后直接走文件入口时 `ctx` 为 null 会静默失败。
