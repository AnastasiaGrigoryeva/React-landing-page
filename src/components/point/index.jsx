import React from "react";
import traveler from '../../assets/traveler.svg';
import percent from '../../assets/percent.svg'
import './style.css'

function TravelPoint() {
    return (
      <>
        <div className="point-page">
          <div className="point-image">
              <img src={traveler} alt="" className="blue-button-img" />
              <div className="image-overlay percent">
                <img src={percent} alt="" className="image-overlay-image" />
                Discounted Price
              </div> 
              <div className="image-overlay circil-one">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <g filter="url(#filter0_f_832_1060)">
                    <circle cx="60" cy="60" r="48" fill="url(#paint0_linear_832_1060)"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_832_1060" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_832_1060"/>
                    </filter>
                    <linearGradient id="paint0_linear_832_1060" x1="98.4" y1="115.68" x2="3.04028" y2="97.4235" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#5D50C6"/>
                      <stop offset="1" stop-color="#F85E9F"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="image-overlay circil-two">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <g filter="url(#filter0_f_832_1062)">
                    <circle cx="24" cy="24" r="20" fill="#FACD49"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_832_1062" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_832_1062"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="image-overlay circil-three">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g filter="url(#filter0_f_832_1063)">
                    <circle cx="12" cy="12" r="8" fill="#FF5722"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_832_1063" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_832_1063"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="image-overlay circil-four">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g filter="url(#filter0_f_832_1064)">
                    <circle cx="20" cy="20" r="16" fill="#FF5722"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_832_1064" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_832_1064"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="image-overlay circil-five">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <g filter="url(#filter0_f_832_1061)">
                    <circle cx="24" cy="24" r="20" fill="url(#paint0_linear_832_1061)"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_832_1061" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_832_1061"/>
                    </filter>
                    <linearGradient id="paint0_linear_832_1061" x1="40" y1="47.2" x2="0.266783" y2="39.5931" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#5D50C6"/>
                      <stop offset="1" stop-color="#F85E9F"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
          </div>
          <div className="travel-info">
            <div className="travel-title">
              <div className="travel-caption">Travel Point</div>
              <div className="travel-header">We helping you find your dream location</div>
              <div className="travel-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</div>
            </div>
            <div className="travel-box">
              <div className="travel-point-wraper">
                <div className="travel-item holiday">
                  <div className="travel-number">500+</div>
                  <div className="travel-point">Holiday Package</div>
                </div>
                <div className="travel-item hotel">
                  <div className="travel-number">100</div>
                  <div className="travel-point">Luxury Hotel</div>
                </div>
                <div className="travel-item airline">
                  <div className="travel-number">7</div>
                  <div className="travel-point">Premium Airlines</div>
                </div>
                <div className="travel-item custom">
                  <div className="travel-number">2k+</div>
                  <div className="travel-point">Happy Customer</div>
                </div>
              </div>
              <div className="image-overlay ticket">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.522 24.002C39.522 25.629 40.858 26.9528 42.5 26.9528C43.328 26.9528 44 27.6186 44 28.439V33.7916C44 38.318 40.284 42 35.716 42H12.286C7.718 42 4 38.318 4 33.7916V28.439C4 27.6186 4.672 26.9528 5.5 26.9528C7.144 26.9528 8.48 25.629 8.48 24.002C8.48 22.4166 7.198 21.2236 5.5 21.2236C5.102 21.2236 4.722 21.067 4.44 20.7876C4.158 20.5082 4 20.1296 4 19.7373L4.004 14.2103C4.004 9.68402 7.72 6 12.288 6H35.712C40.28 6 43.998 9.68402 43.998 14.2103L44 19.5649C44 19.9573 43.842 20.3378 43.562 20.6152C43.28 20.8946 42.9 21.0512 42.5 21.0512C40.858 21.0512 39.522 22.375 39.522 24.002ZM28.504 25.296L30.862 23.021C31.272 22.6286 31.414 22.05 31.236 21.515C31.06 20.9798 30.6 20.5994 30.044 20.522L26.786 20.0504L25.328 17.1254C25.078 16.622 24.57 16.3089 24.004 16.3069H24C23.436 16.3069 22.928 16.6201 22.674 17.1234L21.216 20.0504L17.964 20.52C17.402 20.5994 16.942 20.9798 16.764 21.515C16.588 22.05 16.73 22.6286 17.138 23.021L19.496 25.296L18.94 28.5124C18.844 29.0672 19.07 29.6182 19.53 29.9492C19.79 30.1334 20.092 30.2286 20.398 30.2286C20.632 30.2286 20.868 30.171 21.084 30.0582L24 28.5402L26.91 30.0542C27.414 30.3216 28.012 30.28 28.47 29.9472C28.932 29.6182 29.158 29.0672 29.062 28.5124L28.504 25.296Z" fill="white"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
  
  export default TravelPoint;