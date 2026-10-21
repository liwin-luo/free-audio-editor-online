/** Same key as the inline reveal script in CookieNotice.astro. */
export const CONSENT_KEY = 'fae-consent';

import { shouldLoadFeedback } from './feedback-consent.mjs';

export { shouldLoadFeedback };

const CONSENT_EVENT = 'fae-consent';
const USERBACK_TOKEN = 'A-cawCPZd8Mqr5Qea3QzjeqN8lP';

function readConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function installConsent(doc: Document): void {
  const view = doc.defaultView;
  if (!view) return;

  const root = doc.getElementById('cookie-notice');
  if (root && readConsent() === null) root.hidden = false;

  root?.addEventListener('click', (event) => {
    const button = (event.target as Element | null)?.closest?.('[data-cookie]');
    if (!(button instanceof Element) || !root?.contains(button)) return;
    const value = button.getAttribute('data-cookie');
    if (value !== 'accepted' && value !== 'rejected') return;
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      return;
    }
    root.hidden = true;
    doc.dispatchEvent(new Event(CONSENT_EVENT));
  });

  let loaded = false;
  let armed = false;

  function load() {
    if (!shouldLoadFeedback(readConsent()) || loaded) return;
    loaded = true;
    const w = view as Window & { Userback?: { access_token?: string } };
    w.Userback = w.Userback || {};
    w.Userback.access_token = USERBACK_TOKEN;
    const s = doc.createElement('script');
    s.async = true;
    s.src = 'https://static.userback.io/widget/v1.js';
    (doc.head || doc.body).appendChild(s);
  }

  // Prior accept: same delay as before, so the widget stays off first paint.
  function arm() {
    if (armed || !shouldLoadFeedback(readConsent())) return;
    armed = true;
    doc.addEventListener('pointerdown', load, { once: true, passive: true });
    doc.addEventListener('keydown', load, { once: true });
    view.setTimeout(() => {
      const idle = view.requestIdleCallback;
      if (typeof idle === 'function') idle(() => load(), { timeout: 2000 });
      else load();
    }, 8000);
  }

  doc.addEventListener(CONSENT_EVENT, load);
  arm();
}
