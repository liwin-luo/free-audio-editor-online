---
title: Convertir audio a MIDI online - un instrumento, 3 minutos
description: Convierte una melodía tarareada, una voz o un piano solo en un archivo MIDI en tu navegador. Qué sale bien, qué no, y qué lleva el .mid. Sin subir nada.
tool: audio-to-midi
locale: es
date: 2026-10-21
layout: ../../../layouts/Guide.astro
sources:
  - label: Basic Pitch — el conversor de audio a MIDI de código abierto de Spotify
    url: https://basicpitch.spotify.com/
  - label: Bittner et al., A Lightweight Instrument-Agnostic Model for Polyphonic Note Transcription and Multipitch Estimation (ICASSP 2022)
    url: https://arxiv.org/abs/2203.09893
---

Convertir audio a MIDI es devolver una grabación a notas: el tono de cada nota, cuándo empieza, cuánto dura y con qué fuerza se tocó. Con esas notas en tu DAW puedes corregir una nota fallada, cambiar el instrumento o cuantizar el tiempo en vez de grabar otra toma.

La página de [Audio a MIDI](/es/audio-to-midi) lo hace en el navegador. Ejecuta el modelo Basic Pitch de Spotify en tu dispositivo y escribe un archivo .mid. El audio nunca se sube.

## Qué convierte bien y qué nunca

Basic Pitch está hecho para un instrumento a la vez: una melodía sola, una voz, un piano solo. Con eso, las notas vuelven parecidas a lo que tocaste.

Una mezcla completa es otro trabajo. El modelo oye todos los instrumentos en un canal (el estéreo se mezcla a mono antes), así que una grabación densa se convierte en notas de más o de menos. La batería no tiene tono y suele no dar nada. Aquí no hay separación de stems: entra un archivo, sale una pista de notas.

Si lo que querías era la tonalidad o el BPM, no necesitas MIDI. [Tonalidad y BPM](/es/key-bpm-finder) lee esos dos números sin escribir un archivo.

## Convierte el archivo

1. Abre [Audio a MIDI](/es/audio-to-midi).
2. Suelta un instrumento: un MP3, WAV, M4A o un video con la parte que quieres. Más de 3 minutos se rechaza. Recorta antes en [Recortar audio](/es/audio-trimmer) y vuelve.
3. La primera conversión descarga el modelo de este sitio, menos de 1 MB. El navegador guarda su copia, así que la espera ocurre una sola vez.
4. Mira el número de notas antes de descargar. Una melodía tarareada debería rondar las notas que cantaste. Cientos de notas en una melodía corta significan que la grabación tenía más de un instrumento, y el archivo saldrá hecho un desorden.
5. Pulsa descargar y el .mid se guarda en tu dispositivo.

No hay vista previa de audio en la página. Las notas se listan como texto; las oyes por primera vez en tu DAW. Funciona en Chrome, Edge, Firefox y Safari actuales; en un móvil con poca memoria la conversión puede fallar, y un clip más corto suele pasar.

## Qué lleva dentro el .mid

Una pista, MIDI tipo 0. Cada nota lleva un tono entre 21 y 108 (A0 a C8 de un piano), un inicio, una duración y una fuerza. La marca de tempo es 120 BPM: hace que los tiempos de las notas coincidan con los segundos de la grabación. Ese 120 no es el tempo de tu canción.

La pista empieza con un piano de General MIDI para que la DAW tenga un sonido al importar. No es una grabación de tu instrumento original; cambia el sonido cuando el archivo llegue.

Dos cosas no van dentro: pitch bends, así un glissando cantado llega como nota fija en el tono final; y partitura. Nada en este sitio produce partitura.

## Después de descargar

Arrastra el .mid a GarageBand, Logic, Ableton o cualquier DAW que lea MIDI. Los pasos de siempre: cambia el piano de General MIDI por un instrumento de verdad, corrige la nota o dos que el modelo entendió mal y cuantiza si el tiempo se va.

Si la toma está bien y solo la tonalidad está mal, cambiar el tono del audio original, sin notas de por medio, es el [Cambiador de tono](/es/pitch-changer).

Si usas Logic y buscabas su propio comando de audio a MIDI: esta página es la versión de navegador, para cuando Logic no está abierto. El archivo que escribe se arrastra después a un proyecto de Logic como cualquier región MIDI.

## Errores comunes

**Convertir una canción entera y esperar pistas separadas.** La salida es una pista de notas tocadas por toda la mezcla. Los stems son otra herramienta.

**Juzgar el resultado solo de oído.** El número de notas en la página es la revisión rápida de calidad. Un número absurdo, archivo absurdo.

**Meter una regrabación del altavoz.** Grabar la canción con el móvil en una habitación suma la habitación, y las dos fuentes se transcriben. Convierte el archivo de audio, no una regrabación.

**Esperar el tempo de la canción en el archivo.** La marca de 120 BPM existe para que los tiempos de las notas coincidan con los segundos. El clic de tu DAW no sigue la canción; lee el tempo real antes con [Tonalidad y BPM](/es/key-bpm-finder).
