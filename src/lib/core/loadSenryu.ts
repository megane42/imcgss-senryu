import { allSenryuWords } from "@/lib/constants/allSenryuWords";
import { buildSenryu } from "@/lib/core/buildSenryu";
import { isCompleteSenryu } from "@/lib/core/isCompleteSenryu";
import type { Senryu } from "@/lib/types/senryu";

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

  return {
    ...senryu,
    ids,
  };
}