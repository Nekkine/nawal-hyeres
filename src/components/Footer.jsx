import Link from 'next/link'
import {
  BadgeCheck,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import SocialLinks from '@/components/SocialLinks'
import { contact, markets, siteConfig } from '@/lib/site'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/collections', label: 'Nos Collections' },
  { href: '/marches', label: 'Nos Marchés' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
]

const assurances = [
  'Carte de commerçant ambulant',
  'Attestation d’assurance RC Professionnelle',
  'Autorisation d’occupation du domaine public – Mairie de Hyères',
]

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}`

  return (
    <footer className="border-t border-lin-dark/60 bg-lin text-encre dark:border-encre-soft dark:bg-encre-soft dark:text-lin-light">
      <div className="container-marche grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed opacity-80">
            Prêt-à-porter femme &amp; homme, accessoires et bijoux fantaisie,
            sélectionnés avec soin sur les marchés de Hyères et du Var.
          </p>
          <div className="mt-5">
            <SocialLinks variant="circle" />
          </div>
        </div>

        <nav aria-label="Navigation de pied de page">
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-terracotta">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2.5 transition hover:text-terracotta"
              >
                <Phone className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition hover:text-terracotta"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" aria-hidden="true" />
                Réserver un article par WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 transition hover:text-terracotta"
              >
                <Mail className="h-4 w-4 shrink-0 text-azur" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
              Hyères-les-Palmiers – Var (83)
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            Nos marchés
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {markets.map((market) => (
              <li key={market.day} className="flex justify-between gap-3">
                <span className={market.star ? 'font-semibold text-terracotta' : ''}>
                  {market.day}
                  {market.star ? ' ★' : ''}
                </span>
                <span className="text-right opacity-80">{market.location}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/marches"
            className="mt-4 inline-block text-sm font-semibold text-terracotta underline-offset-4 transition hover:underline"
          >
            Voir les horaires complets →
          </Link>
        </div>
      </div>

      <div className="border-t border-lin-dark/60 dark:border-encre-soft">
        <ul className="container-marche flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-5 text-xs sm:text-sm">
          {assurances.map((assurance) => (
            <li key={assurance} className="inline-flex items-center gap-2 opacity-80">
              <BadgeCheck className="h-4 w-4 shrink-0 text-olive dark:text-olive-light" aria-hidden="true" />
              {assurance}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-lin-dark/60 dark:border-encre-soft">
        <div className="container-marche flex flex-col items-center justify-between gap-4 pb-28 pt-6 text-xs sm:flex-row sm:pb-6">
          <p className="text-center opacity-80 sm:text-left">
            © {year} {siteConfig.name} – {contact.merchantName}, commerçant ambulant à Hyères (Var).
          </p>
          <nav aria-label="Pages légales" className="flex items-center gap-6">
            <Link href="/mentions-legales" className="transition hover:text-terracotta">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="transition hover:text-terracotta">
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
