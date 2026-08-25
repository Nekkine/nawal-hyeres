import { siteConfig } from '@/lib/site'

export default function sitemap() {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/marches', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/collections', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/a-propos', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' },
    {
      path: '/politique-de-confidentialite',
      priority: 0.3,
      changeFrequency: 'yearly',
    },
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
