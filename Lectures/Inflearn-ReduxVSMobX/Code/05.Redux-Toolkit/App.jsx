import React, { useMemo } from "react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit"; // reselect

const { logIn } = require("./actions/user");
const { addPost } = require("./actions/post");
const userSlice = require("./reducers/userSlice");

const userSelector = (state) => state.user;
const pricesSelector = (state) => state.user.prices;
const sumPriceSelector = createSelector(pricesSelector, (prices) =>
  prices.reduce((a, c) => a + c, 0)
);

const App = () => {
  const user = useSelector(userSelector);
  // const prices = useSelector((state) => state.user.prices);
  const totalPrices = useSelector(sumPriceSelector);
  console.log(totalPrices);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // loading, error, done

  // const [isLogInLoading, setIsLogInLoading] = useState(false);
  // const [isLogInError, setIsLogInError] = useState(false);
  // const [isLogInDone, setIsLogInDone] = useState(false);

  // const [isLogOutLoading, setIsLogOutLoading] = useState(false);
  // const [isLogOutError, setIsLogOutError] = useState(false);
  // const [isLogOutDone, setIsLogOutDone] = useState(false);

  // const [isJoinLoading, setIsJoinLoading] = useState(false);
  // const [isJoinError, setIsJoinError] = useState(false);
  // const [isJoinDone, setIsJoinDone] = useState(false);

  // loadings, errors, dones
  const [loadings, setLoadings] = useState({});
  const [errors, setErrors] = useState({});
  const [dones, setDones] = useState({});

  const [loadingIds, setLoadingIds] = useState([]);

  const onClick = useCallback(async () => {
    // dispatch(
    //   logIn({
    //     id: "bibi",
    //     password: "비밀번호",
    //   })
    // );
    const id = new Date().valueOf();
    setLoadings((prev) => ({
      ...prev,
      [id]: { type: "LOGIN_LOADING" },
    }));
    setLoadingIds((prev) => prev.concat(id));
    try {
      const response = await axios.post("/login");
      setDones(true);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoadings(false);
    }
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

  // const totalPrice = useMemo(() => {
  //   console.log("memo");
  //   return prices.reduce((a, c) => a + c, 0);
  // }, [prices]);

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
      {/* <div><b>{totalPrice}원</b></div> */}
      <div>
        <b>{totalPrices}원</b>
      </div>
    </div>
  );
};

export default App;
