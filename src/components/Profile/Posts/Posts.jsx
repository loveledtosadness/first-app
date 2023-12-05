import classes from  './Posts.module.css';
import Post from './post1/post';

function AllMyPosts() {
    return (
        <div className={classes.main}>
            <Post name='Zxcursed ' message="Alyo sin mertvoy bliadi, ti kogda igrat' nauchishsya???" likes=' -1'/>
            <Post name='Akumaqqe ' message='Gnilozubiy sin potaskyxizavali ebalo' likes=' 69'/>
            <Post name="Hitler " message="I'm emo" likes='1488'/>
            <Post name="Shadowfiend Shadowfiendow " message="Razbejalis' sinovya shlushek" likes=' 200'/>
        </div>
    );
}

export default AllMyPosts;