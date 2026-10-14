/**
 * Microphone recording via MediaRecorder. The finished take is wrapped in a
 * File and dispatched as `editor-load-file` so the page's editor picks it up.
 */

import { readEditorText } from './messages';

const MIMES = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'];

function pickMime(): string {
  if (typeof MediaRecorder === 'undefined') return '';
  for (const m of MIMES) {
    if (MediaRecorder.isTypeSupported?.(m)) return m;
  }
  return '';
}

function fmt(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

class Recorder {
  private root: HTMLElement;
  private text: ReturnType<typeof readEditorText>;
  private toggle: HTMLButtonElement;
  private status: HTMLElement;
  private timer: HTMLElement;
  private errorEl: HTMLElement;
  private live: HTMLElement;

  private recorder: MediaRecorder | null = null;
  private chunks: BlobPart[] = [];
  private stream: MediaStream | null = null;
  private startedAt = 0;
  private timerId = 0;
  private recording = false;

  constructor(root: HTMLElement) {
    this.root = root;
    this.text = readEditorText(root);
    this.toggle = root.querySelector<HTMLButtonElement>('[data-rec-toggle]')!;
    this.status = root.querySelector<HTMLElement>('[data-rec-status]')!;
    this.timer = root.querySelector<HTMLElement>('[data-rec-meta]')!;
    this.errorEl = root.querySelector<HTMLElement>('[data-rec-error]')!;
    this.live = root.querySelector<HTMLElement>('[data-rec-live]')!;
    this.toggle.addEventListener('click', () => void this.toggleRecording());
  }

  private showError(message: string): void {
    this.errorEl.textContent = message;
    this.errorEl.classList.remove('hidden');
  }

  private async toggleRecording(): Promise<void> {
    this.errorEl.classList.add('hidden');
    if (this.recording) {
      this.stop();
      return;
    }
    if (typeof MediaRecorder === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      this.showError(this.text.recUnavailable);
      return;
    }
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      this.showError(this.text.micBlocked);
      return;
    }

    const mimeType = pickMime();
    this.recorder = new MediaRecorder(this.stream, mimeType ? { mimeType } : undefined);
    this.chunks = [];
    this.recorder.ondataavailable = (e) => {
      if (e.data.size > 0) this.chunks.push(e.data);
    };
    this.recorder.onstop = () => this.finish();

    this.recorder.start();
    this.recording = true;
    this.startedAt = Date.now();
    this.timerId = window.setInterval(() => {
      this.timer.textContent = fmt((Date.now() - this.startedAt) / 1000);
    }, 250);
    this.status.textContent = this.text.recording;
    this.live.classList.remove('hidden');
    this.toggle.textContent = this.text.stop;
  }

  private stop(): void {
    this.recording = false;
    this.recorder?.stop();
    window.clearInterval(this.timerId);
    this.live.classList.add('hidden');
    this.toggle.textContent = this.text.recordAgain;
  }

  private finish(): void {
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;

    const type = this.recorder?.mimeType || 'audio/webm';
    const ext = type.includes('mp4') ? 'm4a' : 'webm';
    const seconds = Math.max(1, Math.round((Date.now() - this.startedAt) / 1000));
    const blob = new Blob(this.chunks, { type });
    const file = new File([blob], `recording-${seconds}s.${ext}`, { type });

    this.status.textContent = this.text.recordingLoaded;
    document.dispatchEvent(new CustomEvent('editor-load-file', { detail: file }));
  }
}

export function initRecorders(): void {
  document.querySelectorAll<HTMLElement>('[data-recorder]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    new Recorder(root);
  });
}
