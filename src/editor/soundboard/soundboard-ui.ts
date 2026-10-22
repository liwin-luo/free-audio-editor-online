/**
 * Soundboard controller. One board per page: clips play overlapped from keys
 * or taps, presets swap the sound set, layouts restyle the grid, and the board
 * travels as a JSON file. Nothing is stored — closing the tab is the undo.
 */
import { ensureSynth, SOUND_LABELS } from './synth-defaults';
import { buildBoardJson, encodeWavBase64, parseBoardJson, PALETTE } from './board-file';
import { showToast } from '../messages';
import { fill } from '../../i18n/inline';

interface SbText {
  sbUpload: string;
  sbStopAll: string;
  sbExportBoard: string;
  sbImportBoard: string;
  sbFullscreen: string;
  sbExitFs: string;
  sbTemplates: string;
  tplGeneral: string;
  tplStream: string;
  tplPodcast: string;
  tplClass: string;
  tplBlank: string;
  tplConfirm: string;
  sbName: string;
  sbColor: string;
  sbPreview: string;
  sbStopPreview: string;
  sbUseAll: string;
  sbApplyTrim: string;
  sbTrimmed: string;
  sbExportWav: string;
  sbReplace: string;
  sbReplaced: string;
  sbDelete: string;
  sbConfirmDelete: string;
  sbAddSound: string;
  sbEmpty: string;
  sbKeyHint: string;
  sbRecAdded: string;
  sbImported: string;
  sbImportNone: string;
  sbImportBad: string;
  sbExported: string;
  sbPlayAria: string;
  sbEditAria: string;
  sbTooLong: string;
  record: string;
  stop: string;
  volume: string;
  micBlocked: string;
  recUnavailable: string;
  decodeFail: string;
  exportFail: string;
}

interface Sound {
  id: string;
  name: string;
  color: string;
  buffer: AudioBuffer;
  duration: number;
  active: Set<AudioBufferSourceNode>;
}

interface Preset {
  id: string;
  labelKey: keyof SbText;
  descKey: keyof SbText;
  sounds: string[];
}

const PRESETS: Preset[] = [
  { id: 'general', labelKey: 'tplGeneral', descKey: 'tplGeneral', sounds: ['airhorn', 'boom', 'sadTrombone', 'rimshot', 'buzzer', 'fart', 'applause', 'crickets', 'ding', 'boing', 'coin'] },
  { id: 'stream', labelKey: 'tplStream', descKey: 'tplStream', sounds: ['airhorn', 'boom', 'rimshot', 'sadTrombone', 'buzzer', 'fart', 'applause', 'boing', 'coin', 'ding'] },
  { id: 'podcast', labelKey: 'tplPodcast', descKey: 'tplPodcast', sounds: ['rimshot', 'ding', 'applause', 'sadTrombone', 'buzzer', 'crickets', 'airhorn'] },
  { id: 'class', labelKey: 'tplClass', descKey: 'tplClass', sounds: ['ding', 'buzzer', 'applause', 'boom', 'rimshot', 'airhorn', 'coin'] },
  { id: 'blank', labelKey: 'tplBlank', descKey: 'tplBlank', sounds: [] },
];

const KEYS = '1234567890qwertyuiop'.split('');
/** 135° two-stop gradients for the square layout — one per clip index. */
const GRADS = [
  'linear-gradient(135deg,#EC4899,#BE185D)',
  'linear-gradient(135deg,#F97316,#C2410C)',
  'linear-gradient(135deg,#F59E0B,#B45309)',
  'linear-gradient(135deg,#8B5CF6,#6D28D9)',
  'linear-gradient(135deg,#3B82F6,#1D4ED8)',
  'linear-gradient(135deg,#22C55E,#15803D)',
  'linear-gradient(135deg,#06B6D4,#0E7490)',
  'linear-gradient(135deg,#64748B,#334155)',
];


/** Tile look: the clip's palette color picks its gradient (8 colors, 8 gradients). */
const gradientOf = (colorId: string, fallbackIndex: number): string => {
  const idx = PALETTE.findIndex((p) => p.id === colorId);
  return GRADS[idx >= 0 ? idx : fallbackIndex % GRADS.length];
};

let seq = 0;

