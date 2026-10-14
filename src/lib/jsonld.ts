import { SITE } from '../data/site';
import type { FaqItem, HowToStep } from '../data/tools';

export function webAppSchema(
  name: string,
  description: string,
  extra?: { url?: string; inLanguage?: string; os?: string; browser?: string; features?: string[] },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: extra?.url ?? SITE.url,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: extra?.os ?? 'Any (browser-based)',
    browserRequirements: extra?.browser ?? 'Requires a modern browser with Web Audio support',
    inLanguage: extra?.inLanguage,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: extra?.features ?? [
      'Trim, cut and merge audio',
      'Volume, normalize, speed and reverb',
      'Reverse playback and voice recording',
      'Convert video soundtracks to MP3 or WAV',
      'Export MP3, WAV and iPhone M4R',
    ],
  };
}

export function faqSchema(faqs: FaqItem[], inLanguage?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function howToSchema(name: string, steps: HowToStep[], inLanguage?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    inLanguage,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}

export function websiteSchema(extra?: { description?: string; inLanguage?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: extra?.description ?? SITE.description,
    inLanguage: extra?.inLanguage,
  };
}
