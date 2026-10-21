/**
 * Standard MIDI file, type 0, one track.
 * Tempo is 120 so tick times match the recording in seconds.
 * ponytail: note-on / note-off and a piano program change only.
 * Basic Pitch also emits a pitch-bend curve per note; those bins are not
 * MIDI bend values, so they are dropped. Upgrade path: scale the contour
 * bins (3 per semitone) into the ±2 semitone bend range and write them.
 */

export interface MidiNote {
  /** MIDI note number. Clamped to 0–127. */
  pitch: number;
  startSec: number;
  durationSec: number;
  /** 0–1, the scale Basic Pitch uses for amplitude. */
  velocity: number;
}

const PPQ = 480;
/** Microseconds per quarter note at 120 BPM. */
const TEMPO = 500_000;

function vlq(n: number): number[] {
  let value = n < 0 ? 0 : n;
  const out = [value & 0x7f];
  value >>= 7;
  while (value > 0) {
    out.unshift((value & 0x7f) | 0x80);
    value >>= 7;
  }
  return out;
}

function secToTicks(sec: number): number {
  return Math.max(0, Math.round((sec * PPQ * 1_000_000) / TEMPO));
}

/** A later note-on of the same pitch would be cut by the earlier note-off. */
function unstack(notes: MidiNote[]): MidiNote[] {
  const groups = new Map<number, MidiNote[]>();
  for (const note of notes) {
    if (!Number.isFinite(note.startSec) || note.startSec < 0) continue;
    if (!Number.isFinite(note.durationSec) || note.durationSec <= 0) continue;
    if (!Number.isFinite(note.velocity) || note.velocity <= 0) continue;
    const pitch = Math.max(0, Math.min(127, Math.round(note.pitch)));
    const clean: MidiNote = {
      pitch,
      startSec: note.startSec,
      durationSec: note.durationSec,
      velocity: Math.min(1, note.velocity),
    };
    const list = groups.get(pitch);
    if (list) list.push(clean);
    else groups.set(pitch, [clean]);
  }
  const out: MidiNote[] = [];
  for (const list of groups.values()) {
    list.sort((a, b) => a.startSec - b.startSec);
    for (let i = 0; i < list.length; i++) {
      const note = list[i]!;
      const next = list[i + 1];
      let duration = note.durationSec;
      if (next && note.startSec + duration > next.startSec) duration = next.startSec - note.startSec;
      if (duration > 0) out.push({ ...note, durationSec: duration });
    }
  }
  return out;
}

interface Event {
  tick: number;
  /** Lower sorts first when ticks match. Note-off before note-on. */
  order: number;
  data: number[];
}

export function notesToMidi(notes: MidiNote[]): Uint8Array {
  const events: Event[] = [
    {
      tick: 0,
      order: 0,
      data: [0xff, 0x51, 0x03, (TEMPO >> 16) & 0xff, (TEMPO >> 8) & 0xff, TEMPO & 0xff],
    },
    { tick: 0, order: 1, data: [0xc0, 0] },
  ];
  for (const note of unstack(notes)) {
    const start = secToTicks(note.startSec);
    const end = Math.max(start + 1, secToTicks(note.startSec + note.durationSec));
    const velocity = Math.max(1, Math.min(127, Math.round(note.velocity * 127)));
    events.push({ tick: start, order: 3, data: [0x90, note.pitch, velocity] });
    events.push({ tick: end, order: 2, data: [0x80, note.pitch, 0] });
  }
  events.sort((a, b) => a.tick - b.tick || a.order - b.order);

  const track: number[] = [];
  let last = 0;
  for (const event of events) {
    track.push(...vlq(event.tick - last), ...event.data);
    last = event.tick;
  }
  track.push(0x00, 0xff, 0x2f, 0x00);

  const header = [0x4d, 0x54, 0x68, 0x64, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x01, (PPQ >> 8) & 0xff, PPQ & 0xff];
  const len = track.length;
  const out = new Uint8Array(header.length + 8 + len);
  out.set(header);
  out.set(
    [0x4d, 0x54, 0x72, 0x6b, (len >>> 24) & 0xff, (len >>> 16) & 0xff, (len >>> 8) & 0xff, len & 0xff],
    header.length,
  );
  out.set(track, header.length + 8);
  return out;
}
