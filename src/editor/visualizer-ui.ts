/**
 * Progressive enhancement for the visualizer islands (VisualizerEditor.astro).
 * Image-output tools: decode locally, draw on canvas, export PNG. No audio
 * export path. The time range picks which slice of the file is drawn.
 */
import { computePeaks, MAX_CANVAS_WIDTH, type Peaks } from './waveform';
import {
  canvasToPng,
  renderWaveformImage,
  PRESET_EXPORT_SCALE,
  WAVEFORM_TEMPLATES,
  type WaveformStyle,
} from './visualizer';
import { mixMono, paintSpec, specColumnDb, type ColormapName, type SpecAxis } from './spectrogram';
import { readEditorText, showToast } from './messages';
import { bindFileOpen } from './delivery';
import { clamp, formatBytes, formatTime } from '../lib/format';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';
import type { EditorConfig } from '../data/tools';

const MAX_EXPORT_HEIGHT = 8000;
/** Columns of FFT, not pixels. A long file stays inside this. */
const SPEC_PREVIEW_COLS = 480;
const SPEC_EXPORT_COLS = 3000;

interface Elements {
  root: HTMLElement;
  dropzone: HTMLElement;
  fileInput: HTMLInputElement;
  workspace: HTMLElement;
  fileName: HTMLElement;
  fileMeta: HTMLElement;
  stage: HTMLElement;
  canvas: HTMLCanvasElement;
  template: HTMLSelectElement | null;
  style: HTMLSelectElement | null;
  waveColor: HTMLInputElement | null;
  bgColor: HTMLInputElement | null;
  transparent: HTMLInputElement | null;
  size: HTMLSelectElement | null;
  customRow: HTMLElement | null;
  customW: HTMLInputElement | null;
  customH: HTMLInputElement | null;
  rangeStart: HTMLInputElement | null;
  rangeEnd: HTMLInputElement | null;
  startSlider: HTMLInputElement | null;
  endSlider: HTMLInputElement | null;
  rangeReadout: HTMLElement | null;
  fft: HTMLSelectElement | null;
  axis: HTMLSelectElement | null;
  maxHz: HTMLInputElement | null;
  dbFloor: HTMLInputElement | null;
  dbCeil: HTMLInputElement | null;
  colormap: HTMLSelectElement | null;
  exportBtn: HTMLButtonElement;
  status: HTMLElement;
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Visualizer markup missing: ${selector}`);
  return el;
}

export class VisualizerApp {
  private els: Elements;
  private config: EditorConfig;
  private text: EditorText;

  private buffer: AudioBuffer | null = null;
  private fileName = 'audio';
  private peaks = new Map<string, Peaks>();
  private busy = false;
  private resizeTimer = 0;
  private previewTimer = 0;
  private specJob = 0;
  private mono: Float32Array | null = null;
  private sampleRate = 44100;
  /** Seconds. The picture is this slice, not the whole file. */
  private range = { start: 0, end: 0 };

  constructor(root: HTMLElement, config: EditorConfig) {
    this.config = config;
    this.text = readEditorText(root);
    this.els = {
      root,
      dropzone: requireEl(root, '[data-dropzone]'),
      fileInput: requireEl<HTMLInputElement>(root, '[data-file-input]'),
      workspace: requireEl(root, '[data-workspace]'),
      fileName: requireEl(root, '[data-file-name]'),
      fileMeta: requireEl(root, '[data-file-meta]'),
      stage: requireEl(root, '[data-stage]'),
      canvas: requireEl<HTMLCanvasElement>(root, '[data-preview]'),
      template: root.querySelector<HTMLSelectElement>('[data-viz-template]'),
      style: root.querySelector<HTMLSelectElement>('[data-viz-style]'),
      waveColor: root.querySelector<HTMLInputElement>('[data-viz-wave-color]'),
      bgColor: root.querySelector<HTMLInputElement>('[data-viz-bg-color]'),
      transparent: root.querySelector<HTMLInputElement>('[data-viz-transparent]'),
      size: root.querySelector<HTMLSelectElement>('[data-viz-size]'),
      customRow: root.querySelector<HTMLElement>('[data-viz-custom-row]'),
      customW: root.querySelector<HTMLInputElement>('[data-viz-w]'),
      customH: root.querySelector<HTMLInputElement>('[data-viz-h]'),
      rangeStart: root.querySelector<HTMLInputElement>('[data-viz-start]'),
      rangeEnd: root.querySelector<HTMLInputElement>('[data-viz-end]'),
      startSlider: root.querySelector<HTMLInputElement>('[data-viz-start-slider]'),
      endSlider: root.querySelector<HTMLInputElement>('[data-viz-end-slider]'),
      rangeReadout: root.querySelector<HTMLElement>('[data-viz-range-readout]'),
      fft: root.querySelector<HTMLSelectElement>('[data-viz-fft]'),
      axis: root.querySelector<HTMLSelectElement>('[data-viz-axis]'),
      maxHz: root.querySelector<HTMLInputElement>('[data-viz-max-hz]'),
      dbFloor: root.querySelector<HTMLInputElement>('[data-viz-db-floor]'),
      dbCeil: root.querySelector<HTMLInputElement>('[data-viz-db-ceil]'),
      colormap: root.querySelector<HTMLSelectElement>('[data-viz-colormap]'),
      exportBtn: requireEl<HTMLButtonElement>(root, '[data-export]'),
      status: requireEl(root, '[data-status]'),
    };
    this.bind();
    this.syncSizeUI();
  }

  private bind(): void {
    const { els } = this;
    bindFileOpen(els.dropzone, () => els.fileInput.click());
    els.fileInput.addEventListener('change', () => {
      const file = els.fileInput.files?.[0];
      els.fileInput.value = '';
      if (file) void this.loadFile(file);
    });
    els.dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      els.dropzone.classList.add('border-accent');
    });
    els.dropzone.addEventListener('dragleave', () => els.dropzone.classList.remove('border-accent'));
    els.dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      els.dropzone.classList.remove('border-accent');
      const file = e.dataTransfer?.files?.[0];
      if (file) void this.loadFile(file);
    });

    els.template?.addEventListener('change', () => this.applyTemplate());
    // Any control change repaints the preview. Editing a look drops the template name.
    for (const el of [els.style, els.waveColor, els.bgColor, els.transparent, els.size]) {
      el?.addEventListener('change', () => {
        if (el !== els.size && els.template) els.template.value = '';
        this.syncSizeUI();
        this.renderPreview();
      });
    }
    for (const el of [els.fft, els.axis, els.maxHz, els.dbFloor, els.dbCeil, els.colormap]) {
      el?.addEventListener('change', () => this.schedulePreview());
    }
    const readNums = () => this.setRange(Number(els.rangeStart?.value), Number(els.rangeEnd?.value));
    const readSliders = () => this.setRange(Number(els.startSlider?.value), Number(els.endSlider?.value));
    els.rangeStart?.addEventListener('change', readNums);
    els.rangeEnd?.addEventListener('change', readNums);
    els.startSlider?.addEventListener('input', readSliders);
    els.endSlider?.addEventListener('input', readSliders);
    for (const el of [els.customW, els.customH]) {
      el?.addEventListener('input', () => this.renderPreview());
    }
    els.exportBtn.addEventListener('click', () => void this.doExport());
    els.root.querySelector('[data-reset]')?.addEventListener('click', () => this.reset());
    window.addEventListener('resize', () => {
      window.clearTimeout(this.resizeTimer);
      this.resizeTimer = window.setTimeout(() => this.renderPreview(), 150);
    });
  }

  // ---------- File loading ----------

  private async loadFile(file: File): Promise<void> {
    if (this.busy) return;
    if (file.size > 300 * 1024 * 1024) {
      showToast(this.toastRoot(), 'error', this.text.tooBig);
      return;
    }
    this.busy = true;
    this.setStatus(this.text.decoding);
    try {
      const data = await file.arrayBuffer();
      const ctx = new AudioContext();
      let buffer: AudioBuffer;
      try {
        buffer = await ctx.decodeAudioData(data);
      } finally {
        // Browsers cap concurrent AudioContexts; a failed decode must not leak one.
        await ctx.close();
      }

      this.buffer = buffer;
      this.fileName = file.name.replace(/\.[^.]+$/, '') || 'audio';
      this.peaks.clear();
      this.mono = this.config.visualizer === 'spectrogram' ? mixMono(buffer) : null;
      this.sampleRate = buffer.sampleRate;
      this.setRange(0, buffer.duration, false);

      this.els.fileName.textContent = file.name;
      this.els.fileMeta.textContent = `${formatBytes(file.size)} · ${formatTime(buffer.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;

      this.els.dropzone.hidden = true;
      this.els.workspace.classList.remove('hidden');
      this.els.exportBtn.disabled = false;

      // clientWidth is 0 until the workspace has been laid out
      requestAnimationFrame(() => this.renderPreview());
      this.setStatus(this.text.vizReady);
      if (buffer.duration > 3600) showToast(this.toastRoot(), 'info', this.text.hourWarning);
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    } finally {
      this.busy = false;
    }
  }

