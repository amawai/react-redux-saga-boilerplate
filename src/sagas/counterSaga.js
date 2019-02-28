import { UPDATE_COUNTER, UPDATE_SUCCESS } from '../actions/counterActions';
import { put, takeEvery, delay, call} from 'redux-saga/effects';
import axios from 'axios';

/** function that returns an axios call */
function someApiFunction(args) {
  return axios.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    // data: args
  });
}

export function* incrementCounter(api, action) {
  yield delay(1000);
  // Call the api
  const apiResult = yield call(api, action.payload);
  console.log(apiResult.data)
  // Return a success and a payload to a reducer
  yield put({ type: UPDATE_SUCCESS, payload: action.payload });
}

export function* watchCounter() {
  yield takeEvery(UPDATE_COUNTER, incrementCounter, someApiFunction);
}