import React from "react";
import classes from './Header.module.css';


const Header = () => {
    return (
        <header>
          
            <div className={classes.item}>
              <h1>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Polygon_Blockchain_Matic_Logo.svg/1200px-Polygon_Blockchain_Matic_Logo.svg.png' />FakeBook</h1>
            </div>
            
      </header> 
    )
}


export default Header;