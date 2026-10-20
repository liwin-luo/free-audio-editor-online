/**
 * 100 BPM, 4/4, 4 bars: 16 clicks, 0.60 s apart, accents on 1, 5, 9, 13.
 * Then the same count on a WAV exported from the page. Needs preview in BASE_URL.
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { clickTrack } from '/tmp/metro-fn.mjs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4321';
const DOWNLOAD_DIR = '/tmp/metro-downloads';

function clicksOf(samples, rate) {
  const peaks = [];
  const hop = Math.round(0.04 * rate);
  for (let i = 0; i < samples.length; i++) {
    if (Math.abs(samples[i]) <= 0.05) continue;
    let max = 0;
    let at = i;
    const end = Math.min(samples.length, i + hop);
    for (let k = i; k < end; k++) {
      const a = Math.abs(samples[k]);
      if (a > max) {
        max = a;
        at = k;
      }
    }
    peaks.push({ t: at / rate, max });
    i = end;
  }
  return peaks;
}

function assertGrid(samples, rate, beats, perBar) {
  const peaks = clicksOf(samples, rate);
  if (peaks.length !== beats) throw new Error(`clicks ${peaks.length}, expected ${beats}`);
  for (let i = 1; i < peaks.length; i++) {
    const dt = peaks[i].t - peaks[i - 1].t;
    if (Math.abs(dt - 0.6) > 0.01) throw new Error(`interval ${dt.toFixed(4)} at ${i}`);
  }
  for (let i = 0; i < peaks.length; i++) {
    if (i % perBar !== 0 || i + 1 >= peaks.length) continue;
    if (peaks[i].max <= peaks[i + 1].max * 1.5) {
      throw new Error(`beat ${i + 1} not louder: ${peaks[i].max.toFixed(3)} vs ${peaks[i + 1].max.toFixed(3)}`);
    }
  }
  return peaks;
}

const fn = clickTrack(100, '4/4', 4, 44100);
assertGrid(fn, 44100, 16, 4);
assertGrid(clickTrack(100, '6/8', 4, 44100), 44100, 24, 6);

rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

function samplesOf(file) {
  const b = readFileSync(file);
  const ch = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const data = b.readUInt32LE(40);
  const frames = data / (ch * 2);
  const samples = new Float32Array(frames);
  for (let i = 0; i < frames; i++) samples[i] = b.readInt16LE(44 + i * ch * 2) / 32768;
  return { samples, rate };
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
  await page.goto(`${BASE}/metronome`, { waitUntil: 'networkidle0' });
  await page.waitForSelector('[data-metronome] [data-export]');
  const bpm = await page.$eval('[data-metro-bpm]', (el) => el.value);
  const meter = await page.$eval('[data-metro-meter]', (el) => el.value);
  const bars = await page.$eval('[data-metro-bars]', (el) => el.value);
  if (bpm !== '100' || meter !== '4/4' || bars !== '4') throw new Error(`defaults ${bpm} ${meter} ${bars}`);
  const out = join(DOWNLOAD_DIR, 'metronome-100.wav');
  rmSync(out, { force: true });
  await page.select('[data-format]', 'wav');
  await page.click('[data-export]');
  let file = '';
  for (let i = 0; i < 80; i++) {
    try {
      if (readFileSync(out).length > 1000) {
        file = out;
        break;
      }
    } catch {
      /* not yet */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  if (!file) throw new Error('export missing');
  const wav = samplesOf(file);
  const peaks = assertGrid(wav.samples, wav.rate, 16, 4);
  console.log(`metronome-check ok clicks=${peaks.length} dt=${(peaks[1].t - peaks[0].t).toFixed(4)} accent=${peaks[0].max.toFixed(3)} tick=${peaks[1].max.toFixed(3)}`);
} finally {
  await browser.close();
}
