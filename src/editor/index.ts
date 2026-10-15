/**
 * Single-file audio editor: progressive enhancement over the static markup in
 * AudioEditor.astro. All audio processing happens in the browser.
 */
import { formatBytes, formatTime, clamp } from '../lib/format';
import { computePeaks, drawWaveform, MAX_CANVAS_WIDTH, type Peaks } from './waveform';
import { defaultEditState, renderEdit, computeNormalizeGain, type EditState } from './processor';
import { encodeFor, getFormat, isM4rSupported } from './encoders';
import { readEditorText } from './messages';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';
import type { EditorConfig } from '../data/tools';

interface Elements {
  root: HTMLElement;
  dropzone: HTMLElement;
  fileInput: HTMLInputElement;
  workspace: HTMLElement;
  fileName: HTMLElement;
  fileMeta: HTMLElement;
  stage: HTMLElement;
  stageContent: HTMLElement;
  canvas: HTMLCanvasElement;
  selection: HTMLElement;
  handleStart: HTMLElement;
  handleEnd: HTMLElement;
  playhead: HTMLElement;
  zoomIn: HTMLButtonElement;
  zoomOut: HTMLButtonElement;
  reset: HTMLButtonElement;
  play: HTMLButtonElement;
  timecode: HTMLElement;
  status: HTMLElement;
  /** Absent on converter pages (no cut UI) */
  modeKeep: HTMLButtonElement | null;
  modeDelete: HTMLButtonElement | null;
  preciseStart: HTMLInputElement | null;
  preciseEnd: HTMLInputElement | null;
  format: HTMLSelectElement;
  exportBtn: HTMLButtonElement;
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Editor markup missing: ${selector}`);
  return el;
}

export function showToast(root: HTMLElement | null, kind: 'info' | 'success' | 'error', message: string): void {
  if (!root) return;
  const border = kind === 'error' ? 'border-l-danger' : kind === 'success' ? 'border-l-success' : 'border-l-accent';
  const el = document.createElement('div');
  el.setAttribute('role', kind === 'error' ? 'alert' : 'status');
  el.className = `pointer-events-auto w-full max-w-md cursor-pointer rounded-lg border border-line ${border} border-l-4 bg-surface px-4 py-3 text-sm text-ink shadow-[0_8px_24px_-8px_rgba(9,9,11,0.25)]`;
  el.textContent = message;
  el.addEventListener('click', () => el.remove());
  root.appendChild(el);
  setTimeout(() => el.remove(), 4500);
}

let activeEditor: Editor | null = null;

export class Editor {
  private els: Elements;
  private config: EditorConfig;
  private text: EditorText;

  private buffer: AudioBuffer | null = null;
  private peaks: Peaks | null = null;
  private duration = 0;
  private fileName = 'audio';
  private pps = 100; // pixels per second
  private fitPps = 100;
  private canvasWidth = 0;
  private zoomed = false;

  private state: EditState = defaultEditState();
  private history: EditState[] = [];

  private audioCtx: AudioContext | null = null;
  private playSource: AudioBufferSourceNode | null = null;
  private playing = false;
  private playStartedAt = 0;
  private playOffset = 0;
  private playEnd = 0;
  private playRate = 1;
  private playheadTime = 0;
  private raf = 0;
  private pitchPreview: AudioBuffer | null = null;
  private pitchPreviewKey = '';

  private busy = false;
  private drag: { kind: 'new' | 'start' | 'end'; x0: number; anchor: number; sel: { start: number; end: number } } | null = null;

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
      stageContent: requireEl(root, '[data-stage-content]'),
      canvas: requireEl<HTMLCanvasElement>(root, '[data-wave]'),
      selection: requireEl(root, '[data-selection]'),
      handleStart: requireEl(root, '[data-handle-start]'),
      handleEnd: requireEl(root, '[data-handle-end]'),
      playhead: requireEl(root, '[data-playhead]'),
      zoomIn: requireEl<HTMLButtonElement>(root, '[data-zoom-in]'),
      zoomOut: requireEl<HTMLButtonElement>(root, '[data-zoom-out]'),
      reset: requireEl<HTMLButtonElement>(root, '[data-reset]'),
      play: requireEl<HTMLButtonElement>(root, '[data-play]'),
      timecode: requireEl(root, '[data-timecode]'),
      status: requireEl(root, '[data-status]'),
      // Cut-mode UI is absent on converter pages
      modeKeep: root.querySelector<HTMLButtonElement>('[data-mode="keep"]'),
      modeDelete: root.querySelector<HTMLButtonElement>('[data-mode="delete"]'),
      preciseStart: root.querySelector<HTMLInputElement>('[data-precise-start]'),
      preciseEnd: root.querySelector<HTMLInputElement>('[data-precise-end]'),
      format: requireEl<HTMLSelectElement>(root, '[data-format]'),
      exportBtn: requireEl<HTMLButtonElement>(root, '[data-export]'),
    };

    this.els.format.value = config.defaultFormat;
    // The M4R option only renders on pages that opt in; remove it when the
    // browser cannot encode AAC so export never dead-ends.
    if (config.formats?.includes('m4r')) {
      void isM4rSupported().then((ok) => {
        if (!ok) {
          this.els.format.querySelector<HTMLOptionElement>('option[value="m4r"]')?.remove();
          if (this.els.format.value === 'm4r') this.els.format.value = 'mp3-192';
        }
      });
    }
    this.bind();
    this.applyState(this.state, false);
  }

  // ---------- DOM wiring ----------

  private bind(): void {
    const { els } = this;

    els.dropzone.addEventListener('click', () => els.fileInput.click());
    els.dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        els.fileInput.click();
      }
    });
    els.fileInput.addEventListener('change', () => {
      const file = els.fileInput.files?.[0];
      if (file) void this.loadFile(file);
      els.fileInput.value = '';
    });

    for (const type of ['dragenter', 'dragover'] as const) {
      els.dropzone.addEventListener(type, (e) => {
        e.preventDefault();
        els.dropzone.classList.add('border-accent', 'bg-accent-soft');
      });
    }
    for (const type of ['dragleave', 'drop'] as const) {
      els.dropzone.addEventListener(type, (e) => {
        e.preventDefault();
        els.dropzone.classList.remove('border-accent', 'bg-accent-soft');
      });
    }
    els.dropzone.addEventListener('drop', (e) => {
      const file = e.dataTransfer?.files?.[0];
      if (file) void this.loadFile(file);
    });

    // Also accept paste of audio files
    document.addEventListener('paste', (e) => {
      if (activeEditor !== this) return;
      const file = Array.from(e.clipboardData?.files ?? [])[0];
      if (file) void this.loadFile(file);
    });

    // External loaders (voice recorder, tests) hand over a File via event
    document.addEventListener('editor-load-file', (e) => {
      const file = (e as CustomEvent<File>).detail;
      if (file) void this.loadFile(file);
    });

    els.zoomIn.addEventListener('click', () => this.setZoom(this.pps * 1.5));
    els.zoomOut.addEventListener('click', () => this.setZoom(this.pps / 1.5));
    els.reset.addEventListener('click', () => this.reset());

    // Waveform interactions (mouse + touch)
    els.stageContent.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    els.stageContent.addEventListener('pointermove', (e) => this.onPointerMove(e));
    els.stageContent.addEventListener('pointerup', (e) => this.onPointerUp(e));
    els.stageContent.addEventListener('pointercancel', () => (this.drag = null));

    els.play.addEventListener('click', () => this.togglePlay());

    els.modeKeep?.addEventListener('click', () => this.setMode('keep'));
    els.modeDelete?.addEventListener('click', () => this.setMode('delete'));

    // Drawer controls (absent when showAdjust is false)
    const fadeToggle = (sel: string, labelSel: string, key: 'fadeIn' | 'fadeOut', suffix = 's') => {
      const input = this.els.root.querySelector<HTMLInputElement>(sel);
      const label = this.els.root.querySelector<HTMLElement>(labelSel);
      if (!input || !label) return;
      input.addEventListener('input', () => (label.textContent = `${Number(input.value).toFixed(1)}${suffix}`));
      input.addEventListener('change', () => this.commit({ [key]: Number(input.value) } as Partial<EditState>));
    };
    fadeToggle('[data-fade-in]', '[data-fade-in-label]', 'fadeIn');
    fadeToggle('[data-fade-out]', '[data-fade-out-label]', 'fadeOut');

    const gain = this.els.root.querySelector<HTMLInputElement>('[data-gain]');
    const gainLabel = this.els.root.querySelector<HTMLElement>('[data-gain-label]');
    if (gain && gainLabel) {
      gain.addEventListener('input', () => (gainLabel.textContent = `${gain.value}%`));
      gain.addEventListener('change', () => this.commit({ gain: Number(gain.value) / 100 }));
    }

    const speed = this.els.root.querySelector<HTMLInputElement>('[data-speed]');
    const speedLabel = this.els.root.querySelector<HTMLElement>('[data-speed-label]');
    if (speed && speedLabel) {
      speed.addEventListener('input', () => (speedLabel.textContent = `${Number(speed.value).toFixed(2)}×`));
      speed.addEventListener('change', () => this.commit({ speed: Number(speed.value) }));
    }

    const reverse = this.els.root.querySelector<HTMLInputElement>('[data-reverse]');
    reverse?.addEventListener('change', () => this.commit({ reverse: reverse.checked }));

    const reverbBind = (sel: string, labelSel: string) => {
      const input = this.els.root.querySelector<HTMLInputElement>(sel);
      const label = this.els.root.querySelector<HTMLElement>(labelSel);
      if (!input || !label) return;
      input.addEventListener('input', () => (label.textContent = `${Math.round(Number(input.value) * 100)}%`));
      input.addEventListener('change', () => this.commit({ reverb: Number(input.value) }));
    };
    reverbBind('[data-reverb]', '[data-reverb-label]');

    const drawerNormalize = this.els.root.querySelector<HTMLInputElement>('[data-normalize]');
    drawerNormalize?.addEventListener('change', () => this.toggleNormalize());

    const undoBtn = this.els.root.querySelector<HTMLButtonElement>('[data-undo]');
    undoBtn?.addEventListener('click', () => this.undo());

    // Optional headline controls (kept in sync with the Adjust drawer)
    const quickReverse = this.els.root.querySelector<HTMLButtonElement>('[data-quick-reverse]');
    quickReverse?.addEventListener('click', () => this.commit({ reverse: !this.state.reverse }));

    const quickNormalize = this.els.root.querySelector<HTMLButtonElement>('[data-quick-normalize]');
    quickNormalize?.addEventListener('click', () => this.toggleNormalize());

    reverbBind('[data-quick-reverb]', '[data-quick-reverb-label]');

    const quickSpeed = this.els.root.querySelector<HTMLInputElement>('[data-quick-speed]');
    const quickSpeedLabel = this.els.root.querySelector<HTMLElement>('[data-quick-speed-label]');
    if (quickSpeed && quickSpeedLabel) {
      quickSpeed.addEventListener('input', () => (quickSpeedLabel.textContent = `${Number(quickSpeed.value).toFixed(2)}×`));
      quickSpeed.addEventListener('change', () => this.commit({ speed: Number(quickSpeed.value) }));
    }

    const quickPitch = this.els.root.querySelector<HTMLInputElement>('[data-quick-pitch]');
    const quickPitchLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pitch-label]');
    if (quickPitch && quickPitchLabel) {
      quickPitch.addEventListener('input', () => (quickPitchLabel.textContent = formatSemitones(Number(quickPitch.value))));
      quickPitch.addEventListener('change', () => this.commit({ pitch: Number(quickPitch.value) }));
    }

    const quickBass = this.els.root.querySelector<HTMLInputElement>('[data-quick-bass]');
    const quickBassLabel = this.els.root.querySelector<HTMLElement>('[data-quick-bass-label]');
    if (quickBass && quickBassLabel) {
      quickBass.addEventListener('input', () => (quickBassLabel.textContent = `+${quickBass.value} dB`));
      quickBass.addEventListener('change', () => this.commit({ bass: Number(quickBass.value) }));
    }

    const quickGain = this.els.root.querySelector<HTMLInputElement>('[data-quick-gain]');
    const quickGainLabel = this.els.root.querySelector<HTMLElement>('[data-quick-gain-label]');
    if (quickGain && quickGainLabel) {
      quickGain.addEventListener('input', () => (quickGainLabel.textContent = `${quickGain.value}%`));
      quickGain.addEventListener('change', () => this.commit({ gain: Number(quickGain.value) / 100 }));
    }

    els.preciseStart?.addEventListener('change', () => this.applyPrecise());
    els.preciseEnd?.addEventListener('change', () => this.applyPrecise());

    els.exportBtn.addEventListener('click', () => void this.doExport());

    els.root.addEventListener('pointerdown', () => (activeEditor = this));
    window.addEventListener('themechange', () => this.draw());
    window.addEventListener('resize', () => this.draw());
    document.addEventListener('keydown', (e) => this.onKeydown(e));
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
      const buffer = await ctx.decodeAudioData(data);
      await ctx.close();

      this.buffer = buffer;
      this.pitchPreview = null;
      this.duration = buffer.duration;
      this.fileName = file.name.replace(/\.[^.]+$/, '');
      this.history = [];
      this.state = defaultEditState();

      this.els.fileName.textContent = file.name;
      this.els.fileMeta.textContent = `${formatBytes(file.size)} · ${formatTime(this.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;

      this.els.dropzone.hidden = true;
      this.els.workspace.classList.remove('hidden');

      this.els.play.disabled = false;
      this.els.exportBtn.disabled = false;
      this.els.format.disabled = false;

      this.refit(true);
      this.applyState(this.state, false);
      this.setStatus(this.text.ready);

      if (this.duration > 3600) {
        showToast(this.toastRoot(), 'info', this.text.hourWarning);
      }
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    } finally {
      this.busy = false;
      // Re-evaluate now that busy is false — the update inside loadFile ran
      // while busy was still true and left the export button disabled.
      this.updateExportState();
    }
  }

