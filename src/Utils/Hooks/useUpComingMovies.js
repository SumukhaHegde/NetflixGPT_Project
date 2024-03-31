import { useDispatch } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addNowPlayingMovies, addUpComingMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const upComingMoviesData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=4",
      apiOptions
    );
    const upComingMoviesDataJson = await upComingMoviesData.json();
    dispatch(addUpComingMovies(upComingMoviesDataJson.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
