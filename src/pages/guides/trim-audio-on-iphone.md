---
title: How to Trim Audio on iPhone Without an App
description: Trim a voice memo or audio file in Safari on iPhone — no app, no upload. Move the file through Files, cut the section, and save it back.
tool: audio-trimmer
date: 2026-10-21
layout: ../../layouts/Guide.astro
sources:
  - label: Apple Support — Record and edit voice memos on iPhone
    url: https://support.apple.com/guide/iphone/record-and-edit-voice-memos-iph4d2a14b8b/ios
---

iPhone has a trim control inside Voice Memos, and it works for recordings made
there. It does not open the MP3 a client emailed you, the WAV from a camera, or
the M4A someone sent in a chat. For those files, the browser is the shortest
route — and it does not require installing an app or uploading the audio.

The [audio trimmer](/audio-trimmer) runs in Safari. You choose a start and an
end, preview the selection, and save the cut back to Files.

## What you need on the phone

- The file, saved somewhere iOS can reach. Mail attachments, WhatsApp files and
  Safari downloads all work once they are in **Files**.
- Safari. Chrome on iOS uses the same engine, but Safari is the browser the
  download flow is built around.
- A minute, and enough free storage for the exported copy.

There is no account. The page does not ask for an email address, and the audio
is decoded in the tab rather than sent to a server.

## Move the file into Files first

If the audio is in Mail, tap the attachment and choose **Save to Files**.
If it is in WhatsApp, open the message, tap the file, and use **Share → Save to
Files**. If it is already a download, it is probably in **Files → Downloads**.

Put it in a folder you will remember — **On My iPhone → Audio**, for example.
The trimmer's file picker can browse that folder, and the export can go back to
the same place.

## Trim the file in Safari

1. Open the [audio trimmer](/audio-trimmer) in Safari.
2. Tap the drop area and choose **Browse**. Pick the file from Files.
3. Wait for the waveform. A long file takes a moment to decode; the page is
   working locally, not waiting on an upload.
4. Drag across the waveform to mark the part you want. The handles are touch
   targets — pinch to zoom if the section is short.
5. Tap **Precise times** and type the start and end if the drag is not exact.
6. Press play. You should hear only the highlighted span.
7. Choose **Keep selection**, pick MP3 or WAV, and tap **Export**.

Safari downloads the result to **Files → Downloads** and shows the download
button in the address bar. Tap it, then move the file to the folder you want.

## Which format to save

**MP3 at 192 kbps** is the right default for a voice memo you will send. It is
small, it plays everywhere, and speech does not need more.

**WAV** is the choice if the file will be edited again — on the phone or on a
computer. It keeps the selected samples without another lossy encode. A WAV of
a long recording is large, so check the free space before exporting.

Avoid exporting MP3 from an MP3 more than once. Each pass throws away a little
more. If you are unsure whether the cut is final, keep the WAV until it is.

## What iPhone does differently

**Downloads land in Files, not in Photos.** Audio is not a photo or a video, so
the Photos app will not show it. Look in Files → Downloads.

**The tab holds the audio in memory.** If Safari reloads the page because you
switched apps for a long time, the file has to be opened again. Export before
you leave the tab.

**Long files are limited by memory.** A voice memo of a few minutes is easy. An
hour-long lecture is better on a computer, where the tab has more room.

**The screen can lock during a long export.** Keep the page in the foreground
until the download starts. A short clip exports almost immediately.

## When the trim is not the fix

Trimming removes time. It does not make a quiet recording louder, remove a hum,
or clean up wind. Those are separate jobs:

- A file that is too quiet throughout: [normalize](/normalize-audio) raises the
  peak; the [volume booster](/increase-volume) applies a gain you choose.
- A hum or rumble under the voice: the
  [high-pass filter](/high-pass-filter).
- Long pauses between sentences: the
  [silence remover](/silence-remover) finds them for you.

If the recording was made in Voice Memos and you only need the ends removed,
Voice Memos’ own **Edit → Trim** is still the fastest option. Use the browser
when the file came from somewhere else, when you need MP3 output, or when you
want the cut to stay off Apple’s synced library.

For the desktop version of the same walkthrough, read
[how to trim audio](/guides/how-to-trim-audio).
