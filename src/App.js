import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navig from "./components/Navig/Navig";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navig />
      <Profile />
    </div>
  );
}




export default App;