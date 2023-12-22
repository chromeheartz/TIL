const { createSlice } = require("@reduxjs/toolkit");

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
  extraReducers: {},
});

module.exports = userSlice;
