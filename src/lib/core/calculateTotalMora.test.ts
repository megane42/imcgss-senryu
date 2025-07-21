import { describe, it, expect } from 'vitest';
import { calculateTotalMora } from './calculateTotalMora';

describe('calculateTotalMora', () => {
  it('should return 0 for empty array', () => {
    expect(calculateTotalMora([])).toBe(0);
  });

  it('should sum mora count for all chunks', () => {
    expect(calculateTotalMora([
      { word: "相川", mora: 4 },
      { word: "千夏", mora: 3 }
    ])).toBe(7);
  });
}); 