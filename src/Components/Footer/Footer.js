import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer">
      <h3>All Rights Reserved.</h3>

      <a href="https://www.pinterest.com/">
        <img src="./img/rs1.png" alt="Pinterest" />
      </a>
      <a href="https://www.facebook.com/">
        <img src="./img/rs2.png" alt="Facebook" />
      </a>
      <a href="https://twitter.com/?lang=en">
        <img src="./img/rs3.png" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/">
        <img src="./img/rs4.png" alt="Instagram" />
      </a>
    </div>
  );
}