  private reset(): void {
    this.stopPlayback();
    this.buffer = null;
    this.pitchPreview = null;
    this.peaks = null;
    this.state = defaultEditState();
    this.history = [];
    this.playheadTime = 0;
    this.els.workspace.classList.add('hidden');
    this.els.dropzone.hidden = false;
    this.els.playhead.style.opacity = '0';
    this.setStatus('');
  }

  // ---------- View / waveform ----------

  private refit(recomputeFit: boolean): void {
    if (!this.buffer) return;
    const stageW = this.els.stage.clientWidth || 600;
    if (recomputeFit || !this.zoomed) {
      this.fitPps = stageW / this.duration;
      this.pps = this.fitPps;
      this.zoomed = false;
    }
    this.canvasWidth = Math.min(Math.round(this.duration * this.pps), MAX_CANVAS_WIDTH);
    this.els.stageContent.style.width = `${this.canvasWidth}px`;
    this.peaks = computePeaks(this.buffer, this.canvasWidth);
    this.draw();
    this.updateSelectionOverlay();
  }

  private setZoom(pps: number): void {
    if (!this.buffer) return;
    const maxPps = Math.min(600, MAX_CANVAS_WIDTH / this.duration);
    const next = clamp(pps, this.fitPps, maxPps);
    if (next === this.pps) return;
    this.pps = next;
    this.zoomed = next > this.fitPps * 1.01;
    this.canvasWidth = Math.min(Math.round(this.duration * this.pps), MAX_CANVAS_WIDTH);
    this.els.stageContent.style.width = `${this.canvasWidth}px`;
    if (this.buffer) this.peaks = computePeaks(this.buffer, this.canvasWidth);
    this.draw();
    this.updateSelectionOverlay();
    this.updatePlayhead();
  }

