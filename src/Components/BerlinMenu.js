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
    <div className="ob">
      <ul>
        {berlin.dishes.map((item) => (
          <button className="orderButton"><span>
            <li onClick={handleClick} id={item.id} data-price={item.price}>
              {item.name} {""}€{item.price}
            </li></span>
          </button>
        ))}
      </ul>
    </div>
  );
}


