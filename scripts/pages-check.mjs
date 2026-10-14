/**
 * Quick per-page check: loads each page in headless Chrome, asserts the editor
 * island (tool pages) or H1 (guides) renders, and that the console stays clean.
 * Usage: node scripts/pages-check.mjs  (needs preview server on :4321)
 */
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';

const pages = [
  { path: '/wav-to-mp3', island: true },
  { path: '/reverse-audio', island: true },
  { path: '/change-audio-speed', island: true },
  { path: '/increase-volume', island: true },
  { path: '/mp4-to-mp3', island: true },
  { path: '/extract-audio', island: true },
  { path: '/voice-recorder', island: true, recorder: true },
  { path: '/volume-booster', island: true },
  { path: '/guides', island: false },
  { path: '/guides/how-to-cut-a-song', island: false },
  { path: '/guides/make-iphone-ringtone', island: false },
  { path: '/guides/merge-songs-one-track', island: false },
];

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
};

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  for (const { path, island, recorder } of pages) {
    const errors = [];
    const onConsole = (m) => m.type() === 'error' && errors.push(m.text());
    const onError = (e) => errors.push('pageerror: ' + e.message);
    page.on('console', onConsole);
    page.on('pageerror', onError);

    try {
      await page.goto(BASE + path, { waitUntil: 'networkidle0', timeout: 20000 });
      const h1 = await page.$eval('h1', (el) => el.textContent.trim());
      const hasIsland = await page.$('[data-audio-editor], [data-audio-joiner]') !== null;
      let recorderOk = true;
      if (recorder) recorderOk = (await page.$('[data-recorder]')) !== null;
      check(
        path,
        h1.length > 0 && hasIsland === island && recorderOk && errors.length === 0,
        `h1="${h1.slice(0, 40)}"${!recorderOk ? ' recorder missing' : ''}${errors.length ? ' errors: ' + errors[0].slice(0, 80) : ''}`,
      );
    } catch (e) {
      check(path, false, e.message.slice(0, 80));
    } finally {
      page.off('console', onConsole);
      page.off('pageerror', onError);
    }
  }
} finally {
  await browser.close();
}
console.log(failures === 0 ? '\nPAGES: ALL PASS' : `\nPAGES: ${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
