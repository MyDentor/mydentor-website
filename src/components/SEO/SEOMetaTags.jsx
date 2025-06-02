// src/components/SEO/SEOMetaTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOMetaTags = ({
  title = "MyDentor - Türkiye'nin İlk AI Diş Hekimi | Ağız Sağlığı Rehberi",
  description = "Karmaşık dental terminolojiyi anlaşılır bir dile çeviren Türkiye'nin ilk AI diş hekimi Dentor ile ağız sağlığınızı koruyun. Kişiselleştirilmiş diş bakım rehberi.",
  keywords = "ai diş hekimi, ağız sağlığı, diş bakımı, dental rehber, mydentor, dentor ai, türkiye diş hekimi, ağız bakımı",
  image = "/images/mydentor-og-image.jpg",
  url = "https://mydentor.com",
  type = "website",
  structuredData = null,
  tone = "bilgelik",
  canonicalUrl = null,
}) => {
  const toneConfig = {
    empati: {
      titleSuffix: " | Empati ve Destek",
      descriptionPrefix: "Anlayışlı ve destekleyici yaklaşımla, ",
      keywords: "empati, destek, ağrı giderme, endişe",
    },
    bilgelik: {
      titleSuffix: " | Bilimsel Rehberlik",
      descriptionPrefix: "Bilimsel bilgiyi anlaşılır şekilde aktararak, ",
      keywords: "eğitim, bilgi, öğretici, dental eğitim",
    },
    sivri: {
      titleSuffix: " | Doğrudan İletişim",
      descriptionPrefix: "Net ve açık yaklaşımla, ",
      keywords: "doğru bilgi, mit kırma, gerçekler, cesur",
    },
    samimiyet: {
      titleSuffix: " | Samimi Yaklaşım",
      descriptionPrefix: "Samimi ve yakın dil kullanarak, ",
      keywords: "samimi, yakın, dostane, günlük",
    },
  };

  const currentTone = toneConfig[tone] || toneConfig.bilgelik;
  const finalTitle = title + (title.includes('MyDentor') ? '' : currentTone.titleSuffix);
  const finalDescription = currentTone.descriptionPrefix + description;
  const finalKeywords = keywords + ', ' + currentTone.keywords;

  // Structured Data Schema
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mydentor.com/#organization",
        "name": "MyDentor",
        "url": "https://mydentor.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mydentor.com/images/mydentor-logo.png",
          "width": 512,
          "height": 512
        },
        "foundingDate": "2024",
        "founder": {
          "@type": "Person",
          "name": "Dr. Berk Yıldırım",
          "jobTitle": "Diş Hekimi",
          "worksFor": {
            "@id": "https://mydentor.com/#organization"
          }
        },
        "sameAs": [
          "https://www.instagram.com/mydentor",
          "https://www.linkedin.com/company/mydentor"
        ],
        "description": "Türkiye'nin ilk AI diş hekimi platformu"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Dr. Berk Yıldırım, MyDentor" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="Turkish" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="MyDentor" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Mobile & App */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#6B46C1" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};