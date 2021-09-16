import {useDispatch, useSelector} from "react-redux";
import {setPlayVideo} from "../store/ui-actions"
import Modal from "../ui/Modal";
import YouTubeEmbed from "../ui/YouTubeEmbed";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  const dispatch = useDispatch();
  const {youtubeId: videoId} = useSelector(state => state.ui.activeSong);
  const togglePlayVideo= useSelector(state=>state.ui.playVideo);
  const modalCloseHandler = () => {
    dispatch(setPlayVideo(false));
  }

  return (
    <div className={classes.layout}>
      <MainNavigation/>
      {togglePlayVideo && <Modal onClose={modalCloseHandler}><YouTubeEmbed embedId={videoId}/></Modal>}
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout;
