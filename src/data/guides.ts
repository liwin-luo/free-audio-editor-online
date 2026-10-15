import type { Locale } from '../i18n/locales';

export type GuideCard = {
  locale: Locale;
  href: string;
  title: string;
  description: string;
  minutes: number;
};

/** Articles that exist. A locale with none still has an index, it just lists nothing. */
export const GUIDES: GuideCard[] = [
  {
    locale: 'en',
    href: '/guides/how-to-cut-a-song',
    title: 'How to Cut a Song Online (Free, Nothing Uploaded)',
    description:
      'Keep the chorus, lose the intro: a practical walkthrough of cutting songs in your browser, including keep-vs-delete modes and fade tricks.',
    minutes: 4,
  },
  {
    locale: 'en',
    href: '/guides/make-iphone-ringtone',
    title: 'How to Make a Ringtone on iPhone (Free, No Computer Needed)',
    description:
      'From any song to an official iPhone ringtone: build a 40-second clip in the browser and export M4R directly — GarageBand only as a fallback.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/merge-songs-one-track',
    title: 'How to Merge Songs into One Track Online',
    description:
      'Combine songs into a single continuous file for DJ sets, workouts or podcasts — ordering, crossfades and export settings explained.',
    minutes: 4,
  },
  {
    locale: 'en',
    href: '/guides/audacity-alternative',
    title: 'Audacity Alternative: When a Browser Tool Is Enough',
    description:
      'Audacity is still the right tool for multitrack work. For a single cut, conversion or ringtone, a browser tool is faster and never uploads the file.',
    minutes: 8,
  },
  {
    locale: 'en',
    href: '/guides/convert-video-to-mp3',
    title: 'MP4 to MP3 — convert a video in your browser',
    description:
      'Turn an MP4, WebM or MOV into an MP3 without uploading it — plus which bitrate to pick, and the AC3/DTS cases a browser cannot decode.',
    minutes: 6,
  },
  {
    locale: 'en',
    href: '/guides/convert-ogg-to-mp3',
    title: 'Convert OGG to MP3 in Your Browser',
    description:
      'Turn an OGG file into an MP3 without uploading it — Vorbis versus Opus, which bitrate to pick, and the Safari case that cannot decode Vorbis.',
    minutes: 5,
  },
  {
    locale: 'es',
    href: '/es/guides/ogg-a-mp3',
    title: 'Cómo convertir archivos OGG a MP3',
    description:
      'Qué hay dentro de un OGG (Vorbis u Opus), qué bitrate elegir y cuándo Safari no puede decodificar el archivo.',
    minutes: 5,
  },
  {
    locale: 'es',
    href: '/es/guides/opus-a-mp3',
    title: 'Cómo convertir Opus a MP3',
    description:
      'Notas de voz en .opus, Opus dentro de OGG o WebM, y cómo dejarlo en un MP3 sin subir el archivo.',
    minutes: 4,
  },
  {
    locale: 'es',
    href: '/es/guides/convert-video-to-mp3',
    title: 'MP4 a MP3 — convierte el video en el navegador',
    description:
      'Pasa un MP4, WebM o MOV a MP3 sin subir el video. Qué bitrate elegir, y cuándo AC3 o DTS no se pueden leer.',
    minutes: 6,
  },
  {
    locale: 'pt',
    href: '/pt/guides/convert-video-to-mp3',
    title: 'MP4 para MP3 — converta o vídeo no navegador',
    description:
      'Passe um MP4, WebM ou MOV para MP3 sem enviar o vídeo. Qual bitrate escolher, e quando AC3 ou DTS não abrem.',
    minutes: 6,
  },
  {
    locale: 'id',
    href: '/id/guides/convert-video-to-mp3',
    title: 'MP4 ke MP3 — ubah video di browser',
    description:
      'Ubah MP4, WebM, atau MOV menjadi MP3 tanpa mengunggah video. Bitrate mana yang dipilih, dan kapan AC3 atau DTS tidak terbaca.',
    minutes: 6,
  },
  {
    locale: 'de',
    href: '/de/guides/convert-video-to-mp3',
    title: 'MP4 in MP3 umwandeln — im Browser',
    description:
      'Mach aus MP4, WebM oder MOV eine MP3, ohne das Video hochzuladen. Welche Bitrate, und wann AC3 oder DTS scheitern.',
    minutes: 6,
  },
  {
    locale: 'ja',
    href: '/ja/guides/convert-video-to-mp3',
    title: 'MP4 MP3 変換 — ブラウザで行う',
    description:
      'MP4、WebM、MOV をアップロードせずに MP3 へ。ビットレートの選び方と、AC3 や DTS が読めない場合。',
    minutes: 6,
  },
  {
    locale: 'ko',
    href: '/ko/guides/convert-video-to-mp3',
    title: 'MP4 MP3 변환 — 브라우저에서',
    description:
      'MP4, WebM, MOV를 올리지 않고 MP3로 바꿔요. 비트레이트를 고르는 법과, AC3·DTS가 안 되는 경우.',
    minutes: 6,
  },
  {
    locale: 'zh',
    href: '/zh/guides/convert-video-to-mp3',
    title: 'MP4 转 MP3 — 在浏览器里完成',
    description:
      '把 MP4、WebM 或 MOV 转成 MP3，视频不会上传。比特率怎么选，以及 AC3、DTS 什么时候解不开。',
    minutes: 6,
  },
];

