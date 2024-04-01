import useLatestMovies from "../Utils/Hooks/useLatestMovies";
import useNowPlayingMovies from "../Utils/Hooks/useNowplayingMovies";
import usePopularMovies from "../Utils/Hooks/usePolularMovies";
import useTopRatedMovies from "../Utils/Hooks/useTopRatedMovies";
import useUpComingMovies from "../Utils/Hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const HomePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  // useLatestMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default HomePage;
