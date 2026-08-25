export const siteConfig = {
  name: "L'Étal d'Hyères",
  baseline: 'Votre boutique mode en plein air, au cœur des marchés de Hyères',
  url: 'https://nawal-hyeres.netlify.app/',
  locale: 'fr_FR',
  heroImage: '/images/hero-stall.webp',
}

export const contact = {
  merchantName: 'Abdessamad Lafdi',
  email: 'Lafdit@dev.fr',
  phoneDisplay: '07 67 76 61 72',
  phoneHref: 'tel:+33767766172',
  whatsappNumber: '33767766172',
  whatsappMessage:
    "Bonjour ! J'ai vu votre site et je souhaite réserver un article à retirer au marché.",
  address: {
    street: '[Adresse]',
    postalCode: '83400',
    city: 'Hyères',
    region: 'Var',
    country: 'FR',
  },
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  tiktok: 'https://www.tiktok.com/@',
  youtube: 'https://www.youtube.com/@',
}

export const seo = {
  defaultTitle: `Vêtements & Accessoires – Marchés de Hyères | ${siteConfig.name}`,
  titleTemplate: `%s | ${siteConfig.name}`,
  description:
    "Retrouvez notre stand de vêtements et accessoires de mode sur les marchés hebdomadaires de Hyères. Prêt-à-porter femme & homme à petits prix. Marché du samedi, avenue Gambetta.",
  keywords: [
    'vêtements marché Hyères',
    'marché hebdomadaire Hyères vêtements',
    'prêt-à-porter marché Hyères',
    'accessoires de mode Hyères',
    'commerçant ambulant Hyères',
    'stand vêtements marché Var',
    'marché forain Hyères samedi',
    'où acheter des vêtements pas chers à Hyères',
    'marché du samedi Hyères avenue Gambetta',
    'vêtements femme marché provençal Hyères',
    'foire artisanale Hyères mode',
    'marché Hyères horaires vêtements',
    'bijoux fantaisie Hyères',
    'paniers paille Hyères',
  ],
}

export const markets = [
  {
    day: 'Mardi',
    dayIndex: 2,
    name: 'Marché de Hyères',
    location: 'Place de la République',
    hours: '8h00 – 13h00',
    start: '08:00',
    end: '13:00',
    star: false,
    mapsQuery: 'Place de la République, 83400 Hyères',
  },
  {
    day: 'Jeudi',
    dayIndex: 4,
    name: 'Marché des Salins',
    location: "Les Salins d'Hyères",
    hours: '8h00 – 13h00',
    start: '08:00',
    end: '13:00',
    star: false,
    mapsQuery: 'Les Salins d’Hyères, 83400 Hyères',
  },
  {
    day: 'Samedi',
    dayIndex: 6,
    name: 'Grand Marché',
    location: 'Avenue Gambetta',
    hours: '8h00 – 13h00',
    start: '08:00',
    end: '13:00',
    star: true,
    mapsQuery: 'Avenue Gambetta, 83400 Hyères',
  },
  {
    day: 'Dimanche',
    dayIndex: 0,
    name: "Marché de l'Ayguade",
    location: "L'Ayguade",
    hours: '8h00 – 13h00',
    start: '08:00',
    end: '13:00',
    star: false,
    mapsQuery: "L'Ayguade, 83400 Hyères",
  },
]

export const alertBanner = {
  active: true,
  type: 'info',
  title: 'Cette semaine',
  message:
    'Retrouvez-nous samedi au Grand Marché, avenue Gambetta, dès 8h ! De nouvelles robes d’été en coton viennent d’arriver.',
}

export const collections = [
  {
    slug: 'vetements-femme',
    title: 'Vêtements Femme',
    description:
      'Robes légères unies, vichys colorées et imprimés fleuris : la garde-robe estivale pensée pour le soleil de Provence.',
    priceRange: '15 € – 35 €',
    alt: 'Vêtements femme marché Hyères',
    image: '/images/vetements-femme.webp',
  },
  {
    slug: 'vetements-homme',
    title: 'Vêtements Homme',
    description:
      'Polos, chemises légères et bermudas confortables pour affronter la saison avec style.',
    priceRange: '12 € – 30 €',
    alt: 'Vêtements homme marché Hyères',
    image: '/images/vetements-homme.webp',
  },
  {
    slug: 'accessoires',
    title: 'Accessoires',
    description:
      'Paniers tressés, sacs en paille bohème-chic, chapeaux et foulards à emporter du marché à la plage.',
    priceRange: '5 € – 25 €',
    alt: 'Accessoires et paniers marché Hyères',
    image: '/images/Accessoires.webp',
  },
  {
    slug: 'bijoux-fantaisie',
    title: 'Bijoux fantaisie',
    description:
      "Boucles d'oreilles, bracelets et colliers colorés qui illuminent chaque tenue, sans se ruiner.",
    priceRange: '3 € – 15 €',
    alt: 'Bijoux fantaisie marché Hyères',
    image: '/images/bijoux-fantaisie.webp',
  },
]

