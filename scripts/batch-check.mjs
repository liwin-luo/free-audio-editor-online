/**
 * Queue download names stay unique and keep the extension.
 * Run via npm run check:batch.
 */
import { uniqueFileNames, fileStem } from '../src/editor/batch.ts';

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

assert(fileStem('a/b:c.wav') === 'a_b_c', `stem ${fileStem('a/b:c.wav')}`);
assert(fileStem('...') === 'audio', 'empty stem');

const names = uniqueFileNames(['Song-converted', 'song-converted', 'Other-converted'], 'mp3');
assert(names.join(',') === 'Song-converted.mp3,song-converted-2.mp3,Other-converted.mp3', `names ${names}`);
assert(new Set(names.map((n) => n.toLowerCase())).size === 3, 'case collision');

console.log('batch-check ok');
