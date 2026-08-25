'use client'

import { useState } from 'react'
import { MapPin, Star } from 'lucide-react'
import { markets } from '@/lib/site'

export default function MarketMap() {
  const defaultMarket = markets.find((market) => market.star) ?? markets[0]
  const [activeDay, setActiveDay] = useState(defaultMarket.day)
  const market = markets.find((item) => item.day === activeDay)

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    market.mapsQuery
  )}&output=embed`

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Choisir le marché à afficher sur la carte"
      >
        {markets.map((item) => (
          <button
            key={item.day}
            type="button"
            onClick={() => setActiveDay(item.day)}
            aria-pressed={item.day === activeDay}
            className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              item.day === activeDay
                ? 'border-terracotta bg-terracotta text-white shadow-parasol'
                : 'border-lin-dark bg-white/70 hover:border-terracotta dark:border-encre-soft dark:bg-encre-soft/70'
            }`}
          >
            {item.day}
            {item.star ? (
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            ) : null}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-et border border-lin-dark shadow-parasol dark:border-encre-soft">
        <iframe
          key={market.day}
          src={mapSrc}
          title={`Plan d’accès – ${market.name}, ${market.location}, Hyères`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-80 w-full border-0 sm:h-[420px]"
        />
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm opacity-75">
        <MapPin className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
        {market.name} – {market.location} · {market.hours}
      </p>
    </div>
  )
}
