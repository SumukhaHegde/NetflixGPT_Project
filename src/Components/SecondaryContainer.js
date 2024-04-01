import React from "react";
import MovieCards from "./MovieCards";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.moviesList);
  if (!moviesList.nowPlayingMovies) return;
  return (
    <div className="bg-black">
      <div className="sm:mt-0 md:-mt-96 relative z-30 pl-4 md:ml-12">
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
