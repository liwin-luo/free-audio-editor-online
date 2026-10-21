---
title: Why Is My Voice Memo So Quiet?
description: The memo plays but you need silence around it. Why phone recordings end up quiet, the 4× boost with a limiter, and how the next one records louder.
tool: increase-volume
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: phone-first
sources:
  - label: Wikipedia — Gain (electronics)
    url: https://en.wikipedia.org/wiki/Gain_(electronics)
  - label: Wikipedia — Dynamic range compression
    url: https://en.wikipedia.org/wiki/Dynamic_range_compression
---

The recording is there, the words are clear if you hold the phone to your ear,
and the level is hopeless in any room with a refrigerator. Quiet voice memos are
the most common phone-audio complaint, and the fix depends on one question: is
the whole memo equally quiet, or are some words loud and others gone? The first
case is a volume job, and the [MP3 volume booster](/increase-volume) is built
for it. The second case needs a different page, and this one will point you
there.

## The two-minute fix

![The volume booster page before a file is open. Drop the quiet memo in.](/guides-media/why-is-my-voice-memo-so-quiet/01-volumeDropzone.webp)

1. Open the [MP3 volume booster](/increase-volume) in your phone browser and
   drop the memo in. iPhone and Android both work; the file is read where it
   sits and is not uploaded.
2. Drag the boost to **150–250%** and play it back. A limiter holds the peaks,
   so this range usually stays clean.
3. Export MP3 and listen on the speaker that failed you before. If it strains,
   back off a step; if it is still shy, push toward 300%.

The booster reaches **400%**, which is about +12 dB. Past that the limiter
starts holding back most of the file and the loud parts pump. Clean loudness
beats maximum loudness.

![The memo boosted and exported. The limiter holds the peaks while the level rises.](/guides-media/why-is-my-voice-memo-so-quiet/02-volumeExport.webp)

## Why the memo came out quiet

| Cause | What you hear | The fix |
|---|---|---|
| Distance | Quiet but clear | Re-record a hand-width from the mic, or boost |
| Blocked mic | Quiet and muffled together | Clear the mic hole and re-record |
| Big room or back row | Quiet with room echo | Boost, and record closer next time |
| Chat-app re-compression | Quiet plus artifacts | Get the original file from the recording phone |

Distance is the number one cause: a phone mic a meter away hears a fraction of
what one at hand-width hears, and no export fixes a take where the room did the
talking.

One thing it is probably not: the file format. MP3 and WAV hold levels equally
well. Converting the memo will not make it louder; the boost is a gain change.

## Boost first, cut later

If the memo also needs trimming, boost before you cut, not after. The gain
change does not care where the silence is, but every extra export step is
another chance to re-encode a lossy file. Boost the original, check the level,
then trim the loud version once. The order saves a generation, which on a
fourth-generation WhatsApp forward is worth protecting.

One more thing about messenger files: if the memo reached you through a chat
app, the quietness may be the least of it. Those forwards are re-encoded to a
low bitrate on the way, and a boost raises the artifacts along with the words.
The original file from the phone that recorded it always sounds better than
any fix applied to the forward.

## If the boost is not enough

A uniformly quiet memo is the booster's job. Two neighboring problems are not:

- **Some words loud, others buried.** That is uneven dynamics. One gain for the
  whole file cannot fix it; the [level compressor](/compressor) pulls the loud
  parts down and the quiet parts up.
- **Quiet but peaking.** If the loud moments already touch the ceiling, there
  is no headroom to boost. [Normalize](/normalize-audio) finds the largest clean
  gain for the file, and compression handles the rest.

## How the next one records louder

Prevention is a ten-second ritual. Record a sentence, play it back at the volume
you will actually use, and only then record the real memo. Hold the phone with
the mic end toward the source, a hand-width away, and check that nothing covers
the hole. In wind, a sleeve or a hand cupped behind the mic beats any app
setting. If a take matters, the [voice recorder](/voice-recorder) in the browser
shows a waveform while you record, so a quiet take is visible before it matters.
