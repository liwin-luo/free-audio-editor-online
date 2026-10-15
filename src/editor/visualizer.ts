/**
 * Waveform image rendering for the visualizer tools.
 * The preview canvas and the hi-res export canvas both go through
 * renderWaveformImage — same drawing, different pixel dimensions.
 */
import type { Peaks } from './waveform';

export type WaveformStyle = 'bars' | 'filled' | 'outline' | 'dots' | 'bottom' | 'blocks';

export interface WaveformImageOptions {
  style: WaveformStyle;
  waveColor: string;
  /** Background fill; null paints nothing (transparent PNG). */
  backgroundColor: string | null;
  width: number;
  height: number;
}

/** One-click looks. Colors stay editable after a template is applied. */
export interface WaveformTemplate {
  id: string;
  style: WaveformStyle;
  waveColor: string;
  backgroundColor: string | null;
}

export const WAVEFORM_TEMPLATES: WaveformTemplate[] = [
  { id: 'soundcloud', style: 'bars', waveColor: '#ff5500', backgroundColor: '#121212' },
  { id: 'podcast', style: 'bottom', waveColor: '#fafaf9', backgroundColor: '#1c1917' },
  { id: 'poster', style: 'filled', waveColor: '#e4e4e7', backgroundColor: '#09090b' },
  { id: 'sticker', style: 'bars', waveColor: '#ffffff', backgroundColor: null },
  { id: 'print', style: 'outline', waveColor: '#18181b', backgroundColor: '#ffffff' },
  { id: 'neon', style: 'dots', waveColor: '#22d3ee', backgroundColor: '#020617' },
  { id: 'blocks', style: 'blocks', waveColor: '#2dd4bf', backgroundColor: '#09090b' },
];

/** Size presets export at twice their logical pixels for a crisp result. */
export const PRESET_EXPORT_SCALE = 2;

export function renderWaveformImage(
  canvas: HTMLCanvasElement,
  peaks: Peaks,
  opts: Omit<WaveformImageOptions, 'width' | 'height'> & { width: number; height: number },
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const w = Math.max(1, Math.round(opts.width));
  const h = Math.max(1, Math.round(opts.height));
  canvas.width = w;
  canvas.height = h;

  if (opts.backgroundColor) {
    ctx.fillStyle = opts.backgroundColor;
    ctx.fillRect(0, 0, w, h);
  }
  const color = opts.waveColor;
  if (opts.style === 'filled') drawEnvelope(ctx, peaks, color, w, h);
  else if (opts.style === 'outline') drawOutline(ctx, peaks, color, w, h);
  else if (opts.style === 'dots') drawDots(ctx, peaks, color, w, h);
  else if (opts.style === 'bottom') drawBottom(ctx, peaks, color, w, h);
  else if (opts.style === 'blocks') drawBars(ctx, peaks, color, w, h, 56);
  else drawBars(ctx, peaks, color, w, h, 384);
}

function columnExtent(peaks: Peaks, index: number, columns: number): { lo: number; hi: number } {
  const s = Math.min(peaks.width - 1, Math.max(0, Math.floor((index * peaks.width) / columns)));
  const e = Math.max(s + 1, Math.min(peaks.width, Math.floor(((index + 1) * peaks.width) / columns)));
  let lo = peaks.min[s];
  let hi = peaks.max[s];
  for (let j = s + 1; j < e; j++) {
    if (peaks.min[j] < lo) lo = peaks.min[j];
    if (peaks.max[j] > hi) hi = peaks.max[j];
  }
  return { lo, hi };
}

/**
 * Mirrored bars (SoundCloud-style). `density` is the bar count at any width
 * so every preset keeps roughly the same rhythm.
 */
