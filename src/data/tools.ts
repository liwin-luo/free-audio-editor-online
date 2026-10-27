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
export const CATEGORY_IDS = ['cut', 'convert', 'join', 'edit', 'effects', 'record'] as const;
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
  /** Same settings on each file. One file downloads alone; two or more come back as a zip. */
  batch?: boolean;
  /** Stack files on one timeline (multi-track-audio-editor) */
  mixer?: boolean;
  /** Default export format id. Omitted on image-output tools. */
  defaultFormat?: string;
  /** Image-output editor instead of the audio editor */
  visualizer?: 'waveform' | 'spectrogram' | 'live';
  /** Paint a picture or text into a WAV spectrogram */
  paint?: boolean;
  /** Speech-to-text island instead of an audio editor */
  transcribe?: boolean;
  /** Audio-to-MIDI island. Model loads on the first convert. */
  midi?: boolean;
  /** MP3 tag editor island instead of an audio editor */
  tagEditor?: boolean;
  /** Show the Adjust drawer (gain, speed, reverse, fades) */
  showAdjust?: boolean;
  /** Trimmer layout: span readout, always-visible times, labeled play. */
  trimLayout?: boolean;
  /** Volume percents shown as buttons next to the gain slider. */
  gainPresets?: number[];
  /** Speed multiples shown as buttons next to the speed slider. */
  speedPresets?: number[];
  /** Semitone jumps shown as buttons next to the pitch slider. */
  pitchPresets?: number[];
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
  /** Cut the kept selection, or the whole file, into equal parts and zip them. */
  split?: boolean;
  /** Export one channel: the average of the source channels. */
  mono?: boolean;
  /** Quantize and sample-hold. Sliders live on the page. */
  bitcrush?: boolean;
  /** Shift pitch by 12·log2(432/440). Length stays. */
  hz432?: boolean;
  /** File LUFS meter island instead of the waveform editor. */
  loudness?: boolean;
  /** Click island. No file. Oscillator playback, optional bar export. */
  metronome?: boolean;
  /** Soundboard island. No single file. Board of clips with hotkeys and presets. */
  soundboard?: boolean;
  /** Read BPM and key. Does not change the file. */
  keyBpm?: boolean;
  /** Export button label (default "Export") */
  exportLabel?: string;
  /** Max gain slider percent (default 200) */
  maxGainPercent?: number;
  /** Headline controls surfaced outside the Adjust drawer */
  quickControls?: ('reverse' | 'speed' | 'tempo' | 'gain' | 'normalize' | 'reverb' | 'pitch' | 'bass' | 'treble' | 'mid' | 'lpf' | 'hpf' | 'compress' | 'echo' | 'distort' | 'pan' | 'circle' | 'fade')[];
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
    title: 'Audio Trimmer — Trim a Podcast or Voice Memo',
    description:
      'Keep one span of a podcast, voice memo, or recording and save MP3 or WAV. The trim runs in your browser, so nothing is uploaded.',
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
        text: 'Drop a file, or click to browse. It opens only if this browser can decode it. If it cannot, the page says the file could not be decoded.',
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
        a: 'Yes. There is no account, and the export has no watermark. The file is decoded in this browser.',
      },
      {
        q: 'Does my audio get uploaded to a server?',
        a: 'No. The file is decoded in this tab with the Web Audio API. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the MP3 encoder to have loaded once.',
      },
      {
        q: 'Which formats can I trim?',
        a: 'Whatever this browser can already decode. The save menu is MP3 at 64, 96, 128, 192, or 320 kbps, or 16-bit WAV. MP3 encodes the first two channels only.',
      },
      {
        q: 'Will trimming reduce the audio quality?',
        a: 'WAV is 16-bit PCM of the samples you kept. MP3 encodes that span once, at the bitrate you pick. Title, artist, and cover are not copied.',
      },
      {
        q: 'Can I trim audio on my phone?',
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, and the page warns that the tab may run out of memory.',
      },
      {
        q: 'How long can my file be?',
        a: 'Over 300 MB is rejected. Over one hour still opens, with a memory warning. Repeating the kept span 2 to 16 times, up to 10 minutes, is the [audio looper](/audio-looper).',
      },
      {
        q: 'Can I trim a local file from Claude or Cursor?',
        a: 'This page trims in the browser with the Web Audio API. Nothing is installed. /mcp runs on your computer and calls ffmpeg. Pass a start and an end in seconds. WAV is the decoded samples. MP3 is encoded once. The chat app still sees the path and the arguments.',
      }],
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
          'This page and the [MP3 cutter](/mp3-cutter) are the same editor. Both can keep the selection or delete it. The cutter page is the one written for a chorus or an intro.',
          'A ringtone, capped at 40 seconds, with M4R only when this browser can encode AAC, is the [ringtone maker](/ringtone-maker). This page does not install it on a phone.',
          'A fade from 0 to 5 seconds on one file is [fade audio](/fade-audio). This page does not fade.',
        ],
      },
      {
        heading: 'What the trim does to the sound',
        paragraphs: [
          'The file is decoded, the span is taken, and the export is written again. WAV is 16-bit PCM of that span. MP3 encodes it once. The default bitrate on this page is 192 kbps.',
          'This page does not change loudness. A quieter file, from 10% to 400%, is [increase volume](/increase-volume).',
        ],
      },
      {
        heading: 'How long a file can be',
        paragraphs: [
          'A file over 300 MB is rejected. A file over one hour still opens, and the page warns that the tab may run out of memory. That warning is not a length cap.',
        ],
        bullets: [
          'A voice memo or a podcast answer: trim it here, on the phone if you want.',
          'A full episode: a computer is the steadier place to preview and export.',
          'A video: the soundtrack is what gets trimmed. The picture is not saved.',
        ],
      },
    ],
    related: ['mp3-cutter', 'ringtone-maker', 'fade-audio'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      trimLayout: true,
      exportLabel: 'Trim and download',
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'mp3-cutter',
    cardLine: 'Cut a song down to the chorus or the drop. MP3 encodes the cut once.',
    name: 'MP3 Cutter',
    shortName: 'MP3 Cutter',
    icon: 'scissors',
    category: 'cut',
    title: 'MP3 Cutter — Keep or Delete a Section, No Upload',
    description:
      'Keep the chorus or delete the intro, then save. WAV adds no extra loss. MP3 encodes once, up to 320 kbps.',
    h1: 'MP3 Cutter — Cut an MP3 Online, Free',
    hero: {
      src: '/mp3-cutter.svg',
      alt: 'Free MP3 cutter online to cut and trim an MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Cut songs and MP3 files online — keep the part you want, delete the rest.',
    intro:
      'Cut a song down to the chorus, remove a long intro, or split out a highlight — right in your browser. Choose to keep the selected part or delete it, preview the result, and then export. MP3 encodes the cut once.',
    usesHeading: 'Cuts people make in an MP3',
    uses: [
      'Remove an intro, an ad read, or a long silence from a song or episode.',
      'Keep one section and discard the rest. A fade on the edges is [fade audio](/fade-audio).',
      'A clip capped at 40 seconds, downloaded as a ringtone, is the [ringtone maker](/ringtone-maker).',
    ],
    howTo: [
      {
        name: 'Add your MP3',
        text: 'Drop a file, or click to browse. The picker is not limited to MP3. It opens only if this browser can decode it.',
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
        a: 'WAV is 16-bit PCM of the samples you kept. MP3 encodes that span once, at 64, 96, 128, 192, or 320 kbps. Title, artist, and cover are not copied.',
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
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
          'This page cuts one span out of a song. The picker is not limited to MP3. The result is a new MP3 or a 16-bit WAV.',
          'The [audio trimmer](/audio-trimmer) is the same editor, written for a podcast or a voice memo. Use this page to cut an MP3. Use the trimmer when the file is not a song.',
        ],
      },
      {
        heading: 'What the cut does to the sound',
        paragraphs: [
          'WAV is 16-bit PCM of the samples you kept. MP3 encodes that span once. The default bitrate on this page is 192 kbps.',
          'The file is decoded, the span is taken, and the export is written again. If you will edit the file again, export WAV.',
        ],
      },
      {
        heading: 'What this cutter will not do',
        paragraphs: [
          'It cuts one file. It does not crossfade a playlist or stack several tracks on top of each other.',
        ],
        bullets: [
          'Joining several songs into one file is the [audio joiner](/audio-joiner).',
          'A clip capped at 40 seconds, downloaded as a ringtone, is the [ringtone maker](/ringtone-maker). This page does not install it on a phone.',
          'Title, artist, and cover are the [MP3 tag editor](/mp3-tag-editor), after you have the cut.',
        ],
      },
    ],
    related: ['audio-trimmer', 'ringtone-maker', 'audio-joiner'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      trimLayout: true,
      exportLabel: 'Cut and download',
      dropHint: 'Drop an MP3 file, or click to browse',
    },
  },
  {
    slug: 'mp3-editor',
    cardLine: 'One tab for quick edits: trim, fade, reverse, speed up and normalize any track.',
    name: 'MP3 Editor',
    shortName: 'MP3 Editor',
    icon: 'waveform',
    category: 'edit',
    title: 'MP3 Editor — Cut, Fade, and Change Speed Online',
    description:
      'Cut, fade, and change speed in one tab. The original file stays untouched, and speed moves the pitch with it.',
    h1: 'MP3 Editor — Cut, Fade, and Change Speed',
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
        text: 'Drop a file, or click to browse. It opens only if this browser can decode it. The file is decoded in this tab.',
      },
      {
        name: 'Edit',
        text: 'Select a range to keep or delete, then open Adjust. Fade each end from 0 to 5 seconds, set volume from 10% to 200%, set speed from 0.50× to 2.00×, or reverse. Pitch follows the speed.',
      },
      {
        name: 'Export the result',
        text: 'Save as MP3 at 64, 96, 128, 192, or 320 kbps, or as 16-bit WAV. This page starts at 320 kbps. MP3 encodes the first two channels once.',
      },
    ],
    faqs: [
      {
        q: 'What can this MP3 editor do?',
        a: 'Keep or delete one selection. Fade each end from 0 to 5 seconds. Volume runs from 10% to 200%. Speed runs from 0.50× to 2.00×, and the pitch follows. Reverb runs from 0% to 100%. Reverse is one switch. Peak normalize is one gain to 0.98, capped at 4×, and it overrides the volume slider. A file over 300 MB is rejected. Several files at once, up to 8, is the [multi-track editor](/multi-track-audio-editor).',
      },
      {
        q: 'Are my edits destructive?',
        a: 'No. Your original file stays exactly as it is on disk. All edits are held as settings in the editor and only rendered into a new file when you export.',
      },
      {
        q: 'How does speed change affect pitch?',
        a: 'On this page, 2× is about an octave higher and 0.5× about an octave lower. The [tempo changer](/tempo-changer) keeps the pitch, from 0.75× to 1.25×. The [pitch changer](/pitch-changer) changes the pitch and keeps the length.',
      },
      {
        q: 'Can I undo a change?',
        a: 'Yes. Press Ctrl+Z (Cmd+Z on Mac) to step back through your recent edits, or click Reset to reload the original file state.',
      },
      {
        q: 'Is it safe for confidential recordings?',
        a: 'The file is decoded in this tab. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once. Closing the tab drops this edit.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'What this editor actually changes',
        paragraphs: [
          'This page is the general MP3 editor: cut a span, fade the ends, change volume or speed, or reverse the file, then export a new MP3. The file you dropped is never overwritten.',
          'Speed here moves the pitch with the tempo. A higher or lower voice at the same length is the [pitch changer](/pitch-changer). A smaller file, without this edit, is [compress audio](/compress-audio).',
        ],
      },
      {
        heading: 'When to open a specialist page instead',
        paragraphs: [
          'The editor is the right start when the job is a mix of small cuts and level changes. Single jobs have a shorter path:',
        ],
        bullets: [
          'One song, keep one chorus: the [MP3 cutter](/mp3-cutter) is the same keep-or-delete editor.',
          'A podcast or voice memo: the [audio trimmer](/audio-trimmer) is that same editor.',
          'Song title, artist, or cover only: the [MP3 tag editor](/mp3-tag-editor) copies the audio bytes and only changes tags.',
          'A clip capped at 40 seconds, downloaded as a ringtone, is the [ringtone maker](/ringtone-maker). This page does not install it on a phone.',
        ],
      },
      {
        heading: 'Export and undo',
        paragraphs: [
          'Export writes a new MP3. WAV in the menu is 16-bit PCM of the edited samples.',
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
    cardLine: 'Save up to 40 seconds of a song. The page downloads the file and does not set it on the phone.',
    name: 'Ringtone Maker',
    shortName: 'Ringtone Maker',
    icon: 'bell',
    category: 'cut',
    title: 'Ringtone Maker — Make Ringtones from Songs (iPhone M4R)',
    description:
      'Save up to 40 seconds as M4R, MP3, or WAV. M4R is in the menu only when this browser can encode AAC. Nothing is uploaded.',
    h1: 'Ringtone Maker — Make an iPhone Ringtone from a Song, Online Free',
    hero: {
      src: '/ringtone-maker.svg',
      alt: 'Save up to 40 seconds of a song as an M4R or MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Save up to 40 seconds of a song as a file you can download.',
    intro:
      'Drag a span of a song. A drag longer than 40 seconds is shortened to 40, and the page says: Selection capped at 40 seconds — the classic ringtone length. Fade each end from 0 to 5 seconds. The page downloads the file. It does not install it on the phone.',
    usesHeading: 'Ringtones worth setting',
    uses: [
      'Drag a span. Longer than 40 seconds is shortened to 40.',
      'Fade each end from 0 to 5 seconds, or leave both at 0.',
      'Download M4R only when this browser can encode AAC. Otherwise download MP3 or WAV.',
    ],
    howTo: [
      {
        name: 'Add a song',
        text: 'Drop an MP3, M4A, WAV or other audio file onto the page. It never leaves your device.',
      },
      {
        name: 'Pick your moment',
        text: 'Drag across the waveform. A drag longer than 40 seconds is shortened to 40.',
      },
      {
        name: 'Export and transfer',
        text: 'Fade each end from 0 to 5 seconds, in steps of 0.1, or leave both at 0. The menu starts at MP3 192 kbps. M4R is listed only when this browser can encode AAC.',
      },
    ],
    faqs: [
      {
        q: 'How long should a ringtone be?',
        a: 'A drag longer than 40 seconds is shortened to 40. The page then says: Selection capped at 40 seconds — the classic ringtone length.',
      },
      {
        q: 'How do I use the ringtone on iPhone?',
        a: 'M4R is AAC-LC, at most two channels, at 192 kbps. It appears in the menu only when this browser can encode AAC. This page only downloads the file.',
      },
      {
        q: 'How do I set it on Android?',
        a: 'This page can download an MP3. It does not set the tone on the phone.',
      },
      {
        q: 'Will the ringtone loop badly?',
        a: 'Fade in and fade out each run from 0 to 5 seconds. Repeating the clip 2 to 16 times, up to 10 minutes, is the [audio looper](/audio-looper).',
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
          'A drag longer than 40 seconds is shortened to 40. The page then says: Selection capped at 40 seconds — the classic ringtone length.',
          'Fade each end from 0 to 5 seconds, in steps of 0.1. At 0, that end is unchanged.',
        ],
      },
      {
        heading: 'Which file the phone accepts',
        paragraphs: [
          'The menu starts at MP3 192 kbps.',
        ],
        bullets: [
          'M4R is AAC-LC, at most two channels, at 192 kbps. It is listed only when this browser can encode AAC.',
          'Otherwise the menu is MP3 at 320, 192, or 128 kbps, or 16-bit WAV.',
        ],
      },
      {
        heading: 'What this page does not do',
        paragraphs: [
          'It does not upload the song, and it does not install the tone on the phone. You download a file.',
          'A full song, without the 40-second cap, is the [MP3 cutter](/mp3-cutter).',
        ],
      },
    ],
    related: ['mp3-cutter', 'audio-trimmer', 'audio-looper'],
    editor: {
      exportLabel: 'Make ringtone',
      defaultFormat: 'mp3-192',
      showAdjust: false,
      ringtone: true,
      trimLayout: true,
      quickControls: ['fade'],
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
    category: 'join',
    title: 'Audio Joiner — Merge Songs in Order, with Crossfade',
    description:
      'Put songs, chapters, or voice memos in order and export one file. Set a crossfade, or zero for a hard join. Nothing is uploaded.',
    h1: 'Audio Joiner — Put Songs One After Another',
    hero: {
      src: '/audio-joiner.svg',
      alt: 'Put songs and voice notes one after another',
      width: 32,
      height: 32,
    },
    subtitle: 'Put files in order and export one track. Nothing is uploaded.',
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
        a: 'Joining to WAV writes 16-bit PCM of the decoded samples. MP3 encodes that result once, at the bitrate you pick. Tags are not copied.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'Add files, then move them up or down. Those buttons work with a finger. There is no file-count cap. The ceiling is the memory in this tab.',
      },
      {
        q: 'Can I join local files from Claude or Cursor?',
        a: 'This page merges in the browser. The crossfade slider runs from 0 to 5 seconds, in steps of 0.5. /mcp joins 2 to 20 local files with ffmpeg, with a crossfade from 0 to 5 seconds, and writes 44100 Hz stereo. It does not show a waveform. The chat app still sees the paths.',
      }],
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
    category: 'join',
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
        text: 'Press Play mix and listen. Export MP3 or WAV. If the sum peaks above 0.98, the whole mix is scaled so the peak lands at 0.98, and the page says how many dB that was.',
      },
    ],
    faqs: [
      {
        q: 'Does my audio get uploaded?',
        a: 'No. Each file is decoded in this tab. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once. Closing the tab drops the mix. There is no account and no saved project.',
      },
      {
        q: 'What happens to the sound?',
        a: 'Tracks are resampled with linear interpolation. A centered pan keeps both sides at full level, so a mono file played alone does not drop 3 dB. Level on each track runs from 0% to 150%. If the sum peaks above 0.98, the whole mix is scaled so the peak lands at 0.98, and the page says how many dB that was. WAV is 16-bit PCM of that mix. MP3 encodes once. This page starts at 192 kbps. The menu is 64, 96, 128, 192, or 320.',
      },
      {
        q: 'What can this not do?',
        a: 'This page does not record, load plugins, or save a project you can reopen. A microphone recording is the [voice recorder](/voice-recorder). Files one after another are the [audio joiner](/audio-joiner).',
      },
      {
        q: 'How is this different from the audio joiner?',
        a: 'The [audio joiner](/audio-joiner) places files end to end. Crossfade there is 0 to 5 seconds, in steps of 0.5. This page plays tracks at the same time.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'The timeline scrolls sideways. A file over 300 MB is rejected. A file this browser cannot decode is skipped, and the page says: {name} could not be decoded. The others stay.',
      },
      {
        q: 'Why only 8 tracks?',
        a: 'The 9th file is rejected. The page says: 8 tracks is the limit on this page.',
      },
    ],
    sections: [
      {
        heading: 'A small mixer, not a DAW',
        paragraphs: [
          'Each file is one clip on its own track. You set level, pan, mute, solo, and where that clip starts. Up to eight tracks play together and export as one file.',
          'This page does not load plugins, and it does not save a project you can reopen. Up to 8 tracks.',
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
          'Files that should play one after another, not on top of each other, belong on the [audio joiner](/audio-joiner). Crossfade there is 0 to 5 seconds, in steps of 0.5. This page stacks tracks.',
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
    name: 'Convert WAV to MP3',
    shortName: 'WAV to MP3',
    icon: 'convert',
    category: 'convert',
    title: 'Convert WAV to MP3 Online Free — 320 kbps',
    description:
      'Convert a WAV to MP3 in this browser. The menu is 64, 96, 128, 192, or 320 kbps, and it starts at 320. Nothing is uploaded.',
    h1: 'Convert WAV to MP3 — Online, Free',
    hero: {
      src: '/wav-to-mp3.svg',
      alt: 'Convert a WAV file to 320 kbps MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Convert a WAV to MP3 in this browser. Nothing is uploaded.',
    intro:
      'This browser decodes the file and encodes an MP3. The menu is 64, 96, 128, 192, or 320 kbps. This page starts at 320. MP3 encodes the decoded samples once, and only the first two channels. Tags are not copied.',
    usesHeading: 'WAV files worth converting',
    uses: [
      'Shrink a studio or field recording until it is small enough to send.',
      'Turn a lossless export into a 192 or 320 kbps MP3 for everyday listening.',
      'Convert first, then trim. A WAV is too large to drag around twice.',
    ],
    howTo: [
      {
        name: 'Drop your WAV',
        text: 'Drag a .wav file onto the page or click to browse. Other audio formats (M4A, FLAC, OGG) convert the same way. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
      },
      {
        name: 'Pick a bitrate',
        text: 'The menu is 64, 96, 128, 192, or 320 kbps. This page starts at 320.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. The encoder runs in your browser and the MP3 downloads straight to your device.',
      },
    ],
    faqs: [
      { q: 'Can I convert more than one WAV?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'Will converting WAV to MP3 lose quality?',
        a: 'MP3 encodes the decoded samples once. It does not keep the WAV. If you want 16-bit PCM of those samples, WAV is still in the menu.',
      },
      {
        q: 'Which bitrate should I choose?',
        a: 'The menu is 64, 96, 128, 192, or 320 kbps. This page starts at 320.',
      },
      {
        q: 'How much smaller is the MP3?',
        a: 'The bitrate is the encode setting. This page does not predict the MP3’s size in bytes.',
      },
      {
        q: 'Are my WAV tags and artwork kept?',
        a: 'No. Title, artist, and cover are the [MP3 tag editor](/mp3-tag-editor), after you have the MP3.',
      },
      {
        q: 'Does the WAV file get uploaded anywhere?',
        a: 'No. The file is decoded in your browser, encoded to MP3 by a library that ships with this site, and saved back to your disk. The audio itself never leaves your device.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'The conversion stays in this tab. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
      {
        q: 'Can I convert a local WAV from Claude or Cursor?',
        a: 'This page converts in the browser at 128-320 kbps. /mcp calls ffmpeg on a file already on your computer. MP3, M4A, and OGG can be 64, 96, 128, 192, 256, or 320 kbps, and the default is 192. WAV is 16-bit PCM. FLAC is lossless. The chat app still sees the path.',
      }],
    sections: [
      {
        heading: 'Which bitrate to pick',
        paragraphs: [
          'MP3 throws away some of the WAV. The bitrate is how much it keeps.',
        ],
        bullets: [
          'The menu is 64, 96, 128, 192, and 320 kbps.',
          'This page starts at 320.',
          'MP3 encodes the decoded samples once. Tags are not copied.',
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
    related: ['bitrate-converter', 'ogg-to-mp3', 'stereo-to-mono'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop WAV files, or click to browse',
      converter: true,
      batch: true,
      exportLabel: 'Convert to MP3',
    },
  },
  {
    slug: 'flac-to-mp3',
    cardLine: 'Decode a FLAC and encode MP3 at 320, 192, or 128 kbps.',
    name: 'FLAC to MP3 Converter',
    shortName: 'FLAC to MP3',
    icon: 'convert',
    category: 'convert',
    title: 'FLAC to MP3 Converter — Convert FLAC Files Online Free',
    description:
      'Decode a FLAC and encode MP3 at 320, 192, or 128 kbps. This page starts at 320. Nothing is uploaded.',
    h1: 'FLAC to MP3 Converter — Convert FLAC to MP3, Online Free',
    hero: {
      src: '/flac-to-mp3.svg',
      alt: 'Convert a FLAC file to 320 kbps MP3',
      width: 32,
      height: 32,
    },
    subtitle: 'Decode a FLAC and encode an MP3 in this browser. Nothing is uploaded.',
    intro:
      'This browser decodes the FLAC and encodes an MP3. The menu is 320, 192, or 128 kbps. This page starts at 320. WAV, 96, and 64 are not in this menu. Tags are not copied.',
    usesHeading: 'FLAC files worth converting',
    uses: [
      'Make an MP3 at 320, 192, or 128 kbps.',
      'Keep the FLAC if you still need the lossless file.',
      'Trim after converting, on the [audio trimmer](/audio-trimmer).',
    ],
    howTo: [
      {
        name: 'Drop your FLAC',
        text: 'Drag a .flac file onto the page or click to browse. Other lossless formats convert the same way. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
      },
      {
        name: 'Pick a bitrate',
        text: 'The menu is MP3 at 320, 192, or 128 kbps. This page starts at 320. WAV is not in this menu.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to MP3. The encoder runs in your browser and the MP3 downloads straight to your device.',
      },
    ],
    faqs: [
      { q: 'Can I convert more than one FLAC?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'Does converting FLAC to MP3 lose quality?',
        a: 'MP3 encodes the decoded samples once. It does not keep the FLAC. Keep the FLAC if you still need that file.',
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
        a: 'The conversion stays in this tab. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'Why convert FLAC to MP3',
        paragraphs: [
          'FLAC is lossless and large. MP3 is what most phones, cars, and older players actually open. A 25 MB FLAC often lands near 12 MB at 320 kbps, and smaller at 192 or 128.',
          'The conversion decodes the FLAC and encodes a new MP3. Keep the FLAC if you still need that file.',
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
      dropHint: 'Drop FLAC files, or click to browse',
      converter: true,
      batch: true,
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
    category: 'convert',
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
    subtitle: 'Decode an MP3 to 16-bit WAV in this browser. Nothing is uploaded.',
    intro:
      'This page writes 16-bit PCM of the decoded samples. It cannot restore samples the MP3 already dropped. The menu is WAV only.',
    usesHeading: 'Reasons to decode to WAV',
    uses: [
      'Hand an MP3 to an editor, DAW or app that only accepts WAV.',
      'Stop generation loss: edit in WAV, compress back to MP3 once at the end.',
      'Archive a decoded copy alongside the original before further edits.',
    ],
    howTo: [
      {
        name: 'Drop your MP3',
        text: 'Drag an .mp3 file onto the page or click to browse. Other compressed formats decode the same way. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
      },
      {
        name: 'Keep WAV selected',
        text: 'The menu is WAV only. The file is 16-bit PCM of the decoded samples.',
      },
      {
        name: 'Convert and download',
        text: 'Click Convert to WAV. The decoded audio is written locally and downloads immediately.',
      },
    ],
    faqs: [
      { q: 'Can I convert more than one MP3 to WAV?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
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
        a: 'The conversion stays in this tab. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
    related: ['wav-to-mp3', 'extract-audio', 'stereo-to-mono'],
    editor: {
      defaultFormat: 'wav',
      dropHint: 'Drop MP3 files, or click to browse',
      converter: true,
      batch: true,
      exportLabel: 'Convert to WAV',
      formats: ['wav'],
    },
  },
  {
    slug: 'compress-audio',
    cardLine: 'Re-encode to a lower MP3 bitrate. This page starts at 128 kbps.',
    name: 'Compress Audio',
    shortName: 'Compressor',
    icon: 'file',
    category: 'convert',
    title: 'Compress Audio — Reduce MP3 & WAV File Size Online',
    description:
      'Shrink MP3, WAV and other audio files to a smaller size in your browser — pick a lower bitrate, listen, download. Free, nothing uploaded.',
    h1: 'Compress Audio — Reduce an MP3 File’s Size, Online Free',
    hero: {
      src: '/compress-audio.svg',
      alt: 'Re-encode a large WAV or MP3 at a lower bitrate',
      width: 32,
      height: 32,
    },
    subtitle: 'Re-encode at a lower MP3 bitrate. This page starts at 128 kbps.',
    intro:
      'This page re-encodes at a lower MP3 bitrate. The menu is 320, 192, 128, 96, or 64 kbps, and it starts at 128. There is no WAV in the menu. An MP3 encoded again loses detail again. This is not the [level compressor](/compressor).',
    usesHeading: 'Files worth shrinking',
    uses: [
      'Fit a lecture or voice memo under an email or chat-app size cap.',
      'Turn a WAV export into small MP3s for a quick review link.',
      'Take a 320 kbps library down to 128 kbps for a phone on mobile data.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Add an MP3, WAV, M4A or other audio file. It is decoded on your device and never uploaded. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
      },
      {
        name: 'Pick the target size',
        text: 'The menu is 320, 192, 128, 96, or 64 kbps. This page starts at 128. A higher number does not restore detail.',
      },
      {
        name: 'Listen and export',
        text: 'Preview the compressed result, then save it. Check that voices and cymbals still sound clean at the bitrate you chose.',
      },
    ],
    faqs: [
      { q: 'Can I shrink more than one file?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'How does audio compression work here?',
        a: 'The file is decoded and re-encoded as MP3 at the bitrate you pick. Size scales linearly with bitrate: one minute of stereo audio is about 2.4 MB at 320 kbps, 1 MB at 128 and 0.5 MB at 64.',
      },
      {
        q: 'Which bitrate keeps good quality?',
        a: 'The menu is 320, 192, 128, 96, or 64 kbps. This page starts at 128. A higher number does not restore detail.',
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
        a: 'The conversion stays in this tab. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
    related: ['bitrate-converter', 'wav-to-mp3', 'compressor'],
    editor: {
      defaultFormat: 'mp3-128',
      dropHint: 'Drop audio files, or click to browse',
      converter: true,
      batch: true,
      exportLabel: 'Compress',
      formats: ['mp3-320', 'mp3-192', 'mp3-128', 'mp3-96', 'mp3-64'],
    },
  },
  {
    slug: 'bitrate-converter',
    cardLine: 'Re-encode any audio as MP3 at 64, 96, 128, 192, or 320 kbps.',
    name: 'Bitrate Converter',
    shortName: 'Bitrate',
    icon: 'convert',
    category: 'convert',
    title: 'Bitrate Converter — MP3 at 64 to 320 kbps',
    description:
      'Change an audio file to 64, 96, 128, 192, or 320 kbps MP3 in the browser. A higher bitrate does not restore detail. Nothing is uploaded.',
    h1: 'Bitrate Converter: set an MP3 to 64–320 kbps',
    hero: {
      src: '/bitrate-converter.svg',
      alt: 'Five bitrate bars, the middle one marked as 192 kbps',
      width: 32,
      height: 32,
    },
    subtitle: 'Set an MP3 to 64, 96, 128, 192, or 320 kbps. A higher number does not restore detail.',
    intro:
      'Pick one of 64, 96, 128, 192, or 320 kbps. This page starts at 192. A higher number does not restore detail the file already lost.',
    usesHeading: 'Jobs this page is for',
    uses: [
      'Match a brief that asks for 192 or 128 kbps and export that file.',
      'Turn a WAV into an MP3 at 320 kbps, the top rate on this page.',
      'Re-encode a 320 kbps file at 128 kbps. The higher number does not come back.',
    ],
    howTo: [
      {
        name: 'Add the file',
        text: 'Drop any audio file this browser can decode. The conversion stays in the tab. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
      },
      {
        name: 'Choose the bitrate',
        text: 'Open the format menu. It starts at 192 kbps. The other rates are 320, 128, 96, and 64.',
      },
      {
        name: 'Export the MP3',
        text: 'The file is encoded at the rate you picked. Tags and artwork are not copied across.',
      },
    ],
    faqs: [
      { q: 'Can I change the bitrate of more than one file?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'Will 320 kbps make a 128 kbps MP3 sound better?',
        a: 'No. The encoder can only keep what the source still has. A 128 kbps MP3 saved again at 320 kbps is a larger file of the same take. Start from the WAV or the original recording if you need the detail.',
      },
      {
        q: 'Which bitrate should I pick?',
        a: '320 kbps for music you will still listen to closely, 192 as the rate the menu opens on, 128 for speech or a file you need to send, and 96 or 64 only when the destination is tiny and speech is enough. One minute of stereo is about 2.4 MB, 1.4 MB, 1 MB, 0.7 MB, and 0.5 MB at those five rates.',
      },
      {
        q: 'How is this different from compress audio?',
        a: 'Same encoder, different job. This page is for setting a bitrate, and it starts at 192 kbps. Compress audio is for making the file smaller, and it starts at 128 kbps. WAV to MP3 is only for WAV files, and it starts at 320 kbps.',
      },
      {
        q: 'Can I convert to WAV or Opus here?',
        a: 'No. This page writes MP3 at 320, 192, 128, 96, or 64 kbps. WAV is not a bitrate. For a WAV copy, use MP3 to WAV. Opus and AAC are not in the menu.',
      },
      {
        q: 'Does my file get uploaded?',
        a: 'No. The browser decodes the file and encodes the MP3 in this tab, the same local encoder compress audio uses. After the page has loaded, the conversion still runs with the network off.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'The conversion stays in this tab. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'What the five rates weigh',
        paragraphs: [
          'The menu is 320, 192, 128, 96, and 64 kbps, constant bitrate. One minute of stereo is about 2.4 MB, 1.4 MB, 1 MB, 0.7 MB, and 0.5 MB in that order. The page opens on 192 kbps.',
          'A WAV has no bitrate of its own, so the number you pick is the first lossy pass. An MP3, M4A, OGG, or Opus file has already lost something, and this pass loses a little more.',
        ],
      },
      {
        heading: 'Which rate fits the job',
        paragraphs: [
          'Pick by what happens to the file next, not by the largest number in the menu.',
        ],
        bullets: [
          '320 kbps when the source is a WAV and you still want it close.',
          '192 kbps as the ordinary music rate, which is where the menu starts.',
          '128, 96, or 64 kbps for speech, a memo, or a copy that has to be small.',
        ],
      },
      {
        heading: 'A higher number is not a restoration',
        paragraphs: [
          'Encoding a 128 kbps MP3 at 320 kbps stores the same gaps in a bigger file. The only way to get the missing highs back is a source that still has them.',
          'This is the same encoder as compress audio. Use that page when the goal is a smaller file and you do not care which of the five rates it starts on. Use WAV to MP3 when the source is a WAV and you want 320 kbps without picking it.',
        ],
      },
    ],
    related: ['compress-audio', 'wav-to-mp3', 'mp3-to-wav'],
    editor: {
      defaultFormat: 'mp3-192',
      dropHint: 'Drop audio files, or click to browse',
      converter: true,
      batch: true,
      exportLabel: 'Convert',
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
        a: 'The page reverses the decoded samples. The length stays the same. WAV is 16-bit PCM of those samples. MP3 encodes once.',
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
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Reverse and download',
      quickControls: ['reverse'],
    },
  },
  {
    slug: 'change-audio-speed',
    cardLine: 'Speed a lecture up to 2× or slow a riff to 0.5×. Pitch moves with the speed.',
    name: 'Change Audio Speed',
    shortName: 'Speed Changer',
    icon: 'clock-counter-clockwise',
    category: 'effects',
    title: 'Change Audio Speed Online — Speed Up or Slow Down Audio',
    description:
      'Speed up a lecture or slow a song for practice, from 0.5× to 2×. Preview in your browser, export MP3 or WAV. Pitch moves with the tempo.',
    h1: 'Change Audio Speed — Speed Up or Slow Down Audio, Online Free',
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
      'Pitch rises and falls with the tempo. To move pitch and keep the length, use the [pitch changer](/pitch-changer).',
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
        text: 'Play the result to check the pace, then save it as MP3 or WAV.',
      },
    ],
    faqs: [
      {
        q: 'Can I speed up audio without changing the pitch?',
        a: 'On this page, speed and pitch move together: 2× is about an octave higher, 0.5× about an octave lower. The [tempo changer](/tempo-changer) keeps the pitch and changes the length, from 0.75× to 1.25× in steps of 0.01. To change the pitch and keep the length, use the [pitch changer](/pitch-changer).',
      },
      {
        q: 'What speeds can I choose?',
        a: 'From 0.50× to 2.00×, in steps of 0.05. Pitch follows the speed.',
      },
      {
        q: 'How fast is the export?',
        a: 'The change is rendered in this tab after you export. This page does not time that render.',
      },
      {
        q: 'Can I speed up only part of a track?',
        a: 'Yes. Select the section on the waveform, set the mode to Keep selection, then choose your speed — the export contains just that part, faster or slower.',
      },
      {
        q: 'Is there a file length limit?',
        a: 'A file over 300 MB is rejected. A file over one hour still opens, with a memory warning. That warning is not a length cap.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'Speed and pitch move together',
        paragraphs: [
          'This control plays the file faster or slower the way a tape would, from 0.5× to 2×. Faster means a shorter file and a higher pitch. Slower means a longer file and a lower pitch. 2× sits about an octave higher, 0.5× about an octave lower.',
          'Keeping the pitch while the length changes is the [tempo changer](/tempo-changer), from 0.75× to 1.25×. This page still moves the pitch with the speed. A higher or lower voice at the same length is the [pitch changer](/pitch-changer), up to 12 semitones.',
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
          'The [slowed reverb](/slowed-reverb) page is this same speed control plus a 2.2 second reverb. Pitch still follows the speed. This page is only the speed control.',
          'Above 100 percent on the slowed page is the nightcore direction. Do that there if you also want the reverb knob. Export here if you only want the new length.',
        ],
      },
    ],
    related: ['pitch-changer', 'metronome', 'tempo-changer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Change speed',
      quickControls: ['speed'],
      speedPresets: [0.5, 0.75, 1, 1.25, 1.5, 2],
    },
  },
  {
    slug: 'increase-volume',
    cardLine: 'Lift a quiet file from 10% to 400%. Above 100% a limiter is applied.',
    name: 'Increase MP3 Volume',
    shortName: 'MP3 Volume',
    icon: 'volume',
    category: 'edit',
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
    subtitle: 'Gain from 10% to 400%. Above 100% a limiter is applied.',
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
        a: 'Up to 400%. Above 100%, a limiter is applied: threshold −2 dB, knee 3, ratio 20, attack 0.002 seconds, release 0.15 seconds.',
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
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
          'A podcast target of −16 LUFS: measure it on the [loudness meter](/loudness-meter). If the sample peak would pass −1 dBFS, that page stops the gain.',
          'One peak already near full scale, and the rest too quiet: [normalize audio](/normalize-audio) sets that peak to 0.98, capped at 4×. It will not lift the quiet parts further.',
          'Loud and quiet passages that should move closer: the [level compressor](/compressor), not this slider.',
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
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Boost and download',
      quickControls: ['gain'],
      maxGainPercent: 400,
      gainPresets: [100, 150, 200, 250, 400],
    },
  },
  {
    slug: 'mp4-to-mp3',
    cardLine: 'Save the soundtrack of a video clip, screen recording or camera file as MP3.',
    name: 'MP4 to MP3 Converter',
    shortName: 'MP4 to MP3',
    icon: 'film',
    category: 'convert',
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
      'Turn MP4 videos into MP3 audio without installing anything. This browser reads the file from disk and decodes the soundtrack. A file over 300 MB is rejected. The picture is not encoded.',
    usesHeading: 'Videos people convert for the sound',
    uses: [
      'Save a lecture, concert, or interview as audio you can play with the screen off.',
      'Skip uploading a huge video. The soundtrack is decoded on this device.',
      'Convert the whole track, then trim it if you only need a section.',
    ],
    howTo: [
      {
        name: 'Drop your video',
        text: 'Drag an MP4 onto the page or click to browse. WebM and MOV files with standard audio tracks work the same way. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
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
      { q: 'Can I convert more than one video?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'Does the video get uploaded anywhere?',
        a: 'No — and this is the part worth repeating with video, because files are big. The browser reads the file from your disk, decodes only its audio track, and writes the MP3 locally. Video frames are never processed or transmitted.',
      },
      {
        q: 'Which video formats are supported?',
        a: 'A file this browser can decode. If it cannot, the message is: This file could not be decoded — it may be corrupted, or its codec is not supported by your browser. That message does not name the codec.',
      },
      {
        q: 'How fast is it compared to online converters?',
        a: 'This page does not time the conversion against an upload site. The file stays on this device. A file over 300 MB is rejected before decode.',
      },
      {
        q: 'Can I convert just part of the video?',
        a: 'This page converts the whole soundtrack. A span of it is the [audio trimmer](/audio-trimmer), after you have the audio file.',
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
          'The picture is not decoded, so resolution is not part of the conversion. The file stays on this device. A file over 300 MB is rejected.',
        ],
      },
      {
        heading: 'Which MP3 bitrate to use',
        paragraphs: [
          'The soundtrack is encoded once, at the rate you pick.',
        ],
        bullets: [
          'The menu is 64, 96, 128, 192, and 320 kbps. This page starts at 320.',
          'WAV is 16-bit PCM of the decoded samples. MP3 encodes those samples once.',
          'Title, artist, and cover are not copied.',
        ],
      },
      {
        heading: 'MP4 to MP3, or extract the audio',
        paragraphs: [
          'The export starts as MP3 at 320 kbps. WebM and MOV open only if this browser can decode the soundtrack. Switch the format to WAV for a 16-bit copy. The page written for WAV as the default choice is [extract audio](/extract-audio). If you only need one minute, convert the whole soundtrack here and then use the [audio trimmer](/audio-trimmer). This page does not cut a span out of the video.',
        ],
      },
      {
        heading: 'Files the browser cannot read',
        paragraphs: [
          'If this browser cannot decode the soundtrack, the message is: This file could not be decoded — it may be corrupted, or its codec is not supported by your browser. It does not name the codec.',
          'The MP3 does not keep a video title or thumbnail. Set the track name afterwards in the [MP3 tag editor](/mp3-tag-editor) if you need it to show up in a player.',
        ],
      },
    ],
    related: ['extract-audio', 'audio-trimmer', 'mp3-tag-editor'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop MP4 or video files, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      converter: true,
      batch: true,
      exportLabel: 'Convert to MP3',
    },
  },
  {
    slug: 'extract-audio',
    cardLine: 'Pull clean audio out of any video for editing, transcription or sampling.',
    name: 'Audio Extractor',
    shortName: 'Audio Extractor',
    icon: 'film',
    category: 'convert',
    title: 'Audio Extractor — Extract Audio from Video Online Free',
    description:
      'Extract the audio track from any video in your browser and save it as MP3 or lossless WAV. Free, private, no upload — even for large files.',
    h1: 'Audio Extractor — Soundtrack as WAV or MP3',
    hero: {
      src: '/extract-audio.svg',
      alt: 'Save a video soundtrack as MP3 or WAV',
      width: 32,
      height: 32,
    },
    subtitle: 'Save the soundtrack as MP3 or 16-bit WAV. Nothing is uploaded.',
    intro:
      'Separate the sound from the pictures: pull interviews out of video calls, save a concert film as an album, or reuse a soundtrack in your own edit. The audio track is decoded on your device and can be saved as 16-bit WAV of the decoded samples, or as MP3.',
    usesHeading: 'Soundtracks worth pulling out',
    uses: [
      'Grab the audio from a screen recording or a phone video.',
      'Keep WAV if you will edit again, or MP3 if you are done.',
      'Hand a long file to the trimmer when only a minute of it matters.',
    ],
    howTo: [
      {
        name: 'Drop the video',
        text: 'Any MP4, WebM or MOV with a standard soundtrack works. The file never leaves your device. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
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
      { q: 'Can I pull the audio out of more than one video?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'What is the difference between this and an MP4 to MP3 converter?',
        a: 'Same decode path as [MP4 to MP3](/mp4-to-mp3). This page starts at 192 kbps. That page starts at 320 kbps. Both menus include WAV.',
      },
      {
        q: 'Can I get the original quality?',
        a: 'WAV is 16-bit PCM of the decoded samples. MP3 encodes those samples once. Neither one restores detail the soundtrack already lost.',
      },
      {
        q: 'Which video formats work?',
        a: 'A file this browser can decode. If it cannot, the message is: This file could not be decoded — it may be corrupted, or its codec is not supported by your browser. That message does not name the codec.',
      },
      {
        q: 'Is there a file size limit?',
        a: 'A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
      {
        q: 'Can I remove the audio from a video instead?',
        a: 'This page keeps the sound and drops the pictures. It does not return a video.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'The conversion stays in this tab. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
      {
        q: 'Can I extract a local soundtrack from Claude or Cursor?',
        a: 'This page extracts a soundtrack this browser can decode. If it cannot, the message does not name the codec. /mcp uses ffmpeg on your computer, and a format opens only when that ffmpeg build includes the decoder. It does not fetch a video from a link. The chat app still sees the path.',
      }],
    sections: [
      {
        heading: 'Pull the soundtrack off a video',
        paragraphs: [
          'Extract audio decodes the soundtrack and drops the picture. The export starts as MP3 at 192 kbps. The menu also includes WAV.',
          '[MP4 to MP3](/mp4-to-mp3) is the same decode path, starting at 320 kbps.',
        ],
      },
      {
        heading: 'What comes out, and what does not',
        paragraphs: [
          'Only the audio track is decoded. The video frames are discarded:',
        ],
        bullets: [
          'A phone video or a screen recording becomes a file you can trim, join, or tag.',
          'WAV is 16-bit PCM of the decoded samples. MP3 encodes those samples once.',
          'If this browser cannot decode the soundtrack, the message does not name the codec.',
        ],
      },
      {
        heading: 'It does not mute the video',
        paragraphs: [
          'This page keeps the sound and drops the pictures. It does not return a video.',
          'A file over 300 MB is rejected. The picture is not decoded, so resolution is not part of the conversion. Nothing is uploaded.',
        ],
      },
    ],
    related: ['mp4-to-mp3', 'audio-trimmer', 'volume-booster'],
    editor: {
      defaultFormat: 'mp3-192',
      dropHint: 'Drop video files, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      converter: true,
      batch: true,
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
        a: 'The browser decides the capture container. Export is MP3 or 16-bit WAV.',
      },
      {
        q: 'Can I trim the silence off the start and end?',
        a: 'Yes, that is the point of the editor below the recorder. Drag across the part you want to keep, set the mode to Keep selection, and export — the dead air disappears.',
      },
      {
        q: 'Which browsers support recording?',
        a: 'If this browser cannot record, the page says: Recording is not available in this browser. If permission is blocked, it says: Microphone access was blocked.',
      },
      {
        q: 'How long can I record?',
        a: 'This page does not set a minute cap. The take stays in this tab until you export. Closing the tab without an export drops it.',
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
    related: ['soundboard', 'metronome', 'multi-track-audio-editor'],
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
      'Transcribe a file to TXT or SRT in this browser. About 10 minutes per file. Thirty language codes. Nothing is uploaded.',
    h1: 'Audio to Text — Transcribe a Recording, Online Free',
    hero: {
      src: '/audio-to-text.svg',
      alt: 'Turn a voice memo or an interview into a written transcript',
      width: 32,
      height: 32,
    },
    subtitle: 'A file becomes TXT or SRT. About 10 minutes. Thirty language codes.',
    intro:
      'Drop a file. Pick one of the thirty language codes, or leave detection on. Pick Tiny or Base. The model downloads once from this page, then the file is transcribed in this tab. One file stops at about 10 minutes. One transcript stays in the box. Two or more come back as a ZIP of TXT and SRT. This page does not score how close the words are.',
    usesHeading: 'Transcripts people actually need',
    uses: [
      'Turn a lecture, meeting or interview into notes you can search and quote.',
      'Caption a video or podcast episode by exporting an SRT with timestamps.',
      'Pull the words out of a voice memo without sending the recording anywhere.',
    ],
    howTo: [
      {
        name: 'Drop your file',
        text: 'Add an MP3, WAV, M4A, video file or other recording. It is decoded on your device and never uploaded. Several recordings can share the language and model you pick next. Each one still stops around 10 minutes. One transcript stays in the box. Two or more come back as a ZIP of TXT and SRT.',
      },
      {
        name: 'Pick a language and model',
        text: 'Pick one of the thirty language codes, or leave detection on. Pick Tiny or Base. Without WebGPU, the page starts on Tiny. This page does not score the transcript.',
      },
      {
        name: 'Transcribe and download',
        text: 'The first run downloads the model once and caches it. Edit the transcript if you like, then save it as TXT or SRT.',
      },
    ],
    faqs: [
      { q: 'Can I transcribe more than one recording?', a: 'Yes. Several recordings share the language and the model. They run one after another on this device, and each one is still capped at about 10 minutes. One transcript stays in the box for you to edit. Two or more download as a ZIP of TXT and SRT files. A phone runs out of time and memory sooner.' },
      {
        q: 'Is my audio uploaded?',
        a: 'No. The file is decoded in this tab. The model is onnx-community/whisper-tiny or onnx-community/whisper-base. It downloads once from this page, then the browser keeps it. The audio is not uploaded for the transcript.',
      },
      {
        q: 'How accurate is the transcription?',
        a: 'This page does not score the transcript. The text stays in the box so you can edit it before you download TXT or SRT.',
      },
      {
        q: 'What are the limits?',
        a: 'Each file stops at about 10 minutes. Trim a longer file on the [audio trimmer](/audio-trimmer) first. There are no speaker labels. This page reads a file. The [voice recorder](/voice-recorder) is the microphone.',
      },
      {
        q: 'How is this different from the voice recorder?',
        a: 'The voice recorder captures your microphone into an audio file; this page reads an existing file and writes out the words. They pair well: record there, transcribe here. Both run entirely in your browser.',
      },
      {
        q: 'Which languages does it support?',
        a: 'The page lists thirty language codes. Leave detection on, or pick one code. This page does not score the transcript.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'A file over 300 MB is rejected. Each file still stops at about 10 minutes. The model downloads once. Without WebGPU, the page starts on Tiny.',
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
          'The page lists thirty language codes. Pick one, or leave detection on:',
        ],
        bullets: [
          'The models are onnx-community/whisper-tiny and onnx-community/whisper-base.',
          'Without WebGPU, the page starts on Tiny.',
          'The on-screen sizes were not measured for this page.',
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
      batch: true,
      dropHint: 'Drop audio or video files, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      exportLabel: 'Transcribe',
    },
  },
  {
    slug: 'volume-booster',
    cardLine: 'Gain from 10% to 400% on audio that may include video. Above 100% a limiter is applied.',
    name: 'Audio Volume Booster',
    shortName: 'Audio Volume Booster',
    icon: 'volume',
    category: 'edit',
    title: 'Audio Volume Booster — Make Audio Louder Online Free',
    description:
      'Gain from 10% to 400% on audio that may include video. Above 100% a limiter is applied. Nothing is uploaded.',
    h1: 'Audio Volume Booster — Make Audio Louder, Online Free',
    hero: {
      src: '/volume-booster.svg',
      alt: 'Boost a quiet video soundtrack',
      width: 32,
      height: 32,
    },
    subtitle: 'Gain from 10% to 400% on a file that may include video. Above 100% a limiter is applied.',
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
        a: 'Up to 400% of the original. Above 100%, a limiter is applied: threshold −2 dB, knee 3, ratio 20, attack 0.002 seconds, release 0.15 seconds. The slider cannot create energy the recording did not have. A measured peak, capped at 4×, is [normalize audio](/normalize-audio).',
      },
      {
        q: 'What does the limiter actually do?',
        a: 'Above 100%, a compressor is applied: threshold −2 dB, knee 3, ratio 20, attack 0.002 seconds, release 0.15 seconds.',
      },
      {
        q: 'Can I boost the sound of a video?',
        a: 'Yes. Drop an MP4 or WebM and the soundtrack is decoded locally, boosted, and exported as MP3 or WAV. The video track is ignored — use the audio extractor if you only want the sound.',
      },
      {
        q: 'Boosting on my phone — does that work?',
        a: 'The gain control runs from 10% to 400%. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
          'Above 100% this page runs a limiter: threshold −2 dB, knee 3, ratio 20, attack 0.002 seconds, release 0.15 seconds. The slider runs from 10% to 400%.',
        ],
        bullets: [
          'The slider is 10% to 400%, in steps of 5.',
          'Above 100%, the limiter in the paragraph above is applied. At or below 100%, it is not.',
          'A measured peak, capped at 4×, is [normalize audio](/normalize-audio).',
          'This page writes a louder file. It does not change the computer’s speaker volume.',
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
          'Volume booster, this page: you pick the multiplier, from 10% to 400%, and above 100% the limiter in the previous section holds peaks. Video files are accepted here. The picture is not saved.',
          '[Normalize audio](/normalize-audio): one measured gain so the loudest peak lands at 0.98, capped at 4×.',
          '[Level compressor](/compressor): pulls loud moments down and quiet words up, then puts the peak back, capped at 0.98. A boost will not do that.',
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
      showAdjust: false,
      dropHint: 'Drop an audio or video file, or click to browse',
      exportLabel: 'Boost and download',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      quickControls: ['gain'],
      maxGainPercent: 400,
      gainPresets: [100, 150, 200, 250, 400],
    },
  },
  {
    slug: 'normalize-audio',
    cardLine: 'Bring each file’s peak to 0.98. The gain stops at 4×.',
    name: 'Audio Normalizer',
    shortName: 'Normalizer',
    icon: 'trending-up',
    category: 'edit',
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
    subtitle: 'Peak normalize to 0.98. The gain stops at 4×. Nothing is uploaded.',
    intro:
      'Normalizing scans your file to find its loudest peak, then raises the entire file by exactly the amount needed to bring that peak just below clipping. The result: a file that uses the full volume range it was given, with no manual guesswork. It is the right fix when a recording is consistently too quiet — voice memos, field recordings, exports from other apps that came out at −18 dB.',
    usesHeading: 'When one level should fit',
    uses: [
      'Bring a quiet file up so its loudest peak hits a normal level.',
      'Even out clips you will join, so one chapter is not half as loud as the next.',
      'Use this when you want the peak at 0.98 rather than picking a gain.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A or other audio file. It is decoded and analyzed locally — nothing leaves your device. Several files can share that Normalize button. Each file is raised to its own peak. One file downloads alone. Two or more come back as one ZIP.',
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
      { q: 'Can I normalize more than one file?', a: 'Yes. Turn Normalize on and every file in the queue uses it. Each file is measured on its own and raised to its own peak, one after another on this device. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
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
        a: 'No. Raising quiet passages on their own is the [level compressor](/compressor). This page shifts the whole recording by one gain and leaves the dynamics as they were.',
      },
      {
        q: 'Does it use LUFS loudness targets like streaming platforms?',
        a: 'No. This page moves the peak to 0.98, and the gain stops at 4×. The [loudness meter](/loudness-meter) measures integrated LUFS and can aim at −16, −14, or −23. If the sample peak would pass −1 dBFS, that gain stops. It is not a room meter.',
      },
      {
        q: 'Does normalizing reduce quality?',
        a: 'WAV is 16-bit PCM after one gain. MP3 encodes that result once. The gain itself does not restore samples the source already lost.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
      {
        q: 'Can I normalize a local file from Claude or Cursor?',
        a: 'This page raises the peak in the browser, to about -0.2 dB. /mcp runs ffmpeg loudnorm once, at -16 LUFS, -1.5 dBTP, and LRA 11. That is one pass, not a second measured pass. The chat app still sees the path.',
      }],
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
      exportLabel: 'Normalize and download',
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop audio files, or click to browse',
      batch: true,
      quickControls: ['gain', 'normalize'],
    },
  },
  {
    slug: 'compressor',
    cardLine: 'Pull loud peaks down and lift quiet words, without making the whole file louder.',
    name: 'Level Compressor',
    shortName: 'Level Compressor',
    icon: 'volume',
    category: 'edit',
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
        a: 'No. The compressor is a Web Audio dynamics processor inside your browser tab. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The slider and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
      exportLabel: 'Compress and download',
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['compress'],
    },
  },
  {
    slug: 'echo',
    cardLine: 'Add spaced repeats you can time — a slap, a canyon, not a wash of reverb.',
    name: 'Add Echo to Audio',
    shortName: 'Add Echo to Audio',
    icon: 'reverse',
    category: 'effects',
    title: 'Add Echo to Audio — Online Echo Effect Free',
    description:
      'Add a timed echo to any audio in your browser. Set the delay and how many repeats. Free, nothing uploaded.',
    h1: 'Add Echo to Audio — Online Echo Effect Free',
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
        a: 'No. The echo is a Web Audio delay inside your browser tab. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The sliders and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
    related: ['audio-distorter', 'slowed-reverb', 'bitcrusher'],
    editor: {
      exportLabel: 'Add echo',
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['echo'],
    },
  },
  {
    slug: 'audio-distorter',
    cardLine: 'Push a clean take into a warm clip or a hard one.',
    name: 'Audio Distorter',
    shortName: 'Distorter',
    icon: 'waveform',
    category: 'effects',
    title: 'Audio Distorter — Soft Clip to a Hard Clip',
    description:
      'Add overdrive to any audio in your browser. One drive slider, from a warm clip to a hard one. Nothing is uploaded.',
    h1: 'Audio Distorter — Add Overdrive to a Clean Take',
    hero: {
      src: '/audio-distorter.svg',
      alt: 'Flatten the peaks of a clean recording',
      width: 32,
      height: 32,
    },
    subtitle: 'One slider. The start value is 40%. 0% leaves the file as you dropped it.',
    intro:
      'This page runs each sample through a tanh curve. At the 40% start, a sample of 0.25 becomes about 0.69. At 100% that same sample is pushed to about 1. Drive at 0 skips the curve, so the file stays as decoded. Processing stays in your browser.',
    usesHeading: 'When the clip is the point',
    uses: [
      'Put a short overdrive on a clean guitar or synth so it sits forward.',
      'Rough up one voice line for a trailer, a game hit, or a podcast sting.',
      'Start a lo-fi tone here, then dull the new highs on the low-pass filter.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Set the drive',
        text: '0% is clean. 40% is the start. 100% is the hardest clip this page will make.',
      },
      {
        name: 'Preview and export',
        text: 'Play it, then export MP3 or WAV. The length stays the same.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The clip is a Web Audio waveshaper in your browser tab. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
      },
      {
        q: 'What does the slider actually do?',
        a: 'Drive at 0 skips the waveshaper, so the samples stay as decoded. Above 0, each sample x becomes tanh(k·x) / tanh(k), where k is 10^(drive × 1.6) − 1. At the 40% start, k is about 3.4, and a sample of 0.25 becomes about 0.69. At 100%, k is about 39, and that sample is pushed to about 1. A full-scale sample stays at full scale. The node oversamples 2×. WAV keeps that curve. MP3 re-encodes once, at the bitrate you pick. The length does not change.',
      },
      {
        q: 'What will it refuse to do?',
        a: 'It is not a bitcrusher, and it does not add wow, flutter, or a radio band-limit. A dull lo-fi tone is this page, then the low-pass filter. An amp with a cabinet is a DAW job.',
      },
      {
        q: 'How is this different from the volume booster?',
        a: 'The volume booster multiplies the whole file, then a limiter holds the peaks so they do not square off. This page squares them off on purpose. Echo adds a copy after a delay. Neither of those flattens the waveform.',
      },
      {
        q: 'Can I distort only part of a song?',
        a: 'Yes. Select the section on the waveform and keep that selection. The curve is applied to what you export, not to the rest of the file.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'The slider and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'A curve, not a volume knob',
        paragraphs: [
          'Drive runs from 0% to 100%. The start value is 40%. At 0% the waveshaper is not in the graph, so the export matches the decoded file.',
          'Above 0, each sample x becomes tanh(k·x) / tanh(k). k is 10^(drive × 1.6) − 1. At 40%, k is about 3.4 and a sample of 0.25 becomes about 0.69. At 100%, k is about 39 and that sample is pushed to about 1. A full-scale sample stays at full scale. Speed, pitch, and length stay as they were.',
        ],
      },
      {
        heading: 'How hard to push',
        paragraphs: ['The useful range is small. Past it, you are making an effect:'],
        bullets: [
          '10–30%: a warm clip on a vocal or a clean guitar.',
          '40–70%: the grit is obvious. Peaks flatten and quieter notes get louder.',
          '80–100%: close to a square wave. Speech gets hard to follow.',
        ],
      },
      {
        heading: 'Not a volume boost, and not a bitcrusher',
        paragraphs: [
          'The volume booster makes a quiet file louder and uses a limiter so the peaks do not square off. This page squares them off on purpose. Echo adds a copy after a delay you set. That is a separate page.',
          'This curve does not drop the bit depth, and it does not roll off the highs. The node oversamples 2×, which only reduces aliasing from the new harmonics. A dull lo-fi tone is this page, then the low-pass filter.',
        ],
      },
    ],
    related: ['echo', 'low-pass-filter', 'reverse-audio'],
    editor: {
      exportLabel: 'Distort and download',
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['distort'],
    },
  },
  {
    slug: 'silence-remover',
    cardLine: 'Cut the long quiet stretches and leave the short breaths where they are.',
    name: 'Remove Silence from Audio',
    shortName: 'Silence',
    icon: 'scissors',
    category: 'edit',
    title: 'Remove Silence from Audio — Cut Dead Air Online Free',
    description:
      'Remove long silences from any audio in your browser. Set how quiet and how long a gap must be. Free, nothing uploaded.',
    h1: 'Remove Silence from Audio — Cut Dead Air, Online Free',
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
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device. Several files share the threshold and the gap you set next. Each file is cut on its own. One file downloads alone. Two or more come back as one ZIP.',
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
      { q: 'Can I cut the silence out of more than one file?', a: 'Yes. Several files share the threshold and the minimum gap on this page. Each file is measured and cut on its own, one after another on this device. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'Is my audio uploaded?',
        a: 'No. The level is measured in your browser and the quiet stretches are cut in memory. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The sliders and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
      exportLabel: 'Remove silence',
      defaultFormat: 'mp3-192',
      showAdjust: false,
      silence: true,
      batch: true,
      dropHint: 'Drop audio files, or click to browse',
    },
  },
  {
    slug: 'loudness-meter',
    cardLine: 'Read how loud a file is in LUFS, then match a podcast, streaming, or broadcast target.',
    name: 'Loudness Meter',
    shortName: 'Loudness',
    icon: 'volume',
    category: 'edit',
    title: 'Loudness Meter — Check Audio LUFS Online Free',
    description:
      'Measure integrated LUFS of an audio file in your browser, then match −16, −14, or −23. Sample peak stays at or below −1 dBFS. Free, nothing uploaded.',
    h1: 'Loudness Meter — Check the LUFS of a Song, Online Free',
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
        a: 'No. The file is decoded and measured in your browser. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The three targets and the export accept a tap. A file over 300 MB is rejected.',
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
    cardLine: 'Slow a file from 0.50 to 2.00. Pitch follows. Add a 2.2 second room.',
    name: 'Slowed Reverb Maker',
    shortName: 'Slowed Reverb Maker',
    icon: 'moon',
    category: 'effects',
    title: 'Slowed Reverb Maker — Make Slowed + Reverb Songs Online',
    description:
      'Turn any song into a slowed + reverb edit in your browser — slow it down, wash it in reverb, export MP3. Free, nothing uploaded.',
    h1: 'Slowed Reverb Maker — Slow a Song and Add Reverb, Online Free',
    hero: {
      src: '/slowed-reverb.svg',
      alt: 'Slow a track and add a short room',
      width: 32,
      height: 32,
    },
    subtitle: 'Speed from 0.50 to 2.00, pitch follows, plus a 2.2 second room.',
    intro:
      'Speed runs from 0.50 to 2.00 in steps of 0.05, and the pitch follows. Reverb uses a 2.2 second impulse. Wet at 0 adds no room. Above 1.00 the file gets faster and the pitch rises with it. A speed change that keeps the pitch is the [tempo changer](/tempo-changer).',
    usesHeading: 'The slowed and reverb sound',
    uses: [
      'Set speed below 1.00. The pitch follows. The range is 0.50 to 2.00.',
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
        text: 'Set speed from 0.50 to 2.00. Pitch follows. Set reverb from 0 to 100%. At 0 there is no room. The impulse is 2.2 seconds.',
      },
      {
        name: 'Export the edit',
        text: 'Save as MP3 320 kbps for posting, or WAV if you will edit it further in another app.',
      },
    ],
    faqs: [
      {
        q: 'What speed should I use for slowed + reverb?',
        a: 'The speed control runs from 0.50 to 2.00 in steps of 0.05. Pitch follows the speed. This page does not pick a speed for you.',
      },
      {
        q: 'How do I make a nightcore version instead?',
        a: 'Set speed above 1.00. The range is 0.50 to 2.00 in steps of 0.05, and the pitch follows. Reverb at 0 adds no room.',
      },
      {
        q: 'Does slowing change the pitch?',
        a: 'Yes. This page uses playback rate, so the pitch follows the speed. A change that keeps the pitch is the [tempo changer](/tempo-changer), and that page only reaches 0.75 to 1.25. A fixed circle that does not change speed is [3D audio](/3d-audio).',
      },
      {
        q: 'How much reverb should I add?',
        a: 'The room is a 2.2 second impulse. Wet at 0 adds no room. The control runs from 0 to 100%.',
      },
      {
        q: 'Can I use slowed songs in my videos?',
        a: 'This page changes speed and adds a 2.2 second room. It does not check whether you may post the file.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'The pitch sinks because the speed does',
        paragraphs: [
          'Speed runs from 0.50 to 2.00 in steps of 0.05, and the pitch follows. Keeping the pitch is the tempo changer, and that page stops at 0.75 and 1.25.',
          'The room is a 2.2 second impulse. Wet at 0 adds no room.',
        ],
      },
      {
        heading: 'Nightcore is the same page, the other direction',
        paragraphs: [
          'Push the speed above 100 percent and the pitch rises with it:',
        ],
        bullets: [
          'Above 1.00 the file gets faster, and the pitch rises with it.',
          'Reverb at 0 adds no room.',
          'The range stops at 0.50 and at 2.00.',
        ],
      },
      {
        heading: 'Copyright and the neighbouring tools',
        paragraphs: [
          'This page changes speed and adds a 2.2 second room. It does not check whether you may post the file.',
          'Speed alone, from 0.5× to 2× and without the reverb knob, is the speed changer. A higher or lower key at the same length is the pitch changer. A counted echo that does not change speed is the echo page.',
        ],
      },
    ],
    related: ['echo', 'auto-panner', '3d-audio'],
    editor: {
      exportLabel: 'Slow and download',
      defaultFormat: 'mp3-192',
      showAdjust: false,
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
    category: 'edit',
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
      'This page is a high-shelf at 3 kHz, from 0 to +15 dB, in steps of 1. It cannot cut. At 0 the filter is not inserted. A guitar pedal is a different device, and this page does not drive an amp. A file over 300 MB is rejected.',
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
        a: 'No. The boost is a Web Audio high-shelf filter inside your browser tab — there is no upload step. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'Yes. The editor is built for touch — drag to select, set the slider, export.',
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
      exportLabel: 'Boost treble',
      defaultFormat: 'mp3-320',
      showAdjust: false,
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
    category: 'edit',
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
      'Three bands: a low shelf at 150 Hz, a peaking band at 1 kHz with Q 1, and a high shelf at 3 kHz. Each runs from −15 to +15 dB. There are no more bands. A boost also applies the limiter: threshold −2 dB, knee 3, ratio 20, attack 0.002 seconds, release 0.15 seconds.',
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
        a: 'No. The bands are Web Audio filters (low shelf, peaking, high shelf) inside your browser tab — there is no upload step. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'Yes. The editor is built for touch — drag to select, set the sliders, export.',
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
      exportLabel: 'Apply EQ',
      defaultFormat: 'mp3-320',
      showAdjust: false,
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
    category: 'edit',
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
        a: 'No. The filter is a Web Audio low-pass biquad inside your browser tab — there is no upload step. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
      },
      {
        q: 'Is a low-pass filter the same as noise removal?',
        a: 'The range is 300 to 20000 Hz, in steps of 100. At 19000 Hz or above, the filter is not inserted. This page cuts every frequency above the cutoff. It does not separate noise from the rest of the file.',
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
        a: 'Yes. The editor is built for touch — drag to select, sweep the cutoff, export.',
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
    related: ['high-pass-filter', 'audio-distorter', 'bitcrusher'],
    editor: {
      exportLabel: 'Apply low pass',
      defaultFormat: 'mp3-320',
      showAdjust: false,
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
    category: 'edit',
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
        a: 'No. The filter is a Web Audio high-pass biquad inside your browser tab — there is no upload step. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The cutoff only decides which frequencies survive. Length and pitch stay. The export menu is MP3 at 64, 96, 128, 192, or 320 kbps, or 16-bit WAV.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The editor is built for touch — drag to select, sweep the cutoff, export.',
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
      exportLabel: 'Apply high pass',
      defaultFormat: 'mp3-320',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['hpf'],
    },
  },
  {
    slug: 'waveform-generator',
    cardLine: 'Turn any track into a shareable waveform picture with your own colors.',
    name: 'Audio Waveform Generator',
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
      'This page downloads a PNG of the amplitude. It does not change the audio, and the PNG does not play back as a song. A video of the same file is the [music visualizer](/music-visualizer). Preset sizes export at 2×. A custom side runs from 100 to 8000. Over about 2 million pixels, the export is at 1×.',
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
        a: 'No. The browser decodes the file and draws the picture on a canvas. There is no upload step. After this page’s scripts have loaded, drawing the PNG does not need the network.',
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
        a: 'The controls stack on a narrow screen. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
    related: ['spectrogram-generator', 'image-to-audio', 'audio-trimmer', 'music-visualizer'],
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
    h1: 'Spectrogram Generator — See the Frequencies in a Recording, Online Free',
    hero: {
      src: '/spectrogram-generator.svg',
      alt: 'Download a frequency picture of a song as a PNG',
      width: 32,
      height: 32,
    },
    subtitle: 'See the frequencies in a song or a recording, then download the picture — drawn on your device.',
    intro:
      'This page downloads a PNG of the file. Preview uses at most 480 columns. Export uses at most 3000. The PNG does not play back as a song. Drawing a picture into a WAV is [image to audio](/image-to-audio).',
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
        a: 'No. The browser decodes the file and runs an FFT on it in this tab. There is no upload. After this page’s scripts have loaded, drawing the PNG does not need the network.',
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
        a: 'The controls stack on a narrow screen. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning. Preview uses at most 480 columns. Export uses at most 3000.',
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
    related: ['waveform-generator', 'image-to-audio', 'bass-booster', 'music-visualizer'],
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
    h1: 'Image to Audio Spectrogram Maker — Turn a Picture into Sound, Online Free',
    hero: {
      src: '/image-to-audio.svg',
      alt: 'Turn a spectrogram image back into a WAV',
      width: 32,
      height: 32,
    },
    subtitle: 'Paint a picture or a line of text into a WAV. A spectrogram shows it back.',
    intro:
      'Type up to 32 characters, or drop a PNG, JPG, or WebP. The picture is scaled to at most 360 by 140. The file is a 44.1 kHz, 16-bit, mono WAV, not an MP3. Open it on the [spectrogram generator](/spectrogram-generator) to see the shape.',
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
        a: 'No. The browser draws the text or the image and builds the WAV in this tab. There is no upload step. After this page’s scripts have loaded, building the WAV does not need the network.',
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
        a: 'Type up to 32 characters, or pick a PNG, JPG, or WebP. The picture is scaled to at most 360 by 140. The file is a 44.1 kHz, 16-bit, mono WAV.',
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
    category: 'edit',
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
      'This page is a low shelf at 150 Hz, from 0 to +15 dB. It cannot cut. It only raises lows that are already in the file. At 0 the filter is not inserted.',
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
        a: 'No. The boost is a Web Audio low-shelf filter inside your browser tab — there is no upload step. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'Yes. The editor is built for touch — drag to select, set the slider, export.',
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
      exportLabel: 'Boost bass',
      defaultFormat: 'mp3-320',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['bass'],
    },
  },
  {
    slug: 'fade-audio',
    cardLine: 'Smooth song endings and podcast intros with exact fade in/out times.',
    name: 'Fade Out Music',
    shortName: 'Fade Audio',
    icon: 'trending-up',
    category: 'edit',
    title: 'Fade Out Music — Audio Fade In / Fade Out Online Free',
    description:
      'Add a smooth fade in and fade out to any song or recording right in your browser. Set the length to 0.1 s, export MP3 or WAV. Free, no upload.',
    h1: 'Fade Out Music — Fade In and Fade Out',
    hero: {
      src: '/fade-audio.svg',
      alt: 'Fade a track in and fade it out',
      width: 32,
      height: 32,
    },
    subtitle: 'Fade in and fade out, each from 0 to 5 seconds. Nothing is uploaded.',
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
        text: 'Set Fade in and Fade out on the page. 1–3 seconds is natural for songs, 0.2–0.5 for loops.',
      },
      {
        name: 'Preview and export',
        text: 'Play the start and end to hear the fades, then export as MP3 or lossless WAV.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The fades are rendered with the Web Audio API inside your browser tab — there is no upload step. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
      },
      {
        q: 'Does fading change the audio quality?',
        a: 'No. A fade only reshapes volume over time. Each end is 0 to 5 seconds, in steps of 0.1. If a fade is longer than the file, it is cut to the file length. WAV is 16-bit PCM. MP3 encodes once, and this page starts at 320 kbps. The source file is not modified.',
      },
      {
        q: 'Can it crossfade between two songs?',
        a: 'Not here. This page fades one file in and out. Blending the end of one track into the start of another is the [audio joiner](/audio-joiner), crossfade 0 to 5 seconds in steps of 0.5. Repeating one clip, with a short crossfade at each join, is the [audio looper](/audio-looper).',
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
        a: 'Yes. The editor is built for touch — drag to select, set the sliders, export.',
      },
      {
        q: 'Can I fade a local file from Claude or Cursor?',
        a: 'This page fades one file in the browser, from 0 to 5 seconds, in steps of 0.1. /mcp applies ffmpeg afade from 0 to 30 seconds on each end. MP3 is encoded once. The chat app still sees the path.',
      }],
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
          'Blending the end of one track into the start of another is the [audio joiner](/audio-joiner). This page fades a single file in and out.',
          'The [volume booster](/volume-booster) lifts the whole file by a constant amount, from 10% to 400%. A fade is quiet at the edges and full in the middle. Export is MP3, starting at 320 kbps, or 16-bit WAV. The file you dropped is not modified.',
        ],
      },
    ],
    related: ['multi-track-audio-editor', 'audio-joiner', 'audio-looper'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Fade and download',
      quickControls: ['fade'],
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
        a: 'The waveform accepts a touch drag. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
    related: ['change-audio-speed', 'audio-to-midi', 'tempo-changer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Change pitch',
      quickControls: ['pitch'],
      pitchPresets: [-12, -7, -5, 0, 5, 7, 12],
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
        a: 'No. The browser stretches the file in memory. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The control and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
      {
        q: 'Can I change the tempo of a local file from Claude or Cursor?',
        a: 'This page stretches from 0.75× to 1.25× and keeps the pitch. /mcp uses ffmpeg atempo from 0.5× to 2× and also keeps the pitch. MP3 is encoded once. The chat app still sees the path.',
      }],
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
    related: ['change-audio-speed', 'pitch-changer', '432-hz-converter'],
    editor: {
      exportLabel: 'Change tempo',
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['tempo'],
    },
  },
  {
    slug: 'm4a-to-mp3',
    cardLine: 'Decode an M4A or AAC file and encode MP3. This page starts at 320 kbps.',
    name: 'M4A to MP3 Converter',
    shortName: 'M4A to MP3',
    icon: 'note',
    category: 'convert',
    title: 'M4A to MP3 Converter — Convert M4A & AAC Online Free',
    description:
      'Convert M4A or AAC to MP3 in this browser. The menu starts at 320 kbps. Nothing is uploaded.',
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
        text: 'Drag an .m4a or .aac file onto the page, or click to browse. A video MP4 belongs on the MP4 to MP3 page instead. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
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
      { q: 'Can I convert more than one M4A?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'Can I convert M4A to MP3 on iPhone, Android or Mac?',
        a: 'The conversion stays in this tab. The menu starts at 320 kbps. If this tab cannot decode the file, the message is: This file could not be decoded — it may be corrupted, or its codec is not supported by your browser. That message does not name the codec.',
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
          'This page decodes an M4A or AAC file and encodes MP3. The picker also accepts MP4. If this tab cannot decode the file, the message does not name the codec. A video file goes to [MP4 to MP3](/mp4-to-mp3).',
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
    related: ['wav-to-mp3', 'ogg-to-mp3', 'flac-to-mp3'],
    editor: {
      defaultFormat: 'mp3-320',
      dropHint: 'Drop M4A or AAC files, or click to browse',
      converter: true,
      batch: true,
      exportLabel: 'Convert to MP3',
      accept: 'audio/mp4,audio/x-m4a,audio/aac,.m4a,.aac,.mp4',
    },
  },
  {
    slug: 'ogg-to-mp3',
    cardLine: 'Decode an OGG file and encode MP3. This page starts at 320 kbps.',
    name: 'OGG to MP3 Converter',
    shortName: 'OGG to MP3',
    icon: 'file',
    category: 'convert',
    title: 'OGG to MP3 Converter — Vorbis & Opus in OGG Online Free',
    description:
      'Convert OGG to MP3 in this browser. The menu starts at 320 kbps. A file over 300 MB is rejected. Nothing is uploaded.',
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
        text: 'Drag an .ogg or .oga file onto the page, or click to browse. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
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
      { q: 'Can I convert more than one OGG?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'What is an OGG file?',
        a: 'OGG is a container. Music files in it usually use Vorbis. Some voice files use Opus. This page converts either one when your browser can decode it.',
      },
      {
        q: 'Which browsers can convert OGG?',
        a: 'If this tab cannot play the file, this page cannot decode it. The menu starts at 320 kbps. Tags are not copied.',
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
          'If this tab cannot play the file, this page cannot decode it. The menu starts at 320 kbps. Tags are not copied.',
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
      dropHint: 'Drop OGG files, or click to browse',
      converter: true,
      batch: true,
      exportLabel: 'Convert to MP3',
      accept: 'audio/ogg,audio/vorbis,.ogg,.oga',
    },
  },
  {
    slug: 'opus-to-mp3',
    cardLine: 'Decode an Opus file and encode MP3. This page starts at 192 kbps.',
    name: 'Opus to MP3 Converter',
    shortName: 'Opus to MP3',
    icon: 'voice',
    category: 'convert',
    title: 'Opus to MP3 Converter — WhatsApp Voice Notes to MP3',
    description:
      'Convert an Opus file to MP3 in this browser. The menu starts at 192 kbps. If this tab cannot play the file, this page cannot decode it.',
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
        text: 'Drag a .opus file onto the page, or click to browse. OGG and WebM files that contain Opus work the same way. Several files share the setting you pick next. One file downloads alone. Two or more come back as one ZIP.',
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
      { q: 'Can I convert more than one Opus file?', a: 'Yes. Several files share the setting on this page. They run one after another on this device, and each file is released before the next starts. One file downloads by itself. Two or more come back as a ZIP. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.' },
      {
        q: 'What is the Opus format?',
        a: 'Opus is an audio codec. WhatsApp and Telegram voice notes are often .opus. It also sits inside OGG and WebM. This page turns that audio into an MP3 you can play anywhere.',
      },
      {
        q: 'Which Opus files work?',
        a: 'The picker takes .opus, Opus in OGG, and Opus in WebM. If this tab cannot play the file, this page cannot decode it. The menu starts at 192 kbps. Tags are not copied.',
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
          'The picker takes .opus, Opus in OGG, and Opus in WebM. If this tab cannot play the file, this page cannot decode it. The menu starts at 192 kbps.',
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
      dropHint: 'Drop Opus files, or click to browse',
      converter: true,
      batch: true,
      exportLabel: 'Convert to MP3',
      accept: 'audio/ogg,audio/opus,.opus,.ogg,.webm',
    },
  },
  {
    slug: 'mp3-tag-editor',
    name: 'MP3 Tag Editor',
    shortName: 'Tag Editor',
    icon: 'tag',
    category: 'edit',
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
    subtitle: 'Edit ID3v2.3 on an MP3. The audio frames are copied, not decoded.',
    intro:
      'This page reads an MP3 and writes ID3v2.3: title, artist, album, album artist, year, genre, track number, disc number, composer, comment, and a JPG or PNG cover. The audio frames are copied, not decoded. The file stays in this tab.',
    usesHeading: 'Tags people actually need to fix',
    uses: [
      'Clean up downloads that show "Unknown Artist" or no cover in your music player.',
      'Give a podcast episode or demo track a proper title, cover and credits before publishing.',
      'Strip leftover device and location metadata from a recording before you share it.',
    ],
    howTo: [
      {
        name: 'Drop your MP3',
        text: 'Drop the file in or click to browse. The current tags and cover art are read on your device and shown in the form. Several MP3s can share artist, album, year, genre and cover. Title and track number stay on each file. Two or more download as a ZIP.',
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
      { q: 'Can I tag a whole album?', a: 'Yes. Drop several MP3s. Artist, album, year, genre and cover apply to every file. Title and track number stay on each row. Empty track numbers start at 1. One file downloads alone. Two or more come back as a ZIP. The audio is still copied byte for byte.' },
      {
        q: 'Is my MP3 uploaded to a server?',
        a: 'No. The file is opened with the browser\u2019s own FileReader API and rewritten right in your tab. After this page’s scripts have loaded, reading and writing the tags does not need the network. There is no upload step at all.',
      },
      {
        q: 'Will editing the tags change the audio quality?',
        a: 'No. Tag data lives in a separate block at the front of the file, and the MPEG audio frames are copied byte for byte, The audio frames are copied, not decoded.',
      },
      {
        q: 'How is this different from the MP3 editor?',
        a: 'The MP3 editor cuts, trims and joins the audio itself, which means decoding and re-encoding the sound. This page never touches the sound — it rewrites the information card around it. Use that one to edit music, this one to label it.',
      },
      {
        q: 'What can\u2019t it do?',
        a: 'It edits MP3 files only — FLAC, M4A and WAV use different tag formats this page does not write yet. Several MP3s can share one artist, album, year, genre and cover, and each file keeps its own title and track number. And saving rewrites the whole tag block, so podcast chapters or unusual custom fields stored in the original tag are not carried over — the common fields are.',
      },
      {
        q: 'Why does my car stereo still show "Track 01"?',
        a: 'This page writes ID3v2.3 and copies the audio frames. It does not check what a player displays.',
      },
      {
        q: 'My Chinese, Japanese, Korean or Arabic tags show as garbage. Can this fix it?',
        a: 'Retype the text and save. This page writes ID3v2.3. The audio frames are copied. It does not check what a player displays.',
      },
      {
        q: 'Does it work on my phone?',
        a: 'After this page’s scripts have loaded, reading and writing the tags does not need the network. The picker is MP3 only. The audio frames are copied.',
      },
      {
        q: 'Can I edit local MP3 tags from Claude or Cursor?',
        a: 'This page edits ID3 in the browser, including cover art, and does not re-encode. /mcp writes title, artist, album, date, genre, track, and comment with ffmpeg, copies the audio unchanged, and writes ID3v2.3. It does not edit cover art. The chat app still sees the path.',
      }],
    sections: [
      {
        heading: 'The label changes, the audio does not',
        paragraphs: [
          'The tag editor writes ID3v2.3 and copies the audio frames. It does not decode them.',
          'The fields are title, artist, album, album artist, year, genre, track number, disc number, composer, comment, and a JPG or PNG cover.',
        ],
      },
      {
        heading: 'What you can set, and what you cannot',
        paragraphs: [
          'Several MP3s, or one. Common fields only. Artist, album, year, genre and cover apply to every file. Title and track number stay on each file:',
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
      dropHint: 'Drop MP3 files here, or click to browse',
      exportLabel: 'Save MP3',
    },
  },
  {
    slug: 'audio-looper',
    cardLine: 'Repeat one clip up to 16 times and crossfade each join.',
    name: 'Audio Looper',
    shortName: 'Looper',
    icon: 'layers',
    category: 'join',
    title: 'Audio Looper — Free Online MP3 Extender',
    description:
      'Repeat a selection or a whole file from 2 to 16 times, with a 0.01 s crossfade at each join. Free in your browser. Nothing is uploaded.',
    h1: 'Audio Looper, an MP3 extender that repeats a clip 2 to 16 times',
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
        a: 'No. The repeats are copied in your browser. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The controls and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
        paragraphs: [
          'An MP3 extender writes one clip again so the file lasts longer. Use it when the next copy should be the same audio:',
        ],
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
      exportLabel: 'Loop and download',
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
        a: 'No. The sweep is a stereo panner in your browser. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The controls and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
      exportLabel: 'Pan and download',
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
        a: 'No. The circle and the room are rendered in your browser. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The switch and the export accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
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
      exportLabel: 'Apply 3D',
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
        a: 'No. The page does not read a file and does not open the microphone. Playback and export stay in the browser. After this page’s scripts have loaded, the click does not need the network. An MP3 export needs the encoder to have loaded once.',
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
        a: 'The BPM control runs from 40 to 240 and starts at 100. Meters are 2/4, 3/4, 4/4, and 6/8. Export is 4, 8, or 16 bars, as WAV or MP3. This page does not read a song.',
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
    related: ['voice-recorder', 'change-audio-speed', 'key-bpm-finder'],
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
    category: 'record',
    title: 'Key and BPM Finder — Read a File Online Free',
    description:
      'Read BPM from 60 to 180 and a major or minor key. Silence stays unread. The first 60 seconds are what the page reads. Nothing is uploaded.',
    h1: 'Key and BPM Finder — Key and BPM, read from the file you drop',
    hero: {
      src: '/key-bpm-finder.svg',
      alt: 'Read the BPM and the key of an audio file',
      width: 32,
      height: 32,
    },
    subtitle: 'Two numbers. No button that moves the pitch.',
    intro:
      'Drop a file. The page reads BPM from 60 to 180, and a key: a pitch plus major or minor. BPM is the strongest gap between onsets. A gap outside that range is halved or doubled until it lands inside. The key is the major or minor profile with the highest weight among the twelve. Silence shows “Can’t read”, not 0 BPM and not C major. Only the first 60 seconds are read. A file shorter than 2 seconds has no BPM. This page does not change the file. Moving the pitch is the pitch changer. Nothing is uploaded.',
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
        a: 'No. The browser decodes it and reads the samples in memory. After this page’s scripts have loaded, reading the file does not need the network. This page does not export audio.',
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
        a: 'Drop the file and read the two numbers. A file over 300 MB is rejected. This page does not score how close the numbers are.',
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
    related: ['pitch-changer', 'audio-to-midi', 'tempo-changer'],
    editor: {
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      accept: 'audio/*,video/mp4,.m4a,.opus',
      keyBpm: true,
    },
  },
  {
    slug: 'split-mp3',
    cardLine: 'Cut one file into 2 to 16 equal parts and download them together.',
    name: 'Split MP3',
    shortName: 'Splitter',
    icon: 'scissors',
    category: 'cut',
    title: 'Split MP3 into Multiple Files — 2 to 16 Parts',
    description:
      'Cut one recording into 2 to 16 equal files and download one zip. WAV keeps the samples at each cut. MP3 encodes every part once, up to 320 kbps.',
    h1: 'Split MP3 into multiple files',
    hero: {
      src: '/split-mp3.svg',
      alt: 'Cut one recording into equal files',
      width: 32,
      height: 32,
    },
    subtitle: 'Equal parts, from 2 to 16, saved together in one zip.',
    intro:
      'This audio splitter cuts one file into equal parts. The count runs from 2 to 16, and it starts at 2, which is a split into two parts. Each part is the same length, give or take one sample. Drag a selection to split only that span. With no selection, the whole file is split. The parts download as one zip. Decoding and the cuts stay in your browser.',
    usesHeading: 'What the parts are for',
    uses: [
      'Split an MP3 into multiple files when one file is too long to send.',
      'Break a voice memo into equal pieces you can share one at a time.',
      'Split an audio file into parts without hunting for silence.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Set the number of parts',
        text: 'Parts runs from 2 to 16. The status line shows how many files you will get and about how long each one is. Drag the waveform if only part of the file should be split.',
      },
      {
        name: 'Download the zip',
        text: 'Export MP3 or WAV. The download is one zip named after the file, with part 1, part 2, and the rest inside.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The file is decoded in your browser, cut into parts there, and packed into a zip there. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
      },
      {
        q: 'Where do the cuts land?',
        a: 'On sample boundaries. The parts are equal in length, and when the sample count does not divide evenly the earliest parts are one sample longer. Nothing overlaps and nothing is dropped. WAV is those samples. Each MP3 is encoded once, at the bitrate you pick, up to 320 kbps. Playing those MP3s back to back can show a few milliseconds of codec padding at the join.',
      },
      {
        q: 'Will it split on silence or chapters?',
        a: 'No. The cuts are equal time, not a scan for pauses, chapter marks, or a new song. A quiet bar is cut wherever the clock says. Parts only go from 2 to 16. A file with fewer samples than parts is refused.',
      },
      {
        q: 'How is this different from the trimmer and the cutter?',
        a: 'The audio trimmer and the MP3 cutter keep one span, or delete one span, and save one file. This page writes several files of equal length. The audio joiner does the opposite: it places different files in a row. The silence remover is the page that follows pauses.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'The parts control and the download accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning. Two or more parts download as a zip.',
      },
    ],
    sections: [
      {
        heading: 'Equal cuts, on the samples',
        paragraphs: [
          'Parts run from 2 to 16. It starts at 2. Each part is the same length, except the earliest parts may be one sample longer when the length does not divide evenly. The next part starts on the sample after the previous one ends. There is no overlap and no gap.',
          'Drag a selection to split only that span. With no selection, the whole file is split. WAV is those samples. An MP3 export encodes each part once, at the bitrate you pick, up to 320 kbps. Playing the MP3s back to back can show a few milliseconds of codec padding at the join. The samples themselves were not overlapped.',
        ],
      },
      {
        heading: 'One file, several downloads',
        paragraphs: ['The zip is how the parts leave the browser:'],
        bullets: [
          'A long voice memo cut into equal pieces you can send one at a time.',
          'A song split into two parts when a message app rejects the full file.',
          'A take you want as separate files, not one trimmed clip.',
        ],
      },
      {
        heading: 'Not the cutter, and not a silence scan',
        paragraphs: [
          'The audio trimmer and the MP3 cutter keep one span, or delete one span, and save one file. This page writes several files of equal length. The audio joiner does the reverse: it places different files in a row.',
          'It does not look for silence, chapter marks, or a new song. A quiet bar is cut wherever the clock says. If you need the cuts to follow pauses, use the silence remover, then trim what remains.',
        ],
      },
    ],
    related: ['audio-trimmer', 'mp3-cutter', 'audio-joiner'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Download parts',
      split: true,
    },
  },
  {
    slug: 'stereo-to-mono',
    cardLine: 'Average every channel into one and download that file.',
    name: 'Stereo to Mono',
    shortName: 'To Mono',
    icon: 'convert',
    category: 'convert',
    title: 'Stereo to Mono Converter — One Averaged Channel',
    description:
      'Average the channels into one and download it. WAV keeps those samples. An MP3 encodes that mono file once, up to 320 kbps.',
    h1: 'Stereo to mono converter',
    hero: {
      src: '/stereo-to-mono.svg',
      alt: 'Average a stereo file into one channel',
      width: 32,
      height: 32,
    },
    subtitle: 'One channel: the average of every channel in the file.',
    intro:
      'This page writes one channel. Each sample is the average of the channels in the file, so left and right meet in the middle. A file that is already one channel is copied. Decoding and the average stay in your browser.',
    usesHeading: 'When one channel is the file you need',
    uses: [
      'A voice memo that should sound the same from one speaker.',
      'A file a mono-only player or app refused.',
      'A mix whose left and right should sit together, not as a wide image.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Export the average',
        text: 'There is no width control. Export writes one channel. Play it first if you want to hear the average.',
      },
      {
        name: 'Open the file',
        text: 'A player that shows channel count should say one. WAV is those averaged samples. MP3 encodes them once, up to 320 kbps.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The file is decoded in your browser and averaged there. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
      },
      {
        q: 'How is the mono file made?',
        a: 'Each sample is the sum of the channels at that moment, divided by the number of channels. Two channels means (left + right) / 2. A file that is already one channel is copied. WAV keeps those samples. An MP3 encodes that one channel once, at the bitrate you pick, up to 320 kbps.',
      },
      {
        q: 'Can it turn mono into stereo?',
        a: 'No. This page does not invent a second channel. Copying one channel onto both left and right is still one signal, and it is a different job. The file you download here has one channel.',
      },
      {
        q: 'How is this different from the trimmer?',
        a: 'The audio trimmer keeps a span of time and leaves the channel count alone. MP3 to WAV changes the container and also leaves the channels alone. This page changes the channel count and keeps the length.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Drop, play, and download accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'The average, sample by sample',
        paragraphs: [
          'Each output sample is the sum of the channels at that moment, divided by how many channels the file has. Two channels means (left + right) / 2. One channel is copied into a new buffer. The length does not change.',
          'The page does not build a stereo image, a width control, or a second file. Export is one channel. WAV is those samples. An MP3 encodes that mono file once, at the bitrate you pick, up to 320 kbps.',
        ],
      },
      {
        heading: 'What the one channel is for',
        paragraphs: ['The average is the whole job:'],
        bullets: [
          'A voice memo that should play the same on one speaker.',
          'A file a mono-only app refused because it still had two channels.',
          'A mix you want in the middle, not spread between left and right.',
        ],
      },
      {
        heading: 'Not a trim, and not a fake stereo',
        paragraphs: [
          'The audio trimmer keeps a span and leaves the channels as they were. MP3 to WAV changes the format and also leaves the channels. This page keeps the length and writes one channel.',
          'It will not turn one channel into two. Duplicating a channel so a player shows stereo still carries one signal. That is not what this export does.',
        ],
      },
    ],
    related: ['mp3-to-wav', 'pitch-changer', 'audio-trimmer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Download mono',
      converter: true,
      mono: true,
    },
  },
  {
    slug: 'bitcrusher',
    cardLine: 'Quantize to 1–16 bits and hold each step for up to 32 samples.',
    name: 'Bitcrusher',
    shortName: 'Crush',
    icon: 'waveform',
    category: 'effects',
    title: 'Bitcrusher Online — 1 to 16 Bits',
    description:
      'Quantize from 16 bits down to 1, and hold each step for up to 32 samples. WAV keeps the crushed samples. MP3 encodes them once, up to 320 kbps.',
    h1: 'Bitcrusher online',
    hero: {
      src: '/bitcrusher.svg',
      alt: 'Turn a smooth wave into steps',
      width: 32,
      height: 32,
    },
    subtitle: 'Bits from 1 to 16, and a hold of 1 to 32 samples.',
    intro:
      'This bitcrusher online reduces how many levels each sample can take, then holds that level for a run of samples. Stereo stays stereo: each channel is crushed on its own. Drag a selection to crush only that span. Decoding and the crush stay in your browser.',
    usesHeading: 'What the steps are for',
    uses: [
      'A vocal that should sound like an old game console.',
      'A drum loop where the steps should stay audible.',
      'One phrase in a file, with the rest left alone.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Set bits and hold',
        text: 'Bits runs from 1 to 16 and starts at 8. Hold runs from 1 to 32 and starts at 2. Play to hear it. Drag the waveform if only a span should be crushed.',
      },
      {
        name: 'Export',
        text: 'WAV keeps the stepped samples. MP3 encodes them once, up to 320 kbps, and can soften the steps.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The file is decoded in your browser and crushed there. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
      },
      {
        q: 'What do bits and hold do?',
        a: 'Bits sets the number of levels. At 16 bits a full-scale sample stays put when the hold is 1. At 1 bit a sample becomes up, down, or silence. Hold repeats the current level for that many samples, so a hold of 4 keeps one value across four samples, then takes the next step. Each channel is crushed on its own, so a stereo file stays stereo.',
      },
      {
        q: 'Will MP3 keep the steps?',
        a: 'WAV is the crushed samples. An MP3 encodes them once, at the bitrate you pick, up to 320 kbps. The encoder can round the sharp steps. If the steps must stay, export WAV.',
      },
      {
        q: 'How is this different from the distorter?',
        a: 'The audio distorter bends the wave through a smooth curve. This page replaces samples with a short list of levels and then holds them. The echo adds copies later in time. The low pass filter turns down highs. None of those is a bit depth control.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Bits run from 1 to 16 and start at 8. Hold runs from 1 to 32 samples and starts at 2. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'Levels, then a hold',
        paragraphs: [
          'Bits run from 1 to 16. It starts at 8. A sample is rounded to the nearest level in that range. At 1 bit the level is only up, down, or silence. At 16 bits a full-scale sample stays at full scale when the hold is 1.',
          'Hold runs from 1 to 32 and starts at 2. The current level is repeated for that many samples, then the next sample sets a new level. Left and right are crushed separately. The length does not change.',
        ],
      },
      {
        heading: 'What to listen for',
        paragraphs: ['The two numbers do different jobs:'],
        bullets: [
          'Bits run from 1 to 16 and start at 8.',
          'Hold runs from 1 to 32 samples and starts at 2. Hold 1 keeps every sample.',
          'Drag a selection when only one phrase should be crushed. With no selection, the whole file is crushed.',
        ],
      },
      {
        heading: 'Not the distorter',
        paragraphs: [
          'The audio distorter is a smooth curve, from light clipping to hard clipping. This page is steps and a hold. The echo adds later copies. The low pass filter only turns down highs.',
          'WAV keeps the crushed samples. An MP3 encodes them once, up to 320 kbps, and can soften the corners. If the steps must survive, use WAV.',
        ],
      },
    ],
    related: ['audio-distorter', 'low-pass-filter', 'echo'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Export crushed',
      bitcrush: true,
    },
  },
  {
    slug: '432-hz-converter',
    cardLine: 'Lower the pitch by about 0.32 semitones and keep the length.',
    name: '432 Hz Converter',
    shortName: '432 Hz',
    icon: 'note',
    category: 'effects',
    title: '432 Hz Converter — Same Length, 0.32 Down',
    description:
      'Lower the pitch by 12*log2(432/440), about 0.32 semitones, and keep the length. WAV is that shift. MP3 encodes it once, up to 320 kbps.',
    h1: '432 Hz converter',
    hero: {
      src: '/432-hz-converter.svg',
      alt: 'Lower a file by about 0.32 semitones',
      width: 32,
      height: 32,
    },
    subtitle: 'The whole file moves down by about 0.32 semitones. The length stays.',
    intro:
      'This converter shifts the whole file by 12 times log2 of 432 over 440, which is about 0.32 semitones down. A 440 Hz tone moves toward 432 Hz. The length does not change, and notes are not tuned one by one. Decoding and the shift stay in your browser.',
    usesHeading: 'When the whole file should sit nearer 432 Hz',
    uses: [
      'A track tuned around 440 Hz that you want nearer 432 Hz.',
      'A loop whose length has to stay the same so it still lines up.',
      'A file you will place next to other tracks already moved toward 432 Hz.',
    ],
    howTo: [
      {
        name: 'Drop your audio',
        text: 'Any MP3, WAV, M4A, OGG or FLAC file. It is decoded on your device.',
      },
      {
        name: 'Play the shift',
        text: 'The preview is the shifted file. There is no semitone slider on this page, because a rounded semitone would be zero and the file would not move.',
      },
      {
        name: 'Export',
        text: 'The length matches the file you dropped. WAV is the shifted samples. MP3 encodes them once, up to 320 kbps.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The file is decoded in your browser and shifted there. After this page’s scripts have loaded, decode and WAV export do not need the network. An MP3 export needs the encoder to have loaded once.',
      },
      {
        q: 'How far does it move?',
        a: 'The shift is 12 times log2 of 432 over 440, about 0.3177 semitones down, and the page uses that fraction. It does not round to the nearest whole semitone, which would be zero and would leave the file unchanged. A 440 Hz tone moves toward 432 Hz. The rest of the file moves by the same amount. WAV is the shifted samples. An MP3 encodes them once, at the bitrate you pick, up to 320 kbps.',
      },
      {
        q: 'Does the length change?',
        a: 'No. This is a pitch shift, not a speed change. The tempo changer changes the length. Change audio speed changes the length too, unless you keep the pitch. Here the length stays and the pitch goes down.',
      },
      {
        q: 'Can it retune one note?',
        a: 'No. The whole file moves together. A chord does not get its notes pulled onto 432 Hz one by one. A file shorter than 32 samples is returned unchanged, because the shifter needs that much audio. This page does not claim the result is healthier, calmer, or better.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Drop, play, and download accept a tap. A file over 300 MB is rejected. A file over one hour still opens, with a memory warning.',
      },
    ],
    sections: [
      {
        heading: 'One shift for the whole file',
        paragraphs: [
          'The amount is 12 times log2 of 432 over 440, about 0.32 semitones down. The page passes that fraction through. Rounding it to a whole semitone would make it zero, and the file would not move.',
          'A 440 Hz tone moves toward 432 Hz. Every other tone moves by the same fraction. The length stays the same. WAV is the shifted samples. An MP3 encodes them once, at the bitrate you pick, up to 320 kbps.',
        ],
      },
      {
        heading: 'What stays put',
        paragraphs: ['The shift is the whole job:'],
        bullets: [
          'The length matches the file you dropped.',
          'A chord moves together. Notes are not pulled onto 432 Hz one by one.',
          'A file shorter than 32 samples is returned unchanged.',
        ],
      },
      {
        heading: 'Not a tempo change',
        paragraphs: [
          'The pitch changer on this site moves by whole semitones. This page uses the fraction, about 0.32 down, so the result is not the same as leaving that control at zero.',
          'The tempo changer and change audio speed change the length. This page does not. It also does not say the result is healthier or better. It only moves the pitch.',
        ],
      },
    ],
    related: ['pitch-changer', 'tempo-changer', 'change-audio-speed'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Download 432 Hz',
      converter: true,
      hz432: true,
    },
  },
  {
    slug: 'audio-to-midi',
    cardLine: 'Turn a melody, a voice, or a solo piano into a MIDI file. A full mix comes out wrong.',
    name: 'Audio to MIDI',
    shortName: 'Audio to MIDI',
    icon: 'note',
    category: 'record',
    title: 'Audio to MIDI — One Instrument, up to 3 Minutes',
    description:
      'Turn a melody, a voice, or a solo piano into a MIDI file. A full mix, drums, or dense chords come out wrong. Up to 3 minutes. Nothing is uploaded.',
    h1: 'Audio to MIDI — notes from one instrument',
    hero: {
      src: '/audio-to-midi.svg',
      alt: 'Turn a melody or a solo piano into MIDI notes',
      width: 32,
      height: 32,
    },
    subtitle: 'A .mid file in the browser. Up to 3 minutes of one instrument.',
    intro:
      'Drop a file. This page writes a MIDI file from the model at /models/basic-pitch/model.json. The model downloads once from this site. One file stops at about 3 minutes. Drums, noise, and a full mix often return: No notes. A failed read says: Could not read notes. Trim a longer file on the [audio trimmer](/audio-trimmer) first.',
    usesHeading: 'Notes you can edit next',
    uses: [
      'Open a hummed melody in a DAW and move the notes instead of re-recording them.',
      'Turn a solo piano take into notes, then change one pitch on the pitch changer if the key is wrong.',
      'Read the note count before download, and skip the file when the count is nonsense.',
    ],
    howTo: [
      {
        name: 'Drop one instrument',
        text: 'Add an MP3, WAV, M4A, or a video with a soundtrack. The browser decodes it. Nothing is uploaded. Longer than 3 minutes stays blocked until you trim it.',
      },
      {
        name: 'Convert to notes',
        text: 'The first run downloads the model, under 1 MB, from this site. The page then lists the notes and a count.',
      },
      {
        name: 'Download the MIDI',
        text: 'Save the .mid file. It is one track of note-on and note-off messages. There is no audio preview on this page.',
      },
    ],
    faqs: [
      {
        q: 'Is my audio uploaded?',
        a: 'No. The browser decodes the file and runs Basic Pitch in the tab. The only network request is the model, under 1 MB, from this site, the first time. After that the browser can reuse its copy. The audio itself is not sent anywhere.',
      },
      {
        q: 'What is in the MIDI file?',
        a: 'One track, MIDI type 0. Each note has a pitch from 21 to 108, a start time, a length, and a velocity. The tempo mark is 120 so those times line up with the recording in seconds. That 120 is not the song’s BPM. The track starts on General MIDI piano so a DAW has a sound. It is not a recording of the original instrument. WAV and MP3 are not offered here.',
      },
      {
        q: 'What will it get wrong?',
        a: 'A full mix, drums, and dense chords. Basic Pitch is built for one instrument at a time, and a busy recording turns into extra notes or none. The file has no pitch-bend curve, so a slide becomes a steady note. There is no playback, no sheet music, and no stem split. Over 3 minutes is refused. Trim on the audio trimmer, then come back.',
      },
      {
        q: 'How is this different from the key and BPM finder?',
        a: 'The key and BPM finder reads two numbers and does not write a file. This page writes notes. It does not tell you the key or the BPM. Read those on the key and BPM finder. Moving the pitch of the original audio, without making notes, is the pitch changer.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'One file stops at about 3 minutes. An empty result says: No notes. A failed read says: Could not read notes. The download is a .mid file.',
      },
      {
        q: 'I searched for this in Logic Pro. Is this that?',
        a: 'No. Logic has its own audio-to-MIDI command on the track. This page is for a browser, when Logic is not open. The .mid file it writes can be dragged into Logic afterward. It will not remove a MIDI device in macOS, and it will not edit a Logic project.',
      },
    ],
    sections: [
      {
        heading: 'One instrument, in the tab',
        paragraphs: [
          'Basic Pitch listens to one channel at 22050 Hz. Stereo is mixed to mono before the model runs. The weights are under 1 MB and come from this site once.',
          'It is meant for a melody, a voice, or a solo piano. A full mix, drums, or a thick chord stack is outside what this model holds.',
        ],
      },
      {
        heading: 'What the file actually contains',
        paragraphs: ['The download is a standard MIDI file, not audio:'],
        bullets: [
          'Pitch, start, length, and velocity. No pitch-bend curve.',
          'Tempo mark 120, so the times match the recording in seconds. That is not the song’s BPM.',
          'One track, starting on General MIDI piano, so a DAW has a sound to play.',
        ],
      },
      {
        heading: 'What this page will not do',
        paragraphs: [
          'It will not play the MIDI back, print sheet music, or split a song into stems. It will not name chords.',
          'Longer than 3 minutes is refused. Trim first. Logic’s own convert stays in Logic. This page does not open a Logic project.',
        ],
      },
    ],
    related: ['key-bpm-finder', 'pitch-changer', 'audio-trimmer'],
    editor: {
      midi: true,
      dropHint: 'Drop an audio file, or click to browse',
      accept: 'audio/*,video/mp4,video/webm,video/quicktime,.mkv,.m4a,.opus',
      exportLabel: 'Convert to MIDI',
    },
  },
  {
    slug: 'soundboard',
    cardLine: 'A board of your own sounds: record or upload clips, then trigger them live.',
    name: 'Soundboard',
    shortName: 'Soundboard',
    icon: 'plus',
    category: 'record',
    title: 'Soundboard Maker — Eleven Sounds, Then Your Own',
    description:
      'Tap or press a key and several clips play at once. Eleven sounds are already synthesized on the page; trim your own and keep the board in a JSON file.',
    h1: 'Soundboard Maker, with eleven sounds already on it',
    subtitle: 'Tap a square or press its key. Several sounds play at once. Files longer than 60 seconds are skipped.',
    intro:
      'A soundboard is a grid of short clips you fire on cue: a rimshot under a joke, a buzzer in class, applause on a stream. Record a line or upload a file, trim it to the hit, and it becomes one square. Nothing is uploaded. The page decodes and plays in this tab, and the board leaves only as a JSON file you export.',
    usesHeading: 'What you can do with it',
    uses: [
      'Fire a rimshot, an air horn, or applause on a live stream while the previous sound is still playing.',
      'Keep a correct-answer ding and a wrong-answer buzzer for a class, on squares large enough to hit on a phone.',
      'Punch a podcast or a presentation with a sting you recorded, without opening a desktop mixer.',
    ],
    howTo: [
      {
        name: 'Start from a preset or a sound',
        text: 'The board opens with eleven synthesized sounds: Air Horn, Boom, Sad Trombone, Rimshot, Buzzer, Fart, Applause, Crickets, Ding, Boing, and Coin. A preset above the grid swaps in a starter set for streaming, a podcast, or a classroom. Upload audio and Record add your own.',
      },
      {
        name: 'Trim each clip',
        text: 'The pencil on a square opens the editor. Drag the two handles around the part you want, press loop to hear it, then Apply trim. Rename the square and pick a color there. Replace audio swaps the sound and keeps the name, the color, and the key.',
      },
      {
        name: 'Play and save the board',
        text: 'Tap a square or press the key printed on it: 1 through 0, then Q W E R T Y U I O P. Esc stops every sound. Export board writes every clip into one JSON file. Import board reads that file back, and it also reads a board exported from soundtools.io.',
      },
    ],
    faqs: [
      {
        q: 'Is anything uploaded?',
        a: 'No. Files are decoded with the Web Audio API in this tab, the microphone stays on your device, and playback is local. Export board writes a JSON file to your disk. After this page has loaded, trimming and playback need no connection.',
      },
      {
        q: 'What quality are the sounds?',
        a: 'A clip keeps the sample rate it was decoded at. Export WAV on one sound writes 16-bit PCM at that rate. The board file stores each sound as WAV data inside the JSON, so the audio is not encoded a second time. The eleven built-in sounds are synthesized at 44.1 kHz and normalized to −1 dBFS.',
      },
      {
        q: 'Will this play into Discord or a game call?',
        a: 'No. Discord, Zoom, and games hear your microphone, not this page. Apps such as Voicemod and Resanance install a virtual microphone on Windows so other people hear the board. This page cannot do that. The sounds come out of your speakers or desktop audio, which OBS and other capture tools can record. On a phone the board plays on the device the same way.',
      },
      {
        q: 'How is this different from the voice recorder?',
        a: 'The voice recorder takes one clip and hands it to an editor to trim and export. This page holds many clips and plays them live from keys. It is for triggering, not for editing one file.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Keys are 1 through 0, then Q W E R T Y U I O P. Esc stops every sound. Hotkeys need a keyboard. A file longer than 60 seconds is skipped. Closing the tab drops the board unless you export it. This page does not send audio into Discord, Zoom, or a game microphone.',
      },
      {
        q: 'How do I save the board?',
        a: 'Nothing is stored in the browser. Export board before you close the tab, or the board is gone. Import board brings the JSON file back on this device or another. The same button reads a board file from soundtools.io: each button that contains audio comes across, and a gradient color is mapped to the nearest color on this board.',
      },
      {
        q: 'Which files can I add, and how long?',
        a: 'Upload accepts MP3, WAV, M4A, OGG, FLAC, and AAC, whatever the browser can decode. A file longer than 60 seconds is skipped, so trim a long song on the audio trimmer first. The useful length on the board is half a second to five seconds. There is no fixed number of squares. The ceiling is the memory in the tab.',
      },
      {
        q: 'Can I change the pitch or add echo?',
        a: 'Not on this page. Export WAV on the square, then open that file in the pitch changer (pitch moves, length stays) or the slowed and reverb page. Bring the result back with Upload audio or Replace audio.',
      },
    ],
    sections: [
      {
        heading: 'How the board works',
        paragraphs: [
          'A soundboard is one job: the right short sound, now, without hunting through a folder. Each square is one clip. Tap it and it plays immediately. Tap another while it is still going and both play. That overlap is the point.',
          'Keys follow the board order: 1 through 9, then 0, then the top letter row. Esc stops everything. A preset above the grid replaces the whole set with a starter for streaming, a podcast, a classroom, or a blank board.',
        ],
      },
      {
        heading: 'Make your own clips',
        paragraphs: [
          'Upload takes MP3, WAV, M4A, OGG, FLAC, or AAC and decodes it in the browser. Record takes the microphone. The pencil then opens the trim editor: drag the two handles, loop the selection, and apply it.',
          'Short is the point. Half a second to five seconds covers a punchline, a buzzer, or a boom. Replace audio swaps the sound under a square and keeps its name, color, and key. A file longer than 60 seconds is skipped on upload.',
        ],
        bullets: [
          'Export WAV on one sound writes 16-bit PCM at that clip’s sample rate.',
          'The color on a square is there so you can find the key during a stream.',
          'The eleven built-in sounds are synthesized on the page. No download, no library, no one else’s recording.',
        ],
      },
      {
        heading: 'What it will not do',
        paragraphs: [
          'It will not put sounds into a call. Discord, games, and voice chat hear the microphone. Putting the board on that path takes a desktop app with a virtual audio device, such as Voicemod or Resanance on Windows. For a stream, the honest path is desktop audio: the sounds play out of the machine, and OBS captures that.',
          'It will not remember the board between visits. Export board before you close the tab, then import it next time, including a board file from soundtools.io. It will not search a meme library. The built-in sounds are generic effects synthesized here. Everything else is a file you bring.',
        ],
      },
    ],
    related: ['voice-recorder', 'audio-trimmer', 'pitch-changer'],
    editor: {
      soundboard: true,
      dropHint: 'No file needed — tap a square or add your own',
    },
  },
  {
    slug: 'music-visualizer',
    cardLine: 'Turn a song into an animated spectrum video, no upload.',
    name: 'Music Visualizer',
    shortName: 'Music Visualizer',
    icon: 'film',
    category: 'effects',
    title: 'Music Visualizer — Animated Spectrum Video from Any Song',
    description:
      'Record a video of 64 bands for the length of the song. The side runs from 200 to 2160. The browser picks WebM or MP4. Nothing is uploaded.',
    h1: 'Music Visualizer — Turn a Song into a Spectrum Video, Free and Online',
    subtitle: 'Play a song, watch the spectrum move, and record it as a video — drawn and captured on your device.',
    intro:
      'This page draws 64 bands and records a video for the length of the song. The side runs from 200 to 2160. Presets include 16:9 and 9:16. The browser picks WebM or MP4. If the canvas cannot be recorded, the button stands down, playback still works, and the page says to use a screen recorder. A failed recording says: Recording failed. Try a smaller video size.',
    usesHeading: 'What people make with it',
    uses: [
      'Record a video that lasts as long as the song. The browser picks WebM or MP4.',
      'Post a song with a moving spectrum so a static cover does not carry the whole post.',
      'Record a backdrop for a podcast clip, a demo reel, or a livestream starting screen.',
    ],
    howTo: [
      {
        name: 'Drop a song',
        text: 'Drop an audio file on the well, or click to browse. MP3, WAV, M4A, OGG, FLAC — anything the browser can decode.',
      },
      {
        name: 'Pick a look',
        text: 'Choose a style — spectrum bars, mirrored bars, ring, or oscilloscope — and a theme. Both colors stay editable after a theme is applied.',
      },
      {
        name: 'Choose the frame',
        text: 'Pick the video size: 16:9 for YouTube, 9:16 vertical for Shorts and TikTok, square for feed posts, or a custom size.',
      },
      {
        name: 'Record the video',
        text: 'Press Record video. The song plays once while the browser captures the canvas, and the file downloads when it ends.',
      },
    ],
    faqs: [
      {
        q: 'Is my song uploaded?',
        a: 'No. The file is decoded with the Web Audio API in this tab, the animation is drawn on a canvas in this tab, and the browser’s own recorder captures that canvas and audio. The finished video is written straight to your disk.',
      },
      {
        q: 'What format and quality is the video?',
        a: 'The browser picks WebM or MP4. The side runs from 200 to 2160. The recording lasts as long as the song. This page does not name a codec, a frame rate, or a bitrate.',
      },
      {
        q: 'Does a 3-minute song really take 3 minutes to export?',
        a: 'Yes. The recording lasts as long as the song. A file over 300 MB is rejected.',
      },
      {
        q: 'How is this different from the waveform generator?',
        a: 'The waveform generator draws one still PNG of loudness over time — a picture for a cover or a post. This page animates the frequency spectrum while the song plays and records a video. Same file in, opposite outputs: still image versus moving image.',
      },
      {
        q: 'Does it work on a phone or on iPhone?',
        a: 'If this browser cannot record video from a canvas, playback still works and the record button stands down. The page says to use a screen recorder.',
      },
      {
        q: 'Can I use the video commercially?',
        a: 'The export has no watermark. This page does not grant a license for the song.',
      },
    ],
    sections: [
      {
        heading: 'What the page actually records',
        paragraphs: [
          'The animation is drawn on a canvas at the size you picked, and the browser’s own recorder captures that canvas plus the audio playing through it. There is no server render and no watermark: the file is written by the tab, the moment the song finishes.',
          'The recording lasts as long as the song. There is no watermark.',
        ],
      },
      {
        heading: 'The four styles',
        paragraphs: [
          'The picture uses 64 bands. Themes set colors. The side runs from 200 to 2160.',
        ],
        bullets: [
          'Spectrum bars rise from the bottom edge with a gradient toward the peaks.',
          'Mirrored bars fold the same bars around the middle — the classic player look.',
          'Ring arranges the bands in a circle.',
          'Oscilloscope draws the waveform itself, a line that breathes with the track.',
        ],
      },
      {
        heading: 'Where the videos fit',
        paragraphs: [
          'Presets include 16:9 and 9:16. A custom side runs from 200 to 2160.',
          'The video is always as long as the audio, so trim the song first if you only want a section. For a still picture of a track instead of a video, the waveform generator draws one from the same file.',
        ],
      },
    ],
    related: ['waveform-generator', 'spectrogram-generator', 'audio-trimmer'],
    editor: {
      visualizer: 'live',
      dropHint: 'Drop an audio file, or click to browse',
      exportLabel: 'Record video',
    },
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
