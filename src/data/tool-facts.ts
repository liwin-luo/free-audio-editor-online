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
        'You need to remove many separate silences across an episode — the silence remover finds the gaps on its own.',
        'You need a voice layered over music — the multi-track editor mixes tracks, while a trim only removes time.',
        'The clip is a ringtone: the ringtone maker caps the selection at 40 seconds and exports M4R for iPhone.',
        'You only need the file smaller, not shorter — compress audio re-encodes it at a lower bitrate.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP3, WAV, M4A/AAC, OGG, FLAC and WebM audio; the soundtrack of MP4, MOV and WebM video' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or lossless WAV' },
      { label: 'Selection', value: 'One region per export; drag the handles or type the start and end times' },
      { label: 'Length', value: 'About an hour per file on a modern computer; the real limit is the tab’s memory' },
      { label: 'Tags', value: 'Not copied — title, artist and cover art are left behind on MP3 export' },
      { label: 'Processing', value: 'Decoded and encoded in the browser with the Web Audio API' },
      { label: 'After loading', value: 'Works offline; no audio is sent to a server at any point' },
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
        'You need several cuts joined back together — export the parts and use the audio joiner.',
        'You need gaps removed automatically across a long recording — the silence remover marks them for you.',
        'You need a ringtone with a 40-second cap and M4R output — use the ringtone maker.',
        'The whole file needs to shrink rather than shorten — compress audio.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP3 primarily; WAV, M4A, OGG, FLAC and video soundtracks also decode' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or lossless WAV' },
      { label: 'Modes', value: 'Keep the selected part, or delete it and close the gap' },
      { label: 'Length', value: 'About an hour per file on a desktop; long files use more memory on a phone' },
      { label: 'Quality', value: 'WAV keeps the selected samples; MP3 re-encodes the cut once' },
      { label: 'Tags', value: 'Not copied — the export carries no title, artist or cover art' },
      { label: 'Processing', value: 'Runs locally in the browser; the file is never uploaded' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'wav-to-mp3': {
    fit: {
      use: [
        'Shrink a WAV recording to a size that sends by email or chat.',
        'Make a lossless export play on phones, car stereos and older players.',
        'Convert a batch of WAV files at one bitrate and download them as one ZIP.',
        'Free up disk space while keeping a playable copy.',
      ],
      avoid: [
        'You need to cut a section as well — convert first, then trim, or trim the WAV on the audio trimmer.',
        'The file is already an MP3 and only needs to be smaller — use compress audio.',
        'You need the WAV’s title, artist and cover on the MP3 — the converter writes no metadata; add tags afterwards in the MP3 tag editor.',
        'You need a lossless result — keep the WAV rather than converting it.',
      ],
    },
    specs: [
      { label: 'Input', value: 'WAV; M4A, FLAC and OGG files also decode in the same queue' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps; WAV remains available in the menu' },
      { label: 'Batch', value: 'Any number of files at one setting; one downloads alone, two or more arrive as a ZIP' },
      { label: 'Length', value: 'About an hour per file; convert very long files one at a time on a phone' },
      { label: 'Metadata', value: 'Not copied — title, artist and artwork do not carry over' },
      { label: 'Encoder', value: 'Ships with the page and runs on the device, not on a server' },
      { label: 'After loading', value: 'Works offline; the audio never leaves the browser' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'mp4-to-mp3': {
    fit: {
      use: [
        'Save a lecture, interview or concert from video as audio you can hear with the screen off.',
        'Skip uploading a multi-hundred-megabyte video just to get its sound.',
        'Pull the soundtrack out of a screen recording or a camera clip.',
      ],
      avoid: [
        'The video has an AC3 or DTS soundtrack — browsers cannot decode it; convert to AAC with a desktop tool first.',
        'You need a lossless copy for further editing — extract the audio as WAV instead.',
        'You need only one minute of the soundtrack — convert the whole track here, then trim it.',
        'The file is audio-only M4A — use M4A to MP3 instead.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP4 with AAC audio, WebM with Opus, and most MOV files' },
      { label: 'Not supported', value: 'AC3 and DTS soundtracks; the browser rejects them with a clear message' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps; WAV is also in the menu' },
      { label: 'Batch', value: 'Several videos at one setting; two or more downloads arrive as a ZIP' },
      { label: 'Resolution', value: 'Ignored — 4K and 240p files with the same soundtrack convert at the same speed' },
      { label: 'Metadata', value: 'Video title, thumbnail and chapters are not carried over' },
      { label: 'Processing', value: 'Only the audio track is decoded, locally; video frames are never processed' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'm4a-to-mp3': {
    fit: {
      use: [
        'Turn an iPhone voice memo into an MP3 that more players accept.',
        'Convert AAC downloads for a car stereo or an older MP3 player.',
        'Batch several M4A files at one bitrate and download a ZIP.',
      ],
      avoid: [
        'The M4A contains Apple Lossless (ALAC) — convert it to AAC or WAV first; browsers often cannot decode ALAC.',
        'The file is an MP4 video — use the MP4 to MP3 converter.',
        'You need tags and artwork kept — the converter writes no metadata; re-add them with the MP3 tag editor.',
        'You need the original untouched — keep the M4A; MP3 is a second lossy encode.',
      ],
    },
    specs: [
      { label: 'Input', value: 'M4A and AAC audio, including iPhone voice memos and most AAC downloads' },
      { label: 'Not supported', value: 'ALAC stored in M4A often will not decode in a browser' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps; WAV is also in the menu' },
      { label: 'Batch', value: 'Any number of files at one setting; two or more download as a ZIP' },
      { label: 'Length', value: 'About an hour per file; very long files are steadier one at a time' },
      { label: 'Metadata', value: 'Not copied — title, artist and cover art do not carry over' },
      { label: 'Processing', value: 'Decoded and encoded locally in the browser; nothing is uploaded' },
      { label: 'Price', value: 'Free, no signup, no watermark' },
    ],
  },

  'compress-audio': {
    fit: {
      use: [
        'Fit a lecture or voice memo under an email or chat-app size cap.',
        'Bring a 320 kbps library down for a phone on mobile data.',
        'Turn a WAV export into small MP3s for a quick review link.',
        'Batch several files to one bitrate without an install.',
      ],
      avoid: [
        'You need to even out loud and quiet parts — that is the level compressor, not a bitrate change.',
        'You need a streaming loudness target — the loudness meter measures LUFS.',
        'You only need a new title or cover — the MP3 tag editor changes tags without re-encoding.',
        'You need the best quality for further editing — start from a lossless source and export WAV.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP3, WAV, M4A, FLAC, OGG and other browser-decodable audio' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps; WAV remains in the menu' },
      { label: 'Compression', value: 'Size follows bitrate: 320 → 128 kbps leaves roughly 40% of the original size' },
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
        'Keep a confidential conversation local — the microphone stream stays in the tab.',
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
      { label: 'Capture format', value: 'Chrome and Firefox capture WebM/Opus; Safari captures MP4/AAC — the browser decides' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or WAV' },
      { label: 'Length', value: 'Limited by device memory; export long sessions in sections' },
      { label: 'Storage', value: 'In-tab memory only — closing without exporting discards the take' },
      { label: 'Browsers', value: 'Chrome, Edge, Firefox and Safari on desktop; Chrome on Android and Safari on iOS' },
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
      { label: 'Crossfade', value: 'Optional overlap between neighbours; zero gives a hard cut' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or lossless WAV' },
      { label: 'File count', value: 'No fixed limit; the ceiling is the tab’s memory' },
      { label: 'Processing', value: 'Files are decoded and matched to a common sample rate in the browser' },
      { label: 'Long stacks', value: 'A desktop is steadier than a phone once the list gets long' },
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
      { label: 'Method', value: 'Peak normalization to about −0.2 dBFS with one fixed gain for the whole file' },
      { label: 'Not LUFS', value: 'No integrated loudness target; the loudness meter handles −16, −14 and −23 LUFS' },
      { label: 'Input', value: 'MP3, WAV, M4A, FLAC, OGG and other browser-decodable audio' },
      { label: 'Output', value: 'MP3 at 64, 96, 128, 192 or 320 kbps, or lossless WAV' },
      { label: 'Batch', value: 'Each file is measured and raised to its own peak; two or more download as a ZIP' },
      { label: 'Quality', value: 'Gain is applied cleanly; MP3 export adds one encode, WAV adds none' },
      { label: 'Length', value: 'About an hour per file; longer files depend on available memory' },
      { label: 'Privacy', value: 'Analysis and gain run in the browser; nothing is uploaded' },
    ],
  },

  'ringtone-maker': {
    fit: {
      use: [
        'Cut a hook or drop into a ringtone-sized clip.',
        'Add a short fade so the phone’s loop back to the start is less abrupt.',
        'Export M4R for iPhone, or MP3 for Android and other phones.',
      ],
      avoid: [
        'You need the full song shortened for listening — the MP3 cutter has no 40-second cap.',
        'You need a notification or alarm tone longer than 40 seconds — this page clamps the selection.',
        'You are on Firefox and need M4R — it cannot encode AAC; export MP3 and use GarageBand.',
        'You need the tone installed on the phone — the page only downloads the file.',
      ],
    },
    specs: [
      { label: 'Input', value: 'MP3, M4A, WAV, FLAC, OGG and other browser-decodable audio' },
      { label: 'Length', value: 'Selection capped at 40 seconds' },
      { label: 'Output', value: 'M4R for iPhone, MP3 at 64, 96, 128, 192 or 320 kbps, or WAV' },
      { label: 'M4R support', value: 'Chrome, Edge and Safari 17+ encode AAC on the device; Firefox cannot' },
      { label: 'Fade', value: 'Optional fade in and fade out before export' },
      { label: 'Installation', value: 'Download only — sync M4R through Finder or iTunes; set MP3 in Android sound settings' },
      { label: 'Metadata', value: 'The exported tone carries no title or artwork' },
      { label: 'Privacy', value: 'Rendered on the device; the song is never uploaded' },
    ],
  },
};
