/**
 * Translation gate for one locale catalog. Run with esbuild:
 *   node_modules/.bin/esbuild scripts/i18n-audit.ts --bundle --platform=node --format=esm --outfile=/tmp/i18n-audit.mjs
 *   node /tmp/i18n-audit.mjs zh
 * Without an argument every translated locale is checked.
 */
import { TOOLS } from '../src/data/tools';
import { en } from '../src/i18n/en';
import { catalogs, PENDING_I18N } from '../src/i18n';
import './../src/i18n/catalogs';
import { TRANSLATED_LOCALES, type Locale } from '../src/i18n/locales';
import type { Catalog } from '../src/i18n/types';

const BUDGET: Record<string, { title: number; desc: number }> = {
  ja: { title: 35, desc: 80 },
  zh: { title: 20, desc: 75 },
  ko: { title: 30, desc: 75 },
};
const DEFAULT_BUDGET = { title: 60, desc: 155 };

const FORBIDDEN: Partial<Record<Locale, RegExp[]>> = {
  zh: [/您/],
  de: [/\bSie\b/, /\bIhnen\b/],
  es: [/\busted\b/i],
  ko: [/합니다/],
  ru: [/\bВы\b/, /\bВас\b/],
};

const ALLOWED_LATIN = /^(Free Audio Editor|MP3|MP4|M4R|M4A|WAV|FLAC|OGG|OPUS|AAC|WebM|MOV|AVI|MKV|MIDI|JSON|CSV|PNG|JPEG|Web Audio API|WebAssembly|iPhone|Android|Safari|Chrome|Firefox|Edge|Windows|macOS|Linux|Claude|Cursor|MCP|ffmpeg|kbps|kHz|Hz|dB|LUFS|MB|GB|CPU)$/i;

// Target languages written in Latin script cannot be told apart from English by
// character range, so for them an untranslated string is detected by equality.
const LATIN_SCRIPT: ReadonlySet<Locale> = new Set(['de', 'es', 'fr', 'id', 'pt']);

const han = (s: string) => (s.match(/[\u4e00-\u9fff]/g) ?? []).length;
const kana = (s: string) => (s.match(/[\u3040-\u30ff]/g) ?? []).length;
const hangul = (s: string) => (s.match(/[\uac00-\ud7af]/g) ?? []).length;

function charCount(s: string, locale: Locale): number {
  if (locale === 'ja') return han(s) + kana(s) + (s.match(/[A-Za-z0-9]/g) ?? []).length * 0.5;
  if (locale === 'zh') return han(s);
  if (locale === 'ko') return hangul(s) + (s.match(/[A-Za-z0-9]/g) ?? []).length * 0.5;
  return s.length;
}

const placeholders = (s: string) => (s.match(/\{[a-zA-Z0-9]+\}/g) ?? []).sort().join(',');

function walkStrings(value: unknown, path: string, out: { path: string; text: string }[]) {
  if (typeof value === 'string') out.push({ path, text: value });
  else if (Array.isArray(value)) value.forEach((v, i) => walkStrings(v, `${path}[${i}]`, out));
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) walkStrings(v, `${path}.${k}`, out);
  }
}

function latinShare(s: string) {
  const letters = s.replace(/[^A-Za-z]/g, '').length;
  return s.length ? letters / s.length : 0;
}

