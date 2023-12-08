import React from "react";
import classes from './NewsFyp.module.css'
import fullPost from "./PostComponents/PostMain";


class NewsFyp extends React.Component {
    render() {
        return (
            <div className={classes.NewsFypBody}>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        <fullPost />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsFyp;