import React, {useContext} from "react";
import {AppContext } from "../Context/AppContext"
import chefs from './data.json'



export default function MunichMenu() {
  const { setShoppingCart } = useContext(AppContext);

  const handleClick = (e) => {
      const dishInTheOrder = {
          quantity: 2,
          dishId: e.target.id
      }
    setShoppingCart((previousState) => [...previousState, dishInTheOrder]);
  };
 const munich = chefs.find((chef) => chef.location === 'Munich');

  return (
     
    <div className="App">
         MENU
         
      <ul>
       {munich.dishes.map((item)=>(
          
          <li onClick={handleClick}>
            {item} )
          </li>
       ))}
      </ul>
    </div>
  );
}

