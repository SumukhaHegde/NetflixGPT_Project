import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute px-6 pt-20 sm:pt-80 md:pl-36 md:pt-96 text-white bg-gradient-to-r from-black ">
      <h1 className="text-xl sm:text-2xl md:text-6xl font-bold mb-4">
        {title}
      </h1>
      <p className="w-1/4 hidden md:inline-block">{overview}</p>
      <div className="text-black">
        <button className="bg-white py-2 md:px-10 mr-4 md:mt-6 hover:opacity-80 rounded-lg md:py-4 px-2">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 py-4 px-10 hover:opacity-80 rounded-lg">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
