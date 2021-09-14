import {useDispatch} from "react-redux";
import {voteForSong} from "../store/songs-actions";
import Card from "../ui/Card";
import classes from "./SongItem.module.css"

function SongItem(props) {
  const dispatch = useDispatch();
  let buttonClassName = '';

  function addVoteHandler() {
    dispatch(voteForSong(props.id));
    buttonClassName = 'classes.vote_processing';
  }

  return (
    <li>
      <Card>
        <div className={classes.topStripe}>
          <div className={classes.text}>
            <span className={classes.title}><h1>{props.title}</h1></span>
            <span className={classes.author}><h1> ({props.author})</h1></span>
          </div>
          <div className={classes.actions}>
            <button className={buttonClassName}
                    onClick={addVoteHandler}>Vote
            </button>
          </div>
        </div>
        <div className={classes.description}>
          <div className={classes.info}>
            <p>Album: {props.album}</p>
            <p>Category: {props.category}</p>
          </div>
          <p>Votes: {props.votes}</p>
        </div>
      </Card>
    </li>
  );
}

export default SongItem;
