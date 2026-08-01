import fs from 'fs'
import path from 'path'
import { resources } from '../src/data/resourcesData'

const SITE_URL = 'https://prostolabs.com'

const staticPages = [
  '/',
  '/about',
  '/services',
  '/careers',
  '/contact',
  '/pricing',
  '/faq',
  '/resources'
]

const today = new Date().toISOString().split('T')[0]

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

// Static Pages
for (const page of staticPages) {
  xml += `
  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.9'}</priority>
  </url>`
}

// Blog Articles
for (const article of resources) {
  xml += `
  <url>
    <loc>${SITE_URL}/resources/${article.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
}

xml += `
</urlset>
`

fs.writeFileSync(
  path.join(process.cwd(), 'public', 'sitemap.xml'),
  xml
)

console.log(`✅ Sitemap generated with ${resources.length} articles.`)