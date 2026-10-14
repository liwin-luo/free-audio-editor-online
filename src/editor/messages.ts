import type { EditorText } from '../i18n/types';

export function readEditorText(root: HTMLElement): EditorText {
  const raw = root.getAttribute('data-i18n');
  if (!raw) throw new Error('editor i18n missing');
  return JSON.parse(raw) as EditorText;
}
