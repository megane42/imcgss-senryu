import type { Chunk } from "@/lib/types/senryu";

export const calculateTotalMora = (chunks: Chunk[]): number => (
  chunks.reduce<number>(
    (total, chunk) => total + chunk.mora,
    0
  )
) 