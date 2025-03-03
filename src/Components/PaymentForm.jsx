import React from 'react'

const PaymentForm = ({ onPayment }) => {
    return (
      <div className="bg-white shadow-lg p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
        <button onClick={() => onPayment("UPI")} className="payment-btn">Pay via UPI</button>
        <button onClick={() => onPayment("Card")} className="payment-btn">Pay via Card</button>
        <button onClick={() => onPayment("COD")} className="payment-btn">Cash on Delivery</button>
      </div>
    );
  };

  export default PaymentForm;

