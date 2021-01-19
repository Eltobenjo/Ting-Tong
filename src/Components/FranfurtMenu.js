import React, {useContext} from "react";
import {AppContext } from "../Context/AppContext"
import chefs from './data.json'



export default function FrankfurtMenu() {
  const { setShoppingCart } = useContext(AppContext);

  const handleClick = (e) => {
      const dishInTheOrder = {
          quantity: 2,
          dishId: e.target.id
      }
    setShoppingCart((previousState) => [...previousState, dishInTheOrder]);
  };
 const frankfurt = chefs.find((chef) => chef.location === 'Frankfurt');

  return (
     
    <div className="App">
         MENU
         
      <ul>
       {frankfurt.dishes.map((item)=>(
          
          <li onClick={handleClick}>
            {item} )
          </li>
       ))}
      </ul>
    </div>
  );
}

