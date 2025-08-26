import AppShell from '@/components/AppShell'
import { Link } from 'react-router-dom'

export default function BecomeMember() {
  return (
    <AppShell>
      <section className="py-12 md:py-16 lg:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">Become a Member</h1>
        <p className="text-slate-700 max-w-2xl mx-auto mt-4">Join GarageWorld to save searches, post problems, and list inventory.</p>
        <div className="mt-6">
          <Link to="/signup" className="inline-flex items-center justify-center rounded-xl px-5 h-11 bg-slate-900 text-white hover:bg-slate-800">Sign up</Link>
        </div>
      </section>
    </AppShell>
  )
}


