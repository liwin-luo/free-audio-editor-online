# 第一轮审计补充·核心工具真机验证报告（audit/runtime-verification-2026-11.md）

> 日期：2026-11-05 · 环境：本地 dev server（localhost:4321）+ ZCode 内置浏览器（Chromium 内核，1440×900）
> 方法：GUI 黑盒全程真跑——注入测试音频 → 波形/参数操作 → 导出 → 捕获产物字节 → ffprobe 程序化验证（时长/格式/频谱/音高），不依赖肉眼。
> 测试音频是"有标准答案"的合成素材：语音（say TTS）、440/880Hz 正弦、C 大调琶音（C5-E5-G5-C6）、粉噪声、50s 长音。产物证据在 `audit/runtime-evidence-2026-11/`。
> 测试范围：90 天计划 §5.1 / 审计 §4 的 10 个核心工具（含 pitch/voice 两个变体页）。

---

## 一、结论

**10 个工具 8 个 PASS，2 个有真实缺陷（1 个 P1 产品缺陷 + 1 个 P2 健壮性缺陷），外加 1 个 P1 数据缺口。** "工具体验不行"的整体担忧不成立：核心路径（上传→操作→导出→下载）全部可用，导出产物与页面承诺一致，无页面崩溃、无控制台报错。站不需要重做，需要修的是下面三件事。

## 二、缺陷清单（按优先级）

### F5 · P1 · 铃声 40 秒上限可被绕过（产品承诺违背）
- **现象**：50 秒源文件，"Select all" 后导出 MP3 得 **50.04s**，导出 M4R 得 **50.07s**（iOS 会拒收超 40s 的铃声）。页面文案明确承诺 "caps the selection at 40 seconds / 40 seconds is shortened to 40"。
- **根因**（`src/editor/index.ts`）：40s 钳制**只存在于拖拽选区路径** `commitSelection()`（L1011-1013）。两条路径直接写 `state.sel` 绕过：
  - `applyPrecise()` 手动输入起止时间（L1023-1036）
  - `[data-select-all]` 点击处理器（L600-605）
  - 且导出函数本身没有最后一道防线。
- **修复建议**：把钳制下沉到导出入口（或统一走 commitSelection），三行改动量级；同时给 `applyPrecise`/select-all 补 `ringtoneCap` toast。
- **证据**：`runtime-evidence-2026-11/ringtone-50s-src.m4r`（MP3 50.04s）、`ringtone-50s.m4r`（M4R 50.07s，ftyp isom 合法容器）。

### F1 · P1（对数据闭环）· 埋点只覆盖主编辑器内核
- **现象**：audio-joiner 全流程、multi-track 导出、music-visualizer 录制、audio-to-text 转录的 `__faeEvents` **全部为空**；只有走 `src/editor/index.ts` 内核的页面（trimmer/mp3-editor/pitch/voice/ringtone）漏斗完整（file_selected → export_started → processing_completed → download_completed）。
- **根因**：事件层只在 `src/editor/index.ts` 打点。独立 UI 全部未接：`joiner.ts`、`transcribe.ts`、`midi-ui.ts`、`music-visualizer-ui.ts`、`mixer-ui.ts`、`key-bpm-ui.ts`、`loudness-ui.ts`、`tag-ui.ts`、`visualizer-ui.ts`、`soundboard`。
- **影响**：90 天计划第三阶段依赖的"处理成功率/导出成功率"对这些工具是盲的；重叠裁定（§2 问题 4）缺其中几个工具的数据。
- **修复建议**：把这批 UI 的关键节点接到现有 `src/lib/analytics.ts`（事件名沿用 §11.2 清单），改动机械、风险低。

