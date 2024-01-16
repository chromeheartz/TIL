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
