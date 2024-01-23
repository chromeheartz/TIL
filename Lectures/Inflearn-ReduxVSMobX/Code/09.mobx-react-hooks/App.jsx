import React, { useCallback } from "react";
import { userStore, postStore } from "./store";
import { useLocalStore, useObserver } from "mobx-react";

const App = () => {
  const state = useLocalStore(() => ({
    name: "",
    password: "",
    onChangeName(e) {
      this.state.name = e.target.value;
    },

    onChangePassword(e) {
      this.state.password = e.target.value;
    },
  }));
  const onLogIn = useCallback(() => {
    userStore.logIn({
      nickname: "bibi",
      password: "비밀번호",
    });
  }, []);

  const onLogOut = useCallback(() => {
    userStore.logOut();
  }, []);
  return useObserver(() => (
    <div>
      {userStore.isLoggingIn ? (
        <div>로그인 중</div>
      ) : userStore.data ? (
        <div>{userStore.data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!userStore.data ? (
        <button onClick={onLogIn}>로그인</button>
      ) : (
        <button onClick={onLogOut}>로그아웃</button>
      )}
      <div>{postStore.data.length}</div>
      <input value={state.name} onChange={state.onChangeName} />
      <input
        value={state.password}
        type="password"
        onChange={state.onChangePassword}
      />
    </div>
  ));
};

export default App;
