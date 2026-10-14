/**
 * Full-site SEO audit: crawls every page from the sitemap, checks
 * titles/descriptions/H1/canonical/OG/JSON-LD/alt text/internal links.
 * Usage: node scripts/seo-audit.mjs [baseURL]
 */
const BASE = (process.argv[2] ?? 'https://free-audio-editor-online.vercel.app').replace(/\/$/, '');

const issues = [];
const note = (severity, page, msg) => issues.push({ severity, page, msg });

const robots = await fetch(`${BASE}/robots.txt`).then((r) => r.text());
console.log('=== robots.txt ===\n' + robots);

const sitemapIdx = await fetch(`${BASE}/sitemap-index.xml`).then((r) => r.text());
const sitemapUrl = sitemapIdx.match(/<loc>([^<]+)<\/loc>/)?.[1];
const sitemap = await fetch(sitemapUrl).then((r) => r.text());
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`\n=== sitemap: ${urls.length} URLs ===`);

const seen = new Map(); // url -> {status, html}
for (const url of urls) {
  const res = await fetch(url);
  const html = await res.text();
  seen.set(url, { status: res.status, html });

  const get = (re) => html.match(re)?.[1]?.trim();
  const title = get(/<title>([^<]*)<\/title>/) ?? '';
  const desc = get(/<meta name="description" content="([^"]*)"/) ?? '';
  const canonical = get(/<link rel="canonical" href="([^"]*)"/) ?? '';
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]*>/g, '').trim());
  const ogTitle = get(/<meta property="og:title" content="([^"]*)"/);
  const ogImage = get(/<meta property="og:image" content="([^"]*)"/);
  const jsonld = [...html.matchAll(/application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => {
    try { return JSON.parse(m[1])['@type']; } catch { return 'INVALID'; }
  }).flat();
  const path = new URL(url).pathname || '/';
  const short = path === '/' ? 'HOME' : path;

  if (res.status !== 200) note('HIGH', short, `status ${res.status}`);
  if (!title) note('HIGH', short, 'missing <title>');
  if (title.length > 65) note('MED', short, `title ${title.length} chars (may truncate): "${title.slice(0, 70)}…"`);
  if (title.length < 30) note('LOW', short, `title only ${title.length} chars`);
  if (!desc) note('HIGH', short, 'missing meta description');
  if (desc.length > 165) note('MED', short, `description ${desc.length} chars`);
  if (desc.length && desc.length < 70) note('LOW', short, `description only ${desc.length} chars`);
  if (!canonical) note('HIGH', short, 'missing canonical');
  else if (!canonical.startsWith(url)) note('HIGH', short, `canonical mismatch: ${canonical} vs ${url}`);
  if (h1s.length !== 1) note('HIGH', short, `${h1s.length} H1 tags`);
  if (!ogTitle || !ogImage) note('MED', short, 'incomplete OG tags');
  if (jsonld.includes('INVALID')) note('MED', short, 'invalid JSON-LD');
  if (jsonld.length === 0 && path !== '/404') note('MED', short, 'no JSON-LD');

  const imgs = [...html.matchAll(/<img[^>]*>/g)];
  const noAlt = imgs.filter((m) => !/alt="[^"]+"/.test(m[0]) && !/alt\s+/.test(m[0]));
  if (noAlt.length) note('MED', short, `${noAlt.length} img without alt`);

  // collect internal links
  for (const m of html.matchAll(/href="(\/[^"#]*)"/g)) {
    const link = m[1];
    if (!seen.has(link) && !link.startsWith('/_astro')) seen.set(link, { status: 0, html: '' });
  }
}

// check every collected internal link (incl. non-sitemap ones)
for (const [link, info] of seen) {
  if (info.status !== 0) continue;
  const res = await fetch(`${BASE}${link}`, { method: link.endsWith('.xml') || link.endsWith('.txt') ? 'GET' : 'HEAD' }).catch(() => null);
  info.status = res?.status ?? -1;
  if (!res || res.status >= 400) note('HIGH', link, `broken link: HTTP ${info.status}`);
}

// domain consistency: what domain do canonicals/sitemap reference?
const domains = new Set();
for (const url of urls) domains.add(new URL(url).host);
for (const [, { html }] of seen) {
  const c = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (c) domains.add(new URL(c).host);
}
console.log('\n=== domains referenced (sitemap+canonicals) ===');
for (const d of domains) console.log(' ', d, d === new URL(BASE).host ? '(serving host ✓)' : '⚠ not the serving host');

console.log('\n=== per-page summary ===');
for (const url of urls) {
  const { html } = seen.get(url);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const path = new URL(url).pathname || '/';
  console.log(`${(path || '/').padEnd(32)} title:${title.length} chars`);
}

console.log(`\n=== issues: ${issues.length} ===`);
const order = { HIGH: 0, MED: 1, LOW: 2 };
issues.sort((a, b) => order[a.severity] - order[b.severity]);
for (const i of issues) console.log(`[${i.severity}] ${i.page}: ${i.msg}`);
if (issues.length === 0) console.log('none');
