import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    showSongsList: false
  },
  reducers: {
    toggleSongsList(state) {
      state.showSongsList = !state.showSongsList;
    }
  }
});

export default uiSlice;
export const uiActions = uiSlice.actions;
