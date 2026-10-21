import type { ToolSection } from '../data/tools';

export interface ToolCopy {
  name: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  /** Alt for ToolDef.hero. Required when the English tool has a hero image. */
  heroAlt?: string;
  subtitle: string;
  /** Scenario line for hub/home cards. Falls back to subtitle when a locale omits it. */
  cardLine?: string;
  intro: string;
  usesHeading: string;
  uses: [string, string, string];
  howTo: { name: string; text: string }[];
  faqs: { q: string; a: string }[];
  /** Present only on locales that carry the long page. Same shape as English. */
  sections?: ToolSection[];
  dropHint: string;
  exportLabel?: string;
}

export interface EditorText {
  dropHour: string;
  dropLocal: string;
  /** Suffix on the broad format line, separator included. e.g. ", and more". */
  formatsMore: string;
  /** Empty-state note for transcription, including the first model download. */
  etaModel: string;
  /** Hard cap on the transcribe promise line. */
  limitTenMin: string;
  /** Hard cap on the audio-to-MIDI promise line. */
  limitThreeMin: string;
  /** Ringtone selection cap on the promise line. */
  limitRingtone: string;
  /** Short label for the transcribe "text" chip. */
  chipText: string;
  zoomOut: string;
  zoomIn: string;
  loadDifferent: string;
  startOver: string;
  waveform: string;
  play: string;
  pause: string;
  hintSelect: string;
  hintTrim: string;
  changeFile: string;
  statStart: string;
  statSpan: string;
  statEnd: string;
  selectAll: string;
  playBtn: string;
  chMono: string;
  chStereo: string;
  /** Placeholder: {n} */
  chMany: string;
  hintConvert: string;
  hintSilence: string;
  reverse: string;
  normalize: string;
  speed: string;
  /** Shown under the speed slider. Pitch follows the speed on this page. */
  speedPitch: string;
  /** Shown under the tempo slider. This page keeps the pitch. */
  tempoPitch: string;
  pitch: string;
  /** Shown under the pitch slider. This page does not change the length. */
  pitchLength: string;
  bass: string;
  treble: string;
  mid: string;
  cutoff: string;
  volume: string;
  /** Shown under the volume slider. */
  gainOriginal: string;
  reverb: string;
  compress: string;
  echoDelay: string;
  echoFeedback: string;
  distort: string;
  panDepth: string;
  panRate: string;
  circle: string;
  metroBpm: string;
  metroMeter: string;
  metroBars: string;
  metroPlay: string;
  metroStop: string;
  keyTonic: string;
  keyMajor: string;
  keyMinor: string;
  keyUnread: string;
  keyCaveat: string;
  silenceThreshold: string;
  silenceGap: string;
  silenceRemove: string;
  silenceKeepFile: string;
  loopTimes: string;
  loopCrossfade: string;
  loopExport: string;
  loopTooLong: string;
  splitParts: string;
  splitExport: string;
  splitTooShort: string;
  crushBits: string;
  crushHold: string;
  /** Placeholders: {bits} {hold} */
  crushExport: string;
  monoExport: string;
  hz432Export: string;
  lufsIntegrated: string;
  lufsPeak: string;
  lufsPodcast: string;
  lufsStreaming: string;
  lufsBroadcast: string;
  lufsLimited: string;
  lufsWill: string;
  lufsSilent: string;
  adjust: string;
  fadeIn: string;
  fadeOut: string;
  normalizeOverrides: string;
  undo: string;
  cutMode: string;
  keep: string;
  deleteSel: string;
  precise: string;
  startSec: string;
  endSec: string;
  format: string;
  export: string;
  joinerMixed: string;
  joinerLocal: string;
  trackSummary: string;
  crossfade: string;
  fadeInFirst: string;
  fadeOutLast: string;
  mergeExport: string;
  record: string;
  recordHint: string;
  tooBig: string;
  decoding: string;
  ready: string;
  hourWarning: string;
  decodeFail: string;
  ringtoneCap: string;
  kept: string;
  markedDelete: string;
  endTime: string;
  nothingUndo: string;
  reverted: string;
  normalizeOn: string;
  rendering: string;
  renderingStatus: string;
  encoding: string;
  exported: string;
  saved: string;
  exportFail: string;
  /** Placeholders: {current} {total} */
  batchProgress: string;
  /** Placeholder: {n} */
  batchSkipped: string;
  merging: string;
  mergingStatus: string;
  moveUp: string;
  moveDown: string;
  remove: string;
  recUnavailable: string;
  micBlocked: string;
  recording: string;
  stop: string;
  recordAgain: string;
  recordingLoaded: string;
  vizStyle: string;
  vizStyleBars: string;
  vizStyleFilled: string;
  vizStyleOutline: string;
  vizStyleDots: string;
  vizStyleBottom: string;
  vizStyleBlocks: string;
  vizTemplate: string;
  vizTemplateNone: string;
  vizTplSoundcloud: string;
  vizTplPodcast: string;
  vizTplPoster: string;
  vizTplSticker: string;
  vizTplPrint: string;
  vizTplNeon: string;
  vizTplBlocks: string;
  vizWaveColor: string;
  vizBgColor: string;
  vizTransparent: string;
  vizSize: string;
  vizSizeVideo: string;
  vizSizeSquare: string;
  vizSizeOg: string;
  vizSizeBanner: string;
  vizSizeCustom: string;
  vizWidth: string;
  vizHeight: string;
  vizRange: string;
  vizRangeStart: string;
  vizRangeEnd: string;
  vizPreview: string;
  vizReady: string;
  vizRendering: string;
  vizExportFail: string;
  specFft: string;
  specAxis: string;
  specAxisLog: string;
  specAxisLinear: string;
  specMaxHz: string;
  specDbFloor: string;
  specDbCeil: string;
  specColors: string;
  specViridis: string;
  specInferno: string;
  specGray: string;
  specPreview: string;
  specProgress: string;
  paintText: string;
  paintPlaceholder: string;
  paintImage: string;
  paintPreview: string;
  paintReady: string;
  paintWorking: string;
  paintFail: string;
  tgAlbum: string;
  tgAlbumArtist: string;
  tgArtist: string;
  tgComment: string;
  tgComposer: string;
  tgCover: string;
  tgCoverFail: string;
  tgCoverHint: string;
  tgDisc: string;
  tgGenre: string;
  tgNoTags: string;
  tgReadFail: string;
  tgRemoveAll: string;
  tgRemoveCover: string;
  tgReplaceCover: string;
  tgReset: string;
  tgSaved: string;
  tgSaving: string;
  tgSaveCover: string;
  tgShared: string;
  tgTitle: string;
  tgTrack: string;
  tgWriteFail: string;
  tgYear: string;
  trLang: string;
  trLangAuto: string;
  trModel: string;
  trModelBase: string;
  trModelTiny: string;
  trPreparing: string;
  /** Placeholder: {percent} */
  trDownloading: string;
  /** Placeholder: {percent} */
  trWorking: string;
  /** Placeholder: {count} */
  trDone: string;
  trFirstRun: string;
  trResultPlaceholder: string;
  trCopy: string;
  trCopied: string;
  trTxt: string;
  trSrt: string;
  trTooLong: string;
  trFail: string;
  midiCaveat: string;
  /** Placeholder: {count} */
  midiNotes: string;
  midiNone: string;
  midiTooLong: string;
  /** Placeholder: {percent} */
  midiWorking: string;
  midiFirstRun: string;
  midiFail: string;
  /** Placeholders: {shown} {count} */
  midiMore: string;
  midiDownload: string;
  mixMute: string;
  mixSolo: string;
  mixPan: string;
  mixOffset: string;
  mixTrimIn: string;
  mixTrimOut: string;
  mixGain: string;
  mixMaster: string;
  mixPlay: string;
  mixStop: string;
  mixAdd: string;
  mixLimit: string;
  /** Placeholder: {db} */
  mixPulled: string;
  mixExport: string;
  /** Placeholder: {name} */
  mixDecode: string;
}

