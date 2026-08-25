import Link from 'next/link'
import {
  ArrowRight,
  CalendarPlus,
  Clock,
  CloudRain,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from 'lucide-react'
import AlertBanner from '@/components/AlertBanner'
import FadeIn from '@/components/FadeIn'
import MarketMap from '@/components/MarketMap'
import TodayBadge from '@/components/TodayBadge'
import { contact, markets } from '@/lib/site'

export const metadata = {
  title: 'Nos Marchés & Horaires',
  description:
    'Horaires des marchés de Hyères : mardi place de la République, jeudi aux Salins d’Hyères, samedi avenue Gambetta et dimanche à l’Ayguade, de 8h à 13h. Plans d’accès et ajouts au calendrier.',
  alternates: {
    canonical: '/marches',
  },
}

const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`

const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

const bonASavoir = [
  {
    icon: Clock,
    text: 'Arrivez tôt : les belles pièces partent vite, surtout le samedi matin dès l’ouverture.',
  },
  {
    icon: CloudRain,
    text: 'En cas de gros temps, un report est possible : un coup de fil avant de venir vous évitera le détour.',
  },
  {
    icon: MessageCircle,
    text: 'Une pièce repérée sur le site ? Réservez-la par WhatsApp, on la met de côté pour le marché.',
  },
  {
    icon: MapPin,
    text: 'L’emplacement exact du stand est indiqué sur la carte, jour par jour. À très vite sous les parasols !',
  },
]

export default function MarchesPage() {
  return (
    <main id="contenu-principal">
      <section className="container-marche pt-14 text-center sm:pt-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            Le cœur de la maison
          </p>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Nos marchés &amp; horaires à Hyères
          </h1>
          <p className="mx-auto mt-5 max-w-2xl opacity-75">
            Quatre rendez-vous chaque semaine, tous à quelques minutes du centre
            de Hyères. Choisissez votre jour, notez-le dans votre calendrier et
            venez flâner entre les étals !
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/marches/calendrier.ics"
              download
              className="btn-primary w-full sm:w-auto"
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Ajouter à mon calendrier
            </a>
            <a href={contact.phoneHref} className="btn-secondary w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contact.phoneDisplay}
            </a>
          </div>
        </FadeIn>
      </section>

      <section aria-label="Annonce de la semaine" className="mt-10">
        <FadeIn>
          <AlertBanner />
        </FadeIn>
      </section>

      <section
        aria-labelledby="titre-calendrier"
        className="container-marche py-14 sm:py-16"
      >
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="titre-calendrier" className="text-3xl sm:text-4xl">
                Le calendrier de la semaine
              </h2>
              <p className="mt-3 max-w-xl opacity-75">
                Chaque marché a son ambiance : le samedi est notre grand rendez-
                vous, avec le plus grand choix de pièces.
              </p>
            </div>
            <a
              href="/marches/calendrier.ics"
              download
              className="hidden items-center gap-2 font-semibold text-terracotta underline-offset-4 transition hover:underline sm:inline-flex"
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Télécharger le fichier .ics
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 hidden overflow-hidden rounded-et border border-lin-dark bg-white/70 md:block dark:border-encre-soft dark:bg-encre-soft/70">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Horaires hebdomadaires des marchés de {`L’Étal d’Hyères`}
              </caption>
              <thead>
                <tr className="border-b border-lin-dark bg-lin/70 text-xs uppercase tracking-wider dark:border-encre-soft dark:bg-encre">
                  <th scope="col" className="px-5 py-4 font-semibold">Jour</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Marché</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Emplacement</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Horaires</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Itinéraire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lin-dark/70 dark:divide-encre-soft">
                {markets.map((market) => (
                  <tr key={market.day} className={market.star ? 'bg-terracotta/5' : ''}>
                    <td className="whitespace-nowrap px-5 py-4 font-semibold">
                      {market.day}
                      <TodayBadge dayIndex={market.dayIndex} />
                    </td>
                    <td className="px-5 py-4">
                      {market.name}
                      {market.star ? (
                        <span className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-terracotta">
                          <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                          Le grand marché
                        </span>
                      ) : null}
                    </td>
                    <td className="px-5 py-4 opacity-80">{market.location}</td>
                    <td className="whitespace-nowrap px-5 py-4 opacity-80">{market.hours}</td>
                    <td className="px-5 py-4">
                      <a
                        href={mapsUrl(market.mapsQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-azur underline-offset-4 transition hover:underline dark:text-azur-light"
                      >
                        Y aller
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 md:hidden">
          {markets.map((market, index) => (
            <FadeIn key={market.day} delay={index * 0.06}>
              <article
                className={`rounded-et border p-5 ${
                  market.star
                    ? 'border-terracotta/60 bg-gradient-to-b from-terracotta/10 to-transparent dark:from-terracotta/20 dark:to-transparent'
                    : 'border-lin-dark bg-white/70 dark:border-encre-soft dark:bg-encre-soft/70'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      market.star ? 'bg-terracotta text-white' : 'bg-lin-dark dark:bg-encre'
                    }`}
                  >
                    {market.day}
                  </span>
                  <TodayBadge dayIndex={market.dayIndex} />
                </div>
                <h3 className="mt-3 flex items-center gap-1.5 text-lg font-semibold">
                  {market.name}
                  {market.star ? (
                    <Star className="h-4 w-4 fill-current text-terracotta" aria-hidden="true" />
                  ) : null}
                </h3>
                <p className="mt-2 flex items-start gap-2 text-sm opacity-80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                  {market.location}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm opacity-80">
                  <Clock className="h-4 w-4 shrink-0 text-azur" aria-hidden="true" />
                  {market.hours}
                </p>
                <a
                  href={mapsUrl(market.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-4 w-full !py-2.5 text-sm"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Voir l’itinéraire
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="titre-carte"
        className="bg-sable/50 py-14 sm:py-16 dark:bg-encre-soft/40"
      >
        <div className="container-marche">
          <FadeIn>
            <h2 id="titre-carte" className="text-3xl sm:text-4xl">
              Repérez notre emplacement
            </h2>
            <p className="mt-3 max-w-xl opacity-75">
              Touchez au jour qui vous intéresse : la carte affiche le quartier
              exact où le stand s’installe.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <MarketMap />
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        aria-labelledby="titre-bon-a-savoir"
        className="container-marche py-14 sm:py-16"
      >
        <FadeIn>
          <h2 id="titre-bon-a-savoir" className="text-3xl sm:text-4xl">
            Bon à savoir avant de venir
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {bonASavoir.map((item, index) => (
            <FadeIn key={item.text} delay={index * 0.06} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-et border border-lin-dark bg-white/70 p-5 dark:border-encre-soft dark:bg-encre-soft/70">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta dark:bg-terracotta/20 dark:text-terracotta-light">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed opacity-85">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-marche pb-16 sm:pb-20">
        <FadeIn>
          <div className="rounded-et bg-azur px-6 py-10 text-center text-white shadow-parasol sm:px-10">
            <h2 className="text-2xl sm:text-3xl">Une question sur un article ?</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/85">
              Écrivez-nous par WhatsApp : nous vous répondons entre deux clients
              et mettons vos coups de cœur de côté.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-azur-dark shadow-parasol transition hover:bg-lin-light active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Réserver par WhatsApp
              </a>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                Voir les collections
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
