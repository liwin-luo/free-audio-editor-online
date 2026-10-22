# 内容类型

日期：2026-10-21。细化 [SEO 规则](seo.md) 里的页面分工；选题和优先级看[内容路线图](plans/2026-10-21-content-tool-page-roadmap.md)；每篇文章由哪个声音执笔，看[作家角色](writer-personas.md)。规则冲突时，以 seo.md 和 new-tool-spec 为准，本文只做地图和补充。

## 页面类型

站上一共 6 种对外页面类型。404 一律 `noindex`，不算内容类型。

| # | 类型 | URL | 结构化数据 | 硬规则出处 |
|---|---|---|---|---|
| 1 | 工具页 | `/{slug}`，翻译 `/{locale}/{slug}` | `WebApplication` + `HowTo` + `FAQPage` + `BreadcrumbList` | [new-tool-spec](new-tool-spec.md) |
| 2 | 分类 Hub | `/tools/{category}` | `CollectionPage` + `ItemList` + `BreadcrumbList` | 路线图 §3 |
| 3 | 工具总览 | `/tools` | `CollectionPage` + `ItemList` | [seo.md](seo.md) |
| 4 | 指南 | `/guides/{slug}` | `Article` | seo.md + 本文 |
| 5 | 指南索引 | `/guides` | `CollectionPage` | — |
| 6 | 信任页 | `/about`、`/editorial`、`/privacy`、`/contact` | — | — |

分工一句话：**交易型查询由工具页承接，深度信息型查询由指南承接，浏览型查询由两级 Hub 承接**。对比表只出现在指南（`alternatives / vs`），工具页的 FAQ 继续承担「和兄弟页差在哪」。

### 各类型的边界

1. **工具页**：字段级硬规则（title、description、HowTo、FAQ 五类）都在 new-tool-spec，不让步。作家角色只影响 `intro`、`uses`、FAQ 答案的措辞温度——数字和限制照写。旗舰 10 页有适用/不适用块和规格表（路线图 §4），事实必须可验证。
2. **分类 Hub 和工具总览**：模板化输出，不派角色。只列工具卡、相关指南、相邻分类，不写长正文，否则制造和工具页抢意图的同质页。
3. **指南索引**：列表页。每个指南必须先在这里有卡片（`src/data/guides.ts`），再建 markdown。同一改动里还要在同文件的 `GUIDE_TOOL` 登记它支撑的工具：工具页底部的相关指南块由这个映射驱动，frontmatter 的 `tool` 字段不驱动它，漏登记就是断内链（10-21 批次 19 篇踩过）。
4. **信任页**：服务 E-E-A-T，不追搜索词，不派角色，保持事实更新即可（`/editorial` 说明测试方法，指南的 `sources` frontmatter 指向它）。

## 指南的七种结构

路线图 §5 定的七种，这里是执行细则。一个 URL 只服务一个主关键词；工具页已有 HowTo 的关键词，指南换场景或换问题，不做同关键词文章。

| 类型 | 目标查询 | 结构 | 正文长度 | 首选角色 |
|---|---|---|---|---|
| How-to | how to X / X online | 结果 → 准备 → 3–5 步 → 常见错误 → 工具 CTA | 900–1,400 词 | `podcast-producer`、`bedroom-musician`、`phone-first` |
| Alternatives / VS | X alternative / X vs Y | 结论 → 对比表 → 各自适合谁 → 迁移 | 1,200–1,800 词 | `skeptic`、`engineer` |
| Troubleshooting | why is X / X not working | 症状 → 快修 → 原因 → 步骤 → 预防 | 900–1,400 词 | `engineer`、`skeptic` |
| Definition | what is X | 两句定义 → 为什么重要 → 示例 → 工具 | 800–1,200 词 | `engineer`、`skeptic` |
| Best 清单 | best free X | 入选方法 → 对比表 → 短评 → 结论 | 1,200–1,800 词 | `skeptic`、`phone-first` |
| Pillar | X guide | TOC → 3,000+ 词 → 集群内链 | 3,000+ 词 | `engineer`、`podcast-producer`、`bedroom-musician` |
| Device / format | convert X on iPhone/Mac | 平台差异 → 步骤 → FAQ | 900–1,400 词 | `phone-first` |

已发样例：definition——`what-is-dbfs`；alternatives——`wav-vs-mp3`、`123apps-alternative`；troubleshooting——`car-stereo-wont-play`；how-to——`how-to-trim-audio`；device——`trim-audio-on-iphone`。写前先看同结构的现稿。

通用要求（seo.md 已有，这里汇总）：首段链主工具；`sources` frontmatter 引外部事实；做不到的事写明并指向兄弟页；英文/西语/德语按翻译规范出 `sections`。

补充两条按结构的细则：

- **Best 清单必须有入选方法**（测了什么、为什么这几条进表），否则就是凑数清单，宁可不做。
- **Device / format 过唯一性门槛才发**：和母篇正文至少 40% 不同、独立截图、独立 FAQ（路线图 §7）。

## 角色怎么进场

1. 选题确定后，按上面的表知道该类目有哪些角色。
2. 跑 `node scripts/pick-persona.mjs --type how-to`（结构 id 见脚本内映射），从适配该结构的角色里随机抽一个；`--seed 42` 可复现，`--id skeptic` 直接查看。
3. 中选角色写进指南 frontmatter：`persona: skeptic`。第 4 周改 FAQ、第 8 周改标题时沿用同一角色，别换声音。
4. 角色只定义英语源稿。翻译按 [i18n 翻译规范](i18n-translation-guide.md)：保留角色的角度和结构，语气服从各语言语域（zh 你、ja ですます……），术语走 §3 词汇表。
