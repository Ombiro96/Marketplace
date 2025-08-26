import { Link, NavLink } from 'react-router-dom'
import '@/styles/appShell.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileNav, closeMobileNav } from '@/redux/features/uiSlice'

export default function AppShell({ children }) {
  const dispatch = useDispatch()
  const mobileOpen = useSelector((s) => s.ui.mobileNavOpen)
  const year = new Date().getFullYear()

  const navLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <div className="app-shell">
      <header className="header">
        <div className="header-inner">
          <div className="header-bar">
            <Link to="/" className="brand">
              <img src="/ubuntu.svg" alt="GarageWorld" />
              <span>Garage World</span>
            </Link>
            <nav className="nav nav--desktop">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About Garage</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/become-member" className={navLinkClass}>Become a Member</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
              <NavLink to="/login" className={navLinkClass}>Login</NavLink>
              <Link to="/signup" className="signup-btn">
                <span>Sign up</span>
                <span className="arrow-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" stroke="white" /></svg></span>
              </Link>
            </nav>
            <button aria-label="Toggle Menu" className="menu-btn" onClick={() => dispatch(toggleMobileNav())}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="nav--mobile">
            <div className="nav--mobile-inner">
              <NavLink to="/" onClick={() => dispatch(closeMobileNav())} className="nav-link nav-link--mobile">Home</NavLink>
              <NavLink to="/about" onClick={() => dispatch(closeMobileNav())} className="nav-link nav-link--mobile">About Garage</NavLink>
              <NavLink to="/services" onClick={() => dispatch(closeMobileNav())} className="nav-link nav-link--mobile">Services</NavLink>
              <NavLink to="/become-member" onClick={() => dispatch(closeMobileNav())} className="nav-link nav-link--mobile">Become a Member</NavLink>
              <NavLink to="/contact" onClick={() => dispatch(closeMobileNav())} className="nav-link nav-link--mobile">Contact</NavLink>
              <NavLink to="/login" onClick={() => dispatch(closeMobileNav())} className="nav-link nav-link--mobile">Login</NavLink>
              <Link to="/signup" onClick={() => dispatch(closeMobileNav())} className="signup-btn signup-btn--mobile">
                <span>Sign up</span>
                <span className="arrow-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" stroke="white" /></svg></span>
              </Link>
            </div>
          </div>
        )}
      </header>

      <main style={{ flex: 1 }}>
        <div style={{ width: '100%', margin: '0 auto', padding: '16px 24px' }}>
          {children}
        </div>
      </main>

      <footer style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ width: '100%', margin: '0 auto', padding: '24px', fontSize: '14px', color: '#4b5563' }}>
          © {year} GarageWorld
        </div>
      </footer>
    </div>
  )
}
