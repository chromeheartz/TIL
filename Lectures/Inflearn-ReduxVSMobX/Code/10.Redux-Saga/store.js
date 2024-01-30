const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");
const { composeWithDevTools } = require("redux-devtools-extension");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
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

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
