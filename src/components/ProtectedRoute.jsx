import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const status = useSelector((state) => state.auth.status)
  if (status !== 'authenticated') {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
