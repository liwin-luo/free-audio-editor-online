import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://freeaudioeditor.online',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'id', 'de', 'ko', 'ja', 'zh'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
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
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
    // Emit /page.html so Vercel's cleanUrls serves it at /page — matches
    // vercel.json (cleanUrls: true, trailingSlash: false) with zero redirects.
    format: 'file',
  },
});
