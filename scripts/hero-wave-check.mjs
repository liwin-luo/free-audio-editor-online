/**
 * Hero waveform animation check (needs preview server on :4321).
 * Asserts every hero bar carries the CSS animation and that a bar's rendered
 * height actually changes over time (i.e. the waveform is moving, not static).
 */
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.goto(BASE, { waitUntil: 'networkidle0' });

const first = await page.evaluate(() => {
  const bars = document.querySelectorAll('rect.hero-bar');
  const cs = getComputedStyle(bars[0]);
  return {
    count: bars.length,
    name: cs.animationName,
    duration: cs.animationDuration,
    delay: cs.animationDelay,
    height: bars[10].getBoundingClientRect().height,
  };
});

await new Promise((r) => setTimeout(r, 700));

const second = await page.evaluate(() => document.querySelectorAll('rect.hero-bar')[10].getBoundingClientRect().height);

await browser.close();

const ok =
  first.count === 75 &&
  first.name === 'hero-bounce' &&
  Number.parseFloat(first.duration) > 0 &&
  Math.abs(second - first.height) > 0.5;

console.log(JSON.stringify({ ...first, sampledHeight: second, moved: Math.abs(second - first.height).toFixed(2) }));
console.log(ok ? 'PASS  hero waveform is animating' : 'FAIL  hero waveform is not animating');
process.exit(ok ? 0 : 1);
