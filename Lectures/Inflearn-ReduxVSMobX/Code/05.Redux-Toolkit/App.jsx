import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const { logIn } = require("./actions/user");
const { addPost } = require("./actions/post");
const userSlice = require("./reducers/userSlice");

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: "bibi",
        password: "비밀번호",
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(
      addPost({
        title: "새 게시글",
        content: "내용내용내용",
      })
    );
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
      <button onClick={onAddPost}>게시글 작성</button>
    </div>
  );
};

export default App;
