import React from "react";
import { MOVIE_POSTER_URL } from "../Utils/Constant/Images";

const MovieCards = ({ posterId }) => {
  return (
    <div>
      <img className="max-w-48 pr-3" src={MOVIE_POSTER_URL + posterId} />
    </div>
  );
};

export default MovieCards;
