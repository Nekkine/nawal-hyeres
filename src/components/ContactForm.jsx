'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send } from 'lucide-react'
import { contact } from '@/lib/site'

const sujets = [
  'Réserver un article',
  'Question sur une pièce',
  'Retrouver le stand au marché',
  'Autre demande',
]

const inputClasses =
  'w-full min-h-[44px] rounded-xl border border-lin-dark bg-white px-4 py-2.5 text-sm outline-none transition placeholder:opacity-50 focus:border-azur focus:ring-2 focus:ring-azur/25 dark:border-encre-soft dark:bg-encre'

function FieldError({ message }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1.5 text-sm font-medium text-red-600 dark:text-red-400">
      {message}
    </p>
  )
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`[Site web] ${data.sujet} – ${data.nom}`)
    const body = encodeURIComponent(
      `Bonjour,\n\n${data.message}\n\n—\nNom : ${data.nom}\nE-mail : ${data.email}\nTéléphone : ${data.telephone}\n\nMessage envoyé depuis la page Contact du site.`
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {sent ? (
        <div
          role="status"
          className="mb-6 flex flex-col gap-2 rounded-et border border-olive/40 bg-olive/10 p-5 text-sm dark:border-olive-light/40 dark:bg-olive-light/10"
        >
          <p className="font-semibold">Votre message est prêt à partir&nbsp;!</p>
          <p className="opacity-80">
            Votre application e-mail s’est ouverte avec le message prérempli.
            Si rien ne se passe, écrivez-nous directement à{' '}
            <a href={`mailto:${contact.email}`} className="font-semibold underline">
              {contact.email}
            </a>{' '}
            ou par WhatsApp.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false)
              reset()
            }}
            className="self-start font-semibold text-olive-dark underline underline-offset-4 dark:text-olive-light"
          >
            Écrire un autre message
          </button>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-semibold">
            Votre nom <span className="text-terracotta">*</span>
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="name"
            placeholder="Marie Dupont"
            aria-invalid={errors.nom ? 'true' : 'false'}
            className={`${inputClasses} ${errors.nom ? 'border-red-500' : ''}`}
            {...register('nom', {
              required: 'Veuillez indiquer votre nom.',
              minLength: { value: 2, message: 'Votre nom semble trop court.' },
            })}
          />
          <FieldError message={errors.nom?.message} />
        </div>

        <div>
          <label htmlFor="telephone" className="mb-1.5 block text-sm font-semibold">
            Téléphone <span className="text-terracotta">*</span>
          </label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            aria-invalid={errors.telephone ? 'true' : 'false'}
            className={`${inputClasses} ${errors.telephone ? 'border-red-500' : ''}`}
            {...register('telephone', {
              required: 'Un numéro nous permet de vous répondre plus vite.',
              pattern: {
                value: /^(\+\d{1,3}|0)\s?[1-9]([-\s.]?\d{2}){4}$/,
                message: 'Numéro invalide (ex : 06 12 34 56 78).',
              },
            })}
          />
          <FieldError message={errors.telephone?.message} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          E-mail <span className="text-terracotta">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="marie@exemple.fr"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
          {...register('email', {
            required: 'Nous avons besoin de votre e-mail pour vous répondre.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
              message: 'Cette adresse e-mail semble invalide.',
            },
          })}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div className="mt-5">
        <label htmlFor="sujet" className="mb-1.5 block text-sm font-semibold">
          Sujet <span className="text-terracotta">*</span>
        </label>
        <select
          id="sujet"
          aria-invalid={errors.sujet ? 'true' : 'false'}
          className={`${inputClasses} ${errors.sujet ? 'border-red-500' : ''}`}
          defaultValue=""
          {...register('sujet', {
            required: 'Choisissez le sujet de votre message.',
          })}
        >
          <option value="" disabled>
            Choisissez un sujet…
          </option>
          {sujets.map((sujet) => (
            <option key={sujet} value={sujet}>
              {sujet}
            </option>
          ))}
        </select>
        <FieldError message={errors.sujet?.message} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Votre message <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Bonjour, j’ai vu une robe vichy sur votre site et je souhaite la réserver pour samedi…"
          aria-invalid={errors.message ? 'true' : 'false'}
          className={`${inputClasses} ${errors.message ? 'border-red-500' : ''}`}
          {...register('message', {
            required: 'Dites-nous tout, c’est le plus important !',
            minLength: { value: 20, message: 'Votre message est un peu court (20 caractères minimum).' },
          })}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-7 w-full">
        <Send className="h-4 w-4" aria-hidden="true" />
        Envoyer mon message
      </button>

      <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed opacity-70">
        <span aria-hidden="true">*</span> Champs obligatoires.
      </p>
    </form>
  )
}
