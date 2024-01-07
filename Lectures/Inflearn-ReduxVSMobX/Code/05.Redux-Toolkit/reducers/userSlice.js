const { createSlice } = require("@reduxjs/toolkit");
const { logIn } = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
  email: '',
  password: '',
  data: null,
  prices: Array(100).fill().map((v, i) => (i + 1) * 100)
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state, action) => {
        state.data = null;
        state.isLoggingIn = true;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoggingIn = false;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

module.exports = userSlice;
