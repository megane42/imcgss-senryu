import { describe, it, expect } from 'vitest';
import { isCompleteSenryu } from './isCompleteSenryu';
import type { Senryu } from '../types/senryu';

describe('isCompleteSenryu', () => {
  it('should return true for senryu with 5-7-5 mora structure', () => {
    const senryu: Senryu = {
      upperPart: [
        { word: '渋谷', mora: 3 },
        { word: '凛', mora: 2 }
      ],
      middlePart: [
        { word: '島村', mora: 4 },
        { word: '卯月', mora: 3 }
      ],
      lowerPart: [
        { word: '本田', mora: 3 },
        { word: '未央', mora: 2 }
      ]
    };
    expect(isCompleteSenryu(senryu)).toBe(true);
  });

  it('should return false when upper part is not 5 mora', () => {
    const senryu: Senryu = {
      upperPart: [
        { word: '渋谷', mora: 3 }
      ],
      middlePart: [
        { word: '島村', mora: 4 },
        { word: '卯月', mora: 3 }
      ],
      lowerPart: [
        { word: '本田', mora: 3 },
        { word: '未央', mora: 2 }
      ]
    };
    expect(isCompleteSenryu(senryu)).toBe(false);
  });

  it('should return false when middle part is not 7 mora', () => {
    const senryu: Senryu = {
      upperPart: [
        { word: '渋谷', mora: 3 },
        { word: '凛', mora: 2 }
      ],
      middlePart: [
        { word: '島村', mora: 4 }
      ],
      lowerPart: [
        { word: '本田', mora: 3 },
        { word: '未央', mora: 2 }
      ]
    };
    expect(isCompleteSenryu(senryu)).toBe(false);
  });

  it('should return false when lower part is not 5 mora', () => {
    const senryu: Senryu = {
      upperPart: [
        { word: '渋谷', mora: 3 },
        { word: '凛', mora: 2 }
      ],
      middlePart: [
        { word: '島村', mora: 4 },
        { word: '卯月', mora: 3 }
      ],
      lowerPart: [
        { word: '本田', mora: 3 }
      ]
    };
    expect(isCompleteSenryu(senryu)).toBe(false);
  });

  it('should return false when all parts are empty', () => {
    const senryu: Senryu = {
      upperPart: [],
      middlePart: [],
      lowerPart: []
    };
    expect(isCompleteSenryu(senryu)).toBe(false);
  });
}); 