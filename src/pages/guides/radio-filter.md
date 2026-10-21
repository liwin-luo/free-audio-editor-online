---
title: Radio Filter — Make Audio Sound Like a Radio
description: Narrow a voice to the 300–3,000 Hz radio band with the high-pass and low-pass filters, and add grit if you want it. Nothing is uploaded.
tool: high-pass-filter
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: podcast-producer
sources:
  - label: Wikipedia — Voice frequency (the 300–3000 Hz telephony band)
    url: https://en.wikipedia.org/wiki/Voice_frequency
  - label: W3C — Audio EQ Cookbook (high-pass and low-pass filter design)
    url: https://www.w3.org/TR/audio-eq-cookbook/
---

A caller who has to sound like they phoned into a studio, a clip that comes out
of an old receiver, an intercom announcement in a sketch: the radio sound is
not an effect you add. It is the frequency band you take away. A
[high-pass filter](/high-pass-filter) followed by a
[low-pass filter](/low-pass-filter) narrows the recording to roughly the
300–3,000 Hz band that telephones and small speakers reproduce, and the whole
pass takes about two minutes for a three-minute clip. This is a job for the
raw take, before music or fades go in.

## What actually makes the sound

Speech stays intelligible between about 300 and 3,000 Hz. The telephone
network was built on that band, and a voice restricted to it reads as "radio
or intercom" to every listener, because that is what those devices pass
through.

Below 300 Hz sits the warmth of a voice, plus every bit of rumble the room
gave you. Above 3,000 Hz sits the air, the sibilance and the hiss. Remove both
bands and the recording sounds small and boxed in, which is exactly the goal
here. The [equalizer](/equalizer) can approximate the move with its low and
high shelves, but shelves are a gentle tilt. The two filters give the harder
cutoff the effect is known for.

"Radio" and "telephone" sit on the same recipe. The telephone band runs a
little wider, to about 3,400 Hz, and a phone call usually adds compression.
For a radio, the band plus a hint of grit reads closer. Try the plain band
first, then decide whether the clip needs the decoration.

## Variations worth trying

Each variation is the same two filters with different numbers, so it costs one
extra listen per setting:

- **Walkie-talkie**: high-pass at 500 Hz, low-pass at 2,500 Hz, then the
  [bitcrusher](/bitcrusher) at 8 bits. The narrow band plus the steps is the
  toy radio in every sketch.
- **Old AM set**: high-pass at 150 Hz, low-pass at 5,000 Hz. The wider band
  keeps some body and air, which reads as "old speaker" instead of "phone".
- **Studio phone-in**: high-pass at 400 Hz, low-pass at 3,000 Hz, no grit.
  Callers on real phone hybrids sound like this, and it is the least
  cartoonish of the three.

Export a WAV between variations so each listen starts from the same clean
intermediate, and keep the pair of numbers you settled on next to the project.
The next clip in the same series should match, and guessing the settings
again is how a series ends up sounding like different radios.

## Run the two filters

1. Open the [high-pass filter](/high-pass-filter) and drop the raw file.
2. Set the cutoff to **300 Hz**. Listen to one full sentence: names and
   consonants should still land. Export as **WAV**, because the second pass
   needs a clean intermediate.
3. Open the [low-pass filter](/low-pass-filter), drop the WAV you just
   exported, and set the cutoff to **3,000 Hz**.
4. Listen once more, then export **MP3** for delivery. This way the audio is
   encoded once, at the end.
5. Optional: the [distorter](/audio-distorter) or the
   [bitcrusher](/bitcrusher) adds the crunch of a worn speaker on top. The
   band is the sound; the grit is decoration. A little goes a long way.

Each page processes one file, so the two filters run as two exports. Keeping
the intermediate in WAV is what keeps the total at one MP3 encode.

## Where the cutoffs go

- **300 Hz** on the high-pass keeps speech fully readable. Male voices lose
  nothing they need below that line.
- **3,000 Hz** on the low-pass keeps consonants clear and takes the hiss and
  the "modern" brightness with it.
- **500 Hz** on the high-pass is the muffled version. Words start to cost
  effort, and the clip reads as a bad upload rather than a radio.
- **Music is a different case.** A song loses its bass and its cymbals at
  these settings, which is authentic to a small radio and usually not what a
  track needs. The recipe is for voices.

## Common mistakes

- Running the high-pass alone. The top end still sounds modern, and the clip
  sits between two worlds.
- Pushing the high-pass past 500 Hz. You get a muffled file, not a radio.
- Adding reverb instead. Reverb puts a voice in a room; the radio sound comes
  from the band that is missing. Stack reverb on top afterwards if the sketch
  needs a hall, but it will not produce this effect by itself.
- Judging the cutoffs on a single word. Play a full sentence with a natural
  pause. The effect is easiest to hear in the gaps between phrases.

## What the filters do not do

They do not remove noise that lives inside the band. Hiss between 300 and
3,000 Hz survives both filters untouched. The
[silence remover](/silence-remover) cuts pauses; it does not clean background
noise either.

They do not change the voice. Pitch, speed and identity stay exactly where
they were. If the character also needs a shifted voice, the
[pitch changer](/pitch-changer) is the page for that step, and it stacks fine
after the filters.

## Before you publish

- Listen on a phone speaker. The radio band overlaps what a phone reproduces
  anyway, so the clip should survive the smallest speaker in the house. If it
  only works on headphones, the cutoffs went too far; back toward 300 and
  3,000.
- Keep the raw take. A filter pass cannot be undone after export, and the
  unfiltered version is the one you will want when the sketch changes.
- Budget the listen-back at another minute. The filters themselves stay a
  two-minute job for a three-minute clip.
