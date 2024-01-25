import React from "react";
import './style.css'

function Bluebutton({title,img}) {
    return (
      <div className="blue-button">
        {img && <img src={img} alt="" className="blue-button-img" />}
        {title}
      </div>
    );
  }
  
  export default Bluebutton;