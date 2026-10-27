import { deflateRawSync, inflateRawSync } from 'node:zlib';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILES = ['index.js', 'args.js', 'tools.js', 'check.js', 'package.json', 'package-lock.json'];
const OUT = join(root, 'public', 'free-audio-editor-mcp.zip');

/** Zip mcp/ source into public/. No node_modules. The page links this file. */
export function packMcpZip() {
  const entries = FILES.map((name) => ({
    name: `free-audio-editor-mcp/${name}`,
    data: readFileSync(join(root, 'mcp', name)),
  }));
  const zip = buildZip(entries);
  const back = listZip(zip);
  const want = entries.map((entry) => entry.name).join('\n');
  const got = back.map((entry) => entry.name).join('\n');
  if (want !== got) throw new Error(`mcp zip entries mismatch:\n${got}`);
  for (const entry of entries) {
    const found = back.find((item) => item.name === entry.name);
    if (!found.data.equals(entry.data)) throw new Error(`mcp zip round-trip failed: ${entry.name}`);
  }
  writeFileSync(OUT, zip);
}

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function dosTime(d) {
  return {
    time: (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1),
    date: ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate(),
  };
}

function buildZip(entries) {
  const { time, date } = dosTime(new Date());
  const parts = [];
  const centrals = [];
  let offset = 0;
  for (const entry of entries) {
    const name = Buffer.from(entry.name);
    const crc = crc32(entry.data);
    const compressed = deflateRawSync(entry.data);
    const local = Buffer.alloc(30 + name.length);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(8, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(date, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(compressed.length, 18);
    local.writeUInt32LE(entry.data.length, 22);
    local.writeUInt16LE(name.length, 26);
    name.copy(local, 30);
    parts.push(local, compressed);

    const central = Buffer.alloc(46 + name.length);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(0x0314, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(time, 12);
    central.writeUInt16LE(date, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(compressed.length, 20);
    central.writeUInt32LE(entry.data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE((0o100644 << 16) >>> 0, 38);
    central.writeUInt32LE(offset, 42);
    name.copy(central, 46);
    centrals.push(central);
    offset += local.length + compressed.length;
  }
  const cd = Buffer.concat(centrals);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(cd.length, 12);
  eocd.writeUInt32LE(offset, 16);
  return Buffer.concat([...parts, cd, eocd]);
}

function listZip(buf) {
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 22 - 65535); i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error('mcp zip has no end record');
  const count = buf.readUInt16LE(eocd + 8);
  let p = buf.readUInt32LE(eocd + 16);
  const out = [];
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error('mcp zip central directory is broken');
    const method = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOff = buf.readUInt32LE(p + 42);
    const name = buf.subarray(p + 46, p + 46 + nameLen).toString();
    const localNameLen = buf.readUInt16LE(localOff + 26);
    const localExtra = buf.readUInt16LE(localOff + 28);
    const dataOff = localOff + 30 + localNameLen + localExtra;
    const compressed = buf.subarray(dataOff, dataOff + compSize);
    const data = method === 0 ? Buffer.from(compressed) : inflateRawSync(compressed);
    out.push({ name, data });
    p += 46 + nameLen + extraLen + commentLen;
  }
  return out;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) packMcpZip();
