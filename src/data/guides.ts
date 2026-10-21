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
      'Audacity keeps sessions, plugins and projects you reopen. The browser stacks files you already have, and nothing is uploaded.',
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
    href: '/guides/convert-m4a-to-mp3',
    title: 'How to Convert M4A to MP3',
    description:
      'Turn an M4A or AAC file into MP3 with Music, VLC, Audacity, or ffmpeg. The browser page converts AAC without uploading it.',
    minutes: 7,
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
    href: '/guides/trim-opentracks-bgm',
    title: 'How to Trim OpenTracks BGM in the Browser',
    description:
      'Download a free track from OpenTracks (formerly DOVA-SYNDROME), then trim, loop, or convert it in the browser. The file stays on your device.',
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
    title: 'How to Edit MP3 Files',
    description:
      'Cut, fade, or retitle an MP3 in Audacity, with ffmpeg, or in the browser. Export once, and use WAV when another edit is still coming.',
    minutes: 8,
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
    locale: 'en',
    href: '/guides/remove-silence-from-podcast',
    title: 'How to Remove Silence from a Podcast',
    description:
      'Cut pauses longer than the gap you set. Breaths shorter than that stay. Quiet music and fading tails belong on the trimmer, not the silence remover.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/podcast-loudness-lufs',
    title: 'What LUFS Should a Podcast Be?',
    description:
      '−16 LUFS is the usual podcast target, −14 is streaming, −23 is broadcast. The meter reads the file, and the sample peak stops at −1 dBFS.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/cut-a-song-for-tiktok',
    title: 'How to Cut a Song for TikTok and Reels',
    description:
      'Cut a 15–60 second section from any song, keep the hook, and use it in TikTok or Reels. Trim MP3 or WAV in the browser — nothing uploaded.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/trim-audio-on-iphone',
    title: 'How to Trim Audio on iPhone Without an App',
    description:
      'Trim a voice memo or audio file in Safari on iPhone — no app, no upload. Move the file through Files, cut the section, and save it back.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/compress-audio-for-email',
    title: 'Compress Audio for Email and WhatsApp',
    description:
      'Make a voice memo or song small enough to send: pick 64–128 kbps MP3, cut silence first, and compress in the browser. Nothing uploaded.',
    minutes: 4,
  },
  {
    locale: 'en',
    href: '/guides/record-a-voice-memo-in-browser',
    title: 'How to Record a Voice Memo in the Browser',
    description:
      'Record from your microphone in Chrome, Safari or Firefox, trim the take, and save MP3 or WAV. No app, no upload — the audio stays on your device.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/remove-hum-with-high-pass-filter',
    title: 'How to Remove Hum with a High-Pass Filter',
    description:
      'Cut 50/60 Hz mains hum, rumble and wind from a recording with a high-pass filter. Find the right cutoff for a voice and export without uploading.',
    minutes: 4,
  },
  {
    locale: 'en',
    href: '/guides/normalize-vs-compress-audio',
    title: 'Normalize vs Compress: Which One Do You Need?',
    description:
      'Normalize moves the whole file to a peak; compression narrows the gap between loud and quiet. Pick the right one, then export in the browser.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/split-long-recording-into-tracks',
    title: 'How to Split a Long Recording into Tracks',
    description:
      'Split a long recording into 2–16 equal files in the browser, or cut at the points you choose. Get one ZIP and keep every part local.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/convert-opus-to-mp3',
    title: 'How to Convert Opus to MP3 (No Upload)',
    description:
      'Turn WhatsApp voice notes and .opus, OGG or WebM files into MP3 in the browser. Pick 128 kbps for speech, 320 for music — nothing uploaded.',
    minutes: 4,
  },
  {
    locale: 'en',
    href: '/guides/convert-audio-to-midi',
    title: 'How to Convert Audio to MIDI (Free, in Your Browser)',
    description:
      'Turn a hummed melody, a voice, or a solo piano into a .mid file in your browser. What the model reads well, what it gets wrong, and what the file holds.',
    minutes: 5,
  },
  {
    locale: 'zh',
    href: '/zh/guides/convert-audio-to-midi',
    title: '音频转 MIDI - 单乐器，最长 3 分钟',
    description: '哼一段旋律、一句人声或一首独奏钢琴，在浏览器里转成 MIDI 文件。哪些素材转得准、哪些转不准，以及 .mid 文件里有什么。文件不会上传。',
    minutes: 4,
  },
  {
    locale: 'ja',
    href: '/ja/guides/convert-audio-to-midi',
    title: 'オーディオをMIDIに変換｜単一の楽器で最長3分',
    description: 'ハミングした旋律、歌声、ソロピアノをブラウザでMIDIファイルに変換。得意な素材と苦手な素材、.midの中身を解説します。アップロードはありません。',
    minutes: 4,
  },
  {
    locale: 'ko',
    href: '/ko/guides/convert-audio-to-midi',
    title: '오디오 MIDI 변환 - 한 악기, 최대 3분',
    description: '흥얼거린 멜로디, 노래, 솔로 피아노를 브라우저에서 MIDI 파일로 바꿔요. 잘 되는 소재와 그렇지 않은 소재, .mid 파일 안에는 무엇이 있는지. 업로드는 없어요.',
    minutes: 4,
  },
  {
    locale: 'de',
    href: '/de/guides/convert-audio-to-midi',
    title: 'Audio in MIDI umwandeln – ein Instrument, bis zu 3 Minuten',
    description: 'Melodie, Stimme oder Soloklavier im Browser in eine MIDI-Datei umwandeln. Was das Modell gut erkennt, was schiefgeht, und was in der .mid steckt. Kein Upload.',
    minutes: 4,
  },
  {
    locale: 'es',
    href: '/es/guides/convert-audio-to-midi',
    title: 'Convertir audio a MIDI online - un instrumento, 3 minutos',
    description: 'Convierte una melodía tarareada, una voz o un piano solo en un archivo MIDI en tu navegador. Qué sale bien, qué no, y qué lleva el .mid. Sin subir nada.',
    minutes: 4,
  },
  {
    locale: 'pt',
    href: '/pt/guides/convert-audio-to-midi',
    title: 'Converter áudio em MIDI online - um instrumento, 3 minutos',
    description: 'Transforme uma melodia cantarolada, uma voz ou um piano solo em arquivo MIDI no navegador. O que funciona, o que sai errado e o que há no .mid. Sem enviar nada.',
    minutes: 4,
  },
  {
    locale: 'id',
    href: '/id/guides/convert-audio-to-midi',
    title: 'Konversi audio ke MIDI online - satu instrumen, 3 menit',
    description: 'Ubah melodi yang dihumming, suara, atau piano solo menjadi file MIDI di browser. Apa yang terbaca dengan baik, apa yang salah, dan isi file .mid. Tanpa unggah.',
    minutes: 4,
  },
  {
    locale: 'fr',
    href: '/fr/guides/convert-audio-to-midi',
    title: 'Convertir un audio en MIDI - un instrument, 3 min max',
    description: 'Mélodie fredonnée, voix ou piano solo en MIDI dans le navigateur. Ce que le modèle lit bien, ce qu’il rate, ce que contient le .mid. Rien n’est téléversé.',
    minutes: 4,
  },
  {
    locale: 'ru',
    href: '/ru/guides/convert-audio-to-midi',
    title: 'Аудио в MIDI - один инструмент, до 3 минут',
    description: 'Напетая мелодия, голос или соло-фортепиано в MIDI-файл прямо в браузере. Что модель читает хорошо, где ошибается, что внутри .mid. Файл не покидает устройство.',
    minutes: 4,
  },
  {
    locale: 'ar',
    href: '/ar/guides/convert-audio-to-midi',
    title: 'تحويل الصوت إلى MIDI - آلة واحدة، حتى 3 دقائق',
    description: 'حوّل لحنًا تهدهده أو صوتًا أو بيانو منفردًا إلى ملف MIDI في المتصفح. ما يقرأه النموذج جيدًا وما يخطئ فيه، وما داخل ملف .mid. ملفك لا يُرفع أبدًا.',
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
  {
    locale: 'de',
    href: '/de/guides/how-to-trim-audio',
    title: 'Audio schneiden — eine Stelle behalten',
    description:
      'Behalte ein Stück einer Sprachnotiz oder eines Podcasts und wirf den Rest weg. Eine Datei pro Export. Nichts wird hochgeladen.',
    minutes: 4,
  },
  {
    locale: 'de',
    href: '/de/guides/how-to-edit-an-mp3',
    title: 'MP3 bearbeiten, einmal exportieren',
    description:
      'Schneiden, blenden oder lauter machen, dann einmal speichern. Welche Seite welchen Job macht, und wann WAV die bessere Zwischenstufe ist.',
    minutes: 5,
  },
  {
    locale: 'de',
    href: '/de/guides/merge-songs-one-track',
    title: 'Audiodateien zu einer Spur zusammenfügen',
    description:
      'Songs, Sprachnotizen oder Podcast-Teile in eine Datei. Reihenfolge, Crossfade, Export als MP3 oder WAV. Nichts wird hochgeladen.',
    minutes: 4,
  },
  {
    locale: 'de',
    href: '/de/guides/make-iphone-ringtone',
    title: 'Klingelton fürs iPhone erstellen',
    description:
      'Bis zu 40 Sekunden eines Songs als M4R. Chrome, Edge und Safari 17 kodieren auf dem Gerät. Firefox exportiert MP3, GarageBand macht den Rest.',
    minutes: 5,
  },
  {
    locale: 'ja',
    href: '/ja/guides/how-to-trim-audio',
    title: '音声をトリミングする',
    description:
      'ボイスメモやポッドキャストの必要な区間だけ残します。書き出しは1回につき1ファイル。アップロードしません。',
    minutes: 4,
  },
  {
    locale: 'ja',
    href: '/ja/guides/trim-opentracks-bgm',
    title: 'OpenTracksのBGMをブラウザでトリミングする',
    description:
      'OpenTracks（旧DOVA-SYNDROME）で無料BGMをダウンロードし、ブラウザでトリミング、ループ、形式変換をします。ファイルはアップロードしません。',
    minutes: 4,
  },
  {
    locale: 'ja',
    href: '/ja/guides/how-to-edit-an-mp3',
    title: 'MP3をブラウザで編集する',
    description:
      'カット、フェード、音量をまとめてから一度だけ書き出します。どのページがどの作業か、次も編集するなら WAV にする理由。',
    minutes: 5,
  },
  {
    locale: 'ja',
    href: '/ja/guides/merge-songs-one-track',
    title: '音声ファイルを1本に結合する',
    description:
      '曲、ボイスメモ、ポッドキャストを1ファイルにします。順番とクロスフェードを決めて、MP3 か WAV で書き出します。アップロードしません。',
    minutes: 4,
  },
  {
    locale: 'ja',
    href: '/ja/guides/make-iphone-ringtone',
    title: 'iPhoneの着信音を作る',
    description:
      '曲から40秒以内をM4Rにします。Chrome、Edge、Safari 17は端末上で書き出します。FirefoxはMP3にしてGarageBandで着信音にします。',
    minutes: 5,
  },
  {
    locale: 'ko',
    href: '/ko/guides/how-to-trim-audio',
    title: '오디오 자르기, 브라우저에서',
    description:
      '음성 메모나 팟캐스트에서 필요한 구간만 남겨요. 내보내기는 한 번에 파일 하나. 업로드는 없어요.',
    minutes: 4,
  },
  {
    locale: 'ko',
    href: '/ko/guides/how-to-edit-an-mp3',
    title: 'MP3 파일 편집하는 법',
    description:
      '자르고, 페이드하고, 키운 다음 한 번만 내보내요. 어떤 페이지가 무슨 일인지, 다시 편집할 거면 WAV인 이유.',
    minutes: 5,
  },
  {
    locale: 'ko',
    href: '/ko/guides/merge-songs-one-track',
    title: '오디오 파일 하나로 합치기',
    description:
      '노래, 음성 메모, 팟캐스트를 한 파일로 붙여요. 순서와 크로스페이드를 정하고 MP3나 WAV로 내보내요. 업로드는 없어요.',
    minutes: 4,
  },
  {
    locale: 'ko',
    href: '/ko/guides/make-iphone-ringtone',
    title: '아이폰 벨소리 만들기',
    description:
      '노래에서 40초 이내를 M4R로 만들어요. Chrome, Edge, Safari 17은 기기에서 인코딩해요. Firefox는 MP3로 보내고 GarageBand가 벨소리로 바꿔요.',
    minutes: 5,
  },
  {
    locale: 'zh',
    href: '/zh/guides/how-to-trim-audio',
    title: '在线裁剪音频',
    description: '语音备忘或播客只留需要的一段。一次导出一个文件。文件不会上传。',
    minutes: 4,
  },
  {
    locale: 'zh',
    href: '/zh/guides/how-to-edit-an-mp3',
    title: '在浏览器里编辑 MP3',
    description: '剪切、淡化、加大音量，然后只导出一次。哪一页做哪件事，以及还要再剪时为什么先存 WAV。',
    minutes: 5,
  },
  {
    locale: 'zh',
    href: '/zh/guides/merge-songs-one-track',
    title: '把几段音频合成一条',
    description: '歌曲、语音备忘或播客片段合成一个文件。排好顺序，加上交叉淡化，导出 MP3 或 WAV。文件不会上传。',
    minutes: 4,
  },
  {
    locale: 'zh',
    href: '/zh/guides/make-iphone-ringtone',
    title: '用一首歌做 iPhone 铃声',
    description: '从歌里截最多 40 秒，存成 M4R。Chrome、Edge 和 Safari 17 在设备上编码。Firefox 先导出 MP3，再用 GarageBand 做成铃声。',
    minutes: 5,
  },
  {
    locale: 'fr',
    href: '/fr/guides/how-to-trim-audio',
    title: 'Rogner un enregistrement dans le navigateur',
    description:
      'Gardez un passage d’une note vocale ou d’un podcast. Un export, un fichier. Rien n’est téléversé.',
    minutes: 4,
  },
  {
    locale: 'fr',
    href: '/fr/guides/how-to-edit-an-mp3',
    title: 'Modifier un MP3 dans le navigateur',
    description:
      'Coupez, fondez ou montez le volume, puis exportez une seule fois. Quelle page fait quel travail, et quand le WAV évite un second encodage.',
    minutes: 5,
  },
  {
    locale: 'fr',
    href: '/fr/guides/merge-songs-one-track',
    title: 'Fusionner plusieurs fichiers audio',
    description:
      'Chansons, notes vocales ou chapitres de podcast en un seul fichier. Ordre, fondu enchaîné, export MP3 ou WAV. Rien n’est téléversé.',
    minutes: 4,
  },
  {
    locale: 'fr',
    href: '/fr/guides/make-iphone-ringtone',
    title: 'Créer une sonnerie iPhone',
    description:
      'Jusqu’à 40 secondes d’une chanson en M4R. Chrome, Edge et Safari 17 encodent sur l’appareil. Firefox exporte un MP3, GarageBand fait la sonnerie.',
    minutes: 5,
  },
  {
    locale: 'ru',
    href: '/ru/guides/how-to-trim-audio',
    title: 'Как обрезать аудио в браузере',
    description:
      'Оставьте нужный кусок голосовой заметки или подкаста. Один экспорт — один файл. На сервер ничего не уходит.',
    minutes: 4,
  },
  {
    locale: 'ru',
    href: '/ru/guides/how-to-edit-an-mp3',
    title: 'Как отредактировать MP3 в браузере',
    description:
      'Обрежьте, сделайте затухание или поднимите громкость и экспортируйте один раз. Какая страница за какую задачу, и когда промежуточный файл лучше в WAV.',
    minutes: 5,
  },
  {
    locale: 'ru',
    href: '/ru/guides/merge-songs-one-track',
    title: 'Как соединить аудио в один файл',
    description:
      'Песни, голосовые заметки или главы подкаста в один файл. Порядок, перекрестное затухание, экспорт MP3 или WAV. На сервер ничего не уходит.',
    minutes: 4,
  },
  {
    locale: 'ru',
    href: '/ru/guides/make-iphone-ringtone',
    title: 'Как сделать рингтон для iPhone',
    description:
      'До 40 секунд песни в M4R. Chrome, Edge и Safari 17 кодируют на устройстве. Firefox сохраняет MP3, рингтон делает GarageBand.',
    minutes: 5,
  },
  {
    locale: 'ar',
    href: '/ar/guides/how-to-trim-audio',
    title: 'قصّ تسجيل صوتي في المتصفح',
    description: 'أبقِ مقطعًا من رسالة صوتية أو بودكاست. كل تصدير ملف واحد. الملف لا يُرفع.',
    minutes: 4,
  },
  {
    locale: 'ar',
    href: '/ar/guides/how-to-edit-an-mp3',
    title: 'تحرير ملف MP3 في المتصفح',
    description:
      'قصّ أو أضف تلاشيًا أو ارفع الصوت، ثم صدّر مرة واحدة. أي صفحة لأي مهمة، ومتى يكون WAV أفضل إذا بقي تحرير لاحق.',
    minutes: 5,
  },
  {
    locale: 'ar',
    href: '/ar/guides/merge-songs-one-track',
    title: 'دمج ملفات صوتية في ملف واحد',
    description:
      'أغاني أو رسائل صوتية أو فصول بودكاست في ملف واحد. الترتيب، التلاشي المتقاطع، ثم MP3 أو WAV. الملف لا يُرفع.',
    minutes: 4,
  },
  {
    locale: 'ar',
    href: '/ar/guides/make-iphone-ringtone',
    title: 'صنع نغمة رنين للآيفون',
    description:
      'حتى 40 ثانية من أغنية بصيغة M4R. يرمّز Chrome وEdge وSafari 17 على الجهاز. Firefox يصدّر MP3 وGarageBand يصنع النغمة.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/radio-filter',
    title: 'Radio Filter — Make Audio Sound Like a Radio',
    description:
      'Narrow a voice to the 300–3,000 Hz radio band with the high-pass and low-pass filters, and add grit if you want it. Nothing is uploaded.',
    minutes: 5,
  },
  {
    locale: 'en',
    href: '/guides/mpeg-audio',
    title: 'What Is MPEG Audio? Layers, Bitrates, and MP3',
    description:
      'MPEG audio is compressed audio from the MPEG standards, and Layer III is the MP3 you already use. What the labels mean, and what to open the file with.',
    minutes: 6,
  },
  {
    locale: 'ru',
    href: '/ru/guides/convert-video-to-mp3',
    title: 'Видео в аудио — извлечь звук из видео онлайн',
    description:
      'Сохраните звуковую дорожку видео в MP3. Битрейт 128, 192 или 320 kbps. Дорожки AC3 и DTS браузер не прочитает. Файл не загружается на сервер.',
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
  '/guides/opus-a-mp3': '/guides/convert-opus-to-mp3',
};

function unprefixedGuide(href: string, locale: Locale): string {
  if (locale === 'en') return href;
  const prefix = `/${locale}`;
  return href.startsWith(`${prefix}/`) ? href.slice(prefix.length) : href;
}

function guideKey(path: string): string {
  return GUIDE_ALIAS[path] ?? path;
}

/** Guides that support a specific tool, by normalized guide path. */
const GUIDE_TOOL: Record<string, string> = {
  '/guides/audacity-alternative': 'mp3-editor',
  '/guides/change-pitch-without-changing-speed': 'pitch-changer',
  '/guides/compress-audio-for-email': 'compress-audio',
  '/guides/convert-audio-to-midi': 'audio-to-midi',
  '/guides/convert-m4a-to-mp3': 'm4a-to-mp3',
  '/guides/convert-ogg-to-mp3': 'ogg-to-mp3',
  '/guides/convert-opus-to-mp3': 'opus-to-mp3',
  '/guides/convert-video-to-mp3': 'mp4-to-mp3',
  '/guides/cut-a-song-for-tiktok': 'mp3-cutter',
  '/guides/how-to-cut-a-song': 'mp3-cutter',
  '/guides/how-to-edit-a-wav-file': 'mp3-editor',
  '/guides/how-to-edit-an-mp3': 'mp3-editor',
  '/guides/how-to-trim-audio': 'audio-trimmer',
  '/guides/make-iphone-ringtone': 'ringtone-maker',
  '/guides/merge-songs-one-track': 'audio-joiner',
  '/guides/mpeg-audio': 'mp3-editor',
  '/guides/normalize-vs-compress-audio': 'normalize-audio',
  '/guides/podcast-loudness-lufs': 'loudness-meter',
  '/guides/radio-filter': 'high-pass-filter',
  '/guides/record-a-voice-memo-in-browser': 'voice-recorder',
  '/guides/remove-hum-with-high-pass-filter': 'high-pass-filter',
  '/guides/remove-silence-from-podcast': 'silence-remover',
  '/guides/split-long-recording-into-tracks': 'split-mp3',
  '/guides/trim-audio-on-iphone': 'audio-trimmer',
  '/guides/trim-opentracks-bgm': 'audio-trimmer',
};

/** Guides in the current language that support this tool. */
export function guidesForTool(tool: string, locale: Locale): GuideCard[] {
  return GUIDES.filter(
    (g) => g.locale === locale && GUIDE_TOOL[guideKey(unprefixedGuide(g.href, g.locale))] === tool,
  );
}

/** Articles that exist in more than one language, derived from GUIDES so the two can't drift. */
const translatedGuideKeys = new Set(
  [...GUIDES.reduce((byKey, g) => {
    const key = guideKey(unprefixedGuide(g.href, g.locale));
    const locales = byKey.get(key) ?? new Set<Locale>();
    locales.add(g.locale);
    byKey.set(key, locales);
    return byKey;
  }, new Map<string, Set<Locale>>())]
    .filter(([, locales]) => locales.size > 1)
    .map(([key]) => key),
);

export function isTranslatedGuide(path: string): boolean {
  return translatedGuideKeys.has(guideKey(path));
}

/** Guide articles only alternate when translated; every other page type alternates across locales. */
export function hasAlternates(path: string): boolean {
  if (path.startsWith('/guides/') || path.startsWith('/guias/')) return isTranslatedGuide(path);
  return true;
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
      'Browser audio guides: trim on iPhone, cut a song for TikTok, compress for email, record a memo, remove hum, normalize, split tracks, convert Opus.',
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
    title: 'Audio-Anleitungen — schneiden, MP3, Klingelton',
    description:
      'Auf Deutsch: Audio schneiden, eine MP3 einmal exportieren, Dateien zusammenfügen, einen Klingelton bauen, MP4 in MP3 umwandeln.',
    h1: 'Audio-Anleitungen',
    intro: 'Kurze Schritte für das, was im Browser geht. Die Datei wird nicht hochgeladen.',
    empty: 'Noch keine Anleitungen auf Deutsch.',
    minutes: 'Min.',
  },
  ko: {
    title: '오디오 가이드 — 자르기, MP3, 벨소리',
    description: '오디오 자르기, MP3 편집, 파일 합치기, 아이폰 벨소리, MP4를 MP3로. 파일은 업로드되지 않아요.',
    h1: '오디오 가이드',
    intro: '브라우저에서 끝낼 수 있는 작업의 짧은 설명이에요. 파일은 업로드되지 않아요.',
    empty: '아직 한국어 가이드가 없습니다.',
    minutes: '분',
  },
  ja: {
    title: 'オーディオガイド — トリミングと着信音',
    description: '音声のトリミング、MP3の編集、結合、iPhoneの着信音、MP4の変換。ファイルはアップロードしません。',
    h1: 'オーディオガイド',
    intro: 'ブラウザで済ませられる作業の短い手順です。ファイルはアップロードしません。',
    empty: '日本語のガイドはまだありません。',
    minutes: '分',
  },
  zh: {
    title: '音频指南 — 裁剪、MP3、铃声',
    description: '裁剪音频、编辑 MP3、合成一条、做 iPhone 铃声，以及 MP4 转 MP3。文件不会上传。',
    h1: '音频指南',
    intro: '针对在浏览器里就能做完的事，写成短步骤。文件不会上传。',
    empty: '还没有中文指南。',
    minutes: '分钟',
  },
  fr: {
    title: 'Guides audio — rogner, MP3, sonnerie',
    description:
      'Rogner un enregistrement, modifier un MP3, fusionner des fichiers, créer une sonnerie iPhone, changer la hauteur. Rien n’est téléversé.',
    h1: 'Guides audio',
    intro: 'Des étapes courtes pour ce que l’on fait vraiment avec l’audio — dans des outils qui ne téléversent rien.',
    empty: 'Pas encore de guides en français.',
    minutes: 'min de lecture',
  },
  ru: {
    title: 'Аудио-гайды — обрезка, MP3, рингтон',
    description:
      'Обрезать аудио, отредактировать MP3, соединить файлы, сделать рингтон и сдвинуть тон. На сервер ничего не уходит.',
    h1: 'Аудио-гайды',
    intro: 'Короткие пошаговые инструкции для задач, которые решаются прямо в браузере. Файлы не покидают устройство.',
    empty: 'Русских гайдов пока нет.',
    minutes: 'мин чтения',
  },
  ar: {
    title: 'أدلة الصوت — القصّ وMP3 ونغمة الرنين',
    description:
      'قصّ تسجيل، تحرير MP3، دمج الملفات، صنع نغمة للآيفون، وتغيير الدرجة. الملف لا يُرفع.',
    h1: 'أدلة الصوت',
    intro: 'خطوات قصيرة للمهام التي تُنجز مباشرة في المتصفح. ملفاتك لا تترك جهازك.',
    empty: 'لا توجد أدلة عربية بعد.',
    minutes: 'دقائق القراءة',
  },
};
