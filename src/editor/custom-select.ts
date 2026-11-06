/**
 * Upgrade native <select> elements to the site's custom dropdown: a styled
 * trigger plus a themed listbox, with the real select kept functional but
 * visually hidden (same pattern as the editor kernel's format dropdown).
 * Rows rebuild from the live options every time the popup opens, so islands
 * that swap option lists at runtime need no extra wiring. Wraps run once per
 * select; call upgradeSelects(root) from the island's init loop.
 */

const CHEVRON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 shrink-0 text-ink3" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const CHECK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="m9 12 2 2 4-4"/></svg>';

export function upgradeSelects(root: ParentNode): void {
  root.querySelectorAll('select').forEach((select) => {
    if (select.dataset.upgraded) return;
    select.dataset.upgraded = '1';

    const full = select.classList.contains('w-full');
    const wrap = document.createElement('div');
    wrap.className = full ? 'relative w-full' : 'relative';
    wrap.setAttribute('data-custom-select', '');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className =
      'flex h-10 items-center gap-2 rounded-lg border border-line-strong bg-bg px-2.5 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-50' +
      (full ? ' w-full justify-between' : '');
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    const btnLabel = document.createElement('span');
    btnLabel.className = 'truncate tabular-nums';
    const caret = document.createElement('span');
    caret.setAttribute('aria-hidden', 'true');
    caret.innerHTML = CHEVRON;
    btn.append(btnLabel, caret);

    const popup = document.createElement('div');
    popup.className =
      'absolute left-0 z-30 hidden min-w-[230px] rounded-lg border border-line-strong bg-surface py-1 shadow-xl' +
      (select.closest('.export-bar') ? ' bottom-full mb-1' : ' top-full mt-1') +
      (full ? ' w-full' : '');
    popup.setAttribute('role', 'listbox');

    select.before(wrap);
    wrap.append(btn, popup);
    select.classList.add('sr-only');
    select.setAttribute('tabindex', '-1');

    const sync = (): void => {
      btn.disabled = select.disabled;
      btnLabel.textContent = select.selectedOptions[0]?.textContent ?? '';
    };

    const close = (): void => {
      popup.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    };

    const build = (): void => {
      popup.innerHTML = '';
      Array.from(select.options).forEach((opt) => {
        const row = document.createElement('button');
        row.type = 'button';
        row.setAttribute('role', 'option');
        row.setAttribute('aria-selected', String(opt.selected));
        row.className = opt.selected
          ? 'flex w-full items-center gap-2 px-3 py-2 text-sm font-medium text-accent'
          : 'flex w-full items-center gap-2 px-3 py-2 text-sm text-ink hover:bg-accent-soft';
        row.innerHTML =
          `<span class="w-4 shrink-0">${opt.selected ? CHECK : ''}</span>` + `<span class="truncate">${opt.textContent}</span>`;
        row.addEventListener('click', () => {
          select.value = opt.value;
          select.dispatchEvent(new Event('change'));
          close();
          sync();
        });
        popup.appendChild(row);
      });
    };

    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const open = popup.classList.contains('hidden');
      popup.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      if (open) build();
    });
    document.addEventListener('click', (e) => {
      if (popup.classList.contains('hidden')) return;
      if (!(e.target as Element)?.closest('[data-custom-select]')) close();
    });
    root.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
    // Option lists swap at runtime on some pages (e.g. dependent selects) and
    // Loudness enables its select after analysis — mirror both into the chrome.
    new MutationObserver(() => sync()).observe(select, {
      attributes: true,
      attributeFilter: ['disabled'],
      childList: true,
    });

    sync();
  });
}
