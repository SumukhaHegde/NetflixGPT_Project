import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { displayVideoPopup } from "../Utils/Store/videoPopupSlice";
import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../Utils/Constant/apiOptions";
import "./moviePopup.css";
import { FcFlashOn, FcLike } from "react-icons/fc";
import { Route } from "react-router-dom";

const VideoPopupModal = () => {
  const dispatch = useDispatch();
  const [videoKey, setVideoKey] = useState(null);
  const [videoDetails, setVideoDetails] = useState();

  const videoPopup = useSelector((store) => store.videoPopup);
  const closePopup = () => {
    dispatch(
      displayVideoPopup({
        videoId: null,
        isVideoPlaying: false,
      })
    );
  };

  const playMovie = () => {};

  const getVideoDetails = async () => {
    const videoData = await fetch(
      "https://api.themoviedb.org/3/movie/" + videoPopup.popup.videoId,
      apiOptions
    );
    const videoDetails = await videoData.json();
    setVideoDetails(videoDetails);
  };

  const getVideoId = async () => {
    const videoData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoPopup.popup.videoId +
        "/videos",
      apiOptions
    );
    const videoDataJson = await videoData.json();
    let trailers = videoDataJson.results.filter(
      (result) => result.type === "Trailer"
    );
    setVideoKey(trailers[0].key);
  };
  useEffect(() => {
    getVideoDetails();
  }, []);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    getVideoId();
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  console.log(videoDetails);

  return (
    <>
      {videoDetails && (
        <div>
          <div className="modal-container">
            <RxCross2 className="close-popup" onClick={closePopup} />
          </div>
          <div className="video-popup">
            <iframe
              className="iframe"
              width="100%"
              height="400"
              src={"https://www.youtube.com/embed/" + videoKey}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="video-header-controls">
              <h1 className="video-title">
                Name : {videoDetails.original_title}
              </h1>
              <button className="watch-btn" onClick={playMovie}>
                Watch Movie
              </button>
            </div>
            <p className="video-description">Title : {videoDetails.overview}</p>
            <div className="video-genres">
              <span>
                Type :
                {videoDetails.genres.map((genre) => genre.name).join(", ")}
              </span>
              <span>Released on : {videoDetails.release_date}</span>
              <span className="video-popularity">
                Popularity : {videoDetails.popularity} <FcLike />
              </span>
              <span className="vote-count">
                Total Vote : {videoDetails.vote_count} <FcFlashOn />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopupModal;
