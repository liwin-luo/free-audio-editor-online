---
title: Convertir un audio en MIDI - un instrument, 3 min max
description: Mélodie fredonnée, voix ou piano solo en MIDI dans le navigateur. Ce que le modèle lit bien, ce qu’il rate, ce que contient le .mid. Rien n’est téléversé.
tool: audio-to-midi
locale: fr
date: 2026-10-21
layout: ../../../layouts/Guide.astro
sources:
  - label: Basic Pitch — le convertisseur audio vers MIDI open source de Spotify
    url: https://basicpitch.spotify.com/
  - label: Bittner et al., A Lightweight Instrument-Agnostic Model for Polyphonic Note Transcription and Multipitch Estimation (ICASSP 2022)
    url: https://arxiv.org/abs/2203.09893
---

Convertir un audio en MIDI, c’est rendre ses notes à un enregistrement : la hauteur de chaque note, son début, sa durée et la force du jeu. Avec ces notes dans votre DAW, vous corrigez une note fausse, changez d’instrument ou quantisez le tempo au lieu de rejouer la prise.

La page [Audio vers MIDI](/fr/audio-to-midi) fait cela dans le navigateur. Elle exécute le modèle Basic Pitch de Spotify sur votre appareil et écrit un fichier .mid. L’audio n’est jamais téléversé.

## Ce qui se convertit bien, et ce qui ne se convertira jamais

Basic Pitch est conçu pour un instrument à la fois : une ligne mélodique seule, une voix, un piano solo. Avec cela, les notes reviennent proches de ce que vous avez joué.

Un mix complet est un autre travail. Le modèle entend tous les instruments sur un canal (le stéréo est mélangé en mono avant), donc un enregistrement dense devient des notes en trop ou manquantes. La batterie n’a pas de hauteur et ne donne généralement rien. Pas de séparation de stems ici : un fichier entre, une piste de notes sort.

Si vous cherchiez seulement la tonalité ou le BPM, le MIDI ne sert à rien. [Tonalité et BPM](/fr/key-bpm-finder) lit ces deux nombres sans écrire de fichier.

## Convertir le fichier

1. Ouvrez [Audio vers MIDI](/fr/audio-to-midi).
2. Déposez un instrument : un MP3, WAV, M4A ou une vidéo avec le passage voulu. Au-delà de 3 minutes, c’est refusé. Rognez d’abord dans le [Coupeur audio](/fr/audio-trimmer), puis revenez.
3. La première conversion télécharge le modèle depuis ce site, moins de 1 Mo. Le navigateur garde sa copie, l’attente n’a lieu qu’une fois.
4. Lisez le nombre de notes avant de télécharger. Une mélodie fredonnée doit avoisiner le nombre de notes chantées. Des centaines de notes pour une mélodie courte signifient plusieurs instruments dans l’enregistrement, et un fichier en pagaille.
5. Cliquez sur télécharger : le .mid s’enregistre sur votre appareil.

Pas d’écoute sur la page. Les notes s’affichent en texte ; vous les entendez pour la première fois dans votre DAW. Fonctionne dans Chrome, Edge, Firefox et Safari à jour ; sur un téléphone à court de mémoire, la conversion peut échouer, un extrait plus court passe généralement.

## Ce que contient le .mid

Une piste, MIDI type 0. Chaque note porte une hauteur entre 21 et 108 (A0 à C8 d’un piano), un début, une durée et une vélocité. L’indication de tempo est 120 BPM : elle fait coïncider les temps des notes avec les secondes de l’enregistrement. Ce 120 n’est pas le tempo de votre chanson.

La piste commence sur un piano General MIDI pour que la DAW ait un son à l’import. Ce n’est pas un enregistrement de votre instrument d’origine ; remplacez le son une fois le fichier arrivé.

Deux choses absentes : les pitch bends, un glissando chanté arrive donc en note tenue à la hauteur finale ; et la notation. Rien sur ce site ne produit de partition.

## Après le téléchargement

Glissez le .mid dans GarageBand, Logic, Ableton ou tout DAW qui lit le MIDI. Les étapes habituelles : remplacer le piano General MIDI par un vrai son d’instrument, corriger la ou deux notes mal entendues, quantiser si le tempo se décale.

Si la prise est bonne et que seule la tonalité cloche, changer la hauteur de l’audio d’origine, sans créer de notes, c’est le [Changeur de hauteur tonale](/fr/pitch-changer).

Si vous utilisez Logic et cherchiez sa commande audio vers MIDI intégrée : cette page en est la version navigateur, pour quand Logic n’est pas ouvert. Le fichier écrit se glisse ensuite dans un projet Logic comme n’importe quelle région MIDI.

## Erreurs fréquentes

**Convertir une chanson entière en espérant des pistes séparées.** La sortie est une piste de notes jouées par tout le mix. Les stems sont un autre outil.

**Juger le résultat à l’oreille seule.** Le nombre de notes affiché est le contrôle qualité le plus rapide. Un nombre absurde, un fichier absurde.

**Entrer un réenregistrement des haut-parleurs.** Enregistrer la chanson au téléphone dans une pièce ajoute la pièce, et les deux sources se font transcrire. Convertissez le fichier audio lui-même, pas sa reprise au micro.

**Attendre le tempo de la chanson dans le fichier.** L’indication 120 BPM existe pour aligner les temps des notes sur les secondes. Le clic de votre DAW ne suit pas la chanson ; lisez d’abord le vrai tempo avec [Tonalité et BPM](/fr/key-bpm-finder).
