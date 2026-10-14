/**
 * Generates the WAV fixture used by smoke-test.mjs: 10 s, 48 kHz, mono,
 * 16-bit PCM — the first 5 s are silence, the last 5 s a 1 kHz sine at 90%
 * amplitude. The silent half lets the smoke test verify that a speed edit
 * renders the *selected* range, not just a range of the right length.
 *
 * Run directly: node scripts/make-test-tone.mjs [output-path]
 */
import { writeFileSync } from 'node:fs';

export function generateTestWav(path, seconds = 10, rate = 48000) {
  const frames = seconds * rate;
  const pcm = Buffer.alloc(frames * 2);
  for (let i = 0; i < frames; i++) {
    const t = i / rate;
    const v = t >= 5 ? Math.round(Math.sin(2 * Math.PI * 1000 * t) * 0.9 * 32767) : 0;
    pcm.writeInt16LE(v, i * 2);
  }
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // PCM
  header.writeUInt16LE(1, 22); // mono
  header.writeUInt32LE(rate, 24);
  header.writeUInt32LE(rate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  writeFileSync(path, Buffer.concat([header, pcm]));
}

if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  generateTestWav(process.argv[2] ?? '/tmp/test-tone.wav');
  console.log('Test tone written');
}