class Board {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private sounds: Sound[] = [];
  private curTpl = 'general';
  private dirty = false;
  private cur: Sound | null = null;
  private trim = { s: 0, e: 0 };
  private preview: AudioBufferSourceNode | null = null;
  private rec: MediaRecorder | null = null;
  private recStream: MediaStream | null = null;
  private recTimer = 0;
  private recStart = 0;
  private replaceTarget: Sound | null = null;
  private panelTheme: 'light' | 'dark' = 'light';
  private controlsShown = false;
  private ctlTimer = 0;
  private readonly els: Record<string, HTMLElement>;

  constructor(
    private root: HTMLElement,
    private text: SbText,
  ) {
    this.els = {
      grid: root.querySelector('[data-sb-grid]')!,
      templates: root.querySelector('[data-sb-templates]')!,
      controls: root.querySelector('[data-sb-controls]')!,
      drawer: root.querySelector('[data-sb-drawer]')!,
      drawerTitle: root.querySelector('[data-sb-drawer-title]')!,
      wave: root.querySelector('[data-sb-wave]') as HTMLCanvasElement,
      waveWrap: root.querySelector('[data-sb-wave-wrap]')!,
      sel: root.querySelector('[data-sb-sel]')!,
      h1: root.querySelector('[data-sb-h1]')!,
      h2: root.querySelector('[data-sb-h2]')!,
      tStart: root.querySelector('[data-sb-t-start]')!,
      tEnd: root.querySelector('[data-sb-t-end]')!,
      tLen: root.querySelector('[data-sb-t-len]')!,
      keyhint: root.querySelector('[data-sb-keyhint]')!,
      recordLabel: root.querySelector('[data-sb-record-label]')!,
      fsLabel: root.querySelector('[data-sb-fs-label]')!,
    };
    this.wire();
    this.renderTemplates();
    this.renderBoard();
    void this.applyPreset(PRESETS[0]); // the general board is the opening state
  }

  private toast(kind: 'info' | 'success' | 'error', message: string): void {
    showToast(document.querySelector('[data-toast-root]'), kind, message);
  }

