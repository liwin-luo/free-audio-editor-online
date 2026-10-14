# free-audio-editor.online UI/UE 设计规范 v1.0

日期：2026-10-14 · 依据：美区 26 词用户意图分析 + 前十竞品视觉审计 + design-taste 规则
适用：全部工具落地页、Hub 首页、编辑器界面。技术栈假设：Astro 静态站 + Tailwind + 原生 TS 编辑器内核。

---

## 一、用户特征分析

### 1.1 五类人群（按关键词意图聚类）

| 人群 | 代表关键词（美区月搜索） | 设备 | 任务时长 | 成功标准 |
|---|---|---|---|---|
| ① 格式转换党（最大群体） | mp4 to mp3 (165k)、wav to mp3 (33k)、convert video to mp3 (9.9k)、extract audio (14.8k) | 手机约 60% | <2 分钟 | 选文件→下载，全程零思考 |
| ② 剪歌/铃声党 | mp3 cutter (18k)、cut mp3 (18k)、ringtone maker (8.1k)、cut song (1k) | 手机约 65% | <3 分钟 | 听到→拖选→保存，3 步内 |
| ③ 短视频创作者/年轻用户 | volume booster (18k)、reverse audio (2.4k)、change audio speed (2.4k) | 手机约 70% | <5 分钟 | 效果即时可听，最好玩 |
| ④ 播客/语音创作者 | audio trimmer (14.8k)、normalize (1k)、voice recorder (5.4k) | 桌面约 70% | 5–15 分钟 | 精确到 0.1s 的选择、无损质量、回头客 |
| ⑤ 比较型 Prosumer | free audio editor (6.6k)、audio editor (18k)、online audio editor (3.6k) | 桌面为主 | 10+ 分钟 | 和 Audacity 对比，读内容后决定 |

### 1.2 共同行为特征

- **任务驱动，不是浏览驱动**：90%+ 从搜索引擎直接落进工具页，平均停留 <3 分钟，用完即走（用完即走是成功，不是失败——走之前给他们看其他工具）。
- **5 秒法则**：首屏看不到可交互的工具 = 跳出。注册墙、cookie 弹窗、广告插在工具上方都是死刑。
- **隐私敏感但用证据判断**：尤其语音用户。「文件不上传」必须以可感知的方式呈现（徽标 + 离线可用的暗示），不能只是一句口号。
- **精度敏感人群真实存在**：播客党需要 0.1 秒级拖拽和等宽数字时间码；铃声党完全不需要——界面要同时服务两者（默认简单，精度功能渐进显示）。
- **移动端是一等公民**：55–70% 流量在手机，触控目标、单手操作、导出按钮常驻可见。

### 1.3 审美特征（来自竞品视觉审计的推论）

**用户反感（会直接导致跳出/不信任）：**
- 2010 式广告堆砌工具站（mp3cut 类免费站的历史包袱）→ 显得骗子
- 重 SaaS 仪表盘感（flixier/clideo 式）→ 暗示「要注册、要付费」，劝退任务型用户
- 紫色 AI 渐变、霓虹发光 → 廉价 AI 感
- 空洞大词（"Seamless / Elevate"）→ 不可信

**用户亲近：**
- 中性底色 + 单一强调色，波形是页面视觉主角
- 暗色模式（创编人群偏好，audiomass 靠这个立专业感）
- 克制但有回应感的微动效（按钮按压、播放头移动）
- 「马上能用」的视觉暗示：大 dropzone、无登录按钮干扰

**定位结论：在 cut.audio（冷静专业）和 soundtools.io（活泼但杂）之间取中间——「安静的音频工作台」。**

---

## 二、设计原则（所有争议以此裁决）

1. **工具即首屏**：工具组件在首屏完整可见（桌面 900px 高度内、手机首屏内含 dropzone）。任何营销内容不得把它挤下去。
2. **零阻力**：无注册、无墙、无前置弹窗。所有能力默认可用，限制只在导出时才出现（如果有）。
3. **证据式信任**：隐私用徽标 + 行为证明（Network 面板确实无上传），数据用真实可验证的，不编造 "5M users"。
4. **波形即界面**：波形是核心交互对象，页面视觉中心。所有操作围绕「选择→试听→导出」闭环。
5. **性能即美学**：LCP<2.0s、CLS<0.05 是设计约束不是工程指标。动效只许 transform/opacity，禁止动画库进关键路径。

**风格参数**（相对 taste 基线的调整与理由）：
- DESIGN_VARIANCE：5（工具区必须规整居中——这是转化最优解；内容区允许不对称编辑感）
- MOTION_INTENSITY：3.5（纯 CSS，150–400ms，不引入 Framer Motion——CWV 优先于炫技）
- VISUAL_DENSITY：4（呼吸感，但时间码区允许高密度等宽数字）

