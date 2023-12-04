import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navig from "./components/Navig";
import Profile from "./components/Profile";

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