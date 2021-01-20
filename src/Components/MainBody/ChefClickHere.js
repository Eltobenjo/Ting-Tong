import React from "react";
import "./ChefClickHere.css";
import { Link } from "react-router-dom";

import Chef1 from "../assets/ChefImg/Chef1.jpg";
import Chef2 from "../assets/ChefImg/Chef2.jpg";
import Chef3 from "../assets/ChefImg/Chef3.jpg";
import Chef4 from "../assets/ChefImg/Chef4.jpg";

export default function ClickHere() {
  return (
    <div>
      <section>
        <div className="transit">
          <img className="img1" src={Chef1} alt="Chef" />
          <img className="img2" src={Chef2} alt="Chef" />
          <img className="img3" src={Chef3} alt="Chef" />
        </div>
        <div className="btnAlign">
          <Link to="/ChefSignUp">
            <button type="submit" className="button">
              Chef Register
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

