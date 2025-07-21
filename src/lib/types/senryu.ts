export type Chunk = {
  word: string;
  mora: number;
}

export type SenryuWord = {
  id: string;
  chunks: Chunk[];
}

export type Senryu = {
  upperPart: Chunk[];
  middlePart: Chunk[];
  lowerPart: Chunk[];
} 