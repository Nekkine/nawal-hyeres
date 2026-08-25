import { Facebook, Instagram, Youtube } from 'lucide-react'
import TikTokIcon from '@/components/TikTokIcon'
import { contact } from '@/lib/site'

const socials = [
  {
    name: 'Instagram',
    label: 'Suivez-nous sur Instagram',
    href: contact.instagram,
    Icon: Instagram,
  },
  {
    name: 'Facebook',
    label: 'Retrouvez-nous sur Facebook',
    href: contact.facebook,
    Icon: Facebook,
  },
  {
    name: 'TikTok',
    label: 'Suivez-nous sur TikTok',
    href: contact.tiktok,
    Icon: TikTokIcon,
  },
  {
    name: 'YouTube',
    label: 'Abonnez-vous sur YouTube',
    href: contact.youtube,
    Icon: Youtube,
  },
]

const variants = {
  circle:
    'h-10 w-10 rounded-full border border-lin-dark/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-terracotta hover:bg-terracotta hover:text-white dark:border-lin-light/20',
  ghost:
    'h-9 w-9 rounded-full opacity-70 transition-all duration-300 hover:scale-110 hover:bg-terracotta/10 hover:text-terracotta hover:opacity-100 dark:hover:text-terracotta-light',
  float:
    'h-8 w-8 rounded-full text-encre/70 transition-all duration-300 hover:scale-110 hover:bg-terracotta hover:text-white dark:text-lin-light/80',
}

export default function SocialLinks({ variant = 'circle', className = '' }) {
  const style = variants[variant] ?? variants.circle

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ name, label, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`inline-flex items-center justify-center ${style}`}
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}
