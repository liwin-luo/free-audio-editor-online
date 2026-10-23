/**
 * Real-time music visualizer: log-spaced FFT bands, frame drawing for the
 * four styles, and video-mime selection for MediaRecorder. The drawing and
 * band math is pure canvas work so scripts/music-visualizer-check.mjs can
 * run it in Node; only the mime probe touches browser globals.
 */

export type LiveStyle = 'bars' | 'mirrored' | 'ring' | 'scope';

export const LIVE_BAR_COUNT = 64;

export interface LiveTheme {
  id: string;
  primary: string;
  background: string;
}

/** One-click looks. Both colors stay editable after a theme is applied. */
export const LIVE_THEMES: LiveTheme[] = [
  { id: 'neon', primary: '#22d3ee', background: '#020617' },
  { id: 'synthwave', primary: '#f472b6', background: '#1e1b4b' },
  { id: 'fire', primary: '#f97316', background: '#17100b' },
  { id: 'ocean', primary: '#38bdf8', background: '#082f49' },
  { id: 'matrix', primary: '#4ade80', background: '#020f08' },
  { id: 'midnight', primary: '#fafafa', background: '#09090b' },
  { id: 'paper', primary: '#18181b', background: '#ffffff' },
];

/** Video presets, plus custom sizes clamped to what realtime capture can hold. */
export const MV_MIN_SIDE = 200;
export const MV_MAX_SIDE = 2160;

export function clampVideoSide(n: number): number {
  return Math.min(MV_MAX_SIDE, Math.max(MV_MIN_SIDE, Math.round(n)));
}

/**
 * Bin edges [e0…eBars] over an AnalyserNode spectrum (length fftSize/2),
 * spaced logarithmically in Hz between minHz and maxHz. Strictly increasing:
 * below ~100 Hz several log bands round to the same bin, so those edges are
 * pushed up one bin and every band keeps at least one bin to read.
 */
export function logBinEdges(
  bars: number,
  fftSize: number,
  sampleRate: number,
  minHz: number,
  maxHz: number,
): Int32Array {
  const bins = fftSize >> 1;
  const nyquist = sampleRate / 2;
  const edges = new Int32Array(bars + 1);
  let prev = 0;
  for (let i = 0; i <= bars; i++) {
    const hz = minHz * Math.pow(maxHz / minHz, i / bars);
    const bin = Math.round((hz / nyquist) * bins);
    edges[i] = Math.min(bins - 1, Math.max(prev + 1, bin));
    prev = edges[i];
  }
  return edges;
}

/** Loudest byte in each band, normalized 0–1 (AnalyserNode bytes are dB-mapped). */
export function barHeights(spectrum: Uint8Array, edges: Int32Array): Float32Array {
  const bars = edges.length - 1;
  const heights = new Float32Array(bars);
  for (let b = 0; b < bars; b++) {
    let peak = 0;
    for (let bin = edges[b]; bin < edges[b + 1]; bin++) {
      if (spectrum[bin] > peak) peak = spectrum[bin];
    }
    heights[b] = peak / 255;
  }
  return heights;
}

export interface LiveFrameOptions {
  style: LiveStyle;
  primary: string;
  /** null clears — the exported frame keeps transparency. */
  background: string | null;
  heights: Float32Array;
  /** Time-domain bytes (128 = silence); the scope style draws this line. */
  waveform: Uint8Array;
}

/** One animation frame. The canvas keeps its size; this only paints. */
export function drawLiveFrame(ctx: CanvasRenderingContext2D, opts: LiveFrameOptions): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  paintBackground(ctx, w, h, opts.background);
  if (opts.style === 'scope') drawScope(ctx, w, h, opts.primary, opts.waveform);
  else if (opts.style === 'ring') drawRing(ctx, w, h, opts.primary, opts.heights);
  else if (opts.style === 'mirrored') drawMirrored(ctx, w, h, opts.primary, opts.heights);
  else drawBars(ctx, w, h, opts.primary, opts.heights);
}

function paintBackground(ctx: CanvasRenderingContext2D, w: number, h: number, background: string | null): void {
  if (background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, w, h);
  } else {
    ctx.clearRect(0, 0, w, h);
  }
}

