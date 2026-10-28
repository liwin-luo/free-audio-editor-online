/**
 * Single-file audio editor: progressive enhancement over the static markup in
 * AudioEditor.astro. All audio processing happens in the browser.
 */
import { formatBytes, formatTime, clamp } from '../lib/format';
import { CIRCLE_DEPTH, CIRCLE_RATE_HZ, CIRCLE_WET } from './circle';
import { snapTempo } from './tempo-snap';
import { computeNormalizeGain, defaultEditState, survivingRanges, type EditState } from './edit-state';
import type { ExportFormat } from './encoders';
import type { SilenceFrames, TimeRange } from './silence';
import type { Peaks } from './waveform';
import { bindDeliveryChips, bindFileOpen, setEmptyHidden } from './delivery';
import { readEditorText, showToast } from './messages';
import { fill } from '../i18n/inline';
import type { EditorText } from '../i18n/types';
import type { EditorConfig } from '../data/tools';

// Heavy modules stay out of the first script. Each promise is shared so a
// second call does not start another fetch.
let waveform: typeof import('./waveform') | undefined;
let waveformP: Promise<typeof import('./waveform')> | undefined;
function loadWaveform() {
  waveformP ??= import('./waveform').then((mod) => {
    waveform = mod;
    return mod;
  });
  return waveformP;
}
function loadProcessor() {
  return import('./processor');
}
function loadEncoders() {
  return import('./encoders');
}
function loadSilence() {
  return import('./silence');
}
function loadLoop() {
  return import('./loop');
}
function loadSplit() {
  return import('./split');
}
function loadBatch() {
  return import('./batch');
}

/** Boost-only shelves keep the "+" at 0. Bipolar shelves (equalizer) show "0 dB" / "−3 dB". */
function dbLabel(value: number, bipolar: boolean): string {
  return `${bipolar && value <= 0 ? '' : '+'}${value} dB`;
}

