'use client'

import { MessageCircle, Phone } from 'lucide-react'
import SocialLinks from '@/components/SocialLinks'
import { contact } from '@/lib/site'

export default function FloatingActions() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div className="flex items-center rounded-full border border-lin-dark/60 bg-white/90 p-1.5 shadow-parasol backdrop-blur dark:border-encre-soft dark:bg-encre/90">
        <SocialLinks variant="float" />
      </div>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous écrire sur WhatsApp"
        title="Réservez votre article sur WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-parasol transition hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
      <a
        href={contact.phoneHref}
        aria-label={`Appeler le ${contact.phoneDisplay}`}
        title={`Appeler le ${contact.phoneDisplay}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white shadow-parasol transition hover:scale-105 active:scale-95"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  )
}
