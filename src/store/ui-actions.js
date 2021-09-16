import {uiActions} from "./ui-slice";

export const toggleSongsList = () => {
  return (dispatch) => {
    dispatch(uiActions.toggleSongsList());
  }
}

export const setSongToDisplay = (song) => {
  return (dispatch) => {
    dispatch(uiActions.setActiveSong(song));
  }
}

export const setPlayVideo = (condition) => {
  return (dispatch) => {
    dispatch(uiActions.setPlayVideo(condition))
  }
}