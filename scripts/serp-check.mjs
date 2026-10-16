/**
 * SERP/head check over the built site in dist/.
 * Flags: over/under-length titles & descriptions (CJK counts double), duplicate
 * titles or descriptions within a locale, missing/!self canonicals, hreflang
 * sets missing self or x-default, multiple H1s, and sitemap clusters that miss
 * x-default. Run after `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = new URL('../dist', import.meta.url).pathname;
let failures = 0;
const fail = (msg) => {
  failures++;
  console.log('FAIL  ' + msg);
};

/** Approximate SERP width: CJK & fullwidth chars count as 2, others as 1. */
const width = (s) => [...s].reduce((w, ch) => w + (/[\u1100-\u115F\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6\u3000-\u303F\u4E00-\u9FFF\u3040-\u30FF]/.test(ch) ? 2 : 1), 0);

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.html')) files.push(p);
  }
})(dist);

const byLang = new Map();
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file);
  // Skip redirect stubs (meta-refresh) and raw verification files — not real pages
  if (html.includes('http-equiv="refresh"') || !html.includes('<html')) continue;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const lang = html.match(/<html lang="([^"]*)"/)?.[1] ?? '??';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const hreflangs = [...html.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g)].map((m) => [m[1], m[2]]);
  const h1s = (html.match(/<h1[ >]/g) ?? []).length;
  const noindex = /<meta name="robots" content="noindex/.test(html);

  if (!title) fail(`${rel}: no <title>`);
  if (!desc) fail(`${rel}: no meta description`);
  if (title && width(title) > 62) fail(`${rel}: title too long (${width(title)} units): ${title}`);
  if (title && width(title) < 15) fail(`${rel}: title too short (${width(title)} units): ${title}`);
  if (desc && width(desc) > 162) fail(`${rel}: description too long (${width(desc)} units): ${desc}`);
  if (desc && width(desc) < 50) fail(`${rel}: description too short (${width(desc)} units)`);
  if (h1s !== 1) fail(`${rel}: ${h1s} <h1> elements`);
  if (!canonical && !noindex) fail(`${rel}: no canonical`);
  if (canonical && !noindex) {
    const pageUrl = 'https://freeaudioeditor.online/' + rel.replace(/\.html$/, '').replace(/index$/, '');
    const canonNoTrail = canonical.replace(/\/$/, '');
    const pageNoTrail = pageUrl.replace(/\/$/, '');
    if (canonNoTrail !== pageNoTrail && !noindex) fail(`${rel}: canonical ${canonical} != page ${pageUrl}`);
  }
  if (!noindex && hreflangs.length > 0) {
    const self = hreflangs.find(([, href]) => href.replace(/\/$/, '') === canonical?.replace(/\/$/, ''));
    if (!self) fail(`${rel}: hreflang set missing self-reference`);
    if (!hreflangs.some(([l]) => l === 'x-default')) fail(`${rel}: hreflang set missing x-default`);
  }
  const list = byLang.get(lang) ?? [];
  list.push({ rel, title, desc });
  byLang.set(lang, list);
}

for (const [lang, pages] of byLang) {
  const seenT = new Map();
  const seenD = new Map();
  for (const { rel, title, desc } of pages) {
    if (seenT.has(title)) fail(`[${lang}] duplicate title: ${rel} == ${seenT.get(title)}`);
    seenT.set(title, rel);
    if (desc && seenD.has(desc)) fail(`[${lang}] duplicate description: ${rel} == ${seenD.get(desc)}`);
    seenD.set(desc, rel);
  }
}

// Sitemap: every cluster carries x-default and only indexable local URLs
const smPath = path.join(dist, 'sitemap-0.xml');
if (fs.existsSync(smPath)) {
  const xml = fs.readFileSync(smPath, 'utf8');
  const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  const norm = (u) => u.replace(/\/$/, '');
  const built = new Set(files
    .filter((f) => !fs.readFileSync(f, 'utf8').includes('http-equiv="refresh"'))
    .map((f) => norm('https://freeaudioeditor.online/' + path.relative(dist, f).replace(/\.html$/, '').replace(/index$/, ''))));
  let noXd = 0;
  let badHref = 0;
  for (const u of urls) {
    const loc = norm(u.match(/<loc>([^<]*)<\/loc>/)?.[1] ?? '');
    const alts = [...u.matchAll(/hreflang="([^"]*)" href="([^"]*)"/g)].map((m) => [m[1], m[2]]);
    if (alts.length > 0) {
      if (!alts.some(([, h]) => norm(h) === loc)) badHref++;
      if (!alts.some(([l]) => l === 'x-default')) noXd++;
    }
    for (const [, h] of alts) {
      if (!built.has(norm(h))) badHref++;
    }
  }
  if (noXd > 0) fail(`sitemap: ${noXd}/${urls.length} URLs missing x-default`);
  if (badHref > 0) fail(`sitemap: ${badHref} alternate/self refs not matching built pages`);
  console.log(`sitemap: ${urls.length} URLs checked`);
} else {
  fail('dist/sitemap-0.xml not found (run npm run build first)');
}

console.log(`${failures === 0 ? 'PASS' : 'FAIL'} — ${files.length} pages, ${failures} issue(s)`);
process.exit(failures === 0 ? 0 : 1);
