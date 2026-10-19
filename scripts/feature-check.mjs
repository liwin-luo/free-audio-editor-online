/**
 * Feature checks for the Phase-1 tool variants:
 *  - /wav-to-mp3 (converter mode): label + MP3 export via CDN encoder
 *  - /reverse-audio (quick control): reverse button state + reversed WAV output
 * Usage: node scripts/feature-check.mjs (needs preview on :4321 + test WAV)
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { generateTestWav } from './make-test-tone.mjs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const TEST_WAV = '/tmp/test-tone.wav';
const DOWNLOAD_DIR = '/tmp/feature-downloads';
generateTestWav(TEST_WAV);
rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
mkdirSync(DOWNLOAD_DIR, { recursive: true });

let failures = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
};

const waitExported = async (page) => {
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 250));
    const status = await page.evaluate(() => document.querySelector('[data-status]')?.textContent ?? '');
    if (/Exported/.test(status)) return status;
  }
  return '';
};

const wavStats = (file) => {
  const b = readFileSync(file);
  const channels = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const dataSize = b.readUInt32LE(40);
  let peak = 0;
  for (let i = 44; i < 44 + dataSize - 1; i += 2) {
    const v = Math.abs(b.readInt16LE(i)) / 32768;
    if (v > peak) peak = v;
  }
  return { channels, rate, duration: dataSize / 2 / channels / rate, peak };
};

/** RMS of one channel from `fromSec` to `toSec`. */
const rangeRms = (file, fromSec, toSec) => {
  let b;
  try {
    b = readFileSync(file);
  } catch {
    return 0;
  }
  const channels = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const dataSize = b.readUInt32LE(40);
  const start = 44 + Math.floor(fromSec * rate) * 2 * channels;
  const end = Math.min(44 + dataSize, 44 + Math.floor(toSec * rate) * 2 * channels);
  let acc = 0;
  let n = 0;
  for (let i = start; i + 1 < end; i += 2 * channels) {
    const v = b.readInt16LE(i) / 32768;
    acc += v * v;
    n++;
  }
  return n ? Math.sqrt(acc / n) : 0;
};