function drawBars(
  ctx: CanvasRenderingContext2D,
  peaks: Peaks,
  color: string,
  w: number,
  h: number,
  density: number,
): void {
  const unit = Math.max(2, Math.round(w / density));
  const gap = Math.max(1, Math.round(unit * 0.3));
  const barW = Math.max(1, unit - gap);
  const mid = h / 2;
  const scaleY = h / 2 - Math.max(2, Math.round(h * 0.03));

  ctx.fillStyle = color;
  const bars = Math.ceil(w / unit);
  for (let b = 0; b < bars; b++) {
    const { lo, hi } = columnExtent(peaks, b, bars);
    const y1 = mid - hi * scaleY;
    const y2 = mid - lo * scaleY;
    ctx.fillRect(b * unit, y1, barW, Math.max(1, y2 - y1));
  }
}

/** Continuous min/max envelope — the classic "oscilloscope fill". */
function drawEnvelope(ctx: CanvasRenderingContext2D, peaks: Peaks, color: string, w: number, h: number): void {
  const mid = h / 2;
  const scaleY = h / 2 - Math.max(2, Math.round(h * 0.03));

  ctx.fillStyle = color;
  for (let i = 0; i < w; i++) {
    const { lo, hi } = columnExtent(peaks, i, w);
    const y1 = mid - hi * scaleY;
    const y2 = mid - lo * scaleY;
    ctx.fillRect(i, y1, 1, Math.max(1, y2 - y1));
  }
}

/** Hollow envelope — readable on a photo or a light page. */
function drawOutline(ctx: CanvasRenderingContext2D, peaks: Peaks, color: string, w: number, h: number): void {
  const mid = h / 2;
  const scaleY = h / 2 - Math.max(2, Math.round(h * 0.03));
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1.5, h * 0.012);
  ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let i = 0; i < w; i++) {
    const y = mid - columnExtent(peaks, i, w).hi * scaleY;
    if (i === 0) ctx.moveTo(0.5, y);
    else ctx.lineTo(i + 0.5, y);
  }
  for (let i = w - 1; i >= 0; i--) {
    ctx.lineTo(i + 0.5, mid - columnExtent(peaks, i, w).lo * scaleY);
  }
  ctx.closePath();
  ctx.stroke();
}

/** Sampled dots along the peaks. Count stays bounded so a 4K export stays light. */
function drawDots(ctx: CanvasRenderingContext2D, peaks: Peaks, color: string, w: number, h: number): void {
  const n = Math.min(w, Math.max(48, Math.round(w / 14)));
  const r = Math.max(1.5, Math.min(h * 0.02, (w / n) * 0.38));
  const mid = h / 2;
  const scaleY = h / 2 - Math.max(2, Math.round(h * 0.04));
  ctx.fillStyle = color;
  for (let b = 0; b < n; b++) {
    const { lo, hi } = columnExtent(peaks, b, n);
    const x = ((b + 0.5) * w) / n;
    ctx.beginPath();
    ctx.arc(x, mid - hi * scaleY, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, mid - lo * scaleY, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** Bars rising from the bottom edge — the podcast-player shape. */
function drawBottom(ctx: CanvasRenderingContext2D, peaks: Peaks, color: string, w: number, h: number): void {
  const unit = Math.max(2, Math.round(w / 192));
  const gap = Math.max(1, Math.round(unit * 0.28));
  const barW = Math.max(1, unit - gap);
  const pad = Math.max(2, Math.round(h * 0.04));
  const scaleY = h - pad * 2;
  ctx.fillStyle = color;
  const bars = Math.ceil(w / unit);
  for (let b = 0; b < bars; b++) {
    const { lo, hi } = columnExtent(peaks, b, bars);
    const amp = Math.min(1, Math.max(Math.abs(lo), Math.abs(hi)));
    const barH = Math.max(1, amp * scaleY);
    ctx.fillRect(b * unit, h - pad - barH, barW, barH);
  }
}

/** Canvas.toBlob as a promise, PNG. */
export function canvasToPng(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('toBlob failed'))), 'image/png');
  });
}
