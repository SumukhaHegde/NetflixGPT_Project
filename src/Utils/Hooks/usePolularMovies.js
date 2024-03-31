import { useDispatch } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addPopularMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const popularMoviesData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      apiOptions
    );
    const popularMoviesDataJson = await popularMoviesData.json();
    dispatch(addPopularMovies(popularMoviesDataJson.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
