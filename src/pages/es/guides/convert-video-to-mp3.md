---
title: MP4 a MP3 — convierte el video en el navegador
description: Pasa un MP4, WebM o MOV a MP3 sin subir el video. Qué bitrate elegir, y cuándo AC3 o DTS no se pueden leer.
tool: mp4-to-mp3
locale: es
date: 2026-10-15
layout: ../../../layouts/Guide.astro
---

Una clase grabada con el celular, o un concierto que filmaste desde la fila de
atrás, pesa mucho porque guarda imagen y sonido. Para oírlo en el coche o con
la pantalla apagada solo hace falta la pista. Convertir MP4 a MP3 es quedarse
con esa pista y tirar la imagen.

El convertidor de siempre sube el video entero a un servidor. Con un archivo
grande, eso es lento, y el archivo deja de estar solo en tu equipo. El
navegador que ya tienes puede leer el MP4 y guardar el MP3 en el mismo
dispositivo.

## Qué hace esta página

Abre el [convertidor de MP4 a MP3](/es/mp4-to-mp3). Convierte la pista completa.
No recorta un tramo del video: si solo quieres un minuto, conviertes primero y
después pasas el MP3 al [recortador de audio](/es/audio-trimmer).

Tampoco baja videos de YouTube, TikTok ni de ninguna otra web. El archivo tiene
que estar ya en tu celular o en tu computadora.

El video no se sube. El codificador (lamejs) viene con este sitio y solo se
carga al exportar un MP3. Tu archivo no sale del dispositivo.

## Los pasos

1. Arrastra el MP4 a la página, o haz clic para elegirlo. WebM y MOV con una
   pista de audio normal funcionan igual. Un M4A también: no hay imagen que
   quitar.
2. Al abrir el archivo, el menú de formato está en **MP3 · 320 kbps**. Cámbialo
   si quieres otro.
3. Haz clic en **Convertir a MP3**. La descarga empieza en tu equipo.

![La página de MP4 a MP3 antes de abrir un archivo. Solo se ve la zona para soltar el video.](/guides-media/convert-video-to-mp3/es/drop.webp)

![Con el video abierto, el formato queda en MP3 · 320 kbps y el botón dice Convertir a MP3.](/guides-media/convert-video-to-mp3/es/ready.webp)

Debajo de la zona para soltar el archivo aparece «hasta cerca de una hora» y una
lista de formatos de audio. Esa frase es la misma en las otras herramientas.
Aquí, un video largo lo limita la memoria del equipo, no esa frase.

En el mismo menú está **WAV · sin pérdida**. Elige WAV si todavía vas a recortar
o a subir el volumen y quieres codificar el MP3 una sola vez, al final. Codificar
dos veces a MP3 es lo que quita detalle. [Extraer audio](/es/extract-audio) es
el mismo motor, con WAV ya elegido.

La resolución no cambia el tiempo. Un 4K y un video pequeño con la misma pista
tardan lo mismo, porque la imagen no se procesa. El límite es la memoria del
equipo, no un tope de megas de la página.

## Qué bitrate dejar

- **128 kbps** para voz: una clase, una reunión, una nota que alguien filmó. En
  música se oye, y se oye un poco apagada. Sirve cuando el archivo tiene que
  pesar poco.
- **192 kbps** para música que vas a escuchar de verdad. Con auriculares
  normales, casi nadie la distingue de una tasa más alta.
- **320 kbps** es lo que la página marca al abrir el archivo, y es el techo del
  MP3. Déjalo si la grabación está limpia, o si alguien te pidió «el mejor MP3».
  Sigue siendo con pérdida. Un concierto filmado con el micrófono del celular
  no se vuelve una toma de estudio por elegir 320.

## Cuando el navegador no puede

Funciona si el navegador ya puede reproducir el audio de ese archivo. En la
práctica: AAC dentro de MP4 y MOV, y Opus o Vorbis dentro de WebM. Chrome,
Firefox y Safari leen esos.

No funciona con pistas que el navegador no trae:

- **AC3 (Dolby Digital)**, habitual en DVD y en algunos MKV o MP4 descargados.
- **DTS**, el otro códec de cine en esos mismos discos.
- Un video que, abierto en una pestaña normal, enseña imagen y se queda en
  silencio. Esa pista no se puede leer aquí.

Una página que no sube el archivo no puede prometer todos los formatos. Para
esos casos, ffmpeg en tu propia computadora mantiene el archivo en casa y añade
los decodificadores. Un sitio que acepte la subida también sirve, si has
decidido que ese video puede salir de tu equipo.

El resultado es un audio normal. Se oye en el coche, en una app de pódcast o en
un altavoz que no abre videos. La imagen se descarta a propósito: esta
herramienta no vuelve a meter el sonido dentro de un MP4 nuevo.
