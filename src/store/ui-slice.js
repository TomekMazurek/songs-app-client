import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    showSongsList: false,
    activeSong: {},
    playVideo: false
  },
  reducers: {
    setActiveSong(state, action) {
      state.activeSong = action.payload;
    },
    toggleSongsList(state) {
      state.showSongsList = !state.showSongsList;
    },
    setPlayVideo(state, action) {
      state.playVideo = action.payload;
    }
  }
});

export default uiSlice;
export const uiActions = uiSlice.actions;
