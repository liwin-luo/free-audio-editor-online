import { clickInterval, clickTrack, beatsPerBar } from './metronome';
import { encodeFor, getFormat } from './encoders';
import { showToast } from './messages';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';

class Metronome {
  private ctx: AudioContext | null = null;
  private playing = false;
  private timer = 0;
  private nextTime = 0;
  private beat = 0;
  private nodes: OscillatorNode[] = [];
  private busy = false;
  private readonly bpmEl: HTMLInputElement;
  private readonly bpmLabel: HTMLElement;
  private readonly gapEl: HTMLElement;
  private readonly meterEl: HTMLSelectElement;
  private readonly barsEl: HTMLSelectElement;
  private readonly playBtn: HTMLButtonElement;
  private readonly formatEl: HTMLSelectElement;
  private readonly exportBtn: HTMLButtonElement;

  constructor(
    private root: HTMLElement,
    private text: EditorText,
  ) {
    this.bpmEl = root.querySelector('[data-metro-bpm]')!;
    this.bpmLabel = root.querySelector('[data-metro-bpm-label]')!;
    this.gapEl = root.querySelector('[data-metro-gap]')!;
    this.meterEl = root.querySelector('[data-metro-meter]')!;
    this.barsEl = root.querySelector('[data-metro-bars]')!;
    this.playBtn = root.querySelector('[data-metro-play]')!;
    this.formatEl = root.querySelector('[data-format]')!;
    this.exportBtn = root.querySelector('[data-export]')!;
    this.paint();
    this.bpmEl.addEventListener('input', () => {
      this.paint();
      if (this.playing) this.start();
    });
    this.meterEl.addEventListener('change', () => {
      if (this.playing) this.start();
    });
    this.playBtn.addEventListener('click', () => (this.playing ? this.stop() : this.start()));
    this.exportBtn.addEventListener('click', () => void this.exportFile());
  }

  private bpm(): number {
    return Number(this.bpmEl.value);
  }

  private paint(): void {
    const bpm = this.bpm();
    this.bpmLabel.textContent = String(bpm);
    this.gapEl.textContent = `${clickInterval(bpm).toFixed(2)} s`;
  }

  private ensure(): AudioContext {
    if (!this.ctx) this.ctx = new AudioContext();
    return this.ctx;
  }

  private start(): void {
    const ctx = this.ensure();
    void ctx.resume();
    this.stopNodes();
    window.clearTimeout(this.timer);
    this.playing = true;
    this.beat = 0;
    this.nextTime = ctx.currentTime + 0.05;
    this.playBtn.setAttribute('aria-pressed', 'true');
    this.playBtn.textContent = this.text.metroStop;
    this.pump();
  }

  private stop(): void {
    this.playing = false;
    window.clearTimeout(this.timer);
    this.stopNodes();
    this.playBtn.setAttribute('aria-pressed', 'false');
    this.playBtn.textContent = this.text.metroPlay;
  }

  private stopNodes(): void {
    for (const osc of this.nodes) {
      try {
        osc.stop();
      } catch {
        /* already stopped */
      }
      osc.disconnect();
    }
    this.nodes = [];
  }

  private pump = (): void => {
    if (!this.playing || !this.ctx) return;
    const interval = clickInterval(this.bpm());
    const perBar = beatsPerBar(this.meterEl.value);
    const horizon = this.ctx.currentTime + 0.2;
    while (this.nextTime < horizon) {
      this.schedule(this.nextTime, this.beat % perBar === 0);
      this.nextTime += interval;
      this.beat++;
    }
    this.timer = window.setTimeout(this.pump, 50);
  };

  private schedule(time: number, accent: boolean): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 1000;
    const amp = accent ? 0.8 : 0.28;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(amp, time + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.02);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.03);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
      const i = this.nodes.indexOf(osc);
      if (i >= 0) this.nodes.splice(i, 1);
    };
    this.nodes.push(osc);
  }

  private async exportFile(): Promise<void> {
    if (this.busy) return;
    this.busy = true;
    const original = this.exportBtn.innerHTML;
    this.exportBtn.disabled = true;
    this.exportBtn.textContent = this.text.rendering;
    try {
      const ctx = this.ensure();
      const bpm = this.bpm();
      const samples = clickTrack(bpm, this.meterEl.value, Number(this.barsEl.value), ctx.sampleRate);
      const buffer = ctx.createBuffer(1, samples.length, ctx.sampleRate);
      buffer.getChannelData(0).set(samples);
      const fmt = getFormat(this.formatEl.value);
      const blob = await encodeFor(fmt, buffer);
      const filename = `metronome-${bpm}.${fmt.ext}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      showToast(document.querySelector('[data-toast-root]'), 'success', fill(this.text.saved, { file: filename }));
    } catch (err) {
      console.error(err);
      showToast(document.querySelector('[data-toast-root]'), 'error', this.text.exportFail);
    } finally {
      this.exportBtn.innerHTML = original;
      this.exportBtn.disabled = false;
      this.busy = false;
    }
  }
}

export function initMetronome(): void {
  document.querySelectorAll<HTMLElement>('[data-metronome]').forEach((root) => {
    const text = JSON.parse(root.dataset.i18n || '{}') as EditorText;
    new Metronome(root, text);
  });
}
