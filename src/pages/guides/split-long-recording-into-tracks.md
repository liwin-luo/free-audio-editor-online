---
title: How to Split a Long Recording into Tracks
description: Split a long recording into 2–16 equal files in the browser, or cut at the points you choose. Get one ZIP and keep every part local.
tool: split-mp3
date: 2026-10-21
layout: ../../layouts/Guide.astro
sources:
  - label: Audacity Manual — Splitting a recording into separate tracks
    url: https://manual.audacityteam.org/man/splitting_a_recording_into_separate_tracks.html
---

A long recording is hard to send, hard to replay and hard to name. Splitting it
into tracks solves all three: each part is a file you can label, send and drop
into a player. The question is where the cuts should land.

There are two jobs hiding under “split”. Equal parts, when the length matters
more than the content. And chapter cuts, when you know the moments. The browser
has a page for each.

## Equal parts: the splitter

The [split MP3](/split-mp3) page cuts one file into 2 to 16 equal pieces. Each
part is the same length to the sample, and the parts download together as one
ZIP.

1. Drop the MP3, WAV, M4A, OGG or FLAC file.
2. Set **Parts** from 2 to 16. The page shows how long each part will be.
3. If only part of the file should be split, drag a selection on the waveform.
   With no selection, the whole file is split.
4. Export MP3 or WAV and download the ZIP.

The cuts are equal time, not a scan for silence, chapter marks or a new song. A
quiet bar is cut wherever the clock says. That is fine for a backup, a long
voice memo you want in chunks, or a file a chat app refuses to send whole.

WAV keeps every sample at the cut. Each MP3 part is encoded once at the bitrate
you choose. Playing the MP3 parts back to back can show a few milliseconds of
codec padding at each join; the samples themselves are not overlapped or
dropped.

## Chapter cuts: the cutter

If the recording has natural boundaries — songs in a live set, segments in a
workshop, answers in an interview — do not split it into equal pieces. Mark
each chapter and export it as its own file.

Use the [MP3 cutter](/mp3-cutter) or the [audio trimmer](/audio-trimmer) and
repeat the select-and-export step for each chapter:

1. Drop the file.
2. Select the first chapter and export it with a name that sorts correctly:
   `01-intro.mp3`, `02-first-question.mp3`.
3. Select the next chapter and export it.
4. Keep going until the recording is covered.

This is more work than an equal split, but the files line up with the content.
A player will show the right title, and a listener can skip a chapter instead
of scrubbing through a 40-minute part.

## Where to cut a live recording

If the recording contains music, cut in the applause or the gap between songs,
not on the first beat. A fraction of a second of room sound at the start and
end is less jarring than a hard cut into a vocal.

For speech, cut in the pause after a sentence. A breath at the start of the
next part is normal; a clipped word is not.

If the recording has long silences and you mainly want them gone, use the
[silence remover](/silence-remover) first, then split what remains. That
reduces the total length before you start choosing chapter points.

## Naming and organizing the parts

The ZIP arrives with the source name and numbered parts. Rename them before
you upload or share:

- `01-topic.mp3`, `02-topic.mp3` sorts correctly in every file browser.
- Put the date in the folder name, not in every file name.
- Keep the original file. A split is a copy, not a replacement.

If the parts will be edited further, export WAV. If they are finished
listening copies, MP3 at 192 kbps is enough for speech and 320 kbps for music.

## Common mistakes

**Using 16 parts because the slider goes that high.** A 20-minute talk split
into 16 pieces is 75 seconds each — too short to be a chapter and too many to
manage. Choose the count the content suggests, not the maximum.

**Splitting an MP3 and rejoining it later.** Each export is another encode.
If the parts will be joined again, split the WAV and join the WAV.

**Expecting silence detection.** The splitter cuts by time. The silence remover
is the page that looks for gaps, and it removes them rather than writing
separate files.

**Forgetting the original.** Keep it until you have checked every part. The
ZIP is convenient, not a backup.

Once the parts exist, the [audio joiner](/audio-joiner) can put them back in a
different order, and [normalize](/normalize-audio) can bring them to a
consistent peak before you publish.
