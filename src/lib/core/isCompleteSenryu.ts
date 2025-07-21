import { calculateTotalMora } from "./calculateTotalMora";
import type { Senryu } from "../types/senryu";

export const isCompleteSenryu = (senryu: Senryu): boolean => {
  return (
    calculateTotalMora(senryu.upperPart) === 5 &&
    calculateTotalMora(senryu.middlePart) === 7 &&
    calculateTotalMora(senryu.lowerPart) === 5
  );
}; 