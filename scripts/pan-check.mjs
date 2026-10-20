/**
 * Auto-pan curve, then a real export: 0.25 Hz is full right near 1 s and full left near 3 s.
 * Depth 0 keeps a stereo file balanced. Needs preview in BASE_URL (default :4321).
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { panAt } from '/tmp/pan-fn.mjs';

const near = (got, want) => Math.abs(got - want) < 1e-9;
if (!near(panAt(0, 1, 0.25), 0)) throw new Error(`t=0 ${panAt(0, 1, 0.25)}`);
if (!near(panAt(1, 1, 0.25), 1)) throw new Error(`t=1 ${panAt(1, 1, 0.25)}`);
if (!near(panAt(3, 1, 0.25), -1)) throw new Error(`t=3 ${panAt(3, 1, 0.25)}`);
if (panAt(1, 0, 0.25) !== 0) throw new Error('depth 0 should be center');
if (!near(panAt(1, 0.7, 0.25), 0.7)) throw new Error(`depth 0.7 ${panAt(1, 0.7, 0.25)}`);

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4321';
const DOWNLOAD_DIR = '/tmp/pan-downloads';
rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

const writeWav = (path, channels, seconds, sample) => {
  const rate = 44100;
  const frames = Math.floor(rate * seconds);
  const pcm = Buffer.alloc(frames * channels * 2);
  for (let i = 0; i < frames; i++) {
    const vals = sample(i / rate);
    for (let c = 0; c < channels; c++) {
      const s = Math.max(-1, Math.min(1, vals[c]));
      pcm.writeInt16LE(Math.round(s * 32767), (i * channels + c) * 2);
    }
  }
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(rate, 24);
  header.writeUInt32LE(rate * channels * 2, 28);
  header.writeUInt16LE(channels * 2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  writeFileSync(path, Buffer.concat([header, pcm]));
};

const rmsAt = (file, sec, channel) => {
  const b = readFileSync(file);
  const ch = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const i0 = Math.round(sec * rate);
  const n = Math.round(0.04 * rate);
  let acc = 0;
  let count = 0;
  for (let i = i0; i < i0 + n; i++) {
    const off = 44 + (i * ch + channel) * 2;
    if (off + 2 > b.length) break;
    const s = b.readInt16LE(off) / 32768;
    acc += s * s;
    count++;
  }
  return count ? Math.sqrt(acc / count) : 0;
};

const peakOf = (file) => {
  const b = readFileSync(file);
  const data = b.readUInt32LE(40);
  let peak = 0;
  for (let off = 44; off + 1 < 44 + data; off += 2) {
    peak = Math.max(peak, Math.abs(b.readInt16LE(off)) / 32768);
  }
  return peak;
};

const SWEEP = '/tmp/pan-sweep.wav';
const FLAT = '/tmp/pan-flat.wav';
const tone = (t) => Math.sin(2 * Math.PI * 440 * t) * 0.5;
writeWav(SWEEP, 1, 4, (t) => [tone(t)]);
writeWav(FLAT, 2, 1, (t) => [tone(t), tone(t)]);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
try {
  const page = await browser.newPage();
  const cdp = await page.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });
  await page.goto(`${BASE}/auto-panner`, { waitUntil: 'networkidle0' });
  await (await page.$('[data-file-input]')).uploadFile(SWEEP);
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await page.$eval('[data-quick-pan-depth]', (el) => {
    el.value = '100';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.$eval('[data-quick-pan-rate]', (el) => {
    el.value = '0.25';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.select('[data-format]', 'wav');
  const sweepOut = join(DOWNLOAD_DIR, 'pan-sweep-edited.wav');
  rmSync(sweepOut, { force: true });
  await page.click('[data-export]');
  let status = '';
  for (let i = 0; i < 40 && !/Exported/.test(status); i++) {
    await new Promise((r) => setTimeout(r, 250));
    status = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
  }
  if (!/Exported pan-sweep-edited\.wav/.test(status)) throw new Error(`sweep export: ${status || 'timeout'}`);
  for (let i = 0; i < 20; i++) {
    try {
      if (readFileSync(sweepOut).length > 100) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  const channels = readFileSync(sweepOut).readUInt16LE(22);
  if (channels !== 2) throw new Error(`expected stereo, got ${channels}`);
  const rightAt1 = rmsAt(sweepOut, 1, 1);
  const leftAt1 = rmsAt(sweepOut, 1, 0);
  const leftAt3 = rmsAt(sweepOut, 3, 0);
  const rightAt3 = rmsAt(sweepOut, 3, 1);
  if (!(rightAt1 > leftAt1 * 4 && rightAt1 > 0.1)) {
    throw new Error(`t=1 not right L=${leftAt1.toFixed(3)} R=${rightAt1.toFixed(3)}`);
  }
  if (!(leftAt3 > rightAt3 * 4 && leftAt3 > 0.1)) {
    throw new Error(`t=3 not left L=${leftAt3.toFixed(3)} R=${rightAt3.toFixed(3)}`);
  }

  await (await page.$('[data-file-input]')).uploadFile(FLAT);
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await page.$eval('[data-quick-pan-depth]', (el) => {
    el.value = '0';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.select('[data-format]', 'wav');
  const flatOut = join(DOWNLOAD_DIR, 'pan-flat-edited.wav');
  rmSync(flatOut, { force: true });
  await page.click('[data-export]');
  status = '';
  for (let i = 0; i < 40 && !/Exported pan-flat/.test(status); i++) {
    await new Promise((r) => setTimeout(r, 250));
    status = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
  }
  if (!/Exported pan-flat-edited\.wav/.test(status)) throw new Error(`flat export: ${status || 'timeout'}`);
  for (let i = 0; i < 20; i++) {
    try {
      if (readFileSync(flatOut).length > 100) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  const l = rmsAt(flatOut, 0.2, 0);
  const r = rmsAt(flatOut, 0.2, 1);
  const peak = peakOf(flatOut);
  if (Math.abs(l - r) >= peak * 0.01) {
    throw new Error(`depth 0 imbalance L=${l.toFixed(4)} R=${r.toFixed(4)} peak=${peak.toFixed(4)}`);
  }
  console.log(`pan-check ok right@1=${rightAt1.toFixed(3)} left@3=${leftAt3.toFixed(3)} flatΔ=${Math.abs(l - r).toFixed(4)}`);
} finally {
  await browser.close();
}
