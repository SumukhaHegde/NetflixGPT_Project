import React, { useRef } from "react";
import { LOGIN_PAGE_BACKGROUND_IMG } from "../Utils/Constant/Images";
import { useDispatch } from "react-redux";
import { updatetmdbMovieDeails } from "../Utils/Store/gptSlice";
import openai from "../Helper/openai";
import { apiOptions } from "../Utils/Constant/apiOptions";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  const dispatch = useDispatch();
  const search = useRef();

  const getMoviesForGptResults = async (movie) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      apiOptions
    );
    const movieDataJson = await movieData.json();
    return movieDataJson.results;
  };

  const onSearch = async () => {
    const gptSearch =
      'Provide best movie recommendation for the " ' +
      search.current.value +
      '" with best rating with top 5 movies and should be seperated by comma without mention of numbering system as given in the example. Example don, don2, dhoom, dhoom2, dhoom3';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearch }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    const gptSearchResults = gptResults.choices[0]?.message?.content.split(",");

    const tmdbResult = gptSearchResults.map((movie) => {
      return getMoviesForGptResults(movie);
    });
    const tmdbResolvedResult = await Promise.all(tmdbResult);
    dispatch(
      updatetmdbMovieDeails({
        movieNames: gptSearchResults,
        tmdbMovies: tmdbResolvedResult,
      })
    );
  };

  return (
    <div>
      <div className="fixed w-screen">
        <img
          className="h-screen object-cover md: w-screen"
          src={LOGIN_PAGE_BACKGROUND_IMG}
        />
      </div>
      <div className="flex justify-center pt-[40%] sm:pt-[25%] md:pt-0 xsm:pt-[25%]">
        <div className=" w-10/12 p-0 md:p-52 ">
          <form
            className="grid grid-cols-12 bg-black opacity-85 p-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={search}
              className="p-2 rounded-md mx-2 col-span-10 bg-white"
              type="text"
              placeholder="What do you want to watch today?"
            ></input>
            <button
              className="rounded-lg text-xl bg-red-700 col-span-2 ml-3"
              onClick={onSearch}
            >
              Search
            </button>
          </form>
          <GptMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
