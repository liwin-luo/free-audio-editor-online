---
title: Cómo recortar audio online (gratis, sin subir)
description: Recorta una nota de voz, un podcast o una grabación en el navegador. Conserva un tramo o borra un silencio, y exporta MP3 o WAV. El archivo no se sube.
tool: audio-trimmer
locale: es
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Recortar audio es quedarte con un tramo de la grabación y tirar el resto: el
silencio antes de una nota de voz, el aire muerto después de una respuesta de
podcast, la parte de una reunión que sí tienes que enviar. Cortar, en este
caso, es la misma operación. Marcas la zona que se queda.

Eso no es lo mismo que dejar una canción en el estribillo. Los controles se
parecen. La decisión no. Para una canción, el
[cortador de MP3](/es/mp3-cutter) es la página.

## Qué necesitas

- El archivo. MP3, WAV, M4A, FLAC y OGG se abren si tu navegador ya los
  reproduce.
- El [recortador de audio](/es/audio-trimmer). Corre en la pestaña. No hay
  subida.
- Un minuto.

## Recorta el archivo

Suelta el archivo en el recortador, o haz clic para elegirlo. La forma de onda
aparece al momento. No hay barra de subida, porque el archivo no sale del
dispositivo.

![El recortador de audio antes de abrir un archivo. En pantalla solo está la zona para soltar el archivo.](/guides-media/how-to-trim-audio/es-01-drop.webp)

Arrastra sobre la forma de onda para marcar un tramo. El tiempo bajo el botón
de reproducir muestra tu posición a la centésima de segundo. Si el arrastre se
queda corto, abre **Tiempos exactos** y escribe el inicio y el fin en
segundos.

Pulsa reproducir. Suena la selección, no el archivo entero. Mueve los extremos
hasta que el inicio caiga en la primera palabra y el final después de la
última, no a la mitad de ninguna.

![Conservar selección está activo. La zona resaltada es la que se exporta, y el formato es MP3 · 192 kbps.](/guides-media/how-to-trim-audio/es-02-keep.webp)

## Conservar el tramo, o borrar un hueco

Dos modos, y cada uno responde a una frase distinta:

- **Conservar selección** — la exportación es solo lo resaltado. Sirve para
  dejar una nota de voz en lo importante, o para sacar una respuesta de una
  grabación larga.
- **Eliminar selección** — la exportación es todo menos lo resaltado. Sirve
  para quitar el silencio del principio, o una pausa en el medio. Un corte en
  el medio junta los dos lados con un corte seco.

![Eliminar selección está activo, y el silencio del principio es la zona resaltada. La exportación se queda con todo lo que queda fuera.](/guides-media/how-to-trim-audio/es-03-delete.webp)

Una exportación es un archivo. El recortador no parte una grabación en varias
descargas a la vez. Si necesitas tres clips, selecciónalos y expórtalos de uno
en uno.

Un fundido en **Ajustar** suaviza el principio y el final de lo que exportas.
No hace un fundido en el punto donde se juntan los dos lados de un hueco
borrado. Esa unión es un corte seco. Si hace clic, exporta las dos piezas por
separado y únelas con un crossfade corto en [unir canciones](/es/audio-joiner).

Para un solo tramo limpio, un fundido de 0,1–0,3 segundos basta para que el
clip no empiece ni termine en un clic. El final de una canción es otra
decisión, y se hace en el [cortador de MP3](/es/mp3-cutter).

## Exportar

El recortador arranca en **MP3 192 kbps**. Cámbialo en el menú de formato
antes de pulsar **Exportar**:

- **MP3 128 kbps** alcanza para la voz. La música aquí ya suena apagada.
- **MP3 192 kbps** es el valor justo para un archivo mixto que vas a enviar
  una vez.
- **WAV** es PCM de 16 bits a la frecuencia de muestreo del propio archivo.
  Úsalo si vas a editar otra vez. Exportar MP3 desde un MP3 tira un poco más
  de detalle en cada pasada.

La descarga empieza en el navegador. El archivo original en el disco no cambia.

## En el celular

La misma página funciona en Safari y Chrome del teléfono. La forma de onda
acepta el dedo, y la barra de exportar se queda abajo. Una grabación larga
está limitada por la memoria del teléfono, no por una cuenta. En una laptop
actual, cerca de una hora va bien. En el teléfono, menos.

## Lo que recortar no arregla

Recortar quita tiempo. No quita ruido, no separa una voz de la música y no
hace fuerte una toma que está baja de punta a punta. El volumen en **Ajustar**
va del 10% al 200%. Una grabación baja en todo el archivo necesita
[subir volumen de MP3](/es/increase-volume), que llega al 400% con un
limitador, o [normalizar audio](/es/normalize-audio), que sube el archivo
hasta que el pico más alto queda justo debajo del recorte.

Si el siguiente paso es una canción y no una grabación, pasa al
[cortador de MP3](/es/mp3-cutter). El mapa más amplio está en
[cómo editar un archivo MP3](/es/guides/how-to-edit-an-mp3).
