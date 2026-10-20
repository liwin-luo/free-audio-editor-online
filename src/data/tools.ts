export interface FaqItem {
  q: string;
  a: string;
}

/** Extra H2 blocks under the intro. Omitted on locales that keep the short page. */
export interface ToolSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface HowToStep {
  name: string;
  text: string;
}

/** Category order — drives the nav dropdown and footer columns. Labels live in i18n. */
export const CATEGORY_IDS = ['cut', 'merge', 'record', 'effects'] as const;
export type ToolCategory = (typeof CATEGORY_IDS)[number];

export type ToolIcon =
  | 'trimmer'
  | 'scissors'
  | 'waveform'
  | 'bell'
  | 'layers'
  | 'convert'
  | 'reverse'
  | 'volume'
  | 'mic'
  | 'film'
  | 'clock-counter-clockwise'
  | 'moon'
  | 'trending-up'
  | 'note'
  | 'file'
  | 'voice'
  | 'sun'
  | 'plus'
  | 'minus'
  | 'image'
  | 'tag';

export interface EditorConfig {
  /** Accept multiple files and merge them (audio-joiner) */
  multiple?: boolean;
  /** Stack files on one timeline (multi-track-audio-editor) */
  mixer?: boolean;
  /** Default export format id. Omitted on image-output tools. */
  defaultFormat?: string;
  /** Image-output editor instead of the audio editor */
  visualizer?: 'waveform' | 'spectrogram';
  /** Paint a picture or text into a WAV spectrogram */
  paint?: boolean;
  /** Speech-to-text island instead of an audio editor */
  transcribe?: boolean;
  /** MP3 tag editor island instead of an audio editor */
  tagEditor?: boolean;
  /** Show the Adjust drawer (gain, speed, reverse, fades) */
  showAdjust?: boolean;
  /** Ringtone mode: clamp selection to 40 seconds */
  ringtone?: boolean;
  /** Headline shown inside the empty dropzone */
  dropHint: string;
  /** Pure conversion page: hide cut/selection UI, treat export as a convert */
  converter?: boolean;
  /** Remove long silences on export. Hides the cut UI. */
  silence?: boolean;
  /** Repeat the kept selection, or the whole file, on export. */
  loop?: boolean;
  /** File LUFS meter island instead of the waveform editor. */
  loudness?: boolean;
  /** Click island. No file. Oscillator playback, optional bar export. */
  metronome?: boolean;
  /** Read BPM and key. Does not change the file. */
  keyBpm?: boolean;
  /** Export button label (default "Export") */
  exportLabel?: string;
  /** Max gain slider percent (default 200) */
  maxGainPercent?: number;
  /** Headline controls surfaced outside the Adjust drawer */
  quickControls?: ('reverse' | 'speed' | 'tempo' | 'gain' | 'normalize' | 'reverb' | 'pitch' | 'bass' | 'treble' | 'mid' | 'lpf' | 'hpf' | 'compress' | 'echo' | 'pan' | 'circle')[];
  /** file input accept attribute (default: audio + common video containers) */
  accept?: string;
  /** Export format ids offered in the select, in order. Default: everything except M4R. */
  formats?: string[];
}

export interface ToolDef {
  slug: string;
  name: string;
  /** Short label used in nav / related tools */
  shortName: string;
  icon: ToolIcon;
  category: ToolCategory;
  /** <title> tag, <= 60 chars ideally */
  title: string;
  /** meta description, <= 155 chars */
  description: string;
  h1: string;
  /** Illustration above the H1. Locales override alt via ToolCopy.heroAlt. */
  hero?: { src: string; alt: string; width: number; height: number };
  /** One-line subtitle under the H1 */
  subtitle: string;
  /** Scenario line for home/hub cards; locales may override via ToolCopy.cardLine, else falls back to subtitle */
  cardLine?: string;
  /** Intro paragraph block (1–2 sentences, keyword-rich but honest) */
  intro: string;
  /** H2 plus three concrete jobs. Sits under the intro, not a second how-to. */
  usesHeading: string;
  uses: [string, string, string];
  howTo: HowToStep[];
  faqs: FaqItem[];
  /** Long-form blocks for the few pages aimed at head terms. Locales opt in. */
  sections?: ToolSection[];
  /** Slugs of related tools shown at the bottom */
  related: string[];
  editor: EditorConfig;
  /** Render a microphone recorder above the editor (voice-recorder) */
  recorder?: boolean;
}

