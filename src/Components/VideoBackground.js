import React, { useEffect } from "react";
import { apiOptions } from "../Utils/Constant/apiOptions";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../Utils/Store/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieOfficialTrailer = useSelector(
    (store) => store.moviesList?.movieTrailer
  );
  const getMovieTrailers = async () => {
    const movieTrailersData = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      apiOptions
    );

    const movieTrailersDataJson = await movieTrailersData.json();
    const movieTrailers = movieTrailersDataJson.results.filter(
      (video) => video.name === "Official Trailer"
    );

    const movieTrailer = movieTrailers.length
      ? movieTrailers[0]
      : movieTrailersDataJson.results[0];

    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    getMovieTrailers();
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieOfficialTrailer?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
