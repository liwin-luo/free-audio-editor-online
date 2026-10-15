/** URL prefix is `id`. English stays unprefixed. hreflang can be more specific than the prefix. */
export const LOCALES = [
  { id: 'en', html: 'en', og: 'en_US', hreflang: 'en', label: 'English', dir: 'ltr' },
  { id: 'es', html: 'es', og: 'es_ES', hreflang: 'es', label: 'Español', dir: 'ltr' },
  { id: 'pt', html: 'pt-BR', og: 'pt_BR', hreflang: 'pt-BR', label: 'Português', dir: 'ltr' },
  { id: 'id', html: 'id', og: 'id_ID', hreflang: 'id', label: 'Indonesia', dir: 'ltr' },
  { id: 'de', html: 'de', og: 'de_DE', hreflang: 'de', label: 'Deutsch', dir: 'ltr' },
  { id: 'ko', html: 'ko', og: 'ko_KR', hreflang: 'ko', label: '한국어', dir: 'ltr' },
  { id: 'ja', html: 'ja', og: 'ja_JP', hreflang: 'ja', label: '日本語', dir: 'ltr' },
  { id: 'zh', html: 'zh-Hans', og: 'zh_CN', hreflang: 'zh-Hans', label: '简体中文', dir: 'ltr' },
  { id: 'fr', html: 'fr', og: 'fr_FR', hreflang: 'fr', label: 'Français', dir: 'ltr' },
  { id: 'ru', html: 'ru', og: 'ru_RU', hreflang: 'ru', label: 'Русский', dir: 'ltr' },
  { id: 'ar', html: 'ar', og: 'ar_SA', hreflang: 'ar', label: 'العربية', dir: 'rtl' },
] as const;

export type Locale = (typeof LOCALES)[number]['id'];

export const TRANSLATED_LOCALES = LOCALES.filter((l) => l.id !== 'en').map((l) => l.id);

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.some((l) => l.id === value);
}

export function localeMeta(locale: Locale) {
  return LOCALES.find((l) => l.id === locale)!;
}

/** Same article in every locale. Other guide URLs are not translations of each other. */
export function isTranslatedGuide(path: string): boolean {
  return path === '/guides/convert-video-to-mp3';
}

/** Guide articles are not translations of each other, except the MP4 one. The /guides index is. */
export function hasAlternates(path: string): boolean {
  if (isTranslatedGuide(path)) return true;
  return !(path.startsWith('/guides/') || path.startsWith('/guias'));
}

export function localePath(locale: Locale, path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return p;
  return p === '/' ? `/${locale}` : `/${locale}${p}`;
}
