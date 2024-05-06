import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.moviesList?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[2];
  const { id, title, overview } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0 xsm:pt-[95px]">
      <VideoTitle title={title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
