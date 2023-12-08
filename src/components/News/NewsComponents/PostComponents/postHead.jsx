import React from "react";
import classes from './postHead.module.css'


const PostHead = (props) => {
        return (
            <div className={classes.Head}>
                <div className={classes.AvatarAndNickname}><img src={props.userAvatar} width='80px' height='80px'/>
                {props.userName}</div>
            </div>
        )
}

export default PostHead;