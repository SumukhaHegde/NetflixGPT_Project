import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addNowPlayingMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.moviesList.nowPlayingMovies
  );

  const getMowPlayingMovies = async () => {
    const nowPlayingData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      apiOptions
    );
    const nowPlayingJson = await nowPlayingData.json();
    dispatch(addNowPlayingMovies(nowPlayingJson.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getMowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
