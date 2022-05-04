import { DateObject } from 'react-multi-date-picker';
import { setValueHandler } from './types';

export const setDatePeriod = (value: number, setValue: setValueHandler): void =>
  setValue([new DateObject().subtract(value, 'days'), new DateObject()]);
