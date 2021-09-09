import axios from "axios";
import {songsActions} from "./song-slice";
import baseUrl from "../config/index";

const api = axios.create({baseURL: `${baseUrl}/songs/`});

export const addNewSong = (song) => {
  return async (dispatch) => {
    await api.post('/', song, {headers: {'Content-Type': 'application/json'}})
      .then((response) => {
        console.log(response);
        dispatch(songsActions.addNewSong(song));
      })
      .catch((error) => console.log(error))
  }
};

export const voteForSong = (id) => {
  return async (dispatch) => {
    await api.put('/votes/' + id).then(res => {
      dispatch(songsActions.voteForSong(res.data));
    }).catch(error => {
      console.log(error)
    });
  }
}

export const getSongs = () => {
  return async (dispatch) => {
    let data;
    await api.get('/')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Something went wrong: status' + response.status)
        }
        data = response.data;
      })
      .catch(error => {
        console.log(error)
      });
    dispatch(songsActions.updateSongs(data));
  }
}

export const fetchCategories = () => {
  return async (dispatch) => {
    let data;
    await api.get('/categories')
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Something went wrong');
        }
        data = res.data;
      })
      .catch(error => console.log(error));
    dispatch(songsActions.fetchCategories(data));
  }
}
