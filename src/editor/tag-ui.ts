/**
 * Controller for the MP3 tag editor island (markup in TagEditor.astro).
 * The audio stream is never decoded — only the tag block is rewritten.
 */
import { buildTaggedMp3, parseId3, type AudioTags, type PictureData } from './tags';
import { formatBytes } from '../lib/format';
import { showToast } from './messages';
import type { EditorConfig } from '../data/tools';

/** Only the strings the controller needs at runtime; everything else is SSR. */
interface TagRuntime {
  readFail: string;
  coverFail: string;
  saving: string;
  saved: string;
  writeFail: string;
}

const TEXT_FIELDS = [
  'title',
  'artist',
  'album',
  'albumArtist',
  'year',
  'genre',
  'track',
  'disc',
  'composer',
  'comment',
] as const;
type TextField = (typeof TEXT_FIELDS)[number];

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Tag editor markup missing: ${selector}`);
  return el;
}

function download(blob: Blob, name: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

class TagForm {
  private config: EditorConfig;
  private i18n: TagRuntime;
  private els: {
    dropzone: HTMLElement;
    fileInput: HTMLInputElement;
    workspace: HTMLElement;
    fileName: HTMLElement;
    fileMeta: HTMLElement;
    eject: HTMLButtonElement;
    notags: HTMLElement;
    fields: HTMLFieldSetElement;
    fieldsByName: Record<TextField, HTMLInputElement | HTMLTextAreaElement>;
    coverImg: HTMLImageElement;
    coverInput: HTMLInputElement;
    coverRemove: HTMLButtonElement;
    coverSave: HTMLButtonElement;
    removeAll: HTMLInputElement;
    save: HTMLButtonElement;
    reset: HTMLButtonElement;
    status: HTMLElement;
  };

  private audioBuf: ArrayBuffer | null = null;
  private parsed: AudioTags = {};
  private baseName = 'audio';
  private picture: PictureData | null = null;
  private coverUrl: string | null = null;
  private busy = false;

  constructor(root: HTMLElement) {
    this.config = JSON.parse(root.dataset.config ?? '{}') as EditorConfig;
    this.i18n = JSON.parse(root.dataset.i18n ?? '{}') as TagRuntime;
    const fieldsByName = {} as Record<TextField, HTMLInputElement | HTMLTextAreaElement>;
    for (const name of TEXT_FIELDS) {
      fieldsByName[name] = requireEl<HTMLInputElement | HTMLTextAreaElement>(root, `[data-field="${name}"]`);
    }
    this.els = {
      dropzone: requireEl(root, '[data-dropzone]'),
      fileInput: requireEl<HTMLInputElement>(root, '[data-file-input]'),
      workspace: requireEl(root, '[data-workspace]'),
      fileName: requireEl(root, '[data-file-name]'),
      fileMeta: requireEl(root, '[data-file-meta]'),
      eject: requireEl<HTMLButtonElement>(root, '[data-eject]'),
      notags: requireEl(root, '[data-notags]'),
      fields: requireEl<HTMLFieldSetElement>(root, '[data-fields]'),
      fieldsByName,
      coverImg: requireEl<HTMLImageElement>(root, '[data-cover-img]'),
      coverInput: requireEl<HTMLInputElement>(root, '[data-cover-input]'),
      coverRemove: requireEl<HTMLButtonElement>(root, '[data-cover-remove]'),
      coverSave: requireEl<HTMLButtonElement>(root, '[data-cover-save]'),
      removeAll: requireEl<HTMLInputElement>(root, '[data-remove-all]'),
      save: requireEl<HTMLButtonElement>(root, '[data-save]'),
      reset: requireEl<HTMLButtonElement>(root, '[data-reset]'),
      status: requireEl(root, '[data-status]'),
    };
    this.bind();
  }

  private bind(): void {
    const { els } = this;

    // Drop zone: click, keyboard, drag & drop.
    els.dropzone.addEventListener('click', () => els.fileInput.click());
    els.dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        els.fileInput.click();
      }
    });
    for (const type of ['dragenter', 'dragover'] as const) {
      els.dropzone.addEventListener(type, (e) => {
        e.preventDefault();
        els.dropzone.classList.add('border-accent', 'bg-accent-soft');
      });
    }
    for (const type of ['dragleave', 'drop'] as const) {
      els.dropzone.addEventListener(type, (e) => {
        e.preventDefault();
        els.dropzone.classList.remove('border-accent', 'bg-accent-soft');
      });
    }
    els.dropzone.addEventListener('drop', (e) => {
      const file = e.dataTransfer?.files?.[0];
      if (file) void this.load(file);
    });
    els.fileInput.addEventListener('change', () => {
      const file = els.fileInput.files?.[0];
      if (file) void this.load(file);
      els.fileInput.value = '';
    });

    // Replace / add cover art.
    els.coverInput.addEventListener('change', () => {
      const f = els.coverInput.files?.[0];
      els.coverInput.value = '';
      if (!f) return;
      if (f.type !== 'image/jpeg' && f.type !== 'image/png') {
        this.setStatus(this.i18n.coverFail);
        showToast(this.toastRoot(), 'error', this.i18n.coverFail);
        return;
      }
      void f.arrayBuffer().then((buf) => {
        this.picture = { data: new Uint8Array(buf), mime: f.type };
        this.refreshCover();
        this.setStatus('');
      });
    });

    // Remove cover.
    els.coverRemove.addEventListener('click', () => {
      this.picture = null;
      this.refreshCover();
    });

    // Save the current cover image.
    els.coverSave.addEventListener('click', () => {
      if (!this.picture) return;
      const ext = this.picture.mime === 'image/png' ? 'png' : 'jpg';
      download(new Blob([this.picture.data], { type: this.picture.mime }), `${this.baseName}.${ext}`);
    });

    // Remove-all mode disables the tag fields; cover keeps working
    // (buildTaggedMp3 ignores it in that mode).
    els.removeAll.addEventListener('change', () => {
      els.fields.disabled = els.removeAll.checked;
    });

    // Save MP3.
    els.save.addEventListener('click', () => void this.save());

    // Reset back to the parsed tags.
    els.reset.addEventListener('click', () => this.reset());

    // Load a different file (file-bar eject, island convention).
    els.eject.addEventListener('click', () => this.eject());
  }

  // Load an MP3: read tags on-device, fill the form, show the cover.
  private async load(file: File): Promise<void> {
    if (this.busy) return;
    const isMp3 = file.type === 'audio/mpeg' || /\.mp3$/i.test(file.name);
    if (!isMp3) {
      this.setStatus(this.i18n.readFail);
      showToast(this.toastRoot(), 'error', this.i18n.readFail);
      return;
    }
    try {
      this.audioBuf = await file.arrayBuffer();
    } catch {
      this.audioBuf = null;
      this.setStatus(this.i18n.readFail);
      showToast(this.toastRoot(), 'error', this.i18n.readFail);
      return;
    }
    this.parsed = parseId3(new Uint8Array(this.audioBuf));
    this.baseName = file.name.replace(/\.[^.]+$/, '') || 'audio';
    this.els.fileName.textContent = file.name;
    this.els.fileMeta.textContent = formatBytes(file.size);
    this.picture = this.parsed.picture
      ? { data: this.parsed.picture.data, mime: this.parsed.picture.mime }
      : null;
    this.fillFrom(this.parsed);
    this.refreshCover();
    this.refreshNoTags();
    this.els.dropzone.hidden = true;
    this.els.workspace.classList.remove('hidden');
    this.els.save.disabled = false;
    this.setStatus('');
  }

  // Reflect the current picture in the preview and the Save-cover button.
  private refreshCover(): void {
    const { els } = this;
    if (this.coverUrl) {
      URL.revokeObjectURL(this.coverUrl);
      this.coverUrl = null;
    }
    if (this.picture) {
      this.coverUrl = URL.createObjectURL(new Blob([this.picture.data], { type: this.picture.mime }));
      els.coverImg.src = this.coverUrl;
      els.coverImg.hidden = false;
      els.coverSave.hidden = false;
    } else {
      els.coverImg.removeAttribute('src');
      els.coverImg.hidden = true;
      els.coverSave.hidden = true;
    }
    this.refreshNoTags();
  }

  private refreshNoTags(): void {
    const p = this.parsed;
    const hasTags = Boolean(
      p.title || p.artist || p.album || p.albumArtist || p.year || p.genre || p.track || p.disc || p.composer || p.comment,
    );
    this.els.notags.hidden = hasTags || this.picture !== null;
  }

  // Collect the form into AudioTags (trimmed; empty stays undefined).
  private collect(): AudioTags {
    const v = (name: TextField): string | undefined => {
      const t = this.els.fieldsByName[name].value.trim();
      return t ? t : undefined;
    };
    return {
      title: v('title'),
      artist: v('artist'),
      album: v('album'),
      albumArtist: v('albumArtist'),
      year: v('year'),
      genre: v('genre'),
      track: v('track'),
      disc: v('disc'),
      composer: v('composer'),
      comment: v('comment'),
      picture: this.picture ?? undefined,
    };
  }

  // Build the tagged file (or bare audio) and hand it to the browser.
  private async save(): Promise<void> {
    const { els } = this;
    if (!this.audioBuf || this.busy) return;
    this.busy = true;
    els.save.disabled = true;
    this.setStatus(this.i18n.saving);
    try {
      const out = buildTaggedMp3(this.audioBuf, this.collect(), {
        removeAll: els.removeAll.checked,
      });
      const title = this.els.fieldsByName.title.value.trim();
      const safe = title.replace(/[\\/:*?"<>|]/g, '_') || 'audio';
      download(new Blob([out], { type: 'audio/mpeg' }), `${safe}.mp3`);
      this.setStatus(this.i18n.saved);
    } catch {
      this.setStatus(this.i18n.writeFail);
      showToast(this.toastRoot(), 'error', this.i18n.writeFail);
    } finally {
      this.busy = false;
      els.save.disabled = false;
    }
  }

  // Reset: refill the form from the tags as they were parsed, and leave
  // remove-all mode (it is a save-time choice, not part of the tags).
  private reset(): void {
    this.picture = this.parsed.picture
      ? { data: this.parsed.picture.data, mime: this.parsed.picture.mime }
      : null;
    this.fillFrom(this.parsed);
    this.refreshCover();
    this.els.removeAll.checked = false;
    this.els.fields.disabled = false;
    this.setStatus('');
  }

  private fillFrom(tags: AudioTags): void {
    for (const name of TEXT_FIELDS) {
      this.els.fieldsByName[name].value = tags[name] ?? '';
    }
  }

  private eject(): void {
    this.audioBuf = null;
    this.parsed = {};
    this.picture = null;
    this.fillFrom({});
    this.refreshCover();
    this.els.workspace.classList.add('hidden');
    this.els.dropzone.hidden = false;
    this.els.save.disabled = true;
    this.els.fields.disabled = false;
    this.els.removeAll.checked = false;
    this.setStatus('');
  }

  private toastRoot(): HTMLElement | null {
    return document.querySelector<HTMLElement>('[data-toast-root]');
  }

  private setStatus(msg: string): void {
    this.els.status.textContent = msg;
  }
}

export function initTagEditors(): void {
  document.querySelectorAll<HTMLElement>('[data-tag-editor]').forEach((root) => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = '1';
    new TagForm(root);
  });
}
