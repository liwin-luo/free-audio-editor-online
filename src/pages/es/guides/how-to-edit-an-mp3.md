---
title: Cómo editar un archivo MP3 en el navegador
description: Corta, recorta, funde o sube un MP3 sin instalar nada. Qué página hace cada trabajo, y cuándo exportar WAV para no recodificar dos veces.
tool: mp3-editor
locale: es
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Editar un MP3 suele ser un trabajo de una lista corta: cortar un tramo,
quitar un silencio, fundir un borde, subirlo, cambiar la velocidad, o
corregir el título que muestra el reproductor. Cada uno de esos ya tiene
página. Esta es el mapa, para no decodificar y volver a codificar el archivo
tres veces en el camino.

El [editor de MP3](/es/mp3-editor) es el caso general. Sueltas el archivo,
haces la edición y exportas una vez. El original se queda en el disco. El
archivo nuevo es la descarga.

## Elige el trabajo

| Quieres… | Ve aquí |
|---|---|
| Recortar una nota de voz o quitar un silencio | [Recortar audio](/es/guides/how-to-trim-audio) |
| Dejar un estribillo, o borrar un trozo de una canción | [Cortador de MP3](/es/mp3-cutter) |
| Poner varios archivos uno detrás de otro | [Unir canciones](/es/audio-joiner) |
| Mover la tonalidad y conservar la duración | [Cambiar el tono sin cambiar la velocidad](/es/guides/change-pitch-without-changing-speed) |
| Reproducirlo más rápido o más lento, tono incluido | [Cambiar velocidad del audio](/es/change-audio-speed) |
| Editar un WAV antes de convertirlo | [Editar un archivo WAV](/es/guides/how-to-edit-a-wav-file) |
| Corregir el título, el artista o la portada | [Editor de etiquetas MP3](/es/mp3-tag-editor) |

Si el trabajo son dos o tres cosas pequeñas —un corte, un fundido, un poco de
volumen— hazlas en el editor de MP3 y exporta una vez. Abrir una página nueva
por cada control significa un MP3 nuevo cada vez.

## Edita de una pasada

Suelta el MP3 en el [editor](/es/mp3-editor). La forma de onda es el archivo,
decodificado en la pestaña.

Arrastra una zona. **Conservar selección** exporta solo esa parte.
**Eliminar selección** exporta todo lo demás. **Tiempos exactos** toma un
inicio y un fin en segundos cuando el arrastre no alcanza.

![song-demo.mp3 en el editor de MP3. Conservar selección está activo, hay una zona resaltada, y el formato es MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/es-01-editor.webp)

Abre **Ajustar** para el resto:

- **Fundido de entrada** y **Fundido de salida**, hasta 5 segundos. Dan forma
  al principio y al final de la exportación. No funden una unión en el medio
  del archivo.
- **Volumen**, del 10% al 200%. Un limitador agarra los picos cuando pasas de
  100%, así que una subida modesta se queda más limpia que un recorte duro.
  Igual va a sonar forzado si el archivo ya estaba alto.
- **Velocidad**, de 0,5× a 2×. El tono se va con ella. Esto no conserva el
  tono al cambiar el tiempo. Para cambiar la tonalidad y dejar la duración,
  usa el [cambiador de tono](/es/pitch-changer) en lugar de este control.
- **Normalizar el pico** sube todo el archivo en una sola cantidad, hasta que
  la muestra más alta queda justo debajo del recorte. Anula el control de
  volumen. No hace que las partes bajas suenen tan fuerte como las altas.
- **Reproducir al revés** da la vuelta a la exportación, del final al
  principio.

![Ajustar abierto: fundido de entrada y de salida en 0.0 s, volumen al 100%, velocidad en 1.00×, normalizar el pico sin marcar, reproducir al revés sin marcar. El formato sigue en MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/es-02-adjust.webp)

Reproduce la selección antes de exportar. Después elige el formato.

**MP3 320 kbps** es el valor por defecto del editor, y la opción correcta
cuando esta exportación es el archivo que te vas a quedar. **192 kbps**
alcanza para enviar. **128 kbps** es para la voz. **WAV** es la opción cuando
esta edición no es la última.

## Volumen, sin adivinar

Un archivo que está bajo de punta a punta tiene dos arreglos honestos, y no
son el mismo control.

[Normalizar audio](/es/normalize-audio) mide el pico y aplica la mayor ganancia
limpia que todavía evita el recorte. Úsalo cuando no sabes cuánto empujar.

[Subir volumen de MP3](/es/increase-volume) es un multiplicador que eliges tú,
hasta el 400%, con un limitador en los picos. El volumen del propio editor se
detiene en 200%. Usa la página dedicada cuando 200% no alcanza. Baja un poco
si las partes altas empiezan a bombear. Alto y limpio es mejor que el máximo.

Ninguno de los dos es igualar el volumen para plataformas de streaming. Eso
es un promedio más largo, medido en LUFS, y pertenece a una sesión de
masterización.

## El sonido y la ficha van aparte

Cortar, fundir y subir decodifican el MP3 y escriben uno nuevo. El título, el
artista, el álbum y la portada no son el sonido. Viven en un bloque de
etiquetas, y el [editor de etiquetas](/es/mp3-tag-editor) reescribe ese bloque
sin tocar los bytes de audio. Primero edita el sonido. Etiqueta el archivo que
sí te vas a quedar. Etiquetar primero y luego exportar un MP3 nuevo tira las
etiquetas en el camino.

El editor de etiquetas es solo MP3. No procesa un álbum por lotes, y no
conserva campos raros de capítulos de podcast.

## Lo que este editor no hace

No apila dos pistas para mezclarlas. [Unir canciones](/es/audio-joiner) pone
los archivos uno detrás de otro y puede fundir el solape. No te da dos
faders a la vez.

No quita una voz, no toma una huella de ruido y no parte una canción en
stems. Una página del navegador que prometiera eso estaría describiendo otro
producto. Para una línea de tiempo, una reparación o una segunda pista, un
editor de escritorio sigue siendo la herramienta. Quédate aquí cuando el
trabajo es un archivo y una exportación.
