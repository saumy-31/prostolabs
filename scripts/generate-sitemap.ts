import fs from 'fs'
import path from 'path'
import { resources } from '../src/data/resourcesData'

const SITE_URL = 'https://prostolabs.com'
const TODAY = new Date().toISOString().split('T')[0]

/**
 * Page Configuration Object
 * Defines priority and change frequency for all primary static routes.
 */
const pageConfig: Record<string, { priority: string; changefreq: string }> = {
  '/': {
    priority: '1.0',
    changefreq: 'daily'
  },
  '/services': {
    priority: '0.9',
    changefreq: 'monthly'
  },
  '/resources': {
    priority: '0.9',
    changefreq: 'daily'
  },
  '/flysava': {
    priority: '0.8',
    changefreq: 'weekly'
  },
  '/about': {
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/contact': {
    priority: '0.8',
    changefreq: 'yearly'
  },
  '/careers': {
    priority: '0.7',
    changefreq: 'weekly'
  }
}

/**
 * Convert human-readable or string dates to YYYY-MM-DD
 */
function formatISO8601Date(dateString?: string): string {
  if (!dateString) return TODAY

  // If already in YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}/.test(dateString)) {
    return dateString.substring(0, 10)
  }

  const parsedDate = new Date(dateString)
  if (isNaN(parsedDate.getTime())) {
    return TODAY
  }

  return parsedDate.toISOString().split('T')[0]
}

function generateSitemapXml(): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // 1. Static Pages (Reading from pageConfig)
  for (const [route, config] of Object.entries(pageConfig)) {
    const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`
    xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>\n`
  }

  // 2. Future-Proof Dynamic Article Pages (Automated from resourcesData)
  for (const article of resources) {
    const lastmod = formatISO8601Date(article.date)
    xml += `  <url>
    <loc>${SITE_URL}/resources/${article.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`
  }

  xml += `</urlset>
`
  return xml
}

// Write to public/sitemap.xml
const sitemapXml = generateSitemapXml()
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml')

fs.writeFileSync(outputPath, sitemapXml, 'utf-8')
console.log(`✅ Sitemap successfully generated at ${outputPath}`)