  private draw(): void {
    if (!this.peaks) return;
    const styles = getComputedStyle(document.documentElement);
    const neutral = styles.getPropertyValue('--color-ink3').trim() || '#a1a1aa';
    drawWaveform(this.els.canvas, this.peaks, neutral);
    this.drawSelectionWave();
  }

  /** Repaint the columns inside the selection in the accent color. */
  private drawSelectionWave(): void {
    if (!this.peaks) return;
    const sel = this.state.sel;
    if (!sel) return;
    const accent = getComputedStyle(this.els.selection).borderLeftColor || '#0d9488';
    drawWaveform(
      this.els.canvas,
      this.peaks,
      accent,
      { from: sel.start * this.pps, to: sel.end * this.pps },
    );
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }

  private setStatus(msg: string): void {
    this.els.status.textContent = msg;
  }

  // ---------- Selection & pointer interaction ----------

  private timeAtEvent(e: PointerEvent): number {
    const rect = this.els.stageContent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    return clamp(x / this.pps, 0, this.duration);
  }

  private onPointerDown(e: PointerEvent): void {
    if (!this.buffer || this.busy) return;
    if (this.config.converter) return; // pure conversion: no selection UI
    const target = e.target as HTMLElement;
    const time = this.timeAtEvent(e);
    let kind: 'new' | 'start' | 'end' = 'new';
    if (target === this.els.handleStart) kind = 'start';
    else if (target === this.els.handleEnd) kind = 'end';

    const sel = this.state.sel ? { ...this.state.sel } : { start: time, end: time };
    this.drag = { kind, x0: e.clientX, anchor: time, sel };
    if (kind === 'new') {
      // A fresh drag replaces any existing selection; a click will seek instead
      this.state.sel = null;
      this.updateSelectionOverlay();
    }
    this.els.stageContent.setPointerCapture(e.pointerId);
  }

