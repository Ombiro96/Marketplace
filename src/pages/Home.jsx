import AppShell from '@/components/AppShell'

export default function Home() {
  return (
    <AppShell>
      <section className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-2xl p-8 border border-[var(--color-border)] bg-[color:var(--color-surface)]/60">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--color-text)] mb-4">
            Welcome to Garage World – Your Hub for Automotive Excellence!
          </h1>
          <p className="text-[color:var(--color-text)]/80 mb-6">
            At Garage World, we’re dedicated to revolutionizing the way you experience
            automotive repair and maintenance.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/marketplace"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-dark)] font-semibold"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[color:var(--color-surface)]/60 min-h-64">
          <div className="h-full w-full flex items-center justify-center text-sm text-[color:var(--color-text)]/60 p-8">
            Hero image placeholder
          </div>
        </div>
      </section>
    </AppShell>
  )
}
