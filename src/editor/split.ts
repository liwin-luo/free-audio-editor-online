/** Cut one buffer into equal parts. Lengths differ by at most one sample. */

export const SPLIT_MIN_PARTS = 2;
export const SPLIT_MAX_PARTS = 16;

export function clampParts(parts: number): number {
  return Math.min(SPLIT_MAX_PARTS, Math.max(SPLIT_MIN_PARTS, Math.round(parts) || SPLIT_MIN_PARTS));
}

/** Empty when the file has fewer samples than parts. Remainder samples go to the earliest parts. */
export function splitChannels(channels: Float32Array[], parts: number): Float32Array[][] {
  const srcLen = channels[0]?.length ?? 0;
  const n = clampParts(parts);
  if (srcLen < n || channels.length === 0) return [];
  const base = Math.floor(srcLen / n);
  const rem = srcLen % n;
  const pieces: Float32Array[][] = [];
  let pos = 0;
  for (let p = 0; p < n; p++) {
    const len = base + (p < rem ? 1 : 0);
    pieces.push(channels.map((ch) => ch.slice(pos, pos + len)));
    pos += len;
  }
  return pieces;
}

/** Stored zip, UTF-8 names. No compression, so the bytes inside match the encoded parts. */
export function storeZip(files: { name: string; data: Uint8Array }[]): Uint8Array {
  const enc = new TextEncoder();
  const locals: Uint8Array[] = [];
  const centrals: Uint8Array[] = [];
  let offset = 0;
  for (const file of files) {
    const name = enc.encode(file.name.replace(/[\\/]/g, '_'));
    const crc = crc32(file.data);
    const local = new Uint8Array(30 + name.length + file.data.length);
    const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0x0800, true);
    lv.setUint16(8, 0, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, file.data.length, true);
    lv.setUint32(22, file.data.length, true);
    lv.setUint16(26, name.length, true);
    local.set(name, 30);
    local.set(file.data, 30 + name.length);
    locals.push(local);

    const central = new Uint8Array(46 + name.length);
    const cv = new DataView(central.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0x0800, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, file.data.length, true);
    cv.setUint32(24, file.data.length, true);
    cv.setUint16(28, name.length, true);
    cv.setUint32(42, offset, true);
    central.set(name, 46);
    centrals.push(central);
    offset += local.length;
  }
  const cdSize = centrals.reduce((sum, c) => sum + c.length, 0);
  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(8, files.length, true);
  ev.setUint16(10, files.length, true);
  ev.setUint32(12, cdSize, true);
  ev.setUint32(16, offset, true);
  const total = offset + cdSize + end.length;
  const out = new Uint8Array(total);
  let pos = 0;
  for (const chunk of [...locals, ...centrals, end]) {
    out.set(chunk, pos);
    pos += chunk.length;
  }
  return out;
}

function crc32(data: Uint8Array): number {
  let c = ~0;
  for (let i = 0; i < data.length; i++) {
    c ^= data[i]!;
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}
