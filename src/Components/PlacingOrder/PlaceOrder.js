import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./PlaceOrder.css";
import chefData from "../data.json";
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

  let addRemove = (id) => {
    return (
      <div className="qty-align">
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
        <button className="adding-btn">
          <span>Add </span>
        </button>
        <button className="remove-btn" id={id} onClick={removeFromShoppingCart}>
          Remove
        </button>
      </div>
    );
  };

  return (
    <div className="main-Container">
      <div className="box-Left">
        <div className="order-title">
          <h2>Review Your Order</h2>
        </div>
        {shoppingCart.map((order) => {
          const dish = dishesData.find((dish) => dish.id == order.dishId);
          console.log({ order });

          return (
            <div className="list-style">
              <div className="li-list">
                <ul className="list">
                  {" "}
                  <ol>
                    <li>
                      <h3 className="dish-name">
                        {dish.name}
                        {addRemove(order.dishId)}
                      </h3>
                      quantity: {order.quantity}
                      subtotal:€ {order.quantity * dish.price}
                    </li>
                  </ol>{" "}
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
              

        })}{" "}
        {totalPrice}
      </div>


      <div className="box-right">
        {" "}
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
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
