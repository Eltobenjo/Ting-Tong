import React from 'react'
import "./PlaceOrder.css"

function PlaceOrder() {
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

export default PlaceOrder