/** 1.5 s quiet sine then 1.5 s loud sine. Crest-factor fixture for the level compressor. */
const generateSteppedWav = (path) => {
  const rate = 48000;
  const seconds = 3;
  const frames = seconds * rate;
  const pcm = Buffer.alloc(frames * 2);
  for (let i = 0; i < frames; i++) {
    const t = i / rate;
    const amp = t < 1.5 ? 0.1 : 0.8;
    pcm.writeInt16LE(Math.round(Math.sin(2 * Math.PI * 1000 * t) * amp * 32767), i * 2);
  }
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(rate, 24);
  header.writeUInt32LE(rate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  writeFileSync(path, Buffer.concat([header, pcm]));
};

/** RMS of one channel from `fromSec` to the end. 0 if the file is shorter. */
const tailRms = (file, fromSec) => {
  const b = readFileSync(file);
  const channels = b.readUInt16LE(22);
  const rate = b.readUInt32LE(24);
  const dataSize = b.readUInt32LE(40);
  const start = 44 + Math.floor(fromSec * rate) * 2 * channels;
  const end = 44 + dataSize;
  let acc = 0;
  let n = 0;
  for (let i = start; i + 1 < end; i += 2 * channels) {
    const v = b.readInt16LE(i) / 32768;
    acc += v * v;
    n++;
  }
  return n ? Math.sqrt(acc / n) : 0;
};

const waitForStats = async (file) => {
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      return wavStats(file);
    } catch {}
  }
  return null;
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
try {
  const client = await browser.newPage();
  await client.setViewport({ width: 1366, height: 900 });
  const consoleErrors = [];
  client.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text()));
  client.on('pageerror', (e) => consoleErrors.push('pageerror: ' + e.message));
  const cdp = await client.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: DOWNLOAD_DIR });

  // --- Converter mode on /wav-to-mp3 ---
  await client.goto(`${BASE}/wav-to-mp3`, { waitUntil: 'networkidle0' });
  const btnLabel = await client.$eval('[data-export]', (el) => el.textContent.trim());
  check('converter export label', btnLabel === 'Convert to MP3', btnLabel);
  const modesHidden = (await client.$('[data-modes-row]')) === null;
  check('converter hides cut UI', modesHidden);

  const input = await client.$('[data-file-input]');
  await input.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.click('[data-export]');
  const convStatus = await waitExported(client);
  check(
    'wav→mp3 export',
    /Exported test-tone-converted\.mp3/.test(convStatus),
    `${convStatus || '(timeout)'}${consoleErrors.length ? ' console: ' + consoleErrors[0].slice(0, 120) : ''}`,
  );
  const mp3File = join(DOWNLOAD_DIR, 'test-tone-converted.mp3');
  let mp3Ok = false;
  // Chrome flushes downloads asynchronously — poll for the file
  for (let i = 0; i < 20 && !mp3Ok; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      const head = readFileSync(mp3File).subarray(0, 3);
      mp3Ok = (head[0] === 0xff && (head[1] & 0xe0) === 0xe0) || head.toString().includes('ID3');
    } catch {}
  }
  check('mp3 file valid', mp3Ok, `${mp3File} (${mp3Ok ? 'mpeg frame/ID3 ok' : 'missing'})`);

  // --- Quick reverse on /reverse-audio ---
  await client.goto(`${BASE}/reverse-audio`, { waitUntil: 'networkidle0' });
  const input2 = await client.$('[data-file-input]');
  await input2.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.click('[data-quick-reverse]');
  const pressed = await client.$eval('[data-quick-reverse]', (el) => el.getAttribute('aria-pressed'));
  const drawerSync = await client.$eval('[data-reverse]', (el) => el.checked);
  check('reverse quick control', pressed === 'true' && drawerSync === true, `aria=${pressed} drawer=${drawerSync}`);
  await client.select('[data-format]', 'wav');
  await client.click('[data-export]');
  const revStatus = await waitExported(client);
  check('reversed export', /Exported test-tone-edited\.wav/.test(revStatus), revStatus);

  // Reversed output must start where the source ended. renderEdit pads the
  // render by one zero sample, which lands at the front after reversal, so
  // compare from out[1] onward against the source tail.
  const src = readFileSync(TEST_WAV);
  const srcChannels = src.readUInt16LE(22);
  const srcDataSize = src.readUInt32LE(40);
  const outFile = readFileSync(join(DOWNLOAD_DIR, 'test-tone-edited.wav'));
  const N = 480; // compare 10ms
  let diff = 0;
  for (let i = 0; i < N; i++) {
    const o = outFile.readInt16LE(44 + 2 * (1 + i)) / 32768;
    const s = src.readInt16LE(44 + srcDataSize - 2 * srcChannels * (i + 1)) / 32768;
    diff += Math.abs(o - s);
  }
  diff /= N;
  check('output is reversed', diff < 0.005, `mean|Δ|=${diff.toFixed(5)} over first 10ms`);
  const out = wavStats(join(DOWNLOAD_DIR, 'test-tone-edited.wav'));
  check(
    'duration preserved',
    Math.abs(out.duration - srcDataSize / 2 / srcChannels / src.readUInt32LE(24)) < 0.05,
    `${out.duration.toFixed(2)}s`,
  );

  // --- Phase 2: MP4 → MP3 (native video-audio decoding) ---
  await client.goto(`${BASE}/mp4-to-mp3`, { waitUntil: 'networkidle0' });
  const videoInput = await client.$('[data-file-input]');
  await videoInput.uploadFile('/tmp/fixtures/test-video.mp4');
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 15000 });
  const videoMeta = await client.$eval('[data-file-meta]', (el) => el.textContent);
  check('mp4 audio decoded', /00:04\.00/.test(videoMeta), videoMeta);
  await client.click('[data-export]');
  const mp4Status = await waitExported(client);
  check('mp4→mp3 export', /Exported test-video-converted\.mp3/.test(mp4Status), mp4Status);
  let mp4Mp3Ok = false;
  for (let i = 0; i < 20 && !mp4Mp3Ok; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      const h = readFileSync(join(DOWNLOAD_DIR, 'test-video-converted.mp3')).subarray(0, 3);
      mp4Mp3Ok = (h[0] === 0xff && (h[1] & 0xe0) === 0xe0) || h.toString().includes('ID3');
    } catch {}
  }
  check('mp4→mp3 file valid', mp4Mp3Ok);

  // --- M4R export on /ringtone-maker (WebCodecs AAC + MP4 muxer) ---
  await client.goto(`${BASE}/ringtone-maker`, { waitUntil: 'networkidle0' });
  const ringInput = await client.$('[data-file-input]');
  await ringInput.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  const m4rOffered = (await client.$('option[value="m4r"]')) !== null;
  check('m4r option offered (Chrome)', m4rOffered);
  await client.select('[data-format]', 'm4r');
  await client.click('[data-export]');
  const m4rStatus = await waitExported(client);
  check('m4r export', /Exported test-tone-ringtone\.m4r/.test(m4rStatus), m4rStatus);
  let m4rOk = false;
  for (let i = 0; i < 20 && !m4rOk; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      // MP4 container: bytes 4–8 are the "ftyp" box type
      const h = readFileSync(join(DOWNLOAD_DIR, 'test-tone-ringtone.m4r')).subarray(4, 8).toString('ascii');
      m4rOk = h === 'ftyp';
    } catch {}
  }
  check('m4r file valid (ftyp box)', m4rOk, m4rOk ? '' : '(missing or bad header)');

  // --- Normalize: peak lands near 0.98 (−0.2 dBFS), under the +12 dB cap ---
  const editedWav = join(DOWNLOAD_DIR, 'test-tone-edited.wav');
  await client.goto(`${BASE}/normalize-audio`, { waitUntil: 'networkidle0' });
  const normInput = await client.$('[data-file-input]');
  await normInput.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.click('[data-quick-normalize]');
  const normPressed = await client.$eval('[data-quick-normalize]', (el) => el.getAttribute('aria-pressed'));
  check('normalize toggled', normPressed === 'true', normPressed);
  await client.select('[data-format]', 'wav');
  rmSync(editedWav, { force: true });
  await client.click('[data-export]');
  const normStatus = await waitExported(client);
  check('normalize export', /Exported test-tone-edited\.wav/.test(normStatus), normStatus);
  let normStats = null;
  for (let i = 0; i < 20 && !normStats; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      normStats = wavStats(editedWav);
    } catch {}
  }
  check(
    'normalize peak ≈ 0.98',
    normStats !== null && normStats.peak > 0.95 && normStats.peak < 0.995,
    normStats ? normStats.peak.toFixed(3) : '(missing wav)',
  );

  // --- Reverb: output continues after the source so the tail is audible ---
  await client.goto(`${BASE}/slowed-reverb`, { waitUntil: 'networkidle0' });
  const revbInput = await client.$('[data-file-input]');
  await revbInput.uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.$eval('[data-quick-reverb]', (el) => {
    el.value = '1';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  const revbValue = await client.$eval('[data-quick-reverb]', (el) => el.value);
  check('reverb set', revbValue === '1', revbValue);
  await client.select('[data-format]', 'wav');
  rmSync(editedWav, { force: true });
  await client.click('[data-export]');
  const revbStatus = await waitExported(client);
  check('reverb export', /Exported test-tone-edited\.wav/.test(revbStatus), revbStatus);
  let revbStats = null;
  for (let i = 0; i < 20 && !revbStats; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      revbStats = wavStats(editedWav);
    } catch {}
  }
  const srcDur = 10;
  const rms = revbStats ? tailRms(editedWav, srcDur + 0.4) : 0;
  check(
    'reverb tail after the tone',
    revbStats !== null && revbStats.duration > srcDur + 1.5 && rms > 0.002,
    revbStats ? `${revbStats.duration.toFixed(2)}s tailRms=${rms.toFixed(4)}` : '(missing wav)',
  );

  // --- Bass boost on /bass-booster ---
  // Control: an 80 Hz tone at amp 0.5 exports at ~0.5 peak with the slider at 0.
  // Boosted: +15 dB low-shelf @150 Hz drives the tone into the limiter, so the
  // export peak must land near full scale — proves filter, limiter and guard.
  const LOW_WAV = '/tmp/test-low.wav';
  const bassWav = join(DOWNLOAD_DIR, 'test-low-edited.wav');
  generateTestWav(LOW_WAV, 3, 48000, 80, 0.5, true);
  const waitForStats = async (file) => {
    for (let i = 0; i < 20; i++) {
      await new Promise((r) => setTimeout(r, 250));
      try {
        return wavStats(file);
      } catch {}
    }
    return null;
  };
  await client.goto(`${BASE}/bass-booster`, { waitUntil: 'networkidle0' });
  const bassInput = await client.$('[data-file-input]');
  await bassInput.uploadFile(LOW_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.select('[data-format]', 'wav');
  rmSync(bassWav, { force: true });
  await client.click('[data-export]');
  const bassDryStatus = await waitExported(client);
  check('bass dry export', /Exported test-low-edited\.wav/.test(bassDryStatus), bassDryStatus || '(timeout)');
  let dryStats = null;
  for (let i = 0; i < 20 && !dryStats; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      dryStats = wavStats(bassWav);
    } catch {}
  }
  check(
    'bass dry peak ~0.5',
    dryStats !== null && Math.abs(dryStats.peak - 0.5) < 0.06,
    dryStats ? `peak=${dryStats.peak.toFixed(3)}` : '(missing wav)',
  );
  await client.$eval('[data-quick-bass]', (el) => {
    el.value = '15';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  const bassVal = await client.$eval('[data-quick-bass]', (el) => el.value);
  check('bass set', bassVal === '15', bassVal);
  rmSync(bassWav, { force: true });
  await client.click('[data-export]');
  const bassBoostedStatus = await waitExported(client);
  check('bass boosted export', /Exported test-low-edited\.wav/.test(bassBoostedStatus), bassBoostedStatus || '(timeout)');
  let boostedStats = null;
  for (let i = 0; i < 20 && !boostedStats; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      boostedStats = wavStats(bassWav);
    } catch {}
  }
  check(
    'bass +15 dB reaches limiter ceiling',
    boostedStats !== null && boostedStats.peak > 0.75,
    boostedStats ? `peak=${boostedStats.peak.toFixed(3)}` : '(missing wav)',
  );

  // --- Treble boost on /treble-booster ---
  // 6 kHz tone at 0.5 stays put dry; +15 dB high-shelf @3 kHz drives it into
  // the limiter ceiling.
  const TREBLE_WAV = '/tmp/test-high.wav';
  const trebleOut = join(DOWNLOAD_DIR, 'test-high-edited.wav');
  generateTestWav(TREBLE_WAV, 3, 48000, 6000, 0.5, true);
  await client.goto(`${BASE}/treble-booster`, { waitUntil: 'networkidle0' });
  await (await client.$('[data-file-input]')).uploadFile(TREBLE_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.select('[data-format]', 'wav');
  rmSync(trebleOut, { force: true });
  await client.click('[data-export]');
  await waitExported(client);
  const trebleDry = await waitForStats(trebleOut);
  await client.$eval('[data-quick-treble]', (el) => {
    el.value = '15';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  rmSync(trebleOut, { force: true });
  await client.click('[data-export]');
  await waitExported(client);
  const trebleBoosted = await waitForStats(trebleOut);
  check(
    'treble +15 dB reaches limiter ceiling',
    trebleDry !== null && trebleBoosted !== null && Math.abs(trebleDry.peak - 0.5) < 0.06 && trebleBoosted.peak > 0.75,
    trebleDry && trebleBoosted ? `dry=${trebleDry.peak.toFixed(3)} boosted=${trebleBoosted.peak.toFixed(3)}` : '(missing wav)',
  );

  // --- Equalizer on /equalizer: mid band cut and boost both provable on a 1 kHz tone ---
  await client.goto(`${BASE}/equalizer`, { waitUntil: 'networkidle0' });
  await (await client.$('[data-file-input]')).uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.select('[data-format]', 'wav');
  const setMid = async (v) =>
    client.$eval('[data-quick-mid]', (el, val) => {
      el.value = String(val);
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }, v);
  const exportAndStats = async () => {
    rmSync(editedWav, { force: true });
    await client.click('[data-export]');
    await waitExported(client);
    const s = await waitForStats(editedWav);
    return { rms: tailRms(editedWav, 5.2), peak: s ? s.peak : 0, ok: s !== null };
  };
  await setMid(-15);
  const midCut = await exportAndStats();
  await setMid(15);
  const midBoost = await exportAndStats();
  check(
    'equalizer mid cut and boost act on a 1 kHz tone',
    midCut.ok && midBoost.ok && midCut.rms < 0.2 && midBoost.peak > 0.7,
    `cutRms=${midCut.rms.toFixed(3)} boostPeak=${midBoost.peak.toFixed(3)}`,
  );

  // --- Low pass on /low-pass-filter: 1 kHz tone loses energy at a 500 Hz cutoff ---
  await client.goto(`${BASE}/low-pass-filter`, { waitUntil: 'networkidle0' });
  await (await client.$('[data-file-input]')).uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.select('[data-format]', 'wav');
  const dryLpf = await exportAndStats();
  await client.$eval('[data-quick-lpf]', (el) => {
    el.value = '500';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  const wetLpf = await exportAndStats();
  check(
    'low-pass 500 Hz attenuates a 1 kHz tone',
    dryLpf.ok && wetLpf.ok && dryLpf.rms > 0.5 && wetLpf.rms < 0.25 && wetLpf.rms > 0.02,
    `dry=${dryLpf.rms.toFixed(3)} wet=${wetLpf.rms.toFixed(3)}`,
  );

  // --- High pass on /high-pass-filter: 80 Hz tone loses energy at a 300 Hz cutoff ---
  await client.goto(`${BASE}/high-pass-filter`, { waitUntil: 'networkidle0' });
  await (await client.$('[data-file-input]')).uploadFile(LOW_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.select('[data-format]', 'wav');
  rmSync(bassWav, { force: true });
  await client.click('[data-export]');
  await waitExported(client);
  const dryHpf = await waitForStats(bassWav);
  const dryHpfRms = dryHpf ? tailRms(bassWav, 0.2) : 0;
  await client.$eval('[data-quick-hpf]', (el) => {
    el.value = '300';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  rmSync(bassWav, { force: true });
  await client.click('[data-export]');
  await waitExported(client);
  const wetHpfStats = await waitForStats(bassWav);
  const wetHpfRms = wetHpfStats ? tailRms(bassWav, 0.2) : 0;
  check(
    'high-pass 300 Hz strips an 80 Hz tone',
    dryHpf !== null && wetHpfStats !== null && dryHpfRms > 0.3 && wetHpfRms < 0.1,
    `dry=${dryHpfRms.toFixed(3)} wet=${wetHpfRms.toFixed(3)}`,
  );

  // --- Level compressor: loud/quiet ratio must fall, peak stays near the source ---
  const DYN_WAV = '/tmp/test-dyn.wav';
  const dynOut = join(DOWNLOAD_DIR, 'test-dyn-edited.wav');
  generateSteppedWav(DYN_WAV);
  await client.goto(`${BASE}/compressor`, { waitUntil: 'networkidle0' });
  await (await client.$('[data-file-input]')).uploadFile(DYN_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.select('[data-format]', 'wav');
  rmSync(dynOut, { force: true });
  await client.click('[data-export]');
  const dynDryStatus = await waitExported(client);
  check('compressor dry export', /Exported test-dyn-edited\.wav/.test(dynDryStatus), dynDryStatus || '(timeout)');
  const dryQuiet = rangeRms(dynOut, 0.2, 1.3);
  const dryLoud = rangeRms(dynOut, 1.7, 2.8);
  const dryRatio = dryQuiet > 0 ? dryLoud / dryQuiet : 0;
  check('compressor dry ratio ~8', dryRatio > 6 && dryRatio < 10, `ratio=${dryRatio.toFixed(2)}`);
  await client.$eval('[data-quick-compress]', (el) => {
    el.value = '100';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  const compVal = await client.$eval('[data-quick-compress]', (el) => el.value);
  check('compressor set', compVal === '100', compVal);
  rmSync(dynOut, { force: true });
  await client.click('[data-export]');
  const dynWetStatus = await waitExported(client);
  check('compressor wet export', /Exported test-dyn-edited\.wav/.test(dynWetStatus), dynWetStatus || '(timeout)');
  let dynStats = null;
  for (let i = 0; i < 20 && !dynStats; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      dynStats = wavStats(dynOut);
    } catch {}
  }
  const wetQuiet = dynStats ? rangeRms(dynOut, 0.2, 1.3) : 0;
  const wetLoud = dynStats ? rangeRms(dynOut, 1.7, 2.8) : 0;
  const wetRatio = wetQuiet > 0 ? wetLoud / wetQuiet : 99;
  check(
    'compressor halves the loud/quiet ratio',
    dynStats !== null && wetRatio < dryRatio * 0.5 && dynStats.peak > 0.7 && dynStats.peak < 0.95,
    `ratio ${dryRatio.toFixed(2)} → ${wetRatio.toFixed(2)} peak=${dynStats ? dynStats.peak.toFixed(3) : 'missing'}`,
  );

  // --- Echo: a click comes back 0.20 s later ---
  const CLICK_WAV = '/tmp/test-click.wav';
  const clickOut = join(DOWNLOAD_DIR, 'test-click-edited.wav');
  {
    const rate = 48000;
    const frames = rate;
    const pcm = Buffer.alloc(frames * 2);
    pcm.writeInt16LE(32767, 0);
    const header = Buffer.alloc(44);
    header.write('RIFF', 0);
    header.writeUInt32LE(36 + pcm.length, 4);
    header.write('WAVE', 8);
    header.write('fmt ', 12);
    header.writeUInt32LE(16, 16);
    header.writeUInt16LE(1, 20);
    header.writeUInt16LE(1, 22);
    header.writeUInt32LE(rate, 24);
    header.writeUInt32LE(rate * 2, 28);
    header.writeUInt16LE(2, 32);
    header.writeUInt16LE(16, 34);
    header.write('data', 36);
    header.writeUInt32LE(pcm.length, 40);
    writeFileSync(CLICK_WAV, Buffer.concat([header, pcm]));
  }
  const sampleAt = (file, sec) => {
    try {
      const b = readFileSync(file);
      const rate = b.readUInt32LE(24);
      const i = 44 + Math.round(sec * rate) * 2;
      let peak = 0;
      for (let k = i - 20; k <= i + 960; k += 2) {
        if (k < 44 || k + 1 >= b.length) continue;
        peak = Math.max(peak, Math.abs(b.readInt16LE(k)) / 32768);
      }
      return peak;
    } catch {
      return 0;
    }
  };
  await client.goto(`${BASE}/echo`, { waitUntil: 'networkidle0' });
  await (await client.$('[data-file-input]')).uploadFile(CLICK_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  await client.select('[data-format]', 'wav');
  rmSync(clickOut, { force: true });
  await client.click('[data-export]');
  check('echo dry export', /Exported test-click-edited\.wav/.test(await waitExported(client)), '');
  const dryClick = sampleAt(clickOut, 0.2);
  check('echo dry has no repeat', dryClick < 0.02, `at0.2=${dryClick.toFixed(3)}`);
  await client.$eval('[data-quick-echo-delay]', (el) => {
    el.value = '0.2';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await client.$eval('[data-quick-echo-feedback]', (el) => {
    el.value = '0.4';
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
  rmSync(clickOut, { force: true });
  await client.click('[data-export]');
  check('echo wet export', /Exported test-click-edited\.wav/.test(await waitExported(client)), '');
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try {
      if (readFileSync(clickOut).length > 100) break;
    } catch {}
  }
  const wetClick = sampleAt(clickOut, 0.2);
  check('echo repeat near 0.20 s', wetClick > 0.2, `at0.2=${wetClick.toFixed(3)}`);

  // --- Waveform image: default social preset exports a 2× PNG ---
  const pngFile = join(DOWNLOAD_DIR, 'test-tone-waveform.png');
  await client.goto(`${BASE}/waveform-generator`, { waitUntil: 'networkidle0' });
  const pngLabel = await client.$eval('[data-export-label]', (el) => el.textContent.trim());
  check('waveform export label', pngLabel === 'Download PNG', pngLabel);
  const styleN = await client.$$eval('[data-viz-style] option', (els) => els.length);
  const tplN = await client.$$eval('[data-viz-template] option', (els) => els.length);
  check('waveform styles and templates', styleN === 6 && tplN === 8, `styles=${styleN} templates=${tplN}`);
  check('waveform time range', (await client.$('[data-viz-start]')) !== null && (await client.$('[data-viz-end]')) !== null);
  await (await client.$('[data-file-input]')).uploadFile(TEST_WAV);
  await client.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  rmSync(pngFile, { force: true });
  await client.click('[data-export]');
  const pngStatus = await waitExported(client);
  check('waveform png export', /Exported test-tone-waveform\.png/.test(pngStatus), pngStatus || '(timeout)');
  let png = null;
  for (let i = 0; i < 20 && !png; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try {
      png = readFileSync(pngFile);
    } catch {}
  }
  const pngW = png && png.length > 24 ? png.readUInt32BE(16) : 0;
  const pngH = png && png.length > 24 ? png.readUInt32BE(20) : 0;
  const pngSig = png && png.subarray(0, 8).toString('hex') === '89504e470d0a1a0a';
  check(
    'waveform png is 2400×1260',
    pngSig && pngW === 2400 && pngH === 1260 && png.length > 2000,
    png ? `${pngW}×${pngH} ${png.length}B` : '(missing png)',
  );
} finally {
  await browser.close();
}

// --- Phase 2: voice recorder (fake microphone in a dedicated browser) ---
const recBrowser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--autoplay-policy=no-user-gesture-required'],
});
let recFailures = 0;
try {
  const page = await recBrowser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.goto(`${BASE}/voice-recorder`, { waitUntil: 'networkidle0' });
  check('recorder UI present', (await page.$('[data-recorder]')) !== null);
  await page.click('[data-rec-toggle]');
  await new Promise((r) => setTimeout(r, 2500));
  const recState = await page.evaluate(() => document.querySelector('[data-rec-live]')?.classList.contains('hidden') === false);
  check('recording started', recState);
  await page.click('[data-rec-toggle]'); // stop
  await page.waitForSelector('[data-workspace]:not(.hidden)', { timeout: 10000 });
  const recName = await page.$eval('[data-file-name]', (el) => el.textContent);
  check('recording loaded into editor', /^recording-\ds\.webm$/.test(recName), recName);
  await page.select('[data-format]', 'wav');
  await page.click('[data-export]');
  const recExportStatus = await waitExported(page);
  check('recording export', /Exported recording-\ds-edited\.wav/.test(recExportStatus), recExportStatus);
} catch (e) {
  check('voice recorder flow', false, e.message.slice(0, 120));
  recFailures++;
} finally {
  await recBrowser.close();
}
failures += recFailures;
console.log(failures === 0 ? '\nFEATURES: ALL PASS' : `\nFEATURES: ${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
