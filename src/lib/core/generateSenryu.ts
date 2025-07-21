import { allSenryuWords } from "@/lib/constants/allSenryuWords";
import { buildSenryu } from "@/lib/core/buildSenryu";
import { calculateTotalMora } from "@/lib/core/calculateTotalMora";
import { isCompleteSenryu } from "@/lib/core/isCompleteSenryu";
import { shuffle } from "@/lib/utils/shuffle";
import type { Senryu, SenryuWord } from "@/lib/types/senryu";

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