  private reset(): void {
    this.buffer = null;
    this.mono = null;
    this.peaks.clear();
    this.els.workspace.classList.add('hidden');
    this.els.dropzone.hidden = false;
    this.els.exportBtn.disabled = true;
    this.setStatus('');
  }

  // ---------- Sizing ----------

  /** Logical export size from the size select (or the custom inputs). */
  private exportSize(): { w: number; h: number; custom: boolean } {
    const sel = this.els.size;
    if (sel && sel.value !== 'custom') {
      const opt = sel.selectedOptions[0];
      return { w: Number(opt?.dataset.w ?? 1920), h: Number(opt?.dataset.h ?? 1080), custom: false };
    }
    const clampDim = (v: number, fallback: number) => clampInt(v, 100, 8000, fallback);
    return {
      w: clampDim(Number(this.els.customW?.value), 1600),
      h: clampDim(Number(this.els.customH?.value), 400),
      custom: true,
    };
  }

  private syncSizeUI(): void {
    const custom = this.els.size?.value === 'custom';
    this.els.customRow?.classList.toggle('hidden', !custom);
    this.els.customRow?.classList.toggle('flex', custom);
    // A transparent export ignores the background color
    if (this.els.bgColor) this.els.bgColor.disabled = this.els.transparent?.checked ?? false;
  }

