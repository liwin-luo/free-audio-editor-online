/**
 * Progressive enhancement for the live visualizer island (MusicVisualizerEditor.astro).
 * Plays the decoded file through an AnalyserNode, draws animated frames, and
 * records canvas + audio into a video with MediaRecorder. Recording is realtime:
 * the export lasts exactly as long as the song. Where the browser cannot record
 * a canvas (iOS Safari), playback still works and the export button stands down.
 */
import { readEditorText, showToast } from './messages';
import { bindFileOpen, setEmptyHidden } from './delivery';
import { clamp, formatBytes, formatTime } from '../lib/format';
import { fill } from '../i18n/inline';
import {
  LIVE_BAR_COUNT,
  LIVE_THEMES,
  barHeights,
  canRecordVideo,
  clampVideoSide,
  drawLiveFrame,
  logBinEdges,
  pickVideoMime,
  type LiveStyle,
} from './music-visualizer';
import type { EditorText } from '../i18n/types';
import type { EditorConfig } from '../data/tools';

const MAX_FILE_BYTES = 300 * 1024 * 1024;
const FFT_SIZE = 2048;

interface Elements {
  root: HTMLElement;
  dropzone: HTMLElement;
  fileInput: HTMLInputElement;
  workspace: HTMLElement;
  fileName: HTMLElement;
  fileMeta: HTMLElement;
  canvas: HTMLCanvasElement;
  play: HTMLButtonElement;
  time: HTMLElement;
  style: HTMLSelectElement;
  theme: HTMLSelectElement;
  primary: HTMLInputElement;
  bgColor: HTMLInputElement;
  size: HTMLSelectElement;
  customRow: HTMLElement | null;
  customW: HTMLInputElement | null;
  customH: HTMLInputElement | null;
  note: HTMLElement | null;
  exportBtn: HTMLButtonElement;
  cancelBtn: HTMLButtonElement | null;
  status: HTMLElement;
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Music visualizer markup missing: ${selector}`);
  return el;
}

class MusicVisualizerApp {
  private els: Elements;
  private text: EditorText;

  private buffer: AudioBuffer | null = null;
  private baseName = 'music-visualizer';
  private busy = false;

  /** One long-lived context; created on the first play or export. */
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private freq = new Uint8Array(FFT_SIZE / 2);
  private wave = new Uint8Array(FFT_SIZE);
  private edges = logBinEdges(LIVE_BAR_COUNT, FFT_SIZE, 44100, 30, 16000);

  private source: AudioBufferSourceNode | null = null;
  private playing = false;
  private playStartedAt = 0;
  private playOffset = 0;
  private raf = 0;

  private recorder: MediaRecorder | null = null;
  private recorderStream: MediaStream | null = null;
  private destNode: MediaStreamAudioDestinationNode | null = null;
  private chunks: BlobPart[] = [];
  private recording = false;
  private cancelled = false;

  constructor(root: HTMLElement, _config: EditorConfig) {
    this.text = readEditorText(root);
    this.els = {
      root,
      dropzone: requireEl(root, '[data-dropzone]'),
      fileInput: requireEl<HTMLInputElement>(root, '[data-file-input]'),
      workspace: requireEl(root, '[data-workspace]'),
      fileName: requireEl(root, '[data-file-name]'),
      fileMeta: requireEl(root, '[data-file-meta]'),
      canvas: requireEl<HTMLCanvasElement>(root, '[data-canvas]'),
      play: requireEl<HTMLButtonElement>(root, '[data-play]'),
      time: requireEl(root, '[data-time]'),
      style: requireEl<HTMLSelectElement>(root, '[data-mv-style]'),
      theme: requireEl<HTMLSelectElement>(root, '[data-mv-theme]'),
      primary: requireEl<HTMLInputElement>(root, '[data-mv-primary]'),
      bgColor: requireEl<HTMLInputElement>(root, '[data-mv-bg]'),
      size: requireEl<HTMLSelectElement>(root, '[data-mv-size]'),
      customRow: root.querySelector<HTMLElement>('[data-mv-custom-row]'),
      customW: root.querySelector<HTMLInputElement>('[data-mv-w]'),
      customH: root.querySelector<HTMLInputElement>('[data-mv-h]'),
      note: root.querySelector<HTMLElement>('[data-mv-note]'),
      exportBtn: requireEl<HTMLButtonElement>(root, '[data-export]'),
      cancelBtn: root.querySelector<HTMLButtonElement>('[data-cancel]'),
      status: requireEl(root, '[data-status]'),
    };
    this.bind();
    this.syncSizeUI();
    this.els.play.textContent = this.text.mvPlay;
    if (!canRecordVideo()) {
      this.els.exportBtn.disabled = true;
      if (this.els.note) {
        this.els.note.textContent = this.text.mvNoRecord;
        this.els.note.classList.remove('hidden');
      }
    }
    this.drawIdle();
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

    els.play.addEventListener('click', () => void this.togglePlay());
    els.theme.addEventListener('change', () => this.applyTheme());
    for (const el of [els.style, els.primary, els.bgColor]) {
      el.addEventListener('change', () => {
        if (el !== els.style) els.theme.value = '';
        if (!this.playing && !this.recording) this.drawFrame();
      });
    }
    els.size.addEventListener('change', () => {
      this.syncSizeUI();
      this.resizeCanvas();
    });
    for (const el of [els.customW, els.customH]) {
      el?.addEventListener('change', () => this.resizeCanvas());
    }
    els.exportBtn.addEventListener('click', () => void this.startExport());
    els.cancelBtn?.addEventListener('click', () => this.cancelExport());
    els.root.querySelector('[data-reset]')?.addEventListener('click', () => this.reset());
  }

  private toastRoot(): HTMLElement | null {
    return this.els.root.querySelector('[data-toast-root]');
  }

  private setStatus(message: string): void {
    this.els.status.textContent = message;
  }

  // ---------- File loading ----------

  private async loadFile(file: File): Promise<void> {
    if (this.busy) return;
    if (file.size > MAX_FILE_BYTES) {
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
      this.baseName = file.name.replace(/\.[^.]+$/, '') || 'music-visualizer';
      this.edges = logBinEdges(LIVE_BAR_COUNT, FFT_SIZE, buffer.sampleRate, 30, 16000);

      this.els.fileName.textContent = file.name;
      this.els.fileMeta.textContent = `${formatBytes(file.size)} · ${formatTime(buffer.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;

      setEmptyHidden(this.els.dropzone, true);
      this.els.workspace.classList.remove('hidden');
      this.els.play.disabled = false;
      if (canRecordVideo()) this.els.exportBtn.disabled = false;
      this.resizeCanvas();
      this.setStatus('');
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    } finally {
      this.busy = false;
    }
  }

