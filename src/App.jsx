import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Dashboard from '@/pages/Dashboard'
import RepairProblem from '@/pages/RepairProblem'
import Offers from '@/pages/Offers'
import Auctions from '@/pages/Auctions'
import Junkyards from '@/pages/Junkyards'
import Marketplace from '@/pages/Marketplace'
import ProtectedRoute from '@/components/ProtectedRoute'

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/auctions" element={<Auctions />} />
      <Route path="/junkyards" element={<Junkyards />} />
      <Route path="*" element={<NotFound />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/repair" element={<RepairProblem />} />
        <Route path="/offers" element={<Offers />} />
      </Route>
    </Routes>
  )
}

export default App
