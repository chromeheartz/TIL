const { combineReducers } = require("redux");
const userSlice = require("./userSlice");
const postSlice = require("./postSlice");

module.exports = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
  // loading: loadingSlice.reducer,
  // error: errorSlice.reducer,
  // done: doneSlice.reducer
});
