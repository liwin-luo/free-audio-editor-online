---
title: Convert OGG to MP3 in Your Browser (Nothing Uploaded)
description: Turn an OGG file into MP3 without uploading it. What Vorbis and Opus inside OGG mean, which bitrate to pick, and when Safari cannot decode it.
tool: ogg-to-mp3
date: 2026-10-14
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: Wikipedia — Ogg container format
    url: https://en.wikipedia.org/wiki/Ogg
  - label: Wikipedia — Vorbis
    url: https://en.wikipedia.org/wiki/Vorbis
  - label: Wikipedia — Opus (audio codec)
    url: https://en.wikipedia.org/wiki/Opus_(audio_codec)
---

An OGG file plays in Chrome and Firefox, and a car stereo or an older speaker
may still refuse it. MP3 is the format everything accepts, so the job is to
re-save the audio as MP3. The [OGG to MP3 converter](/ogg-to-mp3) does the
decode and the encode in this tab: a lecture, a voice memo, or an unreleased
track never has to be uploaded to get there.

## What an OGG file actually is

OGG is a container, not a single codec. Open one and you will find one of two
things inside:

- **Vorbis**, the codec most music files labeled `.ogg` use.
- **Opus**, the codec in some newer voice recordings and a few music downloads.

The extension does not tell you which. Chrome and Firefox play both. Safari
plays Opus and often stays silent on Vorbis. That limit is the browser's
decoder, and a page that refuses to upload cannot invent a decoder the browser
does not have.

A file named `.opus` is a different job. Use the
[Opus to MP3 converter](/opus-to-mp3) for that. This page is for `.ogg` and
`.oga`.

## Do the conversion

1. Open the [OGG to MP3 converter](/ogg-to-mp3).
2. Drop the file, or click to browse.
3. Pick a bitrate (below) and export. The MP3 downloads to your device. The
   OGG stays where it was.

![The OGG to MP3 page before a file is open. The drop zone says “Drop an OGG file, or click to browse,” and the file is processed locally.](/guides-media/convert-ogg-to-mp3/01-drop.webp)

![clip.ogg open in the converter. The format is MP3 · 320 kbps, and the button says Convert to MP3.](/guides-media/convert-ogg-to-mp3/02-ready.webp)

## Which bitrate

The three rates cover real use. Past what you can hear, a bigger number only
makes a bigger file.

- **128 kbps** for anything spoken: a lecture exported as OGG, a meeting, a
  voice note.
- **192 kbps** for most music. Past this rate the MP3 stops being the weakest
  link in the chain.
- **320 kbps** when the source is a high-rate Vorbis or Opus track and you
  want the new encode to stop being the limit.

A 320 kbps MP3 of a Vorbis file does not undo the Vorbis encode. The first
lossy stage already decided what survived; the MP3 rate only describes how the
survivors are re-packed.

## When the browser cannot decode it

Try playing the file in a plain browser tab first. If you hear it, this
conversion will work. If the tab is silent:

- **Vorbis in Safari.** Switch to Chrome or Firefox, or convert on a computer
  that has one of those.
- A damaged file, or an OGG that is not audio. This page does not extract a
  video soundtrack from an unusual container. For MP4, WebM and MOV, use the
  [MP4 to MP3 converter](/mp4-to-mp3).

A page that refuses uploads cannot promise to open every OGG variant, and this
one does not. For the files the browser refuses, ffmpeg on your own computer
keeps the same privacy property and adds the missing decoder.

## After you have the MP3

The result is a normal audio file.

- Cut a section with the [MP3 cutter](/mp3-cutter).
- If the whole thing was recorded quietly,
  [normalize](/normalize-audio) it so the peak sits just under clipping.

The MP3 comes out bare: no title, no artist, no cover art. Most players fall
back to the file name, which is often enough for a lecture. Add tags
afterwards in any editor if a player needs them.
