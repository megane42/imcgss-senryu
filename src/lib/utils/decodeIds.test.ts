import { describe, it, expect } from 'vitest'
import { decodeIds } from './decodeIds'

describe('decodeIds', () => {
  it('should decode multiple IDs correctly', () => {
    const result = decodeIds('aTc0LGk0NCxjMQ')
    expect(result).toEqual(['i74', 'i44', 'c1'])
  })

  it('should throw error for invalid base64', () => {
    expect(() => {
      decodeIds('invalid-base64!')
    }).toThrow('Invalid encoded string')
  })

  it('should throw error for malformed encoded string', () => {
    expect(() => {
      decodeIds('aTc0LGk0NCxjMQ==invalid')
    }).toThrow('Invalid encoded string')
  })
})