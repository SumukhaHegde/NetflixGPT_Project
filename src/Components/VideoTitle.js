import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pl-36 pt-96 text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-3xl mb-4">{title}</h1>
      <p className="w-1/4">{overview}</p>
      <div className="text-black">
        <button className="bg-white py-4 px-10 mr-4 mt-6 hover:opacity-80 rounded-lg">
          ▷ Play
        </button>
        <button className="bg-gray-500 py-4 px-10 hover:opacity-80 rounded-lg">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
