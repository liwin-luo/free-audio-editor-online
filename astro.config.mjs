import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import { imageSize } from 'image-size';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { guideAlternates, localesWithGuides } from './src/data/guides.ts';
import { localeMeta } from './src/i18n/locales.ts';

/**
 * Guide markdown images are static files under public/, so Astro won't touch
 * them. Give each one intrinsic dimensions (space reserved before decode, no
 * CLS) and lazy loading so offscreen screenshots aren't fetched eagerly.
 */
function markdownImageAttrs() {
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'img') {
      const props = (node.properties ??= {});
      props.loading ??= 'lazy';
      props.decoding ??= 'async';
      const src = typeof props.src === 'string' ? props.src : '';
      if (src.startsWith('/')) {
        try {
          const { width, height } = imageSize(readFileSync(new URL(`./public${src}`, import.meta.url)));
          props.width = width;
          props.height = height;
        } catch {
          // Unknown dimensions — leave unset rather than fail the build.
        }
      }
    }
    if (Array.isArray(node.children)) for (const child of node.children) visit(child);
  };
  return (tree) => {
    for (const child of tree.children ?? []) visit(child);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://freeaudioeditor.online',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'id', 'de', 'ko', 'ja', 'zh', 'fr', 'ru', 'ar'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    '/es/guias': '/es/guides',
    '/es/guias/ogg-a-mp3': '/es/guides/ogg-a-mp3',
    '/es/guias/opus-a-mp3': '/es/guides/opus-a-mp3',
  },
  markdown: {
    rehypePlugins: [markdownImageAttrs],
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        const match = path.match(/^\/(?:([a-z]{2})\/)?guides$/);
        if (!match) return true;
        const locale = match[1] ?? 'en';
        return localesWithGuides().includes(locale);
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          pt: 'pt-BR',
          id: 'id',
          de: 'de',
          ko: 'ko',
          ja: 'ja',
          zh: 'zh-Hans',
          fr: 'fr',
          ru: 'ru',
          ar: 'ar',
        },
      },
      serialize(item) {
        // Home pages first, tool hub second, everything else default
        const path = new URL(item.url).pathname;
        const priority =
          path === '/' || /^\/[a-z]{2}\/?$/.test(path)
            ? 1.0
            : /^\/(?:[a-z]{2}\/)?tools\/?$/.test(path)
              ? 0.8
              : item.priority;
        // The HTML head declares x-default; keep sitemap hreflang clusters
        // consistent by appending the same entry to every URL's alternates.
        let links = item.links;
        if (!links) {
          const bare = path.replace(/\/$/, '') || '/';
          const unprefixed = bare.replace(/^\/(?:es|pt|id|de|ko|ja|zh|fr|ru|ar)(?=\/)/, '') || '/';
          const cluster = guideAlternates(unprefixed);
          if (cluster.length > 1) {
            links = cluster.map((alt) => ({
              lang: localeMeta(alt.locale).hreflang,
              url: new URL(alt.href, item.url).href,
            }));
          }
        }
        if (links) {
          const en = links.find((l) => l.lang === 'en');
          if (en && !links.some((l) => l.lang === 'x-default')) {
            links = [...links, { url: en.url, lang: 'x-default' }];
          }
        }
        return { ...item, priority, links };
      },
    }),
  ],
  // Desktop dev is pinned so Tauri's webview and the dev server stay on the same origin.
  ...(process.env.DESKTOP === '1'
    ? { server: { port: 4321, strictPort: true, host: '127.0.0.1' } }
    : {}),
  vite: {
    plugins: [tailwindcss()],
    // The transcription worker dynamically imports @huggingface/transformers,
    // which code-splits — only ES worker output supports that.
    worker: {
      format: 'es',
    },
  },
  build: {
    inlineStylesheets: 'auto',
    // Emit /page.html so Vercel's cleanUrls serves it at /page — matches
    // vercel.json (cleanUrls: true, trailingSlash: false) with zero redirects.
    format: 'file',
  },
});
