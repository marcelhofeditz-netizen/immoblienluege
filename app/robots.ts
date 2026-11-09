import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default function robots(): MetadataRoute.Robots {
  const host = headers().get('host') || ''
  const base = host.includes('propertylie') ? 'https://www.thepropertylie.com' : 'https://www.immobilienluege.de'
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${base}/sitemap.xml` }
}
