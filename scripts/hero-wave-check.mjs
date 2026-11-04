/**
 * Hero waveform animation check (needs preview server on :4321).
 * Phase-independent: samples the cut-and-splice loop for 4.5s (64% of the 7s
 * cycle, long enough to always cross the splice). Passes when the right group
 * travels and the cut section reaches full transparency.
 */
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.goto(BASE, { waitUntil: 'networkidle0' });

const first = await page.evaluate(() => ({
  bars: document.querySelectorAll('svg.wave-stage rect').length,
  name: getComputedStyle(document.querySelector('svg.wave-stage')).animationName,
  rightX: document.querySelectorAll('g.wave-right rect')[1].getBoundingClientRect().x,
  cutOpacity: Number.parseFloat(getComputedStyle(document.querySelector('g.wave-cut')).opacity),
}));

let minX = first.rightX;
let maxX = first.rightX;
let minCut = first.cutOpacity;
for (let i = 0; i < 18; i++) {
  await new Promise((r) => setTimeout(r, 250));
  const s = await page.evaluate(() => ({
    rightX: document.querySelectorAll('g.wave-right rect')[1].getBoundingClientRect().x,
    cutOpacity: Number.parseFloat(getComputedStyle(document.querySelector('g.wave-cut')).opacity),
  }));
  minX = Math.min(minX, s.rightX);
  maxX = Math.max(maxX, s.rightX);
  minCut = Math.min(minCut, s.cutOpacity);
}

await browser.close();

const travel = maxX - minX;
const ok = first.bars === 77 && first.name === 'wave-cycle' && travel > 100 && minCut === 0;

console.log(JSON.stringify({ bars: first.bars, name: first.name, rightGroupTravel: travel.toFixed(1), minCutOpacity: minCut }));
console.log(ok ? 'PASS  hero cut-and-splice animation is running' : 'FAIL  hero cut-and-splice animation is not running');
process.exit(ok ? 0 : 1);
