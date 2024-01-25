import React from "react";
import star from '../../../assets/star.svg';
import data from '../../../ulilits/data.json';
import '../style.css'

function SliderComponent() {
    return (
      <>
        <div className="slider-table-wraper">
            {data.map((item) => (
            <div key={item.id} className="slider-frame">
            <div className="slider-image">
                <img src={require(`../../../assets/${item.image}`)} alt="" className="slider-image img" width={"auto"} height={"auto"} />
            </div>
            <div className="slider-container">
                <div className="slider-content">
                <div className="slider-table">
                    <div className="slider-title">{item.title}</div>
                    <div className="slider-price">{item.price}</div>
                </div>
                <p className="slider-description">{item.description}</p>
                </div>
            </div>
            <div className="slider-rating">
                <div className="slider-score">{item.rate}</div>
                <img src={star} alt="" className="blue-button-img" />
            </div>
            </div>
        ))}
    </div>
      </>
    );
  }
  
  export default SliderComponent;