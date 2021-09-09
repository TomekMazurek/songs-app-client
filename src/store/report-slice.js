import {createSlice} from "@reduxjs/toolkit";

const reportSlice = createSlice(
  {
    name: "reportSlice",
    initialState: {
      type: 'all',
      songs: [],
      category: ''
    },
    reducers: {
      setType(state, action) {
        state.type = action.payload;
      },
      updateSongs(state, action) {
        state.songs = action.payload
      },
      setCategory(state, action) {
        state.category = action.payload;
      }
    }
  }
);

export const reportActions = reportSlice.actions;
export default reportSlice;
