// Minimal Mixpanel wrapper for key events only
export function trackEvent(eventName, props = {}) {
  if (typeof window !== 'undefined' && window.mixpanel && window.mixpanel.track) {
    window.mixpanel.track(eventName, props)
  }
}


