import React from "react";
import classes from './News.module.css' 
import { NavLink } from "react-router-dom";



const News = (props) => {
    return (
        <div className={classes.bodyOfNewsLine}>
            <div className={classes.Buttons}>
                <NavLink to='/news/page'><div className={classes.item}>ZXpage</div></NavLink>
                <NavLink to='/news/fyp'><div className={classes.item}>ZXforYou</div></NavLink>
                <NavLink to='/news/zxnews'><div className={classes.item}>ZXNews</div></NavLink>
            </div>
            <div className={classes.ForYouPage}></div>
        </div>
    );
}
export default News;
