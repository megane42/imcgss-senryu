import type { Senryu, SenryuWord } from "../types/senryu";
import { shuffle } from "../utils/shuffle";
import { allSenryuWords } from "../constants/allSenryuWords";
import { buildSenryu } from "./buildSenryu";
import { calculateTotalMora } from "./calculateTotalMora";
import { isCompleteSenryu } from "./isCompleteSenryu";

const isOverload = (senryu: Senryu): boolean => {
  return (
    calculateTotalMora(senryu.upperPart) > 5 ||
    calculateTotalMora(senryu.middlePart) > 7 ||
    calculateTotalMora(senryu.lowerPart) > 5
  )
}

export const generateSenryu = (): Senryu => {
  do {
    const candidates: SenryuWord[] = []

    for (const currentSenryuWord of shuffle(allSenryuWords)) {
      candidates.push(currentSenryuWord)
      const senryu = buildSenryu(candidates)

      if (isOverload(senryu)) {
        candidates.pop()
        continue
      }

      if (isCompleteSenryu(senryu)) {
        return senryu
      }
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
}
