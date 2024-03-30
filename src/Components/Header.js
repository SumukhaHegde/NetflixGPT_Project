import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../Utils/Constant/Images";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Constant/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/Store/userSlice";

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
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute py-2 px-4 z-10 w-full bg-gradient-to-b from-black flex justify-between">
      <div>
        <img className="w-60" src={NETFLIX_LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="flex m-2 pt-4 w-2/12 pl-36">
          <img
            className="rounded-full"
            src={user.photoURL}
            alt="userprofilepicture"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white font-bold rounded-lg h-10 p-2 mt-3"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
