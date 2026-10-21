/**
 * Spotify Basic Pitch, in the tab. Weights are the Apache-2.0 model shipped
 * with @spotify/basic-pitch, served from this site.
 * ponytail: the library keeps each window's tensors until GC. The page refuses
 * audio longer than 3 minutes so that stays in the tens of MB. Upgrade path:
 * dispose the three output tensors inside a local copy of evaluateModel.
 */
import { notesToMidi, type MidiNote } from './midi-file';

const RATE = 22050;
const MODEL = '/models/basic-pitch/model.json';

let modelPromise: Promise<unknown> | null = null;

export async function toMono22050(buffer: AudioBuffer): Promise<Float32Array> {
  const frames = Math.max(1, Math.ceil(buffer.duration * RATE));
  const offline = new OfflineAudioContext(1, frames, RATE);
  const src = offline.createBufferSource();
  src.buffer = buffer;
  src.connect(offline.destination);
  src.start();
  const rendered = await offline.startRendering();
  return rendered.getChannelData(0).slice();
}

export async function audioToMidi(samples: Float32Array, onProgress: (percent: number) => void): Promise<{ notes: MidiNote[]; bytes: Uint8Array }> {
  onProgress(0);
  const tf = await import('@tensorflow/tfjs');
  const { BasicPitch, noteFramesToTime, outputToNotesPoly } = await import('@spotify/basic-pitch');
  if (!(await tf.setBackend('webgl'))) await tf.setBackend('cpu');
  await tf.ready();
  if (!modelPromise) {
    modelPromise = tf.loadGraphModel(MODEL, { onProgress: (fraction) => onProgress(Math.round(fraction * 20)) }).catch((err: unknown) => {
      modelPromise = null;
      throw err;
    });
  }
  const model = await modelPromise;
  onProgress(20);
  const basicPitch = new BasicPitch(Promise.resolve(model) as Promise<never>);
  const frames: number[][] = [];
  const onsets: number[][] = [];
  await basicPitch.evaluateModel(
    samples,
    (frame, onset) => {
      for (let i = 0; i < frame.length; i++) {
        const row = frame[i];
        const onsetRow = onset[i];
        if (row && onsetRow) {
          frames.push(row);
          onsets.push(onsetRow);
        }
      }
    },
    (fraction) => onProgress(20 + Math.round(fraction * 80)),
  );
  const notes: MidiNote[] = noteFramesToTime(outputToNotesPoly(frames, onsets))
    .filter((note) => note.durationSeconds > 0 && note.amplitude > 0)
    .map((note) => ({
      pitch: note.pitchMidi,
      startSec: note.startTimeSeconds,
      durationSec: note.durationSeconds,
      velocity: note.amplitude,
    }));
  return { notes, bytes: notesToMidi(notes) };
}
