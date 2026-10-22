/**
 * Generates all guide media:
 *  1. Real product screenshots (puppeteer drives the preview site)
 *  2. Branded diagram/step images
 *  3. Framed 1200x750 article images  -> public/guides-media/<slug>/
 *  4. TTS narration (macOS `say`, Samantha) -> narration.m4a next to images
 *  5. 1080p slideshow videos          -> media/youtube/<slug>.mp4 (gitignored)
 *  6. YouTube title/description/tags  -> media/youtube/<slug>.youtube.md
 *
 * Requires: preview server on :4321, Chrome, say/afconvert/ffmpeg/ffprobe.
 * Usage: node scripts/generate-guide-media.mjs
 */
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync, statSync, cpSync, readdirSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const VOICE = 'Samantha';
const RAW = '/tmp/guide-raw';
const SLIDES = '/tmp/guide-slides';
const NARR = '/tmp/guide-narr';
const PUBLIC_MEDIA = join(ROOT, 'public', 'guides-media');
const OUT_VIDEOS = join(ROOT, 'media', 'youtube');
for (const d of [RAW, SLIDES, NARR, PUBLIC_MEDIA, OUT_VIDEOS]) mkdirSync(d, { recursive: true });

const log = (m) => console.log('•', m);
const sh = (cmd) => execSync(cmd, { stdio: 'pipe' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------- content

const DIAGRAMS = {
  keepVsDelete: {
    title: 'Keep vs Delete selection',
    body: `
      <div style="display:grid;gap:28px">
        <div>
          <p style="margin:0 0 10px;font-weight:600;color:#2dd4bf">KEEP SELECTION — export only the highlighted part</p>
          ${wave([18, 82], '#2dd4bf')}
        </div>
        <div>
          <p style="margin:0 0 10px;font-weight:600;color:#fb7185">DELETE SELECTION — export everything except it</p>
          ${wave([18, 82], '#fb7185', true)}
        </div>
      </div>`,
  },
  crossfade: {
    title: 'How a crossfade joins two tracks',
    body: `
      <div style="position:relative;height:220px">
        <div style="position:absolute;left:0;top:30px;width:62%;height:70px;background:linear-gradient(90deg,#2dd4bf 70%,rgba(45,212,191,0.05));border-radius:8px"></div>
        <div style="position:absolute;right:0;bottom:30px;width:62%;height:70px;background:linear-gradient(270deg,#5eead4 70%,rgba(94,234,212,0.05));border-radius:8px"></div>
        <div style="position:absolute;left:50%;top:8px;transform:translateX(-50%);background:#0d9488;color:#fff;padding:8px 18px;border-radius:999px;font-weight:600">2–4 s overlap</div>
        <p style="position:absolute;left:0;top:0;color:#a1a1aa;margin:0">Track A fades out…</p>
        <p style="position:absolute;right:0;bottom:0;color:#a1a1aa;margin:0">…while track B fades in</p>
      </div>`,
  },
  bitrateLadder: {
    title: 'What a minute costs at each bitrate',
    body: `
      <div style="display:grid;gap:22px">
        ${[['320 kbps', '2.4 MB', 100, '#0d9488'], ['192 kbps', '1.4 MB', 58, '#2dd4bf'], ['128 kbps', '1 MB', 40, '#5eead4']].map(([k, v, w, c]) => `
        <div>
          <p style="margin:0 0 8px;font-weight:600">${k} <span style="color:#71717a;font-weight:400">· ${v} per minute</span></p>
          <div style="height:34px;width:${w}%;background:${c};border-radius:8px"></div>
        </div>`).join('')}
      </div>`,
  },
  sizeBars: {
    title: 'One minute of stereo audio',
    body: `
      <div style="display:grid;gap:22px">
        ${[['WAV, 16-bit', '10 MB', 100, '#18181b'], ['MP3 320 kbps', '2.4 MB', 24, '#0d9488'], ['MP3 128 kbps', '1 MB', 10, '#2dd4bf']].map(([k, v, w, c]) => `
        <div>
          <p style="margin:0 0 8px;font-weight:600">${k} <span style="color:#71717a;font-weight:400">· ${v}</span></p>
          <div style="height:34px;width:${w}%;min-width:60px;background:${c};border-radius:8px"></div>
        </div>`).join('')}
      </div>`,
  },
  dbfsScale: {
    title: 'dBFS: everything at or below zero',
    body: `
      <div style="display:flex;gap:40px;align-items:stretch">
        <div style="width:26px;height:300px;border-left:4px solid #0d9488;background:linear-gradient(180deg,#0d9488 0%,#5eead4 100%);border-radius:4px"></div>
        <div style="display:grid;align-content:space-between;height:300px">
          <p style="margin:0;font-weight:600">0 dBFS — the ceiling. Nothing louder exists in the file.</p>
          <p style="margin:0">−1 dBFS — delivery margin (peak kept out of the encode)</p>
          <p style="margin:0">−6 dBFS — half the amplitude</p>
          <p style="margin:0">−12 dBFS — a quarter</p>
          <p style="margin:0">−40 dBFS — quiet room tone (silence-remover default)</p>
        </div>
      </div>`,
  },
  gainVsVolume: {
    title: 'Gain is baked in; volume is a knob',
    body: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:36px">
        <div style="background:#18181b;border:1px solid #27272a;border-radius:14px;padding:30px">
          <p style="margin:0 0 12px;font-weight:600;color:#fb7185">VOLUME — at playback</p>
          ${wave([0, 48], '#71717a')}
          <p style="margin:10px 0 0;color:#a1a1aa">The file on disk is untouched. Turn it down and everyone else still gets the original level.</p>
        </div>
        <div style="background:#18181b;border:1px solid #27272a;border-radius:14px;padding:30px">
          <p style="margin:0 0 12px;font-weight:600;color:#2dd4bf">GAIN — in the export</p>
          ${wave([0, 48], '#2dd4bf')}
          <p style="margin:10px 0 0;color:#a1a1aa">The louder level is written into the samples. Every player, everywhere, gets the boosted file.</p>
        </div>
      </div>`,
  },
  sampleRateDots: {
    title: 'A wave measured 44,100 times a second',
    body: `
      <div style="position:relative;height:240px">
        <svg viewBox="0 0 1060 240" style="width:100%;height:100%">
          <path d="M0,120 C90,10 180,10 265,120 C350,230 440,230 530,120 C620,10 710,10 795,120 C880,230 970,230 1060,120" fill="none" stroke="#2dd4bf" stroke-width="4"/>
          ${Array.from({ length: 22 }, (_, i) => {
            const x = i * 50;
            const y = 120 - 110 * Math.sin((i / 21) * Math.PI * 4);
            return `<circle cx="${x}" cy="${y.toFixed(0)}" r="7" fill="#0d9488" stroke="#fff" stroke-width="2"/>`;
          }).join('')}
        </svg>
        <p style="margin:10px 0 0;color:#71717a">Each dot is one sample: the wave's level at that instant. 44.1 kHz = 44,100 dots per second.</p>
      </div>`,
  },
  losslessFlow: {
    title: 'Lossless round-trips; lossy does not',
    body: `
      <div style="display:grid;gap:26px">
        <div style="display:flex;align-items:center;gap:14px">
          <span style="background:#0d9488;color:#fff;padding:12px 20px;border-radius:10px;font-weight:600">WAV</span><span>→</span>
          <span style="background:#134e4a;color:#2dd4bf;padding:12px 20px;border-radius:10px">FLAC (pack)</span><span>→</span>
          <span style="background:#134e4a;color:#2dd4bf;padding:12px 20px;border-radius:10px">unpack</span><span>→</span>
          <span style="background:#0d9488;color:#fff;padding:12px 20px;border-radius:10px">identical WAV ✓</span>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <span style="background:#18181b;color:#fafafa;padding:12px 20px;border-radius:10px;border:1px solid #27272a">WAV</span><span>→</span>
          <span style="background:#4c1d24;color:#fb7185;padding:12px 20px;border-radius:10px">MP3 (lossy encode)</span><span>→</span>
          <span style="background:#4c1d24;color:#fb7185;padding:12px 20px;border-radius:10px">decode</span><span>→</span>
          <span style="background:#18181b;color:#fafafa;padding:12px 20px;border-radius:10px;border:1px solid #27272a">different WAV ✗</span>
        </div>
        <p style="margin:0;color:#71717a">The top row loses nothing. The bottom row never gets the discarded samples back — at any bitrate.</p>
      </div>`,
  },
  pcmSamples: {
    title: 'PCM: the wave written down as numbers',
    body: `
      <div style="display:grid;gap:18px">
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          ${[0.00, 0.31, 0.59, 0.81, 0.95, 1.00, 0.95, 0.81, 0.59, 0.31, 0.00, -0.31, -0.59, -0.81].map((v) => `
          <div style="background:#18181b;border:1px solid #27272a;border-radius:10px;padding:12px 16px;text-align:center">
            <div style="font-family:ui-monospace,monospace;font-size:22px;font-weight:600;color:#2dd4bf">${v.toFixed(2)}</div>
          </div>`).join('')}
        </div>
        <p style="margin:0;color:#a1a1aa">One column per sample, thousands of times a second, two channels wide. That column of numbers <b>is</b> the audio — players decode everything else back to this.</p>
      </div>`,
  },
  copyrightLayers: {
    title: 'Three rights that can live in one five-second clip',
    body: `
      <div style="display:grid;gap:16px">
        ${[
          ['1 · THE SOUND RECORDING', 'The fixed waveform in the file. Copying the file copies this. Almost every meme sound is somebody\u2019s recording.', '#0d9488'],
          ['2 · THE WORK BEHIND IT', 'A song, a script line, a composition. A separate copyright stacked on top of the recording.', '#b45309'],
          ['3 · THE PERSON', 'A recognizable voice carries publicity rights — not copyright, and not yours to synthesize.', '#be123c'],
        ].map(([k, v, c]) => `
        <div style="border:1px solid #e4e4e7;border-inline-start:6px solid ${c};border-radius:10px;padding:14px 18px">
          <p style="margin:0 0 4px;font-weight:700;color:${c};font-size:14px">${k}</p>
          <p style="margin:0;color:#3f3f46;font-size:15px">${v}</p>
        </div>`).join('')}
        <p style="margin:4px 0 0;color:#0f766e;font-weight:600;font-size:15px">17 U.S.C. § 114(b): sounds that merely imitate or simulate sit outside right #1 — that is the synthesized board\u2019s legal footing.</p>
      </div>`,
  },
  boardFlow: {
    title: 'From raw material to hotkey',
    body: `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
        ${[
          ['1 · CAPTURE', 'Record the mic or upload a file', '#0d9488'],
          ['2 · TRIM', 'Handles around 0.5–5 s, loop to check', '#0f766e'],
          ['3 · BOARD', 'Square gets a name, a color, a hotkey', '#155e75'],
          ['4 · TRIGGER', 'Tap or press keys — several at once', '#134e4a'],
        ].map(([k, v, c]) => `
        <div style="background:${c};border-radius:10px;padding:16px 12px;color:#fff">
          <p style="margin:0 0 6px;font-weight:700;font-size:13px">${k}</p>
          <p style="margin:0;font-size:13px;opacity:.9">${v}</p>
        </div>`).join('')}
      </div>
      <p style="margin:12px 0 0;color:#71717a;font-size:14px">Export board → one JSON file with every clip · Import board brings it back anywhere.</p>`,
  },
};

function wave(range, color, invert = false) {
  const bars = [];
  for (let i = 0; i < 48; i++) {
    const h = 8 + Math.abs(Math.sin(i * 0.55) * 46 + Math.cos(i * 0.21) * 12);
    bars.push(`<span style="width:6px;border-radius:3px;height:${h.toFixed(0)}px;background:${i >= range[0] && i < range[1] ? color : '#3f3f46'}"></span>`);
  }
  return `<div style="display:flex;align-items:center;gap:4px;height:64px">${bars.join('')}</div>
    <p style="margin:6px 0 0;color:#71717a;font-size:15px">${invert ? 'The highlighted part is removed from the export' : 'The highlighted part is the export'}</p>`;
}

const ARTICLES = [
  // image-only entries (no slides): shots are framed article images, no TTS/video.
  {
    slug: 'convert-wav-to-mp3',
    videoTitle: 'How to Convert WAV to MP3',
    shots: ['wavDropzone', 'wavExport'],
    slides: [],
  },
  {
    slug: 'convert-flac-to-mp3',
    videoTitle: 'How to Convert FLAC to MP3',
    shots: ['flacDropzone', 'flacExport'],
    slides: [],
  },
  {
    slug: 'make-slowed-and-reverb',
    videoTitle: 'How to Make a Slowed + Reverb Edit',
    shots: ['slowedDropzone', 'slowedLoaded', 'slowedExport'],
    slides: [],
  },
  {
    slug: 'compress-audio-for-email',
    videoTitle: 'How to Compress Audio for Email',
    shots: ['compressDropzone', 'compressExport'],
    slides: [],
  },
  {
    slug: 'why-is-my-voice-memo-so-quiet',
    videoTitle: 'Why Is My Voice Memo So Quiet?',
    shots: ['volumeDropzone', 'volumeExport'],
    slides: [],
  },
  {
    slug: 'audio-clicks-at-the-start',
    videoTitle: 'Why Your Audio Clip Clicks at the Start',
    shots: ['fadeDropzone', 'fadeExport'],
    slides: [],
  },
  {
    slug: 'garageband-alternative',
    videoTitle: 'GarageBand Alternative',
    shots: ['editorDropzone', 'editorExport'],
    slides: [],
  },
  {
    slug: 'audition-alternative',
    videoTitle: 'Adobe Audition Alternative',
    shots: ['editorDropzone', 'editorExport'],
    slides: [],
  },
  {
    slug: '123apps-alternative',
    videoTitle: '123apps Alternative',
    shots: ['editorDropzone', 'editorExport'],
    slides: [],
  },
  {
    slug: 'car-stereo-wont-play',
    videoTitle: 'Why Your Car Stereo Won\u2019t Play That File',
    shots: ['m4aDropzone', 'm4aExport'],
    slides: [],
  },
  {
    slug: 'find-bpm-and-key',
    videoTitle: 'How to Find the BPM and Key of a Song',
    shots: ['bpmDropzone', 'bpmReadings'],
    slides: [],
  },
  {
    slug: 'transcribe-audio-to-text',
    videoTitle: 'How to Transcribe Audio to Text',
    shots: ['transcribeDone'],
    slides: [],
  },
  {
    slug: 'what-is-crossfade',
    videoTitle: 'What Is Crossfade?',
    shots: [],
    diagrams: [{ name: 'crossfade', file: 'crossfade' }],
    slides: [],
  },
  {
    slug: 'are-meme-sounds-copyrighted',
    videoTitle: 'Are Meme Sounds Copyrighted?',
    shots: [],
    diagrams: [{ name: 'copyrightLayers', file: 'copyright-layers' }],
    slides: [],
  },
  {
    slug: 'how-to-make-a-soundboard',
    videoTitle: 'How to Make a Soundboard',
    shots: [],
    diagrams: [{ name: 'boardFlow', file: 'board-flow' }],
    slides: [],
  },
  {
    slug: 'what-is-audio-bitrate',
    videoTitle: 'What Is Audio Bitrate?',
    shots: [],
    diagrams: [{ name: 'bitrateLadder', file: 'bitrate-ladder' }],
    slides: [],
  },
  {
    slug: 'wav-vs-mp3',
    videoTitle: 'WAV vs MP3',
    shots: [],
    diagrams: [{ name: 'sizeBars', file: 'size-per-minute' }],
    slides: [],
  },
  {
    slug: 'what-is-dbfs',
    videoTitle: 'What Is dBFS?',
    shots: [],
    diagrams: [{ name: 'dbfsScale', file: 'dbfs-scale' }],
    slides: [],
  },
  {
    slug: 'cut-a-song-for-tiktok',
    videoTitle: 'How to Cut a Song for TikTok and Reels',
    shots: ['dropzone', 'selection', 'exportToast'],
    slides: [],
  },
  {
    slug: 'record-a-voice-memo-in-browser',
    videoTitle: 'How to Record a Voice Memo in the Browser',
    shots: ['recorderLoaded'],
    slides: [],
  },
  {
    slug: 'trim-audio-on-iphone',
    videoTitle: 'How to Trim Audio on iPhone',
    shots: ['trimmerDropzone', 'trimmerExport'],
    slides: [],
  },
  {
    slug: 'trim-opentracks-bgm',
    videoTitle: 'How to Trim OpenTracks BGM',
    shots: ['trimmerDropzone', 'trimmerExport'],
    slides: [],
  },
  {
    slug: 'normalize-vs-compress-audio',
    videoTitle: 'Normalize vs Compress',
    shots: ['normalizeDropzone', 'compressorExport'],
    slides: [],
  },
  {
    slug: 'remove-hum-with-high-pass-filter',
    videoTitle: 'Remove Hum with a High-Pass Filter',
    shots: ['highpassDropzone', 'highpassExport'],
    slides: [],
  },
  {
    slug: 'remove-silence-from-podcast',
    videoTitle: 'Remove Silence from a Podcast',
    shots: ['silenceDropzone', 'silenceExport'],
    slides: [],
  },
  {
    slug: 'split-long-recording-into-tracks',
    videoTitle: 'Split a Long Recording into Tracks',
    shots: ['splitDropzone', 'splitExport'],
    slides: [],
  },
  {
    slug: 'convert-opus-to-mp3',
    videoTitle: 'Convert Opus to MP3',
    shots: ['opusDropzone', 'opusExport'],
    slides: [],
  },
  {
    slug: 'convert-m4a-to-mp3',
    videoTitle: 'Convert M4A to MP3',
    shots: ['m4aDropzone', 'm4aExport'],
    slides: [],
  },
  {
    slug: 'podcast-loudness-lufs',
    videoTitle: 'What LUFS Should a Podcast Be?',
    shots: ['loudDropzone', 'loudReadings'],
    slides: [],
  },
  {
    slug: 'gain-vs-volume',
    videoTitle: 'Gain vs Volume',
    shots: [],
    diagrams: [{ name: 'gainVsVolume', file: 'gain-vs-volume' }],
    slides: [],
  },
  {
    slug: 'what-is-sample-rate',
    videoTitle: 'What Is Sample Rate?',
    shots: [],
    diagrams: [{ name: 'sampleRateDots', file: 'sample-rate-dots' }],
    slides: [],
  },
  {
    slug: 'what-is-lossless-audio',
    videoTitle: 'What Is Lossless Audio?',
    shots: [],
    diagrams: [{ name: 'losslessFlow', file: 'lossless-flow' }],
    slides: [],
  },
  {
    slug: 'what-is-pcm-audio',
    videoTitle: 'What Is PCM Audio?',
    shots: [],
    diagrams: [{ name: 'pcmSamples', file: 'pcm-samples' }],
    slides: [],
  },

  {
    slug: 'how-to-cut-a-song',
    videoTitle: 'How to Cut a Song Online (Free, Nothing Uploaded)',
    shots: ['dropzone', 'selection', 'exportToast'],
    slides: [
      { kind: 'title', title: 'How to Cut a Song Online', sub: 'Free · in your browser · nothing uploaded', narration: "Cutting a song used to mean installing sketchy software, or uploading your music to someone's server. It doesn't anymore. In this video you'll cut any song in your browser — free, and without uploading a single byte." },
      { kind: 'shot', shot: 'dropzone', title: 'Step 1 — Open the song', caption: 'Drop a file, or click to browse — MP3, WAV, M4A, FLAC', narration: "Open the MP3 cutter and drop your song onto the page. The waveform appears instantly — there is no upload, because everything runs on your own device. M P three, WAVE, M four A, FLAC — anything your browser can play, it can cut." },
      { kind: 'shot', shot: 'selection', title: 'Step 2 — Select the part you want', caption: 'Drag on the waveform; handles fine-tune the edges', narration: 'Drag across the waveform to highlight the section you want. Drag the handles to fine-tune, or type exact start and end times if you need frame accuracy.' },
      { kind: 'diagram', diagram: 'keepVsDelete', title: 'Keep or delete — your choice', caption: 'One toggle, two opposite results', narration: "Here is the key idea. Keep selection exports only the highlighted part — perfect for pulling out a chorus. Delete selection removes the highlighted part — perfect for chopping off a long intro. One toggle, two opposite results." },
      { kind: 'shot', shot: 'exportToast', title: 'Step 3 — Preview, then export', caption: 'WAV for lossless quality · MP3 320 kbps for sharing', narration: 'Press play to hear just your selection. Happy with it? Click export. Choose lossless WAVE when quality matters, or M P three — three twenty kilobits is transparent to almost everyone. The file downloads straight to your disk.' },
      { kind: 'outro', narration: 'That is all there is to it. The link to the free MP3 cutter is in the description — no signup, no watermarks, and your music never leaves your device.' },
    ],
  },
  {
    slug: 'make-iphone-ringtone',
    videoTitle: 'How to Make an iPhone Ringtone for Free (No Computer Needed)',
    shots: ['ringtoneSelection', 'ringtoneExportToast'],
    slides: [
      { kind: 'title', title: 'How to Make an iPhone Ringtone for Free', sub: 'In about five minutes · no paid apps', narration: "iPhones are picky about ringtones. They need an M four R file, under about forty seconds, synced through Apple's tools. Here is the free way to do it in about five minutes, without buying any app." },
      { kind: 'shot', shot: 'ringtoneSelection', title: 'Step 1 — Pick the moment', caption: 'Selections are capped at 40 s — the classic ringtone length', narration: 'Open the Ringtone Maker and drop in your song. Drag across the waveform to pick the hook — the part you want to hear when someone calls. The selection is automatically capped at forty seconds, the classic ringtone length.' },
      { kind: 'shot', shot: 'ringtoneExportToast', title: 'Step 2 — Add a fade, then export', caption: 'A 0.5–1 s fade-out makes the loop sound natural', narration: 'Add a short fade out, so the loop back to the start sounds natural instead of cutting mid-note. Then export the M P three. It was made entirely on your device.' },
      { kind: 'text', title: 'Step 3 — GarageBand on the iPhone', steps: ['Open GarageBand (free from Apple)', 'Import the MP3 into the timeline', 'Tap share → Ringtone, name it, export', 'Find it in Settings → Sounds → Ringtone'], narration: 'Now the Apple part. Open GarageBand on your iPhone — it is free. Import the M P three into the timeline, tap the share icon and choose Ringtone. Name it, export, and it appears in your ringtone list in Settings. No computer needed.' },
      { kind: 'text', title: 'Alternative — Finder on a Mac', steps: ['Rename the file extension .mp3 → .m4r', 'Connect the iPhone to the Mac', 'Drag the .m4r onto the device in Finder', 'Select it in Settings → Sounds → Ringtone'], narration: 'If you would rather use a Mac: rename the file extension from M P three to M four R, connect your iPhone, and drag the file onto it in Finder. Pick it in Settings, under Sounds. And Android? You skip all of this — Android phones take a plain M P three.' },
      { kind: 'outro', narration: 'The ringtone maker link is in the description. Free, no watermark, and nothing is ever uploaded.' },
    ],
  },
  {
    slug: 'merge-songs-one-track',
    videoTitle: 'How to Merge Songs into One Track Online',
    shots: ['joinerTracks', 'joinerExportToast'],
    slides: [
      { kind: 'title', title: 'How to Merge Songs into One Track', sub: 'DJ sets · gym mixes · podcast archives', narration: "One file is easier to play, share and sync than a folder of twenty. Whether it is a gym mix, a DJ set, or podcast episodes, here is how to merge songs into a single track in your browser." },
      { kind: 'shot', shot: 'joinerTracks', title: 'Step 1 — Load the tracks', caption: 'Mixed formats are fine — they are matched automatically', narration: 'Open the Audio Joiner and drop in your songs — two or twenty. M P three, WAVE, M four A — mixed formats are fine. They are matched automatically, and the total duration updates as you go.' },
      { kind: 'text', title: 'Step 2 — Set the running order', steps: ['Arrow buttons move tracks up / down', 'Workout mixes: order by energy — build, peak, cooldown', 'Podcast archives: keep it chronological', 'Remove tracks you change your mind about'], narration: 'Set the running order with the arrow buttons. For workout mixes, order by energy: warm up first, peak in the middle, cool down at the end. Remove any track you change your mind about.' },
      { kind: 'diagram', diagram: 'crossfade', title: 'Step 3 — Choose how tracks meet', caption: '2–4 s crossfade = one continuous mix · 0 s = clean hard cut', narration: 'Now the fun part. A crossfade of two to four seconds lets each track fade under the next — that is what makes it feel like one continuous mix. Set it to zero for hard cuts, which is what you want for podcast chapters.' },
      { kind: 'shot', shot: 'joinerExportToast', title: 'Step 4 — Merge and export', caption: 'MP3 192 kbps for listening · WAV as a lossless master', narration: 'Add a fade in and fade out for the very beginning and end, click merge and export, and choose your format. M P three at one ninety two kilobits for listening. Lossless WAVE if it is a keeper. The merge happens on your device — nothing is uploaded.' },
      { kind: 'outro', narration: 'The audio joiner link is in the description. Free, no signup, and your library stays on your device.' },
    ],
  },
];

// ---------------------------------------------------------------- slides html

const BRAND_CSS = `
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1920px; height:1080px; overflow:hidden; font-family:-apple-system,'SF Pro Display','Helvetica Neue',system-ui,sans-serif;
         background:#09090b; color:#fafafa; position:relative; }
  .glow { position:absolute; width:1100px; height:1100px; border-radius:50%;
          background:radial-gradient(circle, rgba(13,148,136,0.20) 0%, rgba(13,148,136,0) 65%); top:-380px; right:-260px; }
  .frame { position:absolute; inset:0; padding:90px 110px; display:flex; flex-direction:column; }
  .kicker { display:flex; align-items:center; gap:16px; color:#a1a1aa; font-size:26px; font-weight:500; }
  .logo { width:52px; height:52px; border-radius:13px; background:#0d9488; display:grid; place-items:center; }
  h1 { font-size:76px; font-weight:700; letter-spacing:-0.03em; line-height:1.05; margin-top:36px; }
  .caption { font-size:30px; color:#a1a1aa; margin-top:18px; }
  .shot { margin-top:44px; border-radius:20px; border:1px solid #27272a; box-shadow:0 30px 60px -20px rgba(0,0,0,0.6); max-width:100%; max-height:640px; object-fit:contain; align-self:center; }
  .steps { margin-top:50px; display:grid; gap:26px; }
  .step { display:flex; gap:22px; align-items:flex-start; background:#18181b; border:1px solid #27272a; border-radius:16px; padding:26px 30px; }
  .num { min-width:52px; height:52px; border-radius:50%; background:rgba(45,212,191,0.15); color:#2dd4bf; display:grid; place-items:center; font-size:26px; font-weight:700; }
  .step p { font-size:30px; color:#e4e4e7; margin:0; align-self:center; }
  .outro-links { margin-top:60px; display:grid; gap:18px; font-size:32px; color:#2dd4bf; }
  .progress { position:absolute; bottom:44px; right:70px; color:#52525b; font-size:24px; }
  .footer-url { position:absolute; bottom:44px; left:110px; color:#52525b; font-size:24px; }
`;

function slideHtml(article, slide, index, total, imageTag = '') {
  const kicker = `<div class="kicker"><span class="logo"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M3 12h2M7 8v8M11 4v16M15 7v10M19 10v4M21 11v2"/></svg></span>Free Audio Editor</div>`;
  let body = '';
  if (slide.kind === 'title') {
    body = `<h1 style="font-size:110px;margin-top:150px">${slide.title}</h1><p class="caption" style="font-size:38px;margin-top:30px">${slide.sub}</p>`;
  } else if (slide.kind === 'shot') {
    body = `<h1>${slide.title}</h1><p class="caption">${slide.caption}</p><img class="shot" src="file://${RAW}/${slide.shot}.png" />`;
  } else if (slide.kind === 'diagram') {
    const d = DIAGRAMS[slide.diagram];
    body = `<h1>${slide.title}</h1><p class="caption">${slide.caption}</p><div class="shot" style="padding:40px 48px;background:#18181b;height:auto">${d.body}</div>`;
  } else if (slide.kind === 'text') {
    body = `<h1>${slide.title}</h1><div class="steps">${slide.steps
      .map((s, i) => `<div class="step"><span class="num">${i + 1}</span><p>${s}</p></div>`)
      .join('')}</div>`;
  } else if (slide.kind === 'outro') {
    body = `<h1>Your turn — it's free</h1>
      <div class="outro-links"><span>▸ freeaudioeditor.online/${articleSlugToPath(article.slug)}</span><span>▸ No signup · no watermarks · nothing uploaded</span></div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${BRAND_CSS}</style></head>
    <body><div class="glow"></div><div class="frame">${kicker}${body}
    <div class="footer-url">freeaudioeditor.online</div><div class="progress">${index + 1} / ${total}</div></div></body></html>`;
}

function articleSlugToPath(slug) {
  return { 'how-to-cut-a-song': 'mp3-cutter', 'make-iphone-ringtone': 'ringtone-maker', 'merge-songs-one-track': 'audio-joiner' }[slug] ?? '';
}

// diagram images for articles (1200x750, light theme to match the site)
function diagramHtml(d) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1200px;height:750px;font-family:-apple-system,'Helvetica Neue',system-ui,sans-serif;background:#fff;color:#18181b;display:flex;flex-direction:column;justify-content:center;padding:60px 70px}
    h2{font-size:34px;font-weight:600;letter-spacing:-0.01em;margin-bottom:34px}
    p{font-size:17px}
    .step p{font-size:20px}
  </style></head><body><h2>${d.title}</h2>${d.body}</body></html>`;
}

const ARTICLE_FRAME = (title, caption, imageTag) => `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:750px;font-family:-apple-system,'Helvetica Neue',system-ui,sans-serif;background:#09090b;color:#fafafa;display:flex;flex-direction:column;padding:34px 38px}
  .t{font-size:26px;font-weight:600;letter-spacing:-0.01em}
  .c{font-size:17px;color:#a1a1aa;margin-top:6px}
  .body{flex:1;display:grid;place-items:center;margin-top:22px;min-height:0}
  img{max-width:100%;max-height:100%;border-radius:12px;border:1px solid #27272a}
</style></head><body><div class="t">${title}</div><div class="c">${caption}</div><div class="body">${imageTag}</div></body></html>`;

// ---------------------------------------------------------------- capture

async function captureShots(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 2 });

  const upload = async (sel, files) => {
    const input = await page.$(sel);
    await input.uploadFile(...(Array.isArray(files) ? files : [files]));
  };
  const dragSelect = async () => {
    const box = await (await page.$('[data-stage-content]')).boundingBox();
    const cy = box.y + box.height / 2;
    await page.mouse.move(box.x + box.width * 0.25, cy);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.65, cy, { steps: 8 });
    await page.mouse.up();
    await sleep(250);
  };
  const waitExported = async () => {
    for (let i = 0; i < 40; i++) {
      await sleep(250);
      const s = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
      if (/Exported/.test(s)) return;
    }
  };

  // cutter: dropzone
  await page.goto(`${BASE}/mp3-cutter`, { waitUntil: 'networkidle0' });
  await sleep(300);
  await (await page.$('[data-audio-editor]')).screenshot({ path: `${RAW}/dropzone.png` });
  log('shot: dropzone');

  // cutter: selection + export toast
  await upload('[data-file-input]', '/tmp/test-tone.wav');
  await page.waitForSelector('[data-workspace]:not(.hidden)');
  await dragSelect();
  await (await page.$('[data-audio-editor]')).screenshot({ path: `${RAW}/selection.png` });
  log('shot: selection');
  await page.select('[data-format]', 'wav');
  await page.click('[data-export]');
  await waitExported();
  await page.screenshot({ path: `${RAW}/exportToast.png` });
  log('shot: exportToast');

  // ringtone
  await page.goto(`${BASE}/ringtone-maker`, { waitUntil: 'networkidle0' });
  await upload('[data-file-input]', '/tmp/test-tone.wav');
  await page.waitForSelector('[data-workspace]:not(.hidden)');
  await dragSelect();
  await (await page.$('[data-audio-editor]')).screenshot({ path: `${RAW}/ringtoneSelection.png` });
  log('shot: ringtoneSelection');
  await page.click('[data-export]');
  await waitExported();
  await page.screenshot({ path: `${RAW}/ringtoneExportToast.png` });
  log('shot: ringtoneExportToast');

  // joiner: two tracks + export toast
  await page.goto(`${BASE}/audio-joiner`, { waitUntil: 'networkidle0' });
  await upload('[data-file-input]', ['/tmp/test-tone.wav', '/tmp/test-tone.wav']);
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 15000 });
  await sleep(400);
  await (await page.$('[data-audio-joiner]')).screenshot({ path: `${RAW}/joinerTracks.png` });
  log('shot: joinerTracks');
  await page.click('[data-export]');
  await waitExported();
  await page.screenshot({ path: `${RAW}/joinerExportToast.png` });
  log('shot: joinerExportToast');
  await page.close();
}

// Editor-shell pages share the cutter flow: dropzone → upload a tone →
// workspace → (drag a selection where a waveform exists) → export toast.
// Wrapped per page so one odd page cannot kill the batch.
const EDITOR_PAGES = [
  ['wav-to-mp3', 'wav', true],
  ['flac-to-mp3', 'flac', true],
  ['slowed-reverb', 'slowed', true],
  ['compress-audio', 'compress', false],
  ['increase-volume', 'volume', false],
  ['fade-audio', 'fade', false],
  ['mp3-editor', 'editor', true],
  ['m4a-to-mp3', 'm4a', true],
  ['audio-trimmer', 'trimmer', true],
  ['normalize-audio', 'normalize', true],
  ['compressor', 'compressor', false],
  ['high-pass-filter', 'highpass', true],
  ['silence-remover', 'silence', true],
  ['split-mp3', 'split', false],
  ['opus-to-mp3', 'opus', true],
];

async function captureEditorPages(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 2 });
  const upload = async (sel, files) => {
    const input = await page.$(sel);
    await input.uploadFile(...(Array.isArray(files) ? files : [files]));
  };
  const waitExported = async () => {
    for (let i = 0; i < 40; i++) {
      await sleep(250);
      const s = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
      if (/Exported/.test(s)) return;
    }
  };
  for (const [slug, prefix, select, file] of EDITOR_PAGES) {
    try {
      await page.goto(`${BASE}/${slug}`, { waitUntil: 'networkidle0' });
      await sleep(300);
      const shell = await page.$('[data-audio-editor]');
      if (!shell) throw new Error('no [data-audio-editor]');
      await shell.screenshot({ path: `${RAW}/${prefix}Dropzone.png` });
      log(`shot: ${prefix}Dropzone`);
      await upload('[data-file-input]', file ?? '/tmp/test-tone.wav');
      await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 15000 });
      if (select) {
        try {
          const stage = await page.$('[data-stage-content]');
          const box = await stage.boundingBox();
          const cy = box.y + box.height / 2;
          await page.mouse.move(box.x + box.width * 0.25, cy);
          await page.mouse.down();
          await page.mouse.move(box.x + box.width * 0.65, cy, { steps: 8 });
          await page.mouse.up();
          await sleep(250);
        } catch { /* no waveform on this page — skip the selection */ }
      }
      await sleep(300);
      const loaded = await page.$('[data-audio-editor]');
      await loaded.screenshot({ path: `${RAW}/${prefix}Loaded.png` });
      log(`shot: ${prefix}Loaded`);
      try { await page.select('[data-format]', 'wav'); } catch { /* format select optional */ }
      await page.click('[data-export]');
      await waitExported();
      await page.screenshot({ path: `${RAW}/${prefix}Export.png` });
      log(`shot: ${prefix}Export`);
    } catch (e) {
      log(`✗ ${slug}: ${e.message}`);
    }
  }
  await page.close();
}

// key-bpm-finder: readings need rhythmic material — a 120 BPM click track,
// not the sine test tone (a flat tone has no onsets and would read "Can't read").
async function captureLoudnessMeter(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 2 });
  try {
    await page.goto(`${BASE}/loudness-meter`, { waitUntil: 'networkidle0' });
    await sleep(300);
    const shell = await page.$('[data-audio-editor]');
    if (shell) await shell.screenshot({ path: `${RAW}/loudDropzone.png` });
    else await page.screenshot({ path: `${RAW}/loudDropzone.png` });
    log('shot: loudDropzone');
    const input = await page.$('[data-file-input]');
    await input.uploadFile('/tmp/test-tone.wav');
    await sleep(4000);
    await page.screenshot({ path: `${RAW}/loudReadings.png` });
    log('shot: loudReadings');
  } catch (e) {
    log(`✗ loudness-meter: ${e.message}`);
  }
  await page.close();
}

async function captureBpmFinder(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 2 });
  try {
    await page.goto(`${BASE}/key-bpm-finder`, { waitUntil: 'networkidle0' });
    await sleep(300);
    const shell = await page.$('[data-audio-editor]');
    if (shell) await shell.screenshot({ path: `${RAW}/bpmDropzone.png` });
    else await page.screenshot({ path: `${RAW}/bpmDropzone.png` });
    log('shot: bpmDropzone');
    const input = await page.$('[data-file-input]');
    await input.uploadFile('/tmp/test-clicks.wav');
    await sleep(4000);
    await page.screenshot({ path: `${RAW}/bpmReadings.png`, fullPage: false });
    log('shot: bpmReadings');
  } catch (e) {
    log(`✗ key-bpm-finder: ${e.message}`);
  }
  await page.close();
}

// audio-to-text: the first run downloads the Whisper model, so this capture
// waits up to ~2.5 minutes for the transcript before shooting whatever is on
// screen (a progress state is also an honest image).
async function captureTranscribe(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 2 });
  try {
    await page.goto(`${BASE}/audio-to-text`, { waitUntil: 'networkidle0' });
    await sleep(300);
    const shell = await page.$('[data-audio-editor]');
    if (shell) await shell.screenshot({ path: `${RAW}/transcribeDropzone.png` });
    else await page.screenshot({ path: `${RAW}/transcribeDropzone.png` });
    log('shot: transcribeDropzone');
    const input = await page.$('[data-file-input]');
    if (!input) throw new Error('no file input');
    await input.uploadFile('/tmp/test-clicks.wav');
    let done = false;
    for (let i = 0; i < 60; i++) {
      await sleep(2500);
      done = await page.evaluate(() => {
        const t = document.body.innerText;
        return /SRT|\.txt|Transcript|Copy/i.test(t) && !/Transcribing|Loading|%/i.test(t.slice(-400));
      });
      if (done) break;
    }
    await sleep(500);
    await page.screenshot({ path: `${RAW}/transcribeDone.png` });
    log(`shot: transcribeDone (settled=${done})`);
  } catch (e) {
    log(`✗ audio-to-text: ${e.message}`);
  }
  await page.close();
}

async function captureRecorder(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 2 });
  await page.goto(`${BASE}/voice-recorder`, { waitUntil: 'networkidle0' });
  await page.click('[data-rec-toggle]');
  await sleep(2200);
  await page.click('[data-rec-toggle]');
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await sleep(300);
  await page.screenshot({ path: `${RAW}/recorderLoaded.png` });
  log('shot: recorderLoaded');
  await page.close();
}

// ---------------------------------------------------------------- render

let htmlCounter = 0;
async function convertPngToWebp(dir) {
  // This ffmpeg build has no libwebp/native webp encoder — use sharp (Astro
  // already depends on it). Slide PNGs for the video pipeline are converted
  // by the caller's choice of directory.
  for (const name of readdirSync(dir)) {
    if (!name.endsWith('.png')) continue;
    const png = join(dir, name);
    if (/slide-|poster\.png$/.test(name)) continue; // slideshow + facade stay PNG
    const webp = png.replace(/\.png$/, '.webp');
    await sharp(png).webp({ quality: 82 }).toFile(webp);
    unlinkSync(png);
  }
}
async function renderHtml(page, html, outPath, w, h) {
  // about:blank pages (setContent) cannot load file:// images — write the HTML
  // to disk and open it as a file:// page instead
  const tmpHtml = `/tmp/guide-render-${++htmlCounter}.html`;
  writeFileSync(tmpHtml, html);
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  await page.goto(`file://${tmpHtml}`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: w, height: h } });
}

async function buildArticleMedia(page, article) {
  const dir = join(PUBLIC_MEDIA, article.slug);
  mkdirSync(dir, { recursive: true });
  const slideDir = join(SLIDES, article.slug);
  mkdirSync(slideDir, { recursive: true });
  const narrDir = join(NARR, article.slug);
  mkdirSync(narrDir, { recursive: true });

  const shotTitles = {
    dropzone: ['Open the cutter', 'Drop a song, or click to browse — nothing is uploaded'],
    selection: ['Drag to select the part you want', 'Handles fine-tune the edges · Precise times for exact seconds'],
    exportToast: ['Preview, then export', 'WAV for lossless quality · MP3 128–320 kbps for size'],
    ringtoneSelection: ['Pick the hook', 'Selections cap at 40 s — the classic ringtone length'],
    ringtoneExportToast: ['Export the clip', 'A short fade-out makes the loop sound natural'],
    joinerTracks: ['Load and order the tracks', 'Arrow buttons reorder · total duration updates live'],
    joinerExportToast: ['Merge and export', 'Crossfade 2–4 s for a continuous mix · 0 s for hard cuts'],
    wavDropzone: ['Open the converter', 'Drop a WAV, or click to browse — nothing is uploaded'],
    wavExport: ['Convert and download', '320 kbps for music · 128 kbps for voice'],
    flacDropzone: ['Open the converter', 'Drop a FLAC, or click to browse — lossless in, MP3 out'],
    flacExport: ['Convert and download', 'The FLAC on disk stays untouched'],
    slowedDropzone: ['Open the slowed + reverb maker', 'Any song, full length — processed on the device'],
    slowedLoaded: ['Draw the section, then set Speed and Reverb', 'Speed lands near 85% · Reverb 20–30% — the pitch sinks with the speed'],
    slowedExport: ['Export the edit', 'MP3 320 kbps for posting · WAV for another app'],
    compressDropzone: ['Open the compressor', 'Drop the file that is too big to send'],
    compressExport: ['Pick the bitrate and export', '64–96 kbps for speech · 128 kbps for casual music'],
    volumeDropzone: ['Open the volume booster', 'Drop the memo that is too quiet'],
    volumeExport: ['Boost to 150–250% and export', 'The limiter holds the peaks — clean loudness first'],
    fadeDropzone: ['Open the fade tool', 'Drop the clip that clicks at the edges'],
    fadeExport: ['Set a 0.1 s fade-in and export', 'The ramp walks the level up from zero'],
    editorDropzone: ['Open the editor', 'One file, one export — selection, fades, level'],
    editorExport: ['Adjust and export', 'MP3 or WAV, encoded once on the device'],
    m4aDropzone: ['Open the converter', 'Drop the M4A the car refuses'],
    m4aExport: ['Convert to MP3 192 kbps', 'The format every head unit reads'],
    bpmDropzone: ['Open the key and BPM finder', 'Drop a song — audio or a video soundtrack'],
    bpmReadings: ['Read the two numbers', 'BPM as an integer · a pitch plus major or minor'],
    transcribeDropzone: ['Open the transcriber', 'Drop a recording — the audio never uploads'],
    trimmerDropzone: ['Open the audio trimmer', 'Drop a memo, podcast or song — nothing is uploaded'],
    trimmerExport: ['Keep or delete the selection, then export', 'MP3 192 kbps for sending · WAV for editing'],
    recorderLoaded: ['Record, stop, trim the ends', 'The take stays in the tab until you export'],
    normalizeDropzone: ['Open the normalizer', 'Peak normalize aims just under the ceiling'],
    normalizeExport: ['Normalize and export', 'The largest clean gain, measured not guessed'],
    compressorDropzone: ['Open the level compressor', 'Threshold and ratio, with the peak restored'],
    compressorExport: ['Compress and export', 'The loud parts come down, the quiet parts come up'],
    highpassDropzone: ['Open the high-pass filter', 'Sweep the cutoff, listen, export'],
    highpassExport: ['Set the cutoff and export', '80–120 Hz suits most voices'],
    silenceDropzone: ['Open the silence remover', 'Threshold and minimum gap decide each cut'],
    silenceExport: ['Remove the dead air and export', 'Breaths shorter than the gap stay'],
    splitDropzone: ['Open the splitter', 'Equal parts from 2 to 16, one ZIP'],
    splitExport: ['Split and download', 'Each part is the same length to the sample'],
    opusDropzone: ['Open the Opus converter', 'Drop the voice note, OGG or WebM'],
    opusExport: ['Convert to MP3', '128 kbps for a voice note is usually enough'],
  };

  // article images: framed real screenshots (PNG ≈ 65 KB each — light enough)
  let shotIndex = 0;
  for (const shot of article.shots) {
    shotIndex += 1;
    const [t, c] = shotTitles[shot];
    const html = ARTICLE_FRAME(t, c, `<img src="file://${RAW}/${shot}.png" />`);
    const png = `${dir}/${String(shotIndex).padStart(2, '0')}-${shot}.png`;
    await renderHtml(page, html, png, 1200, 750);
  }

  // article diagram images
  // Number diagrams after the screenshots. A fixed "03-" collides once a guide has 3 shots.
  let diagramIndex = Number(String(shotIndex + 1).padStart(2, '0'));
  if (article.slug === 'how-to-cut-a-song') {
    const d = DIAGRAMS.keepVsDelete;
    await renderHtml(page, diagramHtml(d), `${dir}/${diagramIndex}-keep-vs-delete.png`, 1200, 750);
    diagramIndex += 1;
  }
  if (article.slug === 'merge-songs-one-track') {
    const d = DIAGRAMS.crossfade;
    await renderHtml(page, diagramHtml(d), `${dir}/${diagramIndex}-crossfade.png`, 1200, 750);
    diagramIndex += 1;
  }
  for (const d of article.diagrams ?? []) {
    const def = DIAGRAMS[d.name];
    await renderHtml(page, diagramHtml(def), `${dir}/${String(diagramIndex).padStart(2, '0')}-${d.file}.png`, 1200, 750);
    diagramIndex += 1;
  }

  // Article images ship as WebP (PNG stays only for the ffmpeg slideshow input).
  await convertPngToWebp(dir);

  // narration + video slides (image-only articles skip this block)
  const durations = [];
  if (article.slides.length === 0) {
    log(`✔ ${article.slug}: images only, no narration/video`);
    return;
  }
  for (let i = 0; i < article.slides.length; i++) {
    const slide = article.slides[i];
    const aiff = `${narrDir}/${i}.aiff`;
    sh(`say -v ${VOICE} -r 155 -o "${aiff}" ${JSON.stringify(slide.narration)}`);
    const wav = `${narrDir}/${i}.wav`;
    sh(`ffmpeg -y -loglevel error -i "${aiff}" -af "apad=pad_dur=0.8" -ar 44100 -ac 1 "${wav}"`);
    const dur = parseFloat(sh(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${wav}"`).toString());
    durations.push(dur);

    if (slide.kind === 'diagram') {
      // reuse the article diagram inside a dark slide frame
      const d = DIAGRAMS[slide.diagram];
      const lightPng = `${narrDir}/d${i}.png`;
      await renderHtml(page, diagramHtml(d), lightPng, 1200, 750);
      await renderHtml(page, slideHtml(article, { ...slide, kind: 'shot', shot: `d${i}` }, i, article.slides.length), `${slideDir}/slide-${String(i + 1).padStart(2, '0')}.png`, 1920, 1080);
    } else {
      await renderHtml(page, slideHtml(article, slide, i, article.slides.length), `${slideDir}/slide-${String(i + 1).padStart(2, '0')}.png`, 1920, 1080);
    }
  }

  // full narration -> m4a for the article player
  const listFile = `${narrDir}/list.txt`;
  writeFileSync(listFile, article.slides.map((_, i) => `file '${narrDir}/${i}.wav'`).join('\n'));
  const fullWav = `${narrDir}/full.wav`;
  sh(`ffmpeg -y -loglevel error -f concat -safe 0 -i "${listFile}" "${fullWav}"`);
  sh(`afconvert -f m4af -d aac -b 48000 -c 1 "${fullWav}" "${join(dir, 'narration.m4a')}"`);

  // poster: the branded title slide doubles as the YouTube facade cover
  cpSync(join(slideDir, 'slide-01.png'), join(dir, 'poster.png'));
  await convertPngToWebp(dir);

  // video
  const slidesTxt = durations.map((d, i) => `file '${slideDir}/slide-${String(i + 1).padStart(2, '0')}.png'\nduration ${d.toFixed(2)}`).join('\n') + `\nfile '${slideDir}/slide-${String(article.slides.length).padStart(2, '0')}.png'`;
  writeFileSync(`${slideDir}/slides.txt`, slidesTxt);
  const videoOut = join(OUT_VIDEOS, `${article.slug}.mp4`);
  sh(`ffmpeg -y -loglevel error -f concat -safe 0 -i "${slideDir}/slides.txt" -i "${fullWav}" -c:v libx264 -tune stillimage -pix_fmt yuv420p -c:a aac -b:a 96k -shortest "${videoOut}"`);

  // youtube metadata
  const desc = [
    article.videoTitle,
    '',
    'Step-by-step, using free browser tools that never upload your files.',
    `Try it: https://freeaudioeditor.online/${articleSlugToPath(article.slug)}`,
    'All guides: https://freeaudioeditor.online/guides',
    '',
    'Timestamps:',
    ...article.slides.map((s, i) => {
      const start = durations.slice(0, i).reduce((a, b) => a + b, 0);
      const mm = String(Math.floor(start / 60)).padStart(2, '0');
      const ss = String(Math.floor(start % 60)).padStart(2, '0');
      return `${mm}:${ss} ${s.kind === 'title' ? 'Intro' : s.kind === 'outro' ? 'Outro' : s.title.replace(/—.*/, '').trim()}`;
    }),
    '',
    'Free Audio Editor is a suite of privacy-first audio tools: trimming, cutting, merging, reversing, volume boosting and format conversion — all running locally in your browser.',
    '',
    '#audioediting #tutorial #freeaudioeditor',
  ].join('\n');
  writeFileSync(join(OUT_VIDEOS, `${article.slug}.youtube.md`), desc);
  log(`✔ ${article.slug}: ${article.slides.length} slides, narration + video done`);
}

// ---------------------------------------------------------------- main

const normal = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--autoplay-policy=no-user-gesture-required'] });
const fakeMic = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--autoplay-policy=no-user-gesture-required'],
});
try {
  log('capturing product screenshots…');
  await captureShots(normal);
  await captureRecorder(fakeMic);
  await captureEditorPages(normal);
  await captureBpmFinder(normal);
  await captureLoudnessMeter(normal);
  await captureTranscribe(normal);

  const ONLY = (process.env.ONLY ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  const articles = ONLY.length ? ARTICLES.filter((a) => ONLY.includes(a.slug)) : ARTICLES;

  const page = await normal.newPage();
  for (const article of articles) {
    log(`building ${article.slug}…`);
    await buildArticleMedia(page, article);
  }
  await page.close();
} finally {
  await normal.close();
  await fakeMic.close();
}

// summary
for (const a of ARTICLES) {
  const dir = join(PUBLIC_MEDIA, a.slug);
  const files = existsSync(dir) ? execSync(`ls -la ${dir} | tail -n +2`).toString() : '';
  const vid = join(OUT_VIDEOS, `${a.slug}.mp4`);
  const size = existsSync(vid) ? (statSync(vid).size / 1024 / 1024).toFixed(1) + ' MB' : 'missing';
  console.log(`\n${a.slug}:\n  images+audio → ${dir}\n  video → ${vid} (${size})`);
}
console.log('\nDONE');
