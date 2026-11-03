/**
 * Capture real UI screenshots for tool pages (docs/seo.md "证据资产").
 * Requires: preview server running (npm run preview) + system Chrome.
 * Run: node scripts/capture-screenshots.mjs [slug ...]
 * Writes public/screenshots/{slug}-1.webp (dropzone), -2.webp (the page's
 * control set on a loaded file), -3.webp (the export finished — the status
 * line names the downloaded file). Re-run whenever the editor UI changes —
 * a stale screenshot is fake evidence.
 */
import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { generateTestWav } from './make-test-tone.mjs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const MELODY = '/tmp/screenshot-melody.wav';
const OUT_DIR = 'public/screenshots';
const DOWNLOAD_DIR = '/tmp/capture-downloads';

const TOOLS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['compress-audio', 'ringtone-maker', 'slowed-reverb'];

/**
 * How to set one control into a state worth photographing, per slug.
 * selector + either value (range/select) or click (button/preset).
 * Without an entry the script falls back to the first quick-control range.
 */
const ADJUST = {
  'noise-remover': [{ selector: '[data-noise-strength]', value: '100' }],
  'voice-changer': [{ selector: '[data-voice="robot"]', click: true }],
  'silence-remover': [{ selector: '[data-silence-gap]', value: '0.1' }],
  'bitcrusher': [{ selector: '[data-crush-bits]', value: '3' }],
  'audio-looper': [{ selector: '[data-loop-times]', value: '8' }],
  'split-mp3': [{ selector: '[data-split-parts]', value: '4' }],
  'metronome': [{ selector: '[data-metro-bpm]', value: '140' }],
  'add-reverb': [{ selector: '[data-quick-reverb]', value: '0.6' }],
  'slowed-reverb': [{ selector: '[data-quick-speed]', value: '0.8' }],
  'increase-volume': [{ selector: '[data-quick-gain]', value: '200' }],
  'volume-booster': [{ selector: '[data-quick-gain]', value: '200' }],
  'change-audio-speed': [{ selector: '[data-quick-speed]', value: '1.5' }],
  'pitch-changer': [{ selector: '[data-quick-pitch]', value: '4' }],
  'bass-booster': [{ selector: '[data-quick-bass]', value: '10' }],
  'treble-booster': [{ selector: '[data-quick-treble]', value: '10' }],
  'equalizer': [{ selector: '[data-eq10]', index: 0, value: '8' }],
  'echo': [{ selector: '[data-quick-echo-delay]', value: '0.4' }],
  'audio-distorter': [{ selector: '[data-quick-distort]', value: '0.6' }],
  'compressor': [{ selector: '[data-quick-compress]', value: '0.6' }],
  'auto-panner': [{ selector: '[data-quick-pan-depth]', value: '0.8' }],
  '3d-audio': [{ selector: '[data-quick-circle]', value: '0.6' }],
  'low-pass-filter': [{ selector: '[data-quick-lpf]', value: '1200' }],
  'high-pass-filter': [{ selector: '[data-quick-hpf]', value: '800' }],
  'fade-audio': [{ selector: '[data-fade-in]', value: '2' }],
  'mp3-editor': [{ selector: '[data-quick-speed]', value: '1.25' }],
  'tap-tempo': null, // custom branch below
};

if (!existsSync(CHROME)) {
  console.error('Chrome not found at', CHROME);
  process.exit(2);
}
if (!existsSync(MELODY)) {
  generateTestWav(MELODY, 12);
  console.log('Generated test melody at', MELODY);
}
mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1280,860'],
});

