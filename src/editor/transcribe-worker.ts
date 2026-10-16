/// <reference lib="webworker" />
/**
 * Whisper inference worker for the audio-to-text tool. Weights come from the
 * HuggingFace CDN (env.allowLocalModels = false) and the browser caches them
 * after the first download. The pipeline is kept per model+device so switching
 * tiers never pays the download twice; audio arrives as mono 16 kHz Float32,
 * exactly what the ASR pipeline expects.
 *
 * transformers.js has no language auto-detection (it silently forces English),
 * so "auto" here is a real detection pass: one decoder step on the first 30 s,
 * reading the language token Whisper emits after <|startoftranscript|>.
 *
 * Progress comes from a custom generation streamer: Whisper's timestamp
 * tokens (id >= tokenizer.timestamp_begin) mark position inside the current
 * 30 s window, so tracking them yields true audio-position progress.
 *
 * Protocol (in):  { type: 'transcribe', audio, model, language }
 * Protocol (out): device | model-progress | run-progress | result | error
 */
import type { TranscriptChunk } from './srt';

export type TranscribeModel = 'base' | 'tiny';

const MODEL_REPO: Record<TranscribeModel, string> = {
  base: 'onnx-community/whisper-base',
  tiny: 'onnx-community/whisper-tiny',
};

interface TranscribeRequest {
  type: 'transcribe';
  audio: Float32Array;
  model: TranscribeModel;
  /** ISO-639-1 code, or null for auto-detect. */
  language: string | null;
}

type WorkerResponse =
  | { type: 'device'; device: 'webgpu' | 'wasm' }
  | { type: 'model-progress'; percent: number }
  | { type: 'run-progress'; percent: number }
  | { type: 'result'; text: string; chunks: TranscriptChunk[] }
  | { type: 'error'; message: string };

interface WhisperTensor {
  data: BigInt64Array | Float32Array;
  dims: number[];
}

interface Transcriber {
  (audio: Float32Array, options: Record<string, unknown>): Promise<{
    text: string;
    chunks?: { timestamp: [number | null, number | null]; text: string }[];
  }>;
  tokenizer?: { timestamp_begin?: number };
  processor: (audio: Float32Array) => Promise<{ input_features: WhisperTensor }>;
  model: {
    generation_config: {
      decoder_start_token_id: number | { toString(): string };
      lang_to_id: Record<string, number>;
    };
    generate: (inputs: Record<string, unknown>) => Promise<{ sequences?: { tolist(): number[][] } } & { tolist(): number[][] }>;
  };
}

const post = (msg: WorkerResponse) => self.postMessage(msg);

let device: 'webgpu' | 'wasm' = 'wasm';
let cacheKey = '';
let transcriber: Transcriber | null = null;
/** transformers.js is imported lazily; kept here for the detection pass. */
let tf: typeof import('@huggingface/transformers') | null = null;

async function detectDevice(): Promise<'webgpu' | 'wasm'> {
  try {
    const gpu = (navigator as Navigator & { gpu?: { requestAdapter(): Promise<unknown> } }).gpu;
    if (!gpu) return 'wasm';
    return (await gpu.requestAdapter()) ? 'webgpu' : 'wasm';
  } catch {
    return 'wasm';
  }
}

async function loadPipeline(model: TranscribeModel): Promise<Transcriber> {
  tf = await import('@huggingface/transformers');
  tf.env.allowLocalModels = false;
  const progress_callback = (p: { status: string; progress?: number }) => {
    if (p.status === 'progress' && typeof p.progress === 'number') {
      post({ type: 'model-progress', percent: Math.round(p.progress) });
    }
  };
  if (device === 'webgpu') {
    // Known-good WebGPU config: fp32 encoder + q4 decoder.
    return tf.pipeline('automatic-speech-recognition', MODEL_REPO[model], {
      device: 'webgpu',
      dtype: { encoder_model: 'fp32', decoder_model_merged: 'q4' },
      progress_callback,
    }) as unknown as Transcriber;
  }
  return tf.pipeline('automatic-speech-recognition', MODEL_REPO[model], {
    device: 'wasm',
    dtype: 'q8',
    progress_callback,
  }) as unknown as Transcriber;
}

