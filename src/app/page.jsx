import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBasket,
  Star,
  Sun,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GuestBrands from '@/components/GuestBrands'
import HeroVisual from '@/components/HeroVisual'
import {
  clickCollectSteps,
  collections,
  contact,
  homePageContent,
  markets,
} from '@/lib/site'

const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`

const stepIcons = [MessageCircle, CalendarCheck, ShoppingBasket]

function StarsRow() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="Note de 5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function HomePage() {
  const hc = homePageContent

  return (
    <main id="contenu-principal">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-azur/10 blur-3xl"
        />

        <div className="container-marche relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-terracotta-dark dark:bg-encre-soft/70 dark:text-terracotta-light">
              <Sun className="h-4 w-4" aria-hidden="true" />
              {hc.hero.badge}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl xl:text-6xl">
              {hc.hero.titleStart}{' '}
              <span className="text-terracotta">{hc.hero.titleAccent}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
              {hc.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
              <Link href="/marches" className="btn-primary w-full sm:w-auto">
                {hc.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/collections" className="btn-secondary w-full sm:w-auto">
                {hc.hero.ctaSecondary}
              </Link>
            </div>
          </FadeIn>

          </div>

          <HeroVisual />
        </div>
      </section>

      <section
        aria-labelledby="titre-collections"
        className="bg-sable/50 py-14 sm:py-20 dark:bg-encre-soft/40"
      >
        <div className="container-marche">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
                {hc.sections.collections.eyebrow}
              </p>
              <h2 id="titre-collections" className="mt-2 text-3xl sm:text-4xl">
                {hc.sections.collections.title}
              </h2>
              <p className="mt-3 opacity-75">
                {hc.sections.collections.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection, index) => (
              <FadeIn key={collection.slug} delay={index * 0.08} className="h-full">
                <Link href={`/collections#${collection.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-et border border-lin-dark bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-parasol dark:border-encre-soft dark:bg-encre-soft/70">
                    <div className="relative aspect-[4/3] overflow-hidden bg-sable">
                      <Image
                        src={collection.image}
                        alt={collection.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-encre">
                        {collection.priceRange}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-semibold">{collection.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed opacity-75">
                        {collection.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta">
                        {hc.sections.collections.cardCta}
                        <ArrowRight
                          className="h-4 w-4 transition group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GuestBrands />

      <section aria-labelledby="titre-click-collect" className="container-marche py-14 sm:py-20">
        <FadeIn>
          <div className="rounded-et bg-gradient-to-r from-olive to-olive-dark px-6 py-10 text-white shadow-parasol sm:px-10 lg:px-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
              <div>
                <h2 id="titre-click-collect" className="text-2xl sm:text-3xl">
                  {hc.sections.clickCollect.title}
                </h2>
                <p className="mt-3 max-w-xl text-white/85">
                  {hc.sections.clickCollect.text}
                </p>
                <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  {clickCollectSteps.map((step, index) => {
                    const StepIcon = stepIcons[index]
                    return (
                      <li
                        key={step.label}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"
                      >
                        <StepIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {step.label}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-olive-dark shadow-parasol transition hover:bg-lin-light active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {hc.sections.clickCollect.cta}
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <section
        aria-labelledby="titre-avis"
        className="bg-sable/50 py-14 sm:py-20 dark:bg-encre-soft/40"
      >
        <div className="container-marche">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
                {hc.sections.reviews.eyebrow}
              </p>
              <h2 id="titre-avis" className="mt-2 text-3xl sm:text-4xl">
                {hc.sections.reviews.title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl opacity-75">
                {hc.sections.reviews.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {hc.reviews.map((review, index) => (
              <FadeIn key={review.name} delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-et border border-lin-dark bg-white/70 p-6 dark:border-encre-soft dark:bg-encre-soft/70">
                  <StarsRow />
                  <blockquote className="mt-4 flex-1 font-display text-base italic leading-relaxed">
                    «&nbsp;{review.quote}&nbsp;»
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-azur font-semibold text-white"
                    >
                      {review.name.charAt(0)}
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold">{review.name}</span>
                      <span className="opacity-70">{review.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-marche pb-16 pt-14 sm:pb-20 sm:pt-20">
        <FadeIn>
          <div className="rounded-et bg-terracotta px-6 py-12 text-center text-white shadow-parasol sm:px-10">
            <h2 className="mx-auto max-w-2xl text-3xl leading-snug sm:text-4xl">
              {hc.sections.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              {hc.sections.finalCta.text}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/marches"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-terracotta shadow-parasol transition hover:bg-lin-light active:scale-[0.98]"
              >
                {hc.sections.finalCta.ctaPrimary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <section aria-labelledby="titre-prochains-marches" className="container-marche py-14 sm:py-20">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
                {hc.sections.marketsTeaser.eyebrow}
              </p>
              <h2 id="titre-prochains-marches" className="mt-2 text-3xl sm:text-4xl">
                {hc.sections.marketsTeaser.title}
              </h2>
              <p className="mt-3 max-w-xl opacity-75">
                {hc.sections.marketsTeaser.subtitle}
              </p>
            </div>
            <Link
              href="/marches"
              className="hidden items-center gap-1 font-semibold text-terracotta underline-offset-4 transition hover:underline sm:inline-flex"
            >
              {hc.sections.marketsTeaser.linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <FadeIn key={market.day} delay={index * 0.08} className="h-full">
              <article
                className={`flex h-full flex-col rounded-et border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-parasol ${
                  market.star
                    ? 'border-terracotta/60 bg-gradient-to-b from-terracotta/10 to-transparent dark:from-terracotta/20 dark:to-transparent'
                    : 'border-lin-dark bg-white/70 dark:border-encre-soft dark:bg-encre-soft/70'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      market.star ? 'bg-terracotta text-white' : 'bg-lin-dark dark:bg-encre'
                    }`}
                  >
                    {market.day}
                  </span>
                  {market.star ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta">
                      <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      {hc.sections.marketsTeaser.starBadge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{market.name}</h3>
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
                  className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-azur underline-offset-4 transition hover:underline dark:text-azur-light"
                >
                  {hc.sections.marketsTeaser.itinerary}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <Link
            href="/marches"
            className="btn-secondary mt-8 w-full sm:hidden"
          >
            {hc.sections.marketsTeaser.mobileLink}
          </Link>
        </FadeIn>
      </section>
    </main>
  )
}
