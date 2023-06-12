import React from 'react';
import CheckoutShipping from '../components/Checkout/CheckoutShipping';
import CheckoutPayment from '../components/Checkout/CheckoutPayment';
import '../scss/main.scss';

function Checkout() {
  return (
    <div className="checkout__wrapper">
      <div className="checkout__leftItem">
        <CheckoutShipping />
      </div>
      <div className="checkout__rightItem">
        <CheckoutPayment />
      </div>
    </div>
  );
}

export default Checkout;
