/**
 * Analytics click-event check (needs preview server on :4321).
 * On localhost every trackEvent lands in window.__faeEvents, so this asserts
 * the delegated listener wires related-tool, guide and language clicks to the
 * plan §11.2 event names without any live endpoint.
 */
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto(`${BASE}/audio-trimmer`, { waitUntil: 'networkidle0' });

const events = await page.evaluate(() => {
  window.__faeEvents = [];
  document.querySelector('[data-analytics="related-tool"] a[href]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  document.querySelector('[data-analytics="tool-guide"] a[href]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  document.querySelector('[data-analytics="language"] a[hreflang]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  return window.__faeEvents.map((e) => e.name);
});

await browser.close();

const ok =
  events.includes('related_tool_click') &&
  events.includes('guide_click') &&
  events.includes('language_switch') &&
  errors.length === 0;

console.log(JSON.stringify({ events, pageErrors: errors.length }));
console.log(ok ? 'PASS  analytics click events wired' : 'FAIL  analytics click events missing');
process.exit(ok ? 0 : 1);
