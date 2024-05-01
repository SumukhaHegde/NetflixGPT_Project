import React, { useState } from "react";
import { MOVIE_POSTER_URL } from "../Utils/Constant/Images";
import { useDispatch } from "react-redux";
import { displayVideoPopup } from "../Utils/Store/videoPopupSlice";
import "./movieCards.css";

const MovieCards = ({ posterId, videoId }) => {
  const dispatch = useDispatch();
  const playVideo = () => {
    dispatch(
      displayVideoPopup({
        videoId: videoId,
        isVideoPlaying: true,
      })
    );
  };
  if (!posterId) return;
  return (
    <div className="movie-poster">
      <img
        src={MOVIE_POSTER_URL + posterId}
        onClick={() => {
          playVideo();
        }}
      />
    </div>
  );
};

export default MovieCards;
