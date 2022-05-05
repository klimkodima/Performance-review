import { createSlice } from '@reduxjs/toolkit';

import { data } from '../../components/widgets/AuditorsStatistics/data';
import { IAuditorStatistics } from '../../components/widgets/AuditorsStatistics/types';

type initialStateType = {
  auditorsStatistics: IAuditorStatistics[];
};

const initialState: initialStateType = {
  auditorsStatistics: data
};

const auditorsSlice = createSlice({
  name: 'auditors',
  initialState,
  reducers: {}
});

const auditorsReducer = auditorsSlice.reducer;
export default auditorsReducer;
