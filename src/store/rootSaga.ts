import { all } from 'redux-saga/effects';
import { appSaga } from './App';

export default function* rootSaga(): Generator {
  yield all([appSaga()]);
}
