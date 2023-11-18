const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};
const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("changed");
});

const logIn = (data) => {
  return {
    // action
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    // action
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

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