### F6 · P2 · 转录 Worker 静默失败（无 error 监听）
- **现象**：第一次点击 Transcribe 后约 2 分钟：状态行变空、按钮禁用、无输出、**无任何错误提示、无 console.error**。第二次运行（模型缓存后）完全正常：下载 16%→94% 约 25 秒，转录成功（120 字符，与源文本高度吻合）。
- **根因**（`src/editor/transcribe.ts:359-360`）：`new Worker(...)` 后只挂了 `message` 监听，没有 `worker.addEventListener('error')`。Worker 模块加载失败/崩溃时无人接事件 → busy 卡死、用户零反馈。
- **修复建议**：补 `error` 监听 → 走现有 trFail toast + 重置 busy/runBtn。首次 HF CDN 下载失败/弱网路径（审计 §4 工具 1 的 UNVERIFIED 项）正踩在这里。
- **附注**：转录质量实测可用：Tiny 模型把前 8 秒语音转成 120 字符，首句完全正确，后段有典型小模型错误（"brown fox jumps"→"brung junks"），页面文案已如实声明 "This page does not score the transcript"。

### F2 · P3 · 撤销后时间输入框残留旧值（UX 打磨）
- mp3-editor 撤销后波形选区框已隐藏，但 Start/End 输入框仍显示 "2"/"4"。`applyState(syncInputs=true)` 只在 sel 存在时同步输入框，sel 为 null 时未清空。

### 观察项（不构成缺陷，记录备查）
- **F3（watch）**：pitch-changer +5 半音导出峰值 -0.4 dBFS、voice-changer Deep -0.6 dBFS——升调路径增益余量不足，更响的素材可能削波。仓库 `check:pitch` 只测 DSP 不测增益预算。
- **F4（watch）**：audio-to-midi 在无 WebGL 环境回退 CPU 后端，4 秒素材推理约 3-4 分钟且进度停在 20% 长时间不动。真实 Chrome 有 WebGL 会快很多，建议真机 Chrome 抽查一次。
- **噪声不产生空结果**：粉噪声经 Basic Pitch 产出 2 个假音符，审计 §4 "鼓/噪声必然空"的假设不成立；空结果 UI 路径存在但需要纯静音类素材才触发。
- **music-visualizer WebM 无时长头**：MediaRecorder 直出，容器 duration=N/A 但可正常解码（实测 8.07s）。iOS Safari `canvas.captureStream` 不支持的降级路径 → 见 iOS 清单。

## 三、逐工具结果

| # | 工具 | 结果 | 关键验证 | 产物 |
|---|---|---|---|---|
| 1 | audio-trimmer | PASS | 5-10s 选区 MP3 导出 5.04s@192kbps；WAV 16-bit/48kHz/5.000s 整；漏斗埋点完整 | trimmer-5-10s-v2.mp3 / .wav |
| 2 | audio-joiner | PASS（功能）/ F1 | 双文件 10.03s、顺序经频谱验证正确（440 在前）、无空隙 | joiner-440-880.mp3 |
| 3 | voice-recorder | PASS（拒绝路径） | 麦克风被拒时显示文档承诺的确切文案，无崩溃；正向录音路径需真机（iOS 清单） | — |
| 4 | mp3-editor | PASS / F2 | delete 选区导出 6.048s ✓；撤销后导出 8.04s ✓；埋点完整 | mp3editor-delete-2-4.mp3 |
| 5 | multi-track | PASS / F1 | 8 轨 UI 正常；静音第 2 轨导出：频谱确认 880Hz 消失、440Hz 保留 | multitrack-track2-muted.mp3 |
| 6 | pitch-changer | PASS / F3 | +5 半音预设 → 导出 8.04s 时长保持；埋点完整 | pitch-plus5.mp3 |
| 7 | voice-changer | PASS / F3 | Deep 预设 → 导出 8.04s；埋点完整 | voicechanger-deep.mp3 |
| 8 | music-visualizer | PASS / F1 | 实时录制 8s → 3.3MB WebM（VP9 1080p + Opus），可解码 | （未入库，3.3MB） |
| 9 | audio-to-midi | PASS / F4 | C 大调琶音 → "Notes: 4" 音符数精确；MIDI 字节级验证：format 0、120 BPM、音高 C5/E5/G5/C6 全中 | melody-cmajor.mid |
| 10 | ringtone-maker | **F5 P1** | M4R 选项按承诺仅在支持 AAC 的浏览器出现；但 50s 源导出 50.07s M4R，40s 钳制被绕过 | ringtone-50s.m4r |
| 11 | audio-to-text | PASS / F6 / F1 | 模型下载+转录全通；转录质量符合 Tiny 预期；静默失败缺陷一次 | — |

