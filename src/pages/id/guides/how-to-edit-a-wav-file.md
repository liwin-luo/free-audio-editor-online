---
title: Cara mengedit file WAV di browser
description: Pangkas dan edit WAV sebelum dikonversi. Kapan tetap di PCM 16-bit, kapan MP3 320 kbps cukup, dan mengapa MP3 ke WAV tidak mengembalikan kualitas.
tool: mp3-editor
locale: id
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

File WAV adalah audio dengan kompresi MP3 yang masih dimatikan. Anda bisa
memangkas, memberi fade, dan mengubah levelnya di browser tanpa mengubahnya
menjadi MP3 lebih dulu. Untuk potongan, fade, atau perubahan level, memasang
editor WAV adalah alat yang lebih besar daripada pekerjaannya. Konversi
sekali, di akhir, jika Anda butuh file yang lebih kecil untuk dikirim.

Membuka WAV di konverter lalu mengedit MP3-nya sesudahnya adalah jalan yang
panjang. Setiap potongan berikutnya mengkode ulang file yang sudah kehilangan
detail awal.

## Buka WAV apa adanya

Jatuhkan `.wav` ke [Editor MP3](/id/mp3-editor) atau ke
[Potong Audio](/id/audio-trimmer). Keduanya mendekode di tab. Tidak ada
langkah konversi sebelum suntingan, dan tidak ada yang diunggah.

![voice-memo.wav terbuka di editor. Menu format diatur ke WAV · lossless, jadi ekspor tetap PCM dan tidak menjadi MP3.](/guides-media/how-to-edit-a-wav-file/id-01-wav.webp)

Jika halaman menolak file, browser tidak bisa mendekode WAV itu. PCM standar
terbuka. Pengodean yang tidak biasa, yang tidak bisa diputar di tab browser
biasa, juga tidak akan terbuka di sini. Batas itu ada di dekoder, bukan di
batas ukuran file.

Suntingannya sama dengan yang dipakai pada MP3:

- Seret satu bagian. **Pertahankan pilihan** memangkas sampai bagian itu.
  **Hapus pilihan** menghapusnya. Panduan untuk rekaman ada di
  [cara memotong audio](/id/guides/how-to-trim-audio).
- **Fade in** dan **Fade out** di **Sesuaikan** membentuk awal dan akhir
  ekspor, sampai 5 detik.
- **Volume** berjalan dari 10% sampai 200%. Rekaman lapangan yang pelan dan
  butuh lebih dari itu masuk ke [Perbesar Volume MP3](/id/increase-volume).
- **Kecepatan** berjalan dari 0,5× sampai 2×, dan nada bergerak bersama
  temponya. Untuk memindahkan kunci dan mempertahankan durasi, pakai
  [pengubah nada](/id/pitch-changer).

Satu ekspor adalah satu file. Perbesar dengan tombol **+** dan letakkan
potongan pada jeda, bukan di tengah kata.

## Edit dulu, baru putuskan formatnya

**WAV** di menu format adalah PCM 16-bit pada sample rate file itu sendiri.
Stereo 44,1 kHz kira-kira 10 MB per menit. Lagu tiga menit kira-kira 30 MB.
Ukuran itu adalah audio yang tidak dikompresi, bukan ekspor yang membengkak.

Pakai WAV ketika:

- Anda akan mengedit lagi. Tetap di PCM berarti potongan berikutnya tidak
  menambah generasi MP3 lagi.
- Seseorang meminta WAV: DAW, sampler, atau file untuk pers.
- Sumbernya sudah 16-bit dan Anda mau resolusi yang sama kembali.

WAV 24-bit atau 32-bit float disimpan sebagai 16-bit saat keluar. Halaman ini
tidak menulis file 24-bit. Jika resolusi ekstra itu alasan Anda menyimpan
WAV, kerjakan bagian yang halus di editor desktop dan simpan ekspornya.

**MP3** adalah file yang Anda kirim.

- **320 kbps** adalah titik di mana hampir tidak ada yang mendengar bedanya
  dari WAV pada dengar biasa. Pakai untuk musik yang Anda simpan.
- **192 kbps** adalah keseimbangan sehari-hari.
- **128 kbps** untuk suara bicara. Musik di sini terdengar redup.

WAV 50 MB jatuh di sekitar 4–5 MB pada 192 kbps dan sekitar 11 MB pada 320
kbps. Angka pastinya mengikuti durasi dan sample rate. Konversinya sendiri
ada di halaman [WAV ke MP3](/id/wav-to-mp3), dan itu langkah terakhir yang
tepat ketika suntingannya sudah selesai.

Tag dan sampul tidak disalin ke MP3 itu. Tambahkan sesudahnya dengan
[editor tag](/id/mp3-tag-editor), yang hanya menulis ulang label dan
membiarkan byte audio.

## MP3 ke WAV tidak memutar waktu ke belakang

Mendekode MP3 ke WAV memberi persis apa yang sudah ada di MP3 itu, sebagai
PCM 16-bit, tanpa kehilangan tambahan. Ini tidak mengembalikan apa yang
dibuang encoder MP3. Waspadalah pada konverter yang mengklaim kenaikan
kualitas.

Urutan yang jujur, ketika WAV-nya masih ada: edit WAV-nya, ekspor MP3 sekali
di akhir. Urutan yang jujur, ketika yang ada hanya MP3: dekode ke WAV jika
sebuah alat menuntutnya, edit di sana, dan kompres sekali. Halaman
[MP3 ke WAV](/id/mp3-to-wav) adalah dekode itu. Bukan remaster.

## Yang tetap di perangkat

WAV asli tidak diubah. Unduhan adalah file baru. Muat ulang tab dan sesinya
hilang, dan itulah gunanya tidak pernah mengunggah. Laptop menangani satu
lagu album atau memo suara yang panjang. File sepanjang film bisa membuat tab
kehabisan memori. Saat itulah WAV yang sama dipindahkan ke editor desktop
yang membaca dari disk. Ketika file yang Anda kirim adalah MP3,
[cara mengedit file MP3](/id/guides/how-to-edit-an-mp3) adalah peta suntingan
mana yang ada di halaman mana.
