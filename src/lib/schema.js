import { contact, markets, seo, siteConfig } from '@/lib/site'

const daysInEnglish = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const serviceArea = ['Hyères', 'Toulon', 'La Crau', 'Carqueiranne']

export function buildClothingStoreSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    '@id': `${siteConfig.url}/#store`,
    name: siteConfig.name,
    description: seo.description,
    url: siteConfig.url,
    telephone: '+33767766172',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    image: [`${siteConfig.url}/images/stand-marche-hyeres.webp`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      postalCode: contact.address.postalCode,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    areaServed: serviceArea.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: markets.map((market) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: daysInEnglish[market.dayIndex],
      opens: market.start,
      closes: market.end,
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+33767766172',
        contactType: 'réservations et renseignements',
        availableLanguage: 'French',
      },
    ],
    sameAs: [
      contact.instagram,
      contact.facebook,
      contact.tiktok,
      contact.youtube,
    ],
  }
}
