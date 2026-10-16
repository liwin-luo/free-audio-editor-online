export interface ToolCopy {
  name: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  intro: string;
  usesHeading: string;
  uses: [string, string, string];
  howTo: { name: string; text: string }[];
  faqs: { q: string; a: string }[];
  dropHint: string;
  exportLabel?: string;
}

export interface EditorText {
  dropHour: string;
  dropLocal: string;
  zoomOut: string;
  zoomIn: string;
  loadDifferent: string;
  startOver: string;
  waveform: string;
  play: string;
  pause: string;
  hintSelect: string;
  hintConvert: string;
  reverse: string;
  normalize: string;
  speed: string;
  pitch: string;
  bass: string;
  treble: string;
  mid: string;
  cutoff: string;
  volume: string;
  reverb: string;
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
  guides: string;
  status: string;
  rights: string;
  clientSide: string;
  trustLocal: string;
  trustFree: string;
  trustClean: string;
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
    wav: string;
    m4r: string;
  };
  categories: {
    cut: string;
    merge: string;
    record: string;
    effects: string;
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
  toolsHeading: string;
  /** Link to the /tools hub. Placeholder: {count} */
  allToolsCta: string;
  /** Category-card label. Placeholder: {count} */
  toolsCount: string;
  mostUsed: string;
  comingTitle: string;
  comingBody: string;
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
