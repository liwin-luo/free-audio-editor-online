/** Browser glue for RNNoise: lazy wasm load plus AudioBuffer resampling in and
 *  out of the 48 kHz the model runs at. Node check scripts import
 *  denoise.ts directly and pass wasmBinary themselves. */
import wasmUrl from '@jitsi/rnnoise-wasm/dist/rnnoise.wasm?url';
import {
  DENOISE_RATE,
  clampStrength,
  denoiseChannels48k,
  type DenoiseProgress,
  type DenoiseWasmModule,
} from './denoise';

let modPromise: Promise<DenoiseWasmModule> | null = null;

function acquireModule(): Promise<DenoiseWasmModule> {
  modPromise ??= (async () => {
    const { createRNNWasmModule } = await import('@jitsi/rnnoise-wasm');
    return createRNNWasmModule({ locateFile: () => wasmUrl });
  })();
  return modPromise;
}

async function resample(buffer: AudioBuffer, rate: number): Promise<AudioBuffer> {
  if (buffer.sampleRate === rate) return buffer;
  const ctx = new OfflineAudioContext(
    Math.min(buffer.numberOfChannels, 2),
    Math.ceil(buffer.duration * rate) || 1,
    rate,
  );
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.connect(ctx.destination);
  src.start();
  return ctx.startRendering();
}

/** Denoise a whole AudioBuffer at 48 kHz and give the result back at the
 *  source rate. A 44.1 kHz file is resampled on the way in and on the way out. */
export async function denoiseAudioBuffer(
  buffer: AudioBuffer,
  strength: number,
  onProgress?: DenoiseProgress,
): Promise<AudioBuffer> {
  if (clampStrength(strength) <= 0) return buffer;
  const mod = await acquireModule();
  const at48 = await resample(buffer, DENOISE_RATE);
  const channels = Array.from({ length: at48.numberOfChannels }, (_, i) => at48.getChannelData(i));
  const denoised = await denoiseChannels48k(channels, mod, strength, onProgress);
  const next = new AudioBuffer({
    length: denoised[0]!.length,
    numberOfChannels: denoised.length,
    sampleRate: DENOISE_RATE,
  });
  for (let c = 0; c < denoised.length; c++) next.getChannelData(c).set(denoised[c]!);
  return resample(next, buffer.sampleRate);
}
