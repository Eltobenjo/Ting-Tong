import React from "react";
import "./UserClickHere.css";
import { Link } from "react-router-dom";

import User2 from "../assets/UserImg/User2.jpg";
import User3 from "../assets/UserImg/User3.jpg";
import User4 from "../assets/UserImg/User4.jpg";
import User5 from "../assets/UserImg/User5.png";
import User6 from "../assets/UserImg/User6.jpg"

export default function UserClickHere() {
  return (
    <div>
      <div>
        <section>
          <div className="transit">
          <img className="img1" src={User3} alt="Chef" />
          <img className="img2" src={User4} alt="Chef" />
          <img className="img3" src={User5} alt="Chef" />
          </div>
        </section>
      </div>

      <div className="btnAlign">
      <Link to="/UserSignUp">
            <button type="submit" className="button">
              Order Food
            </button>
          </Link>
      </div>
    </div>
  );
}
