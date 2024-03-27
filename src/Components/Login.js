import React, { useState } from "react";
import { NETFLIX_LOGO } from "../Utils/Images";
import { Link } from "react-router-dom";
import { LOGIN_PAGE_BACKGROUND_IMG } from "../Utils/Images";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInHandle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="text-white">
      <div className="absolute py-2 px-4 z-10">
        <img className="w-60" src={NETFLIX_LOGO} alt="Netflix Logo" />
      </div>
      <div className="absolute">
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt="BackGround Image" />
      </div>

      <form className="absolute bg-black w-3/12 mx-auto my-48 right-0 left-0">
        <h1 className="p-2 m-4 ml-6 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 m-4 ml-6 w-10/12"
            type="text"
            placeholder="User Name"
          ></input>
        )}
        <input
          className="p-2 m-4 ml-6 w-10/12"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          className="p-2 m-4 ml-6 w-10/12"
          type="text"
          placeholder="Phone Number"
        ></input>
        <button className="p-2 m-4 ml-6 rounded-md bg-red-700 w-10/12">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={signInHandle} className="p-2 m-4 ml-6 cursor-pointer">
          {isSignIn
            ? "New to Netflix? Create a Account"
            : "Already user? Try Log In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
