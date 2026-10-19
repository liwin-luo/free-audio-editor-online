/**
 * Generate public/og.jpg (1200x630) from scripts/og-card.html.
 * Usage: node scripts/generate-og.mjs   (requires system Chrome + sips)
 */
import { execFile } from 'node:child_process';
import { readFile, unlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import puppeteer from 'puppeteer-core';

const exec = promisify(execFile);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--force-color-profile=srgb', '--hide-scrollbars'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  const html = await readFile(join(root, 'scripts/og-card.html'), 'utf8');
  const cards = [
    {
      file: 'og.jpg',
      html,
    },
    {
      file: 'og-trim.jpg',
      html: html
        .replace('Edit audio online.<br><span class="accent">Nothing ever uploaded.</span>', 'Trim a recording.<br><span class="accent">Keep one part.</span>')
        .replace('100% browser-based · free · no signup', 'Voice memos and podcasts · nothing uploaded'),
    },
    {
      file: 'og-cut.jpg',
      html: html
        .replace('Edit audio online.<br><span class="accent">Nothing ever uploaded.</span>', 'Cut an MP3.<br><span class="accent">Keep or delete.</span>')
        .replace('100% browser-based · free · no signup', 'Chorus, intro, or a bad take · nothing uploaded'),
    },
    {
      file: 'og-join.jpg',
      html: html
        .replace('Edit audio online.<br><span class="accent">Nothing ever uploaded.</span>', 'Merge audio files.<br><span class="accent">One track out.</span>')
        .replace('100% browser-based · free · no signup', 'Order, crossfade, export · nothing uploaded'),
    },
    {
      file: 'og-mp4.jpg',
      html: html
        .replace('Edit audio online.<br><span class="accent">Nothing ever uploaded.</span>', 'MP4 to MP3.<br><span class="accent">Soundtrack only.</span>')
        .replace('100% browser-based · free · no signup', 'The video stays on your device'),
    },
    {
      file: 'og-ring.jpg',
      html: html
        .replace('Edit audio online.<br><span class="accent">Nothing ever uploaded.</span>', 'Make a ringtone.<br><span class="accent">40 seconds, M4R.</span>')
        .replace('100% browser-based · free · no signup', 'iPhone M4R or a plain MP3 · nothing uploaded'),
    },
  ];
  for (const card of cards) {
  await page.setContent(card.html, { waitUntil: 'domcontentloaded' });
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  const pngPath = join(tmpdir(), 'og-2x.png');
  const scaled = join(tmpdir(), 'og-1x.png');
  const jpg = join(root, 'public', card.file);
  await writeFile(pngPath, png);
  await exec('sips', ['-z', '630', '1200', pngPath, '--out', scaled]);
  await exec('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '82', scaled, '--out', jpg]);
  await unlink(pngPath);
  await unlink(scaled);
  console.log('Wrote', jpg);
  }
} finally {
  await browser.close();
}
