import { execSync } from 'node:child_process';

/**
 * One git pass: tracked file → last commit date (ISO). Empty Map when history
 * is unavailable (CI checkouts without .git), so callers can fall back to the
 * committed snapshot in src/data/git-dates.json.
 */
export function gitFileDates({ warn = false } = {}) {
  const dates = new Map();
  try {
    // -c safe.directory: CI containers often check out the repo as a different
    // user, and git refuses to touch it without this.
    const out = execSync("git -c safe.directory='*' log --name-only --format=%cI", {
      encoding: 'utf8',
      maxBuffer: 1 << 26,
    });
    let cur = null;
    for (const line of out.split('\n')) {
      const l = line.trim();
      if (/^\d{4}-\d{2}-\d{2}T/.test(l)) {
        cur = l;
      } else if (l && cur && !dates.has(l)) {
        dates.set(l, cur);
      }
    }
  } catch (err) {
    if (warn) {
      console.warn(`[sitemap] git history unavailable: ${err.message.split('\n')[0]}`);
    }
  }
  return dates;
}
