/** Repeat one clip. Overlap is a linear crossfade so a constant level stays constant. */
export const LOOP_MAX_SECONDS = 600;

export function loopedDuration(passSeconds: number, times: number, crossfadeSec: number): number {
  if (passSeconds <= 0) return 0;
  const reps = clampTimes(times);
  const overlap = overlapSeconds(passSeconds, crossfadeSec);
  return passSeconds * reps - overlap * (reps - 1);
}

export function loopChannels(
  channels: Float32Array[],
  sampleRate: number,
  opts: { times: number; crossfadeSec: number },
): Float32Array[] {
  const srcLen = channels[0]?.length ?? 0;
  if (srcLen === 0 || sampleRate <= 0) return channels.map(() => new Float32Array(0));
  const times = clampTimes(opts.times);
  const ov = Math.min(srcLen - 1, Math.round(overlapSeconds(srcLen / sampleRate, opts.crossfadeSec) * sampleRate));
  const hop = srcLen - ov;
  const outLen = hop * (times - 1) + srcLen;
  const out = channels.map(() => new Float32Array(outLen));
  for (let rep = 0; rep < times; rep++) {
    const start = rep * hop;
    for (let c = 0; c < channels.length; c++) {
      const src = channels[c]!;
      const dst = out[c]!;
      for (let i = 0; i < srcLen; i++) {
        let gain = 1;
        if (ov > 0 && rep > 0 && i < ov) gain = i / ov;
        if (ov > 0 && rep < times - 1 && i >= srcLen - ov) {
          const k = i - (srcLen - ov);
          gain *= (ov - k) / ov;
        }
        dst[start + i] = (dst[start + i] ?? 0) + src[i]! * gain;
      }
    }
  }
  return out;
}

function clampTimes(times: number): number {
  return Math.min(16, Math.max(2, Math.round(times)));
}

function overlapSeconds(passSeconds: number, crossfadeSec: number): number {
  return Math.min(Math.max(0, crossfadeSec), passSeconds / 2, 0.1);
}
