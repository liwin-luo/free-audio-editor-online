---
title: Konversi audio ke MIDI online - satu instrumen, 3 menit
description: Ubah melodi yang dihumming, suara, atau piano solo menjadi file MIDI di browser. Apa yang terbaca dengan baik, apa yang salah, dan isi file .mid. Tanpa unggah.
tool: audio-to-midi
locale: id
date: 2026-10-21
layout: ../../../layouts/Guide.astro
sources:
  - label: Basic Pitch — konverter audio ke MIDI open source dari Spotify
    url: https://basicpitch.spotify.com/
  - label: Bittner et al., A Lightweight Instrument-Agnostic Model for Polyphonic Note Transcription and Multipitch Estimation (ICASSP 2022)
    url: https://arxiv.org/abs/2203.09893
---

Mengonversi audio ke MIDI berarti mengembalikan rekaman menjadi not: pitch setiap not, kapan mulai, berapa lama, dan seberapa keras dimainkan. Dengan not itu di DAW, Anda bisa memperbaiki not yang salah, mengganti instrumen, atau menguantisasi timing tanpa merekam ulang.

Halaman [Audio ke MIDI](/id/audio-to-midi) mengerjakannya di browser. Halaman ini menjalankan model Basic Pitch milik Spotify di perangkat Anda dan menulis file .mid. Audio tidak pernah diunggah.

## Yang berhasil dan yang tidak

Basic Pitch dibuat untuk satu instrumen dalam satu waktu: satu melodi, satu suara, atau piano solo. Dengan itu, not yang keluar dekat dengan yang Anda mainkan.

Miksen penuh adalah pekerjaan lain. Model mendengar semua instrumen di satu kanal (stereo dicampur ke mono lebih dulu), jadi rekaman yang padat berubah jadi not ekstra atau kurang. Drum tidak punya pitch dan biasanya tidak menghasilkan apa pun. Tidak ada pemisahan stem di sini: satu file masuk, satu trek not keluar.

Kalau yang Anda cari hanya nada dasar atau BPM, Anda tidak butuh MIDI. [Nada dan BPM](/id/key-bpm-finder) membaca dua angka itu tanpa menulis file.

## Konversi filenya

1. Buka [Audio ke MIDI](/id/audio-to-midi).
2. Letakkan satu instrumen: MP3, WAV, M4A, atau video dengan bagian yang Anda mau. Lebih dari 3 menit ditolak. Potong dulu di [Potong Audio](/id/audio-trimmer), lalu kembali.
3. Konversi pertama mengunduh model dari situs ini, di bawah 1 MB. Browser menyimpan salinannya, jadi penantian terjadi sekali.
4. Baca jumlah not sebelum mengunduh. Melodi yang dihumming harus dekat dengan jumlah not yang Anda nyanyikan. Ratusan not untuk melodi pendek berarti rekaman berisi lebih dari satu instrumen, dan filenya akan berantakan.
5. Klik unduh dan file .mid tersimpan di perangkat.

Tidak ada pratinjau audio di halaman. Not tampil sebagai teks; pertama kali Anda mendengarnya adalah di DAW. Berjalan di Chrome, Edge, Firefox, dan Safari terkini; di ponsel dengan memori kecil, konversi bisa gagal, dan klip yang lebih pendek biasanya lolos.

## Isi file .mid

Satu trek, MIDI type 0. Setiap not membawa pitch antara 21 dan 108 (A0 sampai C8 pada piano), waktu mulai, durasi, dan kekuatan. Tanda tempo adalah 120 BPM: membuat waktu not cocok dengan detik rekaman. Angka 120 itu bukan tempo lagu Anda.

Trek dimulai dengan suara piano General MIDI agar DAW punya suara saat diimpor. Ini bukan rekaman instrumen asli Anda; ganti suaranya setelah file tiba.

Dua hal tidak ada di dalamnya: pitch bend, sehingga slide yang dinyanyikan tiba sebagai not tetap di pitch akhir; dan partitur. Situs ini tidak menghasilkan partitur.

## Setelah mengunduh

Seret .mid ke GarageBand, Logic, Ableton, atau DAW apa pun yang membaca MIDI. Langkah lanjutan yang biasa: ganti piano General MIDI dengan suara instrumen sungguhan, perbaiki satu dua not yang salah dibaca model, dan kuantisasi kalau timing meleset.

Kalau rekamannya bagus dan hanya nada dasarnya yang salah, mengubah pitch audio asli tanpa membuat not adalah [Pengubah nada](/id/pitch-changer).

Kalau Anda memakai Logic dan mencari fitur audio ke MIDI bawaannya: halaman ini versi browsernya, untuk saat Logic tidak terbuka. File yang dihasilkan bisa diseret ke proyek Logic seperti region MIDI lainnya.

## Kesalahan umum

**Mengonversi satu lagu penuh dan berharap trek terpisah.** Hasilnya satu trek not yang dimainkan seluruh miksenya. Stem adalah alat yang berbeda.

**Menilai hasil hanya dengan telinga.** Jumlah not di halaman adalah pemeriksaan mutu tercepat. Angkanya tidak masuk akal, filenya juga.

**Memasukkan rekaman pengeras suara.** Merekam lagu dengan ponsel di ruangan menambahkan ruangan itu, dan kedua sumber ikut ditranskripsi. Konversi file audionya, bukan rekaman ulangnya.

**Berharap tempo lagu ada di file.** Tanda 120 BPM ada supaya waktu not cocok dengan detik rekaman. Klik DAW Anda tidak mengikuti lagu; baca tempo aslinya dulu di [Nada dan BPM](/id/key-bpm-finder).
