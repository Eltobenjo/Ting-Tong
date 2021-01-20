import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./PlaceOrder.css";

import dishesData from "../dishes.json";

export default function TemporaryMenu() {
  const {
    shoppingCart,
    setShoppingCart,
    totalPrice,
    removeFromShoppingCart,
  } = useContext(AppContext);

  const handleClick = (e) => {
    console.log("dish was clicked", e.target.id);
    setShoppingCart((previousState) => [...previousState, e.target.id]);
  };

  let addRemoveButton = (id) => {
    return (
      <div className="qty-align">
        
        <button className="remove-btn" id={id} onClick={removeFromShoppingCart}>
          Remove
        </button>
      </div>
    );
  };

  return (
    <div className="main-Container">
      <div className="box-Left">
        <div className="order-title-lft">
          <h2>Review Your Order</h2>
          <hr></hr>
        </div>
       
        {shoppingCart.map((order) => {
          const dish = dishesData.find((dish) => dish.id == order.dishId);
          console.log({ order });
   
          return (
            <div className="list-style">
              <div className="li-list">
                <ul className="list">

                  
                  <ol>

                
                  

                    <li>
                      <h3 className="dish-name">
                        {dish.name} <div>Cost:€{dish.price}</div>
                        <div className="addrem-btn">
                          {addRemoveButton(order.dishId)}
                        </div>
                      </h3>

                      quantity: {order.quantity}
                      subtotal:€ {order.quantity * dish.price}
                    </li>
                  </ol>
                </ul>
              </div>
            </div>
          )        })}  Total:  €  {totalPrice}</div>
     
           <div className="box-right">             <h2>Confirm your delivery details</h2>
                <div className="ordering-area-display">
       <div className="form"> 
                        <input type="text" className="form-control" placeholder="Full name" />
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="Phone number" />
                        </div>
                        <textarea placeholder="Delivery Address" className="address-control"></textarea>
                    <div>
                        <button className="order-btn"><span>Order</span></button>
</div>
              

    
       

                      <div className="subtotal"><h4>
                      Ordered Quantity: {order.quantity}
                      Price:€ {order.quantity * dish.price}
                      </h4></div> </li>
                 <hr></hr>
                </ul>
              </div>
            </div>
          );
        })}{" "}

      </div>

      <div className="box-right">
        {" "}
        <div className="total-cost">
          <h2>Your total Cost is: € {totalPrice}</h2>
        </div>{" "}
        <h2>Confirm your delivery details</h2>
        <div className="ordering-area-display">
          <div className="form">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Phone number"
            />
          </div>
          <textarea
            placeholder="Delivery Address"
            className="address-control"
          ></textarea>
          <div>
            <Link to="/PaymentPage">
            <button className="order-btn">
              <span>Check Out</span>
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
