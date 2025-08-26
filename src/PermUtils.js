export const PAGES_TO_CHECK = []

export const URL_MODEL_PERM_MAP = {}

export function checkUserHasPermission(model, perm, userPermissions) {
  if (!model || !perm) return true
  if (!Array.isArray(userPermissions)) return false
  return userPermissions.some((p) => p.model === model && p.perm === perm)
}


