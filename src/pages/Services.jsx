import AppShell from '@/components/AppShell'

export default function Services() {
  return (
    <AppShell>
      <section className="py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center">Services</h1>
        <div className="max-w-4xl mx-auto mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h3 className="font-semibold text-slate-900">Auctions & Junkyards</h3>
            <p className="text-slate-600 mt-2">Browse featured vehicles and parts from trusted vendors.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h3 className="font-semibold text-slate-900">Repair Offers</h3>
            <p className="text-slate-600 mt-2">Post a problem and compare offers from nearby workshops.</p>
          </div>
        </div>
      </section>
    </AppShell>
  )
}


