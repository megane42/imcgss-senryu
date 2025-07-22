export const decodeIds = (encoded: string): string[] => {
  try {
    // URL-safe base64 to normal base64
    const normalized = encoded
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    // add padding (if needed)
    const padded = normalized + '='.repeat((4 - normalized.length % 4) % 4)

    const decoded = atob(padded)
    return decoded.split(',').map(id => id.trim())
  } catch (error) {
    throw new Error('Invalid encoded string')
  }
}