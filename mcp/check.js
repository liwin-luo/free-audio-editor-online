/**
 * ponytail: builders are asserted here. A live ffmpeg join+trim runs only when
 * ffmpeg is on PATH. Ceiling: without ffmpeg, spawn is untested. Upgrade: run
 * this on a machine with ffmpeg, which this file already does when it can.
 */
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  LOUDNORM,
  fadeFilter,
  joinArgs,
  joinFilter,
  tagWriteArgs,
  tempoFilter,
  trimArgs,
} from './args.js';
import { TOOLS } from './tools.js';

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

function throws(fn) {
  try {
    fn();
    return false;
  } catch {
    return true;
  }
}

assert(TOOLS.length === 8, 'tool count is the number stated on /mcp');
assert(TOOLS.map((t) => t.name).join() === 'audio_trim,audio_join,audio_convert,audio_normalize,audio_fade,audio_extract,audio_tags,audio_tempo', 'tool names');

const trim = trimArgs('/in.wav', '/out.mp3', 1.25, 3.5, 192);
assert(trim[trim.indexOf('-ss') + 1] === '1.25', 'start');
assert(trim[trim.indexOf('-t') + 1] === '2.25', 'duration');
assert(trim.at(-1) === '/out.mp3', 'trim output last');
assert(trim.includes('192k'), 'bitrate');
assert(throws(() => trimArgs('/in.wav', '/in.wav', 0, 1)), 'same path');
assert(throws(() => trimArgs('-secret', '/out.wav', 0, 1)), 'dash path');
assert(throws(() => trimArgs('/in.wav', '/out.mp3', 0, 1, 112)), 'bitrate list');

const joined = joinFilter(3, 0);
assert(joined.includes('concat=n=3:v=0:a=1'), 'concat');
assert(!joined.includes('acrossfade'), 'hard join');
assert(joinFilter(2, 1.5).includes('acrossfade=d=1.5'), 'crossfade');
assert(!joinFilter(2, 1.5).includes('/tmp'), 'filter has no path');
assert(throws(() => joinArgs(['/a.wav'], '/out.wav', 0)), 'one input');
assert(throws(() => joinArgs(['/a.wav', '/b.wav'], '/out.wav', 6)), 'crossfade cap');

assert(fadeFilter(10, 0, 2) === 'afade=t=out:st=8:d=2', 'fade out start');
assert(throws(() => fadeFilter(3, 2, 2)), 'fades longer than file');
assert(tempoFilter(0.5) === 'atempo=0.5', 'tempo floor');
assert(tempoFilter(2) === 'atempo=2', 'tempo ceiling');
assert(throws(() => tempoFilter(0.4)), 'tempo below 0.5');
assert(LOUDNORM === 'loudnorm=I=-16:TP=-1.5:LRA=11', 'loudnorm constants');

const tags = tagWriteArgs('/in.mp3', '/out.mp3', { title: 'A' });
assert(tags.includes('-c') && tags[tags.indexOf('-c') + 1] === 'copy', 'tags copy audio');
assert(tags.includes('-id3v2_version') && tags.includes('3'), 'id3v2.3');
assert(!tags.includes('libmp3lame'), 'tags do not re-encode');
assert(throws(() => tagWriteArgs('/in.mp3', '/out.mp3', {})), 'empty tags');

const ffmpeg = spawnSync('ffmpeg', ['-version'], { encoding: 'utf8' });
if (ffmpeg.status !== 0) {
  console.log('mcp args ok; ffmpeg not on PATH, spawn path skipped');
  process.exit(0);
}

const dir = mkdtempSync(path.join(tmpdir(), 'mcp-'));
try {
  const a = path.join(dir, 'a.wav');
  const b = path.join(dir, 'b.wav');
  const out = path.join(dir, 'out.wav');
  const cut = path.join(dir, 'cut.wav');
  const gen = (file, freq) =>
    spawnSync('ffmpeg', ['-y', '-f', 'lavfi', '-i', `sine=frequency=${freq}:duration=0.4`, '-ac', '1', file], {
      encoding: 'utf8',
    });
  assert(gen(a, 440).status === 0, 'sine a');
  assert(gen(b, 880).status === 0, 'sine b');
  const join = spawnSync('ffmpeg', joinArgs([a, b], out, 0.1), { encoding: 'utf8' });
  assert(join.status === 0, join.stderr.slice(-400));
  const trimmed = spawnSync('ffmpeg', trimArgs(a, cut, 0.1, 0.2), { encoding: 'utf8' });
  assert(trimmed.status === 0, trimmed.stderr.slice(-400));
  const probe = spawnSync(
    'ffprobe',
    ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', cut],
    { encoding: 'utf8' },
  );
  const duration = Number(probe.stdout);
  assert(duration > 0.08 && duration < 0.12, `trim duration ${duration}`);
} finally {
  rmSync(dir, { recursive: true, force: true });
}

console.log('mcp args ok');
