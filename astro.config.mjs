import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { localesWithGuides } from './src/data/guides.ts';

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
