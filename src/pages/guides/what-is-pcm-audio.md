---
title: What Is PCM Audio? Why WAV Is PCM in a Container
description: PCM is the waveform stored as raw numbers, sample by sample. Why WAV is PCM in a container, why every player ends at PCM, and where the term matters.
tool: mp3-to-wav
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: Wikipedia — Pulse-code modulation
    url: https://en.wikipedia.org/wiki/Pulse-code_modulation
  - label: Wikipedia — Digital audio
    url: https://en.wikipedia.org/wiki/Digital_audio
---

PCM, pulse-code modulation, is audio stored as raw numbers: the waveform
measured thousands of times a second, each measurement written down as a
value, no modeling and no decisions about hearing. A WAV file is PCM inside a
labeled container. When an editor, a sampler, or a delivery spec asks for
"uncompressed audio", PCM is the thing being asked for. The
[MP3 to WAV converter](/mp3-to-wav) produces it, and this page explains what
the term means and where it matters.

The name is older than the files: pulse-code modulation, the scheme of
carrying a measurement as a coded value, from the days when the pulses were
literal on transmission lines. In a file the pulses are just the numbers, and
the term survives as the label for samples in the raw.

## What the numbers are

Two numbers describe PCM fully. The **sample rate** is how many measurements
per second the file holds; 44.1 kHz means 44,100 per second. The **bit
depth** is how precise each measurement is; 16-bit writes each level with
65,536 possible values. A 16-bit, 44.1 kHz stereo file is therefore a long
column of numbers, 44,100 rows per second, two columns wide, which is why it
takes about 10 MB per minute. The [sample rate](/guides/what-is-sample-rate)
and [lossless](/guides/what-is-lossless-audio) pages cover those two numbers
in depth.

## How PCM relates to everything else

MP3, AAC, FLAC and Opus are ways of describing audio more compactly than
PCM, and every one of them decodes back to PCM before it can be played: the
numbers are reconstructed, then the speaker is driven. That decode is a
one-way door for lossy formats. What the encoder discarded during
compression does not reappear in the PCM, which is why decoding an MP3 to
WAV is a format change and not a quality restoration.

This is also why PCM is the interchange format. Devices and programs disagree
about which compressed formats they accept; they all accept PCM, because
feeding a speaker is PCM work in the end.

## Where the term matters to you

- **Delivery specs.** "WAV, 16-bit, 44.1 kHz" is a PCM spec in three numbers:
  container, precision, and rate. Meeting it exactly beats assuming.
- **Editing.** A PCM working copy never re-encodes between edits; cuts and
  fades act on real samples. The moment an MP3 enters the chain, edits start
  spending generations.
- **Export ceilings.** A converter writes what it writes: a 24-bit source
  mastered to 16-bit on export keeps its level but not its extra resolution,
  which the [WAV editing guide](/guides/how-to-edit-a-wav-file) covers.

One place PCM hides by absence: the audio track inside an MP4 or WebM is
usually a compressed format like AAC or Opus, not PCM, even when the video
world calls the file a master. Uncompressed tracks live in WAV and AIFF and a
few production containers. When a spec says PCM, name the container too, or
the file may arrive as something else entirely.

## What PCM is not

PCM is not a quality claim by itself. It is a storage scheme, and a PCM file
made from a poor source carries the poor source perfectly. It is also not a
single format: WAV, AIFF, and the raw streams inside many production files
are all PCM, differing in container and metadata. And it is not the only
faithful scheme; FLAC stores the same samples compressed, unpacking to the
identical numbers, which is why lossless and uncompressed are related but
not interchangeable words.

When a file needs to be PCM and is not, the
[MP3 to WAV](/mp3-to-wav) page decodes it in the browser: 16-bit at the
original rate, with the honest caveat above. When the PCM file needs to
become something a player accepts, [WAV to MP3](/wav-to-mp3) runs the other
direction.
