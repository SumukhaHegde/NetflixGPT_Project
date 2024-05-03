import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[400px] left-32 text-white ">
      <h1 className="text-sm sm:text-xl md:text-4xl font-bold mb-4 xsm:text-sm">
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
