const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data)); // action creator
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "bibiboy",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

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

const logOut = () => {
  return {
    // action
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};
