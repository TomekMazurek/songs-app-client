import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Route, Switch} from "react-router-dom";
import Layout from "./layout/Layout"
import AllSongsPage from "./pages/AllSongsPage";
import NewSongPage from "./pages/NewSongPage";
import ReportsPage from "./pages/ReportsPage";
import {fetchCategories} from "./store/songs-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact><AllSongsPage/></Route>
        <Route path='/newSong'><NewSongPage/></Route>
        <Route path='/reports'><ReportsPage/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
