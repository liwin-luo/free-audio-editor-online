/**
 * Minimal ID3v2 reader for the common text frames + APIC cover art.
 * Supports v2.3 and v2.4; v2.2 files (pre-2000) are treated as untagged.
 * Pure functions, no DOM — scripts/tags-check.mjs runs this in Node.
 */

export interface PictureData {
  data: Uint8Array; // fresh copy, own buffer — safe to hand to APIs
  mime: string;
}

export interface AudioTags {
  title?: string;
  artist?: string;
  album?: string;
  albumArtist?: string;
  year?: string;
  genre?: string;
  track?: string; // "3" or "3/12"
  disc?: string;
  composer?: string;
  comment?: string;
  picture?: PictureData;
  version?: [number, number]; // ID3 major.minor, when a v2 tag was present
}

// ID3v1 genre table (0–79, the standard set). v2 genres often arrive as "(13)".
const GENRES = [
  'Blues', 'Classic Rock', 'Country', 'Dance', 'Disco', 'Funk', 'Grunge',
  'Hip-Hop', 'Jazz', 'Metal', 'New Age', 'Oldies', 'Other', 'Pop', 'R&B',
  'Rap', 'Reggae', 'Rock', 'Techno', 'Industrial', 'Alternative', 'Ska',
  'Death Metal', 'Pranks', 'Soundtrack', 'Euro-Techno', 'Ambient',
  'Trip-Hop', 'Vocal', 'Jazz+Funk', 'Fusion', 'Trance', 'Classical',
  'Instrumental', 'Acid', 'House', 'Game', 'Sound Clip', 'Gospel', 'Noise',
  'Alt. Rock', 'Bass', 'Soul', 'Punk', 'Space', 'Meditative',
  'Instrumental Pop', 'Instrumental Rock', 'Ethnic', 'Gothic', 'Darkwave',
  'Techno-Industrial', 'Electronic', 'Pop-Folk', 'Eurodance', 'Dream',
  'Southern Rock', 'Comedy', 'Cult', 'Gangsta Rap', 'Top 40',
  'Christian Rap', 'Pop/Funk', 'Jungle', 'Native American', 'Cabaret',
  'New Wave', 'Psychedelic', 'Rave', 'Showtunes', 'Trailer', 'Lo-Fi',
  'Tribal', 'Acid Punk', 'Acid Jazz', 'Polka', 'Retro', 'Musical',
  'Rock & Roll', 'Hard Rock',
];

export function syncsafe(b: Uint8Array, o: number): number {
  return ((b[o] & 0x7f) << 21) | ((b[o + 1] & 0x7f) << 14) | ((b[o + 2] & 0x7f) << 7) | (b[o + 3] & 0x7f);
}

function be32(b: Uint8Array, o: number): number {
  return (b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3];
}

function latin1(b: Uint8Array): string {
  let s = '';
  for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
  return s;
}

/** Length of the encoding-aware terminator at p (00, or 00 00 for UTF-16). */
function termLen(b: Uint8Array, p: number, enc: number): number {
  if (enc === 1 || enc === 2) {
    let i = p;
    while (i + 1 < b.length && (b[i] !== 0 || b[i + 1] !== 0)) i += 2;
    return i - p + 2;
  }
  let i = p;
  while (i < b.length && b[i] !== 0) i++;
  return i - p + 1;
}

function decodeText(b: Uint8Array, enc: number): string {
  let payload = b;
  let label: string;
  if (enc === 0) label = 'windows-1252';
  else if (enc === 3) label = 'utf-8';
  else if (enc === 2) label = 'utf-16be';
  else {
    const bom = b[0] === 0xfe && b[1] === 0xff ? 'utf-16be' : 'utf-16le';
    payload = b.subarray(2);
    label = bom;
  }
  try {
    return new TextDecoder(label).decode(payload).replace(/\u0000+/g, '').trim();
  } catch {
    return '';
  }
}

function cleanGenre(v: string): string {
  const m = /^\((\d+)\)\s*(.*)$/.exec(v);
  if (!m) return v;
  return m[2] || GENRES[Number(m[1])] || v;
}

function deUnsync(b: Uint8Array): Uint8Array {
  const out = new Uint8Array(b.length);
  let j = 0;
  for (let i = 0; i < b.length; i++) {
    out[j++] = b[i];
    if (b[i] === 0xff && b[i + 1] === 0x00) i++;
  }
  return out.subarray(0, j);
}

const TEXT_FRAMES: Record<string, 'title' | 'artist' | 'album' | 'albumArtist' | 'year' | 'genre' | 'track' | 'disc' | 'composer'> = {
  TIT2: 'title', TPE1: 'artist', TALB: 'album', TPE2: 'albumArtist',
  TYER: 'year', TDRC: 'year', TCON: 'genre', TRCK: 'track',
  TPOS: 'disc', TCOM: 'composer',
};

/** Read ID3v2 tags from a complete file buffer (tag lives at the head). */
export function parseId3(file: Uint8Array): AudioTags {
  if (file[0] !== 0x49 || file[1] !== 0x44 || file[2] !== 0x33) return {};
  const major = file[3];
  if (major < 3 || major > 4) return {};
  const out: AudioTags = { version: [major, file[4]] };
  let tag = file.subarray(10, 10 + syncsafe(file, 6));
  if (file[5] & 0x40) tag = tag.subarray(major === 4 ? syncsafe(tag, 0) : be32(tag, 0) + 4); // extended header
  if (file[5] & 0x80) tag = deUnsync(tag);

  let pos = 0;
  while (pos + 10 <= tag.length) {
    const id = latin1(tag.subarray(pos, pos + 4));
    if (!/^[A-Z0-9]{4}$/.test(id)) break; // padding or garbage
    const fsize = major === 4 ? syncsafe(tag, pos + 4) : be32(tag, pos + 4);
    if (fsize <= 0 || pos + 10 + fsize > tag.length) break;
    const body = tag.subarray(pos + 10, pos + 10 + fsize);
    const field = TEXT_FRAMES[id];
    if (field) {
      const v = decodeText(body.subarray(1), body[0]);
      if (v && !out[field]) out[field] = field === 'genre' ? cleanGenre(v) : v;
    } else if (id === 'COMM' && !out.comment) {
      const text = decodeText(body.subarray(4 + termLen(body, 4, body[0])), body[0]);
      if (text) out.comment = text;
    } else if (id === 'APIC' && !out.picture) {
      const enc = body[0];
      let p = 1;
      let m = p;
      while (m < body.length && body[m] !== 0) m++;
      const mime = latin1(body.subarray(p, m)) || 'image/jpeg';
      p = m + 1 + 1; // mime NUL + picture-type byte
      p += termLen(body, p, enc); // description
      out.picture = { mime, data: body.slice(p) }; // slice = fresh buffer
    }
    pos += 10 + fsize;
  }
  return out;
}
