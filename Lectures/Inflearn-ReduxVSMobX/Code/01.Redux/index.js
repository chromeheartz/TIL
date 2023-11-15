const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        compA: action.data,
        compB: 12,
        compC: null,
      };
  }
};
const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

console.log("1st", store.getState());

const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());
