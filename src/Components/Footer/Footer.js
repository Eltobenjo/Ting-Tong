import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>Ting-Tong</h4>
          <h5>
            <p className="margin">Berlin, Germany</p>
            <p className="marginP">123 Streeet South North</p>
          </h5>
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
        {/* Column2 */}
        <div className="col">
          <ui className="list-unstyled">
            <li>
              <Link className="styleFont" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="styleFont" to="/OrderFood">
                ORDER FOOD
              </Link>
            </li>
            <li>
              <Link className="styleFont" to="/ChefSignUp">
                CHEF SIGN-UP
              </Link>
            </li>
            <li>
              <Link className="styleFont" to="/AboutUs">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link className="styleFont" to="/OurPromise">
                OUR PROMISE
              </Link>
            </li>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col">
          <ui className="list-unstyled">
            <li className="styleFont">Contact Us</li>
            <li className="styleFont">Chef's T&C</li>
            <li className="styleFont">User T&C</li>
            <li className="styleFont">Privacy Policy</li>
            <li className="styleFont">Cookie Policy</li>
          </ui>
        </div>
      </div>
      <hr></hr>
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
