import React from "react";
import classes from './Navig.module.css';
import { NavLink } from "react-router-dom";


const Navig = () => {
    return (
        <nav className={classes.navBody}>
        <NavLink to="/profile" activeclassname={classes.active}>
          <div className={classes.item}>
            Profile
          </div>
        </NavLink>
        <NavLink to="/dialogs" activeclassname={classes.active}>
          <div className={classes.item}>
            Messages
          </div>
        </NavLink>
        <NavLink to="/news" activeclassname={classes.active}>
          <div className={classes.item}> 
            News
          </div>
        </NavLink>
        <NavLink to="/music" activeclassname={classes.active}>
          <div className={classes.item}>
            Music
          </div>
        </NavLink>
        <NavLink to="/settings" activeclassname={classes.active}>
          <div className={classes.item}>
            Settings
        </div>
      </NavLink>
      </nav>
    )
}

export default Navig;