  private onPointerMove(e: PointerEvent): void {
    if (!this.drag) return;
    const time = this.timeAtEvent(e);
    const d = this.drag;
    if (d.kind === 'new') {
      this.state.sel = {
        start: Math.min(d.anchor, time),
        end: Math.max(d.anchor, time),
      };
    } else if (d.kind === 'start') {
      this.state.sel = { start: Math.min(time, d.sel.end - 0.05), end: d.sel.end };
    } else {
      this.state.sel = { start: d.sel.start, end: Math.max(time, d.sel.start + 0.05) };
    }
    this.updateSelectionOverlay();
    this.updatePreciseInputs();
  }

  private onPointerUp(e: PointerEvent): void {
    const d = this.drag;
    if (!d) return;
    this.drag = null;
    if (d.kind === 'new') {
      const moved = Math.abs(e.clientX - d.x0) > 4;
      const len = this.state.sel ? this.state.sel.end - this.state.sel.start : 0;
      if (!moved || len < 0.05) {
        // Treat as a click: seek the playhead
        this.state.sel = null;
        this.playheadTime = this.timeAtEvent(e);
        this.updatePlayhead();
        this.updateTimecode();
        this.updateSelectionOverlay();
        this.updateExportState();
        return;
      }
    }
    this.commitSelection();
  }

