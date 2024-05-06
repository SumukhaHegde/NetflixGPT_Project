import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { displayVideoPopup } from "../Utils/Store/videoPopupSlice";
import { apiOptions } from "../Utils/Constant/apiOptions";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [videoKey, setVideoKey] = useState(null);

  const playMovie = () => {
    navigate("/watch/" + videoKey);
  };

  const displayMovieDetails = () => {
    dispatch(
      displayVideoPopup({
        videoId: movieId,
        isVideoPlaying: true,
      })
    );
    console.log(movieId);
  };
  const getVideoId = async () => {
    const videoData = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      apiOptions
    );
    const videoDataJson = await videoData.json();
    let trailers = videoDataJson?.results?.filter(
      (result) => result.type === "Trailer"
    );
    setVideoKey(trailers[0].key);
  };
  useEffect(() => {
    getVideoId();
  }, []);
  return (
    <div className="absolute md:top-[400px] md:left-32 text-white sm:top-[300px] sm:left-20 mbl:top-[200px] mbl:left-14 xsm:top-[150px] xsm:left-8">
      <h1 className="text-sm sm:text-2xl md:text-4xl font-bold mb-4 xsm:text-sm md:mb-1 mbl:text-xl xsm:mb-0">
        {title}
      </h1>
      <p className="w-1/4 hidden lg:inline-block text-[15px]">{overview}</p>
      <div className="text-black">
        <button
          className="bg-white py-2  mr-4 md:mt-2 hover:opacity-80 rounded-lg px-2 lg:px-6 lg:py-3 md:px-6 md:py-2 sm:text-[20px] sm:px-3 sm:py-1 xsm:text-[10px] xsm:py-1 xsm:px-3 xsm:mt-0"
          onClick={playMovie}
        >
          ▷ Play
        </button>
        <button
          className="hidden md:inline-block bg-gray-500 py-4 px-10 hover:opacity-80 rounded-lg xlg:h-5 xlg:px-10 xlg:py-5 sm:text-[20px] lg:px-6 lg:py-3 md:px-6 md:py-2 sm:px-3 sm:py-1  xsm:text-[10px] xsm:py-1 xsm:px-3 xsm:mt-0"
          onClick={displayMovieDetails}
        >
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
