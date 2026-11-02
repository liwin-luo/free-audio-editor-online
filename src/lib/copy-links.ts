import { TOOLS } from '../data/tools';
import { GUIDES } from '../data/guides';
import { localePath, type Locale } from '../i18n/locales';

const ALLOW = new Set<string>(['mcp', ...TOOLS.map((tool) => tool.slug)]);

export interface CopyPart {
  link: boolean;
  value: string;
  href?: string;
}

/** A guide article exists at `href` (locale-free path) in this locale. */
function guideExists(href: string, locale: Locale): boolean {
  return GUIDES.some((g) => g.locale === locale && g.href === localePath(locale, href));
}

/** `[label](/slug)` for a live tool, `[label](/guides/slug)` for a guide in this locale, plus a bare `/mcp`. Anything else stays text. */
export function splitCopy(text: string, locale: Locale = 'en'): CopyPart[] {
  const re = /\[([^\]]+)\]\((\/[a-z0-9-]+(?:\/[a-z0-9-]+)?)\)/g;
  const parts: CopyPart[] = [];
  let last = 0;
  for (const match of text.matchAll(re)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(...bareMcp(text.slice(last, index)));
    const label = match[1] ?? '';
    const href = match[2] ?? '';
    const allowed = href.startsWith('/guides/')
      ? guideExists(href, locale)
      : ALLOW.has(href.slice(1));
    if (allowed) parts.push({ link: true, value: label, href });
    else parts.push({ link: false, value: match[0] });
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(...bareMcp(text.slice(last)));
  return parts.length > 0 ? parts : [{ link: false, value: text }];
}

function bareMcp(text: string): CopyPart[] {
  return text
    .split(/(\/mcp)(?![A-Za-z0-9_-])/)
    .filter((part) => part.length > 0)
    .map((value) => (value === '/mcp' ? { link: true, value, href: '/mcp' } : { link: false, value }));
}
