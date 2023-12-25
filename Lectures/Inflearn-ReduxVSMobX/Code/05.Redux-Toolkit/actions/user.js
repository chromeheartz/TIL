const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
})

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  console.log(data);
  // const state = thunkAPI.getState();
  const result = await delay(500, {
    userId: 1,
    nickname: 'bibi',
  })
  return result;
  // data return
})

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const logInRequest = (data) => {
  // action creator
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const logInSuccess = (data) => {
  // action creator
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (data) => {
  return {
    type: LOG_IN_FAILURE,
    data,
  };
};

module.exports = {
  logIn,
};
