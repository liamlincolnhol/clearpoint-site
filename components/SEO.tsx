import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
}

export default function SEO({ title, description, keywords, ogImage }: SEOProps) {
  const fullTitle = title.includes('ClearPoint') ? title : `${title} - ClearPoint Window Services`
  const defaultOgImage = '/images/og-image.jpg'
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://clearpointwindowservices.com'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="ClearPoint Window Services" />
      
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
            "name": "ClearPoint Window Services",
            "description": description,
            "serviceType": "Window Cleaning Service",
            "areaServed": [
              {
                "@type": "City",
                "name": "Grand Rapids",
                "addressRegion": "MI"
              },
              {
                "@type": "City", 
                "name": "Lowell",
                "addressRegion": "MI"
              },
              {
                "@type": "City",
                "name": "Forest Hills", 
                "addressRegion": "MI"
              },
              {
                "@type": "City",
                "name": "East Grand Rapids",
                "addressRegion": "MI"
              },
              {
                "@type": "Place",
                "name": "West Michigan"
              }
            ],
            "telephone": "(616) 690-8576",
            "email": "clearpointwindows1@gmail.com",
            "url": "https://clearpointwindowservices.com",
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Window Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Interior Window Cleaning"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Exterior Window Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Complete Window Cleaning Service"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  )
}