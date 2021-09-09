import {useEffect, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import SongList from "../songs/SongList";
import {getSongs} from "../store/songs-actions";
import {toggleSongsList} from "../store/ui-actions";
import Card from "../ui/Card";
import classes from "./AllSongsPage.module.css";

function AllSongsPage() {
  const loadedSongs = useSelector(state => state.songs.songs);
  const showSongsList = useSelector(state => state.ui.showSongsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  const showListHandler = () => {
    dispatch(toggleSongsList());
  }
  return (
    <div>
      {!showSongsList && <Card>
        <section className={classes.description}>
          <h1>Hello there!</h1>
          <p>Let's vote on our favourite songs!</p>
          <p> Do you like listening to music? Do you have a song that gives you thrills? Go ahead and vote on it!</p>
          <p>Share with others about what do you like to hear, let's check which one is most popular</p>
          <p>You didn't find what you like? Add it to the list.</p>
        </section>
      </Card>}
      <Card>
        {!showSongsList && <button onClick={showListHandler}>Display songs</button>}
        {showSongsList && <Fragment>
          <h1>Songs</h1>
          {
            loadedSongs.length !== 0 && <SongList songs={loadedSongs}/>
          }
          {
            loadedSongs.length === 0 && <p> Loading</p>
          }
        </Fragment>}
      </Card>
    </div>
  );
}

export default AllSongsPage;
