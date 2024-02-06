import { all, call, fork, take, takeLatest } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

function* helloSaga() {
  console.log("hello saga");
  yield take(HELLO_SAGA);
}

export default function* userSaga() {
  yield all([fork(watchLogin), helloSaga()]);
}
