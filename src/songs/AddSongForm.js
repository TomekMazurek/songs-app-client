import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {addNewSong} from "../store/songs-actions";
import classes from "./AddSongForm.module.css";

function AddSongForm() {
  const history = useHistory();
  const categories = useSelector(state => state.songs.categories);
  const dispatch = useDispatch();
  console.log('categories');
  console.log(categories);
  const formData = {
    titleRef: useRef(),
    authorRef: useRef(),
    albumRef: useRef(),
    genreRef: useRef(),
  };

  function addSongHandler(event) {
    event.preventDefault();
    const newSongData = {
      title: formData.titleRef.current.value,
      author: formData.authorRef.current.value,
      album: formData.albumRef.current.value,
      category: formData.genreRef.current.value,
      votes: 0
    }
    dispatch(addNewSong(newSongData));
    history.replace('/reports')
  }

  return (
    <div className={classes.main}>
      <h1>Add new Song</h1>
      <form onSubmit={addSongHandler} className={classes.form}>
        <div className={classes.elements}>
          <div className={classes.element}>
            <label htmlFor='title'>Title:</label>
            <input type='text' required id='title' ref={formData.titleRef}/>
          </div>
          <div className={classes.element}>
            <label htmlFor='author'>Author:</label>
            <input type='text' required id='author' ref={formData.authorRef}/>
          </div>
          <div className={classes.element}>
            <label htmlFor='album'>Album:</label>
            <input type='text' required id='album' ref={formData.albumRef}/>
          </div>
          <div className={classes.element}>
            <label htmlFor='category'>Category:</label>
            <select id='votes' ref={formData.genreRef}>
              {categories.map(category => (
                <option value={category.category}>{category.category}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={classes.actions}>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddSongForm;
