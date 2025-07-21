import { commons } from './commons';
import { idols } from './idols';
import type { SenryuWord } from '@/lib/types/senryu';

export const allSenryuWords: SenryuWord[] = [
  ...commons, ...idols
]