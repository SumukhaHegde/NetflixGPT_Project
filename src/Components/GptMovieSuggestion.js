import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { gptMovieNames, tmdbMovieDeails } = useSelector(
    (store) => store.gptSearch
  );
  if (!gptMovieNames) return null;
  return (
    <div className="bg-black opacity-90 static">
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={tmdbMovieDeails[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