  private reset(): void {
    this.stopPlayback();
    if (this.recording) this.cancelExport();
    this.buffer = null;
    this.els.workspace.classList.add('hidden');
    setEmptyHidden(this.els.dropzone, false);
    this.els.play.disabled = true;
    this.els.exportBtn.disabled = !canRecordVideo();
    this.setStatus('');
  }

  // ---------- Options ----------

  private syncSizeUI(): void {
    const custom = this.els.size.value === 'custom';
    this.els.customRow?.classList.toggle('hidden', !custom);
    this.els.customRow?.classList.toggle('flex', custom);
  }

  private videoSize(): { w: number; h: number } {
    if (this.els.size.value !== 'custom') {
      const opt = this.els.size.selectedOptions[0];
      return { w: Number(opt?.dataset.w ?? 1920), h: Number(opt?.dataset.h ?? 1080) };
    }
    return {
      w: clampVideoSide(Number(this.els.customW?.value) || 1920),
      h: clampVideoSide(Number(this.els.customH?.value) || 1080),
    };
  }

  private resizeCanvas(): void {
    const { w, h } = this.videoSize();
    this.els.canvas.width = clampVideoSide(w);
    this.els.canvas.height = clampVideoSide(h);
    this.els.canvas.style.aspectRatio = `${this.els.canvas.width} / ${this.els.canvas.height}`;
    this.drawIdle();
  }

  private applyTheme(): void {
    const theme = LIVE_THEMES.find((item) => item.id === this.els.theme.value);
    if (!theme) return;
    this.els.primary.value = theme.primary;
    this.els.bgColor.value = theme.background;
    if (!this.playing && !this.recording) this.drawFrame();
  }

  // ---------- Playback ----------

