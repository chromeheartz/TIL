const { observable, configure } = require("mobx");

configure({ enforceActions: "always" });

const userStore = observable({
  isLoggingIn: false,
  data: null,
  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      postStore.data.push(1);
    }, 2000);
  },
  logOut() {
    this.data = null;
  },
});

const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
  get postLength() {
    return this.data.length;
  },
  set post(value) {
    return (this.data = value);
  },
});

export { userStore, postStore };
