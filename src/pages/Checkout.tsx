import React from 'react';
import '../scss/main.scss';
import ShippingInfo from '../components/Checkout/ShippingInfo';
import PaymentInfo from '../components/Checkout/PaymentInfo';

function Checkout() {
  return (
    <div className="checkout__wrapper">
      <ShippingInfo />
      <PaymentInfo />
    </div>
  );
}

export default Checkout;
