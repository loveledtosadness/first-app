import classes from './post.module.css'

function Post(props) {

    return (
        <div className={classes.item}>
            <img src="https://sun9-39.userapi.com/impg/QngdF1dsfH2SFcuBw7gl9frfpwLKuw5wzntqaA/UhViPQxQVzI.jpg?size=900x900&quality=95&sign=6f355e2b96328a14d20b862244a58845&c_uniq_tag=pCeNyurlHd6b-dqd0NalfFiDSOwdNRW81VWvlXT_3cc&type=album" />
            <span>
                {props.name}
            </span>
            <span>
                {props.message}
            </span>
            <span>
                Like
            </span>
            <span>
                {props.likes}
            </span>
        </div>
    );
}

export default Post;