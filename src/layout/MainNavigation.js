import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Songs App</div>
      <nav>
        <ul>
          <li><NavLink to='/' activeClassName={classes.active}>Main</NavLink></li>
          <li><NavLink to='/newSong' activeClassName={classes.active}>Add Song</NavLink></li>
          <li><NavLink to='/reports' activeClassName={classes.active}>Top Charts</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;