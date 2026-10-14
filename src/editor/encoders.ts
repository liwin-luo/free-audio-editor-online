/**
 * Export encoders. WAV is encoded natively (lossless, zero dependencies);
 * MP3 uses lamejs loaded lazily from a public CDN so the encoder cost is
 * only paid by users who actually export MP3.
 */
import { clamp } from '../lib/format';

export function encodeWav(buffer: AudioBuffer): Blob {
  const channels = buffer.numberOfChannels;
  const rate = buffer.sampleRate;
  const frames = buffer.length;
  const bytesPerSample = 2;
  const blockAlign = channels * bytesPerSample;
  const dataSize = frames * blockAlign;
  const out = new ArrayBuffer(44 + dataSize);
  const view = new DataView(out);

  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
  };

  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, channels, true);
  view.setUint32(24, rate, true);
  view.setUint32(28, rate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, dataSize, true);

  const data: Float32Array[] = [];
  for (let c = 0; c < channels; c++) data.push(buffer.getChannelData(c));

  let offset = 44;
  for (let i = 0; i < frames; i++) {
    for (let c = 0; c < channels; c++) {
      const v = clamp(data[c][i], -1, 1);
      view.setInt16(offset, v < 0 ? v * 0x8000 : v * 0x7fff, true);
      offset += 2;
    }
  }
  return new Blob([out], { type: 'audio/wav' });
}

const LAME_CDN = 'https://cdn.jsdelivr.net/npm/@breezystack/lamejs@1.2.7/+esm';

type LameEncoder = {
  encodeBuffer: (left: Int16Array, right?: Int16Array) => Int8Array;
  flush: () => Int8Array;
};

function toInt16(samples: Float32Array): Int16Array {
  const out = new Int16Array(samples.length);
  for (let i = 0; i < samples.length; i++) {
    const v = clamp(samples[i], -1, 1);
    out[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
  }
  return out;
}

async function loadLame(): Promise<typeof lamejsNamespace.Mp3Encoder> {
  const mod = (await import(/* @vite-ignore */ LAME_CDN)) as Record<string, unknown>;
  const enc =
    (mod.Mp3Encoder as typeof lamejsNamespace.Mp3Encoder | undefined) ??
    ((mod.default as Record<string, unknown> | undefined)?.Mp3Encoder as
      | typeof lamejsNamespace.Mp3Encoder
      | undefined) ??
    (mod.default as typeof lamejsNamespace.Mp3Encoder | undefined);
  if (typeof enc !== 'function') throw new Error('lamejs failed to load');
  return enc;
}

// Structural placeholder so the type above reads clearly
declare namespace lamejsNamespace {
  class Mp3Encoder {
    constructor(channels: number, sampleRate: number, kbps: number);
    encodeBuffer(left: Int16Array, right?: Int16Array): Int8Array;
    flush(): Int8Array;
  }
}

export async function encodeMp3(buffer: AudioBuffer, kbps: number): Promise<Blob> {
  const Mp3Encoder = await loadLame();
  const channels = Math.min(buffer.numberOfChannels, 2);
  const encoder: LameEncoder = new Mp3Encoder(channels, buffer.sampleRate, kbps);

  const left = toInt16(buffer.getChannelData(0));
  const right = channels > 1 ? toInt16(buffer.getChannelData(1)) : undefined;

  const blockSize = 1152;
  const parts: Uint8Array[] = [];
  for (let i = 0; i < left.length; i += blockSize) {
    const l = left.subarray(i, i + blockSize);
    const chunk = right ? encoder.encodeBuffer(l, right.subarray(i, i + blockSize)) : encoder.encodeBuffer(l);
    if (chunk.length > 0) parts.push(new Uint8Array(chunk));
  }
  const tail = encoder.flush();
  if (tail.length > 0) parts.push(new Uint8Array(tail));

  return new Blob(parts as BlobPart[], { type: 'audio/mpeg' });
}

export interface ExportFormat {
  id: string;
  label: string;
  ext: string;
  kind: 'mp3' | 'wav';
  kbps?: number;
}

export const EXPORT_FORMATS: ExportFormat[] = [
  { id: 'mp3-320', label: 'MP3 · 320 kbps', ext: 'mp3', kind: 'mp3', kbps: 320 },
  { id: 'mp3-192', label: 'MP3 · 192 kbps', ext: 'mp3', kind: 'mp3', kbps: 192 },
  { id: 'mp3-128', label: 'MP3 · 128 kbps', ext: 'mp3', kind: 'mp3', kbps: 128 },
  { id: 'wav', label: 'WAV · lossless', ext: 'wav', kind: 'wav' },
];

export function getFormat(id: string): ExportFormat {
  return EXPORT_FORMATS.find((f) => f.id === id) ?? EXPORT_FORMATS[1];
}
