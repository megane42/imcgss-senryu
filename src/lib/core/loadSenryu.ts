import { allSenryuWords } from "@/lib/constants/allSenryuWords";
import { buildSenryu } from "@/lib/core/buildSenryu";
import { isCompleteSenryu } from "@/lib/core/isCompleteSenryu";
import { delimiter, delimiterId } from "../constants/delimiter";
import type { Senryu, SenryuWord } from "@/lib/types/senryu";


const findSenryuWord = (id: string): SenryuWord | undefined => {
  if (id === delimiterId) {
    return delimiter;
  } else {
    return allSenryuWords.find(word => word.id === id);
  }
}

export class LoadSenryuError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LoadSenryuError';
  }
}

export const loadSenryu = (ids: string[]): Senryu => {
  const words = ids.map(id => {
    const found = findSenryuWord(id);
    if (!found) throw new LoadSenryuError(`SenryuWord with id '${id}' not found`);
    return found;
  });

  const senryu = buildSenryu(words);
  if (!isCompleteSenryu(senryu)) {
    throw new LoadSenryuError('Given SenryuWords are not enough to build a valid senryu');
  }

  return {
    ...senryu,
    ids,
  };
}