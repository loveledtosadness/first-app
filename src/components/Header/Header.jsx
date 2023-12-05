import React from "react";
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.Head}>
          
            <div className={classes.item}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Polygon_Blockchain_Matic_Logo.svg/1200px-Polygon_Blockchain_Matic_Logo.svg.png' />
              <h1>FakeBook</h1>
            </div>
            
      </header> 
    )
}


export default Header;