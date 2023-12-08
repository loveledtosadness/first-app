import classes from  './Posts.module.css';
import Post from './post1/post';

function AllMyPosts() {
    
    let PostsData = [
        {name: 'Zxcursed', id: '1', message: " Alyo sin mertvoy bliadi, ti kogda igrat' nauchishsya???", likesCount: '-1'},
        {name: 'Akumaqqe', id: '1', message: '  sin potaskyxizavali ebalo', likesCount: '12'},
        {name: 'Hit Lera', id: '1', message: " I'am emo!", likesCount: '1488'},
        {name: 'Shadowfiend Shadowfiendow', id: '1', message: " npRazbejalis' sinovya shlushek", likesCount: '200'}
        ]

    return (
        <div className={classes.main}>
            <Post id={PostsData[0].id} name={PostsData[0].name} message={PostsData[0].message} likes={PostsData[0].likesCount}/>
            <Post id={PostsData[1].id} name={PostsData[1].name} message={PostsData[1].message} likes={PostsData[1].likesCount}/>
            <Post id={PostsData[2].id} name={PostsData[2].name} message={PostsData[2].message} likes={PostsData[2].likesCount}/>
            <Post id={PostsData[3].id} name={PostsData[3].name} message={PostsData[2].message} likes={PostsData[3].likesCount}/>
        </div>
    );
}

export default AllMyPosts;