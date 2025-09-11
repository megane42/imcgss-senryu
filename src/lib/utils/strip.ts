import type { Chunk } from "@/lib/types/senryu";

const lstrip = (chunks: Chunk[]): Chunk[] =>
  chunks[0]?.mora === 0 ? lstrip(chunks.slice(1)) : chunks

const rstrip = (chunks: Chunk[]): Chunk[] =>
  chunks[chunks.length - 1]?.mora === 0 ? rstrip(chunks.slice(0, -1)) : chunks

export const strip = (chunks: Chunk[]): Chunk[] =>
  lstrip(rstrip(chunks))