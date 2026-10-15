# 声音转图片工具组方案 — waveform-generator + spectrogram-generator

> 状态：**PR1 已在工作区完成（未提交）**。调研结论见会话记录；本方案遵循 `docs/new-tool-spec.md`（一页一意图、同 PR 全语言、新 DSP 必带 check script）。
> 拆成 **两个页面**，因为波形图和频谱图是两个不同的搜索意图、两类不同的用户；底层共享一个可视化引擎。

> **实施进度**：`/waveform-generator` 已接线（11 语、PNG 导出，feature-check 2400×1260）。`/spectrogram-generator` 仍是下一步（FFT + check script + 第二页）。已写入的文件：
> - `src/editor/visualizer.ts` — 波形图渲染引擎（bars/envelope、透明背景、canvasToPng）
> - `src/editor/visualizer-ui.ts` — 可视化岛逻辑（解码/预览/尺寸/导出 PNG；spectrogram 分支留待 PR2）
> - `src/components/editor/VisualizerEditor.astro` — 可视化组件（波形控件已就位，ToolPage 已接线）
> - `src/components/Icon.astro` — 追加 `image` 图标
> - `src/pages/waveform-generator.astro` — 页面包装器；10 语路由由 `[locale]/[slug].astro` 生成
> 待做（PR2）：`src/editor/spectrogram.ts`、`scripts/spectrogram-check.mjs`、`/spectrogram-generator` 页面与 11 语文案、llms.txt 频谱行。

---

## 0. 调研结论（为什么做这两个）

| 页面 | 主意图 | 需求证据 | 竞品格局 |
|---|---|---|---|
| `/waveform-generator` | 把音频渲染成波形图片（PNG） | Google 下拉词簇：audio waveform generator free/online、waveform image generator、mp3 to waveform png、wav to waveform png | AudioAlter 功能浅（仅颜色+尺寸）；Veed/Kapwing 视频向带水印；wav2png（GitHub 287★）是命令行 |
| `/spectrogram-generator` | 把音频渲染成频谱图（PNG），分析和"藏图"两用 | 下拉词簇：spectrogram generator from audio/online/free、audio to image spectrogram、sound to image decoder | SERP 全是专用工具（audiocipher.app、sonitools、pitchdetector、academo、Chrome Music Lab）→ 词有稳定流量 |

中文是空隙：百度下拉词成簇（音频转波形图、音频波形图生成器、频谱图在线生成、音频转频谱图）但缺专用在线工具，SERP 被下载站和教程占据。两页随 11 语全量上线即覆盖。

明确**不做**：AI 生成艺术画（需求弱、无工具型搜索）；频谱视频/动图导出；服务器端处理（违反全站 client-side 原则）。

---

## 1. 功能清单

### 1.1 共享可视化引擎（新增，两页复用）

| 模块 | 内容 | 复用/新增 |
|---|---|---|
| 文件解码 | 拖放/点选 → AudioBuffer，accept 与现有编辑器一致（MP3/WAV/M4A/OGG/FLAC/AAC + 常见视频容器） | 复用现有 decode 路径 |
| 波形计算 | `computePeaks()`（min/max 每列） | **已有** `src/editor/waveform.ts`，直接复用 |
| 离屏高清渲染 | 预览画布跟随容器；导出时按预设分辨率×2 超采离屏渲染（上限 16000px，沿用 MAX_CANVAS_WIDTH） | 新增（渲染函数参数化：画布、尺寸、配色） |
| 频谱计算 | STFT：radix-2 FFT 纯函数（约 60 行，零依赖，不引包）+ Hann 窗 + dB 转换 + 色表映射 | **新增** `src/editor/spectrogram.ts` |
| PNG 导出 | `canvas.toBlob('image/png')` → 触发下载 | 新增（图片输出是新的导出形态，不走 encoders.ts 音频编码） |
| 编辑器组件 | `VisualizerEditor.astro`：dropzone → 画布 → 控制条 → Download PNG。**无选区/裁剪/播放 UI**，比 AudioEditor 轻得多 | 新增组件 + `EditorConfig.visualizer: 'waveform' \| 'spectrogram'` 分支进 ToolPage |

**Check script（规范硬性要求）：** `scripts/spectrogram-check.mjs` —— 合成 1 kHz 正弦波，断言能量峰值落在对应频率 bin；合成白噪声，断言频带能量平坦。无 check script 不上线。

### 1.2 页面 A：`/waveform-generator`（先做）

- 样式：**镜像柱状**（SoundCloud 风）/ **连续填充** 两种
- 颜色：波形色 + 背景色（取色器，含主题预设）+ **透明背景**开关
- 尺寸预设：1920×1080（视频封面）、1080×1080（Ins）、1200×630（OG 图）、800×200（横幅）、自定义宽高
- 所见即所得预览；导出 PNG（预设按 2× 分辨率渲染，如 3840×2160）

