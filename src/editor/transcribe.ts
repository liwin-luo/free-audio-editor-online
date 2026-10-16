/**
 * Controller for the audio-to-text island (TranscribeEditor.astro):
 * decode → mono 16 kHz resample → Whisper worker → editable transcript,
 * exportable as TXT or SRT. All inference runs in a dedicated worker so the
 * model download and decode never block the page.
 */
import { formatBytes, formatTime } from '../lib/format';
import { readEditorText, showToast } from './messages';
import { TRANSCRIBE_LANGUAGES, languageName } from './transcribe-langs';
import { chunksToSrt, type TranscriptChunk } from './srt';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';
import type { EditorConfig } from '../data/tools';

/** Beyond this, trim first — model memory and wait time get unreasonable. */
const MAX_DURATION_S = 600;
const MAX_SIZE = 300 * 1024 * 1024;
const TARGET_RATE = 16000;

type TranscribeModel = 'base' | 'tiny';

interface WorkerResponse {
  type: 'device' | 'model-progress' | 'run-progress' | 'result' | 'error';
  device?: 'webgpu' | 'wasm';
  percent?: number;
  text?: string;
  chunks?: TranscriptChunk[];
  message?: string;
}

interface Elements {
  root: HTMLElement;
  dropzone: HTMLElement;
  fileInput: HTMLInputElement;
  workspace: HTMLElement;
  fileName: HTMLElement;
  fileMeta: HTMLElement;
  language: HTMLSelectElement;
  model: HTMLSelectElement;
  progressRow: HTMLElement;
  progressBar: HTMLElement;
  transcript: HTMLTextAreaElement;
  copyBtn: HTMLButtonElement;
  txtBtn: HTMLButtonElement;
  srtBtn: HTMLButtonElement;
  runBtn: HTMLButtonElement;
  resetBtn: HTMLButtonElement;
  status: HTMLElement;
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Transcribe markup missing: ${selector}`);
  return el;
}

/** Resample to mono 16 kHz Float32 — the exact input the pipeline expects. */
async function toMono16k(buffer: AudioBuffer): Promise<Float32Array> {
  const frames = Math.max(1, Math.ceil(buffer.duration * TARGET_RATE));
  const offline = new OfflineAudioContext(1, frames, TARGET_RATE);
  const src = offline.createBufferSource();
  src.buffer = buffer;
  src.connect(offline.destination);
  src.start();
  const rendered = await offline.startRendering();
  return rendered.getChannelData(0).slice();
}

class Transcriber {
  private els: Elements;
  private config: EditorConfig;
  private text: EditorText;

  private buffer: AudioBuffer | null = null;
  private fileName = 'transcript';
  private chunks: TranscriptChunk[] = [];
  private worker: Worker | null = null;
  private busy = false;
  private phase: 'model' | 'run' = 'model';

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
      language: requireEl<HTMLSelectElement>(root, '[data-language]'),
      model: requireEl<HTMLSelectElement>(root, '[data-model]'),
      progressRow: requireEl(root, '[data-progress-row]'),
      progressBar: requireEl(root, '[data-progress-bar]'),
      transcript: requireEl<HTMLTextAreaElement>(root, '[data-transcript]'),
      copyBtn: requireEl<HTMLButtonElement>(root, '[data-copy]'),
      txtBtn: requireEl<HTMLButtonElement>(root, '[data-download-txt]'),
      srtBtn: requireEl<HTMLButtonElement>(root, '[data-download-srt]'),
      runBtn: requireEl<HTMLButtonElement>(root, '[data-transcribe-btn]'),
      resetBtn: requireEl<HTMLButtonElement>(root, '[data-reset]'),
      status: requireEl(root, '[data-status]'),
    };

    // WebGPU browsers (Chrome, Edge) handle the more accurate Base model;
    // CPU-only environments start on Tiny.
    if (!('gpu' in navigator)) this.els.model.value = 'tiny';

    this.fillLanguages();
    this.bind();
  }

  private fillLanguages(): void {
    // The SSR markup ships only the auto option; localized names come from
    // Intl.DisplayNames so every UI locale is covered without hand translation.
    const uiLang = document.documentElement.lang || 'en';
    for (const code of TRANSCRIBE_LANGUAGES) {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = languageName(code, uiLang);
      this.els.language.appendChild(option);
    }
  }

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

    document.addEventListener('paste', (e) => {
      // Never hijack pastes aimed at form fields (e.g. the transcript itself).
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable]')) return;
      const file = Array.from(e.clipboardData?.files ?? [])[0];
      if (file) void this.loadFile(file);
    });

    els.runBtn.addEventListener('click', () => void this.run());
    els.resetBtn.addEventListener('click', () => this.reset());
    els.copyBtn.addEventListener('click', () => void this.copy());
    els.txtBtn.addEventListener('click', () => this.download('txt'));
    els.srtBtn.addEventListener('click', () => this.download('srt'));
  }

  private async loadFile(file: File): Promise<void> {
    if (this.busy) return;
    if (file.size > MAX_SIZE) {
      showToast(this.toastRoot(), 'error', this.text.tooBig);
      return;
    }
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

      if (buffer.duration > MAX_DURATION_S) {
        this.setStatus('');
        showToast(this.toastRoot(), 'error', this.text.trTooLong);
        return;
      }

      this.buffer = buffer;
      this.chunks = [];
      this.fileName = file.name.replace(/\.[^.]+$/, '') || 'transcript';
      this.els.transcript.value = '';
      this.els.fileName.textContent = file.name;
      this.els.fileMeta.textContent = `${formatBytes(file.size)} · ${formatTime(buffer.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;

      this.els.dropzone.hidden = true;
      this.els.workspace.classList.remove('hidden');
      this.setExportState(false);
      this.setStatus(this.text.ready);
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    }
  }

