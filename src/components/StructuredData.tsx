'use client'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Turma Simples",
    "description": "Sistema de gestão completo para escolas pequenas, cursos de idiomas, técnicos e livres. Automatize matrículas, cobranças PIX/boleto, certificados e comunicação WhatsApp.",
    "url": "https://turmasimples.com.br",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "197",
      "priceCurrency": "BRL",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "description": "Plano básico mensal para escolas pequenas"
    },
    "provider": {
      "@type": "Organization",
      "name": "Turma Simples",
      "url": "https://turmasimples.com.br",
      "logo": "https://turmasimples.com.br/turma-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Escolas pequenas, cursos de idiomas, cursos técnicos, cursos livres"
    },
    "featureList": [
      "Matrícula digital com contrato online",
      "Cobrança recorrente PIX e boleto",
      "Certificados automáticos em PDF",
      "Integração com WhatsApp",
      "Gestão de turmas e alunos",
      "Dashboard de inadimplência",
      "Relatórios financeiros"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Turma Simples",
    "url": "https://turmasimples.com.br",
    "logo": "https://turmasimples.com.br/turma-logo.png",
    "description": "Sistema de gestão especializado em escolas pequenas, cursos de idiomas, técnicos e livres. Automatização de matrículas, cobranças e certificados.",
    "foundingDate": "2024",
    "industry": "Educational Technology",
    "serviceArea": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos Turma Simples",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistema de Gestão Escolar",
            "description": "Plataforma completa para automatizar escolas pequenas"
          }
        }
      ]
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O Turma Simples é adequado para escolas pequenas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o Turma Simples foi desenvolvido especificamente para escolas pequenas, cursos de idiomas, técnicos e livres que precisam automatizar processos sem complicação."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a cobrança recorrente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O sistema gera cobranças automáticas via PIX e boleto, enviando lembretes pelo WhatsApp para reduzir inadimplência em até 70%."
        }
      },
      {
        "@type": "Question",
        "name": "Posso emitir certificados automaticamente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o sistema gera certificados profissionais em PDF com validação pública automaticamente ao final dos cursos."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}