export const products = {
  'vetements-femme': [
    {
      nom: 'Robe d’autonne en lin',
      description: 'Coupe fluide et tissu respirant, idéale dès les premiers soleils.',
      prix: '29 € – 35 €',
      image: '/images/robe-automne.webp',
    },
    {
      nom: 'Echarpe Chale Automne',
      description: 'Foulard Encharge Automne et hiver Femmes Grand Tatiche.',
      prix: '22 € – 28 €',
      image: '/images/châle-automne-femme.webp',
    },
    {
      nom: 'Tunique brodée',
      description: 'Broderies délicates et finitions soignées, esprit méditerranée.',
      prix: '25 € – 30 €',
      image: '/images/Tunique-brodée.webp',
    },
    {
      nom: 'Pantalon fluide taille haute',
      description: 'Un tombé parfait et une taille tout confort.',
      prix: '20 € – 25 €',
      image: '/images/Pantalon-autonne-femme.wrbp',
    },
  ],
  'vetements-homme': [
    {
      nom: 'Polo piqué coton',
      description: 'Le classique qui ne se démode pas, coupe nette.',
      prix: '18 € – 22 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Chemise lin & coton',
      description: 'Légère et fraîche pour les journées de mistral.',
      prix: '24 € – 30 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Bermuda en toile',
      description: 'Solide et confortable, taille semi-élastiquée.',
      prix: '15 € – 20 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Chino léger',
      description: 'Polyvalent : marché en matinée, terrasse l’après-midi.',
      prix: '22 € – 28 €',
      image: '/images/placeholder.webp',
    },
  ],
  accessoires: [
    {
      nom: 'Panier tressé main',
      description: 'Le compagnon du marché, anses renforcées.',
      prix: '12 € – 18 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Sac en paille bohème',
      description: 'Pompons colorés et bandoulière ajustable.',
      prix: '15 € – 20 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Chapeau de paille large bord',
      description: 'Une ombre élégante pour les longues journées.',
      prix: '12 € – 16 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Foulard imprimé provençal',
      description: 'Motifs ensoleillés et toucher soyeux.',
      prix: '8 € – 12 €',
      image: '/images/placeholder.webp',
    },
  ],
  'bijoux-fantaisie': [
    {
      nom: 'Boucles d’oreilles pendantes',
      description: 'Perles délicates sur monture dorée.',
      prix: '6 € – 9 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Bracelet multi-rangs',
      description: 'À empiler sans modération, fermoir ajustable.',
      prix: '5 € – 8 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Collier ras-de-cou doré',
      description: 'Se porte seul ou en accumulation.',
      prix: '8 € – 12 €',
      image: '/images/placeholder.webp',
    },
    {
      nom: 'Bague ajustable pierre naturelle',
      description: 'Chaque pierre est unique, comme vous.',
      prix: '6 € – 10 €',
      image: '/images/placeholder.webp',
    },
  ],
}

export const guestBrands = [
  {
    nom: 'Les Ateliers du Sud',
    image: '/images/Les-Ateliers-du-Sud.webp',
    texte: 'Créations locales & esprit méditerranéen',
  },
  {
    nom: 'Maison-Véran',
    image: '/images/maison-veran.webp',
    texte: 'Savon de Marseille Lavande de Provence 100g',
  },
  {
    nom: 'Paille-Lin',
    image: '/images/Paille-Lin.webp',
    texte: 'Accessoires & cabas en matières naturelles',
  },
  {
    nom: 'L’Atelier-Doré',
    image: '/images/latelier-dore.webp',
    texte: 'Bijoux créateurs & finitions dorées',
  },
]

export const clickCollectSteps = [
  { label: 'Réservez sur WhatsApp' },
  { label: 'Choisissez votre jour de marché' },
  { label: 'Récupérez au stand' },
]

