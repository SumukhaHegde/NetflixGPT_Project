import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearchPage: false,
    gptMovieNames: null,
    tmdbMovieDeails: null,
  },
  reducers: {
    setGptSearchPage: (state, action) => {
      state.isGptSearchPage = !state.isGptSearchPage;
    },
    updategptSearchResults: (state, action) => {
      state.gptSearchResults = action.payload;
    },
    updatetmdbMovieDeails: (state, action) => {
      const { movieNames, tmdbMovies } = action.payload;
      state.gptMovieNames = movieNames;
      state.tmdbMovieDeails = tmdbMovies;
    },
    clearSlice: (state, action) => {
      state.gptMovieNames = null;
      state.tmdbMovieDeails = null;
    },
  },
});

export const {
  setGptSearchPage,
  updategptSearchResults,
  updatetmdbMovieDeails,
  clearSlice,
} = gptSlice.actions;
export default gptSlice.reducer;
