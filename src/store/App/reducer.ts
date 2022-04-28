import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  pageLevel: string;
};

const initialState: initialStateType = {
  pageLevel: 'auditor'
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPageLevel(state, action: PayloadAction<string>) {
      state.pageLevel = action.payload;
    },
    fetchPageLevel(state) {
      state.pageLevel;
    }
  }
});

// Actions
export const { fetchPageLevel, setPageLevel } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