interface Elements {
  root: HTMLElement;
  dropzone: HTMLElement;
  fileInput: HTMLInputElement;
  workspace: HTMLElement;
  fileName: HTMLElement;
  fileMeta: HTMLElement;
  stage: HTMLElement;
  stageContent: HTMLElement;
  canvas: HTMLCanvasElement;
  selection: HTMLElement;
  handleStart: HTMLElement;
  handleEnd: HTMLElement;
  playhead: HTMLElement;
  zoomIn: HTMLButtonElement;
  zoomOut: HTMLButtonElement;
  reset: HTMLButtonElement;
  play: HTMLButtonElement;
  timecode: HTMLElement;
  status: HTMLElement;
  /** Absent on converter pages (no cut UI) */
  modeKeep: HTMLButtonElement | null;
  modeDelete: HTMLButtonElement | null;
  preciseStart: HTMLInputElement | null;
  preciseEnd: HTMLInputElement | null;
  format: HTMLSelectElement;
  exportBtn: HTMLButtonElement;
  batchList: HTMLElement;
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Editor markup missing: ${selector}`);
  return el;
}

let activeEditor: Editor | null = null;

export class Editor {
  private els: Elements;
  private config: EditorConfig;
  private text: EditorText;

  private buffer: AudioBuffer | null = null;
  private peaks: Peaks | null = null;
  private duration = 0;
  private fileName = 'audio';
  private pps = 100; // pixels per second
  private fitPps = 100;
  private canvasWidth = 0;
  private zoomed = false;

  private state: EditState = defaultEditState();
  private history: EditState[] = [];

  private audioCtx: AudioContext | null = null;
  private playSource: AudioBufferSourceNode | null = null;
  private playing = false;
  private playStartedAt = 0;
  private playOffset = 0;
  private playEnd = 0;
  private playRate = 1;
  private playheadTime = 0;
  private raf = 0;
  private pitchPreview: AudioBuffer | null = null;
  private pitchPreviewKey = '';

  private busy = false;
  /** Files chosen together on a batch page. Length 0 or 1 keeps the single-file export. */
  private queue: File[] = [];
  private silenceFrames: SilenceFrames | null = null;
  private silenceThreshold = -40;
  private silenceMin = 0.35;
  private loopTimes = 4;
  private loopCrossfade = 0.01;
  private splitParts = 2;
  private crushBits = 8;
  private crushHold = 2;
  private drag: { kind: 'new' | 'start' | 'end'; x0: number; anchor: number; sel: { start: number; end: number } } | null = null;

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
      stage: requireEl(root, '[data-stage]'),
      stageContent: requireEl(root, '[data-stage-content]'),
      canvas: requireEl<HTMLCanvasElement>(root, '[data-wave]'),
      selection: requireEl(root, '[data-selection]'),
      handleStart: requireEl(root, '[data-handle-start]'),
      handleEnd: requireEl(root, '[data-handle-end]'),
      playhead: requireEl(root, '[data-playhead]'),
      zoomIn: requireEl<HTMLButtonElement>(root, '[data-zoom-in]'),
      zoomOut: requireEl<HTMLButtonElement>(root, '[data-zoom-out]'),
      reset: requireEl<HTMLButtonElement>(root, '[data-reset]'),
      play: requireEl<HTMLButtonElement>(root, '[data-play]'),
      timecode: requireEl(root, '[data-timecode]'),
      status: requireEl(root, '[data-status]'),
      // Cut-mode UI is absent on converter pages
      modeKeep: root.querySelector<HTMLButtonElement>('[data-mode="keep"]'),
      modeDelete: root.querySelector<HTMLButtonElement>('[data-mode="delete"]'),
      preciseStart: root.querySelector<HTMLInputElement>('[data-precise-start]'),
      preciseEnd: root.querySelector<HTMLInputElement>('[data-precise-end]'),
      format: requireEl<HTMLSelectElement>(root, '[data-format]'),
      exportBtn: requireEl<HTMLButtonElement>(root, '[data-export]'),
      batchList: requireEl(root, '[data-batch-list]'),
    };

    if (config.defaultFormat) this.els.format.value = config.defaultFormat;
    // The M4R option only renders on pages that opt in; remove it when the
    // browser cannot encode AAC so export never dead-ends.
    if (config.formats?.includes('m4r')) {
      void loadEncoders()
        .then((enc) => enc.isM4rSupported())
        .then((ok) => {
          if (!ok) {
            this.els.format.querySelector<HTMLOptionElement>('option[value="m4r"]')?.remove();
            this.els.root.querySelector('[data-delivery="m4r"]')?.remove();
            if (this.els.format.value === 'm4r') this.els.format.value = 'mp3-192';
          }
        });
    }
    bindDeliveryChips(this.els.root, this.els.format);
    this.bind();
    this.applyState(this.state, false);
  }

  // ---------- DOM wiring ----------

  private bind(): void {
    const { els } = this;

    if (this.config.silence) {
      const threshold = els.root.querySelector<HTMLInputElement>('[data-silence-threshold]');
      const gap = els.root.querySelector<HTMLInputElement>('[data-silence-gap]');
      const thresholdLabel = els.root.querySelector('[data-silence-threshold-label]');
      const gapLabel = els.root.querySelector('[data-silence-gap-label]');
      threshold?.addEventListener('input', () => {
        this.silenceThreshold = Number(threshold.value);
        if (thresholdLabel) thresholdLabel.textContent = `${Math.round(this.silenceThreshold)} dB`;
        this.updateSilenceStatus();
      });
      gap?.addEventListener('input', () => {
        this.silenceMin = Number(gap.value);
        if (gapLabel) gapLabel.textContent = `${this.silenceMin.toFixed(2)} s`;
        this.updateSilenceStatus();
      });
    }

    if (this.config.loop) {
      const times = els.root.querySelector<HTMLInputElement>('[data-loop-times]');
      const join = els.root.querySelector<HTMLInputElement>('[data-loop-join]');
      const timesLabel = els.root.querySelector('[data-loop-times-label]');
      const joinLabel = els.root.querySelector('[data-loop-join-label]');
      times?.addEventListener('input', () => {
        this.loopTimes = Number(times.value);
        if (timesLabel) timesLabel.textContent = String(Math.round(this.loopTimes));
        this.updateLoopStatus();
      });
      join?.addEventListener('input', () => {
        this.loopCrossfade = Number(join.value);
        if (joinLabel) joinLabel.textContent = `${this.loopCrossfade.toFixed(2)} s`;
        this.updateLoopStatus();
      });
    }

    if (this.config.split) {
      const parts = els.root.querySelector<HTMLInputElement>('[data-split-parts]');
      const partsLabel = els.root.querySelector('[data-split-parts-label]');
      parts?.addEventListener('input', () => {
        this.splitParts = Number(parts.value);
        if (partsLabel) partsLabel.textContent = String(Math.round(this.splitParts));
        this.updateSplitStatus();
      });
    }

    if (this.config.bitcrush) {
      const bits = els.root.querySelector<HTMLInputElement>('[data-crush-bits]');
      const hold = els.root.querySelector<HTMLInputElement>('[data-crush-hold]');
      const bitsLabel = els.root.querySelector('[data-crush-bits-label]');
      const holdLabel = els.root.querySelector('[data-crush-hold-label]');
      bits?.addEventListener('input', () => {
        this.crushBits = Number(bits.value);
        if (bitsLabel) bitsLabel.textContent = String(Math.round(this.crushBits));
        this.pitchPreview = null;
        this.updateCrushStatus();
      });
      hold?.addEventListener('input', () => {
        this.crushHold = Number(hold.value);
        if (holdLabel) holdLabel.textContent = String(Math.round(this.crushHold));
        this.pitchPreview = null;
        this.updateCrushStatus();
      });
    }

    bindFileOpen(els.dropzone, () => els.fileInput.click());
    els.fileInput.addEventListener('change', () => {
      const files = Array.from(els.fileInput.files ?? []);
      this.takeFiles(files);
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

    // Also accept paste of audio files
    document.addEventListener('paste', (e) => {
      if (activeEditor !== this) return;
      const files = Array.from(e.clipboardData?.files ?? []);
      if (this.config.batch) this.takeFiles(files);
      else if (files[0]) void this.loadFile(files[0]);
    });

    // External loaders (voice recorder, tests) hand over a File via event
    document.addEventListener('editor-load-file', (e) => {
      const file = (e as CustomEvent<File>).detail;
      if (file) this.takeFiles([file]);
    });

    els.zoomIn.addEventListener('click', () => this.setZoom(this.pps * 1.5));
    els.zoomOut.addEventListener('click', () => this.setZoom(this.pps / 1.5));
    els.reset.addEventListener('click', () => this.reset());

    // Waveform interactions (mouse + touch)
    els.stageContent.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    els.stageContent.addEventListener('pointermove', (e) => this.onPointerMove(e));
    els.stageContent.addEventListener('pointerup', (e) => this.onPointerUp(e));
    els.stageContent.addEventListener('pointercancel', () => (this.drag = null));

    els.play.addEventListener('click', () => this.togglePlay());

    els.modeKeep?.addEventListener('click', () => this.setMode('keep'));
    els.modeDelete?.addEventListener('click', () => this.setMode('delete'));

    // Drawer controls (absent when showAdjust is false)
    const fadeToggle = (sel: string, labelSel: string, key: 'fadeIn' | 'fadeOut', suffix = 's') => {
      const input = this.els.root.querySelector<HTMLInputElement>(sel);
      const label = this.els.root.querySelector<HTMLElement>(labelSel);
      if (!input || !label) return;
      input.addEventListener('input', () => (label.textContent = `${Number(input.value).toFixed(1)}${suffix}`));
      input.addEventListener('change', () => this.commit({ [key]: Number(input.value) } as Partial<EditState>));
    };
    fadeToggle('[data-fade-in]', '[data-fade-in-label]', 'fadeIn');
    fadeToggle('[data-fade-out]', '[data-fade-out-label]', 'fadeOut');

    const gain = this.els.root.querySelector<HTMLInputElement>('[data-gain]');
    const gainLabel = this.els.root.querySelector<HTMLElement>('[data-gain-label]');
    if (gain && gainLabel) {
      gain.addEventListener('input', () => (gainLabel.textContent = `${gain.value}%`));
      gain.addEventListener('change', () => this.commit({ gain: Number(gain.value) / 100 }));
    }

    const speed = this.els.root.querySelector<HTMLInputElement>('[data-speed]');
    const speedLabel = this.els.root.querySelector<HTMLElement>('[data-speed-label]');
    if (speed && speedLabel) {
      speed.addEventListener('input', () => (speedLabel.textContent = `${Number(speed.value).toFixed(2)}×`));
      speed.addEventListener('change', () => this.commit({ speed: Number(speed.value) }));
    }

    const reverse = this.els.root.querySelector<HTMLInputElement>('[data-reverse]');
    reverse?.addEventListener('change', () => this.commit({ reverse: reverse.checked }));

    const reverbBind = (sel: string, labelSel: string) => {
      const input = this.els.root.querySelector<HTMLInputElement>(sel);
      const label = this.els.root.querySelector<HTMLElement>(labelSel);
      if (!input || !label) return;
      input.addEventListener('input', () => (label.textContent = `${Math.round(Number(input.value) * 100)}%`));
      input.addEventListener('change', () => this.commit({ reverb: Number(input.value) }));
    };
    reverbBind('[data-reverb]', '[data-reverb-label]');

    const drawerNormalize = this.els.root.querySelector<HTMLInputElement>('[data-normalize]');
    drawerNormalize?.addEventListener('change', () => this.toggleNormalize());

    const undoBtn = this.els.root.querySelector<HTMLButtonElement>('[data-undo]');
    undoBtn?.addEventListener('click', () => this.undo());

    // Optional headline controls (kept in sync with the Adjust drawer)
    const quickReverse = this.els.root.querySelector<HTMLButtonElement>('[data-quick-reverse]');
    quickReverse?.addEventListener('click', () => {
      const next = !this.state.reverse;
      const wasPlaying = this.playing;
      this.commit({ reverse: next });
      if (wasPlaying) {
        this.stopPlayback();
        void this.togglePlay();
      } else if (next) {
        void this.togglePlay();
      }
    });

    const quickNormalize = this.els.root.querySelector<HTMLButtonElement>('[data-quick-normalize]');
    quickNormalize?.addEventListener('click', () => this.toggleNormalize());

    reverbBind('[data-quick-reverb]', '[data-quick-reverb-label]');

    const quickCompress = this.els.root.querySelector<HTMLInputElement>('[data-quick-compress]');
    const quickCompressLabel = this.els.root.querySelector<HTMLElement>('[data-quick-compress-label]');
    if (quickCompress && quickCompressLabel) {
      quickCompress.addEventListener('input', () => (quickCompressLabel.textContent = `${quickCompress.value}%`));
      quickCompress.addEventListener('change', () => this.commit({ compress: Number(quickCompress.value) / 100 }));
    }

    const quickEchoDelay = this.els.root.querySelector<HTMLInputElement>('[data-quick-echo-delay]');
    const quickEchoDelayLabel = this.els.root.querySelector<HTMLElement>('[data-quick-echo-delay-label]');
    if (quickEchoDelay && quickEchoDelayLabel) {
      quickEchoDelay.addEventListener('input', () => (quickEchoDelayLabel.textContent = `${Number(quickEchoDelay.value).toFixed(2)} s`));
      quickEchoDelay.addEventListener('change', () => this.commit({ echoDelay: Number(quickEchoDelay.value) }));
    }
    const quickEchoFeedback = this.els.root.querySelector<HTMLInputElement>('[data-quick-echo-feedback]');
    const quickEchoFeedbackLabel = this.els.root.querySelector<HTMLElement>('[data-quick-echo-feedback-label]');
    if (quickEchoFeedback && quickEchoFeedbackLabel) {
      const pct = () => `${Math.round(Number(quickEchoFeedback.value) * 100)}%`;
      quickEchoFeedback.addEventListener('input', () => (quickEchoFeedbackLabel.textContent = pct()));
      quickEchoFeedback.addEventListener('change', () => this.commit({ echoFeedback: Number(quickEchoFeedback.value) }));
    }

    const quickDistort = this.els.root.querySelector<HTMLInputElement>('[data-quick-distort]');
    const quickDistortLabel = this.els.root.querySelector<HTMLElement>('[data-quick-distort-label]');
    if (quickDistort && quickDistortLabel) {
      this.state.distort = Number(quickDistort.value) / 100;
      quickDistort.addEventListener('input', () => (quickDistortLabel.textContent = `${quickDistort.value}%`));
      quickDistort.addEventListener('change', () => this.commit({ distort: Number(quickDistort.value) / 100 }));
    }

    const quickPanDepth = this.els.root.querySelector<HTMLInputElement>('[data-quick-pan-depth]');
    const quickPanDepthLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pan-depth-label]');
    const quickPanRate = this.els.root.querySelector<HTMLInputElement>('[data-quick-pan-rate]');
    const quickPanRateLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pan-rate-label]');
    if (quickPanDepth && quickPanDepthLabel && quickPanRate && quickPanRateLabel) {
      this.state.panDepth = Number(quickPanDepth.value) / 100;
      this.state.panRate = Number(quickPanRate.value);
      quickPanDepth.addEventListener('input', () => (quickPanDepthLabel.textContent = `${quickPanDepth.value}%`));
      quickPanDepth.addEventListener('change', () => this.commit({ panDepth: Number(quickPanDepth.value) / 100 }));
      quickPanRate.addEventListener('input', () => (quickPanRateLabel.textContent = `${Number(quickPanRate.value).toFixed(2)} Hz`));
      quickPanRate.addEventListener('change', () => this.commit({ panRate: Number(quickPanRate.value) }));
    }

    const quickCircle = this.els.root.querySelector<HTMLButtonElement>('[data-quick-circle]');
    if (quickCircle) {
      this.state.panDepth = CIRCLE_DEPTH;
      this.state.panRate = CIRCLE_RATE_HZ;
      this.state.reverb = CIRCLE_WET;
      quickCircle.addEventListener('click', () => {
        const on = quickCircle.getAttribute('aria-pressed') !== 'true';
        this.commit({
          panDepth: on ? CIRCLE_DEPTH : 0,
          panRate: CIRCLE_RATE_HZ,
          reverb: on ? CIRCLE_WET : 0,
        });
      });
    }

    const quickSpeed = this.els.root.querySelector<HTMLInputElement>('[data-quick-speed]');
    const quickSpeedLabel = this.els.root.querySelector<HTMLElement>('[data-quick-speed-label]');
    if (quickSpeed && quickSpeedLabel) {
      const paint = () => {
        const speed = Number(quickSpeed.value);
        quickSpeedLabel.textContent = `${speed.toFixed(2)}×`;
        this.paintSpeedPresets(speed);
      };
      quickSpeed.addEventListener('input', paint);
      quickSpeed.addEventListener('change', () => this.commit({ speed: Number(quickSpeed.value) }));
      for (const btn of this.els.root.querySelectorAll<HTMLButtonElement>('[data-speed-preset]')) {
        btn.addEventListener('click', () => {
          quickSpeed.value = btn.dataset.speedPreset ?? '1';
          paint();
          this.commit({ speed: Number(quickSpeed.value) });
        });
      }
    }

    const quickTempo = this.els.root.querySelector<HTMLInputElement>('[data-quick-tempo]');
    const quickTempoLabel = this.els.root.querySelector<HTMLElement>('[data-quick-tempo-label]');
    if (quickTempo && quickTempoLabel) {
      this.state.keepPitch = true;
      this.state.speed = snapTempo(Number(quickTempo.value));
      quickTempo.addEventListener('input', () => (quickTempoLabel.textContent = `${Number(quickTempo.value).toFixed(2)}×`));
      quickTempo.addEventListener('change', () =>
        this.commit({ speed: snapTempo(Number(quickTempo.value)), keepPitch: true }),
      );
    }

    const quickPitch = this.els.root.querySelector<HTMLInputElement>('[data-quick-pitch]');
    const quickPitchLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pitch-label]');
    if (quickPitch && quickPitchLabel) {
      const paint = () => {
        const semis = Number(quickPitch.value);
        quickPitchLabel.textContent = formatSemitones(semis);
        this.paintPitchPresets(semis);
      };
      quickPitch.addEventListener('input', paint);
      quickPitch.addEventListener('change', () => this.commit({ pitch: Number(quickPitch.value) }));
      for (const btn of this.els.root.querySelectorAll<HTMLButtonElement>('[data-pitch-preset]')) {
        btn.addEventListener('click', () => {
          quickPitch.value = btn.dataset.pitchPreset ?? '0';
          paint();
          this.commit({ pitch: Number(quickPitch.value) });
        });
      }
    }

    const quickBass = this.els.root.querySelector<HTMLInputElement>('[data-quick-bass]');
    const quickBassLabel = this.els.root.querySelector<HTMLElement>('[data-quick-bass-label]');
    if (quickBass && quickBassLabel) {
      const bipolar = Number(quickBass.min) < 0;
      quickBass.addEventListener('input', () => (quickBassLabel.textContent = dbLabel(Number(quickBass.value), bipolar)));
      quickBass.addEventListener('change', () => this.commit({ bass: Number(quickBass.value) }));
    }

    const fmtHz = (v: number) => (v >= 1000 ? `${(v / 1000).toFixed(1)} kHz` : `${v} Hz`);

    const quickTreble = this.els.root.querySelector<HTMLInputElement>('[data-quick-treble]');
    const quickTrebleLabel = this.els.root.querySelector<HTMLElement>('[data-quick-treble-label]');
    if (quickTreble && quickTrebleLabel) {
      const bipolar = Number(quickTreble.min) < 0;
      quickTreble.addEventListener('input', () => (quickTrebleLabel.textContent = dbLabel(Number(quickTreble.value), bipolar)));
      quickTreble.addEventListener('change', () => this.commit({ treble: Number(quickTreble.value) }));
    }

    const quickMid = this.els.root.querySelector<HTMLInputElement>('[data-quick-mid]');
    const quickMidLabel = this.els.root.querySelector<HTMLElement>('[data-quick-mid-label]');
    if (quickMid && quickMidLabel) {
      quickMid.addEventListener('input', () => {
        const v = Number(quickMid.value);
        quickMidLabel.textContent = `${v > 0 ? '+' : ''}${v} dB`;
      });
      quickMid.addEventListener('change', () => this.commit({ mid: Number(quickMid.value) }));
    }

    const quickLpf = this.els.root.querySelector<HTMLInputElement>('[data-quick-lpf]');
    const quickLpfLabel = this.els.root.querySelector<HTMLElement>('[data-quick-lpf-label]');
    if (quickLpf && quickLpfLabel) {
      quickLpf.addEventListener('input', () => (quickLpfLabel.textContent = fmtHz(Number(quickLpf.value))));
      quickLpf.addEventListener('change', () => this.commit({ lpf: Number(quickLpf.value) }));
    }

    const quickHpf = this.els.root.querySelector<HTMLInputElement>('[data-quick-hpf]');
    const quickHpfLabel = this.els.root.querySelector<HTMLElement>('[data-quick-hpf-label]');
    if (quickHpf && quickHpfLabel) {
      quickHpf.addEventListener('input', () => (quickHpfLabel.textContent = fmtHz(Number(quickHpf.value))));
      quickHpf.addEventListener('change', () => this.commit({ hpf: Number(quickHpf.value) }));
    }

    const quickGain = this.els.root.querySelector<HTMLInputElement>('[data-quick-gain]');
    const quickGainLabel = this.els.root.querySelector<HTMLElement>('[data-quick-gain-label]');
    if (quickGain && quickGainLabel) {
      const paint = () => {
        const percent = Number(quickGain.value);
        quickGainLabel.textContent = `${percent}%`;
        this.paintGainPresets(percent);
      };
      quickGain.addEventListener('input', paint);
      quickGain.addEventListener('change', () => this.commit({ gain: Number(quickGain.value) / 100 }));
      for (const btn of this.els.root.querySelectorAll<HTMLButtonElement>('[data-gain-preset]')) {
        btn.addEventListener('click', () => {
          quickGain.value = btn.dataset.gainPreset ?? '100';
          paint();
          this.commit({ gain: Number(quickGain.value) / 100 });
        });
      }
    }

    els.preciseStart?.addEventListener('change', () => this.applyPrecise());
    els.preciseEnd?.addEventListener('change', () => this.applyPrecise());
    els.root.querySelector('[data-select-all]')?.addEventListener('click', () => {
      if (!this.buffer) return;
      this.pushHistory();
      this.state.sel = { start: 0, end: this.duration };
      this.updateSelectionOverlay();
      this.updatePreciseInputs();
    });

    els.exportBtn.addEventListener('click', () => void this.doExport());

    els.root.addEventListener('pointerdown', () => (activeEditor = this));
    // Keyboard users reach the editor by tabbing, which never fires pointerdown.
    els.root.addEventListener('focusin', () => (activeEditor = this));
    window.addEventListener('themechange', () => this.draw());
    window.addEventListener('resize', () => this.draw());
    document.addEventListener('keydown', (e) => this.onKeydown(e));
  }

  /** File load resets edit state. The circle switch is a preset, so it has to be put back. */
  private applyCircleIfOn(): void {
    const btn = this.els.root.querySelector('[data-quick-circle]');
    if (!btn || btn.getAttribute('aria-pressed') !== 'true') return;
    this.state.panDepth = CIRCLE_DEPTH;
    this.state.panRate = CIRCLE_RATE_HZ;
    this.state.reverb = CIRCLE_WET;
  }

  /** The tempo slider's range is not defaultEditState. File load resets state, so put it back. */
  private applyTempoIfOn(): void {
    const slider = this.els.root.querySelector<HTMLInputElement>('[data-quick-tempo]');
    if (!slider) return;
    this.state.keepPitch = true;
    this.state.speed = snapTempo(Number(slider.value));
  }

  /** File load resets edit state. Drive 0 is the default; the slider start is 40%. */
  private applyDistortIfOn(): void {
    const slider = this.els.root.querySelector<HTMLInputElement>('[data-quick-distort]');
    if (!slider) return;
    this.state.distort = Number(slider.value) / 100;
  }

  private takeFiles(files: File[]): void {
    if (files.length === 0) return;
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

  private async decodeOne(file: File): Promise<AudioBuffer> {
    const data = await file.arrayBuffer();
    const ctx = new AudioContext();
    try {
      return await ctx.decodeAudioData(data);
    } finally {
      await ctx.close();
    }
  }

  // ---------- File loading ----------

  private async loadFile(file: File): Promise<void> {
    if (this.busy) return;
    if (file.size > 300 * 1024 * 1024) {
      showToast(this.toastRoot(), 'error', this.text.tooBig);
      return;
    }
    this.busy = true;
    this.setStatus(this.text.decoding);
    const waveformReady = loadWaveform();
    try {
      const buffer = await this.decodeOne(file);
      await waveformReady;

      this.buffer = buffer;
      this.pitchPreview = null;
      this.duration = buffer.duration;
      this.fileName = file.name.replace(/\.[^.]+$/, '');
      this.history = [];
      this.state = defaultEditState();
      if (this.config.trimLayout) this.state.sel = { start: 0, end: this.duration };
      this.applyCircleIfOn();
      this.applyTempoIfOn();
      this.applyDistortIfOn();

      this.els.fileName.textContent = file.name;
      this.els.fileMeta.textContent = this.showsJobChrome()
        ? `${formatTime(this.duration, true)} · ${this.channelLabel(buffer.numberOfChannels)} · ${this.rateLabel(buffer.sampleRate)} · ${formatBytes(file.size)}`
        : `${formatBytes(file.size)} · ${formatTime(this.duration, true)} · ${Math.round(buffer.sampleRate / 1000)} kHz`;

      setEmptyHidden(this.els.dropzone, true);
      this.els.workspace.classList.remove('hidden');

      this.els.play.disabled = false;
      this.els.exportBtn.disabled = false;
      this.els.format.disabled = false;

      await this.refit(true);
      this.applyState(this.state, false);
      this.updateTimecode();
      this.setStatus(this.text.ready);
      if (this.config.silence) await this.measureSilence();
      if (this.config.loop) await this.updateLoopStatus();
      if (this.config.split) this.updateSplitStatus();
      this.updatePageStatus();
      this.renderQueue();

      if (this.duration > 3600) {
        showToast(this.toastRoot(), 'info', this.text.hourWarning);
      }
    } catch {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.decodeFail);
    } finally {
      this.busy = false;
      // Re-evaluate now that busy is false — the update inside loadFile ran
      // while busy was still true and left the export button disabled.
      this.updateExportState();
    }
  }

  private reset(): void {
    this.stopPlayback();
    this.buffer = null;
    this.queue = [];
    this.renderQueue();
    this.pitchPreview = null;
    this.peaks = null;
    this.state = defaultEditState();
    this.history = [];
    this.playheadTime = 0;
    this.els.workspace.classList.add('hidden');
    setEmptyHidden(this.els.dropzone, false);
    this.els.playhead.style.opacity = '0';
    this.setStatus('');
  }

  // ---------- View / waveform ----------

  private async refit(recomputeFit: boolean): Promise<void> {
    if (!this.buffer) return;
    const { MAX_CANVAS_WIDTH, computePeaks } = await loadWaveform();
    const stageW = this.els.stage.clientWidth || 600;
    if (recomputeFit || !this.zoomed) {
      this.fitPps = stageW / this.duration;
      this.pps = this.fitPps;
      this.zoomed = false;
    }
    this.canvasWidth = Math.min(Math.round(this.duration * this.pps), MAX_CANVAS_WIDTH);
    this.els.stageContent.style.width = `${this.canvasWidth}px`;
    this.peaks = computePeaks(this.buffer, this.canvasWidth);
    this.draw();
    this.updateSelectionOverlay();
  }

  private setZoom(pps: number): void {
    if (!this.buffer || !waveform) return;
    const { MAX_CANVAS_WIDTH, computePeaks } = waveform;
    const maxPps = Math.min(600, MAX_CANVAS_WIDTH / this.duration);
    const next = clamp(pps, this.fitPps, maxPps);
    if (next === this.pps) return;
    this.pps = next;
    this.zoomed = next > this.fitPps * 1.01;
    this.canvasWidth = Math.min(Math.round(this.duration * this.pps), MAX_CANVAS_WIDTH);
    this.els.stageContent.style.width = `${this.canvasWidth}px`;
    if (this.buffer) this.peaks = computePeaks(this.buffer, this.canvasWidth);
    this.draw();
    this.updateSelectionOverlay();
    this.updatePlayhead();
  }

  private draw(): void {
    if (!this.peaks || !waveform) return;
    const styles = getComputedStyle(document.documentElement);
    const neutral = styles.getPropertyValue('--color-ink3').trim() || '#a1a1aa';
    waveform.drawWaveform(this.els.canvas, this.peaks, neutral);
    this.drawSelectionWave();
  }

  /** Repaint the columns inside the selection in the accent color. */
  private drawSelectionWave(): void {
    if (!this.peaks || !waveform) return;
    const sel = this.state.sel;
    if (!sel) return;
    const accent = getComputedStyle(this.els.selection).borderLeftColor || '#0d9488';
    waveform.drawWaveform(this.els.canvas, this.peaks, accent, {
      from: sel.start * this.pps,
      to: sel.end * this.pps,
    });
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }

  private setStatus(msg: string): void {
    this.els.status.textContent = msg;
  }

  private async measureSilence(): Promise<void> {
    if (!this.buffer) return;
    const { measureSilenceFrames } = await loadSilence();
    const channels = Array.from({ length: this.buffer.numberOfChannels }, (_, i) => this.buffer!.getChannelData(i));
    this.silenceFrames = measureSilenceFrames(channels, this.buffer.sampleRate);
    await this.updateSilenceStatus();
  }

  private async updateSilenceStatus(): Promise<void> {
    if (!this.silenceFrames) return;
    const { analyzeSilence, SILENCE_PAD_SEC } = await loadSilence();
    const analysis = analyzeSilence(this.silenceFrames, {
      thresholdDb: this.silenceThreshold,
      minSilenceSec: this.silenceMin,
      padSec: SILENCE_PAD_SEC,
    });
    if (analysis.allBelow) {
      this.setStatus(this.text.silenceKeepFile);
      return;
    }
    const kept = analysis.ranges.reduce((sum, range) => sum + (range.to - range.from), 0);
    const removed = Math.max(0, this.duration - kept);
    this.setStatus(fill(this.text.silenceRemove, { time: `${removed.toFixed(1)} s` }));
  }

  private loopPassSeconds(): number {
    if (!this.buffer) return 0;
    const ranges = survivingRanges(this.duration, this.state);
    const speed = this.state.speed > 0 ? this.state.speed : 1;
    return ranges.reduce((sum, range) => sum + (range.to - range.from), 0) / speed;
  }

  private async updateLoopStatus(): Promise<void> {
    if (!this.config.loop || !this.buffer) return;
    const { LOOP_MAX_SECONDS, loopedDuration } = await loadLoop();
    const dur = loopedDuration(this.loopPassSeconds(), this.loopTimes, this.loopCrossfade);
    this.setStatus(dur > LOOP_MAX_SECONDS ? this.text.loopTooLong : fill(this.text.loopExport, { time: `${dur.toFixed(1)} s` }));
  }

  private updateSplitStatus(): void {
    if (!this.config.split || !this.buffer) return;
    const ranges = survivingRanges(this.duration, this.state);
    const seconds = ranges.reduce((sum, range) => sum + (range.to - range.from), 0);
    const each = seconds / this.splitParts;
    this.setStatus(fill(this.text.splitExport, { n: this.splitParts, time: `${each.toFixed(1)} s` }));
  }

  private updateCrushStatus(): void {
    if (!this.config.bitcrush) return;
    this.setStatus(fill(this.text.crushExport, { bits: Math.round(this.crushBits), hold: Math.round(this.crushHold) }));
  }

  private updatePageStatus(): void {
    if (!this.buffer) return;
    if (this.config.mono) this.setStatus(this.text.monoExport);
    if (this.config.bitcrush) this.updateCrushStatus();
    if (this.config.hz432) this.setStatus(this.text.hz432Export);
  }

  private async pageEffect(buffer: AudioBuffer): Promise<AudioBuffer> {
    if (this.config.mono) return monoAudioBuffer(buffer);
    if (this.config.bitcrush) return crushAudioBuffer(buffer, this.crushBits, this.crushHold);
    if (this.config.hz432) return shiftAudioBuffer(buffer);
    return buffer;
  }

  private silenceBuffer(): Promise<AudioBuffer> {
    if (!this.buffer || !this.silenceFrames) return Promise.resolve(this.buffer!);
    return this.cutSilence(this.buffer);
  }

  /** Re-measure this buffer. The preview's frames belong to the first file only. */
  private async cutSilence(buffer: AudioBuffer): Promise<AudioBuffer> {
    const { analyzeSilence, measureSilenceFrames, SILENCE_PAD_SEC } = await loadSilence();
    const channels = Array.from({ length: buffer.numberOfChannels }, (_, i) => buffer.getChannelData(i));
    const frames = measureSilenceFrames(channels, buffer.sampleRate);
    const analysis = analyzeSilence(frames, {
      thresholdDb: this.silenceThreshold,
      minSilenceSec: this.silenceMin,
      padSec: SILENCE_PAD_SEC,
    });
    const kept = analysis.ranges.reduce((sum, range) => sum + (range.to - range.from), 0);
    if (analysis.allBelow || buffer.duration - kept < 0.02) return buffer;
    return spliceRanges(buffer, analysis.ranges);
  }

  // ---------- Selection & pointer interaction ----------

  private timeAtEvent(e: PointerEvent): number {
    const rect = this.els.stageContent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    return clamp(x / this.pps, 0, this.duration);
  }

  private onPointerDown(e: PointerEvent): void {
    if (!this.buffer || this.busy) return;
    if (this.config.converter || this.config.silence) return;
    const target = e.target as HTMLElement;
    const time = this.timeAtEvent(e);
    let kind: 'new' | 'start' | 'end' = 'new';
    if (target === this.els.handleStart) kind = 'start';
    else if (target === this.els.handleEnd) kind = 'end';

    const sel = this.state.sel ? { ...this.state.sel } : { start: time, end: time };
    this.drag = { kind, x0: e.clientX, anchor: time, sel };
    if (kind === 'new') {
      // A fresh drag replaces any existing selection; a click will seek instead
      this.state.sel = null;
      this.updateSelectionOverlay();
    }
    this.els.stageContent.setPointerCapture(e.pointerId);
  }

  private onPointerMove(e: PointerEvent): void {
    if (!this.drag) return;
    const time = this.timeAtEvent(e);
    const d = this.drag;
    if (d.kind === 'new') {
      this.state.sel = {
        start: Math.min(d.anchor, time),
        end: Math.max(d.anchor, time),
      };
    } else if (d.kind === 'start') {
      this.state.sel = { start: Math.min(time, d.sel.end - 0.05), end: d.sel.end };
    } else {
      this.state.sel = { start: d.sel.start, end: Math.max(time, d.sel.start + 0.05) };
    }
    this.updateSelectionOverlay();
    this.updatePreciseInputs();
  }

  private onPointerUp(e: PointerEvent): void {
    const d = this.drag;
    if (!d) return;
    this.drag = null;
    if (d.kind === 'new') {
      const moved = Math.abs(e.clientX - d.x0) > 4;
      const len = this.state.sel ? this.state.sel.end - this.state.sel.start : 0;
      if (!moved || len < 0.05) {
        // Treat as a click: seek the playhead
        this.state.sel = null;
        this.playheadTime = this.timeAtEvent(e);
        this.updatePlayhead();
        this.updateTimecode();
        this.updateSelectionOverlay();
        this.updateExportState();
        return;
      }
    }
    this.commitSelection();
  }

  private commitSelection(): void {
    if (!this.state.sel) return;
    // Enforce a minimum selection length
    if (this.state.sel.end - this.state.sel.start < 0.05) {
      this.state.sel = null;
      this.updateSelectionOverlay();
      this.updateExportState();
      return;
    }
    if (this.config.ringtone && this.state.sel.end - this.state.sel.start > 40) {
      this.state.sel.end = this.state.sel.start + 40;
      showToast(this.toastRoot(), 'info', this.text.ringtoneCap);
    }
    this.updateSelectionOverlay();
    this.updatePreciseInputs();
    this.updateExportState();
    const range = `${formatTime(this.state.sel.start, true)} – ${formatTime(this.state.sel.end, true)}`;
    this.setStatus(fill(this.state.mode === 'keep' ? this.text.kept : this.text.markedDelete, { range }));
  }

  private applyPrecise(): void {
    if (!this.buffer || !this.els.preciseStart || !this.els.preciseEnd) return;
    const s = clamp(Number(this.els.preciseStart.value) || 0, 0, this.duration);
    const e = clamp(Number(this.els.preciseEnd.value) || 0, 0, this.duration);
    if (e - s < 0.05) {
      showToast(this.toastRoot(), 'error', this.text.endTime);
      return;
    }
    this.pushHistory();
    this.state.sel = { start: s, end: e };
    this.updateSelectionOverlay();
    this.updateExportState();
  }

  private updateSelectionOverlay(): void {
    const sel = this.state.sel;
    if (!sel) {
      this.els.selection.classList.add('hidden');
      this.updateSpanReadout();
      this.draw();
      return;
    }
    this.els.selection.classList.remove('hidden');
    // Position with a transform so dragging the selection does not re-layout.
    this.els.selection.style.transform = `translateX(${sel.start * this.pps}px)`;
    this.els.selection.style.width = `${(sel.end - sel.start) * this.pps}px`;
    this.updateSpanReadout();
    this.draw();
  }

  private updateSpanReadout(): void {
    if (!this.config.trimLayout) return;
    const startEl = this.els.root.querySelector('[data-span-start]');
    const lenEl = this.els.root.querySelector('[data-span-len]');
    const endEl = this.els.root.querySelector('[data-span-end]');
    const all = this.els.root.querySelector<HTMLButtonElement>('[data-select-all]');
    const sel = this.state.sel;
    if (!startEl || !lenEl || !endEl) return;
    if (!sel) {
      startEl.textContent = '—';
      lenEl.textContent = '—';
      endEl.textContent = '—';
      if (all) all.hidden = false;
      return;
    }
    startEl.textContent = formatTime(sel.start, true);
    endEl.textContent = formatTime(sel.end, true);
    lenEl.textContent = formatTime(Math.max(0, sel.end - sel.start), true);
    if (all) all.hidden = sel.start < 0.05 && this.duration - sel.end < 0.05;
  }

  private channelLabel(channels: number): string {
    if (channels <= 1) return this.text.chMono;
    if (channels === 2) return this.text.chStereo;
    return fill(this.text.chMany, { n: channels });
  }

  private paintPitchPresets(semis: number): void {
    for (const btn of this.els.root.querySelectorAll<HTMLButtonElement>('[data-pitch-preset]')) {
      const on = Number(btn.dataset.pitchPreset) === Math.round(semis);
      btn.classList.toggle('border-accent', on);
      btn.classList.toggle('bg-accent', on);
      btn.classList.toggle('text-on-accent', on);
      btn.setAttribute('aria-pressed', String(on));
    }
  }

  private paintSpeedPresets(speed: number): void {
    for (const btn of this.els.root.querySelectorAll<HTMLButtonElement>('[data-speed-preset]')) {
      const on = Math.abs(Number(btn.dataset.speedPreset) - speed) < 0.001;
      btn.classList.toggle('border-accent', on);
      btn.classList.toggle('bg-accent', on);
      btn.classList.toggle('text-on-accent', on);
      btn.setAttribute('aria-pressed', String(on));
    }
  }

  private paintGainPresets(percent: number): void {
    for (const btn of this.els.root.querySelectorAll<HTMLButtonElement>('[data-gain-preset]')) {
      const on = Number(btn.dataset.gainPreset) === percent;
      btn.classList.toggle('border-accent', on);
      btn.classList.toggle('bg-accent', on);
      btn.classList.toggle('text-on-accent', on);
      btn.setAttribute('aria-pressed', String(on));
    }
  }

  private showsJobChrome(): boolean {
    const quick = this.config.quickControls ?? [];
    return Boolean(
      this.config.trimLayout ||
        this.config.ringtone ||
        this.config.silence ||
        this.config.loop ||
        this.config.bitcrush ||
        this.config.split ||
        this.config.converter ||
        quick.length > 0,
    );
  }

  private rateLabel(rate: number): string {
    return rate % 1000 === 0 ? `${rate / 1000} kHz` : `${(rate / 1000).toFixed(1)} kHz`;
  }

  private setPlayFace(playing: boolean): void {
    const icon = playing
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 5v14M16 5v14"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M8 5.5v13l10-6.5-10-6.5Z"/></svg>';
    const label = this.showsJobChrome() ? `<span>${playing ? this.text.pause : this.text.playBtn}</span>` : '';
    this.els.play.innerHTML = icon + label;
    this.els.play.setAttribute('aria-label', playing ? this.text.pause : this.text.play);
  }

  private updatePreciseInputs(): void {
    if (this.state.sel && this.els.preciseStart && this.els.preciseEnd) {
      this.els.preciseStart.value = this.state.sel.start.toFixed(2);
      this.els.preciseEnd.value = this.state.sel.end.toFixed(2);
    }
  }

  private updateExportState(): void {
    // Selection is optional — with none, the whole file is rendered
    this.els.exportBtn.disabled = !this.buffer || this.busy;
  }

  /** Spinner plus label while export runs. `label` omitted keeps the current text. */
  private setExportBusy(busy: boolean, label?: string): void {
    const btn = this.els.exportBtn;
    btn.classList.toggle('is-busy', busy);
    if (busy) btn.setAttribute('aria-busy', 'true');
    else btn.removeAttribute('aria-busy');
    const icon = btn.querySelector<HTMLElement>('[data-export-icon]');
    const spinner = btn.querySelector<HTMLElement>('[data-export-spinner]');
    if (icon) icon.hidden = busy;
    if (spinner) spinner.hidden = !busy;
    const text = btn.querySelector('[data-export-label]');
    if (text && label !== undefined) text.textContent = label;
  }

  // ---------- Edit state ----------

  private setMode(mode: 'keep' | 'delete'): void {
    this.commit({ mode });
  }

  private commit(patch: Partial<EditState>): void {
    this.pushHistory();
    this.applyState({ ...this.state, ...patch }, true);
  }

  private pushHistory(): void {
    this.history.push({ ...this.state, sel: this.state.sel ? { ...this.state.sel } : null });
    if (this.history.length > 30) this.history.shift();
  }

  private undo(): void {
    const prev = this.history.pop();
    if (!prev) {
      showToast(this.toastRoot(), 'info', this.text.nothingUndo);
      return;
    }
    this.applyState(prev, true);
    this.setStatus(this.text.reverted);
  }

  private toggleNormalize(): void {
    const next = !this.state.normalize;
    this.commit({ normalize: next });
    if (next && this.buffer) {
      const g = computeNormalizeGain(this.buffer, this.state);
      const db = g > 0 ? (20 * Math.log10(g)).toFixed(1) : '0';
      showToast(this.toastRoot(), 'info', fill(this.text.normalizeOn, { db }));
    }
  }

  private applyState(state: EditState, syncInputs: boolean): void {
    this.state = state;
    this.updateModeButtons();
    if (syncInputs) {
      const fadeIn = this.els.root.querySelector<HTMLInputElement>('[data-fade-in]');
      const fadeOut = this.els.root.querySelector<HTMLInputElement>('[data-fade-out]');
      const gain = this.els.root.querySelector<HTMLInputElement>('[data-gain]');
      const speed = this.els.root.querySelector<HTMLInputElement>('[data-speed]');
      const reverse = this.els.root.querySelector<HTMLInputElement>('[data-reverse]');
      const reverb = this.els.root.querySelector<HTMLInputElement>('[data-reverb]');
      const normalize = this.els.root.querySelector<HTMLInputElement>('[data-normalize]');
      if (fadeIn) fadeIn.value = String(state.fadeIn);
      if (fadeOut) fadeOut.value = String(state.fadeOut);
      if (gain) gain.value = String(Math.round(state.gain * 100));
      if (speed) speed.value = String(state.speed);
      if (reverse) reverse.checked = state.reverse;
      if (reverb) reverb.value = String(state.reverb);
      if (normalize) normalize.checked = state.normalize;
      const fadeInLabel = this.els.root.querySelector<HTMLElement>('[data-fade-in-label]');
      const fadeOutLabel = this.els.root.querySelector<HTMLElement>('[data-fade-out-label]');
      const gainLabel = this.els.root.querySelector<HTMLElement>('[data-gain-label]');
      const speedLabel = this.els.root.querySelector<HTMLElement>('[data-speed-label]');
      const reverbLabel = this.els.root.querySelector<HTMLElement>('[data-reverb-label]');
      if (fadeInLabel) fadeInLabel.textContent = `${state.fadeIn.toFixed(1)}s`;
      if (fadeOutLabel) fadeOutLabel.textContent = `${state.fadeOut.toFixed(1)}s`;
      if (gainLabel) gainLabel.textContent = `${Math.round(state.gain * 100)}%`;
      if (speedLabel) speedLabel.textContent = `${state.speed.toFixed(2)}×`;
      if (reverbLabel) reverbLabel.textContent = `${Math.round(state.reverb * 100)}%`;

      // Mirror onto the headline quick controls when present
      const quickReverse = this.els.root.querySelector<HTMLButtonElement>('[data-quick-reverse]');
      if (quickReverse) {
        quickReverse.setAttribute('aria-pressed', String(state.reverse));
        quickReverse.classList.toggle('border-accent', state.reverse);
        quickReverse.classList.toggle('bg-accent-soft', state.reverse);
        quickReverse.classList.toggle('text-accent', state.reverse);
      }
      const quickNormalize = this.els.root.querySelector<HTMLButtonElement>('[data-quick-normalize]');
      if (quickNormalize) {
        quickNormalize.setAttribute('aria-pressed', String(state.normalize));
        quickNormalize.classList.toggle('border-accent', state.normalize);
        quickNormalize.classList.toggle('bg-accent-soft', state.normalize);
        quickNormalize.classList.toggle('text-accent', state.normalize);
      }
      const quickReverb = this.els.root.querySelector<HTMLInputElement>('[data-quick-reverb]');
      const quickReverbLabel = this.els.root.querySelector<HTMLElement>('[data-quick-reverb-label]');
      if (quickReverb) quickReverb.value = String(state.reverb);
      if (quickReverbLabel) quickReverbLabel.textContent = `${Math.round(state.reverb * 100)}%`;
      const quickCompress = this.els.root.querySelector<HTMLInputElement>('[data-quick-compress]');
      const quickCompressLabel = this.els.root.querySelector<HTMLElement>('[data-quick-compress-label]');
      if (quickCompress) quickCompress.value = String(Math.round(state.compress * 100));
      if (quickCompressLabel) quickCompressLabel.textContent = `${Math.round(state.compress * 100)}%`;
      const quickEchoDelay = this.els.root.querySelector<HTMLInputElement>('[data-quick-echo-delay]');
      const quickEchoDelayLabel = this.els.root.querySelector<HTMLElement>('[data-quick-echo-delay-label]');
      if (quickEchoDelay) quickEchoDelay.value = String(state.echoDelay);
      if (quickEchoDelayLabel) quickEchoDelayLabel.textContent = `${state.echoDelay.toFixed(2)} s`;
      const quickEchoFeedback = this.els.root.querySelector<HTMLInputElement>('[data-quick-echo-feedback]');
      const quickEchoFeedbackLabel = this.els.root.querySelector<HTMLElement>('[data-quick-echo-feedback-label]');
      if (quickEchoFeedback) quickEchoFeedback.value = String(state.echoFeedback);
      if (quickEchoFeedbackLabel) quickEchoFeedbackLabel.textContent = `${Math.round(state.echoFeedback * 100)}%`;
      const quickDistort = this.els.root.querySelector<HTMLInputElement>('[data-quick-distort]');
      const quickDistortLabel = this.els.root.querySelector<HTMLElement>('[data-quick-distort-label]');
      if (quickDistort) quickDistort.value = String(Math.round(state.distort * 100));
      if (quickDistortLabel) quickDistortLabel.textContent = `${Math.round(state.distort * 100)}%`;
      const quickPanDepth = this.els.root.querySelector<HTMLInputElement>('[data-quick-pan-depth]');
      const quickPanDepthLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pan-depth-label]');
      const quickPanRate = this.els.root.querySelector<HTMLInputElement>('[data-quick-pan-rate]');
      const quickPanRateLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pan-rate-label]');
      if (quickPanDepth) quickPanDepth.value = String(Math.round(state.panDepth * 100));
      if (quickPanDepthLabel) quickPanDepthLabel.textContent = `${Math.round(state.panDepth * 100)}%`;
      if (quickPanRate) quickPanRate.value = String(state.panRate);
      if (quickPanRateLabel) quickPanRateLabel.textContent = `${state.panRate.toFixed(2)} Hz`;
      const quickCircle = this.els.root.querySelector<HTMLButtonElement>('[data-quick-circle]');
      if (quickCircle) {
        const on = state.panDepth > 0 && state.reverb > 0;
        quickCircle.setAttribute('aria-pressed', String(on));
        quickCircle.classList.toggle('border-accent', on);
        quickCircle.classList.toggle('bg-accent-soft', on);
        quickCircle.classList.toggle('text-accent', on);
      }
      const quickSpeed = this.els.root.querySelector<HTMLInputElement>('[data-quick-speed]');
      const quickSpeedLabel = this.els.root.querySelector<HTMLElement>('[data-quick-speed-label]');
      if (quickSpeed) quickSpeed.value = String(state.speed);
      if (quickSpeedLabel) quickSpeedLabel.textContent = `${state.speed.toFixed(2)}×`;
      this.paintSpeedPresets(state.speed);
      const quickTempo = this.els.root.querySelector<HTMLInputElement>('[data-quick-tempo]');
      const quickTempoLabel = this.els.root.querySelector<HTMLElement>('[data-quick-tempo-label]');
      if (quickTempo) quickTempo.value = state.speed.toFixed(2);
      if (quickTempoLabel) quickTempoLabel.textContent = `${state.speed.toFixed(2)}×`;
      const quickPitch = this.els.root.querySelector<HTMLInputElement>('[data-quick-pitch]');
      const quickPitchLabel = this.els.root.querySelector<HTMLElement>('[data-quick-pitch-label]');
      if (quickPitch) quickPitch.value = String(state.pitch);
      if (quickPitchLabel) quickPitchLabel.textContent = formatSemitones(state.pitch);
      this.paintPitchPresets(state.pitch);
      const quickBass = this.els.root.querySelector<HTMLInputElement>('[data-quick-bass]');
      const quickBassLabel = this.els.root.querySelector<HTMLElement>('[data-quick-bass-label]');
      if (quickBass) quickBass.value = String(state.bass);
      if (quickBassLabel && quickBass) quickBassLabel.textContent = dbLabel(state.bass, Number(quickBass.min) < 0);
      const quickTreble = this.els.root.querySelector<HTMLInputElement>('[data-quick-treble]');
      const quickTrebleLabel = this.els.root.querySelector<HTMLElement>('[data-quick-treble-label]');
      if (quickTreble) quickTreble.value = String(state.treble);
      if (quickTrebleLabel && quickTreble) quickTrebleLabel.textContent = dbLabel(state.treble, Number(quickTreble.min) < 0);
      const quickMid = this.els.root.querySelector<HTMLInputElement>('[data-quick-mid]');
      const quickMidLabel = this.els.root.querySelector<HTMLElement>('[data-quick-mid-label]');
      if (quickMid) quickMid.value = String(state.mid);
      if (quickMidLabel) quickMidLabel.textContent = `${state.mid > 0 ? '+' : ''}${state.mid} dB`;
      const quickLpf = this.els.root.querySelector<HTMLInputElement>('[data-quick-lpf]');
      const quickLpfLabel = this.els.root.querySelector<HTMLElement>('[data-quick-lpf-label]');
      if (quickLpf) quickLpf.value = String(state.lpf);
      if (quickLpfLabel) quickLpfLabel.textContent = state.lpf >= 1000 ? `${(state.lpf / 1000).toFixed(1)} kHz` : `${state.lpf} Hz`;
      const quickHpf = this.els.root.querySelector<HTMLInputElement>('[data-quick-hpf]');
      const quickHpfLabel = this.els.root.querySelector<HTMLElement>('[data-quick-hpf-label]');
      if (quickHpf) quickHpf.value = String(state.hpf);
      if (quickHpfLabel) quickHpfLabel.textContent = state.hpf >= 1000 ? `${(state.hpf / 1000).toFixed(1)} kHz` : `${state.hpf} Hz`;
      const quickGain = this.els.root.querySelector<HTMLInputElement>('[data-quick-gain]');
      const quickGainLabel = this.els.root.querySelector<HTMLElement>('[data-quick-gain-label]');
      if (quickGain) quickGain.value = String(Math.round(state.gain * 100));
      if (quickGainLabel) quickGainLabel.textContent = `${Math.round(state.gain * 100)}%`;
      this.paintGainPresets(Math.round(state.gain * 100));
    }
    this.paintSpeedPresets(state.speed);
    this.paintPitchPresets(state.pitch);
    this.paintGainPresets(Math.round(state.gain * 100));
    this.updateSelectionOverlay();
    this.updatePreciseInputs();
    this.updateExportState();
    if (this.config.loop) this.updateLoopStatus();
    if (this.config.split) this.updateSplitStatus();
    this.updatePageStatus();
  }

  private updateModeButtons(): void {
    if (!this.els.modeKeep || !this.els.modeDelete) return;
    const active = 'bg-accent text-on-accent';
    const idle = 'text-ink2 hover:text-ink';
    const keepActive = this.state.mode === 'keep';
    this.els.modeKeep.className = `rounded-md px-3 py-1.5 text-sm font-medium ${keepActive ? active : idle}`;
    this.els.modeDelete.className = `rounded-md px-3 py-1.5 text-sm font-medium ${keepActive ? idle : active}`;
    this.els.modeKeep.setAttribute('aria-pressed', String(keepActive));
    this.els.modeDelete.setAttribute('aria-pressed', String(!keepActive));
  }

  // ---------- Playback ----------

  private pitchPreviewKeyOf(): string {
    const sel = this.state.sel;
    return [
      this.state.pitch,
      this.state.bass,
      this.state.treble,
      this.state.mid,
      this.state.hpf,
      this.state.lpf,
      this.state.speed,
      this.state.keepPitch ? 1 : 0,
      this.state.gain,
      this.state.reverse ? 1 : 0,
      this.state.reverb,
      this.state.compress,
      this.state.echoDelay,
      this.state.echoFeedback,
      this.state.distort,
      this.state.panDepth,
      this.state.panRate,
      this.state.fadeIn,
      this.state.fadeOut,
      this.state.normalize ? 1 : 0,
      this.state.mode,
      sel ? `${sel.start.toFixed(3)}-${sel.end.toFixed(3)}` : '',
      this.buffer?.length ?? 0,
      this.config.bitcrush ? `${this.crushBits}:${this.crushHold}` : '',
      this.config.hz432 ? '432' : '',
      this.config.mono ? 'mono' : '',
    ].join('|');
  }

  private async togglePlay(): Promise<void> {
    if (this.playing) {
      this.stopPlayback();
      return;
    }
    if (!this.buffer) return;
    if (!this.audioCtx) this.audioCtx = new AudioContext();
    await this.audioCtx.resume();

    let from = this.playheadTime;
    let to = this.duration;
    if (this.state.sel) {
      from = this.state.sel.start;
      to = this.state.sel.end;
    } else if (from >= this.duration - 0.01) {
      from = 0;
    }

    let playBuffer: AudioBuffer = this.buffer;
    let rate = this.state.speed;
    let headFrom = from;
    if (
      (this.state.keepPitch && this.state.speed !== 1) ||
      this.state.pitch !== 0 ||
      this.state.reverse ||
      this.state.fadeIn > 0 ||
      this.state.fadeOut > 0 ||
      this.state.compress > 0 ||
      this.state.echoDelay > 0 ||
      this.state.distort > 0 ||
      this.state.panDepth > 0 ||
      this.state.reverb > 0 ||
      this.state.bass !== 0 ||
      this.state.treble !== 0 ||
      this.state.mid !== 0 ||
      this.state.hpf > 25 ||
      this.state.lpf < 19000 ||
      this.config.mono ||
      this.config.bitcrush ||
      this.config.hz432
    ) {
      const key = this.pitchPreviewKeyOf();
      if (!this.pitchPreview || this.pitchPreviewKey !== key) {
        this.busy = true;
        this.updateExportState();
        this.setStatus(this.text.renderingStatus);
        try {
          const { renderEdit } = await loadProcessor();
          const rendered = await this.pageEffect(await renderEdit(this.buffer, this.state));
          if (this.pitchPreviewKeyOf() !== key) return;
          this.pitchPreview = rendered;
          this.pitchPreviewKey = key;
        } catch {
          this.setStatus(this.text.exportFail);
          return;
        } finally {
          this.busy = false;
          this.updateExportState();
        }
        if (this.config.mono || this.config.bitcrush || this.config.hz432) this.updatePageStatus();
        else this.setStatus(this.text.ready);
      }
      playBuffer = this.pitchPreview;
      rate = 1;
      const keepSel = this.state.mode === 'keep' && this.state.sel;
      headFrom = keepSel ? this.state.sel!.start : 0;
      from = 0;
      to = playBuffer.duration;
    }

    const src = this.audioCtx.createBufferSource();
    src.buffer = playBuffer;
    src.connect(this.audioCtx.destination);
    src.playbackRate.value = rate;
    const endAt = headFrom + (to - from) * rate;
    src.onended = () => {
      if (this.playSource === src) this.stopPlayback(endAt);
    };
    // offset/duration are buffer-time units — playbackRate must not scale them
    src.start(0, from, Math.max(0.001, to - from));
    this.playSource = src;
    this.playing = true;
    this.playRate = rate;
    this.playOffset = headFrom;
    this.playEnd = endAt;
    this.playStartedAt = this.audioCtx.currentTime;

    this.setPlayFace(true);

    const tick = () => {
      if (!this.playing || !this.audioCtx) return;
      this.playheadTime = this.playOffset + (this.audioCtx.currentTime - this.playStartedAt) * this.playRate;
      this.playheadTime = Math.min(this.playheadTime, this.playEnd);
      this.updatePlayhead();
      this.updateTimecode();
      this.raf = requestAnimationFrame(tick);
    };
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(tick);
  }

  private stopPlayback(playheadTo?: number): void {
    this.playing = false;
    cancelAnimationFrame(this.raf);
    try {
      this.playSource?.stop();
    } catch {
      /* already stopped */
    }
    this.playSource = null;
    if (playheadTo !== undefined) this.playheadTime = playheadTo;
    this.updatePlayhead();
    this.updateTimecode();
    this.setPlayFace(false);
  }

  private async exportSplit(out: AudioBuffer, fmt: ExportFormat): Promise<void> {
    const pieces = await splitAudioBuffer(out, this.splitParts);
    if (pieces.length === 0) {
      this.setStatus(this.text.splitTooShort);
      showToast(this.toastRoot(), 'error', this.text.splitTooShort);
      return;
    }
    const { encodeFor } = await loadEncoders();
    const files = [];
    for (let i = 0; i < pieces.length; i++) {
      const blob = await encodeFor(fmt, pieces[i]!);
      files.push({
        name: `${this.fileName}-${i + 1}.${fmt.ext}`,
        data: new Uint8Array(await blob.arrayBuffer()),
      });
    }
    const { storeZip } = await loadSplit();
    const zipName = `${this.fileName}-parts.zip`;
    const zip = new Blob([storeZip(files)], { type: 'application/zip' });
    const url = URL.createObjectURL(zip);
    const a = document.createElement('a');
    a.href = url;
    a.download = zipName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    this.setStatus(fill(this.text.exported, { file: zipName }));
    showToast(this.toastRoot(), 'success', fill(this.text.saved, { file: zipName }));
  }

  private updatePlayhead(): void {
    this.els.playhead.style.transform = `translateX(${this.playheadTime * this.pps}px)`;
    this.els.playhead.style.opacity = this.playheadTime > 0 || this.playing ? '1' : '0';
  }

  private updateTimecode(): void {
    this.els.timecode.textContent = `${formatTime(this.playheadTime, true)} / ${formatTime(this.duration, true)}`;
  }

  // ---------- Export ----------

  /** One decode at a time. Failures are skipped so the rest of the queue still downloads. */
  private async exportQueue(): Promise<void> {
    const [{ encodeFor, getFormat }, { fileStem, uniqueFileNames }] = await Promise.all([loadEncoders(), loadBatch()]);
    const fmt = getFormat(this.els.format.value);
    const suffix = this.config.converter ? 'converted' : 'edited';
    const names = uniqueFileNames(
      this.queue.map((file) => `${fileStem(file.name)}-${suffix}`),
      fmt.ext,
    );
    // ponytail: a selection drawn on file 1 is not applied to the rest of the queue.
    const state = this.config.converter ? defaultEditState() : { ...this.state, sel: null };
    const ready: { name: string; data: Uint8Array<ArrayBuffer> }[] = [];
    let skipped = 0;
    for (let i = 0; i < this.queue.length; i++) {
      const file = this.queue[i]!;
      this.setStatus(fill(this.text.batchProgress, { current: i + 1, total: this.queue.length }));
      if (file.size > 300 * 1024 * 1024) {
        skipped++;
        continue;
      }
      try {
        const decoded = await this.decodeOne(file);
        const rendered = this.config.silence
          ? await this.cutSilence(decoded)
          : await this.pageEffect(await (await loadProcessor()).renderEdit(decoded, state));
        const blob = await encodeFor(fmt, rendered);
        ready.push({ name: names[i]!, data: new Uint8Array(await blob.arrayBuffer()) });
      } catch (err) {
        console.error(err);
        skipped++;
      }
    }
    if (ready.length === 0) {
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.exportFail);
      return;
    }
    const zipName = `${fileStem(this.queue[0]!.name)}-${suffix}.zip`;
    const blob =
      ready.length === 1
        ? new Blob([ready[0]!.data], { type: 'application/octet-stream' })
        : new Blob([(await loadSplit()).storeZip(ready)], { type: 'application/zip' });
    const filename = ready.length === 1 ? ready[0]!.name : zipName;
    this.saveDownload(blob, filename);
    const note = skipped > 0 ? ` ${fill(this.text.batchSkipped, { n: skipped })}` : '';
    this.setStatus(`${fill(this.text.exported, { file: filename })}${note}`);
    showToast(this.toastRoot(), 'success', fill(this.text.saved, { file: filename }));
  }

  private saveDownload(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  private async doExport(): Promise<void> {
    if (!this.buffer || this.busy) return;
    this.busy = true;
    this.updateExportState();
    const label = this.els.exportBtn.querySelector('[data-export-label]');
    const original = label?.textContent ?? '';
    this.setExportBusy(true, this.text.rendering);
    this.setStatus(this.text.renderingStatus);

    const encodersReady = loadEncoders();
    try {
      if (this.config.batch && this.queue.length > 1) {
        await this.exportQueue();
        return;
      }
      if (this.config.loop) {
        const { LOOP_MAX_SECONDS, loopedDuration } = await loadLoop();
        if (loopedDuration(this.loopPassSeconds(), this.loopTimes, this.loopCrossfade) > LOOP_MAX_SECONDS) {
          this.setStatus(this.text.loopTooLong);
          showToast(this.toastRoot(), 'error', this.text.loopTooLong);
          return;
        }
      }
      let out = this.config.silence
        ? await this.silenceBuffer()
        : await (await loadProcessor()).renderEdit(this.buffer, this.state);
      if (this.config.loop) out = await loopAudioBuffer(out, this.loopTimes, this.loopCrossfade);
      out = await this.pageEffect(out);
      const { encodeFor, getFormat } = await encodersReady;
      const fmt = getFormat(this.els.format.value);
      this.setStatus(fill(this.text.encoding, { ext: fmt.ext.toUpperCase() }));
      if (this.config.split) {
        await this.exportSplit(out, fmt);
        return;
      }
      const blob = await encodeFor(fmt, out);

      const suffix = this.config.converter ? 'converted' : this.config.ringtone ? 'ringtone' : 'edited';
      const filename = `${this.fileName}-${suffix}.${fmt.ext}`;
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
    } catch (err) {
      console.error(err);
      this.setStatus('');
      showToast(this.toastRoot(), 'error', this.text.exportFail);
    } finally {
      this.setExportBusy(false, original);
      this.busy = false;
      this.updateExportState();
    }
  }

  // ---------- Keyboard ----------

  private onKeydown(e: KeyboardEvent): void {
    if (activeEditor !== this || !this.buffer) return;
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      // Space already activates a focused button, link or summary — toggling
      // playback there too would run the action twice.
      const focused = target instanceof Element ? target.closest('button, a[href], summary, [role="button"]') : null;
      if (focused) return;
      e.preventDefault();
      void this.togglePlay();
    } else if (e.key === 'Escape') {
      this.commit({ sel: null });
      this.updateSelectionOverlay();
      this.updateExportState();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.playheadTime = clamp(this.playheadTime - (e.shiftKey ? 1 : 0.1), 0, this.duration);
      this.updatePlayhead();
      this.updateTimecode();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.playheadTime = clamp(this.playheadTime + (e.shiftKey ? 1 : 0.1), 0, this.duration);
      this.updatePlayhead();
      this.updateTimecode();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      this.undo();
    }
  }
}

async function monoAudioBuffer(buffer: AudioBuffer): Promise<AudioBuffer> {
  const { averageToMono } = await import('./mono');
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, c) => buffer.getChannelData(c));
  const mono = averageToMono(channels);
  const out = new AudioBuffer({ length: Math.max(1, mono.length), numberOfChannels: 1, sampleRate: buffer.sampleRate });
  out.getChannelData(0).set(mono);
  return out;
}

async function crushAudioBuffer(buffer: AudioBuffer, bits: number, hold: number): Promise<AudioBuffer> {
  const { crushChannel } = await import('./bitcrush');
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, c) => crushChannel(buffer.getChannelData(c), bits, hold));
  const out = new AudioBuffer({
    length: buffer.length,
    numberOfChannels: buffer.numberOfChannels,
    sampleRate: buffer.sampleRate,
  });
  for (let c = 0; c < channels.length; c++) out.getChannelData(c).set(channels[c]!);
  return out;
}

async function shiftAudioBuffer(buffer: AudioBuffer): Promise<AudioBuffer> {
  const { shiftTo432 } = await import('./hz432');
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, c) => shiftTo432(buffer.getChannelData(c), buffer.sampleRate));
  const out = new AudioBuffer({
    length: channels[0]?.length || 1,
    numberOfChannels: buffer.numberOfChannels,
    sampleRate: buffer.sampleRate,
  });
  for (let c = 0; c < channels.length; c++) out.getChannelData(c).set(channels[c]!);
  return out;
}

async function splitAudioBuffer(buffer: AudioBuffer, parts: number): Promise<AudioBuffer[]> {
  const { splitChannels } = await loadSplit();
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, c) => buffer.getChannelData(c));
  return splitChannels(channels, parts).map((chs) => {
    const piece = new AudioBuffer({
      length: Math.max(1, chs[0]?.length ?? 1),
      numberOfChannels: buffer.numberOfChannels,
      sampleRate: buffer.sampleRate,
    });
    for (let c = 0; c < chs.length; c++) piece.getChannelData(c).set(chs[c]!);
    return piece;
  });
}

async function loopAudioBuffer(buffer: AudioBuffer, times: number, crossfadeSec: number): Promise<AudioBuffer> {
  const { loopChannels } = await loadLoop();
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, c) => buffer.getChannelData(c));
  const looped = loopChannels(channels, buffer.sampleRate, { times, crossfadeSec });
  const out = new AudioBuffer({
    length: Math.max(1, looped[0]?.length ?? 1),
    numberOfChannels: buffer.numberOfChannels,
    sampleRate: buffer.sampleRate,
  });
  for (let c = 0; c < looped.length; c++) out.getChannelData(c).set(looped[c]!);
  return out;
}

function spliceRanges(buffer: AudioBuffer, ranges: TimeRange[]): AudioBuffer {
  const rate = buffer.sampleRate;
  const slices = ranges
    .map((range) => {
      const from = clamp(Math.round(range.from * rate), 0, buffer.length);
      const to = clamp(Math.round(range.to * rate), 0, buffer.length);
      return { from, to: Math.max(from, to) };
    })
    .filter((slice) => slice.to > slice.from);
  const length = slices.reduce((sum, slice) => sum + (slice.to - slice.from), 0);
  const out = new AudioBuffer({
    length: Math.max(1, length),
    numberOfChannels: buffer.numberOfChannels,
    sampleRate: rate,
  });
  let pos = 0;
  for (const slice of slices) {
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      out.getChannelData(c).set(buffer.getChannelData(c).subarray(slice.from, slice.to), pos);
    }
    pos += slice.to - slice.from;
  }
  return out;
}

function formatSemitones(n: number): string {
  const v = Math.round(n);
  if (v > 0) return `+${v} st`;
  if (v < 0) return `−${Math.abs(v)} st`;
  return '0 st';
}

export function initEditors(): void {
  document.querySelectorAll<HTMLElement>('[data-audio-editor]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    const config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    new Editor(root, config);
  });
}
