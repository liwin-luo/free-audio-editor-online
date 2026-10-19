---
title: Audiodateien zu einer Spur zusammenfügen
description: Songs, Sprachnotizen oder Podcast-Teile in eine Datei. Reihenfolge, Crossfade, Export als MP3 oder WAV. Nichts wird hochgeladen.
tool: audio-joiner
locale: de
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

Eine Datei lässt sich leichter abspielen und verschicken als ein Ordner voller
Clips. Ob Gym-Mix, Sprachnotizen oder Podcast-Kapitel: laden, sortieren,
entscheiden wie sie sich treffen, exportieren.

## Was zusammengeht

Der [Audio-Joiner](/de/audio-joiner) nimmt, was der Browser dekodieren kann:
MP3, WAV, M4A, FLAC, OGG. Unterschiedliche Abtastraten, etwa 44,1 kHz und
48 kHz, gleicht er beim Zusammenfügen an. Eine feste Spurzahl gibt es nicht.
Die Decke ist der Speicher des Geräts, weil alles lokal passiert.

## Laden und sortieren

Zieh zwei oder mehr Dateien auf den [Joiner](/de/audio-joiner), oder wähl
mehrere auf einmal. Jede Spur ist eine Zeile mit ihrer Dauer. Die Gesamtlänge
steht oben und ändert sich, wenn du die Liste änderst.

**Nach oben** und **Nach unten** setzen die Reihenfolge. Für einen Podcast ist
die zeitliche Ordnung die richtige. Der Joiner matcht kein Tempo und keine
Tonart. Eine Spur, die du doch nicht willst, entfernst du. Die Dauer rechnet
sich sofort neu.

Zu lang insgesamt? Erst im [Audio-Trimmer](/de/audio-trimmer) kürzen, dann
zusammenfügen. Eine Spur leiser als die anderen? Vorher mit
[MP3 lauter machen](/de/increase-volume) angleichen. Ein Regler über den ganzen
Mix ersetzt das nicht.

## Wie die Spuren sich treffen

- **Crossfade 0.** Spur B beginnt in dem Moment, in dem Spur A endet. Das willst
  du für Podcast-Kapitel und Archive, wo jeder Teil sauber anfangen soll.
- **Crossfade 2 bis 4 Sekunden.** Das Ende der einen Spur blendet unter den
  Anfang der nächsten. Ähnliches Tempo und ähnliche Tonart klingen dann
  durchgehend. Ab 5 Sekunden wird rhythmisches Material matschig. Ambient
  verträgt das längere Überblenden.
- **Einblenden / Ausblenden.** Getrennt vom Crossfade. Sie glätten nur den
  allerersten Anfang und das allerletzte Ende, damit die Datei nicht mit einem
  Knacksen startet oder stoppt.

## Export

Format wählen, dann **Zusammenfügen & exportieren**.

- **MP3 · 192 kbps** ist die Vorgabe und passt zum normalen Hören.
- **MP3 · 320 kbps**, wenn der Mix es wert ist oder du später noch schneidest.
- **WAV** ist verlustfrei. Größer, kein zusätzlicher Verlust, sinnvoll als
  Master.

Das Rendern passiert auf dem Gerät, grob eine Sekunde pro Spur. Der Download
startet danach. Hochgeladen wurde nichts, deshalb fühlt sich ein Zwei-Stunden-Set
nicht anders an als zwei Songs.

Einen Abschnitt rückwärts als Übergang will der [Reverse-Tool](/de/reverse-audio).
Das Ergebnis lässt sich danach wieder wie jede andere Datei umdrehen.
