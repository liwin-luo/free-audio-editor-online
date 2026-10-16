---
title: Cómo editar un archivo WAV en el navegador
description: Recorta y edita un WAV antes de convertirlo. Cuándo quedarte en PCM de 16 bits, cuándo basta un MP3 a 320 kbps, y por qué pasar de MP3 a WAV no devuelve calidad.
tool: mp3-editor
locale: es
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Un archivo WAV es el audio con la compresión del MP3 todavía apagada. Puedes
recortarlo, fundirlo y cambiar su nivel en el navegador sin convertirlo a MP3
antes. Para un corte, un fundido o un cambio de nivel, instalar un editor de
WAV es más herramienta de la que el trabajo pide. Convierte una vez, al
final, si necesitas un archivo más pequeño para enviar.

Abrir un WAV en un convertidor y editar el MP3 después es el camino largo.
Cada corte posterior recodifica un archivo que ya perdió el detalle con el
que empezaste.

## Abre el WAV tal cual

Suelta el `.wav` en el [editor de MP3](/es/mp3-editor) o en el
[recortador de audio](/es/audio-trimmer). Los dos lo decodifican en la
pestaña. No hay un paso de conversión antes de la edición, y no se sube nada.

![voice-memo.wav abierto en el editor. El menú de formato está en WAV · sin pérdida, así que la exportación se queda en PCM y no se vuelve un MP3.](/guides-media/how-to-edit-a-wav-file/es-01-wav.webp)

Si la página rechaza el archivo, el navegador no pudo decodificar ese WAV. El
PCM estándar se abre. Una codificación rara que no suena en una pestaña
normal tampoco se abre aquí. Ese límite es el decodificador, no un tope de
tamaño.

Las ediciones son las mismas que en un MP3:

- Arrastra una zona. **Conservar selección** recorta hasta ella. **Eliminar
  selección** la quita. La guía para grabaciones es
  [cómo recortar audio](/es/guides/how-to-trim-audio).
- **Fundido de entrada** y **Fundido de salida** en **Ajustar** dan forma al
  principio y al final de la exportación, hasta 5 segundos.
- **Volumen** va del 10% al 200%. Una grabación de campo muy baja, que
  necesita más, va a [subir volumen de MP3](/es/increase-volume).
- **Velocidad** va de 0,5× a 2×, y el tono se va con el tempo. Para mover la
  tonalidad y conservar la duración, usa el
  [cambiador de tono](/es/pitch-changer).

Una exportación es un archivo. Acércate con el botón **+** y coloca el corte
en una pausa, no en medio de una palabra.

## Edita, y después decide el formato

**WAV** en el menú de formato es PCM de 16 bits a la frecuencia de muestreo
del propio archivo. Estéreo a 44,1 kHz son unos 10 MB por minuto. Una canción
de tres minutos son unos 30 MB. Ese tamaño es audio sin comprimir, no una
exportación inflada.

Usa WAV cuando:

- Vas a editar otra vez. Quedarte en PCM significa que el siguiente corte no
  suma otra generación de MP3.
- Alguien pidió WAV: un DAW, un sampler, un archivo de prensa.
- La fuente ya era de 16 bits y quieres la misma resolución de vuelta.

Un WAV de 24 bits o de 32 bits flotantes sale guardado a 16 bits. La página
no escribe un archivo de 24 bits. Si esa resolución extra es la razón por la
que tienes el WAV, haz el trabajo delicado en un editor de escritorio y
quédate con su exportación.

**MP3** es el archivo que envías.

- **320 kbps** es el punto en el que casi nadie oye la diferencia con el WAV
  en una escucha casual. Úsalo para la música que te quedas.
- **192 kbps** es el equilibrio de todos los días.
- **128 kbps** es para la voz. La música aquí suena apagada.

Un WAV de 50 MB cae alrededor de 4–5 MB a 192 kbps y alrededor de 11 MB a 320
kbps. El número exacto sigue la duración y la frecuencia de muestreo. La
conversión en sí es la página de
[WAV a MP3](/es/wav-to-mp3), y es el último paso correcto cuando la edición
ya está hecha.

Las etiquetas y la portada no se copian a ese MP3. Añádelas después con el
[editor de etiquetas](/es/mp3-tag-editor), que solo reescribe la ficha y deja
los bytes de audio quietos.

## De MP3 a WAV no da marcha atrás

Decodificar un MP3 a WAV te da exactamente lo que el MP3 ya contiene, como
PCM de 16 bits, sin más pérdida. No devuelve lo que el codificador del MP3
tiró. Desconfía de cualquier convertidor que prometa una subida de calidad.

El orden honesto, cuando todavía tienes el WAV, es: edita el WAV, exporta
MP3 una vez al final. El orden honesto, cuando solo tienes el MP3, es:
decodifica a WAV si una herramienta lo exige, edita ahí, y comprime una vez.
La página de [MP3 a WAV](/es/mp3-to-wav) es esa decodificación. No es un
remaster.

## Qué se queda en el equipo

El WAV original no se modifica. La descarga es un archivo nuevo. Si recargas
la pestaña, la sesión desaparece, y ese es el punto de no subirlo nunca. Una
laptop aguanta un tema de álbum o una nota de voz larga. Un archivo de
largometraje puede dejar la pestaña sin memoria. Ese es el momento de pasar
el mismo WAV a un editor de escritorio que lea desde el disco. Cuando el
archivo que envías es un MP3,
[cómo editar un archivo MP3](/es/guides/how-to-edit-an-mp3) es el mapa de qué
edición va en qué página.
