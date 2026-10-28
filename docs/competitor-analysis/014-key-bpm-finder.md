# 轮次 014 · key-bpm-finder(规范报告 A–E)

日期:2026-10-28 · 我们页面:`/key-bpm-finder`(双功能单页) · 关键词:bpm finder + song key finder
采集上下文同 [001b](001b-serp-top10-reports.md)。原始数据:`raw/ss-bpm.html`、`raw/ss-key.html`、`raw/st-bpm.html`。

## 报告 A · SERP 竞争画像

- `bpm finder` 两次采样 Top9 完全一致;tunebat Analyzer(DJ 数据库品牌)#1、vocalremover 的 key-bpm 合并页 #2(与我们的单页双功能**同一形态**)、tap-BPM 计数器 ×2(不同意图)、freebeat(第七簇)、bpm-finder.net、rysup、keypitch、acestudio。无应用商店、无 AIO、无 Reddit。
- `song key finder`:tunebat 双条(#1+#8 数据库)、getsongkey、**LANDR samples**、voice.ai、Play 应用 ×1——DJ/制作生态词汇(Camelot、harmonic mixing)是暗线。
- **三家里只有 ST 的标题合并了 Key+BPM;SS 拆成两页(bpm-finder/key-finder)且都不在场**。市场在形态上站我们这边。

## 报告 B · 竞争页面分析表(已解析 3 页)

| 页面 | 字数 | Camelot 提及 | 要点 |
|---|---|---|---|
| SS bpm-finder / key-finder(两页,均不在场) | 716 / 792 | 0 / ×20 | 拆页;key 页带 Camelot;无 FAQ schema |
| ST bpm-detector(标题合并;不在场) | 1666 | ×39 | FAQ 11;Camelot 混音轴 |
| OURS | 790 | **×0** | 双功能单页;读文件即出结果 |
| tunebat / vocalremover / getsongkey / LANDR | 未逐页抓取 | — | tunebat=数据库型产品(不同品类但占位);记录为样本限制 |

## 报告 C · 差距矩阵(vs /key-bpm-finder)

| 维度 | 在场覆盖 | 我们状态 | 建议 | 置信度 |
|---|---|---|---|---|
| 双功能单页形态 | tunebat/vocalremover/rysup/ST 均合并 | 已具备(形态匹配) | — | 高 |
| **Camelot 记号** | ST ×39、SS key ×20;DJ 混音刚需 | **缺失**(×0) | **产品候选 P3**:由调性直接映射 Camelot 值展示(纯映射表,零算法成本),吃 harmonic mixing 长尾 | 高(缺口)/高(可行性) |
| tap BPM 计数意图 | 2/9(不同意图) | 不适用 | 不做 | 高 |
| 数据库型竞品(tunebat) | #1+#8 | 不同品类(库 vs 工具) | 不追 | 高 |
| 字数 | 716–1666 | 已具备(790 中游) | — | 中 |

## 报告 D · 实施任务清单

**产品候选卡(待拍板,未动手):**

**T-KB · 结果展示 Camelot 记号(P3,低成本)**:调性 → Camelot(如 C → 8B)纯映射展示在结果旁,页面加一句 DJ 混音用途说明 + FAQ 一条。依据:ST/SS 均覆盖、tunebat 整个业务建立其上、harmonic mixing 是该簇 DJ 侧刚需。成本:低。验证:`camelot` 类长尾曝光。

## 报告 E · 实验与跟踪

GSC 基线 `bpm finder` / `song key finder`;`tempo changer` 单词 SERP 仍未采样(累计待补)。