  private commitSelection(): void {
    if (!this.state.sel) return;
    // Enforce a minimum selection length
    if (this.state.sel.end - this.state.sel.start < 0.05) {
      this.state.sel = null;
      this.updateSelectionOverlay();
      this.updateExportState();
      return;
    }
    if (this.config.ringtone && this.state.sel.end - this.state.sel.start > 40) {
      this.state.sel.end = this.state.sel.start + 40;
      showToast(this.toastRoot(), 'info', this.text.ringtoneCap);
    }
    this.updateSelectionOverlay();
    this.updatePreciseInputs();
    this.updateExportState();
    const range = `${formatTime(this.state.sel.start, true)} – ${formatTime(this.state.sel.end, true)}`;
    this.setStatus(fill(this.state.mode === 'keep' ? this.text.kept : this.text.markedDelete, { range }));
  }

  private applyPrecise(): void {
    if (!this.buffer || !this.els.preciseStart || !this.els.preciseEnd) return;
    const s = clamp(Number(this.els.preciseStart.value) || 0, 0, this.duration);
    const e = clamp(Number(this.els.preciseEnd.value) || 0, 0, this.duration);
    if (e - s < 0.05) {
      showToast(this.toastRoot(), 'error', this.text.endTime);
      return;
    }
    this.pushHistory();
    this.state.sel = { start: s, end: e };
    this.updateSelectionOverlay();
    this.updateExportState();
  }

  private updateSelectionOverlay(): void {
    const sel = this.state.sel;
    if (!sel) {
      this.els.selection.classList.add('hidden');
      this.draw();
      return;
    }
    this.els.selection.classList.remove('hidden');
    this.els.selection.style.left = `${sel.start * this.pps}px`;
    this.els.selection.style.width = `${(sel.end - sel.start) * this.pps}px`;
    this.draw();
  }

  private updatePreciseInputs(): void {
    if (this.state.sel && this.els.preciseStart && this.els.preciseEnd) {
      this.els.preciseStart.value = this.state.sel.start.toFixed(2);
      this.els.preciseEnd.value = this.state.sel.end.toFixed(2);
    }
  }

  private updateExportState(): void {
    // Selection is optional — with none, the whole file is rendered
    this.els.exportBtn.disabled = !this.buffer || this.busy;
  }

  // ---------- Edit state ----------

