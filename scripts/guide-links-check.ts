/**
 * Regression for guide/task internal links.
 * Data checks always run. Pass --dist=dist after `astro build` to assert SSR
 * <a href> output, canonicals, and language targets.
 *
 * Inbound counts are navigation edges in this repo. They are not PageRank
 * and they are not a ranking claim.
 */
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { guideSections, guideToolCta, relatedTasks } from '../src/data/guide-links';
import { GUIDES, guidesFor, guidesForTool } from '../src/data/guides';
import { splitCopy } from '../src/lib/copy-links';
import type { Locale } from '../src/i18n/locales';

const ROOT = process.cwd();

function read(path: string): string {
  return readFileSync(join(ROOT, path), 'utf8');
}

const PRIORITY: { path: string; tool: string; title: string }[] = [
  {
    path: '/guides/why-is-my-voice-memo-so-quiet',
    tool: 'increase-volume',
    title: 'Why Is My Voice Memo So Quiet? Make It Louder in Safari',
  },
  { path: '/guides/convert-m4a-to-mp3', tool: 'm4a-to-mp3', title: 'How to Convert M4A to MP3' },
  {
    path: '/guides/car-stereo-wont-play',
    tool: 'm4a-to-mp3',
    title: "Why Your Car Stereo Won't Play That Audio File",
  },
  {
    path: '/guides/audio-clicks-at-the-start',
    tool: 'fade-audio',
    title: 'Why Your Audio Clip Clicks at the Start',
  },
  {
    path: '/guides/trim-opentracks-bgm',
    tool: 'audio-trimmer',
    title: 'How to Trim OpenTracks BGM in the Browser',
  },
  {
    path: '/guides/merge-songs-one-track',
    tool: 'audio-joiner',
    title: 'How to Merge Audio Files into One Track Online',
  },
  {
    path: '/guides/remove-silence-from-podcast',
    tool: 'silence-remover',
    title: 'How to Remove Silence from a Podcast',
  },
  {
    path: '/guides/normalize-vs-compress-audio',
    tool: 'normalize-audio',
    title: 'Normalize vs Compress: Which One Do You Need?',
  },
];

const BODY: { file: string; href: string; anchor: string }[] = [
  {
    file: 'src/pages/guides/record-a-voice-memo-in-browser.md',
    href: '/guides/why-is-my-voice-memo-so-quiet',
    anchor: 'Make a quiet Voice Memo louder',
  },
  {
    file: 'src/pages/guides/gain-vs-volume.md',
    href: '/guides/why-is-my-voice-memo-so-quiet',
    anchor: 'Make a quiet Voice Memo louder',
  },
  {
    file: 'src/pages/guides/why-is-my-voice-memo-so-quiet.md',
    href: '/guides/merge-songs-one-track',
    anchor: 'Join Voice Memos into one file',
  },
  {
    file: 'src/pages/guides/why-is-my-voice-memo-so-quiet.md',
    href: '/guides/normalize-vs-compress-audio',
    anchor: 'Normalization versus compression for speech',
  },
  {
    file: 'src/pages/guides/car-stereo-wont-play.md',
    href: '/guides/convert-m4a-to-mp3',
    anchor: 'Convert M4A to MP3 on Windows',
  },
  {
    file: 'src/pages/guides/convert-m4a-to-mp3.md',
    href: '/guides/car-stereo-wont-play',
    anchor: "fix audio that a car USB stereo won't play",
  },
  {
    file: 'src/pages/guides/how-to-trim-audio.md',
    href: '/guides/audio-clicks-at-the-start',
    anchor: 'Remove clicks after trimming audio',
  },
  {
    file: 'src/pages/guides/how-to-trim-audio.md',
    href: '/guides/trim-opentracks-bgm',
    anchor: 'Trim OpenTracks background music',
  },
  {
    file: 'src/pages/guides/trim-opentracks-bgm.md',
    href: '/guides/audio-clicks-at-the-start',
    anchor: 'Remove clicks after trimming audio',
  },
  {
    file: 'src/pages/guides/normalize-vs-compress-audio.md',
    href: '/guides/remove-silence-from-podcast',
    anchor: 'Remove long pauses from a recording',
  },
];

