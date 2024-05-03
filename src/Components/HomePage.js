import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Utils/Hooks/useNowplayingMovies";
import usePopularMovies from "../Utils/Hooks/usePolularMovies";
import useTopRatedMovies from "../Utils/Hooks/useTopRatedMovies";
import useUpComingMovies from "../Utils/Hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import VideoPopupModal from "./VideoPopupModal";
import Confirm from "./confirm";

const HomePage = () => {
  const gptSearch = useSelector((store) => store.gptSearch);
  const videoPopup = useSelector((store) => store.videoPopup);
  const confirm = useSelector((store) => store.config?.confirm);

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
      {videoPopup.popup.isVideoPlaying && <VideoPopupModal />}
      {/* {confirm && (
        <div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
          <Confirm />
        </div>
      )} */}
    </div>
  );
};

export default HomePage;
