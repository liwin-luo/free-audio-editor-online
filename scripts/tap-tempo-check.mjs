/**
 * The measurable claim behind the tap-tempo page: an even tap rate reads the
 * right BPM, small timing jitter does not move it, one stray tap does not
 * either, and a pause starts a fresh count.
 * Run: npm run check:tap-tempo
 */
import { bpmFromTaps, TAP_TIMEOUT_MS } from '../src/editor/tap-tempo.ts';

let pass = 0, fail = 0;
const check = (name, ok, detail) => {
  if (ok) { pass++; console.log(`PASS  ${name}  (${detail})`); }
  else { fail++; console.log(`FAIL  ${name}  (${detail})`); }
};

const tapsEvery = (ms, count, start = 0) => Array.from({ length: count }, (_, i) => start + i * ms);

const even120 = tapsEvery(500, 8);
check('500 ms taps read 120 BPM', bpmFromTaps(even120, even120.at(-1)) === 120, String(bpmFromTaps(even120, even120.at(-1))));

const even160 = tapsEvery(375, 8);
check('375 ms taps read 160 BPM', bpmFromTaps(even160, even160.at(-1)) === 160, String(bpmFromTaps(even160, even160.at(-1))));

let seed = 7;
/** Deterministic LCG in [−1, 1]. */
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff) * 2 - 1;
const jittered = tapsEvery(500, 10).map((t) => t + rnd() * 20);
const jbpm = bpmFromTaps(jittered, jittered.at(-1));
check('±20 ms jitter stays within 2 BPM of 120', jbpm !== null && Math.abs(jbpm - 120) <= 2, String(jbpm));

const withStray = [...tapsEvery(500, 7), 3600, 4000, 4500, 5000, 5500, 6000];
const sbpm = bpmFromTaps(withStray, 6000);
check('one stray tap does not move the readout', sbpm !== null && Math.abs(sbpm - 120) <= 1, String(sbpm));

check('a single tap reads nothing', bpmFromTaps([1000], 1000) === null, 'null');
check('taps older than the timeout drop out', bpmFromTaps(tapsEvery(500, 6), tapsEvery(500, 6).at(-1) + TAP_TIMEOUT_MS + 1) === null, 'null');

const fresh = [...tapsEvery(500, 6), tapsEvery(500, 6).at(-1) + TAP_TIMEOUT_MS + 100, tapsEvery(500, 6).at(-1) + TAP_TIMEOUT_MS + 600];
const fbpm = bpmFromTaps(fresh, fresh.at(-1));
check('a pause starts a fresh count', fbpm === 120, String(fbpm));

console.log(fail === 0 ? `\nALL PASS (${pass})` : `\n${fail} FAILED, ${pass} passed`);
process.exit(fail ? 1 : 0);
