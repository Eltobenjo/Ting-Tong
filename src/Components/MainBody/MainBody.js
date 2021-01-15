import React from "react";
import "./MainBody.css";
import ClickHere2 from "./ClickHere2";
import UserClickHere2 from "./UserClickHere2";

const MainBody = () => {

  return (
    <div className="mainContainer">
      <div className="boxLeft">
        <ClickHere2 />
        <h1>Your KITCHEN, Your RULES.</h1>
        <div className="chefNote"><h2><i>'EARN MONEY'</i> from your own home kitchen</h2></div>   
      </div>
      <div className="boxRight">
        <UserClickHere2 />
        <h1>Missing HOME FOOD, not ANYMORE.</h1>
        <div className="chefNote"><h2><i>'ORDER NOW'</i> from your choise of Local Food</h2></div>   
      
      </div>
    </div>
  );
};

export default MainBody;
