---
title: How to Convert Audio to MIDI (Free, in Your Browser)
description: Turn a hummed melody, a voice, or a solo piano into a .mid file in your browser. What the model reads well, what it gets wrong, and what the file holds.
tool: audio-to-midi
date: 2026-10-21
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: Basic Pitch — Spotify's free and open-source audio-to-MIDI converter
    url: https://basicpitch.spotify.com/
  - label: Bittner et al., A Lightweight Instrument-Agnostic Model for Polyphonic Note Transcription and Multipitch Estimation (ICASSP 2022)
    url: https://arxiv.org/abs/2203.09893
---

A recording gives you sound. A MIDI file gives you notes: the pitch of every
note, when it started, how long it lasted, and how hard it was hit. The
[audio to MIDI converter](/audio-to-midi) turns the first into the second in
the browser, running Spotify's Basic Pitch model on your device, and the audio
is never uploaded. Get the notes into a DAW and you can fix a wrong note, swap
the instrument, or quantize the timing instead of recording the take again.

## What converts well, and what never will

Basic Pitch is built for one instrument at a time: a single melody line, one
sung part, or a solo piano. Give it that, and the notes come back close to
what you played.

A full mix is a different job. The model hears every instrument on one
channel (stereo is mixed down to mono before it runs), so a dense recording
turns into extra notes, missing notes, or both. Drums have no pitch to read
and usually come out as nothing. There is no stem split here: one file in,
one track of notes out.

If what you actually wanted was the key or the BPM, you do not need MIDI at
all. The [key and BPM finder](/key-bpm-finder) reads those two numbers
without writing a file.

## Convert the file

1. Open the [audio to MIDI converter](/audio-to-midi).
2. Drop one instrument: an MP3, WAV, M4A, or a video with the part you want.
   Anything longer than 3 minutes is refused. Trim it first on the
   [audio trimmer](/audio-trimmer), then convert.
3. The first conversion downloads the model from this site, under 1 MB. The
   browser keeps its copy, so the wait happens once.
4. Read the note count before you download. A hummed melody should land
   somewhere near the number of notes you sang. A count in the hundreds for
   a short melody means the recording was busier than one instrument, and
   the file will be a mess.
5. Click download and the `.mid` file saves to your device.

There is no audio preview on the page. The notes are listed as text, and the
first time you hear them is in your DAW. It works in current Chrome, Edge,
Firefox, and Safari; a phone that is low on memory can fail the conversion,
in which case a shorter clip usually goes through.

## What is inside the .mid file

One track, MIDI type 0. Each note carries a pitch between 21 and 108 (A0 to
C8 on a piano keyboard), a start time, a length, and a velocity. The tempo
mark is 120 BPM, which makes the note times line up with the recording in
seconds. That 120 is not the tempo of your song.

The track starts on a General MIDI piano sound so a DAW has something to
play on import. It is not a recording of your original instrument; swap the
sound once the file has landed.

Two things the file does not contain: pitch bends, so a sung slide arrives
as a steady note at the end pitch; and notation. Nothing on this site
produces sheet music.

## After the download

Drag the `.mid` into GarageBand, Logic, Ableton, or any DAW that reads MIDI.
The usual next steps: replace the General MIDI piano with a real instrument
sound, fix the one or two notes the model misheard, and quantize if the
timing drifts.

If the take is fine and only its overall key is wrong, changing the pitch of
the original audio, with no notes involved, is the job of the
[pitch changer](/pitch-changer).

If you use Logic and were searching for its built-in audio-to-MIDI command:
this page is the browser version, for when Logic is not open. The file it
writes drags into a Logic project afterward like any other MIDI region.

## Common mistakes

**Converting a full song and expecting separated tracks.** The output is one
track of notes played by the whole mix. Stems are a different tool entirely.

**Judging the result by ear alone.** The note count on the page is the fast
quality check. A nonsense count means a nonsense file.

**Feeding in a recording of speakers.** A phone recording of a song through
a room picks up the room, and both sources get transcribed. Convert the
audio file itself, not a re-recording of it.

**Expecting the song's tempo in the file.** The 120 BPM mark exists so the
note times match the recording's seconds. Your DAW's click will not follow
the song; read the real tempo with the
[key and BPM finder](/key-bpm-finder) first.
