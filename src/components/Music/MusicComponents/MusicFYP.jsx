import React from "react";
import MusicHeader from "./MusicHeader";
import classes from './MusicFyp.module.css'

const MusicFyp = () => {
    return (
        <div>
            <MusicHeader />
            <div className={classes.fyps}>
                <div className={classes.Add}>
                    <h2>Subscripition for 1$</h2>
                    <p>Listen the best music for true sss rank ghouls three months for 1$
                    </p>
                    <p>Only for new users</p>
                </div>
                <div className={classes.terndyPlaylistsFY}>Gay Remixes</div>
                <div className={classes.perfomersFY}>Leonardo Davinci</div>
                <div className={classes.inTopNow}></div>
            </div>

        </div>
    )
}

export default MusicFyp;