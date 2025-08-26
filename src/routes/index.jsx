import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Dashboard from '@/pages/Dashboard'
import RepairProblem from '@/pages/RepairProblem'
import Offers from '@/pages/Offers'
import Auctions from '@/pages/Auctions'
import Junkyards from '@/pages/Junkyards'
import Marketplace from '@/pages/Marketplace'
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import { isAuthenticated } from '@/utilities/AuthUtils'

export function RoutedContent() {
  const authed = isAuthenticated()
  return (
    <Routes>
      {/* Redirect root depending on auth */}
      <Route path="/" element={authed ? <Home /> : <Home />} />

      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/auctions" element={<Auctions />} />
      <Route path="/junkyards" element={<Junkyards />} />

      {/* Protected */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/repair" element={<RepairProblem />} />
        <Route path="/offers" element={<Offers />} />
      </Route>

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


