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
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  const pngPath = join(tmpdir(), 'og-2x.png');
  const scaled = join(tmpdir(), 'og-1x.png');
  const jpg = join(root, 'public', 'og.jpg');
  await writeFile(pngPath, png);
  await exec('sips', ['-z', '630', '1200', pngPath, '--out', scaled]);
  await exec('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '82', scaled, '--out', jpg]);
  await unlink(pngPath);
  await unlink(scaled);
  console.log('Wrote', jpg);
} finally {
  await browser.close();
}
