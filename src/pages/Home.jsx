import AppShell from '@/components/AppShell'

export default function Home() {
  return (
    <AppShell>
      <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-2">Welcome to GarageWorld</h1>
        <p className="text-gray-300">Explore the marketplace, auctions, and junkyards.</p>
      </div>
    </AppShell>
  )
}
