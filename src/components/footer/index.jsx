import React from "react";
import Logo from '../../components/header/logo';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import inst from '../../assets/inst.svg';
import './style.css'

function Footer() {
    return <>
        <div className="footer">
            <div className="section">
                <div className="footer-link">
                    <Logo />
                    <div className="footer-text">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classical Latin literature from 45 BC.
                    </div>
                    <div>
                        <img src={facebook} alt="" className="footer-img" />
                        <img src={twitter} alt="" className="footer-img" />
                        <img src={inst} alt="" className="footer-img" />
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-wraper">
                        <div className="footer-header">Company</div>
                        <div className="footer-txt">About</div>
                        <div className="footer-txt">Career</div>
                        <div className="footer-txt">Mobile</div>
                    </div>
                    <div className="footer-wraper">
                        <div className="footer-header">Contact</div>
                        <div className="footer-txt">Why Travlog?</div>
                        <div className="footer-txt">Partner with us</div>
                        <div className="footer-txt">FAQ’s</div>
                        <div className="footer-txt">Blog</div>
                    </div>
                    <div className="footer-wraper">
                        <div className="footer-header">Meet Us</div>
                        <div className="footer-txt">+00 92 1234 56789</div>
                        <div className="footer-txt">info@travlog.com</div>
                        <div className="footer-txt">205. R Street, New York BD23200</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
  
export default Footer;