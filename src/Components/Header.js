import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../Utils/Constant/Images";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Helper/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/Store/userSlice";
import GptSearch from "./GptSearch";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate(null);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    const unloadCallBack = (event) => {
      handleSignOut();
    };
    window.addEventListener("unload", unloadCallBack);

    return () => {
      window.removeEventListener("unload", unloadCallBack);
      unSubscribe();
    };
  }, []);

  return (
    <div className="absolute py-2 px-4 z-10 w-full bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <div>
        <img
          className="w-30 mx-auto h-12 md:mx-0 md:h-24 md:w-60"
          src={NETFLIX_LOGO}
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className="flex w-3/12 justify-evenly">
          <GptSearch />
          <div className="items-center flex pl-8">
            <img
              className="rounded-full w-16"
              src={user.photoURL}
              alt="userprofilepicture"
            />
          </div>
          <div className="items-center flex justify-between">
            <button
              onClick={handleSignOut}
              className="bg-red-700 text-white font-bold rounded-lg p-2 h-10"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
