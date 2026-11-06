# zh-first 文案风格线（2026-11-06 起）

> 用户指令：文案风格参考竞品样张（如何使用 / 为什么我们 / 使用场景 / FAQ / 相关工具），"风格排版文案线制定计划，然后一个个改，先只做中文版本，所有做完再翻译"。
> 本文件是该风格线的唯一规范 + 页面清单 + 进度标记。样板页：`/zh/silence-remover`（与样张同款工具，最易对照验收）。
> 配套：`docs/i18n-translation-guide.md` §8（声音规范）、`docs/plans/2026-11-05-seo-content-topics.md`（H2 层小词簇策略）。

## 一、定位：结构和模板已经对齐，改的是文案粒度

R15 的模板级重排已经把页面结构做成和样张一致的五段：**如何使用 → 为什么用我们 → 使用场景 → FAQ → 相关工具**。样张带来的增量全部在**文案与排版语言**：

| 区块 | 样张的做法 | 我们此前的差距 |
|---|---|---|
| 如何使用 | 4 步，每步点名具体控件（【检测片段】）、格式（MP3/WAV/M4A…）和参数，关键词突出 | 步骤泛述，控件不点名 |
| 为什么用我们 | 4 卡 = 2 个工具特色功能点 + 隐私 + 可调精度，标题 4–10 字 | 3 张通用卡（隐私/精度/移动端），所有页面一样 |
| 使用场景 | 6 张卡，「场景名：具体收益」，覆盖长尾场景词 | 3 条裸句子，无场景名 |
| FAQ | 问法覆盖机制/排障/替代/限制，答案带具体数字 | 已达标（保持） |
| 相关工具 | 名称 + 一句话 | 已达标（保持） |

## 二、逐区块规格（写 zh 时照此执行）

### 1. howTo（3–4 步，{name, text} 结构不变）
- 每步 = **动作动词 + 控件名 + 参数/格式 + 结果**。
- 控件名用「」直呼其名：`设「阈值」和「最短静音」`、`点「去掉静音」`——名字必须和界面 zh 文案一字不差（写前先 grep `src/i18n/zh.ts` 核对 label）。
- 枚举真实可选值和默认值：范围（−60 到 −20 dBFS）、默认（0.35 秒）、格式清单（MP3、WAV、M4A、OGG、FLAC）。
- 一步一个动作；下载/拿走文件单独成步（样张第 4 步模式）。
- 不写"简单三步搞定"类口号。

### 2. why（工具特色卡 ×2，模板自动补隐私+精度成 4 卡）
- 每卡 = `icon + 标题(4–10 字) + 一句机制`。机制句回答"怎么做到的 + 保证什么"，带数字。
- 选题 = 这个工具真正的差异点（参考 audit/runtime-verification 与 SEO 三议题的"三件套主张"），不与隐私/精度卡重复。
- icon 从 `src/components/Icon.astro` 现有名单选（常用：waveform / layers / zoom-in / scissors / lock-simple）。
- 不用 emoji（样张有 emoji，我们不引入——站点用 Icon 集，品牌一致）。
- 没写 why 的页面维持原 3 卡（隐私/精度/移动端），模板已兼容两种形态。

### 3. uses（≥3 条「场景名：具体收益」）
- 格式：`播客：把句子之间的长停顿收紧，导出一版不用逐段手剪的成片。`
- 场景名 2–5 字（播客/语音备忘/讲座录音/采访整理/视频旁白…），来源 = 该工具搜索意图的长尾场景词（竞品分析报告里挖过）。
- 冒号后 = 动作 + 结果，一句话，写具体产出（"成一版干净的成片"），不写形容词堆砌。
- 数量：核心工具 6 条，简单工具至少 3 条；en 保持 3 条不动（模板网格自适应条数）。
- `usesHeading` 改为关键词式：`{短工具名}的常见使用场景`（如"去静音的常见使用场景"），替换掉原先的创意型标题。

### 4. FAQ（保持现有数量与深度，只在风格偏离时微调）
- 我们的 FAQ 底子符合 §8（数字、直答、内链），通常不动。
- 检查三件事：答案里有真实数字；需要时内链相关工具页（`[去静音](/silence-remover)` 形式）；没有"您"。

### 5. 相关工具 / TrustBadge / specs / fits：不动（已达标）。

## 三、声音规范（§8 全文适用 + zh 补充）

