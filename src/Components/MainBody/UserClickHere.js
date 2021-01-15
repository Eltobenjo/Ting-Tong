import React from "react";
import "./UserClickHere.css";
import User1 from "./User1.jpg";
import User2 from "./User2.jpg";
import User3 from "./User3.jpg";
import User4 from "./User4.jpg";
import User5 from "./User5.png";

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
      <button type="submit" className="button">
        Order Food
      </button>
    </div>
  );
}
