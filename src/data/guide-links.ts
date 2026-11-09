/**
 * Task clusters and contextual guide links.
 *
 * Scope: navigation only. English long-tail anchors render on English pages.
 * Another locale gets a link only when that same article exists there, and the
 * visible text is that article's own title. A missing translation is omitted.
 * Nothing here points a reader at a different language.
 *
 * Not in this file, on purpose:
 * - No Chromebook article. That URL 404s and is not in the sitemap.
 * - No Zoom or Teams setup steps. The silence guide is about pauses in a file.
 * - Fade precision and Voice Memos product claims stay in the articles.
 */
import { GUIDES, canonicalGuidePath, guidesFor, type GuideCard } from './guides';
import type { Locale } from '../i18n/locales';

export type GuideClusterId = 'phone' | 'files' | 'edits' | 'levels' | 'more';

const TASK_CLUSTERS: { id: Exclude<GuideClusterId, 'more'>; paths: string[] }[] = [
  {
    id: 'phone',
    paths: [
      '/guides/why-is-my-voice-memo-so-quiet',
      '/guides/record-a-voice-memo-in-browser',
      '/guides/trim-audio-on-iphone',
      '/guides/make-iphone-ringtone',
      '/guides/merge-songs-one-track',
    ],
  },
  {
    id: 'files',
    paths: [
      '/guides/convert-m4a-to-mp3',
      '/guides/car-stereo-wont-play',
      '/guides/convert-wav-to-mp3',
      '/guides/convert-flac-to-mp3',
      '/guides/convert-ogg-to-mp3',
      '/guides/convert-opus-to-mp3',
      '/guides/convert-video-to-mp3',
      '/guides/wav-vs-mp3',
      '/guides/what-is-lossless-audio',
      '/guides/what-is-audio-bitrate',
      '/guides/compress-audio-for-email',
    ],
  },
  {
    id: 'edits',
    paths: [
      '/guides/how-to-trim-audio',
      '/guides/audio-clicks-at-the-start',
      '/guides/how-to-fade-out-a-song',
      '/guides/trim-opentracks-bgm',
      '/guides/remove-silence-from-podcast',
      '/guides/how-to-cut-a-song',
      '/guides/cut-a-song-for-tiktok',
      '/guides/split-long-recording-into-tracks',
      '/guides/what-is-crossfade',
      '/guides/loop-a-section-of-a-song',
      '/guides/how-to-reverse-a-song',
      '/guides/how-to-edit-an-mp3',
      '/guides/how-to-edit-a-wav-file',
      '/guides/remove-hum-with-high-pass-filter',
    ],
  },
  {
    id: 'levels',
    paths: [
      '/guides/gain-vs-volume',
      '/guides/normalize-vs-compress-audio',
      '/guides/podcast-loudness-lufs',
      '/guides/what-is-dbfs',
    ],
  },
];

type ClusterCopy = { heading: string; lede: string };

/**
 * Headings are navigation chrome for the shared index. English ledes name the
 * long-tail tasks that exist in English. Other locales keep a heading only,
 * because those long-tail articles are not translated and a translated lede
 * would describe pages the section does not list.
 */
const CLUSTER_COPY: Record<Locale, Record<GuideClusterId, ClusterCopy>> = {
  en: {
    phone: {
      heading: 'Phone recordings',
      lede: 'A quiet Voice Memo, a memo recorded in the browser, a trim on iPhone, a ringtone, and several memos joined into one file.',
    },
    files: {
      heading: 'File compatibility',
      lede: 'M4A to MP3 on Windows without iTunes, a car USB stick that will not play the file, and the other formats a player will open.',
    },
    edits: {
      heading: 'Cuts and repairs',
      lede: 'Trim a file, fade a click at the cut, remove long pauses, and shorten an OpenTracks background track.',
    },
    levels: {
      heading: 'Level and loudness',
      lede: 'One gain for a quiet file, or compression when some words are loud and others are buried.',
    },
    more: { heading: 'More guides', lede: 'Reference notes and jobs that sit outside the tasks above.' },
  },
  es: {
    phone: { heading: 'Grabaciones del teléfono', lede: '' },
    files: { heading: 'Compatibilidad de archivos', lede: '' },
    edits: { heading: 'Cortes y reparaciones', lede: '' },
    levels: { heading: 'Nivel y sonoridad', lede: '' },
    more: { heading: 'Más guías', lede: '' },
  },
  pt: {
    phone: { heading: 'Gravações do celular', lede: '' },
    files: { heading: 'Compatibilidade de arquivos', lede: '' },
    edits: { heading: 'Cortes e reparos', lede: '' },
    levels: { heading: 'Nível e volume', lede: '' },
    more: { heading: 'Mais guias', lede: '' },
  },
  id: {
    phone: { heading: 'Rekaman ponsel', lede: '' },
    files: { heading: 'Kompatibilitas file', lede: '' },
    edits: { heading: 'Potongan dan perbaikan', lede: '' },
    levels: { heading: 'Level dan kenyaringan', lede: '' },
    more: { heading: 'Panduan lain', lede: '' },
  },
  de: {
    phone: { heading: 'Telefonaufnahmen', lede: '' },
    files: { heading: 'Dateikompatibilität', lede: '' },
    edits: { heading: 'Schnitte und Reparaturen', lede: '' },
    levels: { heading: 'Pegel und Lautheit', lede: '' },
    more: { heading: 'Weitere Anleitungen', lede: '' },
  },
  ko: {
    phone: { heading: '휴대폰 녹음', lede: '' },
    files: { heading: '파일 호환', lede: '' },
    edits: { heading: '자르기와 복구', lede: '' },
    levels: { heading: '레벨과 음량', lede: '' },
    more: { heading: '다른 가이드', lede: '' },
  },
  ja: {
    phone: { heading: 'スマホの録音', lede: '' },
    files: { heading: 'ファイルの互換性', lede: '' },
    edits: { heading: 'カットと修復', lede: '' },
    levels: { heading: '音量とラウドネス', lede: '' },
    more: { heading: 'その他のガイド', lede: '' },
  },
  zh: {
    phone: { heading: '手机录音', lede: '' },
    files: { heading: '文件兼容', lede: '' },
    edits: { heading: '剪辑和修复', lede: '' },
    levels: { heading: '响度', lede: '' },
    more: { heading: '更多指南', lede: '' },
  },
  fr: {
    phone: { heading: 'Enregistrements du téléphone', lede: '' },
    files: { heading: 'Compatibilité des fichiers', lede: '' },
    edits: { heading: 'Coupes et réparations', lede: '' },
    levels: { heading: 'Niveau sonore', lede: '' },
    more: { heading: 'Autres guides', lede: '' },
  },
  ru: {
    phone: { heading: 'Записи с телефона', lede: '' },
    files: { heading: 'Совместимость файлов', lede: '' },
    edits: { heading: 'Обрезка и исправление', lede: '' },
    levels: { heading: 'Уровень и громкость', lede: '' },
    more: { heading: 'Другие руководства', lede: '' },
  },
  ar: {
    phone: { heading: 'تسجيلات الهاتف', lede: '' },
    files: { heading: 'توافق الملفات', lede: '' },
    edits: { heading: 'القص والإصلاح', lede: '' },
    levels: { heading: 'المستوى والعلو', lede: '' },
    more: { heading: 'أدلة أخرى', lede: '' },
  },
};

