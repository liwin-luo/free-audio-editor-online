/**
 * Feature checks for the Phase-1 tool variants:
 *  - /wav-to-mp3 (converter mode): label + MP3 export via CDN encoder
 *  - /reverse-audio (quick control): reverse button state + reversed WAV output
 * Usage: node scripts/feature-check.mjs (needs preview on :4321 + test WAV)
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const TEST_WAV = '/tmp/test-tone.wav';
const DOWNLOAD_DIR = '/tmp/feature-downloads';
rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
};

const waitExported = async (page) => {
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 250));
    const status = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
    if (/Exported/.test(status)) return status;
  }
  return '';
};

const wavStats = (file) => {
  const b = readFileSync(file);
  const channels = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const dataSize = b.readUInt32LE(40);
  let peak = 0;
  for (let i = 44; i < 44 + dataSize - 1; i += 2) {
    const v = Math.abs(b.readInt16LE(i)) / 32768;
    if (v > peak) peak = v;
  }
  return { channels, rate, duration: dataSize / 2 / channels / rate, peak };
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
try {
  const client = await browser.newPage();
  await client.setViewport({ width: 1366, height: 900 });
  const consoleErrors = [];
  client.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text()));
  client.on('pageerror', (e) => consoleErrors.push('pageerror: ' + e.message));
  const cdp = await client.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });

  // --- Converter mode on /wav-to-mp3 ---
  await client.goto(`${BASE}/wav-to-mp3`, { waitUntil: 'networkidle0' });
  const btnLabel = await client.$eval('[data-export]', (el) => el.textContent.trim());
  check('converter export label', btnLabel === 'Convert to MP3', btnLabel);
  const modesHidden = (await client.$('[data-modes-row]')) === null;
  check('converter hides cut UI', modesHidden);

  const input = await client.$('[data-file-input]');
  await input.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.click('[data-export]');
  const convStatus = await waitExported(client);
  check(
    'wav→mp3 export',
    /Exported test-tone-converted\.mp3/.test(convStatus),
    `${convStatus || '(timeout)'}${consoleErrors.length ? ' console: ' + consoleErrors[0].slice(0, 120) : ''}`,
  );
  const mp3File = join(DOWNLOAD_DIR, 'test-tone-converted.mp3');
  let mp3Ok = false;
  // Chrome flushes downloads asynchronously — poll for the file
  for (let i = 0; i < 20 && !mp3Ok; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      const head = readFileSync(mp3File).subarray(0, 3);
      mp3Ok = (head[0] === 0xff && (head[1] & 0xe0) === 0xe0) || head.toString().includes('ID3');
    } catch {}
  }
  check('mp3 file valid', mp3Ok, `${mp3File} (${mp3Ok ? 'mpeg frame/ID3 ok' : 'missing'})`);

  // --- Quick reverse on /reverse-audio ---
  await client.goto(`${BASE}/reverse-audio`, { waitUntil: 'networkidle0' });
  const input2 = await client.$('[data-file-input]');
  await input2.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.click('[data-quick-reverse]');
  const pressed = await client.$eval('[data-quick-reverse]', (el) => el.getAttribute('aria-pressed'));
  const drawerSync = await client.$eval('[data-reverse]', (el) => el.checked);
  check('reverse quick control', pressed === 'true' && drawerSync === true, `aria=${pressed} drawer=${drawerSync}`);
  await client.select('[data-format]', 'wav');
  await client.click('[data-export]');
  const revStatus = await waitExported(client);
  check('reversed export', /Exported test-tone-edited\.wav/.test(revStatus), revStatus);

  // Reversed output must start where the source ended. renderEdit pads the
  // render by one zero sample, which lands at the front after reversal, so
  // compare from out[1] onward against the source tail.
  const src = readFileSync(TEST_WAV);
  const srcChannels = src.readUInt16LE(22);
  const srcDataSize = src.readUInt32LE(40);
  const outFile = readFileSync(join(DOWNLOAD_DIR, 'test-tone-edited.wav'));
  const N = 480; // compare 10ms
  let diff = 0;
  for (let i = 0; i < N; i++) {
    const o = outFile.readInt16LE(44 + 2 * (1 + i)) / 32768;
    const s = src.readInt16LE(44 + srcDataSize - 2 * srcChannels * (i + 1)) / 32768;
    diff += Math.abs(o - s);
  }
  diff /= N;
  check('output is reversed', diff < 0.005, `mean|Δ|=${diff.toFixed(5)} over first 10ms`);
  const out = wavStats(join(DOWNLOAD_DIR, 'test-tone-edited.wav'));
  check(
    'duration preserved',
    Math.abs(out.duration - srcDataSize / 2 / srcChannels / src.readUInt32LE(24)) < 0.05,
    `${out.duration.toFixed(2)}s`,
  );
} finally {
  await browser.close();
}
console.log(failures === 0 ? '\nFEATURES: ALL PASS' : `\nFEATURES: ${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
