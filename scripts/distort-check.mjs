/**
 * Drive 0 is identity. 40% lifts a 0.25 sample to about 0.69.
 * 100% pushes it to about 1 and grows the third harmonic.
 */
import { distortAt } from '/tmp/distort-fn.mjs';

if (distortAt(0.25, 0) !== 0.25) throw new Error(`drive 0 ${distortAt(0.25, 0)}`);
if (distortAt(-0.4, 0) !== -0.4) throw new Error('drive 0 negative');
const pos = distortAt(0.4, 0.5);
const neg = distortAt(-0.4, 0.5);
if (Math.abs(pos + neg) > 1e-12) throw new Error(`symmetry ${pos} ${neg}`);

const mid = distortAt(0.25, 0.4);
if (mid < 0.65 || mid > 0.72) throw new Error(`40% of 0.25 is ${mid}`);
const hard = distortAt(0.25, 1);
if (hard < 0.98) throw new Error(`100% of 0.25 is ${hard}`);
if (Math.abs(distortAt(1, 1) - 1) > 1e-9) throw new Error('full scale should stay full scale');

function thirdOverFund(drive) {
  const n = 4096;
  const cycles = 16;
  let fund = 0;
  let third = 0;
  for (let i = 0; i < n; i++) {
    const x = Math.sin((2 * Math.PI * cycles * i) / n) * 0.25;
    const y = distortAt(x, drive);
    const p = (2 * Math.PI * i) / n;
    fund += y * Math.sin(cycles * p);
    third += y * Math.sin(3 * cycles * p);
  }
  return Math.abs(third) / Math.abs(fund);
}

const dryH = thirdOverFund(0);
const hardH = thirdOverFund(1);
if (dryH > 0.01) throw new Error(`dry third ${dryH}`);
if (hardH < 0.2) throw new Error(`hard third ${hardH}`);
console.log(`distort-check ok mid=${mid.toFixed(3)} hard=${hard.toFixed(3)} third=${hardH.toFixed(3)}`);
