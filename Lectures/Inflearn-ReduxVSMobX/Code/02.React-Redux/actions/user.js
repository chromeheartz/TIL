const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest(data)); // action creator
    setTimeout(() => {
      dispatch(
        logInSuccess({
          userId: 1,
          nickname: "bibiboy",
        })
      );
    }, 2000);
  };
};

const logInRequest = (data) => {
  // action creator
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = () => {
  // action creator
  return {
    type: "LOG_IN_SUCCESS",
  };
};

const logIn = (data) => {
  // action creator
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

module.exports = {
  logIn,
  logOut,
};