export function guidesFor(locale: Locale): GuideCard[] {
  return GUIDES.filter((g) => g.locale === locale);
}

export function localesWithGuides(): Locale[] {
  return [...new Set(GUIDES.map((g) => g.locale))];
}

type IndexCopy = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  empty: string;
  minutes: string;
};

export const GUIDE_INDEX: Record<Locale, IndexCopy> = {
  en: {
    title: 'Audio Guides — Cut, Convert and Edit | Free Audio Editor',
    description:
      'Guides for browser audio: cutting songs, converting video to MP3, making ringtones, and when a browser tool beats installing Audacity.',
    h1: 'Audio guides',
    intro:
      'Short, practical walkthroughs for the things people actually do with audio — written for browser tools that never upload your files.',
    empty: 'No English guides yet.',
    minutes: 'min read',
  },
  es: {
    title: 'Guías de audio — MP4 a MP3, OGG y Opus',
    description: 'Guías en español para pasar MP4, OGG y Opus a MP3 en el navegador, sin subir el archivo.',
    h1: 'Guías de audio',
    intro: 'Pasos cortos para convertir un archivo que ya tienes. El audio no sale de tu dispositivo.',
    empty: 'Todavía no hay guías en español.',
    minutes: 'min',
  },
  pt: {
    title: 'Guias de áudio — MP4 para MP3',
    description: 'Guia em português para converter MP4 em MP3 no navegador, sem enviar o arquivo.',
    h1: 'Guias de áudio',
    intro: 'Passos curtos para o que dá para fazer no navegador. O arquivo não é enviado.',
    empty: 'Ainda não há guias em português.',
    minutes: 'min',
  },
  id: {
    title: 'Panduan audio — MP4 ke MP3',
    description: 'Panduan bahasa Indonesia untuk mengubah MP4 menjadi MP3 di browser, tanpa mengunggah file.',
    h1: 'Panduan audio',
    intro: 'Langkah singkat untuk hal yang bisa dikerjakan di browser. File tidak diunggah.',
    empty: 'Belum ada panduan dalam bahasa Indonesia.',
    minutes: 'mnt',
  },
  de: {
    title: 'Audio-Anleitungen — MP4 in MP3 umwandeln',
    description: 'Anleitung auf Deutsch: MP4 im Browser in MP3 umwandeln, ohne das Video hochzuladen.',
    h1: 'Audio-Anleitungen',
    intro: 'Kurze Schritte für das, was im Browser geht. Die Datei wird nicht hochgeladen.',
    empty: 'Noch keine Anleitungen auf Deutsch.',
    minutes: 'Min.',
  },
  ko: {
    title: '오디오 가이드 — Free Audio Editor',
    description: '브라우저에서 MP4를 MP3로 바꾸는 한국어 가이드. 파일은 업로드되지 않아요.',
    h1: '오디오 가이드',
    intro: '브라우저에서 끝낼 수 있는 작업의 짧은 설명이에요. 파일은 업로드되지 않아요.',
    empty: '아직 한국어 가이드가 없습니다.',
    minutes: '분',
  },
  ja: {
    title: 'オーディオガイド — MP4 MP3 変換',
    description: 'ブラウザで MP4 を MP3 にする日本語ガイド。ファイルはアップロードしません。',
    h1: 'オーディオガイド',
    intro: 'ブラウザで済ませられる作業の短い手順です。ファイルはアップロードしません。',
    empty: '日本語のガイドはまだありません。',
    minutes: '分',
  },
  zh: {
    title: '音频指南 — MP4 转 MP3',
    description: '在浏览器里把 MP4 转成 MP3 的中文说明。文件不会上传。',
    h1: '音频指南',
    intro: '针对在浏览器里就能做完的事，写成短步骤。文件不会上传。',
    empty: '还没有中文指南。',
    minutes: '分钟',
  },
  fr: {
    title: 'Guides audio — Montage et conversion dans le navigateur',
    description:
      'Guides en français pour couper, convertir et éditer l’audio dans le navigateur, sans téléverser vos fichiers.',
    h1: 'Guides audio',
    intro: 'Des étapes courtes pour ce que l’on fait vraiment avec l’audio — dans des outils qui ne téléversent rien.',
    empty: 'Pas encore de guides en français.',
    minutes: 'min de lecture',
  },
  ru: {
    title: 'Аудио-гайды — обрезка и конвертация в браузере',
    description:
      'Инструкции на русском: обрезать, конвертировать и редактировать аудио в браузере, без отправки на сервер.',
    h1: 'Аудио-гайды',
    intro: 'Короткие пошаговые инструкции для задач, которые решаются прямо в браузере. Файлы не покидают устройство.',
    empty: 'Русских гайдов пока нет.',
    minutes: 'мин чтения',
  },
  ar: {
    title: 'أدلة الصوت — القص والتحويل في المتصفح',
    description:
      'أدلة بالعربية لقص الصوت وتحويله وتحريره في المتصفح، دون رفع ملفاتك إلى أي خادم.',
    h1: 'أدلة الصوت',
    intro: 'خطوات قصيرة للمهام التي تُنجز مباشرة في المتصفح. ملفاتك لا تترك جهازك.',
    empty: 'لا توجد أدلة عربية بعد.',
    minutes: 'دقائق القراءة',
  },
};
