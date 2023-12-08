import React from "react";
import MusicHeader from "./MusicComponents/MusicHeader";
import classes from './Music.module.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Music = () => {
    return (
        <div className={classes.Mamusic}>
            <div className={classes.Header}><MusicHeader /></div>
            <div className={classes.Content}>
                
                
            </div>
        </div>
    );
}
export default Music;