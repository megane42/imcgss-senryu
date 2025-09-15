import { describe, it, expect } from 'vitest';
import { loadSenryu } from '@/lib/core/loadSenryu';

describe('loadSenryu', () => {
  it('should load senryu from multiple IDs', () => {
    const result = loadSenryu(['i144', 'd1', 'i142', 'd1', 'i100', 'd1', 'i60', 'd1']);

    expect(result.upperPart).toEqual([
      { word: "星", mora: 2 },
      { word: "輝子", mora: 3 }
    ]);
    expect(result.middlePart).toEqual([
      { word: "ヘレン", mora: 3 },
      { word: " ", mora: 0 },
      { word: "鷹富士", mora: 4 },
    ]);
    expect(result.lowerPart).toEqual([
      { word: "茄子", mora: 2 },
      { word: " ", mora: 0 },
      { word: "ケイト", mora: 3 },
    ]);
  });

  it('should throw error when given non-existent ID', () => {
    expect(() => {
      loadSenryu(['i74', 'i44', 'nonexistent-id']);
    }).toThrow("SenryuWord with id 'nonexistent-id' not found");
  });

  it('should throw error when it cannot build a valid senryu', () => {
    expect(() => {
      loadSenryu(['c1', 'i112']);
    }).toThrow("Given SenryuWords are not enough to build a valid senryu");
  });
});