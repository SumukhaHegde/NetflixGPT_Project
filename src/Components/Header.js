import React from "react";
import { NETFLIX_LOGO } from "../Utils/Images";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate(null);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute py-2 px-4 z-10 w-full bg-gradient-to-b from-black flex justify-between">
      <div>
        <img className="w-60" src={NETFLIX_LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="flex m-2 p-4">
          <img className="px-4" src={user.photoURL} alt="userprofilepicture" />
          <button className="bg-red-700 text-white font-bold rounded-lg h-10 p-2">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
