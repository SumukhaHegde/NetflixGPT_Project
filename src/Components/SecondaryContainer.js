import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.moviesList);
  if (!moviesList.nowPlayingMovies) return;
  return (
    <div className="bg-black">
      <div className="sm:mt-0 md:-mt-80 relative z-30">
        <MovieList title={"Now Playing"} movies={moviesList.nowPlayingMovies} />

        <MovieList title={"Top Rated"} movies={moviesList.topRatedMovies} />
        <MovieList title={"Popular"} movies={moviesList.popularMovies} />
        {/* <MovieList title={"Latest"} movies={moviesList.latestMovies} /> */}
        <MovieList title={"Up Coming"} movies={moviesList.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
