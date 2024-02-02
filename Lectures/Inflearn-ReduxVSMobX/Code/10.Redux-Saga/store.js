const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");
const { composeWithDevTools } = require("redux-devtools-extension");
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("액션 로깅", action);
  next(action);
  console.log("액션 끝", action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const enhancer = compose(
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware, firstMiddleware, thunkMiddleware)
    : composeWithDevTools(
        applyMiddleware(sagaMiddleware, firstMiddleware, thunkMiddleware)
      )
);

const store = createStore(reducer, initialState, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
