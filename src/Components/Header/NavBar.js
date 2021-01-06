import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-router-dom";
//import { Button } from './Button.js';

const NavBar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);
  // the below three statements are destructured in the above line
  //const state = useState(false);
  // const navLinkOpen = state[0];
  // const navLinkToggle = state[1];

  // const [button, setButton] = useState(true);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "navlinks";

    if (navLinkOpen) {
      classes += " active";
    }

    return classes;
  };
  const closeMobileMenu = () => navLinkToggle(false);

  // the bellow code was to add an additional signup button and make it responsive when the window is less than 960px
  //       const showButton = () => {
  //           if (window.innerWidth <= 960) {
  //             setButton(false);
  //           } else {
  //             setButton(true);
  //           }
  //         };

  //         useEffect(() => {
  //           showButton();
  //         }, []);

  //         window.addEventListener('resize', showButton);

  return (
    <nav>
      <div>
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <i className="fas fa-mountain"></i>
          <h4>Ting-Tong </h4> <h6>-Your Homely Food Partner</h6>
        </Link>
      </div>
      <ul className={renderClasses()}>
        <li className="link">
          <Link to="/" onClick={closeMobileMenu}>
            HOME
          </Link>
        </li>
        <li className="link">
          <Link to="/OrderFood" onClick={closeMobileMenu}>
            ORDER FOOD
          </Link>
        </li>
        <li className="link">
          <Link to="/ChefSignUp" onClick={closeMobileMenu}>
            CHEF SIGN-UP
          </Link>
        </li>
        <li className="link">
          <Link to="/AboutUs" onClick={closeMobileMenu}>
            ABOUT US
          </Link>
        </li>
        <li className="link">
          <Link to="/OurPromise" onClick={closeMobileMenu}>
            OUR PROMISE
          </Link>
        </li>
        <li className="link">
          <Link
            to="/SignUp"
            className=" av-links-mobile"
            onClick={closeMobileMenu}
          >
            SIGN UP
          </Link>
        </li>
      </ul>

      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
};

export default NavBar;
