export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

export type InlinePart = { type: 'text'; value: string } | { type: 'slot'; key: string };

export function splitSlots(template: string): InlinePart[] {
  const out: InlinePart[] = [];
  const re = /\{(\w+)\}/g;
  let last = 0;
  for (const match of template.matchAll(re)) {
    const index = match.index ?? 0;
    if (index > last) out.push({ type: 'text', value: template.slice(last, index) });
    out.push({ type: 'slot', key: match[1] });
    last = index + match[0].length;
  }
  if (last < template.length) out.push({ type: 'text', value: template.slice(last) });
  return out;
}
