/**
 * Export encoders. WAV is encoded natively (lossless, zero dependencies);
 * MP3 uses lamejs and M4R uses WebCodecs + an MP4 muxer, both loaded lazily
 * from public CDNs so the encoder cost is only paid by users who actually
 * export those formats.
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
  kind: 'mp3' | 'wav' | 'm4r';
  kbps?: number;
}

export const EXPORT_FORMATS: ExportFormat[] = [
  { id: 'mp3-320', label: 'MP3 · 320 kbps', ext: 'mp3', kind: 'mp3', kbps: 320 },
  { id: 'mp3-192', label: 'MP3 · 192 kbps', ext: 'mp3', kind: 'mp3', kbps: 192 },
  { id: 'mp3-128', label: 'MP3 · 128 kbps', ext: 'mp3', kind: 'mp3', kbps: 128 },
  { id: 'wav', label: 'WAV · lossless', ext: 'wav', kind: 'wav' },
  { id: 'm4r', label: 'M4R · iPhone ringtone', ext: 'm4r', kind: 'm4r', kbps: 192 },
];

export function getFormat(id: string): ExportFormat {
  return EXPORT_FORMATS.find((f) => f.id === id) ?? EXPORT_FORMATS[1];
}

/** Single dispatch used by the editor and the joiner export paths. */
export async function encodeFor(fmt: ExportFormat, buffer: AudioBuffer): Promise<Blob> {
  if (fmt.kind === 'wav') return encodeWav(buffer);
  if (fmt.kind === 'm4r') return encodeM4r(buffer, fmt.kbps ?? 192);
  return encodeMp3(buffer, fmt.kbps ?? 192);
}

// ---------- M4R (AAC-LC in MP4) ----------

const MUXER_CDN = 'https://cdn.jsdelivr.net/npm/mp4-muxer@5/+esm';

/**
 * True when this browser can encode AAC via WebCodecs — the only native path
 * to M4R. Checked once per page load; unsupported browsers never see the
 * M4R option (see Editor init).
 */
export async function isM4rSupported(): Promise<boolean> {
  try {
    if (typeof AudioEncoder === 'undefined') return false;
    const support = await AudioEncoder.isConfigSupported({
      codec: 'mp4a.40.2',
      sampleRate: 44100,
      numberOfChannels: 2,
      bitrate: 192_000,
    });
    return support.supported === true;
  } catch {
    return false;
  }
}

/**
 * Encode to an iPhone-ready .m4r: AAC-LC via the browser's WebCodecs
 * AudioEncoder, muxed into an MP4 container. Mono input is encoded as mono —
 * iPhones accept both.
 */
export async function encodeM4r(buffer: AudioBuffer, kbps = 192): Promise<Blob> {
  const channels = Math.min(buffer.numberOfChannels, 2);
  const config: AudioEncoderConfig = {
    codec: 'mp4a.40.2',
    sampleRate: buffer.sampleRate,
    numberOfChannels: channels,
    bitrate: kbps * 1000,
  };
  const support = await AudioEncoder.isConfigSupported(config);
  if (!support.supported) throw new Error('AAC encoding is not supported in this browser');

  const muxerModule = (await import(/* @vite-ignore */ MUXER_CDN)) as {
    Muxer: new (opts: Record<string, unknown>) => {
      addAudioChunk: (chunk: EncodedAudioChunk, meta?: EncodedAudioChunkMetadata) => void;
      finalize: () => void;
    };
    ArrayBufferTarget: new () => { buffer: ArrayBuffer };
  };
  const target = new muxerModule.ArrayBufferTarget();
  const muxer = new muxerModule.Muxer({
    target,
    audio: { codec: 'aac', sampleRate: buffer.sampleRate, numberOfChannels: channels },
    fastStart: 'in-memory',
  });

  const encoder = new AudioEncoder({
    output: (chunk, meta) => muxer.addAudioChunk(chunk, meta),
    error: (e) => {
      throw e;
    },
  });
  encoder.configure(config);

  // Feed planar f32 frames; 1024 samples per AudioData matches AAC's frame size.
  const frame = 1024;
  const channelData = Array.from({ length: channels }, (_, c) => buffer.getChannelData(c));
  for (let offset = 0; offset < buffer.length; offset += frame) {
    const count = Math.min(frame, buffer.length - offset);
    const data = new Float32Array(count * channels);
    for (let c = 0; c < channels; c++) {
      data.set(channelData[c].subarray(offset, offset + count), c * count);
    }
    const audioData = new AudioData({
      format: 'f32-planar',
      numberOfFrames: count,
      numberOfChannels: channels,
      sampleRate: buffer.sampleRate,
      timestamp: Math.round((offset / buffer.sampleRate) * 1e6),
      data,
    });
    encoder.encode(audioData);
    audioData.close();
  }

  await encoder.flush();
  encoder.close();
  muxer.finalize();
  return new Blob([target.buffer], { type: 'audio/mp4' });
}
