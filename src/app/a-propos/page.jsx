import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Gem,
  Heart,
  MessageCircle,
  Shirt,
  ShoppingBag,
  Sun,
  Tag,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { contact } from '@/lib/site'

export const metadata = {
  title: 'À Propos',
  description:
    'Derrière notre étal, un commerçant ambulant passionné qui parcourt les marchés du Var. Découvrez notre histoire et nos valeurs : proximité, qualité et petits prix.',
  alternates: {
    canonical: '/a-propos',
  },
}

const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`

const values = [
  {
    icon: Heart,
    title: 'La proximité',
    text: 'Un conseil honnête, un sourire, une discussion sur le temps qu’il fait : au stand, vous n’êtes jamais un numéro de commande. On retient vos prénoms, vos tailles et vos goûts.',
    accent: 'bg-terracotta/10 text-terracotta dark:bg-terracotta/20 dark:text-terracotta-light',
  },
  {
    icon: BadgeCheck,
    title: 'La qualité',
    text: 'Chaque pièce est choisie à la main : tissus agréables, coupes qui tombent bien, finitions soignées. Si nous ne la porterions pas nous-mêmes, elle ne monte pas sur l’étal.',
    accent: 'bg-olive/10 text-olive-dark dark:bg-olive-light/15 dark:text-olive-light',
  },
  {
    icon: Tag,
    title: 'Les petits prix',
    text: 'Pas de loyer de boutique, pas d’intermédiaires : nos prix restent ceux du marché, tout simplement. Une fourchette affichée clairement, sans mauvaise surprise.',
    accent: 'bg-azur/10 text-azur-dark dark:bg-azur-light/15 dark:text-azur-light',
  },
]

const stallPhotos = [
  { icon: Sun, label: 'Le stand sous les parasols', gradient: 'from-azur to-azur-dark' },
  { icon: Shirt, label: 'Robes d’été fleuries', gradient: 'from-terracotta to-terracotta-dark' },
  { icon: ShoppingBag, label: 'Paniers & sacs en paille', gradient: 'from-olive to-olive-dark' },
  { icon: Gem, label: 'Bijoux fantaisie', gradient: 'from-encre to-encre-soft' },
]

export default function AProposPage() {
  const firstName = contact.merchantName.split(' ')[0]

  return (
    <main id="contenu-principal">
      <section className="container-marche pt-14 text-center sm:pt-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            Notre histoire
          </p>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Une mode de marché, au cœur de{' '}
            <span className="text-terracotta">Hyères</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl opacity-75">
            Derrière chaque pièce de notre étal, il y a un savoir-faire de
            commerçant forain… et beaucoup de bonheur à vous le présenter.
          </p>
        </FadeIn>
      </section>

      <section aria-label="Notre histoire" className="container-marche py-14 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="space-y-5 leading-relaxed opacity-85">
              <p>
                Tout est parti d’une conviction simple : la belle mode n’a pas
                besoin d’une vitrine coûteuse pour séduire. Depuis plusieurs
                années, nous parcourons les marchés de Hyères et du Var pour
                vous proposer une mode accessible, colorée et pleine de
                caractère.
              </p>
              <p>
                Le mardi, le jeudi, le samedi et le dimanche, l’étal s’installe
                sous les grands parasols blancs : robes d’été sur cintres, sacs
                en paille suspendus à la structure et grande corbeille tressée
                posée sur le banc en bois. Chaque installation est pensée comme
                une invitation à flâner.
              </p>
              <p>
                Ici, personne ne vous presse. On prend le temps de discuter, de
                conseiller, de sortir la pièce qui vous ira à merveille.
                C’est ça, l’esprit du marché — et c’est celui que nous avons
                envie de partager avec vous à chaque visite.
              </p>
              <p className="font-display text-xl italic">
                À très vite sous les parasols,
                <span className="mt-1 block text-base not-italic opacity-75">
                  {firstName}, commerçant ambulant
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative mx-auto flex aspect-square w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-et bg-gradient-to-br from-azur to-azur-dark p-10 text-center text-white shadow-parasol">
              <Sun className="h-10 w-10 text-white/80" aria-hidden="true" />
              <p className="mt-6 font-display text-2xl italic leading-snug sm:text-3xl">
                «&nbsp;La belle mode n’a pas besoin de vitrine.&nbsp;»
              </p>
              <p className="mt-4 text-sm text-white/75">
                Prêt-à-porter, accessoires &amp; bijoux fantaisie – marchés de
                Hyères
              </p>
              <div
                aria-hidden="true"
                className="absolute -bottom-14 -right-14 h-48 w-48 rounded-full bg-white/10"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        aria-labelledby="titre-valeurs"
        className="bg-sable/50 py-14 sm:py-16 dark:bg-encre-soft/40"
      >
        <div className="container-marche">
          <FadeIn>
            <div className="text-center">
              <h2 id="titre-valeurs" className="text-3xl sm:text-4xl">
                Ce qui compte pour nous
              </h2>
              <p className="mx-auto mt-3 max-w-xl opacity-75">
                Trois convictions guident chaque choix de pièce, chaque
                installation de stand et chaque discussion avec vous.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-et border border-lin-dark bg-white/70 p-7 dark:border-encre-soft dark:bg-encre-soft/70">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${value.accent}`}
                  >
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed opacity-75">
                    {value.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="titre-photos"
        className="container-marche py-14 sm:py-16"
      >
        <FadeIn>
          <div className="text-center">
            <h2 id="titre-photos" className="text-3xl sm:text-4xl">
              Notre stand en images
            </h2>
            <p className="mx-auto mt-3 max-w-xl opacity-75">
              Un aperçu de ce qui vous attend, entre cintres colorés et
              paniers tressés.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {stallPhotos.map((photo, index) => (
            <FadeIn key={photo.label} delay={index * 0.06}>
              <figure
                className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-et bg-gradient-to-br shadow-parasol ${photo.gradient}`}
              >
                <photo.icon
                  className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-[60%] text-white/25"
                  aria-hidden="true"
                />
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-encre">
                  Photo à venir
                </span>
                <figcaption className="w-full bg-gradient-to-t from-black/45 to-transparent p-5 pt-10 text-sm font-medium text-white">
                  {photo.label}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-marche pb-16 sm:pb-20">
        <FadeIn>
          <div className="rounded-et bg-terracotta px-6 py-10 text-center text-white shadow-parasol sm:px-10">
            <h2 className="text-2xl sm:text-3xl">Envie de faire connaissance ?</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/85">
              Les plus belles pièces se vivent en vrai : passez au stand, touchez
              les matières, essayez… on s’occupe du reste !
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/marches"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-terracotta shadow-parasol transition hover:bg-lin-light active:scale-[0.98]"
              >
                Voir les horaires des marchés
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