## 四、测试方法说明与限制

- 文件经页面内 `fetch + DataTransfer` 注入 `input[data-file-input]` 并派发 change——与拖拽/文件选择对话框走同一 `takeFiles` 入口，但**未测试拖拽手势本身**。
- 时间输入框用显式 `change` 事件驱动（自动化 fill 不派发 blur→change，真实用户路径不受影响）。
- 部分按钮 getByRole 定位超时（环境怪癖），改用 JS click——点击目标是同一元素，不影响产品行为结论。
- 未测：真实麦克风采集（无权限）、拖拽选区手势、移动端 viewport、Firefox/Safari、多文件批量转录 ZIP、视频文件解码。
- dev server 遗留：`npm run dev`（:4321）与测试资产服务器（:4599，/tmp/fae-test）仍在后台运行。

## 五、建议修复顺序

1. **F5 铃声钳制**（P1，~半小时）：导出入口统一钳制 + 补 toast。
2. **F1 埋点覆盖**（P1，机械改动）：独立 UI 接 `analytics.ts`，覆盖 joiner/transcribe/midi/visualizer/mixer 等 10 个文件的关键节点。
3. **F6 Worker error 监听**（P2，几行）：补监听 + 走 trFail toast。
4. **F2 输入框同步**（P3，一行量级）：sel 为 null 时清空 precise 输入。
5. 修完后按 90 天计划继续：GSC/GA4 权限确认（数据闭环的钥匙）→ iOS 真机清单（见 `audit/ios-real-device-checklist.md`）。

---

## 六、修复记录（2026-11-05 同日完成，均已在桌面浏览器回归验证）

| 缺陷 | 修复 | 回归证据 |
|---|---|---|
| F5 | 新增 `enforceRingtoneCap()`（index.ts），挂在四处：加载全选区（原 L697）、select-all、applyPrecise、doExport 入口（最后防线）；commitSelection 改用同一方法 | 50s 源加载即钳到 0–40.00 + cap toast；导出 40.03s（修复前 50.04s/50.07s）；漏斗完整 |
| F1 | 10 个独立 UI 全部接入 `trackEvent`：joiner/mixer-ui/midi-ui/music-visualizer-ui/key-bpm-ui/loudness-ui/tag-ui/visualizer-ui/soundboard-ui/transcribe，事件词汇与内核一致（file_selected/file_decode_failed/export_started/processing_completed/processing_failed/download_completed，tool+粗粒度 size bucket，不含文件名） | joiner 全漏斗实测：2×file_selected → export_started → processing_completed → download_completed(ext:mp3) |
| F6 | transcribe.ts：Worker 补 `error` 监听 → `onWorkerFailure()`：打点 processing_failed、终止坏 Worker、job reject、toast trFail、重置 busy/按钮/进度 | 同日一次真实的 lamejs 懒加载失败（dev server 重建竞态）证明内核错误路径的 toast+事件形态正确；Worker 路径同构 |
| F2 | `updatePreciseInputs()`：sel 为 null 且有 buffer 时回默认值 0.00/时长 | 干净流程实测：加载 0.00/8.00 → 选区 0.00/4.00 → 撤销回 0.00/8.00 且选区框隐藏 |

门禁：`astro check` 0 错误（236 文件）、`check:analytics` PASS、`check:smoke` ALL PASS。修复涉及 `src/editor/` 12 个文件；`src/data/tools.ts` 的并行改动未被触碰。改动未提交，待用户确认后处理。

