import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div>
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Ting-Tong GMBH</h4>
            <h5 className="list-unstyled">
              <li>Berlin, Germany</li>
              <li>123 Streeet South North</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">
            <li>
          <Link to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/OrderFood">
            ORDER FOOD
          </Link>
        </li>
        <li>
          <Link to="/ChefSignUp">
            CHEF SIGN-UP
          </Link>
        </li>
        <li>
          <Link to="/AboutUs">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/OurPromise">
            OUR PROMISE
          </Link>
        </li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
            <li>Contact Us</li>
                          <li>Chef's T&C</li>
              <li>User T&C</li>
                          <li>Privacy Policy</li>
                          <li>Cookie Policy</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Ting-Tong GMBH | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;