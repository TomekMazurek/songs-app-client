import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewSong} from "../store/songs-actions";

function AddSongForm() {
  const categories = useSelector(state => state.songs.categories);
  const dispatch = useDispatch();
  console.log('categories');
  console.log(categories);
  const formData = {
    titleRef: useRef(),
    authorRef: useRef(),
    albumRef: useRef(),
    genreRef: useRef(),
    votesRef: useRef()
  };

  function addSongHandler(event) {
    event.preventDefault();
    const newSongData = {
      title: formData.titleRef.current.value,
      author: formData.authorRef.current.value,
      album: formData.albumRef.current.value,
      category: formData.genreRef.current.value,
      votes: parseInt(formData.votesRef.current.value)
    }
    console.log(newSongData);
    dispatch(addNewSong(newSongData));
  }

  return (
    <div>
      <h1>Add new Song</h1>
      <form onSubmit={addSongHandler}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' required id='title' ref={formData.titleRef}/>
        </div>
        <div>
          <label htmlFor='author'>Author:</label>
          <input type='text' required id='author' ref={formData.authorRef}/>
        </div>
        <div>
          <label htmlFor='album'>Album:</label>
          <input type='text' required id='album' ref={formData.albumRef}/>
        </div>
        <div>
          <label htmlFor='category'>Category:</label>
          <select id='votes' ref={formData.genreRef}>
            {categories.map(category => (
              <option value={category.category}>{category.category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='votes'>Initial Votes:</label>
          <input type='text' id='votes' ref={formData.votesRef}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddSongForm;
