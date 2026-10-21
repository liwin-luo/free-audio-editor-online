---
title: What Is Lossless Audio? What FLAC and WAV Promise
description: Lossless means the unpacked file returns every original sample. What FLAC, ALAC and WAV promise, what they cost, and where lossy fits anyway.
tool: flac-to-mp3
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: Xiph.Org — FLAC, free lossless audio codec
    url: https://xiph.org/flac/
  - label: Wikipedia — Lossless compression
    url: https://en.wikipedia.org/wiki/Lossless_compression
  - label: Wikipedia — FLAC
    url: https://en.wikipedia.org/wiki/FLAC
---

Lossless means the file unpacks to exactly the samples that went in. Not
similar samples, not samples a listener cannot tell apart: the identical
numbers, guaranteed by the format. FLAC, ALAC, and WAV are the lossless
formats you will meet; MP3 and AAC are lossy, and no setting changes that.
The [FLAC to MP3 converter](/flac-to-mp3) exists because both kinds have a
job, and this page draws the line between them.

## How lossless is possible

A lossless codec is a packing algorithm, not a hearing model. It finds
structure in the audio, patterns that repeat, ranges that stay quiet, and
describes the data in fewer bits without deciding anything about what you
hear. Unpack the file and every sample returns. This is the same idea as a
zip archive, tuned for waveforms: FLAC typically lands near half the size of
the uncompressed WAV.

A lossy codec works differently on purpose. It spends its bits where a
listener is expected to look and discards the rest. The discarded part does
not come back at any bitrate, in any player, ever.

## What each kind is for

| | Lossless (FLAC, ALAC, WAV) | Lossy (MP3, AAC) |
|---|---|---|
| Unpacks to | The original samples | A model of the recording |
| Size | Roughly half of WAV, or 5 to 10 MB per minute | 1 to 2.4 MB per minute |
| Survives re-editing | Yes; every edit works on real samples | No; every edit is a new lossy generation |
| Plays on | Computers, most modern players | Everything |

The table has one line that matters more than the rest: re-editing. A lossy
file that gets cut, faded, and exported again is re-encoded each time, and
each pass spends another generation. A lossless working copy never does.

## The honest limits of lossless

Lossless is not a sound upgrade on playback. A FLAC and a 320 kbps MP3 of the
same master are past most listeners' ability to separate in a casual test;
the lossless file's guarantee is about the samples, not about a audible
difference. Lossless also does not mean high quality by itself: a lossless
file made from a 128 kbps MP3 is a perfect copy of damaged goods. The source
sets the ceiling.

Storage and compatibility are the costs. Ten lossless albums take the space
of forty or more MP3 versions, and some car stereos, older players, and
pickier apps still refuse FLAC or ALAC outright.

## Three names, one property

**FLAC** is the open standard, free to use, and the default for downloads
from bandcamp-class stores and archive rips. **ALAC** is Apple's lossless
codec, functionally the same idea inside the Apple ecosystem. **WAV** is
uncompressed, which makes it the universal handoff format and the largest of
the three. A lossless file made by any of them keeps every sample; the
differences are packaging, support, and size.

Lossless is also not the same claim as hi-res. Hi-res means higher numbers,
a 96 kHz rate or 24-bit depth, and it happens to be lossless, but the
lossless label itself only promises fidelity to the source, whatever that
source was. Telling what you have takes a player info panel: the extension
narrows it, and the file details finish the job.

## The working arrangement

Keep lossless as the working copy and the archive, and let lossy handle
delivery. That one arrangement is why the conversion pages here run in the
direction they run: [FLAC to MP3](/flac-to-mp3) and
[WAV to MP3](/wav-to-mp3) make the send copies, and
[MP3 to WAV](/mp3-to-wav) exists for editors that demand WAV, with the
explicit warning that a decode is not a restoration. The full comparison,
with the sizes and the blind-test reality, is in
[WAV vs MP3](/guides/wav-vs-mp3).
