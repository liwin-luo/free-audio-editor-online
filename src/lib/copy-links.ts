import { TOOLS } from '../data/tools';

const ALLOW = new Set<string>(['mcp', ...TOOLS.map((tool) => tool.slug)]);

export interface CopyPart {
  link: boolean;
  value: string;
  href?: string;
}

/** `[label](/slug)` for a live tool, plus a bare `/mcp`. Anything else stays text. */
export function splitCopy(text: string): CopyPart[] {
  const re = /\[([^\]]+)\]\((\/[a-z0-9-]+)\)/g;
  const parts: CopyPart[] = [];
  let last = 0;
  for (const match of text.matchAll(re)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(...bareMcp(text.slice(last, index)));
    const label = match[1] ?? '';
    const href = match[2] ?? '';
    const slug = href.slice(1);
    if (ALLOW.has(slug)) parts.push({ link: true, value: label, href });
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
