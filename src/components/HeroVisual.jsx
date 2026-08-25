'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Clock, MapPin, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/site'

function FloatingBadge({ className, delay, duration = 4.5, children }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay }}
      className={`absolute z-10 ${className}`}
    >
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold shadow-parasol dark:bg-encre-soft sm:text-sm"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function HeroVisual() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[24rem] sm:max-w-[26rem]">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-parasol"
        >
          <Image
            src={siteConfig.heroImage}
            alt="Étal de marché prêt-à-porter et accessoires à Hyères"
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 26rem"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
          />
        </motion.div>
      </motion.div>

      <FloatingBadge className="right-2 top-6" delay={0.9} duration={4.5}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
          <MapPin className="h-4 w-4" />
        </span>
        Marché d’Hyères
      </FloatingBadge>

      <FloatingBadge className="bottom-24 left-2" delay={1.2} duration={5}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-olive/15 text-olive-dark dark:bg-olive-light/15 dark:text-olive-light">
          <Sparkles className="h-4 w-4" />
        </span>
        Nouvelle collection
      </FloatingBadge>

      <FloatingBadge className="bottom-4 right-6" delay={1.5} duration={4}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-azur/10 text-azur-dark dark:bg-azur-light/15 dark:text-azur-light">
          <Clock className="h-4 w-4" />
        </span>
        8h – 13h
      </FloatingBadge>
    </div>
  )
}
