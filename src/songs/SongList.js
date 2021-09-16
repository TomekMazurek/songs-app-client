import SongItem from "./SongItem";
import classes from "./SongList.module.css"

function SongList(props) {
  console.log(props.songs);
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
              youtubeId={song.youtubeId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
