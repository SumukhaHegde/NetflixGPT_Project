import React, { useRef, useState } from "react";
import { NETFLIX_LOGO } from "../Utils/Images";
import { Link } from "react-router-dom";
import { LOGIN_PAGE_BACKGROUND_IMG } from "../Utils/Images";
import validateDetails from "../Utils/validateUserDetails";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signInHandle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButton = () => {
    const message = validateDetails(
      email.current.value,
      password.current.value
    );

    if (message) setErrorMessage(message);
    else {
      if (!isSignIn) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      }
    }
  };

  const removeErrorMessage = () => {
    setErrorMessage(null);
  };

  return (
    <div className="text-white">
      <div className="absolute py-2 px-4 z-10">
        <img className="w-60" src={NETFLIX_LOGO} alt="Netflix Logo" />
      </div>
      <div className="absolute">
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt="BackGround Image" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 mx-auto my-48 right-0 left-0 bg-opacity-60 rounded-lg text-white"
      >
        <h1 className="p-2 m-4 ml-6 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            onChange={removeErrorMessage}
            ref={userName}
            className="p-2 m-4 ml-6 w-10/12 bg-gray-500"
            type="text"
            placeholder="User Name"
          ></input>
        )}
        <input
          onChange={removeErrorMessage}
          ref={email}
          className="p-2 m-4 ml-6 w-10/12 bg-gray-500"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          onChange={removeErrorMessage}
          ref={password}
          className="p-2 m-4 ml-6 w-10/12 bg-gray-500"
          type="password"
          placeholder="Password"
        ></input>
        {errorMessage === null ? (
          <></>
        ) : (
          <p className="text-red-600 p-2 m-4 ml-6">{errorMessage}</p>
        )}

        <button
          onClick={handleButton}
          className="p-2 m-4 ml-6 rounded-md bg-red-700 w-10/12"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={signInHandle}
          className="p-2 mb-10 mt-4 ml-6 cursor-pointer"
        >
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already user? Try Log In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
