'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import { guestBrands, homePageContent } from '@/lib/site'

const { eyebrow, title, subtitle } = homePageContent.sections.brands

export default function GuestBrands() {
  return (
    <section
      aria-labelledby="titre-invites"
      className="container-marche py-14 sm:py-20"
    >
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-dark dark:text-olive-light">
            {eyebrow}
          </p>
          <h2 id="titre-invites" className="mt-2 text-3xl sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-75">{subtitle}</p>
        </div>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guestBrands.map((brand, index) => (
          <FadeIn key={brand.nom} delay={index * 0.08} className="h-full">
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex h-full flex-col overflow-hidden rounded-et border border-lin-dark bg-white/70 shadow-sm transition-shadow hover:shadow-parasol dark:border-encre-soft dark:bg-encre-soft/70"
            >
              <div className="relative aspect-square overflow-hidden bg-sable">
                <Image
                  src={brand.image}
                  alt={`${brand.nom} – Marque invitée au marché de Hyères`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 text-center">
                <h3 className="font-display text-lg font-semibold">
                  {brand.nom}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed opacity-70">
                  {brand.texte}
                </p>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
