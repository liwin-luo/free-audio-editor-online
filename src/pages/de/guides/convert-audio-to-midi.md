---
title: Audio in MIDI umwandeln – ein Instrument, bis zu 3 Minuten
description: Melodie, Stimme oder Soloklavier im Browser in eine MIDI-Datei umwandeln. Was das Modell gut erkennt, was schiefgeht, und was in der .mid steckt. Kein Upload.
tool: audio-to-midi
locale: de
date: 2026-10-21
layout: ../../../layouts/Guide.astro
sources:
  - label: Basic Pitch — Spotifys Open-Source-Audio-zu-MIDI-Konverter
    url: https://basicpitch.spotify.com/
  - label: Bittner et al., A Lightweight Instrument-Agnostic Model for Polyphonic Note Transcription and Multipitch Estimation (ICASSP 2022)
    url: https://arxiv.org/abs/2203.09893
---

Audio in MIDI umwandeln heißt: eine Aufnahme zurück in Noten verwandeln. Tonhöhe, Start, Länge und Anschlagstärke jedes Tons. Mit diesen Noten in der DAW korrigierst du einen falschen Ton, tauschst das Instrument oder quantisierst das Timing, ohne neu aufzunehmen.

Die Seite [Audio zu MIDI](/de/audio-to-midi) macht das im Browser. Sie führt Spotifys Basic-Pitch-Modell auf deinem Gerät aus und schreibt eine .mid-Datei. Der Ton wird nicht hochgeladen.

## Was gut funktioniert und was nie geht

Basic Pitch ist für ein Instrument gleichzeitig gebaut: eine einzelne Melodiestimme, eine Gesangslinie, ein Soloklavier. Bekommt es das, kommen die Noten nah an deinem Spiel zurück.

Ein kompletter Mix ist eine andere Aufgabe. Das Modell hört alle Instrumente auf einem Kanal (Stereo wird vorher auf Mono heruntergemischt), darum wird eine dichte Aufnahme zu zusätzlichen oder fehlenden Noten. Schlagzeug hat keine Tonhöhe und ergibt meist nichts. Einen Stemsplit gibt es hier nicht: eine Datei rein, eine Notenspur raus.

Wenn du eigentlich nur Tonart und BPM suchst, brauchst du kein MIDI. [Tonart und BPM](/de/key-bpm-finder) liest beide Zahlen, ohne eine Datei zu schreiben.

## Die Datei umwandeln

1. Öffne [Audio zu MIDI](/de/audio-to-midi).
2. Lege eine Datei mit einem Instrument ab: MP3, WAV, M4A oder ein Video mit dem Teil, den du willst. Alles über 3 Minuten wird abgelehnt. Kürze zuerst im [Audio-Trimmer](/de/audio-trimmer), dann wandle um.
3. Die erste Umwandlung lädt das Modell von dieser Seite, unter 1 MB. Der Browser behält seine Kopie, die Wartezeit passiert einmal.
4. Lies die Notenanzahl vor dem Download. Eine gesummte Melodie sollte nahe der Zahl der Töne liegen, die du gesummt hast. Hunderte Noten für eine kurze Melodie bedeuten: mehr als ein Instrument in der Aufnahme, und die Datei wird ein Chaos.
5. Klicke auf Download, und die .mid-Datei landet auf deinem Gerät.

Eine Hörprobe gibt es auf der Seite nicht. Die Noten stehen als Textliste; zum ersten Mal hörst du sie in der DAW. Läuft in aktuellen Chrome-, Edge-, Firefox- und Safari-Versionen; auf einem Handy mit wenig Speicher kann die Umwandlung scheitern, ein kürzerer Clip geht dann meist durch.

## Was in der .mid-Datei steckt

Eine Spur, MIDI Typ 0. Jede Note trägt eine Tonhöhe zwischen 21 und 108 (A0 bis C8 auf der Klaviatur), einen Start, eine Länge und eine Anschlagstärke. Die Tempoangabe ist 120 BPM. Sie sorgt dafür, dass die Notenzeiten mit den Sekunden der Aufnahme übereinstimmen. Dieses 120 ist nicht das Tempo deines Songs.

Die Spur beginnt mit einem General-MIDI-Klavier, damit die DAW beim Import etwas zum Abspielen hat. Es ist keine Aufnahme deines Originalinstruments; tausche den Sound, nachdem die Datei gelandet ist.

Zwei Dinge stecken nicht in der Datei: Pitch-Bends, dadurch wird ein gesungener Slide zu einem geraden Ton auf der Endhöhe; und Notenschrift. Diese Seite erzeugt kein Notenblatt.

## Nach dem Download

Zieh die .mid in GarageBand, Logic, Ableton oder jede DAW, die MIDI liest. Die üblichen nächsten Schritte: das General-MIDI-Klavier gegen einen echten Instrumentsound tauschen, die ein, zwei verhörten Noten korrigieren und quantisieren, wenn das Timing driftet.

Ist die Aufnahme gut und nur die Tonart falsch, ändert der [Tonhöhen-Regler](/de/pitch-changer) die Tonhöhe des Originaltons, ganz ohne Noten.

Wenn du Logic nutzt und nach dessen eingebautem Audio-zu-MIDI-Befehl gesucht hast: Diese Seite ist die Browser-Version, für den Fall, dass Logic nicht offen ist. Die geschriebene Datei lässt sich danach wie jede andere MIDI-Region in ein Logic-Projekt ziehen.

## Häufige Fehler

**Einen ganzen Song umwandeln und getrennte Spuren erwarten.** Die Ausgabe ist eine Spur Noten, gespielt vom ganzen Mix. Stems sind ein anderes Werkzeug.

**Das Ergebnis nur nach Gehör bewerten.** Die Notenanzahl auf der Seite ist die schnelle Qualitätsprüfung. Eine unsinnige Zahl heißt unsinnige Datei.

**Eine Neuaufnahme der Boxen einspeisen.** Eine Handy-Aufnahme des Lieds im Raum nimmt den Raum mit, und beide Quellen werden transkribiert. Wandle die Audiodatei selbst um, nicht ihre Neuaufnahme.

**Das Songtempo in der Datei erwarten.** Die 120-BPM-Angabe existiert, damit die Notenzeiten zu den Sekunden der Aufnahme passen. Der Klick der DAW folgt dem Song nicht; lies das echte Tempo zuerst mit [Tonart und BPM](/de/key-bpm-finder).
