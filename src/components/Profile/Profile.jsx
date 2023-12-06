import AllMyPosts from './Posts/Posts';
import classes from './Profile.module.css';
import InputBar from './Posts/InputBar/InputBar';
import MyAvatar from './MyAvatar/MyAvatar';
import NameSurename from './NameSurename/nameSurename';



const Profile = () => {
    return (
      <div>
        <div className={classes.Headsite}>
          <img src="https://a-static.besthdwallpaper.com/tokyo-ghoul-re-kishou-arima-ken-kaneki-haise-saaki-wallpaper-2560x1080-9479_14.jpg"/>
          </div>
          <div className={classes.Avatar}>
            <MyAvatar />
          </div>
          <div className={classes.NameAndSurename}>
            <NameSurename />
          </div>
        <div className={classes.item}>
          <p>Na kore mertviy dolbaeb i ved' on tochno tokyiskiy</p>
        </div>
        <div className={classes.item}>
            <InputBar />
        </div>
        <div className={classes.item}>
          <AllMyPosts />
        </div>
      </div>
    )
}

export default Profile;