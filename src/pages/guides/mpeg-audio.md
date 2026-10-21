---
title: What Is MPEG Audio? Layers, Bitrates, and MP3
description: MPEG audio is compressed audio from the MPEG standards, and Layer III is the MP3 you already use. What the labels mean, and what to open the file with.
tool: mp3-editor
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: ISO/IEC 11172-3 — MPEG-1 audio, Layers I–III
    url: https://www.iso.org/standard/22412.html
  - label: Wikipedia — MP3 (MPEG-1/2 Audio Layer III)
    url: https://en.wikipedia.org/wiki/MP3
---

MPEG audio is lossy compressed digital audio as defined by the MPEG standards,
ISO/IEC 11172-3 and the revisions that followed it. The .mp3 file in your
recordings folder is MPEG-1 Audio Layer III, and the same family includes the
MPEG-2 and MPEG-2.5 variants that run at lower sample rates.

## Why the name is everywhere

Size is the mechanism. Uncompressed CD audio runs at 1,411 kbps. MP3 at
192 kbps reaches most of that quality for most listeners on ordinary
equipment, and the file is about seven times smaller. That trade is why the
format spread, and three decades of decoders are why it stays: every phone,
car head unit and DAW still reads MP3.

The standards define three layers of rising complexity. Layer I is the oldest
and simplest. Layer II carried digital broadcast, and DAB still uses it.
Layer III compresses best per bit, won the naming war as "MP3", and is what
almost every audio file labelled "MPEG audio" actually is.

| Layer | Standard | Where it still lives |
| --- | --- | --- |
| I | MPEG-1 | Practically retired |
| II | MPEG-1 | DAB broadcast, some broadcast playout |
| III | MPEG-1/2/2.5 | Everywhere: music, voice recorders, podcasts |

MPEG-1 Audio was published in 1993. The patents behind MP3 expired in 2017,
which is why free encoders ship in everything now without anyone paying
license fees. The format predates most of the devices playing it.

The numbers on the file tell you which variant you hold:

- **Sample rate.** MPEG-1 supports 32, 44.1 and 48 kHz. MPEG-2 halves those
  for half-rate files. MPEG-2.5, an unofficial but widespread extension, adds
  8, 11.025 and 12 kHz, which is where cheap voice recorders sit.
- **Bitrate.** The kbps figure is the size budget per second. 128 kbps is
  fine for speech, 192 kbps for music, 320 kbps is the top of the format. It
  is still lossy at any bitrate: the encoder discarded information, and no
  later step puts it back.
- **CBR or VBR.** A constant-rate file spends the same budget on every
  second, silence included. A variable-rate file spends more on hard
  passages and less on quiet ones, so the label on a VBR file is an average.
  Both play everywhere; some old car units misjudge the length of a VBR
  file, which shows up as a wrong remaining-time display, not as damage.
- **AAC.** The audio track inside an MP4 is usually AAC, defined in the
  MPEG-2 and MPEG-4 standards. It is MPEG audio too, and it is the track the
  [MP4 to MP3 converter](/mp4-to-mp3) hands you as a plain MP3.

## What an "MPEG audio file" is in practice

A dictaphone or a meeting recorder set to "MPEG audio" writes .mp3 or .mpa
files, usually at 44.1 kHz or lower. A file named .mpeg or .mpg is a video,
not audio; its soundtrack is the audio layer of the family, which is why
"no sound in my MPEG file" is a decoder question, not a broken track. A voice
memo that arrived as .m4a is AAC, the same family's later codec.

This matters mostly when software refuses a file. A player that rejects
"MPEG" usually means it lacks the decoder for that layer or sample rate, not
that the file is damaged.

## What to do with the file

Play it anywhere first. If it sounds right, the cheapest operation is no
operation.

- **Edit.** The [MP3 editor](/mp3-editor) cuts, fades and deletes in the
  browser, and the file never leaves the device. Every MP3 save re-encodes
  once, so export WAV between operations and encode MP3 a single time at the
  end.
- **Shrink.** The [bitrate converter](/bitrate-converter) takes a 320 kbps
  file down to 128 when space matters. Converting upward restores nothing;
  the discarded data is already gone.
- **Retitle.** Track names and artwork live in ID3 tags beside the audio
  frames. The [tag editor](/mp3-tag-editor) changes them without touching the
  decoded audio.
- **Extract.** For sound inside a video, the [audio extractor](/extract-audio)
  saves the track as WAV, and MP4 to MP3 as MP3.

## What it is not

MPEG audio is not video. The .mpeg and .mpg extensions belong to the video
side of the same standards.

It is not lossless. WAV and FLAC store every sample; MP3 never did. Converting
MP3 to WAV changes the container and restores nothing.

It is not Dolby Digital or DTS. Those are separate codec families from the
disc world, and browsers often cannot decode them at all.

## The decision rule

| Situation | Move |
| --- | --- |
| The file plays and sounds right | Leave it alone |
| The file is too big | Convert down once, keep the original |
| The file needs edits | Work in WAV, encode MP3 once at the end |
