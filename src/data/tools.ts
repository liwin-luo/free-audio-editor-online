export interface FaqItem {
  q: string;
  a: string;
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
  | 'voice';

export interface EditorConfig {
  /** Accept multiple files and merge them (audio-joiner) */
  multiple?: boolean;
  /** Default export format id */
  defaultFormat: string;
  /** Show the Adjust drawer (gain, speed, reverse, fades) */
  showAdjust?: boolean;
  /** Ringtone mode: clamp selection to 40 seconds */
  ringtone?: boolean;
  /** Headline shown inside the empty dropzone */
  dropHint: string;
  /** Pure conversion page: hide cut/selection UI, treat export as a convert */
  converter?: boolean;
  /** Export button label (default "Export") */
  exportLabel?: string;
  /** Max gain slider percent (default 200) */
  maxGainPercent?: number;
  /** Headline controls surfaced outside the Adjust drawer */
  quickControls?: ('reverse' | 'speed' | 'gain' | 'normalize' | 'reverb' | 'pitch')[];
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
  /** One-line subtitle under the H1 */
  subtitle: string;
  /** Intro paragraph block (1–2 sentences, keyword-rich but honest) */
  intro: string;
  /** H2 plus three concrete jobs. Sits under the intro, not a second how-to. */
  usesHeading: string;
  uses: [string, string, string];
  howTo: HowToStep[];
  faqs: FaqItem[];
  /** Slugs of related tools shown at the bottom */
  related: string[];
  editor: EditorConfig;
  /** Render a microphone recorder above the editor (voice-recorder) */
  recorder?: boolean;
}

export const TOOLS: ToolDef[] = [
  {
    slug: 'audio-trimmer',
    name: 'Audio Trimmer',
    shortName: 'Audio Trimmer',
    icon: 'trimmer',
    category: 'cut',
    title: 'Audio Trimmer — Trim Audio & Music Online Free',
    description:
      'Trim music, voice memos and podcasts in your browser. Select, preview and save in seconds — free, no signup, and your audio never leaves your device.',
    h1: 'Audio Trimmer',
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
        a: 'Recordings up to about an hour work comfortably on a modern computer. The practical limit is your device memory, not an artificial cap.',
      },
    ],
    related: ['mp3-cutter', 'audio-joiner', 'ringtone-maker'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'mp3-cutter',
    name: 'MP3 Cutter',
    shortName: 'MP3 Cutter',
    icon: 'scissors',
    category: 'cut',
    title: 'MP3 Cutter — Cut Songs & Make Cuts Online Free',
    description:
      'Cut MP3 files online in a couple of clicks. Keep the best part or delete an intro in seconds — free, no signup, and the file never leaves your device.',
    h1: 'MP3 Cutter',
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
    ],
    related: ['ringtone-maker', 'audio-trimmer', 'audio-joiner'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an MP3 file, or click to browse',
    },
  },
  {
    slug: 'mp3-editor',
    name: 'MP3 Editor',
    shortName: 'MP3 Editor',
    icon: 'waveform',
    category: 'effects',
    title: 'MP3 Editor — Cut, Fade, Reverse & Speed Up MP3 Online',
    description:
      'Edit MP3 and other audio online: cut, trim, fade in and out, change volume and speed, reverse playback. Free and private — everything runs in your browser.',
    h1: 'MP3 Editor',
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
    ],
    related: ['audio-trimmer', 'change-audio-speed', 'normalize-audio'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'ringtone-maker',
    name: 'Ringtone Maker',
    shortName: 'Ringtone Maker',
    icon: 'bell',
    category: 'cut',
    title: 'Ringtone Maker — Make a Ringtone from Any Song Online',
    description:
      'Turn any song into a ringtone in your browser. Pick the best 40 seconds, add a fade, export M4R or MP3 — free, no signup, nothing uploaded.',
    h1: 'Ringtone Maker',
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
        a: 'Add a short fade-out in the Adjust drawer — it makes the loop back to the start sound natural instead of cutting off mid-note.',
      },
      {
        q: 'Is there a watermark or limit?',
        a: 'No watermark, no signup, no daily cap. The ringtone is rendered on your own device and downloaded straight from the browser.',
      },
    ],
    related: ['mp3-cutter', 'audio-trimmer', 'mp3-editor'],
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
    name: 'Audio Joiner',
    shortName: 'Audio Joiner',
    icon: 'layers',
    category: 'merge',
    title: 'Audio Joiner — Merge Songs & Audio Files Online Free',
    description:
      'Merge songs and audio files into one track, in any order, right in your browser. Optional fades between tracks — free, private, no upload.',
    h1: 'Audio Joiner',
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
    ],
    related: ['audio-trimmer', 'normalize-audio', 'fade-audio'],
    editor: {
      multiple: true,
      defaultFormat: 'mp3-192',
      showAdjust: false,
      dropHint: 'Drop two or more audio files, or click to browse',
    },
  },
  {
    slug: 'wav-to-mp3',
    name: 'WAV to MP3 Converter',
    shortName: 'WAV to MP3',
    icon: 'convert',
    category: 'merge',
    title: 'WAV to MP3 Converter — Convert WAV Files Online Free',
    description:
      'Convert WAV to MP3 in your browser — 128, 192 or 320 kbps. Free, no signup: your audio is converted locally and never uploaded to a server.',
    h1: 'WAV to MP3 Converter',
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
        a: 'No. The file is decoded in your browser, encoded to MP3 by a small library loaded from a CDN, and saved back to your disk. The audio itself never leaves your device.',
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
    slug: 'reverse-audio',
    name: 'Reverse Audio',
    shortName: 'Reverse Audio',
    icon: 'reverse',
    category: 'effects',
    title: 'Reverse Audio — Play Music & Songs Backwards Online Free',
    description:
      'Play any song or recording backwards in your browser. One click to reverse, preview instantly, save as MP3 or WAV — free and nothing uploaded.',
    h1: 'Reverse Audio',
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
        a: 'Musicians use reversed audio for creative effects — reversed cymbal swells, backwards guitar solos, ambient textures. It is also the classic way to check a track for backmasking, and honestly, hearing your own voice reversed is just fun.',
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
    name: 'Audio Speed Changer',
    shortName: 'Speed Changer',
    icon: 'clock-counter-clockwise',
    category: 'effects',
    title: 'Change Audio Speed Online — Speed Up or Slow Down Audio',
    description:
      'Speed up a lecture or slow a song for practice, from 0.5× to 2×. Preview in your browser, export MP3 or WAV. Pitch moves with the tempo.',
    h1: 'Change Audio Speed',
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
        q: 'Does changing speed change the pitch?',
        a: 'Yes — speed and pitch move together, like a record played faster or slower: 2× sounds about an octave higher, 0.5× about an octave lower. That is the classic effect; keeping pitch while changing tempo needs a dedicated time-stretch algorithm we may add later. To change pitch without changing the length, use the pitch changer.',
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
    ],
    related: ['pitch-changer', 'slowed-reverb', 'audio-trimmer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['speed'],
    },
  },
  {
    slug: 'increase-volume',
    name: 'MP3 Volume Booster',
    shortName: 'Volume Booster',
    icon: 'volume',
    category: 'effects',
    title: 'Increase MP3 Volume — Make Audio Louder Online Free',
    description:
      'Make quiet audio louder — boost MP3 and other files up to 4× in your browser. A built-in limiter keeps the sound clean, free and nothing uploaded.',
    h1: 'Increase MP3 Volume',
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
    ],
    related: ['normalize-audio', 'change-audio-speed', 'reverse-audio'],
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
    name: 'MP4 to MP3 Converter',
    shortName: 'MP4 to MP3',
    icon: 'film',
    category: 'merge',
    title: 'MP4 to MP3 Converter — Convert Video to MP3 Online Free',
    description:
      'Convert MP4 video to MP3 in your browser — the soundtrack is extracted locally, never uploaded. Free, fast, no signup, works on mobile.',
    h1: 'MP4 to MP3 Converter',
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
    related: ['extract-audio', 'audio-trimmer', 'volume-booster'],
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
    name: 'Audio Extractor',
    shortName: 'Audio Extractor',
    icon: 'film',
    category: 'merge',
    title: 'Extract Audio from Video — Save Sound as MP3 or WAV',
    description:
      'Extract the audio track from any video in your browser and save it as MP3 or lossless WAV. Free, private, no upload — even for large files.',
    h1: 'Extract Audio from Video',
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
    name: 'Voice Recorder',
    shortName: 'Voice Recorder',
    icon: 'mic',
    category: 'record',
    title: 'Voice Recorder Online — Record, Trim & Save Audio Free',
    description:
      'Record your microphone in the browser, trim the take and save it as MP3 or WAV. Free, private — recordings are never uploaded.',
    h1: 'Voice Recorder',
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
    related: ['audio-trimmer', 'increase-volume', 'mp3-editor'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Or drop an existing recording to edit',
    },
    recorder: true,
  },
  {
    slug: 'volume-booster',
    name: 'Volume Booster',
    shortName: 'Volume Booster',
    icon: 'volume',
    category: 'effects',
    title: 'Volume Booster — Make Videos & Music Louder Online Free',
    description:
      'Boost the volume of quiet music and video soundtracks up to 4× in your browser. A limiter keeps it clean — free, private, nothing uploaded.',
    h1: 'Volume Booster',
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
    ],
    related: ['increase-volume', 'normalize-audio', 'fade-audio'],
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
    name: 'Audio Normalizer',
    shortName: 'Normalizer',
    icon: 'trending-up',
    category: 'effects',
    title: 'Audio Normalizer — Normalize Audio Level Online Free',
    description:
      'Normalize audio to a consistent peak level in your browser — MP3, WAV, M4A and more. One click, free, nothing uploaded.',
    h1: 'Normalize Audio',
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
        a: 'No — and be skeptical of any tool claiming one click does that. Raising quiet passages independently is dynamic range compression, a different and more destructive process. Normalizing shifts the whole recording up by the same amount and leaves the dynamics untouched.',
      },
      {
        q: 'Does it use LUFS loudness targets like streaming platforms?',
        a: 'No. This is peak normalization — instant and predictable. Streaming services match tracks by integrated loudness (LUFS), a longer-average measure that belongs to mastering. Peak-normalizing is still the right quick fix for consistent playback level.',
      },
      {
        q: 'Does normalizing reduce quality?',
        a: 'The level change itself is mathematically clean and inaudible. The only quality question is the export format: WAV is bit-perfect for the gain change, while MP3 re-encodes once. Export WAV if the file will be edited further.',
      },
    ],
    related: ['increase-volume', 'volume-booster', 'audio-joiner'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['gain', 'normalize'],
    },
  },
  {
    slug: 'slowed-reverb',
    name: 'Slowed + Reverb',
    shortName: 'Slowed + Reverb',
    icon: 'moon',
    category: 'effects',
    title: 'Slowed + Reverb — Make Slowed and Reverb Songs Online Free',
    description:
      'Turn any song into a slowed + reverb edit in your browser — slow it down, wash it in reverb, export MP3. Free, nothing uploaded.',
    h1: 'Slowed + Reverb Maker',
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
        a: 'Yes, deliberately — like a vinyl record at the wrong speed. Vocals get deeper and the key drops by the same ratio. That pitch drop is the signature of the style; slowed without pitch change needs a time-stretch editor, which is a different (and heavier) tool.',
      },
      {
        q: 'How much reverb should I add?',
        a: 'Start around 20–30% and listen. The reverb is a synthesized decay tail — past about 50% the track starts sounding like a cathedral and vocals lose their words.',
      },
      {
        q: 'Can I use slowed songs in my videos?',
        a: 'Slowing a track does not change its copyright. For YouTube or TikTok uploads you still need rights to the original song — many creators use the platform\u2019s licensed music library instead and reserve slowed edits for their own recordings.',
      },
    ],
    related: ['change-audio-speed', 'pitch-changer', 'audio-trimmer'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop a song, or click to browse',
      quickControls: ['speed', 'reverb'],
    },
  },
  {
    slug: 'fade-audio',
    name: 'Audio Fade In / Fade Out',
    shortName: 'Fade Audio',
    icon: 'trending-up',
    category: 'effects',
    title: 'Audio Fade In / Fade Out — Add Fades Online Free',
    description:
      'Add a smooth fade in and fade out to any song or recording right in your browser. Set the length to 0.1 s, export MP3 or WAV. Free, no upload.',
    h1: 'Fade In / Fade Out Audio',
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
        a: 'Not here — this page fades one file in and out. Blending the end of one track into the start of another is a crossfade join, and the audio joiner does that job.',
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
    related: ['audio-joiner', 'volume-booster', 'mp3-cutter'],
    editor: {
      defaultFormat: 'mp3-320',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
    },
  },
  {
    slug: 'pitch-changer',
    name: 'Pitch Changer',
    shortName: 'Pitch Changer',
    icon: 'clock-counter-clockwise',
    category: 'effects',
    title: 'Pitch Changer — Change Audio Pitch without Changing Speed',
    description:
      'Shift the pitch of any song or voice by up to 12 semitones without changing its length. Free, in your browser, nothing uploaded.',
    h1: 'Change Audio Pitch',
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
        a: 'No. The speed changer plays the file faster or slower, so the pitch rides along and the length changes. This page only moves the pitch.',
      },
      {
        q: 'Is the file uploaded?',
        a: 'No. The shift is calculated in your browser and the export is saved to your device.',
      },
    ],
    related: ['change-audio-speed', 'slowed-reverb', 'mp3-editor'],
    editor: {
      defaultFormat: 'mp3-192',
      showAdjust: true,
      dropHint: 'Drop an audio file, or click to browse',
      quickControls: ['pitch'],
    },
  },
  {
    slug: 'm4a-to-mp3',
    name: 'M4A to MP3 Converter',
    shortName: 'M4A to MP3',
    icon: 'note',
    category: 'merge',
    title: 'M4A to MP3 Converter — Convert M4A & AAC Online Free',
    description:
      'Convert M4A and AAC audio to MP3 in your browser. Free, no signup, nothing uploaded. Pick 128, 192 or 320 kbps.',
    h1: 'M4A to MP3 Converter',
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
        q: 'Which M4A files work?',
        a: 'AAC audio inside an M4A, which is what voice memos and most AAC downloads use. Apple Lossless (ALAC) stored in an M4A often will not decode in the browser. Convert that file to AAC or WAV first, then bring it here.',
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
    name: 'OGG to MP3 Converter',
    shortName: 'OGG to MP3',
    icon: 'file',
    category: 'merge',
    title: 'Convert OGG to MP3 — Free Online Converter',
    description:
      'Convert OGG files to MP3 in your browser. Free, no signup, nothing uploaded. Vorbis or Opus inside OGG, at 128, 192 or 320 kbps.',
    h1: 'Convert OGG to MP3',
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
    name: 'Opus to MP3 Converter',
    shortName: 'Opus to MP3',
    icon: 'voice',
    category: 'merge',
    title: 'Opus to MP3 Converter — Convert Opus Audio Online Free',
    description:
      'Convert Opus audio to MP3 in your browser. Free, no signup, nothing uploaded. Works on .opus files and Opus inside OGG or WebM.',
    h1: 'Opus to MP3 Converter',
    subtitle: 'Turn Opus audio into MP3 — in your browser, nothing uploaded.',
    intro:
      'Voice notes and some downloads are Opus: a .opus file, or Opus inside OGG or WebM. Drop the file, pick a bitrate, and your browser decodes it and saves an MP3. The audio never goes to a server.',
    usesHeading: 'Opus files people convert',
    uses: [
      'Turn a voice message or an Opus export into MP3 for a player that cannot open Opus.',
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
        a: 'Files your browser can already play: .opus, OGG with Opus, and WebM with Opus, in Chrome, Firefox and current Safari. If a plain browser tab stays silent, this page cannot decode that file either.',
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
    related: ['ogg-to-mp3', 'wav-to-mp3', 'm4a-to-mp3'],
    editor: {
      defaultFormat: 'mp3-192',
      dropHint: 'Drop an Opus file, or click to browse',
      converter: true,
      exportLabel: 'Convert to MP3',
      accept: 'audio/ogg,audio/opus,.opus,.ogg,.webm',
    },
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
