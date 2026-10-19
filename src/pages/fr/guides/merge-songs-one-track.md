---
title: Fusionner plusieurs fichiers audio
description: Chansons, notes vocales ou chapitres de podcast en un seul fichier. Ordre, fondu enchaîné, export MP3 ou WAV. Rien n’est téléversé.
tool: audio-joiner
locale: fr
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

Un seul fichier se lit et s’envoie plus facilement qu’un dossier de clips. Mix
de salle, notes vocales ou chapitres de podcast : chargez, ordonnez, choisissez
comment ils se rencontrent, exportez.

## Ce qui se fusionne

La [fusion audio](/fr/audio-joiner) prend ce que le navigateur décode : MP3,
WAV, M4A, FLAC, OGG. Des taux différents, 44,1 kHz et 48 kHz par exemple, sont
alignés pendant la fusion. Il n’y a pas de nombre fixe de pistes. Le plafond
est la mémoire de l’appareil, parce que tout se fait sur place.

## Charger et ordonner

Déposez deux fichiers ou plus sur la [page de fusion](/fr/audio-joiner), ou
sélectionnez-en plusieurs d’un coup. Chaque piste est une ligne avec sa durée.
La durée totale est en haut et change quand vous modifiez la liste.

**Monter** et **Descendre** fixent l’ordre. Pour un podcast, l’ordre
chronologique est le bon. La page n’aligne ni le tempo ni la tonalité. Une
piste dont vous ne voulez plus se retire. La durée se recalcule tout de suite.

Trop long dans l’ensemble ? Coupez d’abord avec le
[coupeur audio](/fr/audio-trimmer), puis fusionnez. Une piste plus basse que
les autres ? Égalisez-la avant, avec
[augmenter le volume MP3](/fr/increase-volume). Un seul volume sur le mix entier
ne remplace pas ça.

## Comment les pistes se rencontrent

- **Fondu enchaîné à 0.** La piste B commence à l’instant où A finit. C’est ce
  qu’il faut pour des chapitres de podcast et des archives, où chaque partie
  doit démarrer net.
- **Fondu enchaîné de 2 à 4 secondes.** La fin de l’une passe sous le début de
  la suivante. Tempo et tonalité proches sonnent alors continus. Au-delà de
  5 secondes, un matériau rythmique devient boueux. L’ambiant supporte un
  chevauchement plus long.
- **Fondu d’entrée / fondu de sortie.** Séparés du fondu enchaîné. Ils lissent
  seulement le tout début de la première piste et la toute fin de la dernière,
  pour que le fichier ne démarre pas et ne s’arrête pas sur un clic.

## Exporter

Choisissez le format, puis **Fusionner et exporter**.

- **MP3 · 192 kbps** est le défaut, et convient à une écoute ordinaire.
- **MP3 · 320 kbps** si le mix le mérite, ou si vous allez encore couper.
- **WAV** est sans perte. Plus gros, aucune perte ajoutée, utile comme master.

Le rendu se fait sur l’appareil, environ une seconde par piste. Le
téléchargement suit. Rien n’a été téléversé, donc un set de deux heures se
traite comme deux chansons.

Un passage à l’envers comme transition se fait avec
[lecture à l’envers](/fr/reverse-audio). Le fichier fusionné se retourne ensuite
comme n’importe quel autre.
