---
title: How to Make a Music Visualizer Video for YouTube and Shorts
description: Turn a song into an animated spectrum video for YouTube or Shorts — trim the track, pick the frame, record it live in the browser. Free, no editor.
tool: music-visualizer
date: 2026-10-23
layout: ../../layouts/Guide.astro
persona: podcast-producer
sources:
  - label: YouTube Help — Upload requirements (supported file formats)
    url: https://support.google.com/youtube/answer/1722171
  - label: YouTube Help — Shorts
    url: https://support.google.com/youtube/answer/10059070
---

A song upload lives or dies in the first second, and a static cover image
spends that second saying nothing. The fix is the video every label and
lo-fi channel uses behind their audio: the spectrum of the song, moving.
You do not need an editor for it. On the
[music visualizer](/music-visualizer) the whole job is one pass through the
song: drop the file, pick a frame and a look, press record, and the video
is in your downloads when the song ends. A three-minute song takes about
four minutes end to end, and the audio never leaves your device.

![The music visualizer before a file is open. Drop the song, or click to browse.](/guides-media/make-a-music-visualizer-video/01.webp)

## Trim the song before you record, not after

The video comes out exactly as long as the audio. That is the deal this
page makes: it records in real time instead of rendering on a server, which
is why it is free with no watermark and no length limit. The consequence is
that a full song produces a full-length video, even if the part worth
watching is 30 seconds.

So decide the length first:

- **A full track for YouTube** — record the whole song. Nothing to trim.
- **A Shorts or Reel** — cut the section that carries the post, usually
  15–60 seconds, with the [audio trimmer](/audio-trimmer) first. A 40-second
  recording beats a three-minute one on every count: less to watch back,
  less to upload, less room for a hiccup to ruin the take.
- **A section for a longer video** — trim out the chorus or the drop and
  drop the clip into your timeline as a background layer.

One trim, thirty seconds of work, and every later step gets shorter.

## Pick the frame the platform wants

The **Size** select decides the canvas the video is recorded from. Pick it
for where the video is going, because the wrong frame means black bars or
an ugly crop at upload:

- **Landscape 16:9 · 1920×1080** — a normal YouTube upload or an end card.
- **Vertical 9:16 · 1080×1920** — Shorts and Reels. YouTube counts vertical
  full-screen videos as Shorts, per its own help pages, so this is the one
  for the Shorts shelf.
- **Square 1080×1080** — feed timelines, where neither wide nor tall fits.
- **Custom** — clamped between 200 and 2160 pixels per side so the capture
  stays smooth on a modest machine.

The preview canvas *is* the recording canvas. What you see moving is
pixel-for-pixel what lands in the file, so judge colors and framing in the
preview, not after the export.

## Choose the look in two picks

The **Style** select has four looks, all reading the same frequency
analysis: **Spectrum bars** (the classic analyzer), **Mirrored bars** (the
player-style fold around the middle), **Ring** (bands in a circle — the one
that reads best in a square or vertical frame), and **Oscilloscope** (the
waveform itself as a breathing line).

Pick a **Theme** next: seven one-click color pairs from Neon to Paper. A
theme is a starting point, not a commitment — the bar color and background
color stay editable, so you can pull the background toward the color of
your cover art and make the whole post look deliberate. This is a
one-minute decision; the ring on a dark background is the safe default and
the mirrored bars are the one viewers read as "music player" instantly.

![Ring style playing on the Neon theme. The preview canvas is the exact pixels the video records.](/guides-media/make-a-music-visualizer-video/02.webp)

## Record: one pass through the song

Press **Record video**. The song plays once from the start while the
browser captures the canvas and the audio together, and the file downloads
when the song ends. There is no export queue and no second render.

The only job during recording is to leave the tab in front. Browsers
throttle drawing in background tabs, and a throttled frame loop shows up as
a frozen picture while the soundtrack keeps going — the one failure this
page cannot undo. Start the recording, watch the spectrum for a few
seconds, and go do something on another monitor if you have one; do not
minimize the window.

The file comes out as WebM (VP9 or VP8 video, Opus audio, about 8 Mbps at
1080p, 30 fps). That is not a compromise you have to engineer around:
YouTube lists WebM among its supported upload formats, so the file goes
from the downloads folder straight to the upload dialog. Play it back once
before uploading.

![Recording in progress. The controls are locked, Cancel recording sits next to the disabled Record video button, and the timer tracks the song.](/guides-media/make-a-music-visualizer-video/03.webp)

## The mistakes that cost a take

- **Background tab.** The frozen-picture failure above. It is the only way
  to actually lose a recording here.
- **Recording the full song for a short post.** The record pass is real
  time. Trim first and a Shorts take costs 40 seconds instead of four
  minutes.
- **Trying to record on iPhone or iPad.** Safari can play and show the
  animation but cannot record a canvas, so the record button stands down
  there. Android Chrome records fine; on Apple mobile, the honest path is a
  screen recording or the desktop.
- **Custom sizes at the extremes.** Sizes clamp to 200–2160 per side on
  purpose. A 4K canvas dropped to real-time capture on a laptop is how you
  get dropped frames; the presets exist because they hold 30 fps.

## Before you upload

Play the downloaded file once, full screen. Check three things in one pass:
the video starts on sound (not a second of silence), the frame matches the
platform you picked, and the colors hold up next to your cover image. Then
upload — title the post with the song name, because the visualizer is the
packaging, and the search term is still the music.

If the take is wrong, do not patch the video: fix the trim, the frame, or
the theme, and record again. A second pass costs the length of the song,
and it always looks better than an edit patch.
