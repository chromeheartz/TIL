import {
  all,
  call,
  fork,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
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
  yield take(LOG_IN);
  yield put({
    type: LOG_IN_SUCCESS,
  });
}

function* watchHello() {
  yield takeLatest(HELLO_SAGA, function* () {
    yield delay(1000);
    yield put({
      type: "BYE_SAGA",
    });
  });
}

export default function* userSaga() {
  yield all([watchHello(), watchLogin(), watchSignup()]);
}
