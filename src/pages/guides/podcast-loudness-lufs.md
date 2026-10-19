---
title: What LUFS Should a Podcast Be?
description: −16 LUFS is the usual podcast target, −14 is streaming, −23 is broadcast. The meter reads the file, and the sample peak stops at −1 dBFS.
tool: loudness-meter
date: 2026-10-19
layout: ../../layouts/Guide.astro
---

A podcast host asks for a number before they will take the file. The usual
answer is **−16 LUFS**. Streaming platforms that publish a loudness target
often sit near **−14 LUFS**. Broadcast delivery is often **−23 LUFS**. These
are common targets, not a law, and a platform can change its own number
without this page changing.

LUFS is integrated loudness: one figure for the whole file, weighted the way
a listener hears it. It is not the loudness of the room, and it is not the
loudest instant in the file.

## Read the file, then match a target

Open the [loudness meter](/loudness-meter) and drop an MP3, WAV, M4A, OGG, or
FLAC file. Two readings show up.

**Integrated** is the K-weighted loudness of the file, in LUFS. A voice memo
recorded across the table often lands well under −16. A mix that was already
pushed for streaming may already be near −14.

**Sample peak** is the largest sample, in dBFS. Matching a target applies one
gain to the whole file. If that gain would push the loudest sample past
−1 dBFS, the gain stops there. The page then tells you the LUFS you actually
reached, which can be short of the target. Turning it up further would clip.

A silent file has no loudness to match. A stereo file is measured as stereo.
The two channels are not mixed down before the reading.

## Which target to pick

- **Podcast, −16.** The number most hosts and networks still ask for when
  they do not name another one.
- **Streaming, −14.** Use it when the next stop is a music or video platform
  that publishes a loudness target around there.
- **Broadcast, −23.** Use it when the delivery spec says −23. It will sound
  quieter than a podcast master played next to it. That is the point of the
  spec, not a failed export.

Export MP3 or WAV after you pick one. The processing stays in the browser.

## This is not peak normalize

[Peak normalize](/normalize-audio) raises the file until the loudest sample
sits just under clipping. A quiet voice with one loud cough barely moves,
because the cough is already the peak. LUFS matching raises the average
loudness and then stops if the peak would pass −1 dBFS.

If the problem is that some sentences are loud and others are buried, one
gain for the whole file cannot fix the balance inside it. That is a
[compressor](/compressor): it evens the loud and quiet parts, then restores
the original peak. It is not a file-size shrink.

## After the number

If the file is full of long pauses, measure it after you
[remove the silence](/guides/remove-silence-from-podcast). Dead air pulls
integrated loudness down, so a reading taken before the cut is not the
reading of the episode you will publish.