  private setMode(mode: 'keep' | 'delete'): void {
    this.commit({ mode });
  }

  private commit(patch: Partial<EditState>): void {
    this.pushHistory();
    this.applyState({ ...this.state, ...patch }, true);
  }

  private pushHistory(): void {
    this.history.push({ ...this.state, sel: this.state.sel ? { ...this.state.sel } : null });
    if (this.history.length > 30) this.history.shift();
  }

  private undo(): void {
    const prev = this.history.pop();
    if (!prev) {
      showToast(this.toastRoot(), 'info', this.text.nothingUndo);
      return;
    }
    this.applyState(prev, true);
    this.setStatus(this.text.reverted);
  }

  private toggleNormalize(): void {
    const next = !this.state.normalize;
    this.commit({ normalize: next });
    if (next && this.buffer) {
      const g = computeNormalizeGain(this.buffer, this.state);
      const db = g > 0 ? (20 * Math.log10(g)).toFixed(1) : '0';
      showToast(this.toastRoot(), 'info', fill(this.text.normalizeOn, { db }));
    }
  }

  private applyState(state: EditState, syncInputs: boolean): void {
    this.state = state;
    this.updateModeButtons();
    if (syncInputs) {
      const fadeIn = this.els.root.querySelector<HTMLInputElement>('[data-fade-in]');
      const fadeOut = this.els.root.querySelector<HTMLInputElement>('[data-fade-out]');
      const gain = this.els.root.querySelector<HTMLInputElement>('[data-gain]');
      const speed = this.els.root.querySelector<HTMLInputElement>('[data-speed]');
      const reverse = this.els.root.querySelector<HTMLInputElement>('[data-reverse]');
      const reverb = this.els.root.querySelector<HTMLInputElement>('[data-reverb]');
      const normalize = this.els.root.querySelector<HTMLInputElement>('[data-normalize]');
      if (fadeIn) fadeIn.value = String(state.fadeIn);
      if (fadeOut) fadeOut.value = String(state.fadeOut);
      if (gain) gain.value = String(Math.round(state.gain * 100));
      if (speed) speed.value = String(state.speed);
      if (reverse) reverse.checked = state.reverse;
      if (reverb) reverb.value = String(state.reverb);
      if (normalize) normalize.checked = state.normalize;
      const fadeInLabel = this.els.root.querySelector<HTMLElement>('[data-fade-in-label]');
      const fadeOutLabel = this.els.root.querySelector<HTMLElement>('[data-fade-out-label]');
      const gainLabel = this.els.root.querySelector<HTMLElement>('[data-gain-label]');
      const speedLabel = this.els.root.querySelector<HTMLElement>('[data-speed-label]');
      const reverbLabel = this.els.root.querySelector<HTMLElement>('[data-reverb-label]');
      if (fadeInLabel) fadeInLabel.textContent = `${state.fadeIn.toFixed(1)}s`;
      if (fadeOutLabel) fadeOutLabel.textContent = `${state.fadeOut.toFixed(1)}s`;
      if (gainLabel) gainLabel.textContent = `${Math.round(state.gain * 100)}%`;
      if (speedLabel) speedLabel.textContent = `${state.speed.toFixed(2)}×`;
      if (reverbLabel) reverbLabel.textContent = `${Math.round(state.reverb * 100)}%`;

      // Mirror onto the headline quick controls when present
      const quickReverse = this.els.root.querySelector<HTMLButtonElement>('[data-quick-reverse]');
      if (quickReverse) {
        quickReverse.setAttribute('aria-pressed', String(state.reverse));
        quickReverse.classList.toggle('border-accent', state.reverse);
        quickReverse.classList.toggle('bg-accent-soft', state.reverse);
        quickReverse.classList.toggle('text-accent', state.reverse);
      }
      const quickNormalize = this.els.root.querySelector<HTMLButtonElement>('[data-quick-normalize]');
      if (quickNormalize) {
        quickNormalize.setAttribute('aria-pressed', String(state.normalize));
        quickNormalize.classList.toggle('border-accent', state.normalize);
        quickNormalize.classList.toggle('bg-accent-soft', state.normalize);
        quickNormalize.classList.toggle('text-accent', state.normalize);
      }
      const quickReverb = this.els.root.querySelector<HTMLInputElement>('[data-quick-reverb]');
      const quickReverbLabel = this.els.root.querySelector<HTMLElement>('[data-quick-reverb-label]');
      if (quickReverb) quickReverb.value = String(state.reverb);
      if (quickReverbLabel) quickReverbLabel.textContent = `${Math.round(state.reverb * 100)}%`;
      const quickSpeed = this.els.root.querySelector<HTMLInputElement>('[data-quick-speed]');
      const quickSpeedLabel = this.els.root.querySelector<HTMLElement>('[data-quick-speed-label]');
      if (quickSpeed) quickSpeed.value = String(state.speed);
      if (quickSpeedLabel) quickSpeedLabel.textContent = `${state.speed.toFixed(2)}×`;
      const quickPitch = this.els.root.querySelector<HTMLInputElement>('[data-quick-pitch]');
      const quickPitchLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pitch-label]');
      if (quickPitch) quickPitch.value = String(state.pitch);
      if (quickPitchLabel) quickPitchLabel.textContent = formatSemitones(state.pitch);
      const quickBass = this.els.root.querySelector<HTMLInputElement>('[data-quick-bass]');
      const quickBassLabel = this.els.root.querySelector<HTMLElement>('[data-quick-bass-label]');
      if (quickBass) quickBass.value = String(state.bass);
      if (quickBassLabel) quickBassLabel.textContent = `+${state.bass} dB`;
      const quickGain = this.els.root.querySelector<HTMLInputElement>('[data-quick-gain]');
      const quickGainLabel = this.els.root.querySelector<HTMLElement>('[data-quick-gain-label]');
      if (quickGain) quickGain.value = String(Math.round(state.gain * 100));
      if (quickGainLabel) quickGainLabel.textContent = `${Math.round(state.gain * 100)}%`;
    }
    this.updateSelectionOverlay();
    this.updatePreciseInputs();
    this.updateExportState();
  }

  private updateModeButtons(): void {
    if (!this.els.modeKeep || !this.els.modeDelete) return;
    const active = 'bg-accent text-white';
    const idle = 'text-ink2 hover:text-ink';
    const keepActive = this.state.mode === 'keep';
    this.els.modeKeep.className = `rounded-md px-3 py-1.5 text-sm font-medium ${keepActive ? active : idle}`;
    this.els.modeDelete.className = `rounded-md px-3 py-1.5 text-sm font-medium ${keepActive ? idle : active}`;
  }

  // ---------- Playback ----------

  private pitchPreviewKeyOf(): string {
    const sel = this.state.sel;
    return [
      this.state.pitch,
      this.state.bass,
      this.state.speed,
      this.state.gain,
      this.state.reverse ? 1 : 0,
      this.state.reverb,
      this.state.fadeIn,
      this.state.fadeOut,
      this.state.normalize ? 1 : 0,
      this.state.mode,
      sel ? `${sel.start.toFixed(3)}-${sel.end.toFixed(3)}` : '',
      this.buffer?.length ?? 0,
    ].join('|');
  }

  private async togglePlay(): Promise<void> {
    if (this.playing) {
      this.stopPlayback();
      return;
    }
    if (!this.buffer) return;
    if (!this.audioCtx) this.audioCtx = new AudioContext();
    await this.audioCtx.resume();

    let from = this.playheadTime;
    let to = this.duration;
    if (this.state.sel) {
      from = this.state.sel.start;
      to = this.state.sel.end;
    } else if (from >= this.duration - 0.01) {
      from = 0;
    }

    let playBuffer: AudioBuffer = this.buffer;
    let rate = this.state.speed;
    let headFrom = from;
    if (this.state.pitch !== 0 || this.state.bass > 0) {
      const key = this.pitchPreviewKeyOf();
      if (!this.pitchPreview || this.pitchPreviewKey !== key) {
        this.busy = true;
        this.updateExportState();
        this.setStatus(this.text.renderingStatus);
        try {
          const rendered = await renderEdit(this.buffer, this.state);
          if (this.pitchPreviewKeyOf() !== key) return;
          this.pitchPreview = rendered;
          this.pitchPreviewKey = key;
        } catch {
          this.setStatus(this.text.exportFail);
          return;
        } finally {
          this.busy = false;
          this.updateExportState();
        }
        this.setStatus(this.text.ready);
      }
      playBuffer = this.pitchPreview;
      rate = 1;
      const keepSel = this.state.mode === 'keep' && this.state.sel;
      headFrom = keepSel ? this.state.sel!.start : 0;
      from = 0;
      to = playBuffer.duration;
    }

    const src = this.audioCtx.createBufferSource();
    src.buffer = playBuffer;
    src.connect(this.audioCtx.destination);
    src.playbackRate.value = rate;
    const endAt = headFrom + (to - from) * rate;
    src.onended = () => {
      if (this.playSource === src) this.stopPlayback(endAt);
    };
    // offset/duration are buffer-time units — playbackRate must not scale them
    src.start(0, from, Math.max(0.001, to - from));
    this.playSource = src;
    this.playing = true;
    this.playRate = rate;
    this.playOffset = headFrom;
    this.playEnd = endAt;
    this.playStartedAt = this.audioCtx.currentTime;

    this.els.play.setAttribute('aria-label', this.text.pause);
    this.els.play.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 5v14M16 5v14"/></svg>';

    const tick = () => {
      if (!this.playing || !this.audioCtx) return;
      this.playheadTime = this.playOffset + (this.audioCtx.currentTime - this.playStartedAt) * this.playRate;
      this.playheadTime = Math.min(this.playheadTime, this.playEnd);
      this.updatePlayhead();
      this.updateTimecode();
      this.raf = requestAnimationFrame(tick);
    };
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(tick);
  }

  private stopPlayback(playheadTo?: number): void {
    this.playing = false;
    cancelAnimationFrame(this.raf);
    try {
      this.playSource?.stop();
    } catch {
      /* already stopped */
    }
    this.playSource = null;
    if (playheadTo !== undefined) this.playheadTime = playheadTo;
    this.updatePlayhead();
    this.updateTimecode();
    this.els.play.setAttribute('aria-label', this.text.play);
    this.els.play.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M8 5.5v13l10-6.5-10-6.5Z"/></svg>';
  }

  private updatePlayhead(): void {
    this.els.playhead.style.transform = `translateX(${this.playheadTime * this.pps}px)`;
    this.els.playhead.style.opacity = this.playheadTime > 0 || this.playing ? '1' : '0';
  }

  private updateTimecode(): void {
    this.els.timecode.textContent = `${formatTime(this.playheadTime, true)} / ${formatTime(this.duration, true)}`;
  }

  // ---------- Export ----------

  private async doExport(): Promise<void> {
    if (!this.buffer || this.busy) return;
    this.busy = true;
    this.updateExportState();
    const original = this.els.exportBtn.innerHTML;
    this.els.exportBtn.textContent = this.text.rendering;
    this.setStatus(this.text.renderingStatus);

    try {
      const out = await renderEdit(this.buffer, this.state);
      const fmt = getFormat(this.els.format.value);
      this.setStatus(fill(this.text.encoding, { ext: fmt.ext.toUpperCase() }));
      const blob = await encodeFor(fmt, out);

      const suffix = this.config.converter ? 'converted' : this.config.ringtone ? 'ringtone' : 'edited';
      const filename = `${this.fileName}-${suffix}.${fmt.ext}`;
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
    } catch (err) {
      console.error(err);
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.exportFail);
    } finally {
      this.els.exportBtn.innerHTML = original;
      this.busy = false;
      this.updateExportState();
    }
  }

  // ---------- Keyboard ----------

  private onKeydown(e: KeyboardEvent): void {
    if (activeEditor !== this || !this.buffer) return;
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      void this.togglePlay();
    } else if (e.key === 'Escape') {
      this.commit({ sel: null });
      this.updateSelectionOverlay();
      this.updateExportState();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.playheadTime = clamp(this.playheadTime - (e.shiftKey ? 1 : 0.1), 0, this.duration);
      this.updatePlayhead();
      this.updateTimecode();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.playheadTime = clamp(this.playheadTime + (e.shiftKey ? 1 : 0.1), 0, this.duration);
      this.updatePlayhead();
      this.updateTimecode();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      this.undo();
    }
  }
}

function formatSemitones(n: number): string {
  const v = Math.round(n);
  if (v > 0) return `+${v} st`;
  if (v < 0) return `−${Math.abs(v)} st`;
  return '0 st';
}

export function initEditors(): void {
  document.querySelectorAll<HTMLElement>('[data-audio-editor]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    const config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    new Editor(root, config);
  });
}
