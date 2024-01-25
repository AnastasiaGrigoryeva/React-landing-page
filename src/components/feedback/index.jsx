import React from "react";
import FeedbackSlider from './slider';
import './style.css';

function FeedBack() {
    return (
      <>
        <div className="feedback-page">
          {/* <div className="feedback-background">
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1256" viewBox="0 0 1440 1256" fill="none">
            <rect width="100%" height="100%" fill="linear-gradient(281deg, #5D50C6 7.11%, #F85E9F 93.54%)" />
              <path d="M-619.126 1157.39C-623.071 1134.12 -609.65 792.352 -485.31 509.372C-373.696 255.714 -114.144 111.145 189.633 293.458C515.119 488.852 795.873 508.5 1022.25 451.503C1245.67 394.993 1394.25 224.722 1460.97 116.147C1605.79 -118.485 1819.72 26.6467 1744.58 335.355C1709.12 478.958 1615.65 519.107 1453.68 534.008C1284.38 549.583 1034.25 516.522 687.308 583.897C352.717 649.129 -23.8086 805.793 -235.534 1005.21C-460.861 1217.61 -586.092 1360.44 -619.126 1157.39Z" fill="url(#paint0_linear_832_27)"/>
              <defs>
                <linearGradient id="paint0_linear_832_27" x1="1636.47" y1="972.768" x2="-567.86" y2="289.488" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5D50C6"/>
                  <stop offset="1" stop-color="#F85E9F"/>
                </linearGradient>
              </defs>
            </svg>
          </div> */}
          <div className="feedback-info">
              <div className="feedback-title">
                <div className="feedback-caption">Testimonials</div>
                <div className="feedback-header">Trust our clients</div>
              </div>
          </div>
        
        <FeedbackSlider /> 
        </div>
      </>
    );
  }
  
  export default FeedBack;