---
title: Rogner un enregistrement dans le navigateur
description: Gardez un passage d’une note vocale ou d’un podcast. Un export, un fichier. Rien n’est téléversé.
tool: audio-trimmer
locale: fr
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

Rogner, c’est garder un passage et jeter le reste : le silence avant une note
vocale, l’air après une réponse de podcast, la partie d’une réunion qu’il faut
vraiment envoyer.

Couper un refrain est une autre décision. Les poignées se ressemblent. Le choix
non. Pour une chanson, ouvrez le [coupeur MP3](/fr/mp3-cutter).

## Ce qu’il vous faut

- Le fichier. MP3, WAV, M4A, FLAC et OGG s’ouvrent si le navigateur les lit déjà.
- Le [coupeur audio](/fr/audio-trimmer). Il tourne dans l’onglet. Aucun téléversement.
- Une minute.

## Le geste

Déposez le fichier sur la page, ou cliquez pour le choisir. La forme d’onde
arrive tout de suite. Il n’y a pas de barre de progression, parce que le fichier
ne quitte pas l’appareil.

Glissez sur la forme d’onde pour marquer le passage. Le temps sous le bouton de
lecture indique la position au centième de seconde. Si le glisser est trop
grossier, ouvrez **Temps précis** et tapez le début et la fin en secondes.

Lecture joue la sélection, pas le fichier entier. Poussez les poignées jusqu’à
ce que le début tombe sur le premier mot et la fin après le dernier, pas au
milieu d’un mot.

## Garder, ou supprimer

- **Garder la sélection.** L’export est seulement la zone marquée. Une note
  vocale réduite à l’essentiel, ou une réponse tirée d’un long enregistrement.
- **Supprimer la sélection.** L’export est tout sauf la zone marquée. Le silence
  du début, ou un trou au milieu. Les deux côtés se rejoignent par une coupe
  sèche.

Un export, un fichier. Trois extraits veulent trois sélections et trois exports.

**Fondu d’entrée** et **fondu de sortie**, dans **Ajuster**, lissent seulement le
début et la fin de ce que vous exportez. Ils ne fondent pas la jointure là où
un trou supprimé se referme. Cette jointure reste une coupe. Si ça clique,
exportez les deux morceaux à part et rejoignez-les avec un court fondu enchaîné
dans [fusion audio](/fr/audio-joiner).

Pour un seul passage, 0,1 à 0,3 seconde suffit à éviter le clic au début et à la
fin. La fin d’une chanson se règle dans le [coupeur MP3](/fr/mp3-cutter).

## Exporter

Le coupeur démarre sur **MP3 · 192 kbps**. Changez le menu de format avant
**Exporter**.

- **128 kbps** suffit pour la voix. La musique y sonne déjà sourde.
- **192 kbps** convient à un fichier mixte que vous envoyez une fois.
- **WAV** est du PCM 16 bits au taux d’échantillonnage du fichier. Prenez-le si
  vous allez encore couper. Chaque nouvel export MP3 enlève un peu de détail.

Le téléchargement commence dans le navigateur. Le fichier d’origine sur le
disque ne change pas.

## Sur le téléphone

La même page marche dans Safari et Chrome. La forme d’onde prend le doigt, le
bouton d’export reste en bas. Une longue prise est limitée par la mémoire du
téléphone, pas par un compte. Sur un ordinateur récent, environ une heure tient.
Sur le téléphone, moins.

## Ce que rogner ne répare pas

Rogner enlève du temps. Il n’enlève pas le bruit, ne sépare pas une voix de la
musique, et ne rend pas fort un enregistrement bas d’un bout à l’autre. Le
volume dans **Ajuster** va de 10 % à 200 %. Un fichier bas partout passe par
[augmenter le volume MP3](/fr/increase-volume) (jusqu’à 400 %, avec un limiteur)
ou par [normaliser l’audio](/fr/normalize-audio), qui monte le pic le plus haut
juste sous l’écrêtage.

Si la suite est une chanson, passez au [coupeur MP3](/fr/mp3-cutter). La carte
des pages est dans [modifier un MP3](/fr/guides/how-to-edit-an-mp3).
