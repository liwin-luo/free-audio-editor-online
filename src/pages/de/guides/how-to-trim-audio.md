---
title: Audio schneiden — eine Stelle behalten
description: Behalte ein Stück einer Sprachnotiz oder eines Podcasts und wirf den Rest weg. Eine Datei pro Export. Nichts wird hochgeladen.
tool: audio-trimmer
locale: de
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

Audio schneiden heißt hier: ein Stück der Aufnahme behalten und den Rest
wegwerfen. Die Pause vor einer Sprachnotiz, die Luft nach einer Podcast-Antwort,
der Teil einer Besprechung, den du wirklich schicken musst.

Ein Song ist eine andere Entscheidung. Dieselben Griffe, aber du suchst den
Refrain, nicht eine Antwort. Dafür ist der [MP3-Cutter](/de/mp3-cutter).

## Was du brauchst

- Die Datei. MP3, WAV, M4A, FLAC und OGG gehen auf, wenn der Browser sie schon
  abspielen kann.
- Den [Audio-Trimmer](/de/audio-trimmer). Er läuft im Tab. Es gibt keinen Upload.
- Ungefähr eine Minute.

## So schneidest du

Zieh die Datei auf den Trimmer, oder klick zum Auswählen. Die Wellenform kommt
sofort. Es gibt keinen Fortschrittsbalken, weil die Datei das Gerät nicht
verlässt.

Zieh über die Wellenform, um den Bereich zu markieren. Die Zeit unter dem
Play-Knopf zeigt die Position auf eine Hundertstelsekunde. Wenn der Zug zu grob
ist, öffne **Genaue Zeiten** und tipp Start und Ende in Sekunden.

Play spielt nur die Auswahl, nicht die ganze Datei. Schieb die Griffe, bis der
Start auf dem ersten Wort liegt und das Ende nach dem letzten, nicht mitten im
Wort.

## Behalten oder löschen

- **Auswahl behalten.** Der Export ist nur das Markierte. Eine Sprachnotiz auf
  den Satz kürzen, eine Antwort aus einer langen Aufnahme holen.
- **Auswahl löschen.** Der Export ist alles außer dem Markierten. Die Pause am
  Anfang weg, oder ein Loch in der Mitte. Die beiden Seiten stoßen hart
  aneinander.

Ein Export ist eine Datei. Drei Clips heißen dreimal auswählen und dreimal
exportieren.

**Einblenden** und **Ausblenden** unter **Anpassen** glätten nur den Anfang und
das Ende dessen, was du exportierst. Sie überblenden nicht die Naht, an der
eine gelöschte Pause zusammenwächst. Die Naht bleibt ein harter Schnitt. Wenn
es knackt, exportiere die beiden Stücke getrennt und füg sie im
[Audio-Joiner](/de/audio-joiner) mit einem kurzen Crossfade zusammen.

Für einen einzelnen Clip reichen 0,1 bis 0,3 Sekunden, damit er nicht mit einem
Knacksen anfängt. Das Ende eines Songs gehört in den
[MP3-Cutter](/de/mp3-cutter).

## Export

Der Trimmer startet mit **MP3 · 192 kbps**. Änder das im Formatmenü, bevor du
**Exportieren** klickst.

- **128 kbps** reicht für Sprache. Musik klingt hier schon dumpf.
- **192 kbps** ist der passende Wert für eine gemischte Datei, die du einmal
  verschickst.
- **WAV** ist 16-Bit-PCM mit der Abtastrate der Datei selbst. Nimm das, wenn du
  noch einmal schneidest. Jeder weitere MP3-Export wirft noch ein bisschen
  Detail weg.

Der Download startet im Browser. Die Originaldatei auf der Festplatte bleibt.

## Auf dem Handy

Dieselbe Seite läuft in Safari und Chrome. Die Wellenform nimmt den Finger, der
Export bleibt unten. Eine lange Aufnahme begrenzt der Speicher des Handys, nicht
ein Konto. Auf einem aktuellen Laptop geht etwa eine Stunde. Auf dem Handy
weniger.

## Was Schneiden nicht repariert

Schneiden nimmt Zeit weg. Es nimmt kein Rauschen weg, trennt keine Stimme von
der Musik und macht eine durchgehend leise Aufnahme nicht laut. Die Lautstärke
unter **Anpassen** geht von 10 % bis 200 %. Eine Aufnahme, die überall leise
ist, braucht [MP3 lauter machen](/de/increase-volume) (bis 400 %, mit Limiter)
oder den [Audio-Normalizer](/de/normalize-audio), der den höchsten Peak knapp
unter die Übersteuerung hebt.

Wenn der nächste Schritt ein Song ist, wechsel zum [MP3-Cutter](/de/mp3-cutter).
Welche Seite welchen Job macht, steht in
[MP3 bearbeiten](/de/guides/how-to-edit-an-mp3).
