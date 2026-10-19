import { formatBytes, formatTime } from '../lib/format';
import { encodeFor, getFormat } from './encoders';
import { fill } from '../i18n/inline';
import { readEditorText, showToast } from './messages';
import { bindDeliveryChips, bindFileOpen } from './delivery';
import { integratedLufs, matchLufsGain, samplePeakDb, samplePeakLinear } from './loudness';
import type { EditorText } from '../i18n/types';

function dbText(value: number): string {
  if (!Number.isFinite(value)) return '−∞';
  const text = value.toFixed(1);
  return value < 0 ? text.replace('-', '−') : text;
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`missing ${selector}`);
  return el;
}

class LoudnessMeter {
  private text: EditorText;
  private buffer: AudioBuffer | null = null;
  private channels: Float32Array[] = [];
  private measured = Number.NEGATIVE_INFINITY;
  private peakLinear = 0;
  private target: number | null = null;
  private fileName = 'audio';
  private busy = false;

  private dropzone: HTMLElement;
  private fileInput: HTMLInputElement;
  private workspace: HTMLElement;
  private fileNameEl: HTMLElement;
  private fileMetaEl: HTMLElement;
  private lufsEl: HTMLElement;
  private peakEl: HTMLElement;
  private noteEl: HTMLElement;
  private formatEl: HTMLSelectElement;
  private exportBtn: HTMLButtonElement;
  private targets: HTMLButtonElement[];

  constructor(private root: HTMLElement) {
    this.text = readEditorText(root);
    this.dropzone = requireEl(root, '[data-dropzone]');
    this.fileInput = requireEl(root, '[data-file-input]');
    this.workspace = requireEl(root, '[data-workspace]');
    this.fileNameEl = requireEl(root, '[data-file-name]');
    this.fileMetaEl = requireEl(root, '[data-file-meta]');
    this.lufsEl = requireEl(root, '[data-lufs]');
    this.peakEl = requireEl(root, '[data-peak]');
    this.noteEl = requireEl(root, '[data-lufs-note]');
    this.formatEl = requireEl(root, '[data-format]');
    this.exportBtn = requireEl(root, '[data-export]');
    this.targets = [...root.querySelectorAll<HTMLButtonElement>('[data-lufs-target]')];
    this.bind();
  }

  private bind(): void {
    bindDeliveryChips(this.root, this.formatEl);
    bindFileOpen(this.dropzone, () => this.fileInput.click());
    this.dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
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
    for (const button of this.targets) {
      button.addEventListener('click', () => this.select(Number(button.dataset.lufsTarget)));
    }
    this.exportBtn.addEventListener('click', () => void this.exportFile());
  }

  private async load(file: File): Promise<void> {
    if (this.busy) return;
    if (file.size > 300 * 1024 * 1024) {
      showToast(this.toastRoot(), 'error', this.text.tooBig);
      return;
    }
    this.busy = true;
    this.noteEl.textContent = this.text.decoding;
    try {
      const ctx = new AudioContext();
      let buffer: AudioBuffer;
      try {
        buffer = await ctx.decodeAudioData(await file.arrayBuffer());
      } finally {
        await ctx.close();
      }
      this.buffer = buffer;
      this.channels = Array.from({ length: buffer.numberOfChannels }, (_, i) => buffer.getChannelData(i));
      this.measured = integratedLufs(this.channels, buffer.sampleRate);
      this.peakLinear = samplePeakLinear(this.channels);
      this.target = null;
      this.fileName = file.name.replace(/\.[^.]+$/, '');
      this.fileNameEl.textContent = file.name;
      this.fileMetaEl.textContent = `${formatBytes(file.size)} · ${formatTime(buffer.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;
      this.lufsEl.textContent = dbText(this.measured);
      this.peakEl.textContent = dbText(samplePeakDb(this.channels));
      this.dropzone.hidden = true;
      this.workspace.classList.remove('hidden');
      this.formatEl.disabled = false;
      const silent = !Number.isFinite(this.measured);
      for (const button of this.targets) {
        button.disabled = silent;
        button.setAttribute('aria-pressed', 'false');
        button.classList.remove('btn-primary');
        button.classList.add('btn-secondary');
      }
      this.exportBtn.disabled = true;
      this.noteEl.textContent = silent ? this.text.lufsSilent : '';
    } catch (err) {
      console.error(err);
      this.noteEl.textContent = '';
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    } finally {
      this.busy = false;
    }
  }

  private select(target: number): void {
    if (!Number.isFinite(this.measured)) return;
    this.target = target;
    for (const button of this.targets) {
      const on = Number(button.dataset.lufsTarget) === target;
      button.setAttribute('aria-pressed', on ? 'true' : 'false');
      button.classList.toggle('btn-primary', on);
      button.classList.toggle('btn-secondary', !on);
    }
    const match = matchLufsGain(this.measured, target, this.peakLinear);
    const lufs = dbText(match.resultLufs);
    this.noteEl.textContent = match.limited
      ? fill(this.text.lufsLimited, { lufs })
      : fill(this.text.lufsWill, { lufs });
    this.exportBtn.disabled = false;
  }

  private async exportFile(): Promise<void> {
    if (!this.buffer || this.target === null || this.busy) return;
    this.busy = true;
    this.exportBtn.disabled = true;
    const original = this.exportBtn.innerHTML;
    this.exportBtn.textContent = this.text.rendering;
    try {
      const match = matchLufsGain(this.measured, this.target, this.peakLinear);
      const out = new AudioBuffer({
        length: this.buffer.length,
        numberOfChannels: this.buffer.numberOfChannels,
        sampleRate: this.buffer.sampleRate,
      });
      for (let c = 0; c < this.buffer.numberOfChannels; c++) {
        const src = this.buffer.getChannelData(c);
        const dst = out.getChannelData(c);
        for (let i = 0; i < src.length; i++) dst[i] = src[i] * match.linear;
      }
      const fmt = getFormat(this.formatEl.value);
      const blob = await encodeFor(fmt, out);
      const filename = `${this.fileName}-lufs.${fmt.ext}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      showToast(this.toastRoot(), 'success', fill(this.text.saved, { file: filename }));
    } catch (err) {
      console.error(err);
      showToast(this.toastRoot(), 'error', this.text.exportFail);
    } finally {
      this.exportBtn.innerHTML = original;
      this.exportBtn.disabled = this.target === null;
      this.busy = false;
    }
  }

  private reset(): void {
    this.buffer = null;
    this.channels = [];
    this.target = null;
    this.workspace.classList.add('hidden');
    this.dropzone.hidden = false;
    this.exportBtn.disabled = true;
    this.formatEl.disabled = true;
    this.noteEl.textContent = '';
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }
}

export function initLoudness(): void {
  document.querySelectorAll<HTMLElement>('[data-loudness]').forEach((root) => new LoudnessMeter(root));
}
