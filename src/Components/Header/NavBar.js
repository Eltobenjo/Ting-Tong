import React, { useState } from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

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

  return (
    <nav>
      <div>
        <Link to="/" className="logo" onClick={closeMobileMenu}>
       
          <h4>Ting-Tong </h4> <h6>-Your Homely Food Partner</h6>
        </Link>
      </div>
      
      <ul className={renderClasses()}>
        <li className="link">
          <Link to="/">HOME</Link>
        </li>

        <li className="link">
          <Link to="/JoinOurTeam" onClick={closeMobileMenu}>
            JOIN OUR TEAM
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
            to="/Login"
          onClick={closeMobileMenu}
          >
            LOGIN
          </Link>
        </li>
        <li className="link">
          <Link
            to="/SignUp"
            onClick={closeMobileMenu}
          >
            SIGN UP
          </Link>
        </li>
        <li className="link">
          <Link to="/ChefData" onClick={closeMobileMenu}>
           ChefData
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
