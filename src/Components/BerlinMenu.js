import React, {useContext} from "react";
import {AppContext } from "../Context/AppContext"
import chefs from './data.json'



export default function BerlinMenu() {
  const { setShoppingCart } = useContext(AppContext);

  const handleClick = (e) => {
      const dishInTheOrder = {
          quantity: 2,
          dishId: e.target.id
      }
    setShoppingCart((previousState) => [...previousState, dishInTheOrder]);
  };
 const berlin = chefs.find((chef) => chef.location === 'Berlin');

  return (
     
    <div className="App">
         MENU
         
      <ul>
       {berlin.dishes.map((item)=>(
          
          <li onClick={handleClick}>
            {item} )
          </li>
       ))}
      </ul>
    </div>
  );
}

