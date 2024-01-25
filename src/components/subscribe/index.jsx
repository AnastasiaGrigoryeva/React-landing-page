import React from "react";
import './style.css';

function Subscribe() {
  return (
    <>
      <div className="subscribe">
        <div className="subscribe-form">
          <div className="subscribe-title">subscribe to our newsletter</div>
          <div className="subscribe-discription">Prepare yourself & let’s explore the beauty of the world</div>
          <div className="subscribe-data">
            <input
              className="subscribe-email"
              placeholder="Your Email"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
