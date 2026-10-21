---
title: How to Convert Opus to MP3 (No Upload)
description: Turn WhatsApp voice notes and .opus, OGG or WebM files into MP3 in the browser. Pick 128 kbps for speech, 320 for music — nothing uploaded.
tool: opus-to-mp3
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: RFC 6716 — Definition of the Opus Audio Codec
    url: https://www.rfc-editor.org/rfc/rfc6716
  - label: Opus Codec — Official site
    url: https://opus-codec.org/
---

Opus is an efficient codec with an unhelpful habit of hiding in containers
other apps do not expect. A WhatsApp voice note arrives as `.opus`. A download
is an OGG or a WebM that happens to contain Opus. Your car stereo, your older
MP3 player and plenty of desktop apps will not open any of them. The
[Opus to MP3 converter](/opus-to-mp3) fixes that in the browser: it decodes
the file and writes an MP3 locally, and the audio is not uploaded.

## First, check that it really is Opus

The extension is a hint, not a guarantee. An `.opus` file is almost always
Opus. An `.ogg` file can contain Vorbis or Opus. A `.webm` usually contains
Opus for audio. The converter accepts all three because the browser decodes by
content, not by file name.

If a plain browser tab cannot play the file, the converter cannot decode it
either. That is the practical test: drag the file into a new tab and press
play. Silence means the format is outside what the browser supports.

## Convert it

1. Open the [Opus to MP3 converter](/opus-to-mp3).
2. Drop the `.opus`, `.ogg` or `.webm` file, or click to browse.
3. Pick a bitrate. **128 kbps** for a voice note; **192 kbps** if there is
   music under the voice; **320 kbps** only when the source is music.
4. Click **Convert to MP3**.
5. The MP3 downloads to your device. Keep the original if you may need it
   again.

Several files can share one setting. One file downloads on its own; two or more
come back as a ZIP.

## Why 128 kbps is usually enough

A WhatsApp voice note is already compressed, often at a low bitrate. Encoding
it at 320 kbps does not restore detail that was never there. It just makes the
file bigger.

Speech is intelligible at 64–128 kbps. A voice note with background music
benefits from 192. A music file in Opus can go to 320, but the result is still
a lossy MP3 of a lossy source.

If you need the best possible copy, keep the Opus original and convert only
the copy you need to play elsewhere.

## What the MP3 does not keep

The converter writes an MP3 without metadata. Title, artist, album and cover
art are not carried over. If the file needs a name in a player, add it with the
[MP3 tag editor](/mp3-tag-editor) after conversion.

The audio length does not change. If the voice note has a long silence at the
start or end, convert first and then trim with the
[audio trimmer](/audio-trimmer). Removing the silence before conversion would
require a different tool and would not change the compatibility problem.

## Opus, OGG and Vorbis are not the same thing

An OGG file is a container. It can hold Vorbis (the older codec) or Opus (the
newer one). If the file is a music track in Vorbis, the browser may still
decode it, and this page will still produce an MP3. The
[OGG to MP3 guide](/guides/convert-ogg-to-mp3) explains the difference and the
Safari case where Vorbis fails.

M4A is a different branch entirely: AAC inside an Apple container. Use the
[M4A to MP3 converter](/m4a-to-mp3) for a voice memo from an iPhone or an AAC
download.

## If you need a smaller file, not a different format

Converting to MP3 at 128 kbps already shrinks most Opus files, but not always.
Opus is efficient; a 64 kbps Opus file may be smaller than a 128 kbps MP3 of
the same audio. If size is the goal, check the source bitrate first, then
choose the lowest MP3 bitrate that still sounds clear for the content.

The [compress audio](/compress-audio) page handles that decision for an
existing MP3. For a speech file, 64–96 kbps is often enough.

## Common mistakes

**Renaming `.opus` to `.mp3`.** The extension does not change the codec. The
file will still be Opus inside, and many players will fail or play silence.

**Converting an already-lossy voice note at 320 kbps.** Bigger file, no extra
detail. Match the bitrate to the content.

**Expecting tags or artwork.** The MP3 is written without them.

**Deleting the original before checking the MP3.** Play the converted file on
the device that needed it. If it works, keep the original anyway — it is the
better copy.
