---
title: Fix a Quiet Voice Recording Without Distortion
description: High-pass the rumble, peak-normalize, then boost with a limiter. The order for a quiet voice memo, and where each step stops helping.
tool: high-pass-filter
date: 2026-10-16
layout: ../../layouts/Guide.astro
---

A voice memo from across the room is quiet the whole way through. Turning the
speakers up only helps on that one device. The file other people open is still
quiet. Three controls fix different parts of that, and they are not
interchangeable.

Do them in this order, and stop when the voice is clear:

1. If you hear rumble, desk thumps, or a low hum, high-pass first.
2. If you do not know how far the level can rise, peak-normalize next.
3. If it is still too quiet, boost with the limiter, and stay under the point
   where the peaks start to pump.

Open the [high-pass filter](/high-pass-filter) with the file. Nothing is
uploaded. The original on disk stays as it is. The pictures below are a short
test line, recorded quiet on purpose, so the waveform sits low.

## Take the rumble out first

Rumble, traffic, and a hand on the phone sit below the voice. A
[high-pass biquad](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode)
keeps what is above the cutoff and rolls off what is below it. This page uses
that filter. It does not build a noise profile, and it does not pull a voice
out of music.

Drop the file. Sweep **Cutoff** up from 20 Hz. For most voices, 80–120 Hz is
where the rumble goes and the body of the voice stays. Male voices still have
weight near 100 Hz. Female voices often stay full a little higher, around
150–200 Hz. Past about 300 Hz, speech starts to sound like a telephone. Listen
before you leave it there.

Mains hum is 50 Hz or 60 Hz, plus harmonics above that. A cutoff at 80–120 Hz
removes the fundamental and a lot of the ring. Harmonics that remain are a job
for the [low-pass filter](/low-pass-filter), which cuts the top instead of the
bottom.

![quiet-memo.wav in the high-pass filter. Cutoff reads 100 Hz, Keep selection is on, and the format is MP3 · 320 kbps.](/guides-media/fix-quiet-voice-recording/01-highpass.webp)

Export **WAV · lossless** if you still have two steps left. An MP3 export
here, then another MP3 on the next page, encodes the file twice.

## Raise the peak, not the quiet words by themselves

[Normalize](/normalize-audio) measures the loudest sample and applies one gain
to the whole file, until that peak sits just under clipping — about −0.2 dB
on this page. If the peak was at half scale, every sample roughly doubles. The
quiet words and the loud words move by the same amount. The distance between
them does not change.

That is peak normalization. It is not the loudness match streaming services
use. Those services measure an average over time, in LUFS, as specified in
[ITU-R BS.1770](https://www.itu.int/rec/R-REC-BS.1770/en). This page does not
do that, and a voice memo does not need it.

Click **Normalize peak**. Preview. If the voice is already a comfortable
level, export and stop. A second boost on top of a file that already peaks
near full scale is what makes a limiter pump.

![quiet-memo.wav on Normalize Audio. Normalize peak sits beside the volume slider at 100%, and the format is MP3 · 192 kbps.](/guides-media/fix-quiet-voice-recording/02-normalize.webp)

Use WAV again if the boost is still coming.

## Boost only what is still too quiet

[Increase volume](/increase-volume) is a multiplier you choose, up to 400%,
which is about +12 dB. A limiter holds the peaks so they do not
[clip](https://en.wikipedia.org/wiki/Clipping_(audio)). Moderate boosts, about
150–250%, usually stay clean. Above about 300% the quiet parts come up and the
peaks start to pump. Back off if that happens. Clean loud is the file you
wanted. Maximum loud is not.

The volume slider inside the high-pass page and the MP3 editor stops at 200%.
Use this page when 200% was not enough. The test file below is at 200%: under
the point where the limiter usually starts to pump, and loud enough for a memo
that was quiet all the way through.

![quiet-memo.wav on Increase MP3 Volume. The volume slider reads 200%, Keep selection is on, and the format is MP3 · 192 kbps.](/guides-media/fix-quiet-voice-recording/03-volume.webp)

If only one sentence is quiet and the rest is fine, do not boost the whole
file. Drag that region, leave **Keep selection** on, and export just that
part. Cropping time is a different job;
[how to trim audio](/guides/how-to-trim-audio) covers it.

## What this will not fix

- It will not make a whisper as loud as a shout in the same take. That is
  compression, and these pages do not do it.
- It will not separate a voice from a television, or from two people talking
  at once.
- It will not change speed without changing pitch.
  [Speed](/change-audio-speed) moves both. At 2× the voice sits about an
  octave higher.
- A file around an hour is the practical ceiling, set by the memory in the
  tab, not by an export cap.

When the level is right, the wider map of one-pass edits is
[how to edit an MP3](/guides/how-to-edit-an-mp3).
