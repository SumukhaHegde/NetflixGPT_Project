import { useDispatch } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addTopRatedMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const topRatedData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      apiOptions
    );
    const topRatedDataJson = await topRatedData.json();
    dispatch(addTopRatedMovies(topRatedDataJson.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
