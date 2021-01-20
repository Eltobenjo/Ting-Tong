import React from 'react'
import "./PaymentPage.css"

import PayCC from "../assets/Payment/PayCC.png";
import PayCOD from "../assets/Payment/PayCOD.png";
import PayPal from "../assets/Payment/PayPal.png";
import PayWallet from "../assets/Payment/PayWallet.png";

function PaymentPage() {
    return (
        <div>
            <div className="payment-icons">
                <div>
                <img className="paycc" src={PayCC} alt="Chef" />
                    <h2>Pay by Credit Card</h2>
                    </div>
                <div>
                    <img className="payCOD" src={PayCOD} alt="Chef" />
                    <h2>Pay as Cash on Delivery</h2>    
                </div>
                <div>
                <img className="payPal" src={PayPal} alt="Chef" />
                <h2>Pay by PayPal</h2>    
                </div>
                <div>
                    <img className="payWallet" src={PayWallet} alt="Chef" />
                    <h2>Pay by Payment Wallet</h2>    
                </div>
            </div>

            
        </div>
    )
}

export default PaymentPage
