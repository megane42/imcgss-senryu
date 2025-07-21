import { buildSenryu } from "./buildSenryu";
import { isCompleteSenryu } from "./isCompleteSenryu";
import { allSenryuWords } from "../constants/allSenryuWords";
import type { Senryu } from "../types/senryu";

export const loadSenryu = (ids: string[]): Senryu => {
  const words = ids.map(id => {
    const found = allSenryuWords.find(word => word.id === id);
    if (!found) throw new Error(`SenryuWord with id '${id}' not found`);
    return found;
  });

  const senryu = buildSenryu(words);
  if (!isCompleteSenryu(senryu)) {
    throw new Error('Given SenryuWords are not enough to build a valid senryu');
  }

  return senryu;
} 