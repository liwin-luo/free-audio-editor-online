# Runtime verification findings (desktop Chrome via automation, 2026-11-05)

## 1. audio-trimmer — PASS
- MP3 export: 5-10s selection -> 5.04s file (MP3 frame padding, normal), 192kbps matches page copy, real audio content.
- WAV export: 5.000s exact, pcm_s16le 16-bit, mono 48kHz — matches "16-bit PCM of that span" claim.
- Analytics funnel fired completely: file_selected, export_started, processing_completed, download_completed (x3 exports).
- No page errors, no console.error.
- UX note: typed start/end rely on native blur->change; works for real users. Duration readout "This span 00:05.00" correct.
- Evidence: /tmp/fae-test/out/trimmer-5-10s-v2.mp3, trimmer-5-10s.wav, shots/01-audio-trimmer.png

## 2. audio-joiner — PASS (function) / DEFECT (analytics)
- Merge 440+880Hz WAVs: output 10.03s, order verified via highpass-600 RMS analysis (440 filtered in 1st half, 880 passes in 2nd), no silence gaps, no page errors.
- DEFECT F1 (P1 for data loop): joiner.ts has ZERO analytics events. Entire merge funnel invisible to GA4. Only src/editor/index.ts (main kernel) emits events — joiner/transcribe/midi-ui/music-visualizer-ui/key-bpm-ui/loudness-ui/tag-ui/mixer-ui likely all uninstrumented. 90-day plan's processing/export success metrics are blind for these tools.
- Evidence: /tmp/fae-test/out/joiner-440-880.mp3, events array empty in capture

## 3. mp3-editor — PASS (1 minor)
- Delete-selection mode + sel 2-4s on 8s file -> export 6.048s ✓. Undo -> export 8.04s (full) ✓. Analytics funnel fired both exports. No errors.
- MINOR F2 (P3, UX polish): after Undo, waveform selection box hides but Start/End precise inputs keep stale values (2/4) — display desync.
- Evidence: /tmp/fae-test/out/mp3editor-delete-2-4.mp3, mp3editor-after-undo.mp3

## 4. multi-track-audio-editor — PASS
- 2 tracks loaded; mute track2 -> export mix: 5.04s, spectral check confirms 880Hz removed (highpass600 RMS -27.9dB vs joiner's un-muted -22.2dB for 880 content), 440Hz intact.
- Analytics: ZERO events again (mixer-ui uninstrumented, consistent with F1).
- Evidence: /tmp/fae-test/out/multitrack-track2-muted.mp3

## 5. pitch-changer — PASS (1 watch item)
- +5 semitones preset via UI -> export: 8.04s duration preserved, events full funnel, no errors.
- WATCH F3: exported peak -0.4 dBFS — pitch-up path applies little/no gain headroom compensation; hotter sources may clip. (kernel DSP covered by check:pitch offline; this is the GUI-level observation.)
- Evidence: /tmp/fae-test/out/pitch-plus5.mp3

## 6. voice-changer — PASS
- Deep preset -> export: 8.04s, full funnel events, no errors. Same hot-peak watch item as F3 (-0.6 dBFS).
- Evidence: /tmp/fae-test/out/voicechanger-deep.mp3

## 7. music-visualizer — PASS
- Record video on 8s MP3: produced 3.3MB WebM (VP9 1920x1080 + Opus), decode runs to ~8s. Desktop Chrome canvas recording works; no errors.
- Analytics: zero events (music-visualizer-ui uninstrumented, F1).
- iOS Safari canvas.captureStream unsupported per audit -> fallback path needs real-device check (in iOS checklist).
- Evidence: /tmp/fae-test/out/visualizer.webm

## 8. voice-recorder — PASS (error path)
- Record with mic blocked: page shows exact documented copy "Microphone access was blocked. Allow it in your browser settings, then try again." No crash, no console errors. Positive mic-capture path deferred to iOS/manual checklist.
- Also confirmed the page exposes full Adjust studio (fade/volume/speed/reverb/normalize/reverse) + export formats 320..64/WAV.

## 9. audio-to-midi — PASS (positive path)
- C-major arpeggio WAV -> "Notes: 4" — exact note count for C5-E5-G5-C6. Download MIDI produced 72-byte valid-looking .mid.
- WATCH F4: inference took ~3-4 min stuck at 20% progress in this webview (tf.js CPU backend — no WebGL here). Real Chrome with WebGL should be far faster; needs a spot check in real desktop Chrome.

## 10. ringtone-maker — DEFECT F5 (P1): 40s cap bypassed
- Source: 50s tone. "Select all" -> export MP3: got 50.04s file (cap is 40s, page copy: "40 seconds is shortened to 40").
- M4R export also 50s-class: 1,195,101 bytes audio/mp4 .m4r — >40s ringtone file that iOS will reject.
- Root cause (src/editor/index.ts): 40s cap lives ONLY in commitSelection() line 1011 (drag path). applyPrecise() (typed start/end, line 1023) and the data-select-all handler (line 600) write state.sel directly without the cap; export has no final guard either.
- Positive: M4R option appears exactly when browser can encode AAC (promise kept on desktop Chrome); .m4r container valid (ftyp); events funnel fired.
- Evidence: /tmp/fae-test/out/ringtone-50s-src.m4r (mp3 50.04s), /tmp/fae-test/out/ringtone-50s.m4r
