import {useDispatch} from "react-redux";
import {voteForSong} from "../store/songs-actions";
import {setPlayVideo, setSongToDisplay} from "../store/ui-actions";
import Card from "../ui/Card";
import classes from "./SongItem.module.css"

const SongItem = (props) => {
  const dispatch = useDispatch();
  let buttonClassName = '';
  const youtubeId= props.youtubeId;

  const addVoteHandler = () => {
    dispatch(voteForSong(props.id));
    buttonClassName = 'classes.vote_processing';
  }
  const viewVideoHandler = () => {
    dispatch(setSongToDisplay({
      title: props.title,
      youtubeId: props.youtubeId
    }));
    dispatch(setPlayVideo(true));
  }
console.log(props);
  return (
    <Card className={props.className ? props.className : ''}>
      <div className={classes.topStripe}>
        <div className={classes.text}>
          <span className={classes.title}><h1>{props.title}</h1></span>
          <span className={classes.author}><h1> ({props.author})</h1></span>
        </div>
        <div className={classes.actions}>
          {typeof youtubeId==='string' && youtubeId.trim().length!==0 && <button
                  onClick={viewVideoHandler}>Listen
          </button>}
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
  );
}

export default SongItem;
