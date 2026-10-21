/**
 * Pick the writer persona for a new guide. Docs: docs/writer-personas.md,
 * structure ids: docs/content-types.md.
 *   node scripts/pick-persona.mjs                 # random from all
 *   node scripts/pick-persona.mjs --type how-to   # random among a fit
 *   node scripts/pick-persona.mjs --seed 42       # reproducible pick
 *   node scripts/pick-persona.mjs --id skeptic    # show one card
 */
const PERSONAS = [
  { id: 'engineer', name: 'engineer — 录音师', summary: '信号链上发生了什么，数字说话；结论先行，写明边界。', types: ['alternatives', 'troubleshooting', 'definition', 'pillar'] },
  { id: 'podcast-producer', name: 'podcast-producer — 播客制作人', summary: '发布流程里这一步占几分钟；场景、步骤带时间成本。', types: ['how-to', 'pillar'] },
  { id: 'bedroom-musician', name: 'bedroom-musician — 卧室音乐人', summary: '从音乐创作的下一步出发；抓哪段哪轨，导出直接进 DAW。', types: ['how-to', 'pillar'] },
  { id: 'phone-first', name: 'phone-first — 手机优先的普通用户', summary: '只有手机在手边怎么做完；分平台步骤，不假设有电脑。', types: ['how-to', 'best', 'device'] },
  { id: 'skeptic', name: 'skeptic — 怀疑派评测者', summary: '先质疑声明再实测；对比表是主场，结论跟证据走。', types: ['alternatives', 'troubleshooting', 'definition', 'best'] },
];

const TYPE_LABELS = {
  'how-to': 'How-to',
  alternatives: 'Alternatives / VS',
  troubleshooting: 'Troubleshooting',
  definition: 'Definition',
  best: 'Best 清单',
  pillar: 'Pillar',
  device: 'Device / format',
};

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf('--' + name);
  return i === -1 ? null : (args[i + 1] ?? fail('--' + name + ' 需要一个值'));
};

function fail(msg) {
  console.error('FAIL  ' + msg);
  process.exit(1);
}

/** Deterministic pick: string seed -> mulberry32. */
function rng(seed) {
  let h = 1779033703 ^ seed.length;
  for (const ch of seed) {
    h = Math.imul(h ^ ch.charCodeAt(0), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(pool, seed) {
  const r = seed === null ? Math.random : rng(seed);
  return pool[Math.floor(r() * pool.length)];
}

function show(p) {
  const fits = p.types.map((t) => TYPE_LABELS[t]).join('、');
  console.log(p.name);
  console.log('一句话：' + p.summary);
  console.log('适配结构：' + fits);
  console.log('完整角色卡（语气/结构/文笔/禁止/示例）：docs/writer-personas.md');
  console.log('');
  console.log('写作前：读 docs/i18n-translation-guide.md §8（底线，冲突时 §8 赢）。');
  console.log('指南 frontmatter 记下：persona: ' + p.id);
}

const id = flag('id');
if (id) {
  const p = PERSONAS.find((x) => x.id === id);
  if (!p) fail('没有这个角色，可选：' + PERSONAS.map((x) => x.id).join(', '));
  show(p);
} else {
  const type = flag('type');
  const seed = flag('seed');
  if (seed !== null && !/^-?\d+$/.test(seed) && seed.length === 0) fail('--seed 要数字或字符串');
  let pool = PERSONAS;
  if (type) {
    if (!TYPE_LABELS[type]) fail('没有这个结构，可选：' + Object.keys(TYPE_LABELS).join(', '));
    pool = PERSONAS.filter((p) => p.types.includes(type));
    if (pool.length === 0) fail(TYPE_LABELS[type] + ' 没有适配角色');
  }
  const chosen = pick(pool, seed);
  if (type) console.log('结构：' + TYPE_LABELS[type] + '（适配 ' + pool.length + ' 个角色）');
  if (seed !== null) console.log('种子：' + seed);
  console.log('');
  show(chosen);
}
