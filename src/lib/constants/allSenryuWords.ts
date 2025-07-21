import type { SenryuWord } from '../types/senryu';
import { commons } from './commons';
import { idols } from './idols';

export const allSenryuWords: SenryuWord[] = [
  ...commons, ...idols
]