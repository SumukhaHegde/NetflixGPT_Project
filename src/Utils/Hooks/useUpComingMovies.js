import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addNowPlayingMovies, addUpComingMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector(
    (store) => store.moviesList.upComingMovies
  );
  const getUpComingMovies = async () => {
    const upComingMoviesData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=4",
      apiOptions
    );
    const upComingMoviesDataJson = await upComingMoviesData.json();
    dispatch(addUpComingMovies(upComingMoviesDataJson.results));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
