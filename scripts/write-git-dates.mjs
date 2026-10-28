/**
 * Refresh the committed git-dates snapshot used by the sitemap on CI builds
 * without .git (Vercel). Run after meaningful content changes:
 *
 *   node scripts/write-git-dates.mjs
 *
 * A local `npm run build` is the natural moment — dates only move when
 * content moved, so an unchanged run rewrites nothing.
 */
import { writeFileSync } from 'node:fs';
import { gitFileDates } from './git-dates.mjs';

const dates = gitFileDates({ warn: true });
if (dates.size === 0) {
  console.error('no usable git history — src/data/git-dates.json left unchanged');
  process.exit(1);
}
writeFileSync(
  new URL('../src/data/git-dates.json', import.meta.url),
  JSON.stringify(Object.fromEntries(dates), null, 1) + '\n',
);
console.log(`src/data/git-dates.json: ${dates.size} files`);
