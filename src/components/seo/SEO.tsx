import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path: string
  keywords?: string
}

export const SEO = ({ title, description, path, keywords }: SEOProps) => {
  const siteUrl = 'https://prostolabs.com'
  const currentUrl = `${siteUrl}${path}`
  const defaultImage = `${siteUrl}/logo.png`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ProstoLabs",
    "url": siteUrl,
    "logo": defaultImage,
    "email": "hello@prostolabs.com",
    "sameAs": [
      "https://instagram.com/prostolabs"
    ]
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="ProstoLabs" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* Favicon Tags (Assumes icons are in the public folder) */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.png" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}