/** Mix a hex color toward white; t=0 is the color, t=1 is white. */
function lighten(hex: string, t: number): string {
  const n = hex.length === 7 ? parseInt(hex.slice(1), 16) : 0x999999;
  const r = Math.round(((n >> 16) & 255) + (255 - ((n >> 16) & 255)) * t);
  const g = Math.round(((n >> 8) & 255) + (255 - ((n >> 8) & 255)) * t);
  const b = Math.round((n & 255) + (255 - (n & 255)) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function barGradient(ctx: CanvasRenderingContext2D, h: number, primary: string): CanvasGradient {
  const grad = ctx.createLinearGradient(0, h, 0, h * 0.3);
  grad.addColorStop(0, primary);
  grad.addColorStop(1, lighten(primary, 0.45));
  return grad;
}

function barGeometry(w: number, bars: number): { unit: number; barW: number } {
  const unit = w / bars;
  return { unit, barW: Math.max(1, unit * 0.72) };
}

/** Spectrum bars rising from the bottom edge. */
function drawBars(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  primary: string,
  heights: Float32Array,
): void {
  const bars = heights.length;
  const { unit, barW } = barGeometry(w, bars);
  const pad = Math.max(2, h * 0.03);
  const maxH = h - pad * 2;
  ctx.fillStyle = barGradient(ctx, h, primary);
  for (let b = 0; b < bars; b++) {
    const bh = Math.max(barW * 0.6, heights[b] * maxH);
    ctx.fillRect(b * unit + (unit - barW) / 2, h - pad - bh, barW, bh);
  }
}

/** Spectrum bars mirrored around the vertical center. */
function drawMirrored(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  primary: string,
  heights: Float32Array,
): void {
  const bars = heights.length;
  const { unit, barW } = barGeometry(w, bars);
  const mid = h / 2;
  const scaleY = h * 0.46;
  ctx.fillStyle = barGradient(ctx, h, primary);
  for (let b = 0; b < bars; b++) {
    const amp = Math.max(barW * 0.3 / scaleY, heights[b]);
    ctx.fillRect(b * unit + (unit - barW) / 2, mid - amp * scaleY, barW, amp * scaleY * 2);
  }
}

/** Bars radiating from a circle, starting at 12 o'clock. */
function drawRing(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  primary: string,
  heights: Float32Array,
): void {
  const bars = heights.length;
  const cx = w / 2;
  const cy = h / 2;
  const base = Math.min(w, h);
  const r0 = base * 0.2;
  const maxLen = base * 0.27;
  const lineW = Math.max(2, base * 0.006);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = primary;
  for (let b = 0; b < bars; b++) {
    const len = Math.max(lineW, heights[b] * maxLen);
    ctx.save();
    ctx.rotate(-Math.PI / 2 + (b / bars) * Math.PI * 2);
    ctx.fillRect(-lineW / 2, -(r0 + len), lineW, len);
    ctx.restore();
  }
  ctx.restore();
}

/** Oscilloscope line from the time-domain bytes. */
function drawScope(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  primary: string,
  waveform: Uint8Array,
): void {
  ctx.strokeStyle = primary;
  ctx.lineWidth = Math.max(2, h * 0.008);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  const m = waveform.length;
  const scaleY = h * 0.42;
  for (let x = 0; x < w; x++) {
    const v = waveform[Math.min(m - 1, Math.floor((x / w) * m))];
    const y = h / 2 - ((v - 128) / 128) * scaleY;
    if (x === 0) ctx.moveTo(0, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

const VIDEO_MIMES = [
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm',
  'video/mp4',
];

export interface VideoMime {
  mime: string;
  ext: string;
}

/** First canvas-recordable container this browser offers, or null. */
export function pickVideoMime(): VideoMime | null {
  if (typeof MediaRecorder === 'undefined') return null;
  for (const mime of VIDEO_MIMES) {
    if (MediaRecorder.isTypeSupported?.(mime)) {
      return { mime, ext: mime.includes('mp4') ? 'mp4' : 'webm' };
    }
  }
  return null;
}

export function canRecordVideo(): boolean {
  return (
    typeof HTMLCanvasElement !== 'undefined' &&
    typeof HTMLCanvasElement.prototype.captureStream === 'function' &&
    pickVideoMime() !== null
  );
}
