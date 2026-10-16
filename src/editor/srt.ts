/**
 * SRT subtitle formatting for transcripts. Pure functions, no DOM — covered by
 * scripts/srt-check.mjs (new-tool-spec: no check script, no ship).
 */

export interface TranscriptChunk {
  start: number;
  /** Whisper leaves the final chunk's end open (null). */
  end: number | null;
  text: string;
}

/** Seconds → SRT timestamp `HH:MM:SS,mmm`. */
export function toSrtTime(sec: number): string {
  const totalMs = Math.round(Math.max(0, sec) * 1000);
  const h = Math.floor(totalMs / 3_600_000);
  const m = Math.floor((totalMs % 3_600_000) / 60_000);
  const s = Math.floor((totalMs % 60_000) / 1000);
  const ms = totalMs % 1000;
  const pad = (n: number, w = 2) => String(n).padStart(w, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)},${pad(ms, 3)}`;
}

/**
 * Cue blocks with sequential numbering. An open-ended chunk borrows the next
 * chunk's start (Whisper chunks are contiguous); for the last line it gets
 * start + 2 s so players have something to show. Empty cues are dropped and
 * never consume a number.
 */
export function chunksToSrt(chunks: TranscriptChunk[]): string {
  const cues: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const text = chunks[i].text.trim();
    if (!text) continue;
    const start = chunks[i].start;
    const end = chunks[i].end ?? chunks[i + 1]?.start ?? start + 2;
    cues.push(`${cues.length + 1}\r\n${toSrtTime(start)} --> ${toSrtTime(end)}\r\n${text}`);
  }
  return cues.length ? `${cues.join('\r\n\r\n')}\r\n\r\n` : '';
}
