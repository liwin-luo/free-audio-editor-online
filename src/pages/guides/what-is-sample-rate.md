---
title: What Is Sample Rate? What 44.1 and 48 kHz Mean
description: Sample rate is how many times per second audio is measured. What 44.1 and 48 kHz mean, why it exists, and when it actually matters to you.
tool: wav-to-mp3
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: Wikipedia — Sampling (signal processing)
    url: https://en.wikipedia.org/wiki/Sampling_(signal_processing)
  - label: Wikipedia — 44,100 Hz
    url: https://en.wikipedia.org/wiki/44,100_Hz
---

Sound is a continuous wave, and a digital file cannot store continuous
anything. Sample rate is how many times per second the wave is measured, and
each measurement is one sample. A 44.1 kHz file takes 44,100 measurements per
second; a 48 kHz file takes 48,000. More measurements mean more of the wave is
captured, up to the point where nobody can hear the difference. The
[WAV to MP3 converter](/wav-to-mp3) keeps a file's original rate on the way
through, and this page explains what that rate is doing.

## Why 44,100 and 48,000

Each sample captures the wave's level at one instant, and two samples per
cycle are the mathematical minimum to carry a tone. That puts a ceiling on the
highest frequency a rate can hold at half the rate, so 44.1 kHz carries
frequencies up to about 22 kHz, which is past the top of adult hearing. The
numbers are inherited: 44.1 kHz came from video tape machinery that CD
masters were stored on, and 48 kHz came from video and film sound, which is
why camera audio and most video workflows still use it.

## What it changes, and what it does not

Sample rate sets the frequency ceiling and, with bit depth, the size of the
uncompressed file. It does not change loudness, tempo, or key. A recording at
44.1 kHz and the same recording at 48 kHz sound the same to a human listener;
the 48 kHz version simply describes a little more ultrasonic territory that
nobody in the room can hear.

What people sometimes hear as a sample-rate problem is usually something
else: a low rate on the source recording, cheap conversion hardware, or a
file played through a device resampling it badly. The rate itself is not the
weak link until it dips under the audio's content.

## Where the rates live

- **44.1 kHz:** CDs, most music downloads and streams, most audio editing.
- **48 kHz:** video sound, camera and phone recordings, most podcast video
  workflows.
- **96 kHz and above:** production formats for processing headroom, not a
  listening improvement.

Phones record voice memos at 44.1 or 48 kHz already. Nothing about a memo
needs changing.

## Two questions that come up every time

**Does upsampling add quality?** No. Converting a 44.1 kHz file to 96 kHz
draws a smoother curve through the same information, and the extra samples
describe nothing new. The honest version of upsampling is done once, by a
real resampler, when a delivery spec demands the number.

**Why does a 32 kHz recording sound dull?** Because its ceiling is 16 kHz,
and that ceiling is audible: cymbals, consonants, and air sit partly above
it. Speech stays perfectly intelligible under such a ceiling, which is why
phone and radio systems cut there deliberately, but music loses its top
octave. That ceiling is the sample rate doing exactly what the rate says,
not a defect in the file.

## When it matters to you

Three practical cases cover almost everyone. **Mixing rates in one project:**
an editor wants one rate, and files at the wrong rate get resampled on import,
which is harmless when done once by a real resampler. **Delivery specs:** some
platforms and broadcast specs name a rate, and the file should match it
exactly rather than rely on their converter. **Choosing export settings:** an
MP3 at the original rate is the honest default, because re-encoding at a new
rate spends quality on nothing audible.

The deeper divide is not the rate but the container: what lossy encoding does
to the samples is covered in [WAV vs MP3](/guides/wav-vs-mp3), and the
conversion order that keeps quality is in [how to edit a WAV
file](/guides/how-to-edit-a-wav-file).
