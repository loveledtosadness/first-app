
import classes from './Profile.module.css';

const Profile = () => {
    return (
      <div className={classes.Content}>
        <div className={classes.Headsite}><img src="https://luatkhoa.org/wp-content/uploads/2014/10/blue-header-foocamp21.png"/></div>
          <div className={classes.Avatar}><img src="https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png"/>
          </div>
        <div className={classes.item}>
          <h1>Shadowfiend Shadowfiendov</h1>
          <p>Na kore mertviy dolbaeb i ved' on tochno tokyiskiy</p>
        </div>
        <div className={classes.item}>
          Posts
          <div className={classes.item}>
            New post
          </div>
        </div>
      </div>
    )
}

export default Profile;