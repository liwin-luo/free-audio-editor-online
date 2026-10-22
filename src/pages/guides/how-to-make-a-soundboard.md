---
title: "How to Make a Soundboard: Record, Trim, Trigger, Export"
description: "Build a soundboard from your own clips: record or upload, trim each sound to the part that matters, map hotkeys, and keep the board in a file you own."
tool: soundboard
date: 2026-10-22
layout: ../../layouts/Guide.astro
persona: podcast-producer
sources:
  - label: ITU-R BS.1770 — Algorithms to measure audio programme loudness (summary via Wikipedia)
    url: https://en.wikipedia.org/wiki/ITU-R_BS.1770
  - label: OBS Studio documentation — Audio settings and desktop audio capture
    url: https://docs.obsproject.com/
---

A finished soundboard is a five-minute asset, not an afternoon project. The workflow
that lands there is four steps: record or upload the raw material, cut each clip to
the half-second to five seconds you will actually fire, put the board on hotkeys, and
export the board as a file so it survives. This page runs the workflow in the
[soundboard](/soundboard) on this site — everything in the browser, nothing uploaded —
with the timing notes that matter when the board has to work during a live show.

![The soundboard: square clips on a dark board, ready to trigger](/guides-media/how-to-make-a-soundboard/01-board-flow.webp)

## Before you start: gather the raw material

Decide what the board is for first, because that decides the clip list. A streaming
board wants three to eight reaction sounds. A podcast board wants a rimshot, a ding,
a wrong-answer buzzer, and applause. A classroom board wants two: correct and wrong.
Write the list down — five lines on paper saves twenty minutes of aimless trimming.

Keep the sources legal and clean: your own microphone takes, audio you have rights to,
or generic synthesized effects. The tool page ships eleven built-in sounds — air horn,
boom, sad trombone, rimshot, buzzer and more — synthesized on the page, so the board
works before you record anything.

## 1. Record or upload the clips

Open the soundboard and use **Upload audio** for files or **Record** for the
microphone. Recording straight into the board is faster than external takes for
catchphrases and reactions: press record, say the line, stop, and the clip lands on
the board as a new square.

Time cost per clip is about twenty seconds if the source is ready. If a clip comes in
longer than sixty seconds it is skipped — boards run on short triggers, so trim long
files first.

## 2. Trim every clip to its trigger moment

The pencil on a square opens the trim editor. Drag the two handles around the exact
part that should play — the punchline, not the setup; the boom, not the silence before
it — and press loop to hear it the way the audience will. Then **Apply trim**.

Two habits separate a good board from a messy one:

- **Cut the silence off both ends.** A quarter second of dead air turns a snappy
  reaction into a late one. The timecode readouts are exact to a hundredth of a
  second — use them.
- **Keep the board consistent.** Clips in the half-second to three-second range fire
  cleanly over talking. Rename each square and give it a color so the right key is
  findable at a glance.

## 3. Put the board on hotkeys and test the overlap

Every square gets a key automatically, in board order: 1 through 9, then 0, then the
top letter row. The badge on each square shows its key. Fire a few in a row and
overlapping is the point — a rimshot under a joke while the boom from the previous
line still rings is what a board is for. **Esc** stops everything if a run goes wrong.

For streaming, the sounds play through your desktop audio, so capture software hears
them like any other system sound. Feeding them directly into a Discord call needs a
virtual microphone from a desktop app — the browser cannot inject into another
program's mic, and any web tool claiming otherwise is outsourcing to one.

## 4. Export the board as a file

**Export board** writes every clip — audio included — into one JSON file on your disk.
Nothing is stored in the browser: closing the tab without exporting is how boards die.
The file imports back in one click, and it also reads boards from soundtools.io, so a
migration takes one import instead of a rebuild.

## The jobs, and the one this page will not take

A board earns its place in four rooms. A stream wants three to eight reactions, and it wants overlap. A podcast wants a rimshot, a ding, a wrong-answer buzzer, and applause. A class wants correct and wrong, on squares a thumb can hit. A presentation or a prank wants the same thing on a phone in your hand: tap, and the room hears it from the speaker.

What the room does not get is the board inside a Discord or game microphone. Voicemod and Resanance are Windows apps that install a virtual microphone so the call hears the sound as if you made it. A browser cannot do that, and this page does not pretend to. If the call has to hear the clip, use one of those apps. If the stream, the room, or the recording hears the speakers, this board is the faster setup, and it also runs on a phone.

If you already built a board on soundtools.io, export it there and use **Import board** here. Buttons that contain audio come across. A gradient color on their side maps to the nearest color on this board.

## Common mistakes

- **Clips longer than five seconds.** If you need the context, say the context — the
  board fires the punchline.
- **Levels all over the place.** One thunderous clip next to three quiet ones forces
  constant volume rides. Match them by ear, loudness-matched the way delivery
  standards like ITU-R BS.1770 treat level: as an average, not a peak.
- **No export before closing the tab.** The board is session-only by design — the
  export file is the memory.
- **Copyright shortcuts.** A game's or TV show's audio is somebody's recording, and a
  celebrity's voice is somebody's identity. Synthesized generics and your own takes
  never start that conversation — the rights map is in
  [are meme sounds copyrighted](/guides/are-meme-sounds-copyrighted).

## Where to go from a finished board

Wire it into a stream by capturing desktop audio in your broadcast software, run it on
a second monitor or the same keyboard as your scene switcher, and keep the export file
in the same folder as your show assets. When a moment needs a new sound, record it
straight into the board — the whole loop from idea to hotkey is under a minute, which
is why the board earns its place in the show.
