import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addNowPlayingMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const useLatestMovies = () => {
  const dispatch = useDispatch();
  const latestMovies = useSelector((store) => store.moviesList.latestMovies);

  const getLatestMovies = async () => {
    const latestMoviesData = await fetch(
      "https://api.themoviedb.org/3/movie/latest",
      apiOptions
    );
    const latestMoviesDataJson = await latestMoviesData.json();
    dispatch(addNowPlayingMovies(latestMoviesDataJson.results));
  };

  useEffect(() => {
    !latestMovies && getLatestMovies();
  }, []);
};

export default useLatestMovies;
