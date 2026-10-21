/**
 * Multi-track mixer UI. One clip per track, up to 8.
 * Preview and export both go through renderMix.
 */
import { formatTime } from '../lib/format';
import { computePeaks, drawWaveform } from './waveform';
import { renderMix } from './mixer';
import { encodeFor, getFormat } from './encoders';
import { bindDeliveryChips, bindFileOpen, setEmptyHidden } from './delivery';
import { readEditorText, showToast } from './messages';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';
import type { EditorConfig } from '../data/tools';

const MAX_TRACKS = 8;
const MIN_SPAN = 0.05;
const EDGE = 14;

interface Track {
  id: number;
  name: string;
  buffer: AudioBuffer;
  offset: number;
  trimStart: number;
  trimEnd: number;
  gain: number;
  pan: number;
  mute: boolean;
  solo: boolean;
}

class Mixer {
  private root: HTMLElement;
  private text: EditorText;
  private tracks: Track[] = [];
  private nextId = 1;
  private busy = false;
  private dragging = false;
  private playhead = 0;
  private ctx: AudioContext | null = null;
  private source: AudioBufferSourceNode | null = null;
  private playTimer = 0;
  private playAnchor = 0;
  private playFrom = 0;
  /** Frozen during a drag so the timeline scale does not jump under the pointer. */
  private ppsLock = 0;

  constructor(root: HTMLElement, config: EditorConfig) {
    this.root = root;
    this.text = readEditorText(root);
    const format = this.q<HTMLSelectElement>('[data-format]');
    if (config.defaultFormat) format.value = config.defaultFormat;
    bindDeliveryChips(this.root, format);

    const dropzone = this.q<HTMLElement>('[data-dropzone]');
    const input = this.q<HTMLInputElement>('[data-file-input]');
    const open = () => input.click();
    bindFileOpen(dropzone, open);
    this.q('[data-add]').addEventListener('click', open);
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

    this.q('[data-master]').addEventListener('input', () => {
      this.q('[data-master-label]').textContent = `${this.masterPercent()}%`;
    });
    this.q('[data-play]').addEventListener('click', () => void this.play());
    this.q('[data-stop]').addEventListener('click', () => this.stopPlayback(true));
    this.q('[data-clear]').addEventListener('click', () => {
      this.stopPlayback(true);
      this.tracks = [];
      this.playhead = 0;
      this.renderTracks();
    });
    this.q('[data-export]').addEventListener('click', () => void this.doExport());
    this.q('[data-ruler]').addEventListener('pointerdown', (e) => this.seekEvent(e as PointerEvent));

    this.root.addEventListener('keydown', (e) => {
      if (e.key !== ' ' || e.repeat) return;
      const target = e.target as HTMLElement;
      if (target.closest('[data-open], [data-delivery]')) return;
      const tag = target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      e.preventDefault();
      if (this.source) this.stopPlayback(false);
      else void this.play();
    });
  }

  private q<T extends Element>(selector: string): T {
    const el = this.root.querySelector<T>(selector);
    if (!el) throw new Error(`Mixer markup missing: ${selector}`);
    return el;
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }

  private masterGain(): number {
    return Number(this.q<HTMLInputElement>('[data-master]').value) / 100;
  }

  private masterPercent(): number {
    return Math.round(this.masterGain() * 100);
  }

  private timelineDuration(): number {
    let d = 0.5;
    for (const t of this.tracks) d = Math.max(d, t.offset + Math.max(MIN_SPAN, t.trimEnd - t.trimStart));
    return d;
  }

  private pixelsPerSecond(): number {
    if (this.dragging && this.ppsLock > 0) return this.ppsLock;
    const dur = this.timelineDuration();
    const view = this.q('[data-scroll]').clientWidth || 640;
    const fit = view / dur;
    const cap = 4000 / dur;
    return Math.min(Math.max(fit, 48), Math.max(cap, fit));
  }

  private async addFiles(files: File[]): Promise<void> {
    if (this.busy || files.length === 0) return;
    this.busy = true;
    for (const file of files) {
      if (this.tracks.length >= MAX_TRACKS) {
        showToast(this.toastRoot(), 'error', this.text.mixLimit);
        break;
      }
      if (file.size >= 300 * 1024 * 1024) {
        showToast(this.toastRoot(), 'error', this.text.tooBig);
        continue;
      }
      try {
        const data = await file.arrayBuffer();
        const ctx = new AudioContext();
        let buffer: AudioBuffer;
        try {
          buffer = await ctx.decodeAudioData(data.slice(0));
        } finally {
          await ctx.close();
        }
        this.tracks.push({
          id: this.nextId++,
          name: file.name,
          buffer,
          offset: 0,
          trimStart: 0,
          trimEnd: buffer.duration,
          gain: 1,
          pan: 0,
          mute: false,
          solo: false,
        });
      } catch {
        showToast(this.toastRoot(), 'error', fill(this.text.mixDecode, { name: file.name }));
      }
    }
    this.busy = false;
    this.renderTracks();
  }

