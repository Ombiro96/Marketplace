import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/',
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('gw_demo_token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status === 401) {
      // noop for now
    }
    return Promise.reject(error)
  },
)

export default apiClient