export function auditLocale(locale: Locale): string[] {
  const errors: string[] = [];
  const warnings: string[] = [];
  const cat = catalogs[locale] as Catalog | undefined;
  if (!cat) return [`${locale}: catalog missing`];
  const budget = BUDGET[locale] ?? DEFAULT_BUDGET;

  for (const [section, enValue] of Object.entries(en)) {
    const strings: { path: string; text: string }[] = [];
    walkStrings((cat as any)[section], section, strings);
    const enStrings: { path: string; text: string }[] = [];
    walkStrings(enValue, section, enStrings);
    const enByPath = new Map(enStrings.map((s) => [s.path, s.text]));
    for (const s of strings) {
      if (!s.text.trim()) errors.push(`${s.path}: empty string`);
      const expected = enByPath.get(s.path);
      if (expected !== undefined && placeholders(expected) !== placeholders(s.text)) {
        errors.push(`${s.path}: placeholders [${placeholders(s.text)}] != en [${placeholders(expected)}]`);
      }
      if (locale !== 'en' && s.text.length > 40) {
        const untranslated = LATIN_SCRIPT.has(locale)
          ? expected !== undefined && s.text.trim() === expected.trim()
          : latinShare(s.text) > 0.85 && !ALLOWED_LATIN.test(s.text);
        if (untranslated) warnings.push(`${s.path}: looks untranslated: ${s.text.slice(0, 70)}`);
      }
    }
  }

  for (const re of FORBIDDEN[locale] ?? []) {
    const strings: { path: string; text: string }[] = [];
    walkStrings(cat, locale, strings);
    for (const s of strings) if (re.test(s.text)) errors.push(`${s.path}: register violation ${re}`);
  }

  for (const tool of TOOLS) {
    if (PENDING_I18N.has(tool.slug)) continue; // interim: parity returns when translations land
    const copy = cat.tools[tool.slug];
    if (!copy) {
      errors.push(`${tool.slug}: missing copy`);
      continue;
    }
    for (const field of ['name', 'shortName', 'title', 'description', 'h1', 'subtitle', 'dropHint'] as const) {
      if (!copy[field]?.trim()) errors.push(`${tool.slug}.${field}: empty`);
    }
    if (copy.title.length && charCount(copy.title, locale) > budget.title) {
      errors.push(`${tool.slug}.title: ${charCount(copy.title, locale).toFixed(0)} > ${budget.title}`);
    }
    if (copy.description.length && charCount(copy.description, locale) > budget.desc) {
      errors.push(`${tool.slug}.description: ${charCount(copy.description, locale).toFixed(0)} > ${budget.desc}`);
    }
    if (tool.hero && !copy.heroAlt?.trim()) errors.push(`${tool.slug}.heroAlt: missing`);
    if (tool.screenshots?.length) {
      const alts = copy.screenshotsAlt ?? [];
      if (alts.length < tool.screenshots.length) {
        errors.push(`${tool.slug}.screenshotsAlt: ${alts.length}/${tool.screenshots.length}`);
      }
      alts.forEach((alt, i) => {
        if (!alt?.trim()) errors.push(`${tool.slug}.screenshotsAlt[${i}]: empty`);
        else if (alt === tool.screenshots?.[i]?.alt) warnings.push(`${tool.slug}.screenshotsAlt[${i}]: identical to en`);
      });
    }
    const enSections = tool.sections ?? [];
    const sections = copy.sections ?? [];
    if (sections.length !== enSections.length) {
      errors.push(`${tool.slug}.sections: ${sections.length}/${enSections.length}`);
    }
    sections.forEach((s, i) => {
      const enSection = enSections[i];
      if (!enSection) return;
      if (!s.heading.trim()) errors.push(`${tool.slug}.sections[${i}].heading: empty`);
      if ((s.paragraphs?.length ?? 0) !== (enSection.paragraphs?.length ?? 0)) {
        errors.push(`${tool.slug}.sections[${i}].paragraphs: ${s.paragraphs?.length ?? 0}/${enSection.paragraphs?.length ?? 0}`);
      }
      if ((s.bullets?.length ?? 0) !== (enSection.bullets?.length ?? 0)) {
        errors.push(`${tool.slug}.sections[${i}].bullets: ${s.bullets?.length ?? 0}/${enSection.bullets?.length ?? 0}`);
      }
      if ((s.outro?.length ?? 0) !== (enSection.outro?.length ?? 0)) {
        errors.push(`${tool.slug}.sections[${i}].outro: ${s.outro?.length ?? 0}/${enSection.outro?.length ?? 0}`);
      }
      if (!!s.table !== !!enSection.table) errors.push(`${tool.slug}.sections[${i}].table: shape`);
      if (s.table && enSection.table) {
        if (s.table.headers.length !== enSection.table.headers.length) {
          errors.push(`${tool.slug}.sections[${i}].table.headers`);
        }
        if (s.table.rows.length !== enSection.table.rows.length) {
          errors.push(`${tool.slug}.sections[${i}].table.rows`);
        }
      }
      const headingUntranslated = LATIN_SCRIPT.has(locale)
        ? s.heading.trim() === enSection.heading.trim()
        : latinShare(s.heading) > 0.85;
      if (headingUntranslated && s.heading.length > 20) {
        warnings.push(`${tool.slug}.sections[${i}].heading looks untranslated`);
      }
    });
    if ((copy.uses?.length ?? 0) !== tool.uses.length) errors.push(`${tool.slug}.uses: count`);
    if ((copy.howTo?.length ?? 0) !== tool.howTo.length) errors.push(`${tool.slug}.howTo: count`);
    if ((copy.faqs?.length ?? 0) !== tool.faqs.length) errors.push(`${tool.slug}.faqs: count`);
  }

  console.log(`\n=== ${locale} ===`);
  if (warnings.length) {
    console.log(`warnings: ${warnings.length}`);
    for (const w of warnings.slice(0, 15)) console.log(`  ! ${w}`);
  }
  if (errors.length) {
    console.log(`errors: ${errors.length}`);
    for (const e of errors.slice(0, 60)) console.log(`  x ${e}`);
    if (errors.length > 60) console.log(`  ... +${errors.length - 60} more`);
  } else {
    console.log('OK');
  }
  return errors;
}

const only = process.argv[2] as Locale | undefined;
const locales = only ? [only] : TRANSLATED_LOCALES;
let failed = 0;
for (const locale of locales) {
  if (locale === 'en') continue;
  failed += auditLocale(locale).length;
}
if (failed) {
  console.log(`\n${failed} error(s)`);
  process.exit(1);
}
