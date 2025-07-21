import type { Senryu } from "../types/senryu";
import { calculateTotalMora } from "./calculateTotalMora";

export const isCompleteSenryu = (senryu: Senryu): boolean => {
  return (
    calculateTotalMora(senryu.upperPart) === 5 &&
    calculateTotalMora(senryu.middlePart) === 7 &&
    calculateTotalMora(senryu.lowerPart) === 5
  );
}; 