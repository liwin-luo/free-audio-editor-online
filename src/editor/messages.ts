import type { EditorText } from '../i18n/types';

export function showToast(root: HTMLElement | null, kind: 'info' | 'success' | 'error', message: string): void {
  if (!root) return;
  const border = kind === 'error' ? 'border-l-danger' : kind === 'success' ? 'border-l-success' : 'border-l-accent';
  const el = document.createElement('div');
  el.setAttribute('role', kind === 'error' ? 'alert' : 'status');
  el.className = `pointer-events-auto w-full max-w-md cursor-pointer rounded-lg border border-line ${border} border-l-4 bg-surface px-4 py-3 text-sm text-ink shadow-pop`;
  el.textContent = message;
  el.addEventListener('click', () => el.remove());
  root.appendChild(el);
  setTimeout(() => el.remove(), 4500);
}

export function readEditorText(root: HTMLElement): EditorText {
  const raw = root.getAttribute('data-i18n');
  if (!raw) throw new Error('editor i18n missing');
  return JSON.parse(raw) as EditorText;
}
