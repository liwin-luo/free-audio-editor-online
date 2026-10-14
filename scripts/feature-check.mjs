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

/** RMS of one channel from `fromSec` to the end. 0 if the file is shorter. */
const tailRms = (file, fromSec) => {
  const b = readFileSync(file);
  const channels = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const dataSize = b.readUInt32LE(40);
  const start = 44 + Math.floor(fromSec * rate) * 2 * channels;
  const end = 44 + dataSize;
  let acc = 0;
  let n = 0;
  for (let i = start; i + 1 < end; i += 2 * channels) {
    const v = b.readInt16LE(i) / 32768;
    acc += v * v;
    n++;
  }
  return n ? Math.sqrt(acc / n) : 0;
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

  // --- Phase 2: MP4 → MP3 (native video-audio decoding) ---
  await client.goto(`${BASE}/mp4-to-mp3`, { waitUntil: 'networkidle0' });
  const videoInput = await client.$('[data-file-input]');
  await videoInput.uploadFile('/tmp/fixtures/test-video.mp4');
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 15000 });
  const videoMeta = await client.$eval('[data-file-meta]', (el) => el.textContent);
  check('mp4 audio decoded', /00:04\.00/.test(videoMeta), videoMeta);
  await client.click('[data-export]');
  const mp4Status = await waitExported(client);
  check('mp4→mp3 export', /Exported test-video-converted\.mp3/.test(mp4Status), mp4Status);
  let mp4Mp3Ok = false;
  for (let i = 0; i < 20 && !mp4Mp3Ok; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      const h = readFileSync(join(DOWNLOAD_DIR, 'test-video-converted.mp3')).subarray(0, 3);
      mp4Mp3Ok = (h[0] === 0xff && (h[1] & 0xe0) === 0xe0) || h.toString().includes('ID3');
    } catch {}
  }
  check('mp4→mp3 file valid', mp4Mp3Ok);

  // --- M4R export on /ringtone-maker (WebCodecs AAC + MP4 muxer) ---
  await client.goto(`${BASE}/ringtone-maker`, { waitUntil: 'networkidle0' });
  const ringInput = await client.$('[data-file-input]');
  await ringInput.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  const m4rOffered = (await client.$('option[value="m4r"]')) !== null;
  check('m4r option offered (Chrome)', m4rOffered);
  await client.select('[data-format]', 'm4r');
  await client.click('[data-export]');
  const m4rStatus = await waitExported(client);
  check('m4r export', /Exported test-tone-ringtone\.m4r/.test(m4rStatus), m4rStatus);
  let m4rOk = false;
  for (let i = 0; i < 20 && !m4rOk; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      // MP4 container: bytes 4–8 are the "ftyp" box type
      const h = readFileSync(join(DOWNLOAD_DIR, 'test-tone-ringtone.m4r')).subarray(4, 8).toString('ascii');
      m4rOk = h === 'ftyp';
    } catch {}
  }
  check('m4r file valid (ftyp box)', m4rOk, m4rOk ? '' : '(missing or bad header)');

  // --- Normalize: peak lands near 0.98 (−0.2 dBFS), under the +12 dB cap ---
  const editedWav = join(DOWNLOAD_DIR, 'test-tone-edited.wav');
  await client.goto(`${BASE}/normalize-audio`, { waitUntil: 'networkidle0' });
  const normInput = await client.$('[data-file-input]');
  await normInput.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.click('[data-quick-normalize]');
  const normPressed = await client.$eval('[data-quick-normalize]', (el) => el.getAttribute('aria-pressed'));
  check('normalize toggled', normPressed === 'true', normPressed);
  await client.select('[data-format]', 'wav');
  rmSync(editedWav, { force: true });
  await client.click('[data-export]');
  const normStatus = await waitExported(client);
  check('normalize export', /Exported test-tone-edited\.wav/.test(normStatus), normStatus);
  let normStats = null;
  for (let i = 0; i < 20 && !normStats; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      normStats = wavStats(editedWav);
    } catch {}
  }
  check(
    'normalize peak ≈ 0.98',
    normStats !== null && normStats.peak > 0.95 && normStats.peak < 0.995,
    normStats ? normStats.peak.toFixed(3) : '(missing wav)',
  );

  // --- Reverb: output continues after the source so the tail is audible ---
  await client.goto(`${BASE}/slowed-reverb`, { waitUntil: 'networkidle0' });
  const revbInput = await client.$('[data-file-input]');
  await revbInput.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.$eval('[data-quick-reverb]', (el) => {
    el.value = '1';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  const revbValue = await client.$eval('[data-quick-reverb]', (el) => el.value);
  check('reverb set', revbValue === '1', revbValue);
  await client.select('[data-format]', 'wav');
  rmSync(editedWav, { force: true });
  await client.click('[data-export]');
  const revbStatus = await waitExported(client);
  check('reverb export', /Exported test-tone-edited\.wav/.test(revbStatus), revbStatus);
  let revbStats = null;
  for (let i = 0; i < 20 && !revbStats; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      revbStats = wavStats(editedWav);
    } catch {}
  }
  const srcDur = 10;
  const rms = revbStats ? tailRms(editedWav, srcDur + 0.4) : 0;
  check(
    'reverb tail after the tone',
    revbStats !== null && revbStats.duration > srcDur + 1.5 && rms > 0.002,
    revbStats ? `${revbStats.duration.toFixed(2)}s tailRms=${rms.toFixed(4)}` : '(missing wav)',
  );
} finally {
  await browser.close();
}

// --- Phase 2: voice recorder (fake microphone in a dedicated browser) ---
const recBrowser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--autoplay-policy=no-user-gesture-required'],
});
let recFailures = 0;
try {
  const page = await recBrowser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.goto(`${BASE}/voice-recorder`, { waitUntil: 'networkidle0' });
  check('recorder UI present', (await page.$('[data-recorder]')) !== null);
  await page.click('[data-rec-toggle]');
  await new Promise((r) => setTimeout(r, 2500));
  const recState = await page.evaluate(() => document.querySelector('[data-rec-live]')?.classList.contains('hidden') === false);
  check('recording started', recState);
  await page.click('[data-rec-toggle]'); // stop
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  const recName = await page.$eval('[data-file-name]', (el) => el.textContent);
  check('recording loaded into editor', /^recording-\ds\.webm$/.test(recName), recName);
  await page.select('[data-format]', 'wav');
  await page.click('[data-export]');
  const recExportStatus = await waitExported(page);
  check('recording export', /Exported recording-\ds-edited\.wav/.test(recExportStatus), recExportStatus);
} catch (e) {
  check('voice recorder flow', false, e.message.slice(0, 120));
  recFailures++;
} finally {
  await recBrowser.close();
}
failures += recFailures;
console.log(failures === 0 ? '\nFEATURES: ALL PASS' : `\nFEATURES: ${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
