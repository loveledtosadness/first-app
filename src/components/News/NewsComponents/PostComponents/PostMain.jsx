import React from "react";
import classes from './PostMain.module.css'
import PostHead from "./postHead";
import PostBody from "./postBody";
import postComments from "./postComments";
import News from "../../News";

class fullPost extends React.Component {
    
    postData = [
        {id: 1, 
            userName: 'ZVcursed', 
            postText: 'Ya shutil rebyat zvzv', 
            avatar: 'https://avatars.mds.yandex.net/i?id=a494ddf80446235b2c49b52b788f0755c83ba6be-10803272-images-thumbs&n=13', 
            postImage: 'https://avatars.mds.yandex.net/i?id=759011f0576f2a8b91262aafd7dfdad3a997eed2-10119944-images-thumbs&n=13'},
        {id: 2, userName: 'MiZVulina', postText: 'Shaman, napishi mne', avatar: '#'},
        {id: 3, userName: 'ChingisHan', postText: "Kazahi iznachal'no russkie bili, eto ya prosto hui svoi suval kuda ne nado", avatar: '#'},
        {id: 4, userName: 'AlohaDance', postText: 'Guli, vi dolbaeBbl, v 2023 meta dobrix ludei', avatar: '#'}
    ];

    render() {
        return (
             <div className={classes.fullPostBody}>
                <News />
                <PostHead userName={this.postData[0].userName} userAvatar={this.postData[0].avatar}/>
                <PostBody postText={this.postData[0].postText} postImage={this.postData[0].postImage}/>
                <postComments />
             </div>
        );
    }
    
}
export default fullPost;