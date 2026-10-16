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
    title: 'How to Merge Audio Files into One Track Online',
    description:
      'Combine songs, voice memos or podcast clips into one file. Set the order, add a crossfade, and export MP3 or WAV. Nothing is uploaded.',
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
    locale: 'en',
    href: '/guides/how-to-trim-audio',
    title: 'How to Trim Audio Online (Free, No Upload)',
    description:
      'Trim a voice memo, podcast or recording in the browser. Keep one region or delete a gap, then export MP3 or WAV. The file is never uploaded.',
    minutes: 4,
  },
  {
    locale: 'en',
    href: '/guides/change-pitch-without-changing-speed',
    title: 'How to Change Pitch Without Changing Speed',
    description:
      'Shift a song or a voice by semitones and keep the same length. Speed is a different control — it changes the length, and the pitch rides along.',
    minutes: 4,
  },
  {
    locale: 'en',
    href: '/guides/how-to-edit-an-mp3',
    title: 'How to Edit an MP3 File in Your Browser',
    description:
      'Cut, trim, fade or boost an MP3 without installing software. Which page does each job, and when to export WAV so you do not re-encode twice.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/how-to-edit-a-wav-file',
    title: 'How to Edit a WAV File in the Browser',
    description:
      'Trim and edit a WAV before you convert it. When to stay 16-bit PCM, when a 320 kbps MP3 is enough, and why MP3 to WAV does not restore quality.',
    minutes: 4,
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
    locale: 'es',
    href: '/es/guides/how-to-trim-audio',
    title: 'Cómo recortar audio online (gratis, sin subir)',
    description:
      'Recorta una nota de voz, un podcast o una grabación en el navegador. Conserva un tramo o borra un silencio, y exporta MP3 o WAV. El archivo no se sube.',
    minutes: 4,
  },
  {
    locale: 'es',
    href: '/es/guides/change-pitch-without-changing-speed',
    title: 'Cómo cambiar el tono sin cambiar la velocidad',
    description:
      'Sube o baja una canción o una voz por semitonos y conserva la misma duración. La velocidad es otro control — acorta o alarga, y el tono se va con ella.',
    minutes: 4,
  },
  {
    locale: 'es',
    href: '/es/guides/how-to-edit-an-mp3',
    title: 'Cómo editar un archivo MP3 en el navegador',
    description:
      'Corta, recorta, funde o sube un MP3 sin instalar nada. Qué página hace cada trabajo, y cuándo exportar WAV para no recodificar dos veces.',
    minutes: 5,
  },
  {
    locale: 'es',
    href: '/es/guides/how-to-edit-a-wav-file',
    title: 'Cómo editar un archivo WAV en el navegador',
    description:
      'Recorta y edita un WAV antes de convertirlo. Cuándo quedarte en PCM de 16 bits, cuándo basta un MP3 a 320 kbps, y por qué pasar de MP3 a WAV no devuelve calidad.',
    minutes: 4,
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
    locale: 'pt',
    href: '/pt/guides/how-to-trim-audio',
    title: 'Como cortar áudio online (grátis, sem enviar)',
    description:
      'Corte um recado de voz, um podcast ou uma gravação no navegador. Fique com um trecho ou apague um silêncio, e exporte MP3 ou WAV. O arquivo não é enviado.',
    minutes: 4,
  },
  {
    locale: 'pt',
    href: '/pt/guides/change-pitch-without-changing-speed',
    title: 'Como mudar o tom sem mudar a velocidade',
    description:
      'Suba ou desça uma música ou uma voz em semitons e mantenha a mesma duração. Velocidade é outro controle — ela muda o tamanho, e o tom vai junto.',
    minutes: 4,
  },
  {
    locale: 'pt',
    href: '/pt/guides/how-to-edit-an-mp3',
    title: 'Como editar um arquivo MP3 no navegador',
    description:
      'Corte, recorte, aplique fade ou aumente um MP3 sem instalar nada. Qual página faz cada trabalho, e quando exportar WAV para não recodificar duas vezes.',
    minutes: 5,
  },
  {
    locale: 'pt',
    href: '/pt/guides/how-to-edit-a-wav-file',
    title: 'Como editar um arquivo WAV no navegador',
    description:
      'Recorte e edite um WAV antes de converter. Quando ficar em PCM de 16 bits, quando um MP3 de 320 kbps basta, e por que MP3 para WAV não devolve qualidade.',
    minutes: 4,
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
    locale: 'id',
    href: '/id/guides/how-to-trim-audio',
    title: 'Cara memotong audio online (gratis, tanpa unggah)',
    description:
      'Potong memo suara, podcast, atau rekaman di browser. Simpan satu bagian atau hapus jeda, lalu ekspor MP3 atau WAV. File tidak diunggah.',
    minutes: 4,
  },
  {
    locale: 'id',
    href: '/id/guides/change-pitch-without-changing-speed',
    title: 'Cara mengubah nada tanpa mengubah kecepatan',
    description:
      'Geser lagu atau suara beberapa seminada dan pertahankan durasinya. Kecepatan adalah kontrol lain — panjang file berubah, dan nada ikut bergerak.',
    minutes: 4,
  },
  {
    locale: 'id',
    href: '/id/guides/how-to-edit-an-mp3',
    title: 'Cara mengedit file MP3 di browser',
    description:
      'Potong, pangkas, fade, atau keraskan MP3 tanpa memasang aplikasi. Halaman mana untuk tiap pekerjaan, dan kapan mengekspor WAV agar tidak dikode ulang dua kali.',
    minutes: 5,
  },
  {
    locale: 'id',
    href: '/id/guides/how-to-edit-a-wav-file',
    title: 'Cara mengedit file WAV di browser',
    description:
      'Pangkas dan edit WAV sebelum dikonversi. Kapan tetap di PCM 16-bit, kapan MP3 320 kbps cukup, dan mengapa MP3 ke WAV tidak mengembalikan kualitas.',
    minutes: 4,
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
  {
    locale: 'fr',
    href: '/fr/guides/change-pitch-without-changing-speed',
    title: 'Comment changer la tonalité sans changer la vitesse',
    description:
      'Décalez une chanson ou une voix par demi-tons et gardez la même durée. La vitesse est un autre réglage — elle change la longueur, et la hauteur suit.',
    minutes: 6,
  },
  {
    locale: 'ru',
    href: '/ru/guides/change-pitch-without-changing-speed',
    title: 'Как изменить тональность, не меняя скорость',
    description:
      'Сдвиньте песню или голос на полутона и сохраните ту же длительность. Скорость — другой регулятор. Она меняет длину, и высота тона уходит вместе с ней.',
    minutes: 6,
  },
  {
    locale: 'ar',
    href: '/ar/guides/change-pitch-without-changing-speed',
    title: 'كيف تغيّر درجة الصوت دون تغيير السرعة',
    description:
      'انقل أغنية أو صوتًا بعدد من أنصاف الدرجات وأبقِ المدة كما هي. السرعة عنصر تحكم آخر — تغيّر طول الملف، وتتحرك درجة الصوت معها.',
    minutes: 6,
  },
];

