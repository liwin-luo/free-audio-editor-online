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
    about: 'Tentang',
    privacy: 'Privasi',
    guides: 'Panduan',
    rights: 'Tidak ada file yang meninggalkan perangkat Anda.',
    clientSide: 'Pemrosesan 100% di perangkat',
    trustLocal: 'Diproses secara lokal — tidak ada yang diunggah',
    trustFree: 'Gratis, tanpa daftar',
    trustClean: 'Tanpa watermark',
    faqHeading: 'Pertanyaan yang sering diajukan',
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
    zoomOut: 'Perkecil',
    zoomIn: 'Perbesar',
    loadDifferent: 'Muat file lain',
    startOver: 'Mulai dari awal',
    waveform: 'Gelombang audio. Seret untuk memilih rentang.',
    play: 'Putar pilihan',
    pause: 'Jeda',
    hintSelect: 'Seret di gelombang untuk memilih · Spasi untuk memutar',
    hintConvert: 'Spasi untuk memutar · tidak ada yang diunggah',
    reverse: 'Putar balik',
    normalize: 'Normalisasi puncak',
    speed: 'Kecepatan',
    volume: 'Volume',
    reverb: 'Reverb',
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
  },
  home: {
    title: 'Free Audio Editor — Edit Audio Online, Tidak Ada yang Diunggah',
    description:
      'Editor audio online gratis: pangkas, potong, gabung, putar balik, dan konversi audio langsung di browser. Tanpa mendaftar, tanpa unggah — file Anda tidak pernah meninggalkan perangkat.',
    appBlurb: 'Editor audio online gratis — potong, pangkas, gabung, dan edit audio di browser Anda.',
    badge: 'Pemrosesan 100% lokal · tidak ada yang diunggah',
    h1: 'Editor audio online gratis',
    lede: 'Pangkas, potong, gabung, dan edit audio langsung di browser. Tanpa mendaftar, tanpa watermark, tanpa unggah — file Anda tidak pernah meninggalkan perangkat.',
    ctaTrim: 'Pangkas file audio',
    ctaMerge: 'Gabungkan lagu',
    toolsHeading: 'Semua alat audio',
    mostUsed: 'Paling sering dipakai',
    comingTitle: 'Yang akan datang',
    comingBody: 'Mixer crossfade, penghapus keheningan, dan lainnya — dengan pendekatan yang sama: privasi diutamakan.',
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
  about: {
    title: 'Tentang Free Audio Editor — Alat Audio Online yang Mengutamakan Perangkat',
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
      'Kebijakan privasi freeaudioeditor.online: file audio diproses secara lokal di browser Anda dan tidak pernah diunggah. Tanpa akun, tanpa pelacakan terhadap audio Anda.',
    h1: 'Kebijakan Privasi',
    updated: 'Terakhir diperbarui: 14 Oktober 2026',
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
        body: 'Encoder MP3 (lamejs) dimuat saat dibutuhkan dari jaringan pengiriman konten publik (jsdelivr) ketika Anda pertama kali mengekspor MP3. Jaringan itu hanya melihat permintaan pustaka biasa; audio Anda, atau informasi apa pun tentangnya, tidak ikut terkirim. Font disajikan dari domain situs ini sendiri.',
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
    'audio-trimmer': {
      name: 'Pemangkas Audio',
      shortName: 'Pemangkas Audio',
      title: 'Pemangkas Audio — Pangkas Musik Online Gratis',
      description:
        'Pangkas musik, memo suara, dan podcast di browser. Pilih, dengarkan, lalu simpan dalam hitungan detik — gratis, tanpa mendaftar, dan audio tidak pernah meninggalkan perangkat.',
      h1: 'Pemangkas Audio',
      subtitle: 'Pangkas audio online — gratis, langsung di browser. Tidak ada yang diunggah.',
      intro:
        'Ambil persis bagian yang dibutuhkan dari lagu, memo suara, podcast, atau rekaman apa pun. Seret di gelombang audio untuk memilih, dengarkan kembali, lalu simpan — pemangkasan seluruhnya terjadi di perangkat Anda, jadi rekaman yang panjang pun tetap privat dan langsung bisa dikerjakan.',
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
      name: 'Potong Lagu',
      shortName: 'Potong Lagu',
      title: 'Potong Lagu — Potong MP3 Online Gratis',
      description:
        'Potong file MP3 online dalam beberapa klik. Simpan bagian terbaik atau hapus intro dalam hitungan detik — gratis, tanpa mendaftar, dan file tidak pernah meninggalkan perangkat.',
      h1: 'Potong Lagu',
      subtitle: 'Potong lagu dan file MP3 online — simpan bagian yang diinginkan, hapus sisanya.',
      intro:
        'Potong lagu sampai tersisa reff-nya, buang intro yang panjang, atau pisahkan bagian yang ingin ditonjolkan — langsung di browser. Pilih apakah bagian yang ditandai dipertahankan atau dihapus, dengarkan hasilnya, lalu simpan MP3 baru dalam hitungan detik.',
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
      ],
      dropHint: 'Jatuhkan file MP3, atau klik untuk memilih',
    },
    'mp3-editor': {
      name: 'Editor MP3',
      shortName: 'Editor MP3',
      title: 'Editor MP3 — Potong, Fade, Putar Balik, dan Percepat Online',
      description:
        'Edit MP3 dan audio lain secara online: potong, pangkas, fade in dan fade out, ubah volume serta kecepatan, putar balik. Gratis dan privat — semuanya berjalan di browser.',
      h1: 'Editor MP3',
      subtitle: 'Potong, fade, putar balik, dan percepat audio — semua dalam satu tab browser.',
      intro:
        'Editor audio yang ringkas untuk pekerjaan cepat: potong bagian, beri fade in dan fade out, naikkan atau turunkan volume, percepat atau perlambat trek, dan putar balik. Setiap suntingan diterapkan di perangkat Anda saat diekspor — file asli di disk selalu tetap utuh.',
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
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'ringtone-maker': {
      name: 'Nada Dering',
      shortName: 'Nada Dering',
      title: 'Nada Dering — Buat Nada Dering dari Lagu Apa Pun',
      description:
        'Jadikan lagu apa pun nada dering di browser. Pilih 40 detik terbaik, tambahkan fade, ekspor M4R atau MP3 — gratis, tanpa mendaftar, tidak ada yang diunggah.',
      h1: 'Nada Dering',
      subtitle: 'Pilih bagian terbaik dari lagu apa pun dan simpan sebagai nada dering — kurang dari semenit.',
      intro:
        'Pilih hook, drop, atau intro dari lagu favorit Anda, lalu jadikan nada dering. Alat ini menahan pilihan pada panjang nada dering klasik, yaitu 40 detik, menambahkan fade jika Anda menginginkannya, dan mengekspor langsung untuk ponsel — M4R untuk iPhone, MP3 untuk ponsel lain.',
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
      name: 'Gabung Audio',
      shortName: 'Gabung Audio',
      title: 'Gabung Audio — Gabungkan Lagu Online Gratis',
      description:
        'Gabungkan lagu dan file audio menjadi satu trek, dalam urutan apa pun, langsung di browser. Fade antar trek bersifat opsional — gratis, privat, tanpa unggah.',
      h1: 'Gabung Audio',
      subtitle: 'Gabungkan lagu dan file audio menjadi satu trek — urutan apa pun, dalam hitungan detik.',
      intro:
        'Gabungkan beberapa lagu, episode podcast, atau rekaman suara menjadi satu file. Tambahkan trek sebanyak yang Anda mau, atur urutannya, dan pudarkan awal serta akhir bila perlu. Penggabungan terjadi di perangkat Anda — koleksi yang besar pun langsung tergabung dan tetap privat.',
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
      ],
      dropHint: 'Jatuhkan dua file audio atau lebih, atau klik untuk memilih',
    },
    'wav-to-mp3': {
      name: 'Konversi WAV ke MP3',
      shortName: 'WAV ke MP3',
      title: 'Konversi WAV ke MP3 — Online dan Gratis',
      description:
        'Konversi WAV ke MP3 di browser — 128, 192, atau 320 kbps. Gratis, tanpa mendaftar: audio dikonversi secara lokal dan tidak pernah diunggah ke server.',
      h1: 'Konversi WAV ke MP3',
      subtitle: 'Konversi file WAV ke MP3 dalam hitungan detik — langsung di browser, tidak ada yang diunggah.',
      intro:
        'Ubah rekaman WAV yang berat menjadi MP3 yang ringkas, tanpa menginstal apa pun dan tanpa mengirim audio ke server. Jatuhkan file, pilih bitrate — 320 kbps untuk musik, 128 kbps untuk suara — dan konversi terjadi di perangkat Anda sendiri, biasanya dalam beberapa detik.',
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
          a: 'Tidak. File didekode di browser Anda, dikodekan ke MP3 oleh pustaka kecil yang dimuat dari CDN, lalu disimpan kembali ke disk. Audionya sendiri tidak pernah meninggalkan perangkat Anda.',
        },
      ],
      dropHint: 'Jatuhkan file WAV, atau klik untuk memilih',
      exportLabel: 'Konversi ke MP3',
    },
    'reverse-audio': {
      name: 'Putar Balik Audio',
      shortName: 'Putar Balik',
      title: 'Putar Balik Audio — Putar Lagu Terbalik Online Gratis',
      description:
        'Putar lagu atau rekaman apa pun secara terbalik di browser. Satu klik untuk membalik, dengarkan langsung, simpan sebagai MP3 atau WAV — gratis, dan tidak ada yang diunggah.',
      h1: 'Putar Balik Audio',
      subtitle: 'Putar lagu atau rekaman apa pun secara terbalik — satu klik, langsung di browser.',
      intro:
        'Balik trek apa pun agar diputar dari akhir ke awal: cari pesan tersembunyi dalam lagu, buat efek simbal terbalik untuk campuran musik, atau dengarkan seperti apa suara Anda saat diputar balik. Seluruh file dibalik di perangkat Anda, dan baru ditulis saat Anda mengekspor.',
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
      name: 'Ubah Kecepatan Audio',
      shortName: 'Ubah Kecepatan',
      title: 'Ubah Kecepatan Audio — Percepat atau Perlambat Online',
      description:
        'Percepat atau perlambat audio apa pun dari 0.5× hingga 2× di browser. Dengarkan langsung, ekspor MP3 atau WAV — gratis, privat, tidak ada yang diunggah.',
      h1: 'Ubah Kecepatan Audio',
      subtitle: 'Percepat atau perlambat audio apa pun dari 0.5× hingga 2× — langsung di browser.',
      intro:
        'Ubah kuliah 40 menit menjadi 20 menit yang lebih cepat, perlambat solo gitar hingga setengah kecepatan untuk latihan, atau sesuaikan trek agar muat di slot video yang lebih pendek. Geser pengatur kecepatan, dengarkan perubahannya langsung, lalu ekspor — audio diolah di perangkat Anda dan tidak pernah diunggah.',
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
          a: 'Ya — kecepatan dan nada bergerak bersama, seperti piringan yang diputar lebih cepat atau lebih lambat: 2× terdengar sekitar satu oktaf lebih tinggi, 0.5× sekitar satu oktaf lebih rendah. Itulah efek klasiknya; mengubah tempo sambil mempertahankan nada asli membutuhkan algoritma time-stretch khusus, yang mungkin kami tambahkan nanti.',
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
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'increase-volume': {
      name: 'Perbesar Volume MP3',
      shortName: 'Perbesar Volume',
      title: 'Perbesar Volume MP3 — Buat Audio Lebih Keras, Gratis',
      description:
        'Buat audio yang pelan menjadi lebih keras — perbesar volume MP3 dan file lain hingga 4× di browser. Limiter bawaan menjaga suara tetap bersih, gratis, dan tidak ada yang diunggah.',
      h1: 'Perbesar Volume MP3',
      subtitle: 'Perbesar rekaman yang pelan hingga 4× — dengan limiter, jadi tidak ada yang clipping.',
      intro:
        'Perbaiki rekaman yang terlalu pelan: memo suara dari ponsel, kuliah yang direkam dari barisan belakang, soundtrack video yang tersimpan pada level rendah. Naikkan volume hingga 4× (12 dB), dan limiter bawaan menahan puncaknya, sehingga hasilnya lebih keras tanpa berubah menjadi distorsi.',
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
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'mp4-to-mp3': {
      name: 'Konversi MP4 ke MP3',
      shortName: 'MP4 ke MP3',
      title: 'Konversi MP4 ke MP3 — Video ke MP3 Online Gratis',
      description:
        'Konversi video MP4 ke MP3 di browser — soundtrack diekstrak secara lokal, tidak pernah diunggah. Gratis, cepat, tanpa mendaftar, dan berjalan di ponsel.',
      h1: 'Konversi MP4 ke MP3',
      subtitle: 'Ambil soundtrack dari video apa pun — langsung di browser, tidak ada yang diunggah.',
      intro:
        'Ubah video MP4 menjadi audio MP3 tanpa menginstal apa pun dan tanpa mengunggah ukuran gigabyte ke server. Browser membaca file dari disk, mendekode soundtrack secara lokal, lalu menyimpannya sebagai MP3 — video 500 MB selesai dalam hitungan detik karena yang diproses hanya trek audionya.',
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
      name: 'Ekstrak Audio',
      shortName: 'Ekstrak Audio',
      title: 'Ekstrak Audio dari Video — Simpan Suara sebagai MP3 atau WAV',
      description:
        'Ekstrak trek audio dari video apa pun di browser, lalu simpan sebagai MP3 atau WAV lossless. Gratis, privat, tanpa unggah — juga untuk file yang besar.',
      h1: 'Ekstrak Audio dari Video',
      subtitle: 'Simpan soundtrack video apa pun sebagai MP3 atau WAV — secara lokal, dalam hitungan detik.',
      intro:
        'Pisahkan suara dari gambarnya: ambil wawancara dari panggilan video, simpan film konser sebagai album, atau pakai ulang soundtrack di suntingan Anda sendiri. Trek audio didekode di perangkat Anda, lalu bisa disimpan sebagai WAV lossless atau sebagai MP3 yang ringkas.',
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
      ],
      dropHint: 'Jatuhkan file video, atau klik untuk memilih',
      exportLabel: 'Ekstrak Audio',
    },
    'voice-recorder': {
      name: 'Perekam Suara',
      shortName: 'Perekam Suara',
      title: 'Perekam Suara Online — Rekam, Pangkas, dan Simpan Gratis',
      description:
        'Rekam mikrofon di browser, pangkas hasilnya, lalu simpan sebagai MP3 atau WAV. Gratis dan privat — rekaman tidak pernah diunggah.',
      h1: 'Perekam Suara',
      subtitle: 'Rekam mikrofon, pangkas hasilnya, simpan sebagai MP3 — tidak ada yang meninggalkan perangkat.',
      intro:
        'Perekam yang sekaligus bisa memangkas: rekam memo suara, wawancara, latihan, atau catatan rapat, lalu buang bagian hening dan ekspor file yang bersih. Perekaman maupun penyuntingan terjadi di browser Anda — audio tidak pernah dikirim ke mana pun, sehingga tetap nyaman untuk percakapan yang bersifat rahasia.',
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
      name: 'Penguat Volume',
      shortName: 'Penguat Volume',
      title: 'Penguat Volume — Buat Video dan Musik Lebih Keras, Gratis',
      description:
        'Perbesar volume musik dan soundtrack video yang pelan hingga 4× di browser. Limiter menjaganya tetap bersih — gratis, privat, tidak ada yang diunggah.',
      h1: 'Penguat Volume',
      subtitle: 'Perbesar trek dan soundtrack video yang pelan hingga 4× — bersih, tidak clipping.',
      intro:
        'Untuk semua yang terdengar terlalu pelan: video ponsel yang sunyi, rekaman akustik yang lembut, podcast yang hasil mastering-nya nyaris berbisik. Muat file, naikkan volume hingga 4×, dan biarkan limiter bawaan menahan puncak agar bagian yang keras tetap bersih. Berlaku untuk file audio maupun video — yang diproses hanya soundtrack-nya.',
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
      ],
      dropHint: 'Jatuhkan file audio atau video, atau klik untuk memilih',
    },
    'normalize-audio': {
      name: 'Normalisasi Audio',
      shortName: 'Normalisasi',
      title: 'Normalisasi Audio — Samakan Level Online Gratis',
      description:
        'Normalisasi audio ke level puncak yang konsisten di browser — MP3, WAV, M4A, dan lainnya. Satu klik, gratis, tidak ada yang diunggah.',
      h1: 'Normalisasi Audio',
      subtitle: 'Satu klik untuk menaikkan file yang pelan ke level yang konsisten dan sehat — dianalisis di perangkat Anda.',
      intro:
        'Normalisasi memindai file untuk menemukan puncak paling keras, lalu menaikkan seluruh file tepat sebesar yang dibutuhkan agar puncak itu berada tepat di bawah clipping. Hasilnya: file memakai seluruh rentang volume yang tersedia, tanpa tebakan manual. Ini perbaikan yang tepat ketika rekaman memang pelan secara merata — memo suara, rekaman lapangan, atau hasil ekspor dari aplikasi lain yang keluar di −18 dB.',
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
          a: 'Tidak. Ini normalisasi puncak — langsung dan bisa diperkirakan. Layanan streaming menyamakan trek berdasarkan kenyaringan terintegrasi (LUFS), ukuran rata-rata yang lebih panjang dan termasuk ranah mastering. Normalisasi puncak tetap perbaikan cepat yang tepat untuk menyamakan level pemutaran.',
        },
        {
          q: 'Apakah normalisasi mengurangi kualitas?',
          a: 'Perubahan levelnya sendiri bersih secara matematis dan tidak terdengar. Satu-satunya soal kualitas adalah format ekspor: WAV tetap utuh bit demi bit untuk perubahan gain ini, sedangkan MP3 dikodekan ulang satu kali. Ekspor WAV jika file masih akan disunting lagi.',
        },
      ],
      dropHint: 'Jatuhkan file audio, atau klik untuk memilih',
    },
    'slowed-reverb': {
      name: 'Slowed + Reverb',
      shortName: 'Slowed + Reverb',
      title: 'Slowed + Reverb — Buat Lagu Slowed + Reverb Online Gratis',
      description:
        'Jadikan lagu apa pun suntingan slowed + reverb di browser — perlambat, beri reverb, ekspor MP3. Gratis, tidak ada yang diunggah.',
      h1: 'Pembuat Slowed + Reverb',
      subtitle: 'Suara larut malam: perlambat trek ke sekitar 85%, tambahkan ruang, lalu ekspor — tanpa aplikasi, tanpa unggah.',
      intro:
        'Slowed + reverb adalah gaya yang menurunkan lagu ke sekitar 80–90% kecepatan sehingga nadanya ikut turun, lalu menambahkan ekor gema yang lembut sampai semuanya terdengar seperti diputar dari dua ruangan jauhnya. Muat sebuah lagu, geser kecepatan ke sekitar 85%, naikkan reverb sampai terasa pas, lalu ekspor — seluruh suntingan terjadi di perangkat Anda, jadi trek sepanjang lagu penuh pun selesai dalam hitungan detik. Naikkan kecepatan di atas 100%, dan yang Anda dapatkan adalah nightcore.',
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
      ],
      dropHint: 'Jatuhkan lagu, atau klik untuk memilih',
    },
  },
};
