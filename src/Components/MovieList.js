import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl text-white py-6">{title}</h1>
      <div className="flex overflow-x-scroll ">
        {/*use this to hide the scroll bar "scrollbar-hide md:scrollbar-default"*/}
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterId={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
