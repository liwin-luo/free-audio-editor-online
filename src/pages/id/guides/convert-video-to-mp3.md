---
title: MP4 ke MP3 — ubah video di browser
description: Ubah MP4, WebM, atau MOV menjadi MP3 tanpa mengunggah video. Bitrate mana yang dipilih, dan kapan AC3 atau DTS tidak terbaca.
tool: mp4-to-mp3
locale: id
date: 2026-10-15
layout: ../../../layouts/Guide.astro
---

Rekaman kuliah atau konser di ponsel terasa berat karena gambar ikut tersimpan.
Untuk didengar di mobil, atau dengan layar mati, trek suaranya saja yang
dibutuhkan. Mengubah MP4 ke MP3 berarti menyimpan trek itu dan membuang
gambarnya.

Pengonversi yang biasa mengunggah seluruh video ke server orang lain. Pada
file ratusan megabita, itu lambat, dan file tidak lagi hanya ada di perangkat
Anda. Browser yang sudah terpasang bisa membaca MP4 dan menyimpan MP3 di
perangkat yang sama.

## Apa yang dilakukan halaman ini

Buka [konversi MP4 ke MP3](/id/mp4-to-mp3). Halaman ini mengubah seluruh trek.
Tidak memotong satu bagian dari video. Jika Anda hanya butuh satu menit,
konversi dulu, lalu bawa MP3 itu ke [pemangkas audio](/id/audio-trimmer).

Halaman ini juga tidak mengambil video dari YouTube, TikTok, atau situs lain.
File-nya harus sudah ada di ponsel atau komputer Anda.

Video tidak diunggah. Saat MP3 pertama kali diekspor, halaman memuat encoder
(lamejs) dari jsDelivr. Permintaan itu adalah pustakanya, bukan file Anda.

## Langkahnya

1. Seret MP4 ke halaman, atau klik untuk memilih. WebM dan MOV dengan trek
   audio biasa diproses dengan cara yang sama. M4A juga bisa: tidak ada gambar
   yang perlu dibuang.
2. Saat file terbuka, menu format sudah di **MP3 · 320 kbps**. Ubah jika Anda
   ingin angka lain.
3. Klik **Konversi ke MP3**. Unduhan dimulai di perangkat Anda.

![Halaman MP4 ke MP3 sebelum file dibuka. Yang terlihat hanya area untuk menjatuhkan video.](/guides-media/convert-video-to-mp3/id/drop.webp)

![Setelah video terbuka, format ada di MP3 · 320 kbps dan tombolnya bertuliskan Konversi ke MP3.](/guides-media/convert-video-to-mp3/id/ready.webp)

Di bawah area untuk menjatuhkan file tertulis “hingga sekitar satu jam”, lalu daftar
format audio. Kalimat itu sama di alat yang lain. Di halaman ini, video yang
panjang dibatasi memori perangkat, bukan kalimat itu.

Menu yang sama punya **WAV · lossless**. Pilih WAV jika Anda masih akan
memotong atau memperbesar volume, dan ingin mengkodekan MP3 sekali saja di
akhir. Mengkodekan MP3 dua kali adalah langkah yang mengurangi detail.
[Ekstrak audio](/id/extract-audio) adalah mesin yang sama, dengan WAV sudah
terpilih.

Resolusi tidak mengubah waktu. Video 4K dan video kecil dengan trek yang sama
selesai dalam waktu yang sama, karena gambar tidak diproses. Batasnya adalah
memori perangkat, bukan kuota megabita di halaman ini.

## Bitrate yang dipakai

- **128 kbps** untuk suara orang: kuliah, rapat, catatan yang direkam. Pada
  musik masih terdengar, dan sedikit redup. Pakai ini jika file harus kecil.
- **192 kbps** untuk musik yang benar-benar Anda dengar. Dengan earphone biasa,
  hampir tidak ada yang membedakannya dari angka yang lebih tinggi.
- **320 kbps** adalah pilihan yang sudah terpasang saat file dibuka, dan itu
  batas atas MP3. Biarkan jika rekamannya bersih, atau jika seseorang meminta MP3
  terbaik. Detail tetap ada yang hilang. Konser yang direkam mikrofon ponsel
  tidak menjadi rekaman studio hanya karena angkanya 320.

## Saat browser tidak bisa

Berhasil jika browser sudah bisa memutar audio di file itu. Dalam praktik: AAC
di dalam MP4 dan MOV, serta Opus atau Vorbis di dalam WebM. Chrome, Firefox,
dan Safari membaca ketiganya.

Tidak berhasil pada trek yang tidak ada di browser:

- **AC3 (Dolby Digital)**, umum di DVD dan di sebagian MKV atau MP4 yang
  diunduh.
- **DTS**, codec film yang lain pada cakram yang sama.
- Video yang, dibuka di tab biasa, menampilkan gambar lalu diam. Trek itu
  tidak bisa dibaca di sini.

Halaman yang tidak mengunggah file tidak bisa menjanjikan semua format. Untuk
kasus itu, ffmpeg di komputer Anda sendiri menahan file di rumah dan menambah
decoder. Situs yang menerima unggahan juga bisa, jika Anda sudah memutuskan
video itu boleh keluar dari perangkat.

Hasilnya audio biasa. Bisa diputar di mobil, di aplikasi podcast, atau di
speaker yang tidak membuka video. Gambarnya memang dibuang: alat ini tidak
memasukkan suara kembali ke MP4 yang baru.
