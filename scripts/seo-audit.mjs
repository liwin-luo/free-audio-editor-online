/**
 * Full-site SEO audit: crawls every page from the sitemap, checks
 * titles/descriptions/H1/canonical/OG/JSON-LD/alt text/internal links,
 * plus i18n guards: raw key leakage, untranslated English on locale pages,
 * sitemap↔page parity, hreflang cluster integrity (head + sitemap).
 * See docs/competitive-analysis-audioeditor.md §7.3.
 * Usage: node scripts/seo-audit.mjs [baseURL]
 */
const BASE = (process.argv[2] ?? 'https://free-audio-editor-online.vercel.app').replace(/\/$/, '');
import { readFileSync } from 'node:fs';

const norm = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

const issues = [];
const note = (severity, page, msg) => issues.push({ severity, page, msg });

const robots = await fetch(`${BASE}/robots.txt`).then((r) => r.text());
console.log('=== robots.txt ===\n' + robots);

// Localhost audits read the built dist/sitemap-0.xml directly: it matches what
// will deploy, and HTTP sitemap discovery can land on the production file.
// Production audits go over HTTP as before.
const isLocal = /(?:localhost|127\.0\.0\.1)/.test(BASE);
let sitemap;
if (isLocal) {
  sitemap = readFileSync(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');
  console.log('(local audit: sitemap read from dist/sitemap-0.xml)');
} else {
  const sitemapIdx = await fetch(`${BASE}/sitemap-index.xml`).then((r) => r.text()).catch(() => '');
  const sitemapUrl = sitemapIdx.match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (!sitemapUrl) throw new Error(`no sitemap found at ${BASE}/sitemap-index.xml`);
  sitemap = await fetch(sitemapUrl).then((r) => r.text());
}
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`\n=== sitemap: ${urls.length} URLs ===`);

// sitemap hreflang clusters: every cluster must be reciprocal (each listed
// alternate lists the page back) and self-referencing. Clusters smaller than
// the site maximum are legitimate when pages are deliberately excluded
// (per-market guides, noindex pages) — only broken reciprocity is a bug.
{
  const altsets = new Map(); // loc -> Set of alternate hrefs
  for (const m of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const block = m[1];
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;
    const alts = [...block.matchAll(/xhtml:link[^>]*hreflang="([^"]+)" href="([^"]+)"/g)].map((x) => x[2]);
    altsets.set(loc, new Set(alts));
    const short = new URL(loc).pathname || '/';
    if (alts.length === 0) continue;
    if (!alts.includes(loc)) note('HIGH', short, 'sitemap hreflang cluster missing self-reference');
    for (const alt of alts) {
      const back = altsets.get(alt);
      if (back && !back.has(loc)) note('HIGH', short, `hreflang not reciprocated by ${alt}`);
    }
  }
  const withAlts = [...altsets.values()].filter((s) => s.size > 0);
  console.log(`hreflang clusters in sitemap: ${withAlts.length} full + ${altsets.size - withAlts.length} per-market (no alternates)`);
}

