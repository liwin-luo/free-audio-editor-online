---
title: WhatsApp-Sprachnachricht als MP3 verschicken
description: Opus-Sprachnachricht oder iPhone-M4A in MP3 wandeln, die Stelle schneiden und weiterleiten. Nichts wird hochgeladen.
tool: opus-to-mp3
locale: de
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Eine WhatsApp-Sprachnachricht und eine iPhone-Sprachmemo sind zwei verschiedene
Dateien. Die erste ist oft Opus. Die zweite ist meist eine M4A mit AAC. Beide
lassen sich im Browser in eine MP3 verwandeln, die ein normaler Player öffnet.
Die Datei wird dabei nicht hochgeladen.

Die ganze Datei nur dann umwandeln, wenn der Empfänger Opus oder M4A nicht
abspielt. Wenn du nur eine Stelle brauchst und der Browser die Datei schon
abspielt, schneidest du direkt im [Audio-Trimmer](/de/audio-trimmer) und
exportierst einmal als MP3. Zweimal nach MP3 zu kodieren kostet Details, die
du nicht zurückbekommst.

Die Bilder unten sind eine kurze Testaufnahme, kein echtes Chat-Protokoll.

## Welche Datei du in der Hand hast

[Opus](https://opus-codec.org/) ist der Codec aus
[RFC 6716](https://www.rfc-editor.org/rfc/rfc6716). WhatsApp- und
Telegram-Sprachnachrichten liegen oft als `.opus` vor, oder als Opus in OGG
oder WebM. Wenn du diese Datei schon auf dem Gerät hast, gehört sie auf
[Opus in MP3 umwandeln](/de/opus-to-mp3).

Eine Sprachmemo vom iPhone ist etwas anderes. In der App Sprachmemos teilst du
die Aufnahme und wählst die Variante, die alle Ebenen zu einer einzelnen
`.m4a` mischt. Apple beschreibt den Weg unter
[Aufnahme teilen](https://support.apple.com/guide/iphone/share-a-recording-iph3d6dc359/ios).
Diese Datei gehört auf [M4A in MP3](/de/m4a-to-mp3). Ein Video im MP4-Format
gehört nicht hierher. Dafür gibt es
[MP4 in MP3 umwandeln](/de/guides/convert-video-to-mp3).

Bleibt die Datei in einem normalen Browser-Tab stumm, kann die Seite sie auch
nicht lesen. Apple Lossless in einer M4A dekodiert der Browser oft nicht. Dann
zuerst auf dem Gerät in AAC oder WAV wandeln, und danach hierher.

## Sprache mit 128 kbps

Für eine Sprachnachricht reichen **128 kbps**. 192 oder 320 kbps sind für
Musik. Die MP3 bleibt verlustbehaftet. Das Opus-Original behältst du, wenn du
die Quelle noch brauchst.

![sprachnachricht.opus ist offen. Das Format steht auf MP3 · 128 kbps, der Knopf heißt In MP3 umwandeln.](/guides-media/sprachnachricht-als-mp3/01-opus.webp)

Dieselbe Wahl auf der M4A-Seite. Der Knopf heißt auch dort **In MP3 umwandeln**.

![sprachmemo.m4a ist offen. Das Format steht auf MP3 · 128 kbps, der Knopf heißt In MP3 umwandeln.](/guides-media/sprachnachricht-als-mp3/02-m4a.webp)

Titel, Interpret und Cover werden nicht mitkopiert. Die MP3 kommt ohne diese
Felder an. Namen setzt du danach im [MP3-Tag-Editor](/de/mp3-tag-editor). Der
ändert die Tags und lässt die Audio-Bytes in Ruhe, also keine zweite
Kodierung.

Wenn du nach der Umwandlung noch schneiden willst, nimm im Formatmenü
**WAV · verlustfrei**. Die MP3 kodierst du einmal, ganz am Ende.

## Nur die Antwort behalten

Öffne die Datei im [Audio-Trimmer](/de/audio-trimmer). Zieh auf der Wellenform
über die Stelle, die bleiben soll. **Auswahl behalten** exportiert nur dieses
Stück. **Auswahl löschen** wirft das markierte Stück weg und behält den Rest.
Eine Lücke in der Mitte wird hart zusammengefügt, ohne Überblendung.

![sprachnachricht.opus im Audio-Trimmer. Auswahl behalten ist aktiv, der markierte Bereich ist hervorgehoben, das Format ist MP3 · 128 kbps.](/guides-media/sprachnachricht-als-mp3/03-trim.webp)

Ein Export ist eine Datei. Drei Clips heißen dreimal auswählen und dreimal
exportieren. **Genaue Zeiten** nimmt Start und Ende in Sekunden, wenn der Zug
mit der Maus zu grob ist.

## Mehrere Nachrichten aneinander

Zwei oder mehr Dateien, in einer Reihenfolge, macht der
[Audio-Joiner](/de/audio-joiner). Gemischte Formate gehen. Die Überblendung
auf 0 lässt einen harten Schnitt. Ein kurzer Wert lässt das Ende der einen
Nachricht unter den Anfang der nächsten laufen. Für gesprochene Antworten ist
0 meistens richtig. Ein Lied, das in ein anderes übergehen soll, braucht die
Überblendung.

## Bevor du weiterleitest

Eine Stimme kann personenbezogene Daten sein. Was das bedeutet, steht in der
[DSGVO](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679).
Frag die Person, bevor du ihre Nachricht weitergibst. Dass die Bearbeitung auf
deinem Gerät bleibt, ändert nichts an dieser Frage.

Die praktische Grenze ist der Speicher im Tab, ungefähr eine Stunde auf einem
normalen Rechner. Ein Handy schafft weniger. Es gibt kein Tageslimit und kein
Wasserzeichen.
