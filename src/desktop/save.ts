/**
 * WKWebView ignores `<a download>`. Catch those clicks only in the desktop
 * shell and write the blob through the native save dialog.
 * On the website `__TAURI_INTERNALS__` is absent, so this returns immediately.
 */
export function installDesktopSave(): void {
  if (!('__TAURI_INTERNALS__' in window)) return;
  document.addEventListener(
    'click',
    (event) => {
      const el = event.target;
      const link = el instanceof Element ? el.closest('a[download]') : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const name = link.getAttribute('download') || 'download';
      const href = link.href;
      event.preventDefault();
      const bytes = fetch(href).then((response) => response.arrayBuffer());
      void persist(name, bytes);
    },
    true,
  );
}

async function persist(name: string, bytes: Promise<ArrayBuffer>): Promise<void> {
  const { save } = await import('@tauri-apps/plugin-dialog');
  const { writeFile } = await import('@tauri-apps/plugin-fs');
  const ext = name.includes('.') ? name.slice(name.lastIndexOf('.') + 1) : '';
  const path = await save({
    defaultPath: name,
    filters: ext ? [{ name: ext.toUpperCase(), extensions: [ext] }] : undefined,
  });
  if (!path) return;
  await writeFile(path, new Uint8Array(await bytes));
}