  private renderTracks(): void {
    if (this.dragging) return;
    const workspace = this.q<HTMLElement>('[data-workspace]');
    const dropzone = this.q<HTMLElement>('[data-dropzone]');
    const rows = this.q<HTMLElement>('[data-rows]');
    const summary = this.q('[data-summary]');
    const exportBtn = this.q<HTMLButtonElement>('[data-export]');

    workspace.classList.toggle('hidden', this.tracks.length === 0);
    setEmptyHidden(dropzone, this.tracks.length > 0);
    summary.textContent = fill(this.text.trackSummary, {
      n: this.tracks.length,
      time: formatTime(this.timelineDuration(), true),
    });
    exportBtn.disabled = this.tracks.length === 0 || this.busy;
    rows.innerHTML = '';

    for (const track of this.tracks) rows.appendChild(this.row(track));
    requestAnimationFrame(() => {
      this.layout();
      for (const track of this.tracks) this.drawClip(track);
    });
  }

  private row(track: Track): HTMLElement {
    const wrap = document.createElement('div');
    wrap.className = 'border-b border-line';
    wrap.dataset.trackId = String(track.id);

    const head = document.createElement('div');
    head.className = 'flex items-center gap-2 px-3 pt-2';
    const name = document.createElement('p');
    name.className = 'min-w-0 flex-1 truncate text-sm font-medium';
    name.textContent = track.name;
    const mute = this.toggle(this.text.mixMute, track.mute, () => {
      track.mute = !track.mute;
      mute.setAttribute('aria-pressed', String(track.mute));
      mute.classList.toggle('bg-accent-soft', track.mute);
    });
    const solo = this.toggle(this.text.mixSolo, track.solo, () => {
      track.solo = !track.solo;
      solo.setAttribute('aria-pressed', String(track.solo));
      solo.classList.toggle('bg-accent-soft', track.solo);
    });
    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'btn btn-ghost h-8 px-2 text-xs';
    del.textContent = this.text.remove;
    del.addEventListener('click', () => {
      this.stopPlayback(false);
      this.tracks = this.tracks.filter((t) => t.id !== track.id);
      this.renderTracks();
    });
    head.append(name, mute, solo, del);

    const lane = document.createElement('div');
    lane.className = 'relative mx-3 mt-2 h-14';
    const clip = document.createElement('div');
    clip.dataset.clip = String(track.id);
    clip.className = 'absolute top-1 bottom-1 cursor-grab overflow-hidden rounded-md bg-accent-soft touch-none';
    const canvas = document.createElement('canvas');
    canvas.dataset.wave = String(track.id);
    canvas.className = 'pointer-events-none h-full w-full text-accent';
    clip.appendChild(canvas);
    lane.appendChild(clip);
    this.bindDrag(clip, track);

    const controls = document.createElement('div');
    controls.className = 'grid grid-cols-2 gap-3 px-3 py-3 md:grid-cols-5';
    controls.append(
      this.slider(this.text.mixGain, 0, 150, 1, Math.round(track.gain * 100), (v) => `${v}%`, (v) => {
        track.gain = v / 100;
      }),
      this.slider(this.text.mixPan, -100, 100, 1, Math.round(track.pan * 100), panLabel, (v) => {
        track.pan = v / 100;
      }),
      this.number(this.text.mixOffset, track.offset, 0, 60 * 60, (v) => {
        track.offset = v;
        this.layout();
      }),
      this.number(this.text.mixTrimIn, track.trimStart, 0, track.buffer.duration, (v) => {
        track.trimStart = Math.min(v, track.trimEnd - MIN_SPAN);
        this.layout();
        this.drawClip(track);
      }),
      this.number(this.text.mixTrimOut, track.trimEnd, 0, track.buffer.duration, (v) => {
        track.trimEnd = Math.max(v, track.trimStart + MIN_SPAN);
        this.layout();
        this.drawClip(track);
      }),
    );

    wrap.append(head, lane, controls);
    return wrap;
  }

