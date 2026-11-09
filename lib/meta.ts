import type { Metadata } from 'next'
import { content, SITE, type Lang } from './content'

export function meta(lang: Lang): Metadata {
  const t = content[lang].meta
  const url = SITE[lang]
  return {
    metadataBase: new URL(url),
    title: t.title,
    description: t.description,
    alternates: { canonical: url, languages: { 'de-DE': SITE.de, 'en': SITE.en } },
    openGraph: {
      title: t.title,
      description: t.description,
      url,
      siteName: lang === 'en' ? 'The Property Lie' : 'Die Immobilienlüge',
      locale: lang === 'en' ? 'en_US' : 'de_DE',
      type: 'book',
      images: [{ url: '/img/og.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: t.title, description: t.description, images: ['/img/og.jpg'] },
    authors: [{ name: 'Dr. Marcel Hofeditz', url: 'https://www.dr-hofeditz.de' }],
    icons: { icon: '/favicon.svg' },
  }
}
