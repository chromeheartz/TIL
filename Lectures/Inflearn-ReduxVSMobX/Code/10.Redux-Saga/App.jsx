import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./actions/user";

const App = () => {
  const user = useSelector((state) => state);
  console.log(user);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(logInRequest(data)); // action creator
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "bibiboy",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, []);
  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div> // 로그인 중
      ) : user.data ? (
        <div>{user.data.nickname}</div> // 로그인 후
      ) : (
        "로그인 해주세요" // 로그인 전
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};

export default App;