assert.equal(existsSync(join(ROOT, 'src/pages/guides/trim-audio-on-chromebook.md')), false);
assert.equal(read('src/data/guide-links.ts').includes('trim-audio-on-chromebook'), false);
assert.equal(read('src/pages/guides/remove-silence-from-podcast.md').toLowerCase().includes('zoom'), false);
assert.equal(read('src/pages/guides/remove-silence-from-podcast.md').toLowerCase().includes('teams'), false);

const enSections = guideSections('en');
const seen = new Map<string, string>();
for (const section of enSections) {
  for (const guide of section.guides) {
    assert.equal(guide.href.endsWith('/'), false, guide.href);
    assert.equal(guide.href.includes('//'), false, guide.href);
    assert.equal(seen.has(guide.href), false, `duplicate index link ${guide.href}`);
    seen.set(guide.href, section.id);
  }
}
for (const guide of guidesFor('en')) {
  assert.equal(seen.has(guide.href), true, `missing from index ${guide.href}`);
}

function clusterOf(path: string): string {
  const id = seen.get(path);
  assert.ok(id, path);
  return id;
}

assert.equal(clusterOf('/guides/why-is-my-voice-memo-so-quiet'), 'phone');
assert.equal(clusterOf('/guides/record-a-voice-memo-in-browser'), 'phone');
assert.equal(clusterOf('/guides/merge-songs-one-track'), 'phone');
assert.equal(clusterOf('/guides/convert-m4a-to-mp3'), 'files');
assert.equal(clusterOf('/guides/car-stereo-wont-play'), 'files');
assert.equal(clusterOf('/guides/audio-clicks-at-the-start'), 'edits');
assert.equal(clusterOf('/guides/trim-opentracks-bgm'), 'edits');
assert.equal(clusterOf('/guides/how-to-trim-audio'), 'edits');
assert.equal(clusterOf('/guides/remove-silence-from-podcast'), 'edits');
assert.equal(clusterOf('/guides/normalize-vs-compress-audio'), 'levels');
assert.equal(clusterOf('/guides/gain-vs-volume'), 'levels');

for (const locale of ['es', 'pt', 'id', 'de', 'ko', 'ja', 'zh', 'fr', 'ru', 'ar'] as Locale[]) {
  for (const section of guideSections(locale)) {
    for (const guide of section.guides) {
      assert.equal(guide.locale, locale, guide.href);
      assert.ok(guide.href.startsWith(`/${locale}/`), guide.href);
      assert.equal(guide.href.includes('/guides/why-is-my-voice-memo-so-quiet'), false);
    }
  }
}

const esFiles = guideSections('es').find((section) => section.id === 'files');
assert.ok(esFiles);
assert.ok(esFiles.guides.some((guide) => guide.href === '/es/guides/ogg-a-mp3'));
assert.ok(esFiles.guides.some((guide) => guide.href === '/es/guides/opus-a-mp3'));
assert.equal(
  guideSections('es').some((section) => section.guides.some((guide) => guide.href.includes('why-is-my-voice-memo'))),
  false,
);

const jaTrim = relatedTasks('/guides/how-to-trim-audio', 'ja');
assert.equal(jaTrim.length, 1);
assert.equal(jaTrim[0]?.href, '/ja/guides/trim-opentracks-bgm');
assert.equal(jaTrim[0]?.label.includes('OpenTracks'), true);
assert.notEqual(jaTrim[0]?.label, 'trim OpenTracks background music');
assert.equal(relatedTasks('/guides/how-to-trim-audio', 'en').length, 0);
assert.equal(relatedTasks('/guides/how-to-trim-audio', 'es').length, 0);

const zhMerge = relatedTasks('/guides/merge-songs-one-track', 'zh');
assert.equal(zhMerge.length, 1);
assert.equal(zhMerge[0]?.href, '/zh/guides/how-to-trim-audio');
assert.equal(zhMerge[0]?.label.includes('Trim a clip'), false);

const enMerge = relatedTasks('/guides/merge-songs-one-track', 'en');
assert.equal(enMerge[0]?.href, '/guides/how-to-trim-audio');
assert.equal(enMerge[0]?.label, 'Trim a clip before you join it');

