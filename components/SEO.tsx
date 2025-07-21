import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
}

export default function SEO({ title, description, keywords, ogImage }: SEOProps) {
  const fullTitle = title.includes('Clear Choice') ? title : `${title} - Clear Choice Window Cleaning`
  const defaultOgImage = '/images/og-image.jpg'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Clear Choice Window Cleaning",
            "description": description,
            "serviceType": "Window Cleaning",
            "areaServed": "Local Area",
            "telephone": "+1-XXX-XXX-XXXX",
            "url": "https://yourwebsite.com"
          })
        }}
      />
    </Head>
  )
}