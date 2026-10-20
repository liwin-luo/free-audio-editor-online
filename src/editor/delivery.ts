/**
 * Empty-state delivery chips and the promise line on tool pages.
 * Chips preselect the export control; they are not extra tools.
 *
 * ponytail: a converter that omits `formats` shows 320/192/128 only.
 * Quiet bitrates (96, 64) show up when the page lists them. Upgrade path:
 * set `formats` on that tool.
 */
import type { EditorConfig } from '../data/tools';

export interface DeliveryChip {
  /** Format id, or txt/srt on the transcribe page. */
  id: string;
  label: string;
}

export interface PromiseCopy {
  etaModel: string;
  limitTenMin: string;
  limitRingtone: string;
  /** Localized single-output label, e.g. "WAV · lossless". */
  wav: string;
  /** Suffix for a broad format list, separator included. e.g. ", and more". */
  formatsMore: string;
}

const AUDIO = 'MP3, WAV, M4A, OGG, FLAC';
const VIDEO = 'MP4, MOV, WebM, MP3, WAV';
const IMAGE = 'PNG, JPG, WebP';
const BROAD = new Set([AUDIO, VIDEO, IMAGE]);

const BITRATE: Record<string, string> = {
  'mp3-320': '320 kbps',
  'mp3-192': '192 kbps',
  'mp3-128': '128 kbps',
  'mp3-96': '96 kbps',
  'mp3-64': '64 kbps',
};

const CONVERTER_DEFAULT = ['mp3-320', 'mp3-192', 'mp3-128'];

function bitrateChips(ids: string[]): DeliveryChip[] {
  return ids.filter((id) => id.startsWith('mp3-')).map((id) => ({ id, label: BITRATE[id] ?? id }));
}

export function deliveryChips(config: EditorConfig, textLabel = 'Text'): DeliveryChip[] {
  if (config.transcribe) {
    return [
      { id: 'txt', label: textLabel },
      { id: 'srt', label: 'SRT' },
    ];
  }
  if (config.visualizer || config.paint || config.tagEditor) return [];

  if (config.ringtone) {
    const mp3 = config.defaultFormat?.startsWith('mp3-') ? config.defaultFormat : 'mp3-192';
    return [
      { id: 'm4r', label: 'M4R' },
      { id: mp3, label: 'MP3' },
    ];
  }

  if (config.converter) {
    const source = config.formats ?? CONVERTER_DEFAULT;
    const chips = bitrateChips(source);
    return chips.length > 1 ? chips : [];
  }

  const ids = config.formats ?? [...CONVERTER_DEFAULT, 'mp3-96', 'mp3-64', 'wav'];
  const mp3 = (config.defaultFormat?.startsWith('mp3-') && ids.includes(config.defaultFormat) ? config.defaultFormat : null)
    ?? ids.find((id) => id.startsWith('mp3-'));
  const chips: DeliveryChip[] = [];
  if (mp3) chips.push({ id: mp3, label: 'MP3' });
  if (ids.includes('wav')) chips.push({ id: 'wav', label: 'WAV' });
  return chips.length > 1 ? chips : [];
}

export function selectedDelivery(config: EditorConfig, chips: DeliveryChip[]): string | null {
  if (!chips.length) return null;
  if (config.transcribe) return 'txt';
  if (config.defaultFormat && chips.some((chip) => chip.id === config.defaultFormat)) return config.defaultFormat;
  return chips[0].id;
}

function inputFormats(config: EditorConfig): string {
  if (config.paint) return IMAGE;
  const accept = config.accept ?? '';
  if (accept.includes('video/')) return VIDEO;
  if (accept.includes('audio/mpeg') && !accept.includes('audio/*')) return 'MP3';
  if ((accept.includes('.m4a') || accept.includes('audio/aac')) && !accept.includes('audio/*')) return 'M4A, AAC';
  if (accept.includes('opus')) return 'Opus, OGG';
  if (accept.includes('ogg')) return 'OGG';
  return AUDIO;
}

/** Accepted formats, plus a hard cap or the model note when the tool has one. */
export function promiseParts(config: EditorConfig, copy: PromiseCopy): string[] {
  const singleWav = config.formats?.length === 1 && config.formats[0] === 'wav';
  const named = singleWav ? copy.wav : inputFormats(config);
  const parts = [BROAD.has(named) ? `${named}${copy.formatsMore}` : named];
  if (config.transcribe) parts.push(copy.limitTenMin, copy.etaModel);
  if (config.ringtone) parts.push(copy.limitRingtone);
  return parts;
}

export function fromDeliveryControl(target: EventTarget | null): boolean {
  return target instanceof Element && !!target.closest('[data-delivery]');
}

/** Chip clicks preselect the format `<select>` and do not open the file dialog. */
export function bindDeliveryChips(root: ParentNode, format?: HTMLSelectElement | null): void {
  const chips = [...root.querySelectorAll<HTMLButtonElement>('[data-delivery]')];
  for (const chip of chips) {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = chip.dataset.delivery;
      if (!id) return;
      for (const other of chips) other.setAttribute('aria-pressed', other === chip ? 'true' : 'false');
      if (format && [...format.options].some((option) => option.value === id)) format.value = id;
    });
  }
}

/** Hide the empty state together: drop well, format chips, and the privacy line. */
export function setEmptyHidden(dropzone: HTMLElement, hidden: boolean): void {
  const empty = dropzone.closest('[data-empty]');
  if (empty instanceof HTMLElement) empty.hidden = hidden;
  else dropzone.hidden = hidden;
}

/** Click and keyboard open the file picker. Delivery chips are excluded. */
export function bindFileOpen(dropzone: HTMLElement, open: () => void): void {
  dropzone.addEventListener('click', (e) => {
    if (fromDeliveryControl(e.target)) return;
    open();
  });
  dropzone.querySelector<HTMLElement>('[data-open]')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
}