export const homePageContent = {
  hero: {
    badge: 'Commerçant ambulant à Hyères – Var (83)',
    titleStart: 'Votre boutique mode en plein air, au cœur des',
    titleAccent: 'marchés de Hyères',
    subtitle:
      'Robes légères, prêt-à-porter femme & homme, paniers tressés et bijoux fantaisie : retrouvez notre étal sous les parasols, quatre fois par semaine, aux couleurs de la Provence.',
    ctaPrimary: 'Voir les horaires des marchés',
    ctaSecondary: 'Découvrir nos collections',
  },
  sections: {
    collections: {
      eyebrow: 'Nouveautés de saison',
      title: 'Nos collections',
      subtitle:
        'Des vêtements tendance à petits prix, sélectionnés avec soin pour la douceur provençale.',
      cardCta: 'Voir la collection',
    },
    brands: {
      eyebrow: 'Coups de cœur',
      title: 'Ils nous rendent visite',
      subtitle: 'Découvrez nos marques invitées et pièces coups de cœur',
    },
    clickCollect: {
      title: 'Click & Collect au marché',
      text: 'Une pièce vous plaît ? Réservez-la par WhatsApp et retirez-la à notre stand le jour du marché : elle vous attendra, mise de côté avec soin.',
      cta: 'Réserver un article',
    },
    reviews: {
      eyebrow: 'Avis clients',
      title: 'Ce que disent nos clients',
      subtitle: 'La parole à nos clientes et clients du marché…',
    },
    finalCta: {
      title: 'Retrouvez-nous ce samedi, avenue Gambetta !',
      text: 'Et mardi, jeudi et dimanche sur les autres marchés de Hyères, de 8h à 13h. On sort les belles pièces pour vous !',
      ctaPrimary: 'Voir les horaires & plans',
    },
    marketsTeaser: {
      eyebrow: 'Cette semaine',
      title: 'Où nous trouver ?',
      subtitle:
        'Quatre rendez-vous chaque semaine dans Hyères. Le samedi, c’est le grand marché de l’avenue Gambetta !',
      linkLabel: 'Calendrier complet',
      mobileLink: 'Voir le calendrier complet',
      itinerary: 'Itinéraire',
      starBadge: 'Le grand marché',
    },
  },
  reviews: [
    {
      name: 'Catherine B.',
      place: 'Hyères',
      quote:
        'Des robes magnifiques et un accueil toujours souriant. Je ne repars jamais de leur stand les mains vides !',
    },
    {
      name: 'Nathalie R.',
      place: 'La Crau',
      quote:
        'J’ai déniché un panier en paille superbe à prix tout doux. La qualité est vraiment au rendez-vous.',
    },
    {
      name: 'Karim M.',
      place: 'Toulon',
      quote:
        'Conseils chaleureux et pièces pleines de caractère. On sent l’amour du métier et des belles choses.',
    },
  ],
}

export const collectionsPageContent = {
  meta: {
    title: 'Nos Collections',
    description:
      'Découvrez nos collections sur les marchés de Hyères : vêtements femme & homme, paniers en paille, accessoires et bijoux fantaisie à petits prix. Fourchettes de prix claires et réservation WhatsApp.',
  },
  hero: {
    eyebrow: 'Sélection du marché',
    title: 'Nos collections',
    subtitle:
      'Du prêt-à-porter aux bijoux fantaisie, chaque pièce est choisie avec soin… et à prix tout doux. Choisissez une catégorie pour découvrir ce qui vous attend sous les parasols.',
  },
  navAriaLabel: 'Catégories',
  details: {
    'vetements-femme': [
      'Robes légères unies, vichys colorées et imprimés fleuris',
      'Tuniques, blouses et pantalons fluides',
      'Tailles du S au XXL',
      'De nouvelles pièces chaque semaine, selon les arrivages',
    ],
    'vetements-homme': [
      'Polos et chemises légères pour la belle saison',
      'Bermudas et pantalons en toile confortable',
      'Coupes simples et tailles du M au XXL',
      'L’essentiel de l’été, à prix tout doux',
    ],
    accessoires: [
      'Paniers tressés et cabas de marché',
      'Sacs en paille bohème-chic pour la plage',
      'Chapeaux, foulards et casquettes',
      'Le détail qui change une tenue, sans se ruiner',
    ],
    'bijoux-fantaisie': [
      'Boucles d’oreilles pendantes ou puces',
      'Bracelets, colliers et bagues colorés',
      'Finitions dorées et montures tendance',
      'De quoi multiplier les tenues à petit prix',
    ],
  },
  fourchetteLabel: 'Fourchette de prix :',
  whatsappCta: 'Réserver sur WhatsApp',
  marchesCta: 'Où nous trouver',
  products: {
    heading: 'Quelques pièces du stand',
    note: 'Aperçu indicatif – l’article exact attend votre visite !',
  },
  clickCollect: {
    eyebrow: 'Réservation gratuite',
    title: 'Click & Collect au marché',
    text: 'Une pièce vous plaît ? Pas besoin de payer en ligne : écrivez-nous et elle vous attendra au stand, mise de côté avec soin.',
    steps: [
      {
        number: '01',
        title: 'Repérez votre coup de cœur',
        text: 'Faites un tour sur le site et notez les pièces qui vous plaisent.',
      },
      {
        number: '02',
        title: 'Réservez par WhatsApp',
        text: 'Envoyez-nous un message : nous confirmons la disponibilité et le jour de retrait.',
      },
      {
        number: '03',
        title: 'Récupérez au stand',
        text: 'Passez au marché choisi : votre article vous attend, mis de côté avec soin. Vous payez sur place.',
      },
    ],
    reassurance:
      'Réservation gratuite et sans paiement en ligne : vous réglez au stand, en toute simplicité.',
    cta: 'Réserver un article maintenant',
  },
  arrivages: {
    title: 'Les arrivages changent chaque semaine !',
    text: 'Ces aperçus donnent l’esprit de nos collections ; au stand, vous découvrirez bien davantage. Passez nous voir !',
    cta: 'Voir les horaires des marchés',
  },
}
