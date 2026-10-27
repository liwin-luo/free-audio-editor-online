import { spawn } from 'node:child_process';
import {
  BITRATES,
  EXTENSIONS,
  LOUDNORM,
  TAG_KEYS,
  fadeFilter,
  joinArgs,
  tagWriteArgs,
  tempoFilter,
  transcodeArgs,
  trimArgs,
} from './args.js';

export const FFMPEG = process.env.FFMPEG_PATH || 'ffmpeg';
export const FFPROBE = process.env.FFPROBE_PATH || 'ffprobe';

/** ponytail: one call is killed at 15 minutes. A longer file needs a higher ceiling here. */
const TIMEOUT_MS = 15 * 60 * 1000;

const pathProp = { type: 'string', description: 'Absolute path on this computer' };

function tool(name, description, properties, required) {
  return {
    name,
    description,
    inputSchema: { type: 'object', properties, required, additionalProperties: false },
  };
}

const bitrateProp = {
  type: 'integer',
  description: `kbps for mp3, m4a, and ogg. One of ${BITRATES.join(', ')}. Default 192. Ignored for wav and flac.`,
};

export const TOOLS = [
  tool(
    'audio_trim',
    'Trim a local audio file from startSec to endSec (seconds). Omit endSec to keep through the end. WAV is 16-bit PCM of the decoded audio. MP3, M4A, and OGG are encoded once. Does not upload the file.',
    {
      input: pathProp,
      output: { ...pathProp, description: 'New file. Extension mp3, wav, flac, m4a, or ogg.' },
      startSec: { type: 'number', description: 'Start, seconds, 0 to 86400' },
      endSec: { type: 'number', description: 'End, seconds, greater than startSec. Omit to keep the rest.' },
      bitrateKbps: bitrateProp,
    },
    ['input', 'output', 'startSec'],
  ),
  tool(
    'audio_join',
    'Concatenate 2 to 20 local audio files in order. crossfadeSec is 0 to 5. Output is 44100 Hz stereo. Does not upload the files.',
    {
      inputs: { type: 'array', items: { type: 'string' }, minItems: 2, maxItems: 20 },
      output: pathProp,
      crossfadeSec: { type: 'number', description: '0 to 5. Default 0, a hard join.' },
      bitrateKbps: bitrateProp,
    },
    ['inputs', 'output'],
  ),
  tool(
    'audio_convert',
    `Convert a local audio file. Output extension sets the codec: ${EXTENSIONS.join(', ')}. Lossy bitrates: ${BITRATES.join(', ')} kbps, default 192. Does not upload the file.`,
    { input: pathProp, output: pathProp, bitrateKbps: bitrateProp },
    ['input', 'output'],
  ),
  tool(
    'audio_normalize',
    `One-pass ffmpeg loudnorm at -16 LUFS, -1.5 dBTP, LRA 11 (${LOUDNORM}). Not a second measured pass. Does not upload the file.`,
    { input: pathProp, output: pathProp, bitrateKbps: bitrateProp },
    ['input', 'output'],
  ),
  tool(
    'audio_fade',
    'Fade a local file in, out, or both. Each fade is 0 to 30 seconds. At least one must be above 0. Does not upload the file.',
    {
      input: pathProp,
      output: pathProp,
      fadeInSec: { type: 'number', description: '0 to 30. Default 0.' },
      fadeOutSec: { type: 'number', description: '0 to 30. Default 0.' },
      bitrateKbps: bitrateProp,
    },
    ['input', 'output'],
  ),
  tool(
    'audio_extract',
    'Extract the soundtrack of a local video to mp3, wav, flac, m4a, or ogg. Does not fetch a URL. A codec opens only when this ffmpeg build includes its decoder. Does not upload the file.',
    { input: pathProp, output: pathProp, bitrateKbps: bitrateProp },
    ['input', 'output'],
  ),
  tool(
    'audio_tags',
    `Read or write text tags. Write copies the audio (-c copy) and writes ID3v2.3. Fields: ${TAG_KEYS.join(', ')}. Does not edit cover art. Does not upload the file.`,
    {
      action: { type: 'string', enum: ['read', 'write'] },
      input: pathProp,
      output: { ...pathProp, description: 'Required for write. A different file.' },
      title: { type: 'string' },
      artist: { type: 'string' },
      album: { type: 'string' },
      date: { type: 'string' },
      genre: { type: 'string' },
      track: { type: 'string' },
      comment: { type: 'string' },
    },
    ['action', 'input'],
  ),
  tool(
    'audio_tempo',
    'Change tempo with ffmpeg atempo from 0.5 to 2. Pitch stays. 1 writes the file without the stretch. Does not upload the file.',
    {
      input: pathProp,
      output: pathProp,
      factor: { type: 'number', description: '0.5 to 2. 0.5 is half speed, 2 is double.' },
      bitrateKbps: bitrateProp,
    },
    ['input', 'output', 'factor'],
  ),
];

