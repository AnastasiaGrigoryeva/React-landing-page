import React from "react";
import './style.css';
import guide from '../../assets/guide.svg';
import book from '../../assets/book.svg';

function Service() {
  return (
    <>
        <div className="service-page main">
            <div className="service-page-container">
                <div className="service-page-title">
                    <div className="service-page caption">
                        Services
                    </div>
                    <p className="service-page text">
                        Our top value categories for you
                    </p>
                </div>
                <div className="service-page-advantages">
                    <div className="service-page-advantage guide">
                        <div className="service-images">
                            <img src={guide} alt="" className="blue-button-img" />
                        </div>
                        <div className="service-title">Best Tour Guide</div>
                        <p className="service-text">What looked like a small patch of purple grass, above five feet.</p>
                    </div>
                    <div className="service-page-advantage book">
                        <div className="service-images">
                            <img src={book} alt="" className="blue-button-img" />
                        </div>
                        <div className="service-title">Easy Booking</div>
                        <p className="service-text">Square, was moving across the sand in their direction.</p>
                    </div>
                </div>
            </div>

        </div>
    </>
  );
}

export default Service;
