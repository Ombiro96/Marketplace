import AppShell from '@/components/AppShell'

export default function Contact() {
  return (
    <AppShell>
      <section className="py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center">Contact</h1>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mt-3">Reach us for partnerships, vendor onboarding, or support.</p>
        <form className="max-w-xl mx-auto mt-8 grid gap-4">
          <input className="h-11 px-3 rounded-xl border border-slate-300 bg-white" placeholder="Your name" />
          <input className="h-11 px-3 rounded-xl border border-slate-300 bg-white" placeholder="Email" />
          <textarea className="min-h-32 px-3 py-2 rounded-xl border border-slate-300 bg-white" placeholder="Message" />
          <button className="inline-flex items-center justify-center rounded-xl px-5 h-11 bg-slate-900 text-white hover:bg-slate-800">Send</button>
        </form>
      </section>
    </AppShell>
  )
}


