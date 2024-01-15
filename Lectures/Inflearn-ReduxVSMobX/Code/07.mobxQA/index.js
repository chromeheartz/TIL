const { observable, autorun, runInAction, reaction } = require("mobx");

const userState = observable({
  isLogginIn: true,
  data: null,
});

const postState = observable([]);

postState.push({ id: 1, content: "hello world" });
userState.data = {
  id: 1,
  nickname: "bibi",
};

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

const change = action(() => {
  state.compA = "c";
});

runInAction(() => {
  state.compA = "b";
  state.compC = "c";
});

runInAction(() => {
  state.compA = "d";
});
