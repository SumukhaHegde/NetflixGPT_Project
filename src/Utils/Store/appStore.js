import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesListReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import videoPopupReducer from "./videoPopupSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    moviesList: moviesListReducer,
    gptSearch: gptReducer,
    videoPopup: videoPopupReducer,
    config: configSlice,
  },
});

export default appStore;
