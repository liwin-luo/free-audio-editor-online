---
title: How to Make a Slowed + Reverb Edit Online
description: Slow a track to about 85% and wash it in 20–30% reverb, in the browser. Why the pitch sinks, the nightcore flip, and export settings.
tool: slowed-reverb
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: bedroom-musician
sources:
  - label: Wikipedia — Slowed and reverb
    url: https://en.wikipedia.org/wiki/Slowed_and_reverb
  - label: Wikipedia — Audio time stretching and pitch scaling
    url: https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling
---

The slowed + reverb edit is one move: drop a track to about 85% of its speed and
let reverb bloom where the drums used to sit tight. The vocal lands about three
semitones lower, the hi-hats smear, and the whole thing sounds like it is
playing from the next room at 2 a.m. The
[slowed reverb maker](/slowed-reverb) does it in the browser on a full-length
track, with no app and nothing uploaded.

![The slowed + reverb page before a file is open. Drop a song to begin.](/guides-media/make-slowed-and-reverb/01-slowedDropzone.webp)

## What the effect actually is

Slowed + reverb is varispeed, the thing tape machines did when you slowed the
reel: the whole recording slows down and the pitch goes with it. At 85% speed,
everything sits close to three semitones below where it was recorded. That drop
is the sound. A version that slows the timing but holds the pitch is a
time-stretch, which is a different effect; the [tempo changer](/tempo-changer)
does that job inside its 0.75–1.25 range when you actually want it, for practice
tracks or a DJ set.

## The recipe

1. Drop the song on the [slowed reverb maker](/slowed-reverb). MP3, WAV, M4A,
   anything the browser plays, full length included.
2. Drag **speed** to about **85%**. The classic edits live between 80% and 90%:
   slow enough that the pitch clearly sinks, not so slow that the rhythm falls
   apart.
3. Raise **reverb** to **20–30%** and audition the loudest section. The tail
   should arrive after the vocal, like a second room, not land on top of it.
4. Trust your ears over the numbers. Dense, fast tracks take slowing badly.
   Tracks with busy hi-hats usually survive it well.

Start from a dry original when you can. A master that is already drenched in
reverb turns to mud when you wash it a second time.

![The song loaded in the editor. Draw the section, then set the Speed and Reverb sliders below.](/guides-media/make-slowed-and-reverb/02-slowedLoaded.webp)

## Starting points by material

- **Rap and R&B at 85%.** The flow stays intelligible and the low end carries
  the slowdown well. Most of the classic edits live in this range.
- **Pop and ballads at 88–92%.** Songs that live on the vocal take less drop;
  past that the singer sounds borrowed rather than remixed.
- **Instrumentals, video-game and lo-fi tracks at 80–85%.** With no lyric to
  smear, the slowdown and the wash can both go harder. The nightcore versions of
  the same tracks start at 120%.
- **Anything with a spoken intro: cut it first.** A slowed talking section is
  the fastest way to make an edit sound like an accident.

Treat these as starting sliders, not settings. Two tracks in the same genre can
want opposite amounts of wash, and the preview is the only reviewer that counts.

## Pick the section before you export

Nobody needs your full four minutes of wash. Cut the edit down to the section
that carries the mood, usually one verse and the hook. Trim first with the
[audio trimmer](/audio-trimmer) and slow only that part, or slow the whole track
and cut afterwards. If the clip is for a video loop and runs short, the
[audio looper](/audio-looper) repeats it up to 16 times with a 0.01-second join,
and the export stops at 10 minutes.

## The nightcore flip

Push the same slider the other way. Above 100% the pitch rises with the speed,
and at 120–130% you have nightcore: the same varispeed trick pointing up instead
of down. Same page, no extra settings.

## Mistakes that give an edit away

- **Slowing past 75% by default.** Below that, the groove stops swinging and
  starts dragging. The classic edits sit between 80% and 90% for a reason.
- **Reverb above half.** Past 40–50% the wash buries the vocal and the edit
  becomes a texture. Keep the tail under the vocal, not over it.
- **Exporting the intro.** Four slowed bars of fade-in is where listeners leave.
  Start at the hook.
- **Starting from a lossy download you barely have.** The export encodes once,
  so feed it the best file you own; a 128 kbps rip slowed to 85% has twice as
  many artifacts to smear.

## What the page will not do

It will not pull the vocal out of the beat, so the reverb washes everything
together. That is the effect, not a bug. It will not hold the pitch while
slowing; that is the [tempo changer](/tempo-changer), inside its range. And it
will not clean a noisy source: slow a hissy rip and the hiss slows down with it.

## After the export

Slowing does not make a track quieter: the edit is a resample, so the level
survives and no extra normalization step is needed before posting.

![The slowed edit exported. MP3 320 kbps for posting, WAV for further editing.](/guides-media/make-slowed-and-reverb/03-slowedExport.webp)

MP3 320 kbps is the file for posting; WAV is the file when another app takes a
pass next. If the edit is headed for a video, [cutting a song for TikTok and
Reels](/guides/cut-a-song-for-tiktok) covers the platform side: clip lengths,
loop points, and how the audio gets into the editor.
