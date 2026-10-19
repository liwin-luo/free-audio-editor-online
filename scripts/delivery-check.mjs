/**
 * Empty-state chips and promise line. Known tool configs in, exact chips out.
 * Usage: see "check:delivery" in package.json.
 */
import { deliveryChips, promiseParts, selectedDelivery } from '../src/editor/delivery.ts';

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  ' + detail}`);
  if (!ok) failures++;
};

const copy = {
  etaModel: 'model',
  limitTenMin: '10 min',
  limitRingtone: '40 sec',
  wav: 'WAV · lossless',
  formatsMore: ', and more',
};
const ids = (config) => deliveryChips(config).map((chip) => chip.id).join(',');
const hint = { dropHint: 'drop' };

check('trimmer chips are MP3 and WAV', ids({ ...hint, defaultFormat: 'mp3-192' }) === 'mp3-192,wav');
check('trimmer selects the default bitrate', selectedDelivery({ ...hint, defaultFormat: 'mp3-192' }, deliveryChips({ ...hint, defaultFormat: 'mp3-192' })) === 'mp3-192');
check('converter without formats shows three bitrates', ids({ ...hint, converter: true, defaultFormat: 'mp3-320' }) === 'mp3-320,mp3-192,mp3-128');
check('mp3-to-wav has no chips', ids({ ...hint, converter: true, formats: ['wav'], defaultFormat: 'wav' }) === '');
check('compress lists every bitrate it offers', ids({ ...hint, converter: true, formats: ['mp3-320', 'mp3-192', 'mp3-128', 'mp3-96', 'mp3-64'], defaultFormat: 'mp3-128' }) === 'mp3-320,mp3-192,mp3-128,mp3-96,mp3-64');
check('ringtone chips are M4R and MP3', ids({ ...hint, ringtone: true, defaultFormat: 'mp3-192', formats: ['m4r', 'mp3-320', 'mp3-192', 'wav'] }) === 'm4r,mp3-192');
check('transcribe chips use the text label', deliveryChips({ ...hint, transcribe: true }, '文字').map((c) => c.label).join(',') === '文字,SRT');
check('picture tools have no chips', ids({ ...hint, visualizer: 'waveform' }) === '' && ids({ ...hint, paint: true }) === '' && ids({ ...hint, tagEditor: true }) === '');

check('single wav promise names the output', promiseParts({ ...hint, converter: true, formats: ['wav'] }, copy).join('|') === 'WAV · lossless');
check('transcribe promise names the cap and the model', promiseParts({ ...hint, transcribe: true, accept: 'audio/*,video/mp4' }, copy).join('|') === 'MP4, MOV, WebM, MP3, WAV, and more|10 min|model');
check('ringtone promise names the 40 second cap', promiseParts({ ...hint, ringtone: true }, copy).join('|') === 'MP3, WAV, M4A, OGG, FLAC, and more|40 sec');
check('tag editor promises MP3', promiseParts({ ...hint, tagEditor: true, accept: 'audio/mpeg,.mp3' }, copy).join('|') === 'MP3');
check('paint promises images', promiseParts({ ...hint, paint: true }, copy).join('|') === 'PNG, JPG, WebP, and more');
check('m4a page promises M4A', promiseParts({ ...hint, converter: true, accept: 'audio/mp4,.m4a,.aac' }, copy).join('|') === 'M4A, AAC');
check('ogg page promises OGG', promiseParts({ ...hint, converter: true, accept: 'audio/ogg,.ogg' }, copy).join('|') === 'OGG');
check('opus page promises Opus', promiseParts({ ...hint, converter: true, accept: 'audio/ogg,audio/opus,.opus' }, copy).join('|') === 'Opus, OGG');

if (failures) {
  console.error(`\n${failures} delivery check(s) failed`);
  process.exit(1);
}
console.log('\nAll delivery checks passed.');
