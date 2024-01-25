import React from "react";
import Bluebutton from "../bluebutton";
import './style.css';
import playcircle from '../../assets/play-circle.svg';
import greece from '../../assets/greece.svg';
import mountins from '../../assets/mounting.svg';
import photo from '../../assets/photo.svg';
import tg from '../../assets/tg.svg';
import add from '../../assets/add.svg';
import location from '../../assets/location.svg';
import tripad from '../../assets/tripad.svg';
import expedia from '../../assets/expedia.svg';
import booking from '../../assets/booking.svg';
import airbnb from '../../assets/airbnb.svg';
import rbitz from '../../assets/rbitz.svg';
import object from '../../assets/object.svg';


function MainPage() {
    return (
      <>
        <div className="main-page">
            <div className="container">
                <div className="main-page-discription">
                    <div className="main-page-title">
                        Explore the world!
                        <div className="main-page-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7044 4.01898C10.034 4.01898 9.46373 4.4848 9.30365 5.11265H14.6863C14.5263 4.4848 13.956 4.01898 13.2856 4.01898H10.7044ZM16.2071 5.11264H18.1881C20.2891 5.11264 22 6.84428 22 8.97085C22 8.97085 21.94 9.8711 21.92 11.1248C21.918 11.224 21.8699 11.3212 21.7909 11.38C21.3097 11.7354 20.8694 12.0291 20.8294 12.0493C19.1686 13.1632 17.2386 13.947 15.1826 14.3369C15.0485 14.3632 14.9165 14.2934 14.8484 14.1739C14.2721 13.1754 13.1956 12.5253 11.995 12.5253C10.8024 12.5253 9.71586 13.1683 9.12256 14.1678C9.05353 14.2853 8.92346 14.3531 8.7904 14.3278C6.75138 13.9369 4.82141 13.1541 3.17059 12.0594L2.21011 11.3911C2.13007 11.3405 2.08004 11.2493 2.08004 11.1481C2.05003 10.6316 2 8.97085 2 8.97085C2 6.84428 3.71086 5.11264 5.81191 5.11264H7.78289C7.97299 3.6443 9.2036 2.5 10.7044 2.5H13.2856C14.7864 2.5 16.017 3.6443 16.2071 5.11264ZM21.6598 13.3152L21.6198 13.3355C19.5988 14.6924 17.1676 15.5937 14.6163 15.9684C14.2561 16.019 13.8959 15.7861 13.7959 15.4216C13.5758 14.5912 12.8654 14.0443 12.015 14.0443H12.005H11.985C11.1346 14.0443 10.4242 14.5912 10.2041 15.4216C10.1041 15.7861 9.74387 16.019 9.38369 15.9684C6.83242 15.5937 4.4012 14.6924 2.38019 13.3355C2.37019 13.3254 2.27014 13.2646 2.1901 13.3152C2.10005 13.3659 2.10005 13.4874 2.10005 13.4874L2.17009 18.6519C2.17009 20.7785 3.87094 22.5 5.97199 22.5H18.018C20.1191 22.5 21.8199 20.7785 21.8199 18.6519L21.9 13.4874C21.9 13.4874 21.9 13.3659 21.8099 13.3152C21.7599 13.2849 21.6999 13.295 21.6598 13.3152ZM12.7454 17.5583C12.7454 17.9836 12.4152 18.3177 11.995 18.3177C11.5848 18.3177 11.2446 17.9836 11.2446 17.5583V16.2519C11.2446 15.8367 11.5848 15.4924 11.995 15.4924C12.4152 15.4924 12.7454 15.8367 12.7454 16.2519V17.5583Z" fill="#F85E9F"/>
                        </svg>
                        </div>
                    </div> 
                    <div className="main-page-caption">
                        Travel <span className="main-page-caption pink">top destination</span> of the world
                    </div>
                    <div className="main-page-text"> 
                        We always make our customer happy by providing as many choices as possible
                    </div>
                    <div className="main-page-wraper">
                        <Bluebutton title={'Get Started'}/>
                        <Bluebutton style={{ border: '1px solid #EEE;'}} title={'Watch Demo'} img={playcircle} />
                    </div>
                </div>
                <div className="main-page-image">
                    <div className="item-contaner">
                        <div className="item-contaner-image one">
                            <img src={greece} alt="" className="blue-button-img" />
                        </div>
                        <div className="item-contaner-image two">
                            <img src={mountins} alt="" className="blue-button-img" />
                        </div>
                        <div className="item-contaner-image three">
                            <img src={photo} alt="" className="blue-button-img" />
                        </div>
                    </div>
                    <div className="image-overlay tg">
                        <img src={tg} alt="" className="blue-button-img" />
                    </div>
                    <div className="image-overlay add">
                        <img src={add} alt="" className="blue-button-img" />
                    </div>
                    <div className="image-overlay location">
                        <img src={location} alt="" className="image-overlay-image" />
                        Top Places
                    </div> 
                </div>
            </div>
            <div className="main-page-brands">
                <div className="image-overlay object">
                    <img src={object} alt="" className="blue-button-img" />
                </div>
                <div>
                    <img src={tripad} alt="" className="image-overlay-image" />
                </div>
                <div>
                    <img src={expedia} alt="" className="image-overlay-image" />
                </div>
                <div>
                    <img src={booking} alt="" className="image-overlay-image" />
                </div>
                <div>
                    <img src={airbnb} alt="" className="image-overlay-image" />
                </div>
                <div>
                    <img src={rbitz} alt="" className="image-overlay-image" />
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default MainPage;