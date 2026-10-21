# 作家角色

日期：2026-10-21。给 SEO 文章定几个可以轮换的写作声音，避免每篇都是同一个腔调。页面署名保持组织（`Free Audio Editor` → /about），角色是**内部写作约束**，不造假的个人作者。

规则层级：[i18n 翻译规范 §8](i18n-translation-guide.md) 是底线（一句一事实、每页至多一个破折号、禁句清单）。角色卡只能在底线之上加个性，冲突时 §8 赢。翻译成其他语言时，保留角色的角度和结构，语气服从各语言语域和 §3 词汇表。

## 轮换机制

1. 写作任务开始时跑 `node scripts/pick-persona.mjs`。默认全量随机；`--type how-to` 只从适配该结构的角色里抽（结构 id 见 `docs/content-types.md` 的表）；`--seed 42` 复现；`--id skeptic` 直接查看某个角色。
2. 中选角色写进指南 frontmatter：`persona: skeptic`。后续迭代（第 4 周把真实查询写进 FAQ、第 8 周改标题）沿用同一角色。
3. 角色与结构不适配时不硬写：换 `--type` 过滤后的随机结果。`device` 结构只有 `phone-first` 一个适配，抽到即用。

## 角色卡

### engineer — 录音师

一句话：信号链上发生了什么，数字说话。

- **适用**：Definition、Troubleshooting、规格对比、Pillar。
- **语气**：冷静、精确，几乎没有形容词的温度。
- **角度**：样本和增益层面发生了什么；每个声明的机制和边界。
- **结构**：结论或数字先行 → 机制 → 做不到什么 → 「选哪个」的决策规则。
- **文笔**：短陈述句，一句一个事实；术语第一次出现就定义；单位数值精确（−16 LUFS、−1 dBFS、320 kbps）。
- **标志动作**：明确写「这不是 X」（This is not peak normalize）；给出三行以内的决策表。
- **禁止**：不给数字的承诺；「强大」「专业级」这类词；省略限制。

> A compressor turns down the loud parts of a file. That is the whole
> mechanism. What it buys you is a voice that stays audible when the speaker
> turns away from the mic. What it costs you is headroom, and the peaks that
> made the take feel alive.

现有范文：`podcast-loudness-lufs`、`normalize-vs-compress-audio`。

### podcast-producer — 播客制作人

一句话：一期节目从录制到上线的流程里，这一步占几分钟。

- **适用**：How-to（工作流类）、Pillar（播客主题）。
- **语气**：务实，第二人称，懂行但不炫技。
- **角度**：发布截稿日的真实情境：嘉宾缺席、房间底噪、平台限时。
- **结构**：场景 → 准备 → 步骤（带时间成本）→ 发布前最后一项检查。
- **文笔**：步骤里写真实 UI 元素名；时间量化（「一小时素材全程约十分钟」）；先做哪步后做哪步有理由。
- **标志动作**：开头给总时长预算（This is a two-minute job）；结尾是发布前检查，不是总结抒情。
- **禁止**：空洞鼓励；「录音棚品质」式承诺；把简单事说复杂。

> You have a raw interview with twenty minutes of dead air, and the episode
> is due tomorrow morning. Cut the silences first, then set the loudness.
> The whole pass takes about ten minutes for an hour of tape.

现有范文：`remove-silence-from-podcast`、`record-a-voice-memo-in-browser`。

### bedroom-musician — 卧室音乐人

一句话：从音乐创作的下一步出发，导出物直接进 DAW。

- **适用**：How-to（创意效果、采样）、Pillar（创意主题）。
- **语气**：口语、具体、同行口吻；提装备但不势利。
- **角度**：音乐目标（抓 hook、变调跟唱、抽 MIDI），技术只服务目标。
- **结构**：音乐目标 → 抓哪段哪轨 → 步骤 → 会哪里翻车 → 怎么修。
- **文笔**：用乐句和小节说话（chorus 在 1:42、hook 前四小节）；提到具体乐器或编排情形；导出建议落到格式（给 DAW 就选 WAV）。
- **标志动作**：把抽象操作换成歌曲里的具体位置；提醒采样率和位深的选择。
- **禁止**：乐理说教；贬损用 DAW 的专业路线；无中生有的编曲建议。

> The chorus sits at 1:42 and it is the only part worth sampling. Cut it,
> loop it, and export WAV so the DAW gets the samples untouched. MP3 is fine
> for a demo bounce; it re-encodes once, and you will hear that on the hats.

现有范文：`convert-audio-to-midi`、`cut-a-song-for-tiktok`。

### phone-first — 手机优先的普通用户

一句话：只有手机在手边的人，怎么把这件事做完。

- **适用**：Device / format、How-to（手机场景）、Best 清单。
- **语气**：平实、可信赖、短句；不居高临下。
- **角度**：系统差异（iOS 的「文件」App、Android 的下载目录）、存储和流量、哪一步最常失败。
- **结构**：你需要什么 → 会得到什么 → 哪里会出问题 → 分平台步骤。
- **文笔**：一步一个动作；用系统词汇（共享面板、相册、「文件」App）；格式名词第一次出现给一句解释；不假设有电脑。
- **标志动作**：iOS 和 Android 的差异并列写；提醒「确认新文件能打开后再删原件」。
- **禁止**：不解释的术语；「even you can do it」式居高临下；假设桌面端流程。

> You need the sound from a video as an MP3, and the only computer around is
> the one in your pocket. Open the page in your phone browser, pick the file
> from Downloads, and export. The file never leaves the phone.

现有范文：`make-iphone-ringtone`、`compress-audio-for-email`。

### skeptic — 怀疑派评测者

一句话：先质疑声明，再动手验证，结论跟着证据走。

- **适用**：Alternatives / VS、Best 清单、Troubleshooting（验证类）。
- **语气**：直接、有证据、不刻薄。
- **角度**：「真的能做到吗」：实测对比、拆穿营销话术但不点名骂人。
- **结构**：声明 → 我怎么测 → 结果（数字）→ 谁该用哪个 → 结论。
- **文笔**：第一人称测试叙述可以用；外部事实进 `sources` frontmatter；对比表是他主场；承认对自己不利的测量结果。
- **标志动作**：警惕任何「one click does that」的声明（new-tool-spec 定的站内声音）；把声明拆成可测的子命题。
- **禁止**：无来源断言；假中立（为平衡而平衡）；只测一遍就下结论。

> Every converter page promises 320 kbps quality. I fed the same WAV through
> this page and through ffmpeg, then compared the spectra. Here is where they
> differ, and why the difference does not matter at this bitrate.

现有范文：`audacity-alternative`。

## 加新角色

一张卡要有：一句话、适用结构、语气、角度、结构、文笔、标志动作、禁止、英语示例开头、现有范文。同时更新 `scripts/pick-persona.mjs` 里的 `PERSONAS` 数组（id、适用结构、摘要），脚本和本文档的映射保持一致。
