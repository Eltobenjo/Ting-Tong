import React from "react";
import "./ClickHere.css";
import Chef1 from "./Chef1.jpg";
import Chef2 from "./Chef2.jpg";
import Chef3 from "./Chef3.jpg";

export default function ClickHere() {
  return (

      <div>
        <section>
          <div className="transit">
            <img className="img1" src={Chef1} alt="Chef" />
          <img className="img2" src={Chef2} alt="Chef" />
          <img className="img3" src={Chef3} alt="Chef" />
        </div>
        <div>
          <button type="submit" className="button">Register</button>
          </div>
        </section>
      </div>
     

  );
}
