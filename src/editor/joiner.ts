/**
 * Multi-file audio joiner: merge several files into one track with an
 * optional crossfade between tracks. Shares the encoders and toasts with
 * the single-file editor.
 */
import { formatBytes, formatTime, clamp } from '../lib/format';
import { computePeaks, concatPeaks, drawWaveform, MAX_CANVAS_WIDTH, type Peaks } from './waveform';
import { renderMerge } from './processor';
import { encodeMp3, encodeWav, getFormat } from './encoders';
import { showToast, initEditors } from './index';
import type { EditorConfig } from '../data/tools';

interface Clip {
  id: number;
  name: string;
  size: number;
  buffer: AudioBuffer;
  peaks: Peaks;
}

const ROW_BASE =
  'flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2.5';

class Joiner {
  private root: HTMLElement;
  private clips: Clip[] = [];
  private nextId = 1;
  private busy = false;

  constructor(root: HTMLElement, config: EditorConfig) {
    this.root = root;

    this.q<HTMLSelectElement>('[data-format]').value = config.defaultFormat;

    const dropzone = this.q<HTMLElement>('[data-dropzone]');
    const input = this.q<HTMLInputElement>('[data-file-input]');
    dropzone.addEventListener('click', () => input.click());
    dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        input.click();
      }
    });
    input.addEventListener('change', () => {
      void this.addFiles(Array.from(input.files ?? []));
      input.value = '';
    });
    for (const type of ['dragenter', 'dragover'] as const) {
      dropzone.addEventListener(type, (e) => {
        e.preventDefault();
        dropzone.classList.add('border-accent', 'bg-accent-soft');
      });
    }
    for (const type of ['dragleave', 'drop'] as const) {
      dropzone.addEventListener(type, (e) => {
        e.preventDefault();
        dropzone.classList.remove('border-accent', 'bg-accent-soft');
      });
    }
    dropzone.addEventListener('drop', (e) => {
      void this.addFiles(Array.from(e.dataTransfer?.files ?? []));
    });

    this.q<HTMLButtonElement>('[data-export]').addEventListener('click', () => void this.doExport());
    this.q<HTMLButtonElement>('[data-clear]').addEventListener('click', () => {
      this.clips = [];
      this.renderTracks();
    });

    const bindLabel = (sel: string, labelSel: string, fmt: (v: number) => string) => {
      const el = this.q<HTMLInputElement>(sel);
      const label = this.q(labelSel);
      el.addEventListener('input', () => (label.textContent = fmt(Number(el.value))));
    };
    bindLabel('[data-crossfade]', '[data-crossfade-label]', (v) => `${v.toFixed(1)}s`);
    bindLabel('[data-fade-in]', '[data-fade-in-label]', (v) => `${v.toFixed(1)}s`);
    bindLabel('[data-fade-out]', '[data-fade-out-label]', (v) => `${v.toFixed(1)}s`);
  }

  private q<T extends Element>(selector: string): T {
    const el = this.root.querySelector<T>(selector);
    if (!el) throw new Error(`Joiner markup missing: ${selector}`);
    return el;
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }

  private async addFiles(files: File[]): Promise<void> {
    if (this.busy || files.length === 0) return;
    const audio = files.filter((f) => f.size < 300 * 1024 * 1024);
    const skipped = files.length - audio.length;
    if (skipped > 0) {
      showToast(this.toastRoot(), 'error', `${skipped} file(s) over 300 MB were skipped.`);
    }
    this.busy = true;
    for (const file of audio) {
      try {
        const data = await file.arrayBuffer();
        const ctx = new AudioContext();
        const buffer = await ctx.decodeAudioData(data);
        await ctx.close();
        const peaks = computePeaks(buffer, Math.max(60, Math.round(buffer.duration * 40)));
        this.clips.push({
          id: this.nextId++,
          name: file.name,
          size: file.size,
          buffer,
          peaks,
        });
      } catch {
        showToast(this.toastRoot(), 'error', `${file.name} could not be decoded — unsupported format?`);
      }
    }
    this.busy = false;
    this.renderTracks();
  }

  private move(index: number, delta: number): void {
    const target = index + delta;
    if (target < 0 || target >= this.clips.length) return;
    const [clip] = this.clips.splice(index, 1);
    this.clips.splice(target, 0, clip);
    this.renderTracks();
  }

  private remove(id: number): void {
    this.clips = this.clips.filter((c) => c.id !== id);
    this.renderTracks();
  }

  private totalDuration(): number {
    return this.clips.reduce((acc, c) => acc + c.buffer.duration, 0);
  }

  private renderTracks(): void {
    const list = this.q<HTMLElement>('[data-tracks]');
    const workspace = this.q<HTMLElement>('[data-workspace]');
    const dropzone = this.q<HTMLElement>('[data-dropzone]');
    const count = this.q<HTMLElement>('[data-count]');
    const total = this.q<HTMLElement>('[data-total]');
    const exportBtn = this.q<HTMLButtonElement>('[data-export]');

    list.innerHTML = '';
    workspace.classList.toggle('hidden', this.clips.length === 0);
    dropzone.hidden = this.clips.length > 0;
    count.textContent = String(this.clips.length);
    total.textContent = formatTime(this.totalDuration(), true);
    exportBtn.disabled = this.clips.length === 0 || this.busy;

    this.clips.forEach((clip, i) => {
      const row = document.createElement('li');
      row.className = ROW_BASE;
      row.dataset.clipId = String(clip.id);

      const meta = document.createElement('div');
      meta.className = 'min-w-0 flex-1';
      const name = document.createElement('p');
      name.className = 'truncate text-sm font-medium';
      name.textContent = `${i + 1}. ${clip.name}`;
      const sub = document.createElement('p');
      sub.className = 'font-mono text-xs text-ink3';
      sub.textContent = `${formatTime(clip.buffer.duration, true)} · ${formatBytes(clip.size)}`;
      meta.append(name, sub);

      const btn = (label: string, title: string, onClick: () => void) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'btn btn-ghost size-8 shrink-0 p-0';
        b.title = title;
        b.setAttribute('aria-label', `${title} — ${clip.name}`);
        b.innerHTML = label;
        b.addEventListener('click', onClick);
        return b;
      };
      const svg = (d: string) =>
        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

      const up = btn(svg('<path d="M12 19V5M6 11l6-6 6 6"/>'), 'Move up', () => this.move(i, -1));
      const down = btn(svg('<path d="M12 5v14M6 13l6 6 6-6"/>'), 'Move down', () => this.move(i, 1));
      const del = btn(svg('<path d="M6 6l12 12M18 6 6 18"/>'), 'Remove', () => this.remove(clip.id));
      up.disabled = i === 0;
      down.disabled = i === this.clips.length - 1;

      row.append(meta, up, down, del);
      list.appendChild(row);
    });

    this.drawCombined();
  }

  private drawCombined(): void {
    const canvas = this.q<HTMLCanvasElement>('[data-wave]');
    if (this.clips.length === 0) return;
    const xfade = Number(this.q<HTMLInputElement>('[data-crossfade]').value) || 0;
    const total = this.totalDuration();
    const stageW = canvas.parentElement?.clientWidth || 600;
    const width = Math.min(Math.round(total * Math.max(stageW / total, 4)), MAX_CANVAS_WIDTH);
    const pps = width / total;

    let combined: Peaks | null = null;
    let acc = 0;
    for (const clip of this.clips) {
      const clipWidth = Math.max(1, Math.round(clip.buffer.duration * pps));
      const scaled = rescalePeaks(clip.peaks, clipWidth);
      const overlap = combined ? Math.round(acc * pps - (combined.width)) : 0;
      const overlapX = clamp(xfade > 0 ? Math.round(xfade * pps) : 0, 0, overlap);
      combined = combined ? concatPeaks(combined, scaled, overlapX) : scaled;
      acc += clip.buffer.duration;
    }
    if (combined) drawWaveform(canvas, combined, getComputedStyle(canvas).color);
  }

  private async doExport(): Promise<void> {
    if (this.clips.length === 0 || this.busy) return;
    this.busy = true;
    const exportBtn = this.q<HTMLButtonElement>('[data-export]');
    exportBtn.disabled = true;
    const original = exportBtn.innerHTML;
    exportBtn.textContent = 'Merging…';
    const status = this.q<HTMLElement>('[data-status]');
    status.textContent = 'Merging tracks locally…';

    try {
      const out = await renderMerge(
        this.clips.map((c) => c.buffer),
        {
          crossfadeSec: Number(this.q<HTMLInputElement>('[data-crossfade]').value) || 0,
          gain: 1,
          fadeIn: Number(this.q<HTMLInputElement>('[data-fade-in]').value) || 0,
          fadeOut: Number(this.q<HTMLInputElement>('[data-fade-out]').value) || 0,
        },
      );
      const fmt = getFormat(this.q<HTMLSelectElement>('[data-format]').value);
      status.textContent = `Encoding ${fmt.ext.toUpperCase()}…`;
      const blob = fmt.kind === 'wav' ? encodeWav(out) : await encodeMp3(out, fmt.kbps ?? 192);

      const filename = `merged.${fmt.ext}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);

      status.textContent = `Exported ${filename}.`;
      showToast(this.toastRoot(), 'success', `Saved as ${filename} — nothing was uploaded.`);
    } catch (err) {
      console.error(err);
      status.textContent = '';
      showToast(
        this.toastRoot(),
        'error',
        'Export failed — the MP3 encoder could not load (are you offline?). Try the WAV format instead.',
      );
    } finally {
      exportBtn.innerHTML = original;
      this.busy = false;
      this.renderTracks();
    }
  }
}

function rescalePeaks(peaks: Peaks, width: number): Peaks {
  if (peaks.width === width) return peaks;
  const min = new Float32Array(width);
  const max = new Float32Array(width);
  const step = peaks.width / width;
  for (let i = 0; i < width; i++) {
    const s = Math.floor(i * step);
    const e = Math.max(s + 1, Math.floor((i + 1) * step));
    let lo = peaks.min[s];
    let hi = peaks.max[s];
    for (let j = s + 1; j < e && j < peaks.width; j++) {
      if (peaks.min[j] < lo) lo = peaks.min[j];
      if (peaks.max[j] > hi) hi = peaks.max[j];
    }
    min[i] = lo;
    max[i] = hi;
  }
  return { min, max, width };
}

export function initJoiners(): void {
  document.querySelectorAll<HTMLElement>('[data-audio-joiner]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    const config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    new Joiner(root, config);
  });
}

// Ensure both islands initialize when this module is included
void initEditors;
