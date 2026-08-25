import Link from 'next/link'
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import FadeIn from '@/components/FadeIn'
import { contact } from '@/lib/site'

export const metadata = {
  title: 'Contact',
  description:
    'Une question, une réservation ? Contactez notre stand de vêtements et accessoires des marchés de Hyères par téléphone, WhatsApp, e-mail ou via le formulaire.',
  alternates: {
    canonical: '/contact',
  },
}

const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`

export default function ContactPage() {
  return (
    <main id="contenu-principal">
      <section className="container-marche pt-14 text-center sm:pt-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            Parlons-en
          </p>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mx-auto mt-5 max-w-2xl opacity-75">
            Une question sur une pièce, une envie de réserver, un simple bonjour&nbsp;?
            Nous sommes joignables tous les jours de marché — et presque aussi
            vite le reste de la semaine.
          </p>
        </FadeIn>
      </section>

      <section aria-label="Moyens de contact" className="container-marche py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <div className="flex flex-col gap-5">
            <FadeIn>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-et bg-gradient-to-br from-[#25D366] to-[#128C7E] p-6 text-white shadow-parasol transition hover:-translate-y-0.5 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-xl sm:text-2xl">
                  Le plus simple&nbsp;: WhatsApp
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Réservez un article, posez votre question ou vérifiez notre
                  présence au marché du jour. Réponse rapide pendant les jours
                  de marché.
                </p>
                <span className="mt-5 inline-flex min-h-[44px] items-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#128C7E] shadow transition group-hover:bg-lin-light">
                  Ouvrir WhatsApp
                </span>
              </a>
            </FadeIn>

            <FadeIn delay={0.08}>
              <a
                href={contact.phoneHref}
                className="block rounded-et border border-lin-dark bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow-parasol dark:border-encre-soft dark:bg-encre-soft/70 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta dark:bg-terracotta/20 dark:text-terracotta-light">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-xl">Par téléphone</h2>
                <p className="mt-2 text-sm opacity-75">
                  Du mardi au dimanche, aux heures du marché (8h – 13h).
                </p>
                <p className="mt-3 inline-flex min-h-[44px] items-center rounded-full bg-terracotta px-6 text-base font-bold tracking-wide text-white">
                  {contact.phoneDisplay}
                </p>
              </a>
            </FadeIn>

            <FadeIn delay={0.16}>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-et border border-lin-dark bg-white/70 p-5 transition hover:-translate-y-0.5 hover:shadow-parasol dark:border-encre-soft dark:bg-encre-soft/70"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-azur/10 text-azur dark:bg-azur-light/15 dark:text-azur-light">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">Par e-mail</span>
                  <span className="block truncate text-sm opacity-75">
                    {contact.email}
                  </span>
                </span>
              </a>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="rounded-et border border-lin-dark bg-white/70 p-5 dark:border-encre-soft dark:bg-encre-soft/70">
                <p className="flex items-center gap-3 text-sm font-semibold">
                  <MapPin className="h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
                  En personne, au marché
                </p>
                <p className="mt-2 pl-8 text-sm leading-relaxed opacity-75">
                  Retrouvez les jours et emplacements sur la page{' '}
                  <Link
                    href="/marches"
                    className="font-semibold text-azur underline-offset-4 hover:underline dark:text-azur-light"
                  >
                    Nos Marchés &amp; Horaires
                  </Link>{' '}
                  — à très vite sous les parasols&nbsp;!
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="flex items-center gap-3">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-lin-dark bg-white/70 transition hover:border-terracotta hover:bg-terracotta hover:text-white dark:border-encre-soft dark:bg-encre-soft/70"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Retrouvez-nous sur Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-lin-dark bg-white/70 transition hover:border-terracotta hover:bg-terracotta hover:text-white dark:border-encre-soft dark:bg-encre-soft/70"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <p className="text-xs leading-snug opacity-65">
                  Nouveautés et stories «&nbsp;On est là&nbsp;!&nbsp;» chaque
                  matin de marché.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="rounded-et border border-lin-dark bg-white/80 p-6 shadow-parasol dark:border-encre-soft dark:bg-encre-soft/80 sm:p-8">
              <h2 className="font-display text-2xl">Écrivez-nous</h2>
              <p className="mt-2 text-sm opacity-75">
                Nous répondons généralement sous 24&nbsp;h (hors jours de marché).
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
              <p className="mt-7 flex items-start gap-2.5 border-t border-lin-dark/60 pt-5 text-xs leading-relaxed opacity-70 dark:border-encre-soft">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-olive dark:text-olive-light"
                  aria-hidden="true"
                />
                <span>
                  Les informations recueillies sont enregistrées dans un fichier
                  informatisé par {contact.merchantName} pour répondre à votre
                  demande. Conformément au RGPD, vous disposez d’un droit
                  d’accès, de rectification et de suppression de vos données.{' '}
                  <Link
                    href="/politique-de-confidentialite"
                    className="font-semibold underline underline-offset-2"
                  >
                    Politique de confidentialité
                  </Link>
                  .
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