for (const item of PRIORITY) {
  const card = GUIDES.find((guide) => guide.locale === 'en' && guide.href === item.path);
  assert.ok(card, item.path);
  const source = read(`src/pages${item.path}.md`);
  const escaped = item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  assert.match(source, new RegExp(`^title:\\s*["']?${escaped}["']?\\s*$`, 'm'));
  assert.match(source, new RegExp(`^tool: ${item.tool}$`, 'm'));
  assert.equal(guidesForTool(item.tool, 'en').some((guide) => guide.href === item.path), true);
  const cta = guideToolCta(item.path, 'en');
  if (item.path !== '/guides/normalize-vs-compress-audio') assert.ok(cta, item.path);
  assert.equal(guideToolCta(item.path, 'ja'), undefined);
  assert.equal(guideToolCta(item.path, 'zh'), undefined);
}

function toolLists(tool: string, path: string, locale: Locale = 'en') {
  assert.equal(
    guidesForTool(tool, locale).some((guide) => guide.href.endsWith(path)),
    true,
    `${locale} ${tool} -> ${path}`,
  );
}

toolLists('increase-volume', '/guides/why-is-my-voice-memo-so-quiet');
toolLists('m4a-to-mp3', '/guides/convert-m4a-to-mp3');
toolLists('m4a-to-mp3', '/guides/car-stereo-wont-play');
toolLists('bitrate-converter', '/guides/car-stereo-wont-play');
toolLists('fade-audio', '/guides/audio-clicks-at-the-start');
toolLists('audio-trimmer', '/guides/audio-clicks-at-the-start');
toolLists('audio-trimmer', '/guides/trim-opentracks-bgm');
toolLists('audio-looper', '/guides/trim-opentracks-bgm');
toolLists('audio-joiner', '/guides/merge-songs-one-track');
toolLists('silence-remover', '/guides/remove-silence-from-podcast');
toolLists('compressor', '/guides/remove-silence-from-podcast');
toolLists('normalize-audio', '/guides/normalize-vs-compress-audio');
toolLists('compressor', '/guides/normalize-vs-compress-audio');
toolLists('audio-trimmer', '/guides/trim-opentracks-bgm', 'ja');
toolLists('audio-looper', '/guides/trim-opentracks-bgm', 'ja');

assert.equal(
  guidesForTool('audio-trimmer', 'ja').some((guide) => guide.href.includes('audio-clicks')),
  false,
);
assert.equal(
  guidesForTool('increase-volume', 'es').some((guide) => guide.href.includes('why-is-my-voice-memo')),
  false,
);
assert.equal(guidesForTool('audio-trimmer', 'en')[0]?.href === '/guides/audio-clicks-at-the-start', false);

for (const edge of BODY) {
  const source = read(edge.file);
  assert.ok(source.includes(`](${edge.href})`), `${edge.file} missing ${edge.href}`);
  assert.ok(source.includes(edge.anchor), `${edge.file} missing anchor ${edge.anchor}`);
}

assert.ok(read('src/data/tools.ts').includes('](/guides/why-is-my-voice-memo-so-quiet)'));
const kept = splitCopy(
  'the [quiet Voice Memo guide](/guides/why-is-my-voice-memo-so-quiet) walks the iPhone steps.',
  'en',
);
assert.equal(kept.some((part) => part.link && part.href === '/guides/why-is-my-voice-memo-so-quiet'), true);
for (const locale of ['es', 'de', 'ja', 'pt'] as Locale[]) {
  const hidden = splitCopy('[guia](/guides/why-is-my-voice-memo-so-quiet)', locale);
  assert.equal(
    hidden.some((part) => part.link),
    false,
    `${locale} must not emit the English-only guide`,
  );
}

const redirectSources = read('vercel.json');
for (const edge of BODY) {
  assert.equal(edge.href.endsWith('/'), false);
  assert.equal(redirectSources.includes(`"${edge.href}"`), false);
}

