import type { Chunk, Senryu, SenryuWord } from "../types/senryu";
import { shuffle } from "../utils/shuffle";
import { allSenryuWords } from "../constants/allSenryuWords";

const calculateTotalMora = (chunks: Chunk[]): number => (
  chunks.reduce<number>(
    (total, chunk) => total + chunk.mora,
    0
  )
)

const buildSenryu = (chunks: Chunk[]): Senryu => {
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

const isComplete = (senryu: Senryu): boolean => {
  return (
    calculateTotalMora(senryu.upperPart) === 5 &&
    calculateTotalMora(senryu.middlePart) === 7 &&
    calculateTotalMora(senryu.lowerPart) === 5
  )
}

const isInvalid = (senryu: Senryu): boolean => {
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

      const senryu = buildSenryu(candidates.map(c => c.chunks).flat())

      if (isInvalid(senryu)) {
        candidates.pop()
        continue
      }

      if (isComplete(senryu)) {
        return senryu
      }
    }
  } while (true)
}
