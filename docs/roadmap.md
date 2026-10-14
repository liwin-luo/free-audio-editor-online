# freeaudioeditor.online 路线图

版本：2026-10-14 · 前置文档：[竞品调研](competitor-research.md) / [UI-UE 规范](ui-ue-spec.md)
原则：先用低竞争词拿索引和首批排名 → 数据验证后加码 → 流量过门槛再变现。

---

## Phase 0 · 上线与收录（第 1 周）

目标：站点可访问、被搜索引擎发现、有度量手段。

- [ ] `git init` + 推 GitHub + Vercel Import + 绑定 freeaudioeditor.online（选定唯一 canonical 主机，另一个 301）
- [ ] Google Search Console 提交 sitemap-index.xml；Bing Webmaster Tools 同步提交（Bing 收录快，能提前验证关键词）
- [ ] **补 OG 分享图**（1200×630，当前缺失——静态导出 PNG 或构建时生成 SVG 转 PNG）
- [ ] 加一个轻量分析（自托管 Umami/Plausible 或 Vercel Web Analytics；规范约束：不收集个人数据，更新 /privacy 说明）
- [ ] PageSpeed Insights / Lighthouse 基线记录（LCP、CLS、INP），上线首周复测
- [ ] 手工回归：5 个工具页各跑一遍 smoke 流程 + 手机 Safari 真机测试

退出条件：GSC 显示页面已被收录（通常 3–10 天）。

## Phase 1 · P1 内容扩张（第 2–4 周）✅ 2026-10-14 完成

目标：把现有引擎能力覆盖到的词全部铺上页面，成本低、全是文案工作。

新增 4 页（每页 = tools.ts 加一个 ToolDef + 3 行 page 文件，sitemap/导航自动更新）：

| 页面 | 目标词（美区月搜） | 引擎支持 |
|---|---|---|
| /wav-to-mp3 | wav to mp3（33.1k，竞争 0） | ✅ 已上线（converter 模式） |
| /reverse-audio | reverse audio（2.4k，$4.95 CPC） | ✅ 已上线（快捷反转控件） |
| /change-audio-speed | change audio speed（2.4k） | ✅ 已上线（快捷变速滑杆） |
| /increase-volume | increase mp3 volume（2.9k） | ✅ 已上线（增益上限 400% + 限幅器 + soft clip） |

- [x] 4 页上线，每页独立文案/FAQ/HowTo
- [x] Hub 与全部页面交叉内链更新（导航/页脚/related 由 TOOLS 注册表自动生成）
- [x] /guides/ 深度内容 3 篇：《How to Cut a Song Online》《How to Make a Ringtone on iPhone》《How to Merge Songs into One Track》+ guides 索引页 + Article/Breadcrumb schema
- 注：原计划的 extract-audio 指南因功能尚未上线（P2），替换为 merge-songs 指南
- 验证：功能级 E2E（scripts/feature-check.mjs）8/8 —— MP3 经 CDN 编码导出、反转输出采样级比对、转换模式 UI；Lighthouse：wav-to-mp3 四项 100、guide 页四项 100

## Phase 2 · 技术重活 + 国际化启动（第 2–3 个月）✅ 核心项 2026-10-14 完成

目标：攻下最大的单一机会词，并开始非英语市场试探。

- [x] **/mp4-to-mp3 + /extract-audio**（16.5 万 + 1.5 万月搜）：~~ffmpeg.wasm~~ **改用浏览器原生解码方案**——decodeAudioData 直接解 MP4/AAC、WebM/Opus 音轨（Chrome/Firefox/Safari 实测通过），零 30MB 下载、移动端可用；仅极少数编解码器（AC3/DTS）不支持，FAQ 已如实说明。E2E：ffmpeg 生成真实 MP4 夹具 → 原生解码 → MP3 导出全链路通过
- [x] /voice-recorder（5.4k）：MediaRecorder（Chrome/Firefox 用 WebM/Opus，Safari 用 MP4/AAC）→ 停止后经 editor-load-file 事件载入下方编辑器 → 裁剪/导出。E2E 用 Chrome 假麦克风跑通全链路
- [x] /volume-booster（18.1k）：与 /increase-volume 同引擎不同定位（视频音轨 + 手机场景文案），400% 增益 + 限幅
- [ ] **国际化启动（数据触发：GSC 非英语国家展示 >20% 时执行）**：优先 ES/PT/ID/DE 四语言
- [ ] 深度内容每月 +2 篇

