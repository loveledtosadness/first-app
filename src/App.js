import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navig from "./components/Navig/Navig";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import MyMusic from './components/Music/MusicComponents/MusicMyMusic'
import MusicFyp from "./components/Music/MusicComponents/MusicFYP";
import Playlists from "./components/Music/MusicComponents/MusicPlaylists";
import NewsFyp from "./components/News/NewsComponents/NewsFyp";
import fullPost from "./components/News/NewsComponents/PostComponents/PostMain";





function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <div className='app-wrapper-head'>
        <Header />
      </div>
      <div className='app-wrapper-nav'>
        <Navig />
      </div>
        <div className='app-wrapper-content'>
        <Routes>
          <Route exact path='/dialogs' Component={Dialogs}/>
          <Route exact path='/profile' Component={Profile}/>
          <Route path='/news' Component={News}/>
          <Route path='/news/page' Component={News}/>
          <Route path='/news/fyp' Component={fullPost}/>
          <Route path='/news/zxnews' Component={News}/>
          <Route exact path='/music' Component={MusicFyp}/>
          <Route path="/music/mymusic" Component={MyMusic} />
          <Route path="/music/fyp" Component={MusicFyp} />
          <Route path="/music/playlists" Component={Playlists} />
          <Route path='/settings' Component={Settings}/>
        </Routes>
        </div>
    </div>
  </BrowserRouter>
    
  );
}




export default App;