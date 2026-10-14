/**
 * Waveform peak computation and canvas rendering.
 * Peaks are (min, max) pairs per pixel column; rendering is theme-aware.
 */

export interface Peaks {
  min: Float32Array;
  max: Float32Array;
  width: number;
}

/** Maximum canvas width we allow (browser canvases break beyond ~32k px). */
export const MAX_CANVAS_WIDTH = 16000;

export function computePeaks(buffer: AudioBuffer, width: number): Peaks {
  width = Math.max(1, Math.floor(width));
  const channels = Math.min(buffer.numberOfChannels, 2);
  const length = buffer.length;
  const min = new Float32Array(width);
  const max = new Float32Array(width);
  const data: Float32Array[] = [];
  for (let c = 0; c < channels; c++) data.push(buffer.getChannelData(c));

  const step = length / width;
  for (let i = 0; i < width; i++) {
    const start = Math.floor(i * step);
    const end = Math.min(Math.floor((i + 1) * step), length);
    let lo = start < length ? data[0][start] : 0;
    let hi = lo;
    for (let c = 0; c < channels; c++) {
      const d = data[c];
      for (let j = start; j < end; j++) {
        const v = d[j];
        if (v < lo) lo = v;
        else if (v > hi) hi = v;
      }
    }
    min[i] = lo;
    max[i] = hi;
  }
  return { min, max, width };
}

/**
 * Concatenate two Peaks objects (used by the joiner preview).
 * `overlapWidth` columns of b overlap the tail of a.
 */
export function concatPeaks(a: Peaks, b: Peaks, overlapWidth = 0): Peaks {
  const keepA = Math.max(0, a.width - overlapWidth);
  const width = keepA + b.width;
  const min = new Float32Array(width);
  const max = new Float32Array(width);
  min.set(a.min.subarray(0, keepA), 0);
  max.set(a.max.subarray(0, keepA), 0);
  min.set(b.min, keepA);
  max.set(b.max, keepA);
  // Fold the overlap region back into the kept tail for a rough preview
  if (overlapWidth > 0) {
    const overlap = Math.min(overlapWidth, a.width, b.width);
    for (let i = 0; i < overlap; i++) {
      const ai = keepA - overlap + i;
      const bi = i;
      if (ai >= 0) {
        min[ai] = Math.min(min[ai], b.min[bi]);
        max[ai] = Math.max(max[ai], b.max[bi]);
      }
    }
  }
  return { min, max, width };
}

export function peaksDurationToWidth(peaks: Peaks, width: number): Peaks {
  if (width === peaks.width) return peaks;
  return computePeaksFromPeaks(peaks, width);
}

function computePeaksFromPeaks(src: Peaks, width: number): Peaks {
  const min = new Float32Array(width);
  const max = new Float32Array(width);
  const step = src.width / width;
  for (let i = 0; i < width; i++) {
    const s = Math.floor(i * step);
    const e = Math.max(s + 1, Math.floor((i + 1) * step));
    let lo = src.min[s];
    let hi = src.max[s];
    for (let j = s + 1; j < e && j < src.width; j++) {
      if (src.min[j] < lo) lo = src.min[j];
      if (src.max[j] > hi) hi = src.max[j];
    }
    min[i] = lo;
    max[i] = hi;
  }
  return { min, max, width };
}

/**
 * Draw the waveform into a canvas, sized to its element box.
 * When `range` is given, only that pixel range is painted (no clear) —
 * used to overlay the accent color inside the selection.
 */
export function drawWaveform(
  canvas: HTMLCanvasElement,
  peaks: Peaks,
  color: string,
  range?: { from: number; to: number },
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  if (!range) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.clientWidth || peaks.width;
    const cssH = canvas.clientHeight || 100;
    canvas.width = Math.max(1, Math.round(cssW * dpr));
    canvas.height = Math.max(1, Math.round(cssH * dpr));
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cssW, cssH);
  }

  const cssW = canvas.clientWidth || peaks.width;
  const cssH = canvas.clientHeight || 100;
  const mid = cssH / 2;
  const scaleY = cssH / 2 - 6; // 6px padding; values are in [-1, 1]
  const cols = Math.min(peaks.width, Math.round(cssW));
  const srcStep = peaks.width / cols;
  const from = range ? Math.max(0, Math.floor(range.from)) : 0;
  const to = range ? Math.min(cols, Math.ceil(range.to)) : cols;

  ctx.fillStyle = color;
  for (let i = from; i < to; i++) {
    const s = Math.floor(i * srcStep);
    const e = Math.max(s + 1, Math.floor((i + 1) * srcStep));
    let lo = peaks.min[s];
    let hi = peaks.max[s];
    for (let j = s + 1; j < e && j < peaks.width; j++) {
      if (peaks.min[j] < lo) lo = peaks.min[j];
      if (peaks.max[j] > hi) hi = peaks.max[j];
    }
    const y1 = mid - hi * scaleY;
    const y2 = mid - lo * scaleY;
    ctx.fillRect(i, y1, 1, Math.max(1, y2 - y1));
  }
}
