const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const firstMiddleware = (store) => (next) => (action) => {
  console.log("액션 로깅", action);
  next(action);
  console.log("액션 끝", action);
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

module.exports = store;
