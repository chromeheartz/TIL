import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App {
  onClick = () => {
    this.props.dispatchLogIn({
      id: "bibi",
      password: "password",
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut();
  };

  render() {
    const { user } = this.props;
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
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
});

const mapDispatchToProps = () => ({
  dispatchLogin: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
