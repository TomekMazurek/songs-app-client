import SongItem from "../songs/SongItem";
import Card from "../ui/Card";
import classes from "./ReportsList.module.css";

const ReportsList = (props) => {
  return (
    <div className={classes.list}>
      <ul>
        {props.songs.map((song, index) => (
          <li className={classes.item} key={song.id}>
            <Card className={classes.index}><h1>{index + 1}</h1></Card>
            <SongItem className={classes.songItem}
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

export default ReportsList;