/** One channel: each sample is the average of the source channels. A mono file is copied. */
export function averageToMono(channels: Float32Array[]): Float32Array {
  const first = channels[0];
  if (!first) return new Float32Array();
  if (channels.length === 1) return new Float32Array(first);
  const out = new Float32Array(first.length);
  const scale = 1 / channels.length;
  for (const ch of channels) {
    for (let i = 0; i < first.length; i++) out[i] += (ch[i] ?? 0) * scale;
  }
  return out;
}
