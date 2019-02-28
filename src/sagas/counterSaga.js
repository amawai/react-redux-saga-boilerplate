import { UPDATE_COUNTER, UPDATE_SUCCESS } from '../actions/counterActions';
import { put, takeEvery, delay} from 'redux-saga/effects';

export function* incrementCounter(action) {
  yield delay(1000);
  yield put({ type: UPDATE_SUCCESS, payload: action.payload });
}

export function* watchCounter() {
  yield takeEvery(UPDATE_COUNTER, incrementCounter);
}