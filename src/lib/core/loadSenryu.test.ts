import { describe, it, expect } from 'vitest';
import { loadSenryu } from './loadSenryu';

describe('loadSenryu', () => {
  it('should load senryu from multiple IDs', () => {
    const result = loadSenryu(['i74', 'i44', 'c1']);    
    
    expect(result.upperPart).toEqual([
      { word: "佐久間", mora: 3 },
      { word: "まゆ", mora: 2 }
    ]);
    expect(result.middlePart).toEqual([
      { word: "神崎", mora: 4 },
      { word: "蘭子", mora: 3 }
    ]);
    expect(result.lowerPart).toEqual([
      { word: "かわいいね", mora: 5 }
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