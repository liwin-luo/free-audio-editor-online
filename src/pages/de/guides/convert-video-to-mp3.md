---
title: MP4 in MP3 umwandeln — im Browser
description: Mach aus MP4, WebM oder MOV eine MP3, ohne das Video hochzuladen. Welche Bitrate, und wann AC3 oder DTS scheitern.
tool: mp4-to-mp3
locale: de
date: 2026-10-15
layout: ../../../layouts/Guide.astro
---

Eine Vorlesung oder ein Konzert, das du mit dem Handy gefilmt hast, ist groß,
weil Bild und Ton zusammen in der Datei stecken. Zum Hören im Auto oder bei
ausgeschaltetem Bildschirm reicht die Tonspur. MP4 in MP3 umwandeln heißt: die
Spur behalten und das Bild wegwerfen.

Der übliche Konverter schickt das ganze Video auf den Server von jemand
anderem. Bei ein paar hundert Megabyte dauert das, und die Datei liegt nicht
mehr nur bei dir. Der Browser, den du schon hast, liest die MP4 und speichert
die MP3 auf demselben Gerät.

## Was diese Seite macht

Öffne den [MP4-in-MP3-Konverter](/de/mp4-to-mp3). Er wandelt die ganze Spur um.
Er schneidet kein Stück aus dem Video. Wenn du nur eine Minute brauchst,
wandle zuerst um und bring die MP3 danach zum [Audio-Trimmer](/de/audio-trimmer).

Die Seite holt auch kein Video von YouTube, TikTok oder einer anderen Website.
Die Datei muss schon auf deinem Handy oder Rechner liegen.

Das Video wird nicht hochgeladen. Der Encoder (lamejs) wird mit dieser Seite
ausgeliefert und erst beim MP3-Export geladen. Deine Datei verlässt das Gerät
nicht.

## Die Schritte

1. Zieh die MP4 auf die Seite, oder klicke zum Auswählen. WebM und MOV mit einer
   normalen Audiospur gehen genauso. Eine M4A auch: da ist kein Bild, das weg
   muss.
2. Sobald die Datei offen ist, steht das Formatmenü auf **MP3 · 320 kbps**.
   Änder das, wenn du eine andere Rate willst.
3. Klicke auf **In MP3 umwandeln**. Der Download startet auf deinem Gerät.

![Die Seite MP4 in MP3, bevor eine Datei offen ist. Zu sehen ist nur die Fläche, auf die du das Video ziehst.](/guides-media/convert-video-to-mp3/de/drop.webp)

![Mit offenem Video steht das Format auf MP3 · 320 kbps, und der Knopf heißt In MP3 umwandeln.](/guides-media/convert-video-to-mp3/de/ready.webp)

Unter der Ablagefläche steht „bis etwa eine Stunde“ und eine Liste von
Audioformaten. Der Satz ist bei den anderen Werkzeugen derselbe. Hier begrenzt
ein langes Video der Speicher des Geräts, nicht dieser Satz.

Im selben Menü liegt **WAV · verlustfrei**. Nimm WAV, wenn du noch schneiden
oder lauter machen willst und die MP3 nur einmal, ganz am Ende, kodieren
möchtest. Zweimal nach MP3 zu kodieren ist der Schritt, der Details kostet.
[Audio extrahieren](/de/extract-audio) ist dieselbe Engine, mit WAV schon
ausgewählt.

Die Auflösung ändert die Dauer nicht. Ein 4K-Video und ein kleines Video mit
derselben Spur brauchen gleich lang, weil das Bild nicht verarbeitet wird. Die
Grenze ist der Speicher deines Geräts, nicht ein Megabyte-Limit der Seite.

## Welche Bitrate

- **128 kbps** für Sprache: Vorlesung, Besprechung, eine gefilmte
  Sprachnotiz. Musik ist hörbar und etwas dumpf. Nimm das, wenn die Datei klein
  bleiben muss.
- **192 kbps** für Musik, die du wirklich hörst. Mit normalen Kopfhörern
  unterscheidet das fast niemand von einer höheren Rate.
- **320 kbps** ist vorausgewählt, wenn die Datei aufgeht, und das ist die
  Obergrenze von MP3. Lass es so, wenn die Aufnahme sauber ist oder jemand
  „die beste MP3“ wollte. Sie bleibt verlustbehaftet. Ein Konzert, das das
  Handymikrofon aufgenommen hat, wird durch 320 kbps keine Studioaufnahme.

## Wenn der Browser nicht kann

Es klappt, wenn der Browser den Ton in dieser Datei schon abspielen kann. In
der Praxis: AAC in MP4 und MOV, Opus oder Vorbis in WebM. Chrome, Firefox und
Safari lesen die.

Es klappt nicht bei Spuren, für die der Browser keinen Decoder hat:

- **AC3 (Dolby Digital)**, üblich auf DVDs und in manchen heruntergeladenen MKV-
  oder MP4-Dateien.
- **DTS**, der andere Kinocodec auf denselben Discs.
- Ein Video, das in einem normalen Tab Bild zeigt und stumm bleibt. Diese Spur
  lässt sich hier nicht lesen.

Eine Seite, die nichts hochlädt, kann nicht jedes Format versprechen. Für diese
Dateien hält ffmpeg auf deinem eigenen Rechner die Datei zu Hause und bringt
die Decoder mit. Eine Website, die den Upload annimmt, geht auch, wenn du
entschieden hast, dass dieses Video dein Gerät verlassen darf.

Heraus kommt eine normale Audiodatei. Sie läuft im Auto, in einer Podcast-App
oder auf einem Lautsprecher, der keine Videos öffnet. Das Bild fällt absichtlich
weg: dieses Werkzeug legt den Ton nicht wieder in eine neue MP4.