/**
 * One decoder step on the first 30 s: Whisper emits its language guess as the
 * first generated token after <|startoftranscript|>. Returns an ISO-639-1
 * code ('en'), or null when the step yields no language token.
 */
async function detectLanguage(audio: Float32Array): Promise<string | null> {
  if (!transcriber || !tf) return null;
  const slice = audio.subarray(0, Math.min(audio.length, 30 * 16000));
  const features = await transcriber.processor(slice);
  const start = Number(transcriber.model.generation_config.decoder_start_token_id);
  const out = await transcriber.model.generate({
    inputs: features.input_features,
    decoder_input_ids: new tf.Tensor('int64', BigInt64Array.from([BigInt(start)]), [1, 1]),
    max_new_tokens: 1,
    min_new_tokens: 1,
  });
  const seq = (out.sequences ?? out).tolist()[0];
  const token = Number(seq[1]);
  const lang = Object.entries(transcriber.model.generation_config.lang_to_id).find(
    ([, id]) => Number(id) === token,
  )?.[0];
  return lang ? lang.replaceAll('<|', '').replaceAll('|>', '') : null;
}

/**
 * Timestamp-token streamer. The chunked pipeline walks the audio in 30 s
 * windows advancing by 20 s (chunk 30 − 2 × stride 5); each window's decode
 * emits Whisper timestamp tokens at 0.02 s resolution, which map back to a
 * global audio position. Imprecise at window seams — it is a progress bar,
 * not a clock.
 */
function makeProgressStreamer(audioSeconds: number, timestampBegin: number) {
  const jump = 20;
  let windowIndex = 0;
  let windowTime = 0;
  return {
    put(value: bigint[][] | number[][]): void {
      for (const row of value) {
        for (const raw of row) {
          const id = Number(raw);
          if (id < timestampBegin) continue;
          const t = (id - timestampBegin) * 0.02;
          if (t === 0) {
            if (windowTime > 0) {
              windowIndex += 1;
              windowTime = 0;
            }
          } else if (t > windowTime) {
            windowTime = t;
          }
        }
      }
      const seconds = Math.min(audioSeconds, windowIndex * jump + windowTime);
      post({ type: 'run-progress', percent: Math.min(99, Math.round((seconds / audioSeconds) * 100)) });
    },
    end(): void {},
  };
}

self.addEventListener('message', (e: MessageEvent<TranscribeRequest>) => {
  const msg = e.data;
  if (msg?.type !== 'transcribe') return;
  void (async () => {
    try {
      if (!transcriber) {
        device = await detectDevice();
        post({ type: 'device', device });
      }
      const key = `${msg.model}|${device}`;
      if (key !== cacheKey || !transcriber) {
        transcriber = await loadPipeline(msg.model);
        cacheKey = key;
      }

      let language = msg.language;
      if (!language) language = (await detectLanguage(msg.audio)) ?? 'en';

      const audioSeconds = msg.audio.length / 16000;
      const timestampBegin = Number(transcriber.tokenizer?.timestamp_begin ?? 51865);
      const output = await transcriber(msg.audio, {
        chunk_length_s: 30,
        stride_length_s: 5,
        return_timestamps: true,
        task: 'transcribe',
        language,
        streamer: makeProgressStreamer(audioSeconds, timestampBegin),
      });

      const chunks: TranscriptChunk[] = (output.chunks ?? [])
        .filter((c) => c.timestamp[0] !== null)
        .map((c) => ({
          start: c.timestamp[0] as number,
          end: c.timestamp[1],
          text: c.text,
        }));
      post({ type: 'result', text: output.text, chunks });
    } catch (err) {
      post({ type: 'error', message: err instanceof Error ? err.message : String(err) });
    }
  })();
});
