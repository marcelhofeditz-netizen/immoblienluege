import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { SITE } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const host = headers().get('host') || ''
  const url = host.includes('propertylie') ? SITE.en : SITE.de
  return [{ url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1, alternates: { languages: { de: SITE.de, en: SITE.en } } }]
}
