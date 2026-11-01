/** Tap tempo island: taps go in, the trimmed-mean BPM readout comes out.
 *  Space counts as a tap; 2.5 s without a tap starts a fresh count. */
import { TAP_TIMEOUT_MS, bpmFromTaps } from './tap-tempo';
import { readEditorText } from './messages';
import { fill } from '../i18n/inline';

export function initTapTempo(): void {
  const root = document.querySelector<HTMLElement>('[data-tap-tempo]');
  if (!root) return;
  const text = readEditorText(root);
  const btn = root.querySelector<HTMLButtonElement>('[data-tap]');
  const reset = root.querySelector<HTMLButtonElement>('[data-tap-reset]');
  const readout = root.querySelector<HTMLElement>('[data-tap-bpm]');
  const counter = root.querySelector<HTMLElement>('[data-tap-count]');
  let stamps: number[] = [];

  const render = () => {
    const bpm = bpmFromTaps(stamps, Date.now());
    if (readout) readout.textContent = bpm === null ? '—' : String(bpm);
    if (counter) counter.textContent = fill(text.tapTempoBeats, { n: String(stamps.length) });
  };
  const tap = () => {
    const now = Date.now();
    stamps = stamps.filter((t) => now - t <= TAP_TIMEOUT_MS);
    stamps.push(now);
    render();
  };

  btn?.addEventListener('click', tap);
  root.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !(e.target as HTMLElement).closest('button, select, input')) {
      e.preventDefault();
      tap();
    }
  });
  reset?.addEventListener('click', () => {
    stamps = [];
    render();
  });
  render();
}
