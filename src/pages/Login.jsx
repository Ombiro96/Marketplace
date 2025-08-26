import AppShell from '@/components/AppShell'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDemo = () => {
    const fakeUser = { id: 'demo', name: 'Demo User', email: 'demo@example.com' }
    dispatch(loginSuccess(fakeUser))
    navigate('/dashboard')
  }

  return (
    <AppShell>
      <div className="max-w-md mx-auto bg-[color:var(--color-surface)]/60 border border-[var(--color-border)] rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Login</h1>
        <button
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-dark)] font-medium py-2 px-4 rounded-md"
          onClick={handleDemo}
        >
          Login as Demo
        </button>
      </div>
    </AppShell>
  )
}
