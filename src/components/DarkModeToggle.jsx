'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (error) {}
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      aria-pressed={isDark}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lin-dark/70 bg-white/60 transition hover:rotate-12 hover:bg-lin-dark/70 dark:border-encre-soft dark:bg-encre dark:text-lin-light dark:hover:bg-encre-soft"
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  )
}
