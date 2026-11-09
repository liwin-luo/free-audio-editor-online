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
    fullscreen: 'Layar penuh',
    shareOn: 'Bagikan ke {name}',
    copyLink: 'Salin tautan',
    copied: 'Tersalin',
    about: 'Tentang',
    privacy: 'Privasi',
    status: 'Status',
    guides: 'Panduan',
    rights: 'Tidak ada file yang meninggalkan perangkat Anda.',
    clientSide: 'Pemrosesan 100% di perangkat',
    contact: 'Kontak',
    contactBody: 'Ada pertanyaan tentang alat, koreksi, atau permintaan privasi? Tulis ke {email}. Kami membaca setiap pesan.',
    contactPrivacy: 'Untuk mengetahui cara file dan umpan balik ditangani, lihat {privacy}.',
    privacyPolicyLabel: 'kebijakan privasi',
    cookieBody:
      'Cookie opsional dipakai widget umpan balik dan Microsoft Clarity, yang mencatat cara Anda memakai halaman. Statistik lalu lintas agregat tidak memakai cookie. Situs ini tidak menayangkan iklan.',
    cookieAccept: 'Terima',
    cookieReject: 'Tolak yang tidak perlu',
    cookiePolicy: 'Kebijakan privasi',
    trustMethod: 'Cara kami menguji',
    trustFree: 'Gratis, tanpa daftar',
    trustClean: 'Tanpa watermark',
    trustOffline: 'Offline setelah dimuat',
    faqHeading: 'Pertanyaan yang sering diajukan',
    toolFaq: 'Pertanyaan tentang {name}',
    related: 'Alat terkait',
    openTool: 'Buka {name}',
    allTools: 'Semua alat audio',
    browseToolkit: 'Lihat seluruh rangkaian alat',
    home: 'Beranda',
    howTo: 'Cara menggunakan {name}',
    whyUs: 'Kenapa pakai {name}',
    whyPrivacy: 'Privat sejak desain — audio Anda tidak pernah keluar dari tab ini. Tanpa unggah, tanpa akun, tanpa watermark.',
    whyPrecision: 'Presisi hingga 0,01 detik — geser batas, ikuti penggaris, dan dengar persis bagian yang Anda simpan.',
    whyMobile: 'Dibuat untuk ponsel — potong di mana saja; tidak perlu instalasi.',
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
      m4a: 'M4A · AAC',
    },
    categories: {
      cut: 'Potong & Pangkas',
      convert: 'Konversi & Kompres',
      join: 'Gabung & Mix',
      edit: 'Edit & Perbaiki',
      effects: 'Efek Kreatif',
      record: 'Rekam & Analisis',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — hingga sekitar satu jam',
    dropLocal: 'Diproses secara lokal — file Anda tidak pernah meninggalkan tab ini',
    formatsMore: ', dan lainnya',
    etaModel: 'pertama kali mengunduh model, setelahnya kira-kira sepanjang audionya',
    limitTenMin: 'paling lama 10 menit',
    limitThreeMin: 'paling lama 3 menit',
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
    hintTrim: 'Seret kedua ujung untuk mengubah rentang. Putar hanya memutar rentang itu.',
    changeFile: 'Ganti file',
    selectAll: 'Pilih semua',
    playBtn: 'Putar',
    chMono: 'Mono',
    chStereo: 'Stereo',
    chMany: '{n} kanal',
    hintConvert: 'Spasi untuk memutar · tidak ada yang diunggah',
    hintSilence: 'Celah yang lebih panjang dari minimum dipotong saat ekspor. Napas pendek tetap ada.',
    reverse: 'Putar balik',
    normalize: 'Normalisasi puncak',
    speed: 'Kecepatan',
    speedPitch: 'Nada ikut berubah bersama tempo.',
    tempoPitch: 'Nada tetap.',
    pitch: 'Nada',
    pitchLength: 'Durasi tetap sama.',
    bass: 'Bass',
    treble: 'Treble',
    mid: 'Mid',
    eqPresetFlat: 'Datar',
    eqPresetRock: 'Rock',
    eqPresetPop: 'Pop',
    eqPresetHiphop: 'Hip-hop',
    eqPresetClassical: 'Klasik',
    eqPresetVocal: 'Vokal',
    cutoff: 'Cutoff',
    volume: 'Volume',
    gainOriginal: '100% adalah kenyaringan asli.',
    reverb: 'Reverb',
    compress: 'Kompres',
    echoDelay: 'Tunda',
    echoFeedback: 'Ulangan',
    distort: 'Intensitas',
    panDepth: 'Kedalaman',
    panRate: 'Laju',
    circle: 'Putaran',
    metroBpm: 'BPM',
    metroMeter: 'Meter',
    metroBars: 'Birama',
    metroPlay: 'Putar',
    metroStop: 'Stop',
    keyTonic: 'Nada',
    keyMajor: 'mayor',
    keyMinor: 'minor',
    keyUnread: 'Tidak terbaca',
    keyCaveat: 'Irama bebas, ucapan, derau ruangan, dan mayor atau minor relatif dapat tertukar.',
    silenceThreshold: 'Ambang',
    silenceGap: 'Jeda minimum',
    silenceRemove: 'Akan menghapus sekitar {time} senyap',
    silenceKeepFile: 'Tidak ada yang di atas ambang, jadi ekspor menyimpan seluruh berkas',
    voiceHigh: 'Tinggi',
    voiceDeep: 'Rendah',
    voiceRobot: 'Robot',
    voiceRadio: 'Radio',
    voiceGhost: 'Hantu',
    hintVoice: 'Ketuk preset untuk mendengarnya, lalu ekspor. Preset saling mengganti, tidak bertumpuk.',
    tapTempoTap: 'Ketuk',
    tapTempoReset: 'Atur ulang',
    tapTempoHint: 'Ketuk mengikuti irama musik. Angka stabil setelah sekitar empat ketukan; 2,5 d tanpa ketukan memulai dari awal.',
    tapTempoBeats: '{n} ketukan',
    noiseStrength: 'Kekuatan',
    noiseExport: 'Peredaman berjalan saat ekspor. Model 150 KB dimuat sekali.',
    denoiseProgress: 'Menghapus noise… {p} %',
    hintNoise: 'Kekuatan berlaku saat ekspor. Model 150 KB dimuat pada ekspor pertama.',
    loopTimes: 'Pengulangan',
    loopCrossfade: 'Sambungan',
    loopExport: 'Ekspor sekitar {time}',
    loopTooLong: 'Loop ini lebih dari 10 menit. Kurangi pengulangan atau perpendek pilihan.',
    splitParts: 'Bagian',
    splitExport: '{n} file, masing-masing sekitar {time}',
    splitTooShort: 'File ini lebih pendek dari jumlah bagian.',
    crushBits: 'Bit',
    crushHold: 'Tahan',
    crushExport: '{bits} bit, ditahan setiap {hold} sampel',
    monoExport: 'Ekspor menulis satu kanal: rata-rata kanal dalam file.',
    hz432Export: 'Ekspor menurunkan nada 0.32 seminada. Durasi tetap.',
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
    saveSelected: 'Simpan yang dipilih · {time}',
    saveWithoutSelection: 'Simpan tanpa pilihan · {time}',
    fineTune: 'Penyesuaian halus',
    boundaryStart: 'Awal',
    boundaryEnd: 'Akhir',
    loop: 'Ulangi',
    outputLine: 'Keluaran {time} · ≈{size}',
    errorDecodeTitle: 'File ini tidak dapat didekode',
    errorDecodeHow: 'Coba file MP3, WAV, atau M4A, atau konversi dulu, lalu letakkan di sini lagi.',
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
    batchProgress: '{current} dari {total}',
    batchSkipped: '{n} dilewati',
    tgShared: 'Artis, album, tahun, genre, dan sampul berlaku untuk setiap file. Judul dan nomor lagu tetap di tiap baris.',
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
    midiCaveat: 'Satu instrumen paling stabil. Mix penuh, drum, atau akor padat keluar salah.',
    midiNotes: 'Not: {count}',
    midiNone: 'Tidak ada not. Drum, derau, atau mix penuh sering kosong.',
    midiTooLong: 'File ini lebih dari 3 menit. Potong di pemotong audio, lalu kembali.',
    midiWorking: 'Membaca not… {percent}%',
    midiFirstRun: 'Model not diunduh sekali dari situs ini, di bawah 1 MB, dan browser menyimpannya.',
    midiFail: 'Not tidak terbaca. Coba file yang lebih pendek, satu instrumen, atau browser terbaru.',
    midiMore: '{shown} pertama dari {count}.',
    midiDownload: 'Unduh MIDI',
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
    sbUpload: "Unggah audio",
    sbStopAll: "Hentikan semua",
    sbExportBoard: "Ekspor papan",
    sbImportBoard: "Impor papan",
    sbFullscreen: "Layar penuh",
    sbExitFs: "Keluar layar penuh",
    sbTemplates: "Prasetel",
    tplGeneral: "Umum",
    tplStream: "Streaming · Game",
    tplPodcast: "Podcast",
    tplClass: "Kelas · Presentasi",
    tplBlank: "Kosong",
    tplConfirm: "Ganti papan?",
    sbName: "Nama",
    sbColor: "Warna",
    sbPreview: "Putar ulang pilihan",
    sbStopPreview: "Hentikan pratinjau",
    sbUseAll: "Pakai seluruh klip",
    sbApplyTrim: "Terapkan potongan",
    sbTrimmed: "Dipotong menjadi {sec} dtk.",
    sbExportWav: "Ekspor WAV",
    sbReplace: "Ganti audio",
    sbReplaced: "Audio \"{name}\" sudah diganti.",
    sbDelete: "Hapus",
    sbConfirmDelete: "Hapus suara ini?",
    sbAddSound: "Tambah suara",
    sbEmpty: "Papan masih kosong——unggah audio atau rekam, atau mulai dari prasetel di atas.",
    sbKeyHint: "Pintasan mengikuti urutan papan: 1–9, 0, lalu Q W E R T Y U I O P · Esc menghentikan semua · ikon pensil untuk mengedit",
    sbRecAdded: "Rekaman ditambahkan ke papan.",
    sbImported: "{n} suara diimpor.",
    sbImportNone: "Tidak ada audio yang bisa diputar di file itu.",
    sbImportBad: "Itu bukan file JSON soundboard.",
    sbExported: "Papan diekspor——{n} suara.",
    sbPlayAria: "Putar {name}",
    sbEditAria: "Edit {name}",
    sbTooLong: "Klip lebih dari 60 detik tidak masuk papan——potong filenya dulu.",
    mvPlay: "Putar",
    mvPause: "Jeda",
    mvStyle: "Gaya",
    mvStyleBars: "Batang spektrum",
    mvStyleMirrored: "Batang cermin",
    mvStyleRing: "Cincin",
    mvStyleScope: "Osiloskop",
    mvTheme: "Tema",
    mvThemeNeon: "Neon",
    mvThemeSynthwave: "Synthwave",
    mvThemeFire: "Api",
    mvThemeOcean: "Samudra",
    mvThemeMatrix: "Matrix",
    mvThemeMidnight: "Tengah malam",
    mvThemePaper: "Kertas",
    mvPrimary: "Warna batang",
    mvSizeLandscape: "Lanskap 16:9",
    mvSizePortrait: "Potret 9:16",
    mvRecording: "Merekam {t} / {total}——biarkan tab ini di depan",
    mvCancel: "Batalkan perekaman",
    mvCancelled: "Rekaman dibuang.",
    mvSaved: "Video tersimpan——cek unduhan Anda.",
    mvFail: "Perekaman gagal. Coba ukuran yang lebih kecil.",
    mvNoRecord: "Browser ini tidak bisa merekam kanvas sebagai video; pemutarannya tetap jalan. Untuk menyimpan animasinya di sini, pakai perekam layar.",
    mvRealtime: "Rekaman berjalan real-time: lagu 3 menit butuh 3 menit.",
  },
  home: {
    title: 'Alat Edit Audio Online Gratis — Potong, Gabung, Konversi',
    description:
      'Alat edit audio online gratis: pangkas, potong, gabung, putar balik, dan konversi audio di browser. Tanpa daftar, tanpa unggah — file tetap di perangkat.',
    appBlurb: 'Alat edit audio online gratis — potong, pangkas, gabung, dan edit audio di browser Anda.',
    badge: 'Pemrosesan 100% lokal · tidak ada yang diunggah',
    h1: 'Alat audio online gratis',
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
      {
        title: 'Offline setelah dimuat',
        body: 'Halaman harus terbuka sekali. Setelah itu, memotong dan mengekspor tetap jalan kalau koneksi putus.',
      },
    ],
    toolsHeading: 'Alat audio populer',
    allToolsCta: 'Lihat semua {count} alat',
    toolsCount: '{count} alat',
    mostUsed: 'Paling sering dipakai',
    comingTitle: 'Yang akan datang',
    comingBody: 'Mixer crossfade, penghapus keheningan, dan lainnya — dengan pendekatan yang sama: privasi diutamakan.',
    useCasesHeading: 'Apa yang akan Anda sunting hari ini?',
    useCases: [
      { title: 'Podcast', body: 'Rekam episode, potong bagian kasarnya, sambungkan segmen, dan dapatkan transkripsi untuk catatan acara Anda.', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
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
      convert: 'Konversi MP3, WAV, M4A, OGG, dan Opus, ekstrak audio dari video, atau kecilkan bitrate file — semuanya di perangkat Anda.',
      join: 'Urutkan trek, beri crossfade, ulangi satu bagian, atau tumpuk hingga delapan file di satu timeline. Tidak ada yang diunggah.',
      edit: 'Naikkan atau ratakan volume, normalisasi peak, hapus hening, edit tag, dan bentuk nada dengan EQ, filter, dan fade.',
      effects: 'Balik, percepat, perlambat, ubah nada, tambah reverb, echo, distorsi, atau pan 8D, dan ubah suara menjadi gambar.',
      record: 'Rekam dari mikrofon, transkripsi audio, ikuti tempo dengan metronom, atau baca key dan BPM sebuah trek.',
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
      'Free Audio Editor adalah rangkaian alat audio berprivasi yang berjalan sepenuhnya di browser Anda — tanpa unggah, tanpa daftar, tanpa watermark.',
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
    updated: 'Terakhir diperbarui: 21 Oktober 2026',
    sections: [
      {
        h: 'File audio Anda',
        body: 'Setiap alat di situs ini memproses audio sepenuhnya di dalam browser Anda dengan Web Audio API. File Anda {em} — tidak ada endpoint untuk mengunggah. Saat Anda menutup tab, audio yang sudah didekode hilang dari memori.',
        em: 'tidak pernah diunggah ke server kami',
      },
      {
        h: 'Apa yang kami simpan',
        body: 'Kami tidak membuat akun atau profil untuk Anda. Situs ini tidak memiliki akun dan tidak meminta alamat email. Preferensi tema (terang atau gelap) dan pilihan cookie Anda disimpan di localStorage browser Anda dan tidak pernah meninggalkan perangkat.',
      },
      {
        h: 'Pihak ketiga',
        body: 'Encoder MP3 (lamejs) ikut terpasang bersama situs ini dan hanya dimuat saat Anda mengekspor MP3. Encoder itu tidak diunduh dari jaringan pihak ketiga, dan tidak menerima audio Anda. Font disajikan dari domain situs ini sendiri.',
      },
      {
        h: 'Analitik dan iklan',
        body: 'Kami mengukur lalu lintas secara keseluruhan dengan Vercel Web Analytics. Layanan itu tidak memakai cookie dan hanya mencatat tampilan halaman secara agregat — bukan identitas Anda, dan bukan audio Anda. Jika Anda menerima cookie opsional, situs juga memuat Microsoft Clarity. Clarity mencatat klik, gulir, dan rekaman sesi, supaya kami melihat alat mana yang sulit dipakai. Jika Anda menolak, Clarity tidak dimuat. Audio Anda tidak dikirim ke Clarity. Kami tidak menayangkan iklan.',
      },
      {
        h: 'Widget umpan balik',
        body: 'Jika Anda menerima cookie opsional, situs memuat Userback, layanan umpan balik pihak ketiga, hanya setelah interaksi pertama atau setelah delapan detik. Jika Anda menolak, Userback tidak dimuat. Tidak ada yang dikirim sampai Anda menulis dan mengirim pesan. Tulisan Anda, ditambah informasi dasar halaman dan browser, diproses Userback atas nama kami agar kami bisa membacanya dan membalas. File audio tidak pernah terlibat. Lihat kebijakan privasi Userback untuk mengetahui cara data itu ditangani.',
      },
    ],
    contactHeading: 'Kontak',
    contactBefore: 'Ada pertanyaan tentang kebijakan ini? Tulis ke {email}.',
  },
  tools: {
    'audio-to-text': {
      cardLine: 'Transkripsi wawancara dan memo suara jadi teks atau subtitle SRT, di perangkat Anda sendiri.',
      name: 'Ubah Audio ke Teks',
      shortName: 'Ubah Audio ke Teks',
      title: 'Ubah Audio ke Teks Online Gratis — TXT & SRT',
      description:
        'Ubah audio menjadi teks di browser — MP3, WAV, M4A dan video, 90+ bahasa dengan deteksi otomatis, ekspor TXT atau SRT. Gratis, tanpa daftar, tanpa unggah.',
      h1: 'Ubah Audio ke Teks — Ubah rekaman menjadi teks',
      heroAlt: 'Jadikan catatan suara atau wawancara menjadi tulisan yang bisa disalin',
      subtitle: 'Ubah rekaman menjadi teks dalam 90+ bahasa, dengan penanda waktu — langsung di browser Anda.',
      intro:
        'Letakkan rekaman dan ambil kata-katanya: memo suara, wawancara, kuliah, podcast — dalam sekitar 90 bahasa, terdeteksi otomatis saat Anda tidak yakin bahasanya. Model AI Whisper berjalan di dalam tab browser Anda, di perangkat Anda sendiri, jadi audio tidak pernah diunggah, dan hasilnya berupa teks yang bisa disunting atau file SRT dengan penanda waktu.',
      usesHeading: 'Situasi penggunaan umum konversi audio ke teks',
      uses: [
        'Catatan kuliah: ubah kuliah menjadi teks yang bisa dicari dan dikutip.',
        'Notulen rapat: ubah rekaman rapat jadi teks sekali klik, lalu rapikan poin-poinnya.',
        'Subtitle video: ekspor SRT berstempel waktu, langsung pakai sebagai subtitle.',
        'Perapian wawancara: transkrip wawancara dulu, baru tulis artikelnya.',
        'Show notes podcast: keluarkan teks lengkap dan pilih kutipan terbaik untuk show notes.',
        'Versi teks aksesibel: lengkapi konten audio dengan teks agar menjangkau lebih banyak pembaca.',
      ],
      why: [
        {
          icon: 'voice',
          title: 'Transkripsi Whisper lokal',
          text: 'Model Whisper berjalan di browsermu: audio tidak diunggah, tersedia sekitar tiga puluh bahasa.',
        },
        {
          icon: 'file',
          title: 'Dua format, TXT dan SRT',
          text: 'TXT polos untuk catatan, SRT berstempel waktu langsung jadi subtitle.',
        },
      ],
      howTo: [
        {
          name: 'Letakkan file',
          text: 'Tambahkan MP3, WAV, M4A, file video, atau rekaman lain. Dekode terjadi di perangkat Anda dan tidak diunggah. Beberapa rekaman memakai bahasa dan model yang Anda pilih berikutnya. Masing-masing tetap sekitar 10 menit. Satu transkrip tinggal di kotak. Dua atau lebih kembali sebagai ZIP berisi TXT dan SRT.',
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
        { q: 'Bisakah saya mentranskripsi lebih dari satu rekaman?', a: 'Bisa. Beberapa rekaman memakai bahasa dan model yang sama. Mereka berjalan satu per satu di perangkat ini, dan masing-masing tetap sekitar 10 menit. Satu transkrip tinggal di kotak supaya bisa diedit. Dua atau lebih diunduh sebagai ZIP berisi TXT dan SRT. Ponsel kehabisan waktu dan memori lebih dulu.' },
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
          a: 'Beberapa file, satu per satu, masing-masing maksimal 10 menit — potong dulu rekaman yang lebih panjang (pemotong audio sama privatnya). Tidak ada label pembicara: dialog keluar sebagai satu teks tanpa nama. Dan halaman ini bekerja pada file, bukan mikrofon langsung.',
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
      sections: [
        {
          heading: 'Transkrip lokal, bukan teks langsung',
          paragraphs: [
            'Ubah audio ke teks menjalankan model Whisper di browser. Model diunduh sekali dari CDN, lalu berkasnya ditranskripsi di perangkat. Audio tidak diunggah untuk transkrip.',
            'Batasnya sekitar 10 menit. Tidak ada label pembicara. Alat ini tidak mendengarkan mikrofon langsung. Rekam dulu di perekam suara, ekspor, lalu letakkan berkas itu di sini.',
          ],
        },
        {
          heading: 'Model dan bahasa',
          paragraphs: [
            'Halaman mencantumkan tiga puluh kode bahasa. Pilih satu, atau biarkan deteksi aktif:',
          ],
          bullets: [
            'Modelnya onnx-community/whisper-tiny dan onnx-community/whisper-base.',
            'Tanpa WebGPU, halaman dimulai dengan Tiny.',
            'Ukuran yang tertera di layar tidak diukur untuk halaman ini.',
          ],
        },
        {
          heading: 'Apa yang akan salah dari teksnya',
          paragraphs: [
            'Nama, obrolan yang tumpang tindih, dan musik di bawah suara keluar berantakan. Teks tidak menandai siapa yang berbicara. Bersihkan berkas dulu jika ujungnya keheningan panjang: pangkas, atau jalankan penghapus senyap, lalu transkripsi berkas yang lebih pendek.',
            'Anda bisa menyunting kata sebelum mengunduh, sebagai teks biasa atau SRT dengan penanda waktu. Alat ini tidak menerjemahkannya ke bahasa lain.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file audio atau video, atau klik untuk memilih',
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
      usesHeading: 'Situasi umum penggunaan penguat bass',
      uses: [
        'Vokal tipis : memo dan wawancara rekaman ponsel terdengar tipis; tambahkan sedikit bobot.',
        'Dengar lewat earphone : earphone yang kurang dalam di frekuensi rendah? Naikkan dulu bass lagunya.',
        'Musik video : musik latar kurang berat di frekuensi rendah; tebalkan sebelum dimasukkan ke video.',
        'Pemanasan musik dansa : buat kick musik elektronik lebih menghantam.',
        'Restorasi rekaman lama : rekaman tua kehilangan frekuensi rendahnya; kembalikan sebagian.',
        'Penyeragaman massal : dorong bass beberapa file di level yang sama dan ekspor sekaligus.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Dorongan bebas 0 hingga +15 dB',
          text: 'Slider bass bisa diatur penuh : sekitar +8 dB bobotnya sudah terasa jelas, terlalu jauh jadi lumpur — tentukan sambil mendengarkan.',
        },
        {
          icon: 'layers',
          title: 'Setelan sama untuk semua',
          text: 'Banyak file memakai setelan bass yang sama, diproses satu per satu lalu diekspor terbungkus ZIP.',
        },
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
        {
          name: 'Ambil file kamu',
          text: 'Beberapa file memakai pengaturan yang sama dan diekspor bersamaan dalam satu ZIP.',
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
      screenshotsAlt: [
        'Penguat bass: area jatuhkan, tidak ada yang dikirim ke server',
        'Penguat bass: area kerja dengan berkas yang sudah dimuat',
        'Penguat bass: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Apa yang sebenarnya dinaikkan kontrol bass',
          paragraphs: [
            'Ini filter low-shelf. Filter ini menaikkan frekuensi di bawah 150 Hz sebesar jumlah yang Anda atur, hingga +15 dB. Mid dan treble tetap di tempatnya. Ini bukan kenop volume.',
            'Shelf hanya bisa memperkuat bass yang sudah ada di berkas. Rekaman suara lewat ponsel punya sangat sedikit energi di bawah 80 Hz, jadi penguatan besar tidak akan menghasilkan sub drop. Nilai hasilnya dengan headphone atau speaker sungguhan. Speaker ponsel tidak bisa memutar rentang itu, jadi penguatan berat bisa terdengar seperti tidak ada apa-apa, atau seperti lumpur.',
          ],
        },
        {
          heading: 'Berapa banyak bass yang ditambahkan',
          paragraphs: [
            'Rentang bergunanya kecil. Lewat dari itu, Anda sedang membuat efek.',
          ],
          bullets: [
            '+3 sampai +6 dB: memo suara tipis, wawancara, dan trek yang seluruhnya midrange.',
            '+6 sampai +9 dB: drum dan bass yang perlu menonjol. Pastikan suara masih menembus.',
            '+9 sampai +15 dB: efek ujung rendah yang disengaja. Ucapan sering menjadi sulit diikuti di sini.',
            'Jika ujung rendahnya berderak, shelf sudah kehabisan headroom. Mundurkan penggesernya.',
          ],
        },
        {
          heading: 'Bass boost, volume boost, dan equalizer',
          paragraphs: [
            'Pilih halaman yang cocok dengan masalahnya.',
          ],
          bullets: [
            'Penguat bass, halaman ini: hanya ujung rendah di bawah 150 Hz. Berkas terdengar tipis, bukan pelan.',
            'Volume booster: seluruh berkas, hingga 4×, dengan limiter. Berkas pelan di setiap frekuensi.',
            'Equalizer: bass, mid, dan treble sebagai shelf terpisah. Gunakan saat 150 Hz adalah cutoff yang salah.',
          ],
        },
        {
          heading: 'Di mana bass boost salah arah',
          paragraphs: [
            'Bass berat menutupi ucapan. Pratinjau pada level mendengar normal, bukan dengan speaker yang sudah dikecilkan, atau Anda akan menyimpan sesuatu yang berdengung di mobil dan menenggelamkan suara.',
            'Ekspor WAV jika Anda akan terus mengedit. MP3 320 kbps adalah pilihan tepat saat berkasnya sudah jadi. Filter ini tidak melakukan resampling atau mengubah nada. Jika penguatan akan mendorong puncak melewati skala penuh, limiter melembutkan puncak itu agar ekspornya tidak terpotong keras.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
      exportLabel: 'Naikkan bass',
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
      usesHeading: 'Situasi umum penggunaan penguat treble',
      uses: [
        'Menyelamatkan rekaman kusam : video yang terdengar seperti direkam di bawah selimut — buka frekuensi tingginya.',
        'Mencerahkan lagu lama : rekaman tua kehilangan frekuensi tinggi, kembalikan sedikit kualitas udaranya.',
        'Kejelasan suara : rekaman panggilan kekurangan frekuensi tinggi; setelah dicerahkan, artikulasi lebih jelas.',
        'Pasangan headphone : kalau treble jadi kusam setelah bass dinaikkan, cerahkan secara seimbang.',
        'Mendengar detail : untuk mendengar simbal dan tarikan napas dengan jelas, naikkan sedikit frekuensi tinggi.',
        'Pencerahan massal : terapkan setelan treble yang sama ke banyak file dan ekspor sekaligus.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Dorongan bebas 0 hingga +15 dB',
          text: 'Slider frekuensi tinggi bisa diatur penuh : kalau berlebihan, bunyi s dan sh jadi kasar — naikkan bertahap sambil mendengarkan.',
        },
        {
          icon: 'layers',
          title: 'Setelan sama untuk semua',
          text: 'Banyak file memakai setelan treble yang sama, diproses satu per satu lalu diekspor terbungkus ZIP.',
        },
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
        {
          name: 'Ambil file-mu',
          text: 'Beberapa file memakai pengaturan yang sama dan diekspor bersamaan dalam ZIP.',
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
      screenshotsAlt: [
        'Penguat treble: area jatuhkan, tidak ada yang dikirim ke server',
        'Penguat treble: area kerja dengan berkas yang sudah dimuat',
        'Penguat treble: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'High shelf di atas 3 kHz',
          paragraphs: [
            'Penguat treble adalah filter high-shelf, hingga +15 dB di atas 3 kHz. Filter ini memperkuat nada tinggi yang sudah ada di berkas. Filter ini tidak menciptakan detail yang dibuang enkode bitrate rendah.',
            'Limiter menangkap puncak agar penguatan besar tidak terpotong keras. Penguatan itu juga mengangkat desis dan sibilance yang sudah ada di berkas.',
          ],
        },
        {
          heading: 'Sejauh mana mendorongnya',
          paragraphs: [
            'Dengarkan sekali dengan headphone sebelum ekspor:',
          ],
          bullets: [
            '+3 sampai +6 dB membuka sebagian besar rekaman tumpul.',
            'Di atas +9 dB, bunyi s, sy, dan t bisa menjadi menusuk.',
            'Jika berkas dienkode pada bitrate rendah, tidak ada shelf yang mengembalikan nada tinggi yang hilang.',
          ],
        },
        {
          heading: 'Treble, bass, dan equalizer',
          paragraphs: [
            'Penguat bass mengangkat di bawah 150 Hz. Halaman ini mengangkat di atas 3 kHz. Tumpul dan teredam mengarah ke sini. Tipis dan kecil mengarah ke bass.',
            'Equalizer adalah tiga wilayah yang sama dengan potong dan angkat: low shelf di 150 Hz, peak di 1 kHz, dan high shelf ini di 3 kHz. Gunakan booster saat Anda sudah tahu hanya ingin lebih banyak treble.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
      exportLabel: 'Naikkan treble',
    },
    'equalizer': {
      cardLine: 'Bentuk lows, mids, dan highs dengan EQ tiga tombol ±15 dB yang lugas.',
      name: 'Equalizer audio',
      shortName: 'Equalizer',
      title: 'Equalizer audio — EQ 10 band online gratis',
      description:
      'Sepuluh band EQ dari 31 Hz sampai 16 kHz, ±15 dB per band, dengan preset genre. Di browser, ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Equalizer audio online gratis — Atur bass, mid, dan treble',
      heroAlt: 'Bentuk warna suara sebuah lagu atau rekaman suara',
      subtitle: 'Sepuluh band ±15 dB, preset satu klik — tetap EQ yang jujur.',
      intro:
        'Tiga knob mencakup hampir semua fungsi EQ: nada rendah di bawah 150 Hz, nada tengah di sekitar 1 kHz tempat suara bicara hidup, dan nada tinggi di atas 3 kHz. Equalizer ini memakai band filter asli — low shelf, peaking, high shelf — masing-masing ±15 dB, untuk menipukan dengung, menurunkan kekacauan, atau menambah keterbukaan. Muat berkas, bentuk suaranya, lalu ekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Situasi umum penggunaan EQ audio',
      uses: [
        'Menghilangkan kekerasan : turunkan frekuensi tengah −3 hingga −6 dB, vokal yang menumpuk langsung lega.',
        'Menghilangkan kebosanan : naikkan pita 8k–16k, rekaman yang seperti diselimuti kembali cerah.',
        'Menghilangkan dengung : kecilkan sedikit pita 60–125 Hz, mix yang berat di frekuensi rendah jadi bersih.',
        'Mencerahkan vokal : dorongan tipis di pita 2k–4k membuat artikulasi lebih jelas.',
        'Preset gaya : rock/pop/hip-hop/klasik/vokal, satu klik untuk memulai.',
        'Menyeimbangkan kanal kiri-kanan : atur satu set per kanal, ekspor terpisah.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Sepuluh pita, masing-masing urus bagiannya',
          text: 'Sepuluh pita peaking di 31, 62, 125, 250, 500, 1k, 2k, 4k, 8k, 16k, tiap pita ±15 dB — perbaikan per pita, bukan sekadar bass-treble global.',
        },
        {
          icon: 'check',
          title: 'Preset untuk memulai',
          text: 'Enam preset : flat/rock/pop/hip-hop/klasik/vokal. Dekati dulu, lalu haluskan.',
        },
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
        {
          name: 'Ekspor',
          text: 'Klik "Terapkan EQ" untuk mengunduh, dalam MP3 atau WAV lossless.',
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
      screenshotsAlt: [
        'Equalizer audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Equalizer audio: area kerja dengan berkas yang sudah dimuat',
        'Equalizer audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Sepuluh band, potong atau angkat',
          paragraphs: [
            'Band-nya adalah filter peaking berjarak satu oktaf dari 31 Hz sampai 16 kHz. Masing-masing berjalan sekitar ±15 dB. Band yang dibiarkan di 0 dB di-bypass, jadi tidak mewarnai suara.',
            'Memotong adalah langkah yang lebih aman. Potongan −4 dB di band berlumpur sering lebih berguna daripada angkatan +6 dB di tempat lain. Angkatan besar mendorong sinyal ke limiter dan bisa melembutkan puncak.',
          ],
        },
        {
          heading: 'Untuk apa rentangnya',
          paragraphs: [
            'Band oktaf ini berkumpul menjadi tiga wilayah biasa, bukan EQ bedah:',
          ],
          bullets: [
            '31–250 Hz: bobot dan lumpur. Potong jika berkasnya berdengung. Penguat bass hanya mengangkat wilayah ini, hingga +15 dB, dan tidak bisa memotong.',
            '500 Hz–2 kHz: kehadiran. Memotong di sini membuat suara terdengar jauh.',
            '4–16 kHz: udara dan ketajaman. Penguat treble hanya mengangkat di atas 3 kHz.',
          ],
        },
        {
          heading: 'Kapan satu booster cukup',
          paragraphs: [
            'Jika Anda sudah tahu hanya ingin lebih banyak bass atau treble, penguat bass dan penguat treble adalah halaman yang lebih singkat. Keduanya tidak memotong.',
            'Filter low-pass atau high-pass adalah sapuan cutoff, bukan shelf ini. Gunakan filter saat Anda ingin semua di atas atau di bawah frekuensi tertentu hilang, bukan beberapa desibel digeser.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
      exportLabel: 'Terapkan equalizer',
    },
    'low-pass-filter': {
      cardLine: 'Simpan hanya kehangatan di bawah cutoff — pas untuk tekstur lo-fi dan mute.',
      name: 'Filter low-pass',
      shortName: 'Low-pass',
      title: 'Filter low-pass — Hilangkan noise nada tinggi',
      description:
        'Potong desis, kekasaran, dan noise nada tinggi dengan filter low-pass asli, cutoff 300 Hz–20 kHz, di browser. Ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Filter low-pass online gratis — Potong frekuensi tinggi di audio',
      heroAlt: 'Lunakkan tinggi yang tajam di sebuah rekaman',
      subtitle: 'Geser cutoff dari 20 kHz turun ke 300 Hz dan simpan hanya frekuensi yang Anda mau.',
      intro:
        'Filter low-pass menyimpan frekuensi rendah dan meredam semuanya di atas cutoff — cara jujur menghilangkan desis, sibilan tajam, cicitan, dan tepi digital yang kasar. Berbeda dari penghapus noise, ia tidak pernah menebak mana noise: semua di atas cutoff Anda hilang begitu saja. Muat berkas, geser cutoff ke bawah sampai gangguannya lenyap, lalu ekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Situasi umum penggunaan low-pass filter',
      uses: [
        'Menghilangkan desis : desis terus-menerus dan dengung AC pada rekaman vokal dipotong sekaligus.',
        'Menyalin kaset lama : tekan dengung frekuensi tinggi pada kaset tua.',
        'Melembutkan musik latar : musik pendukung terlalu terang dan merebut perhatian vokal — potong frekuensi tinggi yang tajam.',
        'Efek suara telepon lawas : ingin nuansa interkom sempit? Sempitkan frekuensi tingginya.',
        'Menyiapkan jalur noise reduction : noise frekuensi tinggi yang murni tonal ditangani dulu dengan low-pass.',
        'Penglembutan massal : banyak file dengan cutoff yang sama, diekspor bersama.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Frekuensi cutoff bisa diatur',
          text: 'Bebas diatur 300 Hz–20 kHz : desis terkumpul di frekuensi tinggi; berhenti di titik saat konsonan mulai terdengar gelap.',
        },
        {
          icon: 'layers',
          title: 'Cutoff sama untuk semua',
          text: 'Banyak file memakai frekuensi cutoff yang sama, diproses satu per satu dan diekspor terbungkus ZIP.',
        },
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
        {
          name: 'Pratinjau dan ekspor',
          text: 'Pratinjau untuk memastikan frekuensi tinggi terdengar bersih, lalu ekspor sebagai MP3 atau WAV lossless.',
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
      screenshotsAlt: [
        'Filter low-pass: area jatuhkan, tidak ada yang dikirim ke server',
        'Filter low-pass: area kerja dengan berkas yang sudah dimuat',
        'Filter low-pass: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Semua di atas cutoff hilang',
          paragraphs: [
            'Filter low-pass meredam apa pun di atas cutoff. Ini bukan penghapus noise. Ini tidak memisahkan desis dari sinyal. Ini menurunkan setiap frekuensi melewati titik yang Anda atur, termasuk konsonan dan simbal jika Anda mengaturnya terlalu rendah.',
            'Tidak ada resampling dan tidak ada perubahan nada. Ekspornya tetap mengenkode sekali: MP3, atau WAV jika Anda ingin audio tersaring tanpa generasi lossy lain.',
          ],
        },
        {
          heading: 'Cutoff yang cocok untuk pekerjaannya',
          paragraphs: [
            'Angkanya titik awal. Dengarkan, karena cutoff yang sama membuat satu berkas teredam dan hanya melembutkan berkas lain:',
          ],
          bullets: [
            'Suara: coba 8–12 kHz dulu. Di bawah sekitar 5 kHz ucapan terdengar teredam. Di bawah 2 kHz terdengar seperti telepon.',
            'Efek musik lo-fi lembut: 4–8 kHz.',
            'Simbal tajam yang hanya ingin dijinakkan: 12–16 kHz. Di bawah 3 kHz musik terdengar jelas tumpul.',
          ],
        },
        {
          heading: 'High-pass adalah arah sebaliknya',
          paragraphs: [
            'Filter high-pass menghapus gemuruh dan boom ujung rendah di bawah cutoff-nya. Halaman ini menghapus desis dan kekasaran di atas cutoff-nya. Memakai keduanya menyisakan pita di tengah.',
            'Beberapa desibel treble, alih-alih menghapus ujung atas sepenuhnya, ada di penguat treble atau equalizer. Shelf itu tidak menyapu cutoff keras.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
      exportLabel: 'Terapkan low pass',
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
      usesHeading: 'Situasi umum penggunaan high-pass filter',
      uses: [
        'Membersihkan vokal : buang dengung jalan raya dan ketukan meja dari rekaman podcast dan vokal.',
        'Video ponsel : derau frekuensi rendah akibat genggaman tangan dipotong sekaligus.',
        'Menyiapkan jalur kompresi : setelah frekuensi rendah bersih, kompresor tak lagi dipicu dengung.',
        'Rekaman pidato : tekan dengung frekuensi rendah dari AC dan keramaian ruangan.',
        'Membuang kekerasan musik : saat mix terasa keruh, potong frekuensi sub-bass yang tak berguna.',
        'Pembersihan massal : banyak file dengan cutoff yang sama, diekspor bersama.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Frekuensi cutoff bisa diatur',
          text: 'Bebas diatur 20 Hz–5 kHz : untuk vokal biasanya cukup mulai 80–120 Hz; memotong terlalu tinggi menghilangkan kehangatan dada suara.',
        },
        {
          icon: 'layers',
          title: 'Cutoff sama untuk semua',
          text: 'Banyak file memakai frekuensi cutoff yang sama, diproses satu per satu dan diekspor terbungkus ZIP.',
        },
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
        {
          name: 'Pratinjau dan ekspor',
          text: 'Pratinjau untuk memastikan frekuensi rendah bersih dan vokal tetap utuh, lalu ekspor sebagai MP3 atau WAV lossless.',
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
      screenshotsAlt: [
        'Filter high-pass: area jatuhkan, tidak ada yang dikirim ke server',
        'Filter high-pass: area kerja dengan berkas yang sudah dimuat',
        'Filter high-pass: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Semua di bawah cutoff hilang',
          paragraphs: [
            'Filter high-pass meredam apa pun di bawah cutoff: gemuruh, angin, benturan pegangan, dan ujung rendah ruangan yang berdengung. Ini tidak mengubah nada, dan tidak melakukan resampling.',
            'Dengung listrik berada di 50 atau 60 Hz, dengan harmonik di atasnya. High pass sekitar 80–120 Hz menghapus fundamental dan sebagian besar deringnya. Harmonik yang membandel tetap ada. Pasangkan dengan filter low-pass jika perlu mempersempit pita lebih jauh.',
          ],
        },
        {
          heading: 'Seberapa tinggi sebelum suara menjadi tipis',
          paragraphs: [
            'Ucapan punya tubuh di mid rendah. Dorong cutoff terlalu jauh dan suara menjadi tipis:',
          ],
          bullets: [
            'Suara pria mempertahankan tubuhnya sampai sekitar 100 Hz.',
            'Suara wanita sampai sekitar 150–200 Hz.',
            'Lewat 300 Hz, ucapan mulai terdengar seperti telepon. Itu bisa jadi gaya, jadi dengarkan sebelum ekspor.',
          ],
        },
        {
          heading: 'Bukan penguat bass, dan bukan shelf potong',
          paragraphs: [
            'Penguat bass menambah level di bawah 150 Hz. Halaman ini menghapus level di bawah cutoff yang Anda sapu. Keduanya menyelesaikan masalah yang berlawanan.',
            'Equalizer bisa memotong beberapa desibel di 150 Hz dan membiarkan sisa ujung rendah. Gunakan itu saat berkas agak berlumpur dan Anda masih ingin bobotnya. Gunakan halaman ini saat gemuruhnya harus hilang.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
      exportLabel: 'Terapkan high pass',
    },
    'fade-audio': {
      cardLine: 'Haluskan akhir lagu dan intro podcast dengan waktu fade yang presisi.',
      name: 'Fade in / fade out audio',
      shortName: 'Fade',
      title: 'Fade in / fade out audio — online gratis',
      description:
        'Tambahkan fade in dan fade out halus ke lagu atau rekaman langsung di browser. Atur panjangnya hingga 0,1 detik, ekspor MP3 atau WAV. Gratis, tanpa unggah.',
      h1: 'Fade in / fade out audio — Padamkan musik secara perlahan',
      heroAlt: 'Buat fade in pada sebuah lagu, lalu fade out',
      subtitle: 'Tepi yang halus dalam hitungan detik: atur kedua fade sampai 0,1 detik, dengar, lalu ekspor. Tidak ada yang meninggalkan perangkat Anda.',
      intro:
        'Fade in membiarkan lagu tumbuh dari hening; fade out menutupnya dengan lembut — di situlah bedanya potongan kasar dengan akhir yang rapi. Muat berkas, atur panjang tiap fade sampai 0,1 detik, dan dengar sebelum mengekspor. Semuanya berjalan di browser Anda: berkas tidak pernah diunggah.',
      usesHeading: 'Situasi umum penggunaan fade audio',
      uses: [
        'Penutup kompilasi : akhir medley atau kompilasi memudar agar berhenti dengan rapi.',
        'Awal podcast yang naik pelan : pembukaan merambat masuk, kalimat pertama tidak mengagetkan pendengar.',
        'Musik video : musik memudar bersama gambar tanpa mencuri perhatian.',
        'Kedua ujung nada dering : fade pendek di tiap ujung membuat perulangan terasa alami.',
        'Rekaman live : gemuruh pembuka dan penutup dilewati dengan fade.',
        'Audio ceramah : batuk dan derau di awal-akhir ditutupi dengan fade.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Kedua ujung diatur terpisah',
          text: 'Fade in dan fade out masing-masing 0–5 detik, langkah 0,1 detik — hanya butuh fade out? Atur fade out-nya saja.',
        },
        {
          icon: 'lock-simple',
          title: 'Diproses lokal',
          text: 'Fade dikerjakan di peramban, audio tidak diunggah.',
        },
      ],
      howTo: [
        {
          name: 'Muat audio Anda',
          text: 'MP3, WAV, M4A, OGG, atau FLAC — semuanya bisa. Pemrosesan tetap di perangkat Anda.',
        },
        {
          name: 'Atur panjang fade',
          text: 'Tetapkan fade in serta fade out di halaman — 1–3 detik alami untuk lagu, 0,2–0,5 untuk loop.',
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
          a: 'Tidak di sini — halaman ini memberi fade in dan out pada satu berkas. Mencampur akhir satu lagu ke awal lagu lain adalah crossfade, dan itu tugas penggabung audio. Mengulang satu klip yang sama dengan crossfade pendek di setiap sambungan adalah pengulang audio.',
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
      {
        q: 'Bisakah Anda memberi fade pada berkas lokal dari Claude atau Cursor?',
        a: 'Halaman ini memberi fade pada satu berkas di browser, dari 0 sampai 5 detik, langkah 0.1. /mcp memakai afade ffmpeg dari 0 sampai 30 detik di tiap ujung. MP3 dikodekan sekali. Aplikasi chat tetap melihat jalur berkas.',
      }],
      screenshotsAlt: [
        'Fade in / fade out audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Fade in / fade out audio: area kerja dengan berkas yang sudah dimuat',
        'Fade in / fade out audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Ujungnya menjadi pelan, tengahnya tetap',
          paragraphs: [
            'Fade audio membentuk volume sepanjang waktu pada satu berkas: fade in di awal, fade out di akhir, atau keduanya. Bagian tengah tidak disentuh. Tidak ada reverb dan tidak ada perubahan nada.',
            'Untuk lagu, 1–3 detik biasanya terdengar alami. Rekaman langsung bisa menerima 4–5 detik. Loop dan nada dering ingin 0,2–0,5 detik agar attack-nya tetap. Pratinjau awal dan akhir sebelum ekspor.',
          ],
        },
        {
          heading: 'Untuk apa fade dipakai',
          paragraphs: [
            'Gunakan saat potongannya sudah selesai dan ujungnya berbunyi klik atau berhenti mendadak:',
          ],
          bullets: [
            'Nada dering atau loop yang tidak boleh berbunyi pop saat berulang.',
            'Akhir lagu atau memo suara yang berhenti terlalu keras.',
            'Awal rekaman yang dimulai pada level penuh.',
          ],
        },
        {
          heading: 'Bukan crossfade, dan bukan penguat volume',
          paragraphs: [
            'Mencampur akhir satu trek ke awal trek lain ada di [penggabung audio](/audio-joiner). Halaman ini memberi fade pada satu berkas.',
            '[Volume booster](/volume-booster) mengangkat seluruh berkas dengan jumlah konstan, dari 10% sampai 400%. Fade pelan di ujung dan penuh di tengah. Ekspornya MP3, dimulai dari 320 kbps, atau WAV 16-bit. Berkas yang Anda letakkan tidak diubah.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio atau klik untuk memilih',
      exportLabel: 'Terapkan fade dan unduh',
    },
    'audio-trimmer': {
      cardLine: 'Tarik pegangan untuk menyimpan tepat bagian yang Anda butuhkan — podcast, memo suara, trek apa pun.',
      name: 'Potong Audio',
      shortName: 'Potong Audio',
      title: 'Audio trimmer — potong MP3 online dengan presisi 0,01 s',
      description:
        'Potong MP3, podcast, atau memo suara: seleksi gelombang, nudge 0,01 s, audisi loop, simpan sebagai MP3 atau WAV lossless. Semua lokal, tanpa unggah.',
      h1: 'Potong audio online gratis — Pangkas file audio',
      heroAlt: 'Potong MP3 atau podcast sampai tersisa bagian yang Anda butuhkan',
      subtitle: 'Pangkas audio online — gratis, langsung di browser. Tidak ada yang diunggah.',
      intro:
        'Ambil persis bagian yang dibutuhkan dari lagu, memo suara, podcast, atau rekaman apa pun. Seret di gelombang audio untuk memilih, dengarkan kembali, lalu simpan — pemangkasan seluruhnya terjadi di perangkat Anda, jadi rekaman yang panjang pun tetap privat dan langsung bisa dikerjakan.',
      usesHeading: 'Kasus umum pemangkasan audio',
      uses: [
        'Klip podcast: potong jawaban terbaik dan tinggalkan smooth-nya.',
        'Pemangkasan MP3: ambil refrain atau loop dari lagu utuh, tanpa editor desktop.',
        'Memo suara: persingkat sebelum dikirim, file hanya berisi intisari.',
        'Notulen rapat: potong obrolan pembuka, simpan keputusannya.',
        'Persiapan ringtone: potong bagian yang diinginkan, lalu selesaikan di [pembuat ringtone](/ringtone-maker).',
        'Sample dan loop: pangkas kandidat dan simpan take terbaik.',
      ],
      why: [
        {
          icon: 'zoom-in',
          title: 'Potongan jatuh di 0,01 s',
          text: 'Penggaris waktu mengubah skala saat zoom, kedua tepi digeser dalam langkah 0,01/0,1/1 s, dan seleksi diputar berulang saat menyesuaikan — dengar potongannya sebelum final.',
        },
        {
          icon: 'scissors',
          title: 'Dua pintu, tanpa ganti mode',
          text: '“Simpan seleksi” mempertahankannya, “Simpan tanpa seleksi” menghapusnya — tiap tombol menampilkan durasi hasil dan mengunduh dalam satu klik.',
        },
      ],
      howTo: [
        { name: 'Letakkan file', text: 'Geser file ke bingkai putus-putus, atau klik untuk menelusuri. MP3, WAV, M4A, OGG, FLAC, dan video didekode di perangkat Anda.' },
        { name: 'Tandai yang disimpan', text: 'Tarik seleksi pada gelombang, haluskan kedua tepi dengan langkah 0,01/0,1/1 s, atau ketik waktu mulai dan akhir persis.' },
        { name: 'Audisi loop', text: 'Nyalakan loop untuk mendengar seleksi saja; mengubah tepi memulai lagi dari atas — haluskan dengan telinga. Lalu simpan dengan atau tanpa seleksi.' },
        { name: 'Bawa file', text: '“Pangkas dan unduh” untuk MP3 (128–320 kbps) atau WAV lossless; nama membawa -edited.' },
      ],
      faqs: [
        {
          q: 'Apakah pemangkas audio ini benar-benar gratis?',
          a: 'Ya. Tanpa akun, dan ekspor tanpa watermark. File didekode di browser ini.',
        },
        {
          q: 'Apakah audio Anda diunggah ke server?',
          a: 'Tidak. File didekode di tab ini dengan Web Audio API. Setelah skrip halaman dimuat, dekode dan ekspor WAV tidak butuh jaringan. Ekspor MP3 membutuhkan encoder MP3 yang sudah dimuat sekali.',
        },
        {
          q: 'Format apa yang bisa dipangkas?',
          a: 'Apa pun yang sudah bisa didekode browser ini. Menu simpan menawarkan MP3 64, 96, 128, 192, atau 320 kbps, M4A (AAC) jika browser mendukung, atau WAV 16-bit. MP3 hanya mengodekan dua kanal pertama.',
        },
        {
          q: 'Apakah memangkas menurunkan kualitas audio?',
          a: 'WAV adalah PCM 16-bit dari sampel yang Anda simpan. MP3 mengodekan bagian itu sekali, pada bitrate pilihan. Judul, artis, dan sampul tidak disalin.',
        },
        {
          q: 'Bisakah audio dipangkas di ponsel?',
          a: 'Gelombang menerima seret sentuh. Berkas lebih dari 300 MB ditolak. Berkas lebih dari satu jam tetap terbuka, dan halaman memperingatkan bahwa tab bisa kehabisan memori.',
        },
        {
          q: 'Berapa panjang file yang bisa dipakai?',
          a: 'Lebih dari 300 MB ditolak. Lebih dari satu jam tetap terbuka, dengan peringatan memori. Mengulang bagian yang disimpan 2 sampai 16 kali, hingga 10 menit, adalah [audio looper](/audio-looper).',
        },
        {
          q: 'Bisakah memangkas file lokal dari Claude atau Cursor?',
          a: 'Halaman ini memangkas di browser dengan Web Audio API. Tidak ada yang dipasang. /mcp berjalan di komputer Anda dan memanggil ffmpeg. Berikan awal dan akhir dalam detik. WAV adalah sampel yang didekode. MP3 dikodekan sekali. Aplikasi chat tetap melihat path dan argumennya.',
        },
        {
          q: 'Seberapa presisi potongannya?',
          a: 'Kontrol panah menggeser tiap batas dalam langkah 0,01 s, 0,1 s, dan 1 s, dan kedua waktu bisa diketik manual. Penggaris di bawah gelombang mengikuti zoom, jadi potongan jatuh di tempat yang Anda mau.',
        },
        {
          q: 'Bisakah memangkas layar penuh di ponsel?',
          a: 'Bisa. Ikon perluas di bilah alat membuka editor di seluruh layar, jadi gelombang mendapat seluruh tampilan. Ketuk lagi atau tekan Escape untuk kembali.',
        },
        {
          q: 'Format apa untuk WhatsApp atau email?',
          a: 'MP3 128 atau 192 kbps tetap kecil dan diputar di mana saja. WhatsApp menerima dokumen hingga 2 GB, dan Gmail membatasi pesan 25 MB, jadi potongan yang sudah dipangkas masuk dengan lega.',
        },
        {
          q: 'Kenapa nama file ekspor punya sufiks?',
          a: 'Tiap ekspor menambah tag pendek seperti -edited agar versi mudah dibedakan. Ganti nama file setelah diunduh; audionya tidak berubah.',
        },
      ],
      screenshotsAlt: [
        'Potong Audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Potong Audio: area kerja dengan berkas yang sudah dimuat',
        'Potong Audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Tandai bagian yang ingin Anda simpan',
          paragraphs: [
            'Seret di atas gelombang untuk menandai bagian. Penggaris di bawah trek menunjukkan skala, dan label di tiap batas menunjukkan waktu pastinya. Tekan putar untuk mendengar hanya bagian itu sebelum menyimpan.',
            'Ekspor WAV jika Anda akan memangkas lagi atau lanjut mengedit. Ekspor MP3 saat klip sudah selesai. Pangkas ke WAV menjaga sampel yang dipilih. Pangkas ke MP3 mengodekan sekali, pada bitrate pilihan.',
          ],
        },
        {
          heading: 'Geser potongan hingga seperseratus detik',
          paragraphs: [
            'Grup panah di samping tiap kolom waktu menggeser batas 0,1 s, 0,01 s, atau 1 s per klik. Kedua waktu juga bisa diketik manual.',
            'Putar ulang loop memutar bagian itu terus-menerus. Tiap penyesuaian memulai ulang dari awal, jadi perubahannya langsung terdengar.',
          ],
        },
        {
          heading: 'Potong rekaman, atau potong lagu',
          paragraphs: [
            'Halaman ini untuk rekaman yang perlu dipendekkan: jawaban podcast, memo suara, kuliah, bagian tengah file panjang.',
          ],
          bullets: [
            'Halaman ini dan [pemotong MP3](/mp3-cutter) adalah editor yang sama. Keduanya bisa menyimpan pilihan atau menghapusnya. Halaman pemotong adalah yang ditulis untuk refrain atau intro.',
            'Nada dering, dibatasi 40 detik, dengan M4R hanya saat browser ini bisa mengodekan AAC, adalah [pembuat nada dering](/ringtone-maker). Halaman ini tidak memasangnya ke ponsel.',
            'Fade 0 sampai 5 detik pada satu file adalah [fade audio](/fade-audio). Halaman ini tidak melakukan fade.',
          ],
        },
        {
          heading: 'Apa yang dilakukan pemotongan pada suara',
          paragraphs: [
            'File didekode, bagian diambil, dan ekspor ditulis ulang. WAV adalah PCM 16-bit dari bagian itu. MP3 mengodekannya sekali, pada bitrate pilihan. M4A menyimpan salinan AAC untuk aplikasi Apple saat browser ini bisa mengodekan AAC.',
            'Halaman ini tidak mengubah volume. File yang terlalu pelan, dari 10% hingga 400%, adalah [naikkan volume](/increase-volume).',
          ],
        },
        {
          heading: 'Seberapa panjang berkas yang bisa dipakai',
          paragraphs: [
            'Berkas lebih dari 300 MB ditolak. Berkas lebih dari satu jam tetap terbuka, dan halaman memperingatkan bahwa tab bisa kehabisan memori. Peringatan itu bukan batas durasi.',
          ],
          bullets: [
            'Memo suara atau jawaban podcast: pangkas di sini, di ponsel pun bisa.',
            'Satu episode penuh: komputer adalah tempat yang lebih stabil untuk pratinjau dan ekspor.',
            'Video: yang dipangkas adalah trek suaranya. Gambarnya tidak disimpan.',
          ],
        },
        {
          heading: 'Pilih keluaran sesuai tujuan klip',
          paragraphs: [
            'Tiap tujuan punya prioritas berbeda: aplikasi chat ingin file kecil, email punya batas ukuran, dan edit berikutnya tidak ingin kerugian tambahan.',
          ],
          table: {
            headers: ['Tujuan', 'Pilih', 'Kenapa cocok'],
            rows: [
              ['Aplikasi chat seperti WhatsApp', 'MP3 128 atau 192 kbps', 'File kecil, diputar di mana saja. Dokumen hingga 2 GB diterima, jadi potongan masuk dengan lega.'],
              ['Email', 'MP3 128 kbps', 'Potongan 12 menit sekitar 12 MB, di bawah batas pesan Gmail 25 MB.'],
              ['Aplikasi Apple (GarageBand, iMovie)', 'M4A dengan AAC', 'Masuk ke aplikasi Apple tanpa konversi lagi.'],
              ['Edit lagi di situs ini', 'WAV, lossless', 'Tanpa tahap lossy kedua. Fade dan volume menumpuk tanpa artefak MP3.'],
              ['Video sosial (TikTok, Reels)', 'WAV, lossless', 'Platform tetap mengodekan ulang, jadi serahkan file paling bersih.'],
            ],
          },
          outro: [
            'Batas berubah seiring pembaruan aplikasi. Dicek terhadap halaman bantuan tiap aplikasi pada November 2026.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Pangkas dan unduh',
    },
    'mp3-cutter': {
      cardLine: 'Potong lagu sampai reff, drop, atau klip apa pun tanpa menyandikan ulang.',
      name: 'Potong MP3',
      shortName: 'Potong MP3',
      title: 'Potong MP3 — potong musik MP3 online, simpan atau hapus',
      description:
        'Potong musik MP3 online: simpan refrainnya atau hapus intro-nya. WAV identik per bit, MP3 dikodekan sekali hingga 320 kbps. File di atas 300 MB ditolak.',
      h1: 'Potong MP3 — potong MP3 online gratis',
      heroAlt: 'Potong MP3 online gratis',
      subtitle: 'Potong lagu dan file MP3 online — simpan bagian yang diinginkan, hapus sisanya.',
      intro:
        'Potong lagu sampai tersisa reff-nya, buang intro yang panjang, atau pisahkan bagian yang ingin ditonjolkan — langsung di browser. Pilih apakah bagian yang ditandai dipertahankan atau dihapus, dengarkan hasilnya, lalu simpan MP3 baru dalam hitungan detik.',
      usesHeading: 'Kasus umum pemotongan MP3',
      uses: [
        'Potong refrain: ambil hook dari lagu dan simpan sebagai file tersendiri.',
        'Hapus intro: potong intro panjang dan bacaan iklan di bagian awal.',
        'Persiapan ringtone: potong bagian yang diinginkan, lalu jadikan M4R 40 detik di [pembuat ringtone](/ringtone-maker).',
        'Edit musik: potong cuplikan latihan atau buang bagian yang tidak diinginkan.',
        'Bersihkan episode: hapus bacaan iklan di awal, sisakan episode-nya.',
        'Buat sample: potong WAV kecil dari MP3 yang panjang.',
      ],
      why: [
        {
          icon: 'scissors',
          title: 'Dua pintu, bukan mode',
          text: 'Setelah menandai bagian, dua tombol berdampingan: “{keep}” menyimpannya, “{delete}” menghapusnya — masing-masing menampilkan durasi hasil secara langsung.',
        },
        {
          icon: 'lock-simple',
          title: 'File asli tetap aman',
          text: 'Pemotongan terjadi di memori, tidak ada unggahan. WAV identik per bit dan MP3 dikodekan sekali hingga 320 kbps.',
        },
      ],
      howTo: [
        { name: 'Tambahkan MP3', text: 'Geser MP3 ke bingkai putus-putus, atau klik untuk menelusuri. Sebagian besar format audio dan video lain juga didekode di perangkat Anda.' },
        { name: 'Tandai bagian potongan', text: 'Tarik seleksi pada gelombang, atau ketik waktunya persis. “Pertahankan pilihan” menyimpan bagian itu, “Hapus pilihan” menghapusnya — bisa diganti kapan saja.' },
        { name: 'Klik “{export}”', text: 'Tombol utama di bilah ekspor. WAV identik per bit dan MP3 dikodekan sekali hingga 320 kbps. Tekan “Putar” untuk mendengar dulu.' },
        { name: 'Bawa filenya', text: 'Unduhan mulai otomatis dan nama filnya bersufiks -edited. File di atas 300 MB ditolak.' },
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
        {
        q: 'Bisakah memotong lagu dari YouTube?',
        a: 'Tidak. Halaman ini memproses file dari perangkat ini dan tidak menerima tautan. Memotong audio dari platform streaming biasanya melanggar ketentuannya — gunakan hanya lagu yang Anda miliki atau yang Anda punya izinnya.',
        },
      ],
      screenshotsAlt: [
        'Potong MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Potong MP3: area kerja dengan berkas yang sudah dimuat',
        'Potong MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Pertahankan bagian yang Anda tandai, atau hapus',
          paragraphs: [
            'Seret di sepanjang bentuk gelombang untuk menandai rentang. Waktunya berubah saat Anda menyeret, dan Anda bisa mengetik waktu mulai dan akhir jika penunjuk tidak cukup presisi.',
            'Kedua mode bekerja berlawanan.',
          ],
          bullets: [
            'Pertahankan pilihan: berkas yang disimpan hanya rentang yang Anda tandai. Itu bagian reff, drop, atau satu jawaban yang Anda inginkan dari rekaman panjang.',
            'Hapus pilihan: berkas yang disimpan adalah semuanya kecuali rentang itu. Begini cara menghapus 30 detik pertama, intro, atau bacaan iklan.',
          ],
        },
        {
          heading: 'Potong MP3, atau pangkas rekaman',
          paragraphs: [
            'Halaman ini memotong satu rentang dari sebuah lagu. Pemilih berkas juga menerima video MP4, WebM, dan MOV, dan yang dipotong adalah trek suaranya. Hasilnya MP3 baru atau WAV 16-bit.',
            '[Pemangkas audio](/audio-trimmer) adalah editor yang sama, ditujukan untuk podcast atau memo suara. Gunakan halaman ini untuk memotong MP3. Gunakan pemangkas saat berkasnya bukan lagu.',
          ],
        },
        {
          heading: 'Apa yang dilakukan pemotongan pada suara',
          paragraphs: [
            'WAV adalah PCM 16-bit dari sampel yang Anda pertahankan. MP3 mengenkode rentang itu sekali. Bitrate bawaan di halaman ini 192 kbps.',
            'Berkas didekode, rentangnya diambil, lalu ekspor ditulis ulang. Jika Anda akan mengedit berkasnya lagi, ekspor WAV. Kedua penggeser fade melembutkan tepi potongan saat klip perlu awal atau akhir yang lebih halus.',
          ],
        },
        {
          heading: 'Apa yang tidak dilakukan pemotong ini',
          paragraphs: [
            'Alat ini memotong satu berkas. Alat ini tidak melakukan crossfade pada daftar putar atau menumpuk beberapa trek.',
          ],
          bullets: [
            'Menggabungkan beberapa lagu menjadi satu berkas adalah [penggabung audio](/audio-joiner).',
            'Klip yang dibatasi 40 detik, diunduh sebagai nada dering, ada di [pembuat nada dering](/ringtone-maker). Halaman ini tidak memasangnya di ponsel.',
            'Judul, artis, dan sampul ada di [editor tag MP3](/mp3-tag-editor), setelah potongannya jadi.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file MP3 atau video, atau klik untuk memilih',
      exportLabel: 'Potong dan unduh',
    },
    'mp3-editor': {
      cardLine: 'Sunting cepat dalam satu tab: potong, fade, balik, ubah tempo, dan normalisasi.',
      name: 'Editor MP3',
      shortName: 'Editor MP3',
      title: 'Editor MP3 — perbaikan cepat dalam satu tab',
      description:
        'Potong, fade, dan ubah kecepatan dalam satu tab. File asli tidak berubah, dan kecepatan menggeser nada bersamanya.',
      h1: 'Editor MP3 — potong, fade, ubah kecepatan',
      heroAlt: 'Potong, fade, putar balik, dan ubah kecepatan MP3',
      subtitle: 'Potong, fade, putar balik, dan percepat audio — semua dalam satu tab browser.',
      intro:
        'Editor audio yang ringkas untuk pekerjaan cepat: potong bagian, beri fade in dan fade out, naikkan atau turunkan volume, percepat atau perlambat trek, dan putar balik. Setiap suntingan diterapkan di perangkat Anda saat diekspor — file asli di disk selalu tetap utuh.',
      usesHeading: 'Kegunaan umum editor MP3',
      uses: [
        'Potong dan fade: potong satu bagian, lalu fade tepi yang baru supaya potongannya tidak klik.',
        'Kecepatan per bagian: percepat atau balik satu bagian tanpa ekspor antar alat.',
        'Ratakan level: bawa rekaman yang naik-turun kembali ke satu level.',
        'Efek terbalik: putar satu bagian mundur sebagai kejutan tersembunyi.',
        'Beberapa suntingan sekaligus: potong, fade, kecepatan, dan volume dalam satu tab.',
        'Perbaikan cepat: perubahan kecil yang tidak perlu sesi DAW.',
      ],
      why: [
        {
          icon: 'file',
          title: 'Beberapa suntingan, satu tab',
          text: 'Potong, fade, kecepatan, balik, dan volume dikerjakan di halaman yang sama, tanpa ekspor antar alat.',
        },
        {
          icon: 'lock-simple',
          title: 'Diproses di perangkat',
          text: 'Semua suntingan berjalan di browser Anda. Tidak ada yang diunggah.',
        },
      ],
      howTo: [
        {
          name: 'Buka file Anda',
          text: 'Jatuhkan file atau klik untuk memilih. File hanya terbuka jika browser ini bisa mendekodenya. Dekode terjadi di tab ini.',
        },
        {
          name: 'Sunting',
          text: 'Pilih rentang untuk dipertahankan atau dihapus, lalu buka Sesuaikan. Fade tiap ujung 0 sampai 5 detik, volume 10% sampai 200%, kecepatan 0.50× sampai 2.00×, atau putar balik. Nada mengikuti kecepatan.',
        },
        {
          name: 'Ekspor hasilnya',
          text: 'Simpan sebagai MP3 di 64, 96, 128, 192, atau 320 kbps, atau WAV 16-bit. Halaman ini mulai dari 320 kbps. MP3 mengodekan dua kanal pertama.',
        },
      ],
      faqs: [
        {
          q: 'Apa yang bisa dilakukan editor MP3 ini?',
          a: 'Pertahankan atau hapus satu seleksi. Fade tiap ujung 0 sampai 5 detik. Volume dari 10% sampai 200%. Kecepatan dari 0.50× sampai 2.00×, dan nada mengikutinya. Reverb dari 0% sampai 100%. Putar balik satu sakelar. Normalisasi puncak menaikkan gain ke 0.98, dibatasi 4×, dan menimpa penggeser volume. File di atas 300 MB ditolak. Beberapa file sekaligus, sampai 8, adalah [editor multi-trek](/multi-track-audio-editor).',
        },
        {
          q: 'Apakah suntingan merusak file asli?',
          a: 'Tidak. File asli tetap persis seperti adanya di disk. Semua suntingan disimpan sebagai pengaturan di editor, dan baru di-render menjadi file baru saat Anda mengekspor.',
        },
        {
          q: 'Bagaimana perubahan kecepatan memengaruhi nada?',
          a: 'Di halaman ini, 2× berbunyi sekitar satu oktaf lebih tinggi dan 0.5× sekitar satu oktaf lebih rendah. [Pengubah tempo](/tempo-changer) menjaga nada, dari 0.75× sampai 1.25×. [Pengubah nada](/pitch-changer) mengubah nada dan menjaga durasi.',
        },
        {
          q: 'Bisakah sebuah perubahan dibatalkan?',
          a: 'Ya. Tekan Ctrl+Z (Cmd+Z di Mac) untuk mundur melalui suntingan terbaru, atau klik Ganti file untuk memuat kembali keadaan file asli.',
        },
        {
          q: 'Apakah aman untuk rekaman yang bersifat rahasia?',
          a: 'File didekode di tab ini. Setelah skrip halaman dimuat, dekode dan ekspor WAV tidak butuh jaringan. Ekspor MP3 butuh encoder yang sudah dimuat sekali. Menutup tab membuang suntingan ini.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Gelombang menerima geseran jari. File di atas 300 MB ditolak. File di atas satu jam tetap terbuka, dengan peringatan memori.',
        },
      ],
      screenshotsAlt: [
        'Editor MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Editor MP3: area kerja dengan berkas yang sudah dimuat',
        'Editor MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Apa yang benar-benar diubah editor ini',
          paragraphs: [
            'Halaman ini adalah editor MP3 umum: potong satu rentang, beri fade di ujungnya, ubah volume atau kecepatan, atau putar balik berkasnya, lalu ekspor MP3 baru. Berkas yang Anda letakkan tidak pernah ditimpa.',
            'Kecepatan di sini menggeser nada bersama tempo. Suara yang lebih tinggi atau rendah dengan durasi tetap ada di [pengubah nada](/pitch-changer). Berkas yang lebih kecil, tanpa suntingan ini, ada di [kompres audio](/compress-audio).',
          ],
        },
        {
          heading: 'Kapan sebaiknya membuka halaman khusus',
          paragraphs: [
            'Editor ini titik awal yang tepat saat pekerjaannya campuran potongan kecil dan perubahan level. Tugas tunggal punya jalur lebih singkat:',
          ],
          bullets: [
            'Satu lagu, simpan satu reff: [pemotong MP3](/mp3-cutter) adalah editor pertahankan-atau-hapus yang sama.',
            'Podcast atau memo suara: [pemangkas audio](/audio-trimmer) adalah editor yang sama.',
            'Hanya judul lagu, artis, atau sampul: [editor tag MP3](/mp3-tag-editor) menyalin byte audio dan hanya mengubah tag.',
          ],
        },
        {
          heading: 'Ekspor dan urungkan',
          paragraphs: [
            'Ekspor menulis MP3 baru. WAV di menu adalah PCM 16-bit dari sampel yang sudah diedit.',
            'Ctrl+Z (Cmd+Z di Mac) mundur melalui suntingan terakhir. Ganti file memuat ulang berkas yang Anda letakkan. Menutup tab menghapus sesi, karena tidak ada yang disimpan di server.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'ringtone-maker': {
      cardLine: '30 detik paling mencolok dari sebuah lagu, jadi nada dering iPhone atau Android.',
      name: 'Nada Dering',
      shortName: 'Nada Dering',
      title: 'Pembuat nada dering — potong nada dering iPhone dari lagu',
      description:
        'Potong nada dering dari lagu apa pun: seleksi dibatasi 40 detik, fade opsional. M4R untuk iPhone (butuh AAC) atau MP3. Gratis, tanpa unggah.',
      h1: 'Pembuat nada dering — ubah lagu apa pun jadi nada dering iPhone',
      heroAlt: 'Potong sampai 40 detik dan simpan sebagai M4R atau MP3',
      howToIntro: 'Lagu masuk, nada dering keluar',
      subtitle: 'Pilih momen terbaik dari lagu mana pun dan simpan sebagai nada dering dalam waktu kurang dari satu menit.',
      intro:
        'Pilih hook, reff, atau intro dari lagu favoritmu dan jadikan nada dering. Pembuat ini menjaga seleksi dalam panjang nada dering klasik 40 detik, menambahkan fade kalau mau, lalu mengekspor untuk ponselmu: M4R untuk iPhone, MP3 untuk yang lain.',
      usesHeading: 'Kegunaan umum pembuat nada dering',
      uses: [
        'Nada dering iPhone: potong hook, ekspor M4R, sinkronkan di Finder, selesai.',
        'Nada dering Android: potong satu bagian, ekspor MP3, pilih langsung di Pengaturan.',
        'Nada dering reff: detik-detik paling mencolok dari reff jadi pembuka.',
        'Nada dering intro: dengar melodi yang kamu suka sebelum menjawab telepon.',
        'Penutup fade: loop tetap halus dan tak pernah terpotong di tengah nada.',
        'Singkat dan tegas: tetap di bawah 20 detik; batas 40 detik berlaku otomatis.',
      ],
      why: [
        {
          icon: 'bell',
          title: 'Dibatasi 40 detik otomatis',
          text: 'Seret melebihi 40 detik dan seleksi kembali dengan pemberitahuan — panjang nada dering klasik, jadi tak perlu menebak apa yang diterima ponselmu.',
        },
        {
          icon: 'convert',
          title: 'Dua pintu keluar: M4R dan MP3',
          text: 'M4R untuk iPhone (muncul hanya bila browser ini bisa mengodekan AAC, tersembunyi bila tidak) atau MP3 192 kbps untuk Android dan semua ponsel lain — siap dipakai langsung setelah ekspor.',
        },
      ],
      howTo: [
        {
          name: 'Tambahkan lagu',
          text: 'Seret file MP3, M4A, WAV atau audio lain ke bingkai putus-putus, atau klik untuk menjelajah. File tidak pernah meninggalkan perangkatmu.',
        },
        {
          name: 'Potong bagian itu',
          text: 'Seret seleksi di gelombang, sampai 40 detik — bila lebih, batas diterapkan otomatis dengan pemberitahuan. Ini panjang nada dering klasik.',
        },
        {
          name: 'Tambah fade, tekan «Buat nada dering»',
          text: 'Fade di kedua ujung 0–5 detik. Pilih M4R untuk iPhone, atau MP3 192 kbps untuk Android dan ponsel lain.',
        },
        {
          name: 'Pindahkan ke ponsel',
          text: 'iPhone: sinkronkan lewat Finder (iTunes di Windows). Android: pilih MP3 di Pengaturan > Suara > Nada dering telepon.',
        },
      ],
      faqs: [
        {
          q: 'Berapa panjang nada dering yang ideal?',
          a: 'Sebagian besar ponsel berbunyi 20–40 detik sebelum masuk kotak pesan, dan nada dering pendek terdengar lebih tegas. Pembuat ini membatasi seleksi pada 40 detik, panjang nada dering klasik.',
        },
        {
          q: 'Bagaimana memakainya di iPhone?',
          a: 'Pilih M4R di menu format sebelum mengekspor. Chrome, Edge, dan Safari 17 ke atas mengodekan langsung di perangkatmu; sinkronkan file ke iPhone lewat Finder (iTunes di Windows). Browser tanpa pengodean AAC seperti Firefox mengekspor MP3 — konversi di GarageBand: impor file, lalu bagikan sebagai nada dering.',
        },
        {
          q: 'Bagaimana mengaturnya di Android?',
          a: 'Salin MP3 hasil ekspor ke ponsel, buka Pengaturan > Suara > Nada dering telepon dan pilih filenya, atau atur langsung dari aplikasi file. Tak perlu konversi.',
        },
        {
          q: 'Apakah loopnya terdengar kasar?',
          a: 'Atur fade keluar yang pendek di halaman. Kembali ke awal terdengar alami, tidak terpotong di tengah nada. Untuk mengulang klip 2–16 kali menjadi satu file panjang, pakai [audio looper](/audio-looper). Halaman ini tetap dalam 40 detik.',
        },
        {
          q: 'Ada watermark atau batasan?',
          a: 'Tanpa watermark, tanpa pendaftaran, tanpa batas harian. Nada dering dirender di perangkatmu sendiri dan diunduh langsung dari browser.',
        },
      ],
      dropHint: 'Seret lagu atau klik untuk menjelajah',
      exportLabel: 'Buat nada dering',
      screenshotsAlt: [
        'Area jatuhkan pembuat nada dering: seret file atau jelajah, tidak ada yang diunggah',
        'Ruang kerja pembuat nada dering dengan file termuat',
        'Pembuat nada dering setelah ekspor: bilah status menyebut nama file yang diunduh',
      ],
      sections: [
        {
          heading: 'Bagaimana lagu menjadi nada dering',
          paragraphs: [
            'Seret melebihi 40 detik dan seleksi menyusut ke 40. Halaman lalu memberi tahu: Seleksi dibatasi 40 detik — panjang nada dering klasik.',
            'Kedua ujung menerima fade 0–5 detik, dengan langkah 0,1. Pada 0, ujung itu tetap sama.',
          ],
        },
        {
          heading: 'File apa yang diterima ponsel',
          paragraphs: [
            'Menu dimulai dari MP3 192 kbps.',
          ],
          bullets: [
            'M4R adalah AAC-LC, maksimum dua kanal, 192 kbps. Muncul hanya bila browser ini bisa mengodekan AAC.',
            'Jika tidak, menunya MP3 320, 192, atau 128 kbps, atau WAV 16-bit.',
            'Tidak ada 64 atau 96 kbps di menu. Halaman ini berhenti sampai unduhan file.',
          ],
          table: {
            headers: ['Jenis dering','Panjang yang pas','Kenapa'],
            rows: [
              ['Nada dering','40 detik atau kurang','Halaman ini membatasi seretan pada 40 s — panjang klasik'],
              ['Nada pesan dan alarm','Beberapa detik','Alarm harus langsung dikenali, bukan memutar lagunya'],
              ['Jam weker','Seberapa pun','Ekspor MP3 atau WAV 16-bit; halaman ini tidak memasang batas'],
              ['Nada dering Android','Pendek, agar loop bersih','MP3 dari halaman ini berfungsi; ponsel mengulang dari awal'],
            ],
          },
        },
        {
          heading: 'Yang tidak dilakukan halaman ini',
          paragraphs: [
            'Tidak mengunggah lagu dan tidak memasang nada dering ke ponsel. Kamu mendapat satu file.',
            'Untuk satu lagu utuh tanpa batas 40 detik, pakai [pemotong MP3](/mp3-cutter).',
          ],
        },
      ],
    },
    'audio-joiner': {
      cardLine: 'Menyambung memo suara, lagu, atau episode podcast menjadi satu file yang berkesinambungan.',
      name: 'Gabung audio',
      shortName: 'Gabung audio',
      title: 'Gabung audio — sambung file MP3 online, dengan crossfade',
      description:
        'Sambung lagu, bab, atau memo suara jadi satu file, dengan crossfade 0-5 detik. WAV lossless, MP3 sampai 320 kbps. Semua lokal, tanpa unggah.',
      h1: 'Gabung audio — satukan beberapa file audio menjadi satu',
      heroAlt: 'Menyatukan lagu dan memo suara berurutan',
      subtitle: 'Menyatukan lagu dan file audio jadi satu trek, urutan bebas, dalam hitungan detik.',
      intro:
        'Satukan beberapa lagu, episode podcast, atau rekaman menjadi satu file. Tambahkan trek sebanyak yang kamu mau, susun ulang, dan jika mau beri fade di awal dan akhir. Penggabungan terjadi di perangkatmu — daftar panjang pun langsung tersambung dan tetap privat.',
      usesHeading: 'Kegunaan umum menggabung audio',
      uses: [
        'Kompilasi podcast: sambung rekaman tiap episode berurutan menjadi satu file, publikasi lebih mudah.',
        'Medley lagu: tempel lagu dari ujung ke ujung, dengan crossfade di sambungan agar tak ada bunyi pecah.',
        'Gabung audiobook: satukan file per bab menjadi satu, untuk pemutar tanpa playlist.',
        'Menyambung wawancara: satukan rekaman jadi satu file agar mudah ditranskrip dan dirapikan.',
        'Memo suara: sambung memo berserakan dengan sepotong musik, urutannya bebas.',
        'Audio demo: sambung beberapa nada peringatan jadi satu file dan impor ke perangkat sekaligus.',
      ],
      why: [
        {
          icon: 'layers',
          title: 'Format campuran tetap tersambung',
          text: 'MP3, WAV, dan M4A bisa berada dalam satu daftar: file didekode dan disesuaikan ke satu laju sampel sebelum disambung. Puluhan trek jalan — batasnya memori perangkatmu.',
        },
        {
          icon: 'waveform',
          title: 'Sambungan tanpa bunyi pecah',
          text: 'Crossfade 0-5 detik menumpuk akhir satu trek dengan awal trek berikutnya; pada nol hasilnya sambungan keras mulus tanpa celah.',
        },
      ],
      howTo: [
        {
          name: 'Tambahkan trek',
          text: 'Seret dua file audio atau lebih ke bingkai putus-putus, atau klik untuk memilih beberapa sekaligus. Mencampur MP3, WAV, dan M4A tidak masalah — laju sampel disesuaikan otomatis.',
        },
        {
          name: 'Atur urutannya',
          text: 'Tempatkan tiap trek dengan panah atas/bawah; durasi pratinjau diperbarui langsung. Hapus trek jika berubah pikiran.',
        },
        {
          name: 'Atur crossfade',
          text: 'Slidernya 0-5 detik: nilai lebih tinggi menumpuk trek bertetangga dengan halus, nol adalah sambungan keras tanpa celah. Awal dan akhir juga bisa diberi fade.',
        },
        {
          name: 'Gabungkan dan ambil filenya',
          text: 'Klik ekspor untuk mengunduh sebagai MP3 (sampai 320 kbps) atau WAV lossless. Tidak ada batas trek yang tetap — batasnya memori perangkatmu.',
        },
      ],
      faqs: [
        {
          q: 'Bisakah format audio berbeda digabung?',
          a: 'Bisa. File didekode lebih dulu dan disesuaikan ke satu laju sampel, jadi MP3, WAV, dan M4A bisa disambung dalam sekali jalan. Format keluaran pilihanmu.',
        },
        {
          q: 'Berapa banyak file yang bisa digabung?',
          a: 'Tidak ada batas tetap — puluhan trek jalan mulus. Batas praktisnya memori perangkatmu, karena semuanya diproses lokal.',
        },
        {
          q: 'Bisakah urutan lagunya diubah?',
          a: 'Bisa. Tiap trek punya panah atas/bawah untuk mengatur urutan sebelum penggabungan. Durasi pratinjau langsung diperbarui.',
        },
        {
          q: 'Apakah trek saling crossfade?',
          a: 'Ya. Naikkan slider crossfade agar akhir tiap trek menumpuk awal trek berikutnya — penggabungan memberi fade halus di antara tetangga. Pada nol jadi potongan keras: dua bagian tersambung mulus tanpa celah.',
        },
        {
          q: 'Apakah kualitas file gabungannya bagus?',
          a: 'WAV gabungan itu lossless — audionya tidak dikompresi ulang. Ekspor MP3 mengodekan sekali saja, sampai 320 kbps, perbedaan yang nyaris tak terdengar.',
        },
        {
          q: 'Apakah jalan di ponsel?',
          a: 'Ya. Tambahkan file lalu susun dengan tombol naik/turun; keduanya bisa ditekan dengan jari. Chrome, Edge, Firefox, dan Safari terkini mendekode format umum di iPhone maupun Android. Beberapa file panjang butuh memori lebih; untuk tumpukan sangat panjang, komputer lebih stabil.',
        },
        {
          q: 'Bisakah menggabung file lokal dari Claude atau Cursor?',
          a: 'Halaman ini menggabungkan di browser. Slider crossfade berjalan 0-5 detik, dengan langkah 0,5. /mcp menyambung 2-20 file lokal dengan ffmpeg, crossfade 0-5 detik, dan menulis stereo 44100 Hz. Tidak menampilkan gelombang. Aplikasi chat tetap melihat jalurnya.',
        },
      ],
      dropHint: 'Seret dua file audio atau lebih, atau klik untuk menjelajah',
      screenshotsAlt: [
        'Area jatuhkan gabung audio: seret file atau jelajah, tidak ada yang diunggah',
        'Ruang kerja gabung audio dengan file termuat',
        'Gabung audio setelah ekspor: bilah status menyebut nama file yang diunduh',
      ],
      sections: [
        {
          heading: 'Menggabung berarti satu file setelah yang lain',
          paragraphs: [
            'Halaman penggabung menyusun file utuh dalam satu baris: lagu, lalu memo suara, lalu bab berikutnya. Daftarnya bisa disusun ulang, dan crossfade menumpuk akhir satu dengan awal berikutnya.',
            'Crossfade di nol berarti potongan keras tanpa celah. Format campuran didekode lebih dulu, lalu ditulis ke satu ekspor. Ini bukan mixer: beberapa trek tak pernah bunyi bersamaan.',
          ],
        },
        {
          heading: 'Pekerjaan yang cocok untuk halaman ini',
          paragraphs: [
            'Pakai ini saat hasilnya harus satu file yang langsung dibuka pemutar:',
          ],
          bullets: [
            'Satu memo suara sebelum lagu, urutannya pilihanmu.',
            'Rekaman per bab disambung untuk pemutar tanpa playlist.',
            'Beberapa klip berurutan dengan crossfade pendek, agar sambungannya tak pecah.',
          ],
        },
        {
          heading: 'Kapan butuh lapisan',
          paragraphs: [
            'Suara di atas musik, level dan pan per klip, mute dan solo: itu editor multitrek, sampai delapan trek. Penggabung tak bisa meredam musik di bawah suara.',
            'Tidak ada batas jumlah file yang tetap. Batasnya memori perangkat, karena penggabungan selesai di browser. Tidak ada yang diunggah.',
          ],
        },
      ],
    },
    'wav-to-mp3': {
      cardLine: 'Perkecil rekaman WAV besar jadi MP3 mudah dibagikan pada bitrate pilihan Anda.',
      name: 'Konversi WAV ke MP3',
      shortName: 'WAV ke MP3',
      title: 'Konversi WAV ke MP3 — Online dan Gratis',
      description:
        'Konversi WAV ke MP3 di browser — 128, 192, atau 320 kbps. Gratis, tanpa mendaftar: audio dikonversi secara lokal dan tidak pernah diunggah ke server.',
      h1: 'Konversi WAV ke MP3 — Ubah WAV menjadi MP3',
      heroAlt: 'Ubah file WAV menjadi MP3 320 kbps',
      subtitle: 'Konversi file WAV ke MP3 dalam hitungan detik — langsung di browser, tidak ada yang diunggah.',
      intro:
        'Ubah rekaman WAV yang berat menjadi MP3 yang ringkas, tanpa menginstal apa pun dan tanpa mengirim audio ke server. Jatuhkan file, pilih bitrate — 320 kbps untuk musik, 128 kbps untuk suara — dan konversi terjadi di perangkat Anda sendiri, biasanya dalam beberapa detik.',
      usesHeading: 'Skenario penggunaan umum konversi WAV ke MP3',
      uses: [
        'Mengecilkan rekaman: perkecil file besar dari studio atau perekam supaya bisa dikirim.',
        'Konversi untuk didengar sehari-hari: ekspor lossless diubah ke 192/320 kbps — untuk di jalan sudah cukup.',
        'Lampiran email: 128 kbps memuat rekaman kuliah ke dalam batas 25 MB email.',
        'Arsip massal: konversi satu folder penuh WAV sekaligus, dikemas jadi ZIP.',
        'Konversi dulu, potong belakangan: ubah dulu ke MP3, lalu potong bagian yang perlu di [pemotong audio](/audio-trimmer).',
        'Memo suara: suara manusia cukup dengan bitrate rendah, filenya kecil sampai gampang dikirim kapan saja.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Bitrate menentukan ukuran',
          text: 'MP3 sekitar sepersepuluh dari WAV: WAV 50 MB menjadi 4–5 MB pada 192 kbps. Enam tingkat pilihan dari 64 sampai 320 kbps, masing-masing menampilkan perkiraan ukuran langsung di bilah ekspor.',
        },
        {
          icon: 'layers',
          title: 'Konversi massal sekali jalan',
          text: 'Seret beberapa WAV sekaligus: semuanya memakai pengaturan yang sama dan dikonversi satu per satu. Satu file langsung diunduh, dua atau lebih otomatis dikemas jadi ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Jatuhkan WAV Anda',
          text: 'Seret file .wav ke halaman, atau klik untuk memilih. Format audio lain (M4A, FLAC, OGG) dikonversi dengan cara yang sama. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.',
        },
        {
          name: 'Pilih bitrate',
          text: '320 kbps hampir tidak bisa dibedakan dari aslinya bagi hampir semua orang; 192 kbps adalah titik tengah yang pas; 128 kbps membuat rekaman suara tetap kecil.',
        },
        {
          name: 'Konversi dan unduh',
          text: 'Klik Konversi ke MP3. Encoder berjalan di browser Anda, dan MP3 langsung terunduh ke perangkat.',
        },
        {
          name: 'Ambil file-mu',
          text: 'Satu file langsung diunduh sendiri; dua atau lebih dikemas dalam ZIP. Tag dan sampul WAV tidak ikut terbawa — bisa ditambahkan nanti lewat [editor tag](/mp3-tag-editor).',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengubah lebih dari satu WAV?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
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
      {
        q: 'Bisakah Anda mengonversi WAV lokal dari Claude atau Cursor?',
        a: 'Halaman ini mengonversi di browser pada 128-320 kbps. /mcp memanggil ffmpeg pada berkas yang sudah ada di komputer Anda. MP3, M4A, dan OGG bisa 64, 96, 128, 192, 256, atau 320 kbps, dan bawaan adalah 192. WAV adalah PCM 16-bit. FLAC tanpa kehilangan. Aplikasi chat tetap melihat jalur berkas.',
      }],
      screenshotsAlt: [
        'Konversi WAV ke MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Konversi WAV ke MP3: area kerja dengan berkas yang sudah dimuat',
        'Konversi WAV ke MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Bitrate mana yang dipilih',
          paragraphs: [
            'MP3 membuang sebagian data WAV. Bitrate menunjukkan seberapa banyak yang disimpan.',
          ],
          bullets: [
            'Menunya 64, 96, 128, 192, dan 320 kbps.',
            'Halaman ini dimulai dari 320.',
            'MP3 mengenkode sampel yang sudah didekode sekali. Tag tidak ikut disalin.',
          ],
        },
        {
          heading: 'Seberapa kecil MP3-nya',
          paragraphs: [
            'WAV menyimpan setiap sampel. MP3 menyimpan versi terkompresi dari suara yang bisa Anda dengar. WAV 50 MB menjadi sekitar 4–5 MB pada 192 kbps, dan sekitar 11 MB pada 320 kbps. Ukuran tepatnya mengikuti durasi dan sample rate.',
            'Jika masih perlu aslinya, simpan WAV. Halaman ini ada agar salinan yang Anda bagikan bisa diputar di ponsel, mobil, dan speaker lama, dan agar berkasnya cukup kecil untuk dikirim.',
          ],
        },
        {
          heading: 'Judul, artis, dan sampul tidak ikut disalin',
          paragraphs: [
            'MP3 ditulis tanpa metadata WAV. Judul lagu, artis, dan sampul tidak ikut. Tambahkan sesudahnya di editor tag MP3 jika pemutar akan menampilkan nama kosong.',
            'Berkas M4A, FLAC, dan OGG yang diletakkan di sini dikonversi dengan cara yang sama. FLAC punya halaman sendiri jika itu format awal Anda. Halaman ini untuk WAV.',
          ],
        },
        {
          heading: 'Konversi dulu, baru potong',
          paragraphs: [
            'Halaman ini mengonversi seluruh berkas. Halaman ini tidak memotong rentang dari WAV.',
          ],
          bullets: [
            'Hanya perlu satu menit dari rekaman panjang: konversi, lalu buka pemangkas audio.',
            'Berkasnya sudah MP3 dan Anda hanya perlu versi lebih kecil: gunakan kompres audio, bukan halaman ini.',
            'Anda akan mengedit lagi setelah konversi: 320 kbps, atau simpan WAV dan edit itu.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file WAV, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'flac-to-mp3': {
      cardLine: 'Konversi file FLAC lossless ke MP3 untuk pemutar dan aplikasi yang tak mendukung FLAC.',
      name: 'Ubah FLAC ke MP3',
      shortName: 'FLAC ke MP3',
      title: 'Ubah FLAC ke MP3 Online Gratis — 320 kbps',
      description:
        'Konversi FLAC ke MP3 di browser — 128, 192, atau 320 kbps. Gratis, tanpa mendaftar: musik dikonversi secara lokal dan tidak pernah diunggah.',
      h1: 'Ubah FLAC ke MP3 — Ubah FLAC menjadi MP3',
      heroAlt: 'Ubah file FLAC menjadi MP3 320 kbps',
      subtitle: 'Ubah file FLAC jadi MP3 dalam hitungan detik — langsung di browser, tanpa unggah.',
      intro:
        'FLAC terdengar sempurna dan menghabiskan setengah hard disk untuk membuktikannya. Ubah pustaka lossless Anda jadi MP3 ringkas yang bisa diputar di head unit mobil, speaker Bluetooth, dan perangkat lama — jatuhkan filenya, pilih bitrate, dan konversi berjalan di perangkat Anda sendiri. Satu lagu FLAC 25 MB jadi MP3 12 MB di 320 kbps dalam beberapa detik.',
      usesHeading: 'Skenario penggunaan umum konversi FLAC ke MP3',
      uses: [
        'Pemutaran di mobil: buat pustaka musik lossless bisa diputar di head unit dan pengeras suara lama.',
        'Mengecilkan sebelum berangkat: perjalanan jauh tanpa Wi-Fi — perkecil album dulu sebelum masuk ponsel.',
        'Folder bersama: perkecil seluruh album sebelum dimasukkan ke direktori bersama.',
        'Arsip ganda: FLAC untuk arsip, MP3 untuk didengar sehari-hari.',
        'Kompatibilitas unduhan: ubah album lossless belanjaan online jadi MP3 yang bisa diputar di mana saja.',
        'Rapikan massal: seret satu album penuh sekaligus, konversi per trek lalu dikemas ZIP.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Transkode dari sumber lossless',
          text: 'FLAC didekode dulu menjadi sampel mentah, lalu disandikan sekali jadi MP3 pada bitrate pilihan — kompresi hanya sekali ini.',
        },
        {
          icon: 'layers',
          title: 'Satu album sekaligus',
          text: 'Seret satu album penuh sekaligus, dikonversi per trek lalu dikemas ZIP dengan urutan tetap terjaga.',
        },
      ],
      howTo: [
        {
          name: 'Jatuhkan FLAC Anda',
          text: 'Seret file .flac ke halaman, atau klik untuk memilih. Format lossless lain dikonversi dengan cara yang sama. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.',
        },
        {
          name: 'Pilih bitrate',
          text: '320 kbps tidak bisa dibedakan hampir oleh siapa pun; 192 kbps adalah keseimbangan sehari-hari; 128 kbps menjaga audiobook dan podcast tetap kecil.',
        },
        {
          name: 'Konversi dan unduh',
          text: 'Klik Konversi ke MP3. Encoder berjalan di browser Anda dan MP3 langsung terunduh ke perangkat.',
        },
        {
          name: 'Klik "Konversi ke MP3"',
          text: 'Setiap trek didekode dan dienkode secara lokal dalam satu proses, dengan progres ditampilkan di baris status.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengubah lebih dari satu FLAC?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
        {
          q: 'Apakah konversi FLAC ke MP3 menurunkan kualitas?',
          a: 'MP3 itu lossy, jadi sebagian informasi dibuang — tapi di 320 kbps hampir tidak ada yang bisa membedakannya dari FLAC dalam tes buta. Simpan FLAC sebagai arsip dan anggap MP3 sebagai versi portabelnya.',
        },
        {
          q: 'Bitrate mana yang sebaiknya dipilih?',
          a: '320 kbps untuk musik yang Anda simpan, 192 kbps untuk dengar sehari-hari dan berbagi, 128 kbps untuk audiobook, podcast, dan rekaman kuliah — suara butuh jauh lebih sedikit dari musik.',
        },
        {
          q: 'Berapa lebih kecil ukuran MP3-nya?',
          a: 'Lagu lima menit biasanya turun dari sekitar 25 MB (FLAC) ke kira-kira 12 MB di 320 kbps, 7 MB di 192, dan 5 MB di 128. Angka pastinya tergantung durasi dan sample rate.',
        },
        {
          q: 'Apakah tag dan cover FLAC ikut terbawa?',
          a: 'Belum — MP3 ditulis tanpa metadata, jadi judul, artis, dan cover art tidak ikut. Anda bisa menambahkannya lagi dengan editor tag apa pun.',
        },
        {
          q: 'Apakah FLAC saya diunggah ke mana pun?',
          a: 'Tidak. File didekode di browser Anda dan dienkode ke MP3 oleh pustaka yang ikut terpasang bersama situs ini. Audionya sendiri tidak pernah meninggalkan perangkat Anda.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Pilih file, lalu konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      screenshotsAlt: [
        'Ubah FLAC ke MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Ubah FLAC ke MP3: area kerja dengan berkas yang sudah dimuat',
        'Ubah FLAC ke MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Mengapa mengonversi FLAC ke MP3',
          paragraphs: [
            'FLAC lossless dan besar. MP3 adalah format yang benar-benar dibuka sebagian besar ponsel, mobil, dan pemutar lama. FLAC 25 MB sering menjadi sekitar 12 MB pada 320 kbps, dan lebih kecil pada 192 atau 128.',
            'Konversi mendekode FLAC dan mengenkode MP3 baru. Simpan FLAC jika Anda masih perlu berkas itu.',
          ],
        },
        {
          heading: 'Bitrate dan apa yang dibuang',
          paragraphs: [
            'Menu format hanya MP3, dengan tiga bitrate:',
          ],
          bullets: [
            '320 kbps saat berkas harus tetap dekat dengan FLAC untuk didengarkan.',
            '192 kbps untuk ucapan atau salinan lebih kecil yang akan Anda streaming.',
            '128 kbps saat ukuran lebih penting daripada oktaf teratas.',
          ],
        },
        {
          heading: 'Tag, sampul, dan suntingan berikutnya',
          paragraphs: [
            'Judul, artis, dan sampul tidak ikut disalin. MP3 ditulis tanpa metadata. Kembalikan dengan editor tag MP3 setelah ekspor.',
            'Pangkas atau potong setelah konversi, bukan sebelumnya, jika Anda ingin suntingan ada di berkas yang lebih kecil. WAV ke MP3 adalah halaman saudara saat sumbernya WAV, bukan FLAC.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file FLAC, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'mp3-to-wav': {
      cardLine: 'Buka kompresi MP3 ke WAV untuk mengedit, mentranskripsi, atau mendengar detail.',
      name: 'Ubah MP3 ke WAV',
      shortName: 'MP3 ke WAV',
      title: 'Ubah MP3 ke WAV Online Gratis',
      description:
        'Konversi MP3 ke WAV lossless di browser, untuk mengedit, mengarsipkan, dan aplikasi yang minta PCM. Gratis, tanpa daftar, tanpa unggah.',
      h1: 'Ubah MP3 ke WAV — Ubah MP3 menjadi file WAV',
      heroAlt: 'Dekode MP3 menjadi WAV tanpa kompresi',
      subtitle: 'Dekode MP3 jadi audio PCM bersih dalam hitungan detik — langsung di browser, tanpa unggah.',
      intro:
        'Mengubah MP3 ke WAV tidak mengembalikan apa yang dibuang saat kompresi — tidak ada alat yang bisa. Yang didapat adalah audio hasil dekode sebagai PCM 16-bit yang bersih tanpa kehilangan baru: input yang tepat untuk editor audio, sampler, dan apa pun yang meminta WAV, sekaligus titik awal teraman kalau file masih akan diolah. Dekode berjalan di perangkat Anda, biasanya dalam satu detik.',
      usesHeading: 'Skenario penggunaan umum konversi MP3 ke WAV',
      uses: [
        'Penyesuaian perangkat lunak: serahkan MP3 ke editor, DAW, atau platform unggahan yang hanya menerima WAV.',
        'Hindari kerugian berlapis: sunting perantaranya pakai WAV, baru dikompres ke MP3 di akhir.',
        'Perbaikan audio: dekode dulu jadi dasar lossless sebelum masuk [peredam derau](/noise-remover) atau [ekualiser](/equalizer) — berkurang satu lapis kerugian.',
        'Persiapan transkripsi: beberapa alat transkripsi lebih cocok dengan WAV — dekode dulu baru diserahkan.',
        'Bahan sampling: dekode MP3 jadi WAV untuk sampler atau drum machine.',
        'Salinan arsip: simpan satu versi tanpa kompresi untuk pemeriksaan kualitas sebelum rilis.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Dekode, bukan kompres ulang',
          text: 'WAV menyimpan semua sampel hasil dekode: langkah ini tidak membuang informasi apa pun, dan penyuntingan serta perbaikan dilakukan di atas dasar lossless.',
        },
        {
          icon: 'layers',
          title: 'Pengemasan massal',
          text: 'Seret beberapa MP3 sekaligus: didekode satu per satu, lalu dikemas menjadi satu ZIP untuk diunduh.',
        },
      ],
      howTo: [
        {
          name: 'Jatuhkan MP3 Anda',
          text: 'Seret file .mp3 ke halaman, atau klik untuk memilih. Format terkompresi lain didekode dengan cara yang sama. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.',
        },
        {
          name: 'Biarkan WAV terpilih',
          text: 'Format ekspor dikunci ke WAV lossless — PCM 16-bit pada sample rate asli file.',
        },
        {
          name: 'Konversi dan unduh',
          text: 'Klik Konversi ke WAV. Audio hasil dekode ditulis secara lokal dan unduhan langsung dimulai.',
        },
        {
          name: 'Klik "Konversi ke WAV"',
          text: 'Enkoder berjalan di browser — konversi biasanya selesai dalam satu atau dua detik.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengubah lebih dari satu MP3 ke WAV?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
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
          a: 'Tidak. File didekode di browser Anda dan ditulis sebagai WAV secara lokal. Tidak ada yang meninggalkan perangkat Anda.',
        },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Pilih file, lalu konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      screenshotsAlt: [
        'Ubah MP3 ke WAV: area jatuhkan, tidak ada yang dikirim ke server',
        'Ubah MP3 ke WAV: area kerja dengan berkas yang sudah dimuat',
        'Ubah MP3 ke WAV: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'MP3 ke WAV tidak mengembalikan yang dibuang MP3',
          paragraphs: [
            'Halaman ini mendekode MP3 menjadi WAV PCM 16-bit. Editor dan DAW yang menolak MP3 bisa membuka WAV itu. Nada tinggi yang hilang dari enkode asli tidak kembali.',
            'Gunakan saat langkah berikutnya tidak boleh menambah generasi MP3 lagi: potong, beri fade, atau campur WAV-nya, lalu enkode sekali di akhir.',
          ],
        },
        {
          heading: 'Kapan konversinya sepadan',
          paragraphs: [
            'Menu format hanya mengekspor WAV. Ini langkah tepat dalam beberapa kasus konkret:',
          ],
          bullets: [
            'Program atau perekam perangkat keras yang hanya menerima WAV.',
            'Suntingan yang akan Anda enkode sekali nanti, agar tidak menumpuk MP3 di atas MP3.',
            'Serah terima ke orang yang meminta PCM, bukan MP3 lebih kecil.',
          ],
        },
        {
          heading: 'Ukuran dan arah sebaliknya',
          paragraphs: [
            'WAV jauh lebih besar daripada MP3. Ukuran itu adalah PCM tanpa kompresi, bukan detail baru.',
            'Arah sebaliknya, WAV ke MP3, adalah halaman lain, dan di sana Anda memilih bitrate. Membuat MP3 lebih kecil tanpa mengubahnya ke WAV adalah kompresor audio.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file MP3, atau klik untuk memilih',
      exportLabel: 'Konversi ke WAV',
    },
    'compress-audio': {
      cardLine: 'Kecilkan file audio besar ke ukuran atau bitrate target tanpa mengurangi kejelasan.',
      name: 'Kompres Audio',
      shortName: 'Kompresor',
      title: 'Kompres Audio Online Gratis — Perkecil Ukuran File',
      description:
        'Perkecil file MP3, WAV, dan audio lain di browser — pilih bitrate lebih rendah, dengar, unduh. Gratis, tanpa unggah.',
      h1: 'Kompres Audio — Kecilkan ukuran file MP3',
      heroAlt: 'Encode ulang WAV atau MP3 yang besar dengan bitrate lebih rendah',
      howToIntro: 'Kompresor pada berkas sungguhan',
      subtitle: 'Turunkan bitrate, file tetap bisa diputar — perkecil audio sampai 90% di browser.',
      intro:
        'File audio besar karena bitrate-nya, dan cara jujur mengecilkan satu file adalah mengenkode ulang di bitrate lebih rendah: MP3 320 kbps jadi 128 kbps dengan sekitar 40% ukurannya, dan WAV yang berat jadi MP3 sepersepuluhnya. Pilih target, dengarkan pratinjaunya, lalu ekspor — pengodean berjalan di perangkat Anda sendiri, jadi rekaman panjang pun selesai dalam hitungan detik.',
      usesHeading: 'Skenario penggunaan umum kompresi audio',
      uses: [
        'Messenger: file melebihi batas dan tak bisa terkirim — kompres sampai masuk batas.',
        'Lampiran email: muat rekaman kuliah ke dalam batas 25 MB kotak surat.',
        'Formulir unggahan: formulir pendaftaran atau pengumpulan punya batas ukuran — kompres sampai memenuhi syarat.',
        'Mengecilkan suara: rekaman rapat panjang dikompres jadi file kecil untuk arsip.',
        'Ruang perangkat: penyimpanan ponsel mepet — perkecil audio besar sebelum disimpan.',
        'Kompatibilitas perangkat lama: pemutar lama tak sanggup memuat file besar — setelah dikompres, putarannya lancar.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Bitrate dihitung mundur dari ukuran target',
          text: 'Tetapkan ukuran target, misalnya 10 MB: kompresor menghitung bitrate yang bisa dipakai dari durasinya dan mencapai target dalam satu langkah.',
        },
        {
          icon: 'layers',
          title: 'Kompresi massal',
          text: 'Beberapa file memakai target ukuran yang sama, dikompres satu per satu lalu dikemas ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Jatuhkan file Anda',
          text: 'Tambahkan MP3, WAV, M4A, atau audio lain. Ia didekode di perangkat Anda dan tidak pernah diunggah. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.',
        },
        {
          name: 'Pilih ukuran target',
          text: 'Bitrate lebih rendah, file lebih kecil: 192 kbps untuk musik sehari-hari, 128 kbps masih terdengar baik bagi kebanyakan orang, 64–96 kbps ideal untuk suara.',
        },
        {
          name: 'Dengar dan ekspor',
          text: 'Dengarkan pratinjau hasil kompresi, lalu simpan. Pastikan vokal dan simbal masih bersih di bitrate pilihan Anda.',
        },
        {
          name: 'Ekspor',
          text: 'Sudah pas? Ekspor dan unduh; beberapa file memakai pengaturan yang sama dan dikemas dalam ZIP.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengecilkan lebih dari satu file?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
        {
          q: 'Bagaimana kompresi audio di sini bekerja?',
          a: 'File didekode lalu dienkode ulang sebagai MP3 di bitrate pilihan Anda. Ukuran sebanding dengan bitrate: satu menit stereo sekitar 2,4 MB di 320 kbps, 1 MB di 128, dan 0,5 MB di 64.',
        },
        {
          q: 'Bitrate mana yang menjaga kualitas?',
          a: '192 atau 320 kbps untuk musik yang Anda sayang; 128 kbps untuk dengar santai — kebanyakan orang tidak bisa membedakannya dari 320 dalam tes buta. Suara dan podcast tetap jernih sampai 64–96 kbps.',
        },
        {
          q: 'Bisakah kompresi menurunkan kualitas?',
          a: 'Bisa, dalam satu kasus: mengenkode ulang MP3 yang sudah terkompresi di bitrate jauh lebih rendah menumpuk generasi lossy kedua di atas yang pertama. Mengompres dari WAV atau FLAC lebih bersih — simpan aslinya, dan Anda bisa mencoba bitrate lain kapan saja.',
        },
        {
          q: 'Seberapa kecil bisa dikompres?',
          a: '64 kbps adalah batas praktisnya: sekitar 0,5 MB per menit. Suara tetap sangat jernih; musik mulai terdengar tumpul dan berdesis. Di bawah itu, codec khusus seperti Opus bekerja lebih baik daripada MP3.',
        },
        {
          q: 'Apakah file saya diunggah ke mana pun?',
          a: 'Tidak. Dekode dan enkode berjalan di dalam tab browser — Anda bisa memutus internet setelah halaman termuat dan kompresi tetap bekerja.',
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
      screenshotsAlt: [
        'Kompres Audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Kompres Audio: area kerja dengan berkas yang sudah dimuat',
        'Kompres Audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Kompresor ini mengecilkan berkas, bukan dinamika',
          paragraphs: [
            'Kompres audio mengenkode ulang pada bitrate MP3 lebih rendah. Berkas 320 kbps menjadi 128 kbps sekitar 40 persen ukurannya. Bagian pelan dan keras tetap dalam hubungan yang sama.',
            'Meratakan suara keras dan pelan adalah kompresor level, halaman yang berbeda. Halaman itu tidak mengecilkan berkas.',
          ],
        },
        {
          heading: 'Bitrate mana yang dipilih',
          paragraphs: [
            'Menu berjalan dari 320 turun ke 64 kbps. Pilih berdasarkan isi berkasnya:',
          ],
          bullets: [
            '192 atau 320 kbps untuk musik yang masih akan Anda dengarkan saksama.',
            '128 kbps untuk ucapan, memo suara, atau salinan yang perlu dikirim.',
            '64 atau 96 kbps hanya saat tujuan sangat kecil dan ucapan sudah cukup.',
          ],
          table: {
            headers: [
              'Tujuan berkas',
              'Batas',
              'Setelan yang disarankan',
            ],
            rows: [
              [
                'Lampiran Gmail',
                '25 MB (akun pribadi)',
                '128 kbps, memo 10 menit menjadi sekitar 10 MB',
              ],
              [
                'Telegram',
                '2 GB, atau 4 GB dengan Premium',
                'Bitrate apa pun muat; pilih 128 kbps untuk menghemat data seluler',
              ],
              [
                'Target Anda sendiri',
                'Anda yang menentukan',
                'Satu menit sekitar 1 MB pada 128 kbps, sekitar 0,5 pada 64',
              ],
            ],
          },
          outro: [
            'Batasnya berubah: dua angka ini diperiksa pada Oktober 2026. Aplikasi chat menetapkan batas audio lebih ketat daripada dokumen, dan batasnya berubah tanpa pemberitahuan. Hitungan per menit di atas tetap berlaku.',
          ],
        },
        {
          heading: 'Berapa biaya enkode kedua',
          paragraphs: [
            'Setiap proses membuang sedikit lagi. Jika berkasnya sudah 128 kbps, mengenkode ke 128 lagi tidak membantu, dan mengenkode lebih rendah membuatnya lebih tumpul.',
            'Tag dan sampul tidak termasuk dalam pengecilan ini. Jika MP3 sudah kecil dan Anda hanya perlu judul atau sampul baru, gunakan editor tag MP3, yang menyalin byte audio tanpa perubahan.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file audio, atau klik untuk memilih',
      exportLabel: 'Kompres',
    },
    'bitrate-converter': {
      cardLine: 'Kode ulang audio apa pun menjadi MP3 pada 64, 96, 128, 192, atau 320 kbps.',
      name: 'Konverter bitrate',
      shortName: 'Bitrate',
      title: 'Konverter bitrate — MP3 64 sampai 320 kbps',
      description:
        'Ubah audio menjadi MP3 64, 96, 128, 192, atau 320 kbps di browser. Menaikkan angka tidak mengembalikan detail. Tidak ada yang diunggah.',
      h1: 'Konverter bitrate: setel MP3 ke 64–320 kbps',
      heroAlt: 'Lima batang bitrate, yang tengah ditandai 192 kbps',
      subtitle: 'Setel MP3 ke 64, 96, 128, 192, atau 320 kbps. Angka yang lebih tinggi tidak mengembalikan detail.',
      intro:
        'Pilih bitrate MP3 dan kode ulang file di tab ini. Menu mulai di 192 kbps. Satu menit stereo sekitar 2,4 MB pada 320 kbps, 1,4 MB pada 192, 1 MB pada 128, 0,7 MB pada 96, dan 0,5 MB pada 64. Menaikkan angka pada file yang sudah terkompresi tidak mengembalikan detail yang hilang. Dekode dan enkode tetap di browser.',
      usesHeading: 'Skenario penggunaan umum konversi bitrate MP3',
      uses: [
        'Memenuhi syarat unggahan: platform mensyaratkan 192 atau 128 kbps — serahkan sesuai spesifikasi.',
        'Menyeragamkan massal: tumpukan MP3 dengan bitrate campuran, samakan semuanya ke satu tingkat.',
        'Mengecilkan suara: konten bicara bisa turun ke 96 atau 64 kbps, ukurannya terpangkas lagi separuhnya.',
        'Memperbaiki kompatibilitas: sebagian perangkat hanya menerima 128 kbps — buatkan satu versi untuknya.',
        'Catatan soal menaikkan tingkat: bitrate rendah dinaikkan tidak membuat suara lebih bagus — menaikkan hanya demi kompatibilitas.',
        'Uji coba dulu: keluarkan dulu sampel 96 kbps, baru keluarkan bitrate tinggi setelah yakin.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Penyandian ulang sekali saja',
          text: 'Dari MP3 ke MP3 pun tetap perlu dekode lalu enkode — halaman ini hanya mengompres sekali ini, tanpa transkode berulang setelahnya.',
        },
        {
          icon: 'layers',
          title: 'Bitrate diseragamkan massal',
          text: 'Sekumpulan file memakai tingkat yang sama, dikonversi satu per satu lalu dikemas ZIP.',
        },
      ],
      howTo: [
        { name: 'Tambahkan file', text: 'Jatuhkan audio yang bisa didekode browser ini. Konversi tetap di tab. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.' },
        { name: 'Pilih bitrate', text: 'Buka menu format. Mulainya 192 kbps. Laju lain adalah 320, 128, 96, dan 64.' },
        { name: 'Ekspor MP3', text: 'File dikode pada laju yang Anda pilih. Tag dan sampul tidak ikut disalin.' },
        {
          name: 'Ambil file kamu',
          text: 'File tunggal langsung diunduh; beberapa file dikemas dalam satu ZIP.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengubah bitrate lebih dari satu file?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
        {
          q: 'Apakah 320 kbps membuat MP3 128 kbps terdengar lebih baik?',
          a: 'Tidak. Encoder hanya menyimpan apa yang masih ada di sumber. MP3 128 kbps yang disimpan lagi pada 320 kbps adalah file yang lebih besar dari rekaman yang sama. Mulai dari WAV atau rekaman asli jika Anda butuh detailnya.',
        },
        {
          q: 'Bitrate mana yang saya pilih?',
          a: '320 kbps untuk musik yang masih akan Anda dengar teliti, 192 sebagai laju saat menu terbuka, 128 untuk suara atau file yang harus dikirim, dan 96 atau 64 hanya jika tujuan kecil dan suara sudah cukup. Satu menit stereo sekitar 2,4 MB, 1,4 MB, 1 MB, 0,7 MB, dan 0,5 MB pada kelima laju itu.',
        },
        {
          q: 'Apa bedanya dengan kompres audio?',
          a: 'Encoder yang sama, pekerjaan berbeda. Halaman ini untuk menetapkan bitrate, dan mulai di 192 kbps. Kompres audio untuk membuat file lebih kecil, dan mulai di 128 kbps. WAV ke MP3 hanya menerima WAV, dan mulai di 320 kbps.',
        },
        {
          q: 'Bisakah mengonversi ke WAV atau Opus di sini?',
          a: 'Tidak. Halaman ini menulis MP3 pada 320, 192, 128, 96, atau 64 kbps. WAV bukan bitrate. Untuk salinan WAV, gunakan MP3 ke WAV. Opus dan AAC tidak ada di menu.',
        },
        {
          q: 'Apakah file saya diunggah?',
          a: 'Tidak. Browser mendekode file dan mengkode MP3 di tab ini, dengan encoder lokal yang sama seperti kompres audio. Setelah halaman termuat, konversi tetap jalan tanpa jaringan.',
        },
        {
          q: 'Apakah berfungsi di ponsel?',
          a: 'Ya. Pilih file dan konversi tetap di tab ini. Chrome, Edge, Firefox, dan Safari saat ini mendekode format umum di iPhone dan Android. File yang sangat panjang memakai lebih banyak memori, jadi komputer lebih stabil lewat sekitar satu jam.',
        },
      ],
      screenshotsAlt: [
        'Konverter bitrate: area jatuhkan, tidak ada yang dikirim ke server',
        'Konverter bitrate: area kerja dengan berkas yang sudah dimuat',
        'Konverter bitrate: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Berapa berat kelima rate',
          paragraphs: [
            'Menunya 320, 192, 128, 96, dan 64 kbps, bitrate konstan. Satu menit stereo sekitar 2,4 MB, 1,4 MB, 1 MB, 0,7 MB, dan 0,5 MB dalam urutan itu. Halaman terbuka pada 192 kbps.',
            'WAV tidak punya bitrate sendiri, jadi angka yang Anda pilih adalah proses lossy pertama. Berkas MP3, M4A, OGG, atau Opus sudah kehilangan sesuatu, dan proses ini kehilangan sedikit lagi.',
          ],
        },
        {
          heading: 'Rate mana yang cocok',
          paragraphs: [
            'Pilih berdasarkan apa yang terjadi pada berkas berikutnya, bukan angka terbesar di menu.',
          ],
          bullets: [
            '320 kbps saat sumbernya WAV dan Anda masih ingin kualitasnya dekat.',
            '192 kbps sebagai rate musik biasa, tempat menu dimulai.',
            '128, 96, atau 64 kbps untuk ucapan, memo, atau salinan yang harus kecil.',
          ],
        },
        {
          heading: 'Angka lebih tinggi bukan pemulihan',
          paragraphs: [
            'Mengenkode MP3 128 kbps pada 320 kbps menyimpan celah yang sama dalam berkas lebih besar. Satu-satunya cara mengembalikan nada tinggi yang hilang adalah sumber yang masih memilikinya.',
            'Ini encoder yang sama dengan kompres audio. Gunakan halaman itu saat tujuannya berkas lebih kecil dan Anda tidak peduli dari angka mana prosesnya dimulai. Gunakan WAV ke MP3 saat sumbernya WAV dan Anda ingin 320 kbps tanpa memilihnya.',
          ],
        },
      ],
      dropHint: 'Letakkan beberapa file audio di sini, atau klik untuk memilih',
      exportLabel: 'Konversi',
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
      usesHeading: 'Skenario penggunaan umum pemutaran audio terbalik',
      uses: [
        'Riser terbalik: jadikan pukulan simbal atau awal vokal sebagai transisi yang tersedot masuk.',
        'Pesan tersembunyi: selipkan satu kalimat yang direkam terbalik untuk ditemukan saat diputar normal.',
        'Periksa mix sendiri: dengarkan mix secara terbalik, masalah jadi jauh lebih terlihat.',
        'Bahan sampel: drum dan vokal terbalik adalah bahan pokok musik elektronik.',
        'Musik video: putar gambar terbalik dengan suara terbalik, efeknya sejajar.',
        'Latihan pembanding: berlatihlah memutar potongan bahasa atau alat musik secara terbalik.',
      ],
      why: [
        {
          icon: 'reverse',
          title: 'Membalik sekali klik',
          text: 'Seluruh file maupun pilihan, sekali klik langsung terbalik: urutan sampel berubah total, panjangnya tetap.',
        },
        {
          icon: 'lock-simple',
          title: 'Diproses lokal',
          text: 'Pembalikan selesai di dalam peramban, audio tidak diunggah.',
        },
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
        {
          name: 'Ambil file-mu',
          text: 'Nama file mendapat akhiran -edited.',
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
      screenshotsAlt: [
        'Putar Balik Audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Putar Balik Audio: area kerja dengan berkas yang sudah dimuat',
        'Putar Balik Audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Putar balik memutar sampel dari belakang',
          paragraphs: [
            'Halaman ini membalik audio yang dipilih sehingga akhirnya diputar lebih dulu. Anda bisa membalik seluruh berkas atau hanya pilihan. Putar balik sendiri tidak mengubah kenyaringan atau nada.',
            'Ekspornya tetap enkode. WAV menyimpan PCM yang dibalik tanpa generasi MP3. MP3 menulis berkas baru dari audio yang dibalik.',
          ],
        },
        {
          heading: 'Untuk apa orang memakainya',
          paragraphs: [
            'Ini pembalikan langsung, bukan dekoder pesan tersembunyi dan bukan pemisah stem:',
          ],
          bullets: [
            'Simbal atau hit yang dibalik sebagai pembuka.',
            'Memeriksa frasa dengan telinga, hanya pilihan, lalu urungkan.',
            'Seluruh berkas dibalik untuk satu proses desain suara.',
          ],
        },
        {
          heading: 'Apa yang tetap sama',
          paragraphs: [
            'Urungkan mundur satu langkah. Atur ulang memuat ulang berkas yang Anda letakkan. Berkas asli di disk tidak ditimpa.',
            'Jika tujuannya lagu lebih lambat atau suara lebih rendah, putar balik adalah kontrol yang salah. Kecepatan mengubah nada bersama tempo. Pengubah nada mempertahankan durasi.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Balikkan dan unduh',
    },
    'change-audio-speed': {
      cardLine: 'Percepat kuliah ke 2× atau perlambat riff untuk dipelajari — nadanya tetap.',
      name: 'Percepat lagu',
      shortName: 'Ubah Kecepatan',
      title: 'Percepat lagu online — atau perlambat',
      description:
        'Percepat atau perlambat audio apa pun dari 0.5× hingga 2× di browser. Dengarkan langsung, ekspor MP3 atau WAV — gratis, privat, tidak ada yang diunggah.',
      h1: 'Percepat lagu — Percepat atau perlambat audio',
      heroAlt: 'Pelankan lagu untuk latihan, atau percepat sebuah kuliah',
      subtitle: 'Percepat atau perlambat audio apa pun dari 0.5× hingga 2× — langsung di browser.',
      intro:
        'Ubah kuliah 40 menit menjadi 20 menit yang lebih cepat, perlambat solo gitar hingga setengah kecepatan untuk latihan, atau sesuaikan trek agar muat di slot video yang lebih pendek. Geser pengatur kecepatan, dengarkan perubahannya langsung, lalu ekspor — audio diolah di perangkat Anda dan tidak pernah diunggah.',
      usesHeading: 'Skenario penggunaan umum pengubahan kecepatan audio',
      uses: [
        'Dengar cepat konten panjang: podcast dan kuliah di 1.25×–1.5×, waktu berhemat separuh.',
        'Dengar pelan untuk detail: bicara atau solo diputar setengah kecepatan, tiap nada terdengar jelas.',
        'Cek sebelum disimak: geser cepat dulu untuk memastikan isinya, lalu tetapkan kecepatan untuk disimak.',
        'Mengubah kecepatan bahan: putar sampel lebih cepat dan lebih lambat untuk mencari rasa.',
        'Belajar bahasa: perlambat audio bahasa asing sambil mengulangnya.',
        'Suara efek: diputar cepat terasa kartun, diputar lambat terasa berat dan dalam.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Setelan mulus 0.5×–2×',
          text: 'Slider mengubah kecepatan secara mulus, dan nada mengikuti kecepatan — kalau nada harus tetap, pakai [pengubah tempo](/tempo-changer).',
        },
        {
          icon: 'lock-simple',
          title: 'Diproses lokal',
          text: 'Pengubahan kecepatan selesai di dalam peramban, audio tidak diunggah.',
        },
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
        {
          name: 'Ambil file kamu',
          text: 'Nama file mendapat akhiran -edited.',
        },

      ],
      faqs: [
        {
          q: 'Apakah mengubah kecepatan juga mengubah nada?',
          a: 'Di halaman ini, kecepatan dan nada bergerak bersama: 2× sekitar satu oktaf lebih tinggi, 0.5× sekitar satu oktaf lebih rendah. Pengubah tempo mempertahankan nada dan mengubah durasi, dari 0.75× sampai 1.25× dengan langkah 0.01. Untuk mengubah nada tanpa mengubah durasi, gunakan pengubah nada.',
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
      screenshotsAlt: [
        'Percepat lagu: area jatuhkan, tidak ada yang dikirim ke server',
        'Percepat lagu: area kerja dengan berkas yang sudah dimuat',
        'Percepat lagu: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Kecepatan dan nada bergerak bersama',
          paragraphs: [
            'Kontrol ini memutar berkas lebih cepat atau lebih lambat seperti kaset, dari 0,5× sampai 2×. Lebih cepat berarti berkas lebih pendek dan nada lebih tinggi. Lebih lambat berarti berkas lebih panjang dan nada lebih rendah. 2× sekitar satu oktaf lebih tinggi, 0,5× sekitar satu oktaf lebih rendah.',
            'Mempertahankan nada saat durasi berubah ada di [pengubah tempo](/tempo-changer), dari 0,75× sampai 1,25×. Halaman ini tetap menggeser nada bersama kecepatan. Suara lebih tinggi atau rendah dengan durasi tetap ada di [pengubah nada](/pitch-changer), hingga 12 seminada.',
          ],
        },
        {
          heading: 'Di mana kontrol ini berguna',
          paragraphs: [
            'Gunakan saat perubahan nada bisa diterima atau justru menjadi tujuannya:',
          ],
          bullets: [
            'Kuliah atau memo suara yang ingin Anda selesaikan lebih cepat, termasuk nada chipmunk.',
            'Putaran lebih lambat agar Anda bisa mentranskripsi, dengan suara turun.',
            'Pratinjau singkat klip pada tempo lain sebelum ekspor.',
          ],
        },
        {
          heading: 'Lagu yang diperlambat ada di halaman lain',
          paragraphs: [
            'Halaman [slowed reverb](/slowed-reverb) adalah kontrol kecepatan yang sama ditambah reverb 2,2 detik. Nada tetap mengikuti kecepatan. Halaman ini hanya kontrol kecepatannya.',
            'Di atas 100 persen pada halaman slowed adalah arah nightcore. Lakukan di sana jika Anda juga ingin tombol reverb. Ekspor di sini jika hanya ingin durasi barunya.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Ubah tempo dan unduh',
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
      usesHeading: 'Skenario penggunaan umum peningkatan volume',
      uses: [
        'Memo ponsel: suara yang direkam terlalu jauh dari mikrofon, angkat sampai terdengar jelas.',
        'Kuliah dari baris belakang: rekaman dari kursi belakang — biarkan limiter menahan puncaknya dulu baru dinaikkan.',
        'Musik latar video: MP3 yang terlalu pelan dibuat cukup keras tanpa pecah, lalu ditaruh di bawah video.',
        'Penyelamatan wawancara: level trek wawancara terlalu rendah — naikkan sampai tiap kata terdengar.',
        'Cadangan rapat: rekaman cadangan yang volumenya ditingkatkan jauh lebih berguna daripada tidak ada.',
        'Headphone kurang peka: pada perangkat dengan batas volume rendah, tingkatkan dulu file sumbernya.',
      ],
      why: [
        {
          icon: 'volume',
          title: 'Limiter menahan puncak',
          text: 'Slider naik sampai 400% (sekitar +12 dB). Peningkatan sedang 150–250% biasanya bersih; di atas 300% puncak mulai terasa menghisap — percayakan pada telinga.',
        },
        {
          icon: 'scissors',
          title: 'Keras yang bersih',
          text: 'Kalau terdengar sesek, mundurkan 10–20% — keras yang bersih lebih baik daripada ditarik sampai maksimal.',
        },
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
        {
          name: 'Ekspor file yang lebih keras',
          text: 'Simpan sebagai MP3 atau WAV. Jika terdengar sesak, mundurkan 10–20% — keraskan yang bersih lebih baik daripada maksimal.',
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
      screenshotsAlt: [
        'Perbesar Volume MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Perbesar Volume MP3: area kerja dengan berkas yang sudah dimuat',
        'Perbesar Volume MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'MP3 yang terlalu pelan',
          paragraphs: [
            'Perbesar volume MP3 mengalikan berkas, hingga 400 persen, sekitar +12 dB. Di atas 100 persen limiter menjaga puncak agar tidak terpotong keras.',
            'Gain sejenis untuk soundtrack video atau format lain adalah volume booster. Halaman ini versi untuk MP3. Berkas video sering tetap bisa didekode di sini.',
          ],
        },
        {
          heading: 'Apa yang tidak dilakukan pengali',
          paragraphs: [
            'Ini satu gain untuk seluruh berkas. Ini bukan standar kenyaringan dan tidak meratakan dinamika:',
          ],
          bullets: [
            'Target podcast −16 LUFS: ukur di [pengukur kenyaringan](/loudness-meter). Jika puncak sampel akan melewati −1 dBFS, halaman itu menghentikan gain.',
            'Satu puncak sudah mendekati skala penuh, sisanya terlalu pelan: [normalisasi audio](/normalize-audio) menetapkan puncak itu ke 0,98, dibatasi 4×. Bagian pelan tidak diangkat lebih jauh.',
            'Bagian keras dan pelan yang harus saling mendekat: [kompresor level](/compressor), bukan penggeser ini.',
          ],
        },
        {
          heading: 'Ekspor',
          paragraphs: [
            'Anda mendapat berkas baru. MP3 yang Anda letakkan tetap di tempatnya. Mendorong berkas yang sudah keras sebagian besar hanya mengenai limiter dan bisa terdengar datar.',
            'Jika MP3 pelan karena isinya keheningan panjang dengan frasa pendek, pangkas atau potong dulu, lalu naikkan sisanya.',
          ],
        }
        ,
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Keraskan dan unduh',
    },
    'mp4-to-mp3': {
      cardLine: 'Simpan trek suara klip video, rekaman layar, atau file kamera sebagai MP3.',
      name: 'Ubah Video Menjadi MP3',
      shortName: 'MP4 ke MP3',
      title: 'MP4 ke MP3 — konversi video MP4, MOV, dan WebM ke MP3 online',
      description:
        'Ekstrak trek audio dari MP4, MOV, atau WebM menjadi MP3, di browser Anda. 64–320 kbps, batch sebagai satu ZIP. Trek AC3/DTS tidak dapat didekode.',
      h1: 'Ubah Video Menjadi MP3',
      heroAlt: 'Ubah trek audio MP4, MOV, atau WebM menjadi MP3',
      subtitle: 'Ambil soundtrack dari video apa pun — langsung di browser, tidak ada yang diunggah.',
      intro:
        'Ubah video MP4 menjadi audio MP3 tanpa menginstal apa pun dan tanpa mengunggah ukuran gigabyte ke server. Browser membaca file dari disk, mendekode soundtrack secara lokal, lalu menyimpannya sebagai MP3 — video 500 MB selesai dalam hitungan detik karena yang diproses hanya trek audionya.',
      usesHeading: 'Kasus umum konversi MP4 ke MP3',
      uses: [
        'Simpan kuliah: ubah video kuliah atau konser menjadi audio untuk didengar tanpa layar.',
        'Sumber wawancara: ambil trek dari file kamera untuk transkripsi atau penyuntingan.',
        'Ekstrak musik: konversi rekaman konser menjadi MP3 untuk mobil.',
        'Rekaman layar: simpan hanya narasi dari rekaman kursus — sepersepuluh ukurannya.',
        'Arsip: konversi klip kamera lama menjadi MP3 secara batch.',
        'Sumber podcast: konversi seluruh trek dulu, lalu potong bagiannya di [audio trimmer](/audio-trimmer).',
      ],
      why: [
        {
          icon: 'film',
          title: 'Hanya treknya, gambar tak tersentuh',
          text: 'Browser mendekode audio dan menulis MP3 langsung — trek video diabaikan: 4K dan 240p berkonversi dengan kecepatan yang sama.',
        },
        {
          icon: 'warning-triangle',
          title: 'Batas dijelaskan langsung',
          text: 'MP4 dengan audio AAC, Opus dalam WebM, dan kebanyakan MOV bisa dikonversi. Trek AC3/DTS tidak dapat didekode dan ditolak dengan pesan yang jelas.',
        },
      ],
      howTo: [
        { name: 'Letakkan video', text: 'Geser MP4 ke bingkai putus-putus, atau klik untuk menelusuri. WebM dengan Opus dan kebanyakan MOV sama. Beberapa file berbagi pengaturan berikut.' },
        { name: 'Pilih bitrate', text: '64–320 kbps: 320 untuk video musik, 192 untuk pendengaran harian, 128 untuk wawancara dan kuliah.' },
        { name: 'Klik “{export}”', text: 'Tombol utama di bilah ekspor. Trek audio didekode secara lokal — gambar tidak disentuh: 4K dan 240p berkonversi sama cepat.' },
        { name: 'Bawa filenya', text: 'Satu file unduh sendiri; dua atau lebih jadi satu ZIP bernama -converted.' },
      ],
      faqs: [
        { q: 'Bisakah saya mengubah lebih dari satu video?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
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
        {
          q: 'Bisakah mengubah video dari YouTube atau platform lain?',
          a: 'Tidak. Halaman ini membaca file yang dipilih di perangkat ini dan tidak menerima tautan. Mengunduh audio dari platform streaming biasanya melanggar ketentuannya — konversilah video yang Anda rekam sendiri atau yang Anda punya izinnya.',
        },
        {
          q: 'Apakah harus memasang aplikasi?',
          a: 'Tidak perlu. Konverter berjalan di tab browser ini, di desktop maupun ponsel. Tidak ada yang perlu dipasang dan tidak ada akun yang harus dibuat.',
        },
      ],
      screenshotsAlt: [
        'Ubah Video Menjadi MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Ubah Video Menjadi MP3: area kerja dengan berkas yang sudah dimuat',
        'Ubah Video Menjadi MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Hanya soundtrack yang dikonversi',
          paragraphs: [
            'MP4 adalah kontainer. Gambar dan suara adalah trek terpisah. Halaman ini mendekode suara dan menulis MP3. Gambar tidak pernah dienkode, diunggah, atau disimpan.',
            'Gambar tidak didekode, jadi resolusi bukan bagian dari konversi. Berkas tetap di perangkat ini. Berkas di atas 300 MB ditolak.',
          ],
        },
        {
          heading: 'Bitrate MP3 mana yang dipakai',
          paragraphs: [
            'Soundtrack dienkode sekali, pada rate yang Anda pilih.',
          ],
          bullets: [
            'Menunya 64, 96, 128, 192, dan 320 kbps. Halaman ini dimulai dari 320.',
            'WAV adalah PCM 16-bit dari sampel yang sudah didekode. MP3 mengenkode sampel itu sekali.',
            'Judul, artis, dan sampul tidak ikut disalin.',
          ],
        },
        {
          heading: 'MP4 ke MP3, atau ekstrak audionya',
          paragraphs: [
            'Ekspor dimulai sebagai MP3 320 kbps. WebM dan MOV hanya terbuka jika browser ini bisa mendekode soundtrack. Ganti format ke WAV untuk salinan 16-bit. Halaman yang menjadikan WAV pilihan bawaan adalah [ekstrak audio](/extract-audio).',
            'Jika hanya perlu satu menit, konversi seluruh soundtrack di sini lalu gunakan [pemangkas audio](/audio-trimmer). Halaman ini tidak memotong rentang dari video.',
          ],
        },
        {
          heading: 'Berkas yang tidak bisa dibaca browser',
          paragraphs: [
            'Jika browser ini tidak bisa mendekode soundtrack, pesannya: Berkas ini tidak dapat didekode, mungkin rusak, atau codec-nya tidak didukung browser Anda. Pesan itu tidak menyebut nama codec.',
            'MP3 tidak menyimpan judul video atau thumbnail. Atur nama trek sesudahnya di [editor tag MP3](/mp3-tag-editor) jika perlu muncul di pemutar.',
          ],
        },
        {
          heading: 'Halaman ini, VLC, atau situs unggah',
          paragraphs: [
            'Tiga jalur mengubah video menjadi MP3. Pilih berdasarkan ukuran berkas dan seberapa sering Anda mengonversi. Rinciannya diperiksa pada layanan langsung tanggal 28 Oktober 2026.',
          ],
          table: {
            headers: [
              '',
              'Halaman ini',
              'VLC di desktop',
              'Situs unggah',
            ],
            rows: [
              [
                'Instalasi',
                'Tidak perlu',
                'Ya',
                'Tidak',
              ],
              [
                'Berkas meninggalkan perangkat',
                'Tidak',
                'Tidak',
                'Ya',
              ],
              [
                'Batas ukuran',
                '300 MB per berkas',
                'Ruang disk kosong',
                'Tergantung layanan',
              ],
              [
                'Beberapa berkas',
                'Ya, satu ZIP',
                'Satu per satu',
                'Tergantung layanan',
              ],
              [
                'Biaya',
                'Gratis',
                'Gratis',
                'Batas paket gratis',
              ],
            ],
          },
          outro: [
            'Kumpulan rekaman berdurasi satu jam setiap malam lebih cocok untuk program desktop.',
            'Soundtrack sekali pakai cocok untuk halaman ini: tidak ada yang diinstal, dan video tidak pernah meninggalkan perangkat.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file MP4 atau video, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'extract-audio': {
      cardLine: 'Ekstrak audio bersih dari video apa pun untuk mengedit, mentranskripsi, atau sampling.',
      name: 'Ekstrak Audio',
      shortName: 'Ekstrak Audio',
      title: 'Ekstrak Audio dari Video — Simpan Suara sebagai MP3 atau WAV',
      description:
        'Ekstrak trek audio dari video apa pun di browser, lalu simpan sebagai MP3 atau WAV lossless. Gratis, privat, tanpa unggah — juga untuk file yang besar.',
      h1: 'Ekstrak Audio dari Video — Ekstrak MP3 dari video',
      heroAlt: 'Simpan trek video sebagai MP3 atau WAV',
      subtitle: 'Simpan soundtrack video apa pun sebagai MP3 atau WAV — secara lokal, dalam hitungan detik.',
      intro:
        'Pisahkan suara dari gambarnya: ambil wawancara dari panggilan video, simpan film konser sebagai album, atau pakai ulang soundtrack di suntingan Anda sendiri. Trek audio didekode di perangkat Anda, lalu bisa disimpan sebagai WAV lossless atau sebagai MP3 yang ringkas.',
      usesHeading: 'Skenario penggunaan umum mengekstrak audio dari video',
      uses: [
        'Rekaman layar: sisakan hanya suara penjelasan dari rekaman kelas online, file mengecil sepuluh kali lipat.',
        'Video ponsel: ambil suara suasana saat perekaman untuk dijadikan bahan.',
        'Cadangan wawancara: pisahkan wawancara video menjadi audio, serahkan ke [transkripsi](/audio-to-text).',
        'Konser: tarik rekaman konser menjadi audio live untuk dikoleksi.',
        'Dasar lossless: simpan WAV untuk penyuntingan, hasil akhir baru dikompres ke MP3.',
        'Bahan podcast: perekaman dua kamera — tarik trek audionya masuk ke alur penyuntingan.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Dua pintu keluar: MP3 dan WAV',
          text: 'Untuk dikirim pilih MP3; untuk lanjut menyunting atau meredam derau, pilih WAV agar semua sampel tetap tersimpan.',
        },
        {
          icon: 'film',
          title: 'Hanya trek audio yang didekode',
          text: 'Gambar video diabaikan sepenuhnya, hanya trek audio yang didekode — karena itu file besar pun cepat.',
        },
      ],
      howTo: [
        {
          name: 'Jatuhkan videonya',
          text: 'MP4, WebM, atau MOV apa pun dengan soundtrack standar bisa dipakai. File tidak pernah meninggalkan perangkat Anda. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.',
        },
        {
          name: 'Pilih formatnya',
          text: 'MP3 192 kbps untuk didengar dan dibagikan; WAV untuk salinan lossless yang bisa disunting atau diarsipkan.',
        },
        {
          name: 'Ekstrak dan simpan',
          text: 'Klik Ekstrak Audio. Soundtrack didekode secara lokal dan langsung terunduh.',
        },
        {
          name: 'Ambil file kamu',
          text: 'File tunggal langsung diunduh; beberapa file dikemas dalam satu ZIP.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengambil audio dari lebih dari satu video?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
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
      {
        q: 'Bisakah Anda mengekstrak jalur suara lokal dari Claude atau Cursor?',
        a: 'Halaman ini mengekstrak jalur suara yang bisa didekode browser. AC3 dan DTS ditolak di sini. /mcp memakai ffmpeg, jadi sebuah format terbuka hanya jika build ffmpeg Anda memuat dekoder itu. Tidak mengambil video dari tautan. Aplikasi chat tetap melihat jalur berkas.',
      },
        {
          q: 'Bisakah mengekstrak audio dari video YouTube?',
          a: 'Tidak. Halaman ini membaca file yang dipilih di perangkat ini dan tidak menerima tautan. Menyimpan audio dari platform streaming biasanya melanggar ketentuannya — pakailah video yang Anda rekam sendiri atau yang Anda punya izinnya.',
        },
      ],
      screenshotsAlt: [
        'Ekstrak Audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Ekstrak Audio: area kerja dengan berkas yang sudah dimuat',
        'Ekstrak Audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Tarik soundtrack dari video',
          paragraphs: [
            'Ekstrak audio mendekode soundtrack dan membuang gambarnya. Ekspor dimulai sebagai MP3 192 kbps. Menunya juga menyertakan WAV.',
            '[MP4 ke MP3](/mp4-to-mp3) adalah jalur dekode yang sama, dimulai dari 320 kbps.',
          ],
        },
        {
          heading: 'Apa yang dihasilkan, dan apa yang tidak',
          paragraphs: [
            'Hanya trek audio yang didekode. Frame video dibuang:',
          ],
          bullets: [
            'Video ponsel atau rekaman layar menjadi berkas yang bisa Anda pangkas, gabung, atau beri tag.',
            'WAV adalah PCM 16-bit dari sampel yang sudah didekode. MP3 mengenkode sampel itu sekali.',
            'Jika browser ini tidak bisa mendekode soundtrack, pesannya tidak menyebut nama codec.',
          ],
        },
        {
          heading: 'Halaman ini tidak membisukan video',
          paragraphs: [
            'Halaman ini menyimpan suara dan membuang gambarnya. Halaman ini tidak mengembalikan video.',
            'Berkas di atas 300 MB ditolak. Gambar tidak didekode, jadi resolusi bukan bagian dari konversi. Tidak ada yang diunggah.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file video, atau klik untuk memilih',
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
      usesHeading: 'Situasi penggunaan umum perekam suara online',
      uses: [
        'Memo suara: ucapkan begitu terlintas, potong awal dan akhirnya setelah merekam.',
        'Latihan bahasa: rekam pelafalanmu sendiri dan bandingkan dengan aslinya untuk dikoreksi.',
        'Draf wawancara: rekam dulu wawancara tatap muka, rapikan dan transkrip belakangan.',
        'Notulen rapat: rekam kesimpulan dengan cepat, lengkapi poin pentingnya secara tertulis.',
        'Uji coba narasi: rekam draf voice-over untuk demo atau kursus, dengar ulang dan perbaiki berulang kali.',
        'Ide musik: senandungkan sebuah melodi dan simpan sebelum hilang.',
      ],
      why: [
        {
          icon: 'mic',
          title: 'Bisa dipotong begitu selesai',
          text: 'Rekaman langsung dimuat ke editor di bawah: potong awal dan akhir, tandai seleksi, ekspor ke MP3 atau WAV tanpa membuka alat kedua.',
        },
        {
          icon: 'lock-simple',
          title: 'Rekaman tidak keluar dari tab',
          text: 'Data mikrofon hanya tersimpan di memori tab, tidak ada yang dikirim. Tutup tanpa mengekspor, rekaman ikut hilang — percakapan rahasia pun aman.',
        },
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
        {
          name: 'Jangan lupa ekspor',
          text: 'Rekaman hanya ada di memori tab ini. Menutup halaman tanpa mengekspor akan menghapusnya — ekspor dulu, baru tutup.',
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
      screenshotsAlt: [
        'Perekam Suara: area jatuhkan, tidak ada yang dikirim ke server',
        'Perekam Suara: area kerja dengan berkas yang sudah dimuat',
        'Perekam Suara: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Mikrofon tetap di browser',
          paragraphs: [
            'Perekam suara memakai MediaRecorder di tab ini. Rekamannya tidak diunggah. Jika Anda menutup tab sebelum ekspor, rekamannya hilang.',
            'Format tangkapan bergantung pada browser. Ekspor memilih MP3 atau WAV, jadi berkas yang Anda simpan adalah yang Anda pilih, bukan format yang direkam browser secara internal.',
          ],
        },
        {
          heading: 'Setelah merekam',
          paragraphs: [
            'Anda bisa memangkas dengan mempertahankan pilihan, lalu mengekspor rentang itu:',
          ],
          bullets: [
            'Potong napas sebelum kata pertama dan keheningan setelah kata terakhir.',
            'Ekspor WAV jika Anda akan mengedit rekaman lagi dan ingin mengenkode sekali.',
            'Ekspor MP3 jika memo hanya perlu dikirim atau disimpan kecil.',
          ],
        },
        {
          heading: 'Apa yang tidak dilakukannya',
          paragraphs: [
            'Alat ini butuh browser yang mendukung MediaRecorder dan izin memakai mikrofon. Alat ini tidak mentranskripsi. Ucapan ke teks ada di halaman ubah audio ke teks, dan halaman itu menerima berkas, bukan mikrofon langsung.',
            'Rekaman yang terlalu pelan tetap pelan setelah ekspor. Naikkan dengan volume booster, atau cek level di pengukur kenyaringan jika tujuannya target podcast.',
          ],
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
      h1: 'Perbesar Volume Audio — Buat audio dan video lebih keras',
      heroAlt: 'Keraskan trek video yang terlalu pelan',
      subtitle: 'Perbesar trek dan soundtrack video yang pelan hingga 4× — bersih, tidak clipping.',
      intro:
        'Untuk semua yang terdengar terlalu pelan: video ponsel yang sunyi, rekaman akustik yang lembut, podcast yang hasil mastering-nya nyaris berbisik. Muat file, naikkan volume hingga 4×, dan biarkan limiter bawaan menahan puncak agar bagian yang keras tetap bersih. Berlaku untuk file audio maupun video — yang diproses hanya soundtrack-nya.',
      usesHeading: 'Situasi penggunaan umum penambah volume',
      uses: [
        'Trek video: angkat audio video rekaman yang terdengar lebih pelan dari gambarnya.',
        'Musik yang pelan: naikkan lagu lawas atau musik unduhan yang levelnya rendah ke keras normal.',
        'Rekaman ponsel: saat angin luar menutupi suara, angkat suara bicaranya.',
        'Putar ulang rapat: rekaman rapat daring terlalu pelan, besarkan sampai terdengar jelas.',
        'Rekaman presentasi: besarkan suara penjelas di screencast pelatihan tanpa merekam ulang.',
        'Pramutar draf video: besarkan trek draf video untuk memastikan isinya dulu.',
      ],
      why: [
        {
          icon: 'film',
          title: 'Video langsung diproses',
          text: 'Berkas video bergambar pun bisa dikeraskan: hanya trek audionya yang diproses, gambar tetap, dan ekspor tetap dalam kontainer video yang sama.',
        },
        {
          icon: 'volume',
          title: 'Besarnya kamu yang tentukan',
          text: 'Slider diatur bebas, dengarkan sambil mengatur; besarnya ditentukan telinga, bukan persentase yang ditebak.',
        },
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
        {
          name: 'Sesuaikan lalu ekspor',
          text: 'Kalau terdengar pecah, kurangi sedikit penguatannya; coba beberapa tingkat sebelum mengekspor.',
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
      screenshotsAlt: [
        'Perbesar Volume: area jatuhkan, tidak ada yang dikirim ke server',
        'Perbesar Volume: area kerja dengan berkas yang sudah dimuat',
        'Perbesar Volume: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Perkeras audio tanpa suara pecah',
          paragraphs: [
            'Berkas terpotong saat sampel mencoba melewati batas digital, 0 dBFS. Penguatan mengalikan setiap sampel. Jika momen paling keras sudah dekat batas itu, penguatan besar memotong puncaknya dan Anda mendengar suara pecah.',
            'Di atas 100% halaman ini menjalankan limiter: ambang −2 dB, knee 3, rasio 20, attack 0,002 detik, release 0,15 detik. Penggeser berjalan dari 10% sampai 400%.',
          ],
          bullets: [
            'Penggeser 10% sampai 400%, dengan langkah 5.',
            'Di atas 100%, limiter di paragraf sebelumnya diterapkan. Pada atau di bawah 100%, tidak.',
            'Puncak terukur, dibatasi 4×, ada di [normalisasi audio](/normalize-audio).',
            'Halaman ini menulis berkas yang lebih keras. Halaman ini tidak mengubah volume speaker komputer.',
          ],
        },
        {
          heading: 'Puncak lebih tinggi bukan berkas lebih keras',
          paragraphs: [
            'Level puncak adalah sampel paling keras tunggal. Wawancara berbisik dengan satu batuk bisa memuncak dekat skala penuh dan tetap terdengar pelan, karena sisa berkasnya rendah. Mengalikan berkas menaikkan bisikan dan batuk bersama.',
            'Seberapa keras berkas terasa sepanjang durasinya adalah yang diukur LUFS. Halaman ini tidak menargetkan angka LUFS. Pengukur kenyaringan yang melakukannya: membaca LUFS terintegrasi dan bisa menempatkan berkas dekat −16 untuk podcast, −14 untuk streaming, atau −23 untuk siaran, dan berhenti jika puncak sampel akan melewati −1 dBFS.',
          ],
        },
        {
          heading: 'Boost, normalisasi, atau kompres',
          paragraphs: [
            'Tiga halaman di situs ini mengubah level, dan ketiganya bukan pengganti satu sama lain.',
          ],
          bullets: [
            'Volume booster, halaman ini: Anda memilih pengali, dari 10% sampai 400%, dan di atas 100% limiter di bagian sebelumnya menahan puncak. Berkas video diterima di sini. Gambarnya tidak disimpan.',
            '[Normalisasi audio](/normalize-audio): satu gain terukur agar puncak paling keras berada di 0,98, dibatasi 4×.',
            '[Kompresor level](/compressor): menurunkan momen keras dan menaikkan kata pelan, lalu mengembalikan puncaknya, dibatasi 0,98. Boost tidak melakukan itu.',
          ],
        },
        {
          heading: 'Soundtrack video dan rekaman ponsel',
          paragraphs: [
            'Letakkan MP4, WebM, atau MOV dan hanya soundtrack yang didekode, diperkuat, dan disimpan sebagai MP3 atau WAV. Gambarnya diabaikan. Jika browser tidak bisa membaca codec audio, ekstrak audionya dulu.',
            'Berkas yang diperkuat lebih keras di setiap perangkat yang memutarnya. Volume speaker hanya membantu perangkat di depan Anda. Ekspor WAV jika Anda akan mengedit lagi. MP3 mengenkode sekali. Penguatan tidak bisa menciptakan detail yang tidak pernah ditangkap mikrofon ponsel yang pelan, dan penguatan juga menaikkan desis yang sudah ada.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file audio atau video, atau klik untuk memilih',
      exportLabel: 'Keraskan dan unduh',
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
      usesHeading: 'Situasi penggunaan umum normalisasi audio',
      uses: [
        'Menyetarkan satu batch: angkat seluruh tumpukan rekaman ke level volume yang seragam dan sehat.',
        'Menyelaraskan sebelum digabung: normalisasi dulu rekaman-rekaman yang akan bersambung, supaya satu bab tidak terdengar setengah lebih pelan dari tetangganya.',
        'Menyelamatkan rekaman pelan: memo suara atau rekaman langsung yang keseluruhan terlalu kecil, angkat sekali klik.',
        'Pengganti penggandaan buta: saat tidak tahu slider harus digeser seberapa jauh, pakai gain hasil hitungan.',
        'Koreksi pascaekspor: kembalikan normal file yang keluar dari aplikasi lain di sekitar −18 ديسيبل.',
        'Pemeriksaan pra-rilis: puncak penuh, dinamika tetap; kompresi selanjutnya serahkan ke [kompresor level](/compressor).',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Gain dari hitungan',
          text: 'Normalisasi memindai puncak tertinggi lalu mengangkat seluruh file sampai puncaknya tepat di bawah skala penuh (sekitar −0.2 ديسيبل). Bagian pelan dan keras bergeser bersama, dinamika tetap.',
        },
        {
          icon: 'layers',
          title: 'Batch, diukur satu per satu',
          text: 'Beberapa file memakai tombol normalisasi yang sama, masing-masing diangkat sesuai puncaknya sendiri; satu file diunduh langsung, dua atau lebih dikemas jadi ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Jatuhkan audio Anda',
          text: 'MP3, WAV, M4A, atau file audio lain apa pun. File didekode dan dianalisis secara lokal — tidak ada yang meninggalkan perangkat Anda. Beberapa file memakai tombol Normalisasi yang sama. Setiap file naik ke puncaknya sendiri. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.',
        },
        {
          name: 'Klik Normalisasi',
          text: 'File dipindai untuk menemukan puncaknya, lalu dinaikkan agar puncak itu berada tepat di bawah skala penuh. Putar untuk mendengar perbedaannya.',
        },
        {
          name: 'Ekspor',
          text: 'Simpan sebagai MP3 atau WAV. WAV menghindari satu kali pengodean lossy tambahan jika file masih akan disunting lagi.',
        },
        {
          name: 'Ekspor',
          text: 'Simpan sebagai MP3 atau WAV. Jika masih ingin mengedit, pilih WAV lossless untuk menghindari enkode lossy kedua.',
        },
      ],
      faqs: [
        { q: 'Bisakah saya menormalkan lebih dari satu file?', a: 'Bisa. Saat Normalisasi menyala, setiap file dalam antrean memakainya. Setiap file diukur sendiri dan naik ke puncaknya sendiri, satu per satu di perangkat ini. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
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
      {
        q: 'Bisakah Anda menormalkan berkas lokal dari Claude atau Cursor?',
        a: 'Halaman ini menaikkan puncak di browser, sampai sekitar -0.2 dB. /mcp menjalankan loudnorm ffmpeg satu kali, pada -16 LUFS, -1.5 dBTP, dan LRA 11. Itu satu lintasan, bukan lintasan terukur yang kedua. Aplikasi chat tetap melihat jalur berkas.',
      }],
      screenshotsAlt: [
        'Normalisasi Audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Normalisasi Audio: area kerja dengan berkas yang sudah dimuat',
        'Normalisasi Audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Satu gain, diarahkan ke puncak',
          paragraphs: [
            'Normalisasi menemukan sampel paling keras dan menerapkan satu gain agar puncak itu berada dekat −0,2 dB. Setiap sampel lain bergerak dengan jumlah yang sama. Bagian pelan tidak mendapat angkatan terpisah.',
            'Ini bukan LUFS. Target podcast −16 LUFS, streaming dekat −14, atau siaran dekat −23 adalah pengukur kenyaringan. Pengukur itu juga menghentikan saran gain jika puncak sampel akan melewati −1 dBFS.',
          ],
        },
        {
          heading: 'Kapan normalisasi adalah langkah tepat',
          paragraphs: [
            'Gunakan saat seluruh berkas memang terlalu pelan dan belum ada yang memuncak:',
          ],
          bullets: [
            'Memo suara yang direkam jauh dari mikrofon, dengan headroom tersisa.',
            'Trek yang harus dekat skala penuh sebelum Anda kirim.',
            'Berkas yang akan Anda kompres atau perkuat berikutnya, agar puncaknya menjadi batas yang diketahui.',
          ],
        },
        {
          heading: 'Kapan hasilnya mengecewakan',
          paragraphs: [
            'Jika satu klik atau napas sudah dekat skala penuh, normalisasi hampir tidak melakukan apa-apa, karena puncak itulah yang menentukan gain. Kompresor level yang menarik keras dan pelan lebih dekat, lalu menyamakan puncaknya.',
            'Membuat berkas lebih keras dengan faktor pilihan Anda, termasuk melewati 100 persen dengan limiter, adalah volume booster. Normalisasi tidak menawarkan pengali itu.',
          ],
        }
        ,
      ],
      dropHint: 'Jatuhkan beberapa file audio, atau klik untuk memilih',
      exportLabel: 'Normalkan dan unduh',
    },
    'slowed-reverb': {
      cardLine: 'Beri lagu apa pun nuansa malam slowed + reverb dalam satu klik.',
      name: 'Slowed + Reverb',
      shortName: 'Slowed + Reverb',
      title: 'Slowed + Reverb — Buat Lagu Slowed + Reverb Online Gratis',
      description:
        'Jadikan lagu apa pun suntingan slowed + reverb di browser — perlambat, beri reverb, ekspor MP3. Gratis, tidak ada yang diunggah.',
      h1: 'Slowed + Reverb — Pelankan lagu dan tambah reverb',
      heroAlt: 'Turunkan lagu ke sekitar 85% dan tambahkan ekor gema yang lembut',
      howToIntro: 'Lebih lambat, di dalam ruangan',
      subtitle: 'Suara larut malam: perlambat trek ke sekitar 85%, tambahkan ruang, lalu ekspor — tanpa aplikasi, tanpa unggah.',
      intro:
        'Slowed + reverb adalah gaya yang menurunkan lagu ke sekitar 80–90% kecepatan sehingga nadanya ikut turun, lalu menambahkan ekor gema yang lembut sampai semuanya terdengar seperti diputar dari dua ruangan jauhnya. Muat sebuah lagu, geser kecepatan ke sekitar 85%, naikkan reverb sampai terasa pas, lalu ekspor — seluruh suntingan terjadi di perangkat Anda, jadi trek sepanjang lagu penuh pun selesai dalam hitungan detik. Naikkan kecepatan di atas 100%, dan yang Anda dapatkan adalah nightcore.',
      usesHeading: 'Situasi penggunaan umum slowed + reverb',
      uses: [
        'Versi malam: pelankan lagu ke sekitar 85%, tambahkan rasa ruang, suasananya langsung lain.',
        'Dengar versi lambat: buat versi pelan dari lagu favorit untuk sensasi dengar yang beda.',
        'BGM video pendek: slowed + reverb adalah nuansa umum video pendek.',
        'Eksperimen vokal: perlambat vokal dan tambahkan reverb untuk bahan suasana.',
        'Atur dua langkah terpisah: tetapkan dulu seberapa lambat, baru seberapa banyak reverb.',
        'Resep sekali klik: parameter bawaan sudah merupakan kombinasi slowed + reverb klasik.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Kecepatan dan wet diatur terpisah',
          text: 'Perlambat dulu ke kecepatan yang diinginkan, baru tambahkan rasa ruang; dua knob terpisah, penyetelan halus tidak saling mengganggu.',
        },
        {
          icon: 'note',
          title: 'Mulai dari resep klasik',
          text: 'Bawaannya memang kombinasi klasik slowed + reverb: perlambatan plus rasa ruang, ekspor langsung siap pakai.',
        },
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
        {
          name: 'Ekspor',
          text: 'Klik Perlambat dan unduh; nama file mendapat akhiran -edited.',
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
          a: 'Ya, dan itu memang disengaja — seperti piringan vinyl pada kecepatan yang salah. Vokal menjadi lebih berat dan tangga nadanya turun dengan rasio yang sama. Turunnya nada itulah ciri gaya ini; slowed tanpa perubahan nada membutuhkan editor time-stretch, dan itu alat yang berbeda serta lebih berat. Lingkaran pelan yang mempertahankan kecepatan dan nada ada di halaman audio 3D.',
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
      screenshotsAlt: [
        'Slowed + Reverb: area jatuhkan, tidak ada yang dikirim ke server',
        'Slowed + Reverb: area kerja dengan berkas yang sudah dimuat',
        'Slowed + Reverb: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Nada turun karena kecepatan turun',
          paragraphs: [
            'Kecepatan berjalan dari 0,50 sampai 2,00 dengan langkah 0,05, dan nada mengikuti. Mempertahankan nada adalah pengubah tempo, dan halaman itu berhenti di 0,75 dan 1,25.',
            'Ruangannya adalah impulse 2,2 detik. Wet di 0 tidak menambah ruangan.',
          ],
          table: {
            headers: [
              'Kecepatan',
              'Suaranya',
              'Pemakaian umum',
            ],
            rows: [
              [
                '0,95',
                'Sedikit lebih lambat; nada turun tipis',
                'Suntingan yang tidak perlu mencolok',
              ],
              [
                '0,90',
                'Bunyi slowed klasik, santai dan lebih gelap',
                'Bunyi tren slowed dan reverb',
              ],
              [
                '0,85',
                'Berat dan melamun, jelas diturunkan nadanya',
                'Suntingan suasana dan loop',
              ],
              [
                'Di atas 1,00',
                'Lebih cepat dan lebih cerah, wilayah nightcore',
                'Halaman yang sama, arah sebaliknya',
              ],
            ],
          },
        },
        {
          heading: 'Nightcore adalah halaman yang sama, arah sebaliknya',
          paragraphs: [
            'Naikkan kecepatan di atas 100 persen dan nadanya ikut naik:',
          ],
          bullets: [
            'Di atas 1,00 berkas menjadi lebih cepat, dan nadanya ikut naik.',
            'Reverb di 0 tidak menambah ruangan.',
            'Rentangnya berhenti di 0,50 dan 2,00.',
          ],
        },
        {
          heading: 'Hak cipta dan alat di sekitarnya',
          paragraphs: [
            'Halaman ini mengubah kecepatan dan menambah ruangan 2,2 detik. Halaman ini tidak memeriksa apakah Anda boleh mengunggah berkasnya.',
            'Kecepatan saja, dari 0,5× sampai 2× dan tanpa tombol reverb, adalah pengubah kecepatan. Nada lebih tinggi atau rendah dengan durasi tetap adalah pengubah nada. Echo berhitung yang tidak mengubah kecepatan adalah halaman echo.',
          ],
        }
        ,
      ],
      dropHint: 'Jatuhkan lagu, atau klik untuk memilih',
      exportLabel: 'Perlambat dan unduh',
    },
    'tempo-changer': {
      cardLine: 'Ubah durasi dari 0.75× sampai 1.25×. Nada tetap.',
      name: 'Ubah tempo',
      shortName: 'Tempo',
      title: 'Ubah tempo — nada tetap, online gratis',
      description: 'Ubah durasi dari 0.75× sampai 1.25× dengan langkah 0.01. Nada tetap. 1× tidak meregangkan. Harmoni padat bisa terdengar tipis. Tidak ada yang diunggah.',
      h1: 'Ubah tempo — Pengubah tempo, durasi bergerak dan nada tetap',
      heroAlt: 'Mengubah lama sebuah file sementara nada tetap',
      subtitle: '0.75× sampai 1.25×, langkah 0.01. Nada tetap di tempatnya.',
      intro: 'Jatuhkan file dan geser kecepatan. File menjadi lebih pendek atau lebih panjang, dan nada dikembalikan ke tempatnya. Penggeser berhenti di 0.75× dan 1.25×. 1× membiarkan sampel dan tidak meregangkan. Harmoni padat bisa terdengar tipis. Itu batas penggeser ini. Tidak ada yang diunggah.',
      usesHeading: 'Penggunaan umum pengubah tempo',
      uses: [
        'Menyesuaikan gambar: musik lebih panjang atau lebih pendek dari video, ubah durasinya tanpa menggeser nada.',
        'Mashup seirama: dua lagu dengan tempo berbeda, samakan dulu kecepatannya sebelum dicampur.',
        'Latihan diperlambat: perlambat lagu cepat untuk berlatih alat musik, nadanya tidak naik atau turun.',
        'Penyesuaian suara: regangkan memo suara sedikit, suaranya tetap suara asli.',
        'Menyesuaikan musik dansa: tarik lagu baru ke BPM yang sama dengan set Anda.',
        'Menyesuaikan sampel: ubah panjang sampel ke jumlah ketukan yang dibutuhkan proyek.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Durasi berubah, nada tetap',
          text: 'Algoritma pejaga nada mengubah kecepatan saja: lebih cepat tidak jadi melengking, lebih lambat tidak jadi berat; paling alami dalam rentang 0.75×–1.25×.',
        },
        {
          icon: 'lock-simple',
          title: 'Diproses lokal',
          text: 'Perhitungan dijalankan di peramban Anda, audio tidak diunggah.',
        },
      ],
      howTo: [
        { name: 'Jatuhkan file', text: 'Tambahkan MP3, WAV, M4A, atau audio lain. File tetap di perangkat Anda.' },
        { name: 'Atur tempo', text: 'Geser dari 0.75× sampai 1.25×. Setiap langkah 0.01. 1.00× adalah file yang Anda jatuhkan.' },
        { name: 'Dengarkan dan ekspor', text: 'Putar untuk mendengar durasi baru pada nada asli, lalu simpan sebagai MP3 atau WAV.' },
        {
          name: 'Ambil file-mu',
          text: 'Nama file mendapat akhiran -edited.',
        },

      ],
      faqs: [
        { q: 'Apakah file diunggah?', a: 'Tidak. Peramban meregangkan file di memori. Setelah halaman termuat, Anda bisa offline dan tetap mengekspor file yang dijatuhkan.' },
        { q: 'Apakah terdengar sama, hanya lebih panjang atau lebih pendek?', a: 'Nada tunggal tetap dekat. Harmoni padat bisa terdengar tipis. Penggeser yang sama, lewat sekitar 7 seminada, menjadi metalik, dan penggeser ini tetap di dalam sekitar 5.' },
        { q: 'Bisakah lebih lambat dari 0.75× atau lebih cepat dari 1.25×?', a: 'Tidak. Penggeser berhenti di situ. 0.5× dan 2× ada di halaman kecepatan, dan di sana nada ikut bergerak. 1× di halaman ini tidak meregangkan.' },
        { q: 'Apa bedanya dengan halaman kecepatan dan pengubah nada?', a: 'Halaman kecepatan mengubah durasi dan nada ikut bergerak, dari 0.5× sampai 2×. Pengubah nada menggeser nada dan mempertahankan durasi. Halaman ini mengubah durasi dan nada tetap.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya. Penggeser kecepatan dan tombol ekspor bisa diketuk di Chrome, Edge, Firefox, dan Safari saat ini.' },
      {
        q: 'Bisakah Anda mengubah tempo berkas lokal dari Claude atau Cursor?',
        a: 'Halaman ini meregangkan dari 0.75× sampai 1.25× dan menjaga nada. /mcp memakai atempo ffmpeg dari 0.5× sampai 2× dan juga menjaga nada. MP3 dikodekan sekali. Aplikasi chat tetap melihat jalur berkas.',
      }],
      screenshotsAlt: [
        'Ubah tempo: area jatuhkan, tidak ada yang dikirim ke server',
        'Ubah tempo: area kerja dengan berkas yang sudah dimuat',
        'Ubah tempo: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Durasi berubah, nada tetap',
          paragraphs: [
            'Halaman ini pertama melakukan resampling berkas, sehingga durasi dan nada bergerak bersama. Lalu nadanya digeser kembali dengan rasio yang sama. 0,8× menjadi 1,25 kali lebih panjang, dan kuncinya kembali ke posisi awal.',
            'Penggeser berjalan dari 0,75× sampai 1,25× dengan langkah 0,01. Tidak ada kontrol di luar rentang itu. Pada 1× peregangan tidak berjalan, dan ekspornya tetap dengan sampel yang Anda letakkan.',
          ],
        },
        {
          heading: 'Di mana batasnya terlihat',
          paragraphs: [
            'Harmoni padat bisa terdengar tipis. Satu suara atau satu not tetap lebih dekat.',
          ],
          bullets: [
            'Langkah terbesar di penggeser ini sekitar 5 seminada. Lewat sekitar 7, pengubah ini berubah metalik.',
            'Tumpukan akor adalah tempat bunyi tipis pertama kali muncul.',
            '1× adalah berkas yang Anda letakkan. Peregangannya dilewati.',
          ],
        },
        {
          heading: 'Halaman kecepatan dan pengubah nada',
          paragraphs: [
            'Halaman kecepatan berjalan dari 0,5× sampai 2× dan nada bergerak bersama tempo. Gunakan saat perubahan nada itu memang tujuannya.',
            'Pengubah nada menggeser kunci dan mempertahankan durasi, hingga 12 seminada. Halaman ini melakukan sebaliknya: durasinya bergerak, dan kuncinya tetap.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Ubah tempo',
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
      usesHeading: 'Situasi umum penggunaan pengubah pitch',
      uses: [
        'Pindah nada biar nyanyi enak : pindahkan lagu ke nada yang cocok untukmu, durasi tetap.',
        'Sulih suara karakter : geser vokal beberapa semitone untuk kesan karakter, kecepatan bicara tak berubah.',
        'Selaraskan sampel : pindahkan sampel ke nada proyek.',
        'Lapisan paduan suara : geser kalimat yang sama ke beberapa semitone, tumpuk jadi harmoni.',
        'Sesuaikan instrumen : transposisi untuk instrumen yang tak punya fitur ubah nada.',
        'Perbandingan demo : naik-turun per semitone sampai menemukan nada paling pas.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Geser bebas ±12 semitone',
          text: 'Langkah 1 semitone : durasi sama sekali tak berubah, hanya nada yang bergerak. Semakin jauh digeser, teksturnya semakin terasa — pergeseran kecil paling alami.',
        },
        {
          icon: 'lock-simple',
          title: 'Diproses lokal',
          text: 'Perubahan pitch dipratinjau langsung di peramban, audio tidak diunggah.',
        },
      ],
      howTo: [
        { name: 'Jatuhkan file', text: 'Tambahkan MP3, WAV, M4A, atau audio lain. File tetap di perangkat Anda.' },
        { name: 'Atur nadanya', text: 'Geser dari −12 sampai +12 seminada. +12 satu oktaf lebih tinggi, −12 satu oktaf lebih rendah. 0 membiarkan file seperti semula.' },
        { name: 'Dengarkan dan ekspor', text: 'Putar untuk mendengar nada baru dengan durasi asli, lalu simpan sebagai MP3 atau WAV.' },
        {
          name: 'Pratinjau dan ekspor',
          text: 'Pratinjau untuk memastikan, lalu ekspor sebagai MP3 atau WAV lossless.',
        },

      ],
      faqs: [
        { q: 'Apakah durasi file berubah?', a: 'Tidak. Pengatur nada menggeser nada dan membiarkan durasi tetap. Untuk membuat file lebih cepat atau lebih lambat — yang juga menggeser nada — gunakan pengubah kecepatan.' },
        { q: 'Seberapa jauh nadanya bisa digeser?', a: 'Dari −12 sampai +12 seminada, satu per satu. Itu satu oktaf ke masing-masing arah. Suara dan satu instrumen lebih tahan geseran besar daripada campuran yang padat.' },
        { q: 'Geseran besar terdengar alami?', a: 'Beberapa seminada masih dekat dengan aslinya. Lewat kira-kira 7 seminada, suaranya menipis dan terdengar metalik. Itu batas pengubah ini, bukan pengaturan yang bisa dimatikan.' },
        { q: 'Apa ini sama dengan mengubah kecepatan?', a: 'Tidak. Pengubah kecepatan memutar file lebih cepat atau lebih lambat, jadi nada ikut berubah dan durasinya juga berubah. Halaman ini hanya menggeser nada. Pengubah tempo mengubah durasi dan nada tetap, dari 0.75× sampai 1.25×.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Pergeseran dihitung di browser dan hasil ekspor disimpan di perangkat Anda.' },
        { q: 'Bisakah mengubah nada lagu untuk menghindari hak cipta?', a: 'Tidak — mengubah nada tidak menghapus hak atas rekaman. Unggahan yang dinaikkan nadanya tetap bisa diklaim atau dihapus. Ubah kunci untuk bernyanyi atau karaoke, dan gunakan musik yang benar-benar Anda punya haknya saat mempublikasikan.' },
        {
          q: 'Apakah bisa di ponsel?',
          a: 'Bisa. Anda menggeser gelombang dengan jari. Chrome, Edge, Firefox, dan Safari saat ini mendekode format yang umum di iPhone dan Android. File yang panjang memakai lebih banyak memori, jadi di atas kira-kira satu jam komputer lebih stabil.',
        },
      ],
      screenshotsAlt: [
        'Pengubah nada: area jatuhkan, tidak ada yang dikirim ke server',
        'Pengubah nada: area kerja dengan berkas yang sudah dimuat',
        'Pengubah nada: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Kuncinya bergeser, durasinya tetap',
          paragraphs: [
            'Pengubah nada menggeser kunci dari −12 sampai +12 seminada, satu langkah setiap kali. Itu satu oktaf ke dua arah. Durasi berkas tetap sama.',
            'Ucapan dan satu instrumen tetap layak lebih jauh daripada mix padat. Pergeseran besar terdengar tidak alami. Ini bukan akal-akalan hak cipta: rekamannya tetap rekaman yang sama.',
          ],
        },
        {
          heading: 'Kapan memakai penggeser',
          paragraphs: [
            'Durasi yang tetap adalah intinya:',
          ],
          bullets: [
            'Trek karaoke digeser ke kunci yang bisa Anda nyanyikan.',
            'Suara digeser satu atau dua seminada agar menyatu dengan rekaman lain.',
            'Pergeseran desain suara saat waktu klip tidak boleh berubah.',
          ],
        },
        {
          heading: 'Kecepatan adalah kontrol lainnya',
          paragraphs: [
            'Pengubah kecepatan berjalan dari 0,5× sampai 2× dan menggeser nada bersama tempo, seperti piringan hitam. 2× sekitar satu oktaf lebih tinggi dan setengah durasinya. Halaman ini tidak melakukan itu.',
            'Slowed + reverb juga menurunkan nada dengan memperlambat berkas, dan menambahkan ekor. Jika Anda ingin bunyi nightcore atau slowed, itulah halamannya. Jika Anda ingin durasi sama dan kunci baru, tetap di sini.',
          ],
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
      exportLabel: 'Ubah nada dan unduh',
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
      usesHeading: 'Penggunaan umum M4A ke MP3',
      uses: [
        'Memo iPhone: ubah memo suara berformat M4A menjadi MP3 yang bisa diputar di mana saja.',
        'Unduhan AAC: ubah audio AAC menjadi MP3 yang dikenali perangkat lama.',
        'Menyelaraskan pustaka: ubah lagu iTunes menjadi MP3, aman untuk head unit mobil dan pemutar lama.',
        'Transkripsi: pakai 128 kbps untuk suara bicara, lalu serahkan hasilnya ke [transkripsi](/audio-to-text).',
        'Lampiran surel: padatkan agar masuk batas 25 MB email.',
        'Persiapan ringtone: konversi dulu ke MP3, lalu potong 40 detik di [pembuat ringtone](/ringtone-maker).',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Dekode AAC langsung',
          text: 'Peramban mendekode trek AAC secara bawaan, tanpa format perantara, sehingga hasilnya langsung berupa setelan MP3 yang Anda mau.',
        },
        {
          icon: 'layers',
          title: 'ZIP massal',
          text: 'Beberapa M4A dikonversi sekaligus, lalu dikemas menjadi ZIP.',
        },
      ],
      howTo: [
        { name: 'Jatuhkan M4A', text: 'Seret file .m4a atau .aac ke halaman, atau klik untuk memilih. Video MP4 ada di halaman MP4 ke MP3. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.' },
        { name: 'Pilih bitrate', text: '320 kbps untuk musik, 192 kbps untuk dengar sehari-hari, 128 kbps untuk memo suara.' },
        { name: 'Konversi dan unduh', text: 'Klik Konversi ke MP3. Dekode dan enkode terjadi di perangkat Anda, lalu file terunduh.' },
        {
          name: 'Klik "Konversi ke MP3"',
          text: 'Didekode dan dienkode ulang secara lokal dalam satu proses — konversi biasanya hanya beberapa detik.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengubah lebih dari satu M4A?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
        { q: 'Bisakah mengubah M4A ke MP3 di iPhone, Android, atau Mac?', a: 'Bisa — konverter berjalan di browser apa pun, jadi perangkatnya bebas. Audio AAC di dalam M4A, yang dipakai memo suara dan sebagian besar unduhan AAC. Apple Lossless (ALAC) di dalam M4A sering gagal didekode di browser. Ubah dulu ke AAC atau WAV, lalu bawa ke sini.' },
        { q: 'Bagaimana dengan video MP4?', a: 'Pakai konverter MP4 ke MP3 untuk video. Halaman ini untuk audio: M4A dan AAC.' },
        { q: 'Mengubah ke MP3 mengurangi kualitas?', a: 'MP3 bersifat lossy. Pada 320 kbps, bedanya dengan AAC asli kecil bagi hampir semua orang. Simpan M4A jika Anda perlu file asli yang utuh.' },
        { q: 'Tag dan sampul ikut tersimpan?', a: 'Tidak. MP3 ditulis tanpa metadata, sama seperti konverter WAV. Judul, artis, dan sampul tidak disalin.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Browser mendekode M4A dan mengkodekan MP3 di perangkat Anda. Audionya tetap di situ.' },
      ],
      screenshotsAlt: [
        'M4A ke MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'M4A ke MP3: area kerja dengan berkas yang sudah dimuat',
        'M4A ke MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Memo suara dan AAC, bukan video',
          paragraphs: [
            'Halaman ini mendekode berkas M4A atau AAC dan mengenkode MP3. Pemilih berkas juga menerima MP4. Jika tab ini tidak bisa mendekode berkasnya, pesannya tidak menyebut nama codec. Berkas video ada di [MP4 ke MP3](/mp4-to-mp3).',
            'Video MP4 masuk ke MP4 ke MP3. Halaman itu mengambil soundtrack dari gambarnya. Halaman ini hanya audio.',
          ],
        },
        {
          heading: 'Apa yang disimpan MP3',
          paragraphs: [
            'MP3 lossy. Menunya pilihan bitrate biasa:',
          ],
          bullets: [
            '320 kbps saat memo atau lagunya harus tetap dekat dengan AAC.',
            '192 kbps untuk ucapan yang masih akan Anda dengarkan.',
            '128 kbps saat berkas terutama harus cukup kecil untuk dikirim.',
          ],
        },
        {
          heading: 'Tag tidak ikut disalin',
          paragraphs: [
            'Judul, artis, dan sampul tidak ikut. MP3 ditulis tanpa metadata. Kembalikan dengan editor tag MP3 jika pemutar perlu nama.',
            'Simpan M4A jika Anda masih perlu aslinya. Konversi tidak mengunggah berkasnya. Pangkas atau potong setelah Anda punya MP3, di pemangkas atau pemotong, jika memo punya keheningan di ujungnya.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file M4A atau AAC, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'ogg-to-mp3': {
      cardLine: 'Buat file OGG dari klip game atau rekaman Linux bisa diputar di aplikasi mana pun.',
      name: 'Konversi OGG ke MP3',
      shortName: 'OGG ke MP3',
      title: 'Konversi OGG ke MP3 — gratis di browser',
      description: 'Konversi OGG ke MP3 di browser, tanpa batas ukuran. Gratis, tanpa daftar, tanpa unggah. Vorbis atau Opus di dalamnya, pada 128, 192, atau 320 kbps.',
      h1: 'Konversi OGG ke MP3 — Ubah OGG menjadi MP3',
      heroAlt: 'Ubah Vorbis atau Opus di dalam file OGG menjadi MP3',
      subtitle: 'Ubah audio OGG menjadi MP3 — di browser, tidak ada yang diunggah.',
      intro: 'OGG adalah wadah, biasanya Vorbis, kadang Opus. Jatuhkan file, pilih bitrate, dan browser mendekode lalu menyimpan MP3. Audio tidak dikirim ke server.',
      usesHeading: 'Penggunaan umum OGG ke MP3',
      uses: [
        'Aset gim: ubah audio OGG hasil ekstraksi gim menjadi MP3 yang dikenali perangkat lunak penyuntingan.',
        'Rekaman peramban: ubah OGG dari aplikasi perekam web menjadi format yang umum.',
        'Rekaman Linux: perekaman bawaan sistem berformat OGG, konversi ke MP3 untuk dibagikan.',
        'Kompatibilitas mobil: head unit lama tidak membaca OGG, konversi ke MP3 langsung diputar.',
        'Pesan suara: suara sebagian aplikasi berformat OGG/Opus, ubah ke MP3 untuk arsip.',
        'Rapikan sekaligus: beberapa OGG dikonversi dalam sekali jalan, dikemas ZIP.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Vorbis dan Opus sama-sama didukung',
          text: 'Kedua enkode internal OGG bisa didekode; berkas .opus mentah seperti pesan suara WhatsApp punya [halaman khusus](/opus-to-mp3).',
        },
        {
          icon: 'layers',
          title: 'ZIP massal',
          text: 'Beberapa OGG memakai satu set pengaturan, dikonversi satu per satu lalu dikemas ZIP.',
        },
      ],
      howTo: [
        { name: 'Jatuhkan OGG', text: 'Seret file .ogg atau .oga ke halaman, atau klik untuk memilih. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.' },
        { name: 'Pilih bitrate', text: '320 kbps untuk musik, 192 kbps untuk dengar sehari-hari, 128 kbps untuk suara.' },
        { name: 'Konversi dan unduh', text: 'Klik Konversi ke MP3. Dekode dan kode terjadi di perangkat Anda, lalu MP3 terunduh.' },
        {
          name: 'Klik "Konversi ke MP3"',
          text: 'Dekoding dan enkode ulang berjalan lokal dalam satu proses — selesai dalam hitungan detik.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya mengubah lebih dari satu OGG?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
        { q: 'Apa itu file OGG?', a: 'OGG adalah wadah. Musik di dalamnya biasanya Vorbis. Beberapa file suara memakai Opus. Jika browser bisa mendekode, halaman ini mengubahnya menjadi MP3.' },
        { q: 'Browser mana yang bisa mengonversi OGG?', a: 'Chrome dan Firefox mendekode Vorbis dan Opus di dalam OGG. Safari mendekode Opus dan sering menolak Vorbis. Jika file tidak berbunyi di tab browser biasa, halaman ini juga tidak bisa mengonversinya.' },
        { q: 'Konversi OGG ke MP3 mengurangi kualitas?', a: 'MP3 berlossy. Pada 320 kbps perbedaannya kecil bagi hampir semua orang. Simpan OGG jika Anda perlu file asli.' },
        { q: 'Tag dan sampul tetap ada?', a: 'Tidak. MP3 ditulis tanpa metadata. Judul, artis, dan sampul tidak disalin.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Browser mendekode OGG dan mengkode MP3 secara lokal. Audio tetap di perangkat Anda.' },
      ],
      screenshotsAlt: [
        'Konversi OGG ke MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Konversi OGG ke MP3: area kerja dengan berkas yang sudah dimuat',
        'Konversi OGG ke MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Vorbis atau Opus di dalam OGG',
          paragraphs: [
            'OGG adalah kontainer. Berkas musik di dalamnya biasanya memakai Vorbis. Beberapa berkas suara memakai Opus. Halaman ini mengonversi keduanya jika browser bisa mendekodenya.',
            'Jika tab ini tidak bisa memutar berkasnya, halaman ini tidak bisa mendekodenya. Menunya dimulai dari 320 kbps. Tag tidak ikut disalin.',
          ],
        },
        {
          heading: 'Bitrate, dan apa yang Anda lepaskan',
          paragraphs: [
            'MP3 lossy. Pada 320 kbps perbedaannya kecil untuk sebagian besar pendengaran. Simpan OGG jika Anda perlu aslinya:',
          ],
          bullets: [
            '320 kbps untuk musik yang akan Anda simpan.',
            '192 kbps untuk berkas suara atau salinan lebih kecil.',
            '128 kbps saat tujuan hanya perlu ucapan yang bisa dipahami.',
          ],
        },
        {
          heading: 'Berkas .opus ada di halaman lain',
          paragraphs: [
            'Catatan suara WhatsApp dan Telegram sering berupa berkas .opus, atau Opus di dalam WebM. Itu masuk ke Opus ke MP3. Halaman ini adalah kontainer OGG.',
            'Judul, artis, dan sampul tidak ikut disalin. MP3 ditulis tanpa metadata. Tidak ada yang diunggah.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file OGG, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'opus-to-mp3': {
      cardLine: 'Konversi panggilan dan unduhan Opus ke MP3 yang diterima semua pemutar.',
      name: 'Konversi Opus ke MP3',
      shortName: 'Opus ke MP3',
      title: 'Konversi Opus ke MP3 — suara WhatsApp jadi MP3',
      description: 'Konversi audio Opus ke MP3 di browser. Gratis, tanpa akun, tidak ada yang diunggah. Untuk file .opus dan Opus di dalam OGG atau WebM.',
      h1: 'Konversi Opus ke MP3 — Ubah Opus menjadi MP3',
      heroAlt: 'Ubah pesan suara WhatsApp atau Telegram menjadi MP3',
      subtitle: 'Ubah audio Opus menjadi MP3 — di browser, tidak ada yang diunggah.',
      intro: 'Pesan suara dan beberapa unduhan adalah Opus: file .opus, atau Opus di dalam OGG atau WebM. Jatuhkan file, pilih bitrate, dan browser mendekode lalu menyimpan MP3. Audio tidak dikirim ke server.',
      usesHeading: 'Penggunaan umum Opus ke MP3',
      uses: [
        'Pesan suara WhatsApp: ubah pesan .opus menjadi MP3 yang bisa diputar di mana saja.',
        'Rekaman rapat: ubah rekaman Discord dan aplikasi lain ke format umum untuk arsip.',
        'Suara gim: simpan berkas Opus hasil ekspor aplikasi suara dengan mengonversinya ke MP3.',
        'Bahan podcast: konversi trek Opus dari tamu jarak jauh sebelum dicampur.',
        'Persiapan transkripsi: dikonversi ke MP3 dulu membuat [transkripsi](/audio-to-text) lebih stabil.',
        'Konversi massal: sekumpulan pesan suara selesai sekali jalan, dikemas ZIP.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Baca .opus langsung',
          text: 'Mendukung berkas .opus mentah maupun Opus dalam wadah OGG/WebM — dua-duanya tak perlu diganti namanya dulu.',
        },
        {
          icon: 'layers',
          title: 'ZIP massal',
          text: 'Puluhan pesan suara dijatuhkan sekaligus, dikonversi satu per satu lalu dikemas ZIP.',
        },
      ],
      howTo: [
        { name: 'Jatuhkan Opus', text: 'Seret file .opus ke halaman, atau klik untuk memilih. OGG dan WebM yang berisi Opus bekerja dengan cara yang sama. Beberapa file boleh sekaligus. Mereka memakai pengaturan yang Anda pilih berikutnya. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP.' },
        { name: 'Pilih bitrate', text: '128 kbps cukup untuk pesan suara. Jika Opus-nya musik, pakai 192 atau 320 kbps.' },
        { name: 'Konversi dan unduh', text: 'Klik Konversi ke MP3. Dekode dan kode terjadi di perangkat Anda, lalu MP3 terunduh.' },
        {
          name: 'Ambil file-mu',
          text: 'Satu file langsung diunduh; beberapa file dikemas sebagai ZIP.',
        }

        ,
      ],
      faqs: [
        { q: 'Bisakah saya mengubah lebih dari satu file Opus?', a: 'Bisa. Beberapa file memakai pengaturan di halaman ini. Mereka dikonversi satu per satu di perangkat ini, dan setiap file dilepas sebelum yang berikutnya mulai. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
        { q: 'Apa itu format Opus?', a: 'Opus adalah codec audio. Pesan suara WhatsApp dan Telegram sering berupa .opus. Opus juga ada di dalam OGG dan WebM. Halaman ini mengubahnya menjadi MP3 yang bisa diputar di mana saja.' },
        { q: 'File Opus mana yang berhasil?', a: 'File yang browser sudah bisa putar: .opus, OGG dengan Opus, dan WebM dengan Opus, di Chrome, Firefox, dan Safari terbaru. Jika tab biasa tetap senyap, halaman ini juga tidak bisa mendekode file itu.' },
        { q: 'Konversi Opus ke MP3 mengurangi kualitas?', a: 'MP3 berlossy, Opus juga. Pada 320 kbps, MP3 sudah di batas formatnya. Pesan suara cukup di 128 kbps. Simpan file Opus jika Anda perlu yang asli.' },
        { q: 'Apakah tag tetap ada?', a: 'Tidak. MP3 ditulis tanpa metadata. Judul dan artis tidak disalin.' },
        { q: 'Apakah file diunggah?', a: 'Tidak. Browser mendekode audio Opus dan mengkode MP3 secara lokal. Audio tetap di perangkat Anda.' },
      ],
      screenshotsAlt: [
        'Konversi Opus ke MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Konversi Opus ke MP3: area kerja dengan berkas yang sudah dimuat',
        'Konversi Opus ke MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Catatan suara yang hanya dibuka sebagian pemutar',
          paragraphs: [
            'Opus adalah codec di dalam banyak catatan suara WhatsApp dan Telegram, disimpan sebagai .opus. Opus juga berada di dalam OGG dan WebM. Halaman ini mengubah audio itu menjadi MP3 yang bisa dibuka mobil, ponsel, atau pemutar lama.',
            'Pemilih menerima .opus, Opus di OGG, dan Opus di WebM. Jika tab ini tidak bisa memutar berkasnya, halaman ini tidak bisa mendekodenya. Menunya dimulai dari 192 kbps.',
          ],
        },
        {
          heading: 'Ucapan tidak butuh 320',
          paragraphs: [
            'Catatan suara adalah ucapan. Pilih bitrate untuk itu:',
          ],
          bullets: [
            '128 kbps cukup untuk catatan suara yang akan Anda kirim atau simpan.',
            '192 kbps jika catatan itu punya musik di bawah suara dan Anda peduli.',
            '320 kbps hanya saat berkas Opus adalah musik dan Anda ingin MP3-nya dekat.',
          ],
        },
        {
          heading: 'Tag, dan halaman OGG',
          paragraphs: [
            'Judul dan artis tidak ikut disalin. MP3 ditulis tanpa metadata. OGG yang sebenarnya musik Vorbis masuk ke OGG ke MP3, halaman yang dinamai untuk kontainer itu.',
            'Tidak ada yang diunggah. Jika catatan punya keheningan panjang di ujungnya, konversi dulu, lalu pangkas. Penghapus senyap adalah alat yang salah untuk musik latar pelan, tetapi cocok untuk catatan suara dengan jeda panjang.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file Opus, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'waveform-generator': {
      cardLine: 'Ubah trek apa pun jadi gambar waveform yang bisa dibagikan dengan warna Anda sendiri.',
      name: 'Generator gelombang audio',
      shortName: 'Gelombang',
      title: 'Generator gelombang audio — gambar gelombang, PNG gratis',
      description: 'Ubah lagu atau rekaman jadi gambar gelombang yang bersih. Pilih warna, gaya, dan ukuran, lalu unduh PNG tajam. Gratis di browser, tidak ada unggahan.',
      h1: 'Generator gelombang audio online gratis — Buat gambar gelombang',
      heroAlt: 'Simpan gelombang sebuah lagu sebagai PNG',
      subtitle: 'Gambar gelombang dari audionya — warna, ukuran, dan PNG transparan, digambar di perangkat Anda.',
      intro: 'Jatuhkan lagu, memo suara, atau podcast dan dapatkan gambar gelombang untuk sampul, latar video, atau unggahan. Batang atau isi, warna, lalu PNG ukuran video, persegi, atau spanduk. Browser menggambar dari file yang Anda buka — tidak ada yang diunggah.',
      usesHeading: 'Situasi umum penggunaan generator gelombang suara',
      uses: [
        'Sampul podcast : gambar persegi bergelombang untuk episode, bukan lagi kotak kosong.',
        'Overlay video : ekspor PNG transparan untuk ditumpuk ke frame video.',
        'Teaser media sosial : gambar gelombang untuk episode terbaru.',
        'Latar panggung : tampilkan gelombang lagu yang sedang main di layar besar.',
        'Desain merchandise : pola gelombang untuk kaos dan poster.',
        'Perbandingan loudness : bandingkan distribusi dua versi secara berdampingan.',
      ],
      why: [
        {
          icon: 'image',
          title: 'Ekspor PNG transparan',
          text: 'Ekspor gelombang dengan latar transparan, langsung ditumpuk ke video, thumbnail, atau poster.',
        },
        {
          icon: 'sliders',
          title: 'Tampilan bisa diatur',
          text: 'Warna, lebar batang, dan parameter tampilan lain bisa diatur sesuai gayamu sendiri.',
        },
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
      screenshotsAlt: [
        'Generator gelombang audio: halaman sebelum ada berkas atau masukan',
        'Generator gelombang audio: setelah membaca berkas atau ketukan',
        'Generator gelombang audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Gambar kenyaringan, bukan suntingan',
          paragraphs: [
            'Generator gelombang menggambar kenyaringan sepanjang waktu: batang bercermin atau bentuk terisi, dengan warna yang Anda pilih. Unduhannya PNG. Ukuran preset diekspor dua kali piksel yang tertera, jadi sampul 1920×1080 terunduh sebagai 3840×2160.',
            'Ukuran kustom di atas sekitar dua juta piksel diekspor pada 1× agar tab tidak kehabisan memori. PNG lossless. Halaman ini tidak memotong, memberi fade, atau memperkuat audionya.',
          ],
        },
        {
          heading: 'Bentuk yang diunduh orang',
          paragraphs: [
            'Pilih bingkai sesuai tempat gambar akan dipasang:',
          ],
          bullets: [
            'Ukuran video untuk latar atau kartu penutup.',
            'Persegi untuk sampul podcast atau lagu.',
            'Spanduk lebar untuk header. Biarkan latar transparan jika PNG akan Anda letakkan di atas video atau gambar lain.',
          ],
        },
        {
          heading: 'Ini bukan spektrogram',
          paragraphs: [
            'Gelombang adalah bentuk yang digambar pemutar musik. Spektrogram menunjukkan frekuensi mana yang ada. Untuk gambar itu, gunakan generator spektrogram.',
            'Untuk memotong berkasnya dulu, gunakan pemangkas audio, lalu kembali untuk gambarnya. Anda tidak bisa memutar PNG kembali menjadi lagu. Memasukkan gambar ke WAV adalah gambar ke audio, arah sebaliknya.',
          ],
        },
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
      usesHeading: 'Situasi umum penggunaan generator spektrogram',
      uses: [
        'Intai sebelum EQ : lihat di mana bass, vokal, dan desis tersebar.',
        'Telur paskah spektrum : ada yang menyembunyikan gambar atau teks di dalam spektrum — sekali lihat langsung ketahuan.',
        'Diagnosis noise reduction : lihat apakah noise berupa desis lebar pita atau dengung sempit, lalu pilih alatnya.',
        'Periksa kaset lama : lihat bagian respons frekuensi mana yang hilang.',
        'Demo pembelajaran : tunjukkan distribusi frekuensi berbagai instrumen kepada siswa.',
        'Bandingkan versi : spektrum dua versi disandingkan untuk membandingkan sumbernya.',
      ],
      why: [
        {
          icon: 'image',
          title: 'Frekuensi sekilas langsung terlihat',
          text: 'Sumbu horizontal waktu, vertikal frekuensi, kecerahan menandakan energi — seluruh isi audio dalam satu gambar.',
        },
        {
          icon: 'download-simple',
          title: 'Unduh PNG',
          text: 'Setelah parameter tampilan diatur, ekspor PNG dan langsung masuk ke dokumen atau slide.',
        },
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
      screenshotsAlt: [
        'Spektrogram online: halaman sebelum ada berkas atau masukan',
        'Spektrogram online: setelah membaca berkas atau ketukan',
        'Spektrogram online: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Frekuensi sepanjang waktu, sebagai PNG',
          paragraphs: [
            'Setiap kolom adalah satu momen. Tinggi adalah frekuensi, nada tinggi di atas. Warna lebih terang berarti energi lebih banyak. Viridis, inferno, dan abu-abu adalah data yang sama dengan skala berbeda. Dasar dan langit-langit dB menentukan apa yang dianggap pelan dan keras.',
            'Gambar itu FFT dari berkas, digambar di tab ini. Itu bukan audio. Anda tidak bisa memutar PNG kembali menjadi lagu.',
          ],
        },
        {
          heading: 'Cara membaca gambar tersembunyi',
          paragraphs: [
            'Beberapa trek menggambar gambar dengan menaruh energi pada frekuensi pilihan. Halaman ini bisa menampilkannya. Halaman ini tidak membuatnya:',
          ],
          bullets: [
            'Pertahankan sumbu log untuk tampilan musik biasa. Sumbu ini meregangkan ujung rendah.',
            'Naikkan langit-langit dB jika gambar tersembunyinya samar.',
            'Perpendek rentang waktu jika hanya ingin satu bagian berkas.',
          ],
        },
        {
          heading: 'Gelombang, dan trik sebaliknya',
          paragraphs: [
            'Generator gelombang adalah kenyaringan sepanjang waktu, bentuk untuk gambar sampul. Halaman ini adalah frekuensi mana yang ada.',
            'Untuk membangun WAV agar spektrogram menampilkan gambar atau satu baris teks pendek Anda, gunakan gambar ke audio, lalu buka WAV itu di sini. Frekuensi log, langit-langit sekitar −20 dB. Bentuknya berada antara sekitar 400 Hz dan 12 kHz. Halaman ini hanya menampilkan.',
          ],
        },
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
      usesHeading: 'Situasi umum penggunaan gambar ke audio',
      uses: [
        'Menyembunyikan teks di spektrum : sembunyikan nama atau satu kalimat di spektrum, terbaca dengan generator spektrogram.',
        'Coretan jadi bunyi : ubah logo sederhana atau coretan menjadi lukisan nada pendek.',
        'Demo pembelajaran : tunjukkan kepada siswa bahwa gambar adalah suara.',
        'Karya seni : ubah karya visual menjadi soundscape yang sesuai.',
        'Membuat telur paskah : hadiah yang bisa didengar dan dilihat untuk video atau lagu.',
        'Melek telinga : latih telinga membedakan warna bunyi dari berbagai bentuk.',
      ],
      why: [
        {
          icon: 'image',
          title: 'Gambar adalah spektrum',
          text: 'Buka audio hasil dengan generator spektrogram, dan kamu akan melihat apa yang kamu gambar atau ketik.',
        },
        {
          icon: 'download-simple',
          title: 'Unduh WAV langsung',
          text: 'Hasilnya WAV standar yang bisa diputar pemutar mana pun.',
        },
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
      screenshotsAlt: [
        'Gambar ke audio: halaman sebelum ada berkas atau masukan',
        'Gambar ke audio: setelah membaca berkas atau ketukan',
        'Gambar ke audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Gambar yang ditulis ke dalam frekuensi',
          paragraphs: [
            'Ketik sampai 32 karakter, atau letakkan PNG, JPG, atau WebP. Halaman ini menulis bentuk itu ke dalam frekuensi WAV mono pada 44,1 kHz, 16-bit, berdurasi beberapa detik. Piksel terang menjadi frekuensi lebih keras.',
            'Itu bukan lagu dan bukan ucapan. Anda mendengar cicit dan noise, bukan kata-kata yang diucapkan. Foto yang sangat detail diperkecil agar berkasnya tetap pendek.',
          ],
        },
        {
          heading: 'Cara melihat apa yang Anda tulis',
          paragraphs: [
            'Bentuknya tidak terlihat pada gelombang biasa. Buka WAV di generator spektrogram:',
          ],
          bullets: [
            'Frekuensi log, langit-langit sekitar −20 dB.',
            'Gambarnya berada antara sekitar 400 Hz dan 12 kHz.',
            'Simpan WAV-nya. MP3 bitrate rendah bisa mengaburkan bentuknya.',
          ],
        },
        {
          heading: 'Bukan kode, dan bukan halaman spektrogram',
          paragraphs: [
            'Siapa pun yang membuka spektrogram WAV bisa melihat gambarnya. Itu gambar di dalam suara, bukan enkripsi.',
            'Generator spektrogram menggambar gambar dari audio yang sudah Anda miliki. Halaman ini membangun audio agar gambar itu menampilkan citra atau baris Anda. Generator gelombang hanya menampilkan kenyaringan, jadi bentuk tersembunyinya tidak akan jelas di sana.',
          ],
        },
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
      usesHeading: 'Penggunaan umum Editor Tag MP3',
      uses: [
        'Memperbaiki tag: atasi masalah “artis tidak dikenal” dan hilangnya sampul pada musik hasil unduhan agar pemutar menampilkannya dengan benar.',
        'Publikasi rapi: isi judul, sampul, dan kredit yang layak untuk episode podcast atau demo.',
        'Bersih-bersih privasi: sebelum membagikan rekaman, hapus sisa informasi perangkat dan lokasi.',
        'Menyelaraskan album: ubah sampul dan kolom genre satu album sekaligus.',
        'Penomoran podcast: tambahkan nomor episode dan nama acara pada judul agar urutan di aplikasi podcast benar.',
        'Audio tak tersentuh: hanya byte tag yang diubah, data audio tetap sama byte demi byte.',
      ],
      why: [
        {
          icon: 'tags',
          title: 'Dibaca dan ditulis di perangkat Anda',
          text: 'Tag dan sampul yang ada dibaca di perangkat Anda, dan berkas yang sudah diubah disimpan langsung dari peramban — tidak ada langkah unggah di mana pun.',
        },
        {
          icon: 'layers',
          title: 'Satu album sekaligus',
          text: 'Beberapa MP3 berbagi artis, album, tahun, genre, dan sampul; judul dan nomor trek tetap per berkas. Dua berkas atau lebih kembali dalam satu ZIP.',
        },
      ],
      howTo: [
        { name: 'Letakkan MP3 Anda', text: 'Letakkan file atau klik untuk memilih. Tag dan cover saat ini dibaca di perangkat Anda dan ditampilkan di formulir. Beberapa MP3 bisa berbagi artis, album, tahun, genre, dan sampul. Judul dan nomor lagu tetap di tiap file. Dua atau lebih diunduh sebagai ZIP.' },
        { name: 'Edit kolomnya', text: 'Ketik judul, artis, album, tahun, dan nomor trek yang benar, lalu tambahkan atau ganti cover dengan JPG atau PNG.' },
        { name: 'Simpan MP3', text: 'Klik "Simpan MP3" untuk mengunduh file yang sudah diberi tag. Audio disalin tanpa perubahan — yang ditulis ulang hanya kartu informasi di sekelilingnya.' },
      ],
      faqs: [
        { q: 'Bisakah saya menandai satu album utuh?', a: 'Bisa. Jatuhkan beberapa MP3. Artis, album, tahun, genre, dan sampul berlaku untuk setiap file. Judul dan nomor lagu tetap di tiap baris. Nomor lagu yang kosong mulai dari 1. Satu file unduh sendiri. Dua atau lebih kembali sebagai ZIP. Audionya tetap disalin byte per byte.' },
        { q: 'Apakah MP3 saya diunggah ke server?', a: 'Tidak. File dibuka dengan API FileReader milik browser dan ditulis ulang langsung di tab Anda. Anda bisa membuka halaman ini, mematikan Wi-Fi, dan editor tetap berjalan. Tidak ada langkah unggah sama sekali.' },
        { q: 'Apakah mengedit tag mengubah kualitas audio?', a: 'Tidak. Data tag tersimpan di blok terpisah di awal file, dan frame audio MPEG disalin byte demi byte, sehingga suaranya identik bit demi bit. File hasil simpan bahkan bisa sedikit lebih kecil karena blok tag lama beserta paddingnya tidak dibawa.' },
        { q: 'Apa bedanya dengan Editor MP3?', a: 'Editor MP3 memotong, memangkas, dan menyambung suaranya, artinya audio didekode dan dienkode ulang. Halaman ini tidak pernah menyentuh suara — yang ditulis ulang hanya kartu informasi di sekelilingnya. Gunakan yang itu untuk mengedit musik, yang ini untuk memberi label.' },
        { q: 'Apa yang tidak bisa dilakukannya?', a: 'Hanya file MP3 yang bisa diedit — FLAC, M4A, dan WAV memakai format tag berbeda yang belum bisa ditulis halaman ini. Beberapa MP3 bisa berbagi artis, album, tahun, genre, dan sampul, dan setiap file menyimpan judul serta nomor lagunya sendiri. Saat menyimpan, seluruh blok tag ditulis ulang, jadi bab podcast atau kolom kustom yang tidak biasa dari tag asli tidak dibawa — kolom yang umum tetap dibawa.' },
        { q: 'Mengapa head unit mobil masih menampilkan "Track 01"?', a: 'Banyak head unit mengabaikan tag dan mengandalkan nama file, dan kebanyakan menyimpan informasi lama sampai Anda memasang ulang flashdisk atau memindai ulang. Simpan di sini (file ditulis sebagai ID3v2.3, versi yang paling andal dibaca head unit), ubah nama file menjadi semacam "01 - Judul Lagu.mp3", lalu pindai ulang.' },
        { q: 'Tag bahasa Mandarin, Jepang, Korea, atau Arab saya tampil kacau. Bisa diperbaiki?', a: 'Bisa — biasanya artinya tag lama tersimpan dengan enkode satu byte, bukan Unicode. Ketik ulang teks yang benar di sini dan simpan: file ditulis ulang sebagai ID3v2.3 dengan teks UTF-16, yang ditampilkan dengan benar oleh pemutar modern, termasuk judul Mandarin, Jepang, Korea, Arab, Kiril, dan Hindi.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya — Chrome, Safari, Firefox, dan Edge terbaru, di desktop maupun ponsel. Saat menyimpan, file diserahkan ke browser seperti unduhan biasa; di iPhone, Safari menyimpannya ke app File. Semuanya berjalan lokal, jadi tetap berfungsi dengan koneksi lambat setelah halaman terbuka.' },
      {
        q: 'Bisakah Anda mengedit tag MP3 lokal dari Claude atau Cursor?',
        a: 'Halaman ini mengedit ID3 di browser, termasuk sampul, dan tidak mengode ulang. /mcp menulis title, artist, album, date, genre, track, dan comment dengan ffmpeg, menyalin audio tanpa perubahan, dan menulis ID3v2.3. Tidak mengedit sampul. Aplikasi chat tetap melihat jalur berkas.',
      }],
      screenshotsAlt: [
        'Editor Tag MP3: halaman sebelum ada berkas atau masukan',
        'Editor Tag MP3: setelah membaca berkas atau ketukan',
      ],
      sections: [
        {
          heading: 'Labelnya berubah, audionya tidak',
          paragraphs: [
            'Editor tag menulis ID3v2.3 dan menyalin frame audio. Editor ini tidak mendekodenya.',
            'Kolomnya judul, artis, album, artis album, tahun, genre, nomor trek, nomor disk, komposer, komentar, dan sampul JPG atau PNG.',
          ],
        },
        {
          heading: 'Apa yang bisa Anda atur, dan apa yang tidak',
          paragraphs: [
            'Beberapa MP3, atau satu. Hanya kolom umum. Artis, album, tahun, genre, dan sampul berlaku untuk setiap berkas. Judul dan nomor trek tetap di masing-masing berkas:',
          ],
          bullets: [
            'Judul, artis, album, dan kolom sehari-hari lainnya, plus sampul.',
            'Bukan FLAC, M4A, atau WAV. Format tag itu tidak ditulis di sini.',
            'Bukan bab podcast atau frame kustom yang tidak biasa. Menyimpan menulis ulang blok tag, dan frame itu tidak ikut.',
          ],
        },
        {
          heading: 'Mengapa mobil masih menampilkan Track 01',
          paragraphs: [
            'Banyak head unit mengabaikan tag dan kembali ke nama berkas, dan sebagian besar menyimpan informasi lama sampai Anda mengimpor ulang stik USB atau memindai ulang. Ganti nama berkas menjadi sesuatu seperti 01 - Song Title.mp3, lalu pindai ulang.',
            'Memotong, memberi fade, atau mengubah kecepatan ada di editor MP3, yang mendekode dan mengenkode ulang. Halaman ini tidak pernah menyentuh suaranya. Gunakan halaman itu untuk mengedit musiknya. Gunakan halaman ini untuk memberi label.',
          ],
        },
      ],
      dropHint: 'Letakkan beberapa file MP3 di sini, atau klik untuk memilih',
      exportLabel: 'Simpan MP3',
    },
    compressor: {
      cardLine: 'Turunkan puncak yang keras dan angkat kata yang pelan, tanpa membuat seluruh file lebih keras.',
      name: 'Kompresor level',
      shortName: 'Kompresor',
      title: 'Kompresor level — Ratakan volume online',
      description:
        'Ratakan bagian keras dan pelan dari rekaman di browser. Puncak tetap. Ini bukan memperkecil file. Gratis, tanpa unggah.',
      h1: 'Kompresor level — Ratakan bagian keras dan pelan',
      heroAlt: 'Tahan puncak rekaman suara supaya kata yang pelan ikut terdengar',
      subtitle: 'Kompresor pita lebar yang menahan lonjakan level. Puncak file tetap di tempat semula.',
      intro:
        'Memo suara yang berteriak di satu kalimat dan berbisik di kalimat berikutnya butuh kompresi, bukan kenop volume. Halaman ini menjalankan satu kompresor pita lebar: bagian keras diturunkan, bagian pelan diangkat, lalu ekspor diskalakan agar puncaknya sama dengan file awal. Semuanya di browser. File tidak diunggah.',
      usesHeading: 'Situasi penggunaan umum kompresi level',
      uses: [
        'Memo suara: ratakan volume yang naik-turun sesuai jarak ke ponsel.',
        'Keseimbangan wawancara: narasumber jauh lebih keras dari pewawancara, tahan puncaknya.',
        'Vokal di depan: saat reff melompati verse, dudukkan vokal dengan stabil di depan.',
        'Notulen rapat: ratakan rekaman rapat yang kadang pelan kadang keras.',
        'Rekaman kursus: volume instruktur melayang saat bergerak, tekan sampai seragam.',
        'Merapatkan dinamika pra-rilis: sempitkan dinamika sebelum penyelarasan loudness agar pendaratannya lebih mantap.',
      ],
      why: [
        {
          icon: 'volume',
          title: 'Mengurus dinamika, bukan ukuran',
          text: 'Kompresi broadband: threshold −18 sampai −36 ديسيبل, rasio hingga 8:1. Yang keras ditekan, yang pelan naik relatif; saat ekspor puncak dikembalikan ke puncak file sumber.',
        },
        {
          icon: 'file',
          title: 'Ini bukan kompresi file',
          text: 'Halaman ini mengubah fluktuasi volume, bukan ukuran file. Untuk MP3 lebih kecil, ke [kompresi audio](/compress-audio); untuk penyelarasan LUFS, ke [meter loudness](/loudness-meter).',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Dekode tetap di perangkat Anda.' },
        { name: 'Atur jumlahnya', text: 'Geser Kompres. 30–50% cukup untuk sebagian besar ucapan. 100% menekan keras: ambang −36 dB, rasio 8:1.' },
        { name: 'Dengar dan ekspor', text: 'Putar hasilnya, lalu ekspor MP3 atau WAV. Puncak dikembalikan ke puncak asli, tepat di bawah skala penuh.' },
        {
          name: 'Bisa di ponsel juga',
          text: 'Slider dan ekspor mendukung sentuhan; beberapa menit suara terekspor dalam satu-dua detik di ponsel terbaru.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Kompresor adalah prosesor dinamika Web Audio di dalam tab browser. Setelah halaman termuat, Anda bisa offline dan tetap mengekspor.' },
        { q: 'Apa yang terjadi pada audio?', a: 'Satu kompresor pita lebar (ambang dari −18 dB sampai −36 dB, rasio dari sedikit di atas 1:1 sampai 8:1). Kompresor tidak punya penguatan kompensasi, jadi halaman ini menskalakan ekspor sampai puncak sumber, atau sekitar −0.2 dBFS jika sumber sudah lebih panas. WAV menjaga perubahan level itu. MP3 dikode ulang sekali.' },
        { q: 'Apakah ini memperkecil file?', a: 'Tidak. Memperkecil file berarti mengode ulang pada bitrate lebih rendah, yaitu halaman kompresor audio. Halaman ini mengubah dinamika dan menyerahkan bitrate pada format ekspor.' },
        { q: 'Apa bedanya dengan penguat volume dan normalisasi?', a: 'Penguat volume mengalikan seluruh file. Normalisasi menaikkan semuanya sampai sampel terkeras mencapai target. Keduanya membiarkan jarak keras–pelan tetap. Halaman ini mempersempit jarak itu. Satu pita, bukan rantai multiband, dan tidak menghapus derau.' },
        { q: 'Bisakah menghilangkan derau ruangan?', a: 'Tidak. Mengangkat bagian pelan juga mengangkat desis dan derau ruangan. Jika masalahnya derau, kompresi membuatnya lebih jelas. Potong bagian senyap, atau rekam ulang.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya. Slider dan ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari saat ini. Beberapa menit ucapan diekspor dalam satu atau dua detik di ponsel yang baru.' },
      ],
      screenshotsAlt: [
        'Kompresor level: area jatuhkan, tidak ada yang dikirim ke server',
        'Kompresor level: area kerja dengan berkas yang sudah dimuat',
        'Kompresor level: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Dinamika, bukan ukuran berkas',
          paragraphs: [
            'Kompresor level adalah satu kompresor broadband. Ambang berjalan dari −18 dB turun ke −36 dB, dan rasio dari sedikit di atas 1:1 sampai 8:1. Momen keras turun, momen pelan naik relatif terhadapnya.',
            'Tidak ada makeup gain di dalam kompresor. Setelahnya ekspor diskalakan agar puncaknya cocok dengan puncak sumber, atau −0,2 dBFS jika sumbernya sudah lebih keras dari itu. Alat ini tidak mengecilkan berkas. MP3 lebih kecil adalah halaman kompres audio.',
          ],
        },
        {
          heading: 'Apa yang diperbaiki dan tidak',
          paragraphs: [
            'Alat ini mempersempit jarak antara keras dan pelan. Ini satu band, bukan rantai vokal:',
          ],
          bullets: [
            'Memo suara yang berteriak di satu kalimat dan berbisik di kalimat berikutnya.',
            'Mix yang hit kerasnya menenggelamkan frasa pelan, dan Anda ingin keduanya lebih dekat.',
            'Bukan penghapus noise. Mengangkat bagian pelan juga mengangkat desis dan derau ruangan.',
          ],
        },
        {
          heading: 'Bedanya dengan kenop volume',
          paragraphs: [
            'Volume booster mengalikan seluruh berkas. Normalisasi menaikkan semuanya sampai sampel paling keras mencapai puncak. Keduanya membiarkan jarak antara keras dan pelan tetap sama. Halaman ini mempersempit jarak itu.',
            'WAV menyimpan perubahan level tanpa generasi lossy lain. MP3 mengenkode ulang sekali. Jika masalahnya hanya berkas yang pelan dan dinamikanya baik, gunakan volume booster.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio di sini, atau klik untuk memilih',
      exportLabel: 'Kompres dan unduh',
    },
    echo: {
      cardLine: 'Tambahkan pengulangan yang bisa dihitung: satu tepukan pendek, bukan kabut reverb.',
      name: 'Tambah gema ke audio',
      shortName: 'Tambah gema ke audio',
      title: 'Tambah gema ke audio — efek gema online',
      description: 'Tambahkan gema berwaktu ke audio apa pun di browser. Anda yang mengatur tunda dan pengulangan. Gratis, tanpa unggah.',
      h1: 'Tambah gema ke audio',
      heroAlt: 'Tambahkan delay dan pengulangan ke sebuah rekaman',
      subtitle: 'Pengulangan yang terpisah, pada tunda yang Anda pilih: dari tepukan pendek sampai 0,8 d.',
      intro: 'Gema adalah salinan yang kembali setelah jeda yang bisa dihitung. Tunda berjalan dari beberapa perseratus detik sampai 0,8 detik, dan pengulangan menentukan seberapa banyak setiap salinan masuk lagi. Campuran basah tetap 45%. Tunda nol membuat file tidak berubah. Prosesnya tetap di browser.',
      usesHeading: 'Situasi penggunaan umum efek gema',
      uses: [
        'Efek podcast: gema pendek untuk menegaskan satu kalimat, yang hitungannya masih terasa.',
        'Aset game: beri jeda spasial pada bunyi notifikasi, beberapa ulangan yang makin melemah.',
        'Ornamen vokal: tambahkan beberapa pengulangan yang makin pelan di ekor vokal.',
        'Suasana horor: satu gema dengan jarak sangat renggang, suasana langsung berubah.',
        'Hiasan instrumen: beri gema pada petikan gitar atau pukulan drum untuk membuka ruang.',
        'Desain transisi: satu gema dari kejauhan sebagai jembatan antarbagian.',
      ],
      why: [
        {
          icon: 'repeat',
          title: 'Jeda yang bisa dihitung',
          text: 'Bisa diatur 0.01 sampai 0.8 detik: yang pendek seperti tepukan, yang panjang seperti teriakan di ruangan kosong. Intensitas pengulangan menentukan sisa tiap suara.',
        },
        {
          icon: 'sliders',
          title: 'Wet tetap 45%',
          text: 'Suara kering tetap apa adanya, gema dicampur 45% — isi file asli tidak berubah sedikit pun, yang ditambahkan hanya salinannya.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Dekode tetap di perangkat Anda.' },
        { name: 'Atur tunda dan ulangan', text: 'Tunda adalah jeda sebelum salinan pertama, sampai 0,8 d. Ulangan adalah umpan balik, paling tinggi 55% agar tidak lari.' },
        { name: 'Dengar dan ekspor', text: 'Putar, lalu ekspor MP3 atau WAV. File bertambah dengan ekor pengulangan, paling lama 4 detik.' },
        {
          name: 'Simpan file kamu',
          text: 'Ekspor sebagai MP3 atau WAV; nama file mendapat akhiran -edited.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Gema adalah tunda Web Audio di dalam tab. Setelah halaman termuat, Anda bisa offline dan tetap mengekspor.' },
        { q: 'Apa yang sebenarnya dilakukan efek ini?', a: 'Salinan sinyal ditunda sesuai waktu yang Anda atur dan dicampur pada 45%. Setiap salinan masuk lagi ke tunda pada tingkat ulangan, sampai 0,55, jadi semakin pelan, bukan melengking. WAV menjaga campuran itu. MP3 dikode ulang sekali.' },
        { q: 'Apa bedanya dengan slowed + reverb?', a: 'Slowed + reverb adalah kabut: nada turun bersama kecepatan dan ekornya adalah pantulan yang melebur. Halaman ini menjaga tempo asli dan menambah salinan yang terdengar satu per satu. Kecepatan dan nada tidak berubah.' },
        { q: 'Mengapa pengulangan tidak makin keras?', a: 'Umpan balik dibatasi 55% dan ekor yang dirender dibatasi 4 detik. Cukup untuk mendengar beberapa salinan. Ini tidak menjadi derau yang berosilasi sendiri.' },
        { q: 'Bisakah menggema hanya sebagian lagu?', a: 'Bisa. Pilih bagian pada gelombang dan pertahankan pilihan itu. Pengulangan ditambahkan pada yang Anda ekspor, bukan pada sisa file.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya. Kedua slider dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari saat ini.' },
      ],
      screenshotsAlt: [
        'Tambah gema ke audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Tambah gema ke audio: area kerja dengan berkas yang sudah dimuat',
        'Tambah gema ke audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Salinan terpisah, bukan gumpalan',
          paragraphs: [
            'Echo menunda salinan sinyal selama waktu yang Anda atur, dari beberapa perseratus detik sampai 0,8 detik, lalu mencampur salinan itu kembali pada 45 persen. Setiap salinan masuk lagi ke delay pada level ulangan yang Anda atur.',
            'Feedback dibatasi 0,55 dan ekor render 4 detik, sehingga ulangannya makin pelan alih-alih memekik. Delay di nol membiarkan berkas tanpa perubahan. Kecepatan dan nada tetap seperti semula.',
          ],
        },
        {
          heading: 'Cara memakai kedua penggeser',
          paragraphs: [
            'Delay adalah jeda sebelum salinan pertama. Ulangan adalah seberapa banyak setiap salinan masuk kembali:',
          ],
          bullets: [
            'Delay pendek untuk slap yang masih terdengar sebagai hit kedua.',
            'Delay lebih panjang, tetap di bawah 0,8 detik, saat Anda ingin salinannya terhitung satu per satu.',
            'Hanya pilihan, jika echo harus ada di satu frasa dan bukan di sisa berkas.',
          ],
        },
        {
          heading: 'Echo bukan slowed + reverb',
          paragraphs: [
            'Slowed + reverb menurunkan nada bersama kecepatan dan mengaburkan ekornya ke dalam ruangan. Halaman ini mempertahankan waktu asli dan menambahkan salinan yang bisa Anda dengar terpisah.',
            'Memberi fade pada awal atau akhir satu berkas ada di halaman fade. Menumpang-tindihkan dua lagu ada di penggabung audio. Keduanya bukan echo.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio di sini, atau klik untuk memilih',
      exportLabel: 'Tambahkan gema',
    },
    'add-reverb': {
      cardLine: 'Beri rekaman kering bunyi ruangan, dari sentuhan tipis sampai basah.',
      name: 'Tambah reverb ke audio',
      shortName: 'Reverb',
      title: 'Tambah reverb ke audio — bunyi ruangan online gratis',
      description: 'Tambahkan reverb ruangan ke vokal atau instrumen di browser. Satu slider wet, dengar sebelum ekspor. Gratis, tanpa unggah, MP3 atau WAV.',
      h1: 'Tambah reverb ke audio — beri bunyi ruangan pada rekaman',
      heroAlt: 'Rekaman kering mendapat pantulan ruangan',
      howToIntro: 'Penggeser intensitas pada berkas sungguhan',
      subtitle: 'Satu slider wet, dari kering total sampai ruangan kecil. Anda mendengar hasilnya sebelum mengekspor.',
      intro: 'Reverb adalah bunyi yang ditambahkan ruangan setelah sumber berhenti: pantulan yang menumpuk lalu meredup. Halaman ini menjalankan ruangan sintetis di atas berkas yang Anda letakkan, dengan satu slider wet dari kering sampai basah. Anda mendengar reverbnya pada gelombang sebelum mengekspor, dan pemrosesannya tetap di browser Anda.',
      usesHeading: 'Kapan saja menambah reverb berguna',
      uses: [
        'Memposisikan vokal: memberi ruang pada memo suara atau sulih suara agar tak terdengar seperti ditempel.',
        'Efek gim: menambah kedalaman pada bunyi notifikasi sebelum masuk penyuntingan.',
        'Menambah ruang pada suara kering: vokal tanpa iringan atau rekaman kering diberi ruang, seakan direkam di dalam ruangan.',
        'Transisi podcast: satu kalimat diberi reverb sebagai pembatas bagian.',
        'Ambiens alat musik: gitar kering diberi sedikit ruang, tak lagi terdengar kering kosong.',
        'Membangun atmosfer: wet besar dengan ruangan panjang menciptakan kesan luas atau mencekam.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Satu slider wet',
          text: '0–100% mengatur seberapa besar nuansa ruangan: wet kecil seperti kamar, wet besar seperti aula. Bisa didengarkan sebelum ekspor.',
        },
        {
          icon: 'lock-simple',
          title: 'Render lokal',
          text: 'Reverb dihitung di peramban Anda, audio tidak diunggah; ekspor MP3 atau WAV.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC apa pun. Didekode di perangkat Anda. Slider wet mulai dari nol, artinya berkas kering.' },
        { name: 'Atur level wet', text: 'Slider mencampur ruangan ke sinyal kering, 0 sampai 100%. Di sekitar 25% suara berhenti terdengar menempel pada mikrofon. Tombol putar memainkan hasil campurannya.' },
        { name: 'Ekspor', text: 'Ekspor menambahkan redaman setelah sampel terakhir, sekitar 2,2 detik ekor. MP3 diekspor pada bitrate pilihan Anda, WAV menyimpan sampel olahan persis.' },
        {
          name: 'Ambil file-mu',
          text: 'MP3 atau WAV, dengan akhiran -edited pada nama file.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Berkas didekode dan reverb dirender di browser Anda dengan Web Audio API. Setelah halaman termuat, dekode dan ekspor WAV tidak butuh jaringan.' },
        { q: 'Apa yang terjadi pada berkas?', a: 'Slider wet memcrossfade berkas kering Anda ke ruangan sintetis: sekitar 2,2 detik pantulan stereo yang meredam secara eksponensial. Ekspor mengodekan ulang MP3 sekali pada bitrate pilihan Anda, atau menulis WAV tanpa kehilangan dari sampel olahan. Ekor reverb memanjangkan berkas: pada 100% wet hasilnya sekitar 2,2 detik lebih panjang dari sumbernya.' },
        { q: 'Apakah ini aula atau katedral sungguhan?', a: 'Bukan, dan mengatakannya adalah bagian jujurnya. Ini ruangan sintetis dengan redaman 2,2 detik, bukan konvolusi dengan ruang yang direkam. Untuk ruang bernama dengan impulse response hasil pemindaian, Anda butuh DAW desktop atau plugin konvolusi. Yang dikerjakan halaman ini selesai dalam satu-dua detik, di browser Anda.' },
        { q: 'Apa bedanya dengan halaman gema?', a: '[Gema](/echo) mengulang sinyal sebagai salinan berwaktu yang bisa Anda hitung satu per satu. Reverb adalah kerumunan pantulan yang begitu padat hingga melebur menjadi redaman. Keduanya menambah ruang; [slowed + reverb](/slowed-reverb) adalah perhentian ketiga saat perlambatannya ingin ikut serta.' },
        { q: 'Berfungsi di ponsel?', a: 'Ya. Slider, tombol putar, dan ekspor berukuran sentuhan, dan pratinjau terdengar sebelum Anda berkomitmen mengekspor.' },
        { q: 'Berapa wet untuk suara?', a: 'Mulai dari 20 sampai 30%. Cukup kering agar tiap kata tetap jelas, cukup basah agar tepi mikrofon-dekat melunak. Pad musik dan efek suara tahan 40 sampai 60% sebelum terdengar jauh.' },
        { q: 'Bisakah reverbnya dihapus saja?', a: 'Tidak di halaman ini, dan tidak ada yang bisa melakukannya secara jujur di browser. Begitu pantulan membakar dirinya ke rekaman, memisahkannya dari sumber adalah riset dereverberasi, bukan slider yang dimundurkan. Cegah saat merekam: lemari pakaian, selimut, mikrofon dekat mulut.' },
      ],
      screenshotsAlt: [
        'Tambah reverb ke audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Tambah reverb ke audio: area kerja dengan berkas yang sudah dimuat',
        'Tambah reverb ke audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Reverb ruangan, bukan aula hasil sampel',
          paragraphs: [
            'Respons impulse di balik halaman ini disintesis: noise stereo yang meluruh dengan ekor 2,2 detik, bentuk yang sama seperti ruangan kecil membubuhkan pada suara. Itu sebabnya halaman ini instan dan bekerja offline. Itu juga sebabnya ruangannya tidak punya nama; tidak ada Westminster Abbey di dalam berkas ini.',
            'Penggeser wet adalah crossfade biasa antara berkas dry Anda dan ruangan itu. Pada 0 persen ekspornya adalah berkas asli, sampel demi sampel. Peluruhan setelah sampel terakhir Anda terus berbunyi setelah audio berakhir, itu sebabnya ekspor berjalan sekitar 2,2 detik lebih panjang daripada sumbernya.',
          ],
          table: {
            headers: [
              'Wet',
              'Yang Anda dengar',
              'Cocok untuk',
            ],
            rows: [
              [
                '10 %',
                'Ruangan rapat yang hampir tak terlihat.',
                'Suara podcast yang mikrofonnya terlalu dekat.',
              ],
              [
                '25 %',
                'Suara berada di ruangan kecil dan tidak lagi terdengar ditempel.',
                'Vokal, memo suara, foley.',
              ],
              [
                '60 %',
                'Tersapu dan jauh; sumbernya mundur di balik ruang.',
                'Pad, hantu, transisi.',
              ],
              [
                '100 %',
                'Semua ruangan, tanpa sumber. Gumpalan dengan melodi yang masih ada.',
                'Desain suara, alas tekstur.',
              ],
            ],
          },
        },
        {
          heading: 'Reverb atau echo',
          paragraphs: [
            'Kedua efek menambahkan ruang, dan keduanya gagal dengan cara berbeda. Echo memberi Anda ulangan yang jelas pada delay pilihan Anda; itu terbaca sebagai efek di atas suara. Reverb memberi ribuan pantulan yang tersusun begitu rapat sehingga terbaca sebagai ruangan tempat suara itu terjadi.',
            'Jika Anda bisa menghitung ulangannya, Anda ingin [halaman echo](/echo). Jika Anda ingin pendengar berhenti menyadari bahwa rekamannya dry, Anda ingin halaman ini. Dan saat pekerjaannya adalah suara TikTok yang diperlambat dengan ruang di belakangnya, halaman [slowed dan reverb](/slowed-reverb) melakukan kedua gerakan sekaligus.',
          ],
        },
        {
          heading: 'Reverb dulu, kenyaringan terakhir',
          paragraphs: [
            'Reverb mengubah level rata-rata berkas, jadi atur sebelum pekerjaan kenyaringan apa pun. Tambahkan ruangan di sini, lalu cek hasilnya terhadap target dengan [pengukur kenyaringan](/loudness-meter), baru terbitkan.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio di sini, atau klik untuk memilih',
      exportLabel: 'Tambahkan reverb',
    },
    'audio-distorter': {
      cardLine: 'Dorong rekaman yang bersih menjadi clipping yang hangat atau yang keras.',
      name: 'Distorsi audio',
      shortName: 'Distorsi',
      title: 'Distorsi audio — dari clipping lembut ke clipping keras',
      description: 'Tambahkan overdrive ke audio apa pun di browser. Satu slider, dari clipping yang hangat ke yang keras. Tidak ada yang diunggah.',
      h1: 'Distorsi audio — overdrive pada rekaman yang bersih',
      heroAlt: 'Meratakan puncak rekaman yang bersih',
      subtitle: 'Satu slider. Nilai awal 40%. Pada 0% file tetap seperti saat dijatuhkan.',
      intro: 'Halaman ini melewatkan setiap sampel melalui kurva tanh. Pada awal 40%, sampel 0,25 menjadi sekitar 0,69. Pada 100% sampel yang sama didorong ke sekitar 1. Intensitas 0 melewati kurva, jadi file tetap seperti hasil dekode. Pemrosesan tinggal di browser.',
      usesHeading: 'Situasi penggunaan umum distorsi audio',
      uses: [
        'Overdrive gitar: tambahkan sedikit kekasaran pada gitar yang bersih agar maju ke depan.',
        'Vokal kasar: vokal untuk trailer, pukulan game, atau pembuka podcast.',
        'Bentuk ulang drum: tambahkan clipping pada loop drum agar lebih nendang dan keras.',
        'Efek horor: intensitas ekstrem untuk memuntir vokal atau suara ambience.',
        'Grit untuk synth: tambahkan grit pada garis synth yang bersih.',
        'Nuansa telepon retro: pasangkan dengan high-pass untuk efek telepon tua atau interkom.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Satu slider dari ringan ke berat',
          text: 'Intensitas bisa diatur mulus dari clipping ringan sampai clipping keras — setiap tingkat di antaranya adalah warna suara baru.',
        },
        {
          icon: 'lock-simple',
          title: 'Pemrosesan lokal',
          text: 'Distorsi dihitung secara lokal di browser, audio tidak diunggah.',
        },
      ],
      howTo: [
        { name: 'Jatuhkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Dekode terjadi di perangkat Anda.' },
        { name: 'Atur intensitas', text: '0% bersih. 40% adalah awal. 100% adalah clipping paling keras yang halaman ini buat.' },
        { name: 'Dengar dan ekspor', text: 'Putar, lalu ekspor MP3 atau WAV. Durasi tidak berubah.' },
{
          name: 'Ambil filenya',
          text: 'Nama file memuat akhiran -edited.',
        },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Clip ini waveshaper Web Audio di dalam tab. Setelah halaman termuat, Anda bisa offline dan tetap mengekspor. WAV langsung. MP3 setelah encoder pernah termuat sekali.' },
        { q: 'Apa yang sebenarnya dilakukan slider?', a: 'Intensitas 0 tidak memasang waveshaper, jadi sampel tetap seperti hasil dekode. Di atas 0, setiap sampel x menjadi tanh(k·x) / tanh(k), dengan k = 10^(intensitas × 1,6) − 1. Pada awal 40%, k sekitar 3,4 dan sampel 0,25 menjadi sekitar 0,69. Pada 100%, k sekitar 39 dan sampel itu didorong ke sekitar 1. Sampel skala penuh tetap skala penuh. Node melakukan oversample 2×. WAV menjaga kurva itu. MP3 dikode ulang sekali, pada bitrate yang Anda pilih. Durasi tidak berubah.' },
        { q: 'Apa yang tidak dilakukan halaman ini?', a: 'Ini bukan bitcrusher, dan tidak menambah wow, flutter, atau batas pita radio. Nada lo-fi yang redup adalah halaman ini, lalu filter low-pass. Amp dengan kabinet adalah pekerjaan DAW.' },
        { q: 'Apa bedanya dengan penguat volume?', a: 'Penguat volume mengalikan seluruh file, lalu limiter menahan puncak agar tidak menjadi gelombang kotak. Halaman ini meratakan puncak dengan sengaja. Gema menambah salinan setelah tunda. Keduanya tidak meratakan bentuk gelombang.' },
        { q: 'Bisakah mendistorsi hanya sebagian lagu?', a: 'Bisa. Pilih bagian pada gelombang dan pertahankan pilihan itu. Kurva diterapkan pada yang Anda ekspor, bukan pada sisa file.' },
        { q: 'Apakah berfungsi di ponsel?', a: 'Ya. Slider dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari saat ini.' },
      ],
      screenshotsAlt: [
        'Distorsi audio: area jatuhkan, tidak ada yang dikirim ke server',
        'Distorsi audio: area kerja dengan berkas yang sudah dimuat',
        'Distorsi audio: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Kurva, bukan kenop volume',
          paragraphs: [
            'Drive berjalan dari 0% sampai 100%. Nilai awalnya 40%. Pada 0% waveshaper tidak ada di grafik, jadi ekspornya sama dengan berkas yang sudah didekode.',
            'Di atas 0, setiap sampel x menjadi tanh(k·x) / tanh(k). k adalah 10^(drive × 1,6) − 1. Pada 40%, k sekitar 3,4 dan sampel 0,25 menjadi sekitar 0,69. Pada 100%, k sekitar 39 dan sampel itu didorong ke sekitar 1. Sampel skala penuh tetap di skala penuh. Kecepatan, nada, dan durasi tetap seperti semula.',
          ],
        },
        {
          heading: 'Sejauh mana mendorongnya',
          paragraphs: [
            'Rentang bergunanya kecil. Lewat dari itu, Anda sedang membuat efek:',
          ],
          bullets: [
            '10–30%: klip hangat pada vokal atau gitar bersih.',
            '40–70%: gritnya jelas. Puncak mendatar dan not yang lebih pelan menjadi lebih keras.',
            '80–100%: mendekati gelombang kotak. Ucapan menjadi sulit diikuti.',
          ],
        },
        {
          heading: 'Bukan penguat volume, dan bukan bitcrusher',
          paragraphs: [
            'Volume booster membuat berkas pelan lebih keras dan memakai limiter agar puncaknya tidak menjadi kotak. Halaman ini sengaja membuatnya kotak. Echo menambahkan salinan setelah delay yang Anda atur. Itu halaman terpisah.',
            'Kurva ini tidak menurunkan kedalaman bit, dan tidak meredam nada tinggi. Node melakukan oversample 2×, yang hanya mengurangi aliasing dari harmonik baru. Nada lo-fi yang tumpul adalah halaman ini, lalu filter low-pass.',
          ],
        },

      ],
      dropHint: 'Letakkan file audio di sini, atau klik untuk memilih',
      exportLabel: 'Distorsi dan unduh',
    },
    'voice-changer': {
      cardLine: 'Ganti suara dalam rekaman dengan lima preset: tinggi, rendah, robot, radio, hantu.',
      name: 'Ubah suara',
      shortName: 'Ubah suara',
      title: 'Ubah suara online — lima preset suara untuk rekaman',
      description: 'Ubah rekaman dengan lima preset suara: tinggi, rendah, robot, radio, hantu. Nada, filter, dan crush berjalan di browser. Gratis, MP3 atau WAV.',
      h1: 'Ubah suara — lima preset untuk rekaman apa pun',
      heroAlt: 'Satu rekaman melewati lima preset suara',
      howToIntro: 'Lima prasetel pada rekaman sungguhan',
      subtitle: 'Ketuk Tinggi, Rendah, Robot, Radio, atau Hantu dan dengar sebelum mengekspor.',
      intro: 'Halaman ini menerapkan lima preset suara tetap pada rekaman. Tinggi menaikkan nada empat semiton, Rendah menurunkannya empat, Robot meratakannya dengan bit crusher, Radio mempersempitnya lewat band-pass seperti interkom, dan Hantu menyebarkannya dengan reverb. Ketuk satu preset dan pratinjau langsung memainkan berkas Anda. Semuanya berjalan di browser, jadi rekaman tidak pernah keluar dari perangkat Anda.',
      usesHeading: 'Kapan saja pengubah suara berguna',
      uses: [
        'Pengisian suara karakter: mengganti suara karakter untuk potongan buku audio atau mod gim.',
        'Berbagi dengan privasi: menyembunyikan suara asli di balik satu lapis sebelum demo atau rekaman layar.',
        'Konten hiburan: efek suara robot atau hantu untuk efek acara.',
        'Bandingkan dengan mendengar: coba lima prasetel satu per satu, pilih yang paling cocok.',
        'Variasi bahan: satu rekaman dibuat beberapa versi untuk dipilih.',
        'Hadiah kejutan: ganti suara rekaman seorang teman sebagai kejutan.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Lima prasetel, lima rantai pemrosesan',
          text: 'Nada tinggi, rendah, robot, radio, hantu — di balik tiap prasetel ada kombinasi filter dan transformasi yang berbeda, bukan lima volume dari suara yang sama.',
        },
        {
          icon: 'lock-simple',
          title: 'Pemrosesan lokal',
          text: 'Pengubahan suara selesai di peramban, audio tidak diunggah.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC apa pun yang berisi suara. Didekode di perangkat Anda. Tidak ada preset yang aktif sampai Anda mengetuknya.' },
        { name: 'Ketuk satu preset', text: 'Tinggi, Rendah, Robot, Radio, atau Hantu. Pratinjau langsung memainkannya lewat preset, dan mengetuk preset lain mengganti, bukan menumpuk. Ketuk lagi preset yang aktif untuk kembali ke suara asli.' },
        { name: 'Ekspor', text: 'Ekspor menuliskan preset ke dalam berkas. MP3 diekspor pada bitrate pilihan Anda, WAV menyimpan sampel olahan persis. Durasi tidak pernah berubah.' },
        {
          name: 'Ambil file-mu',
          text: 'Nama file mendapat akhiran -edited.',
        }

        ,
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Dekode, pergeseran nada, filter, dan bit crusher semuanya berjalan di browser Anda dengan Web Audio API. Setelah halaman termuat, pratinjau dan ekspor WAV bekerja tanpa jaringan.' },
        { q: 'Apa yang sebenarnya dilakukan setiap preset?', a: 'Tinggi menaikkan nada empat semiton. Rendah menurunkannya empat. Robot mengkuantisasi ke langkah 5-bit dalam pita 150 Hz sampai 4 kHz. Radio adalah band-pass 500 Hz sampai 3 kHz dengan drive ringan, seperti bunyi speaker kecil. Hantu menurunkan nada dua semiton dan menambah 55% reverb ruangan. Tidak ada yang mengubah durasi berkas.' },
        { q: 'Apakah ini kloning suara AI?', a: 'Bukan. Preset ini membentuk ulang suara yang Anda rekam; mereka tidak menghasilkan suara orang lain. Kloning butuh model terlatih dan biasanya izin yang tidak Anda miliki. Yang dilakukan halaman ini instan, offline, dan suara pembicara aslinya masih terdengar di baliknya.' },
        { q: 'Apa bedanya dengan pengubah nada?', a: '[Pengubah nada](/pitch-changer) memberi Anda slider bebas dari −12 sampai +12 semiton untuk pekerjaan musik. Halaman ini menggabungkan nada dengan filter, drive, dan crush menjadi lima seturan satu ketukan untuk suara. Preset saling mengganti, bukan menumpuk; untuk kendali penuh, gunakan [pengubah nada](/pitch-changer) dan [distorsi](/audio-distorter) secara manual.' },
        { q: 'Berfungsi di ponsel?', a: 'Ya. Tombol preset dan ekspor berukuran sentuhan, dan pratinjau terdengar sebelum Anda mengekspor, jadi Anda tidak pernah membayar preset yang belum didengar.' },
        { q: 'Apakah bekerja pada musik?', a: 'Diproses bisa, tetapi presetnya disetel untuk suara. Tinggi dan Rendah bekerja seperti pengubah nada biasa pada lagu, Robot memakan detailnya, dan Radio membuatnya seperti siaran tahun 1940-an — kadang justru itulah yang diinginkan.' },
        { q: 'Bisakah preset diatur halus?', a: 'Tidak di sini. Satu ketukan, satu seturan, tanpa slider, memang disengaja. Saat preset sudah dekat tetapi belum pas, ambil jalur manual: [pengubah nada](/pitch-changer) untuk pergeserannya, [distorsi](/audio-distorter) untuk teksturnya, [filter high-pass](/high-pass-filter) dan [filter low-pass](/low-pass-filter) untuk pitanya.' },
      ],
      screenshotsAlt: [
        'Ubah suara: area jatuhkan, tidak ada yang dikirim ke server',
        'Ubah suara: area kerja dengan berkas yang sudah dimuat',
        'Ubah suara: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Apa yang dilakukan setiap preset',
          paragraphs: [
            'Setiap preset adalah tumpukan kecil dari bagian yang sama yang dipakai situs ini di mana-mana: penggeser nada phase-vocoder yang mempertahankan durasi, filter biquad, drive tanh, bit crusher, dan ruangan sintesis yang sama dengan halaman reverb. Tabelnya adalah seluruh resepnya; tidak ada yang lain di dalam kotak.',
          ],
          table: {
            headers: [
              'Preset',
              'Yang berubah',
              'Setelannya',
            ],
            rows: [
              [
                'Tinggi',
                'Nada naik, durasi tetap.',
                '+4 seminada',
              ],
              [
                'Rendah',
                'Nada turun, durasi tetap.',
                '−4 seminada',
              ],
              [
                'Robot',
                'Langkah terkuantisasi di dalam pita sempit.',
                'Crush 5-bit, 150 Hz–4 kHz, drive ringan',
              ],
              [
                'Radio',
                'Band-pass tipis dengan tepi yang didorong.',
                '500 Hz–3 kHz, drive 35%',
              ],
              [
                'Hantu',
                'Nada lebih gelap dengan ruangan di belakangnya.',
                '−2 seminada, reverb 55%',
              ],
            ],
          },
        },
        {
          heading: 'Preset, bukan klon',
          paragraphs: [
            'Mengubah suara punya dua arti yang sangat berbeda pada 2026. Satu adalah membentuk ulang rekaman, yang dilakukan halaman ini dalam satu detik, offline, gratis. Yang lain adalah menghasilkan suara orang bernama, yang merupakan model, pertanyaan lisensi dan, jika dilakukan tanpa izin, penyalahgunaan.',
            'Preset ini mempertahankan pembicara asli tetap dikenali di baliknya. Itu batasan sekaligus sifat keamanan: tidak ada yang ditiru oleh kenop nada.',
          ],
        },
        {
          heading: 'Rekam dulu, ubah kemudian',
          paragraphs: [
            'Preset memperkuat apa yang sudah ada di rekaman. Rekaman bersih dan dekat bergeser dengan bersih; ruangan berisik keluar berisik dalam bentuk baru. Rekam di [perekam suara](/voice-recorder), bersihkan desis dengan [penghapus noise](/noise-remover), lalu ubah suaranya di sini.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio di sini, atau klik untuk memilih',
      exportLabel: 'Ubah suara',
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
      usesHeading: 'Situasi penggunaan umum penghapus senyap',
      uses: [
        'Podcast: rapatkan jeda panjang antar kalimat, ekspor versi final tanpa memotong tiap celah dengan tangan.',
        'Memo suara: buang jeda panjang sebelum mulai bicara, memo tinggal berisi bagian yang diucapkan saja.',
        'Rekaman kuliah: buang semua senyap panjang sekaligus berdasarkan level, tanpa memilih manual di waveform.',
        'Perapian wawancara: hapus ruang antara tanya dan jawab, transkrip dan naskah ditulis menghadap audio yang bersih.',
        'Voice-over video: saat jeda sulih suara tak sinkron dengan gambar, rapatkan dulu ruangnya baru sejajarkan timeline.',
        'Pembersihan pra-rilis: tekan udara mati di ekor rekaman; napas dan jeda pendek tetap di tempatnya.',
      ],
      why: [
        {
          icon: 'waveform',
          title: 'Memotong berdasar level, napas tak tersentuh',
          text: 'Hanya bagian yang lebih senyap dari «threshold» dan lebih panjang dari «senyap minimum» yang dipotong. Bawaan −40 ديسيبل نسبي للسعة الكاملة plus 0.35 detik memangkas udara yang menggantung; tiap potongan diberi bantalan 0.08 detik di kedua ujung sehingga jahitannya tak terdengar.',
        },
        {
          icon: 'layers',
          title: 'Banyak file sekali jalan',
          text: 'Seret seluruh tumpukan rekaman sekaligus, semuanya memakai threshold dan interval yang sama, diukur dan dipotong satu per satu. Satu file diunduh sendiri, dua atau lebih otomatis dikemas jadi ZIP.',
        },
      ],
      howTo: [
        { name: "Letakkan audio", text: "MP3, WAV, M4A, OGG, atau FLAC apa pun. Berkas didekode di perangkat Anda. Beberapa file memakai ambang dan jeda yang Anda atur berikutnya. Setiap file dipotong sendiri. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP." },
        { name: "Atur ambang dan jeda", text: "Ambang adalah seberapa pelan sebuah bagian, dari −60 sampai −20 dBFS. Jeda minimum adalah berapa lama bagian itu harus bertahan sebelum dihapus, dari 0,1 sampai 2 detik. Baris status menulis kira-kira berapa detik yang akan hilang." },
        { name: "Ekspor", text: "Putar berkas asli untuk memeriksa, lalu ekspor MP3 atau WAV. Berkasnya adalah bagian yang bersuara digabung, dengan 0,08 detik tersisa di setiap potongan." },
        {
          name: 'Ambil file-mu',
          text: 'Satu file langsung diunduh sendiri; dua atau lebih dikemas dalam ZIP. Pilih MP3 (kecil, mudah dibagikan) atau WAV (tanpa kehilangan, cocok untuk diedit lagi); nama file otomatis mendapat akhiran -edited agar mudah dibedakan.',
        },

      ],
      faqs: [
        { q: 'Bisakah saya memotong keheningan dari lebih dari satu file?', a: 'Bisa. Beberapa file memakai ambang dan jeda minimum di halaman ini. Setiap file diukur dan dipotong sendiri, satu per satu di perangkat ini. Satu file unduh sendiri. Dua atau lebih kembali sebagai satu ZIP. Ponsel kehabisan memori lebih dulu, jadi file yang sangat panjang di ponsel tetap satu per satu.' },
        { q: "Apakah audio saya diunggah?", a: "Tidak. Level diukur di peramban dan bagian pelan dipotong di memori. Setelah halaman termuat Anda bisa offline dan ekspor tetap jalan." },
        { q: "Apa yang benar-benar dihapus?", a: "Sebuah bagian dihapus hanya jika lebih pelan dari ambang dan lebih lama dari jeda minimum. Bawaan adalah −40 dBFS dan 0,35 detik. Setiap bagian menyisakan 0,08 detik di kedua ujung. Jeda yang lebih pendek, termasuk sebagian besar napas, tetap ada." },
        { q: "Apakah musik pelan ikut terpotong?", a: "Ya, jika musik itu tetap di bawah ambang lebih lama dari jeda. −40 dBFS untuk ucapan. Alas pelan, fade, atau derau ruang dalam campuran musik dianggap senyap. Naikkan ambang ke arah −20 jika Anda hanya ingin nol digital yang hampir hening, atau pakai pemotong audio dan pilih dengan tangan." },
        { q: "Bagaimana jika seluruh berkas pelan?", a: "Tidak ada yang dipotong. Baris status mengatakannya, dan ekspor adalah berkas asli." },
        { q: "Apa bedanya dengan pemotong?", a: "Pemotong audio dan pemotong MP3 menyimpan wilayah yang Anda gambar di gelombang. Halaman ini menemukan senyap panjang dari level dan menghapus semuanya dalam satu ekspor. Kecepatan, nada, dan kenyaringan yang tersisa tidak berubah." },
        { q: "Apakah ini jalan di ponsel?", a: "Ya. Kedua penggeser dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang." },
      ],
      screenshotsAlt: [
        'Hapus senyap: area jatuhkan, tidak ada yang dikirim ke server',
        'Hapus senyap: area kerja dengan berkas yang sudah dimuat',
        'Hapus senyap: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Alat ini memotong bagian pelan panjang, bukan napas',
          paragraphs: [
            'Satu bagian hanya dihapus jika lebih pelan dari ambang dan lebih panjang dari jeda minimum. Bawaannya −40 dBFS dan 0,35 detik. Setiap potongan menyisakan 0,08 detik di kedua ujung agar sambungannya tidak berbunyi klik.',
            'Jeda lebih pendek, termasuk sebagian besar napas, tetap ada. Sisanya tidak dibuat lebih keras, lebih lambat, atau lebih tinggi. Jika seluruh berkas berada di bawah ambang, tidak ada yang dipotong dan ekspornya adalah berkas asli.',
          ],
        },
        {
          heading: 'Ucapan, bukan lagu pelan',
          paragraphs: [
            '−40 dBFS ditujukan untuk ucapan. Musik akan kehilangan bagian yang ingin Anda simpan jika bagian itu berada serendah itu:',
          ],
          bullets: [
            'Memo suara atau wawancara dengan jeda panjang di antara jawaban.',
            'Naikkan ambang ke arah −20 dBFS jika Anda hanya ingin menghapus keheningan mendekati digital.',
            'Fade, musik latar pelan, atau derau ruangan dalam mix: tinggalkan halaman ini dan pangkas manual.',
          ],
        },
        {
          heading: 'Pemangkas versus halaman ini',
          paragraphs: [
            'Pemangkas audio dan pemotong MP3 mempertahankan wilayah yang Anda gambar. Halaman ini menemukan setiap bagian pelan panjang berdasarkan level dan menghapusnya dalam satu ekspor.',
            'Gunakan pemangkas saat bagian pelan masih Anda inginkan, atau saat Anda perlu mempertahankan satu rentang dan membuang sisanya dengan telinga. Gunakan halaman ini saat jedanya menjadi masalah dan cukup panjang untuk diukur.',
          ],
        },
      ],
      dropHint: 'Jatuhkan beberapa file audio, atau klik untuk memilih',
      exportLabel: 'Hapus senyap',
    },
    'noise-remover': {
      cardLine: 'Turunkan noise latar yang menetap pada rekaman suara, langsung di peramban.',
      name: 'Hilangkan noise latar',
      shortName: 'Hapus noise',
      title: 'Hapus noise latar belakang — RNNoise lokal, gratis',
      description: 'RNNoise menghapus hiss, hum, dan noise kipas dari rekaman: turun sekitar 20 dB, lokal di browser. File di atas 300 MB ditolak. Ekspor MP3/WAV gratis.',
      h1: 'Hapus noise latar belakang — audio denoiser online gratis',
      heroAlt: 'Noise latar yang menetap di bawah rekaman suara diturunkan',
      howToIntro: 'Satu berkas berisik, satu penggeser kekuatan',
      subtitle: 'Desis, dengung, dan bising kipas yang menetap turun 20 dB atau lebih di sekitar suara. Garis waktu tidak bergeser.',
      intro: 'Halaman ini menjalankan RNNoise, gerbang noise yang dilatih dengan suara manusia, pada rekaman yang Anda jatuhkan. Noise menetap seperti desis, dengung, atau kipas turun 20 dB atau lebih di sekitar suara, dan kata-kata tetap pada levelnya. Gerbang ini model 150 KB yang berjalan di peramban Anda, jadi audio tidak pernah keluar dari perangkat.',
      usesHeading: 'Kasus umum penghapusan noise latar belakang',
      uses: [
        'Memo suara: tekan hum kipas dan AC, sisakan suara yang bersih.',
        'Podcast: bersihkan noise floor sebelum publikasi, tanpa editor desktop.',
        'Rekaman kuliah: redam desis konstan ruangan, lalu samakan loudness.',
        'Wawancara: bersihkan suara — hilangkan hum jalan dan ruangan yang konstan.',
        'Voice-over: jika rekaman bawaan AC, hapus noise dulu sebelum sinkron.',
        'Rekaman rapat: kecilkan dengung listrik dan kipas agar playback tidak menusuk.',
      ],
      why: [
        {
          icon: 'audio-waveform',
          title: 'RNNoise berjalan lokal',
          text: 'Model 150 KB dieksekusi di browser: noise konstan turun sekitar 20 dB dan suara hanya bergeser kurang dari 1 dB. Audio tidak diunggah.',
        },
        {
          icon: 'warning-triangle',
          title: 'Batas yang jujur',
          text: 'Efektif untuk noise konstan — desis, hum, kipas. Suara latar dan musik tidak bisa dihapus; halaman ini tidak mengaku sebaliknya.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'Geser MP3, WAV, M4A, OGG, atau FLAC ke bingkai putus-putus, atau klik untuk menelusuri. File didekode di perangkat, tanpa unggah. “Kekuatan” mulai di 75%.' },
        { name: 'Atur “{strength}”', text: '100% adalah supresi maksimum, turun sekitar 30 dB. Kalau hasilnya tercekik dan ingin sedikit ambien, turun ke 50% (sekitar 6 dB). Model RNNoise 150 KB dimuat saat ekspor pertama.' },
        { name: 'Klik “{export}”', text: 'Tombol utama di bilah ekspor. Seluruh file melewati gerbang dalam bingkai 10 milidetik; baris status menunjukkan progres. Ragu? “Putar” dulu pada file asli.' },
        { name: 'Bawa filenya', text: 'MP3 diekspor pada bitrate pilihanmu, WAV menyimpan sampel yang sudah diproses; nama file otomatis bersufiks -edited.' },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Dekode dan peredaman terjadi di peramban Anda. Pada ekspor pertama, halaman mengambil model RNNoise, berkas WebAssembly 150 KB, dari situs ini. Setelah itu model tersimpan di cache dan halaman berfungsi luring. File di atas 300 MB ditolak.' },
        { q: 'Apa yang terjadi pada berkas?', a: 'Audio melewati gerbang pada 48 kHz dalam bingkai 10 milidetik. Berkas 44,1 kHz diresampel saat masuk dan saat keluar. Dalam uji campuran kami, lantai noise −31 dBFS menjadi −61 dBFS dan level suara bergerak kurang dari 1 dB. Ekspor MP3 mengodekan ulang sekali pada bitrate pilihan Anda.' },
        { q: 'Apa yang tidak dihapus?', a: 'Noise yang terdengar seperti suara. Orang lain berbicara, TV di latar, atau keramaian tetap ada karena berada di pita frekuensi yang sama dengan pembicara. Itu butuh perbaikan spektral di DAW desktop. Noise menetap seperti desis, dengung, dan kipas adalah sasaran halaman ini.' },
        { q: 'Apa bedanya dengan penghapus senyap?', a: '[Penghapus senyap](/silence-remover) memotong bagian sunyi dari garis waktu. Halaman ini tidak memindahkan satu sampel pun dan hanya menurunkan noise menetap di bawah suara. Gunakan keduanya dengan urutan itu: pertama noise, lalu keheningan.' },
        { q: 'Apakah bekerja di ponsel?', a: 'Ya. Penggeser dan tombol ekspor seukuran sentuhan, dan baris status menampilkan kemajuan untuk berkas panjang. Waktu proses tumbuh mengikuti durasi berkas; rekaman setengah jam butuh waktu di ponsel kelas menengah.' },
        { q: 'Apakah musik ikut dibersihkan?', a: 'Tidak, dan itu batas yang jujur, bukan pengaturan yang hilang. RNNoise dilatih dengan suara, jadi pada musik ia menganggap instrumen sebagai suara dan detail menjadi tertutup. Untuk musik, gunakan [filter lolos tinggi](/high-pass-filter) untuk dengung rendah atau [ekualiser](/equalizer) untuk potongan tertentu.' },
        { q: 'Bisakah saya menyisakan sedikit ambience?', a: 'Bisa. Turunkan penggeser ke arah 50 persen untuk mencampur kembali suara asli. Dalam uji campuran kami, 100 persen menurunkan lantai noise 30 dB dan 50 persen menurunkannya 6 dB. Pada 0 persen, hasil ekspor adalah berkas asli.' },
      ],
      screenshotsAlt: [
        'Hilangkan noise latar: area jatuhkan, tidak ada yang dikirim ke server',
        'Hilangkan noise latar: area kerja dengan berkas yang sudah dimuat',
        'Hilangkan noise latar: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Cara RNNoise menghapus noise latar belakang',
          paragraphs: [
            'RNNoise melacak dasar noise rekaman dan menghitung gain untuk setiap pita frekuensi sekitar seratus kali per detik. Pita yang membawa suara tetap terbuka. Pita yang membawa noise tetap menutup.',
            'Angka di halaman ini berasal dari pengukuran yang bisa diulang, bukan klaim pemasaran. Mix uji kami memasangkan nada mirip suara dengan white noise pada −31 dBFS. Setelah gerbang pada kekuatan 100 persen, dasarnya berada di −61 dBFS, pita suara bergerak kurang dari 1 dB, dan klik skala penuh mendarat tepat pada sampel tempat ia mulai.',
          ],
          table: {
            headers: [
              'Kekuatan',
              'Yang Anda dapat',
              'Dasar noise di mix uji kami',
            ],
            rows: [
              [
                '100 %',
                'Peredaman maksimum. Hasil paling bersih; rekaman terang bisa terdengar tertutup.',
                '−30 dB',
              ],
              [
                '50 %',
                'Campuran setengah. Menyisakan sedikit derau ruangan di bawah suara.',
                '−6 dB',
              ],
              [
                '0 %',
                'Bypass. Ekspornya adalah berkas asli.',
                'tidak berubah',
              ],
            ],
          },
        },
        {
          heading: 'Pembersih suara, bukan untuk musik',
          paragraphs: [
            'Gerbang dilatih pada ucapan, jadi apa pun yang berbentuk ucapan dianggap yang harus dipertahankan. Itu keunggulan untuk rekaman obrolan dan batasan di tempat lain:',
          ],
          bullets: [
            'Hilang: desis, dengung, noise kipas dan pendingin ruangan, noise preamp mikrofon murah.',
            'Tetap: suara kedua, TV di latar, kerumunan. Semuanya mirip pembicara.',
            'Untuk musik, gunakan [filter high-pass](/high-pass-filter) untuk gemuruh, atau [equalizer](/equalizer) untuk potongan yang ditargetkan.',
          ],
        },
        {
          heading: 'Hilangkan noise dulu, baru potong',
          paragraphs: [
            'Penghapusan noise mengubah apa yang dilihat pengukuran keheningan, jadi urutannya penting. Jalankan halaman ini dulu. Setelah dasarnya berada 40 dB di bawah suara, [penghapus senyap](/silence-remover) jauh lebih andal membedakan udara mati dari kata pelan.',
            'Setelah keduanya, samakan kenyaringan episode dengan [pengukur kenyaringan](/loudness-meter) sebelum menerbitkan.',
          ],
        },
      ],
      dropHint: 'Jatuhkan berkas audio, atau klik untuk memilih',
      exportLabel: 'Hapus noise',
    },
    'audio-looper': {
      cardLine: 'Ulangi satu klip sampai 16 kali dan samarkan setiap sambungan.',
      name: 'Audio looper',
      shortName: 'Loop',
      title: 'Audio looper — ulang klip online gratis',
      description: 'Ulangi pilihan atau seluruh berkas 2 sampai 16 kali, dengan crossfade 0,01 d di setiap sambungan. Gratis di browser. Tidak ada yang diunggah.',
      h1: 'Audio looper — Ulangi klip 2 sampai 16 kali, online dan gratis',
      heroAlt: 'Mengulang satu klip dan menyamarkan setiap sambungan',
      subtitle: 'Loop bagian yang dipilih atau seluruh berkas, lalu unduh berkas yang lebih panjang.',
      intro: 'Jumlah ulang dari 2 sampai 16. Bawaan adalah 4. Setiap sambungan adalah crossfade linear, 0,01 detik sampai Anda menggesernya, paling lama 0,1 detik. Seret pilihan untuk mengulang bagian itu saja. Tanpa pilihan, seluruh berkas yang diulang. Ekspor berhenti pada 10 menit. Nada dan kecepatan tetap. Pemrosesan tinggal di browser.',
      usesHeading: 'Penggunaan umum audio looper',
      uses: [
        'Loop latihan: ulangi satu birama 2–16 kali, lalu ekspor sebagai bahan latihan.',
        'Latar vokal: panjangkan satu kalimat vokal pendek untuk mengisi adegan yang lebih lama.',
        'Memperpanjang ambience: ulangi suara lingkungan sampai panjang yang dibutuhkan.',
        'Lapisan ritme: tumpuk loop drum menjadi bagian groove yang lebih panjang.',
        'Bahan meditasi: ulangi suara bol atau ambience menjadi satu sesi meditasi utuh.',
        'Cadangan panggung: siapkan loop pendek sebagai bahan panjang untuk diputar langsung saat tampil.',
      ],
      why: [
        {
          icon: 'repeat',
          title: 'Titik sambungan tidak meledak',
          text: 'Crossfade 0,01 detik pada sambungan: pengulangan kembali ke awal tidak menyembulkan bunyi mendadak.',
        },
        {
          icon: 'sliders',
          title: 'Jumlah ulang dan pilihan bebas',
          text: 'Ulang 2–16 kali sesuai pilihan; kalau ada seleksi, yang di-loop seleksinya, kalau tidak, seluruh bagian.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Berkas didekode di perangkat Anda.' },
        { name: 'Atur jumlah dan sambungan', text: 'Pengulangan dari 2 sampai 16. Sambungan adalah crossfade di tiap batas, dari 0 sampai 0,1 detik. Seret gelombang jika hanya sebagian yang diulang. Baris status menunjukkan durasi ekspor.' },
        { name: 'Ekspor', text: 'Dengarkan berkas asli untuk memeriksa pilihan, lalu ekspor MP3 atau WAV. Unduhan adalah klip yang ditulis berurutan.' },
{
          name: 'Ambil filenya',
          text: 'Nama file memuat akhiran -edited.',
        },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Pengulangan disalin di browser Anda. Setelah halaman termuat, ekspor tetap jalan tanpa jaringan.' },
        { q: 'Apa yang terjadi di setiap sambungan?', a: 'Akhir satu putaran dan awal putaran berikut tumpang tindih sepanjang sambungan. Bawaan adalah 0,01 detik. Tumpang tindih itu crossfade linear, jadi nada yang rata tidak meloncat. WAV adalah sampel itu. MP3 mengkode loop satu kali, pada bitrate yang Anda pilih. Nada dan kecepatan tidak berubah.' },
        { q: 'Apa yang ditolak?', a: 'Pengulangan hanya dari 2 sampai 16. Jika hasilnya melewati 10 menit, ekspor berhenti dan baris status memberitahu. Halaman ini tidak merekam di atas dirinya sendiri dan tidak menyusun dua berkas yang berbeda ujung ke ujung.' },
        { q: 'Apa bedanya dengan potong, gabung, dan fade?', a: 'Pemotong menyimpan satu rentang sekali. Penggabung menyusun berkas yang berbeda berurutan. Fade mengecilkan awal atau akhir satu berkas. Halaman ini menulis klip yang sama lagi, dan crossfade hanya ada di antara salinan.' },
        { q: 'Apakah bisa di ponsel?', a: 'Ya. Kedua slider, gelombang, dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang.' },
      ],
      screenshotsAlt: [
        'Audio looper: area jatuhkan, tidak ada yang dikirim ke server',
        'Audio looper: area kerja dengan berkas yang sudah dimuat',
        'Audio looper: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Salinannya bertumpang tindih di sambungan',
          paragraphs: [
            'Ulangan berjalan dari 2 sampai 16. Bawaannya 4. Setiap sambungan bertumpang tindih sebesar penggeser Sambungan: 0,01 detik kecuali Anda memindahkannya, dan tidak pernah lebih dari 0,1 detik.',
            'Tumpang tindihnya adalah crossfade linear, jadi nada stabil tidak meloncat. Durasi ekspor adalah satu putaran dikali jumlah ulangan, dikurangi tumpang tindih dikali jumlah ulangan kurang satu. Nada dan kecepatan tetap seperti semula. WAV adalah sampel itu. MP3 mengenkode loop sekali.',
          ],
        },
        {
          heading: 'Satu klip, ditulis ulang',
          paragraphs: [
            'Pemutar MP3 menulis ulang satu klip agar berkasnya bertahan lebih lama. Gunakan saat salinan berikutnya harus audio yang sama:',
          ],
          bullets: [
            'Riff satu birama yang ingin Anda jadikan berkas latihan.',
            'Isyarat suara pendek yang harus bertahan sepanjang adegan lebih panjang.',
            'Sampel yang sambungannya berbunyi klik jika salinannya bertemu tanpa tumpang tindih.',
          ],
        },
        {
          heading: 'Bukan pemangkas, dan bukan penggabung',
          paragraphs: [
            'Pemangkas audio mempertahankan satu rentang sekali. Penggabung audio menempatkan berkas berbeda berderet. Fade audio melembutkan awal atau akhir satu berkas. Crossfade di halaman ini hanya berada di antara salinan klip yang sama.',
            'Halaman ini tidak merekam di atas dirinya sendiri. Jika hasilnya akan melewati 10 menit, ekspor berhenti. Perpendek pilihan atau kurangi ulangan.',
          ],
        },

      ],
      dropHint: 'Letakkan berkas audio, atau klik untuk memilih',
      exportLabel: 'Ulangi dan unduh',
    },
    'auto-panner': {
      cardLine: 'Sapukan satu berkas ke kiri dan kanan dengan laju yang Anda tentukan. Gerakan ini tidak mengikuti ketukan.',
      name: 'Auto panner',
      shortName: 'Panner',
      title: 'Auto panner — sapukan audio ke kiri dan kanan',
      description: 'Sapukan mono atau stereo ke kiri dan kanan pada 0,05 sampai 2 Hz. Kedalaman 0 sampai 100%, mulai di 70%. Gratis di peramban. Tidak ada yang diunggah.',
      h1: 'Auto panner, sapukan berkas dari kiri ke kanan',
      heroAlt: 'Menyapukan satu rekaman dari kiri ke kanan',
      subtitle: 'Anda yang mengatur kedalaman dan laju. Sapuan tidak mengikuti ketukan.',
      intro: 'Kedalaman berjalan dari 0 sampai 100%. Nilai awal 70%. Laju berjalan dari 0,05 Hz sampai 2 Hz. Nilai awal 0,2 Hz. Posisi adalah kedalaman kali sinus laju itu, jadi 0,2 Hz butuh 5 detik untuk pergi dan kembali. Gerakan ini tidak mengikuti drum. Kedalaman 0 membiarkan berkas seperti semula. Pemrosesan tetap di peramban.',
      usesHeading: 'Penggunaan umum auto panner',
      uses: [
        'Napas bergerak: biarkan suara latar berpindah perlahan dari satu sisi ke sisi lain.',
        'Memperlebar vokal: tambahkan pergeseran kiri-kanan yang stabil pada vokal mono.',
        'Groove sintetisator: beri rasa berirama pada garis sintetisator yang statis.',
        'Efek ambience: sapukan suara lingkungan perlahan tanpa menarik perhatian.',
        'Variasi drum: sebar hi-hat atau perkusi ke kiri-kanan secara otomatis.',
        'Audio gim: kesan bergerak kiri-kanan saat objek melintas.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Laju dan kedalaman terpisah',
          text: 'Laju 0.05–2 Hz menentukan seberapa cepat, kedalaman 0–100% menentukan seberapa lebar — lambat dan dalam terasa ambience, cepat dan tipis terasa berirama.',
        },
        {
          icon: 'lock-simple',
          title: 'Diproses lokal',
          text: 'Panning dihitung di peramban Anda, audio tidak diunggah.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Berkas didekode di perangkat Anda.' },
        { name: 'Atur kedalaman dan laju', text: 'Kedalaman adalah seberapa jauh suara bergerak, dari 0 sampai 100%. Laju adalah berapa sapuan per detik, dari 0,05 sampai 2. Seret gelombang jika hanya sebagian yang harus bergerak.' },
        { name: 'Ekspor', text: 'Dengarkan untuk memeriksa pilihan, lalu ekspor MP3 atau WAV. WAV adalah sampel yang sudah disapu. MP3 mengode sapuan sekali.' },
        {
          name: 'Ambil file kamu',
          text: 'Nama file mendapat akhiran -edited.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Sapuan adalah panner stereo di peramban Anda. Setelah halaman dimuat, Anda bisa offline dan ekspor tetap jalan.' },
        { q: 'Apa yang terjadi pada suara?', a: 'Posisi adalah kedalaman kali sinus laju. Nada dan kecepatan putar tidak berubah. Stereo bergerak sebagai satu gambar. Dua kanal tidak dikirim di jalur yang berbeda. WAV adalah sampel itu. MP3 dikode sekali, pada bitrate yang Anda pilih.' },
        { q: 'Apa yang tidak bisa dilakukan?', a: 'Sapuan tidak mengunci ke ketukan, dan tidak memisahkan tengah dan sisi. Kedalaman 0 tidak memasang panner, jadi ekspor sama dengan berkas yang Anda letakkan. Ini bukan transfer terkait kepala yang mengarahkan suara ke suatu sudut.' },
        { q: 'Apa bedanya dengan echo, slowed reverb, dan equalizer?', a: 'Echo menambah salinan setelah tunda. Slowed + Reverb mengubah kecepatan dan nada, lalu menambah ruang. Equalizer audio mengubah pita frekuensi. Halaman ini hanya menggerakkan audio yang sama ke kiri dan kanan. Lingkaran tetap sekitar 10 detik, dengan ekor reverb pendek, ada di halaman audio 3D.' },
        { q: 'Apakah ini berfungsi di ponsel?', a: 'Ya. Kedua penggeser, gelombang, dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang.' },
      ],
      screenshotsAlt: [
        'Auto panner: area jatuhkan, tidak ada yang dikirim ke server',
        'Auto panner: area kerja dengan berkas yang sudah dimuat',
        'Auto panner: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Di mana suara berada',
          paragraphs: [
            'Kedalaman berjalan dari 0 sampai 100%. Nilai awalnya 70%. Laju berjalan dari 0,05 Hz sampai 2 Hz. Nilai awalnya 0,2 Hz.',
            'Posisinya adalah kedalaman dikali sinus dari laju itu. Pada 0,2 Hz satu siklus kiri-kanan penuh memakan 5 detik. Kedalaman di 0 membiarkan berkas apa adanya. Nada dan kecepatan pemutaran tetap seperti semula.',
          ],
        },
        {
          heading: 'Sapuan yang stabil',
          paragraphs: [
            'Gunakan saat gerakannya harus rata:',
          ],
          bullets: [
            'Pad atau vokal yang harus melintasi speaker perlahan.',
            'Rekaman mono yang harus bergerak, tanpa menjadi dua trek berbeda.',
            'Laju yang Anda atur dalam hertz, bukan sapuan yang mencoba mengikuti drum.',
          ],
        },
        {
          heading: 'Bukan echo, dan bukan perubahan tempo',
          paragraphs: [
            'Echo menambahkan salinan setelah delay yang Anda atur. Slowed + reverb mengubah kecepatan dan nada, lalu menambahkan ruangan. Equalizer mengubah pita frekuensi. Tidak satu pun memindahkan citra menurut jam.',
            'Halaman ini tidak mengikuti ketukan. Berkas stereo tetap satu citra. Kanal kiri dan kanan tidak dikirim melalui jalur terpisah.',
          ],
        },
      ],
      dropHint: 'Letakkan berkas audio, atau klik untuk memilih',
      exportLabel: 'Pan dan unduh',
    },
    '3d-audio': {
      cardLine: 'Satu sakelar menaruh berkas pada lingkaran pelan dan menambah ekor reverb pendek.',
      name: 'Audio 3D',
      shortName: '3D',
      title: 'Audio 3D — lingkaran pelan dan reverb online',
      description: 'Satu lingkaran sekitar setiap 10 detik, plus ekor reverb pendek. Satu sakelar. Kecepatan dan nada tetap. Gratis di peramban. Tidak ada yang diunggah.',
      h1: 'Audio 3D, lingkaran pelan dengan ekor reverb pendek',
      heroAlt: 'Lingkaran pelan di antara speaker, plus ruang pendek',
      subtitle: 'Kedalaman, laju, dan ruang sudah diatur. Anda hanya membalik sakelar.',
      intro: 'Lingkaran ini tetap. Kedalamannya 100%. Lajunya 0,1 Hz, jadi satu putaran sekitar 10 detik. Yang bergerak adalah suara langsung. Kiriman reverb 25% memakai ruang pendek yang sama dengan Slowed + Reverb. Kecepatan dan nada tetap. Sakelar mati membuat ekspor sama dengan berkas yang Anda letakkan. Pemrosesan tetap di peramban.',
      usesHeading: 'Penggunaan umum audio 3D',
      uses: [
        'Vokal berputar: suara mengelilingi kepala, bahan yang pas untuk meditasi dan relaksasi.',
        'Gerak latar: tambahkan putaran pada latar statis, kesan ruang langsung muncul.',
        'Suasana gim: suara lingkungan berputar pelan, terasa hadir saat memakai headphone.',
        'Efek video pendek: satu kalimat mengelilingi satu putaran, umpan perhatian yang jitu.',
        'Kustomisasi white noise: white noise yang berputar, bahan bantu tidur.',
        'Pembuka podcast: kalimat pembuka berputar satu lingkaran, menjadi ciri khas acara.',
      ],
      why: [
        {
          icon: 'repeat',
          title: 'Satu sakelar, semuanya beres',
          text: 'Laju putaran tetap sekitar 10 detik per lingkaran, plus reverb singkat — tidak perlu menyetel banyak parameter sendiri.',
        },
        {
          icon: 'lock-simple',
          title: 'Kecepatan dan nada tetap',
          text: 'Hanya posisinya yang bergerak: kecepatan dan nada tetap seperti aslinya, ucapan dan irama tetap pas.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Berkas didekode di perangkat Anda.' },
        { name: 'Biarkan lingkaran menyala', text: 'Sakelar mulai dalam keadaan nyala. Matikan, dan ekspor sama dengan berkas yang Anda letakkan. Tidak ada penggeser kedua untuk kedalaman, laju, atau ruang.' },
        { name: 'Ekspor', text: 'Dengarkan, lalu ekspor MP3 atau WAV. WAV adalah sampel yang berputar plus ekornya. MP3 mengode itu sekali.' },
        {
          name: 'Ambil file-mu',
          text: 'Nama file mendapat akhiran -edited. Dengarkan dengan headphone agar efeknya terasa.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Lingkaran dan ruang dirender di peramban Anda. Setelah halaman dimuat, Anda bisa offline dan ekspor tetap jalan.' },
        { q: 'Apa yang terjadi pada suara?', a: 'Kedalaman tetap 100%. Laju tetap 0,1 Hz, sekitar 10 detik untuk satu putaran. Yang bergerak adalah suara langsung. Reverb adalah kiriman 25%, ruang pendek yang sama dengan Slowed + Reverb, jadi berkas mendapat ekor. Kecepatan dan nada tetap. WAV adalah sampel itu. MP3 dikode sekali, pada bitrate yang Anda pilih.' },
        { q: 'Apa yang tidak bisa dilakukan?', a: 'Di halaman ini Anda tidak mengatur laju, kedalaman, atau ruang yang lain. Ini tidak mengikuti ketukan. Ini tidak mengarahkan suara ke suatu sudut di sekitar kepala Anda. Sakelar mati tidak menambah lingkaran atau ekor.' },
        { q: 'Apa bedanya dengan auto panner dan slowed reverb?', a: 'Untuk mengatur laju dan kedalaman sendiri, gunakan auto panner. Halaman ini adalah lingkaran yang sudah jadi, sekitar 10 detik, dengan reverb yang sudah nyala. Slowed + Reverb mengubah kecepatan dan nada. Halaman ini tidak.' },
        { q: 'Apakah ini berfungsi di ponsel?', a: 'Ya. Sakelar, gelombang, dan tombol ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang.' },
      ],
      screenshotsAlt: [
        'Audio 3D: area jatuhkan, tidak ada yang dikirim ke server',
        'Audio 3D: area kerja dengan berkas yang sudah dimuat',
        'Audio 3D: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Lingkaran dengan angkanya sudah dipilih',
          paragraphs: [
            'Kedalaman 100%. Lajunya 0,1 Hz. Satu perjalanan dari tengah, keluar ke satu sisi, dan kembali melewati sisi lain memakan sekitar 10 detik.',
            'Suara langsungnya yang bergerak. Reverb adalah send 25%, ruangan pendek yang sama seperti di halaman slowed + reverb. Ekornya sebabnya ekspor berjalan melewati akhir berkas yang Anda letakkan.',
          ],
        },
        {
          heading: 'Saat preset itulah pekerjaannya',
          paragraphs: [
            'Gunakan halaman ini saat Anda ingin gerakan yang sudah jadi:',
          ],
          bullets: [
            'Vokal atau pad yang harus berkelana tanpa penggeser laju.',
            'Ruangan pendek di balik gerakan itu, bukan gumpalan yang Anda campur sendiri.',
            'Kecepatan asli dan nada asli, dibiarkan di tempatnya.',
          ],
        },
        {
          heading: 'Bukan panner yang Anda setel, dan bukan perlambatan',
          paragraphs: [
            'Auto panner adalah tempat Anda mengatur kedalaman dari 0 sampai 100% dan laju dari 0,05 Hz sampai 2 Hz, tanpa reverb. Halaman ini mengunci kedua angka dan menambahkan ruangan.',
            'Slowed + reverb mengubah kecepatan, dan nadanya ikut bergerak. Halaman ini tidak. Mematikan sakelarnya membiarkan berkas seperti saat Anda meletakkannya.',
          ],
        },
      ],
      dropHint: 'Letakkan berkas audio, atau klik untuk memilih',
      exportLabel: 'Terapkan 3D',
    },
    metronome: {
      cardLine: 'Klik dari 40 sampai 240 BPM. Ketukan pertama tiap birama lebih keras.',
      name: 'Metronom',
      shortName: 'Metronom',
      title: 'Metronom — Klik 40 sampai 240 BPM gratis',
      description: 'Klik dari 40 sampai 240 BPM di 2/4, 3/4, 4/4, atau 6/8. Ketukan pertama lebih keras. Ekspor 4, 8, atau 16 birama, WAV atau MP3. Tidak diunggah.',
      h1: 'Metronom, klik dari 40 sampai 240 BPM',
      heroAlt: 'Klik metronom dari 40 sampai 240 BPM',
      subtitle: 'Dengar kliknya, atau simpan 4, 8, atau 16 birama. Klik ini tidak masuk ke lagu.',
      intro: 'Tempo dari 40 sampai 240 BPM. Pilih 2/4, 3/4, 4/4, atau 6/8. Ketukan pertama tiap birama lebih keras. Tekan putar, klik berjalan sampai Anda berhenti. Ekspor menulis 4, 8, atau 16 birama sebagai WAV atau MP3. 6/8 adalah enam klik dalam birama pada BPM itu, bukan dua. Halaman ini tidak menerima berkas dan tidak menaruh klik di bawah lagu. Campuran itu ada di editor multitrack. Tidak ada yang diunggah.',
      usesHeading: 'Penggunaan umum metronom',
      uses: [
        'Sebelum merekam: berlatih stabil di BPM target sebelum mulai merekam.',
        'Ekspor trek referensi: ekspor ketukan 4, 8, atau 16 birama untuk diletakkan di DAW.',
        'Latihan alat musik: main mengikuti ketukan, dari lambat sampai lancar.',
        'Latihan ritme: ganti birama untuk melatih pola ritme yang berbeda.',
        'Latihan tari: pasang ketukan sesuai BPM musik tari untuk latihan koreografi.',
        'Irit langkah lari: setel BPM sesuai frekuensi langkah untuk menjaga irama lari.',
      ],
      why: [
        {
          icon: 'sliders',
          title: '40–240 BPM + birama',
          text: 'Kecepatan dan birama sama-sama bisa diatur: dari tempo latihan yang lambat sampai tempo panggung.',
        },
        {
          icon: 'volume',
          title: 'Trek referensi bisa diekspor',
          text: 'Ekspor ketukan sebagai audio 4, 8, atau 16 birama, lalu taruh di proyek sebagai acuan tempo.',
        },
      ],
      howTo: [
        { name: 'Atur BPM dan meter', text: 'BPM dari 40 sampai 240. Pilih 2/4, 3/4, 4/4, atau 6/8. Halaman mulai di 100 BPM dan 4/4.' },
        { name: 'Putar', text: 'Klik berjalan sampai Anda berhenti. Ketukan pertama tiap birama lebih keras. Setiap klik adalah nada pendek yang sama.' },
        { name: 'Ekspor jika Anda perlu berkas', text: 'Pilih 4, 8, atau 16 birama, lalu WAV atau MP3. Berkasnya hanya klik. WAV menyimpan sampel itu. MP3 mengkode sekali.' },
      ],
      faqs: [
        { q: 'Apakah ada yang diunggah?', a: 'Tidak. Halaman ini tidak membaca berkas dan tidak membuka mikrofon. Putar dan ekspor tetap di peramban. Setelah halaman dimuat, Anda bisa offline dan klik tetap jalan.' },
        { q: 'Seperti apa kliknya?', a: 'Pada 100 BPM, klik berjarak 0,60 detik. Ketukan pertama birama lebih keras. Ketukan lain nada yang sama, lebih pelan. WAV adalah sampel itu. MP3 mengkode sekali, pada bitrate yang Anda pilih.' },
        { q: 'Apa yang tidak bisa dilakukan?', a: 'Ini tidak menyelaraskan klik ke sebuah lagu. Tidak ada tempat untuk meletakkan berkas. 6/8 tetap enam klik dalam birama, pada BPM di penggeser. Ini tidak berubah menjadi dua klik not seperempat bertitik.' },
        { q: 'Apa bedanya dengan multitrack dan halaman kecepatan?', a: 'Halaman ini hanya klik. Menaruh klik di bawah lagu adalah editor multitrack. Mengubah panjang rekaman adalah halaman kecepatan, dan nada ikut bergerak. Mikrofon ada di perekam suara.' },
        { q: 'Apakah ini berfungsi di ponsel?', a: 'Ya. Penggeser BPM, meter, putar, dan ekspor bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang. Klik memakai osilator Web Audio. Berkas yang diekspor memakai jarak yang sama.' },
      ],
      screenshotsAlt: [
        'Metronom: halaman sebelum ada berkas atau masukan',
        'Metronom: setelah membaca berkas atau ketukan',
        'Metronom: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Klik',
          paragraphs: [
            'Pada 100 BPM jarak antarklik 0,60 detik. Ketukan pertama birama lebih keras. Setiap klik adalah nada pendek yang sama.',
            '2/4 berklik dua kali per birama, 3/4 tiga kali, 4/4 empat kali, dan 6/8 enam kali. BPM adalah laju klik di setiap meter itu.',
          ],
        },
        {
          heading: 'Berkas berisi klik yang sama',
          paragraphs: [
            'Ekspor menulis 4, 8, atau 16 birama. WAV menyimpan klik apa adanya. MP3 mengenkode hasil itu sekali.',
          ],
          bullets: [
            'Empat birama 4/4 pada 100 BPM adalah 16 klik.',
            'Letakkan WAV itu di editor multi-track jika ingin di bawah sebuah lagu.',
            'Tetap di putar jika Anda hanya perlu mendengar temponya.',
          ],
        },
        {
          heading: 'Apa yang tidak dilakukannya',
          paragraphs: [
            'Alat ini tidak menyelaraskan klik ke sebuah lagu. Tidak ada berkas untuk diletakkan dan tidak ada gelombang untuk dipangkas.',
            'Alat ini tidak mengubah durasi rekaman. Halaman perubahan kecepatan audio yang melakukannya, dan nadanya ikut bergerak bersama kecepatan.',
          ],
        },
      ],
      dropHint: 'Tanpa berkas. Tekan putar.',
    },
    'tap-tempo': {
      cardLine: 'Ketuk iramanya dan baca BPM apa pun, tanpa berkas.',
      name: 'Tap tempo',
      shortName: 'Tap tempo',
      title: 'Tap tempo — ketuk untuk mengetahui BPM',
      description: 'Ketuk mengikuti lagu dan baca BPM-nya. Satu ketukan melenceng tidak menggeser angkanya; stabil setelah sekitar empat ketukan. Gratis, tanpa unggah.',
      h1: 'Tap tempo — ketahui BPM sebuah lagu dengan mengetuk',
      heroAlt: 'Irama yang diketuk menjadi riak di sekitar satu titik',
      howToIntro: 'Ketuk, dan bacaannya tenang',
      subtitle: 'Ketuk tombol apa pun mengikuti irama. Angkanya stabil dalam sekitar empat ketukan.',
      intro: 'Putar lagunya di mana saja, ketuk halaman ini pada setiap ketukan, dan baca temponya dalam BPM. Angka mengambil trimmed mean dari interval ketukan Anda, jadi satu ketukan terlalu cepat atau terlewat tidak menyeretnya; 2,5 detik tanpa ketukan memulai hitungan baru. Tidak ada berkas untuk dibuka dan tidak ada yang diunggah; ketukan tidak pernah keluar dari halaman ini.',
      usesHeading: 'Penggunaan umum tap tempo',
      uses: [
        'Mengatur tempo latihan: setel [metronom](/metronome) ke kecepatan lagu yang sedang dipelajari.',
        'Cek awal mashup: lihat apakah BPM dua lagu cocok untuk digabungkan.',
        'Mengukur tempo live: ukur tempo aransemen saat ini saat band berlatih.',
        'Musik lari: ukur frekuensi langkah sendiri, pilih lagu dengan BPM yang cocok.',
        'Mengajar tari: ketuk titik ritme koreografi untuk ditunjukkan ke siswa.',
        'Musik video: ukur berapa BPM yang dibutuhkan sesuai irama penyuntingan.',
      ],
      why: [
        {
          icon: 'clock-counter-clockwise',
          title: 'Stabil setelah empat ketukan',
          text: 'Setelah sekitar empat ketukan angkanya mantap: diambil rata-rata terpotong dari jarak antarketukan, satu ketukan melenceng tak menggesernya.',
        },
        {
          icon: 'check',
          title: 'Tanpa berkas',
          text: 'Yang dihitung hanya milidetik di antara ketukan — tanpa berkas, tanpa unggahan, tetap bisa diukur lewat pengeras suara saat tampil.',
        },
      ],
      howTo: [
        { name: 'Putar lagunya', text: 'Di mana saja Anda suka. Halaman ini tidak butuh berkas audionya, jadi speaker ponsel di sebelah laptop pun cukup.' },
        { name: 'Ketuk iramanya', text: 'Ketuk tombolnya, atau biarkan fokus di halaman dan tekan spasi pada setiap ketukan. Angka menguat setelah sekitar empat ketukan dan terus terhaluskan saat Anda melanjutkan.' },
        { name: 'Baca dan atur ulang', text: 'Angkanya adalah beat per menit dengan satu desimal. Berhenti mengetuk 2,5 detik dan ketukan berikutnya memulai hitungan baru, atau tekan Atur ulang untuk menghapusnya seketika.' },
      ],
      faqs: [
        { q: 'Apakah musik saya diunggah?', a: 'Tidak, dan tidak ada berkas sama sekali. Halaman ini menghitung milidetik di antara ketukan Anda. Tidak ada apa pun tentang lagu, ketukan, atau hal lain yang keluar dari halaman ini.' },
        { q: 'Seberapa akurat?', a: 'Seakurat ketukan Anda, dalam batas yang tidak berarti untuk musik. Dalam pengujian terukur, jitter ketukan plus minus 20 milidetik menjaga pembacaan dalam sekitar 2 BPM dari tempo sebenarnya. Pembacaan memakai trimmed mean dari interval Anda, jadi satu ketukan melenceng atau terlewat tidak menggerakkannya.' },
        { q: 'Apa bedanya dengan pendeteksi BPM?', a: '[Nada dan BPM](/key-bpm-finder) menganalisis berkas audio dan membaca tempo serta nada dari gelombang, yang eksak untuk musik produksi. Halaman ini membaca apa pun yang Anda ketuk, jadi bekerja untuk band yang tampil langsung, melodi di kepala, atau lagu yang tidak bisa Anda unggah atau tidak Anda miliki berkasnya.' },
        { q: 'Saya mengetuk irama yang tidak ada. Bagaimana ini?', a: 'Tidak ada yang rusak. Satu ketukan melenceng masuk ke tumpukan buangan trimmed mean, dan 2,5 detik keheningan menghapus hitungan itu juga. Untuk mulai ulang seketika, tekan Atur ulang.' },
        { q: 'Berfungsi di ponsel?', a: 'Ya. Tombol ketuk sebesar ibu jari dan seluruh halamannya nyaris tanpa beban. Mengetuk irama di perangkat yang sama dengan pemutar musiknya tidak masalah; halaman ini tidak mendengarkan audionya.' },
        { q: 'Tempo berapa saja yang bisa dibaca?', a: 'Apa pun dengan ketukan berjarak 2,5 detik sampai nyaris serentak, kira-kira 24 sampai 999 BPM. Musik hidup di antara 40 dan 240, tempat pembacaan paling stabil. Untuk lagu yang sangat lambat, ketuk pembagian iramanya lalu bagi angkanya dua.' },
        { q: 'Bisakah lagunya diperlambat mengikuti BPM?', a: 'Tidak di sini; halaman ini hanya membaca. Bawa angkanya ke [metronom](/metronome) untuk berlatih mengikutinya, atau ke [pengubah kecepatan](/change-audio-speed) untuk membawa berkas ke tempo target.' },
      ],
      screenshotsAlt: [
        'Tap tempo: tampilan sebelum ketukan pertama',
        'Tap tempo setelah tujuh ketukan: tampilannya berhenti di 120,2 BPM',
      ],
      sections: [
        {
          heading: 'Bagaimana angkanya dihitung',
          paragraphs: [
            'Setiap ketukan menyimpan satu stempel waktu. Jeda di antara ketukan terakhir Anda diurutkan, seperempat tercepat dan terlambat dibuang, dan jeda yang tersisa dirata-ratakan. Enam puluh ribu dibagi rata-rata itu adalah BPM, ditampilkan dengan satu desimal.',
            'Pemangkasan itu adalah seluruh triknya. Ketukan manusia punya pencilan: satu ketukan sedikit terlalu awal, satu ketukan saat Anda mendengarkan alih-alih menghitung. Rata-rata biasa membiarkan salah satunya menarik angkanya; rata-rata terpangkas menganggap kedua ujung sebagai noise dan membaca tempo yang benar-benar Anda pertahankan.',
          ],
        },
        {
          heading: 'Tap tempo atau penganalisis berkas',
          paragraphs: [
            'Gunakan halaman ini saat tempo ada di telinga Anda: band langsung, melodi akustik, trek yang tidak bisa Anda berikan ke alat. Gunakan [pencari nada dan BPM](/key-bpm-finder) saat Anda punya berkasnya dan ingin tempo produksi yang tepat plus nadanya. Saat keduanya berbeda, percayai berkasnya.',
          ],
        },
      ],
      dropHint: 'Tanpa berkas. Ketuk iramanya.',
      exportLabel: 'Tap tempo',
    },
    'key-bpm-finder': {
      cardLine: 'Baca BPM dari 60 sampai 180 dan mayor atau minor. Hening tetap tidak terbaca.',
      name: 'Nada dan BPM',
      shortName: 'Nada BPM',
      title: 'Nada dan BPM — Baca berkas online gratis',
      description: 'Baca BPM dari 60 sampai 180 dan mayor atau minor. Hening tetap tidak terbaca. Halaman membaca 60 detik pertama. Tidak ada yang diunggah.',
      h1: 'Nada dan BPM, dibaca dari berkas yang Anda letakkan',
      heroAlt: 'Baca BPM dan nada sebuah berkas audio',
      subtitle: 'Dua angka. Tidak ada tombol yang menggeser nada.',
      intro: 'Letakkan sebuah berkas. Halaman membaca BPM dari 60 sampai 180, dan sebuah nada: nama nada plus mayor atau minor. BPM adalah jarak onset yang paling kuat. Jarak di luar rentang itu dibagi dua atau digandakan sampai masuk. Nada adalah profil mayor atau minor tetap yang paling cocok dengan kelas pitch. Hening menampilkan «Tidak terbaca», bukan 0 BPM dan bukan C mayor. Hanya 60 detik pertama yang dibaca. Berkas lebih pendek dari 2 detik tidak punya BPM. Halaman ini tidak mengubah berkas. Menggeser nada ada di pengubah nada. Tidak ada yang diunggah.',
      usesHeading: 'Kapan saja deteksi nada dasar dan BPM berguna',
      uses: [
        'Menyelaraskan remix: baca dulu BPM-nya, baru putuskan apakah tempo perlu diubah.',
        'Referensi transposisi: baca nada dasarnya, lalu ke [pengubah pitch](/pitch-changer) untuk pindah ke kunci yang dituju.',
        'Pendamping latihan: latih tangga nada sesuai kunci yang terbaca, atur metronom sesuai BPM.',
        'Merapikan sampel: beri label nada dasar dan tempo pada pustaka sampel.',
        'Persiapan cover: pastikan nada dasar lagu asli, tentukan mau naik berapa setengah nada.',
        'Perencanaan produksi: ketahui tempo dan kunci bahan sumber sebelum me-remix.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Hasil langsung memberi jawaban',
          text: 'BPM dan nada dasar terbaca sekaligus: ada dasar untuk mengubah tempo, mengubah pitch, atau mengatur metronom, tanpa menebak perasaan.',
        },
        {
          icon: 'check',
          title: 'File tetap utuh',
          text: 'Hanya dibaca, tidak diubah: tak satu pun sampel audio tersentuh, dan tidak perlu ekspor.',
        },
      ],
      howTo: [
        { name: 'Letakkan berkas', text: 'Audio, atau video dengan jalur suara. Peramban mendekode. Tidak ada yang diunggah.' },
        { name: 'Baca BPM dan nada', text: 'BPM adalah bilangan bulat dari 60 sampai 180. Nada adalah nama nada plus mayor atau minor. Kalimat di bawah angka menyebut kasus yang tertukar.' },
        { name: 'Biarkan berkas seperti semula', text: 'Halaman ini tidak mengekspor berkas yang diubah. Pengubah nada adalah tempat nada bergeser, dan durasinya tetap.' },
      ],
      faqs: [
        { q: 'Apakah berkas diunggah?', a: 'Tidak. Peramban mendekode dan membaca sampel di memori. Setelah halaman dimuat, Anda bisa offline dan tetap membaca berkas yang Anda letakkan.' },
        { q: 'Seberapa tepat pembacaannya?', a: 'BPM adalah jarak onset terkuat antara 60 dan 180, sebagai bilangan bulat. Nada adalah kecocokan terbaik pada profil mayor tetap dan profil minor tetap, masing-masing 12 bobot. Ini bukan transkripsi akor.' },
        { q: 'Apa yang tidak bisa dilakukan?', a: 'Ini tidak mengubah nada atau kecepatan. Tidak ada tombol untuk nada baru. Berkas lebih pendek dari 2 detik tidak punya BPM. Hening menampilkan tidak terbaca, bukan 0 dan bukan C mayor. Hanya 60 detik pertama yang dibaca.' },
        { q: 'Apa bedanya dengan pengubah nada dan halaman kecepatan?', a: 'Halaman ini hanya membaca. Pengubah nada menggeser nada dan mempertahankan durasi. Halaman kecepatan mengubah durasi, dan nada ikut bergerak. Pengubah tempo mengubah durasi dan nada tetap, dari 0.75× sampai 1.25×.' },
        { q: 'Apakah ini berfungsi di ponsel?', a: 'Ya. Letakkan berkas dan baca kedua angka. Area letak dan tombol atur ulang bisa disentuh di Chrome, Edge, Firefox, dan Safari yang sekarang.' },
      ],
      screenshotsAlt: [
        'Nada dan BPM: halaman sebelum ada berkas atau masukan',
        'Nada dan BPM: setelah membaca berkas atau ketukan',
      ],
      sections: [
        {
          heading: 'Apa arti kedua angka',
          paragraphs: [
            'BPM adalah jarak terkuat antara onset, dari 60 sampai 180. Jarak di luar rentang itu dibagi dua atau dikali dua sampai masuk ke dalamnya.',
            'Kuncinya adalah profil mayor atau minor yang paling cocok dengan energi kelas nada. Setiap profil adalah kumpulan tetap 12 bobot.',
          ],
        },
        {
          heading: 'Saat pembacaannya lemah',
          paragraphs: [
            'Irama bebas, ucapan, dan derau ruangan tidak punya jarak stabil, jadi BPM bisa jatuh pada kelipatan yang salah. Mayor dan minor relatif berbagi banyak nada, jadi keduanya bisa tertukar.',
          ],
          bullets: [
            'Berkas senyap menampilkan Tidak terbaca untuk kedua angka.',
            'Berkas lebih pendek dari 2 detik masih bisa menampilkan kunci, dan tidak menampilkan BPM.',
            'Hanya 60 detik pertama yang dibaca.',
          ],
        },
        {
          heading: 'Apa yang tidak dilakukannya',
          paragraphs: [
            'Alat ini tidak menggeser nada. Tidak ada tombol untuk kunci baru. Itu pengubah nada, dan durasinya tetap sama.',
            'Alat ini tidak mengubah kecepatan. Halaman kecepatan yang melakukannya, dan nadanya ikut bergerak bersama kecepatan.',
          ],
        },
      ],
      dropHint: 'Letakkan berkas audio, atau klik untuk memilih',
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
      usesHeading: 'Situasi penggunaan umum meter LUFS',
      uses: [
        'Penyelarasan podcast: lihat seberapa jauh memo suara atau mix dari target podcast −16.',
        'Penyelarasan streaming: selaraskan musik ke −14 LUFS sebelum rilis, tanpa membiarkan puncak melewati −1 ديسيبل نسبي للسعة الكاملة.',
        'Penyerahan broadcast: program siaran diselaraskan pada −23 LUFS.',
        'Pemeriksaan puncak: puncak sampel melewati −1 ديسيبل نسبي للسعة الكاملة atau tidak, sekali lihat langsung ketahuan.',
        'Pemeriksaan mix: saat jurang antara bagian keras dan pelan terlalu besar, baca LUFS dulu baru putuskan apakah perlu kompresi.',
        'Perbandingan lintas platform: ukur file yang sama untuk tiap platform sebelum menyelarkannya.',
      ],
      why: [
        {
          icon: 'waveform',
          title: 'Loudness terintegrasi berbobot K',
          text: 'LUFS terintegrasi diukur menurut ITU-R BS.1770 — seberapa keras seluruh durasi adalah sifat file; bukan pengukur tingkat kebisingan ruangan, bukan juga normalisasi puncak.',
        },
        {
          icon: 'lock-simple',
          title: 'Gain berhenti di puncak',
          text: 'Bila menyasar target akan mendorong sampel tertinggi melewati −1 ديسيبل نسبي للسعة الكاملة, gain berhenti otomatis dan melaporkan dengan jujur LUFS yang benar-benar tercapai, tanpa memaksakan target.',
        },
      ],
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
      screenshotsAlt: [
        'Pengukur kenyaringan: halaman sebelum ada berkas atau masukan',
        'Pengukur kenyaringan: setelah membaca berkas atau ketukan',
      ],
      sections: [
        {
          heading: 'Pembacaan berkas, bukan meter ruangan',
          paragraphs: [
            'Angkanya adalah LUFS terintegrasi: seberapa keras berkas sepanjang durasinya, setelah pembobotan K dalam ITU-R BS.1770. Itu sifat berkas. Itu bukan pembacaan ruangan, dan bukan level tekanan suara berbobot A.',
            'Halaman juga menampilkan puncak sampel. Puncak itu bukan true peak. Puncak antar-sampel masih bisa melewati batas pada beberapa jalur pemutaran.',
          ],
        },
        {
          heading: 'Target yang benar-benar dipakai orang',
          paragraphs: [
            'Titik acuan yang biasa adalah konvensi, bukan batas hukum:',
          ],
          bullets: [
            'Sekitar −16 LUFS untuk podcast lisan.',
            'Sekitar −14 LUFS untuk banyak streaming musik.',
            'Sekitar −23 LUFS untuk kenyaringan program gaya siaran.',
          ],
        },
        {
          heading: 'Gain berhenti di puncak',
          paragraphs: [
            'Jika Anda menerapkan gain yang disarankan, gain berhenti saat puncak sampel akan melewati −1 dBFS. Berkas bisa sudah dinormalisasi puncaknya dan tetap jauh dari −16 LUFS, karena satu batuk menentukan puncak sementara sisanya pelan.',
            'Normalisasi hanya mengejar puncak itu, ke sekitar −0,2 dB. Kompresor level yang mempersempit jarak antara keras dan pelan. Halaman ini mengukur. Halaman ini tidak berpura-pura satu angka bisa membuat master.',
          ],
        },
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
      usesHeading: 'Skenario penggunaan umum mixing multitrack',
      uses: [
        'Vokal di atas musik: taruh rekaman suara di bawah musik latar dan geser sampai vokal masuk setelah intro.',
        'Demo mix kasar: campur vokal, drum, dan gitar tiga trek secara kasar menjadi satu file.',
        'Podcast dua orang: rekam masing-masing di trek terpisah, atur balans tiap orang, lalu gabungkan.',
        'Layer efek suara: letakkan beberapa efek suara di posisi berbeda pada timeline.',
        'Menggeser audio: seret trek untuk mengubah waktu masuknya, sejajarkan tepat dengan gambar.',
        'Solo dengan pengiring: tambahkan satu trek pengiring untuk permainanmu sendiri.',
      ],
      why: [
        {
          icon: 'layers',
          title: 'Timeline 8 trek',
          text: 'Hingga 8 trek bisa digeser bebas, masing-masing dengan balans tersendiri — semua lapisan mix terdengar dalam satu file.',
        },
        {
          icon: 'volume',
          title: 'Ekspor mix',
          text: 'Semua trek dicampur menjadi satu file saat ekspor: MP3 atau WAV.',
        },
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
      screenshotsAlt: [
        'Editor audio multi-track: area jatuhkan, tidak ada yang dikirim ke server',
        'Editor audio multi-track: area kerja dengan berkas yang sudah dimuat',
        'Editor audio multi-track: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Mixer kecil, bukan DAW',
          paragraphs: [
            'Setiap berkas adalah satu klip di treknya sendiri. Anda mengatur level, pan, mute, solo, dan titik mulai klip itu. Hingga delapan trek diputar bersamaan dan diekspor menjadi satu berkas.',
            'Halaman ini tidak memuat plugin, dan tidak menyimpan proyek yang bisa dibuka lagi. Maksimal 8 trek.',
          ],
        },
        {
          heading: 'Untuk apa alat ini dipakai',
          paragraphs: [
            'Cocok untuk tumpukan pendek yang biasanya Anda render di program lebih besar:',
          ],
          bullets: [
            'Trek suara di atas musik, dengan suara lebih keras.',
            'Dua take disejajarkan menurut waktu mulai, satu di-solo saat Anda membandingkan.',
            'Citra stereo digeser dengan pan, lalu satu ekspor.',
          ],
        },
        {
          heading: 'Sesi berakhir bersama tab',
          paragraphs: [
            'Tidak ada yang diunggah, dan tidak ada berkas proyek. Jika Anda menutup tab sebelum ekspor, mix-nya hilang.',
            'Berkas yang harus diputar berurutan, bukan bertumpuk, cocok di [penggabung audio](/audio-joiner). Crossfade di sana 0 sampai 5 detik, dengan langkah 0,5. Halaman ini menumpuk trek.',
          ],
        },
      ],
      dropHint: 'Letakkan dua audio atau lebih untuk menumpuknya',
    },
    'split-mp3': {
      cardLine: 'Potong satu file menjadi 2 sampai 16 bagian sama, lalu unduh bersama.',
      name: 'Pisah MP3',
      shortName: 'Pemisah',
      title: 'Pisah MP3 — 2 sampai 16 file sama',
      description: 'Potong satu rekaman jadi 2 sampai 16 file sama dan unduh satu zip. WAV menyimpan sampel di setiap potongan. Setiap MP3 dikode sekali, sampai 320 kbps.',
      h1: 'Pisah MP3 menjadi beberapa file',
      heroAlt: 'Memotong satu rekaman menjadi file yang sama panjang',
      subtitle: 'Bagian sama, dari 2 sampai 16, dalam satu zip.',
      intro: 'Pemisah audio ini memotong satu file menjadi bagian yang sama panjang. Jumlahnya dari 2 sampai 16, dan mulai di 2, yaitu dua bagian. Setiap bagian sama panjang, selisih paling banyak satu sampel. Seret pilihan untuk memotong hanya rentang itu. Tanpa pilihan, seluruh file yang dipotong. Bagian-bagian diunduh sebagai satu zip. Dekode dan potongan tetap di browser Anda.',
      usesHeading: 'Kapan saja pemotongan MP3 berguna',
      uses: [
        'Memecah file yang terlalu panjang: satu MP3 terlalu besar untuk dikirim, pecah jadi beberapa bagian.',
        'Memo suara bertahap: bagi memo panjang menjadi bagian sepanjang sama, simak satu per satu.',
        'Menyesuaikan aplikasi pesan: aplikasi menolak file besar, belah dua saja agar terkirim.',
        'Membagi latihan: potong pelajaran bahasa atau latihan alat musik jadi segmen pendek yang sama panjang.',
        'Arsip terpotong: potong rekaman panjang berdasarkan durasi tetap agar mudah dicari.',
        'Bahan sampel: bagi menjadi beberapa kandidat sama panjang, pilih yang terbaik lalu pangkas.',
      ],
      why: [
        {
          icon: 'scissors',
          title: 'Memotong tepat pada sampel, panjang persis sama',
          text: 'Semua bagian sama panjang, bedanya paling satu sampel; tanpa tumpang tindih tanpa celah. Ada seleksi, hanya bagian itu yang dipotong; tanpa seleksi, seluruh file.',
        },
        {
          icon: 'layers',
          title: 'Sekali ekspor, dikemas jadi ZIP',
          text: 'Jumlah bagian bebas 2–16, diberi nomor urut dan dijadikan satu ZIP. MP3 hingga 320 kbps, WAV mempertahankan sampel asli.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC apa pun. File didekode di perangkat Anda.' },
        { name: 'Tentukan jumlah', text: 'Bagian berjalan dari 2 sampai 16. Baris status menulis jumlah file dan kira-kira berapa lama masing-masing. Seret gelombang jika hanya sebagian file yang harus dipotong.' },
        { name: 'Unduh zip', text: 'Ekspor MP3 atau WAV. Unduhan adalah satu zip dengan nama file, dan di dalamnya ada bagian 1, bagian 2, dan sisanya.' },
        {
          name: 'Ekstrak dan ambil',
          text: 'Di dalam arsip ada file terpisah: Bagian 1, Bagian 2, dan seterusnya. MP3 dikodekan sekali dengan bitrate yang dipilih; WAV mempertahankan sampel aslinya.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. File didekode di browser Anda, dipotong di sana, dan dikemas jadi zip di sana. Setelah halaman termuat, Anda bisa offline dan ekspor tetap jalan. WAV tidak butuh unduhan tambahan. MP3 dikode offline setelah encoder termuat sekali.' },
        { q: 'Di mana potongannya jatuh?', a: 'Di batas sampel. Bagian sama panjang, dan jika jumlah sampel tidak habis dibagi, bagian paling awal lebih panjang satu sampel. Tidak ada yang tumpang-tindih dan tidak ada yang hilang. WAV adalah sampel itu. Setiap MP3 dikode sekali, pada bitrate yang Anda pilih, sampai 320 kbps. Memutar MP3 itu berurutan bisa menunjukkan beberapa milidetik isian codec di sambungan.' },
        { q: 'Apakah terpotong di senyap atau bab?', a: 'Tidak. Potongan adalah waktu yang sama, bukan pencarian jeda, tanda bab, atau lagu baru. Birama yang sunyi tetap terpotong sesuai jam. Jumlah hanya 2 sampai 16. File dengan sampel lebih sedikit daripada jumlah bagian ditolak.' },
        { q: 'Bedanya dengan memotong?', a: 'Potong Audio dan Potong Lagu menyimpan satu rentang, atau menghapus satu rentang, lalu menyimpan satu file. Halaman ini menulis beberapa file dengan panjang sama. Gabung Audio sebaliknya: menaruh file yang berbeda berurutan. Hapus senyap adalah halaman yang mengikuti jeda.' },
        { q: 'Apakah jalan di ponsel?', a: 'Ya. Penggeser bagian, gelombang, dan unduhan bisa disentuh di Chrome, Edge, Firefox, dan Safari sekarang. Di iPhone, Safari menyimpan zip ke app File.' },
      ],
      screenshotsAlt: [
        'Pisah MP3: area jatuhkan, tidak ada yang dikirim ke server',
        'Pisah MP3: area kerja dengan berkas yang sudah dimuat',
        'Pisah MP3: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Potongan sama panjang, pada sampelnya',
          paragraphs: [
            'Bagian berjalan dari 2 sampai 16. Mulai dari 2. Setiap bagian sama panjang, kecuali bagian paling awal bisa satu sampel lebih panjang saat durasinya tidak habis dibagi rata. Bagian berikutnya mulai pada sampel setelah bagian sebelumnya berakhir. Tidak ada tumpang tindih dan tidak ada celah.',
            'Seret pilihan untuk memisahkan hanya rentang itu. Tanpa pilihan, seluruh berkas dipisah. WAV adalah sampel itu. Ekspor MP3 mengenkode setiap bagian sekali, pada bitrate yang Anda pilih, hingga 320 kbps. Memutar MP3 berurutan bisa menunjukkan beberapa milidetik padding codec di sambungan. Sampelnya sendiri tidak bertumpang tindih.',
          ],
        },
        {
          heading: 'Satu berkas, beberapa unduhan',
          paragraphs: [
            'ZIP adalah cara bagian-bagian itu meninggalkan browser:',
          ],
          bullets: [
            'Memo suara panjang dipotong menjadi bagian sama panjang yang bisa Anda kirim satu per satu.',
            'Lagu dipisah menjadi dua bagian saat aplikasi pesan menolak berkas penuh.',
            'Rekaman yang ingin Anda simpan sebagai berkas terpisah, bukan satu klip terpangkas.',
          ],
        },
        {
          heading: 'Bukan pemotong, dan bukan pemindai keheningan',
          paragraphs: [
            'Pemangkas audio dan pemotong MP3 mempertahankan satu rentang, atau menghapus satu rentang, dan menyimpan satu berkas. Halaman ini menulis beberapa berkas sama panjang. Penggabung audio melakukan sebaliknya: menempatkan berkas berbeda berderet.',
            'Alat ini tidak mencari keheningan, penanda bab, atau lagu baru. Birama pelan dipotong di mana pun jam menunjukkan. Jika potongannya harus mengikuti jeda, gunakan penghapus senyap, lalu pangkas sisanya.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio, atau klik untuk memilih',
      exportLabel: 'Unduh bagian',
    },
    'stereo-to-mono': {
      cardLine: 'Rata-ratakan setiap kanal jadi satu, lalu unduh file itu.',
      name: 'Stereo ke mono',
      shortName: 'Ke mono',
      title: 'Stereo ke mono — satu kanal rata-rata',
      description: 'Rata-ratakan kanal jadi satu dan unduh. WAV menyimpan sampel itu. MP3 mengode file mono itu sekali, sampai 320 kbps.',
      h1: 'Stereo ke mono',
      heroAlt: 'Merata-ratakan stereo menjadi satu kanal',
      subtitle: 'Satu kanal: rata-rata setiap kanal dalam file.',
      intro: 'Halaman ini menulis satu kanal. Setiap sampel adalah rata-rata kanal dalam file, jadi kiri dan kanan bertemu di tengah. File yang sudah satu kanal disalin. Dekode dan rata-rata tetap di browser Anda.',
      usesHeading: 'Kapan saja konversi stereo ke mono berguna',
      uses: [
        'Kompatibel satu perangkat: saat perangkat berpemutar tunggal memutar kiri-kanan berbeda, gabungkan jadi mono.',
        'Aplikasi menolak: untuk pemutar atau formulir yang hanya menerima mono, konversikan satu versi untuknya.',
        'Menyelaraskan vokal: saat kanal kiri-kanan vokal tidak persis sama, ratakan menjadi satu.',
        'Persiapan transkripsi: alat transkripsi lebih stabil dengan audio mono.',
        'Trek video: menyeragamkan audio proyek video mono.',
        'Konversi massal: banyak file stereo dikonversi ke mono sekaligus.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Dirata-rata per sampel',
          text: 'Kanal kiri dan kanan dirata-rata sampel demi sampel — bukan hanya mengambil satu sisi, informasi kedua sisi tetap ada.',
        },
        {
          icon: 'layers',
          title: 'Konversi massal',
          text: 'Banyak file memakai pengaturan yang sama, dikonversi satu per satu lalu dikemas jadi ZIP.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Didekode di perangkat Anda.' },
        { name: 'Ekspor rata-rata', text: 'Tidak ada pengatur lebar. Ekspor menulis satu kanal. Putar dulu jika Anda ingin mendengar rata-ratanya.' },
        { name: 'Buka file', text: 'Pemutar yang menampilkan jumlah kanal seharusnya menyebut satu. WAV adalah sampel yang sudah dirata-rata. MP3 mengode mereka sekali, sampai 320 kbps.' },
        {
          name: 'Pemrosesan massal',
          text: 'Beberapa file diproses satu per satu dan dikemas dalam ZIP.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. File didekode di browser Anda dan dirata-rata di sana. Setelah halaman termuat, Anda bisa offline dan ekspor tetap jalan. WAV tidak butuh unduhan tambahan. MP3 dikode offline setelah encoder termuat sekali.' },
        { q: 'Bagaimana mono dibuat?', a: 'Setiap sampel adalah jumlah kanal pada saat itu, dibagi jumlah kanal. Dua kanal berarti (kiri + kanan) / 2. File yang sudah satu kanal disalin. WAV menyimpan sampel itu. MP3 mengode kanal itu sekali, pada bitrate yang Anda pilih, sampai 320 kbps.' },
        { q: 'Bisakah mono jadi stereo?', a: 'Tidak. Halaman ini tidak mengarang kanal kedua. Menyalin satu kanal ke kiri dan kanan tetap satu sinyal, dan itu pekerjaan lain. File yang Anda unduh di sini punya satu kanal.' },
        { q: 'Bedanya dengan memotong?', a: 'Potong Audio menyimpan rentang waktu dan membiarkan jumlah kanal. Konversi MP3 ke WAV mengganti wadah dan juga membiarkan kanal. Halaman ini mengubah jumlah kanal dan menjaga durasi.' },
        { q: 'Apakah jalan di ponsel?', a: 'Ya. Letakkan, putar, dan unduh bisa disentuh di Chrome, Edge, Firefox, dan Safari sekarang.' },
      ],
      screenshotsAlt: [
        'Stereo ke mono: area jatuhkan, tidak ada yang dikirim ke server',
        'Stereo ke mono: area kerja dengan berkas yang sudah dimuat',
        'Stereo ke mono: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Rata-rata, sampel demi sampel',
          paragraphs: [
            'Setiap sampel keluaran adalah jumlah kanal pada momen itu, dibagi jumlah kanal berkas. Dua kanal berarti (kiri + kanan) / 2. Satu kanal disalin ke buffer baru. Durasinya tidak berubah.',
            'Halaman ini tidak membangun citra stereo, kontrol lebar, atau berkas kedua. Ekspornya satu kanal. WAV adalah sampel itu. MP3 mengenkode berkas mono itu sekali, pada bitrate yang Anda pilih, hingga 320 kbps.',
          ],
        },
        {
          heading: 'Untuk apa satu kanal itu',
          paragraphs: [
            'Rata-rata adalah seluruh pekerjaannya:',
          ],
          bullets: [
            'Memo suara yang harus diputar sama di satu speaker.',
            'Berkas yang ditolak aplikasi khusus mono karena masih punya dua kanal.',
            'Mix yang ingin Anda letakkan di tengah, bukan tersebar antara kiri dan kanan.',
          ],
        },
        {
          heading: 'Bukan pemangkas, dan bukan stereo palsu',
          paragraphs: [
            'Pemangkas audio mempertahankan satu rentang dan membiarkan kanalnya apa adanya. MP3 ke WAV mengubah format dan juga membiarkan kanalnya. Halaman ini mempertahankan durasi dan menulis satu kanal.',
            'Alat ini tidak mengubah satu kanal menjadi dua. Menduplikasi kanal agar pemutar menampilkan stereo tetap membawa satu sinyal. Bukan itu yang dilakukan ekspor ini.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio, atau klik untuk memilih',
      exportLabel: 'Unduh mono',
    },
    bitcrusher: {
      cardLine: 'Kuantisasi ke 1–16 bit dan tahan tiap anak tangga sampai 32 sampel.',
      name: 'Bitcrusher',
      shortName: 'Crush',
      title: 'Bitcrusher online — 1 sampai 16 bit',
      description: 'Kuantisasi dari 16 bit ke 1, tahan tiap anak tangga sampai 32 sampel. WAV menyimpan sampel hancur. MP3 mengode sekali, sampai 320 kbps.',
      h1: 'Bitcrusher online',
      heroAlt: 'Mengubah gelombang halus menjadi anak tangga',
      subtitle: 'Bit dari 1 sampai 16, dan tahan dari 1 sampai 32 sampel.',
      intro: 'Bitcrusher online ini mengurangi berapa tingkat yang bisa diambil tiap sampel, lalu menahan tingkat itu selama beberapa sampel. Stereo tetap stereo: tiap kanal dihancurkan sendiri. Seret pilihan untuk menghancurkan rentang itu saja. Dekode dan penghancuran tetap di browser Anda.',
      usesHeading: 'Kapan saja Bitcrusher berguna',
      uses: [
        'Vokal bergaya konsol lawas: turunkan vokal ke kedalaman bit tertentu, terdengar seperti mesin 8-bit.',
        'Grain pada drum loop: loop drum dengan undakan yang terdengar jelas.',
        'Elektronik retro: kuantisasi garis synthesizer, rasa elektronik lawas.',
        'Desain efek suara: pemrosesan presisi rendah untuk efek UI gim.',
        'Ambiens sci-fi: bit ekstrem memberi kesan mesin pada vokal atau ambience.',
        'Tekstur lo-fi: kuantisasi ringan menambah grain lo-fi ke seluruh trek.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Dua tombol menentukan warna suara',
          text: 'Kedalaman bit (1–16) menentukan besar undakan, hold (maks 32 sampel) menentukan kepadatan grain — begitulah suara konsol lawas tercipta.',
        },
        {
          icon: 'lock-simple',
          title: 'Pemrosesan lokal',
          text: 'Kuantisasi selesai di peramban, WAV mempertahankan sampel yang telah di-crush.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Didekode di perangkat Anda.' },
        { name: 'Atur bit dan tahan', text: 'Bit berjalan dari 1 sampai 16 dan mulai di 8. Tahan berjalan dari 1 sampai 32 dan mulai di 2. Putar untuk mendengarnya. Seret gelombang jika hanya satu rentang yang dihancurkan.' },
        { name: 'Ekspor', text: 'WAV menyimpan sampel berundak. MP3 mengode mereka sekali, sampai 320 kbps, dan bisa melunakkan anak tangga.' },
        {
          name: 'Ambil file kamu',
          text: 'Nama file mendapat akhiran -edited.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. File didekode di browser Anda dan dihancurkan di sana. Setelah halaman termuat, Anda bisa offline dan ekspor tetap jalan. WAV tidak butuh unduhan tambahan. MP3 dikode offline setelah encoder termuat sekali.' },
        { q: 'Apa yang dilakukan bit dan tahan?', a: 'Bit menentukan jumlah tingkat. Pada 16 bit, sampel skala penuh tetap di tempat jika tahan adalah 1. Pada 1 bit, sampel menjadi naik, turun, atau senyap. Tahan mengulang tingkat saat ini selama sebanyak sampel itu: tahan 4 menjaga satu nilai selama empat sampel, lalu mengambil langkah berikutnya. Tiap kanal dihancurkan sendiri, jadi file stereo tetap stereo.' },
        { q: 'Apakah MP3 menjaga anak tangga?', a: 'WAV adalah sampel yang dihancurkan. MP3 mengode mereka sekali, pada bitrate yang Anda pilih, sampai 320 kbps. Encoder bisa membulatkan anak tangga yang tajam. Jika anak tangga harus tetap, ekspor WAV.' },
        { q: 'Bedanya dengan distorsi?', a: 'Distorsi audio membengkokkan gelombang lewat kurva yang halus. Halaman ini mengganti sampel dengan daftar tingkat yang pendek, lalu menahannya. Gema menambah salinan di belakang. Filter low-pass menurunkan nada tinggi. Tidak satu pun dari itu pengatur kedalaman bit.' },
        { q: 'Apakah jalan di ponsel?', a: 'Ya. Penggeser bit, penggeser tahan, gelombang, dan unduhan bisa disentuh di Chrome, Edge, Firefox, dan Safari sekarang.' },
      ],
      screenshotsAlt: [
        'Bitcrusher: area jatuhkan, tidak ada yang dikirim ke server',
        'Bitcrusher: area kerja dengan berkas yang sudah dimuat',
        'Bitcrusher: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Level, lalu tahan',
          paragraphs: [
            'Bit berjalan dari 1 sampai 16. Mulai dari 8. Sampel dibulatkan ke level terdekat dalam rentang itu. Pada 1 bit levelnya hanya atas, bawah, atau senyap. Pada 16 bit sampel skala penuh tetap di skala penuh saat tahan 1.',
            'Tahan berjalan dari 1 sampai 32 dan mulai dari 2. Level saat ini diulang sebanyak sampel itu, lalu sampel berikutnya menetapkan level baru. Kiri dan kanan di-crush terpisah. Durasinya tidak berubah.',
          ],
        },
        {
          heading: 'Apa yang perlu didengarkan',
          paragraphs: [
            'Kedua angka melakukan pekerjaan berbeda:',
          ],
          bullets: [
            'Bit berjalan dari 1 sampai 16 dan mulai dari 8.',
            'Tahan berjalan dari 1 sampai 32 sampel dan mulai dari 2. Tahan 1 menyimpan setiap sampel.',
            'Seret pilihan saat hanya satu frasa yang harus di-crush. Tanpa pilihan, seluruh berkas di-crush.',
          ],
        },
        {
          heading: 'Bukan distorter',
          paragraphs: [
            'Distorsi audio adalah kurva halus, dari kliping ringan sampai kliping keras. Halaman ini adalah langkah dan tahanan. Echo menambahkan salinan yang lebih lambat. Filter low-pass hanya menurunkan nada tinggi.',
            'WAV menyimpan sampel yang di-crush. MP3 mengenkodenya sekali, hingga 320 kbps, dan bisa melembutkan sudutnya. Jika langkahnya harus bertahan, gunakan WAV.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio, atau klik untuk memilih',
      exportLabel: 'Ekspor hancur',
    },
    '432-hz-converter': {
      cardLine: 'Turunkan nada sekitar 0.32 seminada dan jaga durasinya.',
      name: 'Konverter 432 Hz',
      shortName: '432 Hz',
      title: 'Konverter 432 Hz — durasi sama, turun 0.32',
      description: 'Turunkan nada sebesar 12*log2(432/440), sekitar 0.32 seminada, dan jaga durasinya. WAV adalah pergeseran itu. MP3 mengode sekali, sampai 320 kbps.',
      h1: 'Konverter 432 Hz',
      heroAlt: 'Menurunkan file sekitar 0.32 seminada',
      subtitle: 'Seluruh file turun sekitar 0.32 seminada. Durasi tetap.',
      intro: 'Konverter ini menggeser seluruh file sebesar 12 kali log2 dari 432 per 440, sekitar 0.32 seminada ke bawah. Nada 440 Hz mendekati 432 Hz. Durasi tidak berubah, dan nada tidak disetem satu per satu. Dekode dan pergeseran tetap di browser Anda.',
      usesHeading: 'Kapan saja konversi 432 Hz berguna',
      uses: [
        'Preferensi laras: pindahkan lagu berlaras 440 Hz ke 432 Hz yang Anda sukai.',
        'Loop tetap tepat waktu: saat panjang loop harus tetap, hanya penggeseran pitch yang tak mengubah durasi.',
        'Seluruh album: menyatukan beberapa lagu ke 432 Hz.',
        'Mendengar untuk membandingkan: simpan satu versi 440 dan satu versi 432, bandingkan sendiri.',
        'Audio meditasi: menyatukan bahan meditasi atau relaksasi ke 432 Hz.',
        'Cadangan alat musik: versi asli disimpan, versi 432 diekspor terpisah.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Hanya pitch yang bergeser, durasi tetap',
          text: 'Penggeseran presisi sekitar 0,32 setengah nada menurut 12·log₂(432/440): panjang, tempo, dan irama sama sekali tidak berubah.',
        },
        {
          icon: 'lock-simple',
          title: 'Pemrosesan lokal',
          text: 'Penggeseran selesai di peramban, audio tidak diunggah.',
        },
      ],
      howTo: [
        { name: 'Letakkan audio', text: 'MP3, WAV, M4A, OGG, atau FLAC. Didekode di perangkat Anda.' },
        { name: 'Dengar pergeseran', text: 'Pratinjau adalah file yang sudah digeser. Halaman ini tidak punya penggeser seminada, karena seminada yang dibulatkan menjadi nol dan file tidak bergerak.' },
        { name: 'Ekspor', text: 'Durasi sama dengan file yang Anda letakkan. WAV adalah sampel yang digeser. MP3 mengode mereka sekali, sampai 320 kbps.' },
        {
          name: 'Ambil file-mu',
          text: 'Nama file mendapat akhiran -edited.',
        },

      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. File didekode di browser Anda dan digeser di sana. Setelah halaman termuat, Anda bisa offline dan ekspor tetap jalan. WAV tidak butuh unduhan tambahan. MP3 dikode offline setelah encoder termuat sekali.' },
        { q: 'Seberapa jauh ia bergerak?', a: 'Pergeseran adalah 12 kali log2 dari 432 per 440, sekitar 0.3177 seminada ke bawah, dan halaman memakai pecahan itu. Ia tidak membulatkan ke seminada bulat terdekat, yang akan menjadi nol dan membuat file tidak berubah. Nada 440 Hz mendekati 432 Hz. Sisa file bergerak dengan jumlah yang sama. WAV adalah sampel yang digeser. MP3 mengode mereka sekali, pada bitrate yang Anda pilih, sampai 320 kbps.' },
        { q: 'Apakah durasi berubah?', a: 'Tidak. Ini pergeseran nada, bukan perubahan kecepatan. Pengubah tempo mengubah durasi. Ubah Kecepatan Audio juga mengubah durasi, kecuali Anda menjaga nadanya. Di sini durasi tetap dan nada turun.' },
        { q: 'Bisakah menyetem satu nada?', a: 'Tidak. Seluruh file bergerak bersama. Sebuah akor tidak ditarik nadanya ke 432 Hz satu per satu. File yang lebih pendek dari 32 sampel dikembalikan apa adanya, karena penggeser butuh audio sebanyak itu. Halaman ini tidak mengklaim hasilnya lebih sehat, lebih tenang, atau lebih baik.' },
        { q: 'Apakah jalan di ponsel?', a: 'Ya. Letakkan, putar, dan unduh bisa disentuh di Chrome, Edge, Firefox, dan Safari sekarang.' },
      ],
      screenshotsAlt: [
        'Konverter 432 Hz: area jatuhkan, tidak ada yang dikirim ke server',
        'Konverter 432 Hz: area kerja dengan berkas yang sudah dimuat',
        'Konverter 432 Hz: setelah ekspor, baris status menampilkan nama berkas yang diunduh',
      ],
      sections: [
        {
          heading: 'Satu pergeseran untuk seluruh berkas',
          paragraphs: [
            'Jumlahnya 12 kali log2 dari 432 per 440, sekitar 0,32 seminada turun. Halaman ini meneruskan fraksi itu. Membulatkannya ke seminada utuh akan menjadikannya nol, dan berkasnya tidak bergerak.',
            'Nada 440 Hz bergerak ke arah 432 Hz. Setiap nada lain bergerak dengan fraksi yang sama. Durasinya tetap. WAV adalah sampel yang digeser. MP3 mengenkodenya sekali, pada bitrate yang Anda pilih, hingga 320 kbps.',
          ],
        },
        {
          heading: 'Apa yang tetap di tempatnya',
          paragraphs: [
            'Pergeserannya adalah seluruh pekerjaannya:',
          ],
          bullets: [
            'Durasinya cocok dengan berkas yang Anda letakkan.',
            'Akor bergerak bersama. Not tidak ditarik ke 432 Hz satu per satu.',
            'Berkas lebih pendek dari 32 sampel dikembalikan tanpa perubahan.',
          ],
        },
        {
          heading: 'Bukan perubahan tempo',
          paragraphs: [
            'Pengubah nada di situs ini bergerak per seminada utuh. Halaman ini memakai fraksinya, sekitar 0,32 turun, jadi hasilnya tidak sama dengan membiarkan kontrol itu di nol.',
            'Pengubah tempo dan perubahan kecepatan audio mengubah durasi. Halaman ini tidak. Halaman ini juga tidak mengatakan hasilnya lebih sehat atau lebih baik. Halaman ini hanya menggeser nada.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio, atau klik untuk memilih',
      exportLabel: 'Unduh 432 Hz',
    },
    'audio-to-midi': {
      cardLine: 'Ubah melodi, suara, atau piano solo menjadi MIDI. Mix penuh keluar salah.',
      name: 'Audio ke MIDI',
      shortName: 'Audio ke MIDI',
      title: 'Audio ke MIDI — satu instrumen, 3 menit',
      description: 'Ubah melodi, suara, atau piano solo menjadi MIDI. Mix penuh, drum, atau akor padat keluar salah. Paling lama 3 menit. Tidak ada yang diunggah.',
      h1: 'Audio ke MIDI — not dari satu instrumen',
      heroAlt: 'Ubah melodi atau piano solo menjadi not MIDI',
      subtitle: 'File .mid di browser. Satu instrumen, paling lama 3 menit.',
      intro: 'Letakkan melodi, senandung, atau piano solo. Halaman ini menulis MIDI yang bisa dibuka di GarageBand, Ableton, atau Logic: tinggi nada, awal, durasi, dan velocity tiap not. Basic Pitch dari Spotify berjalan di tab ini. Audio tidak diunggah. Modelnya di bawah 1 MB dan diunduh sekali dari situs ini. Mix penuh, drum, atau akor padat keluar salah. Lebih dari 3 menit harus dipotong dulu.',
      usesHeading: 'Kapan saja konversi audio ke MIDI berguna',
      uses: [
        'Menyanyi jadi notasi: ubah melodi yang dihummingkan jadi MIDI, edit not di DAW tanpa merekam ulang.',
        'Notasi piano: piano solo menjadi not, tanpa mengetik partitur manual.',
        'Mengganti timbre: MIDI bisa memakai sumber suara apa pun, piano jadi strings.',
        'Pembanding latihan: ubah permainan Anda sendiri jadi not untuk diperiksa.',
        'Awal aransemen: demo satu trek dikonversi ke MIDI lalu aransemen dikembangkan.',
        'Arsip melodi: ide melodi dikonversi ke MIDI dan disimpan di pustaka bahan.',
      ],
      why: [
        {
          icon: 'note',
          title: 'Not yang bisa diedit',
          text: 'Yang dihasilkan not MIDI, bukan audio: pitch dan durasi bebas diedit di DAW.',
        },
        {
          icon: 'file',
          title: 'Paling akurat untuk satu alat musik',
          text: 'Melodi tunggal atau satu alat musik memberi hasil terbaik; campuran penuh bukan wilayahnya — dijelaskan jujur di halamannya.',
        },
      ],
      howTo: [
        { name: 'Letakkan satu instrumen', text: 'Tambahkan MP3, WAV, M4A, atau video dengan jalur suara. Browser mendekode. Tidak ada yang diunggah. Lebih dari 3 menit tetap terblokir sampai Anda memotongnya.' },
        { name: 'Ubah jadi not', text: 'Jalankan pertama mengunduh model, di bawah 1 MB, dari situs ini. Halaman lalu menampilkan not dan jumlahnya.' },
        { name: 'Unduh MIDI', text: 'Simpan file .mid. Satu trek note-on dan note-off. Halaman ini tidak memutar audionya.' },
      ],
      faqs: [
        { q: 'Apakah audio saya diunggah?', a: 'Tidak. Browser mendekode file dan menjalankan Basic Pitch di tab. Satu-satunya permintaan jaringan adalah model, di bawah 1 MB, dari situs ini, pertama kali. Setelah itu browser bisa memakai salinannya lagi. Audionya sendiri tidak dikirim ke mana pun.' },
        { q: 'Apa isi file MIDI?', a: 'Satu trek, MIDI tipe 0. Tiap not punya tinggi 21 sampai 108, awal, durasi, dan velocity. Tanda tempo 120 supaya waktu sejajar dengan detik rekaman. Angka 120 itu bukan BPM lagu. Trek mulai di piano General MIDI supaya DAW punya suara. Ini bukan rekaman instrumen aslinya. WAV dan MP3 tidak ditawarkan di sini.' },
        { q: 'Apa yang akan salah?', a: 'Mix penuh, drum, dan akor padat. Basic Pitch dibuat untuk satu instrumen setiap kali, dan rekaman yang ramai jadi not ekstra atau tidak ada sama sekali. File tidak punya kurva pitch bend, jadi gelincir nada jadi not yang rata. Tidak ada pemutaran, partitur, atau pemisahan stem. Lebih dari 3 menit ditolak. Potong di pemotong audio, lalu kembali.' },
        { q: 'Apa bedanya dengan kunci dan BPM?', a: 'Kunci dan BPM membaca dua angka dan tidak menulis file. Halaman ini menulis not. Ia tidak memberi kunci atau BPM. Baca itu di kunci dan BPM. Memindahkan nada audio asli, tanpa membuat not, adalah pengubah nada.' },
        { q: 'Apakah jalan di ponsel?', a: 'Ya, di Chrome, Edge, Firefox, dan Safari sekarang. Batasnya 3 menit karena model menyimpan not di memori. Ponsel yang memorinya tipis bisa gagal mengonversi. File tidak berubah, dan Anda bisa mencoba klip yang lebih pendek. Unduhannya file .mid.' },
        { q: 'Saya mencari ini di Logic Pro. Apakah ini yang itu?', a: 'Bukan. Logic punya perintah audio-ke-MIDI sendiri di trek. Halaman ini untuk browser, saat Logic tidak terbuka. File .mid yang ditulis bisa diseret ke Logic kemudian. Ia tidak melepas perangkat MIDI di macOS, dan tidak mengedit proyek Logic.' },
      ],
      sections: [
        {
          heading: 'Satu instrumen, di dalam tab',
          paragraphs: [
            'Basic Pitch mendengarkan satu kanal pada 22050 Hz. Stereo dicampur ke mono sebelum model berjalan. Bobotnya di bawah 1 MB dan datang dari situs ini sekali.',
            'Alat ini ditujukan untuk melodi, vokal, atau piano solo. Mix penuh, drum, atau tumpukan akor tebal di luar yang bisa ditangani model ini.',
          ],
        },
        {
          heading: 'Apa isi berkasnya sebenarnya',
          paragraphs: [
            'Unduhannya adalah berkas MIDI standar, bukan audio:',
          ],
          bullets: [
            'Nada, awal, durasi, dan velocity. Tanpa kurva pitch-bend.',
            'Penanda tempo 120, jadi waktunya cocok dengan rekaman dalam detik. Itu bukan BPM lagunya.',
            'Satu trek, mulai pada piano General MIDI, agar DAW punya suara untuk dimainkan.',
          ],
        },
        {
          heading: 'Apa yang tidak dilakukan halaman ini',
          paragraphs: [
            'Halaman ini tidak memutar MIDI kembali, mencetak partitur, atau memisahkan lagu menjadi stem. Halaman ini tidak menamai akor.',
            'Lebih dari 3 menit ditolak. Pangkas dulu. Konversi bawaan Logic tetap di Logic. Halaman ini tidak membuka proyek Logic.',
          ],
        },
      ],
      dropHint: 'Letakkan file audio, atau klik untuk memilih',
      exportLabel: 'Ubah ke MIDI',
    },
    soundboard: {
      cardLine: "Papan suara milik Anda sendiri: rekam atau unggah klip, lalu picu langsung.",
      name: "Soundboard",
      shortName: "Soundboard",
      title: "Soundboard — sebelas suara, lalu suara Anda",
      description: "Ketuk atau tekan tombol dan beberapa klip berbunyi bersamaan. Sebelas suara sudah disintesis di halaman; potong milik Anda dan simpan papan dalam JSON.",
      h1: "Soundboard, dengan sebelas suara yang sudah ada",
      subtitle: "Ketuk kotak atau pakai pintasan untuk memutar langsung. Beberapa suara bisa bunyi bersamaan. Papan hanya hidup di tab ini.",
      intro: "Rekam sepenggal dari mikrofon atau unggah file audio, potong bagian yang Anda mau, dan bagian itu jadi satu tombol di papan. Ketuk tombol atau tekan tombol angka dan huruf untuk memicukan suara secara langsung——beberapa sekaligus, karena justru itu gunanya soundboard. Sebelas suara bawaan disintesis di halaman, jadi papan sudah bisa dipakai sebelum Anda menambahkan apa pun. Prasetel memuat set awal untuk streaming, podcast, atau kelas dalam satu klik. Tidak ada yang diunggah: decoding, pemotongan, dan pemutaran selesai di tab ini, dan papan dibawa lewat file JSON yang Anda ekspor dan impor sendiri.",
      usesHeading: 'Kapan saja papan suara berguna',
      uses: [
        'Seru-seruan siaran langsung: picu meme, stinger, dan tepuk tangan secara live, beberapa suara dibunyikan bertumpuk.',
        'Interaksi kelas: alat jawab cepat dan bunyi jawaban benar, kotak besar mudah ditekan di layar sentuh.',
        'Latihan teater: efek panggung dipicu sekali tekan saat pertunjukan.',
        'Menjadi juru sandi permainan papan: papan suara untuk permainan meja dan pesta.',
        'Pasca produksi video: kumpulkan efek yang sering dipakai dalam satu papan, tekan begitu perlu.',
        'Pertunjukan improvisasi: suara buatan sendiri diolah jadi bahan pementasan.',
      ],
      why: [
        {
          icon: 'play',
          title: 'Langsung dengan sebelas suara sintetis',
          text: 'Sebelas suara bawaan sudah tersedia, seret ke dalam kotak dan langsung bisa dipakai, tanpa mencari bahan dulu.',
        },
        {
          icon: 'file',
          title: 'Papan bisa disimpan',
          text: 'Setiap kotak bisa dipotong dan diatur suaranya, dan seluruh papan disimpan sebagai file untuk dipakai kembali kapan saja.',
        },
      ],
      howTo: [
        { name: "Mulai dari prasetel atau satu suara", text: "Papan terisi sebelas suara sintesis. Prasetel di atas kisi menukar papan dengan set awal streaming, podcast, atau kelas. Unggah audio dan Rekam menambahkan suara Anda." },
        { name: "Potong setiap klip", text: "Ikon pensil pada kotak membuka editor: geser dua pegangan untuk menyimpan bagian yang diinginkan, uji dengan putar ulang, lalu Terapkan potongan. Ganti nama dan warna di tempat yang sama." },
        { name: "Mainkan dan simpan papan", text: "Ketuk kotak atau tekan tombol yang tertera——1 sampai 0, lalu Q W E R T Y U I O P. Esc menghentikan semuanya. Ekspor papan menyimpan semua suara dalam satu file JSON; Impor papan membacanya kembali, termasuk papan dari soundtools.io." },
      ],
      faqs: [
        { q: "Apakah ada yang diunggah?", a: "Tidak. File didekode dengan Web Audio API di tab ini, rekaman tetap di perangkat Anda, dan pemutaran berjalan lokal. Ekspor papan menulis file JSON langsung ke disk Anda. Setelah halaman termuat, semuanya tetap jalan tanpa internet." },
        { q: "Bagaimana kualitas suaranya?", a: "Klip mempertahankan sample rate saat didekode. Ekspor WAV pada satu suara menulis PCM 16-bit pada rate itu. File papan menyimpan setiap suara sebagai teks WAV di dalam JSON, jadi tidak ada enkode ulang." },
        { q: "Apakah ini masuk ke Discord atau panggilan game?", a: "Tidak. Discord, Zoom, dan game mendengar mikrofon Anda, bukan halaman ini. Aplikasi seperti Voicemod dan Resanance memasang mikrofon virtual di Windows supaya orang lain mendengar papan. Halaman ini tidak bisa melakukan itu. Suara keluar dari speaker atau audio desktop, dan OBS bisa merekamnya. Di ponsel, papan berbunyi di perangkat itu." },
        { q: "Apa bedanya dengan perekam suara?", a: "Perekam suara mengambil satu klip dan menyerahkannya ke editor untuk dipotong dan diekspor. Halaman ini menampung banyak klip dan memutarnya langsung dari tombol. Ini untuk memicu, bukan menyunting satu file." },
        { q: "Apakah jalan di ponsel?", a: "Ya. Mengetuk kotak, merekam, dan memotong berjalan di Chrome, Edge, Firefox, dan Safari terkini, termasuk iPhone dan Android. Pintasan butuh keyboard, jadi untuk komputer. Di iPhone, pemutaran mengikuti sakelar senyap." },
        { q: "Bagaimana saya menyimpan papan?", a: "Tidak ada yang disimpan di browser. Ekspor papan sebelum Anda menutup tab, atau papan hilang. Impor papan mengembalikan JSON di perangkat ini atau perangkat lain. Tombol yang sama membaca papan dari soundtools.io: setiap tombol yang berisi audio ikut, dan warna gradien dipetakan ke warna terdekat di papan ini." },
        { q: "File apa, dan berapa lama?", a: "Unggah menerima MP3, WAV, M4A, OGG, FLAC, dan AAC, yang bisa didekode browser. File lebih dari 60 detik dilewati. Potong dulu di pemotong audio. Panjang yang berguna di papan adalah setengah detik sampai lima detik. Jumlah kotak tidak tetap. Batasnya adalah memori di tab." },
        { q: "Bisakah saya mengubah nada atau menambah gema?", a: "Tidak di halaman ini. Ekspor WAV dari kotak, lalu buka file itu di pengubah nada (nada berubah, durasi tetap) atau di halaman slowed dan reverb. Bawa hasilnya kembali dengan Unggah audio atau Ganti audio." },
      ],
      sections: [
        {
          heading: 'Cara papan itu bekerja',
          paragraphs: [
            'Soundboard adalah satu pekerjaan: suara pendek yang tepat, sekarang, tanpa mencari di folder. Setiap kotak adalah satu klip. Ketuk dan langsung diputar. Ketuk yang lain saat masih berbunyi dan keduanya diputar. Tumpang tindih itulah intinya.',
            'Tombol mengikuti urutan papan: 1 sampai 9, lalu 0, lalu baris huruf atas. Esc menghentikan semuanya. Preset di atas grid mengganti seluruh set dengan starter untuk streaming, podcast, kelas, atau papan kosong.',
          ],
        },
        {
          heading: 'Buat klip Anda sendiri',
          paragraphs: [
            'Unggah menerima MP3, WAV, M4A, OGG, FLAC, atau AAC dan mendekodenya di browser. Rekam mengambil mikrofon. Pensil lalu membuka editor pangkas: seret kedua pegangan, ulangi pilihan, dan terapkan.',
            'Pendek adalah intinya. Setengah detik sampai lima detik cukup untuk punchline, buzzer, atau boom. Ganti audio menukar suara di bawah kotak dan mempertahankan nama, warna, dan tombolnya. Berkas lebih panjang dari 60 detik dilewati saat unggah.',
          ],
          bullets: [
            'Ekspor WAV pada satu suara menulis PCM 16-bit pada sample rate klip itu.',
            'Warna pada kotak ada agar Anda bisa menemukan tombolnya saat streaming.',
            'Sebelas suara bawaan disintesis di halaman. Tanpa unduhan, tanpa pustaka, tanpa rekaman orang lain.',
          ],
        },
        {
          heading: 'Apa yang tidak dilakukannya',
          paragraphs: [
            'Alat ini tidak memasukkan suara ke dalam panggilan. Discord, game, dan voice chat mendengar mikrofon. Menaruh papan di jalur itu memerlukan aplikasi desktop dengan perangkat audio virtual, seperti Voicemod atau Resanance di Windows. Untuk stream, jalur jujurnya adalah audio desktop: suara keluar dari mesin, dan OBS menangkapnya.',
            'Alat ini tidak mengingat papan antar kunjungan. Ekspor papan sebelum menutup tab, lalu impor lain kali, termasuk berkas papan dari soundtools.io. Alat ini tidak mencari pustaka meme. Suara bawaan adalah efek generik yang disintesis di sini. Sisanya adalah berkas yang Anda bawa.',
          ],
        },
      ],
      dropHint: "Tanpa file——ketuk sebuah kotak atau tambahkan milik Anda",
    },
    "music-visualizer": {
      cardLine: "Ubah lagu menjadi video spektrum bergerak, tanpa unggah.",
      name: "Visualizer musik",
      shortName: "Visualizer",
      title: "Visualizer musik — lagu jadi video spektrum",
      description: "Ubah lagu menjadi video spektrum bergerak: batang, cincin, atau osiloskop hingga 1080p, direkam langsung di browser. Tanpa unggah.",
      h1: "Visualizer musik — ubah lagu menjadi video spektrum",
      subtitle: "Putar lagu, lihat spektrumnya bergerak, dan rekam sebagai video——digambar dan direkam di perangkat Anda.",
      intro: "Halaman ini mengubah lagu menjadi jenis video latar yang dipakai YouTube, Shorts, dan Reels: spektrum musik bergerak real-time, direkam langsung dari kanvas. Letakkan file audio, pilih tampilan dan ukuran, tekan rekam, dan saat lagu selesai videonya masuk ke unduhan Anda. Semuanya jalan di browser——audio didekode lokal dan tidak pernah diunggah.",
      usesHeading: 'Kapan saja visualisasi musik berguna',
      uses: [
        'Rilis lagu dengan video: melengkapi peluncuran lagu baru dengan video spektrum bergerak, tanpa membuka aplikasi penyuntingan.',
        'Vertikal media sosial: 9:16 untuk Shorts dan TikTok, persegi untuk feed.',
        'Potongan podcast: gambar latar untuk klip dan demo.',
        'Pembuka siaran langsung: merekam latar spektrum untuk pembukaan.',
        'Latar pertunjukan: spektrum waktu nyata di layar besar panggung.',
        'Hasil tanpa watermark: hingga 1080p dan tanpa watermark, videonya adalah file Anda.',
      ],
      why: [
        {
          icon: 'film',
          title: 'Empat gaya, empat tampilan',
          text: 'Batang spektrum, batang cermin, cincin, osiloskop — empat gaya, warna tema dan dua warna masih bisa diubah lagi.',
        },
        {
          icon: 'lock-simple',
          title: 'Rekam lokal tanpa watermark',
          text: 'Peramban merekam kanvas dan suara langsung: tanpa render server, tanpa watermark, video langsung masuk unduhan begitu lagu selesai.',
        },
      ],
      howTo: [
        { name: "Letakkan lagu", text: "Letakkan file audio di kotak atau klik untuk mencari. MP3, WAV, M4A, OGG, FLAC——semua yang bisa browser dekode." },
        { name: "Pilih tampilan", text: "Pilih gaya——batang spektrum, batang cermin, cincin, atau osiloskop——dan tema. Kedua warna tetap bisa diubah setelah tema dipasang." },
        { name: "Pilih ukuran", text: "Pilih ukuran video: 16:9 untuk YouTube, 9:16 menegak untuk Shorts dan TikTok, persegi untuk feed, atau ukuran sendiri." },
        { name: "Rekam video", text: "Tekan Rekam video. Lagu diputar sekali sementara browser merekam kanvas, dan filenya terunduh saat lagu selesai." },
      ],
      faqs: [
        { q: "Apakah lagu saya diunggah?", a: "Tidak. File didekode dengan Web Audio API di tab ini, animasinya digambar pada kanvas di tab ini, dan perekam bawaan browser merekam kanvas itu beserta audionya. Video jadinya ditulis langsung ke disk Anda." },
        { q: "Format dan kualitas videonya apa?", a: "Chrome, Edge, dan Firefox merekam WebM: video VP9 atau VP8 dengan audio Opus 192 kbps, pada ukuran pilihan Anda hingga 1080p, 30 fps, sekitar 8 Mbps video. Beberapa versi Chrome menawarkan MP4——browser mengambil kontainer pertama yang bisa direkam, dan ekstensi filenya mengikuti." },
        { q: "Lagu 3 menit benar-benar butuh 3 menit?", a: "Iya. Video direkam selama lagu diputar sekali, real-time. Itu pertukaran jujur dari merekam di perangkat Anda tanpa server: tanpa menunggu unggah, tanpa antrean, tanpa batas durasi selain filenya. Biarkan tab di depan selama merekam——browser membatasi gambar di tab latar belakang, gambarnya membeku sementara audionya jalan terus." },
        { q: "Apa bedanya dengan pembuat gelombang?", a: "Pembuat gelombang menggambar satu PNG statis dari kenyaringan sepanjang waktu——gambar untuk sampul atau postingan. Halaman ini menganimasikan spektrum frekuensi sambil lagu diputar dan merekam video. File yang sama masuk, hasilnya berlawanan: gambar diam lawan gambar bergerak." },
        { q: "Berfungsi di ponsel atau iPhone?", a: "Chrome di Android memutar dan merekam. Chrome, Edge, dan Firefox di desktop semuanya bisa merekam. Safari di iPhone dan iPad bisa memutar dan menampilkan animasinya, tetapi tidak bisa merekam kanvas, jadi tombol rekam di sana nonaktif. Jalannya yang jujur: perekam layar, atau desktop." },
        { q: "Bolehkah videonya dipakai komersial?", a: "Videonya tanpa tanda air dan tanpa lisensi dari kami: itu file Anda. Lagu di dalamnya tanggung jawab Anda. Visualizer dari trek milik sendiri, musik berlisensi, atau audio bebas royalti boleh Anda publikasikan." },
      ],
      sections: [
        {
          heading: 'Apa yang sebenarnya direkam halaman ini',
          paragraphs: [
            'Animasinya digambar di kanvas pada ukuran yang Anda pilih, dan perekam bawaan browser menangkap kanvas itu plus audio yang diputar melaluinya. Tidak ada render server dan tidak ada watermark: berkasnya ditulis oleh tab, tepat saat lagu selesai.',
            'Rekamannya berlangsung selama lagunya. Tidak ada watermark.',
          ],
        },
        {
          heading: 'Empat gayanya',
          paragraphs: [
            'Gambarnya memakai 64 band. Tema mengatur warna. Sisinya berjalan dari 200 sampai 2160.',
          ],
          bullets: [
            'Batang spektrum naik dari tepi bawah dengan gradien ke arah puncak.',
            'Batang bercermin melipat batang yang sama di sekitar tengah, tampilan pemutar klasik.',
            'Cincin menyusun band dalam lingkaran.',
            'Osiloskop menggambar gelombangnya sendiri, garis yang bernapas bersama trek.',
          ],
        },
        {
          heading: 'Di mana videonya cocok',
          paragraphs: [
            'Preset mencakup 16:9 dan 9:16. Sisi kustom berjalan dari 200 sampai 2160.',
            'Video selalu sepanjang audionya, jadi pangkas lagunya dulu jika hanya ingin satu bagian. Untuk gambar diam dari sebuah trek alih-alih video, generator gelombang menggambar satu dari berkas yang sama.',
          ],
        },
      ],
      dropHint: "Letakkan file audio, atau klik untuk mencari",
      exportLabel: "Rekam video",
    },
  },
};
