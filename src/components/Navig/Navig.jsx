import React from "react";
import classes from './Navig.module.css';
import { NavLink } from "react-router-dom";


const Navig = () => {
    return (
        <nav>
        <div className={classes.item}>
        <NavLink to="/profile" activeclassname={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/dialogs" activeclassname={classes.active} >Messages</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/news" activeclassname={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/music" activeclassname={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/settings" activeclassname={classes.active}>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navig;