export const themeColors = {
  background: '#0E1F18',
  surface: '#11241D',
  paper: '#F2F1E9',
  primary: '#FF6A00',
  primaryHover: '#E05F00',
  text: '#EDF2EF',
  textDark: '#0E1F18',
  border: '#1E3A31',
}

export function applyTheme(colors = themeColors) {
  const root = document.documentElement
  root.style.setProperty('--color-bg', colors.background)
  root.style.setProperty('--color-surface', colors.surface)
  root.style.setProperty('--color-paper', colors.paper)
  root.style.setProperty('--color-primary', colors.primary)
  root.style.setProperty('--color-primary-hover', colors.primaryHover)
  root.style.setProperty('--color-text', colors.text)
  root.style.setProperty('--color-text-dark', colors.textDark)
  root.style.setProperty('--color-border', colors.border)
}