export interface UiText {
  skip: string;
  logoHome: string;
  tools: string;
  language: string;
  theme: string;
  navMain: string;
  navAbout: string;
  footerBlurb: string;
  share: string;
  /** Accessible name for a network button. Include {name}. */
  shareOn: string;
  copyLink: string;
  copied: string;
  about: string;
  privacy: string;
  contact: string;
  /** Contact page lede. Placeholder: {email}. */
  contactBody: string;
  /** Contact page privacy note. Placeholder: {privacy}. */
  contactPrivacy: string;
  privacyPolicyLabel: string;
  /** Cookie bar body. Three sentences: feedback widget, cookieless stats, no ads. */
  cookieBody: string;
  cookieAccept: string;
  cookieReject: string;
  /** Standalone privacy-policy link under the cookie bar. */
  cookiePolicy: string;
  /** Link from the tool trust badge to the testing method. */
  trustMethod: string;
  guides: string;
  status: string;
  rights: string;
  clientSide: string;
  trustFree: string;
  trustClean: string;
  /** After this page's scripts have loaded. Not a cold-start claim. */
  trustOffline: string;
  faqHeading: string;
  /** Tool-page FAQ H2. Placeholder: {name} */
  toolFaq: string;
  related: string;
  openTool: string;
  allTools: string;
  browseToolkit: string;
  home: string;
  howTo: string;
  ogAlt: string;
  schemaOs: string;
  schemaBrowser: string;
  features: string[];
  formats: {
    'mp3-320': string;
    'mp3-192': string;
    'mp3-128': string;
    'mp3-96': string;
    'mp3-64': string;
    wav: string;
    m4r: string;
  };
  categories: {
    cut: string;
    convert: string;
    join: string;
    edit: string;
    effects: string;
    record: string;
  };
}

