/**
 * ffmpeg argv builders. No shell. File paths stay in their own argv slots.
 * Filter graphs are built only from counts and numbers checked here.
 */
import path from 'node:path';

export const BITRATES = [64, 96, 128, 192, 256, 320];
export const EXTENSIONS = ['mp3', 'wav', 'flac', 'm4a', 'ogg'];
export const TAG_KEYS = ['title', 'artist', 'album', 'date', 'genre', 'track', 'comment'];
export const LOUDNORM = 'loudnorm=I=-16:TP=-1.5:LRA=11';

const LOSSY = new Set(['mp3', 'm4a', 'ogg']);

export function fmt(n) {
  return String(Math.round(n * 1000) / 1000);
}

export function filePath(value, name) {
  if (typeof value !== 'string' || value.length === 0 || value.includes('\0')) {
    throw new Error(`${name} must be a file path`);
  }
  if (value.startsWith('-')) throw new Error(`${name} must not start with -`);
  return value;
}

export function sameFile(a, b) {
  return path.resolve(a) === path.resolve(b);
}

export function seconds(value, name, min, max) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`${name} must be a number`);
  }
  if (value < min || value > max) throw new Error(`${name} must be from ${min} to ${max}`);
  return value;
}

export function extOf(output) {
  const match = /\.([A-Za-z0-9]+)$/.exec(output);
  if (!match) throw new Error(`output needs an extension: ${EXTENSIONS.join(', ')}`);
  const ext = match[1].toLowerCase();
  if (!EXTENSIONS.includes(ext)) {
    throw new Error(`unsupported output .${ext}. Use ${EXTENSIONS.join(', ')}`);
  }
  return ext;
}

/** @returns {number | null} kbps for lossy outputs. null for wav and flac. */
export function bitrateOf(value, ext) {
  if (!LOSSY.has(ext)) return null;
  const bitrate = value === undefined ? 192 : value;
  if (!BITRATES.includes(bitrate)) {
    throw new Error(`bitrateKbps must be one of ${BITRATES.join(', ')}`);
  }
  return bitrate;
}

export function encodeTail(ext, bitrate) {
  if (ext === 'wav') return ['-c:a', 'pcm_s16le'];
  if (ext === 'flac') return ['-c:a', 'flac'];
  if (ext === 'mp3') return ['-c:a', 'libmp3lame', '-b:a', `${bitrate}k`];
  if (ext === 'm4a') return ['-c:a', 'aac', '-b:a', `${bitrate}k`];
  return ['-c:a', 'libvorbis', '-b:a', `${bitrate}k`];
}

export function transcodeArgs(input, output, bitrate) {
  filePath(input, 'input');
  filePath(output, 'output');
  if (sameFile(input, output)) throw new Error('output must be a different file');
  const ext = extOf(output);
  return ['-y', '-i', input, '-vn', ...encodeTail(ext, bitrateOf(bitrate, ext)), output];
}

export function trimArgs(input, output, startSec, endSec, bitrate) {
  const start = seconds(startSec, 'startSec', 0, 86400);
  const args = ['-y', '-i', filePath(input, 'input'), '-ss', fmt(start)];
  if (endSec !== undefined) {
    const end = seconds(endSec, 'endSec', 0, 86400);
    if (end <= start) throw new Error('endSec must be greater than startSec');
    args.push('-t', fmt(end - start));
  }
  filePath(output, 'output');
  if (sameFile(input, output)) throw new Error('output must be a different file');
  const ext = extOf(output);
  args.push('-vn', ...encodeTail(ext, bitrateOf(bitrate, ext)), output);
  return args;
}

export function joinFilter(count, crossfadeSec) {
  const prep = [];
  const labels = [];
  for (let i = 0; i < count; i++) {
    prep.push(
      `[${i}:a]aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo[a${i}]`,
    );
    labels.push(`[a${i}]`);
  }
  if (crossfadeSec === 0) {
    return `${prep.join(';')};${labels.join('')}concat=n=${count}:v=0:a=1[out]`;
  }
  const steps = [...prep];
  let current = labels[0];
  for (let i = 1; i < count; i++) {
    const out = i === count - 1 ? '[out]' : `[x${i}]`;
    steps.push(`${current}${labels[i]}acrossfade=d=${fmt(crossfadeSec)}:c1=tri:c2=tri${out}`);
    current = out;
  }
  return steps.join(';');
}

export function joinArgs(inputs, output, crossfadeSec, bitrate) {
  if (!Array.isArray(inputs) || inputs.length < 2 || inputs.length > 20) {
    throw new Error('inputs needs 2 to 20 files');
  }
  const paths = inputs.map((item, i) => filePath(item, `inputs[${i}]`));
  filePath(output, 'output');
  for (const item of paths) {
    if (sameFile(item, output)) throw new Error('output must be a different file');
  }
  const crossfade = crossfadeSec === undefined ? 0 : seconds(crossfadeSec, 'crossfadeSec', 0, 5);
  const ext = extOf(output);
  const filter = joinFilter(paths.length, crossfade);
  const args = ['-y'];
  for (const item of paths) args.push('-i', item);
  args.push('-filter_complex', filter, '-map', '[out]', '-vn', ...encodeTail(ext, bitrateOf(bitrate, ext)), output);
  return args;
}

export function fadeFilter(duration, fadeIn, fadeOut) {
  const inn = seconds(fadeIn, 'fadeInSec', 0, 30);
  const out = seconds(fadeOut, 'fadeOutSec', 0, 30);
  if (inn + out > duration) {
    throw new Error(`fades (${fmt(inn)} + ${fmt(out)} s) are longer than the file (${fmt(duration)} s)`);
  }
  const parts = [];
  if (inn > 0) parts.push(`afade=t=in:st=0:d=${fmt(inn)}`);
  if (out > 0) parts.push(`afade=t=out:st=${fmt(duration - out)}:d=${fmt(out)}`);
  if (parts.length === 0) throw new Error('set fadeInSec or fadeOutSec above 0');
  return parts.join(',');
}

export function tempoFilter(factor) {
  return `atempo=${fmt(seconds(factor, 'factor', 0.5, 2))}`;
}

export function tagWriteArgs(input, output, fields) {
  filePath(input, 'input');
  filePath(output, 'output');
  if (sameFile(input, output)) throw new Error('output must be a different file');
  const args = ['-y', '-i', input, '-map', '0', '-c', 'copy', '-id3v2_version', '3'];
  let count = 0;
  for (const key of TAG_KEYS) {
    if (fields[key] === undefined) continue;
    if (typeof fields[key] !== 'string') throw new Error(`${key} must be a string`);
    if (fields[key].length > 500 || /[\r\n]/.test(fields[key])) {
      throw new Error(`${key} must be one line, at most 500 characters`);
    }
    args.push('-metadata', `${key}=${fields[key]}`);
    count++;
  }
  if (count === 0) throw new Error(`write needs at least one of: ${TAG_KEYS.join(', ')}`);
  args.push(output);
  return args;
}
