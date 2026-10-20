/**
 * Equal split: parts meet on a sample, nothing is dropped, a short file is refused.
 * Run via npm run check:split.
 */
import { splitChannels, storeZip } from '../src/editor/split.ts';

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

const src = new Float32Array(100);
for (let i = 0; i < src.length; i++) src[i] = i;
const four = splitChannels([src], 4);
assert(four.length === 4, `parts ${four.length}`);
assert(four.every((ch) => ch[0].length === 25), `lengths ${four.map((ch) => ch[0].length)}`);
assert(four[1][0][0] === 25, `part 2 starts at ${four[1][0][0]}`);

const three = splitChannels([src], 3);
assert(three.map((ch) => ch[0].length).join(',') === '34,33,33', `remainder ${three.map((ch) => ch[0].length)}`);
const back = new Float32Array(100);
let pos = 0;
for (const ch of three) {
  back.set(ch[0], pos);
  pos += ch[0].length;
}
assert(pos === 100 && back.every((v, i) => v === i), 'concat lost samples');

assert(splitChannels([new Float32Array(15)], 16).length === 0, 'shorter than parts should refuse');
assert(splitChannels([src], 101).length === 16, 'parts above 16 clamp');

const zip = storeZip([
  { name: 'a.txt', data: new TextEncoder().encode('hi') },
  { name: 'b.txt', data: new TextEncoder().encode('yo') },
]);
assert(zip[0] === 0x50 && zip[1] === 0x4b, 'zip signature');
const text = new TextDecoder().decode(zip);
assert(text.includes('a.txt') && text.includes('b.txt') && text.includes('hi') && text.includes('yo'), 'zip payload');

console.log('split-check ok');
