/**
 * Product analytics events (90-day plan §11.2). Events flow to Vercel Web
 * Analytics via its track() — the same cookieless, aggregate-only basis as the
 * automatic page_view — and to GA4 when PUBLIC_GA4_ID is set and the user
 * accepted optional cookies (consent.ts injects gtag next to Clarity).
 *
 * Privacy (plan §11.4): never send file names or audio data; file sizes only
 * as a coarse bucket. On localhost events are appended to window.__faeEvents
 * so checks can assert on them without a live endpoint.
 */

type EventProps = Record<string, string | number | undefined>;

type EventWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  __faeEvents?: { name: string; props: EventProps }[];
};

const GA4_ID = import.meta.env.PUBLIC_GA4_ID as string | undefined;

/** Tool slug for /audio-trimmer and /es/audio-trimmer alike. */
export function toolSlugFromPath(): string {
  const parts = location.pathname.split('/').filter(Boolean);
  const first = parts[0] ?? '';
  return first.length === 2 && first !== 'en' ? (parts[1] ?? '') : first;
}

/** Coarse file-size bucket — never the exact byte count or the file name. */
export function sizeBucket(bytes: number): string {
  if (bytes <= 5 * 1024 * 1024) return 'le5m';
  if (bytes <= 30 * 1024 * 1024) return 'le30m';
  if (bytes <= 100 * 1024 * 1024) return 'le100m';
  return 'gt100m';
}

export function trackEvent(name: string, props: EventProps = {}): void {
  try {
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      const w = window as EventWindow;
      (w.__faeEvents ??= []).push({ name, props });
      return;
    }
    if (GA4_ID) (window as EventWindow).gtag?.('event', name, props);
    import('@vercel/analytics')
      .then(({ track }) => track(name, props))
      .catch(() => {});
  } catch {
    /* analytics must never break the tool */
  }
}
