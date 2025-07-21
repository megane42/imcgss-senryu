export const encodeIds = (ids: string[]): string => {
    const joined = ids.join(',')
    // base64 encode and convert to URL-safe
    const encoded = btoa(joined)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '')
    return encoded
} 