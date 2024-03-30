import React, { useEffect } from "react";
import { apiOptions } from "../Utils/Constant/apiOptions";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../Utils/Store/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieOfficialTrailer = useSelector(
    (store) => store.moviesList?.movieTrailer
  );
  console.log(movieId);
  const getMovieTrailers = async () => {
    const movieTrailersData = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      apiOptions
    );

    const movieTrailersDataJson = await movieTrailersData.json();
    // console.log(movieTrailersDataJson);
    const movieTrailers = movieTrailersDataJson.results.filter(
      (video) => video.name === "Official Trailer"
    );

    const movieTrailer = movieTrailers.length
      ? movieTrailers
      : movieTrailersDataJson.results[0];
    console.log(movieTrailer);

    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    getMovieTrailers();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          movieId +
          "?si=KJAOsQpEU0c0U6va?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
