/**
 * Controller for the audio-to-text island (TranscribeEditor.astro):
 * decode → mono 16 kHz resample → Whisper worker → editable transcript,
 * exportable as TXT or SRT. All inference runs in a dedicated worker so the
 * model download and decode never block the page.
 */
import { formatBytes, formatTime } from '../lib/format';
import { readEditorText, showToast } from './messages';
import { bindDeliveryChips, bindFileOpen, setEmptyHidden } from './delivery';
import { TRANSCRIBE_LANGUAGES, languageName } from './transcribe-langs';
import { chunksToSrt, type TranscriptChunk } from './srt';
import { fileStem, uniqueFileNames } from './batch';
import { storeZip } from './split';
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
  batchList: HTMLElement;
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
  private queue: File[] = [];
  private fileName = 'transcript';
  private chunks: TranscriptChunk[] = [];
  private worker: Worker | null = null;
  private busy = false;
  private phase: 'model' | 'run' = 'model';
  private job: {
    resolve: (result: { text: string; chunks: TranscriptChunk[] }) => void;
    reject: (err: Error) => void;
  } | null = null;

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
      batchList: requireEl(root, '[data-batch-list]'),
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

    bindDeliveryChips(els.root);
    bindFileOpen(els.dropzone, () => els.fileInput.click());
    els.fileInput.addEventListener('change', () => {
      this.takeFiles(Array.from(els.fileInput.files ?? []));
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
      this.takeFiles(Array.from(e.dataTransfer?.files ?? []));
    });

    document.addEventListener('paste', (e) => {
      // Never hijack pastes aimed at form fields (e.g. the transcript itself).
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable]')) return;
      const files = Array.from(e.clipboardData?.files ?? []);
      if (files.length) this.takeFiles(this.config.batch ? files : files.slice(0, 1));
    });

    els.runBtn.addEventListener('click', () => void this.run());
    els.resetBtn.addEventListener('click', () => this.reset());
    els.copyBtn.addEventListener('click', () => void this.copy());
    els.txtBtn.addEventListener('click', () => this.download('txt'));
    els.srtBtn.addEventListener('click', () => this.download('srt'));
  }

  private takeFiles(files: File[]): void {
    if (this.busy || files.length === 0) return;
    this.queue = this.config.batch ? files : [];
    void this.loadFile(files[0]!);
  }

  private renderQueue(): void {
    const list = this.els.batchList;
    if (this.queue.length < 2) {
      list.classList.add('hidden');
      list.replaceChildren();
      return;
    }
    list.classList.remove('hidden');
    list.replaceChildren(
      ...this.queue.map((file) => {
        const li = document.createElement('li');
        li.className = 'truncate';
        li.textContent = file.name;
        return li;
      }),
    );
  }

  private async decodeQueued(file: File): Promise<AudioBuffer | null> {
    if (file.size > MAX_SIZE) return null;
    const data = await file.arrayBuffer();
    const ctx = new AudioContext();
    try {
      const buffer = await ctx.decodeAudioData(data.slice(0));
      if (buffer.duration > MAX_DURATION_S) return null;
      return buffer;
    } finally {
      await ctx.close();
    }
  }

  private transcribePcm(pcm: Float32Array): Promise<{ text: string; chunks: TranscriptChunk[] }> {
    return new Promise((resolve, reject) => {
      this.job = { resolve, reject };
      this.worker!.postMessage({
        type: 'transcribe',
        audio: pcm,
        model: (this.els.model.value as TranscribeModel) ?? 'base',
        language: this.els.language.value || null,
      });
    });
  }

  /** One model, one file at a time. Two or more transcripts come back as a zip. */
  private async runQueue(): Promise<void> {
    const txtNames = uniqueFileNames(
      this.queue.map((file) => fileStem(file.name)),
      'txt',
    );
    const srtNames = uniqueFileNames(
      this.queue.map((file) => fileStem(file.name)),
      'srt',
    );
    const ready: { name: string; data: Uint8Array<ArrayBuffer> }[] = [];
    let skipped = 0;
    let ok = 0;
    const enc = new TextEncoder();
    for (let i = 0; i < this.queue.length; i++) {
      const file = this.queue[i]!;
      this.setStatus(fill(this.text.batchProgress, { current: i + 1, total: this.queue.length }));
      try {
        const decoded = await this.decodeQueued(file);
        if (!decoded) {
          skipped++;
          continue;
        }
        const pcm = await toMono16k(decoded);
        const result = await this.transcribePcm(pcm);
        ready.push({ name: txtNames[i]!, data: enc.encode(result.text) });
        const srt = chunksToSrt(result.chunks);
        if (srt) ready.push({ name: srtNames[i]!, data: enc.encode(srt) });
        if (ok === 0) {
          this.chunks = result.chunks;
          this.els.transcript.value = result.text;
          this.fileName = fileStem(file.name);
          this.setExportState(result.text.length > 0);
        }
        ok++;
      } catch (err) {
        console.error(err);
        skipped++;
        if (!this.worker) break;
      }
    }
    if (ok === 0) {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.trFail);
      return;
    }
    const note = skipped > 0 ? ` ${fill(this.text.batchSkipped, { n: skipped })}` : '';
    if (ok === 1) {
      this.setStatus(`${fill(this.text.trDone, { count: String(this.els.transcript.value.length) })}${note}`);
      return;
    }
    const zipName = `${fileStem(this.queue[0]!.name)}-transcript.zip`;
    const blob = new Blob([storeZip(ready)], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = zipName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    this.setStatus(`${fill(this.text.exported, { file: zipName })}${note}`);
    showToast(this.toastRoot(), 'success', fill(this.text.saved, { file: zipName }));
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

      setEmptyHidden(this.els.dropzone, true);
      this.els.workspace.classList.remove('hidden');
      this.setExportState(false);
      this.renderQueue();
      this.setStatus(this.text.ready);
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    }
  }

  private reset(): void {
    this.worker?.terminate();
    this.worker = null;
    this.job?.reject(new Error('reset'));
    this.job = null;
    this.buffer = null;
    this.queue = [];
    this.renderQueue();
    this.chunks = [];
    this.els.transcript.value = '';
    this.els.workspace.classList.add('hidden');
    setEmptyHidden(this.els.dropzone, false);
    this.els.progressRow.classList.add('hidden');
    this.els.progressBar.style.width = '0%';
    this.setStatus('');
  }

  private async run(): Promise<void> {
    const queued = this.config.batch === true && this.queue.length > 1;
    if (this.busy || (!this.buffer && !queued)) return;
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
    if (queued) {
      try {
        await this.runQueue();
      } finally {
        this.busy = false;
        this.els.runBtn.disabled = !this.buffer;
        this.els.progressRow.classList.add('hidden');
      }
      return;
    }
    let pcm: Float32Array;
    try {
      pcm = await toMono16k(this.buffer!);
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
        const chunks = msg.chunks ?? [];
        if (this.job) {
          const job = this.job;
          this.job = null;
          job.resolve({ text, chunks });
          return;
        }
        this.chunks = chunks;
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
        if (this.job) {
          const job = this.job;
          this.job = null;
          job.reject(new Error(msg.message || 'transcribe'));
          return;
        }
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
