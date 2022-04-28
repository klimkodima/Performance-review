import { RootStateType } from '../index';

export const selectAppPageLevel = (state: RootStateType): string =>
  state.app.pageLevel;