function run(bin, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(bin, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => {
      child.kill('SIGKILL');
    }, TIMEOUT_MS);
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (chunk) => {
      stdout += chunk;
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
    child.on('error', (err) => {
      clearTimeout(timer);
      if (err && err.code === 'ENOENT') {
        reject(new Error(`${bin} was not found on PATH. Install ffmpeg, then restart the client.`));
        return;
      }
      reject(err);
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve({ code: code ?? 1, stdout, stderr });
    });
  });
}

async function ff(args) {
  const result = await run(FFMPEG, args);
  if (result.code !== 0) {
    const tail = result.stderr.trim().split('\n').slice(-8).join('\n');
    throw new Error(tail || `ffmpeg exited ${result.code}`);
  }
}

async function durationOf(file) {
  const result = await run(FFPROBE, [
    '-v',
    'error',
    '-show_entries',
    'format=duration',
    '-of',
    'default=nw=1:nk=1',
    file,
  ]);
  if (result.code !== 0) {
    throw new Error(result.stderr.trim() || 'ffprobe could not read the duration');
  }
  const duration = Number(result.stdout.trim());
  if (!Number.isFinite(duration) || duration <= 0) throw new Error('ffprobe did not return a duration');
  return duration;
}

function withFilter(input, output, filter, bitrate) {
  const args = transcodeArgs(input, output, bitrate);
  const at = args.indexOf('-vn');
  args.splice(at, 0, '-af', filter);
  return args;
}

export async function callTool(name, raw) {
  const args = raw ?? {};
  if (name === 'audio_trim') {
    await ff(trimArgs(args.input, args.output, args.startSec, args.endSec, args.bitrateKbps));
    return `Wrote ${args.output} (${(await durationOf(args.output)).toFixed(2)} s)`;
  }
  if (name === 'audio_join') {
    await ff(joinArgs(args.inputs, args.output, args.crossfadeSec, args.bitrateKbps));
    return `Wrote ${args.output} (${(await durationOf(args.output)).toFixed(2)} s)`;
  }
  if (name === 'audio_convert' || name === 'audio_extract') {
    await ff(transcodeArgs(args.input, args.output, args.bitrateKbps));
    return `Wrote ${args.output} (${(await durationOf(args.output)).toFixed(2)} s)`;
  }
  if (name === 'audio_normalize') {
    await ff(withFilter(args.input, args.output, LOUDNORM, args.bitrateKbps));
    return `Wrote ${args.output} (${(await durationOf(args.output)).toFixed(2)} s). One loudnorm pass at -16 LUFS, -1.5 dBTP, LRA 11.`;
  }
  if (name === 'audio_fade') {
    const duration = await durationOf(args.input);
    const filter = fadeFilter(duration, args.fadeInSec ?? 0, args.fadeOutSec ?? 0);
    await ff(withFilter(args.input, args.output, filter, args.bitrateKbps));
    return `Wrote ${args.output} (${(await durationOf(args.output)).toFixed(2)} s)`;
  }
  if (name === 'audio_tempo') {
    await ff(withFilter(args.input, args.output, tempoFilter(args.factor), args.bitrateKbps));
    return `Wrote ${args.output} (${(await durationOf(args.output)).toFixed(2)} s)`;
  }
  if (name === 'audio_tags') {
    if (args.action === 'read') {
      const result = await run(FFPROBE, ['-v', 'error', '-show_entries', 'format_tags', '-of', 'json', args.input]);
      if (result.code !== 0) throw new Error(result.stderr.trim() || 'ffprobe could not read tags');
      return result.stdout.trim() || '{}';
    }
    if (args.action === 'write') {
      if (!args.output) throw new Error('write needs output');
      await ff(tagWriteArgs(args.input, args.output, args));
      return `Wrote ${args.output}. Audio was copied, not re-encoded. Cover art was not edited.`;
    }
    throw new Error('action must be read or write');
  }
  throw new Error(`unknown tool ${name}`);
}
