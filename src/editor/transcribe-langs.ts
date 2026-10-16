/**
 * Languages offered on the transcribe page, as ISO-639-1 codes Whisper
 * understands. A curated subset of Whisper's ~99 languages, ordered by
 * expected audience volume. Display names resolve at runtime through
 * Intl.DisplayNames, so they localize into every UI locale for free.
 */
export const TRANSCRIBE_LANGUAGES = [
  'en', 'zh', 'es', 'pt', 'fr', 'de', 'ja', 'ko', 'ru', 'ar',
  'hi', 'it', 'id', 'nl', 'pl', 'tr', 'vi', 'th', 'uk', 'sv',
  'da', 'fi', 'no', 'cs', 'el', 'he', 'ro', 'hu', 'fa', 'ms',
] as const;

export type TranscribeLanguage = (typeof TRANSCRIBE_LANGUAGES)[number];

/** Localized language name with the bare code as fallback. */
export function languageName(code: string, locale: string): string {
  try {
    return new Intl.DisplayNames(locale, { type: 'language' }).of(code) ?? code;
  } catch {
    return code;
  }
}
