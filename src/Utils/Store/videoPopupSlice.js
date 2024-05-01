import { createSlice } from "@reduxjs/toolkit";

const videoPopupSlice = createSlice({
  name: "videoPopup",
  initialState: {
    popup: {
      videoId: null,
      isVideoPlaying: false,
    },
  },
  reducers: {
    displayVideoPopup: (state, action) => {
      state.popup = action.payload;
    },
  },
});

export const { displayVideoPopup } = videoPopupSlice.actions;
export default videoPopupSlice.reducer;
