import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../style.css';
import slider from '../../../assets/slider.svg';
import starts from '../../../assets/starts.svg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true
};


function FeedbackSlider() {
  return (
    <Slider {...settings}>
      <div className="slider-slide">
        <div className="slider-img">
          <img src={slider} alt="" className="blue-button-img" />
        </div>
        <div className="slide-wraper">
          <div className="slide-header">Mark Smith </div>
          <div className="slide-text"> / Travel Enthusiast</div>
        </div>
        <div className="slider-img starts">
          <img src={starts} alt="" className="blue-button-img" />
        </div>
        <div className="slide-description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots<br />
          in a piece of classical Latin literature from 45 BC.
        </div>
      </div>
      <div className="slider-slide">
        <div className="slider-img">
          <img src={slider} alt="" className="blue-button-img" />
        </div>
        <div className="slide-wraper">
          <div className="slide-header">Mark Smith </div>
          <div className="slide-text"> / Travel Enthusiast</div>
        </div>
        <div className="slider-img starts">
          <img src={starts} alt="" className="blue-button-img" />
        </div>
        <div className="slide-description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots<br />
          in a piece of classical Latin literature from 45 BC.
        </div>
      </div>
      <div className="slider-slide">
         <div className="slider-img">
          <img src={slider} alt="" className="blue-button-img" />
        </div>
        <div className="slide-wraper">
          <div className="slide-header">Mark Smith </div>
          <div className="slide-text"> / Travel Enthusiast</div>
        </div>
        <div className="slider-img starts">
          <img src={starts} alt="" className="blue-button-img" />
        </div>
        <div className="slide-description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots<br />
          in a piece of classical Latin literature from 45 BC.
        </div>
      </div>
    </Slider>
  );
};

export default FeedbackSlider;
