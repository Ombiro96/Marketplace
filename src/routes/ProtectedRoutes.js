import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoutes() {
  const status = useSelector((s) => s.auth.status)
  const location = useLocation()
  if (status !== 'authenticated') {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return <Outlet />
}


