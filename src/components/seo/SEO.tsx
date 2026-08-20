import { Helmet } from 'react-helmet-async'

// Core Configuration Constants
const SITE_CONFIG = {
  name: 'ProstoLabs',
  domain: 'https://prostolabs.com',
  defaultTitle: 'ProstoLabs | Web Development, AI & Digital Solutions',
  titleTemplate: '%s | ProstoLabs',
  defaultDescription: 'ProstoLabs engineers custom web applications, mobile apps, AI automations, and UI/UX design to help businesses innovate and grow.',
  defaultImage: 'https://prostolabs.com/og-image.jpg',
  themeColor: '#2563EB',
  locale: 'en_US',
  twitterHandle: '@prostolabs',
  logoUrl: 'https://prostolabs.com/logo.png'
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceItem {
  name: string
  description: string
  serviceType?: string
}

export interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'collection'
  published?: string
  modified?: string
  author?: string
  breadcrumbs?: BreadcrumbItem[]
  faq?: FAQItem[]
  services?: ServiceItem[]
  noIndex?: boolean
}

/**
 * Standardize path to clean, lowercase format without trailing slashes
 */
function normalizePath(rawPath: string = ''): string {
  const trimmed = rawPath.trim().toLowerCase()
  if (!trimmed || trimmed === '/') return '/'
  
  const withLeading = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withLeading.endsWith('/') ? withLeading.slice(0, -1) : withLeading
}

/**
 * Helper function to convert various date string formats to standard ISO 8601 (YYYY-MM-DD)
 */
function formatIsoDate(dateString?: string): string | undefined {
  if (!dateString) return undefined
  
  if (/^\d{4}-\d{2}-\d{2}/.test(dateString)) {
    return dateString.substring(0, 10)
  }

  const parsedDate = new Date(dateString)
  if (isNaN(parsedDate.getTime())) {
    return undefined
  }

  return parsedDate.toISOString().split('T')[0]
}

export function SEO({
  title,
  description = SITE_CONFIG.defaultDescription,
  path = '',
  image = SITE_CONFIG.defaultImage,
  type = 'website',
  published,
  modified,
  author = 'ProstoLabs Editorial',
  breadcrumbs,
  faq,
  services,
  noIndex = false
}: SEOProps) {
  // Normalize path & build canonical URL
  const cleanPath = normalizePath(path)
  const canonicalUrl = cleanPath === '/' ? `${SITE_CONFIG.domain}/` : `${SITE_CONFIG.domain}${cleanPath}`

  const formattedTitle = title 
    ? (title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`)
    : SITE_CONFIG.defaultTitle

  const isoPublished = formatIsoDate(published)
  const isoModified = formatIsoDate(modified) || isoPublished

  // =========================================================================
  // STRUCTURED DATA (SCHEMA.ORG) GRAPH GENERATOR (Skipped on noIndex pages)
  // =========================================================================
  const schemaGraph: any[] = []

  if (!noIndex) {
    // 1. Organization Schema
    const organizationSchema = {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.domain}/#organization`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.domain}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_CONFIG.domain}/#logo`,
        url: SITE_CONFIG.logoUrl,
        caption: SITE_CONFIG.name
      },
      email: 'hello@prostolabs.com',
      description: SITE_CONFIG.defaultDescription,
      sameAs: [
        'https://instagram.com/prostolabs'
      ]
    }
    schemaGraph.push(organizationSchema)

    // 2. WebSite Schema
    const websiteSchema = {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.domain}/#website`,
      url: `${SITE_CONFIG.domain}/`,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.defaultDescription,
      publisher: {
        '@id': `${SITE_CONFIG.domain}/#organization`
      },
      inLanguage: 'en-US'
    }
    schemaGraph.push(websiteSchema)

    // 3. Page Schema (WebPage, CollectionPage, or BlogPosting)
    if (type === 'article') {
      const blogPostingSchema = {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}/#article`,
        isPartOf: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
          url: canonicalUrl,
          name: formattedTitle
        },
        headline: title || formattedTitle,
        description: description,
        image: image,
        datePublished: isoPublished,
        dateModified: isoModified,
        author: {
          '@type': 'Organization',
          name: author,
          url: `${SITE_CONFIG.domain}/`
        },
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        inLanguage: 'en-US'
      }
      schemaGraph.push(blogPostingSchema)
    } else if (type === 'collection') {
      const collectionPageSchema = {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: formattedTitle,
        description: description,
        isPartOf: {
          '@id': `${SITE_CONFIG.domain}/#website`
        },
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`
        },
        inLanguage: 'en-US'
      }
      schemaGraph.push(collectionPageSchema)
    } else {
      const webPageSchema = {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: formattedTitle,
        description: description,
        isPartOf: {
          '@id': `${SITE_CONFIG.domain}/#website`
        },
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`
        },
        inLanguage: 'en-US'
      }
      schemaGraph.push(webPageSchema)
    }

    // 4. BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => {
          const itemCleanPath = normalizePath(item.path)
          const itemUrl = itemCleanPath === '/' ? `${SITE_CONFIG.domain}/` : `${SITE_CONFIG.domain}${itemCleanPath}`
          return {
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: itemUrl
          }
        })
      }
      schemaGraph.push(breadcrumbSchema)
    }

    // 5. Service Schema (For Services page)
    if (services && services.length > 0) {
      services.forEach((srv, idx) => {
        schemaGraph.push({
          '@type': 'Service',
          '@id': `${canonicalUrl}/#service-${idx + 1}`,
          name: srv.name,
          description: srv.description,
          serviceType: srv.serviceType || srv.name,
          provider: {
            '@id': `${SITE_CONFIG.domain}/#organization`
          }
        })
      })
    }

    // 6. FAQPage Schema
    if (faq && faq.length > 0) {
      const faqSchema = {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}/#faq`,
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
      schemaGraph.push(faqSchema)
    }
  }

  const jsonLdData = schemaGraph.length > 0 ? {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  } : null

  return (
    <Helmet>
      {/* 1. STANDARD META TAGS */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      {!noIndex && <link rel="canonical" href={canonicalUrl} />}
      <meta name="theme-color" content={SITE_CONFIG.themeColor} />
      <meta httpEquiv="content-language" content="en" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={formattedTitle} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={formattedTitle} />

      {/* 2. OPEN GRAPH TAGS */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {!noIndex && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      {/* Article Specific OpenGraph Metadata */}
      {type === 'article' && isoPublished && (
        <meta property="article:published_time" content={isoPublished} />
      )}
      {type === 'article' && isoModified && (
        <meta property="article:modified_time" content={isoModified} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* 3. TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* 4. JSON-LD STRUCTURED DATA GRAPH */}
      {jsonLdData && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      )}
    </Helmet>
  )
}