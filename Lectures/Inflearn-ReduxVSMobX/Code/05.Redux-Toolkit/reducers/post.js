const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
  data: [],
};

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost(state, action) {
      state.data = [];
    },
  },
  extraReducers: {
    [addPost.pending](state, action) {}
    [addPost.fulfilled](state, action) {}
    [addPost.rejected](state, action) {}
  },
});

module.exports = postSlice;
