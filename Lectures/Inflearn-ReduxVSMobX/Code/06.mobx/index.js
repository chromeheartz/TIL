const { observable, autorun, runInAction, reaction } = require("mobx");

const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
});

autorun(() => {
  console.log("changed", state.compA);
});

reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log("reaction", state.compB);
  }
);

runInAction(() => {
  state.compA = "b";
  state.compC = "c";
});

runInAction(() => {
  state.compA = "d";
});