### 1.3 页面 B：`/spectrogram-generator`

- FFT 大小：1024 / 2048（默认）/ 4096
- 频率轴：**对数**（默认，音乐/语音友好）/ 线性
- 频率范围上限：默认 20 kHz，可收窄到特定频段
- dB 显示范围：floor（默认 −90）/ ceiling（默认 −20）可调 —— 对齐竞品参数话语，也是"藏图调亮"的实际需求
- 配色：viridis / inferno / 灰度
- 长文件保护：FFT 列数由输出宽度驱动（上限约 3000 列），成本有界；超长文件不加警告之外的特殊逻辑（与现有"约 1 小时"定位一致）
- 分块渲染 + 进度提示，不阻塞首屏（性能预算同现有页）

### 1.4 v1 明确不做（记录边界，FAQ 会写诚实边界）

- **Text→Audio / Image→Audio 藏字藏图**（AudioCipher 的反向玩法）——独立意图（image to audio converter），数据验证 PR2 后单独立项（见 §5 PR3）
- JPEG/WebP 导出、频谱叠加波形、多文件对比

---

## 2. 页面布局

### 2.1 沿用 ToolPage 骨架（结构零改动）

```
面包屑（Home / 工具名）
H1 + subtitle
┌─ VisualizerEditor ────────────────────────────┐
│ [dropzone 空态：拖入或点击选择，同现有文案风格]   │
│ [画布预览：深浅主题自适应，圆角容器]             │
│ [控制条：按页面类型显示 §1.2 / §1.3 的控件]      │
│ [主按钮：Download PNG（exportLabel）]          │
└───────────────────────────────────────────────┘
TrustBadge（100% 本地处理 / 免费 / 无水印）
intro 段落（2–3 句：做什么 + 场景 + 隐私事实）
"H2 usesHeading" + 3 条 outcome 式用途
HowTo（3–5 步，喂 HowTo schema）
FAQ（6 条，含规范强制 5 类）
RelatedTools（3 个）
```

### 2.2 编辑器区细节

- **控制条布局**：桌面单行分组（样式 | 颜色 | 尺寸）；移动端纵向堆叠，主按钮单手可达（规范 §4 移动优先）
- **画布**：空态显示 dropzone；加载后按容器宽自适应重绘；`ar` RTL 只影响控制条排版方向，canvas 内容不受影响（现有 `dir` 处理已覆盖）
- **文件信息行**：文件名 + 时长 + 采样率（与现有编辑器一致的信息展示）
- **错误态**：解码失败/文件过大复用现有 `decodeFail`/`tooBig` 文案键

---

## 3. SEO 布局

### 3.1 关键词与 SERP 文案（EN 草案，实现前按规范 §2 复核下拉词）

| | `/waveform-generator` | `/spectrogram-generator` |
|---|---|---|
| 主词 | audio waveform generator | spectrogram generator |
| 副词 | waveform image generator、mp3 to waveform png、song waveform generator | spectrogram from audio、audio to image spectrogram、spectrogram of a song online |
| title（≤60） | `Audio Waveform Generator — Waveform Image Online Free` | `Spectrogram Generator — Audio to Image Online Free` |
| description（≤155） | `Turn any song or recording into a clean waveform image. Pick colors, style and size, download a hi-res PNG — free in your browser, no upload.` | `Generate a spectrogram from any audio file and download it as PNG. Log or linear frequency axis, colormaps, dB control — free, nothing uploaded.` |
| H1 | Audio Waveform Generator | Spectrogram Generator |
| category | `effects`（见 §6 决策点 1） | `effects` |

### 3.2 FAQ 策略（每页 6 条，规范强制 5 类 + 1 条意图特有）

强制 5 类两页都写满：隐私（本地 Web Audio/Canvas 机制）、质量（渲染分辨率/PNG 无损/超采）、诚实边界（waveform 页：不是音频编辑，要剪辑去 audio-trimmer；spectrogram 页：不能反向从图还原音频）、兄弟消歧（**两页互为消歧对象**："波形图看振幅、频谱图看频率——要找藏在频率里的东西去 spectrogram 页"）、设备浏览器。

意图特有问题（也是长尾捕获）：
- waveform 页：`How do I make a waveform image for free?` / `Can I get a transparent background PNG?` / `What size should a podcast waveform cover be?`
- spectrogram 页：`What can I see in a spectrogram?`（讲到 Aphex Twin 藏图案例，覆盖 "hidden image in audio" 长尾）/ `Why do songs look different in a spectrogram?`
- 两页 FAQ 不得复用答案原文（规范 §2 同类页防自我蚕食）

