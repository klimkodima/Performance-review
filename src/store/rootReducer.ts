import { combineReducers } from 'redux';
import appReducer from './App/reducer';
import auditorsReducer from './Auditors/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auditors: auditorsReducer
});

export default rootReducer;