  private reset(): void {
    this.worker?.terminate();
    this.worker = null;
    this.buffer = null;
    this.chunks = [];
    this.els.transcript.value = '';
    this.els.workspace.classList.add('hidden');
    this.els.dropzone.hidden = false;
    this.els.progressRow.classList.add('hidden');
    this.els.progressBar.style.width = '0%';
    this.setStatus('');
  }

  private async run(): Promise<void> {
    if (!this.buffer || this.busy) return;
    this.busy = true;
    this.phase = 'model';
    this.els.runBtn.disabled = true;
    this.els.progressRow.classList.remove('hidden');
    this.setProgress(0);
    this.setStatus(this.text.trPreparing);

    if (!this.worker) {
      this.worker = new Worker(new URL('./transcribe-worker.ts', import.meta.url), { type: 'module' });
      this.worker.addEventListener('message', (e: MessageEvent<WorkerResponse>) => this.onMessage(e.data));
    }
    let pcm: Float32Array;
    try {
      pcm = await toMono16k(this.buffer);
    } catch (err) {
      console.error('transcribe prep:', err);
      this.busy = false;
      this.els.runBtn.disabled = false;
      this.els.progressRow.classList.add('hidden');
      showToast(this.toastRoot(), 'error', this.text.trFail);
      return;
    }
    // postMessage clones the PCM, so re-runs keep the original.
    this.worker.postMessage({
      type: 'transcribe',
      audio: pcm,
      model: (this.els.model.value as TranscribeModel) ?? 'base',
      language: this.els.language.value || null,
    });
  }

  private onMessage(msg: WorkerResponse): void {
    switch (msg.type) {
      case 'model-progress':
        this.phase = 'model';
        this.setProgress(msg.percent ?? 0);
        this.setStatus(fill(this.text.trDownloading, { percent: String(msg.percent ?? 0) }));
        break;
      case 'run-progress':
        if (this.phase !== 'run') {
          this.phase = 'run';
          this.setProgress(0);
        }
        this.setProgress(msg.percent ?? 0);
        this.setStatus(fill(this.text.trWorking, { percent: String(msg.percent ?? 0) }));
        break;
      case 'result': {
        const text = (msg.text ?? '').trim();
        this.chunks = msg.chunks ?? [];
        this.els.transcript.value = text;
        this.setExportState(text.length > 0);
        this.setProgress(100);
        this.setStatus(fill(this.text.trDone, { count: String(text.length) }));
        this.busy = false;
        this.els.runBtn.disabled = false;
        this.els.progressRow.classList.add('hidden');
        break;
      }
      case 'error':
        console.error('transcribe worker:', msg.message);
        showToast(this.toastRoot(), 'error', this.text.trFail);
        this.els.progressRow.classList.add('hidden');
        this.els.progressBar.style.width = '0%';
        this.busy = false;
        this.els.runBtn.disabled = false;
        this.setStatus('');
        break;
    }
  }

  private async copy(): Promise<void> {
    const text = this.els.transcript.value;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      showToast(this.toastRoot(), 'success', this.text.trCopied);
    } catch {
      this.els.transcript.select();
      document.execCommand('copy');
      showToast(this.toastRoot(), 'success', this.text.trCopied);
    }
  }

  private download(kind: 'txt' | 'srt'): void {
    const content =
      kind === 'txt' ? this.els.transcript.value : chunksToSrt(this.chunks);
    if (!content) return;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.fileName}.${kind}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  /** Result buttons unlock once a transcript exists; the run button follows busy. */
  private setExportState(hasResult: boolean): void {
    this.els.copyBtn.disabled = !hasResult;
    this.els.txtBtn.disabled = !hasResult;
    this.els.srtBtn.disabled = !hasResult;
    this.els.transcript.disabled = !hasResult;
    this.els.runBtn.disabled = !this.buffer || this.busy;
  }

  private setProgress(percent: number): void {
    this.els.progressBar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }

  private setStatus(msg: string): void {
    this.els.status.textContent = msg;
  }
}

export function initTranscribers(): void {
  document.querySelectorAll<HTMLElement>('[data-transcribe]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    const config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    new Transcriber(root, config);
  });
}
