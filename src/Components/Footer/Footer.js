import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    
    <div className="main-footer">
    <hr></hr>
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>Ting-Tong</h4>
             
        </div>
        {/* Column2 */}
        <div className="footer-cl2">
          
          <div>
            ABOUT US
            </div>
          <div>
            OUR PROMISE
            </div>

        </div>
        {/* Column3 */}
        <div className="col">
          <ui className="list-unstyled">
                      <li className="styleFont">TERMS & CONDITIONS</li>
          </ui>
        </div>
      </div>
      <div>
          <ul className="socialNetwork">
            <a href="https://www.pinterest.com/">
              <img
                className="socialIcon"
                src="../Images/rs1.png"
                alt="Pinterest"
              />
            </a>
            <a href="https://www.facebook.com/">
              <img
                className="socialIcon"
                src="../Images/rs2.png"
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com/?lang=en">
              <img
                className="socialIcon"
                src="../Images/rs3.png"
                alt="Twitter"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                className="socialIcon"
                src="../Images/rs4.png"
                alt="Instagram"
              />
            </a>
          </ul>
          </div> 
      <div>
        <p className="copyRight">
          &copy;{new Date().getFullYear()} Ting-Tong | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
