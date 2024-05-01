import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import carousel from "../Components/Carousel/carousel.css";
import { doc } from "firebase/firestore";

const MovieList = ({ title, movies }) => {
  const [isleftHandleDisplayed, setIsLeftHandleDisplayed] = useState(false);

  const scrollHandle = (e) => {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target;
    } else {
      handle = e.target.closest(".handle");
    }
    if (handle !== null) onHandleClick(handle);
  };
  const onHandleClick = (handle) => {
    const progressBar = handle.closest(".row").querySelector(".progress-bar");
    const slider = handle
      .closest(".carousel-container")
      .querySelector(".carousel-slider");
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    const progressBarItemCount = progressBar.children.length;
    console.log(progressBarItemCount);

    if (handle.classList.contains("carousel-left")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[progressBarItemCount - 1].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex - 1].classList.add("active");
      }
    }

    if (handle.classList.contains("carousel-right")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[0].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1);

        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex + 1].classList.add("active");
      }
    }

    setIsLeftHandleDisplayed(true);
  };

  const progressBarCalculator = (progressBar) => {
    progressBar.innerHTML = "";
    const slider = progressBar
      .closest(".row")
      .querySelector(".carousel-slider");
    const itemCount = slider.children.length;
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--imgs-per-screen")
    );
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");
      if (sliderIndex === i) {
        barItem.classList.add("active");
      }
      progressBar.append(barItem);
    }
  };
  useEffect(() => {
    document.querySelectorAll(".progress-bar").forEach(progressBarCalculator);
  });

  return (
    <div className="row mb-8">
      <div className="header">
        <h1 className="font-bold text-3xl text-white">{title}</h1>
        <div className="progress-bar"></div>
      </div>
      <div className="flex carousel-container">
        {/*use this to hide the scroll bar "scrollbar-hide md:scrollbar-default"*/}
        {isleftHandleDisplayed ? (
          <button className="carousel-btn ">
            <div className=" handle carousel-left" onClick={scrollHandle}>
              &#8249;
            </div>
          </button>
        ) : (
          <div className="carousel-btn"></div>
        )}
        <div className="flex carousel-slider">
          {movies?.map((movie) => (
            <MovieCards
              key={movie.id}
              posterId={movie.poster_path}
              videoId={movie.id}
            />
          ))}
        </div>
        <button className="carousel-btn" onClick={scrollHandle}>
          <div className="handle carousel-right">&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
