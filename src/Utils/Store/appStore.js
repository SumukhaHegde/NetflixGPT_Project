import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesListReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import videoPopupReducer from "./videoPopupSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    moviesList: moviesListReducer,
    gptSearch: gptReducer,
    videoPopup: videoPopupReducer,
  },
});

export default appStore;
