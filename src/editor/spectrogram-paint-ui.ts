/**
 * Encode a picture or a line of text into a WAV whose spectrogram shows it.
 */
import { encodeBitmap, wavBytes, type Bitmap } from './spectrogram';
import { readEditorText, showToast } from './messages';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';

const MAX_W = 360;
const MAX_H = 140;

interface Elements {
  root: HTMLElement;
  text: HTMLTextAreaElement;
  file: HTMLInputElement;
  drop: HTMLElement;
  preview: HTMLCanvasElement;
  exportBtn: HTMLButtonElement;
  status: HTMLElement;
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Paint markup missing: ${selector}`);
  return el;
}

export class SpecPaintApp {
  private els: Elements;
  private text: EditorText;
  private bitmap: Bitmap | null = null;
  private busy = false;
  private timer = 0;

  constructor(root: HTMLElement) {
    this.text = readEditorText(root);
    this.els = {
      root,
      text: requireEl(root, '[data-paint-text]'),
      file: requireEl(root, '[data-paint-file]'),
      drop: requireEl(root, '[data-paint-drop]'),
      preview: requireEl(root, '[data-paint-preview]'),
      exportBtn: requireEl(root, '[data-export]'),
      status: requireEl(root, '[data-status]'),
    };
    this.bind();
  }

  private bind(): void {
    const { els } = this;
    els.text.addEventListener('input', () => {
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => this.drawText(), 120);
    });
    els.drop.addEventListener('click', () => els.file.click());
    els.drop.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        els.file.click();
      }
    });
    els.file.addEventListener('change', () => {
      const file = els.file.files?.[0];
      els.file.value = '';
      if (file) void this.loadImage(file);
    });
    els.drop.addEventListener('dragover', (e) => {
      e.preventDefault();
      els.drop.classList.add('border-accent');
    });
    els.drop.addEventListener('dragleave', () => els.drop.classList.remove('border-accent'));
    els.drop.addEventListener('drop', (e) => {
      e.preventDefault();
      els.drop.classList.remove('border-accent');
      const file = e.dataTransfer?.files?.[0];
      if (file) void this.loadImage(file);
    });
    els.exportBtn.addEventListener('click', () => void this.doExport());
  }

  private drawText(): void {
    const value = this.els.text.value.trim();
    if (!value) {
      if (!this.bitmap) this.els.exportBtn.disabled = true;
      return;
    }
    const width = 480;
    const height = 128;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.direction = document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
    ctx.font = `700 78px ${getComputedStyle(document.body).fontFamily}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = ctx.direction === 'rtl' ? 'right' : 'left';
    const x = ctx.direction === 'rtl' ? width - 20 : 20;
    ctx.fillText(value.slice(0, 32), x, height / 2, width - 40);
    this.setBitmap(canvasToBitmap(canvas));
  }

  private async loadImage(file: File): Promise<void> {
    if (!file.type.startsWith('image/')) {
      showToast(this.toastRoot(), 'error', this.text.paintFail);
      return;
    }
    try {
      const url = URL.createObjectURL(file);
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('image'));
        img.src = url;
      });
      URL.revokeObjectURL(url);
      const scale = Math.min(MAX_W / img.width, MAX_H / img.height, 1);
      const width = Math.max(8, Math.round(img.width * scale));
      const height = Math.max(8, Math.round(img.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      this.els.text.value = '';
      this.setBitmap(canvasToBitmap(canvas));
    } catch {
      showToast(this.toastRoot(), 'error', this.text.paintFail);
    }
  }

  private setBitmap(bitmap: Bitmap): void {
    this.bitmap = bitmap;
    const ctx = this.els.preview.getContext('2d');
    if (ctx) {
      this.els.preview.width = bitmap.width;
      this.els.preview.height = bitmap.height;
      const img = ctx.createImageData(bitmap.width, bitmap.height);
      for (let i = 0; i < bitmap.brightness.length; i++) {
        const v = Math.round(bitmap.brightness[i] * 255);
        img.data[i * 4] = v;
        img.data[i * 4 + 1] = v;
        img.data[i * 4 + 2] = v;
        img.data[i * 4 + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    }
    this.els.preview.classList.remove('hidden');
    this.els.exportBtn.disabled = false;
    this.setStatus(this.text.paintReady);
  }

  private async doExport(): Promise<void> {
    if (!this.bitmap || this.busy) return;
    this.busy = true;
    this.els.exportBtn.disabled = true;
    this.setStatus(this.text.paintWorking);
    try {
      const samples = encodeBitmap(this.bitmap);
      const bytes = wavBytes(samples, 44100);
      const filename = 'image-to-audio.wav';
      const blob = new Blob([bytes], { type: 'audio/wav' });
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
      showToast(this.toastRoot(), 'error', this.text.paintFail);
    } finally {
      this.els.exportBtn.disabled = false;
      this.busy = false;
    }
  }

  private setStatus(msg: string): void {
    this.els.status.textContent = msg;
  }

  private toastRoot(): HTMLElement | null {
    return this.els.root.querySelector<HTMLElement>('[data-toast-root]');
  }
}

function canvasToBitmap(canvas: HTMLCanvasElement): Bitmap {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { width: 1, height: 1, brightness: new Float32Array([0]) };
  const { width, height } = canvas;
  const data = ctx.getImageData(0, 0, width, height).data;
  const brightness = new Float32Array(width * height);
  for (let i = 0; i < brightness.length; i++) {
    const p = i * 4;
    brightness[i] = (0.2126 * data[p] + 0.7152 * data[p + 1] + 0.0722 * data[p + 2]) / 255;
  }
  return { width, height, brightness };
}

export function initSpecPaint(): void {
  document.querySelectorAll<HTMLElement>('[data-spec-paint]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    new SpecPaintApp(root);
  });
}
