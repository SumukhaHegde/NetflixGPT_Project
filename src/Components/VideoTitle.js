import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pl-36 pt-96">
      <h1 className="font-bold text-3xl mb-4">{title}</h1>
      <p className="w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-700 py-4 px-10 mr-4 mt-6 hover:opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-700 py-4 px-10 hover:opacity-80">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