  private toggle(label: string, pressed: boolean, onClick: () => void): HTMLButtonElement {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `btn btn-ghost h-8 px-2 text-xs ${pressed ? 'bg-accent-soft' : ''}`;
    b.textContent = label;
    b.setAttribute('aria-pressed', String(pressed));
    b.addEventListener('click', onClick);
    return b;
  }

  private slider(
    label: string,
    min: number,
    max: number,
    step: number,
    value: number,
    fmt: (v: number) => string,
    onInput: (v: number) => void,
  ): HTMLLabelElement {
    const wrap = document.createElement('label');
    wrap.className = 'block';
    const cap = document.createElement('span');
    cap.className = 'mb-1 flex items-center justify-between text-xs text-ink2';
    const name = document.createElement('span');
    name.textContent = label;
    const read = document.createElement('span');
    read.className = 'font-mono tabular-nums';
    read.textContent = fmt(value);
    cap.append(name, read);
    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    input.value = String(value);
    input.className = 'w-full accent-(--color-accent)';
    input.addEventListener('input', () => {
      const v = Number(input.value);
      read.textContent = fmt(v);
      onInput(v);
    });
    wrap.append(cap, input);
    return wrap;
  }

  private number(label: string, value: number, min: number, max: number, onInput: (v: number) => void): HTMLLabelElement {
    const wrap = document.createElement('label');
    wrap.className = 'block';
    const name = document.createElement('span');
    name.className = 'mb-1 block text-xs text-ink2';
    name.textContent = label;
    const input = document.createElement('input');
    input.type = 'number';
    input.min = String(min);
    input.max = String(max);
    input.step = '0.01';
    input.value = value.toFixed(2);
    input.className = 'h-10 w-full rounded-lg border border-line bg-bg px-2 text-sm';
    input.addEventListener('change', () => {
      const v = Math.min(max, Math.max(min, Number(input.value) || 0));
      onInput(v);
      input.value = v.toFixed(2);
    });
    wrap.append(name, input);
    return wrap;
  }

