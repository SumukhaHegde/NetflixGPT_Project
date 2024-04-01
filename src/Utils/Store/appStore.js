import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesListReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    moviesList: moviesListReducer,
    gptSearch: gptReducer,
  },
});

export default appStore;
