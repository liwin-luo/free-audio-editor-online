---
title: Cómo convertir archivos OGG a MP3 en el navegador
description: Pasa un archivo OGG a MP3 sin subirlo. Qué hay dentro (Vorbis u Opus), qué bitrate elegir y cuándo Safari no puede decodificarlo.
tool: ogg-to-mp3
locale: es
date: 2026-10-14
layout: ../../../layouts/Guide.astro
---

Convertir archivos OGG a MP3 es sacar el audio del contenedor y guardarlo como
un archivo que suena en el coche, en el teléfono o en un altavoz viejo. El
convertidor de siempre lo hace subiendo el archivo. Una clase, una nota de voz
o un tema que todavía no publicas no tiene que salir de tu equipo. El navegador
que ya tienes puede decodificar el OGG y codificar el MP3 solo.

## Qué es un archivo OGG

OGG es un contenedor, no un único códec. Al abrirlo hay una de dos cosas:

- **Vorbis**, el códec de casi toda la música en `.ogg`.
- **Opus**, el códec de algunas grabaciones de voz nuevas y de unas pocas
  descargas de música.

La extensión no dice cuál es. Chrome y Firefox reproducen los dos. Safari
reproduce Opus y muchas veces se queda en silencio con Vorbis. Ese límite es
del decodificador del navegador. Una página que no sube el archivo no puede
inventar un decodificador que el navegador no trae.

Un archivo que se llama `.opus` es otro trabajo. Para eso está el
[convertidor de Opus a MP3](/es/opus-to-mp3). Esta página es para `.ogg` y
`.oga`.

## Haz la conversión

1. Abre el [convertidor de OGG a MP3](/es/ogg-to-mp3).
2. Suelta el archivo, o haz clic para elegirlo.
3. Elige un bitrate (abajo) y exporta. El MP3 se descarga en tu dispositivo. El
   OGG se queda donde estaba.

![La página de OGG a MP3 antes de abrir un archivo. La zona dice «Suelta un archivo OGG o haz clic para elegirlo», y el archivo se procesa en el dispositivo.](/guides-media/convert-ogg-to-mp3/es-01-drop.webp)

![clip.ogg abierto en el convertidor. El formato es MP3 · 320 kbps y el botón dice Convertir a MP3.](/guides-media/convert-ogg-to-mp3/es-02-ready.webp)

## Qué bitrate

Las tres tasas cubren el uso real. Pasado lo que se oye, un número más alto
solo hace un archivo más grande.

- **128 kbps** es la tasa correcta para voz: una nota, una reunión, una clase
  exportada como OGG. La música a 128 kbps se oye, y suena un poco apagada.
- **192 kbps** es el punto medio sensato para música que sí vas a escuchar.
- **320 kbps** es el tope del MP3. Úsalo cuando el OGG es una grabación limpia
  y quieres el menor compromiso. Sigue teniendo pérdida. Si el siguiente paso
  es seguir editando, exporta WAV en otra herramienta y codifica el MP3 una
  sola vez, al final.

Vorbis y Opus ya tenían pérdida. Convertirlos no devuelve el detalle que la
codificación original tiró. 320 kbps solo describe el MP3.

## Cuando el navegador no puede decodificarlo

Prueba a reproducir el archivo en una pestaña normal. Si se oye, esta
conversión va a funcionar. Si la pestaña se queda en silencio:

- **Vorbis en Safari.** Pasa a Chrome o Firefox, o convierte en un equipo que
  tenga uno de los dos.
- Un archivo dañado, o un OGG que no es audio. Esta página no saca la pista de
  un contenedor raro. Para MP4, WebM y MOV, usa el
  [convertidor de MP4 a MP3](/es/mp4-to-mp3).

No hay una promesa honesta de «todos los OGG» en una página que no va a subir
el archivo. Para los que el navegador rechaza, ffmpeg en tu propio equipo
conserva la misma privacidad y añade el decodificador que falta.

## Cuando ya tienes el MP3

El resultado es un archivo de audio normal.

- Corta un tramo con el [cortador de MP3](/es/mp3-cutter).
- Si todo se grabó bajo, [normalízalo](/es/normalize-audio) para que el pico
  quede justo debajo del recorte.

Las etiquetas y la portada no se copian. El MP3 se escribe sin metadatos.
Vuelve a ponerlas después con cualquier editor de etiquetas si las necesitas.
