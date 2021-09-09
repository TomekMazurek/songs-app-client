import axios from "axios";
import {useHistory} from "react-router-dom";
import baseUrl from "../config/index";

const api = axios.create({baseURL: `${baseUrl}/files/`});

const FileUploadForm = () => {
  let file = null;
  const history = useHistory();
  const onFileChange = (event) => {
    file = event.target.files[0];
  }

  const uploadFileHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file, file.name);
    api.post('/uploadFile', formData);
    history.replace('/');
  }

  return (
    <div>
      <h1>Upload CSV or XML file with Data</h1>
      <div>
        <label htmlFor='file'>Select File</label>
        <input type='file' required id='file' onChange={onFileChange}/>
        <button onClick={uploadFileHandler}>Upload</button>
      </div>
    </div>
  );
}

export default FileUploadForm;
