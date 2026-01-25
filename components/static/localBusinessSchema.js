const localBusinessSchema = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": "https://www.nvaassociates.com/#accountingservice",
    name: "NVA Associates",
    url: "https://www.nvaassociates.com",
    logo: "https://www.nvaassociates.com/logo.png",
    image: "https://www.nvaassociates.com/office.jpg",
    description:
      "NVA Associates provides professional accounting, GST, income tax, MSME and compliance services for individuals and businesses in India.",
    telephone: "+91-XXXXXXXXXX",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Office Address",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "XXXXXX",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "XX.XXXX",
      longitude: "YY.YYYY",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.linkedin.com/company/yourcompany",
      "https://www.instagram.com/yourpage",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting & Compliance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accounting & Bookkeeping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GST Registration & Filing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Income Tax Returns",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MSME / Udyam Registration",
          },
        },
      ],
    },
  }),
}

export {
  localBusinessSchema
}