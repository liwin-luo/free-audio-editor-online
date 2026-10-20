/**
 * 120 BPM clicks read 120 ±2. Silence is unread. A440 is A major.
 * Then the same three files through the page. Needs preview in BASE_URL.
 */
import puppeteer from 'puppeteer-core';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { readKeyBpm } from '/tmp/key-bpm-fn.mjs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4321';
const RATE = 44100;

function clicks(bpm, seconds) {
  const out = new Float32Array(Math.floor(seconds * RATE));
  const interval = 60 / bpm;
  for (let i = 0; i * interval < seconds - 0.05; i++) {
    const start = Math.round(i * interval * RATE);
    for (let k = 0; k < 300 && start + k < out.length; k++) {
      out[start + k] = Math.sin((2 * Math.PI * 1000 * k) / RATE) * Math.exp(-k / (RATE * 0.004));
    }
  }
  return out;
}

function tone(hz, seconds) {
  const out = new Float32Array(Math.floor(seconds * RATE));
  for (let i = 0; i < out.length; i++) out[i] = Math.sin((2 * Math.PI * hz * i) / RATE) * 0.4;
  return out;
}

function writeWav(path, samples) {
  const pcm = Buffer.alloc(samples.length * 2);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    pcm.writeInt16LE(Math.round(s * 32767), i * 2);
  }
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(RATE, 24);
  header.writeUInt32LE(RATE * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  writeFileSync(path, Buffer.concat([header, pcm]));
}

const click = clicks(120, 8);
const sine = tone(440, 2);
const zeros = new Float32Array(RATE * 3);
const clickRead = readKeyBpm([click], RATE);
const sineRead = readKeyBpm([sine], RATE);
const zeroRead = readKeyBpm([zeros], RATE);
if (clickRead.bpm == null || Math.abs(clickRead.bpm - 120) > 2) throw new Error(`bpm ${clickRead.bpm}`);
if (zeroRead.bpm != null || zeroRead.tonic != null) throw new Error(`zeros ${JSON.stringify(zeroRead)}`);
if (sineRead.tonic !== 9 || sineRead.mode !== 'major') throw new Error(`A440 ${sineRead.tonic} ${sineRead.mode}`);

const dir = '/tmp/key-bpm-fixtures';
mkdirSync(dir, { recursive: true });
const clickPath = join(dir, 'clicks.wav');
const sinePath = join(dir, 'a440.wav');
const zeroPath = join(dir, 'zeros.wav');
writeWav(clickPath, click);
writeWav(sinePath, sine);
writeWav(zeroPath, zeros);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
try {
  const page = await browser.newPage();
  await page.goto(`${BASE}/key-bpm-finder`, { waitUntil: 'networkidle0' });
  await page.waitForSelector('[data-key-bpm] [data-file-input]');
  const transpose = await page.$('[data-pitch], [data-export]');
  if (transpose) throw new Error('page has a pitch or export control');

  const read = async (file) => {
    await (await page.$('[data-file-input]')).uploadFile(file);
    await page.waitForFunction(() => {
      const t = document.querySelector('[data-key-bpm-bpm]')?.textContent?.trim() ?? '';
      return t === "Can't read" || /^\d+$/.test(t);
    });
    const bpm = await page.$eval('[data-key-bpm-bpm]', (el) => el.textContent.trim());
    const key = await page.$eval('[data-key-bpm-key]', (el) => el.textContent.trim());
    await page.click('[data-reset]');
    await page.waitForSelector('[data-dropzone]:not([hidden])');
    return { bpm, key };
  };

  const onPage = await read(clickPath);
  const bpmNum = Number(onPage.bpm);
  if (!Number.isFinite(bpmNum) || Math.abs(bpmNum - 120) > 2) throw new Error(`page bpm ${onPage.bpm}`);
  const a = await read(sinePath);
  if (a.key !== 'A major') throw new Error(`page key ${a.key}`);
  if (a.bpm !== "Can't read") throw new Error(`sine bpm ${a.bpm}`);
  const z = await read(zeroPath);
  if (z.bpm !== "Can't read" || z.key !== "Can't read") throw new Error(`page zeros ${z.bpm} ${z.key}`);
  console.log(`key-bpm-check ok bpm=${clickRead.bpm} page=${onPage.bpm} A=major silent=unread`);
} finally {
  await browser.close();
}