export type GuideSection = {
  id: GuideClusterId;
  heading: string;
  lede: string;
  guides: GuideCard[];
};

/** Index sections for one locale. Each published guide appears once. */
export function guideSections(locale: Locale): GuideSection[] {
  const guides = guidesFor(locale);
  const byKey = new Map(guides.map((guide) => [canonicalGuidePath(guide.href, guide.locale), guide]));
  const used = new Set<string>();
  const sections: GuideSection[] = [];
  for (const cluster of TASK_CLUSTERS) {
    const items: GuideCard[] = [];
    for (const path of cluster.paths) {
      const card = byKey.get(path);
      if (!card) continue;
      items.push(card);
      used.add(card.href);
    }
    if (items.length === 0) continue;
    const copy = CLUSTER_COPY[locale][cluster.id];
    sections.push({ id: cluster.id, heading: copy.heading, lede: copy.lede, guides: items });
  }
  const rest = guides.filter((guide) => !used.has(guide.href));
  if (rest.length > 0) {
    const copy = CLUSTER_COPY[locale].more;
    sections.push({ id: 'more', heading: copy.heading, lede: copy.lede, guides: rest });
  }
  return sections;
}

type RelatedEdge = {
  href: string;
  /** English link text. Other locales use the target article's title. */
  anchor: string;
  /** Locales whose article body already contains this link. */
  skipLocales?: readonly Locale[];
};

/**
 * Contextual next tasks. Not a full cluster dump.
 * English body copy owns the long-tail anchors listed in skipLocales.
 */
const RELATED_EDGES: Record<string, RelatedEdge[]> = {
  '/guides/merge-songs-one-track': [
    { href: '/guides/how-to-trim-audio', anchor: 'Trim a clip before you join it' },
  ],
  '/guides/how-to-trim-audio': [
    {
      href: '/guides/trim-opentracks-bgm',
      anchor: 'trim OpenTracks background music',
      skipLocales: ['en'],
    },
  ],
};

export type RelatedTask = {
  href: string;
  label: string;
  description: string;
};

export function relatedTasks(guidePath: string, locale: Locale): RelatedTask[] {
  const key = guidePath.startsWith('/guides/') ? guidePath : canonicalGuidePath(guidePath, locale);
  const edges = RELATED_EDGES[key] ?? [];
  const tasks: RelatedTask[] = [];
  for (const edge of edges) {
    if (edge.skipLocales?.includes(locale)) continue;
    const card = GUIDES.find(
      (guide) => guide.locale === locale && canonicalGuidePath(guide.href, guide.locale) === edge.href,
    );
    if (!card) continue;
    tasks.push({
      href: card.href,
      label: locale === 'en' ? edge.anchor : card.title,
      description: card.description,
    });
  }
  return tasks;
}

/**
 * English end-of-article button text. The href stays the guide's existing tool.
 * Other locales keep "Open {tool}" so we do not invent a translated slogan.
 * Labels are short enough for the pill, and they name the job the tool does
 * on that page. They do not claim a fade shorter than 0.1 s or a car fix
 * that is only a format change.
 */
const GUIDE_TOOL_CTA: Record<string, string> = {
  '/guides/why-is-my-voice-memo-so-quiet': 'Make a quiet Voice Memo louder',
  '/guides/convert-m4a-to-mp3': 'Convert M4A to MP3',
  '/guides/car-stereo-wont-play': 'Convert the file to MP3',
  '/guides/audio-clicks-at-the-start': 'Fade the click at the cut',
  '/guides/trim-opentracks-bgm': 'Trim this background track',
  '/guides/merge-songs-one-track': 'Join the files into one track',
  '/guides/remove-silence-from-podcast': 'Remove the long pauses',
};

export function guideToolCta(guidePath: string, locale: Locale): string | undefined {
  if (locale !== 'en') return undefined;
  return GUIDE_TOOL_CTA[guidePath];
}

export const TASK_CLUSTER_PATHS = TASK_CLUSTERS;
