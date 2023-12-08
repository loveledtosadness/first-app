import React from "react";
import classes from './MusicHeader.module.css'
import { NavLink } from "react-router-dom";

const MusicHeader = (props) => {
    return (
        <div>
            <div className={classes.Buttons}>
            <NavLink  to='/music/fyp'><div className={classes.item}>MusicFYP</div></NavLink>
            <NavLink  to='/music/mymusic'><div className={classes.item}>MyMusic</div></NavLink>
            <NavLink  to='/music/playlists'><div className={classes.item}>Playlists</div></NavLink>
            </div>
        </div>
    )
}

export default MusicHeader;