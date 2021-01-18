import React, { useContext } from "react";

import { AppContext } from "../../Context/AppContext";
import "./PlaceOrder2.css"


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
    <div className="main-Container">
    <div className="box-Left">
            <h2>Your Order Selection</h2>
            
                <div className="ordering-area">
                
                    <select className="bk-quantity">
                        <option value="1">Biryani (10 Euro)</option>
                        <option value="2">Water (2 Euro)</option>
                        <option value="3">Pizza Salami Spl (7 Euro)</option>
                        <option value="4">Cosscuss Salad (6 Euro)</option>
                    </select>
                    <label className="qty-quantity">Qty</label>
                    <select className="add-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <button class="button" className="add-btn"><span>Add </span></button>
                    <div>Total Cost:</div>
                </div>
                
                <h2>Confirm your delivery details</h2>
                <div className="ordering-area-display">
       <div className="form"> 
                        <input type="text" className="form-control" placeholder="Full name" />
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="Phone number" />
                        </div>
                        <textarea placeholder="Address" className="address-control"></textarea>
                    <div>
                        <button className="order-btn"><span>Order</span></button>
</div>
              

                </div>
                    </div>

                </div>
                
    )
}


