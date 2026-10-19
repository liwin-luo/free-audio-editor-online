---
title: How to Merge Audio Files into One Track Online
description: Put songs, voice memos or podcast clips into one file. Set the order, pick a crossfade, export MP3 or WAV. Nothing is uploaded.
tool: audio-joiner
date: 2026-10-14
audio: /guides-media/merge-songs-one-track/narration.m4a
poster: /guides-media/merge-songs-one-track/poster.webp
youtube: RceLdI_b6_o
layout: ../../layouts/Guide.astro
---

One file is easier to play and send than a folder of clips. A gym mix, a stack of
voice memos, or podcast chapters all use the same steps: load the tracks, set the
order, choose how they meet, export. The browser does it. Nothing is uploaded.

## What you can merge

The [audio joiner](/audio-joiner) accepts whatever your browser can decode
(MP3, WAV, M4A, FLAC, OGG) and matches them to a common sample rate.
Mixing a 44.1 kHz MP3 with a 48 kHz WAV is fine; the joiner resolves the
difference during the merge. There is no fixed track limit: the practical ceiling
is your device's memory, since everything happens locally.

## Step 1: Load the tracks

Drop two or more files onto the [joiner](/audio-joiner), or click to multi-select.
Each track appears as a row with its duration. The combined length is shown at the
top and updates as you edit the list.

![The audio joiner with two tracks loaded and a combined waveform preview](/guides-media/merge-songs-one-track/01-joinerTracks.webp)

## Step 2: Get the order right

Use the up and down arrows on each row. A few ordering tips from practice:

- Put tracks in **energy order** for a workout mix: warm-up, build, peak, cooldown.
- For DJ-style sets, match the endings and starts that share a tempo or key; the
  joiner will not beat-match for you.
- For podcast archives, chronological order beats everything. Nobody appreciates
  cleverness here.

Changed your mind about a track? Remove it; the total duration recalculates
instantly.

## Step 3: Choose how the tracks meet

This is the difference between a playlist-in-a-file and an actual mix:

- **Crossfade 0 (hard cut).** Track B starts the instant track A ends. Use this
  for podcast chapters or an archive, where each part should start cleanly.
- **Crossfade 2–4 seconds.** The end of one track fades under the start of the
  next. Tracks that share a tempo and a key sound continuous. Past 5 seconds,
  rhythmic material turns muddy. Ambient material can take the longer overlap.
- **Fade in / fade out.** Separate from the crossfades. These smooth only the
  start of the first track and the end of the last, so the file does not start
  or stop with a click.

![A crossfade: track A fades out while track B fades in over a 2–4 second overlap](/guides-media/merge-songs-one-track/03-crossfade.webp)

## Step 4: Export

Pick the format and click **Merge & export**:

- **MP3 192 kbps** is the default and right for most listening.
- **MP3 320 kbps** if the mix deserves it or you plan to re-edit later.
- **WAV** is lossless. Larger files, no added loss, the right master copy.

The merge renders on your device in about a second per track, and the download
starts automatically. Nothing was uploaded at any point, which is why merging a
two-hour set feels no different from merging two songs.

![The merged file exporting as MP3 or WAV. The download starts in the browser.](/guides-media/merge-songs-one-track/02-joinerExportToast.webp)

## After the merge

- Track too long overall? Trim sections out first with the
  [audio trimmer](/audio-trimmer), then merge.
- Need one song quieter than the others? Change it before the merge with
  [increase volume](/increase-volume). One volume control over the whole mix
  does not fix a single quiet track.
- Want a section of the mix to play backwards as a transition? The
  [reverse tool](/reverse-audio) does exactly that, and merged output can be
  reversed again just like any file.
