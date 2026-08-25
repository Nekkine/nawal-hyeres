'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, ShoppingBasket, Star, X } from 'lucide-react'
import DarkModeToggle from '@/components/DarkModeToggle'
import SocialLinks from '@/components/SocialLinks'
import { siteConfig } from '@/lib/site'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/collections', label: 'Nos Collections' },
  { href: '/marches', label: 'Nos Marchés', star: true },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-terracotta focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu principal
      </a>

      <header className="sticky top-0 z-50 border-b border-lin-dark/60 bg-lin-light/90 backdrop-blur dark:border-encre-soft dark:bg-encre/90">
        <div className="container-marche flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${siteConfig.name} – Retour à l'accueil`}
            className="group flex items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white shadow-parasol transition group-hover:-rotate-12">
              <ShoppingBasket className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
              {siteConfig.name}
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? 'bg-terracotta/10 text-terracotta-dark dark:bg-terracotta/25 dark:text-terracotta-light'
                    : 'hover:bg-lin-dark/70 dark:hover:bg-encre-soft'
                }`}
              >
                {link.label}
                {link.star ? (
                  <Star className="mb-1 ml-1 inline h-3 w-3 fill-current" aria-hidden="true" />
                ) : null}
              </Link>
            ))}
            <Link href="/marches" className="btn-primary ml-2 !px-5 !py-2 text-sm">
              Nous trouver
            </Link>
          </nav>

          <SocialLinks variant="ghost" className="ml-1 hidden xl:flex" />

          <div className="flex items-center gap-2">
            <DarkModeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-lin-dark/70 transition hover:bg-lin-dark/70 lg:hidden dark:border-encre-soft dark:hover:bg-encre-soft"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="menu-mobile"
            aria-label="Navigation mobile"
            className="border-t border-lin-dark/60 bg-lin-light/95 backdrop-blur lg:hidden dark:border-encre-soft dark:bg-encre/95"
          >
            <div className="container-marche flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`flex items-center rounded-xl px-3 py-3 text-base font-medium transition ${
                    isActive(link.href)
                      ? 'bg-terracotta/10 text-terracotta-dark dark:bg-terracotta/25 dark:text-terracotta-light'
                      : 'hover:bg-lin-dark/70 dark:hover:bg-encre-soft'
                  }`}
                >
                  {link.label}
                  {link.star ? (
                    <Star className="ml-1 h-3 w-3 fill-current" aria-hidden="true" />
                  ) : null}
                </Link>
              ))}
              <Link href="/marches" className="btn-primary mt-3 w-full">
                Nous trouver ce week-end
              </Link>
              <div className="mt-4 flex justify-center border-t border-lin-dark/60 pt-4 dark:border-encre-soft">
                <SocialLinks variant="circle" />
              </div>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  )
}
