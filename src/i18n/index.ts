import { en } from './en';
import { getTool, TOOLS, type ToolDef } from '../data/tools';
import type { Catalog, Shell } from './types';
import { TRANSLATED_LOCALES, type Locale } from './locales';

/** Filled by catalogs.ts once every locale module exists. */
export const catalogs: Partial<Record<Locale, Catalog>> = {};

/**
 * Slugs allowed to render EN copy before their locale translations land.
 * Interim scaffold for mp3-tag-editor: the tool page (EN) ships first and the
 * 10 locale catalogs (tools copy + tg* editor keys) land right after in the
 * same PR. That task MUST empty this set — the parity gate then enforces
 * full coverage again. Keep it empty on main.
 */
const PENDING_I18N = new Set<string>();

export function getShell(locale: Locale): Shell {
  if (locale === 'en') return en;
  const cat = catalogs[locale];
  if (!cat) throw new Error(`Missing i18n catalog: ${locale}`);
  return cat;
}

export function localizeTool(slug: string, locale: Locale): ToolDef | undefined {
  const tool = getTool(slug);
  if (!tool || locale === 'en') return tool;
  const copy = catalogs[locale]?.tools[slug];
  if (!copy) {
    if (PENDING_I18N.has(slug)) {
      console.warn(`i18n: ${slug} has no ${locale} copy yet — rendering the EN copy`);
      return tool;
    }
    throw new Error(`Missing ${locale} copy for ${slug}`);
  }
  return {
    ...tool,
    name: copy.name,
    shortName: copy.shortName,
    title: copy.title,
    description: copy.description,
    h1: copy.h1,
    subtitle: copy.subtitle,
    cardLine: copy.cardLine ?? tool.cardLine,
    intro: copy.intro,
    usesHeading: copy.usesHeading,
    uses: copy.uses,
    howTo: copy.howTo,
    faqs: copy.faqs,
    editor: {
      ...tool.editor,
      dropHint: copy.dropHint,
      ...(copy.exportLabel ? { exportLabel: copy.exportLabel } : {}),
    },
  };
}

/** Build fails if a translated tool is missing fields. ponytail: one check, no test runner. */
export function assertCatalogs(): void {
  const shellKeys = ['ui', 'editor', 'home', 'hub', 'about', 'privacy'] as const;
  for (const locale of TRANSLATED_LOCALES) {
    const cat = catalogs[locale];
    if (!cat) throw new Error(`Missing i18n catalog: ${locale}`);
    for (const key of shellKeys) {
      if (!cat[key]) throw new Error(`${locale}: missing ${key}`);
    }
    for (const section of ['ui', 'editor'] as const) {
      const enKeys = Object.keys(en[section]).sort().join();
      const catKeys = Object.keys(cat[section]).sort().join();
      if (PENDING_I18N.size > 0) {
        // Interim: a pending tool's en-only editor keys may lag the catalogs.
        // A key a locale invents or misspells still fails.
        for (const key of Object.keys(cat[section])) {
          if (!(key in en[section])) throw new Error(`${locale}: ${section} key mismatch (${key})`);
        }
      } else if (enKeys !== catKeys) {
        throw new Error(`${locale}: ${section} key mismatch`);
      }
    }
    if (cat.ui.features.length !== en.ui.features.length) throw new Error(`${locale}: features`);
    if (cat.home.why.length !== en.home.why.length) throw new Error(`${locale}: why`);
    if (cat.home.faqs.length !== en.home.faqs.length) throw new Error(`${locale}: home faqs`);
    if (cat.privacy.sections.length !== en.privacy.sections.length) throw new Error(`${locale}: privacy`);
    for (const tool of TOOLS) {
      if (PENDING_I18N.has(tool.slug)) continue; // interim: copy lands with the i18n task
      const copy = cat.tools[tool.slug];
      if (!copy) throw new Error(`${locale}: missing ${tool.slug}`);
      if (tool.uses.length !== 3) throw new Error(`${tool.slug}: uses must be 3`);
      if (!copy.usesHeading.trim()) throw new Error(`${locale}/${tool.slug}: empty usesHeading`);
      if (copy.uses.length !== tool.uses.length) {
        throw new Error(`${locale}/${tool.slug}: uses ${copy.uses.length} != ${tool.uses.length}`);
      }
      if (copy.howTo.length !== tool.howTo.length) {
        throw new Error(`${locale}/${tool.slug}: howTo ${copy.howTo.length} != ${tool.howTo.length}`);
      }
      if (copy.faqs.length !== tool.faqs.length) {
        throw new Error(`${locale}/${tool.slug}: faqs ${copy.faqs.length} != ${tool.faqs.length}`);
      }
      if (tool.editor.exportLabel && !copy.exportLabel) {
        throw new Error(`${locale}/${tool.slug}: missing exportLabel`);
      }
    }
  }
}
