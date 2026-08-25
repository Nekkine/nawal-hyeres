import Link from 'next/link'
import LegalSection from '@/components/LegalSection'
import FadeIn from '@/components/FadeIn'
import { contact } from '@/lib/site'

export const metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site : éditeur, directeur de la publication, hébergeur et informations juridiques relatives au stand de vêtements des marchés de Hyères.',
  alternates: {
    canonical: '/mentions-legales',
  },
}

const rows = [
  { label: 'Éditeur du site', value: contact.merchantName },
  {
    label: 'Forme juridique',
    value: 'Entrepreneur individuel – Micro-entreprise',
  },
  { label: 'SIRET', value: '123 456 789 00012' },
  {
    label: 'Adresse du siège',
    value: `${contact.address.street}, ${contact.address.postalCode} ${contact.address.city}`,
  },
  {
    label: 'TVA',
    value: 'TVA non applicable, article 293 B du Code général des impôts',
  },
  { label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` },
  {
    label: 'Téléphone',
    value: contact.phoneDisplay,
    href: contact.phoneHref,
  },
]

export default function MentionsLegalesPage() {
  const updatedAt = new Date().toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <main id="contenu-principal">
      <section className="container-marche max-w-3xl pt-14 sm:pt-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            Informations juridiques
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Mentions légales</h1>
          <p className="mt-4 text-sm opacity-65">
            Dernière mise à jour&nbsp;: {updatedAt}
          </p>
        </FadeIn>

        <div className="space-y-8 py-10 sm:py-12 [&>section:first-child]:border-t-0 [&>section:first-child]:pt-0">
          <LegalSection title="Éditeur du site">
            <dl className="divide-y divide-lin-dark/60 overflow-hidden rounded-et border border-lin-dark bg-white/70 dark:divide-encre-soft dark:border-encre-soft dark:bg-encre-soft/70">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr]"
                >
                  <dt className="font-semibold">{row.label}</dt>
                  <dd className="opacity-85">
                    {row.href ? (
                      <a href={row.href}>{row.value}</a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </LegalSection>

          <LegalSection title="Directeur de la publication">
            <p>{contact.merchantName}</p>
          </LegalSection>

          <LegalSection title="Hébergeur du site">
            <p>
              OVH SAS — 2 rue Kellermann, 59100 Roubaix, France.
              Téléphone&nbsp;: <a href="tel:+33972101007">09 72 10 10 07</a>.{' '}
              <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer">
                www.ovh.com
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L’ensemble des contenus présents sur ce site (textes, visuels,
              logo, structure) est la propriété exclusive de{' '}
              {contact.merchantName}. Toute reproduction, représentation ou
              exploitation, totale ou partielle, sans autorisation écrite
              préalable est interdite et constituerait une contrefaçon au sens
              des articles L.335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
          </LegalSection>

          <LegalSection title="Données personnelles">
            <p>
              Les données transmises via le formulaire de contact ou par
              WhatsApp sont utilisées uniquement pour répondre à vos demandes.
              Le détail de leur traitement, de leur conservation et de vos
              droits figure dans notre{' '}
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="Documents justificatifs">
            <p>
              Conformément à la réglementation applicable aux commerçants non
              sédentaires, les documents suivants sont tenus à disposition et
              affichés au stand&nbsp;: carte de commerçant ambulant,
              attestation d’assurance responsabilité civile professionnelle et
              autorisation d’occupation temporaire du domaine public délivrée
              par la Mairie de Hyères.
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  )
}