  private bindDrag(clip: HTMLElement, track: Track): void {
    clip.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      const rect = clip.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const mode = x < EDGE ? 'start' : x > rect.width - EDGE ? 'end' : 'move';
      const startX = e.clientX;
      const pps = this.pixelsPerSecond();
      this.ppsLock = pps;
      const orig = { offset: track.offset, trimStart: track.trimStart, trimEnd: track.trimEnd };
      this.dragging = true;
      clip.setPointerCapture(e.pointerId);
      const move = (ev: PointerEvent) => {
        const dt = (ev.clientX - startX) / pps;
        if (mode === 'move') {
          track.offset = Math.max(0, orig.offset + dt);
        } else if (mode === 'start') {
          const next = clamp(orig.trimStart + dt, 0, orig.trimEnd - MIN_SPAN);
          const applied = next - orig.trimStart;
          track.trimStart = next;
          track.offset = Math.max(0, orig.offset + applied);
        } else {
          track.trimEnd = clamp(orig.trimEnd + dt, orig.trimStart + MIN_SPAN, track.buffer.duration);
        }
        this.layout();
      };
      const up = () => {
        clip.removeEventListener('pointermove', move);
        clip.removeEventListener('pointerup', up);
        this.dragging = false;
        this.ppsLock = 0;
        this.layout();
        this.drawClip(track);
        this.q('[data-summary]').textContent = fill(this.text.trackSummary, {
          n: this.tracks.length,
          time: formatTime(this.timelineDuration(), true),
        });
      };
      clip.addEventListener('pointermove', move);
      clip.addEventListener('pointerup', up);
    });
  }

  private layout(): void {
    const pps = this.pixelsPerSecond();
    const inner = this.q<HTMLElement>('[data-inner]');
    inner.style.width = `${Math.max(this.q('[data-scroll]').clientWidth, this.timelineDuration() * pps)}px`;
    for (const track of this.tracks) {
      const clip = this.root.querySelector<HTMLElement>(`[data-clip="${track.id}"]`);
      if (!clip) continue;
      const span = Math.max(MIN_SPAN, track.trimEnd - track.trimStart);
      clip.style.left = `${track.offset * pps}px`;
      clip.style.width = `${Math.max(28, span * pps)}px`;
    }
    this.updatePlayhead();
    const summary = this.root.querySelector('[data-summary]');
    if (summary && this.tracks.length > 0) {
      summary.textContent = fill(this.text.trackSummary, {
        n: this.tracks.length,
        time: formatTime(this.timelineDuration(), true),
      });
    }
  }

  /** Playback tick: only the playhead moves, so the clip boxes stay untouched. */
  private updatePlayhead(): void {
    const pps = this.pixelsPerSecond();
    this.q<HTMLElement>('[data-playhead]').style.transform = `translateX(${this.playhead * pps}px)`;
  }

  private drawClip(track: Track): void {
    const canvas = this.root.querySelector<HTMLCanvasElement>(`[data-wave="${track.id}"]`);
    if (!canvas || canvas.clientWidth < 2) return;
    const peaks = computePeaks(track.buffer, Math.round(canvas.clientWidth), {
      start: track.trimStart,
      end: track.trimEnd,
    });
    drawWaveform(canvas, peaks, getComputedStyle(canvas).color);
  }

  private seekEvent(e: PointerEvent): void {
    const inner = this.q('[data-inner]').getBoundingClientRect();
    const x = e.clientX - inner.left;
    this.playhead = clamp(x / this.pixelsPerSecond(), 0, this.timelineDuration());
    this.layout();
    if (this.source) void this.play();
  }

  private mixArgs() {
    return this.tracks.map((t) => ({
      buffer: t.buffer,
      offset: t.offset,
      trimStart: t.trimStart,
      trimEnd: t.trimEnd,
      gain: t.gain,
      pan: t.pan,
      mute: t.mute,
      solo: t.solo,
    }));
  }

  private async play(): Promise<void> {
    if (this.tracks.length === 0 || this.busy) return;
    this.stopPlayback(false);
    const { buffer } = renderMix(this.mixArgs(), this.masterGain());
    const ctx = new AudioContext();
    this.ctx = ctx;
    if (ctx.state === 'suspended') await ctx.resume();
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    const from = Math.min(this.playhead, Math.max(0, buffer.duration - 0.05));
    this.playFrom = from;
    this.playAnchor = ctx.currentTime;
    src.start(0, from);
    src.onended = () => {
      if (this.source === src) this.stopPlayback(true);
    };
    this.source = src;
    this.playTimer = window.setInterval(() => {
      if (!this.ctx) return;
      this.playhead = this.playFrom + (this.ctx.currentTime - this.playAnchor);
      this.updatePlayhead();
    }, 50);
  }

  private stopPlayback(reset: boolean): void {
    window.clearInterval(this.playTimer);
    this.playTimer = 0;
    if (this.source) {
      try {
        this.source.stop();
      } catch {
        /* already stopped */
      }
    }
    this.source = null;
    if (this.ctx) void this.ctx.close();
    this.ctx = null;
    if (reset) {
      this.playhead = 0;
      this.layout();
    }
  }

  private async doExport(): Promise<void> {
    if (this.tracks.length === 0 || this.busy) return;
    this.stopPlayback(false);
    this.busy = true;
    const exportBtn = this.q<HTMLButtonElement>('[data-export]');
    exportBtn.disabled = true;
    const original = exportBtn.innerHTML;
    exportBtn.textContent = this.text.rendering;
    const status = this.q('[data-status]');
    status.textContent = this.text.renderingStatus;
    try {
      const { buffer, pulledDownDb } = renderMix(this.mixArgs(), this.masterGain());
      if (pulledDownDb > 0.05) {
        showToast(this.toastRoot(), 'info', fill(this.text.mixPulled, { db: pulledDownDb.toFixed(1) }));
      }
      const fmt = getFormat(this.q<HTMLSelectElement>('[data-format]').value);
      status.textContent = fill(this.text.encoding, { ext: fmt.ext.toUpperCase() });
      const blob = await encodeFor(fmt, buffer);
      const filename = `mix.${fmt.ext}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      status.textContent = fill(this.text.exported, { file: filename });
      showToast(this.toastRoot(), 'success', fill(this.text.saved, { file: filename }));
    } catch (err) {
      console.error(err);
      status.textContent = '';
      showToast(this.toastRoot(), 'error', this.text.exportFail);
    } finally {
      exportBtn.innerHTML = original;
      this.busy = false;
      this.renderTracks();
    }
  }
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

function panLabel(v: number): string {
  if (Math.abs(v) < 1) return 'C';
  return v < 0 ? `L ${Math.abs(v)}` : `R ${v}`;
}

export function initMixers(): void {
  document.querySelectorAll<HTMLElement>('[data-audio-mixer]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    const config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    new Mixer(root, config);
  });
}
