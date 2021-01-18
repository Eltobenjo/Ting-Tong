import React, {useContext} from "react";
import {AppContext } from "../Context/AppContext"

const fakeDishes = [
  { id: 1, img: "", name: "pad thai", category: "thai" }, // img, allergies, price, preparationTime
  { id: 2, img: "", name: "pizza", category: "chinese" }, // img, allergies, price, preparationTime
  { id: 3, img: "", name: "water", category: "german" }, // img, allergies, price, preparationTime
  { id: 4, img: "", name: "couscous salad", category: "norwegian" }, // img, allergies, price, preparationTime
];

export default function TemporaryMenu() {
  const { setShoppingCart } = useContext(AppContext);

  const handleClick = (e) => {
      const dishInTheOrder = {
          quantity: 2,
          dishId: e.target.id
      }
    setShoppingCart((previousState) => [...previousState, dishInTheOrder]);
  };
  return (
    <div className="App">
        TEMPORARY TEST MENU
      <ul>
        {fakeDishes.map((item) => (
          <li id={item.id} onClick={handleClick}>
            {item.category} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