---

## 三、色彩系统

中性基座用 **Zinc**（冷灰），唯一强调色 **Signal Teal**（青绿色，音频工具的传统波形色系，与全行业避开的紫色拉开距离）。

### Light（默认）

| Token | 值 | 用途 |
|---|---|---|
| `--bg` | #FAFAFA (zinc-50) | 页面底 |
| `--surface` | #FFFFFF | 卡片/工具容器 |
| `--surface-2` | #F4F4F5 (zinc-100) | 次级面板、代码块 |
| `--border` | #E4E4E7 (zinc-200) | 描边、分隔 |
| `--text` | #18181B (zinc-900) | 主文本 |
| `--text-2` | #52525B (zinc-600) | 次文本 |
| `--accent` | #0D9488 (teal-600) | 主按钮、链接、选中区 |
| `--accent-hover` | #0F766E (teal-700) | 悬停 |
| `--accent-soft` | rgba(13,148,136,0.12) | 选中波形、徽标底 |
| `--success` | #047857 | 成功 |
| `--warning` | #B45309 | 警告 |
| `--error` | #BE123C | 错误/删除 |

### Dark（切换，记忆偏好 + 尊重 prefers-color-scheme）

| Token | 值 |
|---|---|
| `--bg` | #09090B (zinc-950，禁纯黑 #000) |
| `--surface` | #18181B (zinc-900) |
| `--surface-2` | #27272A (zinc-800) |
| `--border` | #27272A |
| `--text` | #FAFAFA |
| `--text-2` | #A1A1AA (zinc-400) |
| `--accent` | #2DD4BF (teal-400，暗底提亮) |
| `--accent-soft` | rgba(45,212,191,0.15) |

**禁用清单**：紫色/蓝紫渐变、霓虹 glow、渐变文字、纯黑、超过 1 个强调色、冷暖灰混用。

### 波形配色（品牌记忆点）

- 未播放段：`--surface-2` 底 + zinc-400 柱；已播放段：`--accent` 柱
- 选中区：`--accent-soft` 覆盖 + 两侧 teal 把手
- 播放头：2px `--text` 色竖线 + 顶部小三角
- 轨道背景网格线：`--border` 1px，可关闭

---

## 四、字体

| 用途 | 字体 | 说明 |
|---|---|---|
| UI/正文 | **Geist**（self-host woff2，latin 子集） | 禁 Inter。fallback: system-ui |
| 时间码/数字/参数值 | **Geist Mono**（tabular） | mm:ss.ms 必须等宽，防止拖拽时数字抖动 |

- 字阶：12 / 14 / 16 / 18 / 22 / 28 / 36
- H1（工具页）：36px/44px，weight 600，tracking-tight——克制，不 screaming
- 正文：16px，line-height 1.6，`max-w-[65ch]`
- 时间码最小 12px Geist Mono，字重 500

---

## 五、布局与间距

- 4px 基数：4/8/12/16/24/32/48/64/96
- 工具页内容容器 `max-w-5xl`，Hub 页 `max-w-7xl`
- 断点：375 / 768 / 1024 / 1280
- 区块节奏：hero → 工具（py-8）→ trust strip → how-to（py-16）→ FAQ（py-16）→ related（py-16）
- 结构一律 CSS Grid（禁 calc 百分比减法）
- 全高区块用 `min-h-[100dvh]`（禁 h-screen）
- 相关工具卡：**2 列 zig-zag 或不对称 grid**（如 `2fr 1fr 1fr`），禁三等分卡片行

---

## 六、圆角 / 阴影 / 层级

- 圆角：8（按钮/输入）、12（卡片）、16（dropzone/工具容器）、full（chip/头像）
- 阴影一律带底色调：`0 8px 24px -8px rgba(9,9,11,0.08)`；暗色模式用 1px 内描边 `border-white/10` 代替阴影表达层级；**禁外发光**
- z-index 体系：10 sticky 导航 / 30 下拉 / 40 modal / 50 toast。禁随意 z-50
- 触感反馈：`:active` 时 `scale(0.98)` 或 `translateY(1px)`

---

## 七、动效规范

| 场景 | 规格 |
|---|---|
| 通用过渡 | 150–250ms，`cubic-bezier(0.16,1,0.3,1)` |
| 播放头 | rAF 驱动 `transform: translateX`，禁 left/top |
| 解码加载 | 波形容器内 skeleton shimmer（禁圆形 spinner） |
| 导出成功 | toast 弹入 + 下载自动触发 |
| 列表显现 | CSS `animation-delay: calc(var(--i)*60ms)` 级联，仅首屏以下 |

- **禁**：视差滚动、自动轮播、磁吸按钮、滚动劫持、无限循环动画
- `prefers-reduced-motion: reduce` 时全部动效关闭

