import React from "react";
import Logo from './logo/index';
import Bluebutton from '../bluebutton/index'
import './style.css'

function Header() {
    return (
      <>
        <div className="header">
          <Logo />
          <div className="navigation-menu">
              <div className="menu home">Home</div>
              <div className="menu discover">Discover</div>
              <div className="menu special-deals">Special Deals</div>
              <div className="menu contact">Contact</div>
          </div>
          <div className="wraper-button">
            <Bluebutton title={'Log In'}/>
            <Bluebutton title={'Sign Up'}/>
          </div>
          <div className="header-circle"></div>
        </div>
      </>
    );
  }
  
  export default Header;