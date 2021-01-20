import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import chefs from "./data.json";

export default function BerlinMenu() {
  const { setShoppingCart } = useContext(AppContext);

  const handleClick = (e) => {
    const dishInTheOrder = {
      quantity: 1,
      dishId: e.target.id,
      price: e.target.dataset.price,
    };
    setShoppingCart((previousState) => [...previousState, dishInTheOrder]);
  };
  const berlin = chefs.find((chef) => chef.location === "Berlin");

  return (
    <div className="App">
      <ul>
        {berlin.dishes.map((item) => (
          <li onClick={handleClick} id={item.id} data-price={item.price}>

            {item.name} {''} 
            €{item.price}

          </li>
        ))}
      </ul>
    </div>
  );
}