let failures = 0;
for (const slug of TOOLS) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 860, deviceScaleFactor: 1.5 });
  await page.evaluateOnNewDocument(() => {
    try { localStorage.setItem('fae-consent-2', 'rejected'); } catch {}
  });
  const cdp = await page.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });
  try {
    await page.goto(`${BASE}/${slug}`, { waitUntil: 'networkidle0', timeout: 30000 });

    if (slug === 'tap-tempo') {
      // No-file island: capture the fresh island, then a settled readout.
      await page.waitForSelector('[data-tap-tempo]', { timeout: 10000 });
      const section = await page.$('section[aria-label]');
      await section.screenshot({ path: join(OUT_DIR, `${slug}-1.webp`), type: 'webp', quality: 82 });
      console.log(`PASS  ${slug}-1.webp (fresh island)`);
      await page.evaluate(() => new Promise((resolve) => {
        let i = 0;
        const t = setInterval(() => {
          document.querySelector('[data-tap]')?.click();
          if (++i >= 7) { clearInterval(t); resolve(null); }
        }, 500);
      }));
      await new Promise((r) => setTimeout(r, 300));
      await section.screenshot({ path: join(OUT_DIR, `${slug}-2.webp`), type: 'webp', quality: 82 });
      console.log(`PASS  ${slug}-2.webp (settled readout)`);
      await page.close();
      continue;
    }

    const section = await page.$('section[aria-label]');

    // 1 — dropzone state, editor section only
    await page.waitForSelector('[data-dropzone]', { timeout: 10000 });
    await section.screenshot({ path: join(OUT_DIR, `${slug}-1.webp`), type: 'webp', quality: 82 });
    console.log(`PASS  ${slug}-1.webp (dropzone)`);

    // 2 — workspace with a file loaded
    const input = await page.$('[data-file-input]');
    await input.uploadFile(MELODY);
    await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 800));
    await section.screenshot({ path: join(OUT_DIR, `${slug}-2.webp`), type: 'webp', quality: 82 });
    console.log(`PASS  ${slug}-2.webp (workspace)`);

    // 3 — the page's control turned into a state worth photographing
    const steps = ADJUST[slug] ?? null;
    let adjusted = false;
    if (steps) {
      for (const step of steps) {
        try {
          if (step.click) {
            await page.click(step.selector);
          } else if (step.index !== undefined) {
            await page.$$eval(step.selector, (els, v) => {
              const el = els[v.index ?? 0];
              if (!el) return;
              el.value = String(v.value);
              el.dispatchEvent(new Event('input', { bubbles: true }));
              el.dispatchEvent(new Event('change', { bubbles: true }));
            }, step);
          } else if (step.value !== undefined) {
            await page.$eval(step.selector, (el, v) => {
              el.value = String(v);
              el.dispatchEvent(new Event('input', { bubbles: true }));
              el.dispatchEvent(new Event('change', { bubbles: true }));
            }, step.value);
          }
          adjusted = true;
        } catch {}
      }
    } else {
      // Generic fallback: nudge the first quick-control range to ~70 %.
      adjusted = await page.evaluate(() => {
        const el = document.querySelector('[data-audio-editor] input[type="range"][data-quick-]');
        if (!el) return false;
        const min = Number(el.min || 0), max = Number(el.max || 100);
        el.value = String(min + (max - min) * 0.7);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      });
    }
    if (adjusted) {
      await new Promise((r) => setTimeout(r, 2500)); // let the preview re-render
      await section.screenshot({ path: join(OUT_DIR, `${slug}-2.webp`), type: 'webp', quality: 82 });
      console.log(`PASS  ${slug}-2.webp (adjusted state)`);
    }

    // 4 — export finished: the status line names the downloaded file
    await page.select('[data-format]', 'wav').catch(() => {});
    let exported = '';
    for (let i = 0; i < 90 && !/Exported|Download/i.test(exported); i++) {
      if (i % 4 === 0) { try { await page.click('[data-export]'); } catch {} }
      await new Promise((r) => setTimeout(r, 500));
      exported = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
    }
    if (/Exported/.test(exported)) {
      await new Promise((r) => setTimeout(r, 500));
      await section.screenshot({ path: join(OUT_DIR, `${slug}-3.webp`), type: 'webp', quality: 82 });
      console.log(`PASS  ${slug}-3.webp (export finished)`);
    } else {
      console.log(`SKIP  ${slug}-3.webp (export did not finish: ${exported.slice(0, 60)})`);
    }
  } catch (err) {
    failures++;
    console.log(`FAIL  ${slug}: ${err.message}`);
  }
  await page.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
