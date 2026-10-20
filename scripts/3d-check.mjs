/**
 * 3D preset: circle on swaps left/right over an 8 s file and leaves a reverb tail.
 * Circle off keeps the length and the balance. Needs preview in BASE_URL (default :4321).
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4321';
const DOWNLOAD_DIR = '/tmp/3d-downloads';
rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

const writeWav = (path, seconds) => {
  const rate = 44100;
  const channels = 2;
  const frames = Math.floor(rate * seconds);
  const pcm = Buffer.alloc(frames * channels * 2);
  for (let i = 0; i < frames; i++) {
    const s = Math.round(Math.sin((2 * Math.PI * 440 * i) / rate) * 0.4 * 32767);
    pcm.writeInt16LE(s, i * 4);
    pcm.writeInt16LE(s, i * 4 + 2);
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

const wavDur = (file) => {
  const b = readFileSync(file);
  const ch = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const data = b.readUInt32LE(40);
  return data / (rate * ch * 2);
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
  for (let off = 44; off + 1 < 44 + data; off += 2) peak = Math.max(peak, Math.abs(b.readInt16LE(off)) / 32768);
  return peak;
};

const SRC = '/tmp/circle-tone.wav';
writeWav(SRC, 8);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
try {
  const page = await browser.newPage();
  const cdp = await page.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });
  const exportWav = async (outName) => {
    const out = join(DOWNLOAD_DIR, outName);
    rmSync(out, { force: true });
    await page.select('[data-format]', 'wav');
    await page.click('[data-export]');
    for (let i = 0; i < 80; i++) {
      try {
        if (readFileSync(out).length > 1000) return out;
      } catch {}
      await new Promise((r) => setTimeout(r, 250));
    }
    throw new Error(`missing ${outName}`);
  };

  await page.goto(`${BASE}/3d-audio`, { waitUntil: 'networkidle0' });
  const pressed = await page.$eval('[data-quick-circle]', (el) => el.getAttribute('aria-pressed'));
  if (pressed !== 'true') throw new Error(`circle starts off: ${pressed}`);
  await (await page.$('[data-file-input]')).uploadFile(SRC);
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  const onFile = await exportWav('circle-tone-edited.wav');
  const onDur = wavDur(onFile);
  const right = rmsAt(onFile, 2.5, 1);
  const left = rmsAt(onFile, 2.5, 0);
  const leftLate = rmsAt(onFile, 7.5, 0);
  const rightLate = rmsAt(onFile, 7.5, 1);
  const tail = rmsAt(onFile, 8.6, 0) + rmsAt(onFile, 8.6, 1);
  if (!(onDur > 9.5)) throw new Error(`tail missing, duration ${onDur.toFixed(2)}`);
  if (!(right > left * 1.4 && right > 0.05)) throw new Error(`t=2.5 not right L=${left.toFixed(3)} R=${right.toFixed(3)}`);
  if (!(leftLate > rightLate * 1.4 && leftLate > 0.05)) throw new Error(`t=7.5 not left L=${leftLate.toFixed(3)} R=${rightLate.toFixed(3)}`);
  if (!(tail > 0.002)) throw new Error(`tail energy ${tail.toFixed(4)}`);

  await page.click('[data-quick-circle]');
  const off = await page.$eval('[data-quick-circle]', (el) => el.getAttribute('aria-pressed'));
  if (off !== 'false') throw new Error(`circle did not turn off: ${off}`);
  const offFile = await exportWav('circle-tone-edited.wav');
  const offDur = wavDur(offFile);
  const l = rmsAt(offFile, 2.5, 0);
  const r = rmsAt(offFile, 2.5, 1);
  const peak = peakOf(offFile);
  if (!(offDur < 8.2)) throw new Error(`off still has a tail, duration ${offDur.toFixed(2)}`);
  if (Math.abs(l - r) >= peak * 0.01) throw new Error(`off imbalance L=${l.toFixed(4)} R=${r.toFixed(4)} peak=${peak.toFixed(4)}`);
  console.log(`3d-check ok on=${onDur.toFixed(2)}s right@2.5=${right.toFixed(3)} left@7.5=${leftLate.toFixed(3)} tail=${tail.toFixed(3)} off=${offDur.toFixed(2)}s`);
} finally {
  await browser.close();
}
