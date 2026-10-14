---
title: Cómo convertir Opus a MP3 en el navegador
description: Pasa un archivo Opus a MP3 sin subirlo. El formato de las notas de voz, qué bitrate elegir y qué archivos decodifica el navegador.
tool: opus-to-mp3
locale: es
date: 2026-10-14
layout: ../../../layouts/Guide.astro
---

Convertir Opus a MP3 es dejar una nota de voz, o una descarga en ese códec, en
un archivo que se reproduce en cualquier lado. Da igual si lo buscas como
convertidor de Opus a MP3, como conversor, o por el formato Opus: el trabajo es
el mismo. El archivo se decodifica en tu navegador y el MP3 se guarda en tu
dispositivo. No se sube a un servidor.

## Qué es el formato Opus

Opus es un códec, no una marca de archivo. Lo vas a encontrar de tres maneras:

- Un archivo **`.opus`**. Las notas de voz de WhatsApp y de Telegram suelen
  llegar así.
- **Opus dentro de OGG**. La extensión es `.ogg`, y el audio de dentro es Opus.
- **Opus dentro de WebM**. Pasa en grabaciones del navegador y en algunos
  videos.

Chrome, Firefox y Safari actual reproducen esos tres cuando el archivo está
bien. Si una pestaña normal se queda en silencio, esta conversión tampoco puede
leerlo: el límite es el decodificador del navegador.

Si el archivo es `.ogg` y por dentro es Vorbis, no Opus, usa la página para
[convertir archivos OGG a MP3](/es/ogg-to-mp3). Vorbis en Safari falla a menudo.
Opus, no.

## Haz la conversión

1. Abre el [convertidor de Opus a MP3](/es/opus-to-mp3).
2. Suelta el `.opus`, o el OGG o WebM que traiga Opus.
3. Elige un bitrate y exporta. El MP3 se descarga solo.

## Qué bitrate

Opus ya es un formato con pérdida. El MP3 no recupera lo que la nota de voz
nunca guardó. Elige según lo que hay dentro, no según el nombre del códec.

- **128 kbps** basta para una nota de voz, una clase o una entrevista. La voz
  no necesita lo que necesita una canción.
- **192 kbps** es el punto medio si el Opus es música y la vas a escuchar de
  verdad.
- **320 kbps** es el tope del MP3. Úsalo cuando el original está limpio y
  quieres el menor compromiso. Sigue teniendo pérdida.

## Lo que esta página no hace

No pega un enlace y baja el audio de otra web. El archivo tiene que estar ya
en tu dispositivo: una nota que te enviaron, una grabación tuya, una descarga
que ya tienes.

Tampoco copia el título ni el artista. El MP3 sale sin metadatos. Si los
necesitas, los vuelves a poner con un editor de etiquetas.

## Cuando ya tienes el MP3

- Corta el tramo que quieres con el [cortador de MP3](/es/mp3-cutter).
- Si la nota se grabó baja, [normalízala](/es/normalize-audio) para que el pico
  quede justo debajo del recorte.

Si lo que tienes es un WAV, el camino es el
[convertidor de WAV a MP3](/es/wav-to-mp3). Es la misma idea, con otro archivo
de entrada.
