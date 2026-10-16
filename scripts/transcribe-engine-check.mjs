/**
 * Real end-to-end check of the exact Whisper pipeline options the site ships
 * (same model id, dtype, chunking, auto language detection and streamer
 * progress as src/editor/transcribe-worker.ts). Runs in Node — the pipeline
 * API is identical to the browser worker's; only the ONNX runtime backend
 * differs.
 *
 * First run downloads the whisper-tiny weights (~40 MB) and caches them.
 * Sample: MLK excerpt, 16 kHz mono. Usage: node scripts/transcribe-engine-check.mjs
 *
 * Note: onnxruntime-node can crash at process exit ("mutex lock failed") after
 * all checks have printed — an ORT teardown quirk, not a check failure.
 */
const SAMPLE_URL =
  'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/mlk.wav';

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || !detail ? '' : '  ' + detail}`);
  if (!ok) failures++;
};

/** Minimal PCM16 WAV → mono Float32Array (the worker's input format). */
function wavToFloat32(buf) {
  const view = new DataView(buf);
  const channels = view.getUint16(22, true);
  const sampleRate = view.getUint32(24, true);
  const samples = (view.byteLength - 44) / 2 / channels;
  const out = new Float32Array(samples);
  for (let i = 0; i < samples; i++) out[i] = view.getInt16(44 + i * 2 * channels, true) / 32768;
  return { audio: out, sampleRate };
}

const res = await fetch(SAMPLE_URL);
if (!res.ok) throw new Error(`sample download failed: ${res.status}`);
const { audio, sampleRate } = wavToFloat32(await res.arrayBuffer());
check('sample decodes to 16 kHz mono PCM', sampleRate === 16000 && audio.length > 10000, `rate=${sampleRate} len=${audio.length}`);

console.log('Loading whisper-tiny (cached after first run)…');
const { pipeline, env, Tensor } = await import('@huggingface/transformers');
env.allowLocalModels = false;
const pipe = await pipeline('automatic-speech-recognition', 'onnx-community/whisper-tiny', {
  dtype: 'q8',
});

// --- Auto language detection: one decoder step on the first 30 s ---
const gc = pipe.model.generation_config;
const langById = Object.fromEntries(Object.entries(gc.lang_to_id).map(([k, v]) => [Number(v), k]));
const features = await pipe.processor(audio.subarray(0, Math.min(audio.length, 30 * 16000)));
const detOut = await pipe.model.generate({
  inputs: features.input_features,
  decoder_input_ids: new Tensor('int64', BigInt64Array.from([BigInt(Number(gc.decoder_start_token_id))]), [1, 1]),
  max_new_tokens: 1,
  min_new_tokens: 1,
});
const detToken = Number((detOut.sequences ?? detOut).tolist()[0][1]);
const detected = langById[detToken]?.replaceAll('<|', '').replaceAll('|>', '') ?? null;
console.log('DETECTED LANGUAGE:', detected);
check('auto-detect recognizes English speech', detected === 'en', String(detected));

// --- Transcription with the detected language + streamer progress ---
const audioSeconds = audio.length / 16000;
const timestampBegin = Number(pipe.tokenizer?.timestamp_begin ?? 51865);
let windowIndex = 0;
let windowTime = 0;
const progressEvents = [];
const streamer = {
  put(value) {
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
    const seconds = Math.min(audioSeconds, windowIndex * 20 + windowTime);
    progressEvents.push(Math.min(99, Math.round((seconds / audioSeconds) * 100)));
  },
  end() {},
};

const output = await pipe(audio, {
  chunk_length_s: 30,
  stride_length_s: 5,
  return_timestamps: true,
  task: 'transcribe',
  language: detected,
  streamer,
});

console.log('TEXT:', JSON.stringify(output.text));
console.log('CHUNKS:', JSON.stringify(output.chunks?.slice(0, 3)), `… ${output.chunks?.length ?? 0} total`);
console.log('PROGRESS EVENTS:', progressEvents.join(','));

check('transcript recognizes the speech', /freedom|dream|nation/i.test(output.text), output.text);
check('timestamps returned', Array.isArray(output.chunks) && output.chunks.length > 0);
const first = output.chunks?.[0];
check(
  'first cue starts near zero with a plausible end',
  first && typeof first.timestamp[0] === 'number' && first.timestamp[0] < 1 && (first.timestamp[1] ?? 0) > first.timestamp[0],
  JSON.stringify(first),
);
check('streamer produced progress events', progressEvents.length > 0);
check(
  'progress is monotonic and bounded',
  progressEvents.every((p, i) => p >= 0 && p <= 99 && (i === 0 || p >= progressEvents[i - 1])),
  progressEvents.join(','),
);
check('final progress covers most of the clip', (progressEvents.at(-1) ?? 0) >= 60, `last=${progressEvents.at(-1)}`);

if (failures) {
  console.error(`\n${failures} engine check(s) failed`);
  process.exit(1);
}
console.log('\nAll transcribe engine checks passed.');
process.exit(0);
