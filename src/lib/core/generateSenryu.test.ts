import { describe, it, expect } from "vitest";
import { generateSenryu } from "./generateSenryu";
import type { Senryu } from "../types/senryu";

const calcMora = (chunks: { mora: number }[]) =>
  chunks.reduce((sum, c) => sum + c.mora, 0);

describe("generateSenryu", () => {
  for (let i = 1; i <= 100; i++) {
    it(`should generate a valid senryu with 5-7-5 mora (trial: ${i})`, () => {
      const senryu: Senryu = generateSenryu();
      console.log(
        `[trial: ${i}]
        ${JSON.stringify(senryu.upperPart)}
        ${JSON.stringify(senryu.middlePart)}
        ${JSON.stringify(senryu.lowerPart)}
        `);
      expect(calcMora(senryu.upperPart)).toBe(5);
      expect(calcMora(senryu.middlePart)).toBe(7);
      expect(calcMora(senryu.lowerPart)).toBe(5);
    });
  }
});