console.log('\nLink graph after this change (repo edges, not rank):');
const priorityPaths = [
  ...PRIORITY.map((item) => item.path),
  '/guides/record-a-voice-memo-in-browser',
  '/guides/gain-vs-volume',
];
for (const path of priorityPaths) {
  const fromGuides = BODY.filter((edge) => edge.href === path).map((edge) => edge.file.replace('src/pages', '').replace(/\.md$/, ''));
  const fromTools = ['increase-volume', 'm4a-to-mp3', 'bitrate-converter', 'fade-audio', 'audio-trimmer', 'audio-looper', 'audio-joiner', 'silence-remover', 'compressor', 'normalize-audio', 'voice-recorder']
    .filter((tool) => guidesForTool(tool, 'en').some((guide) => guide.href === path));
  const cluster = seen.get(path);
  console.log(`- ${path}`);
  console.log(`  index cluster: ${cluster ?? 'not on English index'}`);
  console.log(`  guide body: ${fromGuides.length ? fromGuides.join(', ') : '(none new or listed)'}`);
  console.log(`  tool cards: ${fromTools.length ? fromTools.join(', ') : '(none)'}`);
}

const distArg = process.argv.find((arg) => arg.startsWith('--dist='));
const dist = distArg ? distArg.slice('--dist='.length) : existsSync(join(ROOT, 'dist/guides.html')) ? 'dist' : '';
if (!dist) {
  console.log('\nSSR HTML not checked (no dist). Re-run with --dist=dist after astro build.');
} else {
  const root = join(ROOT, dist);
  const htmlOf = (route: string) => {
    const file = route === '/' ? join(root, 'index.html') : join(root, `${route.replace(/^\//, '')}.html`);
    assert.equal(existsSync(file), true, file);
    return readFileSync(file, 'utf8');
  };
  const anchors = (html: string) => {
    const found: { href: string; text: string }[] = [];
    for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
      const href = match[1]?.match(/\shref="([^"]*)"/)?.[1];
      if (!href) continue;
      const text = (match[2] ?? '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/[’‘]/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
      found.push({ href, text });
    }
    return found;
  };
  const has = (html: string, href: string, text?: string) => {
    const hit = anchors(html).find((link) => link.href === href && (text === undefined || link.text.includes(text)));
    assert.ok(hit, `missing <a href="${href}">${text ?? ''}`);
  };
  const canonical = (html: string) => html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];

  const guides = htmlOf('/guides');
  assert.equal(canonical(guides), 'https://freeaudioeditor.online/guides');
  assert.match(guides, /data-guide-cluster="phone"/);
  assert.match(guides, /data-guide-cluster="files"/);
  assert.match(guides, /data-guide-cluster="edits"/);
  assert.match(guides, /data-guide-cluster="levels"/);
  has(guides, '/guides/why-is-my-voice-memo-so-quiet', 'Why Is My Voice Memo So Quiet?');
  has(guides, '/guides/convert-m4a-to-mp3');
  has(guides, '/guides/trim-opentracks-bgm');
  assert.equal(guides.includes('trim-audio-on-chromebook'), false);
  assert.equal(guides.includes('href="/guides/'), true);

  const quiet = htmlOf('/guides/why-is-my-voice-memo-so-quiet');
  assert.equal(canonical(quiet), 'https://freeaudioeditor.online/guides/why-is-my-voice-memo-so-quiet');
  assert.match(quiet, /<title>Why Is My Voice Memo So Quiet\? Make It Louder in Safari<\/title>/);
  assert.equal(/rel="alternate" hreflang=/.test(quiet), false);
  has(quiet, '/increase-volume', 'Make a quiet Voice Memo louder');
  has(quiet, '/guides/merge-songs-one-track', 'Join Voice Memos into one file');
  has(quiet, '/guides/normalize-vs-compress-audio', 'Normalization versus compression for speech');
  assert.equal(quiet.includes('Enhance Recording'), true);

  const m4a = htmlOf('/guides/convert-m4a-to-mp3');
  assert.equal(canonical(m4a), 'https://freeaudioeditor.online/guides/convert-m4a-to-mp3');
  has(m4a, '/m4a-to-mp3', 'Convert M4A to MP3');
  has(m4a, '/guides/car-stereo-wont-play', "fix audio that a car USB stereo won't play");

  const car = htmlOf('/guides/car-stereo-wont-play');
  has(car, '/guides/convert-m4a-to-mp3', 'Convert M4A to MP3 on Windows');
  has(car, '/m4a-to-mp3', 'Convert the file to MP3');

  const clicks = htmlOf('/guides/audio-clicks-at-the-start');
  has(clicks, '/fade-audio', 'Fade the click at the cut');
  assert.match(clicks, /0\.1 to 0\.3 seconds/);

  const openTracks = htmlOf('/guides/trim-opentracks-bgm');
  has(openTracks, '/audio-trimmer', 'Trim this background track');
  has(openTracks, '/guides/audio-clicks-at-the-start', 'Remove clicks after trimming audio');

  const trim = htmlOf('/guides/how-to-trim-audio');
  has(trim, '/guides/audio-clicks-at-the-start', 'Remove clicks after trimming audio');
  has(trim, '/guides/trim-opentracks-bgm', 'Trim OpenTracks background music');

  const silence = htmlOf('/guides/remove-silence-from-podcast');
  has(silence, '/silence-remover', 'Remove the long pauses');
  assert.equal(silence.toLowerCase().includes('zoom'), false);

  const record = htmlOf('/guides/record-a-voice-memo-in-browser');
  has(record, '/guides/why-is-my-voice-memo-so-quiet', 'Make a quiet Voice Memo louder');
  const gain = htmlOf('/guides/gain-vs-volume');
  has(gain, '/guides/why-is-my-voice-memo-so-quiet', 'Make a quiet Voice Memo louder');

  const volume = htmlOf('/increase-volume');
  has(volume, '/guides/why-is-my-voice-memo-so-quiet');
  const bitrate = htmlOf('/bitrate-converter');
  has(bitrate, '/guides/car-stereo-wont-play');
  const trimmer = htmlOf('/audio-trimmer');
  has(trimmer, '/guides/audio-clicks-at-the-start');
  has(trimmer, '/guides/trim-opentracks-bgm');
  const fade = htmlOf('/fade-audio');
  has(fade, '/guides/audio-clicks-at-the-start');
  const looper = htmlOf('/audio-looper');
  has(looper, '/guides/trim-opentracks-bgm');
  const joiner = htmlOf('/audio-joiner');
  has(joiner, '/guides/merge-songs-one-track');
  const compressor = htmlOf('/compressor');
  has(compressor, '/guides/remove-silence-from-podcast');
  has(compressor, '/guides/normalize-vs-compress-audio');

  const ja = htmlOf('/ja/guides/how-to-trim-audio');
  assert.equal(canonical(ja), 'https://freeaudioeditor.online/ja/guides/how-to-trim-audio');
  has(ja, '/ja/guides/trim-opentracks-bgm');
  assert.equal(anchors(ja).some((link) => link.href === '/guides/trim-opentracks-bgm'), false);
  assert.equal(anchors(ja).some((link) => link.text === 'trim OpenTracks background music'), false);
  const jaTracks = htmlOf('/ja/guides/trim-opentracks-bgm');
  assert.equal(canonical(jaTracks), 'https://freeaudioeditor.online/ja/guides/trim-opentracks-bgm');
  has(jaTracks, '/ja/audio-trimmer');

  const es = htmlOf('/es/guides');
  assert.equal(canonical(es), 'https://freeaudioeditor.online/es/guides');
  assert.equal(es.includes('/guides/why-is-my-voice-memo-so-quiet'), false);
  assert.equal(es.includes('Make a quiet Voice Memo louder'), false);
  has(es, '/es/guides/ogg-a-mp3');

  const merge = htmlOf('/guides/merge-songs-one-track');
  assert.match(merge, /rel="alternate" hreflang="ja"/);
  has(merge, '/guides/how-to-trim-audio', 'Trim a clip before you join it');
  has(merge, '/audio-joiner', 'Join the files into one track');

  for (const file of walk(root)) {
    if (!file.endsWith('.html')) continue;
    const html = readFileSync(file, 'utf8');
    assert.equal(html.includes('trim-audio-on-chromebook'), false, file);
    for (const link of anchors(html)) {
      if (!link.href.startsWith('/')) continue;
      if (link.href !== '/' && link.href.endsWith('/')) {
        throw new Error(`trailing slash ${JSON.stringify(link.href)} in ${file}`);
      }
      if (link.href.includes('//')) throw new Error(`double slash ${JSON.stringify(link.href)} in ${file}`);
    }
  }
  console.log(`\nSSR HTML checked under ${dist}.`);
}

function walk(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else files.push(path);
  }
  return files;
}

console.log('\nguide-links-check: ok');
