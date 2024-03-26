import React from "react";
import { NETFLIX_LOGO } from "../Utils/Images";
import { LOGIN_PAGE_BACKGROUND_IMG } from "../Utils/Images";

const Login = () => {
  return (
    <div>
      <div>
        <img src={NETFLIX_LOGO} alt="Netflix Logo" />
      </div>
      <div>
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt="BackGround Image" />
      </div>
    </div>
  );
};

export default Login;
