const { createSlice } = require("@reduxjs/toolkit");
const { logIn } = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...prevState,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        data: action.data,
        isLoggingIn: false,
      };
    case "LOG_IN_FAILURE":
      return {
        ...prevState,
        data: null,
        isLoggingIn: false,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [logIn.pending](state, action) {
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoggingIn = true;
    },
    [logIn.rejected](state, action) {
      state.data = null;
      state.isLogginIn = false;
    },
  },
});

module.exports = userSlice;
