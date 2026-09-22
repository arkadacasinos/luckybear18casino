import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://luckybear18casino.vercel.app/sitemap.xml',
    host: 'https://luckybear18casino.vercel.app',
  }
}