---

## 八、核心组件规范

### 8.1 Upload Dropzone（每个工具页的主角）

- 尺寸：桌面 min-h 280px / 移动 min-h 220px，圆角 16，2px dashed `--border`
- 三态：**空态**（Phosphor `UploadSimple` 图标 32px + "Drop an audio file, or click to browse" + 支持格式 chips: MP3 WAV M4A OGG FLAC AAC）→ **拖入悬停**（border 变 `--accent`，底色 `--accent-soft`）→ **解码中**（skeleton）
- 底部常驻 TrustBadge：「🔒→盾形图标 Processed locally — your file never leaves this tab」（图标用 Phosphor `ShieldCheck`，**禁 emoji**）
- 支持 drag-drop、点击、粘贴 (Ctrl+V 音频文件)

### 8.2 波形编辑器（hero 组件）

- 高度：桌面 200px / 移动 160px，容器**固定高度**（防 CLS）
- 选择区：把手 hit area ≥44px（视觉 8px，热区扩大）；移动端双指缩放波形
- 时间标尺：Geist Mono 12px，`mm:ss.ms` 格式，随缩放自动换挡（s→ms）
- 播放控制：播放/暂停（Space）、循环选中段（L）、试听选中段前后 1s 淡入出（高级选项）
- 渐进披露：默认显示 Cut/Keep + Fade + Export；音量/速度/反转收进「Adjust」抽屉；精确数值输入框（start/end 秒数）在「精确模式」下显示——服务播客人群但不吓走铃声党

### 8.3 操作栏（工具下方，常驻）

- 布局：左侧模式切换（segmented control: Keep Selection / Delete Selection），中间微调（fade in/out 开关 + 时长，音量 slider），右侧 **Export 主按钮**
- 移动端：操作栏 `position: sticky; bottom: 0`，Export 永远可达

### 8.4 导出流程

1. 点 Export → 内联展开面板（非 modal）：格式选择（MP3 320/192/128、WAV、M4R——工具页可预选默认项，如铃声页默认 M4R）
2. 处理进度：不确定进度用 shimmer 条，确定进度用百分比（Geist Mono）
3. 成功：自动触发下载 + toast「Saved as mysong-cut.mp3」+ 备用下载按钮 + 「再做一个」重置入口
4. 失败：错误分类文案（见 §10）

### 8.5 通用组件

- **按钮**：primary（accent 底白字）/ secondary（surface 底 border）/ ghost（无底）/ destructive（error 底，仅删除选中段用）；尺寸 h-40（默认）/ h-48（Export）；loading 态按钮内嵌 16px 转圈 + 禁点
- **Toast**：右下（桌面）/ 顶部下滑（移动），4s 自动消失，`aria-live="polite"`
- **Modal**：仅用于「更换文件确认」等破坏性确认，居中，ESC/遮罩可关
- **FAQ 手风琴**：`<details>` 原生实现（零 JS），FAQPage schema 必配
- **TrustBadge**：盾形图标 + 一句话，出现在 dropzone 底部和页脚
- **Related Tools 卡**：Phosphor 图标 + 工具名 + 一行描述，grid 不对称布局

---

## 九、页面模板（工具落地页 anatomy）

```
┌──────────────────────────────────────────────┐
│ logo  [Tools ▾]              [dark] [GitHub] │  sticky, h-64, 无登录按钮
├──────────────────────────────────────────────┤
│ Audio Trimmer                                │  H1 36px, 左对齐
│ Trim music & voice tracks in your browser.   │  副标 16px text-2, 含主关键词
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │        DROPZONE / WAVEFORM EDITOR        │ │  首屏完整可见（桌面 900px 内）
│ │   (空态→波形→选择→导出 全程在此)           │ │
│ └──────────────────────────────────────────┘ │
│  [Keep ▾]  [Fade ✓] [Vol ──○──]  [Export]   │  操作栏
├──────────────────────────────────────────────┤
│ 🛡 Processed locally · Free · No signup      │  trust strip (3 项，图标非 emoji)
├──────────────────────────────────────────────┤
│ How to trim audio                            │  How-to：3 步，每步一句
│ 1. Drop your file  2. Drag to select  3. ... │  HowTo schema
├──────────────────────────────────────────────┤
│ FAQ                            [4–6 条]      │  FAQPage schema, details 元素
├──────────────────────────────────────────────┤
│ Related tools                                │  不对称 grid，内链
│ [Audio Cutter]      [MP3 Cutter] [Joiner]    │
├──────────────────────────────────────────────┤
│ footer: 工具索引 · About · Privacy · llms.txt│  全站工具内链网
└──────────────────────────────────────────────┘
```

