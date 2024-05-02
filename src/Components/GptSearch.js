import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSlice, setGptSearchPage } from "../Utils/Store/gptSlice";

const GptSearch = () => {
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gptSearch);

  const handleGptSearch = () => {
    dispatch(setGptSearchPage());
    dispatch(clearSlice());
  };

  return (
    <div className="items-center flex">
      <button
        className="bg-purple-700 p-2 text-white font-bold rounded-lg xsm:p-2 xsm:m-0 xsm:text-[10px]"
        onClick={handleGptSearch}
      >
        {gptSearch.isGptSearchPage ? "Home Page" : "GPT Search"}
      </button>
    </div>
  );
};

export default GptSearch;
