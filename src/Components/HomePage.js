import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Utils/Hooks/useNowplayingMovies";
import usePopularMovies from "../Utils/Hooks/usePolularMovies";
import useTopRatedMovies from "../Utils/Hooks/useTopRatedMovies";
import useUpComingMovies from "../Utils/Hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";

const HomePage = () => {
  const gptSearch = useSelector((store) => store.gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  // useLatestMovies();
  return (
    <div>
      <Header />
      {gptSearch.isGptSearchPage ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default HomePage;
