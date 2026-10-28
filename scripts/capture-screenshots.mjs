/**
 * Capture real UI screenshots for tool pages (docs/seo.md "证据资产").
 * Requires: preview server running (npm run preview) + system Chrome.
 * Run: node scripts/capture-screenshots.mjs [slug ...]
 * Writes public/screenshots/{slug}-1.webp (dropzone) and -2.webp (workspace
 * with the test file loaded). Re-run whenever the editor UI changes — a stale
 * screenshot is fake evidence.
 */
import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { generateTestWav } from './make-test-tone.mjs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const MELODY = '/tmp/screenshot-melody.wav';
const OUT_DIR = 'public/screenshots';

const TOOLS = process.argv.slice(2).length
  ? process.argv.slice(2).map((slug) => ({ slug }))
  : [{ slug: 'compress-audio' }, { slug: 'ringtone-maker' }, { slug: 'slowed-reverb' }];

if (!existsSync(CHROME)) {
  console.error('Chrome not found at', CHROME);
  process.exit(2);
}
if (!existsSync(MELODY)) {
  generateTestWav(MELODY, 12);
  console.log('Generated test melody at', MELODY);
}
mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1280,860'],
});

let failures = 0;
for (const { slug } of TOOLS) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 860, deviceScaleFactor: 1.5 });
  await page.evaluateOnNewDocument(() => {
    try { localStorage.setItem('fae-consent-2', 'rejected'); } catch {}
  });
  try {
    await page.goto(`${BASE}/${slug}`, { waitUntil: 'networkidle0', timeout: 30000 });

    // 1 — dropzone state, editor section only
    await page.waitForSelector('[data-dropzone]', { timeout: 10000 });
    const section = await page.$('section[aria-label]');
    await section.screenshot({ path: join(OUT_DIR, `${slug}-1.webp`), type: 'webp', quality: 82 });
    console.log(`PASS  ${slug}-1.webp (dropzone)`);

    // 2 — workspace with a file loaded
    const input = await page.$('[data-file-input]');
    await input.uploadFile(MELODY);
    await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 800));
    await section.screenshot({ path: join(OUT_DIR, `${slug}-2.webp`), type: 'webp', quality: 82 });
    console.log(`PASS  ${slug}-2.webp (workspace)`);
  } catch (err) {
    failures++;
    console.log(`FAIL  ${slug}: ${err.message}`);
  }
  await page.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
