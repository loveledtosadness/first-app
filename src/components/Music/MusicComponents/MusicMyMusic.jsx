import React from "react";
import MusicHeader from "./MusicHeader";
import classes from './MusicMyMusic.module.css'

const MyMusic = (props) => {
    return (
        <div>
            <MusicHeader />
            <div className={classes.MyMusic}>
                <div className={classes.songs}>
                    <div className={classes.song}>
                <img src="https://avatars.mds.yandex.net/i?id=9b9bc3477abab97c4054a1d8f89a972bcff75747-10898088-images-thumbs&n=13" width='80px' height='80px'/>
                <span>Zxcursed</span>
                    </div>
                <div className={classes.song}>
                <img src="https://avatars.mds.yandex.net/i?id=0b30277c1ed9aa6678045637569e5ba59a5b4094-10811924-images-thumbs&n=13" width='80px' height='80px'/>
                <span>Zxcursed</span>
                </div>
                <div className={classes.song}>
                <img src="https://avatars.mds.yandex.net/i?id=0b30277c1ed9aa6678045637569e5ba59a5b4094-10811924-images-thumbs&n=13" width='80px' height='80px'/>
                <span>Zxcursed</span>
                </div>
                <div className={classes.song}>
                <img src="https://avatars.mds.yandex.net/i?id=372ca9b599d1dc86d77b52f36ce7662b9af2e772-4303091-images-thumbs&n=13" width='80px' height='80px'/>
                <span>Zxcursed</span>
                </div>
                <div className={classes.song}>
                <img src="https://avatars.mds.yandex.net/i?id=0b30277c1ed9aa6678045637569e5ba59a5b4094-10811924-images-thumbs&n=13" width='80px' height='80px'/> 
                <span>Zxcursed</span>
                </div>
                </div>
                <div className={classes.FriendMusic}>
                    Muzika druzey
                </div>
            </div>
        </div>
    )
}

export default MyMusic;