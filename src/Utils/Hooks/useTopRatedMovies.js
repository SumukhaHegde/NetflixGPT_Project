import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addTopRatedMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(
    (store) => store.moviesList.topRatedMovies
  );

  const getTopRatedMovies = async () => {
    const topRatedData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      apiOptions
    );
    const topRatedDataJson = await topRatedData.json();
    dispatch(addTopRatedMovies(topRatedDataJson.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
