---
title: How to Make a Ringtone on iPhone (Free, No Computer Needed)
description: Turn any song into an official iPhone ringtone. Build a 40-second clip in your browser, then convert it to M4R with GarageBand or Finder — no paid apps.
tool: ringtone-maker
date: 2026-10-14
audio: /guides-media/make-iphone-ringtone/narration.m4a
layout: ../../layouts/Guide.astro
---

iPhones are picky about ringtones: the sound must be an `.m4r` file, under about
40 seconds, synced through Apple's own tools. That sounds restrictive, but the
whole pipeline is free and takes about five minutes. You make the audio clip in
the browser, then let GarageBand (on the iPhone itself) or Finder (on a Mac) do
the Apple-specific part.

## Step 1: Build the ringtone audio

Open the [ringtone maker](/ringtone-maker) and drop in the song — MP3, M4A, WAV,
whatever you have. Then:

1. Drag across the waveform to pick the moment you want: usually the hook, the
   drop, or the first fifteen seconds of the chorus.
2. The selection is capped at **40 seconds** automatically, which matches what
   iOS allows for a ringtone. Shorter is fine and usually better — most calls
   are answered within 15 seconds anyway.
3. Add a short **fade-out** (0.5–1 s in the Adjust drawer). Ringtones loop, and a
   fade makes the jump back to the start sound natural instead of abrupt.
4. Click **Export** and save the MP3 to your Files.

![Exporting the ringtone clip — the MP3 downloads straight from the browser](/guides-media/make-iphone-ringtone/02-ringtoneExportToast.png)

![The ringtone maker with a selection drawn on the waveform](/guides-media/make-iphone-ringtone/01-ringtoneSelection.png)

Nothing was uploaded: the clip was made on your phone, in the browser.

## Step 2 (iPhone only): Convert to M4R with GarageBand

1. Open **GarageBand** on your iPhone (free from Apple on every device).
2. Create a new project using the **Audio Recorder** or **Tracks** — then import
   your exported MP3 into the timeline (loop icon → Files → browse to the file).
3. Trim the track if needed, then tap the **share** icon and choose **Ringtone**.
4. Name it and export. iOS saves it to **Settings → Sounds & Haptics → Ringtone**
   automatically.
5. Select it there. Done — no computer involved.

If GarageBand complains the ringtone is too long, the export from step 1 was
longer than 40 seconds; re-export a shorter clip.

## Step 2 (Mac): Convert to M4R with Finder

If you synced music with a Mac before, this path will feel familiar:

1. Export the MP3 from the ringtone maker on any device and copy it to the Mac.
2. In Finder, rename the file extension from `.mp3` to `.m4r`.
3. Connect the iPhone, then drag the `.m4r` file onto the device in Finder.
4. Find it under **Settings → Sounds & Haptics → Ringtone** on the phone.

## Step 2 (Android): you can skip all of this

Android takes a plain MP3: move the exported file to the phone, then
**Settings → Sound → Phone ringtone** (or long-press the file in your Files app
→ Set as ringtone). The [ringtone maker](/ringtone-maker) works the same way for
both platforms — only the iPhone needs the M4R dance.

## Troubleshooting

**The ringtone does not appear in Settings.** It synced as a song, not a tone.
Make sure the file extension is `.m4r` before syncing, and drag it onto the
device rather than into the Music library.

**The ringtone plays but is silent for calls.** Check the **Silent switch** and
the separate **ringtone volume** in Sounds & Haptics — ringtones have their own
volume, independent of media volume.

**The loop clicks.** That is the export ending mid-waveform. Re-export with a
0.5-second fade-out; the click disappears.

**Is this really free?** Yes — the [maker](/ringtone-maker) has no watermark, no
signup and no export limit, because the audio never touches a server. Apple's
GarageBand is free too.
