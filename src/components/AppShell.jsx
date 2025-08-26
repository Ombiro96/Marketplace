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
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              GarageWorld
            </Link>
            <nav className="hidden lg:flex gap-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About Garage</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/become-member" className={navLinkClass}>Become a Member</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>
            <button
              aria-label="Toggle Menu"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--color-text)] hover:bg-[var(--color-primary-hover)] hover:text-white"
              onClick={() => dispatch(toggleMobileNav())}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/" onClick={() => dispatch(closeMobileNav())} className={({isActive}) => `${navLinkClass({isActive})} block w-full`}>Home</NavLink>
              <NavLink to="/about" onClick={() => dispatch(closeMobileNav())} className={({isActive}) => `${navLinkClass({isActive})} block w-full`}>About Garage</NavLink>
              <NavLink to="/services" onClick={() => dispatch(closeMobileNav())} className={({isActive}) => `${navLinkClass({isActive})} block w-full`}>Services</NavLink>
              <NavLink to="/become-member" onClick={() => dispatch(closeMobileNav())} className={({isActive}) => `${navLinkClass({isActive})} block w-full`}>Become a Member</NavLink>
              <NavLink to="/contact" onClick={() => dispatch(closeMobileNav())} className={({isActive}) => `${navLinkClass({isActive})} block w-full`}>Contact</NavLink>
              <div className="flex gap-2 pt-2">
                <Link to="/login" onClick={() => dispatch(closeMobileNav())} className="flex-1 inline-flex items-center justify-center rounded-md px-3 h-10 border border-slate-600 text-slate-100">Login</Link>
                <Link to="/signup" onClick={() => dispatch(closeMobileNav())} className="flex-1 inline-flex items-center justify-center rounded-md px-3 h-10 bg-[var(--color-primary)] text-[var(--color-text-dark)]">Sign up</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <div className="w-full mx-auto p-4 md:px-6">
          {children}
        </div>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[color:var(--color-surface)]/80">
        <div className="w-full mx-auto px-4 md:px-6 py-6 text-sm text-gray-300">
          © {year} GarageWorld
        </div>
      </footer>
    </div>
  )
}
