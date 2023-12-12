const { produce } = require("immer");

const initialState = {
  isLoggingIn: false,
  data: null,
};

// nextState = produce(prevState, (draft) => {})

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case "LOG_IN_SUCCESS":
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case "LOG_IN_FAILURE":
        draft.data = null;
        draft.isLoggingIn = false;
      case "LOG_OUT":
        draft.data = null;
      default:
        return prevState;
    }
  });
};

module.exports = userReducer;
