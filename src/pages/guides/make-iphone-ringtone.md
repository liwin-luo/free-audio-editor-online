---
title: How to Make a Ringtone on iPhone (Free, No Computer Needed)
description: Turn a song into an iPhone ringtone. Build a clip of at most 40 seconds and export M4R. Nothing is uploaded. Firefox exports MP3 instead.
tool: ringtone-maker
date: 2026-10-14
audio: /guides-media/make-iphone-ringtone/narration.m4a
poster: /guides-media/make-iphone-ringtone/poster.webp
youtube: 5Gt0fMdXHwk
layout: ../../layouts/Guide.astro
persona: phone-first
---

An iPhone ringtone is an `.m4r` file, under about 40 seconds. The
[ringtone maker](/ringtone-maker) builds that clip in the browser, and
GarageBand is only the fallback when the browser cannot encode AAC.

## Step 1: Build the ringtone audio

Open the [ringtone maker](/ringtone-maker) and drop in the song (MP3, M4A, WAV,
whatever you have). Then:

1. Drag across the waveform to pick the moment you want: usually the hook, the
   drop, or the first fifteen seconds of the chorus.
2. The selection is capped at **40 seconds** automatically, which matches what
   iOS allows for a ringtone. Shorter is fine and usually better: a ring that
   plays once or twice is all a call needs.
3. Add a short **fade-out** (0.5–1 s in the Adjust drawer). Ringtones loop, and a
   fade makes the jump back to the start sound natural instead of abrupt.
4. In the format menu, pick **M4R · iPhone ringtone**, then click **Export**.
   Chrome, Edge and Safari 17+ encode the M4R on your device and the download
   starts immediately.

![The ringtone clip exporting. The M4R downloads from the browser.](/guides-media/make-iphone-ringtone/02-ringtoneExportToast.webp)

![The ringtone maker with a selection drawn on the waveform](/guides-media/make-iphone-ringtone/01-ringtoneSelection.webp)

Nothing was uploaded: the clip was made on your phone, in the browser. If the
format menu does not list M4R, your browser cannot encode AAC (Firefox and
Safari older than 17). Export MP3 and use the GarageBand fallback
below. Working from a song longer than the part you want? Cut it down first
with the [MP3 cutter](/mp3-cutter), or repeat a short hook with the
[audio looper](/audio-looper).

## Step 2 (iPhone): Sync the M4R

1. On a Mac: connect the iPhone, then drag the downloaded `.m4r` onto the
   device in a Finder window.
2. On Windows: do the same in **iTunes**. Drag it onto the device entry. Apps
   and File Sharing are not involved.
3. On the iPhone alone: move the file into GarageBand. Create a project,
   import the M4R from Files, tap **share** and choose **Ringtone**.
4. Find the tone under **Settings → Sounds & Haptics → Ringtone** and select
   it. Done.

## Fallback: Convert an MP3 with GarageBand

Only needed when your browser exported MP3 (Firefox, older Safari):

1. Open **GarageBand** on your iPhone (free from Apple on every device).
2. Create a new project with **Audio Recorder** or **Tracks**, then import the
   exported MP3 (loop icon, then Files, then the file).
3. Trim the track if needed, then tap the **share** icon and choose **Ringtone**.
4. Name it and export. iOS saves it to **Settings → Sounds & Haptics → Ringtone**
   automatically.

If GarageBand complains the ringtone is too long, the export from step 1 was
longer than 40 seconds; re-export a shorter clip.

## Android: you can skip all of this

Android takes a plain MP3: move the exported file to the phone, then
**Settings → Sound → Phone ringtone** (or long-press the file in your Files app
→ Set as ringtone). The [ringtone maker](/ringtone-maker) is the same page. Leave the format on MP3.

## Troubleshooting

**The ringtone does not appear in Settings.** It synced as a song, not a tone.
Make sure the file is a real `.m4r` (exported with the M4R format option, not a
renamed MP3), and drag it onto the device rather than into the Music library.

**The ringtone plays but is silent for calls.** Check the **Silent switch** and
the separate **ringtone volume** in Sounds & Haptics. Ringtones have their own
volume, independent of media volume.

**The loop clicks.** That is the export ending mid-waveform. Re-export with a
0.5-second fade-out; the click disappears.

**Is this free?** Yes. The [maker](/ringtone-maker) runs in the tab and the
audio never touches a server, so there is nothing to pay for and nothing to
sign into. GarageBand is free too.
