/**
 * Music visualizer checks.
 * Phase 1 (pure math): log band edges stay monotonic, a 440 Hz / 5 kHz sine
 *   lands in the band bracketing its bin, silence stays flat, sizes clamp.
 * Phase 2 (E2E): loads the page with a 3 s tone, records the video export,
 *   and asserts the download is a real WebM (EBML header, non-trivial size).
 * Needs preview in BASE_URL (default :4321).
 * Run: node_modules/.bin/esbuild src/editor/music-visualizer.ts --bundle --platform=node --format=esm --outfile=/tmp/mv-fn.mjs && node scripts/music-visualizer-check.mjs
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { logBinEdges, barHeights, clampVideoSide, MV_MIN_SIDE, MV_MAX_SIDE } from '/tmp/mv-fn.mjs';

let failed = false;
const assert = (ok, msg) => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!ok) failed = true;
};

// ---- Phase 1: band math ----------------------------------------------------

const BARS = 64;
const FFT = 2048;
const RATE = 44100;
const BINS = FFT >> 1;
const edges = logBinEdges(BARS, FFT, RATE, 30, 16000);

let monotonic = true;
for (let i = 1; i < edges.length; i++) if (edges[i] <= edges[i - 1]) monotonic = false;
assert(monotonic, `edges strictly increase (got ${edges[0]}…${edges[edges.length - 1]})`);
assert(edges[0] >= 1 && edges[edges.length - 1] < BINS, `edges inside 1…${BINS - 1}`);

const binOf = (hz) => Math.round((hz / (RATE / 2)) * BINS);
const bandOf = (bin) => {
  for (let b = 0; b < BARS; b++) if (bin >= edges[b] && bin < edges[b + 1]) return b;
  return -1;
};

const spectrum = new Uint8Array(BINS);
const bump = (hz, level) => {
  const bin = binOf(hz);
  spectrum[bin] = level;
  if (bin > 0) spectrum[bin - 1] = level;
  if (bin < BINS - 1) spectrum[bin + 1] = level;
};

const heights = barHeights(spectrum, edges);
assert(heights.every((h) => h === 0), 'silence draws a flat frame');

bump(440, 250);
const h440 = barHeights(spectrum, edges);
const b440 = bandOf(binOf(440));
assert(b440 >= 0 && h440[b440] > 0.9, `440 Hz peaks in band ${b440} at ${h440[b440]?.toFixed(2)}`);

bump(5000, 250);
const h5k = barHeights(spectrum, edges);
const b5k = bandOf(binOf(5000));
assert(b5k > b440 && h5k[b5k] > 0.9, `5 kHz lands in a higher band (${b5k} > ${b440}) at ${h5k[b5k]?.toFixed(2)}`);

const narrow = new Uint8Array(BINS);
narrow[binOf(440)] = 128;
assert(barHeights(narrow, edges).reduce((a, b) => a + b, 0) > 0.49, 'height normalizes to peak/255');

assert(clampVideoSide(50) === MV_MIN_SIDE && clampVideoSide(99999) === MV_MAX_SIDE, 'custom sizes clamp to capture-safe bounds');
assert(clampVideoSide(1079.4) === 1079 && clampVideoSide(1080.6) === 1081, 'sides round to whole pixels');

if (failed) process.exit(1);

// ---- Phase 2: record a real export ----------------------------------------

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4321';
const DOWNLOAD_DIR = '/tmp/mv-downloads';
rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

const tone = join(DOWNLOAD_DIR, 'tone.wav');
const seconds = 3;
const rate = 44100;
{
  const frames = seconds * rate;
  const pcm = Buffer.alloc(frames * 2);
  for (let i = 0; i < frames; i++) pcm.writeInt16LE(Math.round(Math.sin((2 * Math.PI * 440 * i) / rate) * 0.5 * 32767), i * 2);
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
  writeFileSync(tone, Buffer.concat([header, pcm]));
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  const cdp = await page.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });

  await page.goto(BASE + '/music-visualizer', { waitUntil: 'networkidle0', timeout: 30000 });
  const fileInput = await page.$('[data-music-visualizer] input[data-file-input]');
  await fileInput.uploadFile(tone);
  await page.waitForFunction(
    () => {
      const ws = document.querySelector('[data-music-visualizer] [data-workspace]');
      return ws && !ws.classList.contains('hidden');
    },
    { timeout: 15000 },
  );
  await page.waitForSelector('[data-music-visualizer] [data-export]:not([disabled])', { timeout: 10000 });

  // A synthetic click: page.click misses here because the canvas resize after
  // load reflows the export bar between hover and mousedown.
  await page.evaluate(() => document.querySelector('[data-music-visualizer] [data-export]').click());

  let video = null;
  for (let i = 0; i < 60 && !video; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    const files = readdirSync(DOWNLOAD_DIR).filter((f) => f !== 'tone.wav' && !f.endsWith('.crdownload'));
    if (files.length) video = join(DOWNLOAD_DIR, files[0]);
  }
  assert(video, 'export produced a download');

  if (video) {
    const head = readFileSync(video).subarray(0, 4);
    const size = readFileSync(video).length;
    const isWebm = head[0] === 0x1a && head[1] === 0x45 && head[2] === 0xdf && head[3] === 0xa3;
    assert(isWebm, 'download starts with the WebM EBML header');
    assert(size > 100000, `download is substantial (${(size / 1024).toFixed(0)} KB for a ${seconds} s clip)`);
  }
} finally {
  await browser.close();
}

console.log(failed ? '\nMUSIC-VISUALIZER: FAIL' : '\nMUSIC-VISUALIZER: ALL PASS');
process.exit(failed ? 1 : 0);
