export function isAuthenticated() {
  try {
    return !!localStorage.getItem('gw_demo_token')
  } catch (e) {
    return false
  }
}

export function setDemoAuth() {
  try {
    localStorage.setItem('gw_demo_token', '1')
  } catch (e) {}
}

export function clearDemoAuth() {
  try {
    localStorage.removeItem('gw_demo_token')
  } catch (e) {}
}


