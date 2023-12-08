import React from "react";
import classes from './postBody.module.css'

const PostBody = (props) => {
        return (
        <div className={classes.PostFrame}>
            <div className={classes.postText}>
                {props.postText}
            </div>
            <div className={classes.postImage}>
                <img src={props.postImage} width='400px'/>
            </div>
        </div>
    )
}


export default PostBody;