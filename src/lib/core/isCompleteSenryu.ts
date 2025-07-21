import { calculateTotalMora } from "@/lib/core/calculateTotalMora";
import type { Senryu } from "@/lib/types/senryu";

export const isCompleteSenryu = (senryu: Senryu): boolean => {
  return (
    calculateTotalMora(senryu.upperPart) === 5 &&
    calculateTotalMora(senryu.middlePart) === 7 &&
    calculateTotalMora(senryu.lowerPart) === 5
  );
}; 