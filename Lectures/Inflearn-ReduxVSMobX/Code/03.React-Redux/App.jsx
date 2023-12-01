import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./actions/user";

const App = () => {
  const user = useSelector(() => {});
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
      <button onClick={onClick}>Hello React-Redux</button>
    </div>
  );
};

export default App;
