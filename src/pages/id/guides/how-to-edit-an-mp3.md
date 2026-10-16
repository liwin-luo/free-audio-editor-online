---
title: Cara mengedit file MP3 di browser
description: Potong, pangkas, fade, atau keraskan MP3 tanpa memasang aplikasi. Halaman mana untuk tiap pekerjaan, dan kapan mengekspor WAV agar tidak dikode ulang dua kali.
tool: mp3-editor
locale: id
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Mengedit MP3 biasanya satu pekerjaan dari daftar yang pendek: memotong satu
bagian, membuang hening, memberi fade di tepi, membuatnya lebih keras,
mengubah kecepatan, atau memperbaiki judul yang ditampilkan pemutar. Masing-
masing sudah punya halaman. Yang ini adalah petanya, supaya file tidak
didekode dan dikode ulang tiga kali di perjalanan.

[Editor MP3](/id/mp3-editor) adalah kasus umumnya. Jatuhkan file, buat
suntingannya, ekspor sekali. File asli tetap di disk. File baru adalah
unduhannya.

## Pilih pekerjaannya

| Anda mau… | Ke sini |
|---|---|
| Memangkas memo suara atau membuang hening | [Memotong audio](/id/guides/how-to-trim-audio) |
| Menyisakan reff, atau menghapus satu potong lagu | [Potong Lagu](/id/mp3-cutter) |
| Menyusun beberapa file berurutan | [Gabung Audio](/id/audio-joiner) |
| Memindahkan kunci dan mempertahankan durasi | [Mengubah nada tanpa mengubah kecepatan](/id/guides/change-pitch-without-changing-speed) |
| Memutar lebih cepat atau lebih lambat, nada ikut | [Ubah Kecepatan Audio](/id/change-audio-speed) |
| Mengedit WAV sebelum dikonversi | [Mengedit file WAV](/id/guides/how-to-edit-a-wav-file) |
| Memperbaiki judul, artis, atau sampul | [Editor Tag MP3](/id/mp3-tag-editor) |

Jika pekerjaannya dua atau tiga hal kecil — potongan, fade, sedikit volume —
kerjakan di editor MP3 dan ekspor sekali. Membuka halaman baru untuk tiap
slider berarti MP3 baru setiap kali.

## Edit dalam satu kali

Jatuhkan MP3 ke [editor](/id/mp3-editor). Bentuk gelombang adalah file itu,
didekode di tab.

Seret satu bagian. **Pertahankan pilihan** mengekspor hanya bagian itu.
**Hapus pilihan** mengekspor sisanya. **Waktu persis** menerima awal dan
akhir dalam detik ketika seretan belum cukup tepat.

![song-demo.mp3 di editor MP3. Pertahankan pilihan aktif, satu bagian file disorot, dan formatnya MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/id-01-editor.webp)

Buka **Sesuaikan** untuk sisanya:

- **Fade in** dan **Fade out**, sampai 5 detik. Keduanya membentuk awal dan
  akhir ekspor. Mereka tidak menyambung lembut di tengah file.
- **Volume**, dari 10% sampai 200%. Limiter menahan puncak saat Anda melewati
  100%, jadi kenaikan yang sedang tetap lebih bersih daripada clipping keras.
  Suaranya tetap akan terasa dipaksa jika file memang sudah keras.
- **Kecepatan**, dari 0,5× sampai 2×. Nada ikut bergerak. Ini bukan
  time-stretch. Untuk mengubah kunci dan mempertahankan durasi, pakai
  [pengubah nada](/id/pitch-changer), bukan slider ini.
- **Normalisasi puncak** menaikkan seluruh file dengan satu jumlah, sampai
  sampel paling keras berada tepat di bawah clipping. Ini menggantikan slider
  volume. Ini tidak membuat bagian pelan sekeras bagian keras.
- **Putar balik** membalik ekspor dari akhir ke awal.

![Sesuaikan terbuka: Fade in dan Fade out di 0.0s, Volume 100%, Kecepatan 1.00×, normalisasi puncak tidak dicentang, putar balik tidak dicentang. Formatnya tetap MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/id-02-adjust.webp)

Putar pilihan sebelum mengekspor. Lalu pilih formatnya.

**MP3 320 kbps** adalah bawaan editor, dan pilihan yang tepat ketika ekspor
ini adalah file yang akan Anda simpan. **192 kbps** cukup untuk dikirim.
**128 kbps** untuk suara bicara. **WAV** adalah pilihan ketika suntingan ini
bukan yang terakhir.

## Keras, tanpa menebak

File yang pelan dari awal sampai akhir punya dua perbaikan yang jujur, dan
keduanya bukan kontrol yang sama.

[Normalisasi Audio](/id/normalize-audio) mengukur puncak dan menerapkan gain
bersih terbesar yang masih menghindari clipping. Pakai ketika Anda tidak tahu
seberapa jauh harus mendorong.

[Perbesar Volume MP3](/id/increase-volume) adalah pengali yang Anda pilih,
sampai 400%, dengan limiter di puncaknya. Slider volume editor sendiri
berhenti di 200%. Pakai halaman itu ketika 200% tidak cukup. Mundur jika
bagian keras mulai memompa. Keras yang bersih lebih baik daripada keras
maksimal.

Keduanya bukan penyamaan kenyaringan untuk platform streaming. Itu rata-rata
yang lebih panjang, diukur dalam LUFS, dan tempatnya di sesi mastering.

## Suara dan label adalah hal yang terpisah

Memotong, memberi fade, dan mengeraskan mendekode MP3 lalu menulis yang baru.
Judul, artis, album, dan sampul bukan suaranya. Mereka tinggal di blok tag,
dan [editor tag](/id/mp3-tag-editor) menulis ulang blok itu tanpa menyentuh
byte audio. Sunting suaranya dulu. Beri label pada file yang benar-benar Anda
simpan. Memberi label dulu, lalu mengekspor MP3 baru, menjatuhkan tag di
jalan keluar.

Editor tag hanya untuk MP3. Ia tidak memproses album sekaligus, dan tidak
membawa field bab podcast yang tidak biasa.

## Yang tidak dilakukan editor ini

Ia tidak menumpuk dua trek lalu memixnya. [Gabung Audio](/id/audio-joiner)
menyusun file ujung ke ujung dan bisa crossfade di bagian yang tumpang
tindih. Ia tidak memberi dua fader sekaligus.

Ia tidak menghapus vokal, tidak merekam profil noise, dan tidak memecah lagu
menjadi stem. Halaman browser yang menjanjikan itu sedang menggambarkan
produk lain. Untuk timeline, perbaikan, atau trek kedua, editor desktop tetap
alatnya. Tetap di sini ketika pekerjaannya satu file dan satu ekspor.
