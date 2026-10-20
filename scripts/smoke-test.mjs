/**
 * Browser smoke test for the audio editor.
 * Requires: preview server running (npm run preview) + system Chrome.
 * Run: node scripts/smoke-test.mjs
 */
import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { generateTestWav } from './make-test-tone.mjs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const TEST_WAV = '/tmp/test-tone.wav';
const DOWNLOAD_DIR = '/tmp/smoke-downloads';

if (!existsSync(CHROME)) {
  console.error('Chrome not found at', CHROME);
  process.exit(2);
}
if (!existsSync(TEST_WAV)) {
  generateTestWav(TEST_WAV);
  console.log('Generated test tone at', TEST_WAV);
}
mkdirSync(DOWNLOAD_DIR, { recursive: true });

/** Peak absolute sample value and duration of a 16-bit PCM WAV written by encodeWav(). */
function wavStats(path) {
  const buf = readFileSync(path);
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const byteRate = view.getUint32(28, true);
  const dataSize = view.getUint32(40, true);
  let peak = 0;
  for (let i = 44; i + 1 < buf.byteLength; i += 2) {
    const v = Math.abs(view.getInt16(i, true)) / 32768;
    if (v > peak) peak = v;
  }
  return { peak, duration: dataSize / byteRate };
}

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1366,900'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push('pageerror: ' + err.message));

  // 1. Load the tool page
  await page.goto(`${BASE}/audio-trimmer`, { waitUntil: 'networkidle0', timeout: 30000 });
  check('page loads', true, await page.title());

  const dropzoneVisible = await page.$eval('[data-dropzone]', (el) => !el.hidden && el.offsetParent !== null);
  check('dropzone visible', dropzoneVisible);

  await page.screenshot({ path: '/tmp/smoke-1-initial.png' });

  // 2. Upload the test file
  const input = await page.$('[data-file-input]');
  await input.uploadFile(TEST_WAV);
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });

  const fileName = await page.$eval('[data-file-name]', (el) => el.textContent);
  check('file loaded', fileName === 'test-tone.wav', fileName);

  const meta = await page.$eval('[data-file-meta]', (el) => el.textContent);
  check('file meta', /\d{2}:\d{2}\.\d{2} · (Mono|Stereo) · \d+ kHz · \d+(\.\d+)? (KB|MB)/.test(meta), meta);

  // 3. Waveform canvas painted
  await new Promise((r) => setTimeout(r, 300));
  const canvasPainted = await page.$eval('[data-wave]', (el) => el.width > 100 && el.height > 50);
  check('waveform painted', canvasPainted);

  // 4. Drag to select on the waveform
  const box = await (await page.$('[data-stage-content]')).boundingBox();
  const cy = box.y + box.height / 2;
  await page.mouse.move(box.x + 50, cy);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.5, cy, { steps: 8 });
  await page.mouse.up();
  await new Promise((r) => setTimeout(r, 150));

  const selection = await page.$eval('[data-selection]', (el) => ({
    hidden: el.classList.contains('hidden'),
    width: el.getBoundingClientRect().width,
  }));
  check('drag selection', !selection.hidden && selection.width > 50, `width=${Math.round(selection.width)}px`);

  const precise = await page.$eval('[data-precise-start]', (el) => el.value);
  check('precise start synced', Number(precise) > 0, `start=${precise}s`);

  // 5. Play selection
  await page.click('[data-play]');
  await new Promise((r) => setTimeout(r, 600));
  const playheadOpacity = await page.$eval('[data-playhead]', (el) => Number(getComputedStyle(el).opacity));
  const playing = await page.$eval('[data-play]', (el) => el.getAttribute('aria-label'));
  check('playback started', playing === 'Pause' && playheadOpacity === 1, `aria=${playing}`);
  await page.keyboard.press('Space'); // stop
  await new Promise((r) => setTimeout(r, 200));

  // 6. Export as WAV
  await page.select('[data-format]', 'wav');
  const client = await page.createCDPSession();
  await client.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });
  await page.click('[data-export]');
  let downloaded = '';
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 250));
    downloaded = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
    if (/Exported/.test(downloaded)) break;
  }
  check('export flow', /Exported test-tone-edited\.wav/.test(downloaded), downloaded);

  // 6b. Regression: a 2–4 s selection at 2× speed must render exactly that
  // source range. start()'s offset/duration are buffer-time units — if they
  // get scaled by playbackRate, the render starts at source second 4 and
  // bleeds in the loud 5–10 s half of the fixture, failing the peak check.
  // The trimmer hides the Adjust drawer, so use the full editor for this.
  await page.goto(`${BASE}/mp3-editor`, { waitUntil: 'networkidle0', timeout: 30000 });
  await (await page.$('[data-file-input]')).uploadFile(TEST_WAV);
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await page.$eval('[data-precise-start]', (el) => {
    el.value = '2';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.$eval('[data-precise-end]', (el) => {
    el.value = '4';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.$eval('[data-speed]', (el) => {
    el.value = '2';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.select('[data-format]', 'wav');
  rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
  mkdirSync(DOWNLOAD_DIR, { recursive: true });
  await page.click('[data-export]');
  let speedStatus = '';
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 250));
    speedStatus = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
    if (/Exported/.test(speedStatus)) break;
  }
  check('speed ×2 export flow', /Exported test-tone-edited\.wav/.test(speedStatus), speedStatus);

  const stats = wavStats(join(DOWNLOAD_DIR, 'test-tone-edited.wav'));
  check(
    'speed ×2 output duration',
    Math.abs(stats.duration - 1) < 0.1,
    `${stats.duration.toFixed(2)}s (expected 1.00s)`,
  );
  // Source seconds 2–6 are all silence; any audible sample means the wrong
  // range was rendered.
  check('speed ×2 renders the selected range', stats.peak < 0.02, `peak=${stats.peak.toFixed(3)}`);

  // 7. Console errors (ignore CDN/network noise)
  const realErrors = consoleErrors.filter((e) => !/favicon|net::/.test(e));
  check('no console errors', realErrors.length === 0, realErrors.slice(0, 3).join(' | ') || 'clean');

  await page.screenshot({ path: '/tmp/smoke-2-editor.png' });
} finally {
  await browser.close();
}

console.log(failures === 0 ? '\nSMOKE TEST: ALL PASS' : `\nSMOKE TEST: ${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
