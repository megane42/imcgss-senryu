import { describe, it, expect } from 'vitest';
import { buildSenryu } from './buildSenryu';
import type { SenryuWord } from '../types/senryu';

describe('buildSenryu', () => {
  it('should build perfect 575 senryu when given senryuWords can form it', () => {
    const senryuWords: SenryuWord[] = [
      {
        id: 'test-1',
        chunks: [
          { word: "渋谷", mora: 3 },
          { word: "凛", mora: 2 }
        ]
      },
      {
        id: 'test-2',
        chunks: [
          { word: "島村", mora: 4 },
          { word: "卯月", mora: 3 },
        ]
      },
      {
        id: 'test-3',
        chunks: [
          { word: "本田", mora: 3 },
          { word: "未央", mora: 2 }
        ]
      }
    ];
    
    const result = buildSenryu(senryuWords);
    
    expect(result.upperPart).toEqual([
      { word: "渋谷", mora: 3 },
      { word: "凛", mora: 2 }
    ]);
    
    expect(result.middlePart).toEqual([
      { word: "島村", mora: 4 },
      { word: "卯月", mora: 3 },
    ]);
    
    expect(result.lowerPart).toEqual([
      { word: "本田", mora: 3 },
      { word: "未央", mora: 2 }
    ]);
  });

  it('should build incomplete senryu when given senryuWords cannot form perfect 575', () => {
    const senryuWords: SenryuWord[] = [
      {
        id: 'test-1',
        chunks: [
          { word: "宮本", mora: 4 },
          { word: "フレデリカ", mora: 5 }
        ]
      },
      {
        id: 'test-2',
        chunks: [
          { word: "かわいいね", mora: 5 }
        ]
      }
    ];
    
    const result = buildSenryu(senryuWords);
    
    // Upper part exceeds 5 mora
    expect(result.upperPart).toEqual([
      { word: "宮本", mora: 4 },
      { word: "フレデリカ", mora: 5 }
    ]);
    
    // Middle part less than 7 mora
    expect(result.middlePart).toEqual([
      { word: "かわいいね", mora: 5 },
    ]);
    
    // Lower part empty
    expect(result.lowerPart).toEqual([]);
  });
}); 