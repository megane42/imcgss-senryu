import { calculateTotalMora } from "@/lib/core/calculateTotalMora";
import { strip } from "@/lib/utils/strip";
import type { Senryu, SenryuWord } from "@/lib/types/senryu";

export const buildSenryu = (senryuWords: SenryuWord[]): Senryu => {
  const chunks = senryuWords.map(c => c.chunks).flat()

  const upperPart:  Senryu["upperPart"]  = []
  const middlePart: Senryu["middlePart"] = []
  const lowerPart:  Senryu["lowerPart"]  = []

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
    upperPart: strip(upperPart),
    middlePart: strip(middlePart),
    lowerPart: strip(lowerPart),
    ids: senryuWords.map(word => word.id),
  }
}
