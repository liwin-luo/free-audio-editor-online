import { defineConfig } from 'astro/config';
import { readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs';
import { imageSize } from 'image-size';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { guideAlternates, localesWithGuides } from './src/data/guides.ts';
import { localeMeta } from './src/i18n/locales.ts';
import { packMcpZip } from './scripts/pack-mcp.mjs';
import { gitFileDates } from './scripts/git-dates.mjs';

packMcpZip();

/** Guide frontmatter dates, keyed by route, so sitemap lastmod reflects real edits. */
function guideDates() {
  const dates = new Map();
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, dir);
      if (entry.isDirectory()) {
        walk(path);
      } else if (entry.name.endsWith('.md')) {
        const source = readFileSync(path, 'utf8');
        const date =
          source.match(/^updated:\s*["']?([^"'\s]+)/m)?.[1] ??
          source.match(/^date:\s*["']?([^"'\s]+)/m)?.[1];
        const route = path.pathname.split('/src/pages/')[1]?.replace(/\.md$/, '');
        if (date && route) dates.set(`/${route}`, date);
      }
    }
  };
  walk(new URL('./src/pages/', import.meta.url));
  return dates;
}
const GUIDE_DATES = guideDates();

/**
 * Last-commit date per tracked file, so non-guide routes carry a real lastmod.
 * Live git wins; CI builds without .git (Vercel) fall back to the committed
 * snapshot refreshed by `node scripts/write-git-dates.mjs`. With neither, the
 * sitemap keeps its previous guide-only shape — nothing invented.
 */
let FILE_DATES = gitFileDates();
if (FILE_DATES.size === 0) {
  try {
    FILE_DATES = new Map(
      Object.entries(JSON.parse(readFileSync(new URL('./src/data/git-dates.json', import.meta.url), 'utf8'))),
    );
  } catch {
    // No snapshot either — lastmod stays limited to guides.
  }
}
const TOOL_SLUGS = new Set(
  (readFileSync(new URL('./src/data/tools.ts', import.meta.url), 'utf8').match(/^ {4}slug: '([a-z0-9-]+)',$/gm) ?? []).map(
    (line) => line.match(/'([a-z0-9-]+)'/)[1],
  ),
);

/** Files whose last commit can honestly date this route's content. */
function routeLastmod(pathname) {
  const p = pathname.replace(/\/$/, '') || '/';
  const m = p.match(/^\/(es|pt|id|de|ko|ja|zh|fr|ru|ar)(?=\/|$)/);
  const locale = m?.[1];
  const bare = locale ? p.slice(1 + locale.length) || '/' : p;
  const slug = bare.replace(/^\//, '');
  const files = [];
  if (TOOL_SLUGS.has(slug)) {
    files.push(`src/pages/${slug}.astro`, 'src/data/tools.ts', 'src/data/tool-facts.ts', 'src/components/ToolPage.astro');
  } else if (bare === '/') {
    files.push('src/pages/index.astro');
  } else {
    files.push(`src/pages${bare}.astro`, `src/pages${bare}/index.astro`);
  }
  if (locale) files.push(`src/i18n/${locale}.ts`);
  let newest = null;
  for (const f of files) {
    const d = FILE_DATES.get(f);
    if (d && (!newest || d > newest)) newest = d;
  }
  return newest;
}

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

/**
 * @astrojs/sitemap hardcodes the sitemap-index.xml + sitemap-N.xml pair, but
 * conventional discovery (robots.txt, Search Console, audit tools) expects a
 * single /sitemap.xml. This site stays far under the 50k-URL single-file cap,
 * so flatten the one chunk into sitemap.xml and drop the index; a future build
 * with multiple chunks keeps the index pair untouched.
 */
function flattenSitemap() {
  return {
    name: 'flatten-sitemap',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const chunks = readdirSync(dir).filter((f) => /^sitemap-\d+\.xml$/.test(f));
        if (chunks.length !== 1) {
          logger.warn(`sitemap has ${chunks.length} chunks; keeping sitemap-index.xml`);
          return;
        }
        writeFileSync(new URL('sitemap.xml', dir), readFileSync(new URL(chunks[0], dir)));
        rmSync(new URL(chunks[0], dir));
        rmSync(new URL('sitemap-index.xml', dir), { force: true });
        logger.info('wrote sitemap.xml (flattened the sitemap index)');
      },
    },
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
        const lastmod = GUIDE_DATES.get(path.replace(/\/$/, '')) ?? (FILE_DATES.size ? routeLastmod(path) : undefined);
        return { ...item, priority, links, ...(lastmod ? { lastmod } : {}) };
      },
    }),
    flattenSitemap(),
  ],
  // Desktop dev is pinned so Tauri's webview and the dev server stay on the same origin.
  ...(process.env.DESKTOP === '1'
    ? { server: { port: 4321, strictPort: true, host: '127.0.0.1' } }
    : {}),
  vite: {
    plugins: [tailwindcss()],
    // `@tensorflow/tfjs`'s module entry loads the Node platform (node-fetch).
    // Basic Pitch runs against the browser subset instead.
    resolve: {
      alias: {
        '@tensorflow/tfjs': new URL('./src/editor/tfjs-browser.js', import.meta.url).pathname,
        'node-fetch': new URL('./src/editor/node-fetch-stub.js', import.meta.url).pathname,
      },
    },
    optimizeDeps: {
      include: ['@spotify/basic-pitch'],
    },
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
