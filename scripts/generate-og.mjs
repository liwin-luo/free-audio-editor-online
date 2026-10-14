/**
 * Generate public/og.png (1200x630) from the OG design template.
 * Usage: node scripts/generate-og.mjs   (requires system Chrome)
 */
import puppeteer from 'puppeteer-core';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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
  const html = await readFile('/tmp/og-design.html', 'utf8');
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  const out = join(root, 'public', 'og.png');
  await writeFile(out, png);
  console.log('Wrote', out, `(${(png.length / 1024).toFixed(0)} KB)`);
} finally {
  await browser.close();
}
