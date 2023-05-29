import React from 'react';
import '../scss/main.scss';
import ShippingInfo from '../components/Checkout/ShippingInfo';
import PaymentInfo from '../components/Checkout/PaymentInfo';

function Checkout() {
  return (
    // the main div is given with specific height and 100% width
    <div className="checkout__wrapper">
      <ShippingInfo />
      <PaymentInfo />
    </div>
  );
}

export default Checkout;
