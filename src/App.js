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
          <Route path='/profile' Component={Profile}/>
          <Route path='/news' Component={News}/>
          <Route path='/music' Component={Music}/>
          <Route path='/settings' Component={Settings}/>
        </Routes>
        </div>
    </div>
  </BrowserRouter>
    
  );
}




export default App;