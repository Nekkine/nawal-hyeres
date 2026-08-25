'use client'

import { useState } from 'react'
import { AlertTriangle, CloudRain, Info, X } from 'lucide-react'
import { alertBanner } from '@/lib/site'

const styles = {
  info: {
    icon: Info,
    wrapper:
      'border-azur/40 bg-azur/10 text-azur-dark dark:border-azur-light/40 dark:bg-azur-light/10 dark:text-azur-light',
  },
  meteo: {
    icon: CloudRain,
    wrapper:
      'border-terracotta/40 bg-terracotta/10 text-terracotta-dark dark:border-terracotta-light/40 dark:bg-terracotta-light/10 dark:text-terracotta-light',
  },
}

export default function AlertBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (!alertBanner.active || dismissed) {
    return null
  }

  const config = styles[alertBanner.type] ?? styles.info
  const Icon = alertBanner.type === 'meteo' ? AlertTriangle : config.icon

  return (
    <div
      role="status"
      className={`container-marche flex items-start gap-3 rounded-et border px-5 py-4 sm:items-center ${config.wrapper}`}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0 sm:mt-0" aria-hidden="true" />
      <div className="flex-1">
        {alertBanner.title ? (
          <p className="text-sm font-semibold uppercase tracking-wider">
            {alertBanner.title}
          </p>
        ) : null}
        <p className="mt-0.5 text-sm leading-relaxed">{alertBanner.message}</p>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Masquer l’annonce"
        className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-black/5 dark:hover:bg-white/10"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  )
}
