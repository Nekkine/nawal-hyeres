'use client'

import { useEffect, useState } from 'react'
import { Sun } from 'lucide-react'

export default function TodayBadge({ dayIndex }) {
  const [today, setToday] = useState(null)

  useEffect(() => {
    setToday(new Date().getDay())
  }, [])

  if (today !== dayIndex) {
    return null
  }

  return (
    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-olive px-2.5 py-0.5 align-middle text-[11px] font-semibold uppercase tracking-wider text-white">
      <Sun className="h-3 w-3" aria-hidden="true" />
      C’est aujourd’hui
    </span>
  )
}
