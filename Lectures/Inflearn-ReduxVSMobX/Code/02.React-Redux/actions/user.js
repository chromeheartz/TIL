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

module.exports = {
  logIn,
  logOut,
};