  private ensure(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volumeValue();
      this.master.connect(this.ctx.destination);
    }
    void this.ctx.resume();
    return this.ctx;
  }

  private volumeValue(): number {
    const el = this.root.querySelector('[data-sb-volume]') as HTMLInputElement | null;
    return el ? parseFloat(el.value) : 0.9;
  }

  private fmt(t: number): string {
    const m = Math.floor(t / 60);
    const s = t - m * 60;
    return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`;
  }

  /* ---------- board rendering ---------- */

  private renderBoard(): void {
    const grid = this.els.grid;
    grid.innerHTML = '';
    if (this.sounds.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'col-span-full m-0 py-11 text-center text-sm text-ink2';
      empty.textContent = this.text.sbEmpty;
      grid.appendChild(empty);
      this.appendAddTile(grid);
      return;
    }
    this.sounds.forEach((s, i) => {
      const key = KEYS[i];
      const tile = document.createElement('div');
      tile.dataset.sbTile = s.id;
      tile.tabIndex = 0;
      tile.setAttribute('role', 'button');
      tile.setAttribute('aria-label', fill(this.text.sbPlayAria, { name: s.name }));
      tile.style.background = gradientOf(s.color, i);
      if (s.active.size > 0) tile.classList.add('sb-playing');

      if (key) {
        const badge = document.createElement('span');
        badge.className = 'sb-key font-mono';
        badge.textContent = key.toUpperCase();
        tile.appendChild(badge);
      }
      const name = document.createElement('span');
      name.className = 'sb-name';
      name.textContent = s.name;
      tile.appendChild(name);
      const dur = document.createElement('span');
      dur.className = 'sb-dur font-mono';
      dur.textContent = `${s.duration.toFixed(1)}s`;
      tile.appendChild(dur);
      const prog = document.createElement('span');
      prog.className = 'sb-prog';
      tile.appendChild(prog);
      const edit = document.createElement('button');
      edit.type = 'button';
      edit.className = 'sb-edit';
      edit.setAttribute('aria-label', fill(this.text.sbEditAria, { name: s.name }));
      edit.innerHTML =
        '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="m11.5 2.5 2 2L6 12l-2.7.7L4 10z"/></svg>';
      edit.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openDrawer(s);
      });
      tile.appendChild(edit);
      tile.addEventListener('click', () => this.play(s));
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.play(s);
        }
      });
      grid.appendChild(tile);
    });
    this.appendAddTile(grid);
  }

  /** The dashed "add sound" affordance closes every layout, on every board. */
  private appendAddTile(grid: HTMLElement): void {
    const add = document.createElement('button');
    add.type = 'button';
    add.className = 'sb-add';
    add.setAttribute('aria-label', this.text.sbAddSound);
    add.innerHTML = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M8 2.5v11M2.5 8h11"/></svg><span>${this.text.sbAddSound}</span>`;
    add.addEventListener('click', () => this.pickFiles());
    grid.appendChild(add);
  }

  private tileOf(s: Sound): HTMLElement | null {
    return this.els.grid.querySelector(`[data-sb-tile="${s.id}"]`);
  }

  private renderTemplates(): void {
    const bar = this.els.templates;
    bar.innerHTML = '';
    const label = document.createElement('span');
    label.className = 'me-1 text-xs text-ink3';
    label.textContent = this.text.sbTemplates;
    bar.appendChild(label);
    for (const p of PRESETS) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.dataset.tpl = p.id;
      b.textContent = this.text[p.labelKey];
      b.title = this.text[p.descKey];
      b.setAttribute('aria-pressed', String(p.id === this.curTpl));
      b.addEventListener('click', () => this.requestPreset(p, b));
      bar.appendChild(b);
    }
    this.els.keyhint.textContent = this.text.sbKeyHint;
  }

  /* ---------- playback ---------- */

  private play(s: Sound): void {
    const ctx = this.ensure();
    const src = ctx.createBufferSource();
    src.buffer = s.buffer;
    src.connect(this.master!);
    s.active.add(src);
    const tile = this.tileOf(s);
    if (tile) {
      tile.classList.add('sb-playing');
      const prog = tile.querySelector('.sb-prog') as HTMLElement;
      prog.style.animation = 'none';
      void prog.offsetWidth;
      prog.style.animation = `sb-prog ${s.duration}s linear forwards`;
    }
    src.onended = () => {
      s.active.delete(src);
      if (s.active.size === 0) {
        const t = this.tileOf(s);
        if (t) {
          t.classList.remove('sb-playing');
          (t.querySelector('.sb-prog') as HTMLElement).style.animation = 'none';
        }
      }
    };
    src.start();
  }

  private stopAll(): void {
    for (const s of this.sounds) {
      for (const src of s.active) {
        try {
          src.stop();
        } catch {
          /* already stopped */
        }
      }
    }
    if (this.preview) {
      try {
        this.preview.stop();
      } catch {
        /* already stopped */
      }
      this.preview = null;
      this.syncPreviewBtn();
    }
  }

  /* ---------- presets and layouts ---------- */

  private requestPreset(p: Preset, btn: HTMLElement): void {
    if (p.id === this.curTpl && !this.dirty) return;
    if (this.dirty && btn.dataset.arm !== '1') {
      btn.dataset.arm = '1';
      btn.classList.add('sb-armed');
      btn.textContent = this.text.tplConfirm;
      setTimeout(() => this.renderTemplates(), 2500);
      return;
    }
    void this.applyPreset(p);
  }

  private async applyPreset(p: Preset): Promise<void> {
    this.stopAll();
    this.closeDrawer();
    this.sounds = [];
    this.curTpl = p.id;
    for (const name of p.sounds) {
      const buffer = await ensureSynth(name);
      this.pushSound(buffer, SOUND_LABELS[name] ?? name);
    }
    this.dirty = false;
    this.renderBoard();
    this.renderTemplates();
  }

  /* ---------- adding sounds ---------- */

  private pushSound(buffer: AudioBuffer, name: string, color?: string): Sound {
    const s: Sound = {
      id: `b_${++seq}_${Date.now().toString(36)}`,
      name,
      color: color ?? PALETTE[this.sounds.length % PALETTE.length].id,
      buffer,
      duration: buffer.duration,
      active: new Set(),
    };
    this.sounds.push(s);
    this.dirty = true;
    this.renderBoard();
    return s;
  }

  private async decodeClip(file: File): Promise<AudioBuffer> {
    const ctx = this.ensure();
    return ctx.decodeAudioData(await file.arrayBuffer());
  }

  private pickFiles(): void {
    this.ensure();
    (this.root.querySelector('[data-sb-file]') as HTMLInputElement).click();
  }

  private async onFiles(files: File[]): Promise<void> {
    if (files.length === 0) return;
    if (this.replaceTarget) {
      const s = this.replaceTarget;
      this.replaceTarget = null;
      try {
        const buf = await this.decodeClip(files[0]);
        s.buffer = buf;
        s.duration = buf.duration;
        this.dirty = true;
        const tile = this.tileOf(s);
        if (tile) (tile.querySelector('.sb-dur') as HTMLElement).textContent = `${s.duration.toFixed(1)}s`;
        if (this.cur === s) this.drawWave();
        this.toast('success', fill(this.text.sbReplaced, { name: s.name }));
      } catch {
        this.toast('error', this.text.decodeFail);
      }
      return;
    }
    for (const f of files) {
      try {
        const buf = await this.decodeClip(f);
        if (buf.duration > 60) {
          this.toast('info', this.text.sbTooLong);
          continue;
        }
        this.pushSound(buf, cleanName(f.name));
      } catch {
        this.toast('error', `${f.name}: ${this.text.decodeFail}`);
      }
    }
  }

  /* ---------- recording ---------- */

  private syncRecBtn(): void {
    const btn = this.root.querySelector('[data-sb-record]')!;
    const label = this.els.recordLabel;
    if (this.rec) {
      btn.classList.add('sb-recording');
      btn.setAttribute('aria-pressed', 'true');
      label.textContent = `${this.text.stop} ${((Date.now() - this.recStart) / 1000).toFixed(1)}s`;
    } else {
      btn.classList.remove('sb-recording');
      btn.setAttribute('aria-pressed', 'false');
      label.textContent = this.text.record;
    }
  }

  private async toggleRecord(): Promise<void> {
    if (this.rec) {
      this.rec.stop();
      return;
    }
    this.ensure();
    if (!navigator.mediaDevices?.getUserMedia) {
      this.toast('error', this.text.recUnavailable);
      return;
    }
    try {
      this.recStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      this.toast('error', this.text.micBlocked);
      return;
    }
    const mime = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
    const rec = new MediaRecorder(this.recStream, { mimeType: mime });
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => chunks.push(e.data);
    rec.onstop = async () => {
      window.clearInterval(this.recTimer);
      this.recStream!.getTracks().forEach((t) => t.stop());
      this.rec = null;
      this.syncRecBtn();
      try {
        const buf = await this.ensure().decodeAudioData(await new Blob(chunks, { type: mime }).arrayBuffer());
        this.pushSound(buf, `${this.text.record} ${new Date().toTimeString().slice(0, 5)}`, 'rose');
        this.toast('success', this.text.sbRecAdded);
      } catch {
        this.toast('error', this.text.decodeFail);
      }
    };
    this.rec = rec;
    this.recStart = Date.now();
    rec.start();
    this.syncRecBtn();
    this.recTimer = window.setInterval(() => this.syncRecBtn(), 200);
  }

  /* ---------- trim drawer ---------- */

  private openDrawer(s: Sound): void {
    this.cur = s;
    this.trim = { s: 0, e: s.duration };
    this.stopPreview();
    (this.root.querySelector('[data-sb-name]') as HTMLInputElement).value = s.name;
    this.els.drawerTitle.textContent = s.name;
    this.renderSwatches();
    this.els.drawer.hidden = false;
    if (document.fullscreenElement) this.showControls();
    requestAnimationFrame(() => {
      this.drawWave();
      this.layoutHandles();
      this.els.drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  private closeDrawer(): void {
    this.stopPreview();
    this.els.drawer.hidden = true;
    this.cur = null;
  }

  private renderSwatches(): void {
    const box = this.root.querySelector('[data-sb-swatches]')!;
    box.innerHTML = '';
    if (!this.cur) return;
    for (const p of PALETTE) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sb-swatch';
      b.style.background = p.hex;
      b.setAttribute('aria-label', p.id);
      b.setAttribute('aria-pressed', String(this.cur.color === p.id));
      b.addEventListener('click', () => {
        if (!this.cur) return;
        this.cur.color = p.id;
        this.dirty = true;
        const tile = this.tileOf(this.cur);
        if (tile) tile.style.background = gradientOf(p.id, 0);
        this.renderSwatches();
      });
      box.appendChild(b);
    }
  }

  private drawWave(): void {
    if (!this.cur) return;
    const canvas = this.els.wave as HTMLCanvasElement;
    const dpr = window.devicePixelRatio || 1;
    const w = this.els.waveWrap.clientWidth;
    const h = this.els.waveWrap.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx2d = canvas.getContext('2d')!;
    ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx2d.clearRect(0, 0, w, h);
    const data = this.cur.buffer.getChannelData(0);
    const step = data.length / w;
    const styles = getComputedStyle(document.documentElement);
    ctx2d.fillStyle = styles.getPropertyValue('--color-ink3').trim() || '#71717a';
    for (let x = 0; x < w; x++) {
      let peak = 0;
      const a = Math.floor(x * step);
      const b = Math.min(data.length, Math.floor((x + 1) * step));
      const hop = Math.max(1, Math.floor(step / 50));
      for (let i = a; i < b; i += hop) {
        const v = Math.abs(data[i]);
        if (v > peak) peak = v;
      }
      const bar = Math.max(1, peak * (h - 8));
      ctx2d.fillRect(x, (h - bar) / 2, 1, bar);
    }
  }

  private layoutHandles(): void {
    if (!this.cur) return;
    const w = this.els.waveWrap.clientWidth;
    const total = this.cur.duration;
    const x1 = (this.trim.s / total) * w;
    const x2 = (this.trim.e / total) * w;
    this.els.h1.style.transform = `translateX(${x1}px)`;
    this.els.h2.style.transform = `translateX(${x2}px)`;
    this.els.sel.style.transform = `translateX(${x1}px)`;
    this.els.sel.style.width = `${x2 - x1}px`;
    this.els.tStart.textContent = this.fmt(this.trim.s);
    this.els.tEnd.textContent = this.fmt(this.trim.e);
    this.els.tLen.textContent = this.fmt(this.trim.e - this.trim.s);
  }

  private bindHandle(el: HTMLElement, which: 's' | 'e'): void {
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* synthetic events may not have a capture target */
      }
      const move = (ev: PointerEvent) => {
        if (!this.cur) return;
        const w = this.els.waveWrap.clientWidth;
        const min = which === 's' ? 0 : this.trim.s + 0.05;
        const max = which === 's' ? this.trim.e - 0.05 : this.cur.duration;
        const t = ((ev.clientX - this.els.waveWrap.getBoundingClientRect().left) / w) * this.cur.duration;
        this.trim[which] = Math.min(max, Math.max(min, t));
        this.layoutHandles();
      };
      const up = () => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerup', up);
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up);
    });
  }

  private stopPreview(): void {
    if (this.preview) {
      try {
        this.preview.stop();
      } catch {
        /* already stopped */
      }
      this.preview = null;
    }
    this.syncPreviewBtn();
  }

  private syncPreviewBtn(): void {
    const btn = this.root.querySelector('[data-sb-preview]')!;
    btn.textContent = this.preview ? this.text.sbStopPreview : this.text.sbPreview;
    btn.setAttribute('aria-pressed', String(!!this.preview));
  }

  private applyTrim(): void {
    if (!this.cur) return;
    const ctx = this.ensure();
    const sr = this.cur.buffer.sampleRate;
    const a = Math.floor(this.trim.s * sr);
    const b = Math.floor(this.trim.e * sr);
    const n = b - a;
    if (n < 1) return;
    const out = ctx.createBuffer(this.cur.buffer.numberOfChannels, n, sr);
    for (let c = 0; c < this.cur.buffer.numberOfChannels; c++) {
      out.getChannelData(c).set(this.cur.buffer.getChannelData(c).subarray(a, b));
    }
    this.cur.buffer = out;
    this.cur.duration = out.duration;
    this.dirty = true;
    this.trim = { s: 0, e: out.duration };
    const tile = this.tileOf(this.cur);
    if (tile) (tile.querySelector('.sb-dur') as HTMLElement).textContent = `${this.cur.duration.toFixed(1)}s`;
    this.drawWave();
    this.layoutHandles();
    this.toast('success', fill(this.text.sbTrimmed, { sec: this.cur.duration.toFixed(2) }));
  }

  private exportWav(): void {
    if (!this.cur) return;
    this.ensure();
    const base64 = encodeWavBase64(this.cur.buffer);
    const bytes = Uint8Array.from(atob(base64), (ch) => ch.charCodeAt(0));
    this.download(`${this.cur.name}.wav`, new Blob([bytes], { type: 'audio/wav' }));
  }

  private download(name: string, blob: Blob): void {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  }

  /* ---------- board file ---------- */

  private async exportBoard(): Promise<void> {
    if (this.sounds.length === 0) return;
    this.ensure();
    const clips = this.sounds.map((s) => ({
      id: s.id,
      name: s.name,
      color: s.color,
      duration: Number(s.duration.toFixed(3)),
      sampleRate: s.buffer.sampleRate,
      audioB64: encodeWavBase64(s.buffer),
    }));
    const json = buildBoardJson(clips);
    this.download(`soundboard-${new Date().toISOString().slice(0, 10)}.json`, new Blob([json], { type: 'application/json' }));
    this.toast('success', fill(this.text.sbExported, { n: String(this.sounds.length) }));
  }

  private async importBoard(file: File): Promise<void> {
    this.ensure();
    let clips;
    try {
      clips = parseBoardJson(await file.text());
    } catch {
      this.toast('error', this.text.sbImportBad);
      return;
    }
    let ok = 0;
    const ctx = this.ensure();
    for (const clip of clips) {
      try {
        const bytes = Uint8Array.from(atob(clip.audioB64), (ch) => ch.charCodeAt(0));
        const buf = await ctx.decodeAudioData(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
        this.pushSound(buf, clip.name, clip.color);
        ok++;
      } catch {
        /* one bad clip does not sink the import */
      }
    }
    this.toast(ok ? 'success' : 'error', ok ? fill(this.text.sbImported, { n: String(ok) }) : this.text.sbImportNone);
  }

  /* ---------- fullscreen ---------- */

  private showControls(): void {
    if (!document.fullscreenElement) return;
    this.els.controls.classList.add('sb-controls-shown');
    window.clearTimeout(this.ctlTimer);
    this.ctlTimer = window.setTimeout(() => {
      this.els.controls.classList.remove('sb-controls-shown');
    }, 2600);
  }

  private scheduleControlsHide(): void {
    if (!document.fullscreenElement) return;
    window.clearTimeout(this.ctlTimer);
    this.ctlTimer = window.setTimeout(() => {
      this.els.controls.classList.remove('sb-controls-shown');
    }, 1200);
  }

  private toggleFullscreen(): void {
    if (document.fullscreenElement) {
      const doc = document as Document & { webkitExitFullscreen?: () => Promise<void> | void };
      const exit = doc.exitFullscreen || doc.webkitExitFullscreen;
      const r = exit && exit.call(document);
      if (r && typeof Promise === 'function' && r instanceof Promise) r.catch(() => {});
      return;
    }
    const el = this.root as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> | void };
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (req) {
      const r = req.call(el) as Promise<void> | undefined;
      if (r && typeof r.catch === 'function') r.catch(() => {});
    }
  }

  /* ---------- panel theme ---------- */

  /** The panel follows the page theme (header toggle, system, …) live. */
  private followPageTheme(): void {
    this.panelTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    this.root.dataset.sbTheme = this.panelTheme;
  }

  /* ---------- wiring ---------- */

  private wire(): void {
    const q = <T extends HTMLElement>(sel: string) => this.root.querySelector(sel) as T;
    q('[data-sb-upload]').addEventListener('click', () => this.pickFiles());
    q('[data-sb-record]').addEventListener('click', () => void this.toggleRecord());
    q('[data-sb-stop]').addEventListener('click', () => this.stopAll());
    q('[data-sb-export-board]').addEventListener('click', () => void this.exportBoard());
    q('[data-sb-import-board]').addEventListener('click', () => (q<HTMLInputElement>('[data-sb-board]').click()));
    q('[data-sb-fullscreen]').addEventListener('click', () => this.toggleFullscreen());
    this.followPageTheme();
    new MutationObserver(() => this.followPageTheme()).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    q('[data-sb-volume]').addEventListener('input', (e) => {
      if (this.master) this.master.gain.value = parseFloat((e.target as HTMLInputElement).value);
    });
    q('[data-sb-file]').addEventListener('change', (e) => {
      const input = e.target as HTMLInputElement;
      const files = [...(input.files ?? [])];
      input.value = '';
      void this.onFiles(files);
    });
    q('[data-sb-board]').addEventListener('change', (e) => {
      const input = e.target as HTMLInputElement;
      const f = input.files?.[0];
      input.value = '';
      if (f) void this.importBoard(f);
    });
    q('[data-sb-drawer-close]').addEventListener('click', () => this.closeDrawer());
    q('[data-sb-name]').addEventListener('input', (e) => {
      if (!this.cur) return;
      this.dirty = true;
      this.cur.name = (e.target as HTMLInputElement).value.trim().slice(0, 24) || this.cur.name.slice(0, 24) || 'Sound';
      this.els.drawerTitle.textContent = this.cur.name;
      const tile = this.tileOf(this.cur);
      if (tile) (tile.querySelector('.sb-name') as HTMLElement).textContent = this.cur.name;
    });
    q('[data-sb-preview]').addEventListener('click', () => {
      if (this.preview || !this.cur) {
        this.stopPreview();
        return;
      }
      const ctx = this.ensure();
      const src = ctx.createBufferSource();
      src.buffer = this.cur.buffer;
      src.loop = true;
      src.loopStart = this.trim.s;
      src.loopEnd = this.trim.e;
      src.connect(this.master!);
      src.start(0, this.trim.s);
      this.preview = src;
      this.syncPreviewBtn();
    });
    q('[data-sb-use-all]').addEventListener('click', () => {
      if (!this.cur) return;
      this.trim = { s: 0, e: this.cur.duration };
      this.layoutHandles();
    });
    q('[data-sb-apply-trim]').addEventListener('click', () => this.applyTrim());
    q('[data-sb-wav]').addEventListener('click', () => this.exportWav());
    q('[data-sb-replace]').addEventListener('click', () => {
      if (!this.cur) return;
      this.replaceTarget = this.cur;
      this.pickFiles();
    });
    const del = q('[data-sb-delete]');
    del.addEventListener('click', () => {
      if (!this.cur) return;
      if (del.dataset.arm !== '1') {
        del.dataset.arm = '1';
        del.classList.add('sb-armed');
        del.textContent = this.text.sbConfirmDelete;
        setTimeout(() => {
          del.dataset.arm = '';
          del.classList.remove('sb-armed');
          del.textContent = this.text.sbDelete;
        }, 2500);
        return;
      }
      del.dataset.arm = '';
      del.classList.remove('sb-armed');
      del.textContent = this.text.sbDelete;
      this.stopPreview();
      this.sounds = this.sounds.filter((x) => x !== this.cur);
      this.dirty = true;
      this.closeDrawer();
      this.renderBoard();
    });
    this.bindHandle(this.els.h1, 's');
    this.bindHandle(this.els.h2, 'e');
    document.addEventListener('keydown', (e) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || target?.isContentEditable) return;
      if (e.key === 'Escape') {
        this.stopAll();
        return;
      }
      const i = KEYS.indexOf(e.key.toLowerCase());
      if (i >= 0 && this.sounds[i]) {
        e.preventDefault();
        this.play(this.sounds[i]);
      }
    });
    document.addEventListener('fullscreenchange', () => {
      const fs = !!document.fullscreenElement;
      this.root.classList.toggle('sb-fs', fs);
      this.els.fsLabel.textContent = fs ? this.text.sbExitFs : this.text.sbFullscreen;
      if (fs) {
        this.showControls();
      } else {
        this.els.controls.classList.remove('sb-controls-shown');
        window.clearTimeout(this.ctlTimer);
      }
    });
    // Immersive reveal: pointer to the top edge (tap on touch) shows the
    // controls; they hide again after a short idle, like a video player.
    this.els.controls.addEventListener('pointerenter', () => window.clearTimeout(this.ctlTimer));
    this.els.controls.addEventListener('pointerleave', () => this.scheduleControlsHide());
    document.addEventListener('pointermove', (e) => {
      if (!document.fullscreenElement) return;
      if (e.clientY <= 72) this.showControls();
    });
    document.addEventListener('pointerdown', (e) => {
      if (!document.fullscreenElement) return;
      if (e.clientY <= 72) this.showControls();
    });
    window.addEventListener('resize', () => {
      if (this.cur && !this.els.drawer.hidden) {
        this.drawWave();
        this.layoutHandles();
      }
    });
    document.addEventListener('dragover', (e) => e.preventDefault());
    document.addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.dataTransfer?.files.length) void this.onFiles([...e.dataTransfer.files]);
    });
  }
}

function cleanName(name: string): string {
  return name.replace(/\.[a-z0-9]{1,5}$/i, '').slice(0, 24) || 'Sound';
}

export function initSoundboard(): void {
  document.querySelectorAll<HTMLElement>('[data-soundboard]').forEach((root) => {
    if (root.dataset.sbInit === '1') return;
    root.dataset.sbInit = '1';
    const text = JSON.parse(root.getAttribute('data-i18n') || '{}') as SbText;
    new Board(root, text);
  });
}
