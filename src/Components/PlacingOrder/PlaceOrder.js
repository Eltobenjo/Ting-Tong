import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./PlaceOrder.css"


const fakeDishes = [
    { id: 1, img: "", name: "pad thai", category: "thai", price: 4 }, // img, allergies, price, preparationTime
    { id: 2, img: "", name: "pizza", category: "chinese", price: 4 }, // img, allergies, price, preparationTime
    { id: 3, img: "", name: "water", category: "german", price: 4 }, // img, allergies, price, preparationTime
    { id: 4, img: "", name: "couscous salad", category: "norwegian", price: 4 }, // img, allergies, price, preparationTime
  ];
  
  export default function TemporaryMenu() {
    const { shoppingCart, setShoppingCart } = useContext(AppContext);
  
    const handleClick = (e) => {
      console.log("dish was clicked", e.target.id);
      setShoppingCart((previousState) => [...previousState, e.target.id]);
    };

      return (
        <div className="box-Left">
      TEMPORARY TEST SHOPPING CART
      <ul>
        {shoppingCart.map((order) => {
          const dish = fakeDishes.find((dish) => dish.id == order.dishId);
          console.log({dish})
          return (
            <div>
              <h3>{dish.name}</h3>
              quantity: {order.quantity}
              subtotal: {order.quantity * dish.price}
            </div>
          );
        })}
      </ul>
    </div>
          
    
                
    )
}


