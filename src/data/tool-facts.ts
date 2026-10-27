/**
 * Decision facts for the flagship tool pages: who the page is for, who it is
 * not for, and the specs a reader needs before starting. English only — the
 * localized pages keep the translated tool copy and skip this block.
 */
export interface ToolFit {
  use: string[];
  avoid: string[];
}

export interface ToolSpec {
  label: string;
  value: string;
}

export interface ToolFacts {
  fit: ToolFit;
  specs: ToolSpec[];
}

export const TOOL_FACTS: Record<string, ToolFacts> = {
  'audio-trimmer': {
    fit: {
      use: [
        'Keep one span of a podcast answer, lecture or interview and drop everything around it.',
        'Shorten a voice memo before sending it, so the file is only the part that matters.',
        'Trim the soundtrack of a video when the picture is not needed.',
        'Cut on a phone: the waveform accepts touch and the export button stays in reach.',
      ],
      avoid: [
        'You need to remove many separate silences — the [silence remover](/silence-remover) finds the gaps.',
        'You need a voice layered over music — the [multi-track editor](/multi-track-audio-editor) mixes up to 8 tracks. A trim only removes time.',
        'The clip is a ringtone: the [ringtone maker](/ringtone-maker) caps the selection at 40 seconds. M4R appears only when this browser can encode AAC. The page only downloads the file.',
        'You only need the file smaller — [compress audio](/compress-audio) re-encodes at a lower bitrate.',
      ],
    },
    specs: [
      { label: 'Input', value: 'A file this browser can decode. The picker is not limited to one format.' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, first two channels only, or 16-bit WAV' },
      { label: 'Selection', value: 'One region per export; drag the handles or type the start and end times' },
      { label: 'Length', value: 'Over 300 MB is rejected. Over one hour still opens, with a memory warning. That warning is not a length cap.' },
      { label: 'Tags', value: 'Not copied — title, artist and cover art are left behind on MP3 export' },
      { label: 'Processing', value: 'Decoded and encoded in the browser with the Web Audio API' },
      { label: 'After loading', value: 'Decode and WAV export need no network after this page’s scripts load. MP3 export needs the encoder to have loaded once.' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'mp3-cutter': {
    fit: {
      use: [
        'Remove an intro, ad read or long silence from a song or an episode.',
        'Keep only the chorus or one section and discard the rest.',
        'Make a shorter version for a player or a message without a desktop editor.',
      ],
      avoid: [
        'You need several cuts joined back together — export the parts and use the [audio joiner](/audio-joiner).',
        'You need gaps removed automatically across a long recording — the [silence remover](/silence-remover) marks them.',
        'You need a ringtone capped at 40 seconds — the [ringtone maker](/ringtone-maker). M4R appears only when this browser can encode AAC. The page only downloads the file.',
        'The whole file needs to shrink rather than shorten — [compress audio](/compress-audio).',
      ],
    },
    specs: [
      { label: 'Input', value: 'The picker is not limited to MP3. The file opens only if this browser can decode it.' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, first two channels only, or 16-bit WAV' },
      { label: 'Modes', value: 'Keep the selected part, or delete it and close the gap' },
      { label: 'Length', value: 'Over 300 MB is rejected. Over one hour still opens, with a memory warning.' },
      { label: 'Quality', value: 'WAV is 16-bit PCM of the samples you kept. MP3 encodes that span once.' },
      { label: 'Tags', value: 'Not copied — the export carries no title, artist or cover art' },
      { label: 'Processing', value: 'Runs locally in the browser; the file is never uploaded' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'wav-to-mp3': {
    fit: {
      use: [
        'Encode a WAV as MP3 at 64, 96, 128, 192, or 320 kbps. This page starts at 320.',
        'Make an MP3 from a WAV at one of the five bitrates.',
        'Convert a batch of WAV files at one bitrate and download them as one ZIP.',
        'Free up disk space while keeping a playable copy.',
      ],
      avoid: [
        'You need to cut a section as well — trim on the [audio trimmer](/audio-trimmer), or convert and then trim.',
        'The file is already an MP3 and only needs to be smaller — [compress audio](/compress-audio).',
        'You need the title, artist, and cover on the MP3 — add them in the [MP3 tag editor](/mp3-tag-editor).',
        'You need a lossless result — keep the WAV rather than converting it.',
      ],
    },
    specs: [
      { label: 'Input', value: 'WAV; M4A, FLAC and OGG files also decode in the same queue' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps; WAV remains available in the menu' },
      { label: 'Batch', value: 'Any number of files at one setting; one downloads alone, two or more arrive as a ZIP' },
      { label: 'Length', value: 'Over 300 MB is rejected. Over one hour still opens, with a memory warning.' },
      { label: 'Metadata', value: 'Not copied — title, artist and artwork do not carry over' },
      { label: 'Encoder', value: 'Runs in the browser, not on a server' },
      { label: 'After loading', value: 'MP3 export needs the encoder to have loaded once' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'mp4-to-mp3': {
    fit: {
      use: [
        'Save a lecture, interview or concert from video as audio you can hear with the screen off.',
        'The soundtrack is decoded on this device. A file over 300 MB is rejected.',
        'Pull the soundtrack out of a screen recording or a camera clip.',
      ],
      avoid: [
        'A soundtrack this browser cannot decode stops with the generic decode message. The page does not name the codec. A desktop ffmpeg build is [mcp](/mcp), and a format opens only when that build includes the decoder.',
        'You need a lossless copy for further editing — extract the audio as WAV instead.',
        'You need only one minute of the soundtrack — convert the whole track here, then trim it.',
        'The file is audio-only M4A — use M4A to MP3 instead.',
      ],
    },
    specs: [
      { label: 'Input', value: 'A video this browser can decode. The picker includes MP4, WebM, QuickTime, and MKV.' },
      { label: 'Not supported', value: 'If this browser cannot decode the soundtrack, the message is: This file could not be decoded — it may be corrupted, or its codec is not supported by your browser. It does not name the codec.' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps; WAV is also in the menu' },
      { label: 'Batch', value: 'Several videos at one setting; two or more downloads arrive as a ZIP' },
      { label: 'Resolution', value: 'The picture is not decoded. Resolution is not part of the conversion.' },
      { label: 'Metadata', value: 'Video title, thumbnail and chapters are not carried over' },
      { label: 'Processing', value: 'Only the audio track is decoded, locally; video frames are never processed' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'm4a-to-mp3': {
    fit: {
      use: [
        'Decode an M4A or AAC file and encode MP3. This page starts at 320 kbps.',
        'The menu starts at 320 kbps. Tags are not copied.',
        'Batch several M4A files at one bitrate and download a ZIP.',
      ],
      avoid: [
        'If this tab cannot decode the file, the message does not name the codec.',
        'The file is an MP4 video — use the MP4 to MP3 converter.',
        'You need tags and artwork kept — the converter writes no metadata; re-add them with the MP3 tag editor.',
        'You need the original untouched — keep the M4A; MP3 is a second lossy encode.',
      ],
    },
    specs: [
      { label: 'Input', value: 'M4A and AAC audio, including iPhone voice memos and most AAC downloads' },
      { label: 'Not supported', value: 'If this tab cannot decode the file, the message does not name the codec' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps; WAV is also in the menu' },
      { label: 'Batch', value: 'Any number of files at one setting; two or more download as a ZIP' },
      { label: 'Length', value: 'Over 300 MB is rejected. Over one hour still opens, with a memory warning' },
      { label: 'Metadata', value: 'Not copied — title, artist and cover art do not carry over' },
      { label: 'Processing', value: 'Decoded and encoded locally in the browser; nothing is uploaded' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'compress-audio': {
    fit: {
      use: [
        'Re-encode at 64, 96, 128, 192, or 320 kbps. This page starts at 128. It does not predict the size in bytes.',
        'Bring a 320 kbps library down for a phone on mobile data.',
        'Turn a WAV export into small MP3s for a quick review link.',
        'Batch several files to one bitrate without an install.',
      ],
      avoid: [
        'You need to even out loud and quiet parts — that is the level compressor, not a bitrate change.',
        'You need a streaming loudness target — the loudness meter measures LUFS.',
        'You only need a new title or cover — the MP3 tag editor changes tags without re-encoding.',
        'You need a 16-bit WAV of decoded samples — this page’s menu is MP3 only. WAV export is on the [MP3 to WAV](/mp3-to-wav) page.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP3, WAV, M4A, FLAC, OGG and other browser-decodable audio' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps. No WAV on this page. Starts at 128' },
      { label: 'Compression', value: 'The bitrate is the encode setting. This page does not predict the file size in bytes. A higher number does not restore detail' },
      { label: 'Batch', value: 'Several files at one setting; two or more downloads arrive as a ZIP' },
      { label: 'Quality', value: 'Re-encoding an already-compressed MP3 adds a second lossy generation' },
      { label: 'Metadata', value: 'Tags and artwork are not copied' },
      { label: 'Processing', value: 'Decoding and encoding both run in the tab; no upload' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'voice-recorder': {
    fit: {
      use: [
        'Record a voice memo, interview or practice take without installing an app.',
        'Trim the breath and silence at both ends before saving.',
        'The microphone stream stays in this tab until you export.',
      ],
      avoid: [
        'You need a transcript — the audio-to-text page takes a file, not the live microphone.',
        'You need to record the computer’s output or a phone call — this page records the microphone only.',
        'You need a level-matched podcast master — record here, then measure it with the loudness meter.',
        'You need the take to survive a closed tab — export before closing; nothing is stored on a server.',
      ],
    },
    specs: [
      { label: 'Input', value: 'Microphone through the browser’s MediaRecorder API (permission required)' },
      { label: 'Capture format', value: 'The browser decides the capture container. Export is MP3 or 16-bit WAV' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or WAV' },
      { label: 'Length', value: 'This page does not set a minute cap. Closing the tab without an export drops the take' },
      { label: 'Storage', value: 'In-tab memory only — closing without exporting discards the take' },
      { label: 'Browsers', value: 'If recording is unavailable: Recording is not available in this browser. If permission is blocked: Microphone access was blocked.' },
      { label: 'After recording', value: 'The take loads into the editor for trimming before export' },
      { label: 'Privacy', value: 'The microphone stream is never uploaded' },
    ],
  },

  'audio-joiner': {
    fit: {
      use: [
        'Put chapters or voice memos in a chosen order and export one file.',
        'Join mixed formats — MP3, WAV and M4A in the same list.',
        'Crossfade between tracks, or set zero for a hard cut.',
      ],
      avoid: [
        'Tracks should play at the same time — the multi-track editor layers up to eight files.',
        'You need one clip repeated — the audio looper repeats a selection 2 to 16 times.',
        'You need an iPhone ringtone — the ringtone maker caps the clip at 40 seconds and exports M4R.',
        'You need a sample-accurate gapless master — the joiner re-encodes the export.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP3, WAV, M4A, OGG, FLAC and other browser-decodable files; mixed formats in one list' },
      { label: 'Order', value: 'Arrange with arrow buttons and remove any track before exporting' },
      { label: 'Crossfade', value: '0 to 5 seconds between neighbours, step 0.5. Zero is a hard cut' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or 16-bit WAV' },
      { label: 'File count', value: 'No fixed limit; the ceiling is the tab’s memory' },
      { label: 'Processing', value: 'Files are decoded and matched to a common sample rate in the browser' },
      { label: 'Long stacks', value: 'No file-count cap. The ceiling is the memory in this tab' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'normalize-audio': {
    fit: {
      use: [
        'Raise a consistently quiet recording so its peak lands just below full scale.',
        'Bring chapters or clips to a similar peak before joining them.',
        'Set a known ceiling before compressing or boosting the file next.',
      ],
      avoid: [
        'You need loud and quiet parts evened out — the level compressor changes dynamics; normalizing does not.',
        'You need a streaming loudness target in LUFS — use the loudness meter.',
        'You need a specific gain you choose, even past 100% — use the volume booster.',
        'One click or breath already peaks near 0 dB — normalizing will barely change the file.',
      ],
    },
    specs: [
      { label: 'Method', value: 'Peak normalization to 0.98, gain capped at 4×. Below 1e-6 the file is not raised' },
      { label: 'Not LUFS', value: 'No integrated loudness target; the loudness meter handles −16, −14 and −23 LUFS' },
      { label: 'Input', value: 'MP3, WAV, M4A, FLAC, OGG and other browser-decodable audio' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or 16-bit WAV' },
      { label: 'Batch', value: 'Each file is measured and raised to its own peak; two or more download as a ZIP' },
      { label: 'Quality', value: 'One gain for the whole file. MP3 encodes once. WAV is 16-bit PCM' },
      { label: 'Length', value: 'Over 300 MB is rejected. Over one hour still opens, with a memory warning. That warning is not a length cap' },
      { label: 'Privacy', value: 'Analysis and gain run in the browser; nothing is uploaded' },
    ],
  },

  'ringtone-maker': {
    fit: {
      use: [
        'Cut a hook or drop into a ringtone-sized clip.',
        'Add a short fade so the phone’s loop back to the start is less abrupt.',
        'Download M4R only when this browser can encode AAC, or MP3 at 320, 192, or 128, or 16-bit WAV. The page does not set the tone on the phone.',
      ],
      avoid: [
        'You need the full song shortened for listening — the MP3 cutter has no 40-second cap.',
        'You need a notification or alarm tone longer than 40 seconds — this page clamps the selection.',
        'This browser cannot encode AAC — the menu has no M4R. Export MP3 or 16-bit WAV. The page only downloads the file.',
        'You need the tone installed on the phone — the page only downloads the file.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP3, M4A, WAV, FLAC, OGG and other browser-decodable audio' },
      { label: 'Length', value: 'A drag longer than 40 seconds is clamped. Typed start and end are not clamped' },
      { label: 'Output', value: 'M4R when AAC encoding is available, otherwise MP3 at 320, 192, or 128, or 16-bit WAV' },
      { label: 'M4R support', value: 'M4R is AAC-LC, at most 2 channels, 192 kbps, only when AudioEncoder supports mp4a.40.2. Otherwise the menu has no M4R' },
      { label: 'Fade', value: 'Optional fade in and fade out before export' },
      { label: 'Installation', value: 'Download only. This page does not set the tone on the phone' },
      { label: 'Metadata', value: 'The exported tone carries no title or artwork' },
      { label: 'Privacy', value: 'Rendered on the device; the song is never uploaded' },
    ],
  },

  soundboard: {
    fit: {
      use: [
        'Trigger reactions on a live stream, with more than one sound playing.',
        'Drop a sting, applause, or a wrong-answer buzzer into a podcast or a class.',
        'Tap squares on a phone during a presentation. The room hears the speaker.',
        'Start from the eleven synthesized sounds, then replace any square with your own clip.',
      ],
      avoid: [
        'You need one take trimmed and downloaded. Use the voice recorder.',
        'You need the pitch moved, or echo and reverb on a clip. Export WAV from the square, then use the pitch changer or slowed and reverb.',
        'The source is longer than 60 seconds. The upload skips it. Cut it on the audio trimmer first.',
        'The sound has to enter a Discord, Zoom, or game microphone. This page plays speakers and desktop audio. A virtual-microphone app is a different tool.',
      ],
    },
    specs: [
      { label: 'Built-in sounds', value: 'Eleven, synthesized at 44.1 kHz and normalized to −1 dBFS: Air Horn, Boom, Sad Trombone, Rimshot, Buzzer, Fart, Applause, Crickets, Ding, Boing, Coin' },
      { label: 'Input', value: 'MP3, WAV, M4A, OGG, FLAC, AAC, and the microphone. Uploads longer than 60 seconds are skipped' },
      { label: 'Useful length', value: 'Own files longer than 60 seconds are skipped. Closing the tab drops the board unless you export it' },
      { label: 'Playback', value: 'Squares overlap. Keys are 1 through 0, then Q W E R T Y U I O P. Esc stops every sound' },
      { label: 'One square', value: 'Trim, rename, color, Replace audio, or Export WAV as 16-bit PCM at the clip’s sample rate' },
      { label: 'Board file', value: 'JSON with the WAV audio inside. Import also reads a soundtools.io board: buttons with audio come across' },
      { label: 'Storage', value: 'Nothing is kept in the browser. Export before you close the tab' },
      { label: 'Browsers', value: 'Hotkeys need a keyboard. This page does not send audio into Discord, Zoom, or a game microphone' },
      { label: 'Privacy', value: 'Web Audio API in this tab. The microphone and the files stay on the device' },
    ],
  },
};
