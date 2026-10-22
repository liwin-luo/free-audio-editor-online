/**
 * Soundboard board-file format: build, parse, and the SoundTools import path.
 * Pure functions only — no DOM, no Web Audio. The check script runs this file
 * in Node via esbuild, so browser types are avoided on purpose: a clip is any
 * { numberOfChannels, length, sampleRate, getChannelData } shape.
 */

export interface PaletteColor {
  id: string;
  hex: string;
}

/** Tile colors. 700-weight tones; white text clears 4.5:1 on every one. */
export const PALETTE: PaletteColor[] = [
  { id: 'teal', hex: '#0D9488' },
  { id: 'sky', hex: '#0369A1' },
  { id: 'blue', hex: '#1D4ED8' },
  { id: 'emerald', hex: '#047857' },
  { id: 'amber', hex: '#B45309' },
  { id: 'orange', hex: '#C2410C' },
  { id: 'rose', hex: '#BE123C' },
  { id: 'slate', hex: '#52525B' },
];

export interface AudioBufferLike {
  numberOfChannels: number;
  length: number;
  sampleRate: number;
  getChannelData(channel: number): Float32Array;
}

export interface BoardClip {
  id: string;
  name: string;
  color: string;
  duration: number;
  sampleRate: number;
  /** 16-bit PCM WAV, base64. Own format field: audioB64. SoundTools uses the same name. */
  audioB64: string;
}

export interface BoardJson {
  version: 1;
  app: 'freeaudioeditor-online';
  buttons: BoardClip[];
}

function hexToRgb(hex: string): [number, number, number] {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number];
}

/** First #rrggbb in the text (SoundTools gradients), mapped to the nearest palette id. */
export function nearestColor(text: string): string {
  const match = text.match(/#[0-9a-fA-F]{6}/);
  if (!match) return PALETTE[0].id;
  const [r, g, b] = hexToRgb(match[0]);
  let best = PALETTE[0].id;
  let bestDist = Infinity;
  for (const p of PALETTE) {
    const [pr, pg, pb] = hexToRgb(p.hex);
    const d = (r - pr) ** 2 + (g - pg) ** 2 + (b - pb) ** 2;
    if (d < bestDist) {
      bestDist = d;
      best = p.id;
    }
  }
  return best;
}

export function isPaletteColor(color: unknown): color is string {
  return typeof color === 'string' && PALETTE.some((p) => p.id === color);
}

/** 16-bit PCM WAV as base64. Matches the WAV encoder in encoders.ts, as text. */
export function encodeWavBase64(buffer: AudioBufferLike): string {
  const channels: Float32Array[] = [];
  for (let c = 0; c < buffer.numberOfChannels; c++) channels.push(buffer.getChannelData(c));
  const frames = buffer.length;
  const bytes = 44 + frames * channels.length * 2;
  const view = new DataView(new ArrayBuffer(bytes));
  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, bytes - 8, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels.length, true);
  view.setUint32(24, buffer.sampleRate, true);
  view.setUint32(28, buffer.sampleRate * channels.length * 2, true);
  view.setUint16(32, channels.length * 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, frames * channels.length * 2, true);
  let offset = 44;
  for (let i = 0; i < frames; i++) {
    for (const ch of channels) {
      const x = Math.max(-1, Math.min(1, ch[i]));
      view.setInt16(offset, x < 0 ? x * 0x8000 : x * 0x7fff, true);
      offset += 2;
    }
  }
  let binary = '';
  const u8 = new Uint8Array(view.buffer);
  for (let i = 0; i < u8.length; i += 0x8000) {
    binary += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000) as unknown as number[]);
  }
  return btoa(binary);
}

export function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const u8 = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) u8[i] = binary.charCodeAt(i);
  return u8;
}

export interface ParsedWav {
  channels: Float32Array[];
  sampleRate: number;
}

/** Minimal PCM 16-bit WAV parser — enough to roundtrip our own exports in checks. */
export function decodeWavBytes(bytes: Uint8Array): ParsedWav {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const tag = (offset: number) => String.fromCharCode(view.getUint8(offset), view.getUint8(offset + 1), view.getUint8(offset + 2), view.getUint8(offset + 3));
  if (tag(0) !== 'RIFF' || tag(8) !== 'WAVE') throw new Error('not a RIFF/WAVE file');
  let offset = 12;
  let channels = 0;
  let sampleRate = 0;
  let bits = 0;
  let dataStart = -1;
  let dataLength = 0;
  while (offset + 8 <= bytes.length) {
    const id = tag(offset);
    const size = view.getUint32(offset + 4, true);
    if (id === 'fmt ') {
      channels = view.getUint16(offset + 10, true);
      sampleRate = view.getUint32(offset + 12, true);
      bits = view.getUint16(offset + 22, true);
    } else if (id === 'data') {
      dataStart = offset + 8;
      dataLength = size;
      break;
    }
    offset += 8 + size + (size % 2);
  }
  if (dataStart < 0 || channels === 0 || bits !== 16) throw new Error('unsupported WAV');
  const frames = Math.floor(dataLength / (channels * 2));
  const out: Float32Array[] = [];
  for (let c = 0; c < channels; c++) out.push(new Float32Array(frames));
  for (let i = 0; i < frames; i++) {
    for (let c = 0; c < channels; c++) {
      const sample = view.getInt16(dataStart + (i * channels + c) * 2, true);
      out[c][i] = sample < 0 ? sample / 0x8000 : sample / 0x7fff;
    }
  }
  return { channels: out, sampleRate };
}

export function buildBoardJson(clips: BoardClip[]): string {
  const board: BoardJson = { version: 1, app: 'freeaudioeditor-online', buttons: clips };
  return JSON.stringify(board);
}

export interface ImportedClip {
  name: string;
  color: string;
  audioB64: string;
}

/**
 * Own format and SoundTools format both land here. SoundTools buttons carry a
 * gradient string in `color` — mapped to the nearest palette id — and the same
 * audioB64 field our format uses. Buttons without audio are skipped.
 */
export function parseBoardJson(text: string): ImportedClip[] {
  const data: unknown = JSON.parse(text);
  const buttons = (data as { buttons?: unknown }).buttons;
  if (!Array.isArray(buttons)) throw new Error('no buttons');
  const clips: ImportedClip[] = [];
  for (const raw of buttons) {
    const btn = raw as { name?: unknown; color?: unknown; audioB64?: unknown };
    if (typeof btn.audioB64 !== 'string' || btn.audioB64.length === 0) continue;
    let color: string;
    if (typeof btn.color === 'string' && btn.color.includes('gradient')) {
      color = nearestColor(btn.color);
    } else if (isPaletteColor(btn.color)) {
      color = btn.color;
    } else {
      color = PALETTE[0].id;
    }
    clips.push({
      name: String(btn.name ?? 'Sound').slice(0, 24),
      color,
      audioB64: btn.audioB64,
    });
  }
  return clips;
}
