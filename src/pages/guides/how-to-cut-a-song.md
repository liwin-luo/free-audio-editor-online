---
title: How to Cut a Song Online (Free, Nothing Uploaded)
description: Keep the chorus, lose the intro. A practical walkthrough of cutting songs in your browser — keep vs delete modes, fade tricks and the right export format.
tool: mp3-cutter
date: 2026-10-14
audio: /guides-media/how-to-cut-a-song/narration.m4a
poster: /guides-media/how-to-cut-a-song/poster.webp
youtube: j7BmUJedDJo
layout: ../../layouts/Guide.astro
---

Cutting a song is one of those tasks that used to mean installing sketchy software or
uploading your music to a random website. Neither is necessary: your browser can cut
audio on its own, and the file never has to leave your computer. Here is the quick
version, then the details.

## What you need

- The song file (MP3, WAV, M4A, FLAC, OGG — whatever you have)
- A browser: [the MP3 cutter](/mp3-cutter) runs entirely on your device
- About one minute

## Step 1: Open the song

Drop the file onto the [MP3 cutter](/mp3-cutter) page or click to browse it. The
waveform appears immediately — no upload progress bar, because there is no upload.
This matters more than it sounds: it means the tool works on unreleased tracks,
private recordings and anything else you would rather not send to a stranger's server.

![The MP3 cutter dropzone — drop a file or click to browse](/guides-media/how-to-cut-a-song/01-dropzone.webp)

## Step 2: Choose what happens to the selection

Drag across the waveform to mark a section. Then pick one of two modes:

- **Keep selection** — the export contains *only* the highlighted part. Use this to
  extract a chorus or a highlight.
- **Delete selection** — the export contains everything *except* the highlighted
  part. Use this to remove a long silence at the start, an announcement, or a bad
  final chorus.

![Keep selection keeps only the highlighted part; Delete selection removes it](/guides-media/how-to-cut-a-song/04-keep-vs-delete.webp)

If dragging feels imprecise, open **Precise times** and type the start and end
seconds directly. The timecode under the waveform shows your position to a
hundredth of a second while you drag.

![A selection drawn on the waveform, with the Keep selection mode active](/guides-media/how-to-cut-a-song/02-selection.webp)

## Step 3: Preview, then export

Press play — it plays just your selection. If the cut lands mid-word or mid-beat,
nudge the handles a few times; ten seconds of adjusting makes the difference between
obvious and invisible. Then click **Export**:

- **WAV** is bit-perfect: the kept audio is identical to the source. Use it when
  quality matters or when you will edit the file again later.
- **MP3 320 kbps** is transparent for virtually everyone and about a tenth of the
  size. Use it for sharing and listening.
- **MP3 128 kbps** is fine for spoken content, wasteful for music.

![A finished cut exported — the download starts automatically](/guides-media/how-to-cut-a-song/03-exportToast.webp)

## Two tricks that make cuts sound professional

**Cut on the beat.** Endings that stop exactly on a downbeat sound intentional;
endings that stop between beats sound like mistakes. Zoom in (the + button) and
watch where transients land.

**Fade the edge.** A 0.2–0.5 second fade-out in the Adjust drawer hides an abrupt
ending. This is also exactly how to make the cut loop cleanly as a
[ringtone](/ringtone-maker).

## Cutting on a phone

The same cutter works in mobile Safari and Chrome: the waveform accepts touch, and
the export button stays pinned to the bottom of the screen. For ringtones,
the [ringtone maker](/ringtone-maker) is the same tool with a 40-second guard rail
and iPhone-specific instructions.

## Common questions

**Is it legal to cut a song?** For personal use — ringtones, practice, edits of
your own recordings — yes, in most places. Distributing or publishing the cut of
someone else's copyrighted track is a different matter; that is about the sharing,
not the cutting.

**Why does the site not need an account?** Because there is nothing to store. The
cut happens in your browser's memory and the result downloads straight to your
disk. See [about our local-first approach](/about) for how that works.

**I need the parts glued back together differently.** Cut the sections you need
into separate files, then combine them in order with the
[audio joiner](/audio-joiner) — it can even crossfade between them.
