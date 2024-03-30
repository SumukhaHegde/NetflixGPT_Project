import { useDispatch } from "react-redux";
import { apiOptions } from "../Constant/apiOptions";
import { addNowPlayingMovies } from "../Store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const nowPlayingData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      apiOptions
    );
    const nowPlayingJson = await nowPlayingData.json();
    dispatch(addNowPlayingMovies(nowPlayingJson.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
