export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://oculus-sante.fr",
    name: "Cabinet Oculus Santé",
    alternateName: "Oculus Santé Ophtalmologie",
    description: "Cabinet d'ophtalmologie à Boulogne-Billancourt spécialisé en consultations ophtalmologiques, OCT, rétinographie, correction de la vue et suivi du glaucome.",
    url: "https://oculus-sante.fr",
    telephone: "+33189462959",
    email: "contact@oculus-sante.fr",
    priceRange: "€€",
    image: "https://oculus-sante.fr/favicon.png",
    logo: {
      "@type": "ImageObject",
      url: "https://oculus-sante.fr/favicon.png",
      width: 512,
      height: 512,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 quai de Stalingrad",
      addressLocality: "Boulogne-Billancourt",
      postalCode: "92100",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8344,
      longitude: 2.2395,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: [
      "Ophthalmology",
      "Optometry",
      "Glaucoma",
      "Retinal Diseases",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Consultation Ophtalmologique",
        description: "Examen complet de la vue avec technologies avancées",
      },
      {
        "@type": "MedicalProcedure",
        name: "OCT et Imagerie Rétinienne",
        description: "Tomographie par cohérence optique pour analyse de la rétine",
      },
      {
        "@type": "MedicalProcedure",
        name: "Rétinographie Couleur",
        description: "Photographie du fond d'œil pour dépistage et suivi",
      },
      {
        "@type": "MedicalProcedure",
        name: "Suivi du Glaucome",
        description: "Dépistage et suivi personnalisé du glaucome",
      },
      {
        "@type": "MedicalProcedure",
        name: "Correction de la Vue",
        description: "Prescription de lunettes et lentilles de contact",
      },
    ],
    sameAs: [
      "https://www.doctolib.fr",
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=3+quai+de+Stalingrad+92100+Boulogne-Billancourt",
    areaServed: [
      {
        "@type": "City",
        name: "Boulogne-Billancourt",
      },
      {
        "@type": "City",
        name: "Issy-les-Moulineaux",
      },
      {
        "@type": "City",
        name: "Paris 16ème",
      },
      {
        "@type": "AdministrativeArea",
        name: "Hauts-de-Seine",
      },
    ],
    founder: {
      "@type": "Person",
      name: "STAN Anamaria-Veronica",
      jobTitle: "Ophtalmologue",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "RPPS",
        value: "10102254280",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://oculus-sante.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://oculus-sante.fr/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: "https://oculus-sante.fr/contact",
      },
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cabinet Oculus Santé",
    url: "https://oculus-sante.fr",
    logo: "https://oculus-sante.fr/favicon.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33189462959",
      contactType: "Rendez-vous",
      areaServed: "FR",
      availableLanguage: ["French"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