- **广告位（后期）**：只允许出现在 how-to 与 FAQ 之间、related 之后，且**预留固定尺寸容器防 CLS**；工具区 600px 范围内永不放广告
- **Hub 首页**：H1 "Free Online Audio Editor" + 一句定位 + 工具矩阵（按 Cut / Convert / Effects / Record 分组的 bento 网格，每个工具卡=图标+名+一行）+ 1 段「为什么本地处理」+ FAQ

---

## 十、状态机与错误文案

**文件状态机**：`empty → decoding → ready → (playing ⇄ paused) → exporting → done/error`
- decoding：波形区 skeleton + 文件名 + 大小
- ready：自动播放一次选中提示动画（虚线框示意拖拽），非模态

**键盘**：Space 播放/暂停 · S 在播放头切开 · Del 删除选中 · ←/→ 微移 0.1s（+Shift 1s）· +/- 缩放 · Cmd/Ctrl+Z 撤销（至少 20 步）

**错误文案（EN，动词开头+出路）**：

| 场景 | 文案 |
|---|---|
| 格式不支持 | "This file type isn't supported. Try MP3, WAV, M4A, OGG, or FLAC." |
| 解码失败 | "This file appears to be corrupted, or its codec isn't supported by your browser." |
| 文件过大 | "Files over 60 minutes may run out of browser memory. Try a shorter file." |
| 导出失败 | "Export failed — likely due to memory. Try MP3 128 instead of WAV." |

---

## 十一、文案规范（UX Writing）

- 动词开头、第二人称、具体名词；禁 "Seamless / Elevate / Unleash / Next-gen / Empower"
- 隐私标准句（全站统一，可翻译）："Your audio is processed entirely in your browser. Nothing is uploaded to a server."
- 按钮永远说动作不说概念："Export MP3" 不是 "Submit"；"Drop a file" 不是 "Get started"
- 空态示例："Drop an audio file, or click to browse — MP3, WAV, M4A and more."
- 数字真实：不用假评分假用户数；社证只用于真实存在的东西（开源仓库 star 等）

---

## 十二、无障碍（WCAG 2.1 AA）

- 对比度 ≥4.5:1（teal-600 on white = 4.54:1 达标；teal-400 on zinc-950 达标）
- `:focus-visible` 2px `--accent` ring + 2px offset，全组件
- 波形编辑器提供键盘等价物：start/end 数值输入框（精确模式）+ 快捷键
- 状态变化 `aria-live="polite"`（导出进度、错误）
- 图标全部带 `aria-label` 或 `aria-hidden`（装饰性）
- 触控目标 ≥44×44px

---

## 十三、性能预算（= SEO 生死线，设计需遵守）

| 指标 | 预算 |
|---|---|
| LCP | < 2.0s（4G 中端机） |
| INP | < 200ms |
| CLS | < 0.05（波形/广告位固定高度） |
| 首屏 JS | < 90KB gzip（编辑器内核独立 chunk 懒加载，dropzone 先行可交互） |
| 字体 | 2 个 woff2（Geist 400/600 + Geist Mono 500）subset + preload + swap |
| 图片 | 首屏零图片（logo 内联 SVG；不买 stock 图） |
| 动画库 | 0（纯 CSS + rAF）；lamejs/ffmpeg.wasm 仅在点击导出/转换时加载并提前 toast 预告 |

---

## 十四、Design Tokens 落地

以 CSS variables 为单一事实源，Tailwind 主题引用：

```css
:root {
  --bg: #fafafa; --surface: #ffffff; --surface-2: #f4f4f5;
  --border: #e4e4e7; --text: #18181b; --text-2: #52525b;
  --accent: #0d9488; --accent-hover: #0f766e;
  --accent-soft: rgba(13,148,136,0.12);
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px;
  --shadow-card: 0 8px 24px -8px rgba(9,9,11,0.08);
  --ease-out: cubic-bezier(0.16,1,0.3,1);
  --dur-fast: 150ms; --dur-base: 250ms;
}
[data-theme="dark"] { /* 见 §三 Dark 表 */ }
```

图标统一 **Phosphor Icons**（tree-shakeable，strokeWidth 全站统一 1.5）。

---

## 十五、全局禁忌清单

1. 禁 emoji（UI、代码、alt 全部；用 Phosphor）
2. 禁 Inter 字体、禁衬线体（软件界面）
3. 禁紫色/蓝紫渐变/霓虹 glow/渐变文字/纯黑
4. 禁三等分卡片行、禁居中 hero 大字报
5. 禁注册墙、禁 cookie 横幅挡工具、禁工具区附近广告
6. 禁假数据假评分
7. 禁 h-screen、禁 calc 布局减法、禁动画 left/top/width/height
8. 禁无空态/加载态/错误态的组件
