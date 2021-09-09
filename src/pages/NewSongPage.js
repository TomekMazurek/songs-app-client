import {useState} from "react";
import AddSongForm from "../songs/AddSongForm";
import FileUploadForm from "../songs/FileUploadForm";
import classes from "./NewSongPage.module.css"

const NewSongPage = () => {
  const [showFileUploadWindow, setShowFileUploadWindow] = useState(false);

  const toggleUploadWindow = () => {
    if (showFileUploadWindow) {
      setShowFileUploadWindow(false);
    } else {
      setShowFileUploadWindow(true);
    }
  }

  return (
    <section className={classes.main}>
      <button onClick={toggleUploadWindow}>
        {!showFileUploadWindow ? 'Upload from file' : 'Song input Form'}
      </button>
      {showFileUploadWindow && <FileUploadForm/>}
      {!showFileUploadWindow && <AddSongForm/>}
    </section>
  );
}

export default NewSongPage;
