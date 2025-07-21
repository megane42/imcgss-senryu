import { commons } from './commons';
import { idols } from './idols';
import type { SenryuWord } from '../types/senryu';

export const allSenryuWords: SenryuWord[] = [
  ...commons, ...idols
]