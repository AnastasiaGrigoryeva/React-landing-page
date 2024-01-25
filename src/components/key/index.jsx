import React from "react";
import church from '../../assets/church.svg';
import locationWhite from '../../assets/location-white.svg';
import table from '../../assets/table.svg';
import coupon from '../../assets/coupon.svg';
import swim from '../../assets/swim.svg';
import geo from '../../assets/geo.svg';
import cross from '../../assets/cross-circle.svg';
import line from '../../assets/red-border.svg';
import './style.css';

function KeyFeatures() {
    return (
      <>
        <div className="key-page">
          <div className="key-info">
            <div className="key-title">
              <div className="travel-caption">Key features</div>
              <div className="travel-header">We offer best services</div>
              <div className="travel-text">Contrary to popular belief, Lorem Ipsum is not simply random <br />text. It has roots in a piece of classical Latin literature<br />from 45 BC.</div>
            </div>
            <div className="key-box">
              <div className="key-point-wraper">
                <div className="key-item location">
                    <div className="key-icon location">
                        <img src={locationWhite} alt="" className="blue-button-img" />
                    </div>
                    <div className="key-box">
                        <div className="key-title">We offer best services</div>
                        <div className="key-text">Lorem Ipsum is not simply random text</div>
                    </div>
                </div>
                <div className="key-item table">
                    <div className="key-icon table">
                        <img src={table} alt="" className="blue-button-img" />
                    </div>
                    <div className="key-box">
                        <div className="key-title">Schedule your trip</div>
                        <div className="key-text">It has roots in a piece of classical</div>
                    </div>
                </div>
                <div className="key-item coupon">
                    <div className="key-icon coupon">
                        <img src={coupon} alt="" className="blue-button-img" />
                    </div>
                    <div className="key-box">
                        <div className="key-title">Get discounted coupons</div>
                        <div className="key-text">Lorem Ipsum is not simply random text</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="key-wrapper">
            <div className="key-image">
              <img src={church} alt="" className="key-image church" />
              <img src={swim} alt="" className="key-image swim" />
            </div>
            <div className="key-image background">
              <img src={cross} alt="" className="img-cross" />
              <img src={line} alt="" className="img-line" />
            </div>
            <div className="image-overlay geo">
              <img src={geo} alt="" className="image-overlay-image" />
              Paradise on Earth
            </div> 
          </div>
        </div>
      </>
    );
  }
  
  export default KeyFeatures;