export function guidesFor(locale: Locale): GuideCard[] {
  return GUIDES.filter((g) => g.locale === locale);
}

export function localesWithGuides(): Locale[] {
  return [...new Set(GUIDES.map((g) => g.locale))];
}

/** Same article, different slug. Spanish keeps the query in the URL. */
const GUIDE_ALIAS: Record<string, string> = {
  '/guides/ogg-a-mp3': '/guides/convert-ogg-to-mp3',
};

function unprefixedGuide(href: string, locale: Locale): string {
  if (locale === 'en') return href;
  const prefix = `/${locale}`;
  return href.startsWith(`${prefix}/`) ? href.slice(prefix.length) : href;
}

function guideKey(path: string): string {
  return GUIDE_ALIAS[path] ?? path;
}

/** Every locale that publishes this article, including a translated slug that differs from English. */
export function guideAlternates(path: string): { locale: Locale; href: string }[] {
  const key = guideKey(path);
  return GUIDES.filter((g) => guideKey(unprefixedGuide(g.href, g.locale)) === key).map((g) => ({
    locale: g.locale,
    href: g.href,
  }));
}

/** Locales that have this exact article. `path` is unprefixed, e.g. `/guides/how-to-trim-audio`. */
export function localesForGuide(path: string): Locale[] {
  return guideAlternates(path).map((a) => a.locale);
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
      'Guides for browser audio: trim a recording, edit an MP3 or WAV, change pitch without changing speed, cut a song, or convert video to MP3.',
    h1: 'Audio guides',
    intro:
      'Short, practical walkthroughs for the things people actually do with audio — written for browser tools that never upload your files.',
    empty: 'No English guides yet.',
    minutes: 'min read',
  },
  es: {
    title: 'Guías de audio — recortar, editar MP3 y WAV',
    description:
      'Guías en español para recortar audio, editar un MP3 o WAV, cambiar el tono sin cambiar la velocidad, y convertir MP4 u OGG a MP3.',
    h1: 'Guías de audio',
    intro: 'Pasos cortos para recortar, editar y convertir un archivo que ya tienes. El audio no sale de tu dispositivo.',
    empty: 'Todavía no hay guías en español.',
    minutes: 'min',
  },
  pt: {
    title: 'Guias de áudio — cortar, editar MP3 e WAV',
    description:
      'Guias em português para cortar áudio, editar um MP3 ou WAV, mudar o tom sem mudar a velocidade, e converter MP4 em MP3.',
    h1: 'Guias de áudio',
    intro: 'Passos curtos para cortar, editar e converter um arquivo que você já tem. O arquivo não é enviado.',
    empty: 'Ainda não há guias em português.',
    minutes: 'min',
  },
  id: {
    title: 'Panduan audio — potong, edit MP3, ubah nada',
    description:
      'Panduan bahasa Indonesia untuk memotong audio, mengedit MP3 atau WAV, mengubah nada tanpa mengubah kecepatan, dan mengubah MP4 ke MP3.',
    h1: 'Panduan audio',
    intro: 'Langkah singkat untuk memotong, mengedit, dan mengonversi file yang sudah ada. File tidak diunggah.',
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
    title: 'Guides audio — changer la tonalité sans la vitesse',
    description:
      'Guide en français pour décaler une chanson ou une voix par demi-tons, sans changer la durée. Le fichier reste sur l’appareil.',
    h1: 'Guides audio',
    intro: 'Des étapes courtes pour ce que l’on fait vraiment avec l’audio — dans des outils qui ne téléversent rien.',
    empty: 'Pas encore de guides en français.',
    minutes: 'min de lecture',
  },
  ru: {
    title: 'Аудио-гайды — тональность без изменения скорости',
    description:
      'Инструкция на русском: сдвинуть песню или голос на полутона и сохранить длительность. Файл не уходит с устройства.',
    h1: 'Аудио-гайды',
    intro: 'Короткие пошаговые инструкции для задач, которые решаются прямо в браузере. Файлы не покидают устройство.',
    empty: 'Русских гайдов пока нет.',
    minutes: 'мин чтения',
  },
  ar: {
    title: 'أدلة الصوت — تغيير الدرجة دون تغيير السرعة',
    description:
      'دليل بالعربية لنقل أغنية أو صوت بأنصاف الدرجات دون تغيير المدة. يبقى الملف على جهازك.',
    h1: 'أدلة الصوت',
    intro: 'خطوات قصيرة للمهام التي تُنجز مباشرة في المتصفح. ملفاتك لا تترك جهازك.',
    empty: 'لا توجد أدلة عربية بعد.',
    minutes: 'دقائق القراءة',
  },
};
