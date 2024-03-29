import {
  all,
  call,
  fork,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {}

function logger() {}

function* watchLogin() {
  try {
    yield call(logger);
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

function* login () {
  try {
    yield call(loginAPI);
    yield put({ //
      type: LOG_IN_SUCCESS,
    })
  } catch(e) {
    console.error(e);
    yield.put({
      type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login)
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
  yield all([fork(watchLogin)]);
}
