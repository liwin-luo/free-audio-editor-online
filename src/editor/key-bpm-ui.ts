import { formatBytes, formatTime } from '../lib/format';
import { readEditorText, showToast } from './messages';
import { bindFileOpen } from './delivery';
import { PITCHES, readKeyBpm } from './key-bpm';
import type { EditorText } from '../i18n/types';

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`missing ${selector}`);
  return el;
}

class KeyBpmFinder {
  private text: EditorText;
  private busy = false;
  private dropzone: HTMLElement;
  private fileInput: HTMLInputElement;
  private workspace: HTMLElement;
  private fileNameEl: HTMLElement;
  private fileMetaEl: HTMLElement;
  private bpmEl: HTMLElement;
  private keyEl: HTMLElement;

  constructor(private root: HTMLElement) {
    this.text = readEditorText(root);
    this.dropzone = requireEl(root, '[data-dropzone]');
    this.fileInput = requireEl(root, '[data-file-input]');
    this.workspace = requireEl(root, '[data-workspace]');
    this.fileNameEl = requireEl(root, '[data-file-name]');
    this.fileMetaEl = requireEl(root, '[data-file-meta]');
    this.bpmEl = requireEl(root, '[data-key-bpm-bpm]');
    this.keyEl = requireEl(root, '[data-key-bpm-key]');
    this.bind();
  }

  private bind(): void {
    bindFileOpen(this.dropzone, () => this.fileInput.click());
    this.dropzone.addEventListener('dragover', (e) => e.preventDefault());
    this.dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      const file = e.dataTransfer?.files?.[0];
      if (file) void this.load(file);
    });
    this.fileInput.addEventListener('change', () => {
      const file = this.fileInput.files?.[0];
      this.fileInput.value = '';
      if (file) void this.load(file);
    });
    this.root.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => this.reset());
  }

  private async load(file: File): Promise<void> {
    if (this.busy) return;
    if (file.size > 300 * 1024 * 1024) {
      showToast(this.toastRoot(), 'error', this.text.tooBig);
      return;
    }
    this.busy = true;
    this.bpmEl.textContent = this.text.decoding;
    this.keyEl.textContent = this.text.decoding;
    try {
      const ctx = new AudioContext();
      let buffer: AudioBuffer;
      try {
        buffer = await ctx.decodeAudioData(await file.arrayBuffer());
      } finally {
        await ctx.close();
      }
      const channels = Array.from({ length: buffer.numberOfChannels }, (_, i) => buffer.getChannelData(i));
      const read = readKeyBpm(channels, buffer.sampleRate);
      this.fileNameEl.textContent = file.name;
      this.fileMetaEl.textContent = `${formatBytes(file.size)} · ${formatTime(buffer.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;
      this.bpmEl.textContent = read.bpm == null ? this.text.keyUnread : String(read.bpm);
      this.keyEl.textContent =
        read.tonic == null ? this.text.keyUnread : `${PITCHES[read.tonic]} ${read.mode === 'minor' ? this.text.keyMinor : this.text.keyMajor}`;
      this.dropzone.hidden = true;
      this.workspace.classList.remove('hidden');
    } catch (err) {
      console.error(err);
      this.bpmEl.textContent = '—';
      this.keyEl.textContent = '—';
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    } finally {
      this.busy = false;
    }
  }

  private reset(): void {
    this.workspace.classList.add('hidden');
    this.dropzone.hidden = false;
    this.bpmEl.textContent = '—';
    this.keyEl.textContent = '—';
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }
}

export function initKeyBpm(): void {
  document.querySelectorAll<HTMLElement>('[data-key-bpm]').forEach((root) => new KeyBpmFinder(root));
}
