/**
 * 440 Hz, 1 s, at 0.8×: duration 1.25 s ±20 ms, zero-crossings still ~440 Hz (±3%).
 * 1× keeps the duration and does not run the vocoder (samples match the dry copy).
 * Needs preview in BASE_URL.
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tempoKeepPitch } from '/tmp/tempo-fn.mjs';

const sr = 44100;
const sine = new Float32Array(sr);
for (let i = 0; i < sr; i++) sine[i] = Math.sin((2 * Math.PI * 440 * i) / sr) * 0.5;

function zcHz(samples, rate) {
  const a = Math.floor(samples.length * 0.25);
  const b = Math.floor(samples.length * 0.75);
  let n = 0;
  for (let i = a + 1; i < b; i++) if (samples[i - 1] <= 0 && samples[i] > 0) n++;
  return n / ((b - a) / rate);
}

const slow = tempoKeepPitch(sine, 0.8, sr);
const dur = slow.length / sr;
if (Math.abs(dur - 1.25) > 0.02) throw new Error(`duration ${dur}`);
const hz = zcHz(slow, sr);
if (Math.abs(hz - 440) / 440 > 0.03) throw new Error(`hz ${hz}`);

const unity = tempoKeepPitch(sine, 1, sr);
if (unity.length !== sine.length) throw new Error(`1× length ${unity.length}`);
let max = 0;
for (let i = 0; i < sine.length; i++) max = Math.max(max, Math.abs(unity[i] - sine[i]));
if (max !== 0) throw new Error(`1× drifted ${max}`);

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4321';
const DOWNLOAD_DIR = '/tmp/tempo-downloads';
const FIXTURE = '/tmp/tempo-sine.wav';

function writeWav(path, samples, rate) {
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
  header.writeUInt32LE(rate, 24);
  header.writeUInt32LE(rate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  writeFileSync(path, Buffer.concat([header, pcm]));
}

function readWav(file) {
  const b = readFileSync(file);
  const channels = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const data = b.readUInt32LE(40);
  const frames = data / (channels * 2);
  const samples = new Float32Array(frames);
  for (let i = 0; i < frames; i++) samples[i] = b.readInt16LE(44 + i * channels * 2) / 32768;
  return { samples, rate };
}

writeWav(FIXTURE, sine, sr);
rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

async function waitWav() {
  for (let i = 0; i < 80; i++) {
    const names = readdirSync(DOWNLOAD_DIR).filter((n) => n.endsWith('.wav'));
    if (names.length) {
      const file = join(DOWNLOAD_DIR, names[0]);
      if (readFileSync(file).length > 1000) return file;
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('export missing');
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
try {
  const page = await browser.newPage();
  const cdp = await page.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });
  await page.goto(`${BASE}/tempo-changer`, { waitUntil: 'networkidle0' });
  const bounds = await page.$eval('[data-quick-tempo]', (el) => ({
    min: el.min,
    max: el.max,
    step: el.step,
    value: el.value,
  }));
  if (bounds.min !== '0.75' || bounds.max !== '1.25' || bounds.step !== '0.01' || bounds.value !== '1') {
    throw new Error(`slider ${JSON.stringify(bounds)}`);
  }
  await (await page.$('[data-file-input]')).uploadFile(FIXTURE);
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 15000 });
  await page.select('[data-format]', 'wav');

  await page.$eval('[data-quick-tempo]', (el) => {
    el.value = '0.8';
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.click('[data-export]');
  const slowFile = await waitWav();
  const exported = readWav(slowFile);
  const exportedDur = exported.samples.length / exported.rate;
  const exportedHz = zcHz(exported.samples, exported.rate);
  if (Math.abs(exportedDur - 1.25) > 0.02) throw new Error(`page duration ${exportedDur}`);
  if (Math.abs(exportedHz - 440) / 440 > 0.03) throw new Error(`page hz ${exportedHz}`);

  rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
  mkdirSync(DOWNLOAD_DIR, { recursive: true });
  await page.$eval('[data-quick-tempo]', (el) => {
    el.value = '1';
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.click('[data-export]');
  const unityFile = await waitWav();
  const once = readWav(unityFile);
  const onceDur = once.samples.length / once.rate;
  if (Math.abs(onceDur - 1) > 0.02) throw new Error(`1× page duration ${onceDur}`);
  const onceHz = zcHz(once.samples, once.rate);
  if (Math.abs(onceHz - 440) / 440 > 0.03) throw new Error(`1× page hz ${onceHz}`);

  console.log(
    `tempo-check ok dur=${dur.toFixed(4)} hz=${hz.toFixed(2)} page=${exportedDur.toFixed(4)} pageHz=${exportedHz.toFixed(2)} unity=${onceDur.toFixed(4)}`,
  );
} finally {
  await browser.close();
}
