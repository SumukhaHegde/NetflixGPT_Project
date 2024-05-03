import React, { useEffect, useRef, useState } from "react";
import { NETFLIX_LOGO } from "../Utils/Constant/Images";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Helper/firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addUser, removeUser } from "../Utils/Store/userSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderHide from "./HeaderHide";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate(null);
  const params = useParams();
  const dispatch = useDispatch();
  const [headerhide, setHeaderHide] = useState(true);
  const imgRef = useRef();

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
        if (window.location.href.includes("undefined")) navigate("/home");
        window.location.href.includes("home")
          ? navigate("/home")
          : navigate("/watch/" + params.key);
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
    <div className="absolute pt-2 px-4 z-10 w-full bg-gradient-to-b from-black flex flex-col md:flex-row justify-between xsm:h-[95px]">
      <Link to="/">
        <img
          className="w-40 sm:w-48 contrast-200"
          src={NETFLIX_LOGO}
          alt="logo"
        />
      </Link>
      {user && (
        <div className="relative flex place-items-center justify-center">
          <RxHamburgerMenu size={28} color="white" />

          <img
            ref={imgRef}
            className="h-10 w-10 ml-1 mr-24 sm:h-12 sm:w-12 rounded-lg cursor-pointer contrast-200"
            src="https://occ-0-4023-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229"
            alt="userLogo"
            onClick={() => setHeaderHide(!headerhide)}
          />

          <div
            className={
              headerhide
                ? "invisible opacity-0 scale-50 transition-all"
                : "inline-block opacity-100 scale-100 transition-all"
            }
          >
            <HeaderHide setHeaderHide={setHeaderHide} imgRef={imgRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
