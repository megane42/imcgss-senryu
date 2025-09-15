import { allSenryuWords } from "@/lib/constants/allSenryuWords";
import { delimiter } from "@/lib/constants/delimiter";
import { buildSenryu } from "@/lib/core/buildSenryu";
import { calculateTotalMora } from "@/lib/core/calculateTotalMora";
import { isCompleteSenryu } from "@/lib/core/isCompleteSenryu";
import { shuffle } from "@/lib/utils/shuffle";
import type { Senryu, SenryuWord } from "@/lib/types/senryu";

const isOverCapacity = (senryu: Senryu): boolean => {
  return (
    calculateTotalMora(senryu.upperPart) > 5 ||
    calculateTotalMora(senryu.middlePart) > 7 ||
    calculateTotalMora(senryu.lowerPart) > 5
  )
}

const isInvalidSenryu = (senryu: Senryu): boolean => {
  return (
    (senryu.upperPart[0] && senryu.upperPart[0].word === "すき") ||
    (senryu.middlePart[0] && senryu.middlePart[0].word === "すき") ||
    (senryu.lowerPart[0] && senryu.lowerPart[0].word === "すき")
  )
}

export const generateSenryu = (): Senryu => {
  do {
    const candidates: SenryuWord[] = []

    for (const currentSenryuWord of shuffle(allSenryuWords)) {
      candidates.push(currentSenryuWord)
      candidates.push(delimiter)
      const senryu = buildSenryu(candidates)

      if (isOverCapacity(senryu)) {
        candidates.pop() // pop delimiter
        candidates.pop() // pop currentSenryuWord
        continue
      }

      if (isInvalidSenryu(senryu)) {
        candidates.pop() // pop delimiter
        candidates.pop() // pop currentSenryuWord
        continue
      }

      if (isCompleteSenryu(senryu)) {
        return senryu
      }
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
}
