import { calculateTotalMora } from "./calculateTotalMora";
import type { Senryu, SenryuWord } from "../types/senryu";

export const buildSenryu = (senryuWords: SenryuWord[]): Senryu => {
  const chunks = senryuWords.map(c => c.chunks).flat()

  const upperPart:  Senryu["upperPart"] = []
  const middlePart: Senryu["middlePart"] = []
  const lowerPart:  Senryu["lowerPart"] = []

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
