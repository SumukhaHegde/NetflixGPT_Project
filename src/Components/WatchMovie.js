import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./watchPage.css";

const WatchMovie = () => {
  const params = useParams();
  const movieKey = params.key;
  return (
    <div>
      <Header />
      <div className="watch-page-container">
        <iframe
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/" + movieKey}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchMovie;
