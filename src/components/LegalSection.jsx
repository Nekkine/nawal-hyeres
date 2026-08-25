export default function LegalSection({ title, children }) {
  return (
    <section className="border-t border-lin-dark/60 pt-8 dark:border-encre-soft">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed opacity-85 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </section>
  )
}
