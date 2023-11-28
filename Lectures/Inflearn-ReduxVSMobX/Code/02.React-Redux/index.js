const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: {
    isLoggingIn: true,
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

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

// store.subscribe(() => {
//   console.log("changed");
// });

// console.log("init", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "bibiboy",
    admin: true,
  })
);

console.log("login", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "Hello Redux",
//   })
// );

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 2,
//     content: "Hello Redux02",
//   })
// );

// console.log("addPost", store.getState());

// store.dispatch(logOut());

// console.log("logout", store.getState());
