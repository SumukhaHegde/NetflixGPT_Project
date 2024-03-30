import useNowPlayingMovies from "../Utils/Hooks/useNowplayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const HomePage = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default HomePage;
