import { useMemo, useState } from 'react'
import AppShell from '@/components/AppShell'
import TabSwitch from '@/components/TabSwitch'
import SearchField from '@/components/SearchField'
import ListingCard from '@/components/ListingCard'
import StepItem from '@/components/StepItem'
import { Link } from 'react-router-dom'

const FEATURED = [
  {
    id: '1',
    image: 'https://picsum.photos/640/360?1',
    title: '2016 Toyota Corolla',
    meta: { received: '2025-08-10', odometer: '82,000 km', color: 'Silver', location: 'Nairobi' },
  },
  {
    id: '2',
    image: 'https://picsum.photos/640/360?2',
    title: '2014 Subaru Forester',
    meta: { received: '2025-06-21', odometer: '110,200 km', color: 'Green', location: 'Mombasa' },
  },
  {
    id: '3',
    image: 'https://picsum.photos/640/360?3',
    title: '2019 Honda Fit',
    meta: { received: '2025-07-05', odometer: '52,450 km', color: 'Blue', location: 'Nakuru' },
  },
  {
    id: '4',
    image: 'https://picsum.photos/640/360?4',
    title: '2012 Mazda Demio',
    meta: { received: '2025-05-18', odometer: '140,000 km', color: 'Red', location: 'Kisumu' },
  },
  {
    id: '5',
    image: 'https://picsum.photos/640/360?5',
    title: '2017 Toyota Vitz',
    meta: { received: '2025-03-09', odometer: '75,000 km', color: 'White', location: 'Thika' },
  },
]

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
    </svg>
  )
}

function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 11 4 7m12 6 4-4M2 12a4 4 0 0 1 4-4h3l3 3h1a4 4 0 0 1 4 4m-9 2 2 2m-6-4 4 4m10-2-2 2" />
    </svg>
  )
}

export default function Home() {
  const [tab, setTab] = useState('vehicle')

  const tabs = useMemo(
    () => [
      { label: 'Vehicle', value: 'vehicle' },
      { label: 'Fitment', value: 'fitment' },
      { label: 'Location', value: 'location' },
    ],
    [],
  )

  return (
    <AppShell>
      {/* Container */}
      <div className="container-px w-full mx-auto">
        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center">
                Welcome to GarageWorld
              </h1>
              <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-center">
                Your hub for automotive auctions, junkyards, repair offers, and a powerful
                marketplace — all in one place.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center rounded-xl px-4 h-11 bg-slate-900 text-white hover:bg-slate-800"
                >
                  Search Inventory
                </Link>
                <Link
                  to="/repair"
                  className="inline-flex items-center justify-center rounded-xl px-4 h-11 border border-slate-300 hover:bg-slate-50"
                >
                  Post a Problem
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm h-64"></div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-xl bg-slate-900/10"></div>
            </div>
          </div>
        </section>

        {/* Search Panel with Tabs */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <TabSwitch tabs={tabs} value={tab} onChange={setTab} />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {tab === 'vehicle' && (
                <>
                  <SearchField label="Make">
                    <select className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10">
                      <option>Toyota</option>
                      <option>Honda</option>
                      <option>Subaru</option>
                    </select>
                  </SearchField>
                  <SearchField label="Model">
                    <select className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10">
                      <option>Corolla</option>
                      <option>Fit</option>
                      <option>Forester</option>
                    </select>
                  </SearchField>
                  <SearchField label="Year">
                    <select className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10">
                      <option>2012</option>
                      <option>2016</option>
                      <option>2019</option>
                    </select>
                  </SearchField>
                  <SearchField label="Date Range" helper="Optional">
                    <input type="date" className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10" />
                  </SearchField>
                  <div className="lg:col-span-2 md:col-span-1">
                    <button className="w-full h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800 inline-flex items-center justify-center gap-2">
                      <IconSearch />
                      <span>Search</span>
                    </button>
                  </div>
                </>
              )}

              {tab === 'fitment' && (
                <>
                  <SearchField label="Part Type">
                    <select className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10">
                      <option>Brake Pads</option>
                      <option>Shock Absorber</option>
                    </select>
                  </SearchField>
                  <SearchField label="Vehicle Type">
                    <select className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10">
                      <option>Sedan</option>
                      <option>SUV</option>
                    </select>
                  </SearchField>
                  <div className="lg:col-span-4 md:col-span-2">
                    <button className="w-full h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800 inline-flex items-center justify-center gap-2">
                      <IconSearch />
                      <span>Search</span>
                    </button>
                  </div>
                </>
              )}

              {tab === 'location' && (
                <>
                  <SearchField label="Country">
                    <select className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10">
                      <option>Kenya</option>
                      <option>Uganda</option>
                    </select>
                  </SearchField>
                  <SearchField label="Region/City">
                    <input className="h-11 px-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-slate-900/10" placeholder="e.g., Nairobi" />
                  </SearchField>
                  <SearchField label="Radius (km)">
                    <input type="range" min="5" max="200" className="w-full" />
                  </SearchField>
                  <div className="lg:col-span-3 md:col-span-1">
                    <button className="w-full h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800 inline-flex items-center justify-center gap-2">
                      <IconSearch />
                      <span>Search</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Featured Grid */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured auctions & junkyards</h2>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-slate-500">Quick filters:</span>
              {['Toyota', 'Subaru', 'Honda', 'Nairobi'].map((x) => (
                <button key={x} className="rounded-full border border-slate-200 px-3 h-8 hover:bg-slate-50 text-slate-700">
                  {x}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FEATURED.map((it) => (
              <ListingCard key={it.id} item={it} />
            ))}
          </div>
        </section>

        {/* Maintenance / Repair Offers CTA */}
        <section className="py-12 md:py-16 lg:py-20 bg-slate-50 rounded-3xl">
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem title="Post a problem" text="Describe your vehicle issue with photos." icon={<IconBolt />} />
            <StepItem title="We publish shop offers" text="We curate offers and keep you updated." icon={<IconSearch />} />
            <StepItem title="Choose and proceed" text="Pick the best offer and book the job." icon={<IconHandshake />} />
          </div>
          <div className="mt-8">
            <Link to="/repair" className="inline-flex items-center justify-center rounded-xl px-5 h-11 bg-slate-900 text-white hover:bg-slate-800">
              Post a Problem
            </Link>
          </div>
        </section>

        {/* Marketplace how it works */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <StepItem title="Create a listing" text="Add photos, details, and set your price." icon={<IconBolt />} />
              <StepItem title="Publish & share" text="Appears in search immediately for buyers." icon={<IconSearch />} />
              <StepItem title="Connect with buyers" text="Answer questions and mark sold when done." icon={<IconHandshake />} />
            </div>
            <div className="mt-8">
              <Link to="/marketplace" className="inline-flex items-center justify-center rounded-xl px-5 h-11 border border-slate-300 hover:bg-slate-50">
                Explore Marketplace
              </Link>
            </div>
          </div>
        </section>

        {/* SEO snippet */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-slate-700">
              GarageWorld brings together auctions, junkyards, repair offers, and a modern marketplace
              to help drivers and shops find parts, sell inventory, and get repairs done faster.
            </p>
            <p className="text-slate-700 mt-3">
              Browse featured vehicles, post a repair problem, or publish your listing — all with a
              clean, mobile-first experience that works at every screen size.
            </p>
          </div>
        </section>
      </div>
    </AppShell>
  )
}