  private ensureContext(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = FFT_SIZE;
      this.analyser.smoothingTimeConstant = 0.82;
      this.analyser.connect(this.ctx.destination);
    }
    return this.ctx;
  }

  private position(): number {
    if (!this.playing || !this.ctx) return this.playOffset;
    const dur = this.buffer?.duration ?? 0;
    return clamp(this.playOffset + (this.ctx.currentTime - this.playStartedAt), 0, dur);
  }

  private async togglePlay(): Promise<void> {
    if (this.recording) return;
    if (this.playing) {
      this.playOffset = this.position();
      this.stopPlayback();
      return;
    }
    await this.playFrom(this.playOffset >= (this.buffer?.duration ?? 0) - 0.05 ? 0 : this.playOffset);
  }

  private async playFrom(start: number): Promise<void> {
    if (!this.buffer) return;
    this.stopPlayback();
    const ctx = this.ensureContext();
    await ctx.resume();
    const source = ctx.createBufferSource();
    source.buffer = this.buffer;
    source.connect(this.analyser!);
    source.onended = () => {
      if (!this.playing) return;
      this.playing = false;
      this.playOffset = this.buffer?.duration ?? 0;
      this.syncPlayLabel();
      if (this.recording) this.stopRecording();
    };
    source.start(0, start);
    this.source = source;
    this.playing = true;
    this.playStartedAt = ctx.currentTime;
    this.playOffset = start;
    this.syncPlayLabel();
    this.tick();
  }

  private stopPlayback(): void {
    this.playing = false;
    cancelAnimationFrame(this.raf);
    try {
      this.source?.stop();
    } catch {
      // already stopped
    }
    this.source?.disconnect();
    this.source = null;
    this.syncPlayLabel();
  }

  private syncPlayLabel(): void {
    this.els.play.textContent = this.playing ? this.text.mvPause : this.text.mvPlay;
  }

  private tick = (): void => {
    if (!this.playing) return;
    this.drawFrame();
    const dur = this.buffer?.duration ?? 0;
    this.els.time.textContent = `${formatTime(this.position())} / ${formatTime(dur)}`;
    this.raf = requestAnimationFrame(this.tick);
  };

  /** Flat preview: the ready state before the first play. */
  private drawIdle(): void {
    this.wave.fill(128);
    this.freq.fill(0);
    this.drawFrame();
    const dur = this.buffer?.duration ?? 0;
    this.els.time.textContent = `0:00 / ${formatTime(dur)}`;
  }

  private drawFrame(): void {
    const ctx2d = this.els.canvas.getContext('2d');
    if (!ctx2d) return;
    this.analyser?.getByteFrequencyData(this.freq);
    this.analyser?.getByteTimeDomainData(this.wave);
    drawLiveFrame(ctx2d, {
      style: this.els.style.value as LiveStyle,
      primary: this.els.primary.value,
      background: this.els.bgColor.value,
      heights: barHeights(this.freq, this.edges),
      waveform: this.wave,
    });
  }

  // ---------- Recording ----------

  private async startExport(): Promise<void> {
    if (this.recording || !this.buffer || !canRecordVideo()) return;
    const mime = pickVideoMime();
    if (!mime) return;
    if (this.playing) this.stopPlayback();

    const ctx = this.ensureContext();
    await ctx.resume();
    const canvasStream = this.els.canvas.captureStream(30);
    this.destNode = ctx.createMediaStreamDestination();
    this.analyser!.connect(this.destNode);
    this.recorderStream = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...this.destNode.stream.getAudioTracks(),
    ]);

    this.chunks = [];
    this.cancelled = false;
    this.recorder = new MediaRecorder(this.recorderStream, {
      mimeType: mime.mime,
      videoBitsPerSecond: 8_000_000,
      audioBitsPerSecond: 192_000,
    });
    this.recorder.ondataavailable = (e) => {
      if (e.data.size > 0) this.chunks.push(e.data);
    };
    this.recorder.onstop = () => this.finishExport(canvasStream, mime);
    this.recorder.start(1000);
    this.recording = true;

    this.setControlsEnabled(false);
    this.els.exportBtn.disabled = true;
    if (this.els.cancelBtn) this.els.cancelBtn.classList.remove('hidden');
    this.setStatus(fill(this.text.mvRecording, { t: formatTime(0), total: formatTime(this.buffer.duration) }));
    await this.playFrom(0);
  }

  private stopRecording(): void {
    try {
      this.recorder?.stop();
    } catch {
      // already stopped
    }
  }

  private cancelExport(): void {
    if (!this.recording) return;
    this.cancelled = true;
    this.stopPlayback();
    this.stopRecording();
  }

  private finishExport(canvasStream: MediaStream, mime: { mime: string; ext: string }): void {
    this.recording = false;
    canvasStream.getTracks().forEach((t) => t.stop());
    this.recorderStream?.getTracks().forEach((t) => t.stop());
    if (this.destNode) this.analyser?.disconnect(this.destNode);
    this.destNode = null;
    this.recorderStream = null;
    const type = this.recorder?.mimeType || mime.mime;
    this.recorder = null;
    if (this.els.cancelBtn) this.els.cancelBtn.classList.add('hidden');
    this.els.exportBtn.disabled = false;
    this.setControlsEnabled(true);

    if (this.cancelled) {
      this.chunks = [];
      this.setStatus('');
      showToast(this.toastRoot(), 'info', this.text.mvCancelled);
      return;
    }
    const blob = new Blob(this.chunks, { type });
    this.chunks = [];
    if (blob.size === 0) {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.mvFail);
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.baseName}-visualizer.${mime.ext}`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    this.setStatus('');
    showToast(this.toastRoot(), 'success', this.text.mvSaved);
  }

  private setControlsEnabled(enabled: boolean): void {
    for (const el of [this.els.style, this.els.theme, this.els.primary, this.els.bgColor, this.els.size, this.els.customW, this.els.customH]) {
      if (el) el.disabled = !enabled;
    }
    this.els.play.disabled = !enabled || !this.buffer;
  }
}

export function initMusicVisualizers(): void {
  document.querySelectorAll<HTMLElement>('[data-music-visualizer]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    const config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    new MusicVisualizerApp(root, config);
  });
}
