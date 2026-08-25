import Link from 'next/link'
import LegalSection from '@/components/LegalSection'
import FadeIn from '@/components/FadeIn'
import { contact } from '@/lib/site'

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité conforme au RGPD : données collectées, finalités, durée de conservation, cookies et exercice de vos droits (accès, rectification, suppression).',
  alternates: {
    canonical: '/politique-de-confidentialite',
  },
}

export default function PolitiqueConfidentialitePage() {
  const updatedAt = new Date().toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <main id="contenu-principal">
      <section className="container-marche max-w-3xl pt-14 sm:pt-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            RGPD – Règlement (UE) 2016/679
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm opacity-65">
            Dernière mise à jour&nbsp;: {updatedAt}
          </p>
        </FadeIn>

        <div className="space-y-8 py-10 sm:py-12 [&>section:first-child]:border-t-0 [&>section:first-child]:pt-0">
          <LegalSection title="1. Responsable du traitement">
            <p>
              Le responsable du traitement des données est {contact.merchantName},
              entrepreneur individuel, dont le siège est situé à{' '}
              {contact.address.postalCode} {contact.address.city}. Il peut être
              contacté à l’adresse{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> ou par
              téléphone au{' '}
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>.
            </p>
          </LegalSection>

          <LegalSection title="2. Données collectées">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong>Formulaire de contact&nbsp;:</strong> nom, adresse
                e-mail, numéro de téléphone, sujet et contenu du message.
              </li>
              <li>
                <strong>Messageries directes (WhatsApp, réseaux sociaux)&nbsp;:</strong>{' '}
                identifiant de conversation et contenu des échanges, traités
                sur ces plateformes selon leurs propres conditions.
              </li>
              <li>
                <strong>Stockage local du navigateur (localStorage)&nbsp;:</strong>{' '}
                préférence d’affichage clair/sombre, à des fin strictement
                fonctionnelle.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Finalités et bases légales">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Répondre à vos demandes d’information et de réservation — base
                légale&nbsp;: votre consentement lors de l’envoi du formulaire
                (art. 6.1.a du RGPD).
              </li>
              <li>
                Assurer la relation commerciale liée aux ventes réalisées au
                marché — base légale&nbsp;: exécution précontractuelle ou
                contractuelle (art. 6.1.b).
              </li>
              <li>
                Assurer le fonctionnement technique et la sécurité du site —
                base légale&nbsp;: intérêt légitime (art. 6.1.f).
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Durées de conservation">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Messages reçus via le formulaire&nbsp;: conservés au maximum{' '}
                <strong>3 ans</strong> après le dernier contact, puis supprimés.
              </li>
              <li>
                Préférence d’affichage (localStorage)&nbsp;: conservée jusqu’à
                effacement par vos soins depuis votre navigateur.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Destinataires des données">
            <p>
              Vos données sont destinées exclusivement au responsable du
              traitement. Elles ne sont ni vendues, ni louées, ni transmises à
              des tiers à des fins commerciales. Le site est hébergé en Europe
              par OVH SAS, garantissant un niveau de protection conforme au
              RGPD.
            </p>
          </LegalSection>

          <LegalSection title="6. Cookies et traceurs">
            <p>
              Ce site ne dépose aucun cookie publicitaire ni traceur de mesure
              d’audience. Seuls des éléments strictement nécessaires à son
              fonctionnement sont utilisés. La sauvegarde de votre préférence
              clair/sombre s’effectue via le stockage local de votre navigateur,
              exemptée de consentement au titre des traceurs strictement
              nécessaires (recommandations de la CNIL). Si des cookies
              d’audience venaient à être ajoutés, un bandeau de recueillement
              du consentement serait présenté avant tout dépôt.
            </p>
          </LegalSection>

          <LegalSection title="7. Vos droits">
            <p>
              Conformément au Règlement (UE) 2016/679 et à la loi Informatique
              et Libertés du 6 janvier 1978 modifiée, vous disposez des droits
              suivants&nbsp;:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>droit d’accès à vos données&nbsp;;</li>
              <li>droit de rectification&nbsp;;</li>
              <li>droit à l’effacement («&nbsp;droit à l’oubli&nbsp;»)&nbsp;;</li>
              <li>droit à la limitation du traitement&nbsp;;</li>
              <li>droit d’opposition&nbsp;;</li>
              <li>droit à la portabilité de vos données.</li>
            </ul>
            <p>
              Pour les exercer, adressez votre demande par e-mail à{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>. Une
              réponse vous sera apportée dans un délai maximal d’un mois.
              Conformément à la réglementation, une copie d’un justificatif
              d’identité peut être demandée en cas de doute raisonnable.
            </p>
          </LegalSection>

          <LegalSection title="8. Réclamation">
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de la Commission Nationale de
              l’Informatique et des Libertés (CNIL), 3 place de Fontenoy – TSA
              80715 – 75334 Paris Cedex 07,{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="9. Sécurité">
            <p>
              Le site est servi en HTTPS afin de chiffrer les échanges. Les
              accès administratifs sont protégés et limités au responsable du
              traitement.
            </p>
          </LegalSection>

          <LegalSection title="10. Modifications">
            <p>
              La présente politique peut être modifiée à tout moment pour
              rester conforme à la réglementation en vigueur. La version
              applicable est celle consultable en ligne à la date de votre
              visite. Pour toute question&nbsp;:{' '}
              <Link href="/contact">page Contact</Link>.
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  )
}
