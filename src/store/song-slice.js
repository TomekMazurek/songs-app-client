import {createSlice} from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: "songsSlice",
    initialState: {
      songs: [],
      categories: [],
    },
    reducers: {
      addNewSong(state, action) {
        const newSong = action.payload;
        state.songs.push({...newSong});
      },
      updateSongs(state, action) {
        state.songs = action.payload;
      },
      voteForSong(state, action) {
        console.log(action.payload);
        const existingSong = state.songs.find(song => song.id === action.payload.id);
        if (existingSong) {
          existingSong.votes = action.payload.votes;
        }
      },
      fetchCategories(state, action) {
        state.categories = action.payload;
      }
    }
  }
);

export const songsActions = songSlice.actions;
export default songSlice;
