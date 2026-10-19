import type { Catalog } from './types';

export const id: Catalog = {
  ui: {
    skip: 'Lewati ke konten',
    logoHome: 'Free Audio Editor — beranda',
    tools: 'Alat',
    language: 'Bahasa',
    theme: 'Alihkan mode gelap',
    navMain: 'Utama',
    navAbout: 'Tentang',
    footerBlurb:
      'Alat audio online gratis yang berjalan sepenuhnya di browser Anda. File tidak pernah diunggah — penyuntingan audio yang menjaga privasi sejak awal.',
    share: 'Bagikan',
    shareOn: 'Bagikan ke {name}',
    copyLink: 'Salin tautan',
    copied: 'Tersalin',
    about: 'Tentang',
    privacy: 'Privasi',
    status: 'Status',
    guides: 'Panduan',
    rights: 'Tidak ada file yang meninggalkan perangkat Anda.',
    clientSide: 'Pemrosesan 100% di perangkat',
    trustFree: 'Gratis, tanpa daftar',
    trustClean: 'Tanpa watermark',
    faqHeading: 'Pertanyaan yang sering diajukan',
    toolFaq: 'Pertanyaan tentang {name}',
    related: 'Alat terkait',
    openTool: 'Buka {name}',
    allTools: 'Semua alat audio',
    browseToolkit: 'Lihat seluruh rangkaian alat',
    home: 'Beranda',
    howTo: 'Cara menggunakan {name}',
    ogAlt: 'Free Audio Editor — edit audio online, tidak ada yang pernah diunggah',
    schemaOs: 'Apa pun (berbasis browser)',
    schemaBrowser: 'Membutuhkan browser modern dengan dukungan Web Audio',
    features: [
      'Pangkas, potong, dan gabung audio',
      'Volume, normalisasi, kecepatan, dan reverb',
      'Putar balik dan rekam suara',
      'Konversi soundtrack video ke MP3 atau WAV',
      'Ekspor MP3, WAV, dan M4R iPhone',
    ],
    formats: {
      'mp3-320': 'MP3 · 320 kbps',
      'mp3-192': 'MP3 · 192 kbps',
      'mp3-128': 'MP3 · 128 kbps',
    'mp3-96': 'MP3 · 96 kbps',
    'mp3-64': 'MP3 · 64 kbps',
      wav: 'WAV · lossless',
      m4r: 'M4R · nada dering iPhone',
    },
    categories: {
      cut: 'Potong & Pangkas',
      merge: 'Gabung & Konversi',
      record: 'Rekam',
      effects: 'Efek & Studio',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — hingga sekitar satu jam',
    dropLocal: 'Diproses secara lokal — file Anda tidak pernah meninggalkan tab ini',
    formatsMore: ', dan lainnya',
    etaModel: 'pertama kali mengunduh model, setelahnya kira-kira sepanjang audionya',
    limitTenMin: 'paling lama 10 menit',
    limitRingtone: 'paling lama 40 detik',
    chipText: 'Teks',
    zoomOut: 'Perkecil',
    zoomIn: 'Perbesar',
    loadDifferent: 'Muat file lain',
    startOver: 'Mulai dari awal',
    waveform: 'Gelombang audio. Seret untuk memilih rentang.',
    play: 'Putar pilihan',
    pause: 'Jeda',
    hintSelect: 'Seret di gelombang untuk memilih · Spasi untuk memutar',
    hintConvert: 'Spasi untuk memutar · tidak ada yang diunggah',
    hintSilence: 'Celah yang lebih panjang dari minimum dipotong saat ekspor. Napas pendek tetap ada.',
    reverse: 'Putar balik',
    normalize: 'Normalisasi puncak',
    speed: 'Kecepatan',
    pitch: 'Nada',
    bass: 'Bass',
    treble: 'Treble',
    mid: 'Mid',
    cutoff: 'Cutoff',
    volume: 'Volume',
    reverb: 'Reverb',
    compress: 'Kompres',
    echoDelay: 'Tunda',
    echoFeedback: 'Ulangan',
    silenceThreshold: 'Ambang',
    silenceGap: 'Jeda minimum',
    silenceRemove: 'Akan menghapus sekitar {time} senyap',
    silenceKeepFile: 'Tidak ada yang di atas ambang, jadi ekspor menyimpan seluruh berkas',
    lufsIntegrated: 'Terintegrasi',
    lufsPeak: 'Puncak sampel',
    lufsPodcast: 'Podcast',
    lufsStreaming: 'Streaming',
    lufsBroadcast: 'Siaran',
    lufsLimited: 'Puncak ditahan di −1 dBFS. Hasilnya {lufs} LUFS.',
    lufsWill: 'Ekspor akan jatuh di {lufs} LUFS.',
    lufsSilent: 'Berkas ini senyap, tidak ada kenyaringan untuk disamakan.',
    adjust: 'Sesuaikan — fade, volume, kecepatan, putar balik',
    fadeIn: 'Fade in',
    fadeOut: 'Fade out',
    normalizeOverrides: 'Normalisasi puncak (menggantikan volume)',
    undo: 'Batalkan perubahan terakhir',
    cutMode: 'Mode potong',
    keep: 'Pertahankan pilihan',
    deleteSel: 'Hapus pilihan',
    precise: 'Waktu persis',
    startSec: 'Mulai (dtk)',
    endSec: 'Akhir (dtk)',
    format: 'Format',
    export: 'Ekspor',
    joinerMixed: 'MP3, WAV, M4A, OGG, FLAC — format campuran tidak masalah',
    joinerLocal: 'Diproses secara lokal — file Anda tidak pernah meninggalkan tab ini',
    trackSummary: '{n} trek · {time}',
    crossfade: 'Crossfade',
    fadeInFirst: 'Fade in (trek pertama)',
    fadeOutLast: 'Fade out (trek terakhir)',
    mergeExport: 'Gabung & ekspor',
    record: 'Rekam',
    recordHint: 'Rekam dari mikrofon Anda',
    tooBig: 'File ini lebih dari 300 MB — coba file yang lebih pendek atau yang sudah dikompres.',
    decoding: 'Mendekode file…',
    ready: 'Siap. Seret di gelombang untuk memilih rentang.',
    hourWarning: 'File lebih dari satu jam dapat menghabiskan memori browser di beberapa perangkat.',
    decodeFail:
      'File ini tidak dapat didekode — mungkin rusak, atau codec-nya tidak didukung browser Anda.',
    ringtoneCap: 'Pilihan dibatasi 40 detik — panjang nada dering yang klasik.',
    kept: 'Pilihan dipertahankan: {range}',
    markedDelete: 'Pilihan ditandai untuk dihapus: {range}',
    endTime: 'Waktu akhir harus setidaknya 0.05 detik setelah waktu mulai.',
    nothingUndo: 'Tidak ada lagi yang bisa dibatalkan.',
    reverted: 'Perubahan terakhir dikembalikan.',
    normalizeOn: 'Normalisasi aktif — puncak akan naik sekitar {db} dB (dibatasi +12 dB).',
    rendering: 'Merender…',
    renderingStatus: 'Merender suntingan Anda secara lokal…',
    encoding: 'Mengodekan {ext}…',
    exported: '{file} diekspor.',
    saved: 'Disimpan sebagai {file} — tidak ada yang diunggah.',
    exportFail:
      'Ekspor gagal — encoder tidak dapat dimuat (apakah Anda sedang offline?). Coba format WAV.',
    merging: 'Menggabungkan…',
    mergingStatus: 'Menggabungkan trek secara lokal…',
    moveUp: 'Naikkan',
    moveDown: 'Turunkan',
    remove: 'Hapus',
    recUnavailable: 'Perekaman tidak tersedia di browser ini. Coba Chrome, Edge, Firefox, atau Safari.',
    micBlocked: 'Akses mikrofon diblokir. Izinkan di pengaturan browser Anda, lalu coba lagi.',
    recording: 'Merekam… klik Berhenti setelah Anda selesai.',
    stop: 'Berhenti',
    recordAgain: 'Rekam lagi',
    recordingLoaded: 'Rekaman dimuat ke editor di bawah.',
    vizStyle: 'Gaya',
    vizStyleBars: 'Batang',
    vizStyleFilled: 'Isi',
    vizStyleOutline: 'Garis luar',
    vizStyleDots: 'Titik',
    vizStyleBottom: 'Batang bawah',
    vizStyleBlocks: 'Batang lebar',
    vizTemplate: 'Templat',
    vizTemplateNone: 'Manual',
    vizTplSoundcloud: 'SoundCloud',
    vizTplPodcast: 'Podcast',
    vizTplPoster: 'Poster',
    vizTplSticker: 'Stiker',
    vizTplPrint: 'Cetak',
    vizTplNeon: 'Neon',
    vizTplBlocks: 'Blok',
    vizWaveColor: 'Warna gelombang',
    vizBgColor: 'Latar',
    vizTransparent: 'Latar transparan',
    vizSize: 'Ukuran',
    vizSizeVideo: 'Sampul video',
    vizSizeSquare: 'Persegi',
    vizSizeOg: 'Gambar sosial',
    vizSizeBanner: 'Spanduk',
    vizSizeCustom: 'Kustom',
    vizWidth: 'Lebar',
    vizHeight: 'Tinggi',
    vizRange: 'Rentang waktu',
    vizRangeStart: 'Mulai (detik)',
    vizRangeEnd: 'Selesai (detik)',
    vizPreview: 'Pratinjau gelombang',
    vizReady: 'Siap. Atur tampilan, lalu unduh PNG.',
    vizRendering: 'Merender…',
    vizExportFail: 'PNG tidak bisa dibuat. Coba ukuran yang lebih kecil.',
    specFft: 'Ukuran FFT',
    specAxis: 'Sumbu frekuensi',
    specAxisLog: 'Logaritmik',
    specAxisLinear: 'Linear',
    specMaxHz: 'Frekuensi atas (Hz)',
    specDbFloor: 'Pelan (dB)',
    specDbCeil: 'Keras (dB)',
    specColors: 'Warna',
    specViridis: 'Viridis',
    specInferno: 'Inferno',
    specGray: 'Skala abu-abu',
    specPreview: 'Pratinjau spektrogram',
    specProgress: 'Menggambar spektrogram… {pct}%',
    paintText: 'Teks',
    paintPlaceholder: 'Satu baris pendek, misalnya nama',
    paintImage: 'PNG, JPG, atau WebP. Gambar diperkecil agar muat di spektrum.',
    paintPreview: 'Gambar yang akan ditulis ke audio',
    paintReady: 'Siap. Unduh WAV, lalu buka di generator spektrogram.',
    paintWorking: 'Menulis audio…',
    paintFail: 'Gambar ini tidak terbaca. Coba PNG atau JPG.',
    tgAlbum: 'Album',
    tgAlbumArtist: 'Artis album',
    tgArtist: 'Artis',
    tgComment: 'Komentar',
    tgComposer: 'Komposer',
    tgCover: 'Sampul',
    tgCoverFail: 'Sampul harus berupa gambar JPG atau PNG.',
    tgCoverHint: 'JPG atau PNG persegi berukuran 500–1400 px tampil paling baik di sebagian besar pemutar.',
    tgDisc: 'Disk',
    tgGenre: 'Genre',
    tgNoTags: 'File ini belum memiliki tag — isi saja yang Anda tahu.',
    tgReadFail: 'File ini tidak dapat dibaca — gunakan MP3.',
    tgRemoveAll: 'Hapus semua metadata (simpan sebagai file bersih)',
    tgRemoveCover: 'Hapus sampul',
    tgReplaceCover: 'Ganti sampul',
    tgReset: 'Atur ulang',
    tgSaved: 'Tersimpan — cek folder unduhan Anda.',
    tgSaving: 'Menulis tag…',
    tgSaveCover: 'Simpan sampul',
    tgTitle: 'Judul',
    tgTrack: 'Trek',
    tgWriteFail: 'Terjadi masalah saat menyimpan. Coba lagi, atau gunakan file MP3 lain.',
    tgYear: 'Tahun',
    trLang: 'Bahasa',
    trLangAuto: 'Deteksi otomatis',
    trModel: 'Model',
    trModelBase: 'Base — lebih akurat',
    trModelTiny: 'Tiny — unduhan lebih cepat',
    trPreparing: 'Menyiapkan model…',
    trDownloading: 'Mengunduh model… {percent}%',
    trWorking: 'Mentranskripsi… {percent}%',
    trDone: 'Transkripsi selesai — {count} karakter',
    trFirstRun:
      'Pertama kali dijalankan, model diunduh sekali (Tiny ≈ 40 MB, Base ≈ 80 MB) dan disimpan browser — pemakaian berikutnya bisa offline.',
    trResultPlaceholder: 'Transkrip muncul di sini — sunting sebelum mengunduh jika mau.',
    trCopy: 'Salin',
    trCopied: 'Tersalin ke papan klip',
    trTxt: 'Unduh TXT',
    trSrt: 'Unduh SRT',
    trTooLong:
      'File ini lebih dari 10 menit. Potong dulu — pemotong audio sama privasinya — lalu kembali transkripsi di sini.',
    trFail: 'Transkripsi gagal. Coba model Tiny, file yang lebih jelas, atau browser terbaru.',
    mixMute: 'Bisukan',
    mixSolo: 'Solo',
    mixPan: 'Pan',
    mixOffset: 'Mulai',
    mixTrimIn: 'Potong awal',
    mixTrimOut: 'Potong akhir',
    mixGain: 'Level',
    mixMaster: 'Master',
    mixPlay: 'Putar mix',
    mixStop: 'Stop',
    mixAdd: 'Tambah trek',
    mixLimit: 'Halaman ini maksimal 8 trek. Ekspor mix ini, atau pakai editor desktop untuk sesi yang lebih besar.',
    mixPulled: 'Mix diturunkan {db} dB agar puncaknya tidak pecah.',
    mixExport: 'Ekspor mix',
    mixDecode: '{name} tidak bisa didekode.',
  },
  home: {
    title: 'Edit Audio Online Gratis — Potong, Gabung, Konversi',
    description:
      'Editor audio online gratis: pangkas, potong, gabung, putar balik, dan konversi audio di browser. Tanpa daftar, tanpa unggah — file tetap di perangkat.',
    appBlurb: 'Editor audio online gratis — potong, pangkas, gabung, dan edit audio di browser Anda.',
    badge: 'Pemrosesan 100% lokal · tidak ada yang diunggah',
    h1: 'Editor audio online gratis',
    lede: 'Pangkas, potong, gabung, dan edit audio langsung di browser. Tanpa mendaftar, tanpa watermark, tanpa unggah — file Anda tidak pernah meninggalkan perangkat.',
    ctaTrim: 'Pangkas file audio',
    ctaMerge: 'Gabungkan lagu',
    highlightsLabel: 'Mengapa cara kerjanya seperti ini',
    priceSymbol: '$',
    priceAmount: '0',
    priceWord: 'Gratis',
    highlights: [
      {
        title: 'Tidak ada yang diunggah',
        body: 'File didekode di tab browser ini. Tutup tabnya, audionya hilang — tidak ada server yang pernah menerimanya.',
      },
      {
        title: 'Gratis, karena perangkat Anda yang bekerja',
        body: 'Tidak ada server yang harus dibayar, jadi tidak ada watermark, tidak perlu mendaftar, dan tidak ada batas ekspor.',
      },
      {
        title: 'Jatuhkan file dan mulai',
        body: 'Tanpa instalasi dan tanpa antrean. Trek yang panjang tidak pernah meninggalkan perangkat, jadi penyuntingan langsung dimulai.',
      },
    ],
    toolsHeading: 'Alat audio populer',
    allToolsCta: 'Lihat semua {count} alat',
    toolsCount: '{count} alat',
    mostUsed: 'Paling sering dipakai',
    comingTitle: 'Yang akan datang',
    comingBody: 'Mixer crossfade, penghapus keheningan, dan lainnya — dengan pendekatan yang sama: privasi diutamakan.',
    useCasesHeading: 'Apa yang akan kamu sunting hari ini?',
    useCases: [
      { title: 'Podcast', body: 'Rekam episode, potong bagian kasarnya, sambungkan segmen, dan dapatkan transkripsi untuk catatan acaramu.', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
      { title: 'Musik', body: 'Perlambat riff untuk dipelajari, ubah kunci untuk cover, dan tambahkan bobot atau kilau pada demo.', tools: ['change-audio-speed', 'pitch-changer', 'bass-booster'] },
      { title: 'Sulih suara', body: 'Hasilkan take yang bersih: buang gemuruh, ratakan level, dan angkat rekaman pelan tanpa clipping.', tools: ['high-pass-filter', 'normalize-audio', 'increase-volume'] },
      { title: 'Belajar dan kerja', body: 'Dengarkan kuliah dengan cepat, ubah rekaman jadi teks, dan haluskan sambungan antarklip.', tools: ['audio-to-text', 'fade-audio', 'audio-joiner'] },
    ],
    whyHeading: 'Mengapa edit audio sebaiknya di perangkat Anda',
    why: [
      {
        title: 'Privat sejak awal',
        body: 'Memo suara, wawancara, trek yang belum dirilis — audio itu pribadi. Di sini file didekode dan disunting di memori browser Anda sendiri. Tidak ada server yang bisa melihat, menyimpan, atau membocorkannya.',
      },
      {
        title: 'Tanpa antre, tanpa menunggu',
        body: 'Mengunggah trek 50 MB, menunggu server, lalu mengunduhnya kembali — langkah itu dilewati seluruhnya. Penyuntingan dimulai begitu Anda menjatuhkan file.',
      },
      {
        title: 'Gratis, sungguh',
        body: 'Pemrosesan lokal hampir tidak membutuhkan biaya, jadi alat ini gratis: tanpa watermark, tanpa wajib mendaftar, dan tanpa batas ekspor.',
      },
    ],
    faqs: [
      {
        q: 'Apakah Free Audio Editor benar-benar gratis?',
        a: 'Ya — setiap alat di situs ini gratis, tanpa mendaftar, tanpa watermark, dan tanpa batas ekspor harian. Karena semua pemrosesan terjadi di browser Anda sendiri, tidak ada tagihan server yang harus ditutup.',
      },
      {
        q: 'Bagaimana audio Anda tetap privat?',
        a: 'File Anda tidak pernah diunggah. Dekode, penyuntingan, dan ekspor semuanya berjalan secara lokal dengan Web Audio API di dalam tab browser. Setelah halaman termuat, Anda bisa memutus internet dan setiap alat tetap berjalan.',
      },
      {
        q: 'Apakah Anda perlu menginstal sesuatu?',
        a: 'Tidak. Alat ini adalah aplikasi web yang berjalan di browser modern mana pun — Chrome, Edge, Firefox, atau Safari, di komputer maupun ponsel.',
      },
      {
        q: 'Format audio apa yang didukung?',
        a: 'Anda bisa membuka MP3, WAV, M4A/AAC, OGG, FLAC, dan audio WebM, lalu menyimpan hasilnya sebagai MP3 (128–320 kbps) atau WAV lossless. Pembuat nada dering juga mengekspor M4R di Chrome, Edge, dan Safari.',
      },
    ],
  },
  hub: {
    categoryIntro: {
      cut: 'Persingkat lagu, simpan bagian terbaiknya, atau buat nada dering — pilih rentangnya di waveform dan simpan.',
      merge: 'Gabungkan beberapa trek jadi satu file, ekstrak audio dari video apa pun, dan konversi antara MP3, WAV, M4A, OGG, dan lainnya.',
      record: 'Rekam mikrofon langsung di browser — potong rekamannya dan simpan sebagai MP3, tidak ada data yang meninggalkan perangkat.',
      effects: 'Perbesar volume, ubah kecepatan atau nada, tambahkan reverb dan fade, atur lows dan highs — dan visualisasikan suara sebagai waveform atau spektrogram.',
    },
    tasksTitle: 'Apa yang ingin Anda lakukan?',
    tasks: [
    { task: 'Buat nada dering untuk ponselku', tool: 'ringtone-maker' },
    { task: 'Ekstrak audio dari sebuah video', tool: 'extract-audio' },
    { task: 'Membuat rekaman yang pelan menjadi lebih keras', tool: 'increase-volume' },
    { task: 'Menggabungkan dua lagu jadi satu file', tool: 'audio-joiner' },
    { task: 'Konversi file WAV ke MP3', tool: 'wav-to-mp3' },
    { task: 'Memperlambat lagu dan menambah reverb', tool: 'slowed-reverb' },
    { task: 'Ubah nada tanpa mengubah kecepatan', tool: 'pitch-changer' },
    ],
    title: 'Alat audio online gratis — Potong, gabung, dan konversi',
    description:
      'Potong, gabung, konversi, rekam dan tingkatkan audio dengan semua alat di satu tempat. Semua di browser: tanpa unggah dan tanpa daftar.',
    h1: 'Semua alat audio',
    intro:
      'Semua alat di situs ini, dikelompokkan sesuai tugas. Pilih satu dan mulai — semuanya berjalan di browser Anda, tanpa daftar dan tanpa unggah.',
  },
  about: {
    title: 'Tentang Free Audio Editor — alat audio online tanpa unggah',
    description:
      'Free Audio Editor adalah rangkaian alat audio yang mengutamakan privasi dan berjalan sepenuhnya di browser Anda — tanpa unggah, tanpa mendaftar, tanpa watermark.',
    h1: 'Tentang',
    p1: 'Free Audio Editor ada karena mengedit memo suara seharusnya tidak berarti mengunggahnya ke server orang lain. Setiap alat di sini — {trimmer}, {cutter}, {joiner}, dan yang lainnya — bekerja dengan cara yang sama: browser Anda membaca file, mengeditnya di memori, lalu menulis hasilnya langsung kembali ke disk Anda.',
    linkTrimmer: 'pemangkas audio',
    linkCutter: 'pemotong lagu',
    linkJoiner: 'penggabung audio',
    p2: 'Arsitektur itu pula yang membuat alat ini cepat dan gratis. Tidak ada antrean unggah, tidak ada pusat pemrosesan, dan tidak ada biaya penyimpanan — yang bekerja adalah perangkat Anda, dan itu memang sudah menjadi keahliannya.',
    p3: 'Situs ini dibangun sebagai aplikasi web statis dengan Web Audio API. Pengembangannya masih berjalan, dengan konverter, perekam suara, dan lebih banyak alat edit yang sedang disiapkan.',
  },
  privacy: {
    title: 'Kebijakan Privasi — Free Audio Editor',
    description:
      'Kebijakan privasi freeaudioeditor.online: audio diproses lokal di browser Anda dan tidak pernah diunggah. Tanpa akun, tanpa pelacakan audio.',
    h1: 'Kebijakan Privasi',
    updated: 'Terakhir diperbarui: 16 Oktober 2026',
    sections: [
      {
        h: 'File audio Anda',
        body: 'Setiap alat di situs ini memproses audio sepenuhnya di dalam browser Anda dengan Web Audio API. File Anda {em} — tidak ada endpoint untuk mengunggah. Saat Anda menutup tab, audio yang sudah didekode hilang dari memori.',
        em: 'tidak pernah diunggah ke server kami',
      },
      {
        h: 'Apa yang kami simpan',
        body: 'Tidak ada data tentang Anda. Situs ini tidak memiliki akun dan tidak meminta alamat email. Preferensi tema (terang atau gelap) disimpan di localStorage browser Anda dan tidak pernah meninggalkan perangkat.',
      },
      {
        h: 'Pihak ketiga',
        body: 'Encoder MP3 (lamejs) ikut terpasang bersama situs ini dan hanya dimuat saat Anda mengekspor MP3. Encoder itu tidak diunduh dari jaringan pihak ketiga, dan tidak menerima audio Anda. Font disajikan dari domain situs ini sendiri.',
      },
      {
        h: 'Analitik dan iklan',
        body: 'Kami mengukur lalu lintas secara keseluruhan dengan Vercel Web Analytics. Layanan itu tidak memakai cookie dan hanya mencatat tampilan halaman secara agregat — bukan identitas Anda, dan bukan audio Anda. Kami tidak menayangkan iklan. Jika salah satu dari hal ini berubah, kebijakan ini diperbarui lebih dulu.',
      },
    ],
    contactHeading: 'Kontak',
    contactBefore: 'Ada pertanyaan tentang kebijakan ini? Tulis ke {email}.',
  },
  tools: {
    'audio-to-text': {
      cardLine: 'Transkripsi wawancara dan memo suara jadi teks atau subtitle SRT, di perangkatmu sendiri.',
      name: 'Audio ke Teks',
      shortName: 'Audio ke Teks',
      title: 'Ubah Audio ke Teks Online Gratis — TXT & SRT',
      description:
        'Ubah audio menjadi teks di browser — MP3, WAV, M4A dan video, 90+ bahasa dengan deteksi otomatis, ekspor TXT atau SRT. Gratis, tanpa daftar, tanpa unggah.',
      h1: 'Audio ke teks online gratis — Ubah rekaman menjadi teks',
      heroAlt: 'Jadikan catatan suara atau wawancara menjadi tulisan yang bisa disalin',
      subtitle: 'Ubah rekaman menjadi teks dalam 90+ bahasa, dengan penanda waktu — langsung di browser Anda.',
      intro:
        'Letakkan rekaman dan ambil kata-katanya: memo suara, wawancara, kuliah, podcast — dalam sekitar 90 bahasa, terdeteksi otomatis saat Anda tidak yakin bahasanya. Model AI Whisper berjalan di dalam tab browser Anda, di perangkat Anda sendiri, jadi audio tidak pernah diunggah, dan hasilnya berupa teks yang bisa disunting atau file SRT dengan penanda waktu.',
      usesHeading: 'Transkripsi yang benar-benar dibutuhkan',
      uses: [
        'Ubah kuliah, rapat, atau wawancara menjadi catatan yang bisa dicari dan dikutip.',
        'Buat subtitle video atau episode podcast dengan mengekspor SRT berpenanda waktu.',
        'Ambil kata-kata dari memo suara tanpa mengirim rekaman ke mana pun.',
      ],
      howTo: [
        {
          name: 'Letakkan file',
          text: 'Tambahkan MP3, WAV, M4A, file video, atau rekaman lain. Dekode terjadi di perangkat Anda dan tidak diunggah.',
        },
        {
          name: 'Pilih bahasa dan model',
          text: 'Deteksi otomatis menangani sebagian besar file. Pilih Tiny untuk kecepatan pada rekaman panjang atau perangkat kelas bawah, Base untuk akurasi terbaik.',
        },
        {
          name: 'Transkripsi dan unduh',
          text: 'Pertama kali dijalankan, model diunduh sekali lalu disimpan. Sunting transkrip jika perlu, lalu simpan sebagai TXT atau SRT.',
        },
      ],
      faqs: [
        {
          q: 'Apakah audio saya diunggah?',
          a: 'Tidak. File didekode di browser Anda dan ditranskripsi oleh model Whisper yang berjalan lokal melalui WebAssembly atau WebGPU. Satu-satunya permintaan jaringan adalah unduhan model sekali dari CDN publik — setelah itu transkripsi bisa berjalan offline. Audio Anda tidak pernah sampai ke server.',
        },
        {
          q: 'Seberapa akurat transkripsinya?',
          a: 'Menggunakan model Whisper dari OpenAI yang mendekati level manusia pada ucapan yang jernih. Akurasi turun karena derau latar belakang, aksen kental, beberapa pembicara bersahutan, atau musik keras. Untuk audio sulit, Base jelas lebih baik dari Tiny — dan bagaimanapun hasilnya ada di kotak yang bisa disunting, jadi Anda bisa memperbaiki nama dan tanda baca sebelum mengunduh.',
        },
        {
          q: 'Apa saja batasannya?',
          a: 'Satu file sekaligus, maksimal 10 menit per proses — potong dulu rekaman yang lebih panjang (pemotong audio sama privatnya). Tidak ada label pembicara: dialog keluar sebagai satu teks tanpa nama. Dan halaman ini bekerja pada file, bukan mikrofon langsung.',
        },
        {
          q: 'Apa bedanya dengan perekam suara?',
          a: 'Perekam suara merekam mikrofon Anda menjadi file audio; halaman ini membaca file yang sudah ada dan menuliskan kata-katanya. Keduanya cocok dipasangkan: rekam di sana, transkripsi di sini. Semuanya berjalan di browser Anda.',
        },
        {
          q: 'Bahasa apa saja yang didukung?',
          a: 'Whisper dilatih dengan sekitar 90 bahasa, dari Inggris, Mandarin, Spanyol, dan Arab hingga Vietnam, Ukraina, dan Swahili. Biarkan pada Deteksi otomatis dan modelnya menebak dari audionya, atau tetapkan bahasa untuk sedikit penambahan akurasi.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa — Chrome, Edge, Firefox, dan Safari terbaru, di desktop maupun ponsel. Browser dengan WebGPU (Chrome, Edge) mentranskripsi jauh lebih cepat; lainnya berjalan di CPU, jadi pilih Tiny untuk file panjang dan siapkan beberapa menit untuk sepuluh menit audio. Unduhan model Tiny juga lebih kecil.',
        },
      ],
      dropHint: 'Letakkan file audio atau video, atau klik untuk memilih',
      exportLabel: 'Mulai transkripsi',
    },
    'bass-booster': {
      cardLine: 'Tambahkan bobot dan pukulan dengan hingga +15 dB lows di bawah 150 Hz.',
      name: 'Penguat bass',
      shortName: 'Bass',
      title: 'Penguat bass — Tambah bass audio online gratis',
      description:
        'Tambahkan hingga +15 dB bass dengan low-shelf asli di bawah 150 Hz, langsung di browser tanpa trik kenyaringan. Ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Penguat bass online gratis — Kuatkan bass sebuah lagu',
      heroAlt: 'Tambahkan low end ke MP3',
      subtitle: 'Low-shelf sungguhan: hingga +15 dB di bawah 150 Hz, dengar, lalu ekspor. Tidak ada yang meninggalkan perangkat Anda.',
      intro:
        'Bass yang lemah adalah alasan paling umum rekaman terdengar kecil. Penguat bass memakai low-shelf EQ asli — hingga +15 dB di bawah 150 Hz, langkah yang sama dengan teknisi mastering — bukan trik yang menaikkan segalanya. Muat berkas, naikkan slidernya sampai bass terdengar pas, lalu ekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Kapan bass perlu ditingkatkan',
      uses: [
        'Memberi tubuh pada memo suara dan wawancara hasil ponsel agar tidak terdengar tipis.',
        'Memajukan drum dan bassline pada lagu yang isinya nada tengah semua.',
        'Menambah bobot jingle podcast tanpa menyentuh suara pembicara.',
      ],
      howTo: [
        {
          name: 'Muat audio Anda',
          text: 'MP3, WAV, M4A, OGG, atau FLAC. Pemrosesan tetap di perangkat Anda.',
        },
        {
          name: 'Naikkan slider bass',
          text: 'Hingga +15 dB di bawah 150 Hz. +3–6 dB biasanya mengatasi suara tipis; lebih tinggi untuk efek yang disengaja.',
        },
        {
          name: 'Dengar dan ekspor',
          text: 'Dengar pada volume normal — bass berlebih menutupi vokal. Ekspor sebagai MP3 atau WAV lossless.',
        },
      ],
      faqs: [
        {
          q: 'Apakah audio saya diunggah?',
          a: 'Tidak. Penguatan ini adalah filter low-shelf Web Audio API di dalam tab browser Anda — tidak ada langkah unggah. Setelah halaman termuat, Anda bisa offline dan alatnya tetap bekerja.',
        },
        {
          q: 'Apakah menaikkan bass menurunkan kualitas?',
          a: 'Tidak ada resampling atau perubahan nada. Jika penguatan mendorong bass melewati batas penuh, limiter menjaga puncaknya agar ekspor tidak fasih terdistorsi; pengaturan yang terlalu tinggi bisa sedikit melembutkan puncak tersebut.',
        },
        {
          q: 'Bisakah menambah sub-bass yang tidak ada?',
          a: 'Tidak — shelf hanya memperkuat frekuensi rendah yang sudah ada di berkas. Speaker ponsel tidak mampu memutar sub-bass; untuk menilai hasilnya, gunakan headphone atau speaker sungguhan.',
        },
        {
          q: 'Apa bedanya dengan volume booster?',
          a: 'Volume booster menaikkan semuanya secara merata; penguat bass hanya mengangkat frekuensi rendah di bawah 150 Hz. Jika seluruh berkas terlalu pelan, pakai booster; jika terdengar tipis, tambah bass di sini.',
        },
        {
          q: 'Berapa banyak bass yang perlu ditambah?',
          a: '+3–6 dB mengatasi rekaman yang tipis. Di atas +9 dB Anda membuat efek bergaya — pastikan vokal tetap jelas sebelum mengekspor.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Editornya dirancang untuk sentuhan — seret untuk memilih, atur slider, ekspor. Bekerja di Chrome, Edge, Firefox, dan Safari terbaru, di desktop maupun ponsel.',
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
    },
    'treble-booster': {
      cardLine: 'Tambahkan kilau dan kejernihan dengan menaikkan highs hingga +15 dB di atas 3 kHz.',
      name: 'Penguat treble',
      shortName: 'Treble',
      title: 'Penguat treble — Tambah nada tinggi audio online',
      description:
        'Tambahkan hingga +15 dB nada tinggi di atas 3 kHz dengan high-shelf asli di browser, tanpa trik kenyaringan. Ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Penguat treble online gratis — Naikkan tinggi sebuah lagu',
      heroAlt: 'Buat audio yang pekak lebih jelas',
      subtitle: 'High-shelf EQ sungguhan: hingga +15 dB di atas 3 kHz, dengar, lalu ekspor. Tidak ada yang meninggalkan perangkat Anda.',
      intro:
        'Audio yang teredam dan kusam hampir selalu kekurangan satu hal: energi di atas 3 kHz. Penguat treble memakai high-shelf EQ asli — hingga +15 dB di atas 3 kHz, langkah yang sama dengan teknisi mastering untuk membuka lagu — bukan trik yang menaikkan segalanya. Muat berkas, naikkan slidernya sampai detailnya kembali, lalu ekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Kapan treble perlu ditingkatkan',
      uses: [
        'Membuka rekaman kusam yang terdengar seperti direkam di bawah selimut.',
        'Mengembalikan konsonan dan napas pada suara agar ucapan tetap jelas.',
        'Menambah kilau pada simbal dan instrumen akustik dalam mix yang terdengar datar.',
      ],
      howTo: [
        {
          name: 'Muat audio Anda',
          text: 'MP3, WAV, M4A, OGG, atau FLAC. Pemrosesan tetap di perangkat Anda.',
        },
        {
          name: 'Naikkan slider treble',
          text: 'Hingga +15 dB di atas 3 kHz. +3–6 dB menghilangkan kesan kusam pada sebagian besar rekaman; lebih tinggi untuk tepi yang terang dan agresif.',
        },
        {
          name: 'Dengar dan ekspor',
          text: 'Perhatikan kekasaran pada bunyi sibilan (s, t) — ekspor sebagai MP3 atau WAV lossless.',
        },
      ],
      faqs: [
        {
          q: 'Apakah audio saya diunggah?',
          a: 'Tidak. Penguatan ini adalah filter high-shelf Web Audio API di dalam tab browser Anda — tidak ada langkah unggah. Setelah halaman termuat, Anda bisa offline dan alatnya tetap bekerja.',
        },
        {
          q: 'Apakah menaikkan treble menurunkan kualitas?',
          a: 'Tidak ada resampling atau perubahan nada. Penguatan besar juga mengangkat desis dan sibilan yang memang ada di berkas — jika terlalu kasar, turunkan slidernya. Limiter menjaga puncaknya agar hasil ekspor tidak terdistorsi kasar.',
        },
        {
          q: 'Bisakah memulihkan detail yang tak pernah terekam?',
          a: 'Tidak — shelf hanya memperkuat frekuensi tinggi yang sudah ada di berkas. Audio yang dikompresi pada bitrate rendah kehilangan nada tinggi selamanya; tidak ada EQ yang mengembalikannya.',
        },
        {
          q: 'Apa bedanya dengan penguat bass?',
          a: 'Keduanya berlawanan di spektrum: penguat bass mengangkat frekuensi rendah di bawah 150 Hz, penguat treble mengangkat nada tinggi di atas 3 kHz. Terdengar kusam? Treble. Terdengar tipis? Bass.',
        },
        {
          q: 'Berapa banyak treble yang perlu ditambah?',
          a: '+3–6 dB membuka sebagian besar rekaman kusam. Di atas +9 dB, bunyi sibilan (s, sy, t) bisa menusuk — dengarkan sekali dengan headphone sebelum mengekspor.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Editornya dirancang untuk sentuhan — seret untuk memilih, atur slider, ekspor. Bekerja di Chrome, Edge, Firefox, dan Safari terbaru, di desktop maupun ponsel.',
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
    },
    'equalizer': {
      cardLine: 'Bentuk lows, mids, dan highs dengan EQ tiga tombol ±15 dB yang lugas.',
      name: 'Equalizer audio',
      shortName: 'Equalizer',
      title: 'Equalizer audio — EQ 3 band online gratis',
      description:
        'Bentuk nada rendah, tengah, dan tinggi dengan EQ 3 band asli (shelf–puncak–shelf) di browser. ±15 dB per band, ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Equalizer audio online gratis — Atur bass, mid, dan treble',
      heroAlt: 'Bentuk warna suara sebuah lagu atau rekaman suara',
      subtitle: 'Shelf rendah, tengah, dan tinggi dengan ±15 dB per band — EQ tiga knob yang jujur.',
      intro:
        'Tiga knob mencakup hampir semua fungsi EQ: nada rendah di bawah 150 Hz, nada tengah di sekitar 1 kHz tempat suara bicara hidup, dan nada tinggi di atas 3 kHz. Equalizer ini memakai band filter asli — low shelf, peaking, high shelf — masing-masing ±15 dB, untuk menipukan dengung, menurunkan kekacauan, atau menambah keterbukaan. Muat berkas, bentuk suaranya, lalu ekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Fungsi tiap band',
      uses: [
        'Memangkas lumpur: −3 sampai −6 dB di nada tengah merapikan rekaman suara yang penuh.',
        'Menjinakkan dengung: turunkan band rendah pada rekaman yang dibuat dekat dinding.',
        'Menambah presence: naikkan nada tinggi untuk udara, nada rendah untuk bobot — sekaligus kalau mixnya butuh.',
      ],
      howTo: [
        {
          name: 'Muat audio Anda',
          text: 'MP3, WAV, M4A, OGG, atau FLAC. Pemrosesan tetap di perangkat Anda.',
        },
        {
          name: 'Bentuk tiga bandnya',
          text: 'Rendah di bawah 150 Hz, tengah di sekitar 1 kHz, tinggi di atas 3 kHz — masing-masing ±15 dB. Pemangkasan kecil mengalahkan penguatan besar.',
        },
        {
          name: 'Bandingkan dan ekspor',
          text: 'Kembalikan satu band ke 0 dB untuk membandingkan dengan aslinya, lalu ekspor sebagai MP3 atau WAV lossless.',
        },
      ],
      faqs: [
        {
          q: 'Apakah audio saya diunggah?',
          a: 'Tidak. Band-band ini adalah filter Web Audio API (low shelf, peaking, high shelf) di dalam tab browser Anda — tidak ada langkah unggah. Setelah halaman termuat, Anda bisa offline dan alatnya tetap bekerja.',
        },
        {
          q: 'Mana yang lebih baik: menaikkan atau memangkas?',
          a: 'Memangkas. Penguatan besar mendorong sinyal ke arah limiter dan bisa melembutkan puncak; pemangkasan −4 dB di band berlumpur sering lebih efektif daripada penguatan +6 dB di mana pun.',
        },
        {
          q: 'Apa bedanya dengan penguat bass dan treble?',
          a: 'Para penguat adalah shelf satu tujuan dengan rentang naik saja. Equalizer memberi Anda ketiga band sekaligus dengan pangkas dan naik dalam satu tempat — pakai penguat kalau Anda tahu persis ujung mana yang dibutuhkan.',
        },
        {
          q: 'Berapa frekuensi tepat tiap band?',
          a: 'Low shelf di 150 Hz, peaking di 1 kHz (lebar satuan), high shelf di 3 kHz — tata letak tiga band standar. Band di 0 dB dilewati, jadi band yang tidak disentuh tidak pernah mewarnai suara.',
        },
        {
          q: 'Kenapa suara jadi aneh saat saya pangkas nada tengah?',
          a: 'Kejelasan ucapan hidup di sekitar 1 kHz. Pangkas band tengah dengan lembut (−3 sampai −6 dB) dan dengarkan kalimat yang Anda hafal — pemangkasan tengah yang dalam membuat suara terdengar jauh atau berongga.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Editornya dirancang untuk sentuhan — seret untuk memilih, atur slider, ekspor. Bekerja di Chrome, Edge, Firefox, dan Safari terbaru, di desktop maupun ponsel.',
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
    },
    'low-pass-filter': {
      cardLine: 'Simpan hanya kehangatan di bawah cutoff — pas untuk tekstur lo-fi dan mute.',
      name: 'Filter low-pass',
      shortName: 'Low-pass',
      title: 'Filter low-pass — Hilangkan noise nada tinggi',
      description:
        'Potong desis, kekasaran, dan noise frekuensi tinggi dengan low-pass filter asli, cutoff 300 Hz–20 kHz, di browser. Ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Filter low-pass online gratis — Potong frekuensi tinggi di audio',
      heroAlt: 'Lunakkan tinggi yang tajam di sebuah rekaman',
      subtitle: 'Geser cutoff dari 20 kHz turun ke 300 Hz dan simpan hanya frekuensi yang Anda mau.',
      intro:
        'Filter low-pass menyimpan frekuensi rendah dan meredam semuanya di atas cutoff — cara jujur menghilangkan desis, sibilan tajam, cicitan, dan tepi digital yang kasar. Berbeda dari penghapus noise, ia tidak pernah menebak mana noise: semua di atas cutoff Anda hilang begitu saja. Muat berkas, geser cutoff ke bawah sampai gangguannya lenyap, lalu ekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Kapan perlu low-pass',
      uses: [
        'Menghilangkan desis konstan dan dengung AC dari rekaman suara.',
        'Melembutkan simbal yang kasar atau sibilan dalam mix yang masih mentah.',
        'Menempatkan satu sample di belakang yang lain dengan meredam puncaknya.',
      ],
      howTo: [
        {
          name: 'Muat audio Anda',
          text: 'MP3, WAV, M4A, OGG, atau FLAC. Pemrosesan tetap di perangkat Anda.',
        },
        {
          name: 'Turunkan cutoff',
          text: 'Geser dari 20 kHz ke bawah sampai noise lenyap — 8–12 kHz adalah titik istirahat umum untuk suara.',
        },
        {
          name: 'Dengar dan ekspor',
          text: 'Pastikan suara masih terdengar alami, lalu ekspor sebagai MP3 atau WAV lossless.',
        },
      ],
      faqs: [
        {
          q: 'Apakah audio saya diunggah?',
          a: 'Tidak. Filternya adalah biquad low-pass Web Audio API di dalam tab browser Anda — tidak ada langkah unggah. Setelah halaman termuat, Anda bisa offline dan alatnya tetap bekerja.',
        },
        {
          q: 'Apakah low-pass filter sama dengan penghapusan noise?',
          a: 'Bukan — dan justru itu kekuatannya. Penghapus noise memisahkan noise dari sinyal secara cerdas; low-pass memotong buta semua yang di atas cutoff. Untuk desis konstan dengan pita lebar, ini lebih andal daripada algoritma apa pun.',
        },
        {
          q: 'Kenapa suara terdengar tertutup saat cutoff rendah?',
          a: 'Kejelasan konsonan hidup antara 3 dan 8 kHz. Di bawah sekitar 5 kHz ucapan mulai terdengar tertutup; di bawah 2 kHz terdengar seperti telepon. Untuk suara, coba 8–12 kHz dulu.',
        },
        {
          q: 'Apa bedanya dengan filter high-pass?',
          a: 'Arah yang berlawanan: high-pass menghilangkan rumble, dengung, dan dengung rendah di bawah cutoff; low-pass menghilangkan desis dan kekasaran di atasnya. Memakai keduanya menyisakan hanya pita pilihan Anda.',
        },
        {
          q: 'Cutoff berapa untuk musik?',
          a: 'Untuk efek lo-fi ringan coba 4–8 kHz. Untuk membersihkan simbal tajam, 12–16 kHz biasanya cukup. Di bawah 3 kHz musik terdengar jelas tertutup — percayakan pada telinga, bukan angka.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Editornya dirancang untuk sentuhan — seret untuk memilih, geser cutoff, ekspor. Bekerja di Chrome, Edge, Firefox, dan Safari terbaru, di desktop maupun ponsel.',
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
    },
    'high-pass-filter': {
      cardLine: 'Buang gemuruh dan dengung di bawah cutoff agar rekaman suara lebih bersih.',
      name: 'Filter high-pass',
      shortName: 'High-pass',
      title: 'Filter high-pass — Hilangkan rumble online gratis',
      description:
        'Potong rumble, dengung, dan boom frekuensi rendah dengan high-pass filter asli, cutoff 20 Hz–5 kHz, di browser. Ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Filter high-pass online gratis — Hilangkan gemuruh dari rekaman',
      heroAlt: 'Potong angin dan dengung rendah dari rekaman suara',
      subtitle: 'Geser cutoff dari 20 Hz naik ke 5 kHz dan buang semua yang ada di bawahnya.',
      intro:
        'Rumble, lalu lintas, suara genggaman, benturan meja — frekuensi rendah yang tak diinginkan sudah menyatu dalam sebagian besar rekaman nyata. Filter high-pass menyimpan semua di atas cutoff Anda dan meredam semuanya di bawahnya: perbaikan jujur yang tak pernah menebak. Muat berkas, geser cutoff ke atas sampai rumble lenyap dan suara tetap penuh, lalu ekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Kapan perlu high-pass',
      uses: [
        'Membersihkan rumble lalu lintas dan benturan meja dari rekaman podcast dan suara.',
        'Menghilangkan angin dan suara genggaman yang selamat dari rekaman luar ruangan berangin.',
        'Merapatkan mix dengan membersihkan lumpur sub-bass dari semua trek non-bass.',
      ],
      howTo: [
        {
          name: 'Muat audio Anda',
          text: 'MP3, WAV, M4A, OGG, atau FLAC. Pemrosesan tetap di perangkat Anda.',
        },
        {
          name: 'Naikkan cutoff',
          text: 'Geser naik dari 20 Hz sampai rumble hilang — 80–120 Hz cocok untuk sebagian besar suara.',
        },
        {
          name: 'Dengar dan ekspor',
          text: 'Pastikan suara tidak terdengar tipis, lalu ekspor sebagai MP3 atau WAV lossless.',
        },
      ],
      faqs: [
        {
          q: 'Apakah audio saya diunggah?',
          a: 'Tidak. Filternya adalah biquad high-pass Web Audio API di dalam tab browser Anda — tidak ada langkah unggah. Setelah halaman termuat, Anda bisa offline dan alatnya tetap bekerja.',
        },
        {
          q: 'Bisakah menghilangkan dengung dari kabel yang buruk?',
          a: 'Dengung listrik berada di 50 atau 60 Hz, dengan harmonik di atasnya. High-pass di 80–120 Hz menghilangkan fundamental dan sebagian besar dengungnya — untuk harmonik membandel, pasangkan dengan filter low-pass untuk mempersempit pita.',
        },
        {
          q: 'Setinggi apa cutoff sebelum suara terdengar tipis?',
          a: 'Suara pria mempertahankan tubuhnya hingga sekitar 100 Hz, suara wanita hingga sekitar 150–200 Hz. Lewati 300 Hz, ucapan mulai terdengar seperti telepon — bisa jadi gaya, tapi dengarkan dulu.',
        },
        {
          q: 'Apa bedanya dengan filter low-pass?',
          a: 'Arah yang berlawanan: high-pass menghilangkan rumble frekuensi rendah di bawah cutoff; low-pass menghilangkan desis dan kekasaran di atasnya. Rangkaikan keduanya dan hanya pita pilihan Anda yang tersisa.',
        },
        {
          q: 'Apakah memfilter menurunkan kualitas berkas?',
          a: 'Tidak ada resampling atau perubahan nada — cutoff hanya menentukan frekuensi mana yang bertahan. Ekspor mengodekan ulang satu kali, seperti biasa: MP3 128–320 kbps atau WAV identik bit demi bit.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Editornya dirancang untuk sentuhan — seret untuk memilih, geser cutoff, ekspor. Bekerja di Chrome, Edge, Firefox, dan Safari terbaru, di desktop maupun ponsel.',
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
    },
    'fade-audio': {
      cardLine: 'Haluskan akhir lagu dan intro podcast dengan waktu fade yang presisi.',
      name: 'Fade audio',
      shortName: 'Fade',
      title: 'Fade in / fade out audio — online gratis',
      description:
        'Tambahkan fade in dan fade out yang halus ke lagu atau rekaman langsung di browser. Atur panjangnya hingga 0,1 detik, ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Fade audio online gratis — Padamkan musik secara perlahan',
      heroAlt: 'Buat fade in pada sebuah lagu, lalu fade out',
      subtitle: 'Tepi yang halus dalam hitungan detik: atur kedua fade sampai 0,1 detik, dengar, lalu ekspor. Tidak ada yang meninggalkan perangkat Anda.',
      intro:
        'Fade in membiarkan lagu tumbuh dari hening; fade out menutupnya dengan lembut — di situlah bedanya potongan kasar dengan akhir yang rapi. Muat berkas, atur panjang tiap fade sampai 0,1 detik, dan dengar sebelum mengekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Kapan fade jadi solusi',
      uses: [
        'Menutup mixtape, set DJ, atau kompilasi dengan rapi, bukan memotong di tengah nada.',
        'Melembutkan awal podcast atau memo suara agar kata pertama tidak mengejutkan pendengar.',
        'Menghaluskan sambungan loop atau sample agar berulang tanpa bunyi klik.',
      ],
      howTo: [
        {
          name: 'Muat audio Anda',
          text: 'MP3, WAV, M4A, OGG, atau FLAC — semuanya bisa. Pemrosesan tetap di perangkat Anda.',
        },
        {
          name: 'Atur panjang fade',
          text: 'Buka "Sesuaikan" dan tetapkan fade in serta fade out — 1–3 detik alami untuk lagu, 0,2–0,5 untuk loop.',
        },
        {
          name: 'Dengar dan ekspor',
          text: 'Putar bagian awal dan akhir untuk mendengar fadenya, lalu ekspor sebagai MP3 atau WAV lossless.',
        },
      ],
      faqs: [
        {
          q: 'Apakah audio saya diunggah?',
          a: 'Tidak. Fade dirender dengan Web Audio API di dalam tab browser Anda — tidak ada langkah unggah. Setelah halaman termuat, Anda bisa offline dan alatnya tetap bekerja.',
        },
        {
          q: 'Apakah fade mengubah kualitas audio?',
          a: 'Tidak. Fade hanya membentuk volume sepanjang waktu — tanpa reverb, tanpa perubahan nada. Ekspor mengodekan ulang satu kali: MP3 128–320 kbps (bawaan 320) atau WAV yang bit-per-bit sama. Berkas asli Anda tidak diubah.',
        },
        {
          q: 'Bisakah crossfade antara dua lagu?',
          a: 'Tidak di sini — halaman ini memberi fade in dan out pada satu berkas. Mencampur akhir satu lagu ke awal lagu lain adalah crossfade, dan itu tugas penggabung audio.',
        },
        {
          q: 'Apa bedanya dengan volume booster?',
          a: 'Volume booster mengangkat seluruh berkas dengan faktor tetap; fade membentuk volume sepanjang waktu — pelan di tepi, tak tersentuh di tengah. Untuk akhiran pakai fade, untuk kenyaringan keseluruhan pakai booster.',
        },
        {
          q: 'Berapa panjang fade out yang pas?',
          a: 'Untuk lagu, 1–3 detik biasanya terdengar alami; rekaman live sanggup 4–5. Untuk loop dan nada dering, jaga 0,2–0,5 detik agar attack tetap ada. Tidak ada jawaban tunggal — dengar dan percayakan pada telinga Anda.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Editornya dirancang untuk sentuhan — seret untuk memilih, atur slider, ekspor. Bekerja di Chrome, Edge, Firefox, dan Safari terbaru, di desktop maupun ponsel.',
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
    },
    'audio-trimmer': {
      cardLine: 'Tarik pegangan untuk menyimpan tepat bagian yang kamu butuhkan — podcast, memo suara, trek apa pun.',
      name: 'Potong Audio',
      shortName: 'Potong Audio',
      title: 'Potong Audio Online Gratis — Pangkas Musik & MP3',
      description:
        'Pangkas musik, memo suara, dan podcast di browser. Pilih, dengarkan, simpan dalam hitungan detik — gratis, tanpa mendaftar, tanpa unggah.',
      h1: 'Potong audio online gratis — Pangkas file audio',
      heroAlt: 'Potong MP3 atau podcast sampai tersisa bagian yang Anda butuhkan',
      subtitle: 'Pangkas audio online — gratis, langsung di browser. Tidak ada yang diunggah.',
      intro:
        'Ambil persis bagian yang dibutuhkan dari lagu, memo suara, podcast, atau rekaman apa pun. Seret di gelombang audio untuk memilih, dengarkan kembali, lalu simpan — pemangkasan seluruhnya terjadi di perangkat Anda, jadi rekaman yang panjang pun tetap privat dan langsung bisa dikerjakan.',
      usesHeading: 'Potongan yang menyelesaikan edit',
      uses: [
        'Ambil jawaban podcast dan tinggalkan “ehm” di kedua sisinya.',
        'Angkat chorus atau loop dari lagu utuh, tanpa editor desktop.',
        'Pendekkan memo suara sebelum dikirim, supaya file hanya berisi intinya.',
      ],
      howTo: [
        {
          name: 'Jatuhkan file Anda',
          text: 'Seret file audio atau video ke area gelombang, atau klik untuk memilih. MP3, WAV, M4A, OGG, FLAC, dan format lain didukung.',
        },
        {
          name: 'Pilih yang ingin disimpan',
          text: 'Seret di gelombang audio untuk menandai bagian yang diinginkan. Seret ujung pilihan untuk menyesuaikan, atau ketik waktu mulai dan akhir yang persis.',
        },
        {
          name: 'Dengarkan dan simpan',
          text: 'Tekan putar untuk mendengar hanya pilihan Anda, lalu klik Ekspor untuk mengunduh file yang sudah dipangkas sebagai MP3 atau WAV.',
        },
      ],
      faqs: [
        {
          q: 'Apakah pemangkas audio ini benar-benar gratis?',
          a: 'Ya. Setiap pemangkasan dan ekspor gratis, tanpa mendaftar dan tanpa watermark. Alat ini berjalan sepenuhnya di browser Anda, jadi tidak ada biaya server yang dibebankan kepada Anda.',
        },
        {
          q: 'Apakah audio Anda diunggah ke server?',
          a: 'Tidak. File didekode dan diproses oleh browser Anda sendiri dengan Web Audio API. Setelah halaman termuat, Anda bisa offline dan pemangkasnya tetap berjalan — tidak ada yang pernah dikirim ke mana pun.',
        },
        {
          q: 'Format apa yang bisa dipangkas?',
          a: 'Browser Anda dapat mendekode MP3, WAV, M4A/AAC, OGG, FLAC, dan audio WebM. Hasilnya bisa disimpan sebagai MP3 (128–320 kbps) atau WAV lossless.',
        },
        {
          q: 'Apakah memangkas menurunkan kualitas audio?',
          a: 'Menyimpan sebagai WAV menjaga bagian yang Anda pertahankan tetap utuh bit demi bit — tanpa kompresi ulang. Menyimpan sebagai MP3 mengodekan ulang satu kali; pada 192 kbps atau lebih, bedanya praktis tidak terdengar bagi sebagian besar pendengar.',
        },
        {
          q: 'Bisakah audio dipangkas di ponsel?',
          a: 'Ya. Gelombang audio mendukung sentuhan, dan tombol ekspor tetap mudah dijangkau di bagian bawah layar. Alat ini berjalan di Safari pada iPhone, serta di Chrome atau Firefox pada Android.',
        },
        {
          q: 'Berapa panjang file yang bisa diproses?',
          a: 'Rekaman hingga sekitar satu jam berjalan nyaman di komputer modern. Batas praktisnya adalah memori perangkat Anda, bukan batas buatan.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'mp3-cutter': {
      cardLine: 'Potong lagu sampai reff, drop, atau klip apa pun tanpa menyandikan ulang.',
      name: 'Potong Lagu',
      shortName: 'Potong Lagu',
      title: 'Potong Lagu & MP3 Online Gratis',
      description:
        'Potong file MP3 online dalam beberapa klik: simpan bagian terbaik atau hapus intro. Gratis, tanpa mendaftar, file tidak meninggalkan perangkat.',
      h1: 'Potong MP3 online gratis',
      heroAlt: 'Potong MP3 online gratis',
      subtitle: 'Potong lagu dan file MP3 online — simpan bagian yang diinginkan, hapus sisanya.',
      intro:
        'Potong lagu sampai tersisa reff-nya, buang intro yang panjang, atau pisahkan bagian yang ingin ditonjolkan — langsung di browser. Pilih apakah bagian yang ditandai dipertahankan atau dihapus, dengarkan hasilnya, lalu simpan MP3 baru dalam hitungan detik.',
      usesHeading: 'Potongan yang biasa dibuat di MP3',
      uses: [
        'Hapus intro, iklan, atau sunyi yang panjang dari lagu atau episode.',
        'Simpan satu bagian dan buang sisanya, jangan hanya menutupinya dengan fade.',
        'Potong klipnya dulu jika langkah berikutnya adalah nada dering.',
      ],
      howTo: [
        {
          name: 'Tambahkan MP3 Anda',
          text: 'Jatuhkan MP3 ke halaman, atau klik untuk memilih file. Sebagian besar format audio dan video lain juga bisa.',
        },
        {
          name: 'Tandai bagian yang dipotong',
          text: 'Seret di gelombang audio untuk menandai suatu bagian. Beralih antara Pertahankan pilihan dan Hapus pilihan, sesuai bagian yang Anda inginkan.',
        },
        {
          name: 'Potong dan unduh',
          text: 'Dengarkan pratinjaunya, lalu ekspor hasil potongan sebagai MP3 atau WAV lossless. Pengunduhan dimulai otomatis.',
        },
      ],
      faqs: [
        {
          q: 'Bagaimana cara memotong hanya reff dari sebuah lagu?',
          a: 'Pilih reff di gelombang audio, pastikan modenya Pertahankan pilihan, dengarkan, lalu ekspor. Anda mendapat file audio baru yang hanya berisi bagian itu.',
        },
        {
          q: 'Bagaimana cara menghapus 30 detik pertama sebuah trek?',
          a: 'Pilih 30 detik pertama (waktu mulai dan akhir yang tepat tampil saat Anda menyeret, dan bisa diketik secara persis), atur mode ke Hapus pilihan, lalu ekspor.',
        },
        {
          q: 'Apakah kualitas MP3 tetap terjaga?',
          a: 'Memotong ke WAV menjaga audio tetap utuh bit demi bit. Mengekspor ke MP3 mengodekan ulang satu kali pada bitrate yang Anda pilih — 320 kbps praktis tidak bisa dibedakan oleh siapa pun.',
        },
        {
          q: 'Apakah Anda perlu menginstal sesuatu?',
          a: 'Tidak. Alat potong lagu ini adalah aplikasi web yang berjalan di dalam tab browser Anda. Tidak ada yang perlu diinstal, dan tidak ada akun yang perlu dibuat.',
        },
        {
          q: 'Ke mana file Anda pergi?',
          a: 'Tidak ke mana-mana. File dibaca dari disk oleh browser Anda dan dipotong di memori. Tidak ada unggahan, tidak ada salinan cloud, dan tidak ada yang disimpan.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file MP3, atau klik untuk memilih',
    },
    'mp3-editor': {
      cardLine: 'Sunting cepat dalam satu tab: potong, fade, balik, ubah tempo, dan normalisasi.',
      name: 'Editor MP3',
      shortName: 'Editor MP3',
      title: 'Editor MP3 — Potong, Fade, Putar Balik, dan Percepat Online',
      description:
        'Edit MP3 dan audio lain online: potong, pangkas, fade, volume, kecepatan, putar balik. Gratis dan privat — semuanya berjalan di browser.',
      h1: 'Editor MP3 online gratis — Ubah panjang sebuah MP3',
      heroAlt: 'Potong, fade, putar balik, dan ubah kecepatan MP3',
      subtitle: 'Potong, fade, putar balik, dan percepat audio — semua dalam satu tab browser.',
      intro:
        'Editor audio yang ringkas untuk pekerjaan cepat: potong bagian, beri fade in dan fade out, naikkan atau turunkan volume, percepat atau perlambat trek, dan putar balik. Setiap suntingan diterapkan di perangkat Anda saat diekspor — file asli di disk selalu tetap utuh.',
      usesHeading: 'Edit yang tetap di satu tab',
      uses: [
        'Potong file, lalu fade tepi yang baru supaya potongannya tidak klik.',
        'Percepat atau balik satu bagian tanpa mengekspor antar alat.',
        'Naikkan MP3 yang pelan di proses yang sama, dengan volume atau normalisasi.',
      ],
      howTo: [
        {
          name: 'Buka file Anda',
          text: 'Jatuhkan MP3, WAV, M4A, atau file audio lain ke editor. File langsung didekode di perangkat Anda.',
        },
        {
          name: 'Sunting',
          text: 'Pilih rentang untuk dipertahankan atau dihapus, lalu buka Sesuaikan untuk menambah fade, mengubah volume, mengatur kecepatan dari 0.5× hingga 2×, atau memutar balik trek.',
        },
        {
          name: 'Ekspor hasilnya',
          text: 'Simpan suntingan sebagai MP3 hingga 320 kbps, atau sebagai WAV lossless. Suntingan di-render di browser Anda sebelum diunduh.',
        },
      ],
      faqs: [
        {
          q: 'Apa yang bisa dilakukan editor MP3 ini?',
          a: 'Alat ini mencakup suntingan cepat yang paling sering dibutuhkan: memangkas dan memotong, fade in dan fade out, pengaturan volume, perubahan kecepatan dari 0.5× hingga 2×, serta putar balik. Untuk rekaman multi-trek atau produksi yang berat, perangkat seperti Audacity tetap lebih tepat — yang ini untuk suntingan cepat, privat, di dalam browser.',
        },
        {
          q: 'Apakah suntingan merusak file asli?',
          a: 'Tidak. File asli tetap persis seperti adanya di disk. Semua suntingan disimpan sebagai pengaturan di editor, dan baru di-render menjadi file baru saat Anda mengekspor.',
        },
        {
          q: 'Bagaimana perubahan kecepatan memengaruhi nada?',
          a: 'Kecepatan dan nada bergerak bersama, seperti piringan yang diputar lebih cepat atau lebih lambat: pada 2× audio berbunyi sekitar satu oktaf lebih tinggi, pada 0.5× sekitar satu oktaf lebih rendah. Gunakan langkah kecil untuk perubahan yang halus. Jika tempo perlu diubah tanpa mengubah nada asli, ekspor dulu, lalu jalankan file itu di alat time-stretch khusus.',
        },
        {
          q: 'Bisakah sebuah perubahan dibatalkan?',
          a: 'Ya. Tekan Ctrl+Z (Cmd+Z di Mac) untuk mundur melalui suntingan terbaru, atau klik Mulai dari awal untuk memuat kembali keadaan file asli.',
        },
        {
          q: 'Apakah aman untuk rekaman yang bersifat rahasia?',
          a: 'Ya. Audio didekode dan di-render secara lokal dengan Web Audio API — tidak pernah dikirim lewat jaringan, sehingga cocok untuk wawancara dan materi rahasia lainnya.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'ringtone-maker': {
      cardLine: 'Ubah 30 detik paling menarik dari sebuah lagu jadi nada dering iPhone atau Android.',
      name: 'Nada Dering',
      shortName: 'Nada Dering',
      title: 'Nada Dering — Buat Nada Dering dari Lagu Apa Pun',
      description:
        'Jadikan lagu apa pun nada dering di browser: pilih 40 detik terbaik, tambah fade, ekspor M4R atau MP3 — gratis, tanpa unggah.',
      h1: 'Nada dering online gratis — Buat nada dering iPhone dari sebuah lagu',
      heroAlt: 'Simpan hingga 40 detik lagu sebagai M4R atau MP3',
      subtitle: 'Pilih bagian terbaik dari lagu apa pun dan simpan sebagai nada dering — kurang dari semenit.',
      intro:
        'Pilih hook, drop, atau intro dari lagu favorit Anda, lalu jadikan nada dering. Alat ini menahan pilihan pada panjang nada dering klasik, yaitu 40 detik, menambahkan fade jika Anda menginginkannya, dan mengekspor langsung untuk ponsel — M4R untuk iPhone, MP3 untuk ponsel lain.',
      usesHeading: 'Nada dering yang benar-benar dipasang',
      uses: [
        'Ambil hook sebuah lagu dan berhenti di dalam batas 40 detik.',
        'Fade bagian akhir supaya nada tidak terputus di tengah frasa.',
        'Ekspor M4R untuk iPhone, atau MP3 jika Anda hanya butuh klipnya.',
      ],
      howTo: [
        {
          name: 'Tambahkan lagu',
          text: 'Jatuhkan MP3, M4A, WAV, atau file audio lain ke halaman. File tidak pernah meninggalkan perangkat Anda.',
        },
        {
          name: 'Pilih momennya',
          text: 'Seret di gelombang audio untuk memilih hingga 40 detik — panjang yang pas untuk nada dering. Pilihan dibatasi otomatis, jadi Anda tidak perlu menebak.',
        },
        {
          name: 'Ekspor dan pindahkan',
          text: 'Tambahkan fade bila mau, lalu ekspor. Pilih M4R untuk iPhone (Chrome, Edge, atau Safari) atau MP3 untuk Android dan ponsel lain.',
        },
      ],
      faqs: [
        {
          q: 'Berapa panjang nada dering yang pas?',
          a: 'Sebagian besar ponsel berdering 20–40 detik sebelum pesan suara menyala, dan dering yang lebih pendek lebih cepat sampai pada intinya. Alat ini membatasi pilihan Anda pada 40 detik, yaitu panjang nada dering yang klasik.',
        },
        {
          q: 'Bagaimana cara memakainya di iPhone?',
          a: 'Pilih M4R di menu format sebelum mengekspor — Chrome, Edge, dan Safari 17+ mengodekannya langsung di perangkat Anda, dan file yang terunduh tersinkron ke iPhone lewat Finder (atau iTunes di Windows). Di browser yang tidak bisa mengodekan AAC, seperti Firefox, ekspor sebagai MP3 lalu konversi dengan GarageBand: impor file tersebut, kemudian bagikan sebagai nada dering.',
        },
        {
          q: 'Bagaimana cara mengaturnya di Android?',
          a: 'Pindahkan MP3 yang diekspor ke ponsel, lalu buka Setelan → Suara → Nada dering ponsel dan pilih file itu, atau gunakan aplikasi File untuk mengaturnya langsung. Tidak perlu konversi.',
        },
        {
          q: 'Apakah nada dering akan putus saat berulang?',
          a: 'Tambahkan fade out yang pendek di panel Sesuaikan — perulangan kembali ke awal terdengar wajar, tidak terputus di tengah nada.',
        },
        {
          q: 'Apakah ada watermark atau batas?',
          a: 'Tanpa watermark, tanpa mendaftar, tanpa batas harian. Nada dering di-render di perangkat Anda sendiri dan diunduh langsung dari browser.',
        },
      ],
      dropHint: 'Jatuhkan lagu, atau klik untuk memilih',
    },
    'audio-joiner': {
      cardLine: 'Jahit memo suara, lagu, atau episode podcast menjadi satu file utuh.',
      name: 'Gabung Audio',
      shortName: 'Gabung Audio',
      title: 'Gabung lagu MP3 online gratis',
      description:
        'Gabungkan lagu dan file audio jadi satu trek, urutan apa pun, langsung di browser. Fade opsional — gratis, privat, tanpa unggah.',
      h1: 'Gabung lagu online gratis — Satukan beberapa MP3 jadi satu',
      heroAlt: 'Susun lagu dan catatan suara berurutan',
      subtitle: 'Gabungkan lagu dan file audio menjadi satu trek — urutan apa pun, dalam hitungan detik.',
      intro:
        'Gabungkan beberapa lagu, episode podcast, atau rekaman suara menjadi satu file. Tambahkan trek sebanyak yang Anda mau, atur urutannya, dan pudarkan awal serta akhir bila perlu. Penggabungan terjadi di perangkat Anda — koleksi yang besar pun langsung tergabung dan tetap privat.',
      usesHeading: 'Trek yang layak digabung',
      uses: [
        'Letakkan memo suara di depan sebuah lagu, dalam urutan yang Anda pilih.',
        'Gabungkan rekaman per bab menjadi satu file, untuk pemutar tanpa playlist.',
        'Crossfade di sambungan supaya klip yang berurutan tidak meletup.',
      ],
      howTo: [
        {
          name: 'Tambahkan trek',
          text: 'Jatuhkan dua file audio atau lebih ke halaman, atau klik untuk memilih beberapa sekaligus. Format yang berbeda tidak masalah — semuanya diselaraskan otomatis.',
        },
        {
          name: 'Atur urutannya',
          text: 'Susun ulang trek dengan tombol panah, atau hapus trek yang berubah pikiran. Total durasi ikut berubah saat Anda mengatur.',
        },
        {
          name: 'Gabung dan simpan',
          text: 'Tambahkan fade bila perlu, klik Gabung & ekspor, lalu unduh file yang sudah digabung sebagai MP3 atau WAV.',
        },
      ],
      faqs: [
        {
          q: 'Bisakah format audio yang berbeda digabung?',
          a: 'Ya. File didekode lalu disamakan ke sample rate yang sama lebih dulu, jadi MP3, WAV, dan M4A bisa digabung dalam satu kali proses. Format keluarannya Anda yang memilih.',
        },
        {
          q: 'Berapa banyak file yang bisa digabung?',
          a: 'Tidak ada batas tetap — puluhan trek tetap berjalan baik. Batas praktisnya adalah memori perangkat Anda, karena semuanya diproses secara lokal.',
        },
        {
          q: 'Bisakah urutan lagu diubah?',
          a: 'Ya. Gunakan panah atas dan bawah di samping setiap trek untuk mengubah urutan sebelum digabung. Durasi yang ditampilkan langsung berubah.',
        },
        {
          q: 'Apakah trek saling menyambung dengan crossfade?',
          a: 'Ya. Geser pengatur crossfade agar akhir setiap trek bertumpuk dengan awal trek berikutnya — penggabungan menerapkan fade yang halus di antara trek yang bersebelahan. Atur ke nol untuk potongan langsung tanpa jeda di antara trek.',
        },
        {
          q: 'Apakah kualitas file yang digabung baik?',
          a: 'Menggabungkan ke WAV bersifat lossless — audio tidak dikompres ulang. Ekspor MP3 mengodekan ulang satu kali hingga 320 kbps, dan bedanya praktis tidak terdengar bagi hampir semua pendengar.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Tambah file, lalu naikkan atau turunkan dengan tombol. Tombolnya ditekan dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. Beberapa file panjang memakai lebih banyak memori, jadi tumpukan yang panjang lebih stabil di komputer.',
        },
      ],
      dropHint: 'Jatuhkan dua file audio atau lebih, atau klik untuk memilih',
    },
    'wav-to-mp3': {
      cardLine: 'Perkecil rekaman WAV besar jadi MP3 mudah dibagikan pada bitrate pilihanmu.',
      name: 'Konversi WAV ke MP3',
      shortName: 'WAV ke MP3',
      title: 'Konversi WAV ke MP3 — Online dan Gratis',
      description:
        'Konversi WAV ke MP3 di browser — 128, 192, atau 320 kbps. Gratis, tanpa mendaftar: audio dikonversi secara lokal dan tidak pernah diunggah ke server.',
      h1: 'WAV ke MP3 online gratis — Ubah WAV menjadi MP3',
      heroAlt: 'Ubah file WAV menjadi MP3 320 kbps',
      subtitle: 'Konversi file WAV ke MP3 dalam hitungan detik — langsung di browser, tidak ada yang diunggah.',
      intro:
        'Ubah rekaman WAV yang berat menjadi MP3 yang ringkas, tanpa menginstal apa pun dan tanpa mengirim audio ke server. Jatuhkan file, pilih bitrate — 320 kbps untuk musik, 128 kbps untuk suara — dan konversi terjadi di perangkat Anda sendiri, biasanya dalam beberapa detik.',
      usesHeading: 'WAV yang layak dikonversi',
      uses: [
        'Kecilkan rekaman studio atau lapangan sampai cukup kecil untuk dikirim.',
        'Ubah ekspor lossless menjadi MP3 192 atau 320 kbps untuk didengar sehari-hari.',
        'Konversi dulu, baru potong. WAV terlalu besar untuk diseret dua kali.',
      ],
      howTo: [
        {
          name: 'Jatuhkan WAV Anda',
          text: 'Seret file .wav ke halaman, atau klik untuk memilih. Format audio lain (M4A, FLAC, OGG) dikonversi dengan cara yang sama.',
        },
        {
          name: 'Pilih bitrate',
          text: '320 kbps hampir tidak bisa dibedakan dari aslinya bagi hampir semua orang; 192 kbps adalah titik tengah yang pas; 128 kbps membuat rekaman suara tetap kecil.',
        },
        {
          name: 'Konversi dan unduh',
          text: 'Klik Konversi ke MP3. Encoder berjalan di browser Anda, dan MP3 langsung terunduh ke perangkat.',
        },
      ],
      faqs: [
        {
          q: 'Apakah konversi WAV ke MP3 mengurangi kualitas?',
          a: 'MP3 bersifat lossy, jadi sebagian informasi dibuang — tetapi pada 320 kbps hampir tidak ada yang bisa membedakannya dari WAV dalam uji buta. Jika tidak boleh ada kehilangan sama sekali, simpan WAV-nya; konverter ini ada untuk menghemat ruang dan agar file bisa diputar di mana saja.',
        },
        {
          q: 'Bitrate mana yang sebaiknya dipilih?',
          a: 'Pakai 320 kbps untuk musik yang ingin disimpan, 192 kbps untuk didengar sehari-hari dan dibagikan, serta 128 kbps untuk memo suara, podcast, dan rekaman kuliah — ucapan membutuhkan jauh lebih sedikit data daripada musik.',
        },
        {
          q: 'Seberapa lebih kecil ukuran MP3-nya?',
          a: 'Kira-kira sepersepuluh ukurannya: WAV 50 MB menjadi sekitar 4–5 MB pada 192 kbps, dan sekitar 11 MB pada 320 kbps. Angka pastinya bergantung pada durasi dan sample rate.',
        },
        {
          q: 'Apakah tag WAV dan gambar sampul ikut tersimpan?',
          a: 'Belum — MP3 ditulis tanpa metadata, jadi judul lagu, artis, dan gambar sampul tidak ikut. Tag bisa ditambahkan kembali setelahnya dengan editor tag apa pun.',
        },
        {
          q: 'Apakah file WAV diunggah ke suatu tempat?',
          a: 'Tidak. File didekode di browser Anda, dikodekan ke MP3 oleh pustaka yang ikut terpasang bersama situs ini, lalu disimpan kembali ke disk. Audionya sendiri tidak pernah meninggalkan perangkat Anda.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Pilih file, lalu konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file WAV, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'flac-to-mp3': {
      cardLine: 'Konversi file FLAC lossless ke MP3 untuk pemutar dan aplikasi yang tak mendukung FLAC.',
      name: 'Konversi FLAC ke MP3',
      shortName: 'FLAC ke MP3',
      title: 'Ubah FLAC ke MP3 Online Gratis — 320 kbps',
      description:
        'Konversi FLAC ke MP3 di browser — 128, 192, atau 320 kbps. Gratis, tanpa mendaftar: musik dikonversi secara lokal dan tidak pernah diunggah.',
      h1: 'FLAC ke MP3 online gratis — Ubah FLAC menjadi MP3',
      heroAlt: 'Ubah file FLAC menjadi MP3 320 kbps',
      subtitle: 'Ubah file FLAC jadi MP3 dalam hitungan detik — langsung di browser, tanpa unggah.',
      intro:
        'FLAC terdengar sempurna dan menghabiskan setengah hard disk untuk membuktikannya. Ubah pustaka lossless kamu jadi MP3 ringkas yang bisa diputar di head unit mobil, speaker Bluetooth, dan perangkat lama — jatuhkan filenya, pilih bitrate, dan konversi berjalan di perangkatmu sendiri. Satu lagu FLAC 25 MB jadi MP3 12 MB di 320 kbps dalam beberapa detik.',
      usesHeading: 'FLAC yang layak dikonversi',
      uses: [
        'Agar pustaka lossless bisa diputar di mobil dan perangkat lama.',
        'Mengecilkan album sebelum perjalanan tanpa Wi-Fi atau sebelum membagikan folder.',
        'Konversi dulu, lalu potong lagu yang benar-benar kamu putar ulang.',
      ],
      howTo: [
        {
          name: 'Jatuhkan FLAC kamu',
          text: 'Seret file .flac ke halaman, atau klik untuk memilih. Format lossless lain dikonversi dengan cara yang sama.',
        },
        {
          name: 'Pilih bitrate',
          text: '320 kbps tidak bisa dibedakan hampir oleh siapa pun; 192 kbps adalah keseimbangan sehari-hari; 128 kbps menjaga audiobook dan podcast tetap kecil.',
        },
        {
          name: 'Konversi dan unduh',
          text: 'Klik Konversi ke MP3. Encoder berjalan di browser kamu dan MP3 langsung terunduh ke perangkat.',
        },
      ],
      faqs: [
        {
          q: 'Apakah konversi FLAC ke MP3 menurunkan kualitas?',
          a: 'MP3 itu lossy, jadi sebagian informasi dibuang — tapi di 320 kbps hampir tidak ada yang bisa membedakannya dari FLAC dalam tes buta. Simpan FLAC sebagai arsip dan anggap MP3 sebagai versi portabelnya.',
        },
        {
          q: 'Bitrate mana yang sebaiknya dipilih?',
          a: '320 kbps untuk musik yang kamu simpan, 192 kbps untuk dengar sehari-hari dan berbagi, 128 kbps untuk audiobook, podcast, dan rekaman kuliah — suara butuh jauh lebih sedikit dari musik.',
        },
        {
          q: 'Berapa lebih kecil ukuran MP3-nya?',
          a: 'Lagu lima menit biasanya turun dari sekitar 25 MB (FLAC) ke kira-kira 12 MB di 320 kbps, 7 MB di 192, dan 5 MB di 128. Angka pastinya tergantung durasi dan sample rate.',
        },
        {
          q: 'Apakah tag dan cover FLAC ikut terbawa?',
          a: 'Belum — MP3 ditulis tanpa metadata, jadi judul, artis, dan cover art tidak ikut. Kamu bisa menambahkannya lagi dengan editor tag apa pun.',
        },
        {
          q: 'Apakah FLAC saya diunggah ke mana pun?',
          a: 'Tidak. File didekode di browser kamu dan dienkode ke MP3 oleh pustaka yang ikut terpasang bersama situs ini. Audionya sendiri tidak pernah meninggalkan perangkatmu.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Pilih file, lalu konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file FLAC, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'mp3-to-wav': {
      cardLine: 'Buka kompresi MP3 ke WAV untuk mengedit, mentranskripsi, atau mendengar detail.',
      name: 'Konversi MP3 ke WAV',
      shortName: 'MP3 ke WAV',
      title: 'Ubah MP3 ke WAV Online Gratis',
      description:
        'Konversi MP3 ke WAV lossless di browser, untuk mengedit, mengarsipkan, dan aplikasi yang minta PCM. Gratis, tanpa daftar, tanpa unggah.',
      h1: 'MP3 ke WAV online gratis — Ubah MP3 menjadi file WAV',
      heroAlt: 'Dekode MP3 menjadi WAV tanpa kompresi',
      subtitle: 'Dekode MP3 jadi audio PCM bersih dalam hitungan detik — langsung di browser, tanpa unggah.',
      intro:
        'Mengubah MP3 ke WAV tidak mengembalikan apa yang dibuang saat kompresi — tidak ada alat yang bisa. Yang didapat adalah audio hasil dekode sebagai PCM 16-bit yang bersih tanpa kehilangan baru: input yang tepat untuk editor audio, sampler, dan apa pun yang meminta WAV, sekaligus titik awal teraman kalau file masih akan diolah. Dekode berjalan di perangkatmu, biasanya dalam satu detik.',
      usesHeading: 'Alasan pindah ke WAV',
      uses: [
        'Menyerahkan MP3 ke editor, DAW, atau aplikasi yang hanya menerima WAV.',
        'Menghentikan kerugian turunan: edit di WAV, kompres balik ke MP3 sekali di akhir.',
        'Mengarsipkan salinan hasil dekode di samping aslinya sebelum diedit lagi.',
      ],
      howTo: [
        {
          name: 'Jatuhkan MP3 kamu',
          text: 'Seret file .mp3 ke halaman, atau klik untuk memilih. Format terkompresi lain didekode dengan cara yang sama.',
        },
        {
          name: 'Biarkan WAV terpilih',
          text: 'Format ekspor dikunci ke WAV lossless — PCM 16-bit pada sample rate asli file.',
        },
        {
          name: 'Konversi dan unduh',
          text: 'Klik Konversi ke WAV. Audio hasil dekode ditulis secara lokal dan unduhan langsung dimulai.',
        },
      ],
      faqs: [
        {
          q: 'Apakah mengubah MP3 ke WAV menaikkan kualitas?',
          a: 'Tidak — dan waspadai konverter yang mengklaim sebaliknya. Data yang dibuang encoder sudah hilang. WAV berisi persis apa yang dihasilkan dekode MP3, dan justru karena itulah ia format yang tepat untuk mengedit lagi: tidak menambah generasi lossy baru.',
        },
        {
          q: 'Lalu untuk apa dikonversi ke WAV?',
          a: 'Untuk mengedit dan mengarsipkan. WAV adalah format yang diharapkan editor audio, sampler, dan alat burn CD, dan master lossless menghindari penumpukan artefak setiap kali file diproses. Alur yang jujur: dekode ke WAV, edit, ekspor ke MP3 sekali di akhir.',
        },
        {
          q: 'Bitrate MP3 berapa pun bisa?',
          a: 'Semua bisa — dekode itu presisi untuk MP3 valid apa pun, dari 64 sampai 320 kbps. WAV akan berisi apa yang benar-benar ada di MP3 itu, pada sample rate aslinya.',
        },
        {
          q: 'Seberapa besar ukuran WAV-nya?',
          a: 'Kira-kira sepuluh kali MP3. Lagu tiga menit 44,1 kHz stereo jadi sekitar 30 MB sebagai PCM 16-bit — itu ukuran wajar audio tanpa kompresi, bukan kelambanan konverter.',
        },
        {
          q: 'Apakah MP3 saya diunggah ke mana pun?',
          a: 'Tidak. File didekode di browser kamu dan ditulis sebagai WAV secara lokal. Tidak ada yang meninggalkan perangkatmu.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Pilih file, lalu konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file MP3, atau klik untuk memilih',
      exportLabel: 'Konversi ke WAV',
    },
    'compress-audio': {
      cardLine: 'Kecilkan file audio besar ke ukuran atau bitrate target tanpa mengurangi kejelasan.',
      name: 'Kompresor Audio',
      shortName: 'Kompresor',
      title: 'Kompres Audio Online Gratis — Perkecil Ukuran File',
      description:
        'Perkecil file MP3, WAV, dan audio lain di browser — pilih bitrate lebih rendah, dengar, unduh. Gratis, tanpa unggah.',
      h1: 'Kompresor MP3 online gratis — Kecilkan ukuran file MP3',
      heroAlt: 'Encode ulang WAV atau MP3 yang besar dengan bitrate lebih rendah',
      subtitle: 'Turunkan bitrate, file tetap bisa diputar — perkecil audio sampai 90% di browser.',
      intro:
        'File audio besar karena bitrate-nya, dan cara jujur mengecilkan satu file adalah mengenkode ulang di bitrate lebih rendah: MP3 320 kbps jadi 128 kbps dengan sekitar 40% ukurannya, dan WAV yang berat jadi MP3 sepersepuluhnya. Pilih target, dengarkan pratinjaunya, lalu ekspor — pengodean berjalan di perangkatmu sendiri, jadi rekaman panjang pun selesai dalam hitungan detik.',
      usesHeading: 'File yang layak dikecilkan',
      uses: [
        'Memuat kuliah atau memo suara di bawah batas ukuran surel atau aplikasi chat.',
        'Mengubah hasil ekspor WAV jadi MP3 kecil untuk tautan review cepat.',
        'Menurunkan pustaka 320 kbps ke 128 kbps untuk ponsel yang streaming pakai data.',
      ],
      howTo: [
        {
          name: 'Jatuhkan file kamu',
          text: 'Tambahkan MP3, WAV, M4A, atau audio lain. Ia didekode di perangkatmu dan tidak pernah diunggah.',
        },
        {
          name: 'Pilih ukuran target',
          text: 'Bitrate lebih rendah, file lebih kecil: 192 kbps untuk musik sehari-hari, 128 kbps masih terdengar baik bagi kebanyakan orang, 64–96 kbps ideal untuk suara.',
        },
        {
          name: 'Dengar dan ekspor',
          text: 'Dengarkan pratinjau hasil kompresi, lalu simpan. Pastikan vokal dan simbal masih bersih di bitrate pilihanmu.',
        },
      ],
      faqs: [
        {
          q: 'Bagaimana kompresi audio di sini bekerja?',
          a: 'File didekode lalu dienkode ulang sebagai MP3 di bitrate pilihanmu. Ukuran sebanding dengan bitrate: satu menit stereo sekitar 2,4 MB di 320 kbps, 1 MB di 128, dan 0,5 MB di 64.',
        },
        {
          q: 'Bitrate mana yang menjaga kualitas?',
          a: '192 atau 320 kbps untuk musik yang kamu sayang; 128 kbps untuk dengar santai — kebanyakan orang tidak bisa membedakannya dari 320 dalam tes buta. Suara dan podcast tetap jernih sampai 64–96 kbps.',
        },
        {
          q: 'Bisakah kompresi menurunkan kualitas?',
          a: 'Bisa, dalam satu kasus: mengenkode ulang MP3 yang sudah terkompresi di bitrate jauh lebih rendah menumpuk generasi lossy kedua di atas yang pertama. Mengompres dari WAV atau FLAC lebih bersih — simpan aslinya, dan kamu bisa mencoba bitrate lain kapan saja.',
        },
        {
          q: 'Seberapa kecil bisa dikompres?',
          a: '64 kbps adalah batas praktisnya: sekitar 0,5 MB per menit. Suara tetap sangat jernih; musik mulai terdengar tumpul dan berdesis. Di bawah itu, codec khusus seperti Opus bekerja lebih baik daripada MP3.',
        },
        {
          q: 'Apakah file saya diunggah ke mana pun?',
          a: 'Tidak. Dekode dan enkode berjalan di dalam tab browser — kamu bisa memutus internet setelah halaman termuat dan kompresi tetap bekerja.',
        },
        {
          q: 'Apakah ini meratakan bagian keras dan pelan?',
          a: 'Tidak. Halaman ini hanya mengode ulang pada bitrate lebih rendah agar file lebih kecil. Untuk menurunkan puncak dan mengangkat kata yang pelan, gunakan kompresor level. Bitrate ekspor tetap pilihan Anda.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Pilih file, lalu konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Kompres',
    },
    'reverse-audio': {
      cardLine: 'Putar trek secara terbalik untuk efek, memeriksa mix, atau sekadar seru.',
      name: 'Putar Balik Audio',
      shortName: 'Putar Balik',
      title: 'Putar Balik Audio — Putar Lagu Terbalik Online Gratis',
      description:
        'Putar lagu atau rekaman secara terbalik di browser. Satu klik untuk membalik, dengarkan, simpan sebagai MP3 atau WAV — gratis, tanpa unggah.',
      h1: 'Putar balik audio online gratis — Putar lagu dari belakang',
      heroAlt: 'Balik catatan suara supaya dimulai dari akhir',
      subtitle: 'Putar lagu atau rekaman apa pun secara terbalik — satu klik, langsung di browser.',
      intro:
        'Balik trek apa pun agar diputar dari akhir ke awal: cari pesan tersembunyi dalam lagu, buat efek simbal terbalik untuk campuran musik, atau dengarkan seperti apa suara Anda saat diputar balik. Seluruh file dibalik di perangkat Anda, dan baru ditulis saat Anda mengekspor.',
      usesHeading: 'Alasan membalik sebuah file',
      uses: [
        'Dengarkan campuran atau kalimat yang tersembunyi dengan memutarnya mundur.',
        'Buat swell terbalik dari pukulan simbal atau vokal.',
        'Balik hanya bagian yang dipilih dan biarkan sisa file tetap.',
      ],
      howTo: [
        {
          name: 'Tambahkan audio',
          text: 'Jatuhkan MP3, WAV, M4A, atau file lain ke halaman — file tidak pernah meninggalkan perangkat Anda.',
        },
        {
          name: 'Balikkan',
          text: 'Klik tombol Putar balik, lalu tekan putar untuk mendengar trek secara terbalik. Klik sekali lagi untuk mengembalikannya.',
        },
        {
          name: 'Simpan hasilnya',
          text: 'Ekspor audio yang sudah dibalik sebagai MP3 atau WAV lossless. Pengunduhan dimulai otomatis.',
        },
      ],
      faqs: [
        {
          q: 'Mengapa lagu diputar secara terbalik?',
          a: 'Musisi memakai audio terbalik untuk efek kreatif — swell simbal yang terbalik, solo gitar mundur, tekstur ambient. Ini juga cara klasik untuk memeriksa backmasking, pesan yang sengaja disembunyikan saat trek diputar terbalik, dan jujur saja, mendengar suara Anda sendiri terbalik memang menyenangkan.',
        },
        {
          q: 'Apakah membalik audio mengubah kualitas?',
          a: 'Tidak. Mengekspor ke WAV hanya mengubah urutan sampel — audionya identik bit demi bit dengan aslinya, hanya terbalik. Ekspor MP3 mengodekan ulang satu kali pada bitrate yang Anda pilih.',
        },
        {
          q: 'Bisakah hanya sebagian lagu yang dibalik?',
          a: 'Ya. Pilih bagian yang diinginkan di gelombang audio, atur mode ke Pertahankan pilihan, lalu tekan Putar balik — hanya bagian itu yang diekspor, dalam keadaan terbalik.',
        },
        {
          q: 'Apakah ini berjalan di ponsel?',
          a: 'Ya. Tombol putar balik dan gelombang audio sama-sama mendukung sentuhan, dan hasil ekspor langsung terunduh di iOS maupun Android.',
        },
        {
          q: 'Apakah membalik audio benar-benar gratis dan privat?',
          a: 'Ya — tanpa mendaftar, tanpa watermark, tanpa batas. Pembalikan terjadi di browser Anda dengan Web Audio API, jadi file tidak pernah diunggah ke mana pun.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'change-audio-speed': {
      cardLine: 'Percepat kuliah ke 2× atau perlambat riff untuk dipelajari — nadanya tetap.',
      name: 'Ubah Kecepatan Audio',
      shortName: 'Ubah Kecepatan',
      title: 'Percepat lagu online — atau perlambat',
      description:
        'Percepat atau perlambat audio apa pun dari 0.5× hingga 2× di browser. Dengarkan langsung, ekspor MP3 atau WAV — gratis, privat, tidak ada yang diunggah.',
      h1: 'Ubah kecepatan audio online gratis — Percepat atau perlambat audio',
      heroAlt: 'Pelankan lagu untuk latihan, atau percepat sebuah kuliah',
      subtitle: 'Percepat atau perlambat audio apa pun dari 0.5× hingga 2× — langsung di browser.',
      intro:
        'Ubah kuliah 40 menit menjadi 20 menit yang lebih cepat, perlambat solo gitar hingga setengah kecepatan untuk latihan, atau sesuaikan trek agar muat di slot video yang lebih pendek. Geser pengatur kecepatan, dengarkan perubahannya langsung, lalu ekspor — audio diolah di perangkat Anda dan tidak pernah diunggah.',
      usesHeading: 'Kecepatan yang cocok dengan pekerjaannya',
      uses: [
        'Pelankan ucapan atau solo sampai setengahnya saat Anda perlu setiap suku kata atau nada.',
        'Lewati podcast atau kuliah pada 1,25× sampai 1,5× saat 1× terlalu lambat untuk diselesaikan.',
        'Nada naik dan turun bersama tempo. Untuk menggeser nada dan mempertahankan durasi, pakai pengubah nada.',
      ],
      howTo: [
        {
          name: 'Jatuhkan file Anda',
          text: 'Tambahkan MP3, WAV, M4A, atau file audio lain — file tetap di perangkat Anda sepanjang waktu.',
        },
        {
          name: 'Atur kecepatannya',
          text: 'Geser pengatur kecepatan antara 0.5× dan 2×. Pakai gelombang audio untuk memilih satu bagian saja jika yang ingin diubah hanya sebagian file.',
        },
        {
          name: 'Dengarkan dan ekspor',
          text: 'Putar hasilnya untuk memeriksa temponya, lalu simpan sebagai MP3 atau WAV. File 10 menit pada 2× selesai diekspor dalam sekitar satu detik.',
        },
      ],
      faqs: [
        {
          q: 'Apakah mengubah kecepatan juga mengubah nada?',
          a: 'Ya — kecepatan dan nada bergerak bersama, seperti piringan yang diputar lebih cepat atau lebih lambat: 2× terdengar sekitar satu oktaf lebih tinggi, 0.5× sekitar satu oktaf lebih rendah. Itulah efek klasiknya; mengubah tempo sambil mempertahankan nada asli membutuhkan algoritma time-stretch khusus, yang mungkin kami tambahkan nanti. Untuk mengubah nada tanpa mengubah durasi, gunakan pengubah nada.',
        },
        {
          q: 'Kecepatan apa saja yang bisa dipilih?',
          a: 'Apa saja dari 0.5× hingga 2×, dengan langkah 0.05. Setengah kecepatan adalah titik paling pas untuk mentranskrip ucapan yang cepat atau belajar solo; 1.25–1.5× nyaman untuk menyimak kuliah dan podcast dengan cepat.',
        },
        {
          q: 'Seberapa cepat ekspornya?',
          a: 'Perubahan kecepatan di-render secara offline oleh browser Anda pada kecepatan mesin — trek 10 menit membutuhkan satu atau dua detik, apa pun faktor yang Anda pilih.',
        },
        {
          q: 'Bisakah hanya sebagian trek yang dipercepat?',
          a: 'Ya. Pilih bagian di gelombang audio, atur mode ke Pertahankan pilihan, lalu tentukan kecepatannya — ekspor hanya berisi bagian itu, lebih cepat atau lebih lambat.',
        },
        {
          q: 'Apakah ada batas panjang file?',
          a: 'Tidak ada batas buatan. Batas praktisnya adalah memori perangkat Anda — kira-kira satu jam audio di komputer pada umumnya.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'increase-volume': {
      cardLine: 'Angkat memo suara yang pelan hingga 4× dengan limiter, tanpa clipping.',
      name: 'Perbesar Volume MP3',
      shortName: 'Perbesar Volume',
      title: 'Perbesar Volume MP3 — Buat Audio Lebih Keras, Gratis',
      description:
        'Perbesar audio yang pelan hingga 4× di browser. Limiter bawaan menjaga suara tetap bersih — gratis, dan tidak ada yang diunggah.',
      h1: 'Perbesar volume MP3 online gratis — Buat file MP3 lebih keras',
      heroAlt: 'Naikkan volume MP3 tanpa pecah',
      subtitle: 'Perbesar rekaman yang pelan hingga 4× — dengan limiter, jadi tidak ada yang clipping.',
      intro:
        'Perbaiki rekaman yang terlalu pelan: memo suara dari ponsel, kuliah yang direkam dari barisan belakang, soundtrack video yang tersimpan pada level rendah. Naikkan volume hingga 4× (12 dB), dan limiter bawaan menahan puncaknya, sehingga hasilnya lebih keras tanpa berubah menjadi distorsi.',
      usesHeading: 'Rekaman yang perlu diangkat',
      uses: [
        'Naikkan memo suara yang direkam terlalu jauh dari mikrofon.',
        'Perbesar kuliah yang direkam dari belakang ruangan, dan biarkan limiter menahan puncaknya.',
        'Buat MP3 yang pelan cukup keras untuk diletakkan di bawah video, tanpa memotong seluruh file.',
      ],
      howTo: [
        {
          name: 'Tambahkan audio',
          text: 'Jatuhkan MP3, WAV, M4A, atau file lain yang pelan ke halaman — file hanya diproses di perangkat Anda.',
        },
        {
          name: 'Perbesar volumenya',
          text: 'Geser pengatur volume hingga 400%. Dengarkan sambil menggeser; limiter otomatis menahan puncak yang paling keras.',
        },
        {
          name: 'Ekspor file yang lebih keras',
          text: 'Simpan sebagai MP3 atau WAV. Jika masih terdengar tertekan, turunkan 10–20% — keras yang bersih lebih baik daripada keras yang maksimal.',
        },
      ],
      faqs: [
        {
          q: 'Apakah memperbesar volume menyebabkan distorsi?',
          a: 'Bisa, jika didorong terlalu jauh — itu hukum fisika, bukan kesalahan perangkat lunak. Limiter bawaan menahan puncak di atas ambang, jadi penguatan sedang (150–250%) biasanya tetap bersih. Di atas 300%, bagian yang pelan menjadi keras, tetapi puncaknya mulai pump (naik turun sesaat); andalkan telinga Anda.',
        },
        {
          q: 'Seberapa keras hasilnya bisa dibuat?',
          a: 'Hingga 400% dari aslinya, yaitu sekitar +12 dB. Itu mencakup sebagian besar rekaman yang pelan; file berdurasi 3 menit selesai diekspor dalam satu atau dua detik, berapa pun besar penguatannya.',
        },
        {
          q: 'Apakah ini sama dengan normalisasi?',
          a: 'Tidak. Normalisasi menaikkan seluruh file agar puncak tertingginya mencapai level target. Memperbesar volume di sini mengalikan level yang Anda pilih, dan itu lebih mudah diperkirakan ketika rekaman memang pelan secara merata.',
        },
        {
          q: 'Bisakah hanya sebagian file yang diperbesar?',
          a: 'Ya. Pilih bagian yang pelan di gelombang audio, atur mode ke Pertahankan pilihan, lalu ekspor — Anda hanya mendapat bagian itu, pada volume yang baru.',
        },
        {
          q: 'Apakah ini berjalan pada file video?',
          a: 'Sering kali ya — browser biasanya bisa mendekode trek audio dari file MP4 yang dijatuhkan ke halaman. Jika browser menolak file itu, ekstrak audionya lebih dulu, lalu coba lagi.',
        },
        { q: "Apa bedanya dengan pengukur kenyaringan?", a: "Halaman ini mengalikan seluruh berkas dengan jumlah yang Anda pilih. Pengukur kenyaringan membaca LUFS terintegrasi — seberapa nyaring berkasnya, bukan ruangannya — dan bisa menyamakan −16, −14, atau −23 tanpa mendorong puncak sampel melewati −1 dBFS. Keduanya tidak meratakan bagian nyaring dan pelan." },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'mp4-to-mp3': {
      cardLine: 'Simpan trek suara klip video, rekaman layar, atau file kamera sebagai MP3.',
      name: 'Konversi MP4 ke MP3',
      shortName: 'MP4 ke MP3',
      title: 'Ubah Video Menjadi MP3 Online Gratis — MP4 ke MP3',
      description:
        'Konversi video MP4 ke MP3 di browser — soundtrack diekstrak secara lokal, tidak pernah diunggah. Gratis, cepat, tanpa mendaftar, dan berjalan di ponsel.',
      h1: 'MP4 ke MP3 online gratis — Ubah video menjadi MP3',
      heroAlt: 'Ubah trek audio MP4, MOV, atau WebM menjadi MP3',
      subtitle: 'Ambil soundtrack dari video apa pun — langsung di browser, tidak ada yang diunggah.',
      intro:
        'Ubah video MP4 menjadi audio MP3 tanpa menginstal apa pun dan tanpa mengunggah ukuran gigabyte ke server. Browser membaca file dari disk, mendekode soundtrack secara lokal, lalu menyimpannya sebagai MP3 — video 500 MB selesai dalam hitungan detik karena yang diproses hanya trek audionya.',
      usesHeading: 'Video yang dikonversi demi suaranya',
      uses: [
        'Simpan kuliah, konser, atau wawancara sebagai audio yang bisa diputar dengan layar mati.',
        'Tidak perlu mengunggah video yang besar. Soundtrack didekode di perangkat ini.',
        'Konversi seluruh trek, lalu potong jika Anda hanya butuh satu bagian.',
      ],
      howTo: [
        {
          name: 'Jatuhkan video',
          text: 'Seret MP4 ke halaman, atau klik untuk memilih. File WebM dan MOV dengan trek audio standar diproses dengan cara yang sama.',
        },
        {
          name: 'Pilih bitrate',
          text: '320 kbps untuk video musik, 192 kbps untuk didengar sehari-hari, 128 kbps untuk wawancara dan kuliah.',
        },
        {
          name: 'Konversi dan unduh',
          text: 'Klik Konversi ke MP3. Trek audio didekode di browser Anda, dan MP3 langsung terunduh.',
        },
      ],
      faqs: [
        {
          q: 'Apakah videonya diunggah ke suatu tempat?',
          a: 'Tidak — dan untuk video hal ini perlu diulang, karena filenya besar. Browser membaca file dari disk Anda, mendekode hanya trek audionya, lalu menulis MP3 secara lokal. Frame video tidak pernah diproses atau dikirim.',
        },
        {
          q: 'Format video apa yang didukung?',
          a: 'File MP4 dengan audio AAC (mayoritas besar, termasuk rekaman ponsel dan unduhan standar), ditambah WebM dengan Opus dan sebagian besar file MOV. Codec yang tidak umum seperti soundtrack AC3 atau DTS tidak dapat didekode browser dan akan ditolak dengan pesan yang jelas.',
        },
        {
          q: 'Seberapa cepat dibanding konverter online?',
          a: 'Biasanya lebih cepat. Konverter yang berbasis unggah harus mengirim seluruh video ke server lebih dulu — file 500 MB bisa makan waktu banyak menit. Di sini hanya audio yang didekode secara lokal, jadi video yang panjang pun selesai dalam hitungan detik di komputer biasa.',
        },
        {
          q: 'Bisakah hanya sebagian video yang dikonversi?',
          a: 'Halaman ini konverter langsung — seluruh soundtrack dikonversi. Jika yang dibutuhkan hanya satu bagian, konversi audionya secara utuh dulu, lalu pangkas dengan pemangkas audio.',
        },
        {
          q: 'Apakah video 4K atau 8K memperlambat prosesnya?',
          a: 'Tidak. Resolusi video tidak berpengaruh — trek video diabaikan seluruhnya. File 4K dan file 240p dengan soundtrack yang sama dikonversi dengan cara yang identik.',
        },
      ],
      dropHint: 'Jatuhkan file MP4 atau video, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'extract-audio': {
      cardLine: 'Ekstrak audio bersih dari video apa pun untuk mengedit, mentranskripsi, atau sampling.',
      name: 'Ekstrak Audio',
      shortName: 'Ekstrak Audio',
      title: 'Ekstrak Audio dari Video — Simpan Suara sebagai MP3 atau WAV',
      description:
        'Ekstrak trek audio dari video apa pun di browser, lalu simpan sebagai MP3 atau WAV lossless. Gratis, privat, tanpa unggah — juga untuk file yang besar.',
      h1: 'Ekstrak audio online gratis — Ekstrak MP3 dari video',
      heroAlt: 'Simpan trek video sebagai MP3 atau WAV',
      subtitle: 'Simpan soundtrack video apa pun sebagai MP3 atau WAV — secara lokal, dalam hitungan detik.',
      intro:
        'Pisahkan suara dari gambarnya: ambil wawancara dari panggilan video, simpan film konser sebagai album, atau pakai ulang soundtrack di suntingan Anda sendiri. Trek audio didekode di perangkat Anda, lalu bisa disimpan sebagai WAV lossless atau sebagai MP3 yang ringkas.',
      usesHeading: 'Soundtrack yang layak ditarik keluar',
      uses: [
        'Ambil audio dari rekaman layar atau video ponsel.',
        'Simpan WAV jika masih akan diedit, atau MP3 jika sudah selesai.',
        'Serahkan file yang panjang ke pemotong saat yang penting hanya satu menit.',
      ],
      howTo: [
        {
          name: 'Jatuhkan videonya',
          text: 'MP4, WebM, atau MOV apa pun dengan soundtrack standar bisa dipakai. File tidak pernah meninggalkan perangkat Anda.',
        },
        {
          name: 'Pilih formatnya',
          text: 'MP3 192 kbps untuk didengar dan dibagikan; WAV untuk salinan lossless yang bisa disunting atau diarsipkan.',
        },
        {
          name: 'Ekstrak dan simpan',
          text: 'Klik Ekstrak Audio. Soundtrack didekode secara lokal dan langsung terunduh.',
        },
      ],
      faqs: [
        {
          q: 'Apa bedanya dengan konverter MP4 ke MP3?',
          a: 'Di baliknya, mesin ekstraksi lokalnya sama — halaman ini disiapkan untuk mengeluarkan audio dari video dalam format yang Anda butuhkan, termasuk WAV lossless, sedangkan halaman konverter diarahkan untuk keluaran MP3.',
        },
        {
          q: 'Bisakah kualitas aslinya didapat?',
          a: 'Pilih WAV: soundtrack yang sudah didekode ditulis secara lossless, jadi audionya sesuai dengan yang ada di video. MP3 dikodekan ulang satu kali; pada 320 kbps bedanya tidak terdengar dalam praktik.',
        },
        {
          q: 'Format video apa yang berjalan?',
          a: 'MP4 dengan audio AAC, WebM dengan Opus, dan sebagian besar file MOV — codec yang bisa didekode browser secara bawaan. Soundtrack dalam AC3, DTS, atau codec lain yang tidak umum tidak dapat didekode secara lokal dan ditolak dengan bersih.',
        },
        {
          q: 'Apakah ada batas ukuran file?',
          a: 'Tidak ada batas buatan. Yang diproses hanya trek audio, jadi video yang sangat besar pun cepat selesai — batasnya adalah memori perangkat Anda, bukan ukuran file di disk.',
        },
        {
          q: 'Bisakah audionya dihapus dari video saja?',
          a: 'Itu operasi yang sebaliknya — membisukan video mempertahankan gambar dan membuang suara. Alat ini mempertahankan suara dan membuang gambar.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Pilih file, lalu konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file video, atau klik untuk memilih',
      exportLabel: 'Ekstrak Audio',
    },
    'voice-recorder': {
      cardLine: 'Rekam rapat, kuliah, dan ide langsung di browser — tanpa memasang aplikasi.',
      name: 'Perekam Suara',
      shortName: 'Perekam Suara',
      title: 'Perekam Suara Online — Rekam, Pangkas, dan Simpan Gratis',
      description:
        'Rekam mikrofon di browser, pangkas hasilnya, lalu simpan sebagai MP3 atau WAV. Gratis dan privat — rekaman tidak pernah diunggah.',
      h1: 'Perekam suara online gratis — Rekam mikrofon ke MP3',
      heroAlt: 'Simpan catatan suara sebagai MP3 atau WAV',
      subtitle: 'Rekam mikrofon, pangkas hasilnya, simpan sebagai MP3 — tidak ada yang meninggalkan perangkat.',
      intro:
        'Perekam yang sekaligus bisa memangkas: rekam memo suara, wawancara, latihan, atau catatan rapat, lalu buang bagian hening dan ekspor file yang bersih. Perekaman maupun penyuntingan terjadi di browser Anda — audio tidak pernah dikirim ke mana pun, sehingga tetap nyaman untuk percakapan yang bersifat rahasia.',
      usesHeading: 'Take yang layak direkam di sini',
      uses: [
        'Rekam memo suara, latihan bahasa, atau narasi kasar tanpa memasang aplikasi.',
        'Potong awal dan akhir sebelum ekspor, supaya take hanya berisi kata-katanya.',
        'Simpan MP3 untuk dikirim, atau WAV jika take masih akan diedit.',
      ],
      howTo: [
        {
          name: 'Izinkan mikrofon',
          text: 'Klik Rekam dan terima permintaan izin browser. Perekaman langsung dimulai; penghitung waktu menunjukkan panjang rekaman.',
        },
        {
          name: 'Berhenti dan dengarkan',
          text: 'Klik Berhenti setelah selesai. Rekaman dimuat ke editor di bawah, dan di sana Anda bisa memutarnya serta memangkas ujungnya.',
        },
        {
          name: 'Ekspor rekamannya',
          text: 'Simpan sebagai MP3 atau WAV. Rekaman hanya ada di tab ini sampai Anda mengekspornya — menutup tab tanpa mengekspor akan menghapusnya.',
        },
      ],
      faqs: [
        {
          q: 'Ke mana rekaman Anda pergi?',
          a: 'Tidak ke mana-mana. Aliran mikrofon ditangkap browser Anda dan disimpan di memori tab ini. Tidak ada yang dikirim, dan rekaman hilang saat Anda menutup tab, kecuali diekspor lebih dulu.',
        },
        {
          q: 'Apa format rekamannya?',
          a: 'Browser yang menentukan format rekaman — Chrome dan Firefox merekam WebM/Opus, Safari merekam MP4/AAC. Itu tidak menjadi soal: hasil ekspor dikonversi ke MP3 atau WAV di perangkat Anda, apa pun format asalnya.',
        },
        {
          q: 'Bisakah keheningan di awal dan akhir dipangkas?',
          a: 'Ya, untuk itulah editor di bawah perekam. Seret bagian yang ingin dipertahankan, atur mode ke Pertahankan pilihan, lalu ekspor — bagian heningnya hilang.',
        },
        {
          q: 'Browser mana yang mendukung perekaman?',
          a: 'Chrome, Edge, Firefox, dan Safari di desktop, ditambah Chrome di Android dan Safari di iOS. Jika tombol Rekam menyatakan perekaman tidak tersedia, browser itu tidak memiliki MediaRecorder API.',
        },
        {
          q: 'Berapa lama Anda bisa merekam?',
          a: 'Sepanjang memori perangkat Anda mengizinkan — beberapa menit ucapan hanya memakan sedikit ruang (kompresi Opus efisien). Untuk rekaman berjam-jam, ekspor secara bertahap.',
        },
      ],
      dropHint: 'Atau jatuhkan rekaman yang sudah ada untuk diedit',
    },
    'volume-booster': {
      cardLine: 'Buat musik dan trek suara video yang pelan jadi keras dan bersih, hingga 4×.',
      name: 'Perbesar Volume',
      shortName: 'Perbesar Volume',
      title: 'Perbesar Volume Audio Online Gratis — Sampai 4×',
      description:
        'Perbesar volume musik dan soundtrack video yang pelan hingga 4× di browser. Limiter menjaganya tetap bersih — gratis, privat, tidak ada yang diunggah.',
      h1: 'Perbesar volume online gratis — Buat audio dan video lebih keras',
      heroAlt: 'Keraskan trek video yang terlalu pelan',
      subtitle: 'Perbesar trek dan soundtrack video yang pelan hingga 4× — bersih, tidak clipping.',
      intro:
        'Untuk semua yang terdengar terlalu pelan: video ponsel yang sunyi, rekaman akustik yang lembut, podcast yang hasil mastering-nya nyaris berbisik. Muat file, naikkan volume hingga 4×, dan biarkan limiter bawaan menahan puncak agar bagian yang keras tetap bersih. Berlaku untuk file audio maupun video — yang diproses hanya soundtrack-nya.',
      usesHeading: 'File pelan yang halaman ini tangani',
      uses: [
        'Angkat soundtrack video yang keluar lebih pelan daripada gambarnya.',
        'Perbesar musik yang diekspor atau di-rip pada level rendah.',
        'Tetap di sekitar 150% sampai 250% jika Anda ingin lebih keras tanpa limiter yang memompa.',
      ],
      howTo: [
        {
          name: 'Jatuhkan file Anda',
          text: 'Musik, memo suara, atau video yang pelan (MP4, WebM, MOV) — soundtrack diekstrak secara lokal jika yang dijatuhkan adalah video.',
        },
        {
          name: 'Pilih besar penguatannya',
          text: 'Geser pengatur volume ke 150–250% untuk sebagian besar rekaman. Dengarkan sambil menggeser; limiter bekerja otomatis di atas 100%.',
        },
        {
          name: 'Ekspor file yang lebih keras',
          text: 'Simpan sebagai MP3 atau WAV. Jika puncak terdengar tertekan, turunkan penguatan 10–20%, lalu ekspor lagi.',
        },
      ],
      faqs: [
        {
          q: 'Seberapa lebih keras hasilnya bisa dibuat?',
          a: 'Hingga 400% dari aslinya (+12 dB). Memperbesar volume tidak bisa menciptakan energi yang memang tidak terekam, jadi sumber yang sangat pelan mungkin juga terbantu jika diekspor ke WAV lalu dinormalisasi di editor khusus — tetapi untuk sebagian besar file yang pelan, penguatan 2–3× sudah cukup.',
        },
        {
          q: 'Apa yang sebenarnya dilakukan limiter?',
          a: 'Di atas volume 100%, kompresor dinamika mengawasi keluaran dan menahan puncak sesaat sebelum terjadi clipping. Hasilnya lebih keras secara keseluruhan, tanpa derak clipping digital yang keras. Tahap soft-clip menangkap apa pun yang masih lolos.',
        },
        {
          q: 'Bisakah suara sebuah video diperbesar?',
          a: 'Ya. Jatuhkan MP4 atau WebM, lalu soundtrack didekode secara lokal, diperbesar, dan diekspor sebagai MP3 atau WAV. Trek video diabaikan — pakai Ekstrak Audio jika yang dibutuhkan hanya suaranya.',
        },
        {
          q: 'Apakah memperbesar volume di ponsel berjalan?',
          a: 'Ya. Penguat ini berjalan di Safari dan Chrome pada ponsel; lagu 3 menit selesai diekspor dalam satu atau dua detik di ponsel modern.',
        },
        {
          q: 'Mengapa tidak cukup menaikkan volume speaker?',
          a: 'Volume speaker hanya membantu di perangkat Anda. File yang sudah diperbesar terdengar lebih keras di mana pun — di ponsel orang lain, di earphone yang murah, lewat speaker kecil laptop.',
        },
        {
          q: 'Apa bedanya dengan kompresor level?',
          a: 'Halaman ini mengalikan seluruh file, jadi jarak antara keras dan pelan tetap. Kompresor level mempersempit jarak itu, lalu mengembalikan puncak. Pakai halaman ini jika semuanya terlalu pelan. Pakai kompresor jika ada bagian yang berteriak dan ada yang hampir tak terdengar.',
        },
        { q: "Apa bedanya dengan pengukur kenyaringan?", a: "Menggeser kontrol ini mengalikan setiap sampel. Pengukur kenyaringan mengukur LUFS terintegrasi dan menawarkan podcast −16, streaming −14, dan siaran −23. Jika puncak sampel akan melewati −1 dBFS, gain berhenti. Ini bukan pengukur ruangan." },
      ],
      dropHint: 'Jatuhkan file audio atau video, atau klik untuk memilih',
    },
    'normalize-audio': {
      cardLine: 'Bawa seluruh tumpukan rekaman ke level yang konsisten dan sehat.',
      name: 'Normalisasi Audio',
      shortName: 'Normalisasi',
      title: 'Normalisasi Audio — Samakan Level Online Gratis',
      description:
        'Normalisasi audio ke level puncak yang konsisten di browser — MP3, WAV, M4A, dan lainnya. Satu klik, gratis, tidak ada yang diunggah.',
      h1: 'Normalisasi audio online gratis — Samakan volume MP3',
      heroAlt: 'Naikkan file yang pelan ke satu level yang sama',
      subtitle: 'Satu klik untuk menaikkan file yang pelan ke level yang konsisten dan sehat — dianalisis di perangkat Anda.',
      intro:
        'Normalisasi memindai file untuk menemukan puncak paling keras, lalu menaikkan seluruh file tepat sebesar yang dibutuhkan agar puncak itu berada tepat di bawah clipping. Hasilnya: file memakai seluruh rentang volume yang tersedia, tanpa tebakan manual. Ini perbaikan yang tepat ketika rekaman memang pelan secara merata — memo suara, rekaman lapangan, atau hasil ekspor dari aplikasi lain yang keluar di −18 dB.',
      usesHeading: 'Saat satu level harus pas',
      uses: [
        'Naikkan file yang pelan sampai puncak terkerasnya mencapai level yang wajar.',
        'Samakan klip yang akan digabung, supaya satu bab tidak setengah sekeras bab berikutnya.',
        'Pakai ini, bukan boost membabi buta, saat Anda tidak tahu harus mendorong seberapa jauh.',
      ],
      howTo: [
        {
          name: 'Jatuhkan audio Anda',
          text: 'MP3, WAV, M4A, atau file audio lain apa pun. File didekode dan dianalisis secara lokal — tidak ada yang meninggalkan perangkat Anda.',
        },
        {
          name: 'Klik Normalisasi',
          text: 'File dipindai untuk menemukan puncaknya, lalu dinaikkan agar puncak itu berada tepat di bawah skala penuh. Putar untuk mendengar perbedaannya.',
        },
        {
          name: 'Ekspor',
          text: 'Simpan sebagai MP3 atau WAV. WAV menghindari satu kali pengodean lossy tambahan jika file masih akan disunting lagi.',
        },
      ],
      faqs: [
        {
          q: 'Apa yang sebenarnya dilakukan normalisasi?',
          a: 'Normalisasi menerapkan satu jumlah gain yang tetap ke seluruh file, sehingga sampel tunggal yang paling keras berada tepat di bawah batas digital (sekitar −0.2 dB di sini). Jika puncak sebuah file berada di 50% volume, normalisasi kira-kira menggandakan setiap sampel — bagian yang pelan maupun yang keras.',
        },
        {
          q: 'Apakah normalisasi sama dengan memperbesar volume?',
          a: 'Keduanya bertumpang tindih, tetapi normalisasi diukur, bukan ditebak. Penguat volume menerapkan pengali apa pun yang Anda geser pada pengatur; normalisasi mencari pengali aman yang terbesar secara otomatis. Jika sebuah file memang pelan secara merata, memperbesar volume sudah cukup. Jika Anda hanya ingin file itu sekeras mungkin tanpa rusak, gunakan normalisasi.',
        },
        {
          q: 'Apakah bagian pelan dan keras menjadi sama kerasnya?',
          a: 'Tidak — dan jangan serta-merta percaya pada alat yang mengklaim satu klik bisa melakukan itu. Menaikkan bagian pelan secara terpisah adalah kompresi rentang dinamika, proses yang berbeda dan lebih merusak. Normalisasi menggeser seluruh rekaman naik dengan jumlah yang sama, dan dinamikanya tidak diubah.',
        },
        {
          q: 'Apakah ini memakai target kenyaringan LUFS seperti layanan streaming?',
          a: 'Tidak. Halaman ini menggeser puncak, bukan kenyaringan terintegrasi. Pengukur kenyaringan mengukur LUFS berbobot K dan bisa menempatkan berkas di −16, −14, atau −23. Itu target serah yang umum, bukan batas hukum, dan bukan bacaan ruangan.',
        },
        {
          q: 'Apakah normalisasi mengurangi kualitas?',
          a: 'Perubahan levelnya sendiri bersih secara matematis dan tidak terdengar. Satu-satunya soal kualitas adalah format ekspor: WAV tetap utuh bit demi bit untuk perubahan gain ini, sedangkan MP3 dikodekan ulang satu kali. Ekspor WAV jika file masih akan disunting lagi.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'slowed-reverb': {
      cardLine: 'Beri lagu apa pun nuansa malam slowed + reverb dalam satu klik.',
      name: 'Slowed + Reverb',
      shortName: 'Slowed + Reverb',
      title: 'Slowed + Reverb — Buat Lagu Slowed + Reverb Online Gratis',
      description:
        'Jadikan lagu apa pun suntingan slowed + reverb di browser — perlambat, beri reverb, ekspor MP3. Gratis, tidak ada yang diunggah.',
      h1: 'Pembuat slowed reverb online gratis — Pelankan lagu dan tambah reverb',
      heroAlt: 'Turunkan lagu ke sekitar 85% dan tambahkan ekor gema yang lembut',
      subtitle: 'Suara larut malam: perlambat trek ke sekitar 85%, tambahkan ruang, lalu ekspor — tanpa aplikasi, tanpa unggah.',
      intro:
        'Slowed + reverb adalah gaya yang menurunkan lagu ke sekitar 80–90% kecepatan sehingga nadanya ikut turun, lalu menambahkan ekor gema yang lembut sampai semuanya terdengar seperti diputar dari dua ruangan jauhnya. Muat sebuah lagu, geser kecepatan ke sekitar 85%, naikkan reverb sampai terasa pas, lalu ekspor — seluruh suntingan terjadi di perangkat Anda, jadi trek sepanjang lagu penuh pun selesai dalam hitungan detik. Naikkan kecepatan di atas 100%, dan yang Anda dapatkan adalah nightcore.',
      usesHeading: 'Suara slowed dan reverb',
      uses: [
        'Turunkan trek ke sekitar 85% dan tambahkan ruang. Itu campuran malam yang biasa.',
        'Mulai dari lagu yang kering. Efeknya adalah pelan dan reverb sekaligus.',
        'Potong ke bagian yang Anda inginkan sebelum ekspor, supaya wash bukan seluruh album.',
      ],
      howTo: [
        {
          name: 'Jatuhkan lagu Anda',
          text: 'MP3, WAV, M4A, atau file audio lain apa pun — trek album utuh tidak masalah, pemrosesan tetap lokal.',
        },
        {
          name: 'Perlambat dan beri ruang',
          text: 'Geser kecepatan ke sekitar 85% (titik yang klasik) dan naikkan reverb ke 20–30%. Dengarkan, dan percaya pada telinga Anda.',
        },
        {
          name: 'Ekspor hasilnya',
          text: 'Simpan sebagai MP3 320 kbps untuk diunggah, atau WAV jika masih akan disunting di aplikasi lain.',
        },
      ],
      faqs: [
        {
          q: 'Kecepatan berapa yang pas untuk slowed + reverb?',
          a: 'Sebagian besar suntingan berada di antara 80% dan 90%, dengan 85% sebagai titik yang paling sering pas — cukup lambat agar nadanya jelas turun, tidak terlalu lambat sampai ritmenya berantakan. Lagu dengan hi-hat yang rapat lebih tahan diperlambat daripada trek yang padat dan cepat.',
        },
        {
          q: 'Bagaimana cara membuat versi nightcore?',
          a: 'Geser pengatur kecepatan ke atas 100% — biasanya 120–130%. Menaikkan kecepatan ikut menaikkan nada, dan itulah bunyi nightcore. Biarkan reverb mendekati nol untuk suntingan nightcore yang klasik.',
        },
        {
          q: 'Apakah memperlambat mengubah nada?',
          a: 'Ya, dan itu memang disengaja — seperti piringan vinyl pada kecepatan yang salah. Vokal menjadi lebih berat dan tangga nadanya turun dengan rasio yang sama. Turunnya nada itulah ciri gaya ini; slowed tanpa perubahan nada membutuhkan editor time-stretch, dan itu alat yang berbeda serta lebih berat.',
        },
        {
          q: 'Berapa banyak reverb yang sebaiknya ditambahkan?',
          a: 'Mulai sekitar 20–30%, lalu dengarkan. Reverb ini adalah ekor gema hasil sintesis — melewati sekitar 50%, trek mulai terdengar seperti di dalam katedral dan kata-kata pada vokal menjadi hilang.',
        },
        {
          q: 'Bisakah lagu slowed dipakai di video?',
          a: 'Memperlambat trek tidak mengubah hak ciptanya. Untuk unggahan YouTube atau TikTok, Anda tetap membutuhkan hak atas lagu aslinya — banyak kreator memakai pustaka musik berlisensi di platform itu, dan menyimpan suntingan slowed untuk rekaman mereka sendiri.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan lagu, atau klik untuk memilih',
    },
    'pitch-changer': {
      cardLine: 'Geser nada per semiton untuk cover dan mashup — durasinya tetap.',
      name: 'Pengubah nada',
      shortName: 'Nada',
      title: 'Pengubah nada — Ubah nada tanpa mengubah durasi',
      description: 'Naikkan atau turunkan nada lagu atau suara hingga 12 seminada, tanpa mengubah durasinya. Gratis, di browser, tidak ada yang diunggah.',
      h1: 'Pengubah nada online gratis — Ubah nada sebuah lagu',
      heroAlt: 'Pindahkan nada MP3 sementara kecepatannya tetap',
      subtitle: 'Geser nada naik atau turun per seminada. Durasi file tetap sama.',
      intro: 'Jatuhkan lagu atau rekaman, lalu geser pengatur nada. Nada berubah, posisinya di waktu tetap. Ini bukan pengubah kecepatan: file tidak menjadi lebih pendek atau lebih panjang. Prosesnya berjalan di perangkat Anda.',
      usesHeading: 'Nada bergerak, waktunya tidak',
      uses: [
        'Pindahkan lagu ke kunci yang lebih nyaman untuk dinyanyikan. Panjang file tetap.',
        'Geser suara beberapa seminada untuk sebuah karakter, tanpa mempercepat kalimatnya.',
        'Efek lebih cepat dan lebih tinggi ada di pengubah kecepatan. Halaman ini tidak memperpendek audio.',
      ],
      howTo: [
        { name: 'Jatuhkan file', text: 'Tambahkan MP3, WAV, M4A, atau audio lain. File tetap di perangkat Anda.' },
        { name: 'Atur nadanya', text: 'Geser dari −12 sampai +12 seminada. +12 satu oktaf lebih tinggi, −12 satu oktaf lebih rendah. 0 membiarkan file seperti semula.' },
        { name: 'Dengarkan dan ekspor', text: 'Putar untuk mendengar nada baru dengan durasi asli, lalu simpan sebagai MP3 atau WAV.' },
      ],
      faqs: [
        { q: 'Apakah durasi file berubah?', a: 'Tidak. Pengatur nada menggeser nada dan membiarkan durasi tetap. Untuk membuat file lebih cepat atau lebih lambat — yang juga menggeser nada — gunakan pengubah kecepatan.' },
        { q: 'Seberapa jauh nadanya bisa digeser?', a: 'Dari −12 sampai +12 seminada, satu per satu. Itu satu oktaf ke masing-masing arah. Suara dan satu instrumen lebih tahan geseran besar daripada campuran yang padat.' },
        { q: 'Geseran besar terdengar alami?', a: 'Beberapa seminada masih dekat dengan aslinya. Lewat kira-kira 7 seminada, suaranya menipis dan terdengar metalik. Itu batas pengubah ini, bukan pengaturan yang bisa dimatikan.' },
        { q: 'Apa ini sama dengan mengubah kecepatan?', a: 'Tidak. Pengubah kecepatan memutar file lebih cepat atau lebih lambat, jadi nada ikut berubah dan durasinya juga berubah. Halaman ini hanya menggeser nada.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Pergeseran dihitung di browser dan hasil ekspor disimpan di perangkat Anda.' },
        { q: 'Bisakah mengubah nada lagu untuk menghindari hak cipta?', a: 'Tidak — mengubah nada tidak menghapus hak atas rekaman. Unggahan yang dinaikkan nadanya tetap bisa diklaim atau dihapus. Ubah kunci untuk bernyanyi atau karaoke, dan gunakan musik yang benar-benar kamu punya haknya saat mempublikasikan.' },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'm4a-to-mp3': {
      cardLine: 'Konversi memo suara iPhone dan file AAC jadi MP3 yang bisa diputar di mana saja.',
      name: 'M4A ke MP3',
      shortName: 'M4A ke MP3',
      title: 'M4A ke MP3 — Ubah M4A dan AAC online gratis',
      description: 'Ubah audio M4A dan AAC menjadi MP3 di browser. Gratis, tanpa akun, tidak ada yang diunggah. Pilih 128, 192, atau 320 kbps.',
      h1: 'M4A ke MP3 online gratis — Ubah M4A menjadi MP3',
      heroAlt: 'Ubah catatan suara iPhone atau file AAC menjadi MP3',
      subtitle: 'Ubah file M4A dan AAC menjadi MP3, di browser, tanpa unggahan.',
      intro: 'Memo suara dan rekaman AAC sering berupa M4A. Jatuhkan filenya, pilih bitrate, dan browser mendekode lalu menyimpan MP3. Audionya tidak dikirim ke server.',
      usesHeading: 'M4A yang orang konversi',
      uses: [
        'Ubah memo suara iPhone atau unduhan AAC menjadi MP3 yang lebih banyak pemutar bisa buka.',
        '128 kbps untuk ucapan dan 320 kbps untuk musik.',
        'M4A tetap di perangkat ini. Tidak ada yang diunggah untuk menyelesaikan konversi.',
      ],
      howTo: [
        { name: 'Jatuhkan M4A', text: 'Seret file .m4a atau .aac ke halaman, atau klik untuk memilih. Video MP4 ada di halaman MP4 ke MP3.' },
        { name: 'Pilih bitrate', text: '320 kbps untuk musik, 192 kbps untuk dengar sehari-hari, 128 kbps untuk memo suara.' },
        { name: 'Konversi dan unduh', text: 'Klik Konversi ke MP3. Dekode dan enkode terjadi di perangkat Anda, lalu file terunduh.' },
      ],
      faqs: [
        { q: 'Bisakah mengubah M4A ke MP3 di iPhone, Android, atau Mac?', a: 'Bisa — konverter berjalan di browser apa pun, jadi perangkatnya bebas. Audio AAC di dalam M4A, yang dipakai memo suara dan sebagian besar unduhan AAC. Apple Lossless (ALAC) di dalam M4A sering gagal didekode di browser. Ubah dulu ke AAC atau WAV, lalu bawa ke sini.' },
        { q: 'Bagaimana dengan video MP4?', a: 'Pakai konverter MP4 ke MP3 untuk video. Halaman ini untuk audio: M4A dan AAC.' },
        { q: 'Mengubah ke MP3 mengurangi kualitas?', a: 'MP3 bersifat lossy. Pada 320 kbps, bedanya dengan AAC asli kecil bagi hampir semua orang. Simpan M4A jika Anda perlu file asli yang utuh.' },
        { q: 'Tag dan sampul ikut tersimpan?', a: 'Tidak. MP3 ditulis tanpa metadata, sama seperti konverter WAV. Judul, artis, dan sampul tidak disalin.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Browser mendekode M4A dan mengkodekan MP3 di perangkat Anda. Audionya tetap di situ.' },
      ],
      dropHint: 'Jatuhkan file M4A atau AAC, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'ogg-to-mp3': {
      cardLine: 'Buat file OGG dari klip game atau rekaman Linux bisa diputar di aplikasi mana pun.',
      name: 'Konversi OGG ke MP3',
      shortName: 'OGG ke MP3',
      title: 'Konversi OGG ke MP3 — gratis di browser',
      description: 'Konversi file OGG ke MP3 di browser, tanpa batas ukuran. Gratis, tanpa akun, tidak ada yang diunggah. Vorbis atau Opus di dalam OGG, pada 128, 192, atau 320 kbps.',
      h1: 'OGG ke MP3 online gratis — Ubah OGG menjadi MP3',
      heroAlt: 'Ubah Vorbis atau Opus di dalam file OGG menjadi MP3',
      subtitle: 'Ubah audio OGG menjadi MP3 — di browser, tidak ada yang diunggah.',
      intro: 'OGG adalah wadah, biasanya Vorbis, kadang Opus. Jatuhkan file, pilih bitrate, dan browser mendekode lalu menyimpan MP3. Audio tidak dikirim ke server.',
      usesHeading: 'OGG yang orang konversi',
      uses: [
        'Buka rip permainan, unduhan, atau rekaman browser yang datang sebagai OGG.',
        'Simpan MP3 untuk ponsel, mobil, atau editor yang tidak menerima OGG.',
        'Biarkan ucapan di 128 kbps dan musik lebih tinggi. Mencoba lagi dilakukan lokal, dan gratis.',
      ],
      howTo: [
        { name: 'Jatuhkan OGG', text: 'Seret file .ogg atau .oga ke halaman, atau klik untuk memilih.' },
        { name: 'Pilih bitrate', text: '320 kbps untuk musik, 192 kbps untuk dengar sehari-hari, 128 kbps untuk suara.' },
        { name: 'Konversi dan unduh', text: 'Klik Konversi ke MP3. Dekode dan kode terjadi di perangkat Anda, lalu MP3 terunduh.' },
      ],
      faqs: [
        { q: 'Apa itu file OGG?', a: 'OGG adalah wadah. Musik di dalamnya biasanya Vorbis. Beberapa file suara memakai Opus. Jika browser bisa mendekode, halaman ini mengubahnya menjadi MP3.' },
        { q: 'Browser mana yang bisa mengonversi OGG?', a: 'Chrome dan Firefox mendekode Vorbis dan Opus di dalam OGG. Safari mendekode Opus dan sering menolak Vorbis. Jika file tidak berbunyi di tab browser biasa, halaman ini juga tidak bisa mengonversinya.' },
        { q: 'Konversi OGG ke MP3 mengurangi kualitas?', a: 'MP3 berlossy. Pada 320 kbps perbedaannya kecil bagi hampir semua orang. Simpan OGG jika Anda perlu file asli.' },
        { q: 'Tag dan sampul tetap ada?', a: 'Tidak. MP3 ditulis tanpa metadata. Judul, artis, dan sampul tidak disalin.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Browser mendekode OGG dan mengkode MP3 secara lokal. Audio tetap di perangkat Anda.' },
      ],
      dropHint: 'Jatuhkan file OGG, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'opus-to-mp3': {
      cardLine: 'Konversi panggilan dan unduhan Opus ke MP3 yang diterima semua pemutar.',
      name: 'Konversi Opus ke MP3',
      shortName: 'Opus ke MP3',
      title: 'Konversi Opus ke MP3 — suara WhatsApp jadi MP3',
      description: 'Konversi audio Opus ke MP3 di browser. Gratis, tanpa akun, tidak ada yang diunggah. Untuk file .opus dan Opus di dalam OGG atau WebM.',
      h1: 'Opus ke MP3 online gratis — Ubah Opus menjadi MP3',
      heroAlt: 'Ubah pesan suara WhatsApp atau Telegram menjadi MP3',
      subtitle: 'Ubah audio Opus menjadi MP3 — di browser, tidak ada yang diunggah.',
      intro: 'Pesan suara dan beberapa unduhan adalah Opus: file .opus, atau Opus di dalam OGG atau WebM. Jatuhkan file, pilih bitrate, dan browser mendekode lalu menyimpan MP3. Audio tidak dikirim ke server.',
      usesHeading: 'Opus yang orang konversi',
      uses: [
        'Ubah pesan suara atau ekspor Opus menjadi MP3 untuk pemutar yang tidak bisa membuka Opus.',
        'Ucapan cukup di 128 kbps. Yang diubah adalah format yang orang bisa putar, bukan durasinya.',
        'Konversi di sini, lalu potong jika pesan punya sunyi panjang di salah satu ujung.',
      ],
      howTo: [
        { name: 'Jatuhkan Opus', text: 'Seret file .opus ke halaman, atau klik untuk memilih. OGG dan WebM yang berisi Opus bekerja dengan cara yang sama.' },
        { name: 'Pilih bitrate', text: '128 kbps cukup untuk pesan suara. Jika Opus-nya musik, pakai 192 atau 320 kbps.' },
        { name: 'Konversi dan unduh', text: 'Klik Konversi ke MP3. Dekode dan kode terjadi di perangkat Anda, lalu MP3 terunduh.' },
      ],
      faqs: [
        { q: 'Apa itu format Opus?', a: 'Opus adalah codec audio. Pesan suara WhatsApp dan Telegram sering berupa .opus. Opus juga ada di dalam OGG dan WebM. Halaman ini mengubahnya menjadi MP3 yang bisa diputar di mana saja.' },
        { q: 'File Opus mana yang berhasil?', a: 'File yang browser sudah bisa putar: .opus, OGG dengan Opus, dan WebM dengan Opus, di Chrome, Firefox, dan Safari terbaru. Jika tab biasa tetap senyap, halaman ini juga tidak bisa mendekode file itu.' },
        { q: 'Konversi Opus ke MP3 mengurangi kualitas?', a: 'MP3 berlossy, Opus juga. Pada 320 kbps, MP3 sudah di batas formatnya. Pesan suara cukup di 128 kbps. Simpan file Opus jika Anda perlu yang asli.' },
        { q: 'Apakah tag tetap ada?', a: 'Tidak. MP3 ditulis tanpa metadata. Judul dan artis tidak disalin.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Browser mendekode audio Opus dan mengkode MP3 secara lokal. Audio tetap di perangkat Anda.' },
      ],
      dropHint: 'Jatuhkan file Opus, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'waveform-generator': {
      cardLine: 'Ubah trek apa pun jadi gambar waveform yang bisa dibagikan dengan warnamu sendiri.',
      name: 'Generator gelombang audio',
      shortName: 'Gelombang',
      title: 'Generator gelombang audio — gambar gelombang, PNG gratis',
      description: 'Ubah lagu atau rekaman jadi gambar gelombang yang bersih. Pilih warna, gaya, dan ukuran, lalu unduh PNG tajam. Gratis di browser, tidak ada unggahan.',
      h1: 'Generator gelombang audio online gratis — Buat gambar gelombang',
      heroAlt: 'Simpan gelombang sebuah lagu sebagai PNG',
      subtitle: 'Gambar gelombang dari audionya — warna, ukuran, dan PNG transparan, digambar di perangkat Anda.',
      intro: 'Jatuhkan lagu, memo suara, atau podcast dan dapatkan gambar gelombang untuk sampul, latar video, atau unggahan. Batang atau isi, warna, lalu PNG ukuran video, persegi, atau spanduk. Browser menggambar dari file yang Anda buka — tidak ada yang diunggah.',
      usesHeading: 'Gambar ini dipakai untuk',
      uses: [
        'Sampul podcast atau lagu dengan gelombang, bukan kotak kosong.',
        'PNG transparan untuk diletakkan di atas video atau thumbnail.',
        'Spanduk lebar untuk header situs atau kartu akhir video.',
      ],
      howTo: [
        { name: 'Jatuhkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Dekode tetap di perangkat Anda.' },
        { name: 'Atur tampilan', text: 'Pilih templat, atau atur gaya dan warna sendiri. Isi mulai dan selesai jika hanya ingin sebagian file. Ada preset 1920×1080, persegi, gambar sosial, dan spanduk.' },
        { name: 'Unduh PNG', text: 'Pratinjau sama dengan hasil unduhan. Ukuran preset diunduh pada resolusi ganda supaya tetap tajam.' },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Browser mendekode file dan menggambar di canvas. Tidak ada langkah unggah. Setelah halaman termuat, alat ini tetap jalan saat offline.' },
        { q: 'Apakah PNG-nya tajam?', a: 'Ukuran preset diekspor dua kali piksel yang tertulis — sampul 1920×1080 menjadi 3840×2160. PNG tidak lossy. Ukuran kustom di atas sekitar dua juta piksel diekspor 1× supaya tab tidak kehabisan memori.' },
        { q: 'Bisakah saya mengedit audionya di sini?', a: 'Tidak. Halaman ini hanya menggambar. Untuk memotong, pakai pemotong audio, lalu kembali jika gambarnya masih diperlukan.' },
        { q: 'Apa ini sama dengan spektrogram?', a: 'Tidak. Gelombang menunjukkan keras-lembut sepanjang waktu — bentuk yang terlihat di pemutar. Spektrogram menunjukkan frekuensi yang ada. Untuk itu, buka generator spektrogram.' },
        { q: 'Bisakah latarnya transparan?', a: 'Bisa. Biarkan «Latar transparan» menyala dan PNG tidak punya warna dasar, jadi bisa diletakkan di atas video atau gambar lain. Matikan untuk mengisi warna solid.' },
        { q: 'Apakah bisa di ponsel?', a: 'Bisa. Di layar sempit kontrol tersusun ke bawah dan tombol unduh tetap terjangkau. Chrome, Edge, Firefox, dan Safari terbaru, di desktop dan ponsel.' },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Unduh PNG',
    },
    'spectrogram-generator': {
      cardLine: 'Lihat frekuensi di dalam lagu, rekaman, atau kicau burung.',
      name: 'Spektrogram online',
      shortName: 'Spektrogram',
      title: 'Spektrogram online — audio jadi gambar, gratis',
      description: 'Buat spektrogram dari file audio dan unduh PNG. Sumbu log atau linear, warna, rentang dB. Gratis di browser, tidak ada yang diunggah.',
      h1: 'Spektrogram audio online gratis — Lihat frekuensi dalam rekaman',
      heroAlt: 'Unduh gambar frekuensi sebuah lagu sebagai PNG',
      subtitle: 'Lihat frekuensi dalam lagu atau rekaman, lalu unduh gambarnya. Perhitungan di perangkat Anda.',
      intro: 'Spektrogram menunjukkan frekuensi apa yang ada seiring waktu: suara, bass, dan apa pun yang digambar ke dalam bunyi. Jatuhkan file, pilih sumbu log atau linear, unduh PNG. FFT berjalan di browser — tidak ada yang diunggah.',
      usesHeading: 'Apa yang dicari orang',
      uses: [
        'Melihat letak bass, suara, dan desis sebelum menyamakan.',
        'Menemukan gambar atau kata yang disembunyikan di frekuensi.',
        'Mengekspor gambar diam sebuah lagu untuk unggahan, kelas, atau catatan.',
      ],
      howTo: [
        { name: 'Jatuhkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Dekode tetap di perangkat Anda.' },
        { name: 'Atur tampilan', text: 'Sumbu log adalah tampilan musik yang biasa. Persempit frekuensi atas. Jika gambar tersembunyi terlalu gelap atau terang, geser lantai dan langit-langit dB. Hanya satu bagian: persingkat rentang waktu.' },
        { name: 'Unduh PNG', text: 'Ukuran siap pakai diunduh dengan resolusi ganda. Gambar ini bukan audio — PNG tidak bisa diputar kembali menjadi lagu.' },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Browser mendekode file dan menghitung FFT di tab ini. Tidak ada unggahan. Setelah halaman dimuat, tetap jalan saat offline.' },
        { q: 'Apa arti warnanya?', a: 'Setiap kolom adalah satu saat. Tinggi adalah frekuensi, nada tinggi di atas. Lebih terang berarti lebih banyak energi. Viridis, inferno, dan abu-abu adalah data yang sama dengan skala lain. Lantai dan langit-langit dB menentukan apa yang sunyi dan keras.' },
        { q: 'Bisakah gambar dikembalikan jadi audio?', a: 'Tidak. PNG adalah gambar level, bukan bentuk gelombang. Untuk mendengar, simpan file asli. Untuk memasukkan gambar ke audio, pakai Gambar ke audio, lalu buka WAV itu di sini.' },
        { q: 'Bedanya dengan generator gelombang?', a: 'Gelombang adalah keras-lembut sepanjang waktu — bentuk di pemutar. Spektrogram adalah frekuensi yang ada. Sampul: gelombang. Memeriksa atau menampakkan frekuensi: halaman ini.' },
        { q: 'Berfungsi di ponsel?', a: 'Ya. Di layar sempit kontrol bertumpuk dan unduhan tetap terjangkau. Chrome, Edge, Firefox, dan Safari terbaru, desktop dan ponsel. File panjang sedikit menunggu karena tiap kolom adalah FFT.' },
        { q: 'Mengapa ada lagu yang menyembunyikan gambar?', a: 'Beberapa lagu, yang terkenal Aphex Twin, menggambar gambar dengan menaruh energi di frekuensi pilihan. Naikkan langit-langit dB jika gambar pudar, dan biarkan sumbu log. Halaman ini hanya menampilkan. Membuatnya adalah Gambar ke audio.' },
      ],
      dropHint: 'Jatuhkan file audio atau klik untuk memilih',
      exportLabel: 'Unduh PNG',
    },
    'image-to-audio': {
      cardLine: 'Sembunyikan gambar atau sebaris teks di dalam spektrogram WAV.',
      name: 'Gambar ke audio',
      shortName: 'Gambar ke audio',
      title: 'Gambar ke audio — buat spektrogram dari gambar',
      description: 'Ubah gambar atau satu baris pendek menjadi WAV yang terlihat di spektrogram. Gratis di browser, tidak ada yang diunggah.',
      h1: 'Gambar ke audio online gratis — Ubah gambar menjadi suara',
      heroAlt: 'Ubah gambar spektrogram kembali menjadi WAV',
      subtitle: 'Gambar sebuah gambar atau satu baris teks ke dalam WAV. Spektrogram menampilkannya kembali.',
      intro: 'Ketik satu baris pendek atau jatuhkan gambar. Halaman ini menulis bentuk itu ke frekuensi WAV, trik yang sama dengan gambar tersembunyi dalam lagu. Ini bukan lagu dan bukan ucapan. Buka WAV di generator spektrogram. Tidak ada yang diunggah.',
      usesHeading: 'Untuk apa orang memakainya',
      uses: [
        'Menyembunyikan nama atau satu baris di tempat yang bisa dibaca spektrogram.',
        'Mengubah logo sederhana atau coretan menjadi lukisan nada yang pendek.',
        'Membuat file yang langsung dibuka di generator spektrogram.',
      ],
      howTo: [
        { name: 'Ketik atau jatuhkan', text: 'Sampai 32 karakter, atau PNG, JPG, WebP. Pratinjau adalah gambar yang akan ditulis. Piksel terang adalah frekuensi yang lebih keras.' },
        { name: 'Unduh WAV', text: 'Anda mendapat WAV 44,1 kHz, 16 bit. Bunyinya kicauan dan derau, bukan gambar yang dibacakan.' },
        { name: 'Lihat spektrum', text: 'Buka WAV di generator spektrogram. Sumbu log, langit-langit sekitar −20 dB. Bentuknya kira-kira antara 400 Hz dan 12 kHz.' },
      ],
      faqs: [
        { q: 'Apakah gambar saya diunggah?', a: 'Tidak. Browser menggambar teks atau gambar dan menyusun WAV di tab ini. Tidak ada unggahan. Setelah halaman dimuat, tetap jalan saat offline.' },
        { q: 'File apa yang saya dapat?', a: 'WAV mono, 44,1 kHz, PCM 16 bit, beberapa detik. Bukan MP3. Gambarnya ada di frekuensi: MP3 bitrate rendah bisa mengaburkan bentuknya.' },
        { q: 'Apakah bunyinya seperti gambar atau kata-katanya?', a: 'Tidak. Tidak ada sintesis ucapan dan tidak ada pembuat musik. Anda mendengar nada di tempat piksel terang. Untuk membacanya, buka spektrogram.' },
        { q: 'Bedanya dengan generator spektrogram?', a: 'Generator spektrogram menggambar audio yang sudah Anda punya. Halaman ini sebaliknya: membangun audio agar spektrogram menampilkan gambar atau baris Anda. Generator gelombang hanya menunjukkan keras-lembut, jadi bentuk tersembunyi nyaris tidak kelihatan di sana.' },
        { q: 'Berfungsi di ponsel?', a: 'Ya. Ketik, pilih foto, unduh. Chrome, Edge, Firefox, dan Safari terbaru, desktop dan ponsel. Foto yang sangat rinci diperkecil agar filenya tetap pendek.' },
        { q: 'Apakah ini kode rahasia?', a: 'Tidak. Siapa pun yang membuka spektrogram WAV itu akan melihat gambarnya. Ini gambar yang terlihat di dalam suara, bukan enkripsi.' },
      ],
      dropHint: 'Atau jatuhkan gambar',
      exportLabel: 'Unduh WAV',
    },
    'mp3-tag-editor': {
      name: 'Editor Tag MP3',
      shortName: 'Editor Tag',
      title: 'Editor Tag MP3 Online — Edit Tag dan Cover Gratis',
      description:
        'Edit tag MP3 langsung di browser: judul, artis, album, tahun, trek, dan cover. File tidak pernah diunggah. Gratis, tanpa daftar.',
      h1: 'Editor tag MP3 online gratis — Edit tag ID3',
      heroAlt: 'Ubah judul, artis, dan sampul sebuah MP3',
      subtitle: 'Perbaiki judul, artis, album, dan cover MP3 dalam kurang dari satu menit — langsung di browser, tanpa diunggah.',
      intro:
        'Satu file MP3 membawa dua hal: musiknya, dan kartu informasi yang ditampilkan pemutar di sebelahnya — judul, artis, album, tahun, cover. Saat kartu itu salah atau hilang, semua perangkat, dari ponsel sampai head unit mobil, hanya menampilkan Artis tidak dikenal atau Track 01. Letakkan file di sini, perbaiki kolomnya, lalu simpan: audio disalin byte demi byte tanpa disentuh, dan tidak pernah meninggalkan perangkat Anda.',
      usesHeading: 'Tag yang benar-benar perlu diperbaiki',
      uses: [
        'Merapikan hasil unduhan yang tampil sebagai "Artis tidak dikenal" atau tanpa cover di pemutar musik Anda.',
        'Memberi episode podcast atau lagu demo judul, cover, dan kredit yang pantas sebelum dipublikasikan.',
        'Membuang metadata perangkat dan lokasi yang tertinggal di rekaman sebelum dibagikan.',
      ],
      howTo: [
        { name: 'Letakkan MP3 Anda', text: 'Letakkan file atau klik untuk memilih. Tag dan cover saat ini dibaca di perangkat Anda dan ditampilkan di formulir.' },
        { name: 'Edit kolomnya', text: 'Ketik judul, artis, album, tahun, dan nomor trek yang benar, lalu tambahkan atau ganti cover dengan JPG atau PNG.' },
        { name: 'Simpan MP3', text: 'Klik "Simpan MP3" untuk mengunduh file yang sudah diberi tag. Audio disalin tanpa perubahan — yang ditulis ulang hanya kartu informasi di sekelilingnya.' },
      ],
      faqs: [
        { q: 'Apakah MP3 saya diunggah ke server?', a: 'Tidak. File dibuka dengan API FileReader milik browser dan ditulis ulang langsung di tab Anda. Anda bisa membuka halaman ini, mematikan Wi-Fi, dan editor tetap berjalan. Tidak ada langkah unggah sama sekali.' },
        { q: 'Apakah mengedit tag mengubah kualitas audio?', a: 'Tidak. Data tag tersimpan di blok terpisah di awal file, dan frame audio MPEG disalin byte demi byte, sehingga suaranya identik bit demi bit. File hasil simpan bahkan bisa sedikit lebih kecil karena blok tag lama beserta paddingnya tidak dibawa.' },
        { q: 'Apa bedanya dengan Editor MP3?', a: 'Editor MP3 memotong, memangkas, dan menyambung suaranya, artinya audio didekode dan dienkode ulang. Halaman ini tidak pernah menyentuh suara — yang ditulis ulang hanya kartu informasi di sekelilingnya. Gunakan yang itu untuk mengedit musik, yang ini untuk memberi label.' },
        { q: 'Apa yang tidak bisa dilakukannya?', a: 'Hanya file MP3 yang bisa diedit — FLAC, M4A, dan WAV memakai format tag berbeda yang belum bisa ditulis halaman ini. Bekerja satu file per kali, bukan satu album sekaligus. Saat menyimpan, seluruh blok tag ditulis ulang, jadi bab podcast atau kolom kustom yang tidak biasa dari tag asli tidak dibawa — kolom yang umum tetap dibawa.' },
        { q: 'Mengapa head unit mobil masih menampilkan "Track 01"?', a: 'Banyak head unit mengabaikan tag dan mengandalkan nama file, dan kebanyakan menyimpan informasi lama sampai Anda memasang ulang flashdisk atau memindai ulang. Simpan di sini (file ditulis sebagai ID3v2.3, versi yang paling andal dibaca head unit), ubah nama file menjadi semacam "01 - Judul Lagu.mp3", lalu pindai ulang.' },
        { q: 'Tag bahasa Mandarin, Jepang, Korea, atau Arab saya tampil kacau. Bisa diperbaiki?', a: 'Bisa — biasanya artinya tag lama tersimpan dengan enkode satu byte, bukan Unicode. Ketik ulang teks yang benar di sini dan simpan: file ditulis ulang sebagai ID3v2.3 dengan teks UTF-16, yang ditampilkan dengan benar oleh pemutar modern, termasuk judul Mandarin, Jepang, Korea, Arab, Kiril, dan Hindi.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya — Chrome, Safari, Firefox, dan Edge terbaru, di desktop maupun ponsel. Saat menyimpan, file diserahkan ke browser seperti unduhan biasa; di iPhone, Safari menyimpannya ke app File. Semuanya berjalan lokal, jadi tetap berfungsi dengan koneksi lambat setelah halaman terbuka.' },
      ],
      dropHint: 'Letakkan file MP3 di sini, atau klik untuk memilih',
      exportLabel: 'Simpan MP3',
    },
    compressor: {
      cardLine: 'Turunkan puncak yang keras dan angkat kata yang pelan, tanpa membuat seluruh file lebih keras.',
      name: 'Kompresor level',
      shortName: 'Kompresor',
      title: 'Kompresor level — Ratakan volume online',
      description:
        'Ratakan bagian keras dan pelan dari rekaman di browser. Puncak tetap. Ini bukan memperkecil file. Gratis, tanpa unggah.',
      h1: 'Kompresor audio online gratis — Ratakan bagian keras dan pelan',
      heroAlt: 'Tahan puncak rekaman suara supaya kata yang pelan ikut terdengar',
      subtitle: 'Kompresor pita lebar yang menahan lonjakan level. Puncak file tetap di tempat semula.',
      intro:
        'Memo suara yang berteriak di satu kalimat dan berbisik di kalimat berikutnya butuh kompresi, bukan kenop volume. Halaman ini menjalankan satu kompresor pita lebar: bagian keras diturunkan, bagian pelan diangkat, lalu ekspor diskalakan agar puncaknya sama dengan file awal. Semuanya di browser. File tidak diunggah.',
      usesHeading: 'Pekerjaan yang diselesaikan kompresor',
      uses: [
        'Ratakan memo suara yang direkam dekat lalu jauh dari ponsel.',
        'Tahan tamu podcast yang jauh lebih keras daripada pembawa acara.',
        'Dudukkan vokal di depan saat refrain melonjak dari bait.',
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Dekode tetap di perangkat Anda.' },
        { name: 'Atur jumlahnya', text: 'Geser Kompres. 30–50% cukup untuk sebagian besar ucapan. 100% menekan keras: ambang −36 dB, rasio 8:1.' },
        { name: 'Dengar dan ekspor', text: 'Putar hasilnya, lalu ekspor MP3 atau WAV. Puncak dikembalikan ke puncak asli, tepat di bawah skala penuh.' },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Kompresor adalah prosesor dinamika Web Audio di dalam tab browser. Setelah halaman termuat, Anda bisa offline dan tetap mengekspor.' },
        { q: 'Apa yang terjadi pada audio?', a: 'Satu kompresor pita lebar (ambang dari −18 dB sampai −36 dB, rasio dari sedikit di atas 1:1 sampai 8:1). Kompresor tidak punya penguatan kompensasi, jadi halaman ini menskalakan ekspor sampai puncak sumber, atau sekitar −0.2 dBFS jika sumber sudah lebih panas. WAV menjaga perubahan level itu. MP3 dikode ulang sekali.' },
        { q: 'Apakah ini memperkecil file?', a: 'Tidak. Memperkecil file berarti mengode ulang pada bitrate lebih rendah, yaitu halaman kompresor audio. Halaman ini mengubah dinamika dan menyerahkan bitrate pada format ekspor.' },
        { q: 'Apa bedanya dengan penguat volume dan normalisasi?', a: 'Penguat volume mengalikan seluruh file. Normalisasi menaikkan semuanya sampai sampel terkeras mencapai target. Keduanya membiarkan jarak keras–pelan tetap. Halaman ini mempersempit jarak itu. Satu pita, bukan rantai multiband, dan tidak menghapus derau.' },
        { q: 'Bisakah menghilangkan derau ruangan?', a: 'Tidak. Mengangkat bagian pelan juga mengangkat desis dan derau ruangan. Jika masalahnya derau, kompresi membuatnya lebih jelas. Potong bagian senyap, atau rekam ulang.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya. Slider dan ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari saat ini. Beberapa menit ucapan diekspor dalam satu atau dua detik di ponsel yang baru.' },
      ],
      dropHint: 'Letakkan file audio di sini, atau klik untuk memilih',
    },
    echo: {
      cardLine: 'Tambahkan pengulangan yang bisa dihitung: satu tepukan pendek, bukan kabut reverb.',
      name: 'Gema',
      shortName: 'Gema',
      title: 'Tambah gema ke audio — efek gema online',
      description: 'Tambahkan gema berwaktu ke audio apa pun di browser. Anda yang mengatur tunda dan pengulangan. Gratis, tanpa unggah.',
      h1: 'Gema online gratis — Tambah gema ke audio',
      heroAlt: 'Tambahkan delay dan pengulangan ke sebuah rekaman',
      subtitle: 'Pengulangan yang terpisah, pada tunda yang Anda pilih: dari tepukan pendek sampai 0,8 d.',
      intro: 'Gema adalah salinan yang kembali setelah jeda yang bisa dihitung. Tunda berjalan dari beberapa perseratus detik sampai 0,8 detik, dan pengulangan menentukan seberapa banyak setiap salinan masuk lagi. Campuran basah tetap 45%. Tunda nol membuat file tidak berubah. Prosesnya tetap di browser.',
      usesHeading: 'Gema yang memang dicari',
      uses: ['Beri vokal tepukan pendek agar punya ruang tanpa menjadi bubur.', 'Buat pukulan gitar atau drum kembali tepat pada ketukan.', 'Dengar satu kalimat kembali sekali, jelas, bukan kabut reverb.'],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Dekode tetap di perangkat Anda.' },
        { name: 'Atur tunda dan ulangan', text: 'Tunda adalah jeda sebelum salinan pertama, sampai 0,8 d. Ulangan adalah umpan balik, paling tinggi 55% agar tidak lari.' },
        { name: 'Dengar dan ekspor', text: 'Putar, lalu ekspor MP3 atau WAV. File bertambah dengan ekor pengulangan, paling lama 4 detik.' },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Gema adalah tunda Web Audio di dalam tab. Setelah halaman termuat, Anda bisa offline dan tetap mengekspor.' },
        { q: 'Apa yang sebenarnya dilakukan efek ini?', a: 'Salinan sinyal ditunda sesuai waktu yang Anda atur dan dicampur pada 45%. Setiap salinan masuk lagi ke tunda pada tingkat ulangan, sampai 0,55, jadi semakin pelan, bukan melengking. WAV menjaga campuran itu. MP3 dikode ulang sekali.' },
        { q: 'Apa bedanya dengan slowed + reverb?', a: 'Slowed + reverb adalah kabut: nada turun bersama kecepatan dan ekornya adalah pantulan yang melebur. Halaman ini menjaga tempo asli dan menambah salinan yang terdengar satu per satu. Kecepatan dan nada tidak berubah.' },
        { q: 'Mengapa pengulangan tidak makin keras?', a: 'Umpan balik dibatasi 55% dan ekor yang dirender dibatasi 4 detik. Cukup untuk mendengar beberapa salinan. Ini tidak menjadi derau yang berosilasi sendiri.' },
        { q: 'Bisakah menggema hanya sebagian lagu?', a: 'Bisa. Pilih bagian pada gelombang dan pertahankan pilihan itu. Pengulangan ditambahkan pada yang Anda ekspor, bukan pada sisa file.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya. Kedua slider dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari saat ini.' },
      ],
      dropHint: 'Letakkan file audio di sini, atau klik untuk memilih',
    },
    'silence-remover': {
      cardLine: "Potong senyap yang panjang dan biarkan napas pendek tetap di tempatnya.",
      name: "Hapus senyap",
      shortName: "Senyap",
      title: "Hapus senyap dari audio — Potong jeda online gratis",
      description: "Hapus senyap panjang dari audio apa pun di peramban. Anda yang menentukan seberapa pelan dan seberapa lama. Gratis, tidak ada yang diunggah.",
      h1: 'Hapus senyap online gratis — Hapus senyap dari audio',
      heroAlt: 'Potong jeda panjang dari rekaman suara',
      subtitle: "Buang udara mati. Jeda yang lebih pendek dari batas yang Anda set tetap ada.",
      intro: "Alat ini mencari bagian yang lebih pelan dari ambang dan lebih lama dari jeda minimum, lalu memotongnya. Ambang bawaan −40 dBFS cocok untuk ucapan dan memo suara. Setiap potongan menyisakan 0,08 detik di kedua tepi supaya awal atau akhir kata tidak terpotong. Jeda yang lebih pendek dari batas tetap ada. Musik pelan dan ekor yang menghilang juga berada di bawah −40 dBFS dan ikut terpotong. Kalau Anda ingin memilih dengan tangan, pakai pemotong audio. Jika seluruh berkas di bawah ambang, ekspor adalah berkas asli. Pemrosesan tetap di peramban Anda.",
      usesHeading: "Di mana udara mati itu ada",
      uses: ["Rapatkan memo suara atau rekaman podcast yang jedanya panjang antar kalimat.", "Buang senyap dari kuliah tanpa memotong setiap jeda dengan tangan.", "Bersihkan rekaman sebelum ekspor, dan biarkan napas pendek tetap ada."],
      howTo: [
        { name: "Letakkan audio", text: "MP3, WAV, M4A, OGG, atau FLAC apa pun. Berkas didekode di perangkat Anda." },
        { name: "Atur ambang dan jeda", text: "Ambang adalah seberapa pelan sebuah bagian, dari −60 sampai −20 dBFS. Jeda minimum adalah berapa lama bagian itu harus bertahan sebelum dihapus, dari 0,1 sampai 2 detik. Baris status menulis kira-kira berapa detik yang akan hilang." },
        { name: "Ekspor", text: "Putar berkas asli untuk memeriksa, lalu ekspor MP3 atau WAV. Berkasnya adalah bagian yang bersuara digabung, dengan 0,08 detik tersisa di setiap potongan." },
      ],
      faqs: [
        { q: "Apakah audio saya diunggah?", a: "Tidak. Level diukur di peramban dan bagian pelan dipotong di memori. Setelah halaman termuat Anda bisa offline dan ekspor tetap jalan." },
        { q: "Apa yang benar-benar dihapus?", a: "Sebuah bagian dihapus hanya jika lebih pelan dari ambang dan lebih lama dari jeda minimum. Bawaan adalah −40 dBFS dan 0,35 detik. Setiap bagian menyisakan 0,08 detik di kedua ujung. Jeda yang lebih pendek, termasuk sebagian besar napas, tetap ada." },
        { q: "Apakah musik pelan ikut terpotong?", a: "Ya, jika musik itu tetap di bawah ambang lebih lama dari jeda. −40 dBFS untuk ucapan. Alas pelan, fade, atau derau ruang dalam campuran musik dianggap senyap. Naikkan ambang ke arah −20 jika Anda hanya ingin nol digital yang hampir hening, atau pakai pemotong audio dan pilih dengan tangan." },
        { q: "Bagaimana jika seluruh berkas pelan?", a: "Tidak ada yang dipotong. Baris status mengatakannya, dan ekspor adalah berkas asli." },
        { q: "Apa bedanya dengan pemotong?", a: "Pemotong audio dan pemotong MP3 menyimpan wilayah yang Anda gambar di gelombang. Halaman ini menemukan senyap panjang dari level dan menghapus semuanya dalam satu ekspor. Kecepatan, nada, dan kenyaringan yang tersisa tidak berubah." },
        { q: "Apakah ini jalan di ponsel?", a: "Ya. Kedua penggeser dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang." },
      ],
      dropHint: "Letakkan berkas audio, atau klik untuk menelusuri",
    },
    'loudness-meter': {
      cardLine: "Baca seberapa nyaring sebuah berkas dalam LUFS, lalu samakan ke target podcast, streaming, atau siaran.",
      name: "Pengukur kenyaringan",
      shortName: "Kenyaringan",
      title: "Pengukur kenyaringan — Lihat LUFS audio online gratis",
      description: "Ukur LUFS terintegrasi sebuah audio di peramban, lalu samakan ke −16, −14, atau −23. Puncak sampel tidak melewati −1 dBFS. Gratis, tidak ada yang diunggah.",
      h1: 'Pengukur LUFS online gratis — Cek LUFS sebuah lagu',
      heroAlt: 'Lihat apakah file cocok dengan target kenyaringan podcast atau streaming',
      subtitle: "LUFS terintegrasi dari berkas yang Anda letakkan, bukan kenyaringan ruangan.",
      intro: "Letakkan berkas dan baca kenyaringan terintegrasinya dalam LUFS, plus puncak sampel. Lalu samakan ke satu target serah: podcast −16, streaming −14, atau siaran −23. Gain adalah satu angka untuk seluruh berkas. Jika gain itu mendorong sampel paling nyaring melewati −1 dBFS, gain berhenti di situ dan halaman memberi tahu LUFS yang benar-benar tercapai. Ini bukan pengukur SPL ruangan, dan bukan normalisasi puncak. −16, −14, dan −23 adalah target serah yang umum, bukan batas hukum. Pemrosesan tetap di peramban Anda.",
      usesHeading: "Untuk apa angka ini",
      uses: ["Lihat apakah memo suara atau campuran sudah dekat target podcast sebelum Anda kirim.", "Angkat berkas yang pelan ke arah −16 atau −14 tanpa membiarkan puncak sampel melewati −1 dBFS.", "Baca stereo sebagai stereo. Dua kanal tidak dicampur dulu sebelum pengukuran."],
      howTo: [
        { name: "Letakkan audio", text: "MP3, WAV, M4A, OGG, atau FLAC apa pun. Berkas didekode dan diukur di perangkat Anda." },
        { name: "Baca pengukur", text: "Terintegrasi adalah kenyaringan berkas dengan bobot K, dalam LUFS. Puncak sampel adalah sampel terbesar, dalam dBFS. Berkas yang senyap tidak punya kenyaringan untuk disamakan." },
        { name: "Pilih target dan ekspor", text: "Podcast −16, streaming −14, siaran −23. Ekspor MP3 atau WAV. Jika puncak akan melewati −1 dBFS, gain berhenti dan catatan menunjukkan LUFS yang Anda dapat." },
      ],
      faqs: [
        { q: "Apakah audio saya diunggah?", a: "Tidak. Berkas didekode dan diukur di peramban. Setelah halaman termuat Anda bisa offline dan ekspor tetap jalan." },
        { q: "Apa arti angkanya?", a: "LUFS terintegrasi adalah seberapa nyaring berkas sepanjang durasinya, setelah bobot K dari ITU-R BS.1770. Itu sifat berkas. Bukan bacaan ruangan, dan bukan tingkat tekanan suara berbobot A." },
        { q: "Apa bedanya dengan normalisasi?", a: "Normalisasi menaikkan berkas sampai sampel paling nyaring menyentuh sebuah puncak. Halaman ini menyamakan kenyaringan terintegrasi. Berkas bisa sudah dinormalisasi puncaknya dan tetap jauh dari −16 LUFS. Bagian nyaring dan pelan tetap berjarak sama. Kompresor level adalah halaman yang mempersempit jarak itu." },
        { q: "Apakah −16, −14, dan −23 batas hukum?", a: "Bukan. Itu target serah yang umum: podcast sering minta sekitar −16 LUFS, streaming musik sekitar −14, dan siaran sekitar −23. Halaman ini tidak menjanjikan berkas Anda lolos pemeriksaan platform atau lembaga siaran." },
        { q: "Apakah puncak ini puncak sejati?", a: "Bukan. Puncak sampel adalah sampel terbesar dalam berkas. Puncak sejati butuh oversampling dan bisa sedikit lebih tinggi di antara sampel. Halaman ini menahan puncak sampel di −1 dBFS dan tidak melaporkan dBTP." },
        { q: "Apakah ini jalan di ponsel?", a: "Ya. Tiga target dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang." },
      ],
      dropHint: "Letakkan berkas audio, atau klik untuk menelusuri",
    },
    'multi-track-audio-editor': {
      cardLine: 'Tumpuk vokal, narasi, dan musik di satu linimasa, lalu ekspor satu mix.',
      name: 'Editor audio multi-track',
      shortName: 'Multi-track',
      title: 'Editor audio multi-track online gratis',
      description: 'Tumpuk file di satu linimasa, atur level dan pan tiap trek, lalu ekspor satu mix. Gratis, di browser, tidak diunggah.',
      h1: 'Editor audio multi-track online gratis — Tumpuk trek jadi satu mix',
      heroAlt: 'Atur level dan pan vokal di atas beat',
      subtitle: 'Tumpuk sampai 8 file, seimbangkan masing-masing, ekspor satu mix.',
      intro: 'Letakkan vokal di atas beat, atau narasi di atas musik, lalu dengarkan bersama. Setiap file adalah satu trek: level, pan, bisu, solo, dan kapan mulai. Penjumlahannya di browser Anda. Tidak ada yang diunggah. Menutup tab mengakhiri sesi.',
      usesHeading: 'Mix untuk halaman ini',
      uses: [
        'Taruh memo suara di bawah musik dan geser supaya suara masuk setelah intro.',
        'Seimbangkan stem yang sudah ada — vokal, drum, gitar — lalu ekspor satu file.',
        'Dengarkan satu trek sendirian, lalu kembalikan yang lain, tanpa memasang DAW.',
      ],
      howTo: [
        { name: 'Tambahkan file', text: 'Letakkan dua audio atau lebih, atau klik untuk memilih. Setiap file jadi satu trek. Halaman ini berhenti di 8.' },
        { name: 'Atur posisi dan balance', text: 'Seret klip untuk menentukan kapan masuk. Seret kedua tepi untuk memotong. Atur level dan pan di baris itu, atau ketik waktunya. Bisukan dan Solo ada di baris yang sama.' },
        { name: 'Putar, lalu ekspor', text: 'Tekan Putar mix. Ekspor MP3 atau WAV. Jika jumlahnya akan pecah, seluruh mix diturunkan dengan faktor yang sama dan halaman menulis berapa dB.' },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Browser mendekode setiap file dengan decodeAudioData dan menjumlahkan sampel di memori. Setelah halaman termuat, ekspor tidak butuh server. Menutup tab membuang sesi: tidak ada akun dan tidak ada proyek tersimpan.' },
        { q: 'Apa yang terjadi pada suaranya?', a: 'Trek di-resample ke sample rate tertinggi di antara mereka, minimal 44,1 kHz, dengan interpolasi linear. Ekspor WAV adalah PCM 16-bit dari mix stereo itu. MP3 dikode sekali, pada bitrate yang Anda pilih, sampai 320 kbps. Jika puncak jumlah melewati 0,98, seluruh mix diskalakan supaya puncaknya jatuh di 0,98. Itu satu perubahan gain, bukan kompresor, dan tidak menambah encode kedua.' },
        { q: 'Apa yang tidak bisa dilakukan?', a: 'Tidak merekam MIDI, tidak memuat instrumen atau sampel, tidak menggambar kurva volume, dan tidak otomatis mengecilkan musik di bawah suara. Satu klip per trek, delapan trek, tanpa file proyek. Plugin, otomasi, dan sesi yang dibuka lagi besok ada di Audacity atau DAW browser seperti BandLab.' },
        { q: 'Bedanya dengan menggabungkan audio?', a: 'Penggabung meletakkan file berurutan: satu selesai, berikutnya mulai, dengan crossfade opsional. Halaman ini memutarnya bersamaan. Daftar putar dalam satu file adalah penggabung. Vokal di atas beat adalah halaman ini.' },
        { q: 'Apakah jalan di ponsel?', a: 'Ya. Linimasa digeser ke samping. Level, pan, awal, dan potongan adalah slider dan angka, tanpa seretan yang presisi. Chrome, Edge, Firefox, dan Safari sekarang mendekode format yang umum. File yang tidak bisa didekode dilewati, trek lain tetap ada.' },
        { q: 'Mengapa hanya 8 trek?', a: 'Setiap trek didekode ke memori sebelum diputar. Delapan file stereo sudah banyak untuk tab ponsel. Produksi 16 trek dengan plugin adalah alat lain.' },
      ],
      dropHint: 'Letakkan dua audio atau lebih untuk menumpuknya',
    },
  },
};
