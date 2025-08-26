import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileNav, closeMobileNav } from '@/redux/features/uiSlice'

export default function AppShell({ children }) {
  const dispatch = useDispatch()
  const mobileOpen = useSelector((s) => s.ui.mobileNavOpen)
  const year = new Date().getFullYear()

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-blue-700 hover:text-white'}`

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)] bg-[color:var(--color-surface)]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              GarageWorld
            </Link>
            <nav className="hidden md:flex gap-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/marketplace" className={navLinkClass}>Marketplace</NavLink>
              <NavLink to="/auctions" className={navLinkClass}>Auctions</NavLink>
              <NavLink to="/junkyards" className={navLinkClass}>Junkyards</NavLink>
              <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
            </nav>
            <button
              aria-label="Toggle Menu"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--color-text)] hover:bg-[var(--color-primary-hover)] hover:text-white"
              onClick={() => dispatch(toggleMobileNav())}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/" onClick={() => dispatch(closeMobileNav())} className={navLinkClass}>Home</NavLink>
              <NavLink to="/marketplace" onClick={() => dispatch(closeMobileNav())} className={navLinkClass}>Marketplace</NavLink>
              <NavLink to="/auctions" onClick={() => dispatch(closeMobileNav())} className={navLinkClass}>Auctions</NavLink>
              <NavLink to="/junkyards" onClick={() => dispatch(closeMobileNav())} className={navLinkClass}>Junkyards</NavLink>
              <NavLink to="/dashboard" onClick={() => dispatch(closeMobileNav())} className={navLinkClass}>Dashboard</NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto p-4">
          {children}
        </div>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[color:var(--color-surface)]/80">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-300">
          © {year} GarageWorld
        </div>
      </footer>
    </div>
  )
}
