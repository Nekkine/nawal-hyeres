'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    let stored = null
    try {
      stored = window.localStorage.getItem(STORAGE_KEY)
    } catch (error) {
      stored = null
    }
    if (!stored) {
      setVisible(true)
      const timer = setTimeout(() => setEntered(true), 60)
      return () => clearTimeout(timer)
    }
  }, [])

  const choose = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch (error) {}
    setEntered(false)
    setTimeout(() => setVisible(false), 350)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      role="region"
      aria-label="Informations sur les cookies"
      className={`fixed inset-x-0 bottom-0 z-[55] transition-all duration-500 ease-out sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md ${
        entered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div
        className="mx-3 mb-3 rounded-et border border-lin-dark/70 bg-white/95 p-5 shadow-parasol backdrop-blur dark:border-encre-soft dark:bg-encre-soft/95 sm:mx-0 sm:mb-0"
        style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sable text-terracotta dark:bg-encre dark:text-terracotta-light"
          >
            <Cookie className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-lg leading-snug">
              Cookies&nbsp;: la transparence avant tout
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed opacity-75">
              Bonne nouvelle&nbsp;: ce site n’utilise aucun cookie publicitaire
              ni traceur de mesure d’audience. Seul un stockage strictement
              nécessaire mémorise vos préférences d’affichage, comme le mode
              clair ou sombre.
            </p>
          </div>
        </div>

        <p className="mt-3 pl-14 text-xs">
          <Link
            href="/politique-de-confidentialite"
            className="font-semibold text-azur underline underline-offset-2 dark:text-azur-light"
          >
            Consulter la politique de confidentialité
          </Link>
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="btn-primary w-full !py-2.5 text-sm sm:w-auto"
          >
            Tout accepter
          </button>
          <button
            type="button"
            onClick={() => choose('dismissed')}
            className="btn-secondary w-full !py-2.5 text-sm sm:w-auto"
          >
            Continuer sans accepter
          </button>
        </div>
      </div>
    </div>
  )
}
