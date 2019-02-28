import { watchCounter } from "./counterSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchCounter() /*, another saga here*/]);
}