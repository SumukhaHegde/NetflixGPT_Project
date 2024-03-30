import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesListReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    moviesList: moviesListReducer,
  },
});

export default appStore;
