const { createStore } = require("redux");
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

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("changed");
});

console.log("init", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "bibiboy",
    admin: true,
  })
);

console.log("login", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "Hello Redux",
  })
);

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "Hello Redux02",
  })
);

console.log("addPost", store.getState());

store.dispatch(logOut());

console.log("logout", store.getState());
