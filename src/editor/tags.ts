/**
 * MP3 tag pipeline: strip old tags, write new ones (or save bare audio).
 * Audio MPEG frames are never decoded or re-encoded — copied byte for byte.
 */
import { ID3Writer } from 'browser-id3-writer';
import { syncsafe, type AudioTags } from './id3-read';

export { parseId3, type AudioTags, type PictureData } from './id3-read';

function hasId3v2(b: Uint8Array): boolean {
  return b[0] === 0x49 && b[1] === 0x44 && b[2] === 0x33;
}

function hasId3v1(b: Uint8Array): boolean {
  const t = b.subarray(b.length - 128);
  return t[0] === 0x54 && t[1] === 0x41 && t[2] === 0x47; // 'TAG'
}

/** Remove ID3v2 (head) and ID3v1 (tail); return the bare MPEG audio. */
export function stripAllTags(buf: ArrayBuffer): ArrayBuffer {
  const b = new Uint8Array(buf);
  let start = 0;
  if (hasId3v2(b)) {
    let end = 10 + syncsafe(b, 6);
    if (b[5] & 0x10) end += 10; // footer
    start = end;
  }
  let stop = b.length;
  if (stop - start > 128 && hasId3v1(b)) stop -= 128;
  return b.slice(start, stop).buffer;
}

export function buildTaggedMp3(
  audio: ArrayBuffer,
  tags: AudioTags,
  opts: { removeAll?: boolean } = {},
): ArrayBuffer {
  const bare = stripAllTags(audio);
  if (opts.removeAll) return bare;
  const w = new ID3Writer(bare);
  const s = (v?: string) => {
    const t = v?.trim();
    return t ? t : undefined;
  };
  const text = (id: 'TIT2' | 'TALB' | 'TPE2' | 'TRCK' | 'TPOS', v?: string) => {
    const t = s(v);
    if (t !== undefined) w.setFrame(id, t);
  };
  const list = (id: 'TPE1' | 'TCON' | 'TCOM', v?: string) => {
    const t = s(v);
    if (t !== undefined) w.setFrame(id, [t]);
  };
  text('TIT2', tags.title);
  list('TPE1', tags.artist);
  text('TALB', tags.album);
  text('TPE2', tags.albumArtist);
  const year = s(tags.year);
  if (year !== undefined) {
    const y = parseInt(year, 10); // TYER is an integer frame in v2.3
    if (Number.isFinite(y)) w.setFrame('TYER', y);
  }
  list('TCON', tags.genre);
  text('TRCK', tags.track);
  text('TPOS', tags.disc);
  list('TCOM', tags.composer);
  const comment = s(tags.comment);
  if (comment !== undefined) w.setFrame('COMM', { language: 'eng', description: '', text: comment });
  if (tags.picture?.data.length) {
    // The lib sniffs magic bytes and rejects unknown data; hand it an exact
    // ArrayBuffer copy (slice = own buffer even when data is a view).
    w.setFrame('APIC', { type: 3, data: tags.picture.data.slice().buffer, description: '' });
  }
  return w.addTag();
}
