import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'unauthenticated', // 'unauthenticated' | 'authenticated' | 'checking'
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginChecking(state) {
      state.status = 'checking'
    },
    loginSuccess(state, action) {
      state.status = 'authenticated'
      state.user = action.payload
    },
    logout(state) {
      state.status = 'unauthenticated'
      state.user = null
    },
  },
})

export const { loginChecking, loginSuccess, logout } = authSlice.actions
export default authSlice.reducer


