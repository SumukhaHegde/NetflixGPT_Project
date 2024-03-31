import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesList",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    upComingMovies: null,
    topRatedMovies: null,
    latestMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpComingMovies,
  addTopRatedMovies,
  addLatestMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
