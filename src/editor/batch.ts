/** Download names for a same-settings queue. Callers pass stems, not paths. */

export function downloadStem(name: string): string {
  const stem = name.replace(/[\\/:*?"<>|]/g, '_').trim();
  return /[^.\s_]/.test(stem) ? stem : 'audio';
}

/** File name without its extension, safe to put in a download. */
export function fileStem(filename: string): string {
  return downloadStem(filename.replace(/\.[^.]+$/, ''));
}

/** Unique `stem.ext` names. A repeat becomes `stem-2.ext`. */
export function uniqueFileNames(stems: string[], ext: string): string[] {
  const used = new Set<string>();
  return stems.map((raw) => {
    const stem = downloadStem(raw);
    let name = `${stem}.${ext}`;
    let n = 2;
    while (used.has(name.toLowerCase())) {
      name = `${stem}-${n}.${ext}`;
      n++;
    }
    used.add(name.toLowerCase());
    return name;
  });
}
