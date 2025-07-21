import type { Chunk, Senryu, SenryuWord } from "../types/senryu";
import { calculateTotalMora } from "./calculateTotalMora";

export const buildSenryu = (senryuWords: SenryuWord[]): Senryu => {
  const chunks = senryuWords.map(c => c.chunks).flat()
  
  let upperPart:  Senryu["upperPart"] = []
  let middlePart: Senryu["middlePart"] = []
  let lowerPart:  Senryu["lowerPart"] = []

  for (const chunk of chunks) {
    if (calculateTotalMora(upperPart) < 5) {
      upperPart.push(chunk)
    }
    else if (calculateTotalMora(middlePart) < 7) {
      middlePart.push(chunk)
    }
    else {
      lowerPart.push(chunk)
    }
  }

  return {
    upperPart,
    middlePart,
    lowerPart,
  }
} 