1. 一句话一个事实；写得出数字就写数字（限制、码率、时长、控件上的标签）。
2. **zh 禁用"您"**（`FORBIDDEN[zh]` 硬校验）——样张的"您的音频"不能搬，用"你的/文件/录音"。
3. 控件与按钮用「」；格式与文件类型直接写大写缩写。
4. 每页至多一个破折号；禁"无论你是……还是……"。
5. 动词开头，结果收尾；不写营销腔（"强大/极速/一键搞定"）。

## 四、不动清单（SEO 头部资产）

- `title` / `description` / `h1` / `subtitle` / `heroAlt` / `intro` / `cardLine` / `dropHint` / `exportLabel`——本轮一律不改。
- URL、canonical、hreflang、schema、内链结构（FAQ 内链保持原样）。
- en 与其余 9 语言目录——翻译阶段才动。

## 五、机制：PENDING_I18N 与翻译阶段

- 每改一个 slug 的 zh 文案（uses/howTo 数量会偏离 en），把 slug 加进 `src/i18n/index.ts` 的 `PENDING_I18N`——parity 门禁对该 slug 放行，其余 10 语言继续渲染旧译本。
- 全部 zh 页面改完并验收后进入**翻译阶段**：以 zh 为源翻出 en + 其余 9 语言（en 的 uses 同步扩成场景格式、每工具补 why 卡），翻译完一个 slug 就从 `PENDING_I18N` 移除一个。
- `check:i18n` 在过渡期只报未改页面的真实缺口；PENDING slug 不再制造噪音。

## 六、页面顺序（逐个改，做完一个勾一个）

样板 ✓ → 声音簇 → 剪辑簇 → 变速调簇 → 转换簇 → 响度簇 → EQ 簇 → 效果簇 → 分析/其他。

- [x] 1. silence-remover（样板，2026-11-06）
- [ ] 2. noise-remover
- [ ] 3. voice-recorder
- [ ] 4. audio-to-text
- [ ] 5. audio-trimmer（zh 上轮已重写，对齐新格式：uses 场景化 + why 卡 + 步骤点名控件）
- [ ] 6. mp3-cutter
- [ ] 7. mp3-editor
- [ ] 8. ringtone-maker
- [ ] 9. audio-joiner
- [ ] 10. multi-track-audio-editor
- [ ] 11. split-mp3
- [ ] 12. fade-audio
- [ ] 13. change-audio-speed / tempo-changer
- [ ] 14. pitch-changer / voice-changer
- [ ] 15–24. 转换簇：wav-to-mp3、mp3-to-wav、m4a-to-mp3、flac-to-mp3、ogg-to-mp3、opus-to-mp3、mp4-to-mp3、extract-audio、bitrate-converter、compress-audio
- [ ] 25–29. 响度簇：normalize-audio、increase-volume、volume-booster、loudness-meter、compressor
- [ ] 30–34. EQ 簇：equalizer、bass-booster、treble-booster、high-pass-filter、low-pass-filter
- [ ] 35–46. 效果簇：echo、add-reverb、slowed-reverb、audio-distorter、bitcrusher、auto-panner、stereo-to-mono、reverse-audio、432-hz-converter、3d-audio、audio-looper、soundboard
- [ ] 47–52. 分析/工具：key-bpm-finder、metronome、tap-tempo、music-visualizer、waveform-generator、spectrogram-generator
- [ ] 53–57. image-to-audio、mp3-tag-editor、audio-to-midi、noise-remover 复验、全站终检

## 七、每页 DoD

- [ ] zh 文案按 §二 规格落盘（uses 场景化、howTo 点名控件、why 卡 ×2）
- [ ] slug 进 `PENDING_I18N`
- [ ] `astro check` 0 错误 + `check:i18n` OK
- [ ] `/zh/<slug>` 浏览器抽查：四区块渲染正常、场景名加粗、4 卡 why-us、无"您"
- [ ] `/en/<slug>` 抽查零回归（en 页保持 3 条 uses + 3 卡 why-us）

## 八、翻译阶段（zh 全部验收后启动）

以 zh 为源：en（场景 uses 扩量 + why 卡 + 步骤对齐）→ 其余 9 语言照 §8 翻译流程。每完成一个 slug 从 `PENDING_I18N` 移除；全清后门禁恢复全量 parity。样张排版语言（场景卡网格、4 卡 why-us）随数据自动生效，无需再动模板。
