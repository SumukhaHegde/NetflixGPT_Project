import React, { useEffect, useRef, useState } from "react";
import { NETFLIX_LOGO } from "../Utils/Constant/Images";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Helper/firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addUser, removeUser } from "../Utils/Store/userSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderHide from "./HeaderHide";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { setGptSearchPage } from "../Utils/Store/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate(null);
  const params = useParams();
  const dispatch = useDispatch();
  const [headerhide, setHeaderHide] = useState(true);
  const imgRef = useRef();
  const gptSearch = useSelector((store) => store.gptSearch.isGptSearchPage);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearchPage = () => {
    dispatch(setGptSearchPage());
    setHeaderHide(true);
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
    <div className="absolute pt-2 px-4 z-10 w-full bg-gradient-to-b from-black flex flex-row justify-between  items-center xsm:justify-between">
      <Link to="/">
        <img
          className="md:w-40 lg:w-48 contrast-200 sm:w-24 sm:h-16 msm:w-20 msm:h-16 xsm:w-14 xsm:h-10"
          src={NETFLIX_LOGO}
          alt="logo"
        />
      </Link>

      {user && (
        <div className="relative flex place-items-center justify-center lgmr-36 md:mr-32 sm:mr-[20px] msm:mr-[18px]">
          {/* <button
            className={
              gptSearch
                ? "w-28 h-10 font-normal border hover:border-gray-400 border-white rounded-md bg-gray-400/80 text-black  hover:bg-purple-600 hover:text-white active:bg-purple-950"
                : "w-28 h-10 font-normal border hover:border-gray-400 border-white rounded-md bg-gray-400/80 text-black  hover:bg-teal-600 hover:text-white active:bg-teal-950"
            }
            onClick={handleGptSearchPage}
          >
            {gptSearch ? "Home Page" : "Gpt Search"}
          </button> */}

          <img
            ref={imgRef}
            className="lg:h-12 lg:w-16 ml-5 mr-1 sm:w-8 sm:h-8 rounded-lg cursor-pointer contrast-200 mbl:w-8 msm:w-8 xsm:w-6"
            src="https://occ-0-4023-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229"
            alt="userLogo"
            onClick={() => setHeaderHide(!headerhide)}
          />
          {headerhide ? (
            <BiSolidUpArrow color="white" className="sm:w-4 lg:w-6 msm:w-2" />
          ) : (
            <BiSolidDownArrow color="white" className="sm:w-4 lg:w-6 msm:w-2" />
          )}

          <div
            className={
              headerhide
                ? "invisible opacity-0 scale-50 transition-all text-white"
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
