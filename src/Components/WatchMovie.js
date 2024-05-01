import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const WatchMovie = () => {
  const params = useParams();
  const movieKey = params.key;
  return (
    <div>
      <Header />
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + movieKey}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchMovie;
