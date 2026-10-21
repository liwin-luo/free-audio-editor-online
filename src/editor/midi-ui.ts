/**
 * Controller for the audio-to-midi island. Decode, then Basic Pitch, then a .mid download.
 * The model chunk loads on the first convert, not with the page.
 */
import { formatBytes, formatTime } from '../lib/format';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';
import { fileStem } from './batch';
import { bindDeliveryChips, bindFileOpen, setEmptyHidden } from './delivery';
import { readEditorText, showToast } from './messages';

/** Copy says 3 minutes. A hair over still passes so a file that reads 3:00 is not refused. */
const MAX_DURATION_S = 180.5;
const MAX_SIZE = 300 * 1024 * 1024;
const LIST_CAP = 80;
const NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`MIDI markup missing: ${selector}`);
  return el;
}

function noteLabel(pitch: number): string {
  const clamped = Math.max(0, Math.min(127, pitch));
  return `${NAMES[clamped % 12]}${Math.floor(clamped / 12) - 1}`;
}

class MidiConverter {
  private text: EditorText;
  private busy = false;
  private tooLong = false;
  private fileName = 'audio';
  private bytes: Uint8Array | null = null;
  private dropzone: HTMLElement;
  private fileInput: HTMLInputElement;
  private workspace: HTMLElement;
  private fileNameEl: HTMLElement;
  private fileMetaEl: HTMLElement;
  private runBtn: HTMLButtonElement;
  private downloadBtn: HTMLButtonElement;
  private progressRow: HTMLElement;
  private progressBar: HTMLElement;
  private result: HTMLElement;
  private countEl: HTMLElement;
  private moreEl: HTMLElement;
  private listEl: HTMLElement;
  private noneEl: HTMLElement;
  private tooLongEl: HTMLElement;
  private statusEl: HTMLElement;

  constructor(private root: HTMLElement) {
    this.text = readEditorText(root);
    this.dropzone = requireEl(root, '[data-dropzone]');
    this.fileInput = requireEl(root, '[data-file-input]');
    this.workspace = requireEl(root, '[data-workspace]');
    this.fileNameEl = requireEl(root, '[data-file-name]');
    this.fileMetaEl = requireEl(root, '[data-file-meta]');
    this.runBtn = requireEl(root, '[data-run]');
    this.downloadBtn = requireEl(root, '[data-download]');
    this.progressRow = requireEl(root, '[data-progress-row]');
    this.progressBar = requireEl(root, '[data-progress-bar]');
    this.result = requireEl(root, '[data-result]');
    this.countEl = requireEl(root, '[data-note-count]');
    this.moreEl = requireEl(root, '[data-note-more]');
    this.listEl = requireEl(root, '[data-note-list]');
    this.noneEl = requireEl(root, '[data-none]');
    this.tooLongEl = requireEl(root, '[data-too-long]');
    this.statusEl = requireEl(root, '[data-status]');
    this.bind();
  }

  private bind(): void {
    bindDeliveryChips(this.root);
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
    this.runBtn.addEventListener('click', () => void this.convert());
    this.downloadBtn.addEventListener('click', () => this.download());
  }

  private async load(file: File): Promise<void> {
    if (this.busy) return;
    if (file.size > MAX_SIZE) {
      showToast(this.toastRoot(), 'error', this.text.tooBig);
      return;
    }
    this.busy = true;
    this.clearResult();
    this.fileName = fileStem(file.name);
    this.fileNameEl.textContent = file.name;
    this.fileMetaEl.textContent = this.text.decoding;
    setEmptyHidden(this.dropzone, true);
    this.workspace.classList.remove('hidden');
    try {
      const ctx = new AudioContext();
      let buffer: AudioBuffer;
      try {
        buffer = await ctx.decodeAudioData(await file.arrayBuffer());
      } finally {
        await ctx.close();
      }
      this.tooLong = buffer.duration > MAX_DURATION_S;
      this.fileMetaEl.textContent = `${formatBytes(file.size)} · ${formatTime(buffer.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;
      this.tooLongEl.classList.toggle('hidden', !this.tooLong);
      this.runBtn.disabled = this.tooLong;
      this.samples = this.tooLong ? null : await (await import('./midi-infer')).toMono22050(buffer);
    } catch (err) {
      console.error(err);
      this.samples = null;
      this.runBtn.disabled = true;
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    } finally {
      this.busy = false;
    }
  }

  private samples: Float32Array | null = null;

  private async convert(): Promise<void> {
    if (this.busy || this.tooLong || !this.samples) return;
    this.busy = true;
    this.runBtn.disabled = true;
    this.downloadBtn.disabled = true;
    this.clearResult();
    this.progressRow.classList.remove('hidden');
    this.setProgress(0);
    this.statusEl.textContent = fill(this.text.midiWorking, { percent: 0 });
    try {
      const { audioToMidi } = await import('./midi-infer');
      const { notes, bytes } = await audioToMidi(this.samples, (percent) => {
        this.setProgress(percent);
        this.statusEl.textContent = fill(this.text.midiWorking, { percent });
      });
      this.bytes = notes.length ? bytes : null;
      this.countEl.textContent = fill(this.text.midiNotes, { count: notes.length });
      if (!notes.length) {
        this.noneEl.classList.remove('hidden');
        this.statusEl.textContent = this.text.midiNone;
      } else {
        const shown = notes.slice(0, LIST_CAP);
        this.listEl.replaceChildren(
          ...shown.map((note) => {
            const li = document.createElement('li');
            li.textContent = `${noteLabel(note.pitch)}  ${formatTime(note.startSec, true)}`;
            return li;
          }),
        );
        if (notes.length > LIST_CAP) {
          this.moreEl.textContent = fill(this.text.midiMore, { shown: LIST_CAP, count: notes.length });
          this.moreEl.classList.remove('hidden');
        }
        this.result.classList.remove('hidden');
        this.downloadBtn.disabled = false;
        this.statusEl.textContent = fill(this.text.midiNotes, { count: notes.length });
      }
    } catch (err) {
      console.error(err);
      showToast(this.toastRoot(), 'error', this.text.midiFail);
      this.statusEl.textContent = this.text.midiFail;
    } finally {
      this.progressRow.classList.add('hidden');
      this.runBtn.disabled = this.tooLong || !this.samples;
      this.busy = false;
    }
  }

  private download(): void {
    if (!this.bytes) return;
    const blob = new Blob([this.bytes.slice()], { type: 'audio/midi' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.fileName}.mid`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private setProgress(percent: number): void {
    this.progressBar.style.transform = `scaleX(${Math.max(0, Math.min(100, percent)) / 100})`;
  }

  private clearResult(): void {
    this.bytes = null;
    this.result.classList.add('hidden');
    this.noneEl.classList.add('hidden');
    this.moreEl.classList.add('hidden');
    this.listEl.replaceChildren();
    this.countEl.textContent = '';
    this.downloadBtn.disabled = true;
  }

  private reset(): void {
    if (this.busy) return;
    this.samples = null;
    this.tooLong = false;
    this.clearResult();
    this.workspace.classList.add('hidden');
    this.tooLongEl.classList.add('hidden');
    setEmptyHidden(this.dropzone, false);
    this.statusEl.textContent = '';
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }
}

export function initMidi(): void {
  for (const root of document.querySelectorAll<HTMLElement>('[data-midi]')) new MidiConverter(root);
}
