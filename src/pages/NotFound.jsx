import AppShell from '@/components/AppShell'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <AppShell>
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-gray-300 mb-6">Page not found</p>
        <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">Go Home</Link>
      </div>
    </AppShell>
  )
}