### 3.3 Schema 与技术 SEO

- JSON-LD：WebApplication + HowTo + FAQPage + Breadcrumb —— ToolPage 现有管线自动生成，零改动
- canonical / hreflang（11 语 + x-default）/ sitemap alternates —— Base.astro + @astrojs/sitemap 自动，`seo-audit` 验证
- 内链：两页互进对方 `related` 首位（同 PR 加 reciprocal）；waveform 再连 `mp3-editor`、`audio-trimmer`；spectrogram 再连 `bass-booster`（频率话题邻接）
- `public/llms.txt`：`## Tools` 下加两行事实句
- 导航下拉 + 页脚列：由 `TOOLS` 注册表自动出现，确认即可
- 上线后循环（规范 §7）：Week 0 GSC 提交收录 → Week 4 把真实 query 折回 FAQ → Week 8 按 CTR/跳出改 title

---

## 4. 国际化方案（同一 PR，11 语全量）

### 4.1 机制（全部现成，零新基建）

- EN 文案进 `src/data/tools.ts` ToolDef（source of truth）
- 10 个 locale 各加 `tools[slug]` ToolCopy 到 `src/i18n/{es,pt,id,de,ko,ja,zh,fr,ru,ar}.ts`
- 编辑器新增共享文案键（画布/控件/导出提示等约 10 个）进 `EditorText` → 11 语同补；`assertCatalogs()` 构建期强制键一致，缺键即 build 失败（不绕过）
- 本地化按规范要求**围绕该语言的搜索词写**，不是英文字面翻译；实现前逐语用真实下拉词复核（zh 已验证，其余实现时核准）

### 4.2 各语目标词草案

| locale | waveform 页目标词 | spectrogram 页目标词 |
|---|---|---|
| zh | 波形图生成器 / 音频转波形图 | 频谱图在线生成 / 音频转频谱图（已验证） |
| ja | 波形ジェネレーター / 音声 波形画像 | スペクトログラム 作成 / スペクトログラム 無料 |
| ko | 파형 생성기 / 오디오 파형 이미지 | 스펙트로그램 생성기 |
| de | Wellenform-Generator / Audio-Wellenbild | Spektrogramm online / Spektrogramm erstellen |
| fr | générateur de forme d'onde | spectrogramme en ligne / générer un spectrogramme |
| es | generador de formas de onda / onda de audio imagen | espectrograma online / espectrograma de audio |
| pt | gerador de forma de onda / imagem de forma de onda | espectrograma online / espectrograma de áudio |
| ru | генератор формы волны / аудио в картинку | спектрограмма онлайн / спектрограмма аудио |
| id | generator gelombang audio / gambar gelombang musik | spektrogram online / spektrogram audio |
| ar | مولد الشكل الموجي / صورة شكل موجة الصوت | الرسم الطيفي للصوت / تحويل الصوت إلى صورة（RTL 全量过一遍真机） |

### 4.3 RTL 与术语一致性

- `ar`：控制条/按钮走现有 RTL 排版；取色器、下拉在 RTL 下的焦点顺序手测一次
- 共享 UI 术语沿用各语既有译法（导出、格式名、"never uploaded" 隐私句式），不新造词

---

## 5. 实施拆分（确认后执行）

| PR | 内容 | 验证 |
|---|---|---|
| PR1 | 可视化引擎基础 + `VisualizerEditor` + `/waveform-generator`（11 语全量） | pages-check、feature-check（新增 PNG 导出 E2E）、smoke-test、seo-audit 0 HIGH、Lighthouse 移动 ≥95、llms.txt、互链 |
| PR2 | `spectrogram.ts` FFT/STFT + `spectrogram-check.mjs` + `/spectrogram-generator`（11 语全量） | 同上 + check script 过 + 长文件分块渲染手测 |
| PR3（数据后决策） | Text→Audio / Image→Audio 藏字藏图页 | 依赖 PR2 的 GSC 表现，单独立项 |

## 6. 待确认决策点

1. **类目归属**：两工具都归 `effects`（零导航/页脚/11 语类目文案改动，"Effects & Studio" 语义可容）——推荐；备选：新增类目（改 CATEGORY_IDS + 11 语 labels，仅 2 个工具不值得，等第 3 个可视化工具再说）
2. **藏字功能（Text→Audio）不进 v1**——推荐按 PR3 独立决策；若你希望 v1 就带（传播卖点），PR2 范围扩大约一倍
3. **slug 确认**：`/waveform-generator` + `/spectrogram-generator`；备选 `/audio-to-image`（泛词但 SERP 被格式转换大站占据，不建议做主 slug）
