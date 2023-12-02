import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./actions/user";

const App = () => {
  const user = useSelector((state) => state.user.data);
  console.log(user);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: "bibiboy",
        password: "password",
      })
    );
  }, []);
  return (
    <div>
      {user ? <div>{user.nickname}</div> : "로그인 해주세요"}
      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default App;
