import { describe, it, expect } from 'vitest'
import { encodeIds } from './encodeIds'

describe('encodeIds', () => {
    it('should encode multiple IDs correctly', () => {
        const result = encodeIds(['i74', 'i44', 'c1'])
        expect(result).toBe('aTc0LGk0NCxjMQ')
    })

    it('should produce URL-safe output', () => {
        const result = encodeIds(['test+id', 'test/id'])
        // URL-safe characters should not contain +, /, or =
        expect(result).not.toContain('+')
        expect(result).not.toContain('/')
        expect(result).not.toContain('=')
    })
}) 