export interface HomeCopy {
  title: string;
  description: string;
  appBlurb: string;
  badge: string;
  h1: string;
  lede: string;
  ctaTrim: string;
  ctaMerge: string;
  /** Screen-reader name for the hero proof points. */
  highlightsLabel: string;
  /** Small currency mark beside the hero price. */
  priceSymbol: string;
  /** The zero, rendered much larger than the symbol. */
  priceAmount: string;
  /** Localized word under the price, e.g. Free. */
  priceWord: string;
  /** Short answers beside the hero: why nothing is uploaded, why it is free. */
  highlights: { title: string; body: string }[];
  toolsHeading: string;
  /** Link to the /tools hub. Placeholder: {count} */
  allToolsCta: string;
  /** Category-card label. Placeholder: {count} */
  toolsCount: string;
  mostUsed: string;
  comingTitle: string;
  comingBody: string;
  useCasesHeading: string;
  /** Persona cards; tools are slugs from TOOLS */
  useCases: { title: string; body: string; tools: string[] }[];
  whyHeading: string;
  why: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export interface AboutCopy {
  title: string;
  description: string;
  h1: string;
  /** Placeholders: {trimmer} {cutter} {joiner} */
  p1: string;
  linkTrimmer: string;
  linkCutter: string;
  linkJoiner: string;
  p2: string;
  p3: string;
}

export interface PrivacyCopy {
  title: string;
  description: string;
  h1: string;
  updated: string;
  /** First section body may include {em}. */
  sections: { h: string; body: string; em?: string }[];
  contactHeading: string;
  /** Include {email} where the address link goes. */
  contactBefore: string;
}

export interface HubCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** One-liner under each category heading on /tools */
  categoryIntro: { cut: string; convert: string; join: string; edit: string; effects: string; record: string };
  /** "What do you want to do?" task router */
  tasksTitle: string;
  /** tool is a slug from TOOLS — the label renders the localized tool name */
  tasks: { task: string; tool: string }[];
}

export interface Shell {
  ui: UiText;
  editor: EditorText;
  home: HomeCopy;
  hub: HubCopy;
  about: AboutCopy;
  privacy: PrivacyCopy;
}

export interface Catalog extends Shell {
  tools: Record<string, ToolCopy>;
}
