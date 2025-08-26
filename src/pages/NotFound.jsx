import AppShell from '@/components/AppShell'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <AppShell>
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-[color:var(--color-text)]/70 mb-6">Page not found</p>
        <Link to="/" className="btn-orange">Go Home</Link>
      </div>
    </AppShell>
  )
}
