import React from "react";
import {FaTwitterSquare} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
          <div className="media-icons">
          <div className="twitter-icons"><FaTwitterSquare /></div>
            <br></br>
            <div className="tiktok-icons">< FaTiktok /></div>
          </div>
      </div>
      
      <p> &copy; 2022 Yummers.com</p>
    </div>
  );
}

export default Footer;