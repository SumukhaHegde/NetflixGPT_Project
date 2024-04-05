import React from "react";
import { MOVIE_POSTER_URL } from "../Utils/Constant/Images";

const MovieCards = ({ posterId }) => {
  if (!posterId) return;
  return <img src={MOVIE_POSTER_URL + posterId} />;
};

export default MovieCards;
