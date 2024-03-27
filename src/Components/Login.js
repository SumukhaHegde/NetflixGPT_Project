import React from "react";
import { NETFLIX_LOGO } from "../Utils/Images";
import { LOGIN_PAGE_BACKGROUND_IMG } from "../Utils/Images";

const Login = () => {
  return (
    <div>
      <div className="absolute top-2 left-16 bg-gradient-to-b from-black border-none">
        <img className="w-60" src={NETFLIX_LOGO} alt="Netflix Logo" />
      </div>
      <div className="w-full h-screen bg-cover bg-center relative">
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt="BackGround Image" />
      </div>
    </div>
  );
};

export default Login;