export const TOOLS: ToolDef[] = [
  {
    slug: 'audio-trimmer',
    cardLine: 'Drag the handles to keep exactly the part you need — podcasts, voice memos, any track.',
    name: 'Audio Trimmer',
    shortName: 'Audio Trimmer',
    icon: 'trimmer',
    category: 'cut',
    title: 'Audio Trimmer — Trim Audio Online Free',
    description:
      'Trim audio online: voice memos, podcasts and recordings. Select the part you keep, preview, and save. Free, nothing uploaded.',
    h1: 'Audio Trimmer — Trim a Recording, Online Free',
    hero: {
      src: '/audio-trimmer.svg',
      alt: 'Trim an MP3 or a podcast down to the part you need',
      width: 32,
      height: 32,
    },
    subtitle: 'Trim audio online — free, right in your browser. Nothing is uploaded.',
    intro:
      'Cut the exact part you need from any song, voice memo, podcast or recording. Drag on the waveform to select, listen back, and save — the whole trim happens on your device, so even long recordings stay private and start instantly.',
    usesHeading: 'Jobs a trim actually finishes',
    uses: [
      'Cut a podcast answer out and leave the ums on either side behind.',
      'Lift a chorus or a loop out of a full song without a desktop editor.',
      'Shorten a voice memo before you send it, so the file is only the point.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Drag an audio or video file onto the waveform area, or click to browse. MP3, WAV, M4A, OGG, FLAC and more are supported.',
      },
      {
        name: 'Select what to keep',
        text: 'Drag across the waveform to highlight the section you want. Drag the handles to fine-tune, or type exact start and end times.',
      },
      {
        name: 'Preview and save',
        text: 'Press play to hear only your selection, then click Export to download the trimmed file as MP3 or WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is this audio trimmer really free?',
        a: 'Yes. Every trim and export is free, with no signup and no watermark. The tool runs entirely in your browser, so there are no server costs to pass on to you.',
      },
      {
        q: 'Does my audio get uploaded to a server?',
        a: 'No. Your file is decoded and processed by your own browser using the Web Audio API. You can go offline after loading the page and the trimmer still works — nothing is ever sent anywhere.',
      },
      {
        q: 'Which formats can I trim?',
        a: 'Your browser can decode MP3, WAV, M4A/AAC, OGG, FLAC and WebM audio. You can save the result as MP3 (128–320 kbps) or lossless WAV.',
      },
      {
        q: 'Will trimming reduce the audio quality?',
        a: 'Saving as WAV is bit-perfect for the part you keep — no re-compression. Saving as MP3 re-encodes once; at 192 kbps or above the difference is practically inaudible for most listeners.',
      },
      {
        q: 'Can I trim audio on my phone?',
        a: 'Yes. The waveform supports touch, and the export button stays reachable at the bottom of the screen. It works in Safari on iPhone and in Chrome or Firefox on Android.',
      },
      {
        q: 'How long can my file be?',
        a: 'Recordings up to about an hour work comfortably on a modern computer. The practical limit is your device memory, not an artificial cap. Repeating the part you kept, from 2 to 16 times, is the audio looper.',
      },
    ],
    sections: [
      {
        heading: 'Mark the part you want to keep',
        paragraphs: [
          'Drag across the waveform. The start and end update as you drag, and you can type both times when a finger or a mouse is not exact enough. Press play to hear only that span before you save.',
          'Export WAV if you will trim again or edit further. Export MP3 when the clip is finished. A trim to WAV keeps the samples you selected. A trim to MP3 encodes once, at the bitrate you pick.',
        ],
      },
      {
        heading: 'Trim a recording, or cut a song',
        paragraphs: [
          'This page is for a recording you need to shorten: a podcast answer, a voice memo, a lecture, the middle of a long file.',
        ],
        bullets: [
          'Audio trimmer, this page: keep one span of any audio or video soundtrack and save it as MP3 or WAV.',
          'MP3 cutter: the same kind of selection, written for a song. That page walks through keeping a chorus or deleting an intro.',
          'Silence remover: drops long gaps on its own. Use it when the problem is dead air, not a span you have to mark by hand.',
        ],
      },
      {
        heading: 'What the trim does to the sound',
        paragraphs: [
          'The file is decoded, the span is taken, and the export is written again. WAV is the clean copy of the part you kept. MP3 at 192 kbps or above is enough for speech, and 320 kbps is the setting when the source is music.',
          'Trimming does not make a quiet recording louder. Raise it with the volume booster after the clip is the right length.',
        ],
      },
      {
        heading: 'How long a file can be',
        paragraphs: [
          'About an hour is comfortable on a current computer. The limit is the memory in the tab, not a cap we set. A phone handles a few minutes easily and gets less steady as the file gets long.',
        ],
        bullets: [
          'A voice memo or a podcast answer: trim it here, on the phone if you want.',
          'A full episode: a computer is the steadier place to preview and export.',
          'A video: the soundtrack is what gets trimmed. The picture is not saved.',
        ],
      },
    ],
    related: ['silence-remover', 'mp3-cutter', 'audio-joiner'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'mp3-cutter',
    cardLine: 'Cut a song down to the chorus, the drop or any clip without re-encoding.',
    name: 'MP3 Cutter',
    shortName: 'MP3 Cutter',
    icon: 'scissors',
    category: 'cut',
    title: 'MP3 Cutter — Cut MP3 Files Online Free, No Upload',
    description:
      'Cut an MP3 online: keep the chorus or delete the intro, preview, then save. Free in your browser, no signup, nothing uploaded.',
    h1: 'MP3 Cutter — Cut an MP3 Online, Free',
    hero: {
      src: '/mp3-cutter.svg',
      alt: 'Free MP3 cutter online to cut and trim an MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Cut songs and MP3 files online — keep the part you want, delete the rest.',
    intro:
      'Cut a song down to the chorus, remove a long intro, or split out a highlight — right in your browser. Choose to keep the selected part or delete it, preview the result, and save a fresh MP3 in seconds.',
    usesHeading: 'Cuts people make in an MP3',
    uses: [
      'Remove an intro, an ad read, or a long silence from a song or episode.',
      'Keep one section and discard the rest, instead of fading over it.',
      'Cut the clip first if the next step is a ringtone.',
    ],
    howTo: [
      {
        name: 'Add your MP3',
        text: 'Drop your MP3 onto the page or click to pick a file. Most other audio and video formats work too.',
      },
      {
        name: 'Mark the part to cut',
        text: 'Drag across the waveform to mark a section. Switch between Keep selection and Delete selection depending on which part you want.',
      },
      {
        name: 'Cut and download',
        text: 'Listen to the preview, then export the cut as MP3 or lossless WAV. The download starts automatically.',
      },
    ],
    faqs: [
      {
        q: 'How do I cut only the chorus out of a song?',
        a: 'Select the chorus on the waveform, make sure the mode is set to Keep selection, preview it, then export. You get a new audio file containing just that part.',
      },
      {
        q: 'How do I remove the first 30 seconds of a track?',
        a: 'Select the first 30 seconds (the exact start and end times are shown while you drag, and you can type them precisely), set the mode to Delete selection, and export.',
      },
      {
        q: 'Is the MP3 quality preserved?',
        a: 'Cutting to WAV keeps the audio bit-perfect. Exporting to MP3 re-encodes once at the bitrate you choose — 320 kbps is transparent for virtually everyone.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'No. This MP3 cutter is a web app that runs inside your browser tab. There is nothing to install and no account to create.',
      },
      {
        q: 'Where do my files go?',
        a: 'Nowhere. The file is read from your disk by your browser and cut in memory. No upload, no cloud copy, no retention.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Drag the waveform with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'Keep the part you marked, or delete it',
        paragraphs: [
          'Drag across the waveform to mark a span. The times update as you drag, and you can type a start and an end when the pointer is not precise enough.',
          'The two modes do opposite jobs.',
        ],
        bullets: [
          'Keep selection: the file you save is only the span you marked. That is the chorus, the drop, or the one answer you want from a longer recording.',
          'Delete selection: the file you save is everything except that span. That is how you remove the first 30 seconds, an intro, or an ad read.',
        ],
      },
      {
        heading: 'Cut an MP3, or trim a recording',
        paragraphs: [
          'This page is for cutting a song or an MP3 down to one span. The editor also accepts most other audio and video files, and the result is a new MP3 or a WAV.',
          'The audio trimmer is the same kind of cut, aimed at podcasts and voice memos, where you keep a middle section and leave the rest. Use this page to cut an MP3. Use the trimmer when the file is not a song.',
        ],
      },
      {
        heading: 'What the cut does to the sound',
        paragraphs: [
          'Saving as WAV keeps the samples you selected, with no extra lossy pass. Saving as MP3 encodes once, at the bitrate you pick. 320 kbps is the setting when the cut should be hard to tell from the source. 192 kbps is enough for voice.',
          'The file is decoded, the span is taken, and the export is encoded again. One encode at a high bitrate is the practical version of a clean cut for a song you will listen to. If you will edit the file again, export WAV.',
        ],
      },
      {
        heading: 'What this cutter will not do',
        paragraphs: [
          'It cuts one file. It does not crossfade a playlist or stack several tracks on top of each other.',
        ],
        bullets: [
          'Joining several songs into one file is the audio joiner.',
          'A clip under 40 seconds, saved as an iPhone ringtone, is the ringtone maker.',
          'Title, artist, and cover art are the MP3 tag editor, after you have the cut.',
        ],
      },
    ],
    related: ['silence-remover', 'audio-trimmer', 'audio-joiner'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an MP3 file, or click to browse',
    },
  },
  {
    slug: 'mp3-editor',
    cardLine: 'One tab for quick edits: trim, fade, reverse, speed up and normalize any track.',
    name: 'MP3 Editor',
    shortName: 'MP3 Editor',
    icon: 'waveform',
    category: 'effects',
    title: 'MP3 Editor — Cut, Fade, Reverse & Speed Up MP3 Online',
    description:
      'Edit MP3 and other audio online: cut, trim, fade in and out, change volume and speed, reverse playback. Free and private — everything runs in your browser.',
    h1: 'MP3 Editor — Edit the Length of an MP3, Online Free',
    hero: {
      src: '/mp3-editor.svg',
      alt: 'Cut, fade, reverse and change the speed of an MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Cut, fade, reverse and speed up audio — all in one browser tab.',
    intro:
      'A compact audio editor for quick jobs: cut sections out, apply fade in and fade out, boost or lower volume, speed tracks up or down, and reverse playback. Every edit is applied on your device when you export — the original file always stays untouched on your disk.',
    usesHeading: 'Edits that stay in one tab',
    uses: [
      'Trim a file, then fade the new edges so the cut does not click.',
      'Speed or reverse a section without exporting between tools.',
      'Raise a quiet MP3 in the same pass, with volume or normalize.',
    ],
    howTo: [
      {
        name: 'Open your file',
        text: 'Drop an MP3, WAV, M4A or other audio file onto the editor. It decodes instantly on your device.',
      },
      {
        name: 'Edit',
        text: 'Select a range to keep or delete, then open Adjust to add fades, change volume, alter speed from 0.5× to 2×, or reverse the track.',
      },
      {
        name: 'Export the result',
        text: 'Save your edit as MP3 at up to 320 kbps, or as lossless WAV. Edits are rendered offline in your browser before download.',
      },
    ],
    faqs: [
      {
        q: 'What can this MP3 editor do?',
        a: 'It covers the most common quick edits: trimming and cutting, fade in and out, volume adjustment, speed change from 0.5× to 2×, and reversal. For multi-track recording or heavy production, a DAW like Audacity is still the better tool — this one is for fast, private, in-browser edits.',
      },
      {
        q: 'Are my edits destructive?',
        a: 'No. Your original file stays exactly as it is on disk. All edits are held as settings in the editor and only rendered into a new file when you export.',
      },
      {
        q: 'How does speed change affect pitch?',
        a: 'Speed and pitch move together, like a record played faster or slower: at 2× the audio plays about an octave higher, at 0.5× about an octave lower. Use small steps for subtle changes. If you need the tempo changed while keeping the original pitch, export first and run the file through a dedicated time-stretch tool.',
      },
      {
        q: 'Can I undo a change?',
        a: 'Yes. Press Ctrl+Z (Cmd+Z on Mac) to step back through your recent edits, or click Reset to reload the original file state.',
      },
      {
        q: 'Is it safe for confidential recordings?',
        a: 'Yes. Audio is decoded and rendered locally with the Web Audio API — it is never transmitted over the network, which makes it suitable for interviews and other confidential material.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Drag the waveform with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'What this editor actually changes',
        paragraphs: [
          'This page is the general MP3 editor: cut a span, fade the ends, change volume or speed, or reverse the file, then export a new MP3. The file you dropped is never overwritten.',
          'Speed here moves the pitch with the tempo. If you only want a higher or lower voice at the same length, use the pitch changer. If you only want the file smaller, use the audio compressor instead of re-editing.',
        ],
      },
      {
        heading: 'When to open a specialist page instead',
        paragraphs: [
          'The editor is the right start when the job is a mix of small cuts and level changes. Single jobs have a shorter path:',
        ],
        bullets: [
          'One song, keep one chorus: the MP3 cutter is written for that.',
          'A podcast or voice memo, trim the ends: the audio trimmer.',
          'Song title, artist, or cover art only: the MP3 tag editor copies the audio bytes unchanged.',
        ],
      },
      {
        heading: 'Export and undo',
        paragraphs: [
          'Export writes a new MP3. WAV is also in the format menu when you want a lossless copy of the edit for another program.',
          'Ctrl+Z (Cmd+Z on Mac) steps back through recent edits. Reset reloads the file you dropped. Closing the tab drops the session, because nothing is stored on a server.',
        ],
      },
    ],
    related: ['audio-trimmer', 'change-audio-speed', 'mp3-tag-editor'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'ringtone-maker',
    cardLine: 'Turn the catchiest 30 seconds of a song into an iPhone or Android ringtone.',
    name: 'Ringtone Maker',
    shortName: 'Ringtone Maker',
    icon: 'bell',
    category: 'cut',
    title: 'Ringtone Maker — Make Ringtones from Songs (iPhone M4R)',
    description:
      'Turn any song into a ringtone in your browser. Pick the best 40 seconds, add a fade, export M4R or MP3 — free, no signup, nothing uploaded.',
    h1: 'Ringtone Maker — Make an iPhone Ringtone from a Song, Online Free',
    hero: {
      src: '/ringtone-maker.svg',
      alt: 'Save up to 40 seconds of a song as an M4R or MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Pick the best part of any song and save it as a ringtone — in under a minute.',
    intro:
      'Choose the hook, the drop or the intro of your favourite track and turn it into a ringtone. The maker keeps your selection within the classic 40-second ringtone length, adds a fade if you want one, and exports straight to your phone — M4R for iPhone, MP3 for everything else.',
    usesHeading: 'Ringtones worth setting',
    uses: [
      'Take the hook of a song and stop inside the 40-second phone limit.',
      'Fade the end so the ringtone does not stop mid-phrase.',
      'Export M4R for iPhone, or MP3 if you only need the clip.',
    ],
    howTo: [
      {
        name: 'Add a song',
        text: 'Drop an MP3, M4A, WAV or other audio file onto the page. It never leaves your device.',
      },
      {
        name: 'Pick your moment',
        text: 'Drag across the waveform to choose up to 40 seconds — the perfect length for a ringtone. The selection is capped automatically so you never have to guess.',
      },
      {
        name: 'Export and transfer',
        text: 'Add an optional fade, then export. Pick M4R for iPhone (Chrome, Edge or Safari) or MP3 for Android and any other phone.',
      },
    ],
    faqs: [
      {
        q: 'How long should a ringtone be?',
        a: 'Most phones ring for 20–40 seconds before voicemail picks up, and shorter rings get to the point. The maker caps your selection at 40 seconds, which is the classic ringtone length.',
      },
      {
        q: 'How do I use the ringtone on iPhone?',
        a: 'Pick M4R in the format menu before you export — Chrome, Edge and Safari 17+ encode it right on your device, and the downloaded file syncs to your iPhone through Finder (or iTunes on Windows). On browsers without AAC encoding, such as Firefox, export MP3 instead and convert it with GarageBand: import the file, then share it as a ringtone.',
      },
      {
        q: 'How do I set it on Android?',
        a: 'Move the exported MP3 to your phone, then open Settings → Sound → Phone ringtone and pick the file, or use the Files app to set it directly. No conversion needed.',
      },
      {
        q: 'Will the ringtone loop badly?',
        a: 'Add a short fade-out in the Adjust drawer. It makes the phone’s loop back to the start less abrupt. Repeating that clip into a longer file, 2 to 16 times, is the audio looper. This page stays inside 40 seconds.',
      },
      {
        q: 'Is there a watermark or limit?',
        a: 'No watermark, no signup, no daily cap. The ringtone is rendered on your own device and downloaded straight from the browser.',
      },
    ],
    sections: [
      {
        heading: 'How a song becomes a ringtone',
        paragraphs: [
          'A phone ringtone is a short clip, not the whole track. Select the part you want, and the export is clamped to 40 seconds so it still fits a ringtone slot.',
          'Add a short fade at the start and end if the cut would otherwise click. The fade only shapes those edges. It does not raise the volume of a quiet song.',
        ],
      },
      {
        heading: 'Which file the phone accepts',
        paragraphs: [
          'Pick the format before you export. The menu is built around what phones actually install:',
        ],
        bullets: [
          'M4R for iPhone. Chrome, Edge, and Safari 17+ encode it on the device. Sync the file with Finder, or iTunes on Windows.',
          'Firefox cannot encode AAC. Export MP3 there, then make the ringtone in GarageBand.',
          'MP3 at 320, 192, or 128 kbps, or WAV, when the phone or app takes those instead of M4R.',
        ],
      },
      {
        heading: 'What this page does not do',
        paragraphs: [
          'It does not upload the song, and it does not install the tone on the phone for you. You download a file and move it the way that phone already expects.',
          'Cutting a long song down for listening, rather than for a ringtone, belongs on the MP3 cutter. That page is not limited to 40 seconds.',
        ],
      },
    ],
    related: ['mp3-cutter', 'audio-trimmer', 'audio-looper'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      ringtone: true,
      dropHint: 'Drop a song, or click to browse',
      formats: ['m4r', 'mp3-320', 'mp3-192', 'mp3-128', 'wav'],
    },
  },
  {
    slug: 'audio-joiner',
    cardLine: 'Stitch voice memos, songs or podcast episodes into one continuous file.',
    name: 'Audio Joiner',
    shortName: 'Audio Joiner',
    icon: 'layers',
    category: 'merge',
    title: 'Audio Joiner — Merge Songs & Audio Files Online Free',
    description:
      'Merge songs and audio files into one track, in any order, right in your browser. Optional fades between tracks — free, private, no upload.',
    h1: 'Audio Merger — Join MP3 Files into One, Online Free',
    hero: {
      src: '/audio-joiner.svg',
      alt: 'Put songs and voice notes one after another',
      width: 32,
      height: 32,
    },
    subtitle: 'Merge songs and audio files into one track — in any order, in seconds.',
    intro:
      'Combine multiple songs, podcast episodes or voice recordings into a single file. Add as many tracks as you like, reorder them, and optionally fade the beginning and end. Merging happens on your device — even large libraries join instantly and stay private.',
    usesHeading: 'Tracks worth joining',
    uses: [
      'Put a voice memo in front of a song, in the order you choose.',
      'Combine chapter recordings into one file for a player without playlists.',
      'Crossfade the joins so back-to-back clips do not pop.',
    ],
    howTo: [
      {
        name: 'Add your tracks',
        text: 'Drop two or more audio files onto the page, or click to select several at once. Mixed formats are fine — they are matched automatically.',
      },
      {
        name: 'Set the order',
        text: 'Reorder tracks with the arrow buttons or remove any track you change your mind about. The total duration updates as you go.',
      },
      {
        name: 'Merge and save',
        text: 'Add optional fades, click Export, and download the merged file as MP3 or WAV.',
      },
    ],
    faqs: [
      {
        q: 'Can I merge different audio formats together?',
        a: 'Yes. Files are decoded and matched to a common sample rate first, so you can join an MP3 with a WAV and an M4A in one pass. The output format is your choice.',
      },
      {
        q: 'How many files can I join?',
        a: 'There is no fixed limit — dozens of tracks work fine. The practical ceiling is your device memory, since everything is processed locally.',
      },
      {
        q: 'Can I change the order of the songs?',
        a: 'Yes. Use the up and down arrows next to each track to reorder the sequence before merging. The preview duration updates instantly.',
      },
      {
        q: 'Do the tracks crossfade into each other?',
        a: 'Yes. Set the crossfade slider to overlap the end of each track with the start of the next — the merge applies a smooth fade between neighbours. Set it to zero for a hard, gapless cut between tracks.',
      },
      {
        q: 'Is the merged file quality good?',
        a: 'Joining to WAV is lossless — the audio is not re-compressed. MP3 export re-encodes once at up to 320 kbps, which is transparent for nearly all listeners.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Add files, then move them up or down. Those buttons work with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. Several long files use more memory, so a desktop is steadier when the stack is long.',
      },
    ],
    sections: [
      {
        heading: 'Join means one file after another',
        paragraphs: [
          'The joiner places whole files in a row: song, then voice memo, then the next chapter. You can reorder the list and set a crossfade so the end of one overlaps the start of the next.',
          'Set the crossfade to zero for a hard cut with no gap. Mixed formats are decoded and written into one export. This is not a mixer: tracks do not play at the same time.',
        ],
      },
      {
        heading: 'Jobs this page fits',
        paragraphs: [
          'Use it when the result should be a single file a player can open without a playlist:',
        ],
        bullets: [
          'A voice memo in front of a song, in the order you choose.',
          'Chapter recordings combined for a player that has no playlist.',
          'Back-to-back clips with a short crossfade so the joins do not pop.',
        ],
      },
      {
        heading: 'When you need layers instead',
        paragraphs: [
          'Voice over music, a level and a pan per clip, mute and solo: that is the multi-track editor, up to eight tracks. The joiner cannot duck music under speech.',
          'There is no fixed file count. The ceiling is the memory of the device, because the merge stays in the browser. Nothing is uploaded.',
        ],
      },
    ],
    related: ['multi-track-audio-editor', 'normalize-audio', 'fade-audio'],
    editor: {
      multiple: true,
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop two or more audio files, or click to browse',
    },
  },
  {
    slug: 'multi-track-audio-editor',
    cardLine: 'Stack vocals, voiceover and music on one timeline and export a single mix.',
    name: 'Multi-Track Audio Editor',
    shortName: 'Multi-Track',
    icon: 'layers',
    category: 'merge',
    title: 'Multi-Track Audio Editor — Mix Files Online Free',
    description:
      'Stack audio files on one timeline, set level and pan per track, and export one mix. Free, in your browser, never uploaded.',
    h1: 'Multi-Track Audio Editor — Layer Tracks into One Mix, Online Free',
    hero: {
      src: '/multi-track-audio-editor.svg',
      alt: 'Set the level and pan of a vocal over a beat',
      width: 32,
      height: 32,
    },
    subtitle: 'Stack up to 8 files, balance each one, and export a single mix.',
    intro:
      'Put a vocal on a beat, or a voiceover on music, and hear them together. Each file is its own track: level, pan, mute, solo, and where it starts. The mix is summed in your browser. Nothing is uploaded, and closing the tab ends the session.',
    usesHeading: 'Mixes this page is for',
    uses: [
      'Lay a voice memo under a music bed and slide it so the voice starts after the intro.',
      'Balance a few stems you already have — a vocal, drums, a guitar — and export one file.',
      'Solo one part to check it, then bring the others back, without installing a DAW.',
    ],
    howTo: [
      {
        name: 'Add the files',
        text: 'Drop two or more audio files, or click to choose them. Each file becomes one track. This page stops at 8.',
      },
      {
        name: 'Place and balance',
        text: 'Drag a clip to set when it starts. Drag either edge to trim. Set level and pan on the row, or type the start and trim times. Mute and Solo are on the same row.',
      },
      {
        name: 'Play, then export',
        text: 'Press Play mix and listen. Export MP3 or WAV. If the sum would clip, every sample is turned down by the same amount and the page says how many dB.',
      },
    ],
    faqs: [
      {
        q: 'Does my audio get uploaded?',
        a: 'No. The browser decodes each file with decodeAudioData and adds the samples together in memory. After the page has loaded, the export does not need a server. Closing the tab throws the session away — there is no account and no saved project.',
      },
      {
        q: 'What happens to the sound?',
        a: 'Tracks are resampled to the highest sample rate among them, and at least 44.1 kHz, with linear interpolation. WAV export is 16-bit PCM of that stereo mix. MP3 export encodes once, at the bitrate you pick, up to 320 kbps. If the sum peaks above 0.98, the whole mix is scaled so the peak lands at 0.98. That is one gain change, not a compressor and not a second encode.',
      },
      {
        q: 'What can this not do?',
        a: 'It does not record MIDI, load instruments or samples, draw a volume curve, or duck music under speech by itself. One clip per track, eight tracks, and no project file. Plugins, automation, and a session you reopen tomorrow belong in Audacity or a browser DAW such as BandLab.',
      },
      {
        q: 'How is this different from the audio joiner?',
        a: 'The audio joiner places files end to end, so one finishes before the next starts, with an optional crossfade at the join. This page plays them at the same time. A playlist in one file is the joiner. A vocal on a beat is this page.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The timeline scrolls sideways. Level, pan, start, and trim are sliders and number fields, so you do not need a precise drag. Current Chrome, Edge, Firefox, and Safari decode the usual formats. A file the browser cannot decode is skipped and the others stay.',
      },
      {
        q: 'Why only 8 tracks?',
        a: 'Each track is decoded into memory before you press play. Eight stereo files is already a lot for a phone tab. A 16-track production with plugins is a different tool.',
      },
    ],
    sections: [
      {
        heading: 'A small mixer, not a DAW',
        paragraphs: [
          'Each file is one clip on its own track. You set level, pan, mute, solo, and where that clip starts. Up to eight tracks play together and export as one file.',
          'One clip per track. No MIDI, no instruments, no volume curve, and no automatic ducking of music under speech. Plugins and a project you reopen tomorrow belong in Audacity or a browser DAW.',
        ],
      },
      {
        heading: 'What to use it for',
        paragraphs: [
          'It fits short stacks you would otherwise bounce in a larger program:',
        ],
        bullets: [
          'A voice track over a music bed, with the voice louder.',
          'Two takes lined up by start time, one soloed while you compare.',
          'A stereo image nudged with pan, then one export.',
        ],
      },
      {
        heading: 'The session ends with the tab',
        paragraphs: [
          'Nothing is uploaded, and there is no project file. If you close the tab before export, the mix is gone.',
          'Files that should play one after another, not on top of each other, belong on the audio joiner. That page crossfades neighbours. This one stacks them.',
        ],
      },
    ],
    related: ['audio-joiner', 'voice-recorder', 'fade-audio'],
    editor: {
      mixer: true,
      defaultFormat: 'mp3-192',
      dropHint: 'Drop two or more audio files to stack them',
    },
  },
  {
    slug: 'wav-to-mp3',
    cardLine: 'Shrink heavy WAV recordings into shareable MP3s at the bitrate you pick.',
    name: 'WAV to MP3 Converter',
    shortName: 'WAV to MP3',
    icon: 'convert',
    category: 'merge',
    title: 'Convert WAV to MP3 Online Free — 320 kbps',
    description:
      'Convert WAV to MP3 in your browser at 128, 192 or 320 kbps. Free, no signup. The file is converted on your device and never uploaded.',
    h1: 'Convert WAV to MP3 — Online, Free',
    hero: {
      src: '/wav-to-mp3.svg',
      alt: 'Convert a WAV file to 320 kbps MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Convert WAV files to MP3 in seconds — right in your browser, nothing uploaded.',
    intro:
      'Turn heavy WAV recordings into compact MP3s without installing anything or sending your audio to a server. Drop the file, pick a bitrate — 320 kbps for music, 128 kbps for voice — and the conversion happens on your own device, usually in a couple of seconds.',
    usesHeading: 'WAV files worth converting',
    uses: [
      'Shrink a studio or field recording until it is small enough to send.',
      'Turn a lossless export into a 192 or 320 kbps MP3 for everyday listening.',
      'Convert first, then trim. A WAV is too large to drag around twice.',
    ],
    howTo: [
      {
        name: 'Drop your WAV',
        text: 'Drag a .wav file onto the page or click to browse. Other audio formats (M4A, FLAC, OGG) convert the same way.',
      },
      {
        name: 'Pick a bitrate',
        text: '320 kbps is indistinguishable from the original for almost everyone; 192 kbps is a good balance; 128 kbps keeps voice recordings small.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. The encoder runs in your browser and the MP3 downloads straight to your device.',
      },
    ],
    faqs: [
      {
        q: 'Will converting WAV to MP3 lose quality?',
        a: 'MP3 is lossy, so some information is discarded — but at 320 kbps virtually nobody can tell the difference from the WAV in a blind test. If you need zero loss, keep the WAV; this converter exists to save space and play everywhere.',
      },
      {
        q: 'Which bitrate should I choose?',
        a: 'Use 320 kbps for music you keep, 192 kbps for everyday listening and sharing, and 128 kbps for voice memos, podcasts and lecture recordings — speech needs far less than music.',
      },
      {
        q: 'How much smaller is the MP3?',
        a: 'Roughly a tenth of the size: a 50 MB WAV becomes about 4–5 MB at 192 kbps, and around 11 MB at 320 kbps. Exact numbers depend on the length and sample rate.',
      },
      {
        q: 'Are my WAV tags and artwork kept?',
        a: 'Not currently — the MP3 is written without metadata, so song title, artist and cover art are not carried over. You can re-add tags afterwards with any tag editor.',
      },
      {
        q: 'Does the WAV file get uploaded anywhere?',
        a: 'No. The file is decoded in your browser, encoded to MP3 by a library that ships with this site, and saved back to your disk. The audio itself never leaves your device.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Pick the file and the conversion stays in the tab. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'Which bitrate to pick',
        paragraphs: [
          'MP3 throws away some of the WAV. The bitrate is how much it keeps.',
        ],
        bullets: [
          '320 kbps: music you want to keep. At this rate most people cannot tell the MP3 from the WAV.',
          '192 kbps: everyday listening and files you will send.',
          '128 kbps: voice memos, podcasts and lectures. Speech needs less than music.',
        ],
      },
      {
        heading: 'How much smaller the MP3 is',
        paragraphs: [
          'A WAV stores every sample. An MP3 stores a compressed version of what you can hear. A 50 MB WAV lands around 4–5 MB at 192 kbps, and around 11 MB at 320 kbps. The exact size follows the length and the sample rate.',
          'If you still need the original, keep the WAV. This page exists so the copy you share plays on a phone, a car, and an old speaker, and so the file is small enough to send.',
        ],
      },
      {
        heading: 'Title, artist and cover are not copied',
        paragraphs: [
          'The MP3 is written without the WAV’s metadata. Song title, artist and cover art do not come across. Add them afterwards in the MP3 tag editor if the player would otherwise show a blank name.',
          'M4A, FLAC and OGG files dropped here convert the same way. FLAC has its own page if that is the format you are starting from. This page is the one for WAV.',
        ],
      },
      {
        heading: 'Convert first, then trim',
        paragraphs: [
          'This page converts the whole file. It does not cut a span out of the WAV.',
        ],
        bullets: [
          'Need only a minute of a long recording: convert, then open the audio trimmer.',
          'The file is already an MP3 and you only need it smaller: use compress audio, not this page.',
          'You will edit again after the conversion: 320 kbps, or keep the WAV and edit that.',
        ],
      },
    ],
    related: ['m4a-to-mp3', 'ogg-to-mp3', 'audio-trimmer'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop a WAV file, or click to browse',
      converter: true,
      exportLabel: 'Convert to MP3',
    },
  },
  {
    slug: 'flac-to-mp3',
    cardLine: 'Convert lossless FLAC files to MP3 for players and apps that don’t speak FLAC.',
    name: 'FLAC to MP3 Converter',
    shortName: 'FLAC to MP3',
    icon: 'convert',
    category: 'merge',
    title: 'FLAC to MP3 Converter — Convert FLAC Files Online Free',
    description:
      'Convert FLAC to MP3 in your browser — 128, 192 or 320 kbps. Free, no signup: your music is converted locally and never uploaded.',
    h1: 'FLAC to MP3 Converter — Convert FLAC to MP3, Online Free',
    hero: {
      src: '/flac-to-mp3.svg',
      alt: 'Convert a FLAC file to 320 kbps MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Convert FLAC files to MP3 in seconds — right in your browser, nothing uploaded.',
    intro:
      'FLAC sounds perfect and takes up half a hard drive to prove it. Turn your lossless library into compact MP3s that play on car stereos, Bluetooth speakers and older gear — drop the files, pick a bitrate, and the conversion runs on your own device. A 25 MB FLAC album track becomes a 12 MB MP3 at 320 kbps in a couple of seconds.',
    usesHeading: 'FLAC files worth converting',
    uses: [
      'Make a lossless library playable on car stereos and older devices.',
      'Shrink an album before a long trip off Wi-Fi or a shared folder.',
      'Convert first, then trim the songs you actually replay.',
    ],
    howTo: [
      {
        name: 'Drop your FLAC',
        text: 'Drag a .flac file onto the page or click to browse. Other lossless formats convert the same way.',
      },
      {
        name: 'Pick a bitrate',
        text: '320 kbps is transparent for almost everyone; 192 kbps is the everyday balance; 128 kbps keeps speech and podcasts small.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. The encoder runs in your browser and the MP3 downloads straight to your device.',
      },
    ],
    faqs: [
      {
        q: 'Does converting FLAC to MP3 lose quality?',
        a: 'MP3 is lossy, so some information is discarded — but at 320 kbps virtually nobody can tell the difference from the FLAC in a blind test. Keep the FLAC as your archive copy and treat the MP3 as the portable one.',
      },
      {
        q: 'Which bitrate should I choose?',
        a: '320 kbps for music you keep, 192 kbps for everyday listening and sharing, 128 kbps for audiobooks, podcasts and lecture recordings — speech needs far less than music.',
      },
      {
        q: 'How much smaller is the MP3?',
        a: 'A typical five-minute song drops from about 25 MB as FLAC to roughly 12 MB at 320 kbps, 7 MB at 192 and 5 MB at 128. Exact numbers depend on the length and sample rate.',
      },
      {
        q: 'Are FLAC tags and album art kept?',
        a: 'Not currently — the MP3 is written without metadata, so titles, artist and cover art do not carry over. You can re-add them afterwards with any tag editor.',
      },
      {
        q: 'Is my FLAC uploaded anywhere?',
        a: 'No. The file is decoded in your browser and encoded to MP3 by a library that ships with this site. The audio itself never leaves your device.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Pick the file and the conversion stays in the tab. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'Why convert FLAC to MP3',
        paragraphs: [
          'FLAC is lossless and large. MP3 is what most phones, cars, and older players actually open. A 25 MB FLAC often lands near 12 MB at 320 kbps, and smaller at 192 or 128.',
          'The conversion decodes the FLAC and encodes a new MP3. It does not keep the bit-perfect file. If you still need the lossless master, keep the FLAC.',
        ],
      },
      {
        heading: 'Bitrate and what is dropped',
        paragraphs: [
          'The format menu is MP3 only, at three bitrates:',
        ],
        bullets: [
          '320 kbps when the file should stay close to the FLAC for listening.',
          '192 kbps for speech or a smaller copy you will stream.',
          '128 kbps when size matters more than the top octave.',
        ],
      },
      {
        heading: 'Tags, art, and the next edit',
        paragraphs: [
          'Title, artist, and cover art are not copied. The MP3 is written without metadata. Put them back with the MP3 tag editor after export.',
          'Trim or cut after the conversion, not before, if you want the edit on the smaller file. WAV to MP3 is the sibling page when the source is WAV, not FLAC.',
        ],
      },
    ],
    related: ['wav-to-mp3', 'm4a-to-mp3', 'audio-trimmer'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop a FLAC file, or click to browse',
      converter: true,
      exportLabel: 'Convert to MP3',
      formats: ['mp3-320', 'mp3-192', 'mp3-128'],
    },
  },
  {
    slug: 'mp3-to-wav',
    cardLine: 'Uncompress MP3 to WAV for editing, transcribing or detailed listening.',
    name: 'MP3 to WAV Converter',
    shortName: 'MP3 to WAV',
    icon: 'convert',
    category: 'merge',
    title: 'MP3 to WAV Converter — Convert MP3 to WAV Online Free',
    description:
      'Convert MP3 to lossless WAV in your browser — for editing, archiving and apps that want PCM. Free, no signup, nothing uploaded.',
    h1: 'MP3 to WAV Converter — Turn an MP3 into a WAV File, Online Free',
    hero: {
      src: '/mp3-to-wav.svg',
      alt: 'Decode an MP3 into an uncompressed WAV',
      width: 32,
      height: 32,
    },
    subtitle: 'Decode MP3 to clean PCM audio in seconds — right in your browser, nothing uploaded.',
    intro:
      'Converting MP3 to WAV cannot restore what compression removed — nothing can. What it does give you is the decoded audio as clean 16-bit PCM with no further loss: the right input for audio editors, samplers and anything that asks for WAV, and the safest starting point if the file will be edited again. Decode happens on your device, usually in a second.',
    usesHeading: 'Reasons to decode to WAV',
    uses: [
      'Hand an MP3 to an editor, DAW or app that only accepts WAV.',
      'Stop generation loss: edit in WAV, compress back to MP3 once at the end.',
      'Archive a decoded copy alongside the original before further edits.',
    ],
    howTo: [
      {
        name: 'Drop your MP3',
        text: 'Drag an .mp3 file onto the page or click to browse. Other compressed formats decode the same way.',
      },
      {
        name: 'Keep WAV selected',
        text: 'The export format is fixed to lossless WAV — 16-bit PCM at the file\u2019s original sample rate.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to WAV. The decoded audio is written locally and downloads immediately.',
      },
    ],
    faqs: [
      {
        q: 'Does converting MP3 to WAV improve the quality?',
        a: 'No — and be skeptical of any converter claiming otherwise. The data the encoder discarded is gone. WAV gives you exactly what the MP3 decodes to, which is why it is the right format for further editing: it never adds another lossy generation.',
      },
      {
        q: 'Why convert to WAV at all, then?',
        a: 'Editing and archiving. WAV is the format audio editors, samplers and CD-burning tools expect, and a lossless master avoids stacking compression artifacts every time you process the file. The honest workflow: decode to WAV, edit, export to MP3 once at the end.',
      },
      {
        q: 'Which MP3 bitrate works best?',
        a: 'All of them — decoding is exact for any valid MP3, from 64 to 320 kbps. The WAV will simply contain whatever the MP3 actually holds, at its original sample rate.',
      },
      {
        q: 'How big will the WAV be?',
        a: 'Roughly ten times the MP3. A three-minute song at 44.1 kHz stereo becomes about 30 MB as 16-bit PCM — that is the size of uncompressed audio, not a converter inefficiency.',
      },
      {
        q: 'Is my MP3 uploaded anywhere?',
        a: 'No. The file is decoded in your browser and written to WAV locally. Nothing leaves your device.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Pick the file and the conversion stays in the tab. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'MP3 to WAV does not restore what MP3 threw away',
        paragraphs: [
          'The page decodes the MP3 into 16-bit PCM WAV. Editors and DAWs that refuse MP3 can open that WAV. The missing highs from the original encode do not come back.',
          'Use it when the next step must not add another MP3 generation: cut, fade, or mix the WAV, then encode once at the end.',
        ],
      },
      {
        heading: 'When the conversion is worth it',
        paragraphs: [
          'The format menu exports WAV only. It is the right move in a few concrete cases:',
        ],
        bullets: [
          'A program or hardware recorder that only accepts WAV.',
          'An edit you will encode once later, so you do not stack MP3 on MP3.',
          'A handoff to someone who asked for PCM, not a smaller MP3.',
        ],
      },
      {
        heading: 'Size and the other direction',
        paragraphs: [
          'The WAV is much larger than the MP3. That size is the uncompressed PCM, not new detail.',
          'Going the other way, WAV to MP3, is a different page, and it chooses a bitrate. Making an MP3 smaller without changing it to WAV is the audio compressor.',
        ],
      },
    ],
    related: ['wav-to-mp3', 'extract-audio', 'fade-audio'],
    editor: {
      defaultFormat: 'wav',
      dropHint: 'Drop an MP3 file, or click to browse',
      converter: true,
      exportLabel: 'Convert to WAV',
      formats: ['wav'],
    },
  },
  {
    slug: 'compress-audio',
    cardLine: 'Shrink big audio files to a target size or bitrate while keeping them easy to hear.',
    name: 'Audio Compressor',
    shortName: 'Compressor',
    icon: 'file',
    category: 'merge',
    title: 'Compress Audio — Reduce MP3 & WAV File Size Online',
    description:
      'Shrink MP3, WAV and other audio files to a smaller size in your browser — pick a lower bitrate, listen, download. Free, nothing uploaded.',
    h1: 'MP3 Compressor — Reduce an MP3 File’s Size, Online Free',
    hero: {
      src: '/compress-audio.svg',
      alt: 'Re-encode a large WAV or MP3 at a lower bitrate',
      width: 32,
      height: 32,
    },
    subtitle: 'Drop the bitrate, keep the file playable — shrink audio by up to 90% in your browser.',
    intro:
      'Audio files are big because of their bitrate, and the honest way to shrink one is to re-encode it at a lower bitrate: a 320 kbps MP3 becomes a 128 kbps MP3 at about 40% of the size, and a heavy WAV becomes an MP3 at a tenth of its size. Pick the target, listen to the preview, and export — the encoding runs on your own device, so even long recordings finish in seconds.',
    usesHeading: 'Files worth shrinking',
    uses: [
      'Fit a lecture or voice memo under an email or chat-app size cap.',
      'Turn a WAV export into small MP3s for a quick review link.',
      'Take a 320 kbps library down to 128 kbps for a phone on mobile data.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Add an MP3, WAV, M4A or other audio file. It is decoded on your device and never uploaded.',
      },
      {
        name: 'Pick the target size',
        text: 'Lower bitrate, smaller file: 192 kbps for everyday music, 128 kbps still sounds fine to most ears, 64–96 kbps is ideal for speech.',
      },
      {
        name: 'Listen and export',
        text: 'Preview the compressed result, then save it. Check that voices and cymbals still sound clean at the bitrate you chose.',
      },
    ],
    faqs: [
      {
        q: 'How does audio compression work here?',
        a: 'The file is decoded and re-encoded as MP3 at the bitrate you pick. Size scales linearly with bitrate: one minute of stereo audio is about 2.4 MB at 320 kbps, 1 MB at 128 and 0.5 MB at 64.',
      },
      {
        q: 'Which bitrate keeps good quality?',
        a: '192 kbps or 320 kbps for music you care about, 128 kbps for casual listening — most listeners cannot reliably tell it from 320 in a blind test. Speech and podcasts stay clear all the way down to 64–96 kbps.',
      },
      {
        q: 'Can compressing make the quality worse?',
        a: 'Yes, in one specific case: re-encoding an already-compressed MP3 at a much lower bitrate stacks a second lossy generation on the first. Compressing a WAV or FLAC source is cleaner — if you keep the original, you can always try a different bitrate again.',
      },
      {
        q: 'How small can I go?',
        a: '64 kbps is the practical floor: about 0.5 MB per minute. Speech remains perfectly clear; music starts to sound dull and swishy. Below that, dedicated codecs like Opus do better than MP3.',
      },
      {
        q: 'Is my file uploaded anywhere?',
        a: 'No. Decoding and encoding both run inside your browser tab — you could disconnect from the internet after the page loads and compression would still work.',
      },
      {
        q: 'Will this even out loud and quiet parts?',
        a: 'No. This page only re-encodes at a lower bitrate so the file takes less space. To turn loud peaks down and bring quiet words up, use the level compressor. The bitrate stays whatever you pick on export there.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Pick the file and the conversion stays in the tab. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'This compressor shrinks the file, not the dynamics',
        paragraphs: [
          'Compress audio re-encodes at a lower MP3 bitrate. A 320 kbps file at 128 kbps is about 40 percent of the size. The quiet and loud parts stay in the same relationship.',
          'Evening out a loud voice and a quiet one is the level compressor, a different page. That one does not make the file smaller.',
        ],
      },
      {
        heading: 'Which bitrate to pick',
        paragraphs: [
          'The menu runs from 320 down to 64 kbps. Pick by what the file is:',
        ],
        bullets: [
          '192 or 320 kbps for music you will still listen to closely.',
          '128 kbps for speech, a voice memo, or a copy you need to send.',
          '64 or 96 kbps only when the destination is tiny and speech is enough.',
        ],
      },
      {
        heading: 'What a second encode costs',
        paragraphs: [
          'Every pass throws away a little more. If the file is already 128 kbps, encoding it to 128 again does not help, and encoding it lower makes it duller.',
          'Tags and artwork are not part of this shrink. If the MP3 is already small and you only need a new title or cover, use the MP3 tag editor, which copies the audio bytes unchanged.',
        ],
      },
    ],
    related: ['wav-to-mp3', 'flac-to-mp3', 'compressor'],
    editor: {
      defaultFormat: 'mp3-128',
      dropHint: 'Drop an audio file, or click to browse',
      converter: true,
      exportLabel: 'Compress',
      formats: ['mp3-320', 'mp3-192', 'mp3-128', 'mp3-96', 'mp3-64'],
    },
  },
  {
    slug: 'reverse-audio',
    cardLine: 'Play a track backwards to make effects, check a mix or just for fun.',
    name: 'Reverse Audio',
    shortName: 'Reverse Audio',
    icon: 'reverse',
    category: 'effects',
    title: 'Reverse Audio — Play Music & Songs Backwards Online Free',
    description:
      'Play any song or recording backwards in your browser. One click to reverse, preview instantly, save as MP3 or WAV — free and nothing uploaded.',
    h1: 'Reverse Audio — Play a Song Backwards, Online Free',
    hero: {
      src: '/reverse-audio.svg',
      alt: 'Flip a voice memo so it plays from the end',
      width: 32,
      height: 32,
    },
    subtitle: 'Play any song or recording backwards — one click, right in your browser.',
    intro:
      'Flip any track so it plays from the end to the start: hunt for hidden messages in songs, build backwards-cymbal effects for a mix, or just hear what your voice sounds like in reverse. The whole file is reversed on your device and only written out when you export.',
    usesHeading: 'Reasons to flip a file',
    uses: [
      'Hear a mix or a buried phrase by playing it backwards.',
      'Build a reverse swell from a cymbal hit or a vocal.',
      'Reverse only the selection and leave the rest of the file alone.',
    ],
    howTo: [
      {
        name: 'Add your audio',
        text: 'Drop an MP3, WAV, M4A or other file onto the page — it never leaves your device.',
      },
      {
        name: 'Reverse it',
        text: 'Click the Reverse button and press play to hear the track backwards. Click again to flip it back.',
      },
      {
        name: 'Save the result',
        text: 'Export the reversed audio as MP3 or lossless WAV. The download starts automatically.',
      },
    ],
    faqs: [
      {
        q: 'Why would I play a song backwards?',
        a: 'Musicians use reversed audio for creative effects — reversed cymbal swells, backwards guitar solos, ambient textures. It is also the classic way to check a track for backmasking, it powers the guess-the-reversed-song party game, and honestly, hearing your own voice reversed is just fun.',
      },
      {
        q: 'Does reversing change the quality?',
        a: 'No. Exporting to WAV only reorders the samples — the audio is bit-identical to the original, just backwards. MP3 export re-encodes once at your chosen bitrate.',
      },
      {
        q: 'Can I reverse only part of a song?',
        a: 'Yes. Select the part you want on the waveform, set the mode to Keep selection, then hit Reverse — only that section is exported, backwards.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. The reverse button and the waveform both support touch, and the export downloads directly on iOS and Android.',
      },
      {
        q: 'Is reversing really free and private?',
        a: 'Yes — no signup, no watermark, no limits. The reversal happens in your browser with the Web Audio API, so the file is never uploaded anywhere.',
      },
    ],
    sections: [
      {
        heading: 'Reverse plays the samples backward',
        paragraphs: [
          'The page flips the selected audio so the end plays first. You can reverse the whole file or only the selection. Reverse itself does not change loudness or pitch.',
          'The export is still an encode. WAV keeps the reversed PCM without an MP3 generation. MP3 writes a new file of the reversed audio.',
        ],
      },
      {
        heading: 'What people use it for',
        paragraphs: [
          'It is a straight reverse, not a hidden-message decoder and not a stem splitter:',
        ],
        bullets: [
          'A reversed cymbal or hit as a lead-in.',
          'Checking a phrase by ear, selection only, then undo.',
          'A whole file flipped for a sound-design pass.',
        ],
      },
      {
        heading: 'What stays the same',
        paragraphs: [
          'Undo steps back. Reset reloads the file you dropped. The original file on disk is not overwritten.',
          'If the goal is a slower song or a lower voice, reverse is the wrong control. Speed changes pitch with tempo. The pitch changer keeps the length.',
        ],
      },
    ],
    related: ['change-audio-speed', 'pitch-changer', 'audio-trimmer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['reverse'],
    },
  },
  {
    slug: 'change-audio-speed',
    cardLine: 'Speed up lectures to 2× or slow down riffs to learn them — pitch stays true.',
    name: 'Audio Speed Changer',
    shortName: 'Speed Changer',
    icon: 'clock-counter-clockwise',
    category: 'effects',
    title: 'Change Audio Speed Online — Speed Up or Slow Down Audio',
    description:
      'Speed up a lecture or slow a song for practice, from 0.5× to 2×. Preview in your browser, export MP3 or WAV. Pitch moves with the tempo.',
    h1: 'Audio Speed Changer — Speed Up or Slow Down Audio, Online Free',
    hero: {
      src: '/change-audio-speed.svg',
      alt: 'Slow a song down for practice, or speed a lecture up',
      width: 32,
      height: 32,
    },
    subtitle: 'Speed up or slow down any audio from 0.5× to 2× — right in your browser.',
    intro:
      'Turn a 40-minute lecture into 20 fast minutes, slow a guitar solo down to half speed for practice, or fit a track into a shorter video slot. Drag the speed slider, hear the change instantly, and export — the audio is resampled on your device and never uploaded.',
    usesHeading: 'Speeds that match the job',
    uses: [
      'Slow speech or a solo to half speed when you need each syllable or note.',
      'Skim a podcast or lecture at 1.25× to 1.5× when 1× is too slow to finish.',
      'Pitch rises and falls with the tempo. To move pitch and keep the length, use the pitch changer.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Add an MP3, WAV, M4A or other audio file — it stays on your device the whole time.',
      },
      {
        name: 'Set the speed',
        text: 'Drag the speed slider between 0.5× and 2×. Use the waveform to select just a section if you only want part of the file changed.',
      },
      {
        name: 'Preview and export',
        text: 'Play the result to check the pace, then save it as MP3 or WAV. A 10-minute file at 2× exports in about a second.',
      },
    ],
    faqs: [
      {
        q: 'Can I speed up audio without changing the pitch?',
        a: 'On this page, speed and pitch move together: 2× is about an octave higher, 0.5× about an octave lower. The tempo changer keeps the pitch and changes the length, from 0.75× to 1.25× in steps of 0.01. To change the pitch and keep the length, use the pitch changer.',
      },
      {
        q: 'What speeds can I choose?',
        a: 'Anything from 0.5× to 2× in 0.05 steps. Half speed is the sweet spot for transcribing fast speech or learning solos; 1.25–1.5× is comfortable for skimming lectures and podcasts.',
      },
      {
        q: 'How fast is the export?',
        a: 'The speed change is rendered offline by your browser at native speed — a 10-minute track takes a second or two regardless of the factor you choose.',
      },
      {
        q: 'Can I speed up only part of a track?',
        a: 'Yes. Select the section on the waveform, set the mode to Keep selection, then choose your speed — the export contains just that part, faster or slower.',
      },
      {
        q: 'Is there a file length limit?',
        a: 'No artificial one. The practical ceiling is your device memory — roughly an hour of audio on a typical computer.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Drag the waveform with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'Speed and pitch move together',
        paragraphs: [
          'This control plays the file faster or slower the way a tape would, from 0.5× to 2×. Faster means a shorter file and a higher pitch. Slower means a longer file and a lower pitch. 2× sits about an octave higher, 0.5× about an octave lower.',
          'Keeping the pitch while the length changes is the tempo changer, from 0.75× to 1.25×. This page still moves the pitch with the speed. A higher or lower voice at the same length is the pitch changer, up to 12 semitones.',
        ],
      },
      {
        heading: 'Where the control is useful',
        paragraphs: [
          'Use it when the pitch change is acceptable or even the point:',
        ],
        bullets: [
          'A lecture or voice memo you want to get through faster, chipmunk pitch included.',
          'A slower pass so you can transcribe, with the voice dropping.',
          'A quick preview of a clip at another tempo before you export.',
        ],
      },
      {
        heading: 'Slowed songs are the other page',
        paragraphs: [
          'A slowed-and-reverb edit also drops the pitch, because it drops the speed, and it adds reverb on top. That page starts around 85 percent. This page is only the speed control.',
          'Above 100 percent on the slowed page is the nightcore direction. Do that there if you also want the reverb knob. Export here if you only want the new length.',
        ],
      },
    ],
    related: ['pitch-changer', 'metronome', 'tempo-changer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['speed'],
    },
  },
  {
    slug: 'increase-volume',
    cardLine: 'Lift quiet voice memos up to 4× with a limiter so nothing clips.',
    name: 'MP3 Volume Booster',
    shortName: 'MP3 Volume',
    icon: 'volume',
    category: 'effects',
    title: 'Increase MP3 Volume — Quiet MP3 Files Online Free',
    description:
      'Raise a quiet MP3 up to 4× in your browser. A limiter keeps the peaks clean. Free, nothing uploaded.',
    h1: 'Increase MP3 Volume — Up to 4×, Online Free',
    hero: {
      src: '/increase-volume.svg',
      alt: 'Increase MP3 volume without clipping',
      width: 32,
      height: 32,
    },
    subtitle: 'Boost quiet recordings up to 4× — with a limiter, so nothing clips.',
    intro:
      'Fix recordings that are too quiet: phone voice memos, lectures recorded from the back row, video soundtracks ripped at low level. Push the volume up to 4× (12 dB) and a built-in limiter catches the peaks, so the result gets louder without turning into distortion.',
    usesHeading: 'Recordings that need a lift',
    uses: [
      'Raise a phone voice memo that was recorded too far from the mic.',
      'Boost a lecture from the back of the room and let the limiter hold the peaks.',
      'Make a quiet MP3 loud enough to sit under video without clipping the whole file.',
    ],
    howTo: [
      {
        name: 'Add your audio',
        text: 'Drop a quiet MP3, WAV, M4A or other file onto the page — it is processed on your device only.',
      },
      {
        name: 'Boost the volume',
        text: 'Drag the volume slider up to 400%. Preview as you go; the limiter automatically holds back the loudest peaks.',
      },
      {
        name: 'Export the louder file',
        text: 'Save as MP3 or WAV. If it still sounds strained, back off 10–20% — clean loudness beats maximum loudness.',
      },
    ],
    faqs: [
      {
        q: 'Will boosting the volume cause distortion?',
        a: 'Some, if you push too far — that is physics, not software. The built-in limiter catches peaks above the threshold so moderate boosts (150–250%) usually sound clean. Above 300% the quiet parts get loud but the peaks start to pump; use your ears.',
      },
      {
        q: 'How loud can I make it?',
        a: 'Up to 400% of the original, which is about +12 dB. That covers most quiet recordings; a 3-minute file exports in a second or two either way.',
      },
      {
        q: 'Is this the same as normalizing?',
        a: 'No. Normalizing raises the whole file so its loudest peak hits a target level. Boosting here multiplies the level you choose, which is more predictable when you know a recording is uniformly quiet.',
      },
      {
        q: 'Can I boost just part of a file?',
        a: 'Yes. Select the quiet section on the waveform, set the mode to Keep selection, and export — you get just that part at the new volume.',
      },
      {
        q: 'Does it work on video files?',
        a: 'Often, yes — browsers can usually decode the audio track of MP4 files dropped onto the page. If your browser refuses the file, extract the audio first and try again.',
      },
      {
        q: 'How is this different from the loudness meter?',
        a: 'This page multiplies the whole file by the amount you choose. The loudness meter reads integrated LUFS — how loud the file is, not the room — and can match −16, −14, or −23 without pushing the sample peak past −1 dBFS. Neither page evens out loud and quiet parts.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Drag the waveform with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'An MP3 that is too quiet',
        paragraphs: [
          'Increase MP3 volume multiplies the file, up to 400 percent, about +12 dB. Above 100 percent a limiter keeps the peaks from clipping hard.',
          'The same kind of gain for a video soundtrack or any other format is the volume booster. This page is the MP3-shaped one. Video files often still decode here.',
        ],
      },
      {
        heading: 'What the multiplier does not do',
        paragraphs: [
          'It is one gain for the whole file. It is not a loudness standard and it does not even out dynamics:',
        ],
        bullets: [
          'A podcast that should land near −16 LUFS: measure it on the loudness meter, then apply only the gain that meter allows.',
          'One peak already near full scale, and the rest too quiet: normalize sets that peak near −0.2 dB. It will not lift the quiet parts further.',
          'Loud and quiet passages that should move closer: the level compressor, not this slider.',
        ],
      },
      {
        heading: 'Export',
        paragraphs: [
          'You get a new file. The MP3 you dropped stays where it was. Pushing a file that is already loud mostly hits the limiter and can sound flat.',
          'If the MP3 is quiet because it is a long silence with a short phrase, trim or cut first, then raise what is left.',
        ],
      },
    ],
    related: ['loudness-meter', 'normalize-audio', 'volume-booster'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['gain'],
      maxGainPercent: 400,
    },
  },
  {
    slug: 'mp4-to-mp3',
    cardLine: 'Save the soundtrack of a video clip, screen recording or camera file as MP3.',
    name: 'MP4 to MP3 Converter',
    shortName: 'MP4 to MP3',
    icon: 'film',
    category: 'merge',
    title: 'MP4 to MP3 — Convert Video to MP3 Online Free',
    description:
      'Convert MP4 to MP3 in your browser. The soundtrack is extracted on your device and the video is never uploaded. Free, no signup.',
    h1: 'MP4 to MP3 — Convert a Video to MP3, Online Free',
    hero: {
      src: '/mp4-to-mp3.svg',
      alt: 'Convert an MP4, MOV, or WebM soundtrack to MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Pull the soundtrack out of any video — right in your browser, nothing uploaded.',
    intro:
      'Turn MP4 videos into MP3 audio without installing anything or uploading gigabytes to a server. Your browser reads the file from your disk, decodes the soundtrack locally, and saves it as MP3 — a 500 MB video converts in seconds because only the audio track is processed.',
    usesHeading: 'Videos people convert for the sound',
    uses: [
      'Save a lecture, concert, or interview as audio you can play with the screen off.',
      'Skip uploading a huge video. The soundtrack is decoded on this device.',
      'Convert the whole track, then trim it if you only need a section.',
    ],
    howTo: [
      {
        name: 'Drop your video',
        text: 'Drag an MP4 onto the page or click to browse. WebM and MOV files with standard audio tracks work the same way.',
      },
      {
        name: 'Pick a bitrate',
        text: '320 kbps for music videos, 192 kbps for everyday listening, 128 kbps for interviews and lectures.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. The audio track is decoded in your browser and the MP3 downloads straight away.',
      },
    ],
    faqs: [
      {
        q: 'Does the video get uploaded anywhere?',
        a: 'No — and this is the part worth repeating with video, because files are big. The browser reads the file from your disk, decodes only its audio track, and writes the MP3 locally. Video frames are never processed or transmitted.',
      },
      {
        q: 'Which video formats are supported?',
        a: 'MP4 files with AAC audio (the overwhelming majority, including phone recordings and standard downloads), plus WebM with Opus and most MOV files. Exotic codecs like AC3 or DTS soundtracks are not decodable by browsers and will be rejected with a clear message.',
      },
      {
        q: 'How fast is it compared to online converters?',
        a: 'Faster, typically. Upload-based converters must send the whole video to a server first — a 500 MB file can take many minutes. Here only the audio is decoded locally, so even long videos convert in seconds on a normal computer.',
      },
      {
        q: 'Can I convert just part of the video?',
        a: 'This page is a straight converter — it converts the whole soundtrack. If you want a section, convert the full audio first, then trim it with the audio trimmer.',
      },
      {
        q: 'Does 4K or 8K video slow it down?',
        a: 'No. Video resolution is irrelevant — the video track is ignored entirely. A 4K file and a 240p file with the same soundtrack convert identically.',
      },
    ],
    sections: [
      {
        heading: 'Only the soundtrack is converted',
        paragraphs: [
          'An MP4 is a container. The picture and the sound are separate tracks. This page decodes the sound and writes an MP3. The picture is never encoded, uploaded, or saved.',
          'That is why a 500 MB video can finish in seconds, and why 4K is no slower than 240p when the soundtrack is the same. Upload-based converters wait on the whole file. This one never sends it.',
        ],
      },
      {
        heading: 'Which MP3 bitrate to use',
        paragraphs: [
          'The soundtrack is encoded once, at the rate you pick.',
        ],
        bullets: [
          '320 kbps: music videos and concerts.',
          '192 kbps: everyday listening.',
          '128 kbps: interviews, lectures and voice.',
        ],
      },
      {
        heading: 'MP4 to MP3, or extract the audio',
        paragraphs: [
          'The export starts as MP3. WebM and MOV with a normal soundtrack work the same way. The usual phone MP4, AAC audio, is the file this page is built for.',
          'Switch the format to WAV if you need a lossless copy of the soundtrack. The audio extractor is the page written for that choice, and for editing the sound next. If you only need one minute, convert the whole soundtrack here and then trim it. This page does not cut a span out of the video.',
        ],
      },
      {
        heading: 'Files the browser cannot read',
        paragraphs: [
          'AC3 and DTS soundtracks are not decoded by the browser. Those files stop with a clear error instead of a silent MP3. A standard MP4 from a phone, a screen recording, or a normal download is AAC, and that works.',
          'The MP3 does not keep a video title or thumbnail. Set the track name afterwards in the MP3 tag editor if you need it to show up in a player.',
        ],
      },
    ],
    related: ['extract-audio', 'audio-trimmer', 'mp3-tag-editor'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop an MP4 or video file, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      converter: true,
      exportLabel: 'Convert to MP3',
    },
  },
  {
    slug: 'extract-audio',
    cardLine: 'Pull clean audio out of any video for editing, transcription or sampling.',
    name: 'Audio Extractor',
    shortName: 'Audio Extractor',
    icon: 'film',
    category: 'merge',
    title: 'Audio Extractor — Extract Audio from Video Online Free',
    description:
      'Extract the audio track from any video in your browser and save it as MP3 or lossless WAV. Free, private, no upload — even for large files.',
    h1: 'Extract Audio from Video — Soundtrack as WAV or MP3',
    hero: {
      src: '/extract-audio.svg',
      alt: 'Save a video soundtrack as MP3 or WAV',
      width: 32,
      height: 32,
    },
    subtitle: 'Save the soundtrack of any video as MP3 or WAV — locally, in seconds.',
    intro:
      'Separate the sound from the pictures: pull interviews out of video calls, save a concert film as an album, or reuse a soundtrack in your own edit. The audio track is decoded on your device and can be saved losslessly as WAV or compactly as MP3.',
    usesHeading: 'Soundtracks worth pulling out',
    uses: [
      'Grab the audio from a screen recording or a phone video.',
      'Keep WAV if you will edit again, or MP3 if you are done.',
      'Hand a long file to the trimmer when only a minute of it matters.',
    ],
    howTo: [
      {
        name: 'Drop the video',
        text: 'Any MP4, WebM or MOV with a standard soundtrack works. The file never leaves your device.',
      },
      {
        name: 'Choose the format',
        text: 'MP3 192 kbps for listening and sharing; WAV for a lossless copy you can edit or archive.',
      },
      {
        name: 'Extract and save',
        text: 'Click Extract Audio. The soundtrack is decoded locally and downloads immediately.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between this and an MP4 to MP3 converter?',
        a: 'Under the hood, the same local extraction engine — this page is set up for getting audio out of a video in whatever format you need, including lossless WAV, while the converter page is tuned for MP3 output.',
      },
      {
        q: 'Can I get the original quality?',
        a: 'Choose WAV: the decoded soundtrack is written losslessly, so the audio matches what the video contains. MP3 re-encodes once; at 320 kbps the difference is inaudible in practice.',
      },
      {
        q: 'Which video formats work?',
        a: 'MP4 with AAC audio, WebM with Opus, and most MOV files — the codecs browsers can decode natively. Soundtracks in AC3, DTS or other exotic codecs cannot be decoded locally and are rejected cleanly.',
      },
      {
        q: 'Is there a file size limit?',
        a: 'No artificial one. Only the audio track is processed, so even very large videos convert quickly — the limit is your device memory, not the file size on disk.',
      },
      {
        q: 'Can I remove the audio from a video instead?',
        a: 'That is the opposite operation — muting a video keeps the pictures and drops the sound. This tool keeps the sound and drops the pictures.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Pick the file and the conversion stays in the tab. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'Pull the soundtrack off a video',
        paragraphs: [
          'Extract audio decodes the soundtrack and drops the picture. The export starts as MP3, and the format menu also offers WAV when the next step is an edit or a lossless handoff.',
          'MP4 to MP3 is the sibling written for that exact conversion. Open this page when the source is any video and you may want WAV, not only an MP3 from an MP4.',
        ],
      },
      {
        heading: 'What comes out, and what does not',
        paragraphs: [
          'Only the audio track is decoded. The video frames are discarded:',
        ],
        bullets: [
          'A phone video or a screen recording becomes a file you can trim, join, or tag.',
          'Switch to WAV if you will edit next and want to encode once at the end.',
          'AC3 and DTS soundtracks often fail in the browser. A stereo AAC or PCM track is the one that decodes.',
        ],
      },
      {
        heading: 'It does not mute the video',
        paragraphs: [
          'Removing audio from a video, and keeping the picture, is the opposite job. This page keeps the sound and drops the pictures. It does not write a new video.',
          'There is no size cap beyond the memory of the device. A 4K picture does not make the audio decode slower, because the frames are not used. Nothing is uploaded.',
        ],
      },
    ],
    related: ['mp4-to-mp3', 'audio-trimmer', 'volume-booster'],
    editor: {
      defaultFormat: 'mp3-192',
      dropHint: 'Drop a video file, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      converter: true,
      exportLabel: 'Extract Audio',
    },
  },
  {
    slug: 'voice-recorder',
    cardLine: 'Record meetings, lectures and ideas right in the browser — no app install.',
    name: 'Voice Recorder',
    shortName: 'Voice Recorder',
    icon: 'mic',
    category: 'record',
    title: 'Voice Recorder Online — Record, Trim & Save Audio Free',
    description:
      'Record your microphone in the browser, trim the take and save it as MP3 or WAV. Free, private — recordings are never uploaded.',
    h1: 'Voice Recorder — Record Your Microphone to MP3, Online Free',
    hero: {
      src: '/voice-recorder.svg',
      alt: 'Save a voice memo as MP3 or WAV',
      width: 32,
      height: 32,
    },
    subtitle: 'Record your microphone, trim the take, save it as MP3 — nothing leaves your device.',
    intro:
      'A recorder with a trimming studio attached: capture voice memos, interviews, practice takes or meeting notes, then cut the dead air and export a clean file. Recording and editing both happen in your browser — the audio is never sent anywhere, which makes this comfortable even for confidential conversations.',
    usesHeading: 'Takes worth recording here',
    uses: [
      'Record a voice memo, a language drill, or a rough narration without installing an app.',
      'Trim the start and the tail before export, so the take is only the words.',
      'Save MP3 to send it, or WAV if you will edit the take again.',
    ],
    howTo: [
      {
        name: 'Allow the microphone',
        text: 'Click Record and accept the browser permission prompt. Recording starts immediately; the timer shows the take length.',
      },
      {
        name: 'Stop and review',
        text: 'Click Stop when you are done. The recording loads into the editor below, where you can play it back and trim the ends.',
      },
      {
        name: 'Export the take',
        text: 'Save as MP3 or WAV. Recordings exist only in this tab until you export them — closing without exporting discards them.',
      },
    ],
    faqs: [
      {
        q: 'Where do my recordings go?',
        a: 'Nowhere. The microphone stream is captured by your browser and held in this tab\u2019s memory. Nothing is transmitted, and the recording disappears when you close the tab unless you export it first.',
      },
      {
        q: 'What format is the recording?',
        a: 'The browser decides the capture format — Chrome and Firefox record WebM/Opus, Safari records MP4/AAC. It does not matter: exports are converted to MP3 or WAV on your device either way.',
      },
      {
        q: 'Can I trim the silence off the start and end?',
        a: 'Yes, that is the point of the editor below the recorder. Drag across the part you want to keep, set the mode to Keep selection, and export — the dead air disappears.',
      },
      {
        q: 'Which browsers support recording?',
        a: 'Chrome, Edge, Firefox and Safari on desktop, plus Chrome on Android and Safari on iOS. If the Record button reports that recording is unavailable, the browser is missing the MediaRecorder API.',
      },
      {
        q: 'How long can I record?',
        a: 'As long as your device memory allows — minutes of speech take very little space (Opus compression is efficient). For multi-hour recordings, export in sections.',
      },
    ],
    sections: [
      {
        heading: 'The microphone stays in the browser',
        paragraphs: [
          'Voice recorder uses the MediaRecorder in this tab. The take is not uploaded. If you close the tab before you export, the recording is gone.',
          'The capture format depends on the browser. Export chooses MP3 or WAV, so the file you keep is the one you picked, not whatever the browser recorded internally.',
        ],
      },
      {
        heading: 'After the take',
        paragraphs: [
          'You can trim by keeping a selection, then export that span:',
        ],
        bullets: [
          'Cut the breath before the first word and the silence after the last.',
          'Export WAV if you will edit the take again and want to encode once.',
          'Export MP3 if the memo only needs to be sent or stored small.',
        ],
      },
      {
        heading: 'What it will not do',
        paragraphs: [
          'It needs a browser that implements MediaRecorder and permission to use the microphone. It does not transcribe. Speech to text is the audio-to-text page, and that one takes a file, not a live mic.',
          'A recording that is too quiet is still quiet after export. Raise it with the volume booster, or check the level on the loudness meter if the destination is a podcast target.',
        ],
      },
    ],
    related: ['multi-track-audio-editor', 'metronome', 'audio-to-text'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Or drop an existing recording to edit',
    },
    recorder: true,
  },
  {
    slug: 'audio-to-text',
    cardLine: 'Transcribe interviews and voice notes to text or SRT subtitles, right on your device.',
    name: 'Audio to Text',
    shortName: 'Audio to Text',
    icon: 'voice',
    category: 'record',
    title: 'Audio to Text — Transcribe Audio & Video Online Free',
    description:
      'Transcribe audio to text in your browser — MP3, WAV, M4A and video, 90+ languages with auto-detect, export TXT or SRT. Free, no signup, nothing uploaded.',
    h1: 'Audio to Text — Transcribe a Recording, Online Free',
    hero: {
      src: '/audio-to-text.svg',
      alt: 'Turn a voice memo or an interview into a written transcript',
      width: 32,
      height: 32,
    },
    subtitle: 'Turn recordings into text in 90+ languages, with timestamps — right in your browser.',
    intro:
      'Drop in a recording and get the words out of it: voice memos, interviews, lectures, podcasts — in about 90 languages, detected automatically when you are not sure which one it is. A Whisper AI model runs inside your browser tab on your own device, so the audio is never uploaded, and the transcript comes out as editable text or an SRT file with timestamps.',
    usesHeading: 'Transcripts people actually need',
    uses: [
      'Turn a lecture, meeting or interview into notes you can search and quote.',
      'Caption a video or podcast episode by exporting an SRT with timestamps.',
      'Pull the words out of a voice memo without sending the recording anywhere.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Add an MP3, WAV, M4A, video file or other recording. It is decoded on your device and never uploaded.',
      },
      {
        name: 'Pick a language and model',
        text: 'Auto-detect handles most files. Choose Tiny for speed on long recordings or low-end devices, Base for the best accuracy.',
      },
      {
        name: 'Transcribe and download',
        text: 'The first run downloads the model once and caches it. Edit the transcript if you like, then save it as TXT or SRT.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The file is decoded in your browser and transcribed by a Whisper model that runs locally through WebAssembly or WebGPU. The only network request is the one-time model download from a public CDN — after that, transcription itself works offline. Nothing about your audio ever reaches a server.',
      },
      {
        q: 'How accurate is the transcription?',
        a: 'It uses OpenAI\u2019s Whisper models, which score near human level on clear speech. Accuracy drops with heavy background noise, strong accents, overlapping speakers or loud music. The Base model is noticeably better than Tiny on difficult audio — and either way the transcript lands in an editable box, so you can fix names and punctuation before downloading.',
      },
      {
        q: 'What are the limits?',
        a: 'One file at a time, up to 10 minutes per pass — trim longer recordings first (the audio trimmer works the same private way). It does not label speakers: a dialogue comes out as one flowing text without names. And this page works on files, not the live microphone.',
      },
      {
        q: 'How is this different from the voice recorder?',
        a: 'The voice recorder captures your microphone into an audio file; this page reads an existing file and writes out the words. They pair well: record there, transcribe here. Both run entirely in your browser.',
      },
      {
        q: 'Which languages does it support?',
        a: 'Whisper was trained on about 90 languages, from English, Chinese, Spanish and Arabic to Vietnamese, Ukrainian and Swahili. Leave the language on Auto-detect and the model works it out from the audio, or pin a language for a small accuracy boost.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes — recent Chrome, Edge, Firefox and Safari, desktop or mobile. Browsers with WebGPU (Chrome, Edge) transcribe much faster; elsewhere it runs on the CPU, so pick the Tiny model for long files and expect a wait of a few minutes on ten minutes of audio. The one-time model download is smaller for Tiny.',
      },
    ],
    sections: [
      {
        heading: 'A local transcript, not a live caption',
        paragraphs: [
          'Audio to text runs a Whisper model in the browser. The model downloads once from a CDN, then the file is transcribed on the device. The audio is not uploaded for the transcript.',
          'The cap is about 10 minutes. There are no speaker labels. It does not listen to the microphone live. Record first on the voice recorder, export, then drop that file here.',
        ],
      },
      {
        heading: 'Model and language',
        paragraphs: [
          'About 90 languages. Pick the one you spoke, or leave detection on if you are not sure:',
        ],
        bullets: [
          'Tiny is the smaller download and enough for clear speech.',
          'Base is slower and a bit more accurate on noisy or accented speech.',
          'WebGPU is faster on machines that have it. Otherwise it falls back to the CPU.',
        ],
      },
      {
        heading: 'What the text will get wrong',
        paragraphs: [
          'Names, overlapping talk, and music under a voice come out messy. It will not mark who spoke. Clean the file first if the ends are long silence: trim, or run the silence remover, then transcribe the shorter file.',
          'You can edit the words before download, as plain text or as an SRT with timestamps. It does not translate them into another language.',
        ],
      },
    ],
    related: ['voice-recorder', 'extract-audio', 'audio-trimmer'],
    editor: {
      transcribe: true,
      dropHint: 'Drop an audio or video file, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      exportLabel: 'Transcribe',
    },
  },
  {
    slug: 'volume-booster',
    cardLine: 'Make quiet music and video soundtracks loud and clean, up to 4×.',
    name: 'Volume Booster',
    shortName: 'Volume Booster',
    icon: 'volume',
    category: 'effects',
    title: 'Audio Volume Booster — Make Audio Louder Online Free',
    description:
      'Make audio louder online, up to 4×, for quiet music and video soundtracks. A limiter holds the peaks. Free, and nothing is uploaded.',
    h1: 'Audio Volume Booster — Make Audio Louder, Online Free',
    hero: {
      src: '/volume-booster.svg',
      alt: 'Boost a quiet video soundtrack',
      width: 32,
      height: 32,
    },
    subtitle: 'Boost quiet tracks and video soundtracks up to 4× — clean, not clipped.',
    intro:
      'For everything that plays too quietly: quiet phone videos, gentle acoustic recordings, podcasts mastered at whisper level. Load a file, push the volume up to 4×, and let the built-in limiter hold the peaks back so the loud parts stay clean. Works on audio and video files alike — only the soundtrack is processed.',
    usesHeading: 'Quiet files this page is for',
    uses: [
      'Lift a video soundtrack that came out quieter than the picture.',
      'Boost music that was exported or ripped at a low level.',
      'Stay near 150% to 250% when you want louder without the limiter pumping.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Music, a voice memo, or a quiet video (MP4, WebM, MOV) — the soundtrack is extracted locally if it is a video.',
      },
      {
        name: 'Choose the boost',
        text: 'Drag the volume slider to 150–250% for most recordings. Preview as you go; the limiter engages automatically above 100%.',
      },
      {
        name: 'Export the louder file',
        text: 'Save as MP3 or WAV. If peaks sound squashed, step the boost back 10–20% and re-export.',
      },
    ],
    faqs: [
      {
        q: 'How much louder can it get?',
        a: 'Up to 400% of the original (+12 dB). Boosting cannot create energy that was never recorded, so extremely quiet sources may also benefit from exporting to WAV and normalizing in a dedicated editor — but for most quiet files, a 2–3× boost is plenty.',
      },
      {
        q: 'What does the limiter actually do?',
        a: 'Above 100% volume, a dynamics compressor watches the output and holds back momentary peaks before they clip. The result is louder overall without the crackle of hard digital clipping. A soft-clip stage catches anything that still slips through.',
      },
      {
        q: 'Can I boost the sound of a video?',
        a: 'Yes. Drop an MP4 or WebM and the soundtrack is decoded locally, boosted, and exported as MP3 or WAV. The video track is ignored — use the audio extractor if you only want the sound.',
      },
      {
        q: 'Boosting on my phone — does that work?',
        a: 'Yes. The booster runs in mobile Safari and Chrome; a 3-minute song exports in a second or two on a modern phone.',
      },
      {
        q: 'Why not just turn my speakers up?',
        a: 'Speaker volume only helps on your device. A boosted file plays louder everywhere — on other people\u2019s phones, in cheap earbuds, over a laptop\u2019s tiny speakers.',
      },
      {
        q: 'How is this different from the level compressor?',
        a: 'This page multiplies the whole file, so loud and quiet stay the same distance apart. The level compressor narrows that distance and then puts the peak back. Use this when everything is too quiet. Use the compressor when some parts are too loud and others are too quiet.',
      },
      {
        q: 'How is this different from the loudness meter?',
        a: 'Dragging this slider multiplies every sample. The loudness meter measures integrated LUFS and offers podcast −16, streaming −14, and broadcast −23. If the sample peak would pass −1 dBFS, the gain stops. It is not a room meter.',
      },
    ],
    sections: [
      {
        heading: 'Make audio louder without the crackle',
        paragraphs: [
          'A file clips when a sample tries to pass the digital ceiling, 0 dBFS. Boosting multiplies every sample. If the loudest moment was already near that ceiling, a big boost chops the top off and you hear crackle.',
          'Above 100% this page runs a limiter on the output, then a soft clip on anything that still gets through. Start at 150% and preview. Most quiet voice memos and low exports only need 150–250%. 400% is about +12 dB, and it is for files that were recorded very low, not for tracks that are already hot.',
        ],
        bullets: [
          '150–200%: a quiet memo or a video that is a bit soft. Usually clean.',
          '250%: a lecture from the back of the room. Listen to the loudest second before you save.',
          '300–400%: only if the whole file is far too quiet. If it pumps or crackles, come back down.',
          'Already loud: leave the slider at 100%, or send the file to the normalizer.',
        ],
      },
      {
        heading: 'A higher peak is not a louder file',
        paragraphs: [
          'Peak level is the single loudest sample. A whispered interview with one cough can peak near full scale and still sound quiet, because the rest of the file is low. Multiplying the file raises the whisper and the cough together.',
          'How loud a file feels over its whole length is what LUFS measures. This page does not target a LUFS number. The loudness meter does: it reads integrated LUFS and can land a file near −16 for podcasts, −14 for streaming, or −23 for broadcast, and it stops if the sample peak would pass −1 dBFS.',
        ],
      },
      {
        heading: 'Boost, normalize, or compress',
        paragraphs: [
          'Three pages on this site change level, and they are not substitutes.',
        ],
        bullets: [
          'Volume booster, this page: you pick the multiplier, up to 4×, and a limiter holds peaks. Use it when you already know the file is too quiet, including a video soundtrack.',
          'Normalize audio: one measured gain so the loudest peak sits just under the ceiling. Use it when you do not want to guess the slider.',
          'Level compressor: pulls loud moments down and quiet words up, then puts the peak back. Use it when some parts shout and others disappear. A boost will not do that.',
        ],
      },
      {
        heading: 'Video soundtracks and phone recordings',
        paragraphs: [
          'Drop an MP4, WebM, or MOV and only the soundtrack is decoded, boosted, and saved as MP3 or WAV. The picture is ignored. If the browser cannot read the audio codec, extract the audio first.',
          'A boosted file is louder on every device that plays it. Speaker volume only helps the device in front of you. Export WAV if you will edit again. MP3 encodes once. Boosting cannot invent detail a quiet phone mic never captured, and it also raises the hiss that was already there.',
        ],
      },
    ],
    related: ['loudness-meter', 'increase-volume', 'normalize-audio'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio or video file, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      quickControls: ['gain'],
      maxGainPercent: 400,
    },
  },
  {
    slug: 'normalize-audio',
    cardLine: 'Bring a whole batch of recordings to one consistent, healthy level.',
    name: 'Audio Normalizer',
    shortName: 'Normalizer',
    icon: 'trending-up',
    category: 'effects',
    title: 'Audio Normalizer — Normalize MP3 Volume Online Free',
    description:
      'Normalize audio to a consistent peak level in your browser — MP3, WAV, M4A and more. One click, free, nothing uploaded.',
    h1: 'Audio Normalizer — Normalize MP3 Volume, Online Free',
    hero: {
      src: '/normalize-audio.svg',
      alt: 'Bring quiet files up to one shared level',
      width: 32,
      height: 32,
    },
    subtitle: 'One click to bring quiet files up to a consistent, healthy level — analyzed on your device.',
    intro:
      'Normalizing scans your file to find its loudest peak, then raises the entire file by exactly the amount needed to bring that peak just below clipping. The result: a file that uses the full volume range it was given, with no manual guesswork. It is the right fix when a recording is consistently too quiet — voice memos, field recordings, exports from other apps that came out at −18 dB.',
    usesHeading: 'When one level should fit',
    uses: [
      'Bring a quiet file up so its loudest peak hits a normal level.',
      'Even out clips you will join, so one chapter is not half as loud as the next.',
      'Use this instead of a blind boost when you do not know how far to push.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A or other audio file. It is decoded and analyzed locally — nothing leaves your device.',
      },
      {
        name: 'Click Normalize',
        text: 'The file is scanned for its peak and raised so that peak lands just below full scale. Preview to hear the difference.',
      },
      {
        name: 'Export',
        text: 'Save as MP3 or WAV. WAV avoids an extra lossy encoding pass if you plan to keep editing the file.',
      },
    ],
    faqs: [
      {
        q: 'What does normalizing actually do?',
        a: 'It applies one fixed amount of gain to the whole file so that the loudest single sample ends up just below the digital ceiling (about −0.2 dB here). If a file\u2019s peak sits at 50% volume, normalizing roughly doubles every sample — quiet parts and loud parts alike.',
      },
      {
        q: 'Is normalizing the same as boosting the volume?',
        a: 'They overlap, but normalizing is measured rather than guessed. The volume booster applies whatever multiplier you drag the slider to; normalize finds the largest safe multiplier automatically. If you know a file is uniformly quiet, boosting is fine. If you just want it as loud as it can cleanly be, normalize.',
      },
      {
        q: 'Will it make quiet and loud parts equally loud?',
        a: 'No — and be skeptical of any tool claiming one click does that. Raising quiet passages independently is dynamic range compression. The level compressor does that. This page shifts the whole recording up by the same amount and leaves the dynamics untouched.',
      },
      {
        q: 'Does it use LUFS loudness targets like streaming platforms?',
        a: 'No. This page moves the peak, not the integrated loudness. The loudness meter measures K-weighted LUFS and can land a file on −16, −14, or −23. Those are common delivery targets, not a legal limit, and not a reading of the room.',
      },
      {
        q: 'Does normalizing reduce quality?',
        a: 'The level change itself is mathematically clean and inaudible. The only quality question is the export format: WAV is bit-perfect for the gain change, while MP3 re-encodes once. Export WAV if the file will be edited further.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Drag the waveform with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'One gain, aimed at the peak',
        paragraphs: [
          'Normalize finds the loudest sample and applies one gain so that peak lands near −0.2 dB. Every other sample moves by the same amount. Quiet parts do not get a separate lift.',
          'It is not LUFS. A podcast target of −16 LUFS, a stream near −14, or broadcast near −23 is the loudness meter. That meter also stops the suggested gain if the sample peak would pass −1 dBFS.',
        ],
      },
      {
        heading: 'When normalizing is the right move',
        paragraphs: [
          'Use it when the whole file is simply too quiet and nothing is already peaking:',
        ],
        bullets: [
          'A voice memo recorded far from the mic, with headroom left.',
          'A track that should sit near full scale before you send it on.',
          'A file you will compress or boost next, so the peak is a known ceiling.',
        ],
      },
      {
        heading: 'When it will disappoint you',
        paragraphs: [
          'If one click or breath is already near full scale, normalize does almost nothing, because that peak sets the gain. The level compressor is what pulls loud and quiet closer, then matches the peak.',
          'Making a file louder by a factor you choose, including past 100 percent with a limiter, is the volume booster. Normalize does not offer that multiplier.',
        ],
      },
    ],
    related: ['loudness-meter', 'compressor', 'volume-booster'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['gain', 'normalize'],
    },
  },
  {
    slug: 'compressor',
    cardLine: 'Pull loud peaks down and lift quiet words, without making the whole file louder.',
    name: 'Level Compressor',
    shortName: 'Level Compressor',
    icon: 'volume',
    category: 'effects',
    title: 'Level Compressor — Even Out Volume Online Free',
    description:
      'Even out loud and quiet parts of a recording in your browser. Peaks stay put. Not a file-size shrink. Free, nothing uploaded.',
    h1: 'Level Compressor — Even Out Loud and Quiet, Online Free',
    hero: {
      src: '/compressor.svg',
      alt: 'Tame the peaks in a voice recording so the quiet words come up',
      width: 32,
      height: 32,
    },
    subtitle: 'A broadband compressor that tames jumps in level — the peak of the file stays where it was.',
    intro:
      'A voice memo that shouts one sentence and whispers the next needs compression, not a volume knob. This page runs a single broadband compressor: loud moments get turned down, quiet moments come up, then the export is scaled so the peak matches the file you started with. It all happens in your browser. The file is never uploaded.',
    usesHeading: 'Jobs a compressor finishes',
    uses: [
      'Even out a voice memo where the speaker leans toward and away from the phone.',
      'Tame a podcast guest who is much louder than the host, without raising the noise floor by hand.',
      'Sit a vocal in front of a track when the chorus jumps out of the verse.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Decoding stays on your device.',
      },
      {
        name: 'Set the amount',
        text: 'Drag Compress. 30–50% is enough for most speech. 100% is a heavy squash: threshold −36 dB, ratio 8:1.',
      },
      {
        name: 'Preview and export',
        text: 'Play the result, then export MP3 or WAV. The peak is put back to the original peak, capped at just under full scale.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The compressor is a Web Audio dynamics processor inside your browser tab. After the page loads you can go offline and it still exports.',
      },
      {
        q: 'What happens to the audio?',
        a: 'One broadband compressor (threshold from −18 dB down to −36 dB, ratio from just over 1:1 up to 8:1). There is no automatic makeup inside the compressor, so the page then scales the export until its peak matches the source peak, or −0.2 dBFS if the source was hotter than that. WAV keeps that level change clean. MP3 re-encodes once.',
      },
      {
        q: 'Will this shrink the file?',
        a: 'No. Shrinking a file means re-encoding at a lower bitrate, which is the audio compressor page. This page changes dynamics and leaves the bitrate choice to the export format.',
      },
      {
        q: 'How is this different from the volume booster and normalize?',
        a: 'The volume booster multiplies the whole file. Normalize raises everything until the loudest sample hits a target. Both leave the gap between loud and quiet the same. This page narrows that gap. It is one band, not a multiband vocal chain, and it will not remove noise.',
      },
      {
        q: 'Can it make a quiet room tone disappear?',
        a: 'No. Lifting quiet parts also lifts hiss and room tone. If the noise is the problem, compression makes it more obvious. Cut the silence out or record again.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The slider and export work with touch in current Chrome, Edge, Firefox and Safari. A few minutes of speech exports in a second or two on a recent phone.',
      },
    ],
    sections: [
      {
        heading: 'Dynamics, not file size',
        paragraphs: [
          'The level compressor is one broadband compressor. Threshold runs from −18 dB down to −36 dB, and the ratio from just over 1:1 up to 8:1. Loud moments come down, quiet moments come up relative to them.',
          'There is no makeup gain inside the compressor. Afterward the export is scaled so its peak matches the source peak, or −0.2 dBFS if the source was already hotter than that. It does not shrink the file. A smaller MP3 is the audio compressor page.',
        ],
      },
      {
        heading: 'What it will and will not fix',
        paragraphs: [
          'It narrows the gap between loud and quiet. It is one band, not a vocal chain:',
        ],
        bullets: [
          'A voice memo that shouts one sentence and whispers the next.',
          'A mix where the loud hits bury the quiet phrases, and you want them closer.',
          'Not a noise remover. Lifting the quiet parts also lifts hiss and room tone.',
        ],
      },
      {
        heading: 'How it differs from a volume knob',
        paragraphs: [
          'The volume booster multiplies the whole file. Normalize raises everything until the loudest sample hits a peak. Both leave the gap between loud and quiet the same. This page narrows that gap.',
          'WAV keeps the level change without another lossy generation. MP3 re-encodes once. If the problem is only that the file is quiet, and the dynamics are fine, use the volume booster instead.',
        ],
      },
    ],
    related: ['compress-audio', 'volume-booster', 'normalize-audio'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['compress'],
    },
  },
  {
    slug: 'echo',
    cardLine: 'Add spaced repeats you can time — a slap, a canyon, not a wash of reverb.',
    name: 'Echo',
    shortName: 'Echo',
    icon: 'reverse',
    category: 'effects',
    title: 'Add Echo to Audio — Online Echo Effect Free',
    description:
      'Add a timed echo to any audio in your browser. Set the delay and how many repeats. Free, nothing uploaded.',
    h1: 'Echo — Add Echo to Audio, Online Free',
    hero: {
      src: '/echo.svg',
      alt: 'Add a delay and repeats to a recording',
      width: 32,
      height: 32,
    },
    subtitle: 'Discrete repeats at a delay you set — from a short slap to a long repeat.',
    intro:
      'Echo is a copy of the sound that comes back after a gap you can count. Set the delay from a few hundredths of a second up to 0.8 seconds, and how strongly each repeat feeds the next. The wet signal is mixed at 45%. Delay at zero leaves the file untouched. Processing stays in your browser.',
    usesHeading: 'Echoes people actually want',
    uses: [
      'Put a short slap on a vocal so it sits in a room without turning to mush.',
      'Stretch a guitar hit or a drum into repeats that land on the beat.',
      'Hear a line come back once, clearly, instead of a cloud of reverb.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Set delay and repeats',
        text: 'Delay is the gap before the first copy, up to 0.8 s. Repeats is the feedback, capped at 55% so the loop cannot run away.',
      },
      {
        name: 'Preview and export',
        text: 'Play it, then export MP3 or WAV. The file grows by the tail of the repeats, up to 4 seconds.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The echo is a Web Audio delay inside your browser tab. After the page loads you can go offline and it still exports.',
      },
      {
        q: 'What does the effect actually do?',
        a: 'A copy of the signal is delayed by the time you set and mixed back at 45%. Each copy is fed into the delay again at the repeat level you set, up to 0.55, so the repeats get quieter instead of howling. WAV keeps that mix. MP3 re-encodes once.',
      },
      {
        q: 'How is this different from slowed + reverb?',
        a: 'Slowed + reverb is a wash: the pitch drops with the speed and the tail is a smear of room reflections. This page keeps the timing of the original and adds separate copies you can hear one by one. It does not change speed or pitch.',
      },
      {
        q: 'Why do the repeats stop getting louder?',
        a: 'Feedback is capped at 55% and the rendered tail is capped at 4 seconds. That is enough to hear several repeats. It will not become a self-oscillating noise.',
      },
      {
        q: 'Can I echo only part of a song?',
        a: 'Yes. Select the section on the waveform and keep that selection. The repeats are added to what you export, not to the rest of the file.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. Both sliders and the export button work with touch in current Chrome, Edge, Firefox and Safari.',
      },
    ],
    sections: [
      {
        heading: 'Separate copies, not a wash',
        paragraphs: [
          'Echo delays a copy of the signal by the time you set, from a few hundredths of a second up to 0.8 seconds, and mixes that copy back at 45 percent. Each copy feeds the delay again at the repeat level you set.',
          'Feedback is capped at 0.55 and the rendered tail at 4 seconds, so the repeats get quieter instead of howling. Delay at zero leaves the file untouched. Speed and pitch stay as they were.',
        ],
      },
      {
        heading: 'How to use the two sliders',
        paragraphs: [
          'Delay is the gap before the first copy. Repeats is how much of each copy goes back in:',
        ],
        bullets: [
          'A short delay for a slap you can still hear as a second hit.',
          'A longer delay, still under 0.8 seconds, when you want the copies counted one by one.',
          'A selection only, if the echo should sit on one phrase and not the rest of the file.',
        ],
      },
      {
        heading: 'Echo is not slowed + reverb',
        paragraphs: [
          'Slowed + reverb drops the pitch with the speed and smears the tail into a room. This page keeps the original timing and adds copies you can hear separately.',
          'Fading the start or end of one file is the fade page. Overlapping two songs is the audio joiner. Neither of those is an echo.',
        ],
      },
    ],
    related: ['slowed-reverb', 'auto-panner', 'fade-audio'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['echo'],
    },
  },
  {
    slug: 'silence-remover',
    cardLine: 'Cut the long quiet stretches and leave the short breaths where they are.',
    name: 'Silence Remover',
    shortName: 'Silence',
    icon: 'scissors',
    category: 'effects',
    title: 'Remove Silence from Audio — Cut Dead Air Online Free',
    description:
      'Remove long silences from any audio in your browser. Set how quiet and how long a gap must be. Free, nothing uploaded.',
    h1: 'Silence Remover — Remove Silence from Audio, Online Free',
    hero: {
      src: '/silence-remover.svg',
      alt: 'Cut the long pauses out of a voice recording',
      width: 32,
      height: 32,
    },
    subtitle: 'Drop the dead air. Keep the breaths that are shorter than the gap you set.',
    intro:
      'This finds stretches quieter than the threshold and longer than the minimum gap, then cuts them. The default threshold is −40 dBFS, which suits speech and voice memos. Each cut keeps 0.08 seconds at both edges so a word is not clipped. A pause shorter than the gap stays. Quiet music and fading tails sit under −40 dBFS and will be cut too — draw the part you want on the audio trimmer instead. If the whole file is under the threshold, the export is the original file. Processing stays in your browser.',
    usesHeading: 'Where the dead air actually is',
    uses: [
      'Tighten a voice memo or a podcast take that has long pauses between sentences.',
      'Strip the silence from a lecture without trimming each gap by hand.',
      'Clean a recording before you export, and leave the short breaths in place.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Set the threshold and the gap',
        text: 'Threshold is how quiet a stretch must be, from −60 to −20 dBFS. Minimum gap is how long it must last before it is removed, from 0.1 to 2 seconds. The status line shows about how many seconds will go.',
      },
      {
        name: 'Export',
        text: 'Play the original to check it, then export MP3 or WAV. The file is the loud parts joined together, with 0.08 seconds kept at each cut.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The level is measured in your browser and the quiet stretches are cut in memory. After the page loads you can go offline and it still exports.',
      },
      {
        q: 'What does it actually remove?',
        a: 'A stretch is removed only when it is quieter than the threshold and longer than the minimum gap. The default is −40 dBFS and 0.35 seconds. Each removed stretch keeps 0.08 seconds at both ends. Shorter gaps, including most breaths, stay.',
      },
      {
        q: 'Will it cut quiet music?',
        a: 'Yes, if the music stays under the threshold for longer than the gap. −40 dBFS is for speech. A quiet bed, a fade, or room tone in a music mix will be treated as silence. Raise the threshold toward −20 if you only want the near-digital zeros gone, or use the audio trimmer and select by hand.',
      },
      {
        q: 'What if the whole file is quiet?',
        a: 'Nothing is cut. The status line says so, and the export is the original file.',
      },
      {
        q: 'How is this different from the trimmer?',
        a: 'The audio trimmer and the MP3 cutter keep a region you draw on the waveform. This page finds long quiet stretches by level and removes all of them in one export. It does not change speed, pitch, or loudness of what remains.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. Both sliders and the export button work with touch in current Chrome, Edge, Firefox and Safari.',
      },
    ],
    sections: [
      {
        heading: 'It cuts long quiet stretches, not breaths',
        paragraphs: [
          'A stretch is removed only when it is quieter than the threshold and longer than the minimum gap. The default is −40 dBFS and 0.35 seconds. Each cut keeps 0.08 seconds at both ends so the join does not click.',
          'Shorter gaps, including most breaths, stay. What remains is not made louder, slower, or higher. If the whole file sits under the threshold, nothing is cut and the export is the original file.',
        ],
      },
      {
        heading: 'Speech, not a quiet song',
        paragraphs: [
          '−40 dBFS is aimed at speech. Music will lose the parts you meant to keep if they sit that low:',
        ],
        bullets: [
          'A voice memo or interview with long pauses between answers.',
          'Raise the threshold toward −20 dBFS if you only want near-digital silence gone.',
          'A fade, a quiet bed, or room tone in a mix: leave this page and trim by hand.',
        ],
      },
      {
        heading: 'Trimmer versus this page',
        paragraphs: [
          'The audio trimmer and the MP3 cutter keep a region you draw. This page finds every long quiet stretch by level and removes them in one export.',
          'Use the trimmer when the quiet part is something you still want, or when you need to keep one span and drop the rest by ear. Use this page when the pauses are the problem and they are long enough to measure.',
        ],
      },
    ],
    related: ['audio-trimmer', 'mp3-cutter', 'voice-recorder'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      silence: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'loudness-meter',
    cardLine: 'Read how loud a file is in LUFS, then match a podcast, streaming, or broadcast target.',
    name: 'Loudness Meter',
    shortName: 'Loudness',
    icon: 'volume',
    category: 'effects',
    title: 'Loudness Meter — Check Audio LUFS Online Free',
    description:
      'Measure integrated LUFS of an audio file in your browser, then match −16, −14, or −23. Sample peak stays at or below −1 dBFS. Free, nothing uploaded.',
    h1: 'LUFS Meter — Check the LUFS of a Song, Online Free',
    hero: {
      src: '/loudness-meter.svg',
      alt: 'See whether a file matches a podcast or streaming loudness target',
      width: 32,
      height: 32,
    },
    subtitle: 'Integrated LUFS of the file you drop — not the loudness of the room.',
    intro:
      'Drop a file and read its integrated loudness in LUFS, plus the sample peak. Then match one delivery target: podcast −16, streaming −14, or broadcast −23. The gain is one number for the whole file. If that gain would push the loudest sample past −1 dBFS, it stops there and the page tells you the LUFS you actually reached. This is not a room sound-level meter, and it is not peak normalize. −16, −14, and −23 are common delivery targets, not a legal limit. Processing stays in your browser.',
    usesHeading: 'What the number is for',
    uses: [
      'See whether a voice memo or a mix is near a podcast target before you send it.',
      'Lift a quiet file toward −16 or −14 without letting the sample peak pass −1 dBFS.',
      'Check a stereo file as stereo. The two channels are not mixed down before the reading.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded and measured on your device.',
      },
      {
        name: 'Read the meter',
        text: 'Integrated is the K-weighted loudness of the file, in LUFS. Sample peak is the largest sample, in dBFS. A silent file has no loudness to match.',
      },
      {
        name: 'Pick a target and export',
        text: 'Podcast is −16, streaming is −14, broadcast is −23. Export MP3 or WAV. If the peak would pass −1 dBFS, the gain stops and the note shows the LUFS you get instead.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The file is decoded and measured in your browser. After the page loads you can go offline and it still exports.',
      },
      {
        q: 'What does the number mean?',
        a: 'Integrated LUFS is how loud the file is over its length, after K-weighting from ITU-R BS.1770. It is a property of the file. It is not a reading of the room, and it is not an A-weighted sound-pressure level.',
      },
      {
        q: 'How is this different from normalize?',
        a: 'Normalize raises the file until the loudest sample hits a peak. This page matches integrated loudness. A file can be peak-normalized and still sit far from −16 LUFS. Quiet and loud parts stay the same distance apart. The level compressor is the page that narrows that distance.',
      },
      {
        q: 'Are −16, −14, and −23 legal limits?',
        a: 'No. They are common delivery targets: podcasts often ask for about −16 LUFS, music streaming about −14, and broadcast about −23. The page does not claim your file will pass a platform or a broadcaster.',
      },
      {
        q: 'Is the peak a true peak?',
        a: 'No. Sample peak is the largest sample in the file. A true peak needs oversampling and can sit a little higher between samples. This page holds the sample peak at −1 dBFS and does not report dBTP.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The three targets and the export button work with touch in current Chrome, Edge, Firefox and Safari.',
      },
    ],
    sections: [
      {
        heading: 'A file reading, not a room meter',
        paragraphs: [
          'The number is integrated LUFS: how loud the file is over its length, after the K-weighting in ITU-R BS.1770. It is a property of the file. It is not a reading of the room, and it is not an A-weighted sound-pressure level.',
          'The page also shows sample peak. That peak is not true peak. Inter-sample peaks can still poke past the ceiling on some playback paths.',
        ],
      },
      {
        heading: 'Targets people actually use',
        paragraphs: [
          'The usual reference points are conventions, not legal limits:',
        ],
        bullets: [
          'About −16 LUFS for a spoken podcast.',
          'About −14 LUFS for a lot of music streaming.',
          'About −23 LUFS for broadcast-style program loudness.',
        ],
      },
      {
        heading: 'The gain stops at the peak',
        paragraphs: [
          'If you apply the suggested gain, it stops when the sample peak would pass −1 dBFS. A file can already be peak-normalized and still sit far from −16 LUFS, because one cough sets the peak while the rest stays quiet.',
          'Normalize only chases that peak, to about −0.2 dB. The level compressor is what narrows the gap between loud and quiet. This page measures. It does not pretend a single number makes a master.',
        ],
      },
    ],
    related: ['normalize-audio', 'volume-booster', 'increase-volume'],
    editor: {
      defaultFormat: 'wav',
      showAdjust: false,
      loudness: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'slowed-reverb',
    cardLine: 'Give any track the late-night slowed + reverb treatment in one click.',
    name: 'Slowed + Reverb',
    shortName: 'Slowed + Reverb',
    icon: 'moon',
    category: 'effects',
    title: 'Slowed Reverb Maker — Make Slowed + Reverb Songs Online',
    description:
      'Turn any song into a slowed + reverb edit in your browser — slow it down, wash it in reverb, export MP3. Free, nothing uploaded.',
    h1: 'Slowed Reverb Maker — Slow a Song and Add Reverb, Online Free',
    hero: {
      src: '/slowed-reverb.svg',
      alt: 'Drop a track to about 85% and add a soft echo tail',
      width: 32,
      height: 32,
    },
    subtitle: 'The late-night sound: slow a track to ~85%, add space, export — no app, no upload.',
    intro:
      'The slowed + reverb treatment drops a track to roughly 80–90% speed so the pitch sinks with it, then adds a soft echo tail that makes everything sound like it is playing two rooms away. Load a song, drag the speed to about 85%, raise the reverb until it sits right, and export — the whole edit happens on your device, so even full-length tracks process in seconds. Push the speed above 100% instead and you get nightcore.',
    usesHeading: 'The slowed and reverb sound',
    uses: [
      'Drop a track to about 85% and add space. That is the usual late-night mix.',
      'Start from a dry song. The effect is the slowdown and the reverb together.',
      'Trim to the section you want before export, so the wash is not the whole album.',
    ],
    howTo: [
      {
        name: 'Drop your song',
        text: 'Any MP3, WAV, M4A or other audio file — a full album track works fine, processing stays local.',
      },
      {
        name: 'Slow it and add space',
        text: 'Drag speed to about 85% (the classic spot) and raise reverb to 20–30%. Preview and trust your ears.',
      },
      {
        name: 'Export the edit',
        text: 'Save as MP3 320 kbps for posting, or WAV if you will edit it further in another app.',
      },
    ],
    faqs: [
      {
        q: 'What speed should I use for slowed + reverb?',
        a: 'Most edits land between 80% and 90%, with 85% as the usual sweet spot — slow enough that the pitch clearly sinks, not so slow that the rhythm falls apart. Songs with busy hi-hats survive slowing better than dense, fast tracks.',
      },
      {
        q: 'How do I make a nightcore version instead?',
        a: 'Push the speed slider above 100% — typically 120–130%. Raising the speed raises the pitch with it, which is exactly the nightcore sound. Keep the reverb near zero for a classic nightcore edit.',
      },
      {
        q: 'Does slowing change the pitch?',
        a: 'Yes, deliberately — like a vinyl record at the wrong speed. Vocals get deeper and the key drops by the same ratio. That pitch drop is the signature of the style; slowed without pitch change needs a time-stretch editor, which is a different (and heavier) tool. A slow circle that keeps the speed and the pitch is the 3D audio page.',
      },
      {
        q: 'How much reverb should I add?',
        a: 'Start around 20–30% and listen. The reverb is a synthesized decay tail — past about 50% the track starts sounding like a cathedral and vocals lose their words.',
      },
      {
        q: 'Can I use slowed songs in my videos?',
        a: 'Slowing a track does not change its copyright. For YouTube or TikTok uploads you still need rights to the original song — many creators use the platform\u2019s licensed music library instead and reserve slowed edits for their own recordings.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Drag the waveform with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'The pitch sinks because the speed does',
        paragraphs: [
          'Slowed + reverb drops the speed, usually to somewhere between 80 and 90 percent, with 85 percent as the common starting point. The pitch sinks by the same ratio, the way a record does at the wrong speed. There is no time-stretch that would keep the key.',
          'The reverb is a synthesized decay tail. Start around 20 to 30 percent. Past about 50 percent the track turns into a wash and words get hard to hear.',
        ],
      },
      {
        heading: 'Nightcore is the same page, the other direction',
        paragraphs: [
          'Push the speed above 100 percent and the pitch rises with it:',
        ],
        bullets: [
          '120 to 130 percent is the usual nightcore range.',
          'Keep the reverb near zero for a classic nightcore edit.',
          'Busy hi-hats survive slowing better than a dense, fast arrangement.',
        ],
      },
      {
        heading: 'Copyright and the neighbouring tools',
        paragraphs: [
          'Slowing a track does not change who owns it. A video upload still needs rights to the original song.',
          'Speed alone, from 0.5× to 2× and without the reverb knob, is the speed changer. A higher or lower key at the same length is the pitch changer. A counted echo that does not change speed is the echo page.',
        ],
      },
    ],
    related: ['echo', 'auto-panner', '3d-audio'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop a song, or click to browse',
      quickControls: ['speed', 'reverb'],
    },
  },
  {
    slug: 'treble-booster',
    cardLine: 'Add sparkle and clarity by lifting the highs up to +15 dB above 3 kHz.',
    name: 'Treble Booster',
    shortName: 'Treble',
    icon: 'sun',
    category: 'effects',
    title: 'Treble Booster — Make Audio Clearer Online Free',
    description:
      'Add up to +15 dB of airy highs above 3 kHz in your browser — a true high-shelf, not a loudness trick. Export MP3 or WAV. Free, no upload.',
    h1: 'Treble Booster — Raise the Highs in a Song, Online Free',
    hero: {
      src: '/treble-booster.svg',
      alt: 'Make dull audio clearer',
      width: 32,
      height: 32,
    },
    subtitle: 'A real high-shelf EQ: up to +15 dB above 3 kHz, preview and export — nothing leaves your device.',
    intro:
      'Muffled, dull audio usually lacks one thing: energy above 3 kHz. The treble booster applies a true high-shelf EQ — up to +15 dB above 3 kHz, the same move a mastering engineer makes to open a track up — not a loudness trick that lifts everything. Drop a file, raise the slider until the detail comes back, and export. Everything runs in your browser: the file is never uploaded.',
    usesHeading: 'When to boost the treble',
    uses: [
      'Make a muffled video or voice recording clearer and crisper.',
      'Bring consonants and breath back into voices so speech stays intelligible.',
      'Add sparkle to cymbals and acoustic instruments in a flat-sounding mix.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Processing stays on your device.',
      },
      {
        name: 'Raise the treble slider',
        text: 'Up to +15 dB above 3 kHz. +3–6 dB de-muddies most recordings; go higher for a bright, aggressive edge.',
      },
      {
        name: 'Preview and export',
        text: 'Listen for harshness on sibilants (s, t sounds) — export as MP3 or lossless WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The boost is a Web Audio high-shelf filter inside your browser tab — there is no upload step. You can go offline after the page loads and the tool keeps working.',
      },
      {
        q: 'Will boosting the treble reduce quality?',
        a: 'No resampling or pitch change happens. A big boost also lifts hiss and sibilance that was always in the file — if it gets harsh, back the slider off. A limiter catches peaks so the export never clips harshly.',
      },
      {
        q: 'Can it restore detail that was never recorded?',
        a: 'No — a shelf only amplifies high frequencies the file already contains. Audio compressed at a low bitrate loses highs permanently; no EQ brings them back.',
      },
      {
        q: 'How is this different from the bass booster?',
        a: 'They are opposites on the spectrum: the bass booster lifts the low end below 150 Hz, the treble booster lifts the highs above 3 kHz. Dull and muffled? Treble. Thin and small? Bass.',
      },
      {
        q: 'How much treble should I add?',
        a: '+3–6 dB opens up most dull recordings. Above +9 dB, sibilant sounds (s, sh, t) can get piercing — listen once on headphones before exporting.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The editor is built for touch — drag to select, set the slider, export. Works in current Chrome, Edge, Firefox and Safari, on desktop and mobile.',
      },
    ],
    sections: [
      {
        heading: 'A high shelf above 3 kHz',
        paragraphs: [
          'The treble booster is a high-shelf filter, up to +15 dB above 3 kHz. It amplifies highs the file already has. It does not invent detail that a low-bitrate encode threw away.',
          'A limiter catches peaks so a large boost does not clip hard. The boost also lifts hiss and sibilance that were already in the file.',
        ],
      },
      {
        heading: 'How far to push it',
        paragraphs: [
          'Listen once on headphones before you export:',
        ],
        bullets: [
          '+3 to +6 dB opens up most dull recordings.',
          'Above +9 dB, s, sh, and t sounds can turn piercing.',
          'If the file was encoded at a low bitrate, no shelf brings the missing highs back.',
        ],
      },
      {
        heading: 'Treble, bass, and the equalizer',
        paragraphs: [
          'The bass booster lifts below 150 Hz. This page lifts above 3 kHz. Dull and muffled points here. Thin and small points at bass.',
          'The equalizer is the same three regions with cut as well as boost: low shelf at 150 Hz, a peak at 1 kHz, and this high shelf at 3 kHz. Use the booster when you already know you only want more treble.',
        ],
      },
    ],
    related: ['bass-booster', 'equalizer', 'volume-booster'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['treble'],
    },
  },
  {
    slug: 'equalizer',
    cardLine: 'Shape low, mid and high shelves with a straightforward three-knob ±15 dB EQ.',
    name: 'Audio Equalizer',
    shortName: 'Equalizer',
    icon: 'waveform',
    category: 'effects',
    title: 'Audio Equalizer — 3-Band EQ Online Free',
    description:
      'Shape low, mid and high with a real 3-band EQ (shelf–peak–shelf) in your browser. ±15 dB per band, export MP3 or WAV. Free, nothing uploaded.',
    h1: 'Audio Equalizer — Adjust Bass, Mids and Treble, Online Free',
    hero: {
      src: '/equalizer.svg',
      alt: 'Shape the tone of a song or a voice recording',
      width: 32,
      height: 32,
    },
    subtitle: 'Low, mid and high shelves with ±15 dB per band — the honest three-knob EQ.',
    intro:
      'Three knobs cover most of what an EQ is for: lows below 150 Hz, mids around 1 kHz where voices live, and highs above 3 kHz. This equalizer uses real filter bands — low shelf, peaking, high shelf — with ±15 dB each, so you can thin out boom, pull muddiness down or add air. Drop a file, shape the sound, export. Everything runs in your browser: the file is never uploaded.',
    usesHeading: 'What the three bands do',
    uses: [
      'Cut mud: −3 to −6 dB in the mids cleans up crowded voice recordings.',
      'Tame boom: pull the low band down on recordings made near a wall.',
      'Add presence: lift highs for air, lows for weight — both at once if the mix needs it.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Processing stays on your device.',
      },
      {
        name: 'Shape the three bands',
        text: 'Low below 150 Hz, mid around 1 kHz, highs above 3 kHz — ±15 dB each. Small cuts beat big boosts.',
      },
      {
        name: 'A/B and export',
        text: 'Reset a band to 0 dB to compare with the original, then export as MP3 or lossless WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The bands are Web Audio filters (low shelf, peaking, high shelf) inside your browser tab — there is no upload step. You can go offline after the page loads and the tool keeps working.',
      },
      {
        q: 'Is boosting or cutting better?',
        a: 'Cutting. Big boosts push the signal toward the limiter and can soften peaks; a −4 dB cut in the muddy band often achieves more than a +6 dB boost anywhere.',
      },
      {
        q: 'How is this different from the bass and treble boosters?',
        a: 'The boosters are single-purpose shelves with boost-only ranges. The equalizer gives you all three bands with cut and boost in one place — use the boosters when you know exactly which end you need.',
      },
      {
        q: 'What are the exact band frequencies?',
        a: 'Low shelf at 150 Hz, peaking at 1 kHz (unit width), high shelf at 3 kHz — the standard three-band layout. Bands at 0 dB are bypassed, so an untouched band never colors the sound.',
      },
      {
        q: 'Why do voices get strange when I cut the mids?',
        a: 'Speech intelligibility lives around 1 kHz. Cut the mid band gently (−3 to −6 dB) and listen to a sentence you know well — deep mid cuts make voices sound distant or hollow.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The editor is built for touch — drag to select, set the sliders, export. Works in current Chrome, Edge, Firefox and Safari, on desktop and mobile.',
      },
    ],
    sections: [
      {
        heading: 'Three bands, cut or boost',
        paragraphs: [
          'The equalizer is a low shelf at 150 Hz, a peak at 1 kHz, and a high shelf at 3 kHz. Each band runs about ±15 dB. A band left at 0 dB is bypassed, so it does not color the sound.',
          'Cutting is the safer move. A −4 dB cut in a muddy band often does more than a +6 dB boost somewhere else. Big boosts push the signal toward the limiter and can soften peaks.',
        ],
      },
      {
        heading: 'What each band is for',
        paragraphs: [
          'The three bands are the usual split, not a surgical EQ:',
        ],
        bullets: [
          '150 Hz: weight and mud. Cut if the file is boomy. The bass booster only lifts this region, up to +15 dB, and cannot cut.',
          '1 kHz: presence. Cutting the mids makes voices sound distant.',
          '3 kHz: air and edge. The treble booster only lifts above this point.',
        ],
      },
      {
        heading: 'When a single booster is enough',
        paragraphs: [
          'If you already know you only want more bass or more treble, the bass booster and the treble booster are the shorter pages. They do not cut.',
          'A low-pass or high-pass filter is a cutoff sweep, not these shelves. Use a filter when you want everything above or below a frequency gone, not a few decibels moved.',
        ],
      },
    ],
    related: ['bass-booster', 'treble-booster', 'low-pass-filter'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['bass', 'mid', 'treble'],
    },
  },
  {
    slug: 'low-pass-filter',
    cardLine: 'Keep only the warmth below the cutoff — great for lo-fi textures and mutes.',
    name: 'Low Pass Filter',
    shortName: 'Low Pass',
    icon: 'minus',
    category: 'effects',
    title: 'Low Pass Filter — Cut High Frequencies Online Free',
    description:
      'Roll off everything above a cutoff from 300 Hz to 20 kHz. A low-pass filter in your browser. Export MP3 or WAV. Free, no upload.',
    h1: 'Low Pass Filter — Cut High Frequencies in Audio, Online Free',
    hero: {
      src: '/low-pass-filter.svg',
      alt: 'Soften harsh highs in a recording',
      width: 32,
      height: 32,
    },
    subtitle: 'Sweep the cutoff from 20 kHz down to 300 Hz and keep only the frequencies you want.',
    intro:
      'A low-pass filter keeps the low end and rolls off everything above the cutoff — the honest way to remove hiss, sharp sibilance, squeaks and harsh digital edge. Unlike a noise remover, it never guesses what is noise: everything above your cutoff simply goes. Drop a file, sweep the cutoff down until the annoyance disappears, export. Everything runs in your browser: the file is never uploaded.',
    usesHeading: 'When to low-pass audio',
    uses: [
      'Remove constant hiss and air conditioning whine from voice recordings.',
      'Soften harsh, spitty cymbals or sibilance in a rough mix.',
      'Make audio sound muffled on purpose — behind a wall, phone-voice, lo-fi or meme.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Processing stays on your device.',
      },
      {
        name: 'Lower the cutoff',
        text: 'Sweep from 20 kHz down until the noise disappears — 8–12 kHz is a common resting point for voice.',
      },
      {
        name: 'Preview and export',
        text: 'Check that voices still sound natural, then export as MP3 or lossless WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The filter is a Web Audio low-pass biquad inside your browser tab — there is no upload step. You can go offline after the page loads and the tool keeps working.',
      },
      {
        q: 'Is a low-pass filter the same as noise removal?',
        a: 'No — and that is its strength. A noise remover separates noise from signal intelligently; a low pass blindly cuts everything above the cutoff. For constant, wideband hiss it is more reliable than any algorithm.',
      },
      {
        q: 'Why do voices sound muffled at low cutoffs?',
        a: 'Consonant clarity lives between 3 and 8 kHz. Below about 5 kHz speech starts to sound muffled; below 2 kHz it sounds like a telephone. For voice, try 8–12 kHz first.',
      },
      {
        q: 'How is this different from the high-pass filter?',
        a: 'Opposite directions: the high pass removes rumble, hum and low-end boom below your cutoff; the low pass removes hiss and harshness above it. Using both leaves only a chosen band.',
      },
      {
        q: 'What cutoff should I use for music?',
        a: 'For a soft lo-fi effect try 4–8 kHz. To clean sharp cymbals, 12–16 kHz usually suffices. Below 3 kHz music sounds distinctly muffled — trust your ears over numbers.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The editor is built for touch — drag to select, sweep the cutoff, export. Works in current Chrome, Edge, Firefox and Safari, on desktop and mobile.',
      },
    ],
    sections: [
      {
        heading: 'Everything above the cutoff goes',
        paragraphs: [
          'A low-pass filter rolls off what is above the cutoff. It is not a noise remover. It does not separate hiss from the signal. It turns down every frequency past the point you set, including consonants and cymbals if you set it too low.',
          'There is no resampling and no pitch change. The export still encodes once: MP3, or WAV if you want the filtered audio without another lossy generation.',
        ],
      },
      {
        heading: 'Cutoffs that match the job',
        paragraphs: [
          'The number is a starting point. Listen, because the same cutoff muffles one file and only softens another:',
        ],
        bullets: [
          'Voice: try 8–12 kHz first. Below about 5 kHz speech sounds muffled. Below 2 kHz it sounds like a telephone.',
          'A soft lo-fi music effect: 4–8 kHz.',
          'Sharp cymbals you only want tamed: 12–16 kHz. Below 3 kHz music sounds distinctly dull.',
        ],
      },
      {
        heading: 'The high-pass is the other direction',
        paragraphs: [
          'The high-pass filter removes rumble and low-end boom below its cutoff. This page removes hiss and harshness above its cutoff. Using both leaves a band in the middle.',
          'A few decibels of treble, rather than removing the top outright, is the treble booster or the equalizer. Those shelves do not sweep a hard cutoff.',
        ],
      },
    ],
    related: ['high-pass-filter', 'equalizer', 'voice-recorder'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['lpf'],
    },
  },
  {
    slug: 'high-pass-filter',
    cardLine: 'Strip rumble and hum below the cutoff for cleaner voice recordings.',
    name: 'High Pass Filter',
    shortName: 'High Pass',
    icon: 'plus',
    category: 'effects',
    title: 'High Pass Filter — Remove Wind, Rumble & Hum Online',
    description:
      'Cut rumble, hum, wind and low-end boom with a real high-pass filter, cutoff 20 Hz–5 kHz, in your browser. Export MP3 or WAV. Free, no upload.',
    h1: 'High Pass Filter — Remove Rumble from a Recording, Online Free',
    hero: {
      src: '/high-pass-filter.svg',
      alt: 'Cut wind and low hum out of a voice recording',
      width: 32,
      height: 32,
    },
    subtitle: 'Sweep the cutoff from 20 Hz up to 5 kHz and strip everything below it.',
    intro:
      'Rumble, traffic, handling noise, desk thumps — unwanted low end is baked into most real-world recordings. A high-pass filter keeps everything above your cutoff and rolls off everything below: the honest fix that never guesses. Drop a file, sweep the cutoff up until the rumble disappears and the voice stays full, export. Everything runs in your browser: the file is never uploaded.',
    usesHeading: 'When to high-pass audio',
    uses: [
      'Clean traffic rumble and desk thumps out of podcast and voice recordings.',
      'Remove wind and handling noise that survived a windy outdoor take.',
      'Tighten a mix by clearing sub-bass mud out of every non-bass track.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Processing stays on your device.',
      },
      {
        name: 'Raise the cutoff',
        text: 'Sweep up from 20 Hz until the rumble is gone — 80–120 Hz suits most voices.',
      },
      {
        name: 'Preview and export',
        text: 'Check the voice does not sound thin, then export as MP3 or lossless WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The filter is a Web Audio high-pass biquad inside your browser tab — there is no upload step. You can go offline after the page loads and the tool keeps working.',
      },
      {
        q: 'Will it remove hum from a bad cable?',
        a: 'Mains hum sits at 50 or 60 Hz, with harmonics above. A high pass at 80–120 Hz removes the fundamental and much of the ring — for stubborn harmonics, pair it with the low-pass filter to narrow the band further.',
      },
      {
        q: 'How high can the cutoff go before voices thin out?',
        a: 'Male voices keep their body down to about 100 Hz, female voices to about 150–200 Hz. Push past 300 Hz and speech starts sounding telephone-like — that can be a style, but listen first.',
      },
      {
        q: 'How is this different from the low-pass filter?',
        a: 'Opposite directions: the high pass removes low-frequency rumble below your cutoff; the low pass removes hiss and harshness above it. Chain them and only your chosen band survives.',
      },
      {
        q: 'Does filtering reduce the file quality?',
        a: 'No resampling or pitch change happens — the cutoff only decides which frequencies survive. Export re-encodes once, as always: MP3 at 128–320 kbps or bit-perfect WAV.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The editor is built for touch — drag to select, sweep the cutoff, export. Works in current Chrome, Edge, Firefox and Safari, on desktop and mobile.',
      },
    ],
    sections: [
      {
        heading: 'Everything below the cutoff goes',
        paragraphs: [
          'A high-pass filter rolls off what is below the cutoff: rumble, wind, handling thumps, and the low end of a boomy room. It does not change pitch, and it does not resample.',
          'Mains hum sits at 50 or 60 Hz, with harmonics above that. A high pass around 80–120 Hz removes the fundamental and much of the ring. Stubborn harmonics are still there. Pair it with the low-pass filter if you need to narrow the band further.',
        ],
      },
      {
        heading: 'How high before a voice thins out',
        paragraphs: [
          'Speech has body in the low mids. Push the cutoff too far and the voice turns thin:',
        ],
        bullets: [
          'Male voices keep their body down to about 100 Hz.',
          'Female voices down to about 150–200 Hz.',
          'Past 300 Hz, speech starts to sound like a telephone. That can be a style, so listen before you export.',
        ],
      },
      {
        heading: 'Not the bass booster, and not a cut shelf',
        paragraphs: [
          'The bass booster adds level below 150 Hz. This page removes level below a cutoff you sweep. They solve opposite problems.',
          'The equalizer can cut a few decibels at 150 Hz and leave the rest of the low end. Use that when the file is a bit muddy and you still want the weight. Use this page when the rumble should be gone.',
        ],
      },
    ],
    related: ['low-pass-filter', 'voice-recorder', 'mp3-editor'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['hpf'],
    },
  },
  {
    slug: 'waveform-generator',
    cardLine: 'Turn any track into a shareable waveform picture with your own colors.',
    name: 'Waveform Generator',
    shortName: 'Waveform',
    icon: 'image',
    category: 'effects',
    title: 'Audio Waveform Generator — Waveform Image Online Free',
    description:
      'Turn any song or recording into a clean waveform image. Pick colors, style and size, download a hi-res PNG — free in your browser, no upload.',
    h1: 'Audio Waveform Generator — Make a Waveform Picture, Online Free',
    hero: {
      src: '/waveform-generator.svg',
      alt: 'Save a song’s waveform as a PNG',
      width: 32,
      height: 32,
    },
    subtitle: 'A waveform picture of your audio — colors, size and a transparent PNG, drawn on your device.',
    intro:
      'Drop a song, a voice memo or a podcast and get a waveform image you can use as a cover, a video background or a social post. Pick mirrored bars or a filled shape, set the colors, and download a PNG at video, square or banner size. The picture is drawn in your browser from the file you opened — nothing is uploaded.',
    usesHeading: 'What people make with it',
    uses: [
      'A podcast or song cover with a waveform instead of a blank square.',
      'A transparent PNG to lay over video or a thumbnail.',
      'A wide banner for a site header or a video end card.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Decoding stays on your device.',
      },
      {
        name: 'Set the look',
        text: 'Pick a template, or set the style and colors yourself. Set the start and end if you only want part of the file. Presets cover 1920×1080, square, social and banner sizes.',
      },
      {
        name: 'Download the PNG',
        text: 'The preview matches the export. Preset sizes download at double resolution so the image stays sharp.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The browser decodes the file and draws the picture on a canvas. There is no upload step. After the page loads you can go offline and it still works.',
      },
      {
        q: 'Will the PNG look sharp?',
        a: 'Preset sizes export at twice the listed pixels — a 1920×1080 cover downloads as 3840×2160. PNG is lossless. Custom sizes above about two million pixels export at 1× so the tab does not run out of memory.',
      },
      {
        q: 'Can I edit the audio here?',
        a: 'No. This page only draws a picture. To cut or trim the file, use the audio trimmer, then come back if you still want the image.',
      },
      {
        q: 'Is this the same as a spectrogram?',
        a: 'No. A waveform shows loudness over time — the shape you see on a music player. A spectrogram shows which frequencies are present. For that picture, use the spectrogram generator.',
      },
      {
        q: 'Can I get a transparent background?',
        a: 'Yes. Leave Transparent background on and the PNG has no backdrop, so you can place it on video or another image. Turn it off to paint a solid background color.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The controls stack on a narrow screen and the download button stays within reach. It works in current Chrome, Edge, Firefox and Safari, on desktop and mobile.',
      },
    ],
    sections: [
      {
        heading: 'A picture of loudness, not an edit',
        paragraphs: [
          'The waveform generator draws loudness over time: mirrored bars or a filled shape, in the colors you pick. The download is a PNG. Preset sizes export at twice the listed pixels, so a 1920×1080 cover comes down as 3840×2160.',
          'Custom sizes above about two million pixels export at 1× so the tab does not run out of memory. PNG is lossless. This page does not cut, fade, or boost the audio.',
        ],
      },
      {
        heading: 'Shapes people download',
        paragraphs: [
          'Pick the frame for where the picture will sit:',
        ],
        bullets: [
          'Video size for a background or an end card.',
          'Square for a podcast or song cover.',
          'A wide banner for a header. Leave the background transparent if you will lay the PNG over video or another image.',
        ],
      },
      {
        heading: 'It is not a spectrogram',
        paragraphs: [
          'A waveform is the shape a music player draws. A spectrogram shows which frequencies are present. For that picture, use the spectrogram generator.',
          'To cut the file first, use the audio trimmer, then come back for the image. You cannot play the PNG back into the song. Putting a picture into a WAV is image to audio, the other direction.',
        ],
      },
    ],
    related: ['spectrogram-generator', 'image-to-audio', 'audio-trimmer'],
    editor: {
      visualizer: 'waveform',
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Download PNG',
    },
  },
  {
    slug: 'spectrogram-generator',
    cardLine: 'See the frequencies inside a song, a recording or a bird call.',
    name: 'Spectrogram Generator',
    shortName: 'Spectrogram',
    icon: 'waveform',
    category: 'effects',
    title: 'Spectrogram Generator — Turn Audio into a Spectrogram PNG',
    description:
      'Generate a spectrogram from any audio file and download it as PNG. Log or linear frequency axis, colormaps, dB control — free, nothing uploaded.',
    h1: 'Audio Spectrogram — See the Frequencies in a Recording, Online Free',
    hero: {
      src: '/spectrogram-generator.svg',
      alt: 'Download a frequency picture of a song as a PNG',
      width: 32,
      height: 32,
    },
    subtitle: 'See the frequencies in a song or a recording, then download the picture — drawn on your device.',
    intro:
      'A spectrogram shows which frequencies are present as time moves across the picture: speech, bass, and anything drawn into the sound. Drop a file, pick a log or linear axis, and download a PNG. The browser computes the FFT locally — nothing is uploaded.',
    usesHeading: 'What people look for in it',
    uses: [
      'Check where the bass, voice and hiss sit before you EQ a track.',
      'Find a picture or a word someone hid in the frequencies.',
      'Export a still of a song for a post, a lesson or a lab note.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Decoding stays on your device.',
      },
      {
        name: 'Set the view',
        text: 'Log frequency is the usual music view. Narrow the top frequency, and move the dB floor and ceiling if a hidden picture is too dim or too bright. Limit the time range if you only want a section.',
      },
      {
        name: 'Download the PNG',
        text: 'Preset sizes download at double resolution. The picture is not audio — you cannot play the PNG back into the song.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The browser decodes the file and runs an FFT on it in this tab. There is no upload. After the page loads you can go offline and it still works.',
      },
      {
        q: 'What do the colors mean?',
        a: 'Each column is one moment. Height is frequency, high notes at the top. Brighter color means more energy. Viridis, inferno and gray are the same data with a different scale. The dB floor and ceiling decide what counts as quiet and loud.',
      },
      {
        q: 'Can I turn the picture back into audio?',
        a: 'No. The PNG is a drawing of levels, not the waveform. To hear the file, keep the original. To put a picture into audio, use Image to Audio, then open that WAV here.',
      },
      {
        q: 'How is this different from the waveform generator?',
        a: 'A waveform is loudness over time — the shape on a music player. A spectrogram is which frequencies are there. Use the waveform page for a cover image. Use this page to inspect or reveal frequencies.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The controls stack on a narrow screen and the download stays in reach. It works in current Chrome, Edge, Firefox and Safari, on desktop and mobile. A long file takes a moment because each column is an FFT.',
      },
      {
        q: 'Why do some songs hide a picture?',
        a: 'A few tracks, famously Aphex Twin, draw an image by putting energy on chosen frequencies. Raise the dB ceiling if the picture is faint, and keep the log axis. This page only shows it. It does not create one — that is Image to Audio.',
      },
    ],
    sections: [
      {
        heading: 'Frequency over time, as a PNG',
        paragraphs: [
          'Each column is one moment. Height is frequency, high notes at the top. Brighter color means more energy. Viridis, inferno, and gray are the same data with a different scale. The dB floor and ceiling decide what counts as quiet and loud.',
          'The picture is an FFT of the file, drawn in this tab. It is not audio. You cannot play the PNG back into the song.',
        ],
      },
      {
        heading: 'How to read a hidden picture',
        paragraphs: [
          'A few tracks draw an image by putting energy on chosen frequencies. This page can show that. It does not create one:',
        ],
        bullets: [
          'Keep the log axis for the usual music view. It stretches the low end.',
          'Raise the dB ceiling if a hidden picture is faint.',
          'Shorten the time range if you only want one span of the file.',
        ],
      },
      {
        heading: 'Waveform, and the reverse trick',
        paragraphs: [
          'The waveform generator is loudness over time, the shape for a cover image. This page is which frequencies are there.',
          'To build a WAV so a spectrogram shows your picture or a short line of text, use image to audio, then open that WAV here. Log frequency, ceiling around −20 dB. The shape sits between about 400 Hz and 12 kHz. This page only displays.',
        ],
      },
    ],
    related: ['waveform-generator', 'image-to-audio', 'bass-booster'],
    editor: {
      visualizer: 'spectrogram',
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Download PNG',
    },
  },
  {
    slug: 'image-to-audio',
    cardLine: 'Hide a picture or a line of text inside a WAV spectrogram.',
    name: 'Image to Audio',
    shortName: 'Image to Audio',
    icon: 'image',
    category: 'effects',
    title: 'Image to Audio Spectrogram Maker — Paint a WAV Online',
    description:
      'Turn a picture or a short line of text into a WAV a spectrogram can show. Free in your browser — the file is written on your device.',
    h1: 'Image to Audio — Turn a Picture into Sound, Online Free',
    hero: {
      src: '/image-to-audio.svg',
      alt: 'Turn a spectrogram image back into a WAV',
      width: 32,
      height: 32,
    },
    subtitle: 'Paint a picture or a line of text into a WAV. A spectrogram shows it back.',
    intro:
      'Type a short line or drop an image. This page writes that shape into the frequencies of a WAV, the same trick as a picture hidden in a song. It is not a song and it is not speech. Open the WAV in the spectrogram generator to see it. Nothing is uploaded.',
    usesHeading: 'What people make with it',
    uses: [
      'Hide a spectrogram message — a name or one line only a spectrogram shows.',
      'Turn a simple logo or drawing into spectrogram art.',
      'Make a file you can drop straight into the spectrogram generator.',
    ],
    howTo: [
      {
        name: 'Type or drop',
        text: 'Type up to 32 characters, or drop a PNG, JPG or WebP. The preview is the picture that will be written, bright pixels as louder frequencies.',
      },
      {
        name: 'Download the WAV',
        text: 'You get a 44.1 kHz 16-bit WAV. It sounds like chirps and noise, not like the picture spoken aloud.',
      },
      {
        name: 'Look at the spectrum',
        text: 'Open the WAV in the spectrogram generator. Log frequency, ceiling around −20 dB. The shape sits between about 400 Hz and 12 kHz.',
      },
    ],
    faqs: [
      {
        q: 'Is my image uploaded?',
        a: 'No. The browser draws the text or the image and builds the WAV in this tab. There is no upload step. After the page loads you can go offline and it still works.',
      },
      {
        q: 'What file do I get?',
        a: 'A mono WAV at 44.1 kHz, 16-bit PCM, a few seconds long. It is not MP3. The picture lives in the frequencies, so converting it to a low-bitrate MP3 can smear the shape.',
      },
      {
        q: 'Will it sound like the picture or the words?',
        a: 'No. There is no speech synthesis and no music generator. You hear tones stacked where the pixels are bright. To read it, look at a spectrogram.',
      },
      {
        q: 'How is this different from the spectrogram generator?',
        a: 'The spectrogram generator draws a picture of audio you already have. This page does the reverse: it builds audio so that a spectrogram shows your picture or your line of text. The waveform generator only shows loudness, so the hidden shape will not be obvious there.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. Type, pick a photo, download. It works in current Chrome, Edge, Firefox and Safari, on desktop and mobile. A very detailed photo is shrunk so the file stays short.',
      },
      {
        q: 'Is this a secret code?',
        a: 'No. Anyone who opens a spectrogram of the WAV can see the picture. It is a visible drawing in the sound, not encryption.',
      },
    ],
    sections: [
      {
        heading: 'A picture written into frequencies',
        paragraphs: [
          'Type up to 32 characters, or drop a PNG, JPG, or WebP. The page writes that shape into the frequencies of a mono WAV at 44.1 kHz, 16-bit, a few seconds long. Bright pixels become louder frequencies.',
          'It is not a song and it is not speech. You hear chirps and noise, not the words spoken aloud. A very detailed photo is shrunk so the file stays short.',
        ],
      },
      {
        heading: 'How to see what you wrote',
        paragraphs: [
          'The shape is invisible on a normal waveform. Open the WAV in the spectrogram generator:',
        ],
        bullets: [
          'Log frequency, ceiling around −20 dB.',
          'The drawing sits between about 400 Hz and 12 kHz.',
          'Keep the WAV. A low-bitrate MP3 can smear the shape.',
        ],
      },
      {
        heading: 'Not a code, and not the spectrogram page',
        paragraphs: [
          'Anyone who opens a spectrogram of the WAV can see the picture. It is a drawing in the sound, not encryption.',
          'The spectrogram generator draws a picture of audio you already have. This page builds audio so that picture shows your image or your line. The waveform generator only shows loudness, so the hidden shape will not be obvious there.',
        ],
      },
    ],
    related: ['spectrogram-generator', 'waveform-generator', 'voice-recorder'],
    editor: {
      paint: true,
      dropHint: 'Or drop an image',
      exportLabel: 'Download WAV',
    },
  },
  {
    slug: 'bass-booster',
    cardLine: 'Add weight and punch with up to +15 dB of low shelf below 150 Hz.',
    name: 'Bass Booster',
    shortName: 'Bass Boost',
    icon: 'volume',
    category: 'effects',
    title: 'Bass Booster — Add Deep Bass to Music Online Free',
    description:
      'Add up to +15 dB of deep bass below 150 Hz. A low-shelf, not a louder-everything trick. Free in your browser, nothing uploaded.',
    h1: 'Bass Booster — Add Deep Bass to a Song, Online Free',
    hero: {
      src: '/bass-booster.svg',
      alt: 'Add low end to an MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'A real low-shelf EQ: up to +15 dB below 150 Hz, preview and export — nothing leaves your device.',
    intro:
      'Thin, weak low end is the most common reason a track sounds small. The bass booster applies a true low-shelf EQ — up to +15 dB below 150 Hz, the same move a mastering engineer makes — not a loudness trick that just turns everything up. Drop a file, raise the slider until the low end sits right, and export. Everything runs in your browser: the file is never uploaded.',
    usesHeading: 'When to boost the bass',
    uses: [
      'Give phone-recorded voice memos and interviews some body so they stop sounding thin.',
      'Bring drums and basslines forward in a track that is all midrange.',
      'Add weight to a podcast intro or jingle without touching the voices.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Processing stays on your device.',
      },
      {
        name: 'Raise the bass slider',
        text: 'Up to +15 dB below 150 Hz. +3–6 dB usually fixes thin audio; go higher for a deliberate low-end effect.',
      },
      {
        name: 'Preview and export',
        text: 'Listen at normal volume — heavy bass can hide vocals. Export as MP3 or lossless WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The boost is a Web Audio low-shelf filter inside your browser tab — there is no upload step. You can go offline after the page loads and the tool keeps working.',
      },
      {
        q: 'Will boosting the bass reduce quality?',
        a: 'No resampling or pitch change happens. If the boost pushes the low end past full scale, a limiter catches the peaks so the export never clips harshly — very hot settings can slightly soften those peaks.',
      },
      {
        q: "Can it add sub-bass that isn't there?",
        a: 'No — a shelf only amplifies low frequencies the file already contains. Phone speakers cannot reproduce deep bass; to judge the result, use headphones or real speakers.',
      },
      {
        q: 'How is this different from the volume booster?',
        a: 'The volume booster raises everything equally; the bass booster lifts only the low end below 150 Hz. If the whole file is too quiet, use the volume booster; if it sounds thin, boost the bass here.',
      },
      {
        q: 'How much bass should I add?',
        a: '+3–6 dB fixes thin-sounding recordings. Beyond +9 dB you are making a stylistic effect — check that vocals and podcast dialogue stay intelligible before exporting.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The editor is built for touch — drag to select, set the slider, export. Works in current Chrome, Edge, Firefox and Safari, on desktop and mobile.',
      },
    ],
    sections: [
      {
        heading: 'What the bass control actually turns up',
        paragraphs: [
          'This is a low-shelf filter. It raises frequencies below 150 Hz by the amount you set, up to +15 dB. Mids and highs stay where they were. It is not a volume knob.',
          'A shelf can only amplify bass the file already has. A phone recording of a voice has very little energy under 80 Hz, so a big boost will not produce a sub drop. Judge the result on headphones or real speakers. A phone speaker cannot play that range, so a heavy boost can sound like nothing, or like mud.',
        ],
      },
      {
        heading: 'How much bass to add',
        paragraphs: [
          'The useful range is small. Past it, you are making an effect.',
        ],
        bullets: [
          '+3 to +6 dB: thin voice memos, interviews, and tracks that are all midrange.',
          '+6 to +9 dB: drums and bass that need to sit forward. Check that voices still cut through.',
          '+9 to +15 dB: a deliberate low-end effect. Speech often becomes hard to follow here.',
          'If the low end crackles, the shelf has run out of headroom. Back the slider off.',
        ],
      },
      {
        heading: 'Bass boost, volume boost, and the equalizer',
        paragraphs: [
          'Pick the page that matches the problem.',
        ],
        bullets: [
          'Bass booster, this page: only the low end under 150 Hz. The file sounds thin, not quiet.',
          'Volume booster: the whole file, up to 4×, with a limiter. The file is quiet at every frequency.',
          'Equalizer: lows, mids, and highs as separate shelves. Use it when 150 Hz is the wrong cutoff.',
        ],
      },
      {
        heading: 'Where a bass boost goes wrong',
        paragraphs: [
          'Heavy bass hides speech. Preview at a normal listening level, not with the speakers already turned down, or you will save something that booms in a car and buries the voice.',
          'Export WAV if you will keep editing. MP3 at 320 kbps is the right choice when the file is finished. The filter does not resample or change pitch. If the boost would push peaks over full scale, a limiter softens those peaks so the export does not hard-clip.',
        ],
      },
    ],
    related: ['spectrogram-generator', 'equalizer', 'treble-booster'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['bass'],
    },
  },
  {
    slug: 'fade-audio',
    cardLine: 'Smooth song endings and podcast intros with exact fade in/out times.',
    name: 'Audio Fade In / Fade Out',
    shortName: 'Fade Audio',
    icon: 'trending-up',
    category: 'effects',
    title: 'Fade Out Music — Audio Fade In / Fade Out Online Free',
    description:
      'Add a smooth fade in and fade out to any song or recording right in your browser. Set the length to 0.1 s, export MP3 or WAV. Free, no upload.',
    h1: 'Audio Fade — Fade Music Out, Online Free',
    hero: {
      src: '/fade-audio.svg',
      alt: 'Fade a track in and fade it out',
      width: 32,
      height: 32,
    },
    subtitle: 'Smooth edges in seconds: set both fade lengths to a tenth of a second, preview, export — nothing leaves your device.',
    intro:
      'A fade in eases a track in from silence; a fade out eases it back out — the difference between an abrupt cut and an ending that sounds finished. Load a file here, set each fade length to a tenth of a second, and listen before you export. Everything runs in your browser: the file is never uploaded.',
    usesHeading: 'When a fade is the fix',
    uses: [
      'End a mixtape, DJ set or compilation track cleanly instead of cutting it mid-note.',
      'Ease a podcast or voice memo in so the first word does not startle the listener.',
      'Soften a loop or sample so it repeats without a click at the seam.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. Processing stays on your device.',
      },
      {
        name: 'Set the fade lengths',
        text: 'Open the Adjust drawer and set Fade In and Fade Out — 1–3 seconds is natural for songs, 0.2–0.5 for loops.',
      },
      {
        name: 'Preview and export',
        text: 'Play the start and end to hear the fades, then export as MP3 or lossless WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The fades are rendered with the Web Audio API inside your browser tab — there is no upload step. You can go offline after the page loads and the tool keeps working.',
      },
      {
        q: 'Does fading change the audio quality?',
        a: 'No. A fade only reshapes volume over time — no reverb, no pitch change. The export re-encodes once: MP3 at 128–320 kbps (320 is the default) or bit-perfect WAV. Your source file is never modified.',
      },
      {
        q: 'Can it crossfade between two songs?',
        a: 'Not here. This page fades one file in and out. Blending the end of one track into the start of another is a crossfade join, and the audio joiner does that job. Repeating one clip, with a short crossfade at each join, is the audio looper.',
      },
      {
        q: 'How is this different from the volume booster?',
        a: 'The volume booster lifts the whole file by a constant amount; a fade shapes volume over time — quiet at the edges, untouched in the middle. Use the fade for endings, the booster for overall loudness.',
      },
      {
        q: 'How long should a fade out be?',
        a: 'For songs, 1–3 seconds usually sounds natural; live recordings can take 4–5. For loops and ringtones, keep it 0.2–0.5 seconds so the track keeps its attack. There is no single right answer — preview and trust your ears.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The editor is built for touch — drag to select, set the sliders, export. Works in current Chrome, Edge, Firefox and Safari, on desktop and mobile.',
      },
    ],
    sections: [
      {
        heading: 'The edges get quiet, the middle stays',
        paragraphs: [
          'Fade audio shapes volume over time on one file: a fade in at the start, a fade out at the end, or both. The middle is untouched. There is no reverb and no pitch change.',
          'For songs, 1–3 seconds usually sounds natural. Live recordings can take 4–5 seconds. Loops and ringtones want 0.2–0.5 seconds so the attack stays. Preview the start and the end before you export.',
        ],
      },
      {
        heading: 'What a fade is for',
        paragraphs: [
          'Use it when the cut itself is already done and the edge clicks or stops dead:',
        ],
        bullets: [
          'A ringtone or a loop that should not pop when it repeats.',
          'The end of a song or a voice memo that stops too hard.',
          'The start of a recording that begins at full level.',
        ],
      },
      {
        heading: 'Not a crossfade, and not a volume boost',
        paragraphs: [
          'Blending the end of one track into the start of another is a crossfade, and the audio joiner does that. This page fades a single file in and out.',
          'The volume booster lifts the whole file by a constant amount. A fade is quiet at the edges and full in the middle. Export is MP3, 320 kbps by default, or WAV. The file you dropped is not modified.',
        ],
      },
    ],
    related: ['multi-track-audio-editor', 'audio-joiner', 'audio-looper'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'pitch-changer',
    cardLine: 'Shift a song up or down in semitones for covers and mashups — same length.',
    name: 'Pitch Changer',
    shortName: 'Pitch Changer',
    icon: 'clock-counter-clockwise',
    category: 'effects',
    title: 'Pitch Changer — Change Audio Pitch without Changing Speed',
    description:
      'Shift the pitch of any song or voice by up to 12 semitones without changing its length. Free, in your browser, nothing uploaded.',
    h1: 'Pitch Changer — Change the Pitch of a Song, Online Free',
    hero: {
      src: '/pitch-changer.svg',
      alt: 'Move the pitch of an MP3 while the speed stays the same',
      width: 32,
      height: 32,
    },
    subtitle: 'Move the pitch up or down by semitones — the length of the file stays the same.',
    intro:
      'Drop a song or a voice recording and drag the pitch slider. The key changes and the timing stays put. Unlike the speed changer, this does not make the file shorter or longer. The shift runs on your device.',
    usesHeading: 'Pitch moves, the timeline does not',
    uses: [
      'Shift a song into an easier key for singing along. The file stays the same length.',
      'Move a voice a few semitones for a character, without speeding the line up.',
      'The faster-and-higher effect is the speed changer. This page does not shorten the audio.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Add an MP3, WAV, M4A or other audio file. It stays on your device.',
      },
      {
        name: 'Set the pitch',
        text: 'Drag from −12 to +12 semitones. +12 is one octave up, −12 is one octave down. 0 leaves the file as it is.',
      },
      {
        name: 'Preview and export',
        text: 'Play to hear the new key at the original length, then save as MP3 or WAV.',
      },
    ],
    faqs: [
      {
        q: 'Does this change how long the file is?',
        a: 'No. The pitch slider moves the key and leaves the duration alone. To make a file faster or slower — which also moves the pitch — use the speed changer.',
      },
      {
        q: 'How far can I shift the pitch?',
        a: 'From −12 to +12 semitones, in steps of 1. That is one octave in either direction. Speech and a single instrument stay usable further than a dense mix does.',
      },
      {
        q: 'Will a big shift sound natural?',
        a: 'Small moves, a few semitones, stay close to the original. Shifts past about 7 semitones get thinner and more metallic. That is the limit of this pitch shifter, not a setting you can turn off.',
      },
      {
        q: 'Is this the same as changing the speed?',
        a: 'No. The speed changer plays the file faster or slower, so the pitch rides along and the length changes. This page only moves the pitch. The tempo changer changes the length and the pitch stays, from 0.75× to 1.25×.',
      },
      {
        q: 'Is the file uploaded?',
        a: 'No. The shift is calculated in your browser and the export is saved to your device.',
      },
      {
        q: 'Can I change a song’s pitch to avoid copyright?',
        a: 'No — a pitch shift does not remove the rights attached to a recording. A pitched-up upload can still be claimed or taken down. Change the key to suit your voice for singing or karaoke, and publish music you have the rights to.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes. Drag the waveform with a finger. Current Chrome, Edge, Firefox, and Safari on iPhone and Android decode the usual formats. A long file uses more memory, so a desktop is steadier past roughly an hour.',
      },
    ],
    sections: [
      {
        heading: 'The key moves, the length stays',
        paragraphs: [
          'The pitch changer shifts the key from −12 to +12 semitones, one step at a time. That is one octave either way. The file stays the same length.',
          'Speech and a single instrument stay usable further than a dense mix. A large shift sounds unnatural. It is not a copyright workaround: the recording is still the same recording.',
        ],
      },
      {
        heading: 'When to use the slider',
        paragraphs: [
          'The length staying put is the whole point:',
        ],
        bullets: [
          'A karaoke track moved into a key you can sing.',
          'A voice nudged a semitone or two so it sits with another take.',
          'A sound-design shift where the timing of the clip must not change.',
        ],
      },
      {
        heading: 'Speed is the other control',
        paragraphs: [
          'The speed changer runs from 0.5× to 2× and moves the pitch with the tempo, the way a record does. 2× is about an octave up and half the length. This page does not do that.',
          'Slowed + reverb also sinks the pitch by slowing the file, and it adds a tail. If you want the nightcore or slowed sound, that is the page. If you want the same duration and a new key, stay here.',
        ],
      },
    ],
    related: ['change-audio-speed', 'key-bpm-finder', 'tempo-changer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['pitch'],
    },
  },
  {
    slug: 'tempo-changer',
    cardLine: 'Change the length from 0.75× to 1.25×. The pitch stays.',
    name: 'Tempo Changer',
    shortName: 'Tempo',
    icon: 'clock-counter-clockwise',
    category: 'effects',
    title: 'Tempo Changer — Keep the Pitch Online Free',
    description:
      'Change the length from 0.75× to 1.25× in steps of 0.01. The pitch stays. 1× does not run the stretch. Dense harmony can sound thin. Nothing is uploaded.',
    h1: 'Tempo changer, the length moves and the pitch stays',
    hero: {
      src: '/tempo-changer.svg',
      alt: 'Change how long a file is while the pitch stays',
      width: 32,
      height: 32,
    },
    subtitle: '0.75× to 1.25×, in steps of 0.01. The key stays put.',
    intro:
      'Drop a file and drag the speed. The file gets shorter or longer, and the pitch is shifted back to where it was. The slider stops at 0.75× and 1.25×. 1× leaves the samples alone and does not run the stretch. Dense harmony can sound thin. That is the limit of this shifter. Nothing is uploaded.',
    usesHeading: 'A new length, the same key',
    uses: [
      'Fit a song into a slightly shorter or longer slot without moving the key.',
      'Stretch a voice memo a little. The voice stays at the same pitch.',
      '1× exports the file without the stretch.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Add an MP3, WAV, M4A, or other audio file. It stays on your device.',
      },
      {
        name: 'Set the tempo',
        text: 'Drag from 0.75× to 1.25×. Each step is 0.01. 1.00× is the file you dropped.',
      },
      {
        name: 'Preview and export',
        text: 'Play to hear the new length at the original pitch, then save as MP3 or WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is the file uploaded?',
        a: 'No. The browser stretches the file in memory. After the page loads, you can go offline and still export a file you drop.',
      },
      {
        q: 'Will it sound the same, just longer or shorter?',
        a: 'A single note stays close. Dense harmony can sound thin. The same shifter, past about 7 semitones, turns metallic, and this slider stays inside about 5.',
      },
      {
        q: 'Can I go slower than 0.75× or faster than 1.25×?',
        a: 'No. The slider stops there. 0.5× and 2× are the speed page, and the pitch moves with the speed on that page. 1× on this page does not run the stretch.',
      },
      {
        q: 'How is this different from the speed page and the pitch changer?',
        a: 'The speed page changes the length and the pitch moves with it, from 0.5× to 2×. The pitch changer moves the pitch and keeps the length. This page changes the length and the pitch stays.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The speed slider and the export button take a tap in current Chrome, Edge, Firefox, and Safari.',
      },
    ],
    sections: [
      {
        heading: 'Length changes, pitch stays',
        paragraphs: [
          'The page first resamples the file, so the length and the pitch move together. It then shifts the pitch back by the same ratio. 0.8× becomes 1.25 times as long, and the key returns to where it started.',
          'The slider runs from 0.75× to 1.25× in steps of 0.01. There is no control outside that range. At 1× the stretch does not run, and the export stays with the samples you dropped.',
        ],
      },
      {
        heading: 'Where the limit shows',
        paragraphs: ['Dense harmony can sound thin. A lone voice or a single note stays closer.'],
        bullets: [
          'The larger step on this slider is about 5 semitones. Past about 7, this shifter turns metallic.',
          'A chord stack is where the thin sound shows up first.',
          '1× is the file you dropped. The stretch is skipped.',
        ],
      },
      {
        heading: 'The speed page and the pitch changer',
        paragraphs: [
          'The speed page runs from 0.5× to 2× and the pitch moves with the tempo. Use it when that pitch change is the point.',
          'The pitch changer moves the key and keeps the length, up to 12 semitones. This page does the opposite: the length moves, and the key stays.',
        ],
      },
    ],
    related: ['change-audio-speed', 'pitch-changer', 'key-bpm-finder'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['tempo'],
    },
  },
  {
    slug: 'm4a-to-mp3',
    cardLine: 'Convert iPhone voice memos and AAC downloads to play-anywhere MP3.',
    name: 'M4A to MP3 Converter',
    shortName: 'M4A to MP3',
    icon: 'note',
    category: 'merge',
    title: 'M4A to MP3 Converter — Convert M4A & AAC Online Free',
    description:
      'Convert M4A and AAC audio to MP3 in your browser. Free, no signup, nothing uploaded. Pick 128, 192 or 320 kbps.',
    h1: 'M4A to MP3 Converter — Convert M4A to MP3, Online Free',
    hero: {
      src: '/m4a-to-mp3.svg',
      alt: 'Convert an iPhone voice memo or an AAC file to MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Turn M4A and AAC files into MP3 — in your browser, nothing uploaded.',
    intro:
      'Voice memos and AAC recordings are often M4A. Drop the file, pick a bitrate, and your browser decodes it and saves an MP3. The audio never goes to a server.',
    usesHeading: 'M4A files people convert',
    uses: [
      'Turn an iPhone voice memo or an AAC download into an MP3 more players accept.',
      'Use 128 kbps for speech and 320 kbps for music.',
      'The M4A stays on this device. Nothing is uploaded to finish the conversion.',
    ],
    howTo: [
      {
        name: 'Drop your M4A',
        text: 'Drag an .m4a or .aac file onto the page, or click to browse. A video MP4 belongs on the MP4 to MP3 page instead.',
      },
      {
        name: 'Pick a bitrate',
        text: '320 kbps for music, 192 kbps for everyday listening, 128 kbps for voice memos.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. The file is decoded and encoded on your device, then downloaded.',
      },
    ],
    faqs: [
      {
        q: 'Can I convert M4A to MP3 on iPhone, Android or Mac?',
        a: 'Yes — the converter runs in your browser, so iPhone, Android, Mac, Windows or Linux all work the same way: open the page and drop the file. Inside the M4A you need AAC audio, which is what voice memos and most AAC downloads use. Apple Lossless (ALAC) stored in an M4A often will not decode in a browser — convert that file to AAC or WAV first, then bring it here.',
      },
      {
        q: 'What about MP4 video?',
        a: 'Use the MP4 to MP3 converter for video files. This page is for audio: M4A and AAC.',
      },
      {
        q: 'Will converting to MP3 lose quality?',
        a: 'MP3 is lossy. At 320 kbps the difference from the AAC original is small for almost everyone. Keep the M4A if you need the original file untouched.',
      },
      {
        q: 'Are tags and artwork kept?',
        a: 'No. The MP3 is written without metadata, same as the WAV converter. Title, artist and cover art are not copied.',
      },
      {
        q: 'Does the file get uploaded?',
        a: 'No. Your browser decodes the M4A and encodes the MP3 locally. The audio stays on your device.',
      },
    ],
    sections: [
      {
        heading: 'Voice memos and AAC, not a video',
        paragraphs: [
          'This page converts M4A and AAC audio into MP3. Voice memos and most AAC downloads are AAC inside the M4A, and those decode in the browser. Apple Lossless (ALAC) stored in an M4A often will not. Convert that file to AAC or WAV first, then bring it here.',
          'An MP4 video belongs on MP4 to MP3. That page takes the soundtrack off the picture. This page is audio only.',
        ],
      },
      {
        heading: 'What the MP3 keeps',
        paragraphs: [
          'MP3 is lossy. The menu is the usual bitrate choice:',
        ],
        bullets: [
          '320 kbps when the memo or the song should stay close to the AAC.',
          '192 kbps for speech you will still listen to.',
          '128 kbps when the file mainly needs to be small enough to send.',
        ],
      },
      {
        heading: 'Tags are not copied',
        paragraphs: [
          'Title, artist, and cover art are not carried over. The MP3 is written without metadata. Put them back with the MP3 tag editor if the player needs a name.',
          'Keep the M4A if you still need the original. The conversion does not upload the file. Trim or cut after you have the MP3, on the trimmer or the cutter, if the memo has silence at the ends.',
        ],
      },
    ],
    related: ['wav-to-mp3', 'ogg-to-mp3', 'audio-trimmer'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop an M4A or AAC file, or click to browse',
      converter: true,
      exportLabel: 'Convert to MP3',
      accept: 'audio/mp4,audio/x-m4a,audio/aac,.m4a,.aac,.mp4',
    },
  },
  {
    slug: 'ogg-to-mp3',
    cardLine: 'Make OGG files from game clips or Linux recordings play in any app.',
    name: 'OGG to MP3 Converter',
    shortName: 'OGG to MP3',
    icon: 'file',
    category: 'merge',
    title: 'OGG to MP3 Converter — Vorbis & Opus in OGG Online Free',
    description:
      'Convert OGG files to MP3 in your browser — no file size limit. Free, no signup, nothing uploaded. Vorbis or Opus inside OGG, at 128, 192 or 320 kbps.',
    h1: 'OGG to MP3 Converter — Convert OGG to MP3, Online Free',
    hero: {
      src: '/ogg-to-mp3.svg',
      alt: 'Convert Vorbis or Opus audio inside an OGG file to MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Turn OGG audio into MP3 — in your browser, nothing uploaded.',
    intro:
      'OGG is a container, usually Vorbis, sometimes Opus. Drop the file, pick a bitrate, and your browser decodes it and saves an MP3. The audio never goes to a server.',
    usesHeading: 'OGG files people convert',
    uses: [
      'Open a game rip, a download, or a browser recording that arrived as OGG.',
      'Save an MP3 for a phone, a car, or an editor that does not take OGG.',
      'Leave speech at 128 kbps and music higher. Retrying is local and free.',
    ],
    howTo: [
      {
        name: 'Drop your OGG',
        text: 'Drag an .ogg or .oga file onto the page, or click to browse.',
      },
      {
        name: 'Pick a bitrate',
        text: '320 kbps for music, 192 kbps for everyday listening, 128 kbps for voice.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. Decoding and encoding happen on your device, then the MP3 downloads.',
      },
    ],
    faqs: [
      {
        q: 'What is an OGG file?',
        a: 'OGG is a container. Music files in it usually use Vorbis. Some voice files use Opus. This page converts either one when your browser can decode it.',
      },
      {
        q: 'Which browsers can convert OGG?',
        a: 'Chrome and Firefox decode Vorbis and Opus in OGG. Safari decodes Opus and often refuses Vorbis. If the file will not play in a plain browser tab, this page cannot convert it either.',
      },
      {
        q: 'Will converting OGG to MP3 lose quality?',
        a: 'MP3 is lossy. At 320 kbps the difference is small for almost everyone. Keep the OGG if you need the original file.',
      },
      {
        q: 'Are tags and artwork kept?',
        a: 'No. The MP3 is written without metadata. Title, artist and cover art are not copied.',
      },
      {
        q: 'Does the file get uploaded?',
        a: 'No. Your browser decodes the OGG and encodes the MP3 locally. The audio stays on your device.',
      },
    ],
    sections: [
      {
        heading: 'Vorbis or Opus inside an OGG',
        paragraphs: [
          'OGG is a container. Music files in it usually use Vorbis. Some voice files use Opus. This page converts either one when the browser can decode it.',
          'Chrome and Firefox decode Vorbis and Opus in OGG. Safari decodes Opus and often refuses Vorbis. If a plain browser tab stays silent, this page cannot convert that file either.',
        ],
      },
      {
        heading: 'Bitrate, and what you give up',
        paragraphs: [
          'MP3 is lossy. At 320 kbps the difference is small for most listening. Keep the OGG if you need the original:',
        ],
        bullets: [
          '320 kbps for music you will keep.',
          '192 kbps for a voice file or a smaller copy.',
          '128 kbps when the destination only needs speech intelligibility.',
        ],
      },
      {
        heading: 'A .opus file is the other page',
        paragraphs: [
          'WhatsApp and Telegram voice notes are often a .opus file, or Opus inside WebM. Those belong on Opus to MP3. This page is the OGG container.',
          'Title, artist, and cover art are not copied. The MP3 is written without metadata. Nothing is uploaded.',
        ],
      },
    ],
    related: ['opus-to-mp3', 'wav-to-mp3', 'm4a-to-mp3'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop an OGG file, or click to browse',
      converter: true,
      exportLabel: 'Convert to MP3',
      accept: 'audio/ogg,audio/vorbis,.ogg,.oga',
    },
  },
  {
    slug: 'opus-to-mp3',
    cardLine: 'Convert Opus calls and downloads to MP3 that every player accepts.',
    name: 'Opus to MP3 Converter',
    shortName: 'Opus to MP3',
    icon: 'voice',
    category: 'merge',
    title: 'Opus to MP3 Converter — WhatsApp Voice Notes to MP3',
    description:
      'Convert WhatsApp & Telegram Opus voice notes to MP3 in your browser. Free, no signup, nothing uploaded. Works on .opus, OGG and WebM.',
    h1: 'Opus to MP3 Converter — Convert Opus to MP3, Online Free',
    hero: {
      src: '/opus-to-mp3.svg',
      alt: 'Convert a WhatsApp or Telegram voice note to MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Turn Opus audio into MP3 — in your browser, nothing uploaded.',
    intro:
      'Voice notes and some downloads are Opus: a .opus file, or Opus inside OGG or WebM. Drop the file, pick a bitrate, and your browser decodes it and saves an MP3. The audio never goes to a server.',
    usesHeading: 'Opus files people convert',
    uses: [
      'Turn a WhatsApp voice note or an Opus export into an MP3 any player can open.',
      'Speech is fine at 128 kbps. You are changing the format people can play, not the length.',
      'Convert here, then trim if the message has a long silence at either end.',
    ],
    howTo: [
      {
        name: 'Drop your Opus file',
        text: 'Drag a .opus file onto the page, or click to browse. OGG and WebM files that contain Opus work the same way.',
      },
      {
        name: 'Pick a bitrate',
        text: '128 kbps is enough for voice notes. Use 192 or 320 kbps when the Opus file is music.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. Decoding and encoding happen on your device, then the MP3 downloads.',
      },
    ],
    faqs: [
      {
        q: 'What is the Opus format?',
        a: 'Opus is an audio codec. WhatsApp and Telegram voice notes are often .opus. It also sits inside OGG and WebM. This page turns that audio into an MP3 you can play anywhere.',
      },
      {
        q: 'Which Opus files work?',
        a: 'Files your browser can already play: .opus, OGG with Opus, and WebM with Opus, in Chrome, Firefox and current Safari. If a plain browser tab stays silent, this page cannot decode that file either. WhatsApp voice notes saved on Android are .opus files, and they convert the same way.',
      },
      {
        q: 'Will converting Opus to MP3 lose quality?',
        a: 'MP3 is lossy, and so is Opus. At 320 kbps the MP3 is as clear as MP3 gets. Voice notes are fine at 128 kbps. Keep the Opus file if you need the original.',
      },
      {
        q: 'Are tags kept?',
        a: 'No. The MP3 is written without metadata. Title and artist are not copied.',
      },
      {
        q: 'Does the file get uploaded?',
        a: 'No. Your browser decodes the Opus audio and encodes the MP3 locally. The audio stays on your device.',
      },
    ],
    sections: [
      {
        heading: 'Voice notes that only some players open',
        paragraphs: [
          'Opus is the codec inside many WhatsApp and Telegram voice notes, saved as .opus. It also sits inside OGG and WebM. This page turns that audio into an MP3 a car, a phone, or an older player will open.',
          'The browser has to be able to play the file already. Chrome, Firefox, and current Safari handle .opus, Opus in OGG, and Opus in WebM. If a plain tab stays silent, this page cannot decode it either.',
        ],
      },
      {
        heading: 'Speech does not need 320',
        paragraphs: [
          'A voice note is speech. Pick the bitrate for that:',
        ],
        bullets: [
          '128 kbps is enough for a voice note you will send or keep.',
          '192 kbps if the note has music under the voice and you care.',
          '320 kbps only when the Opus file is music and you want the MP3 close to it.',
        ],
      },
      {
        heading: 'Tags, and the OGG page',
        paragraphs: [
          'Title and artist are not copied. The MP3 is written without metadata. An OGG that is really Vorbis music belongs on OGG to MP3, which is the page named for that container.',
          'Nothing is uploaded. If the note has a long silence at the ends, convert first, then trim. The silence remover is the wrong tool on a quiet music bed, but it fits a voice note with long pauses.',
        ],
      },
    ],
    related: ['ogg-to-mp3', 'wav-to-mp3', 'm4a-to-mp3'],
    editor: {
      defaultFormat: 'mp3-192',
      dropHint: 'Drop an Opus file, or click to browse',
      converter: true,
      exportLabel: 'Convert to MP3',
      accept: 'audio/ogg,audio/opus,.opus,.ogg,.webm',
    },
  },
  {
    slug: 'mp3-tag-editor',
    name: 'MP3 Tag Editor',
    shortName: 'Tag Editor',
    icon: 'tag',
    category: 'merge',
    title: 'MP3 Tag Editor — Edit ID3 Tags & Cover Art Online Free',
    description:
      'Edit MP3 tags online: title, artist, album, year, track and cover art. The file is edited in your browser and never uploaded. Free, no signup.',
    h1: 'MP3 Tag Editor — Edit ID3 Tags, Online Free',
    hero: {
      src: '/mp3-tag-editor.svg',
      alt: 'Change the title, artist and cover of an MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Fix the title, artist, album and cover art of an MP3 in under a minute — right in your browser, nothing uploaded.',
    intro:
      'An MP3 carries two things: the music, and the card of information players show next to it — title, artist, album, year, cover art. When that card is wrong or missing, everything from your phone to the car stereo falls back to Unknown Artist or Track 01. Drop a file here, fix the fields and save: the audio is copied over byte for byte, untouched, and never leaves your device.',
    usesHeading: 'Tags people actually need to fix',
    uses: [
      'Clean up downloads that show "Unknown Artist" or no cover in your music player.',
      'Give a podcast episode or demo track a proper title, cover and credits before publishing.',
      'Strip leftover device and location metadata from a recording before you share it.',
    ],
    howTo: [
      {
        name: 'Drop your MP3',
        text: 'Drop the file in or click to browse. The current tags and cover art are read on your device and shown in the form.',
      },
      {
        name: 'Edit the fields',
        text: 'Type the correct title, artist, album, year and track number, and add or replace the cover art with a JPG or PNG.',
      },
      {
        name: 'Save the MP3',
        text: 'Hit Save MP3 to download the tagged file. The audio is copied unchanged — only the information card around it is rewritten.',
      },
    ],
    faqs: [
      {
        q: 'Is my MP3 uploaded to a server?',
        a: 'No. The file is opened with the browser\u2019s own FileReader API and rewritten right in your tab. You can load this page, switch off Wi-Fi, and the editor still works. There is no upload step at all.',
      },
      {
        q: 'Will editing the tags change the audio quality?',
        a: 'No. Tag data lives in a separate block at the front of the file, and the MPEG audio frames are copied byte for byte, so the sound is bit-identical. The saved file can even be slightly smaller, because the old tag block and its padding are not carried over.',
      },
      {
        q: 'How is this different from the MP3 editor?',
        a: 'The MP3 editor cuts, trims and joins the audio itself, which means decoding and re-encoding the sound. This page never touches the sound — it rewrites the information card around it. Use that one to edit music, this one to label it.',
      },
      {
        q: 'What can\u2019t it do?',
        a: 'It edits MP3 files only — FLAC, M4A and WAV use different tag formats this page does not write yet. It works on one file at a time rather than a whole album in batch. And saving rewrites the whole tag block, so podcast chapters or unusual custom fields stored in the original tag are not carried over — the common fields are.',
      },
      {
        q: 'Why does my car stereo still show "Track 01"?',
        a: 'Many head units ignore tags and fall back to the file name, and most cache the old information until you re-import the USB stick or rescan. Save here (the file is written as ID3v2.3, the version car stereos read most reliably), rename the file to something like "01 - Song Title.mp3", then rescan.',
      },
      {
        q: 'My Chinese, Japanese, Korean or Arabic tags show as garbage. Can this fix it?',
        a: 'Yes — that usually means the old tag was saved in a single-byte encoding instead of Unicode. Retype the correct text here and save: the file is rewritten as ID3v2.3 with UTF-16 text, which modern players display correctly, including Chinese, Japanese, Korean, Arabic, Cyrillic and Hindi titles.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Yes — recent Chrome, Safari, Firefox and Edge, desktop or mobile. Saving hands the file to the browser like any download; on iPhone, Safari saves it to the Files app. Everything runs locally, so it also works on a slow connection once the page is open.',
      },
    ],
    sections: [
      {
        heading: 'The label changes, the audio does not',
        paragraphs: [
          'The tag editor rewrites the ID3 block and copies the MPEG frames byte for byte. The sound is bit-identical. The saved file can even be slightly smaller, because the old tag block and its padding are not carried over.',
          'It writes ID3v2.3 with UTF-16 text, which is the version car stereos read most reliably, and which fixes titles that were saved in a single-byte encoding and show up as garbage.',
        ],
      },
      {
        heading: 'What you can set, and what you cannot',
        paragraphs: [
          'One MP3 at a time. Common fields only:',
        ],
        bullets: [
          'Title, artist, album, and the other everyday fields, plus cover art.',
          'Not FLAC, M4A, or WAV. Those tag formats are not written here.',
          'Not podcast chapters or unusual custom frames. Saving rewrites the tag block, and those frames are not carried over.',
        ],
      },
      {
        heading: 'Why the car still says Track 01',
        paragraphs: [
          'Many head units ignore tags and fall back to the file name, and most cache the old information until you re-import the USB stick or rescan. Rename the file to something like 01 - Song Title.mp3, then rescan.',
          'Cutting, fading, or changing speed is the MP3 editor, which decodes and re-encodes. This page never touches the sound. Use that one to edit the music. Use this one to label it.',
        ],
      },
    ],
    related: ['mp3-editor', 'voice-recorder', 'mp4-to-mp3'],
    editor: {
      tagEditor: true,
      accept: 'audio/mpeg,.mp3',
      dropHint: 'Drop an MP3 file here, or click to browse',
      exportLabel: 'Save MP3',
    },
  },
  {
    slug: 'audio-looper',
    cardLine: 'Repeat one clip up to 16 times and crossfade each join.',
    name: 'Audio Looper',
    shortName: 'Looper',
    icon: 'layers',
    category: 'effects',
    title: 'Audio Looper — Repeat a Clip Online Free',
    description:
      'Repeat a selection or a whole file from 2 to 16 times, with a 0.01 s crossfade at each join. Free in your browser. Nothing is uploaded.',
    h1: 'Audio Looper, repeat a clip 2 to 16 times',
    hero: {
      src: '/audio-looper.svg',
      alt: 'Repeat one clip and crossfade each join',
      width: 32,
      height: 32,
    },
    subtitle: 'Loop the selection, or the whole file, and download one longer file.',
    intro:
      'Set how many times the clip plays, from 2 to 16. The default is 4. Each join uses a linear crossfade, 0.01 seconds unless you move it, up to 0.1 seconds. Drag a selection to loop only that part. With no selection, the whole file repeats. The export stops at 10 minutes. Pitch and speed stay as they are. Processing stays in your browser.',
    usesHeading: 'What the repeats are for',
    uses: [
      'Turn a one-bar riff into a practice loop you can export.',
      'Stretch a short voice cue so it lasts through a longer scene.',
      'Repeat a sample with a short crossfade so the join does not click.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Set repeats and the join',
        text: 'Repeats runs from 2 to 16. Join is the crossfade at each seam, from 0 to 0.1 seconds. Drag the waveform if only part of the file should repeat. The status line shows the export length.',
      },
      {
        name: 'Export',
        text: 'Play the original to check the selection, then export MP3 or WAV. The download is the clip written back to back.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The repeats are copied in your browser. After the page loads you can go offline and it still exports.',
      },
      {
        q: 'What happens at each join?',
        a: 'The end of one pass and the start of the next overlap by the join length. The default is 0.01 seconds. The overlap is a linear crossfade, so a steady tone does not jump. WAV is those samples. MP3 encodes the loop once, at the bitrate you pick. Pitch and speed are unchanged.',
      },
      {
        q: 'What will it refuse?',
        a: 'Repeats only go from 2 to 16. If the result would pass 10 minutes, export stops and the status line says so. This page does not record over itself, and it does not place two different files end to end.',
      },
      {
        q: 'How is this different from trim, join, and fade?',
        a: 'The audio trimmer keeps a span once. The audio joiner places different files in a row. Fade audio quiets the start or end of one file. This page writes the same clip again, with a crossfade only at the joins between copies.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. Both sliders, the waveform, and the export button work with touch in current Chrome, Edge, Firefox and Safari.',
      },
    ],
    sections: [
      {
        heading: 'The copies overlap at the join',
        paragraphs: [
          'Repeats run from 2 to 16. The default is 4. Each join overlaps by the Join slider: 0.01 seconds unless you move it, and never more than 0.1 seconds.',
          'The overlap is a linear crossfade, so a steady tone does not jump. Export length is one pass times the repeat count, minus the overlap times one less than the count. Pitch and speed stay as they are. WAV is those samples. MP3 encodes the loop once.',
        ],
      },
      {
        heading: 'One clip, written again',
        paragraphs: ['Use it when the next copy should be the same audio:'],
        bullets: [
          'A one-bar riff you want as a practice file.',
          'A short voice cue that has to last through a longer scene.',
          'A sample whose seam clicks if the copies meet with no overlap.',
        ],
      },
      {
        heading: 'Not a trim, and not a join',
        paragraphs: [
          'The audio trimmer keeps a span once. The audio joiner places different files in a row. Fade audio quiets the start or the end of one file. The crossfade on this page sits only between copies of the same clip.',
          'This page does not record over itself. If the result would pass 10 minutes, export stops. Shorten the selection or lower the repeats.',
        ],
      },
    ],
    related: ['audio-trimmer', 'fade-audio', 'ringtone-maker'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      loop: true,
    },
  },
  {
    slug: 'auto-panner',
    cardLine: 'Sweep one file left and right at a rate you set. It does not follow the beat.',
    name: 'Auto Panner',
    shortName: 'Panner',
    icon: 'waveform',
    category: 'effects',
    title: 'Auto Panner — Sweep Audio Left and Right Free',
    description:
      'Sweep mono or stereo left and right at 0.05 to 2 Hz. Depth is 0 to 100%, starting at 70%. Free in your browser. Nothing is uploaded.',
    h1: 'Auto panner, sweep a file from left to right',
    hero: {
      src: '/auto-panner.svg',
      alt: 'Sweep one recording from left to right',
      width: 32,
      height: 32,
    },
    subtitle: 'Set the depth and the rate. The sweep does not follow the beat.',
    intro:
      'Depth runs from 0 to 100%. The start value is 70%. Rate runs from 0.05 Hz to 2 Hz. The start value is 0.2 Hz. Position is depth times a sine of that rate, so 0.2 Hz takes 5 seconds to go left and right and back. It does not follow the drums. Depth at 0 leaves the file as it is. Processing stays in your browser.',
    usesHeading: 'What the sweep is for',
    uses: [
      'Move a pad or a vocal slowly from one speaker to the other.',
      'Give a mono take a steady left-right motion.',
      'Pick the rate in hertz, instead of chasing the drums.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Set depth and rate',
        text: 'Depth is how far the sound travels, from 0 to 100%. Rate is how many sweeps per second, from 0.05 to 2. Drag the waveform if only part of the file should move.',
      },
      {
        name: 'Export',
        text: 'Play to check the selection, then export MP3 or WAV. WAV is the panned samples. MP3 encodes the sweep once.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The sweep is a stereo panner in your browser. After the page loads you can go offline and it still exports.',
      },
      {
        q: 'What happens to the sound?',
        a: 'The position is depth times a sine of the rate. Pitch and playback speed stay as they are. A stereo file moves as one image. The two channels are not sent on different paths. WAV is those samples. MP3 encodes once, at the bitrate you pick.',
      },
      {
        q: 'What will it refuse?',
        a: 'The sweep does not lock to a beat, and it does not split mid and side. Depth at 0 does not insert a panner, so the export matches the file you dropped. This is not a head-related transfer that points the sound at a chosen angle.',
      },
      {
        q: 'How is this different from echo, slowed reverb, and the equalizer?',
        a: 'Echo adds a copy after a delay. Slowed + reverb changes speed and pitch, then adds a room. The equalizer changes frequency bands. This page only moves the same audio left and right. A fixed circle of about 10 seconds, with a short reverb tail, is the 3D audio page.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. Both sliders, the waveform, and the export button work with touch in current Chrome, Edge, Firefox and Safari.',
      },
    ],
    sections: [
      {
        heading: 'Where the sound sits',
        paragraphs: [
          'Depth runs from 0 to 100%. The start value is 70%. Rate runs from 0.05 Hz to 2 Hz. The start value is 0.2 Hz.',
          'The position is depth times a sine of that rate. At 0.2 Hz one full left-right cycle takes 5 seconds. Depth at 0 leaves the file as it is. Pitch and playback speed stay as they are.',
        ],
      },
      {
        heading: 'A steady sweep',
        paragraphs: ['Use it when the motion should be even:'],
        bullets: [
          'A pad or a vocal that should cross the speakers slowly.',
          'A mono take that should move, without becoming two different tracks.',
          'A rate you set in hertz, not a sweep that tries to follow the drums.',
        ],
      },
      {
        heading: 'Not an echo, and not a tempo change',
        paragraphs: [
          'Echo adds a copy after a delay you set. Slowed + reverb changes the speed and the pitch, then adds a room. The equalizer changes frequency bands. None of those move the image on a clock.',
          'This page does not follow a beat. A stereo file stays one image. The left and right channels are not sent on separate paths.',
        ],
      },
    ],
    related: ['echo', 'slowed-reverb', '3d-audio'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['pan'],
    },
  },
  {
    slug: '3d-audio',
    cardLine: 'One switch puts the file on a slow circle and adds a short reverb tail.',
    name: '3D Audio',
    shortName: '3D',
    icon: 'waveform',
    category: 'effects',
    title: '3D Audio — Slow Circle and Reverb Online Free',
    description:
      'Circle a file once about every 10 seconds and add a short reverb tail. One switch. Speed and pitch stay put. Free in your browser. Nothing is uploaded.',
    h1: '3D audio, a slow circle with a short reverb tail',
    hero: {
      src: '/3d-audio.svg',
      alt: 'A slow circle around the speakers, plus a short room',
      width: 32,
      height: 32,
    },
    subtitle: 'Depth, rate, and the room are already set. You only flip the switch.',
    intro:
      'The circle is fixed. Depth is 100%. The rate is 0.1 Hz, so one trip around takes about 10 seconds. The direct sound moves. A reverb send at 25% adds the same short room used on the slowed + reverb page. Speed and pitch stay as they are. The switch off leaves the file as you dropped it. Processing stays in your browser.',
    usesHeading: 'What the circle is for',
    uses: [
      'Put a vocal or a pad on a slow circle without picking a rate.',
      'Add a short room behind that movement.',
      'Keep the original speed and the original pitch.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Leave the circle on',
        text: 'The switch starts on. Turn it off and the export matches the file you dropped. There is no second slider for depth, rate, or the room.',
      },
      {
        name: 'Export',
        text: 'Play to check it, then export MP3 or WAV. WAV is the circled samples plus the tail. MP3 encodes that once.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The circle and the room are rendered in your browser. After the page loads you can go offline and it still exports.',
      },
      {
        q: 'What happens to the sound?',
        a: 'Depth stays at 100%. The rate stays at 0.1 Hz, about 10 seconds for one circle. The direct sound moves left and right. The reverb is a 25% send of the same short room as slowed + reverb, so the file grows a tail. Speed and pitch stay as they are. WAV is those samples. MP3 encodes once, at the bitrate you pick.',
      },
      {
        q: 'What will it refuse?',
        a: 'You cannot set a different rate, a different depth, or a different room on this page. It does not follow a beat. It does not aim the sound at an angle around your head. The switch off does not add the circle or the tail.',
      },
      {
        q: 'How is this different from the auto panner and slowed reverb?',
        a: 'To set the rate and the depth yourself, use the auto panner. This page is the finished circle, about 10 seconds around, with the reverb already on. Slowed + reverb changes the speed and the pitch. This page does not.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The switch, the waveform, and the export button work with touch in current Chrome, Edge, Firefox and Safari.',
      },
    ],
    sections: [
      {
        heading: 'A circle with the numbers already chosen',
        paragraphs: [
          'Depth is 100%. The rate is 0.1 Hz. One trip from the middle, out to one side, and back through the other side takes about 10 seconds.',
          'The direct sound is what moves. The reverb is a send at 25%, the same short room as on the slowed + reverb page. The tail is why the export runs past the end of the file you dropped.',
        ],
      },
      {
        heading: 'When the preset is the job',
        paragraphs: ['Use this page when you want the finished motion:'],
        bullets: [
          'A vocal or a pad that should wander without a rate slider.',
          'A short room behind that movement, not a wash you mix yourself.',
          'The original speed and the original pitch, left where they were.',
        ],
      },
      {
        heading: 'Not a panner you tune, and not a slowdown',
        paragraphs: [
          'The auto panner is where you set depth from 0 to 100% and rate from 0.05 Hz to 2 Hz, with no reverb. This page locks both numbers and adds the room.',
          'Slowed + reverb changes the speed, and the pitch moves with it. This page does not. Turning the switch off leaves the file as you dropped it.',
        ],
      },
    ],
    related: ['auto-panner', 'slowed-reverb', 'echo'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['circle'],
    },
  },
  {
    slug: 'metronome',
    cardLine: 'A click from 40 to 240 BPM. The first beat of each bar is louder.',
    name: 'Metronome',
    shortName: 'Metronome',
    icon: 'waveform',
    category: 'record',
    title: 'Metronome — Click Track Online Free',
    description:
      'Click from 40 to 240 BPM in 2/4, 3/4, 4/4, or 6/8. First beat of each bar is louder. Export 4, 8, or 16 bars as WAV or MP3. Nothing is uploaded.',
    h1: 'Metronome, a click from 40 to 240 BPM',
    hero: {
      src: '/metronome.svg',
      alt: 'A metronome click from 40 to 240 BPM',
      width: 32,
      height: 32,
    },
    subtitle: 'Hear the click, or save 4, 8, or 16 bars. It does not mix into a song.',
    intro:
      'Set a tempo from 40 to 240 BPM. Pick 2/4, 3/4, 4/4, or 6/8. The first beat of each bar is louder. Press play and the click runs until you stop it. Export writes 4, 8, or 16 bars as WAV or MP3. 6/8 is six clicks in the bar at that BPM, not two. This page does not take a file and does not lay the click under a song. That mix is the multi-track editor. Nothing is uploaded.',
    usesHeading: 'What you can do with it',
    uses: [
      'Practice a tempo before you record on the voice recorder.',
      'Export 4, 8, or 16 bars of the same click.',
      'Hear 6/8 as six clicks, with the first one louder.',
    ],
    howTo: [
      {
        name: 'Set BPM and meter',
        text: 'Move BPM from 40 to 240. Pick 2/4, 3/4, 4/4, or 6/8. The page starts at 100 BPM and 4/4.',
      },
      {
        name: 'Press play',
        text: 'The click runs until you press stop. The first beat of each bar is louder. Every click is the same short tone.',
      },
      {
        name: 'Export bars if you want a file',
        text: 'Choose 4, 8, or 16 bars, then WAV or MP3. The file is only the clicks. WAV keeps those samples. MP3 encodes them once.',
      },
    ],
    faqs: [
      {
        q: 'Is anything uploaded?',
        a: 'No. The page does not read a file and does not open the microphone. Playback and export stay in the browser. After the page loads, you can go offline and the click still runs.',
      },
      {
        q: 'What does the click sound like?',
        a: 'At 100 BPM the clicks are 0.60 seconds apart. The first beat of the bar is louder. The others are the same tone, quieter. WAV is those samples. MP3 encodes them once at the bitrate you pick.',
      },
      {
        q: 'What will it not do?',
        a: 'It will not line the click up to a song. There is no file to drop. 6/8 stays six clicks in the bar at the BPM on the slider. It does not switch that meter to two dotted-quarter clicks.',
      },
      {
        q: 'How is this different from the multi-track editor and the speed page?',
        a: 'This page is only the click. Putting that click under a song is the multi-track editor. Changing how long a recording lasts is change-audio-speed, and the pitch moves with the speed. The voice recorder takes the microphone.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The BPM slider, the meter menu, play, and export work with a tap in current Chrome, Edge, Firefox, and Safari. The click uses a Web Audio oscillator. The exported file uses the same timing.',
      },
    ],
    sections: [
      {
        heading: 'The click',
        paragraphs: [
          'At 100 BPM the clicks are 0.60 seconds apart. The first beat of the bar is louder. Every click is the same short tone.',
          '2/4 clicks twice in a bar, 3/4 three times, 4/4 four times, and 6/8 six times. The BPM is the click rate in each of those meters.',
        ],
      },
      {
        heading: 'A file of the same clicks',
        paragraphs: [
          'Export writes 4, 8, or 16 bars. WAV keeps the clicks as they are. MP3 encodes that result once.',
        ],
        bullets: [
          'Four bars of 4/4 at 100 BPM is 16 clicks.',
          'Drop that WAV on the multi-track editor if you want it under a song.',
          'Stay on play if you only needed to hear the tempo.',
        ],
      },
      {
        heading: 'What it will not do',
        paragraphs: [
          'It will not line the clicks up to a song. There is no file to drop and no waveform to trim.',
          'It will not change the length of a recording. The change-audio-speed page does that, and the pitch moves with the speed.',
        ],
      },
    ],
    related: ['voice-recorder', 'change-audio-speed', 'multi-track-audio-editor'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'No file. Press play.',
      metronome: true,
    },
  },
  {
    slug: 'key-bpm-finder',
    cardLine: 'Read BPM from 60 to 180 and a major or minor key. Silence stays unread.',
    name: 'Key and BPM Finder',
    shortName: 'Key and BPM',
    icon: 'waveform',
    category: 'effects',
    title: 'Key and BPM Finder — Read a File Online Free',
    description:
      'Read BPM from 60 to 180 and a major or minor key. Silence stays unread. The first 60 seconds are what the page reads. Nothing is uploaded.',
    h1: 'Key and BPM, read from the file you drop',
    hero: {
      src: '/key-bpm-finder.svg',
      alt: 'Read the BPM and the key of an audio file',
      width: 32,
      height: 32,
    },
    subtitle: 'Two numbers. No button that moves the pitch.',
    intro:
      'Drop a file. The page reads BPM from 60 to 180, and a key: a pitch plus major or minor. BPM is the strongest gap between onsets. A gap outside that range is halved or doubled until it lands inside. The key is the fixed major or minor profile that best matches the pitch classes. Silence shows “Can’t read”, not 0 BPM and not C major. Only the first 60 seconds are read. A file shorter than 2 seconds has no BPM. This page does not change the file. Moving the pitch is the pitch changer. Nothing is uploaded.',
    usesHeading: 'What you can read',
    uses: [
      'The tempo of a loop before you change its speed.',
      'The key of a take before you move it on the pitch changer.',
      'An unread result on a silent file, instead of 0 BPM or C major.',
    ],
    howTo: [
      {
        name: 'Drop a file',
        text: 'Audio, or a video with a soundtrack. The browser decodes it. Nothing is uploaded.',
      },
      {
        name: 'Read BPM and key',
        text: 'BPM is an integer from 60 to 180. The key is a pitch plus major or minor. The note under the numbers names the cases that swap.',
      },
      {
        name: 'Leave the file as it is',
        text: 'This page does not export a changed file. The pitch changer is where the pitch moves, and the length stays.',
      },
    ],
    faqs: [
      {
        q: 'Is the file uploaded?',
        a: 'No. The browser decodes it and reads the samples in memory. After the page loads, you can go offline and still read a file you drop.',
      },
      {
        q: 'How exact is the read?',
        a: 'BPM is the strongest onset gap between 60 and 180, as an integer. The key is the best match against a fixed major profile and a fixed minor profile, 12 weights each. It is not a chord transcription.',
      },
      {
        q: 'What will it not do?',
        a: 'It will not change pitch or speed. There is no button for a new key. A file shorter than 2 seconds has no BPM. Silence shows Can’t read, not 0 and not C major. Only the first 60 seconds are read.',
      },
      {
        q: 'How is this different from the pitch changer and the speed page?',
        a: 'This page only reads. The pitch changer moves the pitch and keeps the length. The speed page changes the length, and the pitch moves with the speed. The tempo changer changes the length and the pitch stays, from 0.75× to 1.25×.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. Drop the file and read the two numbers. The drop target and the reset button take a tap in current Chrome, Edge, Firefox, and Safari.',
      },
    ],
    sections: [
      {
        heading: 'What the two numbers are',
        paragraphs: [
          'BPM is the strongest gap between onsets, from 60 to 180. A gap outside that range is halved or doubled until it lands inside.',
          'The key is the major or minor profile that best matches the pitch-class energy. Each profile is a fixed set of 12 weights.',
        ],
      },
      {
        heading: 'When the read is weak',
        paragraphs: [
          'Free rhythm, speech, and room noise have no steady gap, so the BPM can sit on the wrong multiple. A relative major and minor share many pitches, so those two can swap.',
        ],
        bullets: [
          'A silent file shows Can’t read for both numbers.',
          'A file shorter than 2 seconds can still show a key, and it shows no BPM.',
          'Only the first 60 seconds are read.',
        ],
      },
      {
        heading: 'What it will not do',
        paragraphs: [
          'It will not move the pitch. There is no button for a new key. That is the pitch changer, and the length stays the same.',
          'It will not change the speed. The speed page does that, and the pitch moves with the speed.',
        ],
      },
    ],
    related: ['pitch-changer', 'change-audio-speed', 'tempo-changer'],
    editor: {
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      accept: 'audio/*,video/mp4,.m4a,.opus',
      keyBpm: true,
    },
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
