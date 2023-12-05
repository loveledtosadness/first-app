import classes from './MyAvatar.module.css'

function MyAvatar() {
    return (
        <div className={classes.item}>
            <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.png" />
        </div>
    );
}

export default MyAvatar;