  /** Minimum window so a zero-length slice cannot divide the file into nothing. */
  private setRange(start: number, end: number, preview = true): void {
    const dur = this.buffer?.duration ?? 0;
    if (dur <= 0) return;
    const gap = Math.min(0.05, dur);
    start = clamp(round2(start), 0, dur - gap);
    end = clamp(round2(end), start + gap, dur);
    this.range = { start, end };
    const write = (el: HTMLInputElement | null, value: number) => {
      if (!el) return;
      el.min = '0';
      el.max = String(dur);
      el.value = String(value);
    };
    write(this.els.rangeStart, start);
    write(this.els.rangeEnd, end);
    write(this.els.startSlider, start);
    write(this.els.endSlider, end);
    if (this.els.rangeReadout) {
      this.els.rangeReadout.textContent = `${formatTime(start, true)} – ${formatTime(end, true)}`;
    }
    if (preview) this.schedulePreview();
  }

  private applyTemplate(): void {
    const tpl = WAVEFORM_TEMPLATES.find((item) => item.id === this.els.template?.value);
    if (!tpl) return;
    if (this.els.style) this.els.style.value = tpl.style;
    if (this.els.waveColor) this.els.waveColor.value = tpl.waveColor;
    if (this.els.transparent) this.els.transparent.checked = tpl.backgroundColor === null;
    if (tpl.backgroundColor && this.els.bgColor) this.els.bgColor.value = tpl.backgroundColor;
    this.syncSizeUI();
    this.renderPreview();
  }

  private schedulePreview(): void {
    window.clearTimeout(this.previewTimer);
    this.previewTimer = window.setTimeout(() => this.renderPreview(), 80);
  }