const seen = new Map(); // url -> {status, html}
for (const url of urls) {
  // a dist-derived sitemap carries production URLs; crawl this server instead
  const fetchUrl = isLocal ? `${BASE}${new URL(url).pathname}` : url;
  const res = await fetch(fetchUrl);
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
  else if (norm(new URL(canonical, BASE).pathname) !== norm(path)) {
    note('HIGH', short, `canonical path mismatch: ${canonical} vs ${url}`);
  }
  if (h1s.length !== 1) note('HIGH', short, `${h1s.length} H1 tags`);
  if (!ogTitle || !ogImage) note('MED', short, 'incomplete OG tags');
  if (jsonld.includes('INVALID')) note('MED', short, 'invalid JSON-LD');
  if (jsonld.length === 0 && path !== '/404') note('MED', short, 'no JSON-LD');

  const imgs = [...html.matchAll(/<img[^>]*>/g)];
  const noAlt = imgs.filter((m) => !/alt="[^"]+"/.test(m[0]) && !/alt\s+/.test(m[0]));
  if (noAlt.length) note('MED', short, `${noAlt.length} img without alt`);

  // i18n guards on visible text (scripts/styles stripped)
  const visible = html.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ');

  // head hreflang cluster must reference the page itself (path comparison so
  // localhost audits work against production-host alternates)
  const headAlts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  const pagePath = norm(path);
  if (headAlts.length && !headAlts.some((m) => norm(new URL(m[2], BASE).pathname) === pagePath)) {
    note('HIGH', short, 'head hreflang cluster missing self-reference');
  }
  const knownHrefs = new Set(['en', 'de', 'es', 'id', 'ja', 'ko', 'pt-BR', 'zh-Hans', 'fr', 'ru', 'ar', 'x-default']);
  const unknownHrefs = headAlts.map((m) => m[1]).filter((h) => !knownHrefs.has(h));
  if (unknownHrefs.length) note('MED', short, `unexpected hreflang values: ${[...new Set(unknownHrefs)].join(', ')}`);

  // raw i18n keys leaking into rendered text (the audioeditor.org failure mode)
  const KEY_RE = /\b[a-z][a-z0-9]{1,24}(?:\.[a-z][A-Za-z0-9_]{1,30}){1,3}\b/g;
  const KEY_OK = /\.(?:com|org|net|io|dev|online|co|js|ts|mjs|jpg|jpeg|png|svg|webp|webm|mp3|mp4|ogg|wav|flac|m4a|m4r|aac|txt|xml|md|ms|hz|khz|db|kb|mb|gb)$/i;
  const keyHits = [...new Set(visible.match(KEY_RE) ?? [])].filter((t) => !KEY_OK.test(t)).slice(0, 3);
  for (const t of keyHits) note('HIGH', short, `possible raw i18n key in visible text: "${t}"`);

  // untranslated English sentences on locale pages: a run of ≥5 pure-ASCII
  // words containing ≥3 English function words. Loanwords (browser, file, MP3)
  // don't trip it; function words are what give away untranslated prose.
  if (/^\/(?:de|es|id|ja|ko|pt|zh|fr|ru|ar)(?:\/|$)/.test(path)) {
    const STOP = new Set('the a an and or but your yours you for with from this that these those are was were be been being have has had not no nor so if then than when while about into over under after before can could will would should must it its do does did how what which why where who here there they them their we our us my me he she his her of to on in is'.split(' '));
    const isWord = (t) => /^[A-Za-z'’]+$/.test(t);
    const isStop = (t) => STOP.has(t.toLowerCase().replace(/[’]/g, "'"));
    let run = [];
    let flagged = 0;
    for (const t of [...visible.split(/\s+/), '']) {
      if (isWord(t)) { run.push(t); continue; }
      for (let i = 0; flagged < 1 && i + 5 <= run.length; i++) {
        const win = run.slice(i, i + 5);
        // distinct stopwords only: German "so oder so in" repeats one word
        if (new Set(win.filter(isStop)).size >= 3) {
          note('MED', short, `possible untranslated English: "…${win.join(' ')}…"`);
          flagged++;
        }
      }
      run = [];
    }
  }

  // collect internal links
  for (const m of html.matchAll(/href="(\/[^"#]*)"/g)) {
    const link = m[1];
    if (!seen.has(link) && !link.startsWith('/_astro')) seen.set(link, { status: 0, html: '' });
  }
}

// check every collected internal link (incl. non-sitemap ones)
const sitemapPaths = new Set(urls.map((u) => norm(new URL(u).pathname)));
for (const [link, info] of seen) {
  if (info.status !== 0) continue;
  const res = await fetch(`${BASE}${link}`, { method: link.endsWith('.xml') || link.endsWith('.txt') ? 'GET' : 'HEAD' }).catch(() => null);
  info.status = res?.status ?? -1;
  if (!res || res.status >= 400) note('HIGH', link, `broken link: HTTP ${info.status}`);
  // sitemap↔page parity: an HTML page that exists but isn't in the sitemap is
  // invisible to discovery (the audioeditor.org stale-sitemap failure mode).
  // noindex pages (e.g. empty guides indexes) are exempt by design.
  else if (
    res.status === 200 &&
    !sitemapPaths.has(norm(new URL(link, BASE).pathname)) &&
    !/\.(xml|txt|jpg|jpeg|png|svg|webp|webm|ico|md|json)$/.test(link)
  ) {
    const body = await fetch(`${BASE}${link}`).then((r) => r.text()).catch(() => '');
    if (!/name="robots" content="noindex/.test(body)) {
      note('MED', link, 'page returns 200 but is not in the sitemap');
    }
  }
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
