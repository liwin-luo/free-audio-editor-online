---
title: How to Remove Hum with a High-Pass Filter
description: Cut 50/60 Hz mains hum, rumble and wind from a recording with a high-pass filter. Find the right cutoff for a voice and export without uploading.
tool: high-pass-filter
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: W3C — Audio EQ Cookbook (biquad filter design)
    url: https://www.w3.org/TR/audio-eq-cookbook/
---

A steady low drone under a voice is usually one of two things: electrical mains
hum at 50 or 60 Hz, or rumble from traffic, handling and the room itself. Both
sit below the part of the voice that carries meaning. A
[high-pass filter](/high-pass-filter) lets everything above a cutoff pass and
rolls off everything below it: you sweep the cutoff, listen, and export, and
the file is processed in the browser.

## Find out what the noise is

Play the recording on headphones and listen to the bottom end.

**A steady tone** at 50 Hz (Europe, Asia, much of the world) or 60 Hz (North
America) is mains hum. It often has harmonics at 100/120 Hz and 150/180 Hz,
which is why a filter that only removes the fundamental may leave a ring.

**A rumble or thump** that moves with the room (traffic, footsteps, a desk
knock, wind on a phone mic) is broadband low-frequency noise. A high-pass
filter handles it well.

**A hiss or a whistle** at the top end is not a low-frequency problem. The
[low-pass filter](/low-pass-filter) is the page for that.

## Set the cutoff for a voice

A high-pass filter is not a noise-removal button. It is a tone control with a
direction. Set it too low and the rumble stays; set it too high and the voice
loses its body.

- **80–120 Hz** suits most adult voices and removes mains hum and handling
  noise.
- **Male voices** keep their body down to about 100 Hz.
- **Female voices** keep theirs down to about 150–200 Hz.
- **Past 300 Hz** speech starts to sound like a telephone. That can be a
  deliberate style, but listen before exporting.

For a podcast or a voice memo recorded in a quiet room, start at 80 Hz. For a
noisy street interview, try 120 Hz. For a deep narration voice, stay near
80 Hz.

## Sweep, listen, compare

1. Open the [high-pass filter](/high-pass-filter) and drop the file.
2. Start at 20 Hz, effectively bypassed, and listen to a sentence.
3. Raise the cutoff in small steps. Stop when the rumble disappears.
4. Bypass and re-engage the filter. If the voice suddenly sounds thin, you
   went too far.
5. Check a plosive, a “p” or a “b”, and a low vowel. Those are where an
   over-cut voice gives itself away.
6. Export MP3 for delivery or WAV if the file will be edited again.

Do not judge on one word. Play a full sentence with a natural pause, because
the noise is most obvious in the gaps.

## Hum with harmonics

A high-pass filter removes the fundamental at 50 or 60 Hz, but the harmonics
above it can survive. If the hum still rings after filtering:

- Move the cutoff up to 100–120 Hz. This takes more of the harmonic series
  with it.
- Use the [equalizer](/equalizer) to cut the specific harmonic that remains,
  rather than filtering the whole low end.
- If the hum is severe, re-record. A filter can hide it; it cannot remove the
  distortion the hum may have introduced.

The [low-pass filter](/low-pass-filter) does the opposite job at the top end.
Chaining the two narrows the band to the voice, which is a common cleanup for
speech that will be transcribed or published.

## What filtering does not fix

It does not remove background conversation, keyboard clicks, or a dog barking.
Those sit in the same frequency range as the voice, so a filter would damage
the voice before it removed the noise.

It does not make a quiet file louder. [Normalize](/normalize-audio) or the
[level compressor](/compressor) does
that. It does not remove long pauses; the
[silence remover](/silence-remover) does.

Filtering itself does not resample or change pitch. The only quality loss is
the export encode: WAV keeps the filtered samples, MP3 re-encodes once at the
bitrate you pick.

## A practical order

For a voice recording that needs several fixes, work in this order:

1. Trim the ends and remove long gaps.
2. High-pass the rumble.
3. Compress if the loud and quiet parts are far apart.
4. Normalize or match a LUFS target last.

That order avoids processing audio you are about to delete, and it puts the
level changes after the tonal ones. If the recording is still noisy after the
high pass, the problem is probably not below the voice; it is the room.
