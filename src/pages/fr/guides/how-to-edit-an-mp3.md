---
title: Modifier un MP3 dans le navigateur
description: Coupez, fondez ou montez le volume, puis exportez une seule fois. Quelle page fait quel travail, et quand le WAV évite un second encodage.
tool: mp3-editor
locale: fr
date: 2026-10-19
layout: ../../../layouts/Guide.astro
---

Modifier un MP3, c’est le plus souvent une tâche dans une liste courte : couper
un passage, enlever un silence, fondre un bord, monter le volume, changer la
vitesse, ou corriger le titre que le lecteur affiche. Chaque tâche a déjà une
page. Celle-ci est la carte, pour que le fichier ne soit pas décodé et réencodé
trois fois.

L’[éditeur MP3](/fr/mp3-editor) est le cas général. Déposez le fichier, faites
la modification, exportez une fois. L’original reste sur le disque. Le nouveau
fichier est le téléchargement.

## Quel travail

| Vous voulez | Ouvrez |
|---|---|
| Raccourcir une note vocale ou supprimer un silence | [Rogner un enregistrement](/fr/guides/how-to-trim-audio) |
| Mettre plusieurs fichiers à la suite | [Fusionner des fichiers](/fr/guides/merge-songs-one-track) |
| Les 40 meilleures secondes en sonnerie | [Créer une sonnerie](/fr/guides/make-iphone-ringtone) |
| Plus vite ou plus lentement, hauteur comprise | [Changer la vitesse](/fr/change-audio-speed) |
| Décaler la hauteur et garder la durée | [Changer la hauteur](/fr/guides/change-pitch-without-changing-speed) |
| Titre, artiste ou pochette | [Éditeur de tags MP3](/fr/mp3-tag-editor) |

Si le travail est deux ou trois petites choses, une coupe, un fondu, un peu de
volume, faites-les dans l’éditeur MP3 et exportez une fois. Une page neuve par
curseur veut un nouvel encodage MP3 à chaque fois.

## En une passe

Déposez le MP3 sur l’[éditeur](/fr/mp3-editor). La forme d’onde est le fichier,
décodé dans l’onglet.

Glissez une zone. **Garder la sélection** n’exporte que ça. **Supprimer la
sélection** exporte le reste. **Temps précis** prend un début et une fin en
secondes quand le glisser ne suffit pas.

Le reste est dans **Ajuster** :

- **Fondu d’entrée** et **fondu de sortie**, jusqu’à 5 secondes. Ils forment le
  début et la fin de l’export. Ils ne fondent pas une jointure au milieu.
- **Volume**, de 10 % à 200 %. Au-dessus de 100 %, un limiteur attrape les
  crêtes. Une petite hausse reste plus propre qu’un écrêtage dur. Un fichier
  déjà fort sonnera quand même compressé.
- **Vitesse**, de 0,5× à 2×. La hauteur suit. Ce n’est pas un étirement qui
  garde la tonalité et ne change que la durée. Pour ça, le
  [changeur de hauteur](/fr/pitch-changer).
- **Normaliser le pic** monte tout le fichier d’une seule valeur, jusqu’à ce
  que l’échantillon le plus fort soit juste sous l’écrêtage. Il remplace le
  curseur de volume. Il ne rend pas les passages faibles aussi forts que les
  forts.
- **Inversion** retourne l’export de la fin vers le début.

Écoutez la sélection avant d’exporter. Puis le format.

**MP3 · 320 kbps** est le défaut de l’éditeur, et le bon choix quand cet export
est le fichier que vous gardez. **192 kbps** suffit pour envoyer. **128 kbps**
est pour la parole. **WAV** quand cette modification n’est pas la dernière.

## Le volume, sans deviner

Un fichier bas d’un bout à l’autre a deux corrections honnêtes. Ce ne sont pas
les mêmes commandes.

[Normaliser l’audio](/fr/normalize-audio) mesure le pic et applique le plus
grand gain propre qui évite encore l’écrêtage. Prenez-le quand vous ne savez
pas jusqu’où pousser.

[Augmenter le volume MP3](/fr/increase-volume) est un facteur que vous choisissez,
jusqu’à 400 %, avec un limiteur sur les crêtes. Le curseur de l’éditeur s’arrête
à 200 %. La page dédiée, quand 200 % ne suffisent pas. Reculez si les passages
forts se mettent à pomper.

Aucun des deux n’est un alignement de loudness pour le streaming. Ça, c’est une
moyenne plus longue, en LUFS, et ça appartient à un mastering.

## Le son et l’étiquette sont séparés

Couper, fondre et monter décodent le MP3 et en écrivent un nouveau. Le titre,
l’artiste, l’album et la pochette ne sont pas le son. Ils vivent dans un bloc
de tags, et l’[éditeur de tags](/fr/mp3-tag-editor) réécrit ce bloc sans toucher
aux octets audio. D’abord le son. Ensuite l’étiquette du fichier que vous
gardez vraiment. Étiqueter d’abord, puis exporter un nouveau MP3, fait tomber
les tags en chemin.

L’éditeur de tags est MP3 seulement. Il ne traite pas un album d’un coup, et il
ne reprend pas les champs de chapitres de podcast inhabituels.

## Ce que cet éditeur ne fait pas

Il n’empile pas deux pistes pour les mixer. La [fusion audio](/fr/audio-joiner)
place les fichiers bout à bout et peut fondre le chevauchement. Elle ne donne
pas deux faders en même temps.

Il n’enlève pas une voix, n’imprime pas un profil de bruit, et ne sépare pas
une chanson en stems. Une page de navigateur qui promettait ça décrirait un
autre produit.
