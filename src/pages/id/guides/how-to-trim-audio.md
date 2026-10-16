---
title: Cara memotong audio online (gratis, tanpa unggah)
description: Potong memo suara, podcast, atau rekaman di browser. Simpan satu bagian atau hapus jeda, lalu ekspor MP3 atau WAV. File tidak diunggah.
tool: audio-trimmer
locale: id
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Memotong audio berarti menyimpan satu bagian rekaman dan membuang sisanya:
hening sebelum memo suara, udara kosong setelah jawaban podcast, bagian rapat
yang memang perlu dikirim. Memangkas, dalam pekerjaan ini, adalah operasi
yang sama. Anda menandai bagian yang tinggal.

Itu bukan pekerjaan yang sama dengan menyisakan lagu hanya di bagian
reff. Kontrolnya mirip. Keputusannya tidak. Untuk lagu, halamannya adalah
[Potong Lagu](/id/mp3-cutter).

## Yang Anda butuhkan

- Filenya. MP3, WAV, M4A, FLAC, dan OGG terbuka jika browser Anda sudah bisa
  memutarnya.
- [Potong Audio](/id/audio-trimmer). Ini berjalan di tab. Tidak ada unggahan.
- Sekitar satu menit.

## Potong filenya

Jatuhkan file ke halaman, atau klik untuk memilih. Bentuk gelombang muncul
seketika. Tidak ada bilah unggah, karena file tidak pernah meninggalkan
perangkat.

![Halaman potong audio sebelum file dibuka. Yang terlihat hanya zona untuk menjatuhkan file.](/guides-media/how-to-trim-audio/id-01-drop.webp)

Seret di bentuk gelombang untuk menandai satu bagian. Waktu di bawah tombol
putar menunjukkan posisi sampai seperseratus detik. Jika seretan terlalu
kasar, buka **Waktu persis** dan ketik awal serta akhir dalam detik.

Tekan putar. Yang berbunyi adalah pilihan, bukan seluruh file. Geser
ujungnya sampai awal jatuh di kata pertama dan akhir jatuh setelah kata
terakhir, bukan di tengah salah satunya.

![Pertahankan pilihan aktif. Bagian yang disorot adalah yang akan diekspor, dan formatnya MP3 · 192 kbps.](/guides-media/how-to-trim-audio/id-02-keep.webp)

## Simpan bagiannya, atau hapus jeda

Dua mode, dan masing-masing menjawab kalimat yang berbeda:

- **Pertahankan pilihan** — ekspor hanya bagian yang disorot. Pakai ini untuk
  memangkas memo suara sampai isinya, atau mengambil satu jawaban dari
  rekaman yang panjang.
- **Hapus pilihan** — ekspor adalah semuanya kecuali bagian yang disorot.
  Pakai ini untuk membuang hening di awal, atau jeda di tengah. Hapus di
  tengah menyimpan kedua sisi dan menyambungkannya dengan potongan keras.

![Hapus pilihan aktif, dan hening di awal adalah bagian yang disorot. Ekspor menyimpan semua yang ada di luar sorotan itu.](/guides-media/how-to-trim-audio/id-03-delete.webp)

Satu ekspor adalah satu file. Halaman ini tidak memecah satu rekaman menjadi
beberapa unduhan sekaligus. Jika Anda butuh tiga klip, pilih dan ekspor satu
per satu.

Fade di **Sesuaikan** menghaluskan awal dan akhir dari yang Anda ekspor. Fade
itu tidak menyambung lembut di titik dua sisi jeda yang dihapus bertemu.
Sambungan itu potongan keras. Jika terdengar klik, ekspor kedua potongan
secara terpisah dan gabungkan dengan crossfade pendek di
[Gabung Audio](/id/audio-joiner).

Untuk satu bagian yang bersih, fade 0,1–0,3 detik cukup agar klip tidak
mulai atau berakhir dengan klik. Akhir sebuah lagu adalah keputusan lain, dan
itu dikerjakan di [Potong Lagu](/id/mp3-cutter).

## Ekspor

Halaman ini mulai dari **MP3 192 kbps**. Ubah di menu format sebelum mengklik
**Ekspor**:

- **MP3 128 kbps** cukup untuk suara bicara. Musik di sini mulai terdengar
  redup.
- **MP3 192 kbps** adalah pilihan yang tepat untuk file campuran yang akan
  dikirim sekali.
- **WAV** adalah PCM 16-bit pada sample rate file itu sendiri. Pakai jika
  Anda akan mengedit lagi. Mengekspor MP3 dari MP3 membuang sedikit detail
  lagi setiap kali.

Unduhan dimulai di browser. File asli di disk tidak berubah.

## Di ponsel

Halaman yang sama bekerja di Safari dan Chrome ponsel. Bentuk gelombang
menerima sentuhan, dan bilah ekspor tetap di bawah layar. Rekaman panjang
dibatasi memori ponsel, bukan batas akun. Laptop sekarang nyaman sampai
sekitar satu jam. Ponsel, lebih pendek.

## Yang tidak diperbaiki dengan memotong

Memotong menghapus waktu. Ini tidak menghapus noise, tidak memisahkan suara
dari musik, dan tidak membuat take yang pelan di seluruh file menjadi keras
dengan sendirinya. Volume di **Sesuaikan** berjalan dari 10% sampai 200%.
Rekaman yang pelan dari awal sampai akhir butuh
[Perbesar Volume MP3](/id/increase-volume), yang sampai 400% dengan limiter,
atau [Normalisasi Audio](/id/normalize-audio), yang menaikkan file sampai
puncak paling keras berada tepat di bawah clipping.

Jika langkah berikutnya adalah lagu, bukan rekaman, pindah ke
[Potong Lagu](/id/mp3-cutter). Peta yang lebih luas ada di
[cara mengedit file MP3](/id/guides/how-to-edit-an-mp3).
