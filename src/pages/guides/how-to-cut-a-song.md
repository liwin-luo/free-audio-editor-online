---
title: How to Cut a Song Online (Free, Nothing Uploaded)
description: Keep the chorus, lose the intro. Keep versus delete, a short fade, and which export format to pick. The file is never uploaded.
tool: mp3-cutter
date: 2026-10-14
audio: /guides-media/how-to-cut-a-song/narration.m4a
poster: /guides-media/how-to-cut-a-song/poster.webp
youtube: j7BmUJedDJo
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: Wikipedia — MP3
    url: https://en.wikipedia.org/wiki/MP3
  - label: Wikipedia — LAME (the encoder lamejs ports)
    url: https://en.wikipedia.org/wiki/LAME
---

The chorus starts at 1:12 and the intro takes forty seconds you do not need.
Mark that stretch on the waveform, export the part that matters, and leave the
rest of the file out of the export. The [MP3 cutter](/mp3-cutter) does the cut
in the browser, and the song never leaves the computer.

If the file is a voice memo or a podcast and the job is dropping silence, use
[how to trim audio](/guides/how-to-trim-audio). This page is about cutting a song.

## What you need

- The song file (MP3, WAV, M4A, FLAC, OGG, whatever the browser already plays)
- A browser: [the MP3 cutter](/mp3-cutter) runs entirely on your device
- About one minute

## Step 1: Open the song

Drop the file onto the [MP3 cutter](/mp3-cutter) page or click to browse it. The
waveform appears immediately. There is no upload bar, because the file never leaves
the device. That includes unreleased tracks and anything you would rather not send
to someone else's server.

![The MP3 cutter before a file is open. The only step on screen is the drop zone.](/guides-media/how-to-cut-a-song/01-dropzone.webp)

## Step 2: Choose what happens to the selection

Drag across the waveform to mark a section. Then pick one of two modes:

- **Keep selection.** The export contains only the highlighted part. Use this to
  pull out a chorus.
- **Delete selection.** The export contains everything except the highlighted
  part. Use this to remove a long intro, an announcement, or a bad final chorus.

![Keep selection keeps only the highlighted part; Delete selection removes it](/guides-media/how-to-cut-a-song/04-keep-vs-delete.webp)

If dragging feels imprecise, open **Precise times** and type the start and end
seconds directly. The timecode under the waveform shows your position to a
hundredth of a second while you drag.

![A selection drawn on the waveform, with the Keep selection mode active](/guides-media/how-to-cut-a-song/02-selection.webp)

## Step 3: Preview, then export

Press play. It plays just your selection. If the cut lands mid-word or mid-beat,
nudge the handles a few times; ten seconds of adjusting makes the difference between
obvious and invisible. Then click **Export**:

- **WAV** is bit-perfect: the kept audio is identical to the source. Use it when
  quality matters or when you will edit the file again later.
- **MP3 320 kbps** is transparent for virtually everyone and about a tenth of the
  size. Use it for sharing and listening.
- **MP3 128 kbps** is fine for spoken content, wasteful for music.

![A finished cut exported. The download starts in the browser.](/guides-media/how-to-cut-a-song/03-exportToast.webp)

## Two things that keep a cut from sounding chopped

**Cut on the beat.** An ending on a downbeat sounds deliberate. An ending between
beats sounds like a mistake. Zoom in with the + button and watch where the hits land.

**Fade the edge.** A 0.2–0.5 second fade-out in the Adjust drawer hides an abrupt
ending. This is also exactly how to make the cut loop cleanly as a
[ringtone](/ringtone-maker).

## Cutting on a phone

The same cutter works in mobile Safari and Chrome: the waveform accepts touch, and
the export button stays pinned to the bottom of the screen. For ringtones,
the [ringtone maker](/ringtone-maker) is the same tool with a 40-second guard rail
and iPhone-specific instructions.

## Common questions

**Is it legal to cut a song?** For personal use (a ringtone, practice, an edit of
your own recording) yes, in most places. Publishing someone else's copyrighted
track is a separate question. That is about the sharing, not the cut.

**Why is there no account?** There is nothing to store. The cut happens in the
browser's memory and the result downloads to disk. [About](/about) explains the
local processing.

**I need the parts in a different order.** Cut them into separate files, then
combine them in the [audio joiner](/audio-joiner). It can crossfade the joins.
