import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import About from '@/pages/About'
import Services from '@/pages/Services'
import BecomeMember from '@/pages/BecomeMember'
import Contact from '@/pages/Contact'
import Signup from '@/pages/Signup'
import { isAuthenticated } from '@/utilities/AuthUtils'

export function RoutedContent() {
  const authed = isAuthenticated()
  return (
    <Routes>
      {/* Redirect root depending on auth */}
      <Route path="/" element={authed ? <Home /> : <Home />} />

      {/* Public */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/become-member" element={<BecomeMember />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* No protected routes for now */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export function RoutedNavbars() {
  return null
}

export function RoutedSidebars() {
  return null
}


