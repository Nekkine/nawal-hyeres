import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
  MessageCircle,
  Search,
  ShoppingBasket,
  Tag,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { collections, collectionsPageContent, contact, products } from '@/lib/site'

const stepIcons = [Search, MessageCircle, ShoppingBasket]

function whatsappUrlFor(title) {
  const message = `Bonjour ! Je souhaite réserver un article de la catégorie « ${title} », à retirer au stand le jour du marché.`
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

function ProductCard({ product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-et border border-lin-dark bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-parasol dark:border-encre-soft dark:bg-encre-soft/70">
      <div className="relative aspect-square overflow-hidden bg-sable">
        <Image
          src={product.image}
          alt={`${product.nom} – marché de Hyères`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-encre">
          {product.prix}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h4 className="font-semibold leading-snug">{product.nom}</h4>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed opacity-70">
          {product.description}
        </p>
      </div>
    </article>
  )
}

export function generateMetadata() {
  return {
    title: collectionsPageContent.meta.title,
    description: collectionsPageContent.meta.description,
    alternates: {
      canonical: '/collections',
    },
  }
}

export default function CollectionsPage() {
  const cpc = collectionsPageContent

  return (
    <main id="contenu-principal">
      <section className="container-marche pt-14 text-center sm:pt-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            {cpc.hero.eyebrow}
          </p>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl leading-tight sm:text-5xl">
            {cpc.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl opacity-75">{cpc.hero.subtitle}</p>
        </FadeIn>
      </section>

      <div className="sticky top-16 z-30 mt-8 border-y border-lin-dark/60 bg-lin-light/90 backdrop-blur dark:border-encre-soft dark:bg-encre/90">
        <nav
          aria-label={cpc.navAriaLabel}
          className="container-marche flex gap-2 overflow-x-auto py-3"
        >
          {[...collections.map((collection) => ({
            href: `#${collection.slug}`,
            label: collection.title,
          })), { href: '#click-and-collect', label: 'Click & Collect' }].map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-full border border-lin-dark bg-white/70 px-4 py-2 text-sm font-semibold transition hover:border-terracotta hover:text-terracotta dark:border-encre-soft dark:bg-encre-soft/70"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      {collections.map((collection, index) => (
        <section
          key={collection.slug}
          id={collection.slug}
          aria-labelledby={`titre-${collection.slug}`}
          className="container-marche scroll-mt-32 py-12 sm:py-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <FadeIn className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-et bg-sable shadow-parasol">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-encre">
                  {collection.priceRange}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div>
                <h2
                  id={`titre-${collection.slug}`}
                  className="text-3xl sm:text-4xl"
                >
                  {collection.title}
                </h2>
                <p className="mt-4 leading-relaxed opacity-75">
                  {collection.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {cpc.details[collection.slug].map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-sm opacity-85"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-olive dark:text-olive-light"
                        aria-hidden="true"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex items-center gap-2 rounded-et border border-lin-dark bg-sable/60 px-4 py-2.5 text-sm dark:border-encre-soft dark:bg-encre/60">
                  <Tag
                    className="h-4 w-4 shrink-0 text-terracotta"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>{cpc.fourchetteLabel}</strong> {collection.priceRange}
                  </span>
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrlFor(collection.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {cpc.whatsappCta}
                  </a>
                  <Link
                    href="/marches"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    {cpc.marchesCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-12">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{cpc.products.heading}</h3>
                <p className="text-sm opacity-60">{cpc.products.note}</p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {products[collection.slug].map((product) => (
                  <ProductCard key={product.nom} product={product} />
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      ))}

      <section
        id="click-and-collect"
        aria-labelledby="titre-click-collect"
        className="scroll-mt-32 bg-sable/50 py-14 sm:py-16 dark:bg-encre-soft/40"
      >
        <div className="container-marche">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
                {cpc.clickCollect.eyebrow}
              </p>
              <h2
                id="titre-click-collect"
                className="mt-2 text-3xl sm:text-4xl"
              >
                {cpc.clickCollect.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl opacity-75">
                {cpc.clickCollect.text}
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cpc.clickCollect.steps.map((step, index) => {
              const StepIcon = stepIcons[index]
              return (
                <FadeIn
                  key={step.number}
                  delay={index * 0.08}
                  className="h-full"
                >
                  <article className="flex h-full flex-col rounded-et border border-lin-dark bg-white/70 p-6 dark:border-encre-soft dark:bg-encre-soft/70">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl text-terracotta">
                        {step.number}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive/10 text-olive-dark dark:bg-olive-light/15 dark:text-olive-light">
                        <StepIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed opacity-75">
                      {step.text}
                    </p>
                  </article>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn>
            <p className="mx-auto mt-8 max-w-xl text-center text-sm opacity-70">
              {cpc.clickCollect.reassurance}
            </p>
            <div className="mt-6 text-center">
              <a
                href={whatsappUrlFor('nos collections')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mx-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {cpc.clickCollect.cta}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-marche pb-16 pt-14 sm:pb-20">
        <FadeIn>
          <div className="rounded-et bg-gradient-to-r from-terracotta to-terracotta-dark px-6 py-10 text-center text-white shadow-parasol sm:px-10">
            <h2 className="text-2xl sm:text-3xl">{cpc.arrivages.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              {cpc.arrivages.text}
            </p>
            <Link
              href="/marches"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-terracotta shadow-parasol transition hover:bg-lin-light active:scale-[0.98]"
            >
              {cpc.arrivages.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
