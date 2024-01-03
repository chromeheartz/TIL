import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const { logIn } = require("./actions/user");
const { addPost } = require("./actions/post");
const userSlice = require("./reducers/userSlice");

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = useCallback(async () => {
    // dispatch(
    //   logIn({
    //     id: "bibi",
    //     password: "비밀번호",
    //   })
    // );
    await axios.post("/login");
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

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.password);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        userSlice.actions.setLoginForm({
          email,
          password,
        })
      );
    },
    [dispatch, email, password]
  );

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
      <form onSubmit={onSubmit}>
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={password} onChange={onChangePassword} />
      </form>
    </div>
  );
};

export default App;
