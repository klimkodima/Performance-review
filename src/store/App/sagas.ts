import { delay, takeLatest, put } from 'redux-saga/effects';
import { fetchPageLevel, setPageLevel } from './reducer';

function* getPageLevel() {
  yield delay(1000);
  yield put(setPageLevel('auditor'));
}

export function* appSaga(): Generator {
  yield takeLatest(fetchPageLevel.type, getPageLevel);
}
