import AppShell from '@/components/AppShell'

export default function About() {
  return (
    <AppShell>
      <section className="py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center">About GarageWorld</h1>
        <p className="text-slate-700 max-w-3xl mx-auto mt-4 text-center">
          We connect drivers, shops, and suppliers through auctions, junkyards, repair offers, and a modern marketplace.
        </p>
      </section>
    </AppShell>
  )
}


