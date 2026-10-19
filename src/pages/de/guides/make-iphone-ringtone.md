---
title: Klingelton fürs iPhone erstellen
description: Bis zu 40 Sekunden eines Songs als M4R. Chrome, Edge und Safari 17 kodieren auf dem Gerät. Firefox exportiert MP3, GarageBand macht den Rest.
tool: ringtone-maker
locale: de
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

Ein iPhone nimmt als Klingelton eine `.m4r`-Datei, kürzer als etwa 40 Sekunden.
Den Clip baust du im Browser. GarageBand brauchst du nur, wenn der Browser kein
AAC kodieren kann.

## Den Clip bauen

Öffne [Klingelton erstellen](/de/ringtone-maker) und leg den Song ab. MP3, M4A
oder WAV, was du hast.

1. Zieh über die Wellenform. Meist der Hook, der Drop oder die ersten fünfzehn
   Sekunden des Refrains.
2. Die Auswahl stoppt bei **40 Sekunden**. Kürzer ist in Ordnung und oft besser.
   Die meisten Anrufe werden innerhalb von 15 Sekunden angenommen.
3. Unter **Anpassen** ein kurzes **Ausblenden**, 0,5 bis 1 Sekunde. Klingeltöne
   laufen in einer Schleife. Die Blende macht den Sprung zurück zum Anfang
   weniger hart.
4. Im Formatmenü **M4R · iPhone-Klingelton**, dann **Exportieren**. Chrome, Edge
   und Safari 17 oder neuer kodieren die M4R auf dem Gerät. Der Download startet
   sofort.

Nichts wurde hochgeladen. Steht M4R nicht im Menü, kann der Browser kein AAC
kodieren. Das sind Firefox und Safari vor Version 17. Exportiere dann MP3 und
nimm den Weg über GarageBand unten.

## Die M4R aufs iPhone

1. Am Mac: iPhone anschließen und die `.m4r` im Finder auf das Gerät ziehen.
2. Unter Windows: dasselbe in **iTunes**. Auf den Geräteeintrag ziehen, nicht
   in die Musikmediathek.
3. Nur mit dem iPhone: die Datei in GarageBand holen, ein Projekt anlegen, aus
   Dateien importieren, **Teilen** und **Klingelton** wählen.
4. Der Ton liegt unter **Einstellungen → Töne & Haptik → Klingelton**.

## Wenn nur eine MP3 rauskam

Nur nötig bei Firefox und älterem Safari:

1. **GarageBand** auf dem iPhone öffnen. Es ist von Apple und kostenlos.
2. Ein Projekt mit **Audio Recorder** oder **Tracks** anlegen und die MP3 in
   die Timeline holen.
3. Wenn nötig kürzen, dann **Teilen** und **Klingelton**.
4. iOS legt den Ton unter **Einstellungen → Töne & Haptik → Klingelton** ab.

Meckert GarageBand über die Länge, war der Export aus Schritt 1 länger als
40 Sekunden. Nochmal kürzer exportieren.

## Android

Android nimmt eine normale MP3. Datei aufs Telefon, dann **Einstellungen →
Töne → Klingelton**, oder die Datei lange drücken und als Klingelton setzen.
Dieselbe Seite, Format auf MP3 lassen.

## Wenn es hakt

**Der Ton fehlt in den Einstellungen.** Er ist als Song gelandet, nicht als
Klingelton. Die Datei muss eine echte `.m4r` sein, exportiert mit der
M4R-Option, keine umbenannte MP3. Auf das Gerät ziehen, nicht in die
Musikmediathek.

**Er spielt, aber Anrufe bleiben stumm.** Den **Stumm-Schalter** und die
eigene **Klingeltonlautstärke** unter Töne & Haptik prüfen. Die ist unabhängig
von der Medienlautstärke.

**Die Schleife knackst.** Das Ende liegt mitten in der Welle. Nochmal
exportieren, mit 0,5 Sekunden Ausblenden.

Die Seite hat kein Wasserzeichen, kein Konto und kein Exportlimit, weil der Ton
keinen Server berührt. GarageBand ist ebenfalls kostenlos.
