# Lighthouse 基线（Phase 0）

测试时间：2026-10-14 · 环境：本机 Chrome headless，Astro preview（本地，生产部署后需复测线上）
命令：`npx lighthouse <url> --only-categories=performance,accessibility,best-practices,seo`

## 结果

| 页面 | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| / | 100 | 100 | 100 | 100 | 1.2s | 0 | 0ms |
| /audio-trimmer | 100 | 100 | 100 | 100 | 1.4s | 0.008 | 0ms |
| /wav-to-mp3（Phase 1） | 100 | 100 | 100 | 100 | — | — | — |
| /guides/how-to-cut-a-song（Phase 1） | 100 | 100 | 100 | 100 | — | — | — |

全部满足并远超规范预算（LCP<2.0s、CLS<0.05、INP<200ms）。

## 修复记录

- 初测 Accessibility 95–96 分：① 浅色模式 ink3 灰（#a1a1aa）对比度不足 → 改为 #71717a（4.6:1）；
  ② dropzone aria-label 与可见文案不一致 → 对齐；③ **accent 色 #0d9488 上白字实际对比度仅 3.75:1**
  （规范 v1.0 中 4.54:1 的计算有误，那是 teal-600 作为文字色在白底上的值也不成立）→ 文字/按钮用
  teal-700 #0f766e（5.5:1），hover 用 teal-800 #115e59。UI 规范 §3 的色值以此为准。
- 引擎修复：`AudioBufferSourceNode.start()` 的 offset/duration 是缓冲区时间，不随 playbackRate
  缩放；此前变速导出会读取错误源区间，由新增的 speed ×2 回归测试（smoke-test.mjs）捕获并修复。

## 复测节奏

线上部署后复测一次（含真实 CDN/字体加载）；此后每月一次，重大改版后必测。
