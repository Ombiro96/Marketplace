import AppShell from '@/components/AppShell'

export default function Signup() {
  return (
    <AppShell>
      <section className="py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center">Sign up</h1>
        <form className="max-w-xl mx-auto mt-8 grid gap-4">
          <input className="h-11 px-3 rounded-xl border border-slate-300 bg-white" placeholder="Full name" />
          <input className="h-11 px-3 rounded-xl border border-slate-300 bg-white" placeholder="Email" />
          <input className="h-11 px-3 rounded-xl border border-slate-300 bg-white" placeholder="Password" type="password" />
          <button className="inline-flex items-center justify-center rounded-xl px-5 h-11 bg-slate-900 text-white hover:bg-slate-800">Create account</button>
        </form>
      </section>
    </AppShell>
  )
}


