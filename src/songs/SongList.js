import SongItem from "./SongItem";
import classes from "./SongList.module.css"

function SongList(props) {
  return (
    <div className={classes.list}>
      <ul>
        {props.songs.map((song) => (
          <li key={song.id}>
            <SongItem
              id={song.id}
              title={song.title}
              author={song.author}
              album={song.album}
              category={song.category}
              votes={song.votes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
