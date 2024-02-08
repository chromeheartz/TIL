import { all, call, fork, take, takeLatest } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {}

function* watchLogin() {
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

function* watchHello() {
  console.log("before saga");
  for (let i = 0; i < 5; i++) {
    yield take(HELLO_SAGA);
    console.log("hello saga");
  }
}

export default function* userSaga() {
  yield all([watchHello(), watchLogin(), watchSignup()]);
}
