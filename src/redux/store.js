import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/redux/features/authSlice'
import uiReducer from '@/redux/features/uiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
  middleware: (getDefault) => getDefault(),
})

export default store


