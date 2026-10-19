---
title: MP3 bearbeiten, einmal exportieren
description: Schneiden, blenden oder lauter machen, dann einmal speichern. Welche Seite welchen Job macht, und wann WAV die bessere Zwischenstufe ist.
tool: mp3-editor
locale: de
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

Eine MP3 zu bearbeiten heißt meistens eine Sache aus einer kurzen Liste: ein
Stück raus, eine Pause weg, eine Kante blenden, lauter machen, das Tempo
ändern, oder den Titel korrigieren, den der Player zeigt. Jede Sache hat schon
eine Seite. Diese hier ist die Karte, damit die Datei nicht dreimal dekodiert
und neu kodiert wird.

Der [MP3-Editor](/de/mp3-editor) ist der allgemeine Fall. Datei ablegen, die
Änderung machen, einmal exportieren. Das Original bleibt auf der Platte. Neu
ist der Download.

## Welcher Job

| Du willst | Geh hierhin |
|---|---|
| Eine Sprachnotiz kürzen oder eine Pause löschen | [Audio schneiden](/de/guides/how-to-trim-audio) |
| Mehrere Dateien hintereinander | [Zusammenfügen](/de/guides/merge-songs-one-track) |
| Die besten 40 Sekunden als Klingelton | [Klingelton erstellen](/de/guides/make-iphone-ringtone) |
| Schneller oder langsamer, Tonhöhe inklusive | [Audio-Geschwindigkeit ändern](/de/change-audio-speed) |
| Titel, Interpret oder Cover | [MP3-Tag-Editor](/de/mp3-tag-editor) |
| Die Tonspur aus einem Video | [MP4 in MP3](/de/guides/convert-video-to-mp3) |

Wenn der Job zwei oder drei kleine Dinge sind, ein Schnitt, eine Blende, etwas
Lautstärke, mach sie im MP3-Editor und exportiere einmal. Eine neue Seite pro
Regler heißt eine neue MP3-Kodierung pro Seite.

## In einem Durchgang

Leg die MP3 auf den [Editor](/de/mp3-editor). Die Wellenform ist die Datei,
dekodiert im Tab.

Zieh einen Bereich. **Auswahl behalten** exportiert nur den. **Auswahl löschen**
exportiert den Rest. **Genaue Zeiten** nimmt Start und Ende in Sekunden, wenn
der Zug nicht genau genug ist.

Unter **Anpassen** liegt der Rest:

- **Einblenden** und **Ausblenden**, bis 5 Sekunden. Sie formen Anfang und Ende
  des Exports. Sie überblenden keine Naht in der Mitte.
- **Lautstärke**, von 10 % bis 200 %. Über 100 % fängt ein Limiter die Peaks.
  Eine kleine Anhebung bleibt sauberer als hartes Clipping. War die Datei schon
  laut, klingt sie trotzdem gepresst.
- **Geschwindigkeit**, von 0,5× bis 2×. Die Tonhöhe geht mit. Das ist kein
  Time-Stretch, der die Tonart hält und nur die Länge ändert.
- **Peak normalisieren** hebt die ganze Datei um einen Betrag, bis die lauteste
  Stelle knapp unter der Übersteuerung sitzt. Es setzt den Lautstärkeregler
  außer Kraft. Es macht die leisen Stellen nicht so laut wie die lauten.
- **Rückwärts** dreht den Export von hinten nach vorn.

Hör die Auswahl an, bevor du exportierst. Dann das Format.

**MP3 · 320 kbps** ist die Vorgabe des Editors, und die richtige Wahl, wenn
dieser Export die Datei ist, die du behältst. **192 kbps** reicht zum
Verschicken. **128 kbps** ist für Sprache. **WAV**, wenn diese Bearbeitung
nicht die letzte ist.

## Laut, ohne zu raten

Eine Datei, die durchgehend leise ist, hat zwei ehrliche Wege. Es sind nicht
dieselben Regler.

[Audio-Normalizer](/de/normalize-audio) misst den Peak und legt die größte
saubere Verstärkung an, die noch nicht clippt. Nimm ihn, wenn du nicht weißt,
wie weit du gehen sollst.

[MP3 lauter machen](/de/increase-volume) ist ein Faktor, den du wählst, bis
400 %, mit Limiter auf den Peaks. Der Regler im Editor hört bei 200 % auf. Die
eigene Seite, wenn 200 % nicht reichen. Geh zurück, wenn die lauten Stellen zu
pumpen anfangen.

Keiner von beiden ist Lautheitsanpassung für Streaming. Das ist ein längerer
Mittelwert in LUFS, und das gehört in eine Mastering-Session.

## Ton und Beschriftung sind getrennt

Schneiden, blenden und lauter machen dekodieren die MP3 und schreiben eine neue.
Titel, Interpret, Album und Cover sind nicht der Ton. Sie stehen in einem
Tag-Block, und der [Tag-Editor](/de/mp3-tag-editor) schreibt den Block um, ohne
die Audio-Bytes anzufassen. Erst den Ton. Dann die Datei beschriften, die du
wirklich behältst. Erst beschriften und dann eine neue MP3 exportieren wirft die
Tags auf dem Weg raus.

Der Tag-Editor ist nur MP3. Er macht kein ganzes Album auf einmal und übernimmt
keine ungewöhnlichen Podcast-Kapitel.

## Was dieser Editor nicht tut

Er legt keine zwei Spuren übereinander. Der [Audio-Joiner](/de/audio-joiner)
setzt Dateien hintereinander und kann die Überlappung überblenden. Zwei Fader
gleichzeitig gibt es dort nicht.

Er entfernt keine Stimme, druckt kein Rauschprofil und zerlegt keinen Song in
Stems. Eine Browser-Seite, die das verspricht, beschreibt ein anderes Produkt.
