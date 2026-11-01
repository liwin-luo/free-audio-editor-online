/** RNNoise (Xiph) noise suppression via the @jitsi/rnnoise-wasm build. Gating
 *  trained on speech at 48 kHz: noise around detected voice goes down, the
 *  voice keeps its level. Import only through denoise-browser.ts in the editor
 *  runtime — this module stays loadable from a Node check script.
 *
 *  Streaming contract of this wasm build, verified by sample-level tests in
 *  scripts/denoise-check.mjs: process_frame(st, out, in) writes the processed
 *  version of the PREVIOUS call's input to `out`, so the loop reads `out` one
 *  call behind and compensates the placement. Frames are consumed in int16
 *  range floats (xiph demo contract), hence the ±32768 scaling. */

export const DENOISE_RATE = 48000;
/** xiph RNNoise FRAME_SIZE — 10 ms at 48 kHz; the jitsi build exports no getter. */
export const DENOISE_FRAME = 480;

const INT16_SCALE = 32768;

export interface DenoiseWasmModule {
  HEAPF32: Float32Array;
  _malloc(size: number): number;
  _free(ptr: number): void;
  _rnnoise_create(): number;
  _rnnoise_process_frame(st: number, out: number, inPtr: number): number;
  _rnnoise_destroy(st: number): void;
}

export type DenoiseProgress = (percent: number) => void;

/** Crossfade weight between the dry input and the gated output. 1 = maximum suppression. */
export function clampStrength(strength: number): number {
  return Math.min(1, Math.max(0, strength));
}

/**
 * Denoise Float32 channels that already sit at 48 kHz. Each channel keeps its
 * own RNNoise state so a stereo image survives. The input arrays are never
 * written; control returns to the event loop between chunks so a long file
 * keeps painting. Returns new arrays.
 */
export async function denoiseChannels48k(
  channels: Float32Array[],
  mod: DenoiseWasmModule,
  strength: number,
  onProgress?: DenoiseProgress,
): Promise<Float32Array[]> {
  const k = clampStrength(strength);
  if (k <= 0 || channels.length === 0 || (channels[0]?.length ?? 0) === 0) return channels;

  const frame = DENOISE_FRAME;
  const states: number[] = [];
  for (let c = 0; c < channels.length; c++) {
    const st = mod._rnnoise_create();
    if (!st) throw new Error('rnnoise_create failed');
    states.push(st);
  }
  const inPtr = mod._malloc(frame * 4);
  const outPtr = mod._malloc(frame * 4);
  const heap = mod.HEAPF32;
  const inView = heap.subarray(inPtr >> 2, (inPtr >> 2) + frame);
  const outView = heap.subarray(outPtr >> 2, (outPtr >> 2) + frame);

  const outs = channels.map((ch) => new Float32Array(ch.length));
  const total = channels.reduce((sum, ch) => sum + ch.length, 0);
  let done = 0;
  /** Yields ride on whole frames; ~5 s of audio per chunk keeps the UI alive. */
  const chunk = 500 * frame;

  try {
    for (let c = 0; c < channels.length; c++) {
      const dry = channels[c]!;
      const out = outs[c]!;
      const st = states[c]!;
      const frames = Math.ceil(dry.length / frame);
      // One call past the last frame flushes it: the build emits frame f's
      // result on call f+1. A zero flush call covers the tail.
      for (let f = 0; f <= frames; f++) {
        if (f < frames) {
          const base = f * frame;
          for (let j = 0; j < frame; j++) inView[j] = dry[base + j]! * INT16_SCALE;
        } else {
          for (let j = 0; j < frame; j++) inView[j] = 0;
        }
        mod._rnnoise_process_frame(st, outPtr, inPtr);
        if (f > 0) {
          const base = (f - 1) * frame;
          const count = Math.min(frame, dry.length - base);
          for (let j = 0; j < count; j++) {
            out[base + j] = dry[base + j]! * (1 - k) + (outView[j]! / INT16_SCALE) * k;
          }
        }
        if ((f * frame) % chunk < frame) {
          done = Math.min(c * Math.ceil(dry.length / frame) * frame + (f + 1) * frame, total);
          if (onProgress && total > 0) onProgress(Math.min(99, Math.round((done / total) * 100)));
          await new Promise((r) => setTimeout(r, 0));
        }
      }
    }
  } finally {
    for (const st of states) mod._rnnoise_destroy(st);
    mod._free(inPtr);
    mod._free(outPtr);
  }
  if (onProgress && total > 0) onProgress(100);
  return outs;
}
