import {configureStore} from "@reduxjs/toolkit";
import reportSlice from "./report-slice";
import songSlice from "./song-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    reports: reportSlice.reducer,
    ui: uiSlice.reducer
  }
});

export default store;
