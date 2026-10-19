---
title: Créer une sonnerie iPhone
description: Jusqu’à 40 secondes d’une chanson en M4R. Chrome, Edge et Safari 17 encodent sur l’appareil. Firefox exporte un MP3, GarageBand fait la sonnerie.
tool: ringtone-maker
locale: fr
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

L’iPhone veut une sonnerie en `.m4r`, plus courte qu’environ 40 secondes. Vous
construisez le clip dans le navigateur. GarageBand ne sert que si le navigateur
ne sait pas encoder l’AAC.

## Construire le clip

Ouvrez le [créateur de sonneries](/fr/ringtone-maker) et déposez la chanson.
MP3, M4A ou WAV, ce que vous avez.

1. Glissez sur la forme d’onde. En général le hook, le drop, ou les quinze
   premières secondes du refrain.
2. La sélection s’arrête à **40 secondes**. Plus court convient, et c’est
   souvent mieux. La plupart des appels sont décrochés en moins de 15 secondes.
3. Dans **Ajuster**, un court **fondu de sortie**, 0,5 à 1 seconde. Une
   sonnerie boucle. Le fondu rend le retour au début moins sec.
4. Dans le menu de format, **M4R · sonnerie iPhone**, puis **Exporter**. Chrome,
   Edge et Safari 17 ou plus récent encodent le M4R sur l’appareil. Le
   téléchargement démarre tout de suite.

Rien n’a été téléversé. Si M4R n’est pas dans le menu, le navigateur n’encode
pas l’AAC. Ce sont Firefox et Safari avant la version 17. Exportez alors un MP3
et passez par GarageBand, plus bas.

## Mettre le M4R sur l’iPhone

1. Sur Mac : branchez l’iPhone et glissez le `.m4r` sur l’appareil dans le
   Finder.
2. Sous Windows : la même chose dans **iTunes**. Glissez sur l’entrée de
   l’appareil, pas dans la bibliothèque Musique.
3. Avec l’iPhone seul : importez le fichier dans GarageBand, créez un projet,
   importez depuis Fichiers, touchez **partager** et choisissez **Sonnerie**.
4. La sonnerie est dans **Réglages → Sons et vibrations → Sonnerie**.

## Si vous n’avez qu’un MP3

Seulement pour Firefox et un Safari plus ancien :

1. Ouvrez **GarageBand** sur l’iPhone. Il est gratuit, fourni par Apple.
2. Créez un projet avec **Audio Recorder** ou **Tracks** et importez le MP3
   exporté dans la timeline.
3. Raccourcissez si besoin, puis **partager** et **Sonnerie**.
4. iOS range le son dans **Réglages → Sons et vibrations → Sonnerie**.

Si GarageBand se plaint de la durée, l’export de l’étape 1 dépassait
40 secondes. Réexportez un clip plus court.

## Android

Android prend un MP3 ordinaire. Déplacez le fichier sur le téléphone, puis
**Paramètres → Son → Sonnerie du téléphone**, ou un appui long sur le fichier
pour le définir comme sonnerie. La même page, format laissé sur MP3.

## Quand ça coince

**La sonnerie n’apparaît pas dans Réglages.** Elle est arrivée comme une
chanson, pas comme une sonnerie. Le fichier doit être un vrai `.m4r`, exporté
avec l’option M4R, pas un MP3 renommé. Glissez-le sur l’appareil, pas dans la
bibliothèque Musique.

**Elle joue, mais les appels restent muets.** Vérifiez le **bouton silencieux**
et le **volume de sonnerie** séparé dans Sons et vibrations. Il est indépendant
du volume des médias.

**La boucle clique.** La fin tombe au milieu de la forme d’onde. Réexportez
avec un fondu de sortie de 0,5 seconde.

La page n’a pas de filigrane, pas de compte et pas de limite d’export, parce que
le son ne touche aucun serveur. GarageBand est gratuit aussi.
