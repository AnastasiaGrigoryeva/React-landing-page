import React from "react";
import SliderComponent from './slider';
import cross from '../../assets/cross.svg'
import './style.css'

function Destination() {
    return (
      <>
        <div className="destination-page section">
          <div className="destination-page">
              <div className="destination-header">
                <div className="destination-caption">Top Destination</div>
                <p className="destination-text">Explore top destination</p>
              </div>
              <div className="image-overlay cross">
                <img src={cross} alt="" className="blue-button-img" />
              </div>
              <SliderComponent />
          </div>
        </div>
      </>
    );
  }
  
  export default Destination;