  private peaksFor(width: number): Peaks | null {
    if (!this.buffer) return null;
    const key = `${Math.max(1, Math.round(width))}:${this.range.start}:${this.range.end}`;
    let p = this.peaks.get(key);
    if (!p) {
      // ponytail: a long scrub can miss the cache on every step. Drop it past
      // 24 entries; recomputing one window is cheaper than keeping them all.
      if (this.peaks.size > 24) this.peaks.clear();
      p = computePeaks(this.buffer, Math.max(1, Math.round(width)), this.range);
      this.peaks.set(key, p);
    }
    return p;
  }

  private imageOptions(): { style: WaveformStyle; waveColor: string; backgroundColor: string | null } {
    return {
      style: (this.els.style?.value as WaveformStyle) ?? 'bars',
      waveColor: this.els.waveColor?.value ?? '#0d9488',
      backgroundColor: this.els.transparent?.checked ? null : this.els.bgColor?.value ?? '#09090b',
    };
  }

  // ---------- Preview ----------

  private renderPreview(): void {
    if (!this.buffer) return;
    if (this.config.visualizer === 'spectrogram') {
      void this.renderSpectrogram();
      return;
    }
    const { w, h } = this.exportSize();
    this.els.canvas.style.aspectRatio = `${w} / ${h}`;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = Math.max(1, Math.round((this.els.canvas.clientWidth || 600) * dpr));
    const ch = Math.max(1, Math.round((this.els.canvas.clientHeight || 200) * dpr));
    const peaks = this.peaksFor(Math.min(cw, MAX_CANVAS_WIDTH));
    if (!peaks) return;
    renderWaveformImage(this.els.canvas, peaks, { ...this.imageOptions(), width: cw, height: ch });
  }

  // ---------- Export ----------

  private async doExport(): Promise<void> {
    if (!this.buffer || this.busy) return;
    if (this.config.visualizer === 'spectrogram') {
      await this.exportSpectrogram();
      return;
    }
    this.busy = true;
    this.els.exportBtn.disabled = true;
    const label = this.els.exportBtn.querySelector('[data-export-label]');
    const original = label?.textContent ?? '';
    if (label) label.textContent = this.text.vizRendering;
    this.setStatus(this.text.renderingStatus);
    try {
      const { w, h, custom } = this.exportSize();
      // Presets render at 2× for a crisp result; large custom sizes at 1× to
      // stay inside canvas memory limits.
      const scale = custom && w * h > 2_000_000 ? 1 : PRESET_EXPORT_SCALE;
      const width = Math.min(w * scale, MAX_CANVAS_WIDTH);
      const height = Math.min(h * scale, MAX_EXPORT_HEIGHT);
      const peaks = this.peaksFor(width);
      if (!peaks) throw new Error('no peaks');

      const off = document.createElement('canvas');
      renderWaveformImage(off, peaks, { ...this.imageOptions(), width, height });
      const blob = await canvasToPng(off);

      const filename = `${this.fileName}-waveform.png`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);

      this.setStatus(fill(this.text.exported, { file: filename }));
      showToast(this.toastRoot(), 'success', fill(this.text.saved, { file: filename }));
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.vizExportFail);
    } finally {
      if (label) label.textContent = original;
      this.els.exportBtn.disabled = false;
      this.busy = false;
    }
  }

  private specOptions(): {
    fftSize: number;
    axis: SpecAxis;
    maxHz: number;
    dbFloor: number;
    dbCeil: number;
    colormap: ColormapName;
  } {
    const fftSize = Number(this.els.fft?.value) || 2048;
    const axis: SpecAxis = this.els.axis?.value === 'linear' ? 'linear' : 'log';
    const nyquist = Math.max(1000, this.sampleRate / 2);
    let maxHz = clamp(Number(this.els.maxHz?.value), 200, nyquist);
    if (!Number.isFinite(maxHz)) maxHz = Math.min(20000, nyquist);
    let dbFloor = Number(this.els.dbFloor?.value);
    let dbCeil = Number(this.els.dbCeil?.value);
    if (!Number.isFinite(dbFloor)) dbFloor = -90;
    if (!Number.isFinite(dbCeil)) dbCeil = -20;
    if (dbCeil <= dbFloor) dbCeil = dbFloor + 6;
    const raw = this.els.colormap?.value;
    const colormap: ColormapName = raw === 'inferno' || raw === 'gray' ? raw : 'viridis';
    return { fftSize, axis, maxHz, dbFloor, dbCeil, colormap };
  }

  /** Yield every few columns so a long file does not freeze the tab. */
  private async specColumns(count: number, fftSize: number, job: number): Promise<Float32Array[] | null> {
    if (!this.mono) return null;
    const start = Math.floor(this.range.start * this.sampleRate);
    const end = Math.max(start + 1, Math.ceil(this.range.end * this.sampleRate));
    const span = end - start;
    const cols: Float32Array[] = new Array(count);
    for (let i = 0; i < count; i++) {
      if (job !== this.specJob) return null;
      const center = start + ((i + 0.5) * span) / count;
      cols[i] = specColumnDb(this.mono, center, fftSize);
      if (i > 0 && i % 24 === 0) {
        this.setStatus(fill(this.text.specProgress, { pct: Math.round((i / count) * 100) }));
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }
    return job === this.specJob ? cols : null;
  }

  private async renderSpectrogram(): Promise<void> {
    if (!this.mono || !this.buffer) return;
    const job = ++this.specJob;
    const { w, h } = this.exportSize();
    this.els.canvas.style.aspectRatio = `${w} / ${h}`;
    const spec = this.specOptions();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round((this.els.canvas.clientWidth || 600) * dpr));
    const height = Math.max(1, Math.round((this.els.canvas.clientHeight || 200) * dpr));
    const cols = await this.specColumns(Math.min(SPEC_PREVIEW_COLS, width), spec.fftSize, job);
    if (!cols || job !== this.specJob) return;
    paintSpec(this.els.canvas, cols, {
      ...spec,
      sampleRate: this.sampleRate,
      minHz: 20,
      width,
      height,
    });
    this.setStatus(this.text.vizReady);
  }

  private async exportSpectrogram(): Promise<void> {
    this.busy = true;
    this.els.exportBtn.disabled = true;
    const label = this.els.exportBtn.querySelector('[data-export-label]');
    const original = label?.textContent ?? '';
    if (label) label.textContent = this.text.vizRendering;
    this.setStatus(this.text.renderingStatus);
    try {
      const job = ++this.specJob;
      const { w, h, custom } = this.exportSize();
      const scale = custom && w * h > 2_000_000 ? 1 : PRESET_EXPORT_SCALE;
      const width = Math.min(w * scale, MAX_CANVAS_WIDTH);
      const height = Math.min(h * scale, MAX_EXPORT_HEIGHT);
      const spec = this.specOptions();
      const count = Math.min(SPEC_EXPORT_COLS, width);
      const cols = await this.specColumns(count, spec.fftSize, job);
      if (!cols) return;
      const off = document.createElement('canvas');
      paintSpec(off, cols, { ...spec, sampleRate: this.sampleRate, minHz: 20, width, height });
      const blob = await canvasToPng(off);
      const filename = `${this.fileName}-spectrogram.png`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      this.setStatus(fill(this.text.exported, { file: filename }));
      showToast(this.toastRoot(), 'success', fill(this.text.saved, { file: filename }));
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.vizExportFail);
    } finally {
      if (label) label.textContent = original;
      this.els.exportBtn.disabled = false;
      this.busy = false;
    }
  }

  // ---------- Misc ----------

  private setStatus(msg: string): void {
    this.els.status.textContent = msg;
  }

  private toastRoot(): HTMLElement | null {
    return this.els.root.querySelector<HTMLElement>('[data-toast-root]');
  }
}

function round2(v: number): number {
  if (!Number.isFinite(v)) return 0;
  return Math.round(v * 100) / 100;
}

function clampInt(v: number, min: number, max: number, fallback: number): number {
  if (!Number.isFinite(v)) return fallback;
  return Math.min(max, Math.max(min, Math.round(v)));
}

export function initVisualizers(): void {
  document.querySelectorAll<HTMLElement>('[data-visualizer]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    const config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    new VisualizerApp(root, config);
  });
}