数据检查点（第 3 个月末）：至少 3 个词进 TOP 10；日 UV 破 100。

## 2026-10-14 提前落地

原计划里排到后面的几项，引擎已经够用，提前做完：

- [x] **/normalize-audio**（原 Phase 3 长尾）：峰值归一化，目标 −0.2 dBFS，增益上限 +12 dB。和手动增益不是一回事，文案里写明了。
- [x] **/slowed-reverb**：变速（音高跟着变）加合成混响尾音。速度高于 1× 即 nightcore。依据是年轻创作者的 slowed + reverb 用法，不是关键词表里的长尾补洞。
- [x] 铃声页 Chrome / Edge / Safari 17+ 直接导出 M4R；不支持的浏览器仍走 MP3 + GarageBand。
- [x] 两篇文字指南：`/guides/audacity-alternative`、`/guides/convert-video-to-mp3`。截图和旁白留到下一次媒体管线。

## Phase 3 · 增长与变现（第 4 个月起，流量触发制）

- [ ] **AdSense（触发：稳定日 UV ≥ 300）**：广告位只放 how-to 与 FAQ 之间、related 之后；工具区 600px 内永不放广告（规范铁律）；ads.txt
- [ ] **外链建设**：编辑器引擎开源到 GitHub（audiomass 模式——开源换 star 和外链，反哺域名权重）；Product Hunt 发布；Reddit（r/podcasting、r/androidapps、r/iphone 场景帖）
- [ ] **Pro 订阅调研（触发：日 UV ≥ 1000）**：候选增值点——批量处理、超大文件、AI 降噪（评估 WASM 模型可行性）、云端项目保存。竞品定价参照：123apps $6/月、cut.audio Pro 制
- [ ] 每月关键词扩展（seodata.dev 50 次/天额度）：从 GSC 真实查询词反哺新页面选题

## 持续运营节奏

| 频率 | 动作 |
|---|---|
| 每周 | GSC 看查询词与排名变化；E2E smoke test 回归（依赖升级后必跑） |
| 每月 | 关键词扩展 20–30 个新词入候选池；内容 +2 篇；CWV 复测 |
| 每季 | 竞品复盘（cut.audio / soundtools 上了什么新功能）；技术栈小版本升级 |
| 双周 | GSC：volume-booster 与 increase-volume 是否同一查询双排名，或展示被拆开。若是，收紧各自定位，或 301 合并到赢家 |

## 关键风险与对策

1. **Google 收录慢于预期** → Bing 先行验证内容质量；用 llms.txt 押注 AI 搜索入口
2. **ffmpeg.wasm 体积吓跑移动用户** → 单线程 + 进度条 + 「仅首次」提示；移动端默认只提供常见格式
3. **竞品 cut.audio 先做内容营销** → 我们的护城河是内容深度 + 多语言速度；每月复盘一次它的 /blog 和新落地页
4. **变现过早伤信任** → 所有变现严格走触发条件；工具区永远零广告
5. **volume-booster 与 increase-volume 互相蚕食** → 双周看 GSC。同一查询出现双排名或展示被拆开时，强化差异（视频/手机 vs 安静音频文件），或 301 合并到排名更好的那一页

## 里程碑目标（仅供参考，以数据为准）

- 第 1 个月：全部收录，长尾词开始有展示
- 第 3 个月：≥3 个词 TOP 10，日 UV 100+
- 第 6 个月：剪辑类头部词（mp3 cutter / audio trimmer）进 TOP 5，日 UV 500–1000，AdSense 上线
- 第 12 个月：美区词簇全覆盖（30+ 落地页），日 UV 3000+，Pro 订阅上线
