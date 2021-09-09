import {uiActions} from "./ui-slice";

export const toggleSongsList = () => {
  return (dispatch) => {
    dispatch(uiActions.toggleSongsList());
  }
}