import { Dispatch, SetStateAction } from 'react';
import type { Value } from 'react-multi-date-picker';

export type dateFilterValueType = Value;

export type HeaderTypes = {
  classes: string;
  text: string;
};

export type setValueHandler = Dispatch<SetStateAction<Value>>;

export type ButtonsGroupTypes = {
  classes: string;
  setValue: setValueHandler;
  position: string;
};
