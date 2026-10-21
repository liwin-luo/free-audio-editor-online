---
title: How to Edit MP3 Files
description: Cut, fade, or retitle an MP3 in Audacity, with ffmpeg, or in the browser. Export once, and use WAV when another edit is still coming.
tool: mp3-editor
date: 2026-10-20
layout: ../../layouts/Guide.astro
persona: engineer
sources:
  - label: Audacity — the free, open-source, cross-platform audio editor
    url: https://www.audacityteam.org/
  - label: FFmpeg — the complete, cross-platform solution for record, convert and stream audio and video
    url: https://ffmpeg.org/
---

Editing an MP3 usually means one of four jobs: keep a section, delete a chunk,
change how loud or how fast it is, or fix the title the player shows. The
[MP3 editor](/mp3-editor) covers all four in the browser. The sound jobs decode
the file and write a new one; the title is a tag, and a tag is not the sound.

Every sound edit is a new encode. MP3 was already lossy. A second encode throws
away a little more. Do the cut, the fade, and the volume in one export. If
another edit is still coming, export WAV and encode MP3 at the end.

Windows does not ship an editor for this. VLC plays the file and can convert
it. VLC does not give you a region to keep.

## Audacity

Audacity is the desktop editor for a session: several tracks, a noise problem,
or a project you will open again tomorrow. A current install from
[audacityteam.org](https://www.audacityteam.org/) opens an MP3 and exports one.

1. Choose File > Open, or drop the MP3 on the window.
2. Drag across the waveform. To keep only that part, choose Edit > Remove
   Special > Trim Audio. The shortcut is Ctrl+T, or Cmd+T on a Mac.
3. To delete a chunk and close the gap, select it and choose Edit > Delete.
   The shortcut is Ctrl+K, or Cmd+K on a Mac.
4. Choose File > Export Audio. Pick MP3, and set the bitrate in that dialog.
   128 kbps is the usual rate for speech. For music, use a higher rate, up to
   320 kbps.

Export writes a new file. The original stays where it was. Audacity can also
reduce noise, stack tracks, and load plugins. A one-minute cut does not need
that. The install is the cost of a project.

## ffmpeg

ffmpeg is the cut when you already know the start and the end.

```
ffmpeg -i input.mp3 -ss 00:01:12 -to 00:02:05 -c:a libmp3lame -b:a 192k output.mp3
```

Change the times and the bitrate. Use `128k` for speech and `320k` for music.
This decodes and encodes, so the cut lands on the times you typed. The input
file is not modified.

`-c copy` in place of the encoder is faster, and it does not re-encode. The
cut then lands on an MP3 frame, not on your exact time. The edge can be early
or late by a fraction of a second. Use the encoder when the edge matters.

## An upload site

mp3cut.net, Clideo, and 123apps take the file, edit it on a server, and hand
back a download. They are a reasonable choice for a clip you would post. The
file leaves your device for as long as that site keeps uploads, and the free
tiers are paid for with caps, queues, and ads.

The local routes above are private by construction. Reach for an upload site
only when the file is not sensitive and the desktop tools are genuinely
unavailable.

## The title is a separate edit

Title, artist, album, and cover sit in a tag block. Changing them does not
decode the audio.

On Windows, right-click the file, open Properties, then Details. Title and
artist are editable there. On a Mac, add the song to the Music app, select it,
and choose Song > Info.

Do the sound edit first. Then label the file you actually keep. Labeling
first, then exporting a new MP3, drops the tags on the way out.

## In the browser, on this site

For one file and one export, the [MP3 editor](/mp3-editor) is the short path.
It runs in the browser you already have, on a phone or a computer. Nothing is
installed. The tab decodes the file and writes the new one on the device. The
MP3 you dropped stays on disk.

Stay in Audacity when the job is a project. Stay with ffmpeg when you already
have the times and a folder of files. Use an upload site only after you have
decided the file can leave.

1. Drop the MP3 on the [editor](/mp3-editor). The waveform is the file.
2. Drag a region. **Keep selection** exports only that part. **Delete
   selection** exports everything else. **Precise times** takes a start and an
   end in seconds when the drag is not exact enough.
3. Open **Adjust** for a fade, volume, speed, reverb, or reverse. Do them
   before the export, so the MP3 is encoded once.
4. Press play on the selection. Then pick the format and export.

![song-demo.mp3 in the MP3 editor. Keep selection is on, a region of the file is highlighted, and the format is MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/01-editor.webp)

- **Fade in** and **Fade out** run up to 5 seconds. They shape the start and
  the end of the export. They do not crossfade a join in the middle of the
  file.
- **Volume** runs from 10% to 200%. A limiter catches peaks above 100%, so a
  modest lift stays cleaner than a hard clip. It will still sound strained if
  the file was already loud.
- **Speed** runs from 0.5× to 2×. Pitch moves with it. This is not a
  time-stretch. To change the key and keep the length, use the
  [pitch changer](/pitch-changer).
- **Reverb** runs from 0% to 100%. At 0% the file stays dry. The 100% end is a
  synthesized room mixed in with the sound.
- **Normalize peak** raises the whole file until the loudest sample sits just
  under clipping. The control's own label says it overrides volume. It does
  not make the quiet parts as loud as the loud parts.
- **Reverse** flips the export end to end.

![Adjust open: Fade in and Fade out at 0.0 s, Volume at 100%, Speed at 1.00×, Normalize peak unchecked, Reverse playback unchecked. The format is still MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/02-adjust.webp)

**MP3 · 320 kbps** is the default, and the right choice when this export is the
file you will keep. **192 kbps** is enough to send. **128 kbps** is for speech.
**WAV** is the choice when this edit is not the last one.

Ctrl+Z steps back through recent edits. On a Mac that shortcut is Cmd+Z. Reset
reloads the file you dropped. Closing the tab drops the session, because
nothing is stored on a server.

A file that is quiet all the way through has two honest fixes, and they are
not the same control.

[Normalize](/normalize-audio) measures the peak and applies the largest clean
gain that still avoids clipping. Use it when you do not know how far to push.

[Increase volume](/increase-volume), the MP3 volume booster, is a multiplier
you choose, up to 400%,
with a limiter on the peaks. The editor's own volume slider stops at 200%.
Use the dedicated page when 200% is not enough. Back off if the loud parts
start to pump.

Neither one matches a streaming loudness target. That measurement is LUFS, and
it belongs on the [loudness meter](/loudness-meter) or in a mastering session.

The [tag editor](/mp3-tag-editor) rewrites the title, artist, album, and cover
without touching the audio bytes. It is MP3 only. It does not batch an album,
and it does not carry unusual podcast-chapter fields.

## What this editor will not do

It will not remove a vocal, print a noise profile, or split a song into stems.
Those jobs are a different product. Noise repair and plugins stay in Audacity.

Stacking files you already have is the
[multi-track editor](/multi-track-audio-editor): up to eight tracks, with
level, pan, mute, solo, and where each clip starts. It does not keep a
project, draw a volume curve, or duck music under speech. The
[joiner](/audio-joiner) only places files end to end.

The longer map of which page does which single job is the
[Audacity note](/guides/audacity-alternative). Stay there when the job is a
project. Stay here when the job is one file and one export.
