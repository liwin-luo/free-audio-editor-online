---
title: How to Convert M4A to MP3
description: Turn an M4A or AAC file into MP3 with Music, GarageBand, VLC, Audacity, or ffmpeg. The browser page converts AAC without uploading it.
tool: m4a-to-mp3
date: 2026-10-20
layout: ../../layouts/Guide.astro
---

An M4A file is usually an iPhone voice memo or an AAC download. A car stereo, an
old speaker, or a form that only accepts MP3 will not open it. Converting means
decoding that audio and saving an MP3. Most websites do this by uploading the
file. A voice memo does not need to leave the phone.

## What is inside the file

M4A is a container. Open one and you usually find AAC. Voice Memos and most AAC
downloads are that. The same extension sometimes holds Apple Lossless (ALAC).
The name does not say which.

AAC and MP3 are both lossy. The conversion cannot put back detail the first
encode threw away. A higher MP3 bitrate only spends more bits on what is still
there.

Three files are easy to mix up with this job:

- A video MP4 belongs on the [MP4 to MP3 converter](/mp4-to-mp3). That page
  drops the picture and keeps the soundtrack.
- An Apple Music subscription track, or an older purchase stored as protected
  AAC, will not convert. The file has to be a local copy, and it has to play
  outside Apple Music. In the Music app, Create MP3 Version stays grey for the
  locked ones. Nothing here removes that lock.
- ALAC plays in the Music app, in VLC, and in ffmpeg. A browser often stays
  silent. If a plain browser tab will not play the file, the browser converter
  at the end of this page cannot decode it either.

## Music app on a Mac

Apple's path is the Music app. The bitrate is chosen before the convert
command, in Import Settings. Create MP3 Version uses that setting. It does not
ask again.

1. In the menu bar, choose Music > Settings.
2. Click Files, then Import Settings.
3. Set Import Using to MP3 Encoder. Set the quality in that same window. Click
   OK.
4. If the M4A is not in the library, drag it in from Finder.
5. Select the file. Choose File > Convert > Create MP3 Version.
6. The MP3 shows up next to the original. Select the MP3 and choose File > Show
   in Finder when you need the file itself.

The original M4A stays in the library. This only works on a local, unprotected
file. These steps are the Mac app. On Windows, use VLC, Audacity, ffmpeg, or
the browser page below.

## GarageBand on a Mac

GarageBand is the other path Apple documents. It opens a project for a job that
is one export.

1. Choose File > New, then Empty Project. If a second window asks again, pick
   Empty Project there too.
2. In Create New Track, pick Mic or Line. You will not record.
3. Drag the M4A from Finder into the Tracks area.
4. Turn the metronome off. A click through the whole export is the metronome
   left on.
5. Turn Cycle off, and select the whole region. Share > Export Song to Disk.
6. Choose MP3, pick a quality, and enable "Export cycle area, or length of
   selected regions (if Cycle is turned off)." Choose a name and export.

If Cycle is still on, that checkbox exports the yellow cycle bar, not the whole
memo.

## VLC

VLC already plays almost anything, including ALAC. The converter is in the same
app. No extra download.

On Windows and Linux, choose Media > Convert / Save. On a Mac, choose File >
Convert / Stream. Add the M4A, then Convert.

Pick the profile Audio - MP3. That profile is 128 kbps, 44.1 kHz, stereo.
Speech can stay there. For music, click the wrench beside the profile, open the
audio codec, and set 192 or 320 kbps.

Browse to a destination and type a name that ends in `.mp3`. Without that
extension, other apps can refuse the file. Click Start.

## Audacity

Use Audacity when you also need to cut the file before it becomes an MP3. Open
the M4A, edit, then File > Export Audio and choose MP3.

A current install from [audacityteam.org](https://www.audacityteam.org/) opens
M4A. An older copy that refuses the file is missing FFmpeg. Installing Audacity
only to convert, with no edit, is the long way around.

## ffmpeg

ffmpeg is the command for a folder of files, or for an ALAC file the browser
will not open.

```
ffmpeg -i input.m4a -codec:a libmp3lame -b:a 192k output.mp3
```

Change `192k` to `128k` or `320k`. The original file is not modified.

## An upload site

CloudConvert, Convertio, and sites of the same shape take the file, convert it
on a server, and hand back a download. They decode files a browser cannot,
including a lot of ALAC. The file leaves your device for as long as that site
keeps uploads. Free tiers add a size cap, a queue, or a page of ads.

Use one when the file is fine to send and the local options have already
failed. A voice memo, a meeting, or an unreleased song is a bad file to upload
for a conversion the phone can do itself.

## Which bitrate

The number describes the MP3. It does not repair the M4A.

- **128 kbps** is the right rate for speech: a voice memo, a meeting, a
  lecture. Music at 128 kbps is listenable and slightly dull. VLC's stock MP3
  profile is this rate.
- **192 kbps** is the sensible middle for music you will actually listen to.
- **320 kbps** is the top of MP3. Use it when the source is a clean AAC
  recording and you want the smallest compromise. It is still lossy. If you
  still plan to trim or normalize, export WAV and encode MP3 once, at the end.
  Encoding MP3 twice is the step that loses more detail.

## In the browser, on this site

For an ordinary AAC voice memo or AAC download, the short path is the
[M4A to MP3 converter](/m4a-to-mp3) on this site. It runs in the browser you
already have, on an iPhone, Android, Mac, Windows, or Linux. Nothing is
installed. The tab decodes the file and encodes the MP3 on the device. The encoder is
lamejs. It ships with the site and loads only for that export. The M4A stays
where it was.

Pick a different tool when the file is not that case. A song already in the
Music library on a Mac can stay in the Music app. A file a browser tab will not
play, often ALAC, belongs in VLC or ffmpeg. The file stays on your machine. A
cut before the export belongs in Audacity, with one MP3 at the end.

1. Open the [M4A to MP3 converter](/m4a-to-mp3).
2. Drop the `.m4a` or `.aac` file, or click to browse. On a phone, tap to
   browse and pick the memo from Files. A video MP4 belongs on
   [MP4 to MP3](/mp4-to-mp3).
3. The format menu opens on **MP3 · 320 kbps**. Change it if you want 192 or
   128. The same menu includes **WAV · lossless**. Pick that when you still
   plan to trim or normalize, and encode MP3 once, later.
4. Click **Convert to MP3**. The file downloads to your device. The label stays
   Convert to MP3 when the menu is on WAV. The download is the WAV.

Try the file in a plain browser tab first. If you hear it, this conversion will
work. If the tab is silent, use VLC or ffmpeg.

Tags and cover art are not copied. The MP3 is written without metadata. Put a
title back with the [MP3 tag editor](/mp3-tag-editor) if the player needs a
name.

Keep the M4A if you still need the original. After you have the MP3, cut a
section with the [MP3 cutter](/mp3-cutter), or trim the ends with the
[audio trimmer](/